// tslint:disable
// graphql typescript definitions

declare namespace GQL {
  interface IGraphQLResponseRoot {
    data?: IQuery | IMutation;
    errors?: Array<IGraphQLResponseError>;
  }

  interface IGraphQLResponseError {
    /** Required for all errors */
    message: string;
    locations?: Array<IGraphQLResponseErrorLocation>;
    /** 7.2.2 says 'GraphQL servers may provide additional entries to error' */
    [propName: string]: any;
  }

  interface IGraphQLResponseErrorLocation {
    line: number;
    column: number;
  }

  /**
   * The root query type which gives access points into the data universe.
   */
  interface IQuery {
    /**
     * Exposes the root query type nested one level down. This is helpful for Relay 1 which can only query top level fields if they are in a particular form.
     */
    query: IQuery;

    /**
     * Reads and enables pagination through a set of `Booking`.
     */
    bookings: IBookingsConnection | null;

    /**
     * Reads and enables pagination through a set of `BookingJob`.
     */
    bookingJobs: IBookingJobsConnection | null;

    /**
     * Reads and enables pagination through a set of `Calendar`.
     */
    calendars: ICalendarsConnection | null;

    /**
     * Reads and enables pagination through a set of `ContactWhenGeohashAvailable`.
     */
    contactWhenGeohashAvailables: IContactWhenGeohashAvailablesConnection | null;

    /**
     * Reads and enables pagination through a set of `FlywaySchemaHistory`.
     */
    flywaySchemaHistories: IFlywaySchemaHistoriesConnection | null;

    /**
     * Reads and enables pagination through a set of `Job`.
     */
    jobs: IJobsConnection | null;

    /**
     * Reads and enables pagination through a set of `LogClientError`.
     */
    logClientErrors: ILogClientErrorsConnection | null;

    /**
     * Reads and enables pagination through a set of `Mechanic`.
     */
    mechanics: IMechanicsConnection | null;

    /**
     * Reads and enables pagination through a set of `MechanicJob`.
     */
    mechanicJobs: IMechanicJobsConnection | null;

    /**
     * Reads and enables pagination through a set of `TimeSlot`.
     */
    timeSlots: ITimeSlotsConnection | null;

    /**
     * Reads and enables pagination through a set of `VMechanicTimeSlotsNext90Day`.
     */
    vMechanicTimeSlotsNext90Days: IVMechanicTimeSlotsNext90DaysConnection | null;

    /**
     * Reads and enables pagination through a set of `WorkingTime`.
     */
    workingTimes: IWorkingTimesConnection | null;
    booking: IBooking | null;
    bookingJob: IBookingJob | null;
    calendar: ICalendar | null;
    contactWhenGeohashAvailable: IContactWhenGeohashAvailable | null;
    flywaySchemaHistory: IFlywaySchemaHistory | null;
    job: IJob | null;
    logClientError: ILogClientError | null;
    mechanic: IMechanic | null;
    mechanicJob: IMechanicJob | null;
    timeSlot: ITimeSlot | null;
    vMechanicTimeSlotsNext90Day: IVMechanicTimeSlotsNext90Day | null;
    workingTime: IWorkingTime | null;

    /**
     * Reads and enables pagination through a set of `AvailableMechanic`.
     */
    getAvailableMechanics: IAvailableMechanicsConnection;
    getTimeLeft: number | null;
    getTotalTimeAssignment: number | null;
    isGeohashAvailable: boolean | null;
  }

  interface IBookingsOnQueryArguments {
    /**
     * Only read the first `n` values of the set.
     */
    first?: number | null;

    /**
     * Only read the last `n` values of the set.
     */
    last?: number | null;

    /**
     * Skip the first `n` values from our `after` cursor, an alternative to cursor based pagination. May not be used with `last`.
     */
    offset?: number | null;

    /**
     * Read all values in the set before (above) this cursor.
     */
    before?: any | null;

    /**
     * Read all values in the set after (below) this cursor.
     */
    after?: any | null;

    /**
     * The method to use when ordering `Booking`.
     * @default ["PRIMARY_KEY_ASC"]
     */
    orderBy?: Array<BookingsOrderBy> | null;

    /**
     * A condition to be used in determining which values should be returned by the collection.
     */
    condition?: IBookingCondition | null;

    /**
     * A filter to be used in determining which values should be returned by the collection.
     */
    filter?: IBookingFilter | null;
  }

  interface IBookingJobsOnQueryArguments {
    /**
     * Only read the first `n` values of the set.
     */
    first?: number | null;

    /**
     * Only read the last `n` values of the set.
     */
    last?: number | null;

    /**
     * Skip the first `n` values from our `after` cursor, an alternative to cursor based pagination. May not be used with `last`.
     */
    offset?: number | null;

    /**
     * Read all values in the set before (above) this cursor.
     */
    before?: any | null;

    /**
     * Read all values in the set after (below) this cursor.
     */
    after?: any | null;

    /**
     * The method to use when ordering `BookingJob`.
     * @default ["PRIMARY_KEY_ASC"]
     */
    orderBy?: Array<BookingJobsOrderBy> | null;

    /**
     * A condition to be used in determining which values should be returned by the collection.
     */
    condition?: IBookingJobCondition | null;

    /**
     * A filter to be used in determining which values should be returned by the collection.
     */
    filter?: IBookingJobFilter | null;
  }

  interface ICalendarsOnQueryArguments {
    /**
     * Only read the first `n` values of the set.
     */
    first?: number | null;

    /**
     * Only read the last `n` values of the set.
     */
    last?: number | null;

    /**
     * Skip the first `n` values from our `after` cursor, an alternative to cursor based pagination. May not be used with `last`.
     */
    offset?: number | null;

    /**
     * Read all values in the set before (above) this cursor.
     */
    before?: any | null;

    /**
     * Read all values in the set after (below) this cursor.
     */
    after?: any | null;

    /**
     * The method to use when ordering `Calendar`.
     * @default ["PRIMARY_KEY_ASC"]
     */
    orderBy?: Array<CalendarsOrderBy> | null;

    /**
     * A condition to be used in determining which values should be returned by the collection.
     */
    condition?: ICalendarCondition | null;

    /**
     * A filter to be used in determining which values should be returned by the collection.
     */
    filter?: ICalendarFilter | null;
  }

  interface IContactWhenGeohashAvailablesOnQueryArguments {
    /**
     * Only read the first `n` values of the set.
     */
    first?: number | null;

    /**
     * Only read the last `n` values of the set.
     */
    last?: number | null;

    /**
     * Skip the first `n` values from our `after` cursor, an alternative to cursor based pagination. May not be used with `last`.
     */
    offset?: number | null;

    /**
     * Read all values in the set before (above) this cursor.
     */
    before?: any | null;

    /**
     * Read all values in the set after (below) this cursor.
     */
    after?: any | null;

    /**
     * The method to use when ordering `ContactWhenGeohashAvailable`.
     * @default ["PRIMARY_KEY_ASC"]
     */
    orderBy?: Array<ContactWhenGeohashAvailablesOrderBy> | null;

    /**
     * A condition to be used in determining which values should be returned by the collection.
     */
    condition?: IContactWhenGeohashAvailableCondition | null;

    /**
     * A filter to be used in determining which values should be returned by the collection.
     */
    filter?: IContactWhenGeohashAvailableFilter | null;
  }

  interface IFlywaySchemaHistoriesOnQueryArguments {
    /**
     * Only read the first `n` values of the set.
     */
    first?: number | null;

    /**
     * Only read the last `n` values of the set.
     */
    last?: number | null;

    /**
     * Skip the first `n` values from our `after` cursor, an alternative to cursor based pagination. May not be used with `last`.
     */
    offset?: number | null;

    /**
     * Read all values in the set before (above) this cursor.
     */
    before?: any | null;

    /**
     * Read all values in the set after (below) this cursor.
     */
    after?: any | null;

    /**
     * The method to use when ordering `FlywaySchemaHistory`.
     * @default ["PRIMARY_KEY_ASC"]
     */
    orderBy?: Array<FlywaySchemaHistoriesOrderBy> | null;

    /**
     * A condition to be used in determining which values should be returned by the collection.
     */
    condition?: IFlywaySchemaHistoryCondition | null;

    /**
     * A filter to be used in determining which values should be returned by the collection.
     */
    filter?: IFlywaySchemaHistoryFilter | null;
  }

  interface IJobsOnQueryArguments {
    /**
     * Only read the first `n` values of the set.
     */
    first?: number | null;

    /**
     * Only read the last `n` values of the set.
     */
    last?: number | null;

    /**
     * Skip the first `n` values from our `after` cursor, an alternative to cursor based pagination. May not be used with `last`.
     */
    offset?: number | null;

    /**
     * Read all values in the set before (above) this cursor.
     */
    before?: any | null;

    /**
     * Read all values in the set after (below) this cursor.
     */
    after?: any | null;

    /**
     * The method to use when ordering `Job`.
     * @default ["PRIMARY_KEY_ASC"]
     */
    orderBy?: Array<JobsOrderBy> | null;

    /**
     * A condition to be used in determining which values should be returned by the collection.
     */
    condition?: IJobCondition | null;

    /**
     * A filter to be used in determining which values should be returned by the collection.
     */
    filter?: IJobFilter | null;
  }

  interface ILogClientErrorsOnQueryArguments {
    /**
     * Only read the first `n` values of the set.
     */
    first?: number | null;

    /**
     * Only read the last `n` values of the set.
     */
    last?: number | null;

    /**
     * Skip the first `n` values from our `after` cursor, an alternative to cursor based pagination. May not be used with `last`.
     */
    offset?: number | null;

    /**
     * Read all values in the set before (above) this cursor.
     */
    before?: any | null;

    /**
     * Read all values in the set after (below) this cursor.
     */
    after?: any | null;

    /**
     * The method to use when ordering `LogClientError`.
     * @default ["PRIMARY_KEY_ASC"]
     */
    orderBy?: Array<LogClientErrorsOrderBy> | null;

    /**
     * A condition to be used in determining which values should be returned by the collection.
     */
    condition?: ILogClientErrorCondition | null;

    /**
     * A filter to be used in determining which values should be returned by the collection.
     */
    filter?: ILogClientErrorFilter | null;
  }

  interface IMechanicsOnQueryArguments {
    /**
     * Only read the first `n` values of the set.
     */
    first?: number | null;

    /**
     * Only read the last `n` values of the set.
     */
    last?: number | null;

    /**
     * Skip the first `n` values from our `after` cursor, an alternative to cursor based pagination. May not be used with `last`.
     */
    offset?: number | null;

    /**
     * Read all values in the set before (above) this cursor.
     */
    before?: any | null;

    /**
     * Read all values in the set after (below) this cursor.
     */
    after?: any | null;

    /**
     * The method to use when ordering `Mechanic`.
     * @default ["PRIMARY_KEY_ASC"]
     */
    orderBy?: Array<MechanicsOrderBy> | null;

    /**
     * A condition to be used in determining which values should be returned by the collection.
     */
    condition?: IMechanicCondition | null;

    /**
     * A filter to be used in determining which values should be returned by the collection.
     */
    filter?: IMechanicFilter | null;
  }

  interface IMechanicJobsOnQueryArguments {
    /**
     * Only read the first `n` values of the set.
     */
    first?: number | null;

    /**
     * Only read the last `n` values of the set.
     */
    last?: number | null;

    /**
     * Skip the first `n` values from our `after` cursor, an alternative to cursor based pagination. May not be used with `last`.
     */
    offset?: number | null;

    /**
     * Read all values in the set before (above) this cursor.
     */
    before?: any | null;

    /**
     * Read all values in the set after (below) this cursor.
     */
    after?: any | null;

    /**
     * The method to use when ordering `MechanicJob`.
     * @default ["PRIMARY_KEY_ASC"]
     */
    orderBy?: Array<MechanicJobsOrderBy> | null;

    /**
     * A condition to be used in determining which values should be returned by the collection.
     */
    condition?: IMechanicJobCondition | null;

    /**
     * A filter to be used in determining which values should be returned by the collection.
     */
    filter?: IMechanicJobFilter | null;
  }

  interface ITimeSlotsOnQueryArguments {
    /**
     * Only read the first `n` values of the set.
     */
    first?: number | null;

    /**
     * Only read the last `n` values of the set.
     */
    last?: number | null;

    /**
     * Skip the first `n` values from our `after` cursor, an alternative to cursor based pagination. May not be used with `last`.
     */
    offset?: number | null;

    /**
     * Read all values in the set before (above) this cursor.
     */
    before?: any | null;

    /**
     * Read all values in the set after (below) this cursor.
     */
    after?: any | null;

    /**
     * The method to use when ordering `TimeSlot`.
     * @default ["PRIMARY_KEY_ASC"]
     */
    orderBy?: Array<TimeSlotsOrderBy> | null;

    /**
     * A condition to be used in determining which values should be returned by the collection.
     */
    condition?: ITimeSlotCondition | null;

    /**
     * A filter to be used in determining which values should be returned by the collection.
     */
    filter?: ITimeSlotFilter | null;
  }

  interface IVMechanicTimeSlotsNext90DaysOnQueryArguments {
    /**
     * Only read the first `n` values of the set.
     */
    first?: number | null;

    /**
     * Only read the last `n` values of the set.
     */
    last?: number | null;

    /**
     * Skip the first `n` values from our `after` cursor, an alternative to cursor based pagination. May not be used with `last`.
     */
    offset?: number | null;

    /**
     * Read all values in the set before (above) this cursor.
     */
    before?: any | null;

    /**
     * Read all values in the set after (below) this cursor.
     */
    after?: any | null;

    /**
     * The method to use when ordering `VMechanicTimeSlotsNext90Day`.
     * @default ["PRIMARY_KEY_ASC"]
     */
    orderBy?: Array<VMechanicTimeSlotsNext90DaysOrderBy> | null;
  }

  interface IWorkingTimesOnQueryArguments {
    /**
     * Only read the first `n` values of the set.
     */
    first?: number | null;

    /**
     * Only read the last `n` values of the set.
     */
    last?: number | null;

    /**
     * Skip the first `n` values from our `after` cursor, an alternative to cursor based pagination. May not be used with `last`.
     */
    offset?: number | null;

    /**
     * Read all values in the set before (above) this cursor.
     */
    before?: any | null;

    /**
     * Read all values in the set after (below) this cursor.
     */
    after?: any | null;

    /**
     * The method to use when ordering `WorkingTime`.
     * @default ["PRIMARY_KEY_ASC"]
     */
    orderBy?: Array<WorkingTimesOrderBy> | null;

    /**
     * A condition to be used in determining which values should be returned by the collection.
     */
    condition?: IWorkingTimeCondition | null;

    /**
     * A filter to be used in determining which values should be returned by the collection.
     */
    filter?: IWorkingTimeFilter | null;
  }

  interface IBookingOnQueryArguments {
    id: any;
  }

  interface IBookingJobOnQueryArguments {
    id: any;
  }

  interface ICalendarOnQueryArguments {
    dateDimId: number;
  }

  interface IContactWhenGeohashAvailableOnQueryArguments {
    id: any;
  }

  interface IFlywaySchemaHistoryOnQueryArguments {
    installedRank: number;
  }

  interface IJobOnQueryArguments {
    id: any;
  }

  interface ILogClientErrorOnQueryArguments {
    id: number;
  }

  interface IMechanicOnQueryArguments {
    id: any;
  }

  interface IMechanicJobOnQueryArguments {
    id: any;
  }

  interface ITimeSlotOnQueryArguments {
    id: string;
  }

  interface IVMechanicTimeSlotsNext90DayOnQueryArguments {
    mechanicId: any;
    timeSlotId: string;
  }

  interface IWorkingTimeOnQueryArguments {
    mechanicId: any;
    timeSlotId: string;
  }

  interface IGetAvailableMechanicsOnQueryArguments {
    fromTime?: any | null;
    toTime?: any | null;
    geohash?: string | null;
    jobIds?: Array<any | null> | null;

    /**
     * Only read the first `n` values of the set.
     */
    first?: number | null;

    /**
     * Only read the last `n` values of the set.
     */
    last?: number | null;

    /**
     * Skip the first `n` values from our `after` cursor, an alternative to cursor based pagination. May not be used with `last`.
     */
    offset?: number | null;

    /**
     * Read all values in the set before (above) this cursor.
     */
    before?: any | null;

    /**
     * Read all values in the set after (below) this cursor.
     */
    after?: any | null;
  }

  interface IGetTimeLeftOnQueryArguments {
    mechanicId?: any | null;
    timeSlotId?: string | null;
  }

  interface IGetTotalTimeAssignmentOnQueryArguments {
    mechanicId?: any | null;
    jobIds?: Array<any | null> | null;
  }

  interface IIsGeohashAvailableOnQueryArguments {
    geohash?: string | null;
  }

  /**
   * Methods to use when ordering `Booking`.
   */
  const enum BookingsOrderBy {
    NATURAL = 'NATURAL',
    ID_ASC = 'ID_ASC',
    ID_DESC = 'ID_DESC',
    MECHANIC_ID_ASC = 'MECHANIC_ID_ASC',
    MECHANIC_ID_DESC = 'MECHANIC_ID_DESC',
    TIME_SLOT_ID_ASC = 'TIME_SLOT_ID_ASC',
    TIME_SLOT_ID_DESC = 'TIME_SLOT_ID_DESC',
    STATUS_ASC = 'STATUS_ASC',
    STATUS_DESC = 'STATUS_DESC',
    CREATED_AT_ASC = 'CREATED_AT_ASC',
    CREATED_AT_DESC = 'CREATED_AT_DESC',
    PRIMARY_KEY_ASC = 'PRIMARY_KEY_ASC',
    PRIMARY_KEY_DESC = 'PRIMARY_KEY_DESC'
  }

  /**
   * A condition to be used against `Booking` object types. All fields are tested for equality and combined with a logical ‘and.’
   */
  interface IBookingCondition {
    /**
     * Checks for equality with the object’s `id` field.
     */
    id?: any | null;

    /**
     * Checks for equality with the object’s `mechanicId` field.
     */
    mechanicId?: any | null;

    /**
     * Checks for equality with the object’s `timeSlotId` field.
     */
    timeSlotId?: string | null;

    /**
     * Checks for equality with the object’s `status` field.
     */
    status?: BookingStatus | null;

    /**
     * Checks for equality with the object’s `createdAt` field.
     */
    createdAt?: any | null;
  }

  const enum BookingStatus {
    RESERVED = 'RESERVED',
    CONFIRMED = 'CONFIRMED'
  }

  /**
   * A filter to be used against `Booking` object types. All fields are combined with a logical ‘and.’
   */
  interface IBookingFilter {
    /**
     * Filter by the object’s `id` field.
     */
    id?: IUUIDFilter | null;

    /**
     * Filter by the object’s `mechanicId` field.
     */
    mechanicId?: IUUIDFilter | null;

    /**
     * Filter by the object’s `timeSlotId` field.
     */
    timeSlotId?: IStringFilter | null;

    /**
     * Filter by the object’s `status` field.
     */
    status?: IBookingStatusFilter | null;

    /**
     * Filter by the object’s `createdAt` field.
     */
    createdAt?: IDatetimeFilter | null;

    /**
     * Checks for all expressions in this list.
     */
    and?: Array<IBookingFilter> | null;

    /**
     * Checks for any expressions in this list.
     */
    or?: Array<IBookingFilter> | null;

    /**
     * Negates the expression.
     */
    not?: IBookingFilter | null;
  }

  /**
   * A filter to be used against UUID fields. All fields are combined with a logical ‘and.’
   */
  interface IUUIDFilter {
    /**
     * Is null (if `true` is specified) or is not null (if `false` is specified).
     */
    isNull?: boolean | null;

    /**
     * Equal to the specified value.
     */
    equalTo?: any | null;

    /**
     * Not equal to the specified value.
     */
    notEqualTo?: any | null;

    /**
     * Not equal to the specified value, treating null like an ordinary value.
     */
    distinctFrom?: any | null;

    /**
     * Equal to the specified value, treating null like an ordinary value.
     */
    notDistinctFrom?: any | null;

    /**
     * Included in the specified list.
     */
    in?: Array<any> | null;

    /**
     * Not included in the specified list.
     */
    notIn?: Array<any> | null;

    /**
     * Less than the specified value.
     */
    lessThan?: any | null;

    /**
     * Less than or equal to the specified value.
     */
    lessThanOrEqualTo?: any | null;

    /**
     * Greater than the specified value.
     */
    greaterThan?: any | null;

    /**
     * Greater than or equal to the specified value.
     */
    greaterThanOrEqualTo?: any | null;
  }

  /**
   * A filter to be used against String fields. All fields are combined with a logical ‘and.’
   */
  interface IStringFilter {
    /**
     * Is null (if `true` is specified) or is not null (if `false` is specified).
     */
    isNull?: boolean | null;

    /**
     * Equal to the specified value.
     */
    equalTo?: string | null;

    /**
     * Not equal to the specified value.
     */
    notEqualTo?: string | null;

    /**
     * Not equal to the specified value, treating null like an ordinary value.
     */
    distinctFrom?: string | null;

    /**
     * Equal to the specified value, treating null like an ordinary value.
     */
    notDistinctFrom?: string | null;

    /**
     * Included in the specified list.
     */
    in?: Array<string> | null;

    /**
     * Not included in the specified list.
     */
    notIn?: Array<string> | null;

    /**
     * Less than the specified value.
     */
    lessThan?: string | null;

    /**
     * Less than or equal to the specified value.
     */
    lessThanOrEqualTo?: string | null;

    /**
     * Greater than the specified value.
     */
    greaterThan?: string | null;

    /**
     * Greater than or equal to the specified value.
     */
    greaterThanOrEqualTo?: string | null;

    /**
     * Contains the specified string (case-sensitive).
     */
    includes?: string | null;

    /**
     * Does not contain the specified string (case-sensitive).
     */
    notIncludes?: string | null;

    /**
     * Contains the specified string (case-insensitive).
     */
    includesInsensitive?: string | null;

    /**
     * Does not contain the specified string (case-insensitive).
     */
    notIncludesInsensitive?: string | null;

    /**
     * Starts with the specified string (case-sensitive).
     */
    startsWith?: string | null;

    /**
     * Does not start with the specified string (case-sensitive).
     */
    notStartsWith?: string | null;

    /**
     * Starts with the specified string (case-insensitive).
     */
    startsWithInsensitive?: string | null;

    /**
     * Does not start with the specified string (case-insensitive).
     */
    notStartsWithInsensitive?: string | null;

    /**
     * Ends with the specified string (case-sensitive).
     */
    endsWith?: string | null;

    /**
     * Does not end with the specified string (case-sensitive).
     */
    notEndsWith?: string | null;

    /**
     * Ends with the specified string (case-insensitive).
     */
    endsWithInsensitive?: string | null;

    /**
     * Does not end with the specified string (case-insensitive).
     */
    notEndsWithInsensitive?: string | null;

    /**
     * Matches the specified pattern (case-sensitive). An underscore (_) matches any single character; a percent sign (%) matches any sequence of zero or more characters.
     */
    like?: string | null;

    /**
     * Does not match the specified pattern (case-sensitive). An underscore (_) matches any single character; a percent sign (%) matches any sequence of zero or more characters.
     */
    notLike?: string | null;

    /**
     * Matches the specified pattern (case-insensitive). An underscore (_) matches any single character; a percent sign (%) matches any sequence of zero or more characters.
     */
    likeInsensitive?: string | null;

    /**
     * Does not match the specified pattern (case-insensitive). An underscore (_) matches any single character; a percent sign (%) matches any sequence of zero or more characters.
     */
    notLikeInsensitive?: string | null;

    /**
     * Matches the specified pattern using the SQL standard's definition of a regular expression.
     */
    similarTo?: string | null;

    /**
     * Does not match the specified pattern using the SQL standard's definition of a regular expression.
     */
    notSimilarTo?: string | null;
  }

  /**
   * A filter to be used against BookingStatus fields. All fields are combined with a logical ‘and.’
   */
  interface IBookingStatusFilter {
    /**
     * Is null (if `true` is specified) or is not null (if `false` is specified).
     */
    isNull?: boolean | null;

    /**
     * Equal to the specified value.
     */
    equalTo?: BookingStatus | null;

    /**
     * Not equal to the specified value.
     */
    notEqualTo?: BookingStatus | null;

    /**
     * Not equal to the specified value, treating null like an ordinary value.
     */
    distinctFrom?: BookingStatus | null;

    /**
     * Equal to the specified value, treating null like an ordinary value.
     */
    notDistinctFrom?: BookingStatus | null;

    /**
     * Included in the specified list.
     */
    in?: Array<BookingStatus> | null;

    /**
     * Not included in the specified list.
     */
    notIn?: Array<BookingStatus> | null;

    /**
     * Less than the specified value.
     */
    lessThan?: BookingStatus | null;

    /**
     * Less than or equal to the specified value.
     */
    lessThanOrEqualTo?: BookingStatus | null;

    /**
     * Greater than the specified value.
     */
    greaterThan?: BookingStatus | null;

    /**
     * Greater than or equal to the specified value.
     */
    greaterThanOrEqualTo?: BookingStatus | null;
  }

  /**
   * A filter to be used against Datetime fields. All fields are combined with a logical ‘and.’
   */
  interface IDatetimeFilter {
    /**
     * Is null (if `true` is specified) or is not null (if `false` is specified).
     */
    isNull?: boolean | null;

    /**
     * Equal to the specified value.
     */
    equalTo?: any | null;

    /**
     * Not equal to the specified value.
     */
    notEqualTo?: any | null;

    /**
     * Not equal to the specified value, treating null like an ordinary value.
     */
    distinctFrom?: any | null;

    /**
     * Equal to the specified value, treating null like an ordinary value.
     */
    notDistinctFrom?: any | null;

    /**
     * Included in the specified list.
     */
    in?: Array<any> | null;

    /**
     * Not included in the specified list.
     */
    notIn?: Array<any> | null;

    /**
     * Less than the specified value.
     */
    lessThan?: any | null;

    /**
     * Less than or equal to the specified value.
     */
    lessThanOrEqualTo?: any | null;

    /**
     * Greater than the specified value.
     */
    greaterThan?: any | null;

    /**
     * Greater than or equal to the specified value.
     */
    greaterThanOrEqualTo?: any | null;
  }

  /**
   * A connection to a list of `Booking` values.
   */
  interface IBookingsConnection {
    /**
     * A list of `Booking` objects.
     */
    nodes: Array<IBooking>;

    /**
     * A list of edges which contains the `Booking` and cursor to aid in pagination.
     */
    edges: Array<IBookingsEdge>;

    /**
     * Information to aid in pagination.
     */
    pageInfo: IPageInfo;

    /**
     * The count of *all* `Booking` you could get from the connection.
     */
    totalCount: number;
  }

  interface IBooking {
    id: any;
    mechanicId: any | null;
    timeSlotId: string;
    status: BookingStatus;
    longitude: number;
    latitude: number;
    jobCompletedAt: any | null;
    paidAt: any | null;
    createdAt: any;
    jobStartedAt: any | null;
    address: string | null;
    phone: string | null;
    email: string | null;
    carRegistrationNumber: string | null;
    durationMinutes: number;

    /**
     * Reads a single `Mechanic` that is related to this `Booking`.
     */
    mechanic: IMechanic | null;

    /**
     * Reads a single `TimeSlot` that is related to this `Booking`.
     */
    timeSlot: ITimeSlot | null;

    /**
     * Reads and enables pagination through a set of `BookingJob`.
     */
    bookingJobs: IBookingJobsConnection;
  }

  interface IBookingJobsOnBookingArguments {
    /**
     * Only read the first `n` values of the set.
     */
    first?: number | null;

    /**
     * Only read the last `n` values of the set.
     */
    last?: number | null;

    /**
     * Skip the first `n` values from our `after` cursor, an alternative to cursor based pagination. May not be used with `last`.
     */
    offset?: number | null;

    /**
     * Read all values in the set before (above) this cursor.
     */
    before?: any | null;

    /**
     * Read all values in the set after (below) this cursor.
     */
    after?: any | null;

    /**
     * The method to use when ordering `BookingJob`.
     * @default ["PRIMARY_KEY_ASC"]
     */
    orderBy?: Array<BookingJobsOrderBy> | null;

    /**
     * A condition to be used in determining which values should be returned by the collection.
     */
    condition?: IBookingJobCondition | null;

    /**
     * A filter to be used in determining which values should be returned by the collection.
     */
    filter?: IBookingJobFilter | null;
  }

  interface IMechanic {
    id: any;
    fullName: string;
    rating: number | null;
    createdAt: any | null;
    geohashes: Array<string | null>;
    travelTimeMinutes: number | null;
    pictureUrl: string | null;
    email: string | null;
    phone: string | null;
    address: string | null;

    /**
     * Reads and enables pagination through a set of `MechanicJob`.
     */
    mechanicJobs: IMechanicJobsConnection;

    /**
     * Reads and enables pagination through a set of `WorkingTime`.
     */
    workingTimes: IWorkingTimesConnection;

    /**
     * Reads and enables pagination through a set of `Booking`.
     */
    bookings: IBookingsConnection;

    /**
     * Reads and enables pagination through a set of `VMechanicTimeSlotsNext90Day`.
     */
    vMechanicTimeSlotsNext90Days: IVMechanicTimeSlotsNext90DaysConnection;
  }

  interface IMechanicJobsOnMechanicArguments {
    /**
     * Only read the first `n` values of the set.
     */
    first?: number | null;

    /**
     * Only read the last `n` values of the set.
     */
    last?: number | null;

    /**
     * Skip the first `n` values from our `after` cursor, an alternative to cursor based pagination. May not be used with `last`.
     */
    offset?: number | null;

    /**
     * Read all values in the set before (above) this cursor.
     */
    before?: any | null;

    /**
     * Read all values in the set after (below) this cursor.
     */
    after?: any | null;

    /**
     * The method to use when ordering `MechanicJob`.
     * @default ["PRIMARY_KEY_ASC"]
     */
    orderBy?: Array<MechanicJobsOrderBy> | null;

    /**
     * A condition to be used in determining which values should be returned by the collection.
     */
    condition?: IMechanicJobCondition | null;

    /**
     * A filter to be used in determining which values should be returned by the collection.
     */
    filter?: IMechanicJobFilter | null;
  }

  interface IWorkingTimesOnMechanicArguments {
    /**
     * Only read the first `n` values of the set.
     */
    first?: number | null;

    /**
     * Only read the last `n` values of the set.
     */
    last?: number | null;

    /**
     * Skip the first `n` values from our `after` cursor, an alternative to cursor based pagination. May not be used with `last`.
     */
    offset?: number | null;

    /**
     * Read all values in the set before (above) this cursor.
     */
    before?: any | null;

    /**
     * Read all values in the set after (below) this cursor.
     */
    after?: any | null;

    /**
     * The method to use when ordering `WorkingTime`.
     * @default ["PRIMARY_KEY_ASC"]
     */
    orderBy?: Array<WorkingTimesOrderBy> | null;

    /**
     * A condition to be used in determining which values should be returned by the collection.
     */
    condition?: IWorkingTimeCondition | null;

    /**
     * A filter to be used in determining which values should be returned by the collection.
     */
    filter?: IWorkingTimeFilter | null;
  }

  interface IBookingsOnMechanicArguments {
    /**
     * Only read the first `n` values of the set.
     */
    first?: number | null;

    /**
     * Only read the last `n` values of the set.
     */
    last?: number | null;

    /**
     * Skip the first `n` values from our `after` cursor, an alternative to cursor based pagination. May not be used with `last`.
     */
    offset?: number | null;

    /**
     * Read all values in the set before (above) this cursor.
     */
    before?: any | null;

    /**
     * Read all values in the set after (below) this cursor.
     */
    after?: any | null;

    /**
     * The method to use when ordering `Booking`.
     * @default ["PRIMARY_KEY_ASC"]
     */
    orderBy?: Array<BookingsOrderBy> | null;

    /**
     * A condition to be used in determining which values should be returned by the collection.
     */
    condition?: IBookingCondition | null;

    /**
     * A filter to be used in determining which values should be returned by the collection.
     */
    filter?: IBookingFilter | null;
  }

  interface IVMechanicTimeSlotsNext90DaysOnMechanicArguments {
    /**
     * Only read the first `n` values of the set.
     */
    first?: number | null;

    /**
     * Only read the last `n` values of the set.
     */
    last?: number | null;

    /**
     * Skip the first `n` values from our `after` cursor, an alternative to cursor based pagination. May not be used with `last`.
     */
    offset?: number | null;

    /**
     * Read all values in the set before (above) this cursor.
     */
    before?: any | null;

    /**
     * Read all values in the set after (below) this cursor.
     */
    after?: any | null;

    /**
     * The method to use when ordering `VMechanicTimeSlotsNext90Day`.
     * @default ["PRIMARY_KEY_ASC"]
     */
    orderBy?: Array<VMechanicTimeSlotsNext90DaysOrderBy> | null;
  }

  /**
   * Methods to use when ordering `MechanicJob`.
   */
  const enum MechanicJobsOrderBy {
    NATURAL = 'NATURAL',
    ID_ASC = 'ID_ASC',
    ID_DESC = 'ID_DESC',
    MECHANIC_ID_ASC = 'MECHANIC_ID_ASC',
    MECHANIC_ID_DESC = 'MECHANIC_ID_DESC',
    JOB_ID_ASC = 'JOB_ID_ASC',
    JOB_ID_DESC = 'JOB_ID_DESC',
    PRIMARY_KEY_ASC = 'PRIMARY_KEY_ASC',
    PRIMARY_KEY_DESC = 'PRIMARY_KEY_DESC'
  }

  /**
   * A condition to be used against `MechanicJob` object types. All fields are tested for equality and combined with a logical ‘and.’
   */
  interface IMechanicJobCondition {
    /**
     * Checks for equality with the object’s `id` field.
     */
    id?: any | null;

    /**
     * Checks for equality with the object’s `mechanicId` field.
     */
    mechanicId?: any | null;

    /**
     * Checks for equality with the object’s `jobId` field.
     */
    jobId?: any | null;
  }

  /**
   * A filter to be used against `MechanicJob` object types. All fields are combined with a logical ‘and.’
   */
  interface IMechanicJobFilter {
    /**
     * Filter by the object’s `id` field.
     */
    id?: IUUIDFilter | null;

    /**
     * Filter by the object’s `mechanicId` field.
     */
    mechanicId?: IUUIDFilter | null;

    /**
     * Filter by the object’s `jobId` field.
     */
    jobId?: IUUIDFilter | null;

    /**
     * Checks for all expressions in this list.
     */
    and?: Array<IMechanicJobFilter> | null;

    /**
     * Checks for any expressions in this list.
     */
    or?: Array<IMechanicJobFilter> | null;

    /**
     * Negates the expression.
     */
    not?: IMechanicJobFilter | null;
  }

  /**
   * A connection to a list of `MechanicJob` values.
   */
  interface IMechanicJobsConnection {
    /**
     * A list of `MechanicJob` objects.
     */
    nodes: Array<IMechanicJob>;

    /**
     * A list of edges which contains the `MechanicJob` and cursor to aid in pagination.
     */
    edges: Array<IMechanicJobsEdge>;

    /**
     * Information to aid in pagination.
     */
    pageInfo: IPageInfo;

    /**
     * The count of *all* `MechanicJob` you could get from the connection.
     */
    totalCount: number;
  }

  interface IMechanicJob {
    id: any;
    mechanicId: any | null;
    jobId: any | null;

    /**
     * Reads a single `Mechanic` that is related to this `MechanicJob`.
     */
    mechanic: IMechanic | null;

    /**
     * Reads a single `Job` that is related to this `MechanicJob`.
     */
    job: IJob | null;
  }

  interface IJob {
    id: any;
    description: string;
    minutesToComplete: number;
    createdAt: any | null;
    price: number;

    /**
     * Reads and enables pagination through a set of `MechanicJob`.
     */
    mechanicJobs: IMechanicJobsConnection;

    /**
     * Reads and enables pagination through a set of `BookingJob`.
     */
    bookingJobs: IBookingJobsConnection;
  }

  interface IMechanicJobsOnJobArguments {
    /**
     * Only read the first `n` values of the set.
     */
    first?: number | null;

    /**
     * Only read the last `n` values of the set.
     */
    last?: number | null;

    /**
     * Skip the first `n` values from our `after` cursor, an alternative to cursor based pagination. May not be used with `last`.
     */
    offset?: number | null;

    /**
     * Read all values in the set before (above) this cursor.
     */
    before?: any | null;

    /**
     * Read all values in the set after (below) this cursor.
     */
    after?: any | null;

    /**
     * The method to use when ordering `MechanicJob`.
     * @default ["PRIMARY_KEY_ASC"]
     */
    orderBy?: Array<MechanicJobsOrderBy> | null;

    /**
     * A condition to be used in determining which values should be returned by the collection.
     */
    condition?: IMechanicJobCondition | null;

    /**
     * A filter to be used in determining which values should be returned by the collection.
     */
    filter?: IMechanicJobFilter | null;
  }

  interface IBookingJobsOnJobArguments {
    /**
     * Only read the first `n` values of the set.
     */
    first?: number | null;

    /**
     * Only read the last `n` values of the set.
     */
    last?: number | null;

    /**
     * Skip the first `n` values from our `after` cursor, an alternative to cursor based pagination. May not be used with `last`.
     */
    offset?: number | null;

    /**
     * Read all values in the set before (above) this cursor.
     */
    before?: any | null;

    /**
     * Read all values in the set after (below) this cursor.
     */
    after?: any | null;

    /**
     * The method to use when ordering `BookingJob`.
     * @default ["PRIMARY_KEY_ASC"]
     */
    orderBy?: Array<BookingJobsOrderBy> | null;

    /**
     * A condition to be used in determining which values should be returned by the collection.
     */
    condition?: IBookingJobCondition | null;

    /**
     * A filter to be used in determining which values should be returned by the collection.
     */
    filter?: IBookingJobFilter | null;
  }

  /**
   * Methods to use when ordering `BookingJob`.
   */
  const enum BookingJobsOrderBy {
    NATURAL = 'NATURAL',
    ID_ASC = 'ID_ASC',
    ID_DESC = 'ID_DESC',
    BOOKING_ID_ASC = 'BOOKING_ID_ASC',
    BOOKING_ID_DESC = 'BOOKING_ID_DESC',
    JOB_ID_ASC = 'JOB_ID_ASC',
    JOB_ID_DESC = 'JOB_ID_DESC',
    PRIMARY_KEY_ASC = 'PRIMARY_KEY_ASC',
    PRIMARY_KEY_DESC = 'PRIMARY_KEY_DESC'
  }

  /**
   * A condition to be used against `BookingJob` object types. All fields are tested for equality and combined with a logical ‘and.’
   */
  interface IBookingJobCondition {
    /**
     * Checks for equality with the object’s `id` field.
     */
    id?: any | null;

    /**
     * Checks for equality with the object’s `bookingId` field.
     */
    bookingId?: any | null;

    /**
     * Checks for equality with the object’s `jobId` field.
     */
    jobId?: any | null;
  }

  /**
   * A filter to be used against `BookingJob` object types. All fields are combined with a logical ‘and.’
   */
  interface IBookingJobFilter {
    /**
     * Filter by the object’s `id` field.
     */
    id?: IUUIDFilter | null;

    /**
     * Filter by the object’s `bookingId` field.
     */
    bookingId?: IUUIDFilter | null;

    /**
     * Filter by the object’s `jobId` field.
     */
    jobId?: IUUIDFilter | null;

    /**
     * Checks for all expressions in this list.
     */
    and?: Array<IBookingJobFilter> | null;

    /**
     * Checks for any expressions in this list.
     */
    or?: Array<IBookingJobFilter> | null;

    /**
     * Negates the expression.
     */
    not?: IBookingJobFilter | null;
  }

  /**
   * A connection to a list of `BookingJob` values.
   */
  interface IBookingJobsConnection {
    /**
     * A list of `BookingJob` objects.
     */
    nodes: Array<IBookingJob>;

    /**
     * A list of edges which contains the `BookingJob` and cursor to aid in pagination.
     */
    edges: Array<IBookingJobsEdge>;

    /**
     * Information to aid in pagination.
     */
    pageInfo: IPageInfo;

    /**
     * The count of *all* `BookingJob` you could get from the connection.
     */
    totalCount: number;
  }

  interface IBookingJob {
    id: any;
    bookingId: any | null;
    jobId: any | null;

    /**
     * Reads a single `Booking` that is related to this `BookingJob`.
     */
    booking: IBooking | null;

    /**
     * Reads a single `Job` that is related to this `BookingJob`.
     */
    job: IJob | null;
  }

  /**
   * A `BookingJob` edge in the connection.
   */
  interface IBookingJobsEdge {
    /**
     * A cursor for use in pagination.
     */
    cursor: any | null;

    /**
     * The `BookingJob` at the end of the edge.
     */
    node: IBookingJob;
  }

  /**
   * Information about pagination in a connection.
   */
  interface IPageInfo {
    /**
     * When paginating forwards, are there more items?
     */
    hasNextPage: boolean;

    /**
     * When paginating backwards, are there more items?
     */
    hasPreviousPage: boolean;

    /**
     * When paginating backwards, the cursor to continue.
     */
    startCursor: any | null;

    /**
     * When paginating forwards, the cursor to continue.
     */
    endCursor: any | null;
  }

  /**
   * A `MechanicJob` edge in the connection.
   */
  interface IMechanicJobsEdge {
    /**
     * A cursor for use in pagination.
     */
    cursor: any | null;

    /**
     * The `MechanicJob` at the end of the edge.
     */
    node: IMechanicJob;
  }

  /**
   * Methods to use when ordering `WorkingTime`.
   */
  const enum WorkingTimesOrderBy {
    NATURAL = 'NATURAL',
    MECHANIC_ID_ASC = 'MECHANIC_ID_ASC',
    MECHANIC_ID_DESC = 'MECHANIC_ID_DESC',
    TIME_SLOT_ID_ASC = 'TIME_SLOT_ID_ASC',
    TIME_SLOT_ID_DESC = 'TIME_SLOT_ID_DESC',
    PRIMARY_KEY_ASC = 'PRIMARY_KEY_ASC',
    PRIMARY_KEY_DESC = 'PRIMARY_KEY_DESC'
  }

  /**
   * A condition to be used against `WorkingTime` object types. All fields are tested for equality and combined with a logical ‘and.’
   */
  interface IWorkingTimeCondition {
    /**
     * Checks for equality with the object’s `mechanicId` field.
     */
    mechanicId?: any | null;

    /**
     * Checks for equality with the object’s `timeSlotId` field.
     */
    timeSlotId?: string | null;
  }

  /**
   * A filter to be used against `WorkingTime` object types. All fields are combined with a logical ‘and.’
   */
  interface IWorkingTimeFilter {
    /**
     * Filter by the object’s `mechanicId` field.
     */
    mechanicId?: IUUIDFilter | null;

    /**
     * Filter by the object’s `timeSlotId` field.
     */
    timeSlotId?: IStringFilter | null;

    /**
     * Checks for all expressions in this list.
     */
    and?: Array<IWorkingTimeFilter> | null;

    /**
     * Checks for any expressions in this list.
     */
    or?: Array<IWorkingTimeFilter> | null;

    /**
     * Negates the expression.
     */
    not?: IWorkingTimeFilter | null;
  }

  /**
   * A connection to a list of `WorkingTime` values.
   */
  interface IWorkingTimesConnection {
    /**
     * A list of `WorkingTime` objects.
     */
    nodes: Array<IWorkingTime>;

    /**
     * A list of edges which contains the `WorkingTime` and cursor to aid in pagination.
     */
    edges: Array<IWorkingTimesEdge>;

    /**
     * Information to aid in pagination.
     */
    pageInfo: IPageInfo;

    /**
     * The count of *all* `WorkingTime` you could get from the connection.
     */
    totalCount: number;
  }

  interface IWorkingTime {
    id: any;
    mechanicId: any;
    timeSlotId: string;
    minutes: number | null;

    /**
     * Reads a single `Mechanic` that is related to this `WorkingTime`.
     */
    mechanic: IMechanic | null;

    /**
     * Reads a single `TimeSlot` that is related to this `WorkingTime`.
     */
    timeSlot: ITimeSlot | null;

    /**
     * Reads and enables pagination through a set of `VMechanicTimeSlotsNext90Day`.
     */
    vMechanicTimeSlotsNext90Days: IVMechanicTimeSlotsNext90DaysConnection;
  }

  interface IVMechanicTimeSlotsNext90DaysOnWorkingTimeArguments {
    /**
     * Only read the first `n` values of the set.
     */
    first?: number | null;

    /**
     * Only read the last `n` values of the set.
     */
    last?: number | null;

    /**
     * Skip the first `n` values from our `after` cursor, an alternative to cursor based pagination. May not be used with `last`.
     */
    offset?: number | null;

    /**
     * Read all values in the set before (above) this cursor.
     */
    before?: any | null;

    /**
     * Read all values in the set after (below) this cursor.
     */
    after?: any | null;

    /**
     * The method to use when ordering `VMechanicTimeSlotsNext90Day`.
     * @default ["PRIMARY_KEY_ASC"]
     */
    orderBy?: Array<VMechanicTimeSlotsNext90DaysOrderBy> | null;
  }

  interface ITimeSlot {
    /**
     * E.g. 2019-12-31__09
     */
    id: string;
    startTime: any;

    /**
     * Reads and enables pagination through a set of `WorkingTime`.
     */
    workingTimes: IWorkingTimesConnection;

    /**
     * Reads and enables pagination through a set of `Booking`.
     */
    bookings: IBookingsConnection;

    /**
     * Reads and enables pagination through a set of `VMechanicTimeSlotsNext90Day`.
     */
    vMechanicTimeSlotsNext90Days: IVMechanicTimeSlotsNext90DaysConnection;
  }

  interface IWorkingTimesOnTimeSlotArguments {
    /**
     * Only read the first `n` values of the set.
     */
    first?: number | null;

    /**
     * Only read the last `n` values of the set.
     */
    last?: number | null;

    /**
     * Skip the first `n` values from our `after` cursor, an alternative to cursor based pagination. May not be used with `last`.
     */
    offset?: number | null;

    /**
     * Read all values in the set before (above) this cursor.
     */
    before?: any | null;

    /**
     * Read all values in the set after (below) this cursor.
     */
    after?: any | null;

    /**
     * The method to use when ordering `WorkingTime`.
     * @default ["PRIMARY_KEY_ASC"]
     */
    orderBy?: Array<WorkingTimesOrderBy> | null;

    /**
     * A condition to be used in determining which values should be returned by the collection.
     */
    condition?: IWorkingTimeCondition | null;

    /**
     * A filter to be used in determining which values should be returned by the collection.
     */
    filter?: IWorkingTimeFilter | null;
  }

  interface IBookingsOnTimeSlotArguments {
    /**
     * Only read the first `n` values of the set.
     */
    first?: number | null;

    /**
     * Only read the last `n` values of the set.
     */
    last?: number | null;

    /**
     * Skip the first `n` values from our `after` cursor, an alternative to cursor based pagination. May not be used with `last`.
     */
    offset?: number | null;

    /**
     * Read all values in the set before (above) this cursor.
     */
    before?: any | null;

    /**
     * Read all values in the set after (below) this cursor.
     */
    after?: any | null;

    /**
     * The method to use when ordering `Booking`.
     * @default ["PRIMARY_KEY_ASC"]
     */
    orderBy?: Array<BookingsOrderBy> | null;

    /**
     * A condition to be used in determining which values should be returned by the collection.
     */
    condition?: IBookingCondition | null;

    /**
     * A filter to be used in determining which values should be returned by the collection.
     */
    filter?: IBookingFilter | null;
  }

  interface IVMechanicTimeSlotsNext90DaysOnTimeSlotArguments {
    /**
     * Only read the first `n` values of the set.
     */
    first?: number | null;

    /**
     * Only read the last `n` values of the set.
     */
    last?: number | null;

    /**
     * Skip the first `n` values from our `after` cursor, an alternative to cursor based pagination. May not be used with `last`.
     */
    offset?: number | null;

    /**
     * Read all values in the set before (above) this cursor.
     */
    before?: any | null;

    /**
     * Read all values in the set after (below) this cursor.
     */
    after?: any | null;

    /**
     * The method to use when ordering `VMechanicTimeSlotsNext90Day`.
     * @default ["PRIMARY_KEY_ASC"]
     */
    orderBy?: Array<VMechanicTimeSlotsNext90DaysOrderBy> | null;
  }

  /**
   * Methods to use when ordering `VMechanicTimeSlotsNext90Day`.
   */
  const enum VMechanicTimeSlotsNext90DaysOrderBy {
    NATURAL = 'NATURAL',
    PRIMARY_KEY_ASC = 'PRIMARY_KEY_ASC',
    PRIMARY_KEY_DESC = 'PRIMARY_KEY_DESC'
  }

  /**
   * A connection to a list of `VMechanicTimeSlotsNext90Day` values.
   */
  interface IVMechanicTimeSlotsNext90DaysConnection {
    /**
     * A list of `VMechanicTimeSlotsNext90Day` objects.
     */
    nodes: Array<IVMechanicTimeSlotsNext90Day>;

    /**
     * A list of edges which contains the `VMechanicTimeSlotsNext90Day` and cursor to aid in pagination.
     */
    edges: Array<IVMechanicTimeSlotsNext90DaysEdge>;

    /**
     * Information to aid in pagination.
     */
    pageInfo: IPageInfo;

    /**
     * The count of *all* `VMechanicTimeSlotsNext90Day` you could get from the connection.
     */
    totalCount: number;
  }

  interface IVMechanicTimeSlotsNext90Day {
    id: string | null;
    mechanicId: any;
    workingTimeId: any | null;
    timeSlotId: string;
    startTime: any | null;
    isoWeek: string | null;
    workingTimeMinutes: number | null;
    timeBooked: any | null;

    /**
     * Reads a single `Mechanic` that is related to this `VMechanicTimeSlotsNext90Day`.
     */
    mechanic: IMechanic | null;

    /**
     * Reads a single `TimeSlot` that is related to this `VMechanicTimeSlotsNext90Day`.
     */
    timeSlot: ITimeSlot | null;

    /**
     * Reads a single `WorkingTime` that is related to this `VMechanicTimeSlotsNext90Day`.
     */
    workingTime: IWorkingTime | null;
  }

  /**
   * A `VMechanicTimeSlotsNext90Day` edge in the connection.
   */
  interface IVMechanicTimeSlotsNext90DaysEdge {
    /**
     * A cursor for use in pagination.
     */
    cursor: any | null;

    /**
     * The `VMechanicTimeSlotsNext90Day` at the end of the edge.
     */
    node: IVMechanicTimeSlotsNext90Day;
  }

  /**
   * A `WorkingTime` edge in the connection.
   */
  interface IWorkingTimesEdge {
    /**
     * A cursor for use in pagination.
     */
    cursor: any | null;

    /**
     * The `WorkingTime` at the end of the edge.
     */
    node: IWorkingTime;
  }

  /**
   * A `Booking` edge in the connection.
   */
  interface IBookingsEdge {
    /**
     * A cursor for use in pagination.
     */
    cursor: any | null;

    /**
     * The `Booking` at the end of the edge.
     */
    node: IBooking;
  }

  /**
   * Methods to use when ordering `Calendar`.
   */
  const enum CalendarsOrderBy {
    NATURAL = 'NATURAL',
    DATE_DIM_ID_ASC = 'DATE_DIM_ID_ASC',
    DATE_DIM_ID_DESC = 'DATE_DIM_ID_DESC',
    DATE_ACTUAL_ASC = 'DATE_ACTUAL_ASC',
    DATE_ACTUAL_DESC = 'DATE_ACTUAL_DESC',
    PRIMARY_KEY_ASC = 'PRIMARY_KEY_ASC',
    PRIMARY_KEY_DESC = 'PRIMARY_KEY_DESC'
  }

  /**
   * A condition to be used against `Calendar` object types. All fields are tested for equality and combined with a logical ‘and.’
   */
  interface ICalendarCondition {
    /**
     * Checks for equality with the object’s `dateDimId` field.
     */
    dateDimId?: number | null;

    /**
     * Checks for equality with the object’s `dateActual` field.
     */
    dateActual?: any | null;
  }

  /**
   * A filter to be used against `Calendar` object types. All fields are combined with a logical ‘and.’
   */
  interface ICalendarFilter {
    /**
     * Filter by the object’s `dateDimId` field.
     */
    dateDimId?: IIntFilter | null;

    /**
     * Filter by the object’s `dateActual` field.
     */
    dateActual?: IDateFilter | null;

    /**
     * Checks for all expressions in this list.
     */
    and?: Array<ICalendarFilter> | null;

    /**
     * Checks for any expressions in this list.
     */
    or?: Array<ICalendarFilter> | null;

    /**
     * Negates the expression.
     */
    not?: ICalendarFilter | null;
  }

  /**
   * A filter to be used against Int fields. All fields are combined with a logical ‘and.’
   */
  interface IIntFilter {
    /**
     * Is null (if `true` is specified) or is not null (if `false` is specified).
     */
    isNull?: boolean | null;

    /**
     * Equal to the specified value.
     */
    equalTo?: number | null;

    /**
     * Not equal to the specified value.
     */
    notEqualTo?: number | null;

    /**
     * Not equal to the specified value, treating null like an ordinary value.
     */
    distinctFrom?: number | null;

    /**
     * Equal to the specified value, treating null like an ordinary value.
     */
    notDistinctFrom?: number | null;

    /**
     * Included in the specified list.
     */
    in?: Array<number> | null;

    /**
     * Not included in the specified list.
     */
    notIn?: Array<number> | null;

    /**
     * Less than the specified value.
     */
    lessThan?: number | null;

    /**
     * Less than or equal to the specified value.
     */
    lessThanOrEqualTo?: number | null;

    /**
     * Greater than the specified value.
     */
    greaterThan?: number | null;

    /**
     * Greater than or equal to the specified value.
     */
    greaterThanOrEqualTo?: number | null;
  }

  /**
   * A filter to be used against Date fields. All fields are combined with a logical ‘and.’
   */
  interface IDateFilter {
    /**
     * Is null (if `true` is specified) or is not null (if `false` is specified).
     */
    isNull?: boolean | null;

    /**
     * Equal to the specified value.
     */
    equalTo?: any | null;

    /**
     * Not equal to the specified value.
     */
    notEqualTo?: any | null;

    /**
     * Not equal to the specified value, treating null like an ordinary value.
     */
    distinctFrom?: any | null;

    /**
     * Equal to the specified value, treating null like an ordinary value.
     */
    notDistinctFrom?: any | null;

    /**
     * Included in the specified list.
     */
    in?: Array<any> | null;

    /**
     * Not included in the specified list.
     */
    notIn?: Array<any> | null;

    /**
     * Less than the specified value.
     */
    lessThan?: any | null;

    /**
     * Less than or equal to the specified value.
     */
    lessThanOrEqualTo?: any | null;

    /**
     * Greater than the specified value.
     */
    greaterThan?: any | null;

    /**
     * Greater than or equal to the specified value.
     */
    greaterThanOrEqualTo?: any | null;
  }

  /**
   * A connection to a list of `Calendar` values.
   */
  interface ICalendarsConnection {
    /**
     * A list of `Calendar` objects.
     */
    nodes: Array<ICalendar>;

    /**
     * A list of edges which contains the `Calendar` and cursor to aid in pagination.
     */
    edges: Array<ICalendarsEdge>;

    /**
     * Information to aid in pagination.
     */
    pageInfo: IPageInfo;

    /**
     * The count of *all* `Calendar` you could get from the connection.
     */
    totalCount: number;
  }

  interface ICalendar {
    dateDimId: number;
    dateActual: any;
    epoch: any;
    daySuffix: string;
    dayName: string;
    dayOfWeek: number;
    dayOfMonth: number;
    dayOfQuarter: number;
    dayOfYear: number;
    weekOfMonth: number;
    weekOfYear: number;
    weekOfYearIso: string;
    monthActual: number;
    monthName: string;
    monthNameAbbreviated: string;
    quarterActual: number;
    quarterName: string;
    yearActual: number;
    firstDayOfWeek: any;
    lastDayOfWeek: any;
    firstDayOfMonth: any;
    lastDayOfMonth: any;
    firstDayOfQuarter: any;
    lastDayOfQuarter: any;
    firstDayOfYear: any;
    lastDayOfYear: any;
    mmyyyy: string;
    mmddyyyy: string;
    weekendIndr: boolean;
  }

  /**
   * A `Calendar` edge in the connection.
   */
  interface ICalendarsEdge {
    /**
     * A cursor for use in pagination.
     */
    cursor: any | null;

    /**
     * The `Calendar` at the end of the edge.
     */
    node: ICalendar;
  }

  /**
   * Methods to use when ordering `ContactWhenGeohashAvailable`.
   */
  const enum ContactWhenGeohashAvailablesOrderBy {
    NATURAL = 'NATURAL',
    ID_ASC = 'ID_ASC',
    ID_DESC = 'ID_DESC',
    PRIMARY_KEY_ASC = 'PRIMARY_KEY_ASC',
    PRIMARY_KEY_DESC = 'PRIMARY_KEY_DESC'
  }

  /**
   * A condition to be used against `ContactWhenGeohashAvailable` object types. All fields are tested for equality and combined with a logical ‘and.’
   */
  interface IContactWhenGeohashAvailableCondition {
    /**
     * Checks for equality with the object’s `id` field.
     */
    id?: any | null;
  }

  /**
   * A filter to be used against `ContactWhenGeohashAvailable` object types. All fields are combined with a logical ‘and.’
   */
  interface IContactWhenGeohashAvailableFilter {
    /**
     * Filter by the object’s `id` field.
     */
    id?: IUUIDFilter | null;

    /**
     * Checks for all expressions in this list.
     */
    and?: Array<IContactWhenGeohashAvailableFilter> | null;

    /**
     * Checks for any expressions in this list.
     */
    or?: Array<IContactWhenGeohashAvailableFilter> | null;

    /**
     * Negates the expression.
     */
    not?: IContactWhenGeohashAvailableFilter | null;
  }

  /**
   * A connection to a list of `ContactWhenGeohashAvailable` values.
   */
  interface IContactWhenGeohashAvailablesConnection {
    /**
     * A list of `ContactWhenGeohashAvailable` objects.
     */
    nodes: Array<IContactWhenGeohashAvailable>;

    /**
     * A list of edges which contains the `ContactWhenGeohashAvailable` and cursor to aid in pagination.
     */
    edges: Array<IContactWhenGeohashAvailablesEdge>;

    /**
     * Information to aid in pagination.
     */
    pageInfo: IPageInfo;

    /**
     * The count of *all* `ContactWhenGeohashAvailable` you could get from the connection.
     */
    totalCount: number;
  }

  interface IContactWhenGeohashAvailable {
    id: any;
    geohash: string;
    email: string | null;
    createdAt: any | null;
  }

  /**
   * A `ContactWhenGeohashAvailable` edge in the connection.
   */
  interface IContactWhenGeohashAvailablesEdge {
    /**
     * A cursor for use in pagination.
     */
    cursor: any | null;

    /**
     * The `ContactWhenGeohashAvailable` at the end of the edge.
     */
    node: IContactWhenGeohashAvailable;
  }

  /**
   * Methods to use when ordering `FlywaySchemaHistory`.
   */
  const enum FlywaySchemaHistoriesOrderBy {
    NATURAL = 'NATURAL',
    INSTALLED_RANK_ASC = 'INSTALLED_RANK_ASC',
    INSTALLED_RANK_DESC = 'INSTALLED_RANK_DESC',
    SUCCESS_ASC = 'SUCCESS_ASC',
    SUCCESS_DESC = 'SUCCESS_DESC',
    PRIMARY_KEY_ASC = 'PRIMARY_KEY_ASC',
    PRIMARY_KEY_DESC = 'PRIMARY_KEY_DESC'
  }

  /**
   * A condition to be used against `FlywaySchemaHistory` object types. All fields are tested for equality and combined with a logical ‘and.’
   */
  interface IFlywaySchemaHistoryCondition {
    /**
     * Checks for equality with the object’s `installedRank` field.
     */
    installedRank?: number | null;

    /**
     * Checks for equality with the object’s `success` field.
     */
    success?: boolean | null;
  }

  /**
   * A filter to be used against `FlywaySchemaHistory` object types. All fields are combined with a logical ‘and.’
   */
  interface IFlywaySchemaHistoryFilter {
    /**
     * Filter by the object’s `installedRank` field.
     */
    installedRank?: IIntFilter | null;

    /**
     * Filter by the object’s `success` field.
     */
    success?: IBooleanFilter | null;

    /**
     * Checks for all expressions in this list.
     */
    and?: Array<IFlywaySchemaHistoryFilter> | null;

    /**
     * Checks for any expressions in this list.
     */
    or?: Array<IFlywaySchemaHistoryFilter> | null;

    /**
     * Negates the expression.
     */
    not?: IFlywaySchemaHistoryFilter | null;
  }

  /**
   * A filter to be used against Boolean fields. All fields are combined with a logical ‘and.’
   */
  interface IBooleanFilter {
    /**
     * Is null (if `true` is specified) or is not null (if `false` is specified).
     */
    isNull?: boolean | null;

    /**
     * Equal to the specified value.
     */
    equalTo?: boolean | null;

    /**
     * Not equal to the specified value.
     */
    notEqualTo?: boolean | null;

    /**
     * Not equal to the specified value, treating null like an ordinary value.
     */
    distinctFrom?: boolean | null;

    /**
     * Equal to the specified value, treating null like an ordinary value.
     */
    notDistinctFrom?: boolean | null;

    /**
     * Included in the specified list.
     */
    in?: Array<boolean> | null;

    /**
     * Not included in the specified list.
     */
    notIn?: Array<boolean> | null;

    /**
     * Less than the specified value.
     */
    lessThan?: boolean | null;

    /**
     * Less than or equal to the specified value.
     */
    lessThanOrEqualTo?: boolean | null;

    /**
     * Greater than the specified value.
     */
    greaterThan?: boolean | null;

    /**
     * Greater than or equal to the specified value.
     */
    greaterThanOrEqualTo?: boolean | null;
  }

  /**
   * A connection to a list of `FlywaySchemaHistory` values.
   */
  interface IFlywaySchemaHistoriesConnection {
    /**
     * A list of `FlywaySchemaHistory` objects.
     */
    nodes: Array<IFlywaySchemaHistory>;

    /**
     * A list of edges which contains the `FlywaySchemaHistory` and cursor to aid in pagination.
     */
    edges: Array<IFlywaySchemaHistoriesEdge>;

    /**
     * Information to aid in pagination.
     */
    pageInfo: IPageInfo;

    /**
     * The count of *all* `FlywaySchemaHistory` you could get from the connection.
     */
    totalCount: number;
  }

  interface IFlywaySchemaHistory {
    installedRank: number;
    version: string | null;
    description: string;
    type: string;
    script: string;
    checksum: number | null;
    installedBy: string;
    installedOn: any;
    executionTime: number;
    success: boolean;
  }

  /**
   * A `FlywaySchemaHistory` edge in the connection.
   */
  interface IFlywaySchemaHistoriesEdge {
    /**
     * A cursor for use in pagination.
     */
    cursor: any | null;

    /**
     * The `FlywaySchemaHistory` at the end of the edge.
     */
    node: IFlywaySchemaHistory;
  }

  /**
   * Methods to use when ordering `Job`.
   */
  const enum JobsOrderBy {
    NATURAL = 'NATURAL',
    ID_ASC = 'ID_ASC',
    ID_DESC = 'ID_DESC',
    PRIMARY_KEY_ASC = 'PRIMARY_KEY_ASC',
    PRIMARY_KEY_DESC = 'PRIMARY_KEY_DESC'
  }

  /**
   * A condition to be used against `Job` object types. All fields are tested for equality and combined with a logical ‘and.’
   */
  interface IJobCondition {
    /**
     * Checks for equality with the object’s `id` field.
     */
    id?: any | null;
  }

  /**
   * A filter to be used against `Job` object types. All fields are combined with a logical ‘and.’
   */
  interface IJobFilter {
    /**
     * Filter by the object’s `id` field.
     */
    id?: IUUIDFilter | null;

    /**
     * Checks for all expressions in this list.
     */
    and?: Array<IJobFilter> | null;

    /**
     * Checks for any expressions in this list.
     */
    or?: Array<IJobFilter> | null;

    /**
     * Negates the expression.
     */
    not?: IJobFilter | null;
  }

  /**
   * A connection to a list of `Job` values.
   */
  interface IJobsConnection {
    /**
     * A list of `Job` objects.
     */
    nodes: Array<IJob>;

    /**
     * A list of edges which contains the `Job` and cursor to aid in pagination.
     */
    edges: Array<IJobsEdge>;

    /**
     * Information to aid in pagination.
     */
    pageInfo: IPageInfo;

    /**
     * The count of *all* `Job` you could get from the connection.
     */
    totalCount: number;
  }

  /**
   * A `Job` edge in the connection.
   */
  interface IJobsEdge {
    /**
     * A cursor for use in pagination.
     */
    cursor: any | null;

    /**
     * The `Job` at the end of the edge.
     */
    node: IJob;
  }

  /**
   * Methods to use when ordering `LogClientError`.
   */
  const enum LogClientErrorsOrderBy {
    NATURAL = 'NATURAL',
    ID_ASC = 'ID_ASC',
    ID_DESC = 'ID_DESC',
    PRIMARY_KEY_ASC = 'PRIMARY_KEY_ASC',
    PRIMARY_KEY_DESC = 'PRIMARY_KEY_DESC'
  }

  /**
   * A condition to be used against `LogClientError` object types. All fields are tested for equality and combined with a logical ‘and.’
   */
  interface ILogClientErrorCondition {
    /**
     * Checks for equality with the object’s `id` field.
     */
    id?: number | null;
  }

  /**
   * A filter to be used against `LogClientError` object types. All fields are combined with a logical ‘and.’
   */
  interface ILogClientErrorFilter {
    /**
     * Filter by the object’s `id` field.
     */
    id?: IIntFilter | null;

    /**
     * Checks for all expressions in this list.
     */
    and?: Array<ILogClientErrorFilter> | null;

    /**
     * Checks for any expressions in this list.
     */
    or?: Array<ILogClientErrorFilter> | null;

    /**
     * Negates the expression.
     */
    not?: ILogClientErrorFilter | null;
  }

  /**
   * A connection to a list of `LogClientError` values.
   */
  interface ILogClientErrorsConnection {
    /**
     * A list of `LogClientError` objects.
     */
    nodes: Array<ILogClientError>;

    /**
     * A list of edges which contains the `LogClientError` and cursor to aid in pagination.
     */
    edges: Array<ILogClientErrorsEdge>;

    /**
     * Information to aid in pagination.
     */
    pageInfo: IPageInfo;

    /**
     * The count of *all* `LogClientError` you could get from the connection.
     */
    totalCount: number;
  }

  interface ILogClientError {
    id: number;
    ts: any | null;
    context: any;
    error: any;
  }

  /**
   * A `LogClientError` edge in the connection.
   */
  interface ILogClientErrorsEdge {
    /**
     * A cursor for use in pagination.
     */
    cursor: any | null;

    /**
     * The `LogClientError` at the end of the edge.
     */
    node: ILogClientError;
  }

  /**
   * Methods to use when ordering `Mechanic`.
   */
  const enum MechanicsOrderBy {
    NATURAL = 'NATURAL',
    ID_ASC = 'ID_ASC',
    ID_DESC = 'ID_DESC',
    PRIMARY_KEY_ASC = 'PRIMARY_KEY_ASC',
    PRIMARY_KEY_DESC = 'PRIMARY_KEY_DESC'
  }

  /**
   * A condition to be used against `Mechanic` object types. All fields are tested for equality and combined with a logical ‘and.’
   */
  interface IMechanicCondition {
    /**
     * Checks for equality with the object’s `id` field.
     */
    id?: any | null;
  }

  /**
   * A filter to be used against `Mechanic` object types. All fields are combined with a logical ‘and.’
   */
  interface IMechanicFilter {
    /**
     * Filter by the object’s `id` field.
     */
    id?: IUUIDFilter | null;

    /**
     * Checks for all expressions in this list.
     */
    and?: Array<IMechanicFilter> | null;

    /**
     * Checks for any expressions in this list.
     */
    or?: Array<IMechanicFilter> | null;

    /**
     * Negates the expression.
     */
    not?: IMechanicFilter | null;
  }

  /**
   * A connection to a list of `Mechanic` values.
   */
  interface IMechanicsConnection {
    /**
     * A list of `Mechanic` objects.
     */
    nodes: Array<IMechanic>;

    /**
     * A list of edges which contains the `Mechanic` and cursor to aid in pagination.
     */
    edges: Array<IMechanicsEdge>;

    /**
     * Information to aid in pagination.
     */
    pageInfo: IPageInfo;

    /**
     * The count of *all* `Mechanic` you could get from the connection.
     */
    totalCount: number;
  }

  /**
   * A `Mechanic` edge in the connection.
   */
  interface IMechanicsEdge {
    /**
     * A cursor for use in pagination.
     */
    cursor: any | null;

    /**
     * The `Mechanic` at the end of the edge.
     */
    node: IMechanic;
  }

  /**
   * Methods to use when ordering `TimeSlot`.
   */
  const enum TimeSlotsOrderBy {
    NATURAL = 'NATURAL',
    ID_ASC = 'ID_ASC',
    ID_DESC = 'ID_DESC',
    START_TIME_ASC = 'START_TIME_ASC',
    START_TIME_DESC = 'START_TIME_DESC',
    PRIMARY_KEY_ASC = 'PRIMARY_KEY_ASC',
    PRIMARY_KEY_DESC = 'PRIMARY_KEY_DESC'
  }

  /**
   * A condition to be used against `TimeSlot` object types. All fields are tested for equality and combined with a logical ‘and.’
   */
  interface ITimeSlotCondition {
    /**
     * Checks for equality with the object’s `id` field.
     */
    id?: string | null;

    /**
     * Checks for equality with the object’s `startTime` field.
     */
    startTime?: any | null;
  }

  /**
   * A filter to be used against `TimeSlot` object types. All fields are combined with a logical ‘and.’
   */
  interface ITimeSlotFilter {
    /**
     * Filter by the object’s `id` field.
     */
    id?: IStringFilter | null;

    /**
     * Filter by the object’s `startTime` field.
     */
    startTime?: IDatetimeFilter | null;

    /**
     * Checks for all expressions in this list.
     */
    and?: Array<ITimeSlotFilter> | null;

    /**
     * Checks for any expressions in this list.
     */
    or?: Array<ITimeSlotFilter> | null;

    /**
     * Negates the expression.
     */
    not?: ITimeSlotFilter | null;
  }

  /**
   * A connection to a list of `TimeSlot` values.
   */
  interface ITimeSlotsConnection {
    /**
     * A list of `TimeSlot` objects.
     */
    nodes: Array<ITimeSlot>;

    /**
     * A list of edges which contains the `TimeSlot` and cursor to aid in pagination.
     */
    edges: Array<ITimeSlotsEdge>;

    /**
     * Information to aid in pagination.
     */
    pageInfo: IPageInfo;

    /**
     * The count of *all* `TimeSlot` you could get from the connection.
     */
    totalCount: number;
  }

  /**
   * A `TimeSlot` edge in the connection.
   */
  interface ITimeSlotsEdge {
    /**
     * A cursor for use in pagination.
     */
    cursor: any | null;

    /**
     * The `TimeSlot` at the end of the edge.
     */
    node: ITimeSlot;
  }

  /**
   * A connection to a list of `AvailableMechanic` values.
   */
  interface IAvailableMechanicsConnection {
    /**
     * A list of `AvailableMechanic` objects.
     */
    nodes: Array<IAvailableMechanic>;

    /**
     * A list of edges which contains the `AvailableMechanic` and cursor to aid in pagination.
     */
    edges: Array<IAvailableMechanicsEdge>;

    /**
     * Information to aid in pagination.
     */
    pageInfo: IPageInfo;

    /**
     * The count of *all* `AvailableMechanic` you could get from the connection.
     */
    totalCount: number;
  }

  interface IAvailableMechanic {
    mechanicId: any | null;
    timeSlotId: string | null;
    startTime: any | null;
  }

  /**
   * A `AvailableMechanic` edge in the connection.
   */
  interface IAvailableMechanicsEdge {
    /**
     * A cursor for use in pagination.
     */
    cursor: any | null;

    /**
     * The `AvailableMechanic` at the end of the edge.
     */
    node: IAvailableMechanic;
  }

  /**
   * The root mutation type which contains root level fields which mutate data.
   */
  interface IMutation {
    /**
     * Creates a single `Booking`.
     */
    createBooking: ICreateBookingPayload | null;

    /**
     * Creates a single `BookingJob`.
     */
    createBookingJob: ICreateBookingJobPayload | null;

    /**
     * Creates a single `Calendar`.
     */
    createCalendar: ICreateCalendarPayload | null;

    /**
     * Creates a single `ContactWhenGeohashAvailable`.
     */
    createContactWhenGeohashAvailable: ICreateContactWhenGeohashAvailablePayload | null;

    /**
     * Creates a single `FlywaySchemaHistory`.
     */
    createFlywaySchemaHistory: ICreateFlywaySchemaHistoryPayload | null;

    /**
     * Creates a single `Job`.
     */
    createJob: ICreateJobPayload | null;

    /**
     * Creates a single `LogClientError`.
     */
    createLogClientError: ICreateLogClientErrorPayload | null;

    /**
     * Creates a single `Mechanic`.
     */
    createMechanic: ICreateMechanicPayload | null;

    /**
     * Creates a single `MechanicJob`.
     */
    createMechanicJob: ICreateMechanicJobPayload | null;

    /**
     * Creates a single `TimeSlot`.
     */
    createTimeSlot: ICreateTimeSlotPayload | null;

    /**
     * Creates a single `WorkingTime`.
     */
    createWorkingTime: ICreateWorkingTimePayload | null;

    /**
     * Updates a single `Booking` using a unique key and a patch.
     */
    updateBooking: IUpdateBookingPayload | null;

    /**
     * Updates a single `BookingJob` using a unique key and a patch.
     */
    updateBookingJob: IUpdateBookingJobPayload | null;

    /**
     * Updates a single `Calendar` using a unique key and a patch.
     */
    updateCalendar: IUpdateCalendarPayload | null;

    /**
     * Updates a single `ContactWhenGeohashAvailable` using a unique key and a patch.
     */
    updateContactWhenGeohashAvailable: IUpdateContactWhenGeohashAvailablePayload | null;

    /**
     * Updates a single `FlywaySchemaHistory` using a unique key and a patch.
     */
    updateFlywaySchemaHistory: IUpdateFlywaySchemaHistoryPayload | null;

    /**
     * Updates a single `Job` using a unique key and a patch.
     */
    updateJob: IUpdateJobPayload | null;

    /**
     * Updates a single `LogClientError` using a unique key and a patch.
     */
    updateLogClientError: IUpdateLogClientErrorPayload | null;

    /**
     * Updates a single `Mechanic` using a unique key and a patch.
     */
    updateMechanic: IUpdateMechanicPayload | null;

    /**
     * Updates a single `MechanicJob` using a unique key and a patch.
     */
    updateMechanicJob: IUpdateMechanicJobPayload | null;

    /**
     * Updates a single `TimeSlot` using a unique key and a patch.
     */
    updateTimeSlot: IUpdateTimeSlotPayload | null;

    /**
     * Updates a single `WorkingTime` using a unique key and a patch.
     */
    updateWorkingTime: IUpdateWorkingTimePayload | null;

    /**
     * Deletes a single `Booking` using a unique key.
     */
    deleteBooking: IDeleteBookingPayload | null;

    /**
     * Deletes a single `BookingJob` using a unique key.
     */
    deleteBookingJob: IDeleteBookingJobPayload | null;

    /**
     * Deletes a single `Calendar` using a unique key.
     */
    deleteCalendar: IDeleteCalendarPayload | null;

    /**
     * Deletes a single `ContactWhenGeohashAvailable` using a unique key.
     */
    deleteContactWhenGeohashAvailable: IDeleteContactWhenGeohashAvailablePayload | null;

    /**
     * Deletes a single `FlywaySchemaHistory` using a unique key.
     */
    deleteFlywaySchemaHistory: IDeleteFlywaySchemaHistoryPayload | null;

    /**
     * Deletes a single `Job` using a unique key.
     */
    deleteJob: IDeleteJobPayload | null;

    /**
     * Deletes a single `LogClientError` using a unique key.
     */
    deleteLogClientError: IDeleteLogClientErrorPayload | null;

    /**
     * Deletes a single `Mechanic` using a unique key.
     */
    deleteMechanic: IDeleteMechanicPayload | null;

    /**
     * Deletes a single `MechanicJob` using a unique key.
     */
    deleteMechanicJob: IDeleteMechanicJobPayload | null;

    /**
     * Deletes a single `TimeSlot` using a unique key.
     */
    deleteTimeSlot: IDeleteTimeSlotPayload | null;

    /**
     * Deletes a single `WorkingTime` using a unique key.
     */
    deleteWorkingTime: IDeleteWorkingTimePayload | null;
    makeBooking: IMakeBookingPayload | null;
  }

  interface ICreateBookingOnMutationArguments {
    /**
     * The exclusive input argument for this mutation. An object type, make sure to see documentation for this object’s fields.
     */
    input: ICreateBookingInput;
  }

  interface ICreateBookingJobOnMutationArguments {
    /**
     * The exclusive input argument for this mutation. An object type, make sure to see documentation for this object’s fields.
     */
    input: ICreateBookingJobInput;
  }

  interface ICreateCalendarOnMutationArguments {
    /**
     * The exclusive input argument for this mutation. An object type, make sure to see documentation for this object’s fields.
     */
    input: ICreateCalendarInput;
  }

  interface ICreateContactWhenGeohashAvailableOnMutationArguments {
    /**
     * The exclusive input argument for this mutation. An object type, make sure to see documentation for this object’s fields.
     */
    input: ICreateContactWhenGeohashAvailableInput;
  }

  interface ICreateFlywaySchemaHistoryOnMutationArguments {
    /**
     * The exclusive input argument for this mutation. An object type, make sure to see documentation for this object’s fields.
     */
    input: ICreateFlywaySchemaHistoryInput;
  }

  interface ICreateJobOnMutationArguments {
    /**
     * The exclusive input argument for this mutation. An object type, make sure to see documentation for this object’s fields.
     */
    input: ICreateJobInput;
  }

  interface ICreateLogClientErrorOnMutationArguments {
    /**
     * The exclusive input argument for this mutation. An object type, make sure to see documentation for this object’s fields.
     */
    input: ICreateLogClientErrorInput;
  }

  interface ICreateMechanicOnMutationArguments {
    /**
     * The exclusive input argument for this mutation. An object type, make sure to see documentation for this object’s fields.
     */
    input: ICreateMechanicInput;
  }

  interface ICreateMechanicJobOnMutationArguments {
    /**
     * The exclusive input argument for this mutation. An object type, make sure to see documentation for this object’s fields.
     */
    input: ICreateMechanicJobInput;
  }

  interface ICreateTimeSlotOnMutationArguments {
    /**
     * The exclusive input argument for this mutation. An object type, make sure to see documentation for this object’s fields.
     */
    input: ICreateTimeSlotInput;
  }

  interface ICreateWorkingTimeOnMutationArguments {
    /**
     * The exclusive input argument for this mutation. An object type, make sure to see documentation for this object’s fields.
     */
    input: ICreateWorkingTimeInput;
  }

  interface IUpdateBookingOnMutationArguments {
    /**
     * The exclusive input argument for this mutation. An object type, make sure to see documentation for this object’s fields.
     */
    input: IUpdateBookingInput;
  }

  interface IUpdateBookingJobOnMutationArguments {
    /**
     * The exclusive input argument for this mutation. An object type, make sure to see documentation for this object’s fields.
     */
    input: IUpdateBookingJobInput;
  }

  interface IUpdateCalendarOnMutationArguments {
    /**
     * The exclusive input argument for this mutation. An object type, make sure to see documentation for this object’s fields.
     */
    input: IUpdateCalendarInput;
  }

  interface IUpdateContactWhenGeohashAvailableOnMutationArguments {
    /**
     * The exclusive input argument for this mutation. An object type, make sure to see documentation for this object’s fields.
     */
    input: IUpdateContactWhenGeohashAvailableInput;
  }

  interface IUpdateFlywaySchemaHistoryOnMutationArguments {
    /**
     * The exclusive input argument for this mutation. An object type, make sure to see documentation for this object’s fields.
     */
    input: IUpdateFlywaySchemaHistoryInput;
  }

  interface IUpdateJobOnMutationArguments {
    /**
     * The exclusive input argument for this mutation. An object type, make sure to see documentation for this object’s fields.
     */
    input: IUpdateJobInput;
  }

  interface IUpdateLogClientErrorOnMutationArguments {
    /**
     * The exclusive input argument for this mutation. An object type, make sure to see documentation for this object’s fields.
     */
    input: IUpdateLogClientErrorInput;
  }

  interface IUpdateMechanicOnMutationArguments {
    /**
     * The exclusive input argument for this mutation. An object type, make sure to see documentation for this object’s fields.
     */
    input: IUpdateMechanicInput;
  }

  interface IUpdateMechanicJobOnMutationArguments {
    /**
     * The exclusive input argument for this mutation. An object type, make sure to see documentation for this object’s fields.
     */
    input: IUpdateMechanicJobInput;
  }

  interface IUpdateTimeSlotOnMutationArguments {
    /**
     * The exclusive input argument for this mutation. An object type, make sure to see documentation for this object’s fields.
     */
    input: IUpdateTimeSlotInput;
  }

  interface IUpdateWorkingTimeOnMutationArguments {
    /**
     * The exclusive input argument for this mutation. An object type, make sure to see documentation for this object’s fields.
     */
    input: IUpdateWorkingTimeInput;
  }

  interface IDeleteBookingOnMutationArguments {
    /**
     * The exclusive input argument for this mutation. An object type, make sure to see documentation for this object’s fields.
     */
    input: IDeleteBookingInput;
  }

  interface IDeleteBookingJobOnMutationArguments {
    /**
     * The exclusive input argument for this mutation. An object type, make sure to see documentation for this object’s fields.
     */
    input: IDeleteBookingJobInput;
  }

  interface IDeleteCalendarOnMutationArguments {
    /**
     * The exclusive input argument for this mutation. An object type, make sure to see documentation for this object’s fields.
     */
    input: IDeleteCalendarInput;
  }

  interface IDeleteContactWhenGeohashAvailableOnMutationArguments {
    /**
     * The exclusive input argument for this mutation. An object type, make sure to see documentation for this object’s fields.
     */
    input: IDeleteContactWhenGeohashAvailableInput;
  }

  interface IDeleteFlywaySchemaHistoryOnMutationArguments {
    /**
     * The exclusive input argument for this mutation. An object type, make sure to see documentation for this object’s fields.
     */
    input: IDeleteFlywaySchemaHistoryInput;
  }

  interface IDeleteJobOnMutationArguments {
    /**
     * The exclusive input argument for this mutation. An object type, make sure to see documentation for this object’s fields.
     */
    input: IDeleteJobInput;
  }

  interface IDeleteLogClientErrorOnMutationArguments {
    /**
     * The exclusive input argument for this mutation. An object type, make sure to see documentation for this object’s fields.
     */
    input: IDeleteLogClientErrorInput;
  }

  interface IDeleteMechanicOnMutationArguments {
    /**
     * The exclusive input argument for this mutation. An object type, make sure to see documentation for this object’s fields.
     */
    input: IDeleteMechanicInput;
  }

  interface IDeleteMechanicJobOnMutationArguments {
    /**
     * The exclusive input argument for this mutation. An object type, make sure to see documentation for this object’s fields.
     */
    input: IDeleteMechanicJobInput;
  }

  interface IDeleteTimeSlotOnMutationArguments {
    /**
     * The exclusive input argument for this mutation. An object type, make sure to see documentation for this object’s fields.
     */
    input: IDeleteTimeSlotInput;
  }

  interface IDeleteWorkingTimeOnMutationArguments {
    /**
     * The exclusive input argument for this mutation. An object type, make sure to see documentation for this object’s fields.
     */
    input: IDeleteWorkingTimeInput;
  }

  interface IMakeBookingOnMutationArguments {
    /**
     * The exclusive input argument for this mutation. An object type, make sure to see documentation for this object’s fields.
     */
    input: IMakeBookingInput;
  }

  /**
   * All input for the create `Booking` mutation.
   */
  interface ICreateBookingInput {
    /**
     * An arbitrary string value with no semantic meaning. Will be included in the payload verbatim. May be used to track mutations by the client.
     */
    clientMutationId?: string | null;

    /**
     * The `Booking` to be created by this mutation.
     */
    booking: IBookingInput;
  }

  /**
   * An input for mutations affecting `Booking`
   */
  interface IBookingInput {
    id?: any | null;
    mechanicId?: any | null;
    timeSlotId: string;
    status?: BookingStatus | null;
    longitude: number;
    latitude: number;
    jobCompletedAt?: any | null;
    paidAt?: any | null;
    createdAt?: any | null;
    jobStartedAt?: any | null;
    address?: string | null;
    phone?: string | null;
    email?: string | null;
    carRegistrationNumber?: string | null;
    durationMinutes: number;
  }

  /**
   * The output of our create `Booking` mutation.
   */
  interface ICreateBookingPayload {
    /**
     * The exact same `clientMutationId` that was provided in the mutation input, unchanged and unused. May be used by a client to track mutations.
     */
    clientMutationId: string | null;

    /**
     * The `Booking` that was created by this mutation.
     */
    booking: IBooking | null;

    /**
     * Our root query field type. Allows us to run any query from our mutation payload.
     */
    query: IQuery | null;

    /**
     * Reads a single `Mechanic` that is related to this `Booking`.
     */
    mechanic: IMechanic | null;

    /**
     * Reads a single `TimeSlot` that is related to this `Booking`.
     */
    timeSlot: ITimeSlot | null;

    /**
     * An edge for our `Booking`. May be used by Relay 1.
     */
    bookingEdge: IBookingsEdge | null;
  }

  interface IBookingEdgeOnCreateBookingPayloadArguments {
    /**
     * The method to use when ordering `Booking`.
     * @default ["PRIMARY_KEY_ASC"]
     */
    orderBy?: Array<BookingsOrderBy> | null;
  }

  /**
   * All input for the create `BookingJob` mutation.
   */
  interface ICreateBookingJobInput {
    /**
     * An arbitrary string value with no semantic meaning. Will be included in the payload verbatim. May be used to track mutations by the client.
     */
    clientMutationId?: string | null;

    /**
     * The `BookingJob` to be created by this mutation.
     */
    bookingJob: IBookingJobInput;
  }

  /**
   * An input for mutations affecting `BookingJob`
   */
  interface IBookingJobInput {
    id?: any | null;
    bookingId?: any | null;
    jobId?: any | null;
  }

  /**
   * The output of our create `BookingJob` mutation.
   */
  interface ICreateBookingJobPayload {
    /**
     * The exact same `clientMutationId` that was provided in the mutation input, unchanged and unused. May be used by a client to track mutations.
     */
    clientMutationId: string | null;

    /**
     * The `BookingJob` that was created by this mutation.
     */
    bookingJob: IBookingJob | null;

    /**
     * Our root query field type. Allows us to run any query from our mutation payload.
     */
    query: IQuery | null;

    /**
     * Reads a single `Booking` that is related to this `BookingJob`.
     */
    booking: IBooking | null;

    /**
     * Reads a single `Job` that is related to this `BookingJob`.
     */
    job: IJob | null;

    /**
     * An edge for our `BookingJob`. May be used by Relay 1.
     */
    bookingJobEdge: IBookingJobsEdge | null;
  }

  interface IBookingJobEdgeOnCreateBookingJobPayloadArguments {
    /**
     * The method to use when ordering `BookingJob`.
     * @default ["PRIMARY_KEY_ASC"]
     */
    orderBy?: Array<BookingJobsOrderBy> | null;
  }

  /**
   * All input for the create `Calendar` mutation.
   */
  interface ICreateCalendarInput {
    /**
     * An arbitrary string value with no semantic meaning. Will be included in the payload verbatim. May be used to track mutations by the client.
     */
    clientMutationId?: string | null;

    /**
     * The `Calendar` to be created by this mutation.
     */
    calendar: ICalendarInput;
  }

  /**
   * An input for mutations affecting `Calendar`
   */
  interface ICalendarInput {
    dateDimId: number;
    dateActual: any;
    epoch: any;
    daySuffix: string;
    dayName: string;
    dayOfWeek: number;
    dayOfMonth: number;
    dayOfQuarter: number;
    dayOfYear: number;
    weekOfMonth: number;
    weekOfYear: number;
    weekOfYearIso: string;
    monthActual: number;
    monthName: string;
    monthNameAbbreviated: string;
    quarterActual: number;
    quarterName: string;
    yearActual: number;
    firstDayOfWeek: any;
    lastDayOfWeek: any;
    firstDayOfMonth: any;
    lastDayOfMonth: any;
    firstDayOfQuarter: any;
    lastDayOfQuarter: any;
    firstDayOfYear: any;
    lastDayOfYear: any;
    mmyyyy: string;
    mmddyyyy: string;
    weekendIndr: boolean;
  }

  /**
   * The output of our create `Calendar` mutation.
   */
  interface ICreateCalendarPayload {
    /**
     * The exact same `clientMutationId` that was provided in the mutation input, unchanged and unused. May be used by a client to track mutations.
     */
    clientMutationId: string | null;

    /**
     * The `Calendar` that was created by this mutation.
     */
    calendar: ICalendar | null;

    /**
     * Our root query field type. Allows us to run any query from our mutation payload.
     */
    query: IQuery | null;

    /**
     * An edge for our `Calendar`. May be used by Relay 1.
     */
    calendarEdge: ICalendarsEdge | null;
  }

  interface ICalendarEdgeOnCreateCalendarPayloadArguments {
    /**
     * The method to use when ordering `Calendar`.
     * @default ["PRIMARY_KEY_ASC"]
     */
    orderBy?: Array<CalendarsOrderBy> | null;
  }

  /**
   * All input for the create `ContactWhenGeohashAvailable` mutation.
   */
  interface ICreateContactWhenGeohashAvailableInput {
    /**
     * An arbitrary string value with no semantic meaning. Will be included in the payload verbatim. May be used to track mutations by the client.
     */
    clientMutationId?: string | null;

    /**
     * The `ContactWhenGeohashAvailable` to be created by this mutation.
     */
    contactWhenGeohashAvailable: IContactWhenGeohashAvailableInput;
  }

  /**
   * An input for mutations affecting `ContactWhenGeohashAvailable`
   */
  interface IContactWhenGeohashAvailableInput {
    id?: any | null;
    geohash: string;
    email?: string | null;
    createdAt?: any | null;
  }

  /**
   * The output of our create `ContactWhenGeohashAvailable` mutation.
   */
  interface ICreateContactWhenGeohashAvailablePayload {
    /**
     * The exact same `clientMutationId` that was provided in the mutation input, unchanged and unused. May be used by a client to track mutations.
     */
    clientMutationId: string | null;

    /**
     * The `ContactWhenGeohashAvailable` that was created by this mutation.
     */
    contactWhenGeohashAvailable: IContactWhenGeohashAvailable | null;

    /**
     * Our root query field type. Allows us to run any query from our mutation payload.
     */
    query: IQuery | null;

    /**
     * An edge for our `ContactWhenGeohashAvailable`. May be used by Relay 1.
     */
    contactWhenGeohashAvailableEdge: IContactWhenGeohashAvailablesEdge | null;
  }

  interface IContactWhenGeohashAvailableEdgeOnCreateContactWhenGeohashAvailablePayloadArguments {
    /**
     * The method to use when ordering `ContactWhenGeohashAvailable`.
     * @default ["PRIMARY_KEY_ASC"]
     */
    orderBy?: Array<ContactWhenGeohashAvailablesOrderBy> | null;
  }

  /**
   * All input for the create `FlywaySchemaHistory` mutation.
   */
  interface ICreateFlywaySchemaHistoryInput {
    /**
     * An arbitrary string value with no semantic meaning. Will be included in the payload verbatim. May be used to track mutations by the client.
     */
    clientMutationId?: string | null;

    /**
     * The `FlywaySchemaHistory` to be created by this mutation.
     */
    flywaySchemaHistory: IFlywaySchemaHistoryInput;
  }

  /**
   * An input for mutations affecting `FlywaySchemaHistory`
   */
  interface IFlywaySchemaHistoryInput {
    installedRank: number;
    version?: string | null;
    description: string;
    type: string;
    script: string;
    checksum?: number | null;
    installedBy: string;
    installedOn?: any | null;
    executionTime: number;
    success: boolean;
  }

  /**
   * The output of our create `FlywaySchemaHistory` mutation.
   */
  interface ICreateFlywaySchemaHistoryPayload {
    /**
     * The exact same `clientMutationId` that was provided in the mutation input, unchanged and unused. May be used by a client to track mutations.
     */
    clientMutationId: string | null;

    /**
     * The `FlywaySchemaHistory` that was created by this mutation.
     */
    flywaySchemaHistory: IFlywaySchemaHistory | null;

    /**
     * Our root query field type. Allows us to run any query from our mutation payload.
     */
    query: IQuery | null;

    /**
     * An edge for our `FlywaySchemaHistory`. May be used by Relay 1.
     */
    flywaySchemaHistoryEdge: IFlywaySchemaHistoriesEdge | null;
  }

  interface IFlywaySchemaHistoryEdgeOnCreateFlywaySchemaHistoryPayloadArguments {
    /**
     * The method to use when ordering `FlywaySchemaHistory`.
     * @default ["PRIMARY_KEY_ASC"]
     */
    orderBy?: Array<FlywaySchemaHistoriesOrderBy> | null;
  }

  /**
   * All input for the create `Job` mutation.
   */
  interface ICreateJobInput {
    /**
     * An arbitrary string value with no semantic meaning. Will be included in the payload verbatim. May be used to track mutations by the client.
     */
    clientMutationId?: string | null;

    /**
     * The `Job` to be created by this mutation.
     */
    job: IJobInput;
  }

  /**
   * An input for mutations affecting `Job`
   */
  interface IJobInput {
    id?: any | null;
    description: string;
    minutesToComplete: number;
    createdAt?: any | null;
    price?: number | null;
  }

  /**
   * The output of our create `Job` mutation.
   */
  interface ICreateJobPayload {
    /**
     * The exact same `clientMutationId` that was provided in the mutation input, unchanged and unused. May be used by a client to track mutations.
     */
    clientMutationId: string | null;

    /**
     * The `Job` that was created by this mutation.
     */
    job: IJob | null;

    /**
     * Our root query field type. Allows us to run any query from our mutation payload.
     */
    query: IQuery | null;

    /**
     * An edge for our `Job`. May be used by Relay 1.
     */
    jobEdge: IJobsEdge | null;
  }

  interface IJobEdgeOnCreateJobPayloadArguments {
    /**
     * The method to use when ordering `Job`.
     * @default ["PRIMARY_KEY_ASC"]
     */
    orderBy?: Array<JobsOrderBy> | null;
  }

  /**
   * All input for the create `LogClientError` mutation.
   */
  interface ICreateLogClientErrorInput {
    /**
     * An arbitrary string value with no semantic meaning. Will be included in the payload verbatim. May be used to track mutations by the client.
     */
    clientMutationId?: string | null;

    /**
     * The `LogClientError` to be created by this mutation.
     */
    logClientError: ILogClientErrorInput;
  }

  /**
   * An input for mutations affecting `LogClientError`
   */
  interface ILogClientErrorInput {
    id?: number | null;
    ts?: any | null;
    context: any;
    error: any;
  }

  /**
   * The output of our create `LogClientError` mutation.
   */
  interface ICreateLogClientErrorPayload {
    /**
     * The exact same `clientMutationId` that was provided in the mutation input, unchanged and unused. May be used by a client to track mutations.
     */
    clientMutationId: string | null;

    /**
     * The `LogClientError` that was created by this mutation.
     */
    logClientError: ILogClientError | null;

    /**
     * Our root query field type. Allows us to run any query from our mutation payload.
     */
    query: IQuery | null;

    /**
     * An edge for our `LogClientError`. May be used by Relay 1.
     */
    logClientErrorEdge: ILogClientErrorsEdge | null;
  }

  interface ILogClientErrorEdgeOnCreateLogClientErrorPayloadArguments {
    /**
     * The method to use when ordering `LogClientError`.
     * @default ["PRIMARY_KEY_ASC"]
     */
    orderBy?: Array<LogClientErrorsOrderBy> | null;
  }

  /**
   * All input for the create `Mechanic` mutation.
   */
  interface ICreateMechanicInput {
    /**
     * An arbitrary string value with no semantic meaning. Will be included in the payload verbatim. May be used to track mutations by the client.
     */
    clientMutationId?: string | null;

    /**
     * The `Mechanic` to be created by this mutation.
     */
    mechanic: IMechanicInput;
  }

  /**
   * An input for mutations affecting `Mechanic`
   */
  interface IMechanicInput {
    id?: any | null;
    fullName: string;
    rating?: number | null;
    createdAt?: any | null;
    geohashes?: Array<string | null> | null;
    travelTimeMinutes?: number | null;
    pictureUrl?: string | null;
    email?: string | null;
    phone?: string | null;
    address?: string | null;
  }

  /**
   * The output of our create `Mechanic` mutation.
   */
  interface ICreateMechanicPayload {
    /**
     * The exact same `clientMutationId` that was provided in the mutation input, unchanged and unused. May be used by a client to track mutations.
     */
    clientMutationId: string | null;

    /**
     * The `Mechanic` that was created by this mutation.
     */
    mechanic: IMechanic | null;

    /**
     * Our root query field type. Allows us to run any query from our mutation payload.
     */
    query: IQuery | null;

    /**
     * An edge for our `Mechanic`. May be used by Relay 1.
     */
    mechanicEdge: IMechanicsEdge | null;
  }

  interface IMechanicEdgeOnCreateMechanicPayloadArguments {
    /**
     * The method to use when ordering `Mechanic`.
     * @default ["PRIMARY_KEY_ASC"]
     */
    orderBy?: Array<MechanicsOrderBy> | null;
  }

  /**
   * All input for the create `MechanicJob` mutation.
   */
  interface ICreateMechanicJobInput {
    /**
     * An arbitrary string value with no semantic meaning. Will be included in the payload verbatim. May be used to track mutations by the client.
     */
    clientMutationId?: string | null;

    /**
     * The `MechanicJob` to be created by this mutation.
     */
    mechanicJob: IMechanicJobInput;
  }

  /**
   * An input for mutations affecting `MechanicJob`
   */
  interface IMechanicJobInput {
    id?: any | null;
    mechanicId?: any | null;
    jobId?: any | null;
  }

  /**
   * The output of our create `MechanicJob` mutation.
   */
  interface ICreateMechanicJobPayload {
    /**
     * The exact same `clientMutationId` that was provided in the mutation input, unchanged and unused. May be used by a client to track mutations.
     */
    clientMutationId: string | null;

    /**
     * The `MechanicJob` that was created by this mutation.
     */
    mechanicJob: IMechanicJob | null;

    /**
     * Our root query field type. Allows us to run any query from our mutation payload.
     */
    query: IQuery | null;

    /**
     * Reads a single `Mechanic` that is related to this `MechanicJob`.
     */
    mechanic: IMechanic | null;

    /**
     * Reads a single `Job` that is related to this `MechanicJob`.
     */
    job: IJob | null;

    /**
     * An edge for our `MechanicJob`. May be used by Relay 1.
     */
    mechanicJobEdge: IMechanicJobsEdge | null;
  }

  interface IMechanicJobEdgeOnCreateMechanicJobPayloadArguments {
    /**
     * The method to use when ordering `MechanicJob`.
     * @default ["PRIMARY_KEY_ASC"]
     */
    orderBy?: Array<MechanicJobsOrderBy> | null;
  }

  /**
   * All input for the create `TimeSlot` mutation.
   */
  interface ICreateTimeSlotInput {
    /**
     * An arbitrary string value with no semantic meaning. Will be included in the payload verbatim. May be used to track mutations by the client.
     */
    clientMutationId?: string | null;

    /**
     * The `TimeSlot` to be created by this mutation.
     */
    timeSlot: ITimeSlotInput;
  }

  /**
   * An input for mutations affecting `TimeSlot`
   */
  interface ITimeSlotInput {
    /**
     * E.g. 2019-12-31__09
     */
    id: string;
    startTime: any;
  }

  /**
   * The output of our create `TimeSlot` mutation.
   */
  interface ICreateTimeSlotPayload {
    /**
     * The exact same `clientMutationId` that was provided in the mutation input, unchanged and unused. May be used by a client to track mutations.
     */
    clientMutationId: string | null;

    /**
     * The `TimeSlot` that was created by this mutation.
     */
    timeSlot: ITimeSlot | null;

    /**
     * Our root query field type. Allows us to run any query from our mutation payload.
     */
    query: IQuery | null;

    /**
     * An edge for our `TimeSlot`. May be used by Relay 1.
     */
    timeSlotEdge: ITimeSlotsEdge | null;
  }

  interface ITimeSlotEdgeOnCreateTimeSlotPayloadArguments {
    /**
     * The method to use when ordering `TimeSlot`.
     * @default ["PRIMARY_KEY_ASC"]
     */
    orderBy?: Array<TimeSlotsOrderBy> | null;
  }

  /**
   * All input for the create `WorkingTime` mutation.
   */
  interface ICreateWorkingTimeInput {
    /**
     * An arbitrary string value with no semantic meaning. Will be included in the payload verbatim. May be used to track mutations by the client.
     */
    clientMutationId?: string | null;

    /**
     * The `WorkingTime` to be created by this mutation.
     */
    workingTime: IWorkingTimeInput;
  }

  /**
   * An input for mutations affecting `WorkingTime`
   */
  interface IWorkingTimeInput {
    id?: any | null;
    mechanicId: any;
    timeSlotId: string;
    minutes?: number | null;
  }

  /**
   * The output of our create `WorkingTime` mutation.
   */
  interface ICreateWorkingTimePayload {
    /**
     * The exact same `clientMutationId` that was provided in the mutation input, unchanged and unused. May be used by a client to track mutations.
     */
    clientMutationId: string | null;

    /**
     * The `WorkingTime` that was created by this mutation.
     */
    workingTime: IWorkingTime | null;

    /**
     * Our root query field type. Allows us to run any query from our mutation payload.
     */
    query: IQuery | null;

    /**
     * Reads a single `Mechanic` that is related to this `WorkingTime`.
     */
    mechanic: IMechanic | null;

    /**
     * Reads a single `TimeSlot` that is related to this `WorkingTime`.
     */
    timeSlot: ITimeSlot | null;

    /**
     * An edge for our `WorkingTime`. May be used by Relay 1.
     */
    workingTimeEdge: IWorkingTimesEdge | null;
  }

  interface IWorkingTimeEdgeOnCreateWorkingTimePayloadArguments {
    /**
     * The method to use when ordering `WorkingTime`.
     * @default ["PRIMARY_KEY_ASC"]
     */
    orderBy?: Array<WorkingTimesOrderBy> | null;
  }

  /**
   * All input for the `updateBooking` mutation.
   */
  interface IUpdateBookingInput {
    /**
     * An arbitrary string value with no semantic meaning. Will be included in the payload verbatim. May be used to track mutations by the client.
     */
    clientMutationId?: string | null;

    /**
     * An object where the defined keys will be set on the `Booking` being updated.
     */
    patch: IBookingPatch;
    id: any;
  }

  /**
   * Represents an update to a `Booking`. Fields that are set will be updated.
   */
  interface IBookingPatch {
    id?: any | null;
    mechanicId?: any | null;
    timeSlotId?: string | null;
    status?: BookingStatus | null;
    longitude?: number | null;
    latitude?: number | null;
    jobCompletedAt?: any | null;
    paidAt?: any | null;
    createdAt?: any | null;
    jobStartedAt?: any | null;
    address?: string | null;
    phone?: string | null;
    email?: string | null;
    carRegistrationNumber?: string | null;
    durationMinutes?: number | null;
  }

  /**
   * The output of our update `Booking` mutation.
   */
  interface IUpdateBookingPayload {
    /**
     * The exact same `clientMutationId` that was provided in the mutation input, unchanged and unused. May be used by a client to track mutations.
     */
    clientMutationId: string | null;

    /**
     * The `Booking` that was updated by this mutation.
     */
    booking: IBooking | null;

    /**
     * Our root query field type. Allows us to run any query from our mutation payload.
     */
    query: IQuery | null;

    /**
     * Reads a single `Mechanic` that is related to this `Booking`.
     */
    mechanic: IMechanic | null;

    /**
     * Reads a single `TimeSlot` that is related to this `Booking`.
     */
    timeSlot: ITimeSlot | null;

    /**
     * An edge for our `Booking`. May be used by Relay 1.
     */
    bookingEdge: IBookingsEdge | null;
  }

  interface IBookingEdgeOnUpdateBookingPayloadArguments {
    /**
     * The method to use when ordering `Booking`.
     * @default ["PRIMARY_KEY_ASC"]
     */
    orderBy?: Array<BookingsOrderBy> | null;
  }

  /**
   * All input for the `updateBookingJob` mutation.
   */
  interface IUpdateBookingJobInput {
    /**
     * An arbitrary string value with no semantic meaning. Will be included in the payload verbatim. May be used to track mutations by the client.
     */
    clientMutationId?: string | null;

    /**
     * An object where the defined keys will be set on the `BookingJob` being updated.
     */
    patch: IBookingJobPatch;
    id: any;
  }

  /**
   * Represents an update to a `BookingJob`. Fields that are set will be updated.
   */
  interface IBookingJobPatch {
    id?: any | null;
    bookingId?: any | null;
    jobId?: any | null;
  }

  /**
   * The output of our update `BookingJob` mutation.
   */
  interface IUpdateBookingJobPayload {
    /**
     * The exact same `clientMutationId` that was provided in the mutation input, unchanged and unused. May be used by a client to track mutations.
     */
    clientMutationId: string | null;

    /**
     * The `BookingJob` that was updated by this mutation.
     */
    bookingJob: IBookingJob | null;

    /**
     * Our root query field type. Allows us to run any query from our mutation payload.
     */
    query: IQuery | null;

    /**
     * Reads a single `Booking` that is related to this `BookingJob`.
     */
    booking: IBooking | null;

    /**
     * Reads a single `Job` that is related to this `BookingJob`.
     */
    job: IJob | null;

    /**
     * An edge for our `BookingJob`. May be used by Relay 1.
     */
    bookingJobEdge: IBookingJobsEdge | null;
  }

  interface IBookingJobEdgeOnUpdateBookingJobPayloadArguments {
    /**
     * The method to use when ordering `BookingJob`.
     * @default ["PRIMARY_KEY_ASC"]
     */
    orderBy?: Array<BookingJobsOrderBy> | null;
  }

  /**
   * All input for the `updateCalendar` mutation.
   */
  interface IUpdateCalendarInput {
    /**
     * An arbitrary string value with no semantic meaning. Will be included in the payload verbatim. May be used to track mutations by the client.
     */
    clientMutationId?: string | null;

    /**
     * An object where the defined keys will be set on the `Calendar` being updated.
     */
    patch: ICalendarPatch;
    dateDimId: number;
  }

  /**
   * Represents an update to a `Calendar`. Fields that are set will be updated.
   */
  interface ICalendarPatch {
    dateDimId?: number | null;
    dateActual?: any | null;
    epoch?: any | null;
    daySuffix?: string | null;
    dayName?: string | null;
    dayOfWeek?: number | null;
    dayOfMonth?: number | null;
    dayOfQuarter?: number | null;
    dayOfYear?: number | null;
    weekOfMonth?: number | null;
    weekOfYear?: number | null;
    weekOfYearIso?: string | null;
    monthActual?: number | null;
    monthName?: string | null;
    monthNameAbbreviated?: string | null;
    quarterActual?: number | null;
    quarterName?: string | null;
    yearActual?: number | null;
    firstDayOfWeek?: any | null;
    lastDayOfWeek?: any | null;
    firstDayOfMonth?: any | null;
    lastDayOfMonth?: any | null;
    firstDayOfQuarter?: any | null;
    lastDayOfQuarter?: any | null;
    firstDayOfYear?: any | null;
    lastDayOfYear?: any | null;
    mmyyyy?: string | null;
    mmddyyyy?: string | null;
    weekendIndr?: boolean | null;
  }

  /**
   * The output of our update `Calendar` mutation.
   */
  interface IUpdateCalendarPayload {
    /**
     * The exact same `clientMutationId` that was provided in the mutation input, unchanged and unused. May be used by a client to track mutations.
     */
    clientMutationId: string | null;

    /**
     * The `Calendar` that was updated by this mutation.
     */
    calendar: ICalendar | null;

    /**
     * Our root query field type. Allows us to run any query from our mutation payload.
     */
    query: IQuery | null;

    /**
     * An edge for our `Calendar`. May be used by Relay 1.
     */
    calendarEdge: ICalendarsEdge | null;
  }

  interface ICalendarEdgeOnUpdateCalendarPayloadArguments {
    /**
     * The method to use when ordering `Calendar`.
     * @default ["PRIMARY_KEY_ASC"]
     */
    orderBy?: Array<CalendarsOrderBy> | null;
  }

  /**
   * All input for the `updateContactWhenGeohashAvailable` mutation.
   */
  interface IUpdateContactWhenGeohashAvailableInput {
    /**
     * An arbitrary string value with no semantic meaning. Will be included in the payload verbatim. May be used to track mutations by the client.
     */
    clientMutationId?: string | null;

    /**
     * An object where the defined keys will be set on the `ContactWhenGeohashAvailable` being updated.
     */
    patch: IContactWhenGeohashAvailablePatch;
    id: any;
  }

  /**
   * Represents an update to a `ContactWhenGeohashAvailable`. Fields that are set will be updated.
   */
  interface IContactWhenGeohashAvailablePatch {
    id?: any | null;
    geohash?: string | null;
    email?: string | null;
    createdAt?: any | null;
  }

  /**
   * The output of our update `ContactWhenGeohashAvailable` mutation.
   */
  interface IUpdateContactWhenGeohashAvailablePayload {
    /**
     * The exact same `clientMutationId` that was provided in the mutation input, unchanged and unused. May be used by a client to track mutations.
     */
    clientMutationId: string | null;

    /**
     * The `ContactWhenGeohashAvailable` that was updated by this mutation.
     */
    contactWhenGeohashAvailable: IContactWhenGeohashAvailable | null;

    /**
     * Our root query field type. Allows us to run any query from our mutation payload.
     */
    query: IQuery | null;

    /**
     * An edge for our `ContactWhenGeohashAvailable`. May be used by Relay 1.
     */
    contactWhenGeohashAvailableEdge: IContactWhenGeohashAvailablesEdge | null;
  }

  interface IContactWhenGeohashAvailableEdgeOnUpdateContactWhenGeohashAvailablePayloadArguments {
    /**
     * The method to use when ordering `ContactWhenGeohashAvailable`.
     * @default ["PRIMARY_KEY_ASC"]
     */
    orderBy?: Array<ContactWhenGeohashAvailablesOrderBy> | null;
  }

  /**
   * All input for the `updateFlywaySchemaHistory` mutation.
   */
  interface IUpdateFlywaySchemaHistoryInput {
    /**
     * An arbitrary string value with no semantic meaning. Will be included in the payload verbatim. May be used to track mutations by the client.
     */
    clientMutationId?: string | null;

    /**
     * An object where the defined keys will be set on the `FlywaySchemaHistory` being updated.
     */
    patch: IFlywaySchemaHistoryPatch;
    installedRank: number;
  }

  /**
   * Represents an update to a `FlywaySchemaHistory`. Fields that are set will be updated.
   */
  interface IFlywaySchemaHistoryPatch {
    installedRank?: number | null;
    version?: string | null;
    description?: string | null;
    type?: string | null;
    script?: string | null;
    checksum?: number | null;
    installedBy?: string | null;
    installedOn?: any | null;
    executionTime?: number | null;
    success?: boolean | null;
  }

  /**
   * The output of our update `FlywaySchemaHistory` mutation.
   */
  interface IUpdateFlywaySchemaHistoryPayload {
    /**
     * The exact same `clientMutationId` that was provided in the mutation input, unchanged and unused. May be used by a client to track mutations.
     */
    clientMutationId: string | null;

    /**
     * The `FlywaySchemaHistory` that was updated by this mutation.
     */
    flywaySchemaHistory: IFlywaySchemaHistory | null;

    /**
     * Our root query field type. Allows us to run any query from our mutation payload.
     */
    query: IQuery | null;

    /**
     * An edge for our `FlywaySchemaHistory`. May be used by Relay 1.
     */
    flywaySchemaHistoryEdge: IFlywaySchemaHistoriesEdge | null;
  }

  interface IFlywaySchemaHistoryEdgeOnUpdateFlywaySchemaHistoryPayloadArguments {
    /**
     * The method to use when ordering `FlywaySchemaHistory`.
     * @default ["PRIMARY_KEY_ASC"]
     */
    orderBy?: Array<FlywaySchemaHistoriesOrderBy> | null;
  }

  /**
   * All input for the `updateJob` mutation.
   */
  interface IUpdateJobInput {
    /**
     * An arbitrary string value with no semantic meaning. Will be included in the payload verbatim. May be used to track mutations by the client.
     */
    clientMutationId?: string | null;

    /**
     * An object where the defined keys will be set on the `Job` being updated.
     */
    patch: IJobPatch;
    id: any;
  }

  /**
   * Represents an update to a `Job`. Fields that are set will be updated.
   */
  interface IJobPatch {
    id?: any | null;
    description?: string | null;
    minutesToComplete?: number | null;
    createdAt?: any | null;
    price?: number | null;
  }

  /**
   * The output of our update `Job` mutation.
   */
  interface IUpdateJobPayload {
    /**
     * The exact same `clientMutationId` that was provided in the mutation input, unchanged and unused. May be used by a client to track mutations.
     */
    clientMutationId: string | null;

    /**
     * The `Job` that was updated by this mutation.
     */
    job: IJob | null;

    /**
     * Our root query field type. Allows us to run any query from our mutation payload.
     */
    query: IQuery | null;

    /**
     * An edge for our `Job`. May be used by Relay 1.
     */
    jobEdge: IJobsEdge | null;
  }

  interface IJobEdgeOnUpdateJobPayloadArguments {
    /**
     * The method to use when ordering `Job`.
     * @default ["PRIMARY_KEY_ASC"]
     */
    orderBy?: Array<JobsOrderBy> | null;
  }

  /**
   * All input for the `updateLogClientError` mutation.
   */
  interface IUpdateLogClientErrorInput {
    /**
     * An arbitrary string value with no semantic meaning. Will be included in the payload verbatim. May be used to track mutations by the client.
     */
    clientMutationId?: string | null;

    /**
     * An object where the defined keys will be set on the `LogClientError` being updated.
     */
    patch: ILogClientErrorPatch;
    id: number;
  }

  /**
   * Represents an update to a `LogClientError`. Fields that are set will be updated.
   */
  interface ILogClientErrorPatch {
    id?: number | null;
    ts?: any | null;
    context?: any | null;
    error?: any | null;
  }

  /**
   * The output of our update `LogClientError` mutation.
   */
  interface IUpdateLogClientErrorPayload {
    /**
     * The exact same `clientMutationId` that was provided in the mutation input, unchanged and unused. May be used by a client to track mutations.
     */
    clientMutationId: string | null;

    /**
     * The `LogClientError` that was updated by this mutation.
     */
    logClientError: ILogClientError | null;

    /**
     * Our root query field type. Allows us to run any query from our mutation payload.
     */
    query: IQuery | null;

    /**
     * An edge for our `LogClientError`. May be used by Relay 1.
     */
    logClientErrorEdge: ILogClientErrorsEdge | null;
  }

  interface ILogClientErrorEdgeOnUpdateLogClientErrorPayloadArguments {
    /**
     * The method to use when ordering `LogClientError`.
     * @default ["PRIMARY_KEY_ASC"]
     */
    orderBy?: Array<LogClientErrorsOrderBy> | null;
  }

  /**
   * All input for the `updateMechanic` mutation.
   */
  interface IUpdateMechanicInput {
    /**
     * An arbitrary string value with no semantic meaning. Will be included in the payload verbatim. May be used to track mutations by the client.
     */
    clientMutationId?: string | null;

    /**
     * An object where the defined keys will be set on the `Mechanic` being updated.
     */
    patch: IMechanicPatch;
    id: any;
  }

  /**
   * Represents an update to a `Mechanic`. Fields that are set will be updated.
   */
  interface IMechanicPatch {
    id?: any | null;
    fullName?: string | null;
    rating?: number | null;
    createdAt?: any | null;
    geohashes?: Array<string | null> | null;
    travelTimeMinutes?: number | null;
    pictureUrl?: string | null;
    email?: string | null;
    phone?: string | null;
    address?: string | null;
  }

  /**
   * The output of our update `Mechanic` mutation.
   */
  interface IUpdateMechanicPayload {
    /**
     * The exact same `clientMutationId` that was provided in the mutation input, unchanged and unused. May be used by a client to track mutations.
     */
    clientMutationId: string | null;

    /**
     * The `Mechanic` that was updated by this mutation.
     */
    mechanic: IMechanic | null;

    /**
     * Our root query field type. Allows us to run any query from our mutation payload.
     */
    query: IQuery | null;

    /**
     * An edge for our `Mechanic`. May be used by Relay 1.
     */
    mechanicEdge: IMechanicsEdge | null;
  }

  interface IMechanicEdgeOnUpdateMechanicPayloadArguments {
    /**
     * The method to use when ordering `Mechanic`.
     * @default ["PRIMARY_KEY_ASC"]
     */
    orderBy?: Array<MechanicsOrderBy> | null;
  }

  /**
   * All input for the `updateMechanicJob` mutation.
   */
  interface IUpdateMechanicJobInput {
    /**
     * An arbitrary string value with no semantic meaning. Will be included in the payload verbatim. May be used to track mutations by the client.
     */
    clientMutationId?: string | null;

    /**
     * An object where the defined keys will be set on the `MechanicJob` being updated.
     */
    patch: IMechanicJobPatch;
    id: any;
  }

  /**
   * Represents an update to a `MechanicJob`. Fields that are set will be updated.
   */
  interface IMechanicJobPatch {
    id?: any | null;
    mechanicId?: any | null;
    jobId?: any | null;
  }

  /**
   * The output of our update `MechanicJob` mutation.
   */
  interface IUpdateMechanicJobPayload {
    /**
     * The exact same `clientMutationId` that was provided in the mutation input, unchanged and unused. May be used by a client to track mutations.
     */
    clientMutationId: string | null;

    /**
     * The `MechanicJob` that was updated by this mutation.
     */
    mechanicJob: IMechanicJob | null;

    /**
     * Our root query field type. Allows us to run any query from our mutation payload.
     */
    query: IQuery | null;

    /**
     * Reads a single `Mechanic` that is related to this `MechanicJob`.
     */
    mechanic: IMechanic | null;

    /**
     * Reads a single `Job` that is related to this `MechanicJob`.
     */
    job: IJob | null;

    /**
     * An edge for our `MechanicJob`. May be used by Relay 1.
     */
    mechanicJobEdge: IMechanicJobsEdge | null;
  }

  interface IMechanicJobEdgeOnUpdateMechanicJobPayloadArguments {
    /**
     * The method to use when ordering `MechanicJob`.
     * @default ["PRIMARY_KEY_ASC"]
     */
    orderBy?: Array<MechanicJobsOrderBy> | null;
  }

  /**
   * All input for the `updateTimeSlot` mutation.
   */
  interface IUpdateTimeSlotInput {
    /**
     * An arbitrary string value with no semantic meaning. Will be included in the payload verbatim. May be used to track mutations by the client.
     */
    clientMutationId?: string | null;

    /**
     * An object where the defined keys will be set on the `TimeSlot` being updated.
     */
    patch: ITimeSlotPatch;

    /**
     * E.g. 2019-12-31__09
     */
    id: string;
  }

  /**
   * Represents an update to a `TimeSlot`. Fields that are set will be updated.
   */
  interface ITimeSlotPatch {
    /**
     * E.g. 2019-12-31__09
     */
    id?: string | null;
    startTime?: any | null;
  }

  /**
   * The output of our update `TimeSlot` mutation.
   */
  interface IUpdateTimeSlotPayload {
    /**
     * The exact same `clientMutationId` that was provided in the mutation input, unchanged and unused. May be used by a client to track mutations.
     */
    clientMutationId: string | null;

    /**
     * The `TimeSlot` that was updated by this mutation.
     */
    timeSlot: ITimeSlot | null;

    /**
     * Our root query field type. Allows us to run any query from our mutation payload.
     */
    query: IQuery | null;

    /**
     * An edge for our `TimeSlot`. May be used by Relay 1.
     */
    timeSlotEdge: ITimeSlotsEdge | null;
  }

  interface ITimeSlotEdgeOnUpdateTimeSlotPayloadArguments {
    /**
     * The method to use when ordering `TimeSlot`.
     * @default ["PRIMARY_KEY_ASC"]
     */
    orderBy?: Array<TimeSlotsOrderBy> | null;
  }

  /**
   * All input for the `updateWorkingTime` mutation.
   */
  interface IUpdateWorkingTimeInput {
    /**
     * An arbitrary string value with no semantic meaning. Will be included in the payload verbatim. May be used to track mutations by the client.
     */
    clientMutationId?: string | null;

    /**
     * An object where the defined keys will be set on the `WorkingTime` being updated.
     */
    patch: IWorkingTimePatch;
    mechanicId: any;
    timeSlotId: string;
  }

  /**
   * Represents an update to a `WorkingTime`. Fields that are set will be updated.
   */
  interface IWorkingTimePatch {
    id?: any | null;
    mechanicId?: any | null;
    timeSlotId?: string | null;
    minutes?: number | null;
  }

  /**
   * The output of our update `WorkingTime` mutation.
   */
  interface IUpdateWorkingTimePayload {
    /**
     * The exact same `clientMutationId` that was provided in the mutation input, unchanged and unused. May be used by a client to track mutations.
     */
    clientMutationId: string | null;

    /**
     * The `WorkingTime` that was updated by this mutation.
     */
    workingTime: IWorkingTime | null;

    /**
     * Our root query field type. Allows us to run any query from our mutation payload.
     */
    query: IQuery | null;

    /**
     * Reads a single `Mechanic` that is related to this `WorkingTime`.
     */
    mechanic: IMechanic | null;

    /**
     * Reads a single `TimeSlot` that is related to this `WorkingTime`.
     */
    timeSlot: ITimeSlot | null;

    /**
     * An edge for our `WorkingTime`. May be used by Relay 1.
     */
    workingTimeEdge: IWorkingTimesEdge | null;
  }

  interface IWorkingTimeEdgeOnUpdateWorkingTimePayloadArguments {
    /**
     * The method to use when ordering `WorkingTime`.
     * @default ["PRIMARY_KEY_ASC"]
     */
    orderBy?: Array<WorkingTimesOrderBy> | null;
  }

  /**
   * All input for the `deleteBooking` mutation.
   */
  interface IDeleteBookingInput {
    /**
     * An arbitrary string value with no semantic meaning. Will be included in the payload verbatim. May be used to track mutations by the client.
     */
    clientMutationId?: string | null;
    id: any;
  }

  /**
   * The output of our delete `Booking` mutation.
   */
  interface IDeleteBookingPayload {
    /**
     * The exact same `clientMutationId` that was provided in the mutation input, unchanged and unused. May be used by a client to track mutations.
     */
    clientMutationId: string | null;

    /**
     * The `Booking` that was deleted by this mutation.
     */
    booking: IBooking | null;
    deletedBookingNodeId: string | null;

    /**
     * Our root query field type. Allows us to run any query from our mutation payload.
     */
    query: IQuery | null;

    /**
     * Reads a single `Mechanic` that is related to this `Booking`.
     */
    mechanic: IMechanic | null;

    /**
     * Reads a single `TimeSlot` that is related to this `Booking`.
     */
    timeSlot: ITimeSlot | null;

    /**
     * An edge for our `Booking`. May be used by Relay 1.
     */
    bookingEdge: IBookingsEdge | null;
  }

  interface IBookingEdgeOnDeleteBookingPayloadArguments {
    /**
     * The method to use when ordering `Booking`.
     * @default ["PRIMARY_KEY_ASC"]
     */
    orderBy?: Array<BookingsOrderBy> | null;
  }

  /**
   * All input for the `deleteBookingJob` mutation.
   */
  interface IDeleteBookingJobInput {
    /**
     * An arbitrary string value with no semantic meaning. Will be included in the payload verbatim. May be used to track mutations by the client.
     */
    clientMutationId?: string | null;
    id: any;
  }

  /**
   * The output of our delete `BookingJob` mutation.
   */
  interface IDeleteBookingJobPayload {
    /**
     * The exact same `clientMutationId` that was provided in the mutation input, unchanged and unused. May be used by a client to track mutations.
     */
    clientMutationId: string | null;

    /**
     * The `BookingJob` that was deleted by this mutation.
     */
    bookingJob: IBookingJob | null;
    deletedBookingJobNodeId: string | null;

    /**
     * Our root query field type. Allows us to run any query from our mutation payload.
     */
    query: IQuery | null;

    /**
     * Reads a single `Booking` that is related to this `BookingJob`.
     */
    booking: IBooking | null;

    /**
     * Reads a single `Job` that is related to this `BookingJob`.
     */
    job: IJob | null;

    /**
     * An edge for our `BookingJob`. May be used by Relay 1.
     */
    bookingJobEdge: IBookingJobsEdge | null;
  }

  interface IBookingJobEdgeOnDeleteBookingJobPayloadArguments {
    /**
     * The method to use when ordering `BookingJob`.
     * @default ["PRIMARY_KEY_ASC"]
     */
    orderBy?: Array<BookingJobsOrderBy> | null;
  }

  /**
   * All input for the `deleteCalendar` mutation.
   */
  interface IDeleteCalendarInput {
    /**
     * An arbitrary string value with no semantic meaning. Will be included in the payload verbatim. May be used to track mutations by the client.
     */
    clientMutationId?: string | null;
    dateDimId: number;
  }

  /**
   * The output of our delete `Calendar` mutation.
   */
  interface IDeleteCalendarPayload {
    /**
     * The exact same `clientMutationId` that was provided in the mutation input, unchanged and unused. May be used by a client to track mutations.
     */
    clientMutationId: string | null;

    /**
     * The `Calendar` that was deleted by this mutation.
     */
    calendar: ICalendar | null;
    deletedCalendarNodeId: string | null;

    /**
     * Our root query field type. Allows us to run any query from our mutation payload.
     */
    query: IQuery | null;

    /**
     * An edge for our `Calendar`. May be used by Relay 1.
     */
    calendarEdge: ICalendarsEdge | null;
  }

  interface ICalendarEdgeOnDeleteCalendarPayloadArguments {
    /**
     * The method to use when ordering `Calendar`.
     * @default ["PRIMARY_KEY_ASC"]
     */
    orderBy?: Array<CalendarsOrderBy> | null;
  }

  /**
   * All input for the `deleteContactWhenGeohashAvailable` mutation.
   */
  interface IDeleteContactWhenGeohashAvailableInput {
    /**
     * An arbitrary string value with no semantic meaning. Will be included in the payload verbatim. May be used to track mutations by the client.
     */
    clientMutationId?: string | null;
    id: any;
  }

  /**
   * The output of our delete `ContactWhenGeohashAvailable` mutation.
   */
  interface IDeleteContactWhenGeohashAvailablePayload {
    /**
     * The exact same `clientMutationId` that was provided in the mutation input, unchanged and unused. May be used by a client to track mutations.
     */
    clientMutationId: string | null;

    /**
     * The `ContactWhenGeohashAvailable` that was deleted by this mutation.
     */
    contactWhenGeohashAvailable: IContactWhenGeohashAvailable | null;
    deletedContactWhenGeohashAvailableNodeId: string | null;

    /**
     * Our root query field type. Allows us to run any query from our mutation payload.
     */
    query: IQuery | null;

    /**
     * An edge for our `ContactWhenGeohashAvailable`. May be used by Relay 1.
     */
    contactWhenGeohashAvailableEdge: IContactWhenGeohashAvailablesEdge | null;
  }

  interface IContactWhenGeohashAvailableEdgeOnDeleteContactWhenGeohashAvailablePayloadArguments {
    /**
     * The method to use when ordering `ContactWhenGeohashAvailable`.
     * @default ["PRIMARY_KEY_ASC"]
     */
    orderBy?: Array<ContactWhenGeohashAvailablesOrderBy> | null;
  }

  /**
   * All input for the `deleteFlywaySchemaHistory` mutation.
   */
  interface IDeleteFlywaySchemaHistoryInput {
    /**
     * An arbitrary string value with no semantic meaning. Will be included in the payload verbatim. May be used to track mutations by the client.
     */
    clientMutationId?: string | null;
    installedRank: number;
  }

  /**
   * The output of our delete `FlywaySchemaHistory` mutation.
   */
  interface IDeleteFlywaySchemaHistoryPayload {
    /**
     * The exact same `clientMutationId` that was provided in the mutation input, unchanged and unused. May be used by a client to track mutations.
     */
    clientMutationId: string | null;

    /**
     * The `FlywaySchemaHistory` that was deleted by this mutation.
     */
    flywaySchemaHistory: IFlywaySchemaHistory | null;
    deletedFlywaySchemaHistoryNodeId: string | null;

    /**
     * Our root query field type. Allows us to run any query from our mutation payload.
     */
    query: IQuery | null;

    /**
     * An edge for our `FlywaySchemaHistory`. May be used by Relay 1.
     */
    flywaySchemaHistoryEdge: IFlywaySchemaHistoriesEdge | null;
  }

  interface IFlywaySchemaHistoryEdgeOnDeleteFlywaySchemaHistoryPayloadArguments {
    /**
     * The method to use when ordering `FlywaySchemaHistory`.
     * @default ["PRIMARY_KEY_ASC"]
     */
    orderBy?: Array<FlywaySchemaHistoriesOrderBy> | null;
  }

  /**
   * All input for the `deleteJob` mutation.
   */
  interface IDeleteJobInput {
    /**
     * An arbitrary string value with no semantic meaning. Will be included in the payload verbatim. May be used to track mutations by the client.
     */
    clientMutationId?: string | null;
    id: any;
  }

  /**
   * The output of our delete `Job` mutation.
   */
  interface IDeleteJobPayload {
    /**
     * The exact same `clientMutationId` that was provided in the mutation input, unchanged and unused. May be used by a client to track mutations.
     */
    clientMutationId: string | null;

    /**
     * The `Job` that was deleted by this mutation.
     */
    job: IJob | null;
    deletedJobNodeId: string | null;

    /**
     * Our root query field type. Allows us to run any query from our mutation payload.
     */
    query: IQuery | null;

    /**
     * An edge for our `Job`. May be used by Relay 1.
     */
    jobEdge: IJobsEdge | null;
  }

  interface IJobEdgeOnDeleteJobPayloadArguments {
    /**
     * The method to use when ordering `Job`.
     * @default ["PRIMARY_KEY_ASC"]
     */
    orderBy?: Array<JobsOrderBy> | null;
  }

  /**
   * All input for the `deleteLogClientError` mutation.
   */
  interface IDeleteLogClientErrorInput {
    /**
     * An arbitrary string value with no semantic meaning. Will be included in the payload verbatim. May be used to track mutations by the client.
     */
    clientMutationId?: string | null;
    id: number;
  }

  /**
   * The output of our delete `LogClientError` mutation.
   */
  interface IDeleteLogClientErrorPayload {
    /**
     * The exact same `clientMutationId` that was provided in the mutation input, unchanged and unused. May be used by a client to track mutations.
     */
    clientMutationId: string | null;

    /**
     * The `LogClientError` that was deleted by this mutation.
     */
    logClientError: ILogClientError | null;
    deletedLogClientErrorNodeId: string | null;

    /**
     * Our root query field type. Allows us to run any query from our mutation payload.
     */
    query: IQuery | null;

    /**
     * An edge for our `LogClientError`. May be used by Relay 1.
     */
    logClientErrorEdge: ILogClientErrorsEdge | null;
  }

  interface ILogClientErrorEdgeOnDeleteLogClientErrorPayloadArguments {
    /**
     * The method to use when ordering `LogClientError`.
     * @default ["PRIMARY_KEY_ASC"]
     */
    orderBy?: Array<LogClientErrorsOrderBy> | null;
  }

  /**
   * All input for the `deleteMechanic` mutation.
   */
  interface IDeleteMechanicInput {
    /**
     * An arbitrary string value with no semantic meaning. Will be included in the payload verbatim. May be used to track mutations by the client.
     */
    clientMutationId?: string | null;
    id: any;
  }

  /**
   * The output of our delete `Mechanic` mutation.
   */
  interface IDeleteMechanicPayload {
    /**
     * The exact same `clientMutationId` that was provided in the mutation input, unchanged and unused. May be used by a client to track mutations.
     */
    clientMutationId: string | null;

    /**
     * The `Mechanic` that was deleted by this mutation.
     */
    mechanic: IMechanic | null;
    deletedMechanicNodeId: string | null;

    /**
     * Our root query field type. Allows us to run any query from our mutation payload.
     */
    query: IQuery | null;

    /**
     * An edge for our `Mechanic`. May be used by Relay 1.
     */
    mechanicEdge: IMechanicsEdge | null;
  }

  interface IMechanicEdgeOnDeleteMechanicPayloadArguments {
    /**
     * The method to use when ordering `Mechanic`.
     * @default ["PRIMARY_KEY_ASC"]
     */
    orderBy?: Array<MechanicsOrderBy> | null;
  }

  /**
   * All input for the `deleteMechanicJob` mutation.
   */
  interface IDeleteMechanicJobInput {
    /**
     * An arbitrary string value with no semantic meaning. Will be included in the payload verbatim. May be used to track mutations by the client.
     */
    clientMutationId?: string | null;
    id: any;
  }

  /**
   * The output of our delete `MechanicJob` mutation.
   */
  interface IDeleteMechanicJobPayload {
    /**
     * The exact same `clientMutationId` that was provided in the mutation input, unchanged and unused. May be used by a client to track mutations.
     */
    clientMutationId: string | null;

    /**
     * The `MechanicJob` that was deleted by this mutation.
     */
    mechanicJob: IMechanicJob | null;
    deletedMechanicJobNodeId: string | null;

    /**
     * Our root query field type. Allows us to run any query from our mutation payload.
     */
    query: IQuery | null;

    /**
     * Reads a single `Mechanic` that is related to this `MechanicJob`.
     */
    mechanic: IMechanic | null;

    /**
     * Reads a single `Job` that is related to this `MechanicJob`.
     */
    job: IJob | null;

    /**
     * An edge for our `MechanicJob`. May be used by Relay 1.
     */
    mechanicJobEdge: IMechanicJobsEdge | null;
  }

  interface IMechanicJobEdgeOnDeleteMechanicJobPayloadArguments {
    /**
     * The method to use when ordering `MechanicJob`.
     * @default ["PRIMARY_KEY_ASC"]
     */
    orderBy?: Array<MechanicJobsOrderBy> | null;
  }

  /**
   * All input for the `deleteTimeSlot` mutation.
   */
  interface IDeleteTimeSlotInput {
    /**
     * An arbitrary string value with no semantic meaning. Will be included in the payload verbatim. May be used to track mutations by the client.
     */
    clientMutationId?: string | null;

    /**
     * E.g. 2019-12-31__09
     */
    id: string;
  }

  /**
   * The output of our delete `TimeSlot` mutation.
   */
  interface IDeleteTimeSlotPayload {
    /**
     * The exact same `clientMutationId` that was provided in the mutation input, unchanged and unused. May be used by a client to track mutations.
     */
    clientMutationId: string | null;

    /**
     * The `TimeSlot` that was deleted by this mutation.
     */
    timeSlot: ITimeSlot | null;
    deletedTimeSlotNodeId: string | null;

    /**
     * Our root query field type. Allows us to run any query from our mutation payload.
     */
    query: IQuery | null;

    /**
     * An edge for our `TimeSlot`. May be used by Relay 1.
     */
    timeSlotEdge: ITimeSlotsEdge | null;
  }

  interface ITimeSlotEdgeOnDeleteTimeSlotPayloadArguments {
    /**
     * The method to use when ordering `TimeSlot`.
     * @default ["PRIMARY_KEY_ASC"]
     */
    orderBy?: Array<TimeSlotsOrderBy> | null;
  }

  /**
   * All input for the `deleteWorkingTime` mutation.
   */
  interface IDeleteWorkingTimeInput {
    /**
     * An arbitrary string value with no semantic meaning. Will be included in the payload verbatim. May be used to track mutations by the client.
     */
    clientMutationId?: string | null;
    mechanicId: any;
    timeSlotId: string;
  }

  /**
   * The output of our delete `WorkingTime` mutation.
   */
  interface IDeleteWorkingTimePayload {
    /**
     * The exact same `clientMutationId` that was provided in the mutation input, unchanged and unused. May be used by a client to track mutations.
     */
    clientMutationId: string | null;

    /**
     * The `WorkingTime` that was deleted by this mutation.
     */
    workingTime: IWorkingTime | null;
    deletedWorkingTimeNodeId: string | null;

    /**
     * Our root query field type. Allows us to run any query from our mutation payload.
     */
    query: IQuery | null;

    /**
     * Reads a single `Mechanic` that is related to this `WorkingTime`.
     */
    mechanic: IMechanic | null;

    /**
     * Reads a single `TimeSlot` that is related to this `WorkingTime`.
     */
    timeSlot: ITimeSlot | null;

    /**
     * An edge for our `WorkingTime`. May be used by Relay 1.
     */
    workingTimeEdge: IWorkingTimesEdge | null;
  }

  interface IWorkingTimeEdgeOnDeleteWorkingTimePayloadArguments {
    /**
     * The method to use when ordering `WorkingTime`.
     * @default ["PRIMARY_KEY_ASC"]
     */
    orderBy?: Array<WorkingTimesOrderBy> | null;
  }

  /**
   * All input for the `makeBooking` mutation.
   */
  interface IMakeBookingInput {
    /**
     * An arbitrary string value with no semantic meaning. Will be included in the payload verbatim. May be used to track mutations by the client.
     */
    clientMutationId?: string | null;
    mechanicId: any;
    timeSlotId: string;
    jobIds: Array<any | null>;
    longitude: number;
    latitude: number;
  }

  /**
   * The output of our `makeBooking` mutation.
   */
  interface IMakeBookingPayload {
    /**
     * The exact same `clientMutationId` that was provided in the mutation input, unchanged and unused. May be used by a client to track mutations.
     */
    clientMutationId: string | null;
    booking: IBooking | null;

    /**
     * Our root query field type. Allows us to run any query from our mutation payload.
     */
    query: IQuery | null;

    /**
     * Reads a single `Mechanic` that is related to this `Booking`.
     */
    mechanic: IMechanic | null;

    /**
     * Reads a single `TimeSlot` that is related to this `Booking`.
     */
    timeSlot: ITimeSlot | null;

    /**
     * An edge for our `Booking`. May be used by Relay 1.
     */
    bookingEdge: IBookingsEdge | null;
  }

  interface IBookingEdgeOnMakeBookingPayloadArguments {
    /**
     * The method to use when ordering `Booking`.
     * @default ["PRIMARY_KEY_ASC"]
     */
    orderBy?: Array<BookingsOrderBy> | null;
  }
}

// tslint:enable
