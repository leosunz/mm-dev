export class GeohashEncoder {
  /* (Geohash-specific) Base32 map */
  base32 = '0123456789bcdefghjkmnpqrstuvwxyz';

  encode(lat, lon, precision) {
    // infer precision?
    if (typeof precision === 'undefined') {
      // refine geohash until it matches precision of supplied lat/lon
      for (let p = 1; p <= 12; p++) {
        const hash = this.encode(lat, lon, p);
        const posn = this.decode(hash);
        if (posn.lat === lat && posn.lon === lon) {
          return hash;
        }
      }
      precision = 12; // set to maximum
    }

    lat = Number(lat);
    lon = Number(lon);
    precision = Number(precision);

    if (isNaN(lat) || isNaN(lon) || isNaN(precision)) {
      throw new Error('Invalid geohash');
    }

    let idx = 0; // index into base32 map
    let bit = 0; // each char holds 5 bits
    let evenBit = true;
    let geohash = '';

    let latMin = -90;
    let latMax = 90;
    let lonMin = -180;
    let lonMax = 180;

    while (geohash.length < precision) {
      if (evenBit) {
        // bisect E-W longitude
        const lonMid = (lonMin + lonMax) / 2;
        if (lon > lonMid) {
          idx = idx * 2 + 1;
          lonMin = lonMid;
        } else {
          idx = idx * 2;
          lonMax = lonMid;
        }
      } else {
        // bisect N-S latitude
        const latMid = (latMin + latMax) / 2;
        if (lat > latMid) {
          idx = idx * 2 + 1;
          latMin = latMid;
        } else {
          idx = idx * 2;
          latMax = latMid;
        }
      }
      evenBit = !evenBit;

      if (++bit === 5) {
        // 5 bits gives us a character: append it and start over
        geohash += this.base32.charAt(idx);
        bit = 0;
        idx = 0;
      }
    }

    return geohash;
  }
  decode(geohash) {
    const bounds = this.bounds(geohash); // <-- the hard work
    // now just determine the centre of the cell...

    const latMin = bounds.sw.lat;
    const lonMin = bounds.sw.lon;
    const latMax = bounds.ne.lat;
    const lonMax = bounds.ne.lon;

    // cell centre
    let lat = (latMin + latMax) / 2;
    let lon = (lonMin + lonMax) / 2;

    // round to close to centre without excessive precision: ⌊2-log10(Δ°)⌋ decimal places
    lat = Number(
      lat.toFixed(Math.floor(2 - Math.log(latMax - latMin) / Math.LN10)),
    );
    lon = Number(
      lon.toFixed(Math.floor(2 - Math.log(lonMax - lonMin) / Math.LN10)),
    );

    return { lat, lon };
  }
  bounds(geohash) {
    if (geohash.length === 0) {
      throw new Error('Invalid geohash');
    }

    geohash = geohash.toLowerCase();

    let evenBit = true;
    let latMin = -90;
    let latMax = 90;
    let lonMin = -180;
    let lonMax = 180;

    for (let i = 0; i < geohash.length; i++) {
      const chr = geohash.charAt(i);
      const idx = this.base32.indexOf(chr);
      if (idx === -1) {
        throw new Error('Invalid geohash');
      }

      for (let n = 4; n >= 0; n--) {
        // tslint:disable-next-line:no-bitwise
        const bitN = (idx >> n) & 1;
        if (evenBit) {
          // longitude
          const lonMid = (lonMin + lonMax) / 2;
          if (bitN === 1) {
            lonMin = lonMid;
          } else {
            lonMax = lonMid;
          }
        } else {
          // latitude
          const latMid = (latMin + latMax) / 2;
          if (bitN === 1) {
            latMin = latMid;
          } else {
            latMax = latMid;
          }
        }
        evenBit = !evenBit;
      }
    }

    const bounds = {
      sw: { lat: latMin, lon: lonMin },
      ne: { lat: latMax, lon: lonMax },
    };

    return bounds;
  }
  adjacent(geohash, direction) {
    // based on github.com/davetroy/geohash-js

    geohash = geohash.toLowerCase();
    direction = direction.toLowerCase();

    if (geohash.length === 0) {
      throw new Error('Invalid geohash');
    }
    if ('nsew'.indexOf(direction) === -1) {
      throw new Error('Invalid direction');
    }

    const neighbour = {
      n: [
        'p0r21436x8zb9dcf5h7kjnmqesgutwvy',
        'bc01fg45238967deuvhjyznpkmstqrwx',
      ],
      s: [
        '14365h7k9dcfesgujnmqp0r2twvyx8zb',
        '238967debc01fg45kmstqrwxuvhjyznp',
      ],
      e: [
        'bc01fg45238967deuvhjyznpkmstqrwx',
        'p0r21436x8zb9dcf5h7kjnmqesgutwvy',
      ],
      w: [
        '238967debc01fg45kmstqrwxuvhjyznp',
        '14365h7k9dcfesgujnmqp0r2twvyx8zb',
      ],
    };
    const border = {
      n: ['prxz', 'bcfguvyz'],
      s: ['028b', '0145hjnp'],
      e: ['bcfguvyz', 'prxz'],
      w: ['0145hjnp', '028b'],
    };

    const lastCh = geohash.slice(-1); // last character of hash
    let parent = geohash.slice(0, -1); // hash without last character

    const type = geohash.length % 2;

    // check for edge-cases which don't share common prefix
    if (border[direction][type].indexOf(lastCh) !== -1 && parent !== '') {
      parent = this.adjacent(parent, direction);
    }

    // append letter for direction to parent
    return (
      parent + this.base32.charAt(neighbour[direction][type].indexOf(lastCh))
    );
  }
  neighbours(geohash) {
    return {
      n: this.adjacent(geohash, 'n'),
      ne: this.adjacent(this.adjacent(geohash, 'n'), 'e'),
      e: this.adjacent(geohash, 'e'),
      se: this.adjacent(this.adjacent(geohash, 's'), 'e'),
      s: this.adjacent(geohash, 's'),
      sw: this.adjacent(this.adjacent(geohash, 's'), 'w'),
      w: this.adjacent(geohash, 'w'),
      nw: this.adjacent(this.adjacent(geohash, 'n'), 'w'),
    };
  }
}
