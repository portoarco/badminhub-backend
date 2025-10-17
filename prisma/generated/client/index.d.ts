
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Users
 * 
 */
export type Users = $Result.DefaultSelection<Prisma.$UsersPayload>
/**
 * Model Venues
 * 
 */
export type Venues = $Result.DefaultSelection<Prisma.$VenuesPayload>
/**
 * Model TimeSlots
 * 
 */
export type TimeSlots = $Result.DefaultSelection<Prisma.$TimeSlotsPayload>
/**
 * Model Bookings
 * 
 */
export type Bookings = $Result.DefaultSelection<Prisma.$BookingsPayload>
/**
 * Model BookingDetails
 * 
 */
export type BookingDetails = $Result.DefaultSelection<Prisma.$BookingDetailsPayload>
/**
 * Model Payments
 * 
 */
export type Payments = $Result.DefaultSelection<Prisma.$PaymentsPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const BookingStatus: {
  PENDING: 'PENDING',
  CONFIRMED: 'CONFIRMED',
  CANCELLED: 'CANCELLED'
};

export type BookingStatus = (typeof BookingStatus)[keyof typeof BookingStatus]


export const PaymentStatus: {
  PENDING: 'PENDING',
  PAID: 'PAID',
  FAILED: 'FAILED',
  EXPIRED: 'EXPIRED',
  CANCELLED: 'CANCELLED'
};

export type PaymentStatus = (typeof PaymentStatus)[keyof typeof PaymentStatus]

}

export type BookingStatus = $Enums.BookingStatus

export const BookingStatus: typeof $Enums.BookingStatus

export type PaymentStatus = $Enums.PaymentStatus

export const PaymentStatus: typeof $Enums.PaymentStatus

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.users.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.users.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.users`: Exposes CRUD operations for the **Users** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.users.findMany()
    * ```
    */
  get users(): Prisma.UsersDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.venues`: Exposes CRUD operations for the **Venues** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Venues
    * const venues = await prisma.venues.findMany()
    * ```
    */
  get venues(): Prisma.VenuesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.timeSlots`: Exposes CRUD operations for the **TimeSlots** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TimeSlots
    * const timeSlots = await prisma.timeSlots.findMany()
    * ```
    */
  get timeSlots(): Prisma.TimeSlotsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.bookings`: Exposes CRUD operations for the **Bookings** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Bookings
    * const bookings = await prisma.bookings.findMany()
    * ```
    */
  get bookings(): Prisma.BookingsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.bookingDetails`: Exposes CRUD operations for the **BookingDetails** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more BookingDetails
    * const bookingDetails = await prisma.bookingDetails.findMany()
    * ```
    */
  get bookingDetails(): Prisma.BookingDetailsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.payments`: Exposes CRUD operations for the **Payments** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Payments
    * const payments = await prisma.payments.findMany()
    * ```
    */
  get payments(): Prisma.PaymentsDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.17.1
   * Query Engine version: 272a37d34178c2894197e17273bf937f25acdeac
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Users: 'Users',
    Venues: 'Venues',
    TimeSlots: 'TimeSlots',
    Bookings: 'Bookings',
    BookingDetails: 'BookingDetails',
    Payments: 'Payments'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "users" | "venues" | "timeSlots" | "bookings" | "bookingDetails" | "payments"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Users: {
        payload: Prisma.$UsersPayload<ExtArgs>
        fields: Prisma.UsersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UsersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UsersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          findFirst: {
            args: Prisma.UsersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UsersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          findMany: {
            args: Prisma.UsersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>[]
          }
          create: {
            args: Prisma.UsersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          createMany: {
            args: Prisma.UsersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UsersCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>[]
          }
          delete: {
            args: Prisma.UsersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          update: {
            args: Prisma.UsersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          deleteMany: {
            args: Prisma.UsersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UsersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UsersUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>[]
          }
          upsert: {
            args: Prisma.UsersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          aggregate: {
            args: Prisma.UsersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsers>
          }
          groupBy: {
            args: Prisma.UsersGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsersGroupByOutputType>[]
          }
          count: {
            args: Prisma.UsersCountArgs<ExtArgs>
            result: $Utils.Optional<UsersCountAggregateOutputType> | number
          }
        }
      }
      Venues: {
        payload: Prisma.$VenuesPayload<ExtArgs>
        fields: Prisma.VenuesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VenuesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VenuesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VenuesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VenuesPayload>
          }
          findFirst: {
            args: Prisma.VenuesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VenuesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VenuesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VenuesPayload>
          }
          findMany: {
            args: Prisma.VenuesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VenuesPayload>[]
          }
          create: {
            args: Prisma.VenuesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VenuesPayload>
          }
          createMany: {
            args: Prisma.VenuesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.VenuesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VenuesPayload>[]
          }
          delete: {
            args: Prisma.VenuesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VenuesPayload>
          }
          update: {
            args: Prisma.VenuesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VenuesPayload>
          }
          deleteMany: {
            args: Prisma.VenuesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.VenuesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.VenuesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VenuesPayload>[]
          }
          upsert: {
            args: Prisma.VenuesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VenuesPayload>
          }
          aggregate: {
            args: Prisma.VenuesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVenues>
          }
          groupBy: {
            args: Prisma.VenuesGroupByArgs<ExtArgs>
            result: $Utils.Optional<VenuesGroupByOutputType>[]
          }
          count: {
            args: Prisma.VenuesCountArgs<ExtArgs>
            result: $Utils.Optional<VenuesCountAggregateOutputType> | number
          }
        }
      }
      TimeSlots: {
        payload: Prisma.$TimeSlotsPayload<ExtArgs>
        fields: Prisma.TimeSlotsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TimeSlotsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TimeSlotsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TimeSlotsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TimeSlotsPayload>
          }
          findFirst: {
            args: Prisma.TimeSlotsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TimeSlotsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TimeSlotsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TimeSlotsPayload>
          }
          findMany: {
            args: Prisma.TimeSlotsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TimeSlotsPayload>[]
          }
          create: {
            args: Prisma.TimeSlotsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TimeSlotsPayload>
          }
          createMany: {
            args: Prisma.TimeSlotsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TimeSlotsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TimeSlotsPayload>[]
          }
          delete: {
            args: Prisma.TimeSlotsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TimeSlotsPayload>
          }
          update: {
            args: Prisma.TimeSlotsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TimeSlotsPayload>
          }
          deleteMany: {
            args: Prisma.TimeSlotsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TimeSlotsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TimeSlotsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TimeSlotsPayload>[]
          }
          upsert: {
            args: Prisma.TimeSlotsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TimeSlotsPayload>
          }
          aggregate: {
            args: Prisma.TimeSlotsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTimeSlots>
          }
          groupBy: {
            args: Prisma.TimeSlotsGroupByArgs<ExtArgs>
            result: $Utils.Optional<TimeSlotsGroupByOutputType>[]
          }
          count: {
            args: Prisma.TimeSlotsCountArgs<ExtArgs>
            result: $Utils.Optional<TimeSlotsCountAggregateOutputType> | number
          }
        }
      }
      Bookings: {
        payload: Prisma.$BookingsPayload<ExtArgs>
        fields: Prisma.BookingsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BookingsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BookingsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingsPayload>
          }
          findFirst: {
            args: Prisma.BookingsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BookingsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingsPayload>
          }
          findMany: {
            args: Prisma.BookingsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingsPayload>[]
          }
          create: {
            args: Prisma.BookingsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingsPayload>
          }
          createMany: {
            args: Prisma.BookingsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BookingsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingsPayload>[]
          }
          delete: {
            args: Prisma.BookingsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingsPayload>
          }
          update: {
            args: Prisma.BookingsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingsPayload>
          }
          deleteMany: {
            args: Prisma.BookingsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BookingsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.BookingsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingsPayload>[]
          }
          upsert: {
            args: Prisma.BookingsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingsPayload>
          }
          aggregate: {
            args: Prisma.BookingsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBookings>
          }
          groupBy: {
            args: Prisma.BookingsGroupByArgs<ExtArgs>
            result: $Utils.Optional<BookingsGroupByOutputType>[]
          }
          count: {
            args: Prisma.BookingsCountArgs<ExtArgs>
            result: $Utils.Optional<BookingsCountAggregateOutputType> | number
          }
        }
      }
      BookingDetails: {
        payload: Prisma.$BookingDetailsPayload<ExtArgs>
        fields: Prisma.BookingDetailsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BookingDetailsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingDetailsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BookingDetailsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingDetailsPayload>
          }
          findFirst: {
            args: Prisma.BookingDetailsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingDetailsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BookingDetailsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingDetailsPayload>
          }
          findMany: {
            args: Prisma.BookingDetailsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingDetailsPayload>[]
          }
          create: {
            args: Prisma.BookingDetailsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingDetailsPayload>
          }
          createMany: {
            args: Prisma.BookingDetailsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BookingDetailsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingDetailsPayload>[]
          }
          delete: {
            args: Prisma.BookingDetailsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingDetailsPayload>
          }
          update: {
            args: Prisma.BookingDetailsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingDetailsPayload>
          }
          deleteMany: {
            args: Prisma.BookingDetailsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BookingDetailsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.BookingDetailsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingDetailsPayload>[]
          }
          upsert: {
            args: Prisma.BookingDetailsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingDetailsPayload>
          }
          aggregate: {
            args: Prisma.BookingDetailsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBookingDetails>
          }
          groupBy: {
            args: Prisma.BookingDetailsGroupByArgs<ExtArgs>
            result: $Utils.Optional<BookingDetailsGroupByOutputType>[]
          }
          count: {
            args: Prisma.BookingDetailsCountArgs<ExtArgs>
            result: $Utils.Optional<BookingDetailsCountAggregateOutputType> | number
          }
        }
      }
      Payments: {
        payload: Prisma.$PaymentsPayload<ExtArgs>
        fields: Prisma.PaymentsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PaymentsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PaymentsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentsPayload>
          }
          findFirst: {
            args: Prisma.PaymentsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PaymentsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentsPayload>
          }
          findMany: {
            args: Prisma.PaymentsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentsPayload>[]
          }
          create: {
            args: Prisma.PaymentsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentsPayload>
          }
          createMany: {
            args: Prisma.PaymentsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PaymentsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentsPayload>[]
          }
          delete: {
            args: Prisma.PaymentsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentsPayload>
          }
          update: {
            args: Prisma.PaymentsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentsPayload>
          }
          deleteMany: {
            args: Prisma.PaymentsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PaymentsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PaymentsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentsPayload>[]
          }
          upsert: {
            args: Prisma.PaymentsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentsPayload>
          }
          aggregate: {
            args: Prisma.PaymentsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePayments>
          }
          groupBy: {
            args: Prisma.PaymentsGroupByArgs<ExtArgs>
            result: $Utils.Optional<PaymentsGroupByOutputType>[]
          }
          count: {
            args: Prisma.PaymentsCountArgs<ExtArgs>
            result: $Utils.Optional<PaymentsCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    users?: UsersOmit
    venues?: VenuesOmit
    timeSlots?: TimeSlotsOmit
    bookings?: BookingsOmit
    bookingDetails?: BookingDetailsOmit
    payments?: PaymentsOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UsersCountOutputType
   */

  export type UsersCountOutputType = {
    bookings: number
  }

  export type UsersCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    bookings?: boolean | UsersCountOutputTypeCountBookingsArgs
  }

  // Custom InputTypes
  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsersCountOutputType
     */
    select?: UsersCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountBookingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BookingsWhereInput
  }


  /**
   * Count Type VenuesCountOutputType
   */

  export type VenuesCountOutputType = {
    time_slots: number
    booking_details: number
  }

  export type VenuesCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    time_slots?: boolean | VenuesCountOutputTypeCountTime_slotsArgs
    booking_details?: boolean | VenuesCountOutputTypeCountBooking_detailsArgs
  }

  // Custom InputTypes
  /**
   * VenuesCountOutputType without action
   */
  export type VenuesCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VenuesCountOutputType
     */
    select?: VenuesCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * VenuesCountOutputType without action
   */
  export type VenuesCountOutputTypeCountTime_slotsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TimeSlotsWhereInput
  }

  /**
   * VenuesCountOutputType without action
   */
  export type VenuesCountOutputTypeCountBooking_detailsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BookingDetailsWhereInput
  }


  /**
   * Count Type TimeSlotsCountOutputType
   */

  export type TimeSlotsCountOutputType = {
    booking_details: number
  }

  export type TimeSlotsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    booking_details?: boolean | TimeSlotsCountOutputTypeCountBooking_detailsArgs
  }

  // Custom InputTypes
  /**
   * TimeSlotsCountOutputType without action
   */
  export type TimeSlotsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TimeSlotsCountOutputType
     */
    select?: TimeSlotsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TimeSlotsCountOutputType without action
   */
  export type TimeSlotsCountOutputTypeCountBooking_detailsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BookingDetailsWhereInput
  }


  /**
   * Count Type BookingsCountOutputType
   */

  export type BookingsCountOutputType = {
    booking_details: number
  }

  export type BookingsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    booking_details?: boolean | BookingsCountOutputTypeCountBooking_detailsArgs
  }

  // Custom InputTypes
  /**
   * BookingsCountOutputType without action
   */
  export type BookingsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookingsCountOutputType
     */
    select?: BookingsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * BookingsCountOutputType without action
   */
  export type BookingsCountOutputTypeCountBooking_detailsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BookingDetailsWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Users
   */

  export type AggregateUsers = {
    _count: UsersCountAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  export type UsersMinAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    password: string | null
    phone: string | null
    created_at: Date | null
  }

  export type UsersMaxAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    password: string | null
    phone: string | null
    created_at: Date | null
  }

  export type UsersCountAggregateOutputType = {
    id: number
    name: number
    email: number
    password: number
    phone: number
    created_at: number
    _all: number
  }


  export type UsersMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    phone?: true
    created_at?: true
  }

  export type UsersMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    phone?: true
    created_at?: true
  }

  export type UsersCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    phone?: true
    created_at?: true
    _all?: true
  }

  export type UsersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to aggregate.
     */
    where?: UsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UsersOrderByWithRelationInput | UsersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UsersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UsersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsersMaxAggregateInputType
  }

  export type GetUsersAggregateType<T extends UsersAggregateArgs> = {
        [P in keyof T & keyof AggregateUsers]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsers[P]>
      : GetScalarType<T[P], AggregateUsers[P]>
  }




  export type UsersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UsersWhereInput
    orderBy?: UsersOrderByWithAggregationInput | UsersOrderByWithAggregationInput[]
    by: UsersScalarFieldEnum[] | UsersScalarFieldEnum
    having?: UsersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsersCountAggregateInputType | true
    _min?: UsersMinAggregateInputType
    _max?: UsersMaxAggregateInputType
  }

  export type UsersGroupByOutputType = {
    id: string
    name: string
    email: string
    password: string
    phone: string
    created_at: Date
    _count: UsersCountAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  type GetUsersGroupByPayload<T extends UsersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsersGroupByOutputType[P]>
            : GetScalarType<T[P], UsersGroupByOutputType[P]>
        }
      >
    >


  export type UsersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    phone?: boolean
    created_at?: boolean
    bookings?: boolean | Users$bookingsArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["users"]>

  export type UsersSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    phone?: boolean
    created_at?: boolean
  }, ExtArgs["result"]["users"]>

  export type UsersSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    phone?: boolean
    created_at?: boolean
  }, ExtArgs["result"]["users"]>

  export type UsersSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    phone?: boolean
    created_at?: boolean
  }

  export type UsersOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "password" | "phone" | "created_at", ExtArgs["result"]["users"]>
  export type UsersInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    bookings?: boolean | Users$bookingsArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UsersIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UsersIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UsersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Users"
    objects: {
      bookings: Prisma.$BookingsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      email: string
      password: string
      phone: string
      created_at: Date
    }, ExtArgs["result"]["users"]>
    composites: {}
  }

  type UsersGetPayload<S extends boolean | null | undefined | UsersDefaultArgs> = $Result.GetResult<Prisma.$UsersPayload, S>

  type UsersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UsersFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UsersCountAggregateInputType | true
    }

  export interface UsersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Users'], meta: { name: 'Users' } }
    /**
     * Find zero or one Users that matches the filter.
     * @param {UsersFindUniqueArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UsersFindUniqueArgs>(args: SelectSubset<T, UsersFindUniqueArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Users that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UsersFindUniqueOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UsersFindUniqueOrThrowArgs>(args: SelectSubset<T, UsersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersFindFirstArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UsersFindFirstArgs>(args?: SelectSubset<T, UsersFindFirstArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Users that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersFindFirstOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UsersFindFirstOrThrowArgs>(args?: SelectSubset<T, UsersFindFirstOrThrowArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.users.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.users.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const usersWithIdOnly = await prisma.users.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UsersFindManyArgs>(args?: SelectSubset<T, UsersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Users.
     * @param {UsersCreateArgs} args - Arguments to create a Users.
     * @example
     * // Create one Users
     * const Users = await prisma.users.create({
     *   data: {
     *     // ... data to create a Users
     *   }
     * })
     * 
     */
    create<T extends UsersCreateArgs>(args: SelectSubset<T, UsersCreateArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UsersCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const users = await prisma.users.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UsersCreateManyArgs>(args?: SelectSubset<T, UsersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UsersCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const users = await prisma.users.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const usersWithIdOnly = await prisma.users.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UsersCreateManyAndReturnArgs>(args?: SelectSubset<T, UsersCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Users.
     * @param {UsersDeleteArgs} args - Arguments to delete one Users.
     * @example
     * // Delete one Users
     * const Users = await prisma.users.delete({
     *   where: {
     *     // ... filter to delete one Users
     *   }
     * })
     * 
     */
    delete<T extends UsersDeleteArgs>(args: SelectSubset<T, UsersDeleteArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Users.
     * @param {UsersUpdateArgs} args - Arguments to update one Users.
     * @example
     * // Update one Users
     * const users = await prisma.users.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UsersUpdateArgs>(args: SelectSubset<T, UsersUpdateArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UsersDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.users.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UsersDeleteManyArgs>(args?: SelectSubset<T, UsersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const users = await prisma.users.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UsersUpdateManyArgs>(args: SelectSubset<T, UsersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UsersUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const users = await prisma.users.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const usersWithIdOnly = await prisma.users.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UsersUpdateManyAndReturnArgs>(args: SelectSubset<T, UsersUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Users.
     * @param {UsersUpsertArgs} args - Arguments to update or create a Users.
     * @example
     * // Update or create a Users
     * const users = await prisma.users.upsert({
     *   create: {
     *     // ... data to create a Users
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Users we want to update
     *   }
     * })
     */
    upsert<T extends UsersUpsertArgs>(args: SelectSubset<T, UsersUpsertArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.users.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UsersCountArgs>(
      args?: Subset<T, UsersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UsersAggregateArgs>(args: Subset<T, UsersAggregateArgs>): Prisma.PrismaPromise<GetUsersAggregateType<T>>

    /**
     * Group by Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UsersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UsersGroupByArgs['orderBy'] }
        : { orderBy?: UsersGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UsersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Users model
   */
  readonly fields: UsersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Users.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UsersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    bookings<T extends Users$bookingsArgs<ExtArgs> = {}>(args?: Subset<T, Users$bookingsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookingsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Users model
   */
  interface UsersFieldRefs {
    readonly id: FieldRef<"Users", 'String'>
    readonly name: FieldRef<"Users", 'String'>
    readonly email: FieldRef<"Users", 'String'>
    readonly password: FieldRef<"Users", 'String'>
    readonly phone: FieldRef<"Users", 'String'>
    readonly created_at: FieldRef<"Users", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Users findUnique
   */
  export type UsersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where: UsersWhereUniqueInput
  }

  /**
   * Users findUniqueOrThrow
   */
  export type UsersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where: UsersWhereUniqueInput
  }

  /**
   * Users findFirst
   */
  export type UsersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UsersOrderByWithRelationInput | UsersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UsersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * Users findFirstOrThrow
   */
  export type UsersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UsersOrderByWithRelationInput | UsersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UsersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * Users findMany
   */
  export type UsersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UsersOrderByWithRelationInput | UsersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UsersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * Users create
   */
  export type UsersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * The data needed to create a Users.
     */
    data: XOR<UsersCreateInput, UsersUncheckedCreateInput>
  }

  /**
   * Users createMany
   */
  export type UsersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UsersCreateManyInput | UsersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Users createManyAndReturn
   */
  export type UsersCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UsersCreateManyInput | UsersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Users update
   */
  export type UsersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * The data needed to update a Users.
     */
    data: XOR<UsersUpdateInput, UsersUncheckedUpdateInput>
    /**
     * Choose, which Users to update.
     */
    where: UsersWhereUniqueInput
  }

  /**
   * Users updateMany
   */
  export type UsersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UsersUpdateManyMutationInput, UsersUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UsersWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * Users updateManyAndReturn
   */
  export type UsersUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UsersUpdateManyMutationInput, UsersUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UsersWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * Users upsert
   */
  export type UsersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * The filter to search for the Users to update in case it exists.
     */
    where: UsersWhereUniqueInput
    /**
     * In case the Users found by the `where` argument doesn't exist, create a new Users with this data.
     */
    create: XOR<UsersCreateInput, UsersUncheckedCreateInput>
    /**
     * In case the Users was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UsersUpdateInput, UsersUncheckedUpdateInput>
  }

  /**
   * Users delete
   */
  export type UsersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter which Users to delete.
     */
    where: UsersWhereUniqueInput
  }

  /**
   * Users deleteMany
   */
  export type UsersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UsersWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * Users.bookings
   */
  export type Users$bookingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bookings
     */
    select?: BookingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bookings
     */
    omit?: BookingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingsInclude<ExtArgs> | null
    where?: BookingsWhereInput
    orderBy?: BookingsOrderByWithRelationInput | BookingsOrderByWithRelationInput[]
    cursor?: BookingsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BookingsScalarFieldEnum | BookingsScalarFieldEnum[]
  }

  /**
   * Users without action
   */
  export type UsersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
  }


  /**
   * Model Venues
   */

  export type AggregateVenues = {
    _count: VenuesCountAggregateOutputType | null
    _avg: VenuesAvgAggregateOutputType | null
    _sum: VenuesSumAggregateOutputType | null
    _min: VenuesMinAggregateOutputType | null
    _max: VenuesMaxAggregateOutputType | null
  }

  export type VenuesAvgAggregateOutputType = {
    id: number | null
    price: number | null
    rating: number | null
    reviewer: number | null
  }

  export type VenuesSumAggregateOutputType = {
    id: number | null
    price: number | null
    rating: number | null
    reviewer: number | null
  }

  export type VenuesMinAggregateOutputType = {
    id: number | null
    name: string | null
    city: string | null
    address: string | null
    cp_phone: string | null
    price: number | null
    description: string | null
    banner: string | null
    rating: number | null
    reviewer: number | null
    created_at: Date | null
  }

  export type VenuesMaxAggregateOutputType = {
    id: number | null
    name: string | null
    city: string | null
    address: string | null
    cp_phone: string | null
    price: number | null
    description: string | null
    banner: string | null
    rating: number | null
    reviewer: number | null
    created_at: Date | null
  }

  export type VenuesCountAggregateOutputType = {
    id: number
    name: number
    city: number
    address: number
    cp_phone: number
    price: number
    description: number
    banner: number
    rating: number
    reviewer: number
    created_at: number
    _all: number
  }


  export type VenuesAvgAggregateInputType = {
    id?: true
    price?: true
    rating?: true
    reviewer?: true
  }

  export type VenuesSumAggregateInputType = {
    id?: true
    price?: true
    rating?: true
    reviewer?: true
  }

  export type VenuesMinAggregateInputType = {
    id?: true
    name?: true
    city?: true
    address?: true
    cp_phone?: true
    price?: true
    description?: true
    banner?: true
    rating?: true
    reviewer?: true
    created_at?: true
  }

  export type VenuesMaxAggregateInputType = {
    id?: true
    name?: true
    city?: true
    address?: true
    cp_phone?: true
    price?: true
    description?: true
    banner?: true
    rating?: true
    reviewer?: true
    created_at?: true
  }

  export type VenuesCountAggregateInputType = {
    id?: true
    name?: true
    city?: true
    address?: true
    cp_phone?: true
    price?: true
    description?: true
    banner?: true
    rating?: true
    reviewer?: true
    created_at?: true
    _all?: true
  }

  export type VenuesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Venues to aggregate.
     */
    where?: VenuesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Venues to fetch.
     */
    orderBy?: VenuesOrderByWithRelationInput | VenuesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VenuesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Venues from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Venues.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Venues
    **/
    _count?: true | VenuesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: VenuesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: VenuesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VenuesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VenuesMaxAggregateInputType
  }

  export type GetVenuesAggregateType<T extends VenuesAggregateArgs> = {
        [P in keyof T & keyof AggregateVenues]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVenues[P]>
      : GetScalarType<T[P], AggregateVenues[P]>
  }




  export type VenuesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VenuesWhereInput
    orderBy?: VenuesOrderByWithAggregationInput | VenuesOrderByWithAggregationInput[]
    by: VenuesScalarFieldEnum[] | VenuesScalarFieldEnum
    having?: VenuesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VenuesCountAggregateInputType | true
    _avg?: VenuesAvgAggregateInputType
    _sum?: VenuesSumAggregateInputType
    _min?: VenuesMinAggregateInputType
    _max?: VenuesMaxAggregateInputType
  }

  export type VenuesGroupByOutputType = {
    id: number
    name: string
    city: string
    address: string
    cp_phone: string
    price: number
    description: string
    banner: string
    rating: number
    reviewer: number
    created_at: Date
    _count: VenuesCountAggregateOutputType | null
    _avg: VenuesAvgAggregateOutputType | null
    _sum: VenuesSumAggregateOutputType | null
    _min: VenuesMinAggregateOutputType | null
    _max: VenuesMaxAggregateOutputType | null
  }

  type GetVenuesGroupByPayload<T extends VenuesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VenuesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VenuesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VenuesGroupByOutputType[P]>
            : GetScalarType<T[P], VenuesGroupByOutputType[P]>
        }
      >
    >


  export type VenuesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    city?: boolean
    address?: boolean
    cp_phone?: boolean
    price?: boolean
    description?: boolean
    banner?: boolean
    rating?: boolean
    reviewer?: boolean
    created_at?: boolean
    time_slots?: boolean | Venues$time_slotsArgs<ExtArgs>
    booking_details?: boolean | Venues$booking_detailsArgs<ExtArgs>
    _count?: boolean | VenuesCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["venues"]>

  export type VenuesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    city?: boolean
    address?: boolean
    cp_phone?: boolean
    price?: boolean
    description?: boolean
    banner?: boolean
    rating?: boolean
    reviewer?: boolean
    created_at?: boolean
  }, ExtArgs["result"]["venues"]>

  export type VenuesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    city?: boolean
    address?: boolean
    cp_phone?: boolean
    price?: boolean
    description?: boolean
    banner?: boolean
    rating?: boolean
    reviewer?: boolean
    created_at?: boolean
  }, ExtArgs["result"]["venues"]>

  export type VenuesSelectScalar = {
    id?: boolean
    name?: boolean
    city?: boolean
    address?: boolean
    cp_phone?: boolean
    price?: boolean
    description?: boolean
    banner?: boolean
    rating?: boolean
    reviewer?: boolean
    created_at?: boolean
  }

  export type VenuesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "city" | "address" | "cp_phone" | "price" | "description" | "banner" | "rating" | "reviewer" | "created_at", ExtArgs["result"]["venues"]>
  export type VenuesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    time_slots?: boolean | Venues$time_slotsArgs<ExtArgs>
    booking_details?: boolean | Venues$booking_detailsArgs<ExtArgs>
    _count?: boolean | VenuesCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type VenuesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type VenuesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $VenuesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Venues"
    objects: {
      time_slots: Prisma.$TimeSlotsPayload<ExtArgs>[]
      booking_details: Prisma.$BookingDetailsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      city: string
      address: string
      cp_phone: string
      price: number
      description: string
      banner: string
      rating: number
      reviewer: number
      created_at: Date
    }, ExtArgs["result"]["venues"]>
    composites: {}
  }

  type VenuesGetPayload<S extends boolean | null | undefined | VenuesDefaultArgs> = $Result.GetResult<Prisma.$VenuesPayload, S>

  type VenuesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<VenuesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: VenuesCountAggregateInputType | true
    }

  export interface VenuesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Venues'], meta: { name: 'Venues' } }
    /**
     * Find zero or one Venues that matches the filter.
     * @param {VenuesFindUniqueArgs} args - Arguments to find a Venues
     * @example
     * // Get one Venues
     * const venues = await prisma.venues.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends VenuesFindUniqueArgs>(args: SelectSubset<T, VenuesFindUniqueArgs<ExtArgs>>): Prisma__VenuesClient<$Result.GetResult<Prisma.$VenuesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Venues that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {VenuesFindUniqueOrThrowArgs} args - Arguments to find a Venues
     * @example
     * // Get one Venues
     * const venues = await prisma.venues.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends VenuesFindUniqueOrThrowArgs>(args: SelectSubset<T, VenuesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__VenuesClient<$Result.GetResult<Prisma.$VenuesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Venues that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VenuesFindFirstArgs} args - Arguments to find a Venues
     * @example
     * // Get one Venues
     * const venues = await prisma.venues.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends VenuesFindFirstArgs>(args?: SelectSubset<T, VenuesFindFirstArgs<ExtArgs>>): Prisma__VenuesClient<$Result.GetResult<Prisma.$VenuesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Venues that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VenuesFindFirstOrThrowArgs} args - Arguments to find a Venues
     * @example
     * // Get one Venues
     * const venues = await prisma.venues.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends VenuesFindFirstOrThrowArgs>(args?: SelectSubset<T, VenuesFindFirstOrThrowArgs<ExtArgs>>): Prisma__VenuesClient<$Result.GetResult<Prisma.$VenuesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Venues that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VenuesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Venues
     * const venues = await prisma.venues.findMany()
     * 
     * // Get first 10 Venues
     * const venues = await prisma.venues.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const venuesWithIdOnly = await prisma.venues.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends VenuesFindManyArgs>(args?: SelectSubset<T, VenuesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VenuesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Venues.
     * @param {VenuesCreateArgs} args - Arguments to create a Venues.
     * @example
     * // Create one Venues
     * const Venues = await prisma.venues.create({
     *   data: {
     *     // ... data to create a Venues
     *   }
     * })
     * 
     */
    create<T extends VenuesCreateArgs>(args: SelectSubset<T, VenuesCreateArgs<ExtArgs>>): Prisma__VenuesClient<$Result.GetResult<Prisma.$VenuesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Venues.
     * @param {VenuesCreateManyArgs} args - Arguments to create many Venues.
     * @example
     * // Create many Venues
     * const venues = await prisma.venues.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends VenuesCreateManyArgs>(args?: SelectSubset<T, VenuesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Venues and returns the data saved in the database.
     * @param {VenuesCreateManyAndReturnArgs} args - Arguments to create many Venues.
     * @example
     * // Create many Venues
     * const venues = await prisma.venues.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Venues and only return the `id`
     * const venuesWithIdOnly = await prisma.venues.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends VenuesCreateManyAndReturnArgs>(args?: SelectSubset<T, VenuesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VenuesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Venues.
     * @param {VenuesDeleteArgs} args - Arguments to delete one Venues.
     * @example
     * // Delete one Venues
     * const Venues = await prisma.venues.delete({
     *   where: {
     *     // ... filter to delete one Venues
     *   }
     * })
     * 
     */
    delete<T extends VenuesDeleteArgs>(args: SelectSubset<T, VenuesDeleteArgs<ExtArgs>>): Prisma__VenuesClient<$Result.GetResult<Prisma.$VenuesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Venues.
     * @param {VenuesUpdateArgs} args - Arguments to update one Venues.
     * @example
     * // Update one Venues
     * const venues = await prisma.venues.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends VenuesUpdateArgs>(args: SelectSubset<T, VenuesUpdateArgs<ExtArgs>>): Prisma__VenuesClient<$Result.GetResult<Prisma.$VenuesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Venues.
     * @param {VenuesDeleteManyArgs} args - Arguments to filter Venues to delete.
     * @example
     * // Delete a few Venues
     * const { count } = await prisma.venues.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends VenuesDeleteManyArgs>(args?: SelectSubset<T, VenuesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Venues.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VenuesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Venues
     * const venues = await prisma.venues.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends VenuesUpdateManyArgs>(args: SelectSubset<T, VenuesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Venues and returns the data updated in the database.
     * @param {VenuesUpdateManyAndReturnArgs} args - Arguments to update many Venues.
     * @example
     * // Update many Venues
     * const venues = await prisma.venues.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Venues and only return the `id`
     * const venuesWithIdOnly = await prisma.venues.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends VenuesUpdateManyAndReturnArgs>(args: SelectSubset<T, VenuesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VenuesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Venues.
     * @param {VenuesUpsertArgs} args - Arguments to update or create a Venues.
     * @example
     * // Update or create a Venues
     * const venues = await prisma.venues.upsert({
     *   create: {
     *     // ... data to create a Venues
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Venues we want to update
     *   }
     * })
     */
    upsert<T extends VenuesUpsertArgs>(args: SelectSubset<T, VenuesUpsertArgs<ExtArgs>>): Prisma__VenuesClient<$Result.GetResult<Prisma.$VenuesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Venues.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VenuesCountArgs} args - Arguments to filter Venues to count.
     * @example
     * // Count the number of Venues
     * const count = await prisma.venues.count({
     *   where: {
     *     // ... the filter for the Venues we want to count
     *   }
     * })
    **/
    count<T extends VenuesCountArgs>(
      args?: Subset<T, VenuesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VenuesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Venues.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VenuesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends VenuesAggregateArgs>(args: Subset<T, VenuesAggregateArgs>): Prisma.PrismaPromise<GetVenuesAggregateType<T>>

    /**
     * Group by Venues.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VenuesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends VenuesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VenuesGroupByArgs['orderBy'] }
        : { orderBy?: VenuesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, VenuesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVenuesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Venues model
   */
  readonly fields: VenuesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Venues.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VenuesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    time_slots<T extends Venues$time_slotsArgs<ExtArgs> = {}>(args?: Subset<T, Venues$time_slotsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TimeSlotsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    booking_details<T extends Venues$booking_detailsArgs<ExtArgs> = {}>(args?: Subset<T, Venues$booking_detailsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookingDetailsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Venues model
   */
  interface VenuesFieldRefs {
    readonly id: FieldRef<"Venues", 'Int'>
    readonly name: FieldRef<"Venues", 'String'>
    readonly city: FieldRef<"Venues", 'String'>
    readonly address: FieldRef<"Venues", 'String'>
    readonly cp_phone: FieldRef<"Venues", 'String'>
    readonly price: FieldRef<"Venues", 'Int'>
    readonly description: FieldRef<"Venues", 'String'>
    readonly banner: FieldRef<"Venues", 'String'>
    readonly rating: FieldRef<"Venues", 'Float'>
    readonly reviewer: FieldRef<"Venues", 'Int'>
    readonly created_at: FieldRef<"Venues", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Venues findUnique
   */
  export type VenuesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Venues
     */
    select?: VenuesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Venues
     */
    omit?: VenuesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VenuesInclude<ExtArgs> | null
    /**
     * Filter, which Venues to fetch.
     */
    where: VenuesWhereUniqueInput
  }

  /**
   * Venues findUniqueOrThrow
   */
  export type VenuesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Venues
     */
    select?: VenuesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Venues
     */
    omit?: VenuesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VenuesInclude<ExtArgs> | null
    /**
     * Filter, which Venues to fetch.
     */
    where: VenuesWhereUniqueInput
  }

  /**
   * Venues findFirst
   */
  export type VenuesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Venues
     */
    select?: VenuesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Venues
     */
    omit?: VenuesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VenuesInclude<ExtArgs> | null
    /**
     * Filter, which Venues to fetch.
     */
    where?: VenuesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Venues to fetch.
     */
    orderBy?: VenuesOrderByWithRelationInput | VenuesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Venues.
     */
    cursor?: VenuesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Venues from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Venues.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Venues.
     */
    distinct?: VenuesScalarFieldEnum | VenuesScalarFieldEnum[]
  }

  /**
   * Venues findFirstOrThrow
   */
  export type VenuesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Venues
     */
    select?: VenuesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Venues
     */
    omit?: VenuesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VenuesInclude<ExtArgs> | null
    /**
     * Filter, which Venues to fetch.
     */
    where?: VenuesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Venues to fetch.
     */
    orderBy?: VenuesOrderByWithRelationInput | VenuesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Venues.
     */
    cursor?: VenuesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Venues from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Venues.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Venues.
     */
    distinct?: VenuesScalarFieldEnum | VenuesScalarFieldEnum[]
  }

  /**
   * Venues findMany
   */
  export type VenuesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Venues
     */
    select?: VenuesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Venues
     */
    omit?: VenuesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VenuesInclude<ExtArgs> | null
    /**
     * Filter, which Venues to fetch.
     */
    where?: VenuesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Venues to fetch.
     */
    orderBy?: VenuesOrderByWithRelationInput | VenuesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Venues.
     */
    cursor?: VenuesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Venues from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Venues.
     */
    skip?: number
    distinct?: VenuesScalarFieldEnum | VenuesScalarFieldEnum[]
  }

  /**
   * Venues create
   */
  export type VenuesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Venues
     */
    select?: VenuesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Venues
     */
    omit?: VenuesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VenuesInclude<ExtArgs> | null
    /**
     * The data needed to create a Venues.
     */
    data: XOR<VenuesCreateInput, VenuesUncheckedCreateInput>
  }

  /**
   * Venues createMany
   */
  export type VenuesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Venues.
     */
    data: VenuesCreateManyInput | VenuesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Venues createManyAndReturn
   */
  export type VenuesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Venues
     */
    select?: VenuesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Venues
     */
    omit?: VenuesOmit<ExtArgs> | null
    /**
     * The data used to create many Venues.
     */
    data: VenuesCreateManyInput | VenuesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Venues update
   */
  export type VenuesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Venues
     */
    select?: VenuesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Venues
     */
    omit?: VenuesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VenuesInclude<ExtArgs> | null
    /**
     * The data needed to update a Venues.
     */
    data: XOR<VenuesUpdateInput, VenuesUncheckedUpdateInput>
    /**
     * Choose, which Venues to update.
     */
    where: VenuesWhereUniqueInput
  }

  /**
   * Venues updateMany
   */
  export type VenuesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Venues.
     */
    data: XOR<VenuesUpdateManyMutationInput, VenuesUncheckedUpdateManyInput>
    /**
     * Filter which Venues to update
     */
    where?: VenuesWhereInput
    /**
     * Limit how many Venues to update.
     */
    limit?: number
  }

  /**
   * Venues updateManyAndReturn
   */
  export type VenuesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Venues
     */
    select?: VenuesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Venues
     */
    omit?: VenuesOmit<ExtArgs> | null
    /**
     * The data used to update Venues.
     */
    data: XOR<VenuesUpdateManyMutationInput, VenuesUncheckedUpdateManyInput>
    /**
     * Filter which Venues to update
     */
    where?: VenuesWhereInput
    /**
     * Limit how many Venues to update.
     */
    limit?: number
  }

  /**
   * Venues upsert
   */
  export type VenuesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Venues
     */
    select?: VenuesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Venues
     */
    omit?: VenuesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VenuesInclude<ExtArgs> | null
    /**
     * The filter to search for the Venues to update in case it exists.
     */
    where: VenuesWhereUniqueInput
    /**
     * In case the Venues found by the `where` argument doesn't exist, create a new Venues with this data.
     */
    create: XOR<VenuesCreateInput, VenuesUncheckedCreateInput>
    /**
     * In case the Venues was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VenuesUpdateInput, VenuesUncheckedUpdateInput>
  }

  /**
   * Venues delete
   */
  export type VenuesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Venues
     */
    select?: VenuesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Venues
     */
    omit?: VenuesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VenuesInclude<ExtArgs> | null
    /**
     * Filter which Venues to delete.
     */
    where: VenuesWhereUniqueInput
  }

  /**
   * Venues deleteMany
   */
  export type VenuesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Venues to delete
     */
    where?: VenuesWhereInput
    /**
     * Limit how many Venues to delete.
     */
    limit?: number
  }

  /**
   * Venues.time_slots
   */
  export type Venues$time_slotsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TimeSlots
     */
    select?: TimeSlotsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TimeSlots
     */
    omit?: TimeSlotsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TimeSlotsInclude<ExtArgs> | null
    where?: TimeSlotsWhereInput
    orderBy?: TimeSlotsOrderByWithRelationInput | TimeSlotsOrderByWithRelationInput[]
    cursor?: TimeSlotsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TimeSlotsScalarFieldEnum | TimeSlotsScalarFieldEnum[]
  }

  /**
   * Venues.booking_details
   */
  export type Venues$booking_detailsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookingDetails
     */
    select?: BookingDetailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookingDetails
     */
    omit?: BookingDetailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingDetailsInclude<ExtArgs> | null
    where?: BookingDetailsWhereInput
    orderBy?: BookingDetailsOrderByWithRelationInput | BookingDetailsOrderByWithRelationInput[]
    cursor?: BookingDetailsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BookingDetailsScalarFieldEnum | BookingDetailsScalarFieldEnum[]
  }

  /**
   * Venues without action
   */
  export type VenuesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Venues
     */
    select?: VenuesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Venues
     */
    omit?: VenuesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VenuesInclude<ExtArgs> | null
  }


  /**
   * Model TimeSlots
   */

  export type AggregateTimeSlots = {
    _count: TimeSlotsCountAggregateOutputType | null
    _avg: TimeSlotsAvgAggregateOutputType | null
    _sum: TimeSlotsSumAggregateOutputType | null
    _min: TimeSlotsMinAggregateOutputType | null
    _max: TimeSlotsMaxAggregateOutputType | null
  }

  export type TimeSlotsAvgAggregateOutputType = {
    id: number | null
    venues_id: number | null
  }

  export type TimeSlotsSumAggregateOutputType = {
    id: number | null
    venues_id: number | null
  }

  export type TimeSlotsMinAggregateOutputType = {
    id: number | null
    venues_id: number | null
    start_time: Date | null
    end_time: Date | null
    isBooked: boolean | null
    created_at: Date | null
  }

  export type TimeSlotsMaxAggregateOutputType = {
    id: number | null
    venues_id: number | null
    start_time: Date | null
    end_time: Date | null
    isBooked: boolean | null
    created_at: Date | null
  }

  export type TimeSlotsCountAggregateOutputType = {
    id: number
    venues_id: number
    start_time: number
    end_time: number
    isBooked: number
    created_at: number
    _all: number
  }


  export type TimeSlotsAvgAggregateInputType = {
    id?: true
    venues_id?: true
  }

  export type TimeSlotsSumAggregateInputType = {
    id?: true
    venues_id?: true
  }

  export type TimeSlotsMinAggregateInputType = {
    id?: true
    venues_id?: true
    start_time?: true
    end_time?: true
    isBooked?: true
    created_at?: true
  }

  export type TimeSlotsMaxAggregateInputType = {
    id?: true
    venues_id?: true
    start_time?: true
    end_time?: true
    isBooked?: true
    created_at?: true
  }

  export type TimeSlotsCountAggregateInputType = {
    id?: true
    venues_id?: true
    start_time?: true
    end_time?: true
    isBooked?: true
    created_at?: true
    _all?: true
  }

  export type TimeSlotsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TimeSlots to aggregate.
     */
    where?: TimeSlotsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TimeSlots to fetch.
     */
    orderBy?: TimeSlotsOrderByWithRelationInput | TimeSlotsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TimeSlotsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TimeSlots from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TimeSlots.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TimeSlots
    **/
    _count?: true | TimeSlotsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TimeSlotsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TimeSlotsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TimeSlotsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TimeSlotsMaxAggregateInputType
  }

  export type GetTimeSlotsAggregateType<T extends TimeSlotsAggregateArgs> = {
        [P in keyof T & keyof AggregateTimeSlots]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTimeSlots[P]>
      : GetScalarType<T[P], AggregateTimeSlots[P]>
  }




  export type TimeSlotsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TimeSlotsWhereInput
    orderBy?: TimeSlotsOrderByWithAggregationInput | TimeSlotsOrderByWithAggregationInput[]
    by: TimeSlotsScalarFieldEnum[] | TimeSlotsScalarFieldEnum
    having?: TimeSlotsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TimeSlotsCountAggregateInputType | true
    _avg?: TimeSlotsAvgAggregateInputType
    _sum?: TimeSlotsSumAggregateInputType
    _min?: TimeSlotsMinAggregateInputType
    _max?: TimeSlotsMaxAggregateInputType
  }

  export type TimeSlotsGroupByOutputType = {
    id: number
    venues_id: number
    start_time: Date
    end_time: Date
    isBooked: boolean
    created_at: Date
    _count: TimeSlotsCountAggregateOutputType | null
    _avg: TimeSlotsAvgAggregateOutputType | null
    _sum: TimeSlotsSumAggregateOutputType | null
    _min: TimeSlotsMinAggregateOutputType | null
    _max: TimeSlotsMaxAggregateOutputType | null
  }

  type GetTimeSlotsGroupByPayload<T extends TimeSlotsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TimeSlotsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TimeSlotsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TimeSlotsGroupByOutputType[P]>
            : GetScalarType<T[P], TimeSlotsGroupByOutputType[P]>
        }
      >
    >


  export type TimeSlotsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    venues_id?: boolean
    start_time?: boolean
    end_time?: boolean
    isBooked?: boolean
    created_at?: boolean
    venue?: boolean | VenuesDefaultArgs<ExtArgs>
    booking_details?: boolean | TimeSlots$booking_detailsArgs<ExtArgs>
    _count?: boolean | TimeSlotsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["timeSlots"]>

  export type TimeSlotsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    venues_id?: boolean
    start_time?: boolean
    end_time?: boolean
    isBooked?: boolean
    created_at?: boolean
    venue?: boolean | VenuesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["timeSlots"]>

  export type TimeSlotsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    venues_id?: boolean
    start_time?: boolean
    end_time?: boolean
    isBooked?: boolean
    created_at?: boolean
    venue?: boolean | VenuesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["timeSlots"]>

  export type TimeSlotsSelectScalar = {
    id?: boolean
    venues_id?: boolean
    start_time?: boolean
    end_time?: boolean
    isBooked?: boolean
    created_at?: boolean
  }

  export type TimeSlotsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "venues_id" | "start_time" | "end_time" | "isBooked" | "created_at", ExtArgs["result"]["timeSlots"]>
  export type TimeSlotsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    venue?: boolean | VenuesDefaultArgs<ExtArgs>
    booking_details?: boolean | TimeSlots$booking_detailsArgs<ExtArgs>
    _count?: boolean | TimeSlotsCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type TimeSlotsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    venue?: boolean | VenuesDefaultArgs<ExtArgs>
  }
  export type TimeSlotsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    venue?: boolean | VenuesDefaultArgs<ExtArgs>
  }

  export type $TimeSlotsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TimeSlots"
    objects: {
      venue: Prisma.$VenuesPayload<ExtArgs>
      booking_details: Prisma.$BookingDetailsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      venues_id: number
      start_time: Date
      end_time: Date
      isBooked: boolean
      created_at: Date
    }, ExtArgs["result"]["timeSlots"]>
    composites: {}
  }

  type TimeSlotsGetPayload<S extends boolean | null | undefined | TimeSlotsDefaultArgs> = $Result.GetResult<Prisma.$TimeSlotsPayload, S>

  type TimeSlotsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TimeSlotsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TimeSlotsCountAggregateInputType | true
    }

  export interface TimeSlotsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TimeSlots'], meta: { name: 'TimeSlots' } }
    /**
     * Find zero or one TimeSlots that matches the filter.
     * @param {TimeSlotsFindUniqueArgs} args - Arguments to find a TimeSlots
     * @example
     * // Get one TimeSlots
     * const timeSlots = await prisma.timeSlots.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TimeSlotsFindUniqueArgs>(args: SelectSubset<T, TimeSlotsFindUniqueArgs<ExtArgs>>): Prisma__TimeSlotsClient<$Result.GetResult<Prisma.$TimeSlotsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TimeSlots that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TimeSlotsFindUniqueOrThrowArgs} args - Arguments to find a TimeSlots
     * @example
     * // Get one TimeSlots
     * const timeSlots = await prisma.timeSlots.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TimeSlotsFindUniqueOrThrowArgs>(args: SelectSubset<T, TimeSlotsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TimeSlotsClient<$Result.GetResult<Prisma.$TimeSlotsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TimeSlots that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TimeSlotsFindFirstArgs} args - Arguments to find a TimeSlots
     * @example
     * // Get one TimeSlots
     * const timeSlots = await prisma.timeSlots.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TimeSlotsFindFirstArgs>(args?: SelectSubset<T, TimeSlotsFindFirstArgs<ExtArgs>>): Prisma__TimeSlotsClient<$Result.GetResult<Prisma.$TimeSlotsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TimeSlots that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TimeSlotsFindFirstOrThrowArgs} args - Arguments to find a TimeSlots
     * @example
     * // Get one TimeSlots
     * const timeSlots = await prisma.timeSlots.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TimeSlotsFindFirstOrThrowArgs>(args?: SelectSubset<T, TimeSlotsFindFirstOrThrowArgs<ExtArgs>>): Prisma__TimeSlotsClient<$Result.GetResult<Prisma.$TimeSlotsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TimeSlots that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TimeSlotsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TimeSlots
     * const timeSlots = await prisma.timeSlots.findMany()
     * 
     * // Get first 10 TimeSlots
     * const timeSlots = await prisma.timeSlots.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const timeSlotsWithIdOnly = await prisma.timeSlots.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TimeSlotsFindManyArgs>(args?: SelectSubset<T, TimeSlotsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TimeSlotsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TimeSlots.
     * @param {TimeSlotsCreateArgs} args - Arguments to create a TimeSlots.
     * @example
     * // Create one TimeSlots
     * const TimeSlots = await prisma.timeSlots.create({
     *   data: {
     *     // ... data to create a TimeSlots
     *   }
     * })
     * 
     */
    create<T extends TimeSlotsCreateArgs>(args: SelectSubset<T, TimeSlotsCreateArgs<ExtArgs>>): Prisma__TimeSlotsClient<$Result.GetResult<Prisma.$TimeSlotsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TimeSlots.
     * @param {TimeSlotsCreateManyArgs} args - Arguments to create many TimeSlots.
     * @example
     * // Create many TimeSlots
     * const timeSlots = await prisma.timeSlots.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TimeSlotsCreateManyArgs>(args?: SelectSubset<T, TimeSlotsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TimeSlots and returns the data saved in the database.
     * @param {TimeSlotsCreateManyAndReturnArgs} args - Arguments to create many TimeSlots.
     * @example
     * // Create many TimeSlots
     * const timeSlots = await prisma.timeSlots.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TimeSlots and only return the `id`
     * const timeSlotsWithIdOnly = await prisma.timeSlots.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TimeSlotsCreateManyAndReturnArgs>(args?: SelectSubset<T, TimeSlotsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TimeSlotsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a TimeSlots.
     * @param {TimeSlotsDeleteArgs} args - Arguments to delete one TimeSlots.
     * @example
     * // Delete one TimeSlots
     * const TimeSlots = await prisma.timeSlots.delete({
     *   where: {
     *     // ... filter to delete one TimeSlots
     *   }
     * })
     * 
     */
    delete<T extends TimeSlotsDeleteArgs>(args: SelectSubset<T, TimeSlotsDeleteArgs<ExtArgs>>): Prisma__TimeSlotsClient<$Result.GetResult<Prisma.$TimeSlotsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TimeSlots.
     * @param {TimeSlotsUpdateArgs} args - Arguments to update one TimeSlots.
     * @example
     * // Update one TimeSlots
     * const timeSlots = await prisma.timeSlots.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TimeSlotsUpdateArgs>(args: SelectSubset<T, TimeSlotsUpdateArgs<ExtArgs>>): Prisma__TimeSlotsClient<$Result.GetResult<Prisma.$TimeSlotsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TimeSlots.
     * @param {TimeSlotsDeleteManyArgs} args - Arguments to filter TimeSlots to delete.
     * @example
     * // Delete a few TimeSlots
     * const { count } = await prisma.timeSlots.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TimeSlotsDeleteManyArgs>(args?: SelectSubset<T, TimeSlotsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TimeSlots.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TimeSlotsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TimeSlots
     * const timeSlots = await prisma.timeSlots.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TimeSlotsUpdateManyArgs>(args: SelectSubset<T, TimeSlotsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TimeSlots and returns the data updated in the database.
     * @param {TimeSlotsUpdateManyAndReturnArgs} args - Arguments to update many TimeSlots.
     * @example
     * // Update many TimeSlots
     * const timeSlots = await prisma.timeSlots.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more TimeSlots and only return the `id`
     * const timeSlotsWithIdOnly = await prisma.timeSlots.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TimeSlotsUpdateManyAndReturnArgs>(args: SelectSubset<T, TimeSlotsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TimeSlotsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one TimeSlots.
     * @param {TimeSlotsUpsertArgs} args - Arguments to update or create a TimeSlots.
     * @example
     * // Update or create a TimeSlots
     * const timeSlots = await prisma.timeSlots.upsert({
     *   create: {
     *     // ... data to create a TimeSlots
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TimeSlots we want to update
     *   }
     * })
     */
    upsert<T extends TimeSlotsUpsertArgs>(args: SelectSubset<T, TimeSlotsUpsertArgs<ExtArgs>>): Prisma__TimeSlotsClient<$Result.GetResult<Prisma.$TimeSlotsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TimeSlots.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TimeSlotsCountArgs} args - Arguments to filter TimeSlots to count.
     * @example
     * // Count the number of TimeSlots
     * const count = await prisma.timeSlots.count({
     *   where: {
     *     // ... the filter for the TimeSlots we want to count
     *   }
     * })
    **/
    count<T extends TimeSlotsCountArgs>(
      args?: Subset<T, TimeSlotsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TimeSlotsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TimeSlots.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TimeSlotsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TimeSlotsAggregateArgs>(args: Subset<T, TimeSlotsAggregateArgs>): Prisma.PrismaPromise<GetTimeSlotsAggregateType<T>>

    /**
     * Group by TimeSlots.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TimeSlotsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TimeSlotsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TimeSlotsGroupByArgs['orderBy'] }
        : { orderBy?: TimeSlotsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TimeSlotsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTimeSlotsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TimeSlots model
   */
  readonly fields: TimeSlotsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TimeSlots.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TimeSlotsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    venue<T extends VenuesDefaultArgs<ExtArgs> = {}>(args?: Subset<T, VenuesDefaultArgs<ExtArgs>>): Prisma__VenuesClient<$Result.GetResult<Prisma.$VenuesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    booking_details<T extends TimeSlots$booking_detailsArgs<ExtArgs> = {}>(args?: Subset<T, TimeSlots$booking_detailsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookingDetailsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the TimeSlots model
   */
  interface TimeSlotsFieldRefs {
    readonly id: FieldRef<"TimeSlots", 'Int'>
    readonly venues_id: FieldRef<"TimeSlots", 'Int'>
    readonly start_time: FieldRef<"TimeSlots", 'DateTime'>
    readonly end_time: FieldRef<"TimeSlots", 'DateTime'>
    readonly isBooked: FieldRef<"TimeSlots", 'Boolean'>
    readonly created_at: FieldRef<"TimeSlots", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * TimeSlots findUnique
   */
  export type TimeSlotsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TimeSlots
     */
    select?: TimeSlotsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TimeSlots
     */
    omit?: TimeSlotsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TimeSlotsInclude<ExtArgs> | null
    /**
     * Filter, which TimeSlots to fetch.
     */
    where: TimeSlotsWhereUniqueInput
  }

  /**
   * TimeSlots findUniqueOrThrow
   */
  export type TimeSlotsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TimeSlots
     */
    select?: TimeSlotsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TimeSlots
     */
    omit?: TimeSlotsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TimeSlotsInclude<ExtArgs> | null
    /**
     * Filter, which TimeSlots to fetch.
     */
    where: TimeSlotsWhereUniqueInput
  }

  /**
   * TimeSlots findFirst
   */
  export type TimeSlotsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TimeSlots
     */
    select?: TimeSlotsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TimeSlots
     */
    omit?: TimeSlotsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TimeSlotsInclude<ExtArgs> | null
    /**
     * Filter, which TimeSlots to fetch.
     */
    where?: TimeSlotsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TimeSlots to fetch.
     */
    orderBy?: TimeSlotsOrderByWithRelationInput | TimeSlotsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TimeSlots.
     */
    cursor?: TimeSlotsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TimeSlots from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TimeSlots.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TimeSlots.
     */
    distinct?: TimeSlotsScalarFieldEnum | TimeSlotsScalarFieldEnum[]
  }

  /**
   * TimeSlots findFirstOrThrow
   */
  export type TimeSlotsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TimeSlots
     */
    select?: TimeSlotsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TimeSlots
     */
    omit?: TimeSlotsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TimeSlotsInclude<ExtArgs> | null
    /**
     * Filter, which TimeSlots to fetch.
     */
    where?: TimeSlotsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TimeSlots to fetch.
     */
    orderBy?: TimeSlotsOrderByWithRelationInput | TimeSlotsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TimeSlots.
     */
    cursor?: TimeSlotsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TimeSlots from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TimeSlots.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TimeSlots.
     */
    distinct?: TimeSlotsScalarFieldEnum | TimeSlotsScalarFieldEnum[]
  }

  /**
   * TimeSlots findMany
   */
  export type TimeSlotsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TimeSlots
     */
    select?: TimeSlotsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TimeSlots
     */
    omit?: TimeSlotsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TimeSlotsInclude<ExtArgs> | null
    /**
     * Filter, which TimeSlots to fetch.
     */
    where?: TimeSlotsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TimeSlots to fetch.
     */
    orderBy?: TimeSlotsOrderByWithRelationInput | TimeSlotsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TimeSlots.
     */
    cursor?: TimeSlotsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TimeSlots from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TimeSlots.
     */
    skip?: number
    distinct?: TimeSlotsScalarFieldEnum | TimeSlotsScalarFieldEnum[]
  }

  /**
   * TimeSlots create
   */
  export type TimeSlotsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TimeSlots
     */
    select?: TimeSlotsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TimeSlots
     */
    omit?: TimeSlotsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TimeSlotsInclude<ExtArgs> | null
    /**
     * The data needed to create a TimeSlots.
     */
    data: XOR<TimeSlotsCreateInput, TimeSlotsUncheckedCreateInput>
  }

  /**
   * TimeSlots createMany
   */
  export type TimeSlotsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TimeSlots.
     */
    data: TimeSlotsCreateManyInput | TimeSlotsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TimeSlots createManyAndReturn
   */
  export type TimeSlotsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TimeSlots
     */
    select?: TimeSlotsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TimeSlots
     */
    omit?: TimeSlotsOmit<ExtArgs> | null
    /**
     * The data used to create many TimeSlots.
     */
    data: TimeSlotsCreateManyInput | TimeSlotsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TimeSlotsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * TimeSlots update
   */
  export type TimeSlotsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TimeSlots
     */
    select?: TimeSlotsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TimeSlots
     */
    omit?: TimeSlotsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TimeSlotsInclude<ExtArgs> | null
    /**
     * The data needed to update a TimeSlots.
     */
    data: XOR<TimeSlotsUpdateInput, TimeSlotsUncheckedUpdateInput>
    /**
     * Choose, which TimeSlots to update.
     */
    where: TimeSlotsWhereUniqueInput
  }

  /**
   * TimeSlots updateMany
   */
  export type TimeSlotsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TimeSlots.
     */
    data: XOR<TimeSlotsUpdateManyMutationInput, TimeSlotsUncheckedUpdateManyInput>
    /**
     * Filter which TimeSlots to update
     */
    where?: TimeSlotsWhereInput
    /**
     * Limit how many TimeSlots to update.
     */
    limit?: number
  }

  /**
   * TimeSlots updateManyAndReturn
   */
  export type TimeSlotsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TimeSlots
     */
    select?: TimeSlotsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TimeSlots
     */
    omit?: TimeSlotsOmit<ExtArgs> | null
    /**
     * The data used to update TimeSlots.
     */
    data: XOR<TimeSlotsUpdateManyMutationInput, TimeSlotsUncheckedUpdateManyInput>
    /**
     * Filter which TimeSlots to update
     */
    where?: TimeSlotsWhereInput
    /**
     * Limit how many TimeSlots to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TimeSlotsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * TimeSlots upsert
   */
  export type TimeSlotsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TimeSlots
     */
    select?: TimeSlotsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TimeSlots
     */
    omit?: TimeSlotsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TimeSlotsInclude<ExtArgs> | null
    /**
     * The filter to search for the TimeSlots to update in case it exists.
     */
    where: TimeSlotsWhereUniqueInput
    /**
     * In case the TimeSlots found by the `where` argument doesn't exist, create a new TimeSlots with this data.
     */
    create: XOR<TimeSlotsCreateInput, TimeSlotsUncheckedCreateInput>
    /**
     * In case the TimeSlots was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TimeSlotsUpdateInput, TimeSlotsUncheckedUpdateInput>
  }

  /**
   * TimeSlots delete
   */
  export type TimeSlotsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TimeSlots
     */
    select?: TimeSlotsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TimeSlots
     */
    omit?: TimeSlotsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TimeSlotsInclude<ExtArgs> | null
    /**
     * Filter which TimeSlots to delete.
     */
    where: TimeSlotsWhereUniqueInput
  }

  /**
   * TimeSlots deleteMany
   */
  export type TimeSlotsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TimeSlots to delete
     */
    where?: TimeSlotsWhereInput
    /**
     * Limit how many TimeSlots to delete.
     */
    limit?: number
  }

  /**
   * TimeSlots.booking_details
   */
  export type TimeSlots$booking_detailsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookingDetails
     */
    select?: BookingDetailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookingDetails
     */
    omit?: BookingDetailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingDetailsInclude<ExtArgs> | null
    where?: BookingDetailsWhereInput
    orderBy?: BookingDetailsOrderByWithRelationInput | BookingDetailsOrderByWithRelationInput[]
    cursor?: BookingDetailsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BookingDetailsScalarFieldEnum | BookingDetailsScalarFieldEnum[]
  }

  /**
   * TimeSlots without action
   */
  export type TimeSlotsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TimeSlots
     */
    select?: TimeSlotsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TimeSlots
     */
    omit?: TimeSlotsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TimeSlotsInclude<ExtArgs> | null
  }


  /**
   * Model Bookings
   */

  export type AggregateBookings = {
    _count: BookingsCountAggregateOutputType | null
    _avg: BookingsAvgAggregateOutputType | null
    _sum: BookingsSumAggregateOutputType | null
    _min: BookingsMinAggregateOutputType | null
    _max: BookingsMaxAggregateOutputType | null
  }

  export type BookingsAvgAggregateOutputType = {
    total_price: number | null
  }

  export type BookingsSumAggregateOutputType = {
    total_price: number | null
  }

  export type BookingsMinAggregateOutputType = {
    id: string | null
    user_id: string | null
    total_price: number | null
    status: $Enums.BookingStatus | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type BookingsMaxAggregateOutputType = {
    id: string | null
    user_id: string | null
    total_price: number | null
    status: $Enums.BookingStatus | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type BookingsCountAggregateOutputType = {
    id: number
    user_id: number
    total_price: number
    status: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type BookingsAvgAggregateInputType = {
    total_price?: true
  }

  export type BookingsSumAggregateInputType = {
    total_price?: true
  }

  export type BookingsMinAggregateInputType = {
    id?: true
    user_id?: true
    total_price?: true
    status?: true
    created_at?: true
    updated_at?: true
  }

  export type BookingsMaxAggregateInputType = {
    id?: true
    user_id?: true
    total_price?: true
    status?: true
    created_at?: true
    updated_at?: true
  }

  export type BookingsCountAggregateInputType = {
    id?: true
    user_id?: true
    total_price?: true
    status?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type BookingsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Bookings to aggregate.
     */
    where?: BookingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bookings to fetch.
     */
    orderBy?: BookingsOrderByWithRelationInput | BookingsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BookingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bookings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bookings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Bookings
    **/
    _count?: true | BookingsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BookingsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BookingsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BookingsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BookingsMaxAggregateInputType
  }

  export type GetBookingsAggregateType<T extends BookingsAggregateArgs> = {
        [P in keyof T & keyof AggregateBookings]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBookings[P]>
      : GetScalarType<T[P], AggregateBookings[P]>
  }




  export type BookingsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BookingsWhereInput
    orderBy?: BookingsOrderByWithAggregationInput | BookingsOrderByWithAggregationInput[]
    by: BookingsScalarFieldEnum[] | BookingsScalarFieldEnum
    having?: BookingsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BookingsCountAggregateInputType | true
    _avg?: BookingsAvgAggregateInputType
    _sum?: BookingsSumAggregateInputType
    _min?: BookingsMinAggregateInputType
    _max?: BookingsMaxAggregateInputType
  }

  export type BookingsGroupByOutputType = {
    id: string
    user_id: string
    total_price: number
    status: $Enums.BookingStatus
    created_at: Date
    updated_at: Date
    _count: BookingsCountAggregateOutputType | null
    _avg: BookingsAvgAggregateOutputType | null
    _sum: BookingsSumAggregateOutputType | null
    _min: BookingsMinAggregateOutputType | null
    _max: BookingsMaxAggregateOutputType | null
  }

  type GetBookingsGroupByPayload<T extends BookingsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BookingsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BookingsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BookingsGroupByOutputType[P]>
            : GetScalarType<T[P], BookingsGroupByOutputType[P]>
        }
      >
    >


  export type BookingsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    total_price?: boolean
    status?: boolean
    created_at?: boolean
    updated_at?: boolean
    user?: boolean | UsersDefaultArgs<ExtArgs>
    booking_details?: boolean | Bookings$booking_detailsArgs<ExtArgs>
    payment?: boolean | Bookings$paymentArgs<ExtArgs>
    _count?: boolean | BookingsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["bookings"]>

  export type BookingsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    total_price?: boolean
    status?: boolean
    created_at?: boolean
    updated_at?: boolean
    user?: boolean | UsersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["bookings"]>

  export type BookingsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    total_price?: boolean
    status?: boolean
    created_at?: boolean
    updated_at?: boolean
    user?: boolean | UsersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["bookings"]>

  export type BookingsSelectScalar = {
    id?: boolean
    user_id?: boolean
    total_price?: boolean
    status?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type BookingsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "user_id" | "total_price" | "status" | "created_at" | "updated_at", ExtArgs["result"]["bookings"]>
  export type BookingsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UsersDefaultArgs<ExtArgs>
    booking_details?: boolean | Bookings$booking_detailsArgs<ExtArgs>
    payment?: boolean | Bookings$paymentArgs<ExtArgs>
    _count?: boolean | BookingsCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type BookingsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UsersDefaultArgs<ExtArgs>
  }
  export type BookingsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UsersDefaultArgs<ExtArgs>
  }

  export type $BookingsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Bookings"
    objects: {
      user: Prisma.$UsersPayload<ExtArgs>
      booking_details: Prisma.$BookingDetailsPayload<ExtArgs>[]
      payment: Prisma.$PaymentsPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      user_id: string
      total_price: number
      status: $Enums.BookingStatus
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["bookings"]>
    composites: {}
  }

  type BookingsGetPayload<S extends boolean | null | undefined | BookingsDefaultArgs> = $Result.GetResult<Prisma.$BookingsPayload, S>

  type BookingsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BookingsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BookingsCountAggregateInputType | true
    }

  export interface BookingsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Bookings'], meta: { name: 'Bookings' } }
    /**
     * Find zero or one Bookings that matches the filter.
     * @param {BookingsFindUniqueArgs} args - Arguments to find a Bookings
     * @example
     * // Get one Bookings
     * const bookings = await prisma.bookings.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BookingsFindUniqueArgs>(args: SelectSubset<T, BookingsFindUniqueArgs<ExtArgs>>): Prisma__BookingsClient<$Result.GetResult<Prisma.$BookingsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Bookings that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BookingsFindUniqueOrThrowArgs} args - Arguments to find a Bookings
     * @example
     * // Get one Bookings
     * const bookings = await prisma.bookings.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BookingsFindUniqueOrThrowArgs>(args: SelectSubset<T, BookingsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BookingsClient<$Result.GetResult<Prisma.$BookingsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Bookings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingsFindFirstArgs} args - Arguments to find a Bookings
     * @example
     * // Get one Bookings
     * const bookings = await prisma.bookings.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BookingsFindFirstArgs>(args?: SelectSubset<T, BookingsFindFirstArgs<ExtArgs>>): Prisma__BookingsClient<$Result.GetResult<Prisma.$BookingsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Bookings that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingsFindFirstOrThrowArgs} args - Arguments to find a Bookings
     * @example
     * // Get one Bookings
     * const bookings = await prisma.bookings.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BookingsFindFirstOrThrowArgs>(args?: SelectSubset<T, BookingsFindFirstOrThrowArgs<ExtArgs>>): Prisma__BookingsClient<$Result.GetResult<Prisma.$BookingsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Bookings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Bookings
     * const bookings = await prisma.bookings.findMany()
     * 
     * // Get first 10 Bookings
     * const bookings = await prisma.bookings.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const bookingsWithIdOnly = await prisma.bookings.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BookingsFindManyArgs>(args?: SelectSubset<T, BookingsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookingsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Bookings.
     * @param {BookingsCreateArgs} args - Arguments to create a Bookings.
     * @example
     * // Create one Bookings
     * const Bookings = await prisma.bookings.create({
     *   data: {
     *     // ... data to create a Bookings
     *   }
     * })
     * 
     */
    create<T extends BookingsCreateArgs>(args: SelectSubset<T, BookingsCreateArgs<ExtArgs>>): Prisma__BookingsClient<$Result.GetResult<Prisma.$BookingsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Bookings.
     * @param {BookingsCreateManyArgs} args - Arguments to create many Bookings.
     * @example
     * // Create many Bookings
     * const bookings = await prisma.bookings.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BookingsCreateManyArgs>(args?: SelectSubset<T, BookingsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Bookings and returns the data saved in the database.
     * @param {BookingsCreateManyAndReturnArgs} args - Arguments to create many Bookings.
     * @example
     * // Create many Bookings
     * const bookings = await prisma.bookings.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Bookings and only return the `id`
     * const bookingsWithIdOnly = await prisma.bookings.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BookingsCreateManyAndReturnArgs>(args?: SelectSubset<T, BookingsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookingsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Bookings.
     * @param {BookingsDeleteArgs} args - Arguments to delete one Bookings.
     * @example
     * // Delete one Bookings
     * const Bookings = await prisma.bookings.delete({
     *   where: {
     *     // ... filter to delete one Bookings
     *   }
     * })
     * 
     */
    delete<T extends BookingsDeleteArgs>(args: SelectSubset<T, BookingsDeleteArgs<ExtArgs>>): Prisma__BookingsClient<$Result.GetResult<Prisma.$BookingsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Bookings.
     * @param {BookingsUpdateArgs} args - Arguments to update one Bookings.
     * @example
     * // Update one Bookings
     * const bookings = await prisma.bookings.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BookingsUpdateArgs>(args: SelectSubset<T, BookingsUpdateArgs<ExtArgs>>): Prisma__BookingsClient<$Result.GetResult<Prisma.$BookingsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Bookings.
     * @param {BookingsDeleteManyArgs} args - Arguments to filter Bookings to delete.
     * @example
     * // Delete a few Bookings
     * const { count } = await prisma.bookings.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BookingsDeleteManyArgs>(args?: SelectSubset<T, BookingsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Bookings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Bookings
     * const bookings = await prisma.bookings.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BookingsUpdateManyArgs>(args: SelectSubset<T, BookingsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Bookings and returns the data updated in the database.
     * @param {BookingsUpdateManyAndReturnArgs} args - Arguments to update many Bookings.
     * @example
     * // Update many Bookings
     * const bookings = await prisma.bookings.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Bookings and only return the `id`
     * const bookingsWithIdOnly = await prisma.bookings.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends BookingsUpdateManyAndReturnArgs>(args: SelectSubset<T, BookingsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookingsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Bookings.
     * @param {BookingsUpsertArgs} args - Arguments to update or create a Bookings.
     * @example
     * // Update or create a Bookings
     * const bookings = await prisma.bookings.upsert({
     *   create: {
     *     // ... data to create a Bookings
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Bookings we want to update
     *   }
     * })
     */
    upsert<T extends BookingsUpsertArgs>(args: SelectSubset<T, BookingsUpsertArgs<ExtArgs>>): Prisma__BookingsClient<$Result.GetResult<Prisma.$BookingsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Bookings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingsCountArgs} args - Arguments to filter Bookings to count.
     * @example
     * // Count the number of Bookings
     * const count = await prisma.bookings.count({
     *   where: {
     *     // ... the filter for the Bookings we want to count
     *   }
     * })
    **/
    count<T extends BookingsCountArgs>(
      args?: Subset<T, BookingsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BookingsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Bookings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends BookingsAggregateArgs>(args: Subset<T, BookingsAggregateArgs>): Prisma.PrismaPromise<GetBookingsAggregateType<T>>

    /**
     * Group by Bookings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends BookingsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BookingsGroupByArgs['orderBy'] }
        : { orderBy?: BookingsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, BookingsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBookingsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Bookings model
   */
  readonly fields: BookingsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Bookings.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BookingsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UsersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsersDefaultArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    booking_details<T extends Bookings$booking_detailsArgs<ExtArgs> = {}>(args?: Subset<T, Bookings$booking_detailsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookingDetailsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    payment<T extends Bookings$paymentArgs<ExtArgs> = {}>(args?: Subset<T, Bookings$paymentArgs<ExtArgs>>): Prisma__PaymentsClient<$Result.GetResult<Prisma.$PaymentsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Bookings model
   */
  interface BookingsFieldRefs {
    readonly id: FieldRef<"Bookings", 'String'>
    readonly user_id: FieldRef<"Bookings", 'String'>
    readonly total_price: FieldRef<"Bookings", 'Int'>
    readonly status: FieldRef<"Bookings", 'BookingStatus'>
    readonly created_at: FieldRef<"Bookings", 'DateTime'>
    readonly updated_at: FieldRef<"Bookings", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Bookings findUnique
   */
  export type BookingsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bookings
     */
    select?: BookingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bookings
     */
    omit?: BookingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingsInclude<ExtArgs> | null
    /**
     * Filter, which Bookings to fetch.
     */
    where: BookingsWhereUniqueInput
  }

  /**
   * Bookings findUniqueOrThrow
   */
  export type BookingsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bookings
     */
    select?: BookingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bookings
     */
    omit?: BookingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingsInclude<ExtArgs> | null
    /**
     * Filter, which Bookings to fetch.
     */
    where: BookingsWhereUniqueInput
  }

  /**
   * Bookings findFirst
   */
  export type BookingsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bookings
     */
    select?: BookingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bookings
     */
    omit?: BookingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingsInclude<ExtArgs> | null
    /**
     * Filter, which Bookings to fetch.
     */
    where?: BookingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bookings to fetch.
     */
    orderBy?: BookingsOrderByWithRelationInput | BookingsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Bookings.
     */
    cursor?: BookingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bookings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bookings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Bookings.
     */
    distinct?: BookingsScalarFieldEnum | BookingsScalarFieldEnum[]
  }

  /**
   * Bookings findFirstOrThrow
   */
  export type BookingsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bookings
     */
    select?: BookingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bookings
     */
    omit?: BookingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingsInclude<ExtArgs> | null
    /**
     * Filter, which Bookings to fetch.
     */
    where?: BookingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bookings to fetch.
     */
    orderBy?: BookingsOrderByWithRelationInput | BookingsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Bookings.
     */
    cursor?: BookingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bookings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bookings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Bookings.
     */
    distinct?: BookingsScalarFieldEnum | BookingsScalarFieldEnum[]
  }

  /**
   * Bookings findMany
   */
  export type BookingsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bookings
     */
    select?: BookingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bookings
     */
    omit?: BookingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingsInclude<ExtArgs> | null
    /**
     * Filter, which Bookings to fetch.
     */
    where?: BookingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bookings to fetch.
     */
    orderBy?: BookingsOrderByWithRelationInput | BookingsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Bookings.
     */
    cursor?: BookingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bookings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bookings.
     */
    skip?: number
    distinct?: BookingsScalarFieldEnum | BookingsScalarFieldEnum[]
  }

  /**
   * Bookings create
   */
  export type BookingsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bookings
     */
    select?: BookingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bookings
     */
    omit?: BookingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingsInclude<ExtArgs> | null
    /**
     * The data needed to create a Bookings.
     */
    data: XOR<BookingsCreateInput, BookingsUncheckedCreateInput>
  }

  /**
   * Bookings createMany
   */
  export type BookingsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Bookings.
     */
    data: BookingsCreateManyInput | BookingsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Bookings createManyAndReturn
   */
  export type BookingsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bookings
     */
    select?: BookingsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Bookings
     */
    omit?: BookingsOmit<ExtArgs> | null
    /**
     * The data used to create many Bookings.
     */
    data: BookingsCreateManyInput | BookingsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Bookings update
   */
  export type BookingsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bookings
     */
    select?: BookingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bookings
     */
    omit?: BookingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingsInclude<ExtArgs> | null
    /**
     * The data needed to update a Bookings.
     */
    data: XOR<BookingsUpdateInput, BookingsUncheckedUpdateInput>
    /**
     * Choose, which Bookings to update.
     */
    where: BookingsWhereUniqueInput
  }

  /**
   * Bookings updateMany
   */
  export type BookingsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Bookings.
     */
    data: XOR<BookingsUpdateManyMutationInput, BookingsUncheckedUpdateManyInput>
    /**
     * Filter which Bookings to update
     */
    where?: BookingsWhereInput
    /**
     * Limit how many Bookings to update.
     */
    limit?: number
  }

  /**
   * Bookings updateManyAndReturn
   */
  export type BookingsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bookings
     */
    select?: BookingsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Bookings
     */
    omit?: BookingsOmit<ExtArgs> | null
    /**
     * The data used to update Bookings.
     */
    data: XOR<BookingsUpdateManyMutationInput, BookingsUncheckedUpdateManyInput>
    /**
     * Filter which Bookings to update
     */
    where?: BookingsWhereInput
    /**
     * Limit how many Bookings to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Bookings upsert
   */
  export type BookingsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bookings
     */
    select?: BookingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bookings
     */
    omit?: BookingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingsInclude<ExtArgs> | null
    /**
     * The filter to search for the Bookings to update in case it exists.
     */
    where: BookingsWhereUniqueInput
    /**
     * In case the Bookings found by the `where` argument doesn't exist, create a new Bookings with this data.
     */
    create: XOR<BookingsCreateInput, BookingsUncheckedCreateInput>
    /**
     * In case the Bookings was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BookingsUpdateInput, BookingsUncheckedUpdateInput>
  }

  /**
   * Bookings delete
   */
  export type BookingsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bookings
     */
    select?: BookingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bookings
     */
    omit?: BookingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingsInclude<ExtArgs> | null
    /**
     * Filter which Bookings to delete.
     */
    where: BookingsWhereUniqueInput
  }

  /**
   * Bookings deleteMany
   */
  export type BookingsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Bookings to delete
     */
    where?: BookingsWhereInput
    /**
     * Limit how many Bookings to delete.
     */
    limit?: number
  }

  /**
   * Bookings.booking_details
   */
  export type Bookings$booking_detailsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookingDetails
     */
    select?: BookingDetailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookingDetails
     */
    omit?: BookingDetailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingDetailsInclude<ExtArgs> | null
    where?: BookingDetailsWhereInput
    orderBy?: BookingDetailsOrderByWithRelationInput | BookingDetailsOrderByWithRelationInput[]
    cursor?: BookingDetailsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BookingDetailsScalarFieldEnum | BookingDetailsScalarFieldEnum[]
  }

  /**
   * Bookings.payment
   */
  export type Bookings$paymentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payments
     */
    select?: PaymentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payments
     */
    omit?: PaymentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentsInclude<ExtArgs> | null
    where?: PaymentsWhereInput
  }

  /**
   * Bookings without action
   */
  export type BookingsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bookings
     */
    select?: BookingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bookings
     */
    omit?: BookingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingsInclude<ExtArgs> | null
  }


  /**
   * Model BookingDetails
   */

  export type AggregateBookingDetails = {
    _count: BookingDetailsCountAggregateOutputType | null
    _avg: BookingDetailsAvgAggregateOutputType | null
    _sum: BookingDetailsSumAggregateOutputType | null
    _min: BookingDetailsMinAggregateOutputType | null
    _max: BookingDetailsMaxAggregateOutputType | null
  }

  export type BookingDetailsAvgAggregateOutputType = {
    venue_id: number | null
    slot_id: number | null
  }

  export type BookingDetailsSumAggregateOutputType = {
    venue_id: number | null
    slot_id: number | null
  }

  export type BookingDetailsMinAggregateOutputType = {
    id: string | null
    venue_id: number | null
    booking_id: string | null
    slot_id: number | null
    booking_date: Date | null
  }

  export type BookingDetailsMaxAggregateOutputType = {
    id: string | null
    venue_id: number | null
    booking_id: string | null
    slot_id: number | null
    booking_date: Date | null
  }

  export type BookingDetailsCountAggregateOutputType = {
    id: number
    venue_id: number
    booking_id: number
    slot_id: number
    booking_date: number
    _all: number
  }


  export type BookingDetailsAvgAggregateInputType = {
    venue_id?: true
    slot_id?: true
  }

  export type BookingDetailsSumAggregateInputType = {
    venue_id?: true
    slot_id?: true
  }

  export type BookingDetailsMinAggregateInputType = {
    id?: true
    venue_id?: true
    booking_id?: true
    slot_id?: true
    booking_date?: true
  }

  export type BookingDetailsMaxAggregateInputType = {
    id?: true
    venue_id?: true
    booking_id?: true
    slot_id?: true
    booking_date?: true
  }

  export type BookingDetailsCountAggregateInputType = {
    id?: true
    venue_id?: true
    booking_id?: true
    slot_id?: true
    booking_date?: true
    _all?: true
  }

  export type BookingDetailsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BookingDetails to aggregate.
     */
    where?: BookingDetailsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BookingDetails to fetch.
     */
    orderBy?: BookingDetailsOrderByWithRelationInput | BookingDetailsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BookingDetailsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BookingDetails from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BookingDetails.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned BookingDetails
    **/
    _count?: true | BookingDetailsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BookingDetailsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BookingDetailsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BookingDetailsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BookingDetailsMaxAggregateInputType
  }

  export type GetBookingDetailsAggregateType<T extends BookingDetailsAggregateArgs> = {
        [P in keyof T & keyof AggregateBookingDetails]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBookingDetails[P]>
      : GetScalarType<T[P], AggregateBookingDetails[P]>
  }




  export type BookingDetailsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BookingDetailsWhereInput
    orderBy?: BookingDetailsOrderByWithAggregationInput | BookingDetailsOrderByWithAggregationInput[]
    by: BookingDetailsScalarFieldEnum[] | BookingDetailsScalarFieldEnum
    having?: BookingDetailsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BookingDetailsCountAggregateInputType | true
    _avg?: BookingDetailsAvgAggregateInputType
    _sum?: BookingDetailsSumAggregateInputType
    _min?: BookingDetailsMinAggregateInputType
    _max?: BookingDetailsMaxAggregateInputType
  }

  export type BookingDetailsGroupByOutputType = {
    id: string
    venue_id: number
    booking_id: string
    slot_id: number
    booking_date: Date
    _count: BookingDetailsCountAggregateOutputType | null
    _avg: BookingDetailsAvgAggregateOutputType | null
    _sum: BookingDetailsSumAggregateOutputType | null
    _min: BookingDetailsMinAggregateOutputType | null
    _max: BookingDetailsMaxAggregateOutputType | null
  }

  type GetBookingDetailsGroupByPayload<T extends BookingDetailsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BookingDetailsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BookingDetailsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BookingDetailsGroupByOutputType[P]>
            : GetScalarType<T[P], BookingDetailsGroupByOutputType[P]>
        }
      >
    >


  export type BookingDetailsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    venue_id?: boolean
    booking_id?: boolean
    slot_id?: boolean
    booking_date?: boolean
    venue?: boolean | VenuesDefaultArgs<ExtArgs>
    slot?: boolean | TimeSlotsDefaultArgs<ExtArgs>
    booking?: boolean | BookingsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["bookingDetails"]>

  export type BookingDetailsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    venue_id?: boolean
    booking_id?: boolean
    slot_id?: boolean
    booking_date?: boolean
    venue?: boolean | VenuesDefaultArgs<ExtArgs>
    slot?: boolean | TimeSlotsDefaultArgs<ExtArgs>
    booking?: boolean | BookingsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["bookingDetails"]>

  export type BookingDetailsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    venue_id?: boolean
    booking_id?: boolean
    slot_id?: boolean
    booking_date?: boolean
    venue?: boolean | VenuesDefaultArgs<ExtArgs>
    slot?: boolean | TimeSlotsDefaultArgs<ExtArgs>
    booking?: boolean | BookingsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["bookingDetails"]>

  export type BookingDetailsSelectScalar = {
    id?: boolean
    venue_id?: boolean
    booking_id?: boolean
    slot_id?: boolean
    booking_date?: boolean
  }

  export type BookingDetailsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "venue_id" | "booking_id" | "slot_id" | "booking_date", ExtArgs["result"]["bookingDetails"]>
  export type BookingDetailsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    venue?: boolean | VenuesDefaultArgs<ExtArgs>
    slot?: boolean | TimeSlotsDefaultArgs<ExtArgs>
    booking?: boolean | BookingsDefaultArgs<ExtArgs>
  }
  export type BookingDetailsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    venue?: boolean | VenuesDefaultArgs<ExtArgs>
    slot?: boolean | TimeSlotsDefaultArgs<ExtArgs>
    booking?: boolean | BookingsDefaultArgs<ExtArgs>
  }
  export type BookingDetailsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    venue?: boolean | VenuesDefaultArgs<ExtArgs>
    slot?: boolean | TimeSlotsDefaultArgs<ExtArgs>
    booking?: boolean | BookingsDefaultArgs<ExtArgs>
  }

  export type $BookingDetailsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "BookingDetails"
    objects: {
      venue: Prisma.$VenuesPayload<ExtArgs>
      slot: Prisma.$TimeSlotsPayload<ExtArgs>
      booking: Prisma.$BookingsPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      venue_id: number
      booking_id: string
      slot_id: number
      booking_date: Date
    }, ExtArgs["result"]["bookingDetails"]>
    composites: {}
  }

  type BookingDetailsGetPayload<S extends boolean | null | undefined | BookingDetailsDefaultArgs> = $Result.GetResult<Prisma.$BookingDetailsPayload, S>

  type BookingDetailsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BookingDetailsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BookingDetailsCountAggregateInputType | true
    }

  export interface BookingDetailsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['BookingDetails'], meta: { name: 'BookingDetails' } }
    /**
     * Find zero or one BookingDetails that matches the filter.
     * @param {BookingDetailsFindUniqueArgs} args - Arguments to find a BookingDetails
     * @example
     * // Get one BookingDetails
     * const bookingDetails = await prisma.bookingDetails.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BookingDetailsFindUniqueArgs>(args: SelectSubset<T, BookingDetailsFindUniqueArgs<ExtArgs>>): Prisma__BookingDetailsClient<$Result.GetResult<Prisma.$BookingDetailsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one BookingDetails that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BookingDetailsFindUniqueOrThrowArgs} args - Arguments to find a BookingDetails
     * @example
     * // Get one BookingDetails
     * const bookingDetails = await prisma.bookingDetails.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BookingDetailsFindUniqueOrThrowArgs>(args: SelectSubset<T, BookingDetailsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BookingDetailsClient<$Result.GetResult<Prisma.$BookingDetailsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BookingDetails that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingDetailsFindFirstArgs} args - Arguments to find a BookingDetails
     * @example
     * // Get one BookingDetails
     * const bookingDetails = await prisma.bookingDetails.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BookingDetailsFindFirstArgs>(args?: SelectSubset<T, BookingDetailsFindFirstArgs<ExtArgs>>): Prisma__BookingDetailsClient<$Result.GetResult<Prisma.$BookingDetailsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BookingDetails that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingDetailsFindFirstOrThrowArgs} args - Arguments to find a BookingDetails
     * @example
     * // Get one BookingDetails
     * const bookingDetails = await prisma.bookingDetails.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BookingDetailsFindFirstOrThrowArgs>(args?: SelectSubset<T, BookingDetailsFindFirstOrThrowArgs<ExtArgs>>): Prisma__BookingDetailsClient<$Result.GetResult<Prisma.$BookingDetailsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more BookingDetails that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingDetailsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all BookingDetails
     * const bookingDetails = await prisma.bookingDetails.findMany()
     * 
     * // Get first 10 BookingDetails
     * const bookingDetails = await prisma.bookingDetails.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const bookingDetailsWithIdOnly = await prisma.bookingDetails.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BookingDetailsFindManyArgs>(args?: SelectSubset<T, BookingDetailsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookingDetailsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a BookingDetails.
     * @param {BookingDetailsCreateArgs} args - Arguments to create a BookingDetails.
     * @example
     * // Create one BookingDetails
     * const BookingDetails = await prisma.bookingDetails.create({
     *   data: {
     *     // ... data to create a BookingDetails
     *   }
     * })
     * 
     */
    create<T extends BookingDetailsCreateArgs>(args: SelectSubset<T, BookingDetailsCreateArgs<ExtArgs>>): Prisma__BookingDetailsClient<$Result.GetResult<Prisma.$BookingDetailsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many BookingDetails.
     * @param {BookingDetailsCreateManyArgs} args - Arguments to create many BookingDetails.
     * @example
     * // Create many BookingDetails
     * const bookingDetails = await prisma.bookingDetails.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BookingDetailsCreateManyArgs>(args?: SelectSubset<T, BookingDetailsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many BookingDetails and returns the data saved in the database.
     * @param {BookingDetailsCreateManyAndReturnArgs} args - Arguments to create many BookingDetails.
     * @example
     * // Create many BookingDetails
     * const bookingDetails = await prisma.bookingDetails.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many BookingDetails and only return the `id`
     * const bookingDetailsWithIdOnly = await prisma.bookingDetails.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BookingDetailsCreateManyAndReturnArgs>(args?: SelectSubset<T, BookingDetailsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookingDetailsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a BookingDetails.
     * @param {BookingDetailsDeleteArgs} args - Arguments to delete one BookingDetails.
     * @example
     * // Delete one BookingDetails
     * const BookingDetails = await prisma.bookingDetails.delete({
     *   where: {
     *     // ... filter to delete one BookingDetails
     *   }
     * })
     * 
     */
    delete<T extends BookingDetailsDeleteArgs>(args: SelectSubset<T, BookingDetailsDeleteArgs<ExtArgs>>): Prisma__BookingDetailsClient<$Result.GetResult<Prisma.$BookingDetailsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one BookingDetails.
     * @param {BookingDetailsUpdateArgs} args - Arguments to update one BookingDetails.
     * @example
     * // Update one BookingDetails
     * const bookingDetails = await prisma.bookingDetails.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BookingDetailsUpdateArgs>(args: SelectSubset<T, BookingDetailsUpdateArgs<ExtArgs>>): Prisma__BookingDetailsClient<$Result.GetResult<Prisma.$BookingDetailsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more BookingDetails.
     * @param {BookingDetailsDeleteManyArgs} args - Arguments to filter BookingDetails to delete.
     * @example
     * // Delete a few BookingDetails
     * const { count } = await prisma.bookingDetails.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BookingDetailsDeleteManyArgs>(args?: SelectSubset<T, BookingDetailsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BookingDetails.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingDetailsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many BookingDetails
     * const bookingDetails = await prisma.bookingDetails.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BookingDetailsUpdateManyArgs>(args: SelectSubset<T, BookingDetailsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BookingDetails and returns the data updated in the database.
     * @param {BookingDetailsUpdateManyAndReturnArgs} args - Arguments to update many BookingDetails.
     * @example
     * // Update many BookingDetails
     * const bookingDetails = await prisma.bookingDetails.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more BookingDetails and only return the `id`
     * const bookingDetailsWithIdOnly = await prisma.bookingDetails.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends BookingDetailsUpdateManyAndReturnArgs>(args: SelectSubset<T, BookingDetailsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookingDetailsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one BookingDetails.
     * @param {BookingDetailsUpsertArgs} args - Arguments to update or create a BookingDetails.
     * @example
     * // Update or create a BookingDetails
     * const bookingDetails = await prisma.bookingDetails.upsert({
     *   create: {
     *     // ... data to create a BookingDetails
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the BookingDetails we want to update
     *   }
     * })
     */
    upsert<T extends BookingDetailsUpsertArgs>(args: SelectSubset<T, BookingDetailsUpsertArgs<ExtArgs>>): Prisma__BookingDetailsClient<$Result.GetResult<Prisma.$BookingDetailsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of BookingDetails.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingDetailsCountArgs} args - Arguments to filter BookingDetails to count.
     * @example
     * // Count the number of BookingDetails
     * const count = await prisma.bookingDetails.count({
     *   where: {
     *     // ... the filter for the BookingDetails we want to count
     *   }
     * })
    **/
    count<T extends BookingDetailsCountArgs>(
      args?: Subset<T, BookingDetailsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BookingDetailsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a BookingDetails.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingDetailsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends BookingDetailsAggregateArgs>(args: Subset<T, BookingDetailsAggregateArgs>): Prisma.PrismaPromise<GetBookingDetailsAggregateType<T>>

    /**
     * Group by BookingDetails.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingDetailsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends BookingDetailsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BookingDetailsGroupByArgs['orderBy'] }
        : { orderBy?: BookingDetailsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, BookingDetailsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBookingDetailsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the BookingDetails model
   */
  readonly fields: BookingDetailsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for BookingDetails.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BookingDetailsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    venue<T extends VenuesDefaultArgs<ExtArgs> = {}>(args?: Subset<T, VenuesDefaultArgs<ExtArgs>>): Prisma__VenuesClient<$Result.GetResult<Prisma.$VenuesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    slot<T extends TimeSlotsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TimeSlotsDefaultArgs<ExtArgs>>): Prisma__TimeSlotsClient<$Result.GetResult<Prisma.$TimeSlotsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    booking<T extends BookingsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, BookingsDefaultArgs<ExtArgs>>): Prisma__BookingsClient<$Result.GetResult<Prisma.$BookingsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the BookingDetails model
   */
  interface BookingDetailsFieldRefs {
    readonly id: FieldRef<"BookingDetails", 'String'>
    readonly venue_id: FieldRef<"BookingDetails", 'Int'>
    readonly booking_id: FieldRef<"BookingDetails", 'String'>
    readonly slot_id: FieldRef<"BookingDetails", 'Int'>
    readonly booking_date: FieldRef<"BookingDetails", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * BookingDetails findUnique
   */
  export type BookingDetailsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookingDetails
     */
    select?: BookingDetailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookingDetails
     */
    omit?: BookingDetailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingDetailsInclude<ExtArgs> | null
    /**
     * Filter, which BookingDetails to fetch.
     */
    where: BookingDetailsWhereUniqueInput
  }

  /**
   * BookingDetails findUniqueOrThrow
   */
  export type BookingDetailsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookingDetails
     */
    select?: BookingDetailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookingDetails
     */
    omit?: BookingDetailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingDetailsInclude<ExtArgs> | null
    /**
     * Filter, which BookingDetails to fetch.
     */
    where: BookingDetailsWhereUniqueInput
  }

  /**
   * BookingDetails findFirst
   */
  export type BookingDetailsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookingDetails
     */
    select?: BookingDetailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookingDetails
     */
    omit?: BookingDetailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingDetailsInclude<ExtArgs> | null
    /**
     * Filter, which BookingDetails to fetch.
     */
    where?: BookingDetailsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BookingDetails to fetch.
     */
    orderBy?: BookingDetailsOrderByWithRelationInput | BookingDetailsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BookingDetails.
     */
    cursor?: BookingDetailsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BookingDetails from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BookingDetails.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BookingDetails.
     */
    distinct?: BookingDetailsScalarFieldEnum | BookingDetailsScalarFieldEnum[]
  }

  /**
   * BookingDetails findFirstOrThrow
   */
  export type BookingDetailsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookingDetails
     */
    select?: BookingDetailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookingDetails
     */
    omit?: BookingDetailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingDetailsInclude<ExtArgs> | null
    /**
     * Filter, which BookingDetails to fetch.
     */
    where?: BookingDetailsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BookingDetails to fetch.
     */
    orderBy?: BookingDetailsOrderByWithRelationInput | BookingDetailsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BookingDetails.
     */
    cursor?: BookingDetailsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BookingDetails from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BookingDetails.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BookingDetails.
     */
    distinct?: BookingDetailsScalarFieldEnum | BookingDetailsScalarFieldEnum[]
  }

  /**
   * BookingDetails findMany
   */
  export type BookingDetailsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookingDetails
     */
    select?: BookingDetailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookingDetails
     */
    omit?: BookingDetailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingDetailsInclude<ExtArgs> | null
    /**
     * Filter, which BookingDetails to fetch.
     */
    where?: BookingDetailsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BookingDetails to fetch.
     */
    orderBy?: BookingDetailsOrderByWithRelationInput | BookingDetailsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing BookingDetails.
     */
    cursor?: BookingDetailsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BookingDetails from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BookingDetails.
     */
    skip?: number
    distinct?: BookingDetailsScalarFieldEnum | BookingDetailsScalarFieldEnum[]
  }

  /**
   * BookingDetails create
   */
  export type BookingDetailsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookingDetails
     */
    select?: BookingDetailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookingDetails
     */
    omit?: BookingDetailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingDetailsInclude<ExtArgs> | null
    /**
     * The data needed to create a BookingDetails.
     */
    data: XOR<BookingDetailsCreateInput, BookingDetailsUncheckedCreateInput>
  }

  /**
   * BookingDetails createMany
   */
  export type BookingDetailsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many BookingDetails.
     */
    data: BookingDetailsCreateManyInput | BookingDetailsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * BookingDetails createManyAndReturn
   */
  export type BookingDetailsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookingDetails
     */
    select?: BookingDetailsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the BookingDetails
     */
    omit?: BookingDetailsOmit<ExtArgs> | null
    /**
     * The data used to create many BookingDetails.
     */
    data: BookingDetailsCreateManyInput | BookingDetailsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingDetailsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * BookingDetails update
   */
  export type BookingDetailsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookingDetails
     */
    select?: BookingDetailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookingDetails
     */
    omit?: BookingDetailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingDetailsInclude<ExtArgs> | null
    /**
     * The data needed to update a BookingDetails.
     */
    data: XOR<BookingDetailsUpdateInput, BookingDetailsUncheckedUpdateInput>
    /**
     * Choose, which BookingDetails to update.
     */
    where: BookingDetailsWhereUniqueInput
  }

  /**
   * BookingDetails updateMany
   */
  export type BookingDetailsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update BookingDetails.
     */
    data: XOR<BookingDetailsUpdateManyMutationInput, BookingDetailsUncheckedUpdateManyInput>
    /**
     * Filter which BookingDetails to update
     */
    where?: BookingDetailsWhereInput
    /**
     * Limit how many BookingDetails to update.
     */
    limit?: number
  }

  /**
   * BookingDetails updateManyAndReturn
   */
  export type BookingDetailsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookingDetails
     */
    select?: BookingDetailsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the BookingDetails
     */
    omit?: BookingDetailsOmit<ExtArgs> | null
    /**
     * The data used to update BookingDetails.
     */
    data: XOR<BookingDetailsUpdateManyMutationInput, BookingDetailsUncheckedUpdateManyInput>
    /**
     * Filter which BookingDetails to update
     */
    where?: BookingDetailsWhereInput
    /**
     * Limit how many BookingDetails to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingDetailsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * BookingDetails upsert
   */
  export type BookingDetailsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookingDetails
     */
    select?: BookingDetailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookingDetails
     */
    omit?: BookingDetailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingDetailsInclude<ExtArgs> | null
    /**
     * The filter to search for the BookingDetails to update in case it exists.
     */
    where: BookingDetailsWhereUniqueInput
    /**
     * In case the BookingDetails found by the `where` argument doesn't exist, create a new BookingDetails with this data.
     */
    create: XOR<BookingDetailsCreateInput, BookingDetailsUncheckedCreateInput>
    /**
     * In case the BookingDetails was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BookingDetailsUpdateInput, BookingDetailsUncheckedUpdateInput>
  }

  /**
   * BookingDetails delete
   */
  export type BookingDetailsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookingDetails
     */
    select?: BookingDetailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookingDetails
     */
    omit?: BookingDetailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingDetailsInclude<ExtArgs> | null
    /**
     * Filter which BookingDetails to delete.
     */
    where: BookingDetailsWhereUniqueInput
  }

  /**
   * BookingDetails deleteMany
   */
  export type BookingDetailsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BookingDetails to delete
     */
    where?: BookingDetailsWhereInput
    /**
     * Limit how many BookingDetails to delete.
     */
    limit?: number
  }

  /**
   * BookingDetails without action
   */
  export type BookingDetailsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookingDetails
     */
    select?: BookingDetailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookingDetails
     */
    omit?: BookingDetailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingDetailsInclude<ExtArgs> | null
  }


  /**
   * Model Payments
   */

  export type AggregatePayments = {
    _count: PaymentsCountAggregateOutputType | null
    _avg: PaymentsAvgAggregateOutputType | null
    _sum: PaymentsSumAggregateOutputType | null
    _min: PaymentsMinAggregateOutputType | null
    _max: PaymentsMaxAggregateOutputType | null
  }

  export type PaymentsAvgAggregateOutputType = {
    amount: number | null
  }

  export type PaymentsSumAggregateOutputType = {
    amount: number | null
  }

  export type PaymentsMinAggregateOutputType = {
    id: string | null
    booking_id: string | null
    transaction_id: string | null
    payment_method: string | null
    amount: number | null
    payment_status: $Enums.PaymentStatus | null
    va_number: string | null
    pdf_url: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type PaymentsMaxAggregateOutputType = {
    id: string | null
    booking_id: string | null
    transaction_id: string | null
    payment_method: string | null
    amount: number | null
    payment_status: $Enums.PaymentStatus | null
    va_number: string | null
    pdf_url: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type PaymentsCountAggregateOutputType = {
    id: number
    booking_id: number
    transaction_id: number
    payment_method: number
    amount: number
    payment_status: number
    va_number: number
    pdf_url: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type PaymentsAvgAggregateInputType = {
    amount?: true
  }

  export type PaymentsSumAggregateInputType = {
    amount?: true
  }

  export type PaymentsMinAggregateInputType = {
    id?: true
    booking_id?: true
    transaction_id?: true
    payment_method?: true
    amount?: true
    payment_status?: true
    va_number?: true
    pdf_url?: true
    created_at?: true
    updated_at?: true
  }

  export type PaymentsMaxAggregateInputType = {
    id?: true
    booking_id?: true
    transaction_id?: true
    payment_method?: true
    amount?: true
    payment_status?: true
    va_number?: true
    pdf_url?: true
    created_at?: true
    updated_at?: true
  }

  export type PaymentsCountAggregateInputType = {
    id?: true
    booking_id?: true
    transaction_id?: true
    payment_method?: true
    amount?: true
    payment_status?: true
    va_number?: true
    pdf_url?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type PaymentsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Payments to aggregate.
     */
    where?: PaymentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payments to fetch.
     */
    orderBy?: PaymentsOrderByWithRelationInput | PaymentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PaymentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Payments
    **/
    _count?: true | PaymentsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PaymentsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PaymentsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PaymentsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PaymentsMaxAggregateInputType
  }

  export type GetPaymentsAggregateType<T extends PaymentsAggregateArgs> = {
        [P in keyof T & keyof AggregatePayments]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePayments[P]>
      : GetScalarType<T[P], AggregatePayments[P]>
  }




  export type PaymentsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PaymentsWhereInput
    orderBy?: PaymentsOrderByWithAggregationInput | PaymentsOrderByWithAggregationInput[]
    by: PaymentsScalarFieldEnum[] | PaymentsScalarFieldEnum
    having?: PaymentsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PaymentsCountAggregateInputType | true
    _avg?: PaymentsAvgAggregateInputType
    _sum?: PaymentsSumAggregateInputType
    _min?: PaymentsMinAggregateInputType
    _max?: PaymentsMaxAggregateInputType
  }

  export type PaymentsGroupByOutputType = {
    id: string
    booking_id: string
    transaction_id: string
    payment_method: string
    amount: number
    payment_status: $Enums.PaymentStatus
    va_number: string | null
    pdf_url: string
    created_at: Date
    updated_at: Date
    _count: PaymentsCountAggregateOutputType | null
    _avg: PaymentsAvgAggregateOutputType | null
    _sum: PaymentsSumAggregateOutputType | null
    _min: PaymentsMinAggregateOutputType | null
    _max: PaymentsMaxAggregateOutputType | null
  }

  type GetPaymentsGroupByPayload<T extends PaymentsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PaymentsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PaymentsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PaymentsGroupByOutputType[P]>
            : GetScalarType<T[P], PaymentsGroupByOutputType[P]>
        }
      >
    >


  export type PaymentsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    booking_id?: boolean
    transaction_id?: boolean
    payment_method?: boolean
    amount?: boolean
    payment_status?: boolean
    va_number?: boolean
    pdf_url?: boolean
    created_at?: boolean
    updated_at?: boolean
    booking?: boolean | BookingsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["payments"]>

  export type PaymentsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    booking_id?: boolean
    transaction_id?: boolean
    payment_method?: boolean
    amount?: boolean
    payment_status?: boolean
    va_number?: boolean
    pdf_url?: boolean
    created_at?: boolean
    updated_at?: boolean
    booking?: boolean | BookingsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["payments"]>

  export type PaymentsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    booking_id?: boolean
    transaction_id?: boolean
    payment_method?: boolean
    amount?: boolean
    payment_status?: boolean
    va_number?: boolean
    pdf_url?: boolean
    created_at?: boolean
    updated_at?: boolean
    booking?: boolean | BookingsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["payments"]>

  export type PaymentsSelectScalar = {
    id?: boolean
    booking_id?: boolean
    transaction_id?: boolean
    payment_method?: boolean
    amount?: boolean
    payment_status?: boolean
    va_number?: boolean
    pdf_url?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type PaymentsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "booking_id" | "transaction_id" | "payment_method" | "amount" | "payment_status" | "va_number" | "pdf_url" | "created_at" | "updated_at", ExtArgs["result"]["payments"]>
  export type PaymentsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    booking?: boolean | BookingsDefaultArgs<ExtArgs>
  }
  export type PaymentsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    booking?: boolean | BookingsDefaultArgs<ExtArgs>
  }
  export type PaymentsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    booking?: boolean | BookingsDefaultArgs<ExtArgs>
  }

  export type $PaymentsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Payments"
    objects: {
      booking: Prisma.$BookingsPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      booking_id: string
      transaction_id: string
      payment_method: string
      amount: number
      payment_status: $Enums.PaymentStatus
      va_number: string | null
      pdf_url: string
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["payments"]>
    composites: {}
  }

  type PaymentsGetPayload<S extends boolean | null | undefined | PaymentsDefaultArgs> = $Result.GetResult<Prisma.$PaymentsPayload, S>

  type PaymentsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PaymentsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PaymentsCountAggregateInputType | true
    }

  export interface PaymentsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Payments'], meta: { name: 'Payments' } }
    /**
     * Find zero or one Payments that matches the filter.
     * @param {PaymentsFindUniqueArgs} args - Arguments to find a Payments
     * @example
     * // Get one Payments
     * const payments = await prisma.payments.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PaymentsFindUniqueArgs>(args: SelectSubset<T, PaymentsFindUniqueArgs<ExtArgs>>): Prisma__PaymentsClient<$Result.GetResult<Prisma.$PaymentsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Payments that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PaymentsFindUniqueOrThrowArgs} args - Arguments to find a Payments
     * @example
     * // Get one Payments
     * const payments = await prisma.payments.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PaymentsFindUniqueOrThrowArgs>(args: SelectSubset<T, PaymentsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PaymentsClient<$Result.GetResult<Prisma.$PaymentsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Payments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentsFindFirstArgs} args - Arguments to find a Payments
     * @example
     * // Get one Payments
     * const payments = await prisma.payments.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PaymentsFindFirstArgs>(args?: SelectSubset<T, PaymentsFindFirstArgs<ExtArgs>>): Prisma__PaymentsClient<$Result.GetResult<Prisma.$PaymentsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Payments that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentsFindFirstOrThrowArgs} args - Arguments to find a Payments
     * @example
     * // Get one Payments
     * const payments = await prisma.payments.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PaymentsFindFirstOrThrowArgs>(args?: SelectSubset<T, PaymentsFindFirstOrThrowArgs<ExtArgs>>): Prisma__PaymentsClient<$Result.GetResult<Prisma.$PaymentsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Payments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Payments
     * const payments = await prisma.payments.findMany()
     * 
     * // Get first 10 Payments
     * const payments = await prisma.payments.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const paymentsWithIdOnly = await prisma.payments.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PaymentsFindManyArgs>(args?: SelectSubset<T, PaymentsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Payments.
     * @param {PaymentsCreateArgs} args - Arguments to create a Payments.
     * @example
     * // Create one Payments
     * const Payments = await prisma.payments.create({
     *   data: {
     *     // ... data to create a Payments
     *   }
     * })
     * 
     */
    create<T extends PaymentsCreateArgs>(args: SelectSubset<T, PaymentsCreateArgs<ExtArgs>>): Prisma__PaymentsClient<$Result.GetResult<Prisma.$PaymentsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Payments.
     * @param {PaymentsCreateManyArgs} args - Arguments to create many Payments.
     * @example
     * // Create many Payments
     * const payments = await prisma.payments.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PaymentsCreateManyArgs>(args?: SelectSubset<T, PaymentsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Payments and returns the data saved in the database.
     * @param {PaymentsCreateManyAndReturnArgs} args - Arguments to create many Payments.
     * @example
     * // Create many Payments
     * const payments = await prisma.payments.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Payments and only return the `id`
     * const paymentsWithIdOnly = await prisma.payments.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PaymentsCreateManyAndReturnArgs>(args?: SelectSubset<T, PaymentsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Payments.
     * @param {PaymentsDeleteArgs} args - Arguments to delete one Payments.
     * @example
     * // Delete one Payments
     * const Payments = await prisma.payments.delete({
     *   where: {
     *     // ... filter to delete one Payments
     *   }
     * })
     * 
     */
    delete<T extends PaymentsDeleteArgs>(args: SelectSubset<T, PaymentsDeleteArgs<ExtArgs>>): Prisma__PaymentsClient<$Result.GetResult<Prisma.$PaymentsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Payments.
     * @param {PaymentsUpdateArgs} args - Arguments to update one Payments.
     * @example
     * // Update one Payments
     * const payments = await prisma.payments.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PaymentsUpdateArgs>(args: SelectSubset<T, PaymentsUpdateArgs<ExtArgs>>): Prisma__PaymentsClient<$Result.GetResult<Prisma.$PaymentsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Payments.
     * @param {PaymentsDeleteManyArgs} args - Arguments to filter Payments to delete.
     * @example
     * // Delete a few Payments
     * const { count } = await prisma.payments.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PaymentsDeleteManyArgs>(args?: SelectSubset<T, PaymentsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Payments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Payments
     * const payments = await prisma.payments.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PaymentsUpdateManyArgs>(args: SelectSubset<T, PaymentsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Payments and returns the data updated in the database.
     * @param {PaymentsUpdateManyAndReturnArgs} args - Arguments to update many Payments.
     * @example
     * // Update many Payments
     * const payments = await prisma.payments.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Payments and only return the `id`
     * const paymentsWithIdOnly = await prisma.payments.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PaymentsUpdateManyAndReturnArgs>(args: SelectSubset<T, PaymentsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Payments.
     * @param {PaymentsUpsertArgs} args - Arguments to update or create a Payments.
     * @example
     * // Update or create a Payments
     * const payments = await prisma.payments.upsert({
     *   create: {
     *     // ... data to create a Payments
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Payments we want to update
     *   }
     * })
     */
    upsert<T extends PaymentsUpsertArgs>(args: SelectSubset<T, PaymentsUpsertArgs<ExtArgs>>): Prisma__PaymentsClient<$Result.GetResult<Prisma.$PaymentsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Payments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentsCountArgs} args - Arguments to filter Payments to count.
     * @example
     * // Count the number of Payments
     * const count = await prisma.payments.count({
     *   where: {
     *     // ... the filter for the Payments we want to count
     *   }
     * })
    **/
    count<T extends PaymentsCountArgs>(
      args?: Subset<T, PaymentsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PaymentsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Payments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PaymentsAggregateArgs>(args: Subset<T, PaymentsAggregateArgs>): Prisma.PrismaPromise<GetPaymentsAggregateType<T>>

    /**
     * Group by Payments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PaymentsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PaymentsGroupByArgs['orderBy'] }
        : { orderBy?: PaymentsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PaymentsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPaymentsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Payments model
   */
  readonly fields: PaymentsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Payments.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PaymentsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    booking<T extends BookingsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, BookingsDefaultArgs<ExtArgs>>): Prisma__BookingsClient<$Result.GetResult<Prisma.$BookingsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Payments model
   */
  interface PaymentsFieldRefs {
    readonly id: FieldRef<"Payments", 'String'>
    readonly booking_id: FieldRef<"Payments", 'String'>
    readonly transaction_id: FieldRef<"Payments", 'String'>
    readonly payment_method: FieldRef<"Payments", 'String'>
    readonly amount: FieldRef<"Payments", 'Int'>
    readonly payment_status: FieldRef<"Payments", 'PaymentStatus'>
    readonly va_number: FieldRef<"Payments", 'String'>
    readonly pdf_url: FieldRef<"Payments", 'String'>
    readonly created_at: FieldRef<"Payments", 'DateTime'>
    readonly updated_at: FieldRef<"Payments", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Payments findUnique
   */
  export type PaymentsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payments
     */
    select?: PaymentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payments
     */
    omit?: PaymentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentsInclude<ExtArgs> | null
    /**
     * Filter, which Payments to fetch.
     */
    where: PaymentsWhereUniqueInput
  }

  /**
   * Payments findUniqueOrThrow
   */
  export type PaymentsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payments
     */
    select?: PaymentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payments
     */
    omit?: PaymentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentsInclude<ExtArgs> | null
    /**
     * Filter, which Payments to fetch.
     */
    where: PaymentsWhereUniqueInput
  }

  /**
   * Payments findFirst
   */
  export type PaymentsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payments
     */
    select?: PaymentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payments
     */
    omit?: PaymentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentsInclude<ExtArgs> | null
    /**
     * Filter, which Payments to fetch.
     */
    where?: PaymentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payments to fetch.
     */
    orderBy?: PaymentsOrderByWithRelationInput | PaymentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Payments.
     */
    cursor?: PaymentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Payments.
     */
    distinct?: PaymentsScalarFieldEnum | PaymentsScalarFieldEnum[]
  }

  /**
   * Payments findFirstOrThrow
   */
  export type PaymentsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payments
     */
    select?: PaymentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payments
     */
    omit?: PaymentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentsInclude<ExtArgs> | null
    /**
     * Filter, which Payments to fetch.
     */
    where?: PaymentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payments to fetch.
     */
    orderBy?: PaymentsOrderByWithRelationInput | PaymentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Payments.
     */
    cursor?: PaymentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Payments.
     */
    distinct?: PaymentsScalarFieldEnum | PaymentsScalarFieldEnum[]
  }

  /**
   * Payments findMany
   */
  export type PaymentsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payments
     */
    select?: PaymentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payments
     */
    omit?: PaymentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentsInclude<ExtArgs> | null
    /**
     * Filter, which Payments to fetch.
     */
    where?: PaymentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payments to fetch.
     */
    orderBy?: PaymentsOrderByWithRelationInput | PaymentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Payments.
     */
    cursor?: PaymentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payments.
     */
    skip?: number
    distinct?: PaymentsScalarFieldEnum | PaymentsScalarFieldEnum[]
  }

  /**
   * Payments create
   */
  export type PaymentsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payments
     */
    select?: PaymentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payments
     */
    omit?: PaymentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentsInclude<ExtArgs> | null
    /**
     * The data needed to create a Payments.
     */
    data: XOR<PaymentsCreateInput, PaymentsUncheckedCreateInput>
  }

  /**
   * Payments createMany
   */
  export type PaymentsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Payments.
     */
    data: PaymentsCreateManyInput | PaymentsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Payments createManyAndReturn
   */
  export type PaymentsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payments
     */
    select?: PaymentsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Payments
     */
    omit?: PaymentsOmit<ExtArgs> | null
    /**
     * The data used to create many Payments.
     */
    data: PaymentsCreateManyInput | PaymentsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Payments update
   */
  export type PaymentsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payments
     */
    select?: PaymentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payments
     */
    omit?: PaymentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentsInclude<ExtArgs> | null
    /**
     * The data needed to update a Payments.
     */
    data: XOR<PaymentsUpdateInput, PaymentsUncheckedUpdateInput>
    /**
     * Choose, which Payments to update.
     */
    where: PaymentsWhereUniqueInput
  }

  /**
   * Payments updateMany
   */
  export type PaymentsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Payments.
     */
    data: XOR<PaymentsUpdateManyMutationInput, PaymentsUncheckedUpdateManyInput>
    /**
     * Filter which Payments to update
     */
    where?: PaymentsWhereInput
    /**
     * Limit how many Payments to update.
     */
    limit?: number
  }

  /**
   * Payments updateManyAndReturn
   */
  export type PaymentsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payments
     */
    select?: PaymentsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Payments
     */
    omit?: PaymentsOmit<ExtArgs> | null
    /**
     * The data used to update Payments.
     */
    data: XOR<PaymentsUpdateManyMutationInput, PaymentsUncheckedUpdateManyInput>
    /**
     * Filter which Payments to update
     */
    where?: PaymentsWhereInput
    /**
     * Limit how many Payments to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Payments upsert
   */
  export type PaymentsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payments
     */
    select?: PaymentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payments
     */
    omit?: PaymentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentsInclude<ExtArgs> | null
    /**
     * The filter to search for the Payments to update in case it exists.
     */
    where: PaymentsWhereUniqueInput
    /**
     * In case the Payments found by the `where` argument doesn't exist, create a new Payments with this data.
     */
    create: XOR<PaymentsCreateInput, PaymentsUncheckedCreateInput>
    /**
     * In case the Payments was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PaymentsUpdateInput, PaymentsUncheckedUpdateInput>
  }

  /**
   * Payments delete
   */
  export type PaymentsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payments
     */
    select?: PaymentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payments
     */
    omit?: PaymentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentsInclude<ExtArgs> | null
    /**
     * Filter which Payments to delete.
     */
    where: PaymentsWhereUniqueInput
  }

  /**
   * Payments deleteMany
   */
  export type PaymentsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Payments to delete
     */
    where?: PaymentsWhereInput
    /**
     * Limit how many Payments to delete.
     */
    limit?: number
  }

  /**
   * Payments without action
   */
  export type PaymentsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payments
     */
    select?: PaymentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payments
     */
    omit?: PaymentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentsInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UsersScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    password: 'password',
    phone: 'phone',
    created_at: 'created_at'
  };

  export type UsersScalarFieldEnum = (typeof UsersScalarFieldEnum)[keyof typeof UsersScalarFieldEnum]


  export const VenuesScalarFieldEnum: {
    id: 'id',
    name: 'name',
    city: 'city',
    address: 'address',
    cp_phone: 'cp_phone',
    price: 'price',
    description: 'description',
    banner: 'banner',
    rating: 'rating',
    reviewer: 'reviewer',
    created_at: 'created_at'
  };

  export type VenuesScalarFieldEnum = (typeof VenuesScalarFieldEnum)[keyof typeof VenuesScalarFieldEnum]


  export const TimeSlotsScalarFieldEnum: {
    id: 'id',
    venues_id: 'venues_id',
    start_time: 'start_time',
    end_time: 'end_time',
    isBooked: 'isBooked',
    created_at: 'created_at'
  };

  export type TimeSlotsScalarFieldEnum = (typeof TimeSlotsScalarFieldEnum)[keyof typeof TimeSlotsScalarFieldEnum]


  export const BookingsScalarFieldEnum: {
    id: 'id',
    user_id: 'user_id',
    total_price: 'total_price',
    status: 'status',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type BookingsScalarFieldEnum = (typeof BookingsScalarFieldEnum)[keyof typeof BookingsScalarFieldEnum]


  export const BookingDetailsScalarFieldEnum: {
    id: 'id',
    venue_id: 'venue_id',
    booking_id: 'booking_id',
    slot_id: 'slot_id',
    booking_date: 'booking_date'
  };

  export type BookingDetailsScalarFieldEnum = (typeof BookingDetailsScalarFieldEnum)[keyof typeof BookingDetailsScalarFieldEnum]


  export const PaymentsScalarFieldEnum: {
    id: 'id',
    booking_id: 'booking_id',
    transaction_id: 'transaction_id',
    payment_method: 'payment_method',
    amount: 'amount',
    payment_status: 'payment_status',
    va_number: 'va_number',
    pdf_url: 'pdf_url',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type PaymentsScalarFieldEnum = (typeof PaymentsScalarFieldEnum)[keyof typeof PaymentsScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'BookingStatus'
   */
  export type EnumBookingStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BookingStatus'>
    


  /**
   * Reference to a field of type 'BookingStatus[]'
   */
  export type ListEnumBookingStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BookingStatus[]'>
    


  /**
   * Reference to a field of type 'PaymentStatus'
   */
  export type EnumPaymentStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PaymentStatus'>
    


  /**
   * Reference to a field of type 'PaymentStatus[]'
   */
  export type ListEnumPaymentStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PaymentStatus[]'>
    
  /**
   * Deep Input Types
   */


  export type UsersWhereInput = {
    AND?: UsersWhereInput | UsersWhereInput[]
    OR?: UsersWhereInput[]
    NOT?: UsersWhereInput | UsersWhereInput[]
    id?: StringFilter<"Users"> | string
    name?: StringFilter<"Users"> | string
    email?: StringFilter<"Users"> | string
    password?: StringFilter<"Users"> | string
    phone?: StringFilter<"Users"> | string
    created_at?: DateTimeFilter<"Users"> | Date | string
    bookings?: BookingsListRelationFilter
  }

  export type UsersOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    phone?: SortOrder
    created_at?: SortOrder
    bookings?: BookingsOrderByRelationAggregateInput
  }

  export type UsersWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UsersWhereInput | UsersWhereInput[]
    OR?: UsersWhereInput[]
    NOT?: UsersWhereInput | UsersWhereInput[]
    name?: StringFilter<"Users"> | string
    password?: StringFilter<"Users"> | string
    phone?: StringFilter<"Users"> | string
    created_at?: DateTimeFilter<"Users"> | Date | string
    bookings?: BookingsListRelationFilter
  }, "id" | "email">

  export type UsersOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    phone?: SortOrder
    created_at?: SortOrder
    _count?: UsersCountOrderByAggregateInput
    _max?: UsersMaxOrderByAggregateInput
    _min?: UsersMinOrderByAggregateInput
  }

  export type UsersScalarWhereWithAggregatesInput = {
    AND?: UsersScalarWhereWithAggregatesInput | UsersScalarWhereWithAggregatesInput[]
    OR?: UsersScalarWhereWithAggregatesInput[]
    NOT?: UsersScalarWhereWithAggregatesInput | UsersScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Users"> | string
    name?: StringWithAggregatesFilter<"Users"> | string
    email?: StringWithAggregatesFilter<"Users"> | string
    password?: StringWithAggregatesFilter<"Users"> | string
    phone?: StringWithAggregatesFilter<"Users"> | string
    created_at?: DateTimeWithAggregatesFilter<"Users"> | Date | string
  }

  export type VenuesWhereInput = {
    AND?: VenuesWhereInput | VenuesWhereInput[]
    OR?: VenuesWhereInput[]
    NOT?: VenuesWhereInput | VenuesWhereInput[]
    id?: IntFilter<"Venues"> | number
    name?: StringFilter<"Venues"> | string
    city?: StringFilter<"Venues"> | string
    address?: StringFilter<"Venues"> | string
    cp_phone?: StringFilter<"Venues"> | string
    price?: IntFilter<"Venues"> | number
    description?: StringFilter<"Venues"> | string
    banner?: StringFilter<"Venues"> | string
    rating?: FloatFilter<"Venues"> | number
    reviewer?: IntFilter<"Venues"> | number
    created_at?: DateTimeFilter<"Venues"> | Date | string
    time_slots?: TimeSlotsListRelationFilter
    booking_details?: BookingDetailsListRelationFilter
  }

  export type VenuesOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    city?: SortOrder
    address?: SortOrder
    cp_phone?: SortOrder
    price?: SortOrder
    description?: SortOrder
    banner?: SortOrder
    rating?: SortOrder
    reviewer?: SortOrder
    created_at?: SortOrder
    time_slots?: TimeSlotsOrderByRelationAggregateInput
    booking_details?: BookingDetailsOrderByRelationAggregateInput
  }

  export type VenuesWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    name?: string
    AND?: VenuesWhereInput | VenuesWhereInput[]
    OR?: VenuesWhereInput[]
    NOT?: VenuesWhereInput | VenuesWhereInput[]
    city?: StringFilter<"Venues"> | string
    address?: StringFilter<"Venues"> | string
    cp_phone?: StringFilter<"Venues"> | string
    price?: IntFilter<"Venues"> | number
    description?: StringFilter<"Venues"> | string
    banner?: StringFilter<"Venues"> | string
    rating?: FloatFilter<"Venues"> | number
    reviewer?: IntFilter<"Venues"> | number
    created_at?: DateTimeFilter<"Venues"> | Date | string
    time_slots?: TimeSlotsListRelationFilter
    booking_details?: BookingDetailsListRelationFilter
  }, "id" | "name">

  export type VenuesOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    city?: SortOrder
    address?: SortOrder
    cp_phone?: SortOrder
    price?: SortOrder
    description?: SortOrder
    banner?: SortOrder
    rating?: SortOrder
    reviewer?: SortOrder
    created_at?: SortOrder
    _count?: VenuesCountOrderByAggregateInput
    _avg?: VenuesAvgOrderByAggregateInput
    _max?: VenuesMaxOrderByAggregateInput
    _min?: VenuesMinOrderByAggregateInput
    _sum?: VenuesSumOrderByAggregateInput
  }

  export type VenuesScalarWhereWithAggregatesInput = {
    AND?: VenuesScalarWhereWithAggregatesInput | VenuesScalarWhereWithAggregatesInput[]
    OR?: VenuesScalarWhereWithAggregatesInput[]
    NOT?: VenuesScalarWhereWithAggregatesInput | VenuesScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Venues"> | number
    name?: StringWithAggregatesFilter<"Venues"> | string
    city?: StringWithAggregatesFilter<"Venues"> | string
    address?: StringWithAggregatesFilter<"Venues"> | string
    cp_phone?: StringWithAggregatesFilter<"Venues"> | string
    price?: IntWithAggregatesFilter<"Venues"> | number
    description?: StringWithAggregatesFilter<"Venues"> | string
    banner?: StringWithAggregatesFilter<"Venues"> | string
    rating?: FloatWithAggregatesFilter<"Venues"> | number
    reviewer?: IntWithAggregatesFilter<"Venues"> | number
    created_at?: DateTimeWithAggregatesFilter<"Venues"> | Date | string
  }

  export type TimeSlotsWhereInput = {
    AND?: TimeSlotsWhereInput | TimeSlotsWhereInput[]
    OR?: TimeSlotsWhereInput[]
    NOT?: TimeSlotsWhereInput | TimeSlotsWhereInput[]
    id?: IntFilter<"TimeSlots"> | number
    venues_id?: IntFilter<"TimeSlots"> | number
    start_time?: DateTimeFilter<"TimeSlots"> | Date | string
    end_time?: DateTimeFilter<"TimeSlots"> | Date | string
    isBooked?: BoolFilter<"TimeSlots"> | boolean
    created_at?: DateTimeFilter<"TimeSlots"> | Date | string
    venue?: XOR<VenuesScalarRelationFilter, VenuesWhereInput>
    booking_details?: BookingDetailsListRelationFilter
  }

  export type TimeSlotsOrderByWithRelationInput = {
    id?: SortOrder
    venues_id?: SortOrder
    start_time?: SortOrder
    end_time?: SortOrder
    isBooked?: SortOrder
    created_at?: SortOrder
    venue?: VenuesOrderByWithRelationInput
    booking_details?: BookingDetailsOrderByRelationAggregateInput
  }

  export type TimeSlotsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    venues_id_start_time_end_time?: TimeSlotsVenues_idStart_timeEnd_timeCompoundUniqueInput
    AND?: TimeSlotsWhereInput | TimeSlotsWhereInput[]
    OR?: TimeSlotsWhereInput[]
    NOT?: TimeSlotsWhereInput | TimeSlotsWhereInput[]
    venues_id?: IntFilter<"TimeSlots"> | number
    start_time?: DateTimeFilter<"TimeSlots"> | Date | string
    end_time?: DateTimeFilter<"TimeSlots"> | Date | string
    isBooked?: BoolFilter<"TimeSlots"> | boolean
    created_at?: DateTimeFilter<"TimeSlots"> | Date | string
    venue?: XOR<VenuesScalarRelationFilter, VenuesWhereInput>
    booking_details?: BookingDetailsListRelationFilter
  }, "id" | "venues_id_start_time_end_time">

  export type TimeSlotsOrderByWithAggregationInput = {
    id?: SortOrder
    venues_id?: SortOrder
    start_time?: SortOrder
    end_time?: SortOrder
    isBooked?: SortOrder
    created_at?: SortOrder
    _count?: TimeSlotsCountOrderByAggregateInput
    _avg?: TimeSlotsAvgOrderByAggregateInput
    _max?: TimeSlotsMaxOrderByAggregateInput
    _min?: TimeSlotsMinOrderByAggregateInput
    _sum?: TimeSlotsSumOrderByAggregateInput
  }

  export type TimeSlotsScalarWhereWithAggregatesInput = {
    AND?: TimeSlotsScalarWhereWithAggregatesInput | TimeSlotsScalarWhereWithAggregatesInput[]
    OR?: TimeSlotsScalarWhereWithAggregatesInput[]
    NOT?: TimeSlotsScalarWhereWithAggregatesInput | TimeSlotsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"TimeSlots"> | number
    venues_id?: IntWithAggregatesFilter<"TimeSlots"> | number
    start_time?: DateTimeWithAggregatesFilter<"TimeSlots"> | Date | string
    end_time?: DateTimeWithAggregatesFilter<"TimeSlots"> | Date | string
    isBooked?: BoolWithAggregatesFilter<"TimeSlots"> | boolean
    created_at?: DateTimeWithAggregatesFilter<"TimeSlots"> | Date | string
  }

  export type BookingsWhereInput = {
    AND?: BookingsWhereInput | BookingsWhereInput[]
    OR?: BookingsWhereInput[]
    NOT?: BookingsWhereInput | BookingsWhereInput[]
    id?: StringFilter<"Bookings"> | string
    user_id?: StringFilter<"Bookings"> | string
    total_price?: IntFilter<"Bookings"> | number
    status?: EnumBookingStatusFilter<"Bookings"> | $Enums.BookingStatus
    created_at?: DateTimeFilter<"Bookings"> | Date | string
    updated_at?: DateTimeFilter<"Bookings"> | Date | string
    user?: XOR<UsersScalarRelationFilter, UsersWhereInput>
    booking_details?: BookingDetailsListRelationFilter
    payment?: XOR<PaymentsNullableScalarRelationFilter, PaymentsWhereInput> | null
  }

  export type BookingsOrderByWithRelationInput = {
    id?: SortOrder
    user_id?: SortOrder
    total_price?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    user?: UsersOrderByWithRelationInput
    booking_details?: BookingDetailsOrderByRelationAggregateInput
    payment?: PaymentsOrderByWithRelationInput
  }

  export type BookingsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: BookingsWhereInput | BookingsWhereInput[]
    OR?: BookingsWhereInput[]
    NOT?: BookingsWhereInput | BookingsWhereInput[]
    user_id?: StringFilter<"Bookings"> | string
    total_price?: IntFilter<"Bookings"> | number
    status?: EnumBookingStatusFilter<"Bookings"> | $Enums.BookingStatus
    created_at?: DateTimeFilter<"Bookings"> | Date | string
    updated_at?: DateTimeFilter<"Bookings"> | Date | string
    user?: XOR<UsersScalarRelationFilter, UsersWhereInput>
    booking_details?: BookingDetailsListRelationFilter
    payment?: XOR<PaymentsNullableScalarRelationFilter, PaymentsWhereInput> | null
  }, "id">

  export type BookingsOrderByWithAggregationInput = {
    id?: SortOrder
    user_id?: SortOrder
    total_price?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: BookingsCountOrderByAggregateInput
    _avg?: BookingsAvgOrderByAggregateInput
    _max?: BookingsMaxOrderByAggregateInput
    _min?: BookingsMinOrderByAggregateInput
    _sum?: BookingsSumOrderByAggregateInput
  }

  export type BookingsScalarWhereWithAggregatesInput = {
    AND?: BookingsScalarWhereWithAggregatesInput | BookingsScalarWhereWithAggregatesInput[]
    OR?: BookingsScalarWhereWithAggregatesInput[]
    NOT?: BookingsScalarWhereWithAggregatesInput | BookingsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Bookings"> | string
    user_id?: StringWithAggregatesFilter<"Bookings"> | string
    total_price?: IntWithAggregatesFilter<"Bookings"> | number
    status?: EnumBookingStatusWithAggregatesFilter<"Bookings"> | $Enums.BookingStatus
    created_at?: DateTimeWithAggregatesFilter<"Bookings"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"Bookings"> | Date | string
  }

  export type BookingDetailsWhereInput = {
    AND?: BookingDetailsWhereInput | BookingDetailsWhereInput[]
    OR?: BookingDetailsWhereInput[]
    NOT?: BookingDetailsWhereInput | BookingDetailsWhereInput[]
    id?: StringFilter<"BookingDetails"> | string
    venue_id?: IntFilter<"BookingDetails"> | number
    booking_id?: StringFilter<"BookingDetails"> | string
    slot_id?: IntFilter<"BookingDetails"> | number
    booking_date?: DateTimeFilter<"BookingDetails"> | Date | string
    venue?: XOR<VenuesScalarRelationFilter, VenuesWhereInput>
    slot?: XOR<TimeSlotsScalarRelationFilter, TimeSlotsWhereInput>
    booking?: XOR<BookingsScalarRelationFilter, BookingsWhereInput>
  }

  export type BookingDetailsOrderByWithRelationInput = {
    id?: SortOrder
    venue_id?: SortOrder
    booking_id?: SortOrder
    slot_id?: SortOrder
    booking_date?: SortOrder
    venue?: VenuesOrderByWithRelationInput
    slot?: TimeSlotsOrderByWithRelationInput
    booking?: BookingsOrderByWithRelationInput
  }

  export type BookingDetailsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: BookingDetailsWhereInput | BookingDetailsWhereInput[]
    OR?: BookingDetailsWhereInput[]
    NOT?: BookingDetailsWhereInput | BookingDetailsWhereInput[]
    venue_id?: IntFilter<"BookingDetails"> | number
    booking_id?: StringFilter<"BookingDetails"> | string
    slot_id?: IntFilter<"BookingDetails"> | number
    booking_date?: DateTimeFilter<"BookingDetails"> | Date | string
    venue?: XOR<VenuesScalarRelationFilter, VenuesWhereInput>
    slot?: XOR<TimeSlotsScalarRelationFilter, TimeSlotsWhereInput>
    booking?: XOR<BookingsScalarRelationFilter, BookingsWhereInput>
  }, "id">

  export type BookingDetailsOrderByWithAggregationInput = {
    id?: SortOrder
    venue_id?: SortOrder
    booking_id?: SortOrder
    slot_id?: SortOrder
    booking_date?: SortOrder
    _count?: BookingDetailsCountOrderByAggregateInput
    _avg?: BookingDetailsAvgOrderByAggregateInput
    _max?: BookingDetailsMaxOrderByAggregateInput
    _min?: BookingDetailsMinOrderByAggregateInput
    _sum?: BookingDetailsSumOrderByAggregateInput
  }

  export type BookingDetailsScalarWhereWithAggregatesInput = {
    AND?: BookingDetailsScalarWhereWithAggregatesInput | BookingDetailsScalarWhereWithAggregatesInput[]
    OR?: BookingDetailsScalarWhereWithAggregatesInput[]
    NOT?: BookingDetailsScalarWhereWithAggregatesInput | BookingDetailsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"BookingDetails"> | string
    venue_id?: IntWithAggregatesFilter<"BookingDetails"> | number
    booking_id?: StringWithAggregatesFilter<"BookingDetails"> | string
    slot_id?: IntWithAggregatesFilter<"BookingDetails"> | number
    booking_date?: DateTimeWithAggregatesFilter<"BookingDetails"> | Date | string
  }

  export type PaymentsWhereInput = {
    AND?: PaymentsWhereInput | PaymentsWhereInput[]
    OR?: PaymentsWhereInput[]
    NOT?: PaymentsWhereInput | PaymentsWhereInput[]
    id?: StringFilter<"Payments"> | string
    booking_id?: StringFilter<"Payments"> | string
    transaction_id?: StringFilter<"Payments"> | string
    payment_method?: StringFilter<"Payments"> | string
    amount?: IntFilter<"Payments"> | number
    payment_status?: EnumPaymentStatusFilter<"Payments"> | $Enums.PaymentStatus
    va_number?: StringNullableFilter<"Payments"> | string | null
    pdf_url?: StringFilter<"Payments"> | string
    created_at?: DateTimeFilter<"Payments"> | Date | string
    updated_at?: DateTimeFilter<"Payments"> | Date | string
    booking?: XOR<BookingsScalarRelationFilter, BookingsWhereInput>
  }

  export type PaymentsOrderByWithRelationInput = {
    id?: SortOrder
    booking_id?: SortOrder
    transaction_id?: SortOrder
    payment_method?: SortOrder
    amount?: SortOrder
    payment_status?: SortOrder
    va_number?: SortOrderInput | SortOrder
    pdf_url?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    booking?: BookingsOrderByWithRelationInput
  }

  export type PaymentsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    booking_id?: string
    transaction_id?: string
    AND?: PaymentsWhereInput | PaymentsWhereInput[]
    OR?: PaymentsWhereInput[]
    NOT?: PaymentsWhereInput | PaymentsWhereInput[]
    payment_method?: StringFilter<"Payments"> | string
    amount?: IntFilter<"Payments"> | number
    payment_status?: EnumPaymentStatusFilter<"Payments"> | $Enums.PaymentStatus
    va_number?: StringNullableFilter<"Payments"> | string | null
    pdf_url?: StringFilter<"Payments"> | string
    created_at?: DateTimeFilter<"Payments"> | Date | string
    updated_at?: DateTimeFilter<"Payments"> | Date | string
    booking?: XOR<BookingsScalarRelationFilter, BookingsWhereInput>
  }, "id" | "booking_id" | "transaction_id">

  export type PaymentsOrderByWithAggregationInput = {
    id?: SortOrder
    booking_id?: SortOrder
    transaction_id?: SortOrder
    payment_method?: SortOrder
    amount?: SortOrder
    payment_status?: SortOrder
    va_number?: SortOrderInput | SortOrder
    pdf_url?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: PaymentsCountOrderByAggregateInput
    _avg?: PaymentsAvgOrderByAggregateInput
    _max?: PaymentsMaxOrderByAggregateInput
    _min?: PaymentsMinOrderByAggregateInput
    _sum?: PaymentsSumOrderByAggregateInput
  }

  export type PaymentsScalarWhereWithAggregatesInput = {
    AND?: PaymentsScalarWhereWithAggregatesInput | PaymentsScalarWhereWithAggregatesInput[]
    OR?: PaymentsScalarWhereWithAggregatesInput[]
    NOT?: PaymentsScalarWhereWithAggregatesInput | PaymentsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Payments"> | string
    booking_id?: StringWithAggregatesFilter<"Payments"> | string
    transaction_id?: StringWithAggregatesFilter<"Payments"> | string
    payment_method?: StringWithAggregatesFilter<"Payments"> | string
    amount?: IntWithAggregatesFilter<"Payments"> | number
    payment_status?: EnumPaymentStatusWithAggregatesFilter<"Payments"> | $Enums.PaymentStatus
    va_number?: StringNullableWithAggregatesFilter<"Payments"> | string | null
    pdf_url?: StringWithAggregatesFilter<"Payments"> | string
    created_at?: DateTimeWithAggregatesFilter<"Payments"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"Payments"> | Date | string
  }

  export type UsersCreateInput = {
    id?: string
    name: string
    email: string
    password: string
    phone: string
    created_at?: Date | string
    bookings?: BookingsCreateNestedManyWithoutUserInput
  }

  export type UsersUncheckedCreateInput = {
    id?: string
    name: string
    email: string
    password: string
    phone: string
    created_at?: Date | string
    bookings?: BookingsUncheckedCreateNestedManyWithoutUserInput
  }

  export type UsersUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    bookings?: BookingsUpdateManyWithoutUserNestedInput
  }

  export type UsersUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    bookings?: BookingsUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UsersCreateManyInput = {
    id?: string
    name: string
    email: string
    password: string
    phone: string
    created_at?: Date | string
  }

  export type UsersUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UsersUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VenuesCreateInput = {
    name: string
    city: string
    address: string
    cp_phone: string
    price: number
    description: string
    banner: string
    rating: number
    reviewer: number
    created_at?: Date | string
    time_slots?: TimeSlotsCreateNestedManyWithoutVenueInput
    booking_details?: BookingDetailsCreateNestedManyWithoutVenueInput
  }

  export type VenuesUncheckedCreateInput = {
    id?: number
    name: string
    city: string
    address: string
    cp_phone: string
    price: number
    description: string
    banner: string
    rating: number
    reviewer: number
    created_at?: Date | string
    time_slots?: TimeSlotsUncheckedCreateNestedManyWithoutVenueInput
    booking_details?: BookingDetailsUncheckedCreateNestedManyWithoutVenueInput
  }

  export type VenuesUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    cp_phone?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    banner?: StringFieldUpdateOperationsInput | string
    rating?: FloatFieldUpdateOperationsInput | number
    reviewer?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    time_slots?: TimeSlotsUpdateManyWithoutVenueNestedInput
    booking_details?: BookingDetailsUpdateManyWithoutVenueNestedInput
  }

  export type VenuesUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    cp_phone?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    banner?: StringFieldUpdateOperationsInput | string
    rating?: FloatFieldUpdateOperationsInput | number
    reviewer?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    time_slots?: TimeSlotsUncheckedUpdateManyWithoutVenueNestedInput
    booking_details?: BookingDetailsUncheckedUpdateManyWithoutVenueNestedInput
  }

  export type VenuesCreateManyInput = {
    id?: number
    name: string
    city: string
    address: string
    cp_phone: string
    price: number
    description: string
    banner: string
    rating: number
    reviewer: number
    created_at?: Date | string
  }

  export type VenuesUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    cp_phone?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    banner?: StringFieldUpdateOperationsInput | string
    rating?: FloatFieldUpdateOperationsInput | number
    reviewer?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VenuesUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    cp_phone?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    banner?: StringFieldUpdateOperationsInput | string
    rating?: FloatFieldUpdateOperationsInput | number
    reviewer?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TimeSlotsCreateInput = {
    start_time: Date | string
    end_time: Date | string
    isBooked?: boolean
    created_at?: Date | string
    venue: VenuesCreateNestedOneWithoutTime_slotsInput
    booking_details?: BookingDetailsCreateNestedManyWithoutSlotInput
  }

  export type TimeSlotsUncheckedCreateInput = {
    id?: number
    venues_id: number
    start_time: Date | string
    end_time: Date | string
    isBooked?: boolean
    created_at?: Date | string
    booking_details?: BookingDetailsUncheckedCreateNestedManyWithoutSlotInput
  }

  export type TimeSlotsUpdateInput = {
    start_time?: DateTimeFieldUpdateOperationsInput | Date | string
    end_time?: DateTimeFieldUpdateOperationsInput | Date | string
    isBooked?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    venue?: VenuesUpdateOneRequiredWithoutTime_slotsNestedInput
    booking_details?: BookingDetailsUpdateManyWithoutSlotNestedInput
  }

  export type TimeSlotsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    venues_id?: IntFieldUpdateOperationsInput | number
    start_time?: DateTimeFieldUpdateOperationsInput | Date | string
    end_time?: DateTimeFieldUpdateOperationsInput | Date | string
    isBooked?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    booking_details?: BookingDetailsUncheckedUpdateManyWithoutSlotNestedInput
  }

  export type TimeSlotsCreateManyInput = {
    id?: number
    venues_id: number
    start_time: Date | string
    end_time: Date | string
    isBooked?: boolean
    created_at?: Date | string
  }

  export type TimeSlotsUpdateManyMutationInput = {
    start_time?: DateTimeFieldUpdateOperationsInput | Date | string
    end_time?: DateTimeFieldUpdateOperationsInput | Date | string
    isBooked?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TimeSlotsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    venues_id?: IntFieldUpdateOperationsInput | number
    start_time?: DateTimeFieldUpdateOperationsInput | Date | string
    end_time?: DateTimeFieldUpdateOperationsInput | Date | string
    isBooked?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BookingsCreateInput = {
    id?: string
    total_price: number
    status?: $Enums.BookingStatus
    created_at?: Date | string
    updated_at?: Date | string
    user: UsersCreateNestedOneWithoutBookingsInput
    booking_details?: BookingDetailsCreateNestedManyWithoutBookingInput
    payment?: PaymentsCreateNestedOneWithoutBookingInput
  }

  export type BookingsUncheckedCreateInput = {
    id?: string
    user_id: string
    total_price: number
    status?: $Enums.BookingStatus
    created_at?: Date | string
    updated_at?: Date | string
    booking_details?: BookingDetailsUncheckedCreateNestedManyWithoutBookingInput
    payment?: PaymentsUncheckedCreateNestedOneWithoutBookingInput
  }

  export type BookingsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    total_price?: IntFieldUpdateOperationsInput | number
    status?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UsersUpdateOneRequiredWithoutBookingsNestedInput
    booking_details?: BookingDetailsUpdateManyWithoutBookingNestedInput
    payment?: PaymentsUpdateOneWithoutBookingNestedInput
  }

  export type BookingsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    total_price?: IntFieldUpdateOperationsInput | number
    status?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    booking_details?: BookingDetailsUncheckedUpdateManyWithoutBookingNestedInput
    payment?: PaymentsUncheckedUpdateOneWithoutBookingNestedInput
  }

  export type BookingsCreateManyInput = {
    id?: string
    user_id: string
    total_price: number
    status?: $Enums.BookingStatus
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type BookingsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    total_price?: IntFieldUpdateOperationsInput | number
    status?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BookingsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    total_price?: IntFieldUpdateOperationsInput | number
    status?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BookingDetailsCreateInput = {
    id?: string
    booking_date: Date | string
    venue: VenuesCreateNestedOneWithoutBooking_detailsInput
    slot: TimeSlotsCreateNestedOneWithoutBooking_detailsInput
    booking: BookingsCreateNestedOneWithoutBooking_detailsInput
  }

  export type BookingDetailsUncheckedCreateInput = {
    id?: string
    venue_id: number
    booking_id: string
    slot_id: number
    booking_date: Date | string
  }

  export type BookingDetailsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    booking_date?: DateTimeFieldUpdateOperationsInput | Date | string
    venue?: VenuesUpdateOneRequiredWithoutBooking_detailsNestedInput
    slot?: TimeSlotsUpdateOneRequiredWithoutBooking_detailsNestedInput
    booking?: BookingsUpdateOneRequiredWithoutBooking_detailsNestedInput
  }

  export type BookingDetailsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    venue_id?: IntFieldUpdateOperationsInput | number
    booking_id?: StringFieldUpdateOperationsInput | string
    slot_id?: IntFieldUpdateOperationsInput | number
    booking_date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BookingDetailsCreateManyInput = {
    id?: string
    venue_id: number
    booking_id: string
    slot_id: number
    booking_date: Date | string
  }

  export type BookingDetailsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    booking_date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BookingDetailsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    venue_id?: IntFieldUpdateOperationsInput | number
    booking_id?: StringFieldUpdateOperationsInput | string
    slot_id?: IntFieldUpdateOperationsInput | number
    booking_date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentsCreateInput = {
    id?: string
    transaction_id: string
    payment_method: string
    amount: number
    payment_status?: $Enums.PaymentStatus
    va_number?: string | null
    pdf_url: string
    created_at?: Date | string
    updated_at?: Date | string
    booking: BookingsCreateNestedOneWithoutPaymentInput
  }

  export type PaymentsUncheckedCreateInput = {
    id?: string
    booking_id: string
    transaction_id: string
    payment_method: string
    amount: number
    payment_status?: $Enums.PaymentStatus
    va_number?: string | null
    pdf_url: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type PaymentsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    transaction_id?: StringFieldUpdateOperationsInput | string
    payment_method?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    payment_status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    va_number?: NullableStringFieldUpdateOperationsInput | string | null
    pdf_url?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    booking?: BookingsUpdateOneRequiredWithoutPaymentNestedInput
  }

  export type PaymentsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    booking_id?: StringFieldUpdateOperationsInput | string
    transaction_id?: StringFieldUpdateOperationsInput | string
    payment_method?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    payment_status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    va_number?: NullableStringFieldUpdateOperationsInput | string | null
    pdf_url?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentsCreateManyInput = {
    id?: string
    booking_id: string
    transaction_id: string
    payment_method: string
    amount: number
    payment_status?: $Enums.PaymentStatus
    va_number?: string | null
    pdf_url: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type PaymentsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    transaction_id?: StringFieldUpdateOperationsInput | string
    payment_method?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    payment_status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    va_number?: NullableStringFieldUpdateOperationsInput | string | null
    pdf_url?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    booking_id?: StringFieldUpdateOperationsInput | string
    transaction_id?: StringFieldUpdateOperationsInput | string
    payment_method?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    payment_status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    va_number?: NullableStringFieldUpdateOperationsInput | string | null
    pdf_url?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type BookingsListRelationFilter = {
    every?: BookingsWhereInput
    some?: BookingsWhereInput
    none?: BookingsWhereInput
  }

  export type BookingsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UsersCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    phone?: SortOrder
    created_at?: SortOrder
  }

  export type UsersMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    phone?: SortOrder
    created_at?: SortOrder
  }

  export type UsersMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    phone?: SortOrder
    created_at?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type TimeSlotsListRelationFilter = {
    every?: TimeSlotsWhereInput
    some?: TimeSlotsWhereInput
    none?: TimeSlotsWhereInput
  }

  export type BookingDetailsListRelationFilter = {
    every?: BookingDetailsWhereInput
    some?: BookingDetailsWhereInput
    none?: BookingDetailsWhereInput
  }

  export type TimeSlotsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type BookingDetailsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type VenuesCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    city?: SortOrder
    address?: SortOrder
    cp_phone?: SortOrder
    price?: SortOrder
    description?: SortOrder
    banner?: SortOrder
    rating?: SortOrder
    reviewer?: SortOrder
    created_at?: SortOrder
  }

  export type VenuesAvgOrderByAggregateInput = {
    id?: SortOrder
    price?: SortOrder
    rating?: SortOrder
    reviewer?: SortOrder
  }

  export type VenuesMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    city?: SortOrder
    address?: SortOrder
    cp_phone?: SortOrder
    price?: SortOrder
    description?: SortOrder
    banner?: SortOrder
    rating?: SortOrder
    reviewer?: SortOrder
    created_at?: SortOrder
  }

  export type VenuesMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    city?: SortOrder
    address?: SortOrder
    cp_phone?: SortOrder
    price?: SortOrder
    description?: SortOrder
    banner?: SortOrder
    rating?: SortOrder
    reviewer?: SortOrder
    created_at?: SortOrder
  }

  export type VenuesSumOrderByAggregateInput = {
    id?: SortOrder
    price?: SortOrder
    rating?: SortOrder
    reviewer?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type VenuesScalarRelationFilter = {
    is?: VenuesWhereInput
    isNot?: VenuesWhereInput
  }

  export type TimeSlotsVenues_idStart_timeEnd_timeCompoundUniqueInput = {
    venues_id: number
    start_time: Date | string
    end_time: Date | string
  }

  export type TimeSlotsCountOrderByAggregateInput = {
    id?: SortOrder
    venues_id?: SortOrder
    start_time?: SortOrder
    end_time?: SortOrder
    isBooked?: SortOrder
    created_at?: SortOrder
  }

  export type TimeSlotsAvgOrderByAggregateInput = {
    id?: SortOrder
    venues_id?: SortOrder
  }

  export type TimeSlotsMaxOrderByAggregateInput = {
    id?: SortOrder
    venues_id?: SortOrder
    start_time?: SortOrder
    end_time?: SortOrder
    isBooked?: SortOrder
    created_at?: SortOrder
  }

  export type TimeSlotsMinOrderByAggregateInput = {
    id?: SortOrder
    venues_id?: SortOrder
    start_time?: SortOrder
    end_time?: SortOrder
    isBooked?: SortOrder
    created_at?: SortOrder
  }

  export type TimeSlotsSumOrderByAggregateInput = {
    id?: SortOrder
    venues_id?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type EnumBookingStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.BookingStatus | EnumBookingStatusFieldRefInput<$PrismaModel>
    in?: $Enums.BookingStatus[] | ListEnumBookingStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.BookingStatus[] | ListEnumBookingStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumBookingStatusFilter<$PrismaModel> | $Enums.BookingStatus
  }

  export type UsersScalarRelationFilter = {
    is?: UsersWhereInput
    isNot?: UsersWhereInput
  }

  export type PaymentsNullableScalarRelationFilter = {
    is?: PaymentsWhereInput | null
    isNot?: PaymentsWhereInput | null
  }

  export type BookingsCountOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    total_price?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type BookingsAvgOrderByAggregateInput = {
    total_price?: SortOrder
  }

  export type BookingsMaxOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    total_price?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type BookingsMinOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    total_price?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type BookingsSumOrderByAggregateInput = {
    total_price?: SortOrder
  }

  export type EnumBookingStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.BookingStatus | EnumBookingStatusFieldRefInput<$PrismaModel>
    in?: $Enums.BookingStatus[] | ListEnumBookingStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.BookingStatus[] | ListEnumBookingStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumBookingStatusWithAggregatesFilter<$PrismaModel> | $Enums.BookingStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumBookingStatusFilter<$PrismaModel>
    _max?: NestedEnumBookingStatusFilter<$PrismaModel>
  }

  export type TimeSlotsScalarRelationFilter = {
    is?: TimeSlotsWhereInput
    isNot?: TimeSlotsWhereInput
  }

  export type BookingsScalarRelationFilter = {
    is?: BookingsWhereInput
    isNot?: BookingsWhereInput
  }

  export type BookingDetailsCountOrderByAggregateInput = {
    id?: SortOrder
    venue_id?: SortOrder
    booking_id?: SortOrder
    slot_id?: SortOrder
    booking_date?: SortOrder
  }

  export type BookingDetailsAvgOrderByAggregateInput = {
    venue_id?: SortOrder
    slot_id?: SortOrder
  }

  export type BookingDetailsMaxOrderByAggregateInput = {
    id?: SortOrder
    venue_id?: SortOrder
    booking_id?: SortOrder
    slot_id?: SortOrder
    booking_date?: SortOrder
  }

  export type BookingDetailsMinOrderByAggregateInput = {
    id?: SortOrder
    venue_id?: SortOrder
    booking_id?: SortOrder
    slot_id?: SortOrder
    booking_date?: SortOrder
  }

  export type BookingDetailsSumOrderByAggregateInput = {
    venue_id?: SortOrder
    slot_id?: SortOrder
  }

  export type EnumPaymentStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentStatus | EnumPaymentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentStatusFilter<$PrismaModel> | $Enums.PaymentStatus
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type PaymentsCountOrderByAggregateInput = {
    id?: SortOrder
    booking_id?: SortOrder
    transaction_id?: SortOrder
    payment_method?: SortOrder
    amount?: SortOrder
    payment_status?: SortOrder
    va_number?: SortOrder
    pdf_url?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type PaymentsAvgOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type PaymentsMaxOrderByAggregateInput = {
    id?: SortOrder
    booking_id?: SortOrder
    transaction_id?: SortOrder
    payment_method?: SortOrder
    amount?: SortOrder
    payment_status?: SortOrder
    va_number?: SortOrder
    pdf_url?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type PaymentsMinOrderByAggregateInput = {
    id?: SortOrder
    booking_id?: SortOrder
    transaction_id?: SortOrder
    payment_method?: SortOrder
    amount?: SortOrder
    payment_status?: SortOrder
    va_number?: SortOrder
    pdf_url?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type PaymentsSumOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type EnumPaymentStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentStatus | EnumPaymentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentStatusWithAggregatesFilter<$PrismaModel> | $Enums.PaymentStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPaymentStatusFilter<$PrismaModel>
    _max?: NestedEnumPaymentStatusFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type BookingsCreateNestedManyWithoutUserInput = {
    create?: XOR<BookingsCreateWithoutUserInput, BookingsUncheckedCreateWithoutUserInput> | BookingsCreateWithoutUserInput[] | BookingsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BookingsCreateOrConnectWithoutUserInput | BookingsCreateOrConnectWithoutUserInput[]
    createMany?: BookingsCreateManyUserInputEnvelope
    connect?: BookingsWhereUniqueInput | BookingsWhereUniqueInput[]
  }

  export type BookingsUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<BookingsCreateWithoutUserInput, BookingsUncheckedCreateWithoutUserInput> | BookingsCreateWithoutUserInput[] | BookingsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BookingsCreateOrConnectWithoutUserInput | BookingsCreateOrConnectWithoutUserInput[]
    createMany?: BookingsCreateManyUserInputEnvelope
    connect?: BookingsWhereUniqueInput | BookingsWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type BookingsUpdateManyWithoutUserNestedInput = {
    create?: XOR<BookingsCreateWithoutUserInput, BookingsUncheckedCreateWithoutUserInput> | BookingsCreateWithoutUserInput[] | BookingsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BookingsCreateOrConnectWithoutUserInput | BookingsCreateOrConnectWithoutUserInput[]
    upsert?: BookingsUpsertWithWhereUniqueWithoutUserInput | BookingsUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: BookingsCreateManyUserInputEnvelope
    set?: BookingsWhereUniqueInput | BookingsWhereUniqueInput[]
    disconnect?: BookingsWhereUniqueInput | BookingsWhereUniqueInput[]
    delete?: BookingsWhereUniqueInput | BookingsWhereUniqueInput[]
    connect?: BookingsWhereUniqueInput | BookingsWhereUniqueInput[]
    update?: BookingsUpdateWithWhereUniqueWithoutUserInput | BookingsUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: BookingsUpdateManyWithWhereWithoutUserInput | BookingsUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: BookingsScalarWhereInput | BookingsScalarWhereInput[]
  }

  export type BookingsUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<BookingsCreateWithoutUserInput, BookingsUncheckedCreateWithoutUserInput> | BookingsCreateWithoutUserInput[] | BookingsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BookingsCreateOrConnectWithoutUserInput | BookingsCreateOrConnectWithoutUserInput[]
    upsert?: BookingsUpsertWithWhereUniqueWithoutUserInput | BookingsUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: BookingsCreateManyUserInputEnvelope
    set?: BookingsWhereUniqueInput | BookingsWhereUniqueInput[]
    disconnect?: BookingsWhereUniqueInput | BookingsWhereUniqueInput[]
    delete?: BookingsWhereUniqueInput | BookingsWhereUniqueInput[]
    connect?: BookingsWhereUniqueInput | BookingsWhereUniqueInput[]
    update?: BookingsUpdateWithWhereUniqueWithoutUserInput | BookingsUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: BookingsUpdateManyWithWhereWithoutUserInput | BookingsUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: BookingsScalarWhereInput | BookingsScalarWhereInput[]
  }

  export type TimeSlotsCreateNestedManyWithoutVenueInput = {
    create?: XOR<TimeSlotsCreateWithoutVenueInput, TimeSlotsUncheckedCreateWithoutVenueInput> | TimeSlotsCreateWithoutVenueInput[] | TimeSlotsUncheckedCreateWithoutVenueInput[]
    connectOrCreate?: TimeSlotsCreateOrConnectWithoutVenueInput | TimeSlotsCreateOrConnectWithoutVenueInput[]
    createMany?: TimeSlotsCreateManyVenueInputEnvelope
    connect?: TimeSlotsWhereUniqueInput | TimeSlotsWhereUniqueInput[]
  }

  export type BookingDetailsCreateNestedManyWithoutVenueInput = {
    create?: XOR<BookingDetailsCreateWithoutVenueInput, BookingDetailsUncheckedCreateWithoutVenueInput> | BookingDetailsCreateWithoutVenueInput[] | BookingDetailsUncheckedCreateWithoutVenueInput[]
    connectOrCreate?: BookingDetailsCreateOrConnectWithoutVenueInput | BookingDetailsCreateOrConnectWithoutVenueInput[]
    createMany?: BookingDetailsCreateManyVenueInputEnvelope
    connect?: BookingDetailsWhereUniqueInput | BookingDetailsWhereUniqueInput[]
  }

  export type TimeSlotsUncheckedCreateNestedManyWithoutVenueInput = {
    create?: XOR<TimeSlotsCreateWithoutVenueInput, TimeSlotsUncheckedCreateWithoutVenueInput> | TimeSlotsCreateWithoutVenueInput[] | TimeSlotsUncheckedCreateWithoutVenueInput[]
    connectOrCreate?: TimeSlotsCreateOrConnectWithoutVenueInput | TimeSlotsCreateOrConnectWithoutVenueInput[]
    createMany?: TimeSlotsCreateManyVenueInputEnvelope
    connect?: TimeSlotsWhereUniqueInput | TimeSlotsWhereUniqueInput[]
  }

  export type BookingDetailsUncheckedCreateNestedManyWithoutVenueInput = {
    create?: XOR<BookingDetailsCreateWithoutVenueInput, BookingDetailsUncheckedCreateWithoutVenueInput> | BookingDetailsCreateWithoutVenueInput[] | BookingDetailsUncheckedCreateWithoutVenueInput[]
    connectOrCreate?: BookingDetailsCreateOrConnectWithoutVenueInput | BookingDetailsCreateOrConnectWithoutVenueInput[]
    createMany?: BookingDetailsCreateManyVenueInputEnvelope
    connect?: BookingDetailsWhereUniqueInput | BookingDetailsWhereUniqueInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type TimeSlotsUpdateManyWithoutVenueNestedInput = {
    create?: XOR<TimeSlotsCreateWithoutVenueInput, TimeSlotsUncheckedCreateWithoutVenueInput> | TimeSlotsCreateWithoutVenueInput[] | TimeSlotsUncheckedCreateWithoutVenueInput[]
    connectOrCreate?: TimeSlotsCreateOrConnectWithoutVenueInput | TimeSlotsCreateOrConnectWithoutVenueInput[]
    upsert?: TimeSlotsUpsertWithWhereUniqueWithoutVenueInput | TimeSlotsUpsertWithWhereUniqueWithoutVenueInput[]
    createMany?: TimeSlotsCreateManyVenueInputEnvelope
    set?: TimeSlotsWhereUniqueInput | TimeSlotsWhereUniqueInput[]
    disconnect?: TimeSlotsWhereUniqueInput | TimeSlotsWhereUniqueInput[]
    delete?: TimeSlotsWhereUniqueInput | TimeSlotsWhereUniqueInput[]
    connect?: TimeSlotsWhereUniqueInput | TimeSlotsWhereUniqueInput[]
    update?: TimeSlotsUpdateWithWhereUniqueWithoutVenueInput | TimeSlotsUpdateWithWhereUniqueWithoutVenueInput[]
    updateMany?: TimeSlotsUpdateManyWithWhereWithoutVenueInput | TimeSlotsUpdateManyWithWhereWithoutVenueInput[]
    deleteMany?: TimeSlotsScalarWhereInput | TimeSlotsScalarWhereInput[]
  }

  export type BookingDetailsUpdateManyWithoutVenueNestedInput = {
    create?: XOR<BookingDetailsCreateWithoutVenueInput, BookingDetailsUncheckedCreateWithoutVenueInput> | BookingDetailsCreateWithoutVenueInput[] | BookingDetailsUncheckedCreateWithoutVenueInput[]
    connectOrCreate?: BookingDetailsCreateOrConnectWithoutVenueInput | BookingDetailsCreateOrConnectWithoutVenueInput[]
    upsert?: BookingDetailsUpsertWithWhereUniqueWithoutVenueInput | BookingDetailsUpsertWithWhereUniqueWithoutVenueInput[]
    createMany?: BookingDetailsCreateManyVenueInputEnvelope
    set?: BookingDetailsWhereUniqueInput | BookingDetailsWhereUniqueInput[]
    disconnect?: BookingDetailsWhereUniqueInput | BookingDetailsWhereUniqueInput[]
    delete?: BookingDetailsWhereUniqueInput | BookingDetailsWhereUniqueInput[]
    connect?: BookingDetailsWhereUniqueInput | BookingDetailsWhereUniqueInput[]
    update?: BookingDetailsUpdateWithWhereUniqueWithoutVenueInput | BookingDetailsUpdateWithWhereUniqueWithoutVenueInput[]
    updateMany?: BookingDetailsUpdateManyWithWhereWithoutVenueInput | BookingDetailsUpdateManyWithWhereWithoutVenueInput[]
    deleteMany?: BookingDetailsScalarWhereInput | BookingDetailsScalarWhereInput[]
  }

  export type TimeSlotsUncheckedUpdateManyWithoutVenueNestedInput = {
    create?: XOR<TimeSlotsCreateWithoutVenueInput, TimeSlotsUncheckedCreateWithoutVenueInput> | TimeSlotsCreateWithoutVenueInput[] | TimeSlotsUncheckedCreateWithoutVenueInput[]
    connectOrCreate?: TimeSlotsCreateOrConnectWithoutVenueInput | TimeSlotsCreateOrConnectWithoutVenueInput[]
    upsert?: TimeSlotsUpsertWithWhereUniqueWithoutVenueInput | TimeSlotsUpsertWithWhereUniqueWithoutVenueInput[]
    createMany?: TimeSlotsCreateManyVenueInputEnvelope
    set?: TimeSlotsWhereUniqueInput | TimeSlotsWhereUniqueInput[]
    disconnect?: TimeSlotsWhereUniqueInput | TimeSlotsWhereUniqueInput[]
    delete?: TimeSlotsWhereUniqueInput | TimeSlotsWhereUniqueInput[]
    connect?: TimeSlotsWhereUniqueInput | TimeSlotsWhereUniqueInput[]
    update?: TimeSlotsUpdateWithWhereUniqueWithoutVenueInput | TimeSlotsUpdateWithWhereUniqueWithoutVenueInput[]
    updateMany?: TimeSlotsUpdateManyWithWhereWithoutVenueInput | TimeSlotsUpdateManyWithWhereWithoutVenueInput[]
    deleteMany?: TimeSlotsScalarWhereInput | TimeSlotsScalarWhereInput[]
  }

  export type BookingDetailsUncheckedUpdateManyWithoutVenueNestedInput = {
    create?: XOR<BookingDetailsCreateWithoutVenueInput, BookingDetailsUncheckedCreateWithoutVenueInput> | BookingDetailsCreateWithoutVenueInput[] | BookingDetailsUncheckedCreateWithoutVenueInput[]
    connectOrCreate?: BookingDetailsCreateOrConnectWithoutVenueInput | BookingDetailsCreateOrConnectWithoutVenueInput[]
    upsert?: BookingDetailsUpsertWithWhereUniqueWithoutVenueInput | BookingDetailsUpsertWithWhereUniqueWithoutVenueInput[]
    createMany?: BookingDetailsCreateManyVenueInputEnvelope
    set?: BookingDetailsWhereUniqueInput | BookingDetailsWhereUniqueInput[]
    disconnect?: BookingDetailsWhereUniqueInput | BookingDetailsWhereUniqueInput[]
    delete?: BookingDetailsWhereUniqueInput | BookingDetailsWhereUniqueInput[]
    connect?: BookingDetailsWhereUniqueInput | BookingDetailsWhereUniqueInput[]
    update?: BookingDetailsUpdateWithWhereUniqueWithoutVenueInput | BookingDetailsUpdateWithWhereUniqueWithoutVenueInput[]
    updateMany?: BookingDetailsUpdateManyWithWhereWithoutVenueInput | BookingDetailsUpdateManyWithWhereWithoutVenueInput[]
    deleteMany?: BookingDetailsScalarWhereInput | BookingDetailsScalarWhereInput[]
  }

  export type VenuesCreateNestedOneWithoutTime_slotsInput = {
    create?: XOR<VenuesCreateWithoutTime_slotsInput, VenuesUncheckedCreateWithoutTime_slotsInput>
    connectOrCreate?: VenuesCreateOrConnectWithoutTime_slotsInput
    connect?: VenuesWhereUniqueInput
  }

  export type BookingDetailsCreateNestedManyWithoutSlotInput = {
    create?: XOR<BookingDetailsCreateWithoutSlotInput, BookingDetailsUncheckedCreateWithoutSlotInput> | BookingDetailsCreateWithoutSlotInput[] | BookingDetailsUncheckedCreateWithoutSlotInput[]
    connectOrCreate?: BookingDetailsCreateOrConnectWithoutSlotInput | BookingDetailsCreateOrConnectWithoutSlotInput[]
    createMany?: BookingDetailsCreateManySlotInputEnvelope
    connect?: BookingDetailsWhereUniqueInput | BookingDetailsWhereUniqueInput[]
  }

  export type BookingDetailsUncheckedCreateNestedManyWithoutSlotInput = {
    create?: XOR<BookingDetailsCreateWithoutSlotInput, BookingDetailsUncheckedCreateWithoutSlotInput> | BookingDetailsCreateWithoutSlotInput[] | BookingDetailsUncheckedCreateWithoutSlotInput[]
    connectOrCreate?: BookingDetailsCreateOrConnectWithoutSlotInput | BookingDetailsCreateOrConnectWithoutSlotInput[]
    createMany?: BookingDetailsCreateManySlotInputEnvelope
    connect?: BookingDetailsWhereUniqueInput | BookingDetailsWhereUniqueInput[]
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type VenuesUpdateOneRequiredWithoutTime_slotsNestedInput = {
    create?: XOR<VenuesCreateWithoutTime_slotsInput, VenuesUncheckedCreateWithoutTime_slotsInput>
    connectOrCreate?: VenuesCreateOrConnectWithoutTime_slotsInput
    upsert?: VenuesUpsertWithoutTime_slotsInput
    connect?: VenuesWhereUniqueInput
    update?: XOR<XOR<VenuesUpdateToOneWithWhereWithoutTime_slotsInput, VenuesUpdateWithoutTime_slotsInput>, VenuesUncheckedUpdateWithoutTime_slotsInput>
  }

  export type BookingDetailsUpdateManyWithoutSlotNestedInput = {
    create?: XOR<BookingDetailsCreateWithoutSlotInput, BookingDetailsUncheckedCreateWithoutSlotInput> | BookingDetailsCreateWithoutSlotInput[] | BookingDetailsUncheckedCreateWithoutSlotInput[]
    connectOrCreate?: BookingDetailsCreateOrConnectWithoutSlotInput | BookingDetailsCreateOrConnectWithoutSlotInput[]
    upsert?: BookingDetailsUpsertWithWhereUniqueWithoutSlotInput | BookingDetailsUpsertWithWhereUniqueWithoutSlotInput[]
    createMany?: BookingDetailsCreateManySlotInputEnvelope
    set?: BookingDetailsWhereUniqueInput | BookingDetailsWhereUniqueInput[]
    disconnect?: BookingDetailsWhereUniqueInput | BookingDetailsWhereUniqueInput[]
    delete?: BookingDetailsWhereUniqueInput | BookingDetailsWhereUniqueInput[]
    connect?: BookingDetailsWhereUniqueInput | BookingDetailsWhereUniqueInput[]
    update?: BookingDetailsUpdateWithWhereUniqueWithoutSlotInput | BookingDetailsUpdateWithWhereUniqueWithoutSlotInput[]
    updateMany?: BookingDetailsUpdateManyWithWhereWithoutSlotInput | BookingDetailsUpdateManyWithWhereWithoutSlotInput[]
    deleteMany?: BookingDetailsScalarWhereInput | BookingDetailsScalarWhereInput[]
  }

  export type BookingDetailsUncheckedUpdateManyWithoutSlotNestedInput = {
    create?: XOR<BookingDetailsCreateWithoutSlotInput, BookingDetailsUncheckedCreateWithoutSlotInput> | BookingDetailsCreateWithoutSlotInput[] | BookingDetailsUncheckedCreateWithoutSlotInput[]
    connectOrCreate?: BookingDetailsCreateOrConnectWithoutSlotInput | BookingDetailsCreateOrConnectWithoutSlotInput[]
    upsert?: BookingDetailsUpsertWithWhereUniqueWithoutSlotInput | BookingDetailsUpsertWithWhereUniqueWithoutSlotInput[]
    createMany?: BookingDetailsCreateManySlotInputEnvelope
    set?: BookingDetailsWhereUniqueInput | BookingDetailsWhereUniqueInput[]
    disconnect?: BookingDetailsWhereUniqueInput | BookingDetailsWhereUniqueInput[]
    delete?: BookingDetailsWhereUniqueInput | BookingDetailsWhereUniqueInput[]
    connect?: BookingDetailsWhereUniqueInput | BookingDetailsWhereUniqueInput[]
    update?: BookingDetailsUpdateWithWhereUniqueWithoutSlotInput | BookingDetailsUpdateWithWhereUniqueWithoutSlotInput[]
    updateMany?: BookingDetailsUpdateManyWithWhereWithoutSlotInput | BookingDetailsUpdateManyWithWhereWithoutSlotInput[]
    deleteMany?: BookingDetailsScalarWhereInput | BookingDetailsScalarWhereInput[]
  }

  export type UsersCreateNestedOneWithoutBookingsInput = {
    create?: XOR<UsersCreateWithoutBookingsInput, UsersUncheckedCreateWithoutBookingsInput>
    connectOrCreate?: UsersCreateOrConnectWithoutBookingsInput
    connect?: UsersWhereUniqueInput
  }

  export type BookingDetailsCreateNestedManyWithoutBookingInput = {
    create?: XOR<BookingDetailsCreateWithoutBookingInput, BookingDetailsUncheckedCreateWithoutBookingInput> | BookingDetailsCreateWithoutBookingInput[] | BookingDetailsUncheckedCreateWithoutBookingInput[]
    connectOrCreate?: BookingDetailsCreateOrConnectWithoutBookingInput | BookingDetailsCreateOrConnectWithoutBookingInput[]
    createMany?: BookingDetailsCreateManyBookingInputEnvelope
    connect?: BookingDetailsWhereUniqueInput | BookingDetailsWhereUniqueInput[]
  }

  export type PaymentsCreateNestedOneWithoutBookingInput = {
    create?: XOR<PaymentsCreateWithoutBookingInput, PaymentsUncheckedCreateWithoutBookingInput>
    connectOrCreate?: PaymentsCreateOrConnectWithoutBookingInput
    connect?: PaymentsWhereUniqueInput
  }

  export type BookingDetailsUncheckedCreateNestedManyWithoutBookingInput = {
    create?: XOR<BookingDetailsCreateWithoutBookingInput, BookingDetailsUncheckedCreateWithoutBookingInput> | BookingDetailsCreateWithoutBookingInput[] | BookingDetailsUncheckedCreateWithoutBookingInput[]
    connectOrCreate?: BookingDetailsCreateOrConnectWithoutBookingInput | BookingDetailsCreateOrConnectWithoutBookingInput[]
    createMany?: BookingDetailsCreateManyBookingInputEnvelope
    connect?: BookingDetailsWhereUniqueInput | BookingDetailsWhereUniqueInput[]
  }

  export type PaymentsUncheckedCreateNestedOneWithoutBookingInput = {
    create?: XOR<PaymentsCreateWithoutBookingInput, PaymentsUncheckedCreateWithoutBookingInput>
    connectOrCreate?: PaymentsCreateOrConnectWithoutBookingInput
    connect?: PaymentsWhereUniqueInput
  }

  export type EnumBookingStatusFieldUpdateOperationsInput = {
    set?: $Enums.BookingStatus
  }

  export type UsersUpdateOneRequiredWithoutBookingsNestedInput = {
    create?: XOR<UsersCreateWithoutBookingsInput, UsersUncheckedCreateWithoutBookingsInput>
    connectOrCreate?: UsersCreateOrConnectWithoutBookingsInput
    upsert?: UsersUpsertWithoutBookingsInput
    connect?: UsersWhereUniqueInput
    update?: XOR<XOR<UsersUpdateToOneWithWhereWithoutBookingsInput, UsersUpdateWithoutBookingsInput>, UsersUncheckedUpdateWithoutBookingsInput>
  }

  export type BookingDetailsUpdateManyWithoutBookingNestedInput = {
    create?: XOR<BookingDetailsCreateWithoutBookingInput, BookingDetailsUncheckedCreateWithoutBookingInput> | BookingDetailsCreateWithoutBookingInput[] | BookingDetailsUncheckedCreateWithoutBookingInput[]
    connectOrCreate?: BookingDetailsCreateOrConnectWithoutBookingInput | BookingDetailsCreateOrConnectWithoutBookingInput[]
    upsert?: BookingDetailsUpsertWithWhereUniqueWithoutBookingInput | BookingDetailsUpsertWithWhereUniqueWithoutBookingInput[]
    createMany?: BookingDetailsCreateManyBookingInputEnvelope
    set?: BookingDetailsWhereUniqueInput | BookingDetailsWhereUniqueInput[]
    disconnect?: BookingDetailsWhereUniqueInput | BookingDetailsWhereUniqueInput[]
    delete?: BookingDetailsWhereUniqueInput | BookingDetailsWhereUniqueInput[]
    connect?: BookingDetailsWhereUniqueInput | BookingDetailsWhereUniqueInput[]
    update?: BookingDetailsUpdateWithWhereUniqueWithoutBookingInput | BookingDetailsUpdateWithWhereUniqueWithoutBookingInput[]
    updateMany?: BookingDetailsUpdateManyWithWhereWithoutBookingInput | BookingDetailsUpdateManyWithWhereWithoutBookingInput[]
    deleteMany?: BookingDetailsScalarWhereInput | BookingDetailsScalarWhereInput[]
  }

  export type PaymentsUpdateOneWithoutBookingNestedInput = {
    create?: XOR<PaymentsCreateWithoutBookingInput, PaymentsUncheckedCreateWithoutBookingInput>
    connectOrCreate?: PaymentsCreateOrConnectWithoutBookingInput
    upsert?: PaymentsUpsertWithoutBookingInput
    disconnect?: PaymentsWhereInput | boolean
    delete?: PaymentsWhereInput | boolean
    connect?: PaymentsWhereUniqueInput
    update?: XOR<XOR<PaymentsUpdateToOneWithWhereWithoutBookingInput, PaymentsUpdateWithoutBookingInput>, PaymentsUncheckedUpdateWithoutBookingInput>
  }

  export type BookingDetailsUncheckedUpdateManyWithoutBookingNestedInput = {
    create?: XOR<BookingDetailsCreateWithoutBookingInput, BookingDetailsUncheckedCreateWithoutBookingInput> | BookingDetailsCreateWithoutBookingInput[] | BookingDetailsUncheckedCreateWithoutBookingInput[]
    connectOrCreate?: BookingDetailsCreateOrConnectWithoutBookingInput | BookingDetailsCreateOrConnectWithoutBookingInput[]
    upsert?: BookingDetailsUpsertWithWhereUniqueWithoutBookingInput | BookingDetailsUpsertWithWhereUniqueWithoutBookingInput[]
    createMany?: BookingDetailsCreateManyBookingInputEnvelope
    set?: BookingDetailsWhereUniqueInput | BookingDetailsWhereUniqueInput[]
    disconnect?: BookingDetailsWhereUniqueInput | BookingDetailsWhereUniqueInput[]
    delete?: BookingDetailsWhereUniqueInput | BookingDetailsWhereUniqueInput[]
    connect?: BookingDetailsWhereUniqueInput | BookingDetailsWhereUniqueInput[]
    update?: BookingDetailsUpdateWithWhereUniqueWithoutBookingInput | BookingDetailsUpdateWithWhereUniqueWithoutBookingInput[]
    updateMany?: BookingDetailsUpdateManyWithWhereWithoutBookingInput | BookingDetailsUpdateManyWithWhereWithoutBookingInput[]
    deleteMany?: BookingDetailsScalarWhereInput | BookingDetailsScalarWhereInput[]
  }

  export type PaymentsUncheckedUpdateOneWithoutBookingNestedInput = {
    create?: XOR<PaymentsCreateWithoutBookingInput, PaymentsUncheckedCreateWithoutBookingInput>
    connectOrCreate?: PaymentsCreateOrConnectWithoutBookingInput
    upsert?: PaymentsUpsertWithoutBookingInput
    disconnect?: PaymentsWhereInput | boolean
    delete?: PaymentsWhereInput | boolean
    connect?: PaymentsWhereUniqueInput
    update?: XOR<XOR<PaymentsUpdateToOneWithWhereWithoutBookingInput, PaymentsUpdateWithoutBookingInput>, PaymentsUncheckedUpdateWithoutBookingInput>
  }

  export type VenuesCreateNestedOneWithoutBooking_detailsInput = {
    create?: XOR<VenuesCreateWithoutBooking_detailsInput, VenuesUncheckedCreateWithoutBooking_detailsInput>
    connectOrCreate?: VenuesCreateOrConnectWithoutBooking_detailsInput
    connect?: VenuesWhereUniqueInput
  }

  export type TimeSlotsCreateNestedOneWithoutBooking_detailsInput = {
    create?: XOR<TimeSlotsCreateWithoutBooking_detailsInput, TimeSlotsUncheckedCreateWithoutBooking_detailsInput>
    connectOrCreate?: TimeSlotsCreateOrConnectWithoutBooking_detailsInput
    connect?: TimeSlotsWhereUniqueInput
  }

  export type BookingsCreateNestedOneWithoutBooking_detailsInput = {
    create?: XOR<BookingsCreateWithoutBooking_detailsInput, BookingsUncheckedCreateWithoutBooking_detailsInput>
    connectOrCreate?: BookingsCreateOrConnectWithoutBooking_detailsInput
    connect?: BookingsWhereUniqueInput
  }

  export type VenuesUpdateOneRequiredWithoutBooking_detailsNestedInput = {
    create?: XOR<VenuesCreateWithoutBooking_detailsInput, VenuesUncheckedCreateWithoutBooking_detailsInput>
    connectOrCreate?: VenuesCreateOrConnectWithoutBooking_detailsInput
    upsert?: VenuesUpsertWithoutBooking_detailsInput
    connect?: VenuesWhereUniqueInput
    update?: XOR<XOR<VenuesUpdateToOneWithWhereWithoutBooking_detailsInput, VenuesUpdateWithoutBooking_detailsInput>, VenuesUncheckedUpdateWithoutBooking_detailsInput>
  }

  export type TimeSlotsUpdateOneRequiredWithoutBooking_detailsNestedInput = {
    create?: XOR<TimeSlotsCreateWithoutBooking_detailsInput, TimeSlotsUncheckedCreateWithoutBooking_detailsInput>
    connectOrCreate?: TimeSlotsCreateOrConnectWithoutBooking_detailsInput
    upsert?: TimeSlotsUpsertWithoutBooking_detailsInput
    connect?: TimeSlotsWhereUniqueInput
    update?: XOR<XOR<TimeSlotsUpdateToOneWithWhereWithoutBooking_detailsInput, TimeSlotsUpdateWithoutBooking_detailsInput>, TimeSlotsUncheckedUpdateWithoutBooking_detailsInput>
  }

  export type BookingsUpdateOneRequiredWithoutBooking_detailsNestedInput = {
    create?: XOR<BookingsCreateWithoutBooking_detailsInput, BookingsUncheckedCreateWithoutBooking_detailsInput>
    connectOrCreate?: BookingsCreateOrConnectWithoutBooking_detailsInput
    upsert?: BookingsUpsertWithoutBooking_detailsInput
    connect?: BookingsWhereUniqueInput
    update?: XOR<XOR<BookingsUpdateToOneWithWhereWithoutBooking_detailsInput, BookingsUpdateWithoutBooking_detailsInput>, BookingsUncheckedUpdateWithoutBooking_detailsInput>
  }

  export type BookingsCreateNestedOneWithoutPaymentInput = {
    create?: XOR<BookingsCreateWithoutPaymentInput, BookingsUncheckedCreateWithoutPaymentInput>
    connectOrCreate?: BookingsCreateOrConnectWithoutPaymentInput
    connect?: BookingsWhereUniqueInput
  }

  export type EnumPaymentStatusFieldUpdateOperationsInput = {
    set?: $Enums.PaymentStatus
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type BookingsUpdateOneRequiredWithoutPaymentNestedInput = {
    create?: XOR<BookingsCreateWithoutPaymentInput, BookingsUncheckedCreateWithoutPaymentInput>
    connectOrCreate?: BookingsCreateOrConnectWithoutPaymentInput
    upsert?: BookingsUpsertWithoutPaymentInput
    connect?: BookingsWhereUniqueInput
    update?: XOR<XOR<BookingsUpdateToOneWithWhereWithoutPaymentInput, BookingsUpdateWithoutPaymentInput>, BookingsUncheckedUpdateWithoutPaymentInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedEnumBookingStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.BookingStatus | EnumBookingStatusFieldRefInput<$PrismaModel>
    in?: $Enums.BookingStatus[] | ListEnumBookingStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.BookingStatus[] | ListEnumBookingStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumBookingStatusFilter<$PrismaModel> | $Enums.BookingStatus
  }

  export type NestedEnumBookingStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.BookingStatus | EnumBookingStatusFieldRefInput<$PrismaModel>
    in?: $Enums.BookingStatus[] | ListEnumBookingStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.BookingStatus[] | ListEnumBookingStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumBookingStatusWithAggregatesFilter<$PrismaModel> | $Enums.BookingStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumBookingStatusFilter<$PrismaModel>
    _max?: NestedEnumBookingStatusFilter<$PrismaModel>
  }

  export type NestedEnumPaymentStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentStatus | EnumPaymentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentStatusFilter<$PrismaModel> | $Enums.PaymentStatus
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedEnumPaymentStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentStatus | EnumPaymentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentStatusWithAggregatesFilter<$PrismaModel> | $Enums.PaymentStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPaymentStatusFilter<$PrismaModel>
    _max?: NestedEnumPaymentStatusFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type BookingsCreateWithoutUserInput = {
    id?: string
    total_price: number
    status?: $Enums.BookingStatus
    created_at?: Date | string
    updated_at?: Date | string
    booking_details?: BookingDetailsCreateNestedManyWithoutBookingInput
    payment?: PaymentsCreateNestedOneWithoutBookingInput
  }

  export type BookingsUncheckedCreateWithoutUserInput = {
    id?: string
    total_price: number
    status?: $Enums.BookingStatus
    created_at?: Date | string
    updated_at?: Date | string
    booking_details?: BookingDetailsUncheckedCreateNestedManyWithoutBookingInput
    payment?: PaymentsUncheckedCreateNestedOneWithoutBookingInput
  }

  export type BookingsCreateOrConnectWithoutUserInput = {
    where: BookingsWhereUniqueInput
    create: XOR<BookingsCreateWithoutUserInput, BookingsUncheckedCreateWithoutUserInput>
  }

  export type BookingsCreateManyUserInputEnvelope = {
    data: BookingsCreateManyUserInput | BookingsCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type BookingsUpsertWithWhereUniqueWithoutUserInput = {
    where: BookingsWhereUniqueInput
    update: XOR<BookingsUpdateWithoutUserInput, BookingsUncheckedUpdateWithoutUserInput>
    create: XOR<BookingsCreateWithoutUserInput, BookingsUncheckedCreateWithoutUserInput>
  }

  export type BookingsUpdateWithWhereUniqueWithoutUserInput = {
    where: BookingsWhereUniqueInput
    data: XOR<BookingsUpdateWithoutUserInput, BookingsUncheckedUpdateWithoutUserInput>
  }

  export type BookingsUpdateManyWithWhereWithoutUserInput = {
    where: BookingsScalarWhereInput
    data: XOR<BookingsUpdateManyMutationInput, BookingsUncheckedUpdateManyWithoutUserInput>
  }

  export type BookingsScalarWhereInput = {
    AND?: BookingsScalarWhereInput | BookingsScalarWhereInput[]
    OR?: BookingsScalarWhereInput[]
    NOT?: BookingsScalarWhereInput | BookingsScalarWhereInput[]
    id?: StringFilter<"Bookings"> | string
    user_id?: StringFilter<"Bookings"> | string
    total_price?: IntFilter<"Bookings"> | number
    status?: EnumBookingStatusFilter<"Bookings"> | $Enums.BookingStatus
    created_at?: DateTimeFilter<"Bookings"> | Date | string
    updated_at?: DateTimeFilter<"Bookings"> | Date | string
  }

  export type TimeSlotsCreateWithoutVenueInput = {
    start_time: Date | string
    end_time: Date | string
    isBooked?: boolean
    created_at?: Date | string
    booking_details?: BookingDetailsCreateNestedManyWithoutSlotInput
  }

  export type TimeSlotsUncheckedCreateWithoutVenueInput = {
    id?: number
    start_time: Date | string
    end_time: Date | string
    isBooked?: boolean
    created_at?: Date | string
    booking_details?: BookingDetailsUncheckedCreateNestedManyWithoutSlotInput
  }

  export type TimeSlotsCreateOrConnectWithoutVenueInput = {
    where: TimeSlotsWhereUniqueInput
    create: XOR<TimeSlotsCreateWithoutVenueInput, TimeSlotsUncheckedCreateWithoutVenueInput>
  }

  export type TimeSlotsCreateManyVenueInputEnvelope = {
    data: TimeSlotsCreateManyVenueInput | TimeSlotsCreateManyVenueInput[]
    skipDuplicates?: boolean
  }

  export type BookingDetailsCreateWithoutVenueInput = {
    id?: string
    booking_date: Date | string
    slot: TimeSlotsCreateNestedOneWithoutBooking_detailsInput
    booking: BookingsCreateNestedOneWithoutBooking_detailsInput
  }

  export type BookingDetailsUncheckedCreateWithoutVenueInput = {
    id?: string
    booking_id: string
    slot_id: number
    booking_date: Date | string
  }

  export type BookingDetailsCreateOrConnectWithoutVenueInput = {
    where: BookingDetailsWhereUniqueInput
    create: XOR<BookingDetailsCreateWithoutVenueInput, BookingDetailsUncheckedCreateWithoutVenueInput>
  }

  export type BookingDetailsCreateManyVenueInputEnvelope = {
    data: BookingDetailsCreateManyVenueInput | BookingDetailsCreateManyVenueInput[]
    skipDuplicates?: boolean
  }

  export type TimeSlotsUpsertWithWhereUniqueWithoutVenueInput = {
    where: TimeSlotsWhereUniqueInput
    update: XOR<TimeSlotsUpdateWithoutVenueInput, TimeSlotsUncheckedUpdateWithoutVenueInput>
    create: XOR<TimeSlotsCreateWithoutVenueInput, TimeSlotsUncheckedCreateWithoutVenueInput>
  }

  export type TimeSlotsUpdateWithWhereUniqueWithoutVenueInput = {
    where: TimeSlotsWhereUniqueInput
    data: XOR<TimeSlotsUpdateWithoutVenueInput, TimeSlotsUncheckedUpdateWithoutVenueInput>
  }

  export type TimeSlotsUpdateManyWithWhereWithoutVenueInput = {
    where: TimeSlotsScalarWhereInput
    data: XOR<TimeSlotsUpdateManyMutationInput, TimeSlotsUncheckedUpdateManyWithoutVenueInput>
  }

  export type TimeSlotsScalarWhereInput = {
    AND?: TimeSlotsScalarWhereInput | TimeSlotsScalarWhereInput[]
    OR?: TimeSlotsScalarWhereInput[]
    NOT?: TimeSlotsScalarWhereInput | TimeSlotsScalarWhereInput[]
    id?: IntFilter<"TimeSlots"> | number
    venues_id?: IntFilter<"TimeSlots"> | number
    start_time?: DateTimeFilter<"TimeSlots"> | Date | string
    end_time?: DateTimeFilter<"TimeSlots"> | Date | string
    isBooked?: BoolFilter<"TimeSlots"> | boolean
    created_at?: DateTimeFilter<"TimeSlots"> | Date | string
  }

  export type BookingDetailsUpsertWithWhereUniqueWithoutVenueInput = {
    where: BookingDetailsWhereUniqueInput
    update: XOR<BookingDetailsUpdateWithoutVenueInput, BookingDetailsUncheckedUpdateWithoutVenueInput>
    create: XOR<BookingDetailsCreateWithoutVenueInput, BookingDetailsUncheckedCreateWithoutVenueInput>
  }

  export type BookingDetailsUpdateWithWhereUniqueWithoutVenueInput = {
    where: BookingDetailsWhereUniqueInput
    data: XOR<BookingDetailsUpdateWithoutVenueInput, BookingDetailsUncheckedUpdateWithoutVenueInput>
  }

  export type BookingDetailsUpdateManyWithWhereWithoutVenueInput = {
    where: BookingDetailsScalarWhereInput
    data: XOR<BookingDetailsUpdateManyMutationInput, BookingDetailsUncheckedUpdateManyWithoutVenueInput>
  }

  export type BookingDetailsScalarWhereInput = {
    AND?: BookingDetailsScalarWhereInput | BookingDetailsScalarWhereInput[]
    OR?: BookingDetailsScalarWhereInput[]
    NOT?: BookingDetailsScalarWhereInput | BookingDetailsScalarWhereInput[]
    id?: StringFilter<"BookingDetails"> | string
    venue_id?: IntFilter<"BookingDetails"> | number
    booking_id?: StringFilter<"BookingDetails"> | string
    slot_id?: IntFilter<"BookingDetails"> | number
    booking_date?: DateTimeFilter<"BookingDetails"> | Date | string
  }

  export type VenuesCreateWithoutTime_slotsInput = {
    name: string
    city: string
    address: string
    cp_phone: string
    price: number
    description: string
    banner: string
    rating: number
    reviewer: number
    created_at?: Date | string
    booking_details?: BookingDetailsCreateNestedManyWithoutVenueInput
  }

  export type VenuesUncheckedCreateWithoutTime_slotsInput = {
    id?: number
    name: string
    city: string
    address: string
    cp_phone: string
    price: number
    description: string
    banner: string
    rating: number
    reviewer: number
    created_at?: Date | string
    booking_details?: BookingDetailsUncheckedCreateNestedManyWithoutVenueInput
  }

  export type VenuesCreateOrConnectWithoutTime_slotsInput = {
    where: VenuesWhereUniqueInput
    create: XOR<VenuesCreateWithoutTime_slotsInput, VenuesUncheckedCreateWithoutTime_slotsInput>
  }

  export type BookingDetailsCreateWithoutSlotInput = {
    id?: string
    booking_date: Date | string
    venue: VenuesCreateNestedOneWithoutBooking_detailsInput
    booking: BookingsCreateNestedOneWithoutBooking_detailsInput
  }

  export type BookingDetailsUncheckedCreateWithoutSlotInput = {
    id?: string
    venue_id: number
    booking_id: string
    booking_date: Date | string
  }

  export type BookingDetailsCreateOrConnectWithoutSlotInput = {
    where: BookingDetailsWhereUniqueInput
    create: XOR<BookingDetailsCreateWithoutSlotInput, BookingDetailsUncheckedCreateWithoutSlotInput>
  }

  export type BookingDetailsCreateManySlotInputEnvelope = {
    data: BookingDetailsCreateManySlotInput | BookingDetailsCreateManySlotInput[]
    skipDuplicates?: boolean
  }

  export type VenuesUpsertWithoutTime_slotsInput = {
    update: XOR<VenuesUpdateWithoutTime_slotsInput, VenuesUncheckedUpdateWithoutTime_slotsInput>
    create: XOR<VenuesCreateWithoutTime_slotsInput, VenuesUncheckedCreateWithoutTime_slotsInput>
    where?: VenuesWhereInput
  }

  export type VenuesUpdateToOneWithWhereWithoutTime_slotsInput = {
    where?: VenuesWhereInput
    data: XOR<VenuesUpdateWithoutTime_slotsInput, VenuesUncheckedUpdateWithoutTime_slotsInput>
  }

  export type VenuesUpdateWithoutTime_slotsInput = {
    name?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    cp_phone?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    banner?: StringFieldUpdateOperationsInput | string
    rating?: FloatFieldUpdateOperationsInput | number
    reviewer?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    booking_details?: BookingDetailsUpdateManyWithoutVenueNestedInput
  }

  export type VenuesUncheckedUpdateWithoutTime_slotsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    cp_phone?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    banner?: StringFieldUpdateOperationsInput | string
    rating?: FloatFieldUpdateOperationsInput | number
    reviewer?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    booking_details?: BookingDetailsUncheckedUpdateManyWithoutVenueNestedInput
  }

  export type BookingDetailsUpsertWithWhereUniqueWithoutSlotInput = {
    where: BookingDetailsWhereUniqueInput
    update: XOR<BookingDetailsUpdateWithoutSlotInput, BookingDetailsUncheckedUpdateWithoutSlotInput>
    create: XOR<BookingDetailsCreateWithoutSlotInput, BookingDetailsUncheckedCreateWithoutSlotInput>
  }

  export type BookingDetailsUpdateWithWhereUniqueWithoutSlotInput = {
    where: BookingDetailsWhereUniqueInput
    data: XOR<BookingDetailsUpdateWithoutSlotInput, BookingDetailsUncheckedUpdateWithoutSlotInput>
  }

  export type BookingDetailsUpdateManyWithWhereWithoutSlotInput = {
    where: BookingDetailsScalarWhereInput
    data: XOR<BookingDetailsUpdateManyMutationInput, BookingDetailsUncheckedUpdateManyWithoutSlotInput>
  }

  export type UsersCreateWithoutBookingsInput = {
    id?: string
    name: string
    email: string
    password: string
    phone: string
    created_at?: Date | string
  }

  export type UsersUncheckedCreateWithoutBookingsInput = {
    id?: string
    name: string
    email: string
    password: string
    phone: string
    created_at?: Date | string
  }

  export type UsersCreateOrConnectWithoutBookingsInput = {
    where: UsersWhereUniqueInput
    create: XOR<UsersCreateWithoutBookingsInput, UsersUncheckedCreateWithoutBookingsInput>
  }

  export type BookingDetailsCreateWithoutBookingInput = {
    id?: string
    booking_date: Date | string
    venue: VenuesCreateNestedOneWithoutBooking_detailsInput
    slot: TimeSlotsCreateNestedOneWithoutBooking_detailsInput
  }

  export type BookingDetailsUncheckedCreateWithoutBookingInput = {
    id?: string
    venue_id: number
    slot_id: number
    booking_date: Date | string
  }

  export type BookingDetailsCreateOrConnectWithoutBookingInput = {
    where: BookingDetailsWhereUniqueInput
    create: XOR<BookingDetailsCreateWithoutBookingInput, BookingDetailsUncheckedCreateWithoutBookingInput>
  }

  export type BookingDetailsCreateManyBookingInputEnvelope = {
    data: BookingDetailsCreateManyBookingInput | BookingDetailsCreateManyBookingInput[]
    skipDuplicates?: boolean
  }

  export type PaymentsCreateWithoutBookingInput = {
    id?: string
    transaction_id: string
    payment_method: string
    amount: number
    payment_status?: $Enums.PaymentStatus
    va_number?: string | null
    pdf_url: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type PaymentsUncheckedCreateWithoutBookingInput = {
    id?: string
    transaction_id: string
    payment_method: string
    amount: number
    payment_status?: $Enums.PaymentStatus
    va_number?: string | null
    pdf_url: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type PaymentsCreateOrConnectWithoutBookingInput = {
    where: PaymentsWhereUniqueInput
    create: XOR<PaymentsCreateWithoutBookingInput, PaymentsUncheckedCreateWithoutBookingInput>
  }

  export type UsersUpsertWithoutBookingsInput = {
    update: XOR<UsersUpdateWithoutBookingsInput, UsersUncheckedUpdateWithoutBookingsInput>
    create: XOR<UsersCreateWithoutBookingsInput, UsersUncheckedCreateWithoutBookingsInput>
    where?: UsersWhereInput
  }

  export type UsersUpdateToOneWithWhereWithoutBookingsInput = {
    where?: UsersWhereInput
    data: XOR<UsersUpdateWithoutBookingsInput, UsersUncheckedUpdateWithoutBookingsInput>
  }

  export type UsersUpdateWithoutBookingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UsersUncheckedUpdateWithoutBookingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BookingDetailsUpsertWithWhereUniqueWithoutBookingInput = {
    where: BookingDetailsWhereUniqueInput
    update: XOR<BookingDetailsUpdateWithoutBookingInput, BookingDetailsUncheckedUpdateWithoutBookingInput>
    create: XOR<BookingDetailsCreateWithoutBookingInput, BookingDetailsUncheckedCreateWithoutBookingInput>
  }

  export type BookingDetailsUpdateWithWhereUniqueWithoutBookingInput = {
    where: BookingDetailsWhereUniqueInput
    data: XOR<BookingDetailsUpdateWithoutBookingInput, BookingDetailsUncheckedUpdateWithoutBookingInput>
  }

  export type BookingDetailsUpdateManyWithWhereWithoutBookingInput = {
    where: BookingDetailsScalarWhereInput
    data: XOR<BookingDetailsUpdateManyMutationInput, BookingDetailsUncheckedUpdateManyWithoutBookingInput>
  }

  export type PaymentsUpsertWithoutBookingInput = {
    update: XOR<PaymentsUpdateWithoutBookingInput, PaymentsUncheckedUpdateWithoutBookingInput>
    create: XOR<PaymentsCreateWithoutBookingInput, PaymentsUncheckedCreateWithoutBookingInput>
    where?: PaymentsWhereInput
  }

  export type PaymentsUpdateToOneWithWhereWithoutBookingInput = {
    where?: PaymentsWhereInput
    data: XOR<PaymentsUpdateWithoutBookingInput, PaymentsUncheckedUpdateWithoutBookingInput>
  }

  export type PaymentsUpdateWithoutBookingInput = {
    id?: StringFieldUpdateOperationsInput | string
    transaction_id?: StringFieldUpdateOperationsInput | string
    payment_method?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    payment_status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    va_number?: NullableStringFieldUpdateOperationsInput | string | null
    pdf_url?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentsUncheckedUpdateWithoutBookingInput = {
    id?: StringFieldUpdateOperationsInput | string
    transaction_id?: StringFieldUpdateOperationsInput | string
    payment_method?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    payment_status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    va_number?: NullableStringFieldUpdateOperationsInput | string | null
    pdf_url?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VenuesCreateWithoutBooking_detailsInput = {
    name: string
    city: string
    address: string
    cp_phone: string
    price: number
    description: string
    banner: string
    rating: number
    reviewer: number
    created_at?: Date | string
    time_slots?: TimeSlotsCreateNestedManyWithoutVenueInput
  }

  export type VenuesUncheckedCreateWithoutBooking_detailsInput = {
    id?: number
    name: string
    city: string
    address: string
    cp_phone: string
    price: number
    description: string
    banner: string
    rating: number
    reviewer: number
    created_at?: Date | string
    time_slots?: TimeSlotsUncheckedCreateNestedManyWithoutVenueInput
  }

  export type VenuesCreateOrConnectWithoutBooking_detailsInput = {
    where: VenuesWhereUniqueInput
    create: XOR<VenuesCreateWithoutBooking_detailsInput, VenuesUncheckedCreateWithoutBooking_detailsInput>
  }

  export type TimeSlotsCreateWithoutBooking_detailsInput = {
    start_time: Date | string
    end_time: Date | string
    isBooked?: boolean
    created_at?: Date | string
    venue: VenuesCreateNestedOneWithoutTime_slotsInput
  }

  export type TimeSlotsUncheckedCreateWithoutBooking_detailsInput = {
    id?: number
    venues_id: number
    start_time: Date | string
    end_time: Date | string
    isBooked?: boolean
    created_at?: Date | string
  }

  export type TimeSlotsCreateOrConnectWithoutBooking_detailsInput = {
    where: TimeSlotsWhereUniqueInput
    create: XOR<TimeSlotsCreateWithoutBooking_detailsInput, TimeSlotsUncheckedCreateWithoutBooking_detailsInput>
  }

  export type BookingsCreateWithoutBooking_detailsInput = {
    id?: string
    total_price: number
    status?: $Enums.BookingStatus
    created_at?: Date | string
    updated_at?: Date | string
    user: UsersCreateNestedOneWithoutBookingsInput
    payment?: PaymentsCreateNestedOneWithoutBookingInput
  }

  export type BookingsUncheckedCreateWithoutBooking_detailsInput = {
    id?: string
    user_id: string
    total_price: number
    status?: $Enums.BookingStatus
    created_at?: Date | string
    updated_at?: Date | string
    payment?: PaymentsUncheckedCreateNestedOneWithoutBookingInput
  }

  export type BookingsCreateOrConnectWithoutBooking_detailsInput = {
    where: BookingsWhereUniqueInput
    create: XOR<BookingsCreateWithoutBooking_detailsInput, BookingsUncheckedCreateWithoutBooking_detailsInput>
  }

  export type VenuesUpsertWithoutBooking_detailsInput = {
    update: XOR<VenuesUpdateWithoutBooking_detailsInput, VenuesUncheckedUpdateWithoutBooking_detailsInput>
    create: XOR<VenuesCreateWithoutBooking_detailsInput, VenuesUncheckedCreateWithoutBooking_detailsInput>
    where?: VenuesWhereInput
  }

  export type VenuesUpdateToOneWithWhereWithoutBooking_detailsInput = {
    where?: VenuesWhereInput
    data: XOR<VenuesUpdateWithoutBooking_detailsInput, VenuesUncheckedUpdateWithoutBooking_detailsInput>
  }

  export type VenuesUpdateWithoutBooking_detailsInput = {
    name?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    cp_phone?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    banner?: StringFieldUpdateOperationsInput | string
    rating?: FloatFieldUpdateOperationsInput | number
    reviewer?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    time_slots?: TimeSlotsUpdateManyWithoutVenueNestedInput
  }

  export type VenuesUncheckedUpdateWithoutBooking_detailsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    cp_phone?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    banner?: StringFieldUpdateOperationsInput | string
    rating?: FloatFieldUpdateOperationsInput | number
    reviewer?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    time_slots?: TimeSlotsUncheckedUpdateManyWithoutVenueNestedInput
  }

  export type TimeSlotsUpsertWithoutBooking_detailsInput = {
    update: XOR<TimeSlotsUpdateWithoutBooking_detailsInput, TimeSlotsUncheckedUpdateWithoutBooking_detailsInput>
    create: XOR<TimeSlotsCreateWithoutBooking_detailsInput, TimeSlotsUncheckedCreateWithoutBooking_detailsInput>
    where?: TimeSlotsWhereInput
  }

  export type TimeSlotsUpdateToOneWithWhereWithoutBooking_detailsInput = {
    where?: TimeSlotsWhereInput
    data: XOR<TimeSlotsUpdateWithoutBooking_detailsInput, TimeSlotsUncheckedUpdateWithoutBooking_detailsInput>
  }

  export type TimeSlotsUpdateWithoutBooking_detailsInput = {
    start_time?: DateTimeFieldUpdateOperationsInput | Date | string
    end_time?: DateTimeFieldUpdateOperationsInput | Date | string
    isBooked?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    venue?: VenuesUpdateOneRequiredWithoutTime_slotsNestedInput
  }

  export type TimeSlotsUncheckedUpdateWithoutBooking_detailsInput = {
    id?: IntFieldUpdateOperationsInput | number
    venues_id?: IntFieldUpdateOperationsInput | number
    start_time?: DateTimeFieldUpdateOperationsInput | Date | string
    end_time?: DateTimeFieldUpdateOperationsInput | Date | string
    isBooked?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BookingsUpsertWithoutBooking_detailsInput = {
    update: XOR<BookingsUpdateWithoutBooking_detailsInput, BookingsUncheckedUpdateWithoutBooking_detailsInput>
    create: XOR<BookingsCreateWithoutBooking_detailsInput, BookingsUncheckedCreateWithoutBooking_detailsInput>
    where?: BookingsWhereInput
  }

  export type BookingsUpdateToOneWithWhereWithoutBooking_detailsInput = {
    where?: BookingsWhereInput
    data: XOR<BookingsUpdateWithoutBooking_detailsInput, BookingsUncheckedUpdateWithoutBooking_detailsInput>
  }

  export type BookingsUpdateWithoutBooking_detailsInput = {
    id?: StringFieldUpdateOperationsInput | string
    total_price?: IntFieldUpdateOperationsInput | number
    status?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UsersUpdateOneRequiredWithoutBookingsNestedInput
    payment?: PaymentsUpdateOneWithoutBookingNestedInput
  }

  export type BookingsUncheckedUpdateWithoutBooking_detailsInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    total_price?: IntFieldUpdateOperationsInput | number
    status?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    payment?: PaymentsUncheckedUpdateOneWithoutBookingNestedInput
  }

  export type BookingsCreateWithoutPaymentInput = {
    id?: string
    total_price: number
    status?: $Enums.BookingStatus
    created_at?: Date | string
    updated_at?: Date | string
    user: UsersCreateNestedOneWithoutBookingsInput
    booking_details?: BookingDetailsCreateNestedManyWithoutBookingInput
  }

  export type BookingsUncheckedCreateWithoutPaymentInput = {
    id?: string
    user_id: string
    total_price: number
    status?: $Enums.BookingStatus
    created_at?: Date | string
    updated_at?: Date | string
    booking_details?: BookingDetailsUncheckedCreateNestedManyWithoutBookingInput
  }

  export type BookingsCreateOrConnectWithoutPaymentInput = {
    where: BookingsWhereUniqueInput
    create: XOR<BookingsCreateWithoutPaymentInput, BookingsUncheckedCreateWithoutPaymentInput>
  }

  export type BookingsUpsertWithoutPaymentInput = {
    update: XOR<BookingsUpdateWithoutPaymentInput, BookingsUncheckedUpdateWithoutPaymentInput>
    create: XOR<BookingsCreateWithoutPaymentInput, BookingsUncheckedCreateWithoutPaymentInput>
    where?: BookingsWhereInput
  }

  export type BookingsUpdateToOneWithWhereWithoutPaymentInput = {
    where?: BookingsWhereInput
    data: XOR<BookingsUpdateWithoutPaymentInput, BookingsUncheckedUpdateWithoutPaymentInput>
  }

  export type BookingsUpdateWithoutPaymentInput = {
    id?: StringFieldUpdateOperationsInput | string
    total_price?: IntFieldUpdateOperationsInput | number
    status?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UsersUpdateOneRequiredWithoutBookingsNestedInput
    booking_details?: BookingDetailsUpdateManyWithoutBookingNestedInput
  }

  export type BookingsUncheckedUpdateWithoutPaymentInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    total_price?: IntFieldUpdateOperationsInput | number
    status?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    booking_details?: BookingDetailsUncheckedUpdateManyWithoutBookingNestedInput
  }

  export type BookingsCreateManyUserInput = {
    id?: string
    total_price: number
    status?: $Enums.BookingStatus
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type BookingsUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    total_price?: IntFieldUpdateOperationsInput | number
    status?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    booking_details?: BookingDetailsUpdateManyWithoutBookingNestedInput
    payment?: PaymentsUpdateOneWithoutBookingNestedInput
  }

  export type BookingsUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    total_price?: IntFieldUpdateOperationsInput | number
    status?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    booking_details?: BookingDetailsUncheckedUpdateManyWithoutBookingNestedInput
    payment?: PaymentsUncheckedUpdateOneWithoutBookingNestedInput
  }

  export type BookingsUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    total_price?: IntFieldUpdateOperationsInput | number
    status?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TimeSlotsCreateManyVenueInput = {
    id?: number
    start_time: Date | string
    end_time: Date | string
    isBooked?: boolean
    created_at?: Date | string
  }

  export type BookingDetailsCreateManyVenueInput = {
    id?: string
    booking_id: string
    slot_id: number
    booking_date: Date | string
  }

  export type TimeSlotsUpdateWithoutVenueInput = {
    start_time?: DateTimeFieldUpdateOperationsInput | Date | string
    end_time?: DateTimeFieldUpdateOperationsInput | Date | string
    isBooked?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    booking_details?: BookingDetailsUpdateManyWithoutSlotNestedInput
  }

  export type TimeSlotsUncheckedUpdateWithoutVenueInput = {
    id?: IntFieldUpdateOperationsInput | number
    start_time?: DateTimeFieldUpdateOperationsInput | Date | string
    end_time?: DateTimeFieldUpdateOperationsInput | Date | string
    isBooked?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    booking_details?: BookingDetailsUncheckedUpdateManyWithoutSlotNestedInput
  }

  export type TimeSlotsUncheckedUpdateManyWithoutVenueInput = {
    id?: IntFieldUpdateOperationsInput | number
    start_time?: DateTimeFieldUpdateOperationsInput | Date | string
    end_time?: DateTimeFieldUpdateOperationsInput | Date | string
    isBooked?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BookingDetailsUpdateWithoutVenueInput = {
    id?: StringFieldUpdateOperationsInput | string
    booking_date?: DateTimeFieldUpdateOperationsInput | Date | string
    slot?: TimeSlotsUpdateOneRequiredWithoutBooking_detailsNestedInput
    booking?: BookingsUpdateOneRequiredWithoutBooking_detailsNestedInput
  }

  export type BookingDetailsUncheckedUpdateWithoutVenueInput = {
    id?: StringFieldUpdateOperationsInput | string
    booking_id?: StringFieldUpdateOperationsInput | string
    slot_id?: IntFieldUpdateOperationsInput | number
    booking_date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BookingDetailsUncheckedUpdateManyWithoutVenueInput = {
    id?: StringFieldUpdateOperationsInput | string
    booking_id?: StringFieldUpdateOperationsInput | string
    slot_id?: IntFieldUpdateOperationsInput | number
    booking_date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BookingDetailsCreateManySlotInput = {
    id?: string
    venue_id: number
    booking_id: string
    booking_date: Date | string
  }

  export type BookingDetailsUpdateWithoutSlotInput = {
    id?: StringFieldUpdateOperationsInput | string
    booking_date?: DateTimeFieldUpdateOperationsInput | Date | string
    venue?: VenuesUpdateOneRequiredWithoutBooking_detailsNestedInput
    booking?: BookingsUpdateOneRequiredWithoutBooking_detailsNestedInput
  }

  export type BookingDetailsUncheckedUpdateWithoutSlotInput = {
    id?: StringFieldUpdateOperationsInput | string
    venue_id?: IntFieldUpdateOperationsInput | number
    booking_id?: StringFieldUpdateOperationsInput | string
    booking_date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BookingDetailsUncheckedUpdateManyWithoutSlotInput = {
    id?: StringFieldUpdateOperationsInput | string
    venue_id?: IntFieldUpdateOperationsInput | number
    booking_id?: StringFieldUpdateOperationsInput | string
    booking_date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BookingDetailsCreateManyBookingInput = {
    id?: string
    venue_id: number
    slot_id: number
    booking_date: Date | string
  }

  export type BookingDetailsUpdateWithoutBookingInput = {
    id?: StringFieldUpdateOperationsInput | string
    booking_date?: DateTimeFieldUpdateOperationsInput | Date | string
    venue?: VenuesUpdateOneRequiredWithoutBooking_detailsNestedInput
    slot?: TimeSlotsUpdateOneRequiredWithoutBooking_detailsNestedInput
  }

  export type BookingDetailsUncheckedUpdateWithoutBookingInput = {
    id?: StringFieldUpdateOperationsInput | string
    venue_id?: IntFieldUpdateOperationsInput | number
    slot_id?: IntFieldUpdateOperationsInput | number
    booking_date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BookingDetailsUncheckedUpdateManyWithoutBookingInput = {
    id?: StringFieldUpdateOperationsInput | string
    venue_id?: IntFieldUpdateOperationsInput | number
    slot_id?: IntFieldUpdateOperationsInput | number
    booking_date?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}