module.exports = {
  flywayArgs: {
    // url: 'jdbc:postgresql://starlingvalue.cpopt0azy0yu.us-east-2.rds.amazonaws.com/mm_pre',
    url: 'jdbc:postgresql://mm-demo.cea22jn08dga.eu-central-1.rds.amazonaws.com/mm_demo?ssl=true&sslrootcert=rds-combined-ca-bundle.pem&sslmode=require',
    // url: 'jdbc:postgresql://ec2-52-212-228-71.eu-west-1.compute.amazonaws.com:5432/d3um81ot2lldbi?sslmode=require',
    schemas: 'app_public',
    locations: 'filesystem:mm-sql-migrations/',
    user: 'postgres',
    password: 'aBPosaBzg1tr#23%5',
  },
  // Use to configure environment variables used by flyway
  env: {
    JAVA_ARGS: '-Djava.util.logging.config.file=./conf/logging.properties',
  },
  version: '4.0.3', // optional, empty or missing will download the latest
  mavinPlugins: [{ // optional, use to add any plugins (ie. logging)
    groupId: 'org.slf4j',
    artifactId: 'slf4j-api',
    version: '1.7.25',
    // This can be a specifc url to download that may be different then the auto generated url.
    downloadUrl: 'https://repo1.maven.org/maven2/org/slf4j/slf4j-api/1.7.25/slf4j-api-1.7.25.jar',
  }, {
    groupId: 'org.slf4j',
    artifactId: 'slf4j-jdk14',
    version: '1.7.25'
  }],
  downloads: {
    // storageDirectory: '/var/test', // optional, the specific directory to store the flyway downloaded files. The directory must be writable by the node app process' user.
    expirationTimeInMs: -1, // optional, -1 will never check for updates, defaults to 1 day.
  }
};
