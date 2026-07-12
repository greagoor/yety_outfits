
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model StyleWorld
 * 
 */
export type StyleWorld = $Result.DefaultSelection<Prisma.$StyleWorldPayload>
/**
 * Model Substyle
 * 
 */
export type Substyle = $Result.DefaultSelection<Prisma.$SubstylePayload>
/**
 * Model Outfit
 * 
 */
export type Outfit = $Result.DefaultSelection<Prisma.$OutfitPayload>
/**
 * Model OutfitImage
 * 
 */
export type OutfitImage = $Result.DefaultSelection<Prisma.$OutfitImagePayload>
/**
 * Model AppTheme
 * 
 */
export type AppTheme = $Result.DefaultSelection<Prisma.$AppThemePayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
 * // Fetch zero or more StyleWorlds
 * const styleWorlds = await prisma.styleWorld.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
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
   * const prisma = new PrismaClient({
   *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
   * })
   * // Fetch zero or more StyleWorlds
   * const styleWorlds = await prisma.styleWorld.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://www.prisma.io/docs/orm/prisma-client/queries/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.styleWorld`: Exposes CRUD operations for the **StyleWorld** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more StyleWorlds
    * const styleWorlds = await prisma.styleWorld.findMany()
    * ```
    */
  get styleWorld(): Prisma.StyleWorldDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.substyle`: Exposes CRUD operations for the **Substyle** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Substyles
    * const substyles = await prisma.substyle.findMany()
    * ```
    */
  get substyle(): Prisma.SubstyleDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.outfit`: Exposes CRUD operations for the **Outfit** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Outfits
    * const outfits = await prisma.outfit.findMany()
    * ```
    */
  get outfit(): Prisma.OutfitDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.outfitImage`: Exposes CRUD operations for the **OutfitImage** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more OutfitImages
    * const outfitImages = await prisma.outfitImage.findMany()
    * ```
    */
  get outfitImage(): Prisma.OutfitImageDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.appTheme`: Exposes CRUD operations for the **AppTheme** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AppThemes
    * const appThemes = await prisma.appTheme.findMany()
    * ```
    */
  get appTheme(): Prisma.AppThemeDelegate<ExtArgs, ClientOptions>;
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
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.8.0
   * Query Engine version: 3c6e192761c0362d496ed980de936e2f3cebcd3a
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
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
    StyleWorld: 'StyleWorld',
    Substyle: 'Substyle',
    Outfit: 'Outfit',
    OutfitImage: 'OutfitImage',
    AppTheme: 'AppTheme'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "styleWorld" | "substyle" | "outfit" | "outfitImage" | "appTheme"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      StyleWorld: {
        payload: Prisma.$StyleWorldPayload<ExtArgs>
        fields: Prisma.StyleWorldFieldRefs
        operations: {
          findUnique: {
            args: Prisma.StyleWorldFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StyleWorldPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.StyleWorldFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StyleWorldPayload>
          }
          findFirst: {
            args: Prisma.StyleWorldFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StyleWorldPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.StyleWorldFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StyleWorldPayload>
          }
          findMany: {
            args: Prisma.StyleWorldFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StyleWorldPayload>[]
          }
          create: {
            args: Prisma.StyleWorldCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StyleWorldPayload>
          }
          createMany: {
            args: Prisma.StyleWorldCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.StyleWorldCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StyleWorldPayload>[]
          }
          delete: {
            args: Prisma.StyleWorldDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StyleWorldPayload>
          }
          update: {
            args: Prisma.StyleWorldUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StyleWorldPayload>
          }
          deleteMany: {
            args: Prisma.StyleWorldDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.StyleWorldUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.StyleWorldUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StyleWorldPayload>[]
          }
          upsert: {
            args: Prisma.StyleWorldUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StyleWorldPayload>
          }
          aggregate: {
            args: Prisma.StyleWorldAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateStyleWorld>
          }
          groupBy: {
            args: Prisma.StyleWorldGroupByArgs<ExtArgs>
            result: $Utils.Optional<StyleWorldGroupByOutputType>[]
          }
          count: {
            args: Prisma.StyleWorldCountArgs<ExtArgs>
            result: $Utils.Optional<StyleWorldCountAggregateOutputType> | number
          }
        }
      }
      Substyle: {
        payload: Prisma.$SubstylePayload<ExtArgs>
        fields: Prisma.SubstyleFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SubstyleFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubstylePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SubstyleFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubstylePayload>
          }
          findFirst: {
            args: Prisma.SubstyleFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubstylePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SubstyleFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubstylePayload>
          }
          findMany: {
            args: Prisma.SubstyleFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubstylePayload>[]
          }
          create: {
            args: Prisma.SubstyleCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubstylePayload>
          }
          createMany: {
            args: Prisma.SubstyleCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SubstyleCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubstylePayload>[]
          }
          delete: {
            args: Prisma.SubstyleDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubstylePayload>
          }
          update: {
            args: Prisma.SubstyleUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubstylePayload>
          }
          deleteMany: {
            args: Prisma.SubstyleDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SubstyleUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SubstyleUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubstylePayload>[]
          }
          upsert: {
            args: Prisma.SubstyleUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubstylePayload>
          }
          aggregate: {
            args: Prisma.SubstyleAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSubstyle>
          }
          groupBy: {
            args: Prisma.SubstyleGroupByArgs<ExtArgs>
            result: $Utils.Optional<SubstyleGroupByOutputType>[]
          }
          count: {
            args: Prisma.SubstyleCountArgs<ExtArgs>
            result: $Utils.Optional<SubstyleCountAggregateOutputType> | number
          }
        }
      }
      Outfit: {
        payload: Prisma.$OutfitPayload<ExtArgs>
        fields: Prisma.OutfitFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OutfitFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OutfitPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OutfitFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OutfitPayload>
          }
          findFirst: {
            args: Prisma.OutfitFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OutfitPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OutfitFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OutfitPayload>
          }
          findMany: {
            args: Prisma.OutfitFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OutfitPayload>[]
          }
          create: {
            args: Prisma.OutfitCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OutfitPayload>
          }
          createMany: {
            args: Prisma.OutfitCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.OutfitCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OutfitPayload>[]
          }
          delete: {
            args: Prisma.OutfitDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OutfitPayload>
          }
          update: {
            args: Prisma.OutfitUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OutfitPayload>
          }
          deleteMany: {
            args: Prisma.OutfitDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OutfitUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.OutfitUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OutfitPayload>[]
          }
          upsert: {
            args: Prisma.OutfitUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OutfitPayload>
          }
          aggregate: {
            args: Prisma.OutfitAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOutfit>
          }
          groupBy: {
            args: Prisma.OutfitGroupByArgs<ExtArgs>
            result: $Utils.Optional<OutfitGroupByOutputType>[]
          }
          count: {
            args: Prisma.OutfitCountArgs<ExtArgs>
            result: $Utils.Optional<OutfitCountAggregateOutputType> | number
          }
        }
      }
      OutfitImage: {
        payload: Prisma.$OutfitImagePayload<ExtArgs>
        fields: Prisma.OutfitImageFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OutfitImageFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OutfitImagePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OutfitImageFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OutfitImagePayload>
          }
          findFirst: {
            args: Prisma.OutfitImageFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OutfitImagePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OutfitImageFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OutfitImagePayload>
          }
          findMany: {
            args: Prisma.OutfitImageFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OutfitImagePayload>[]
          }
          create: {
            args: Prisma.OutfitImageCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OutfitImagePayload>
          }
          createMany: {
            args: Prisma.OutfitImageCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.OutfitImageCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OutfitImagePayload>[]
          }
          delete: {
            args: Prisma.OutfitImageDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OutfitImagePayload>
          }
          update: {
            args: Prisma.OutfitImageUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OutfitImagePayload>
          }
          deleteMany: {
            args: Prisma.OutfitImageDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OutfitImageUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.OutfitImageUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OutfitImagePayload>[]
          }
          upsert: {
            args: Prisma.OutfitImageUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OutfitImagePayload>
          }
          aggregate: {
            args: Prisma.OutfitImageAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOutfitImage>
          }
          groupBy: {
            args: Prisma.OutfitImageGroupByArgs<ExtArgs>
            result: $Utils.Optional<OutfitImageGroupByOutputType>[]
          }
          count: {
            args: Prisma.OutfitImageCountArgs<ExtArgs>
            result: $Utils.Optional<OutfitImageCountAggregateOutputType> | number
          }
        }
      }
      AppTheme: {
        payload: Prisma.$AppThemePayload<ExtArgs>
        fields: Prisma.AppThemeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AppThemeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppThemePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AppThemeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppThemePayload>
          }
          findFirst: {
            args: Prisma.AppThemeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppThemePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AppThemeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppThemePayload>
          }
          findMany: {
            args: Prisma.AppThemeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppThemePayload>[]
          }
          create: {
            args: Prisma.AppThemeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppThemePayload>
          }
          createMany: {
            args: Prisma.AppThemeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AppThemeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppThemePayload>[]
          }
          delete: {
            args: Prisma.AppThemeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppThemePayload>
          }
          update: {
            args: Prisma.AppThemeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppThemePayload>
          }
          deleteMany: {
            args: Prisma.AppThemeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AppThemeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AppThemeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppThemePayload>[]
          }
          upsert: {
            args: Prisma.AppThemeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppThemePayload>
          }
          aggregate: {
            args: Prisma.AppThemeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAppTheme>
          }
          groupBy: {
            args: Prisma.AppThemeGroupByArgs<ExtArgs>
            result: $Utils.Optional<AppThemeGroupByOutputType>[]
          }
          count: {
            args: Prisma.AppThemeCountArgs<ExtArgs>
            result: $Utils.Optional<AppThemeCountAggregateOutputType> | number
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
     * Read more in our [docs](https://pris.ly/d/logging).
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
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
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
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    styleWorld?: StyleWorldOmit
    substyle?: SubstyleOmit
    outfit?: OutfitOmit
    outfitImage?: OutfitImageOmit
    appTheme?: AppThemeOmit
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
   * Count Type StyleWorldCountOutputType
   */

  export type StyleWorldCountOutputType = {
    substyles: number
  }

  export type StyleWorldCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    substyles?: boolean | StyleWorldCountOutputTypeCountSubstylesArgs
  }

  // Custom InputTypes
  /**
   * StyleWorldCountOutputType without action
   */
  export type StyleWorldCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StyleWorldCountOutputType
     */
    select?: StyleWorldCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * StyleWorldCountOutputType without action
   */
  export type StyleWorldCountOutputTypeCountSubstylesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SubstyleWhereInput
  }


  /**
   * Count Type SubstyleCountOutputType
   */

  export type SubstyleCountOutputType = {
    outfits: number
  }

  export type SubstyleCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    outfits?: boolean | SubstyleCountOutputTypeCountOutfitsArgs
  }

  // Custom InputTypes
  /**
   * SubstyleCountOutputType without action
   */
  export type SubstyleCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubstyleCountOutputType
     */
    select?: SubstyleCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SubstyleCountOutputType without action
   */
  export type SubstyleCountOutputTypeCountOutfitsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OutfitWhereInput
  }


  /**
   * Count Type OutfitCountOutputType
   */

  export type OutfitCountOutputType = {
    images: number
  }

  export type OutfitCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    images?: boolean | OutfitCountOutputTypeCountImagesArgs
  }

  // Custom InputTypes
  /**
   * OutfitCountOutputType without action
   */
  export type OutfitCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OutfitCountOutputType
     */
    select?: OutfitCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * OutfitCountOutputType without action
   */
  export type OutfitCountOutputTypeCountImagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OutfitImageWhereInput
  }


  /**
   * Models
   */

  /**
   * Model StyleWorld
   */

  export type AggregateStyleWorld = {
    _count: StyleWorldCountAggregateOutputType | null
    _min: StyleWorldMinAggregateOutputType | null
    _max: StyleWorldMaxAggregateOutputType | null
  }

  export type StyleWorldMinAggregateOutputType = {
    id: string | null
    name: string | null
    slug: string | null
    tagline: string | null
    core_energy: string | null
    description: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type StyleWorldMaxAggregateOutputType = {
    id: string | null
    name: string | null
    slug: string | null
    tagline: string | null
    core_energy: string | null
    description: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type StyleWorldCountAggregateOutputType = {
    id: number
    name: number
    slug: number
    tagline: number
    core_energy: number
    description: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type StyleWorldMinAggregateInputType = {
    id?: true
    name?: true
    slug?: true
    tagline?: true
    core_energy?: true
    description?: true
    created_at?: true
    updated_at?: true
  }

  export type StyleWorldMaxAggregateInputType = {
    id?: true
    name?: true
    slug?: true
    tagline?: true
    core_energy?: true
    description?: true
    created_at?: true
    updated_at?: true
  }

  export type StyleWorldCountAggregateInputType = {
    id?: true
    name?: true
    slug?: true
    tagline?: true
    core_energy?: true
    description?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type StyleWorldAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which StyleWorld to aggregate.
     */
    where?: StyleWorldWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StyleWorlds to fetch.
     */
    orderBy?: StyleWorldOrderByWithRelationInput | StyleWorldOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: StyleWorldWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StyleWorlds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StyleWorlds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned StyleWorlds
    **/
    _count?: true | StyleWorldCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StyleWorldMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StyleWorldMaxAggregateInputType
  }

  export type GetStyleWorldAggregateType<T extends StyleWorldAggregateArgs> = {
        [P in keyof T & keyof AggregateStyleWorld]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStyleWorld[P]>
      : GetScalarType<T[P], AggregateStyleWorld[P]>
  }




  export type StyleWorldGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StyleWorldWhereInput
    orderBy?: StyleWorldOrderByWithAggregationInput | StyleWorldOrderByWithAggregationInput[]
    by: StyleWorldScalarFieldEnum[] | StyleWorldScalarFieldEnum
    having?: StyleWorldScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StyleWorldCountAggregateInputType | true
    _min?: StyleWorldMinAggregateInputType
    _max?: StyleWorldMaxAggregateInputType
  }

  export type StyleWorldGroupByOutputType = {
    id: string
    name: string
    slug: string
    tagline: string | null
    core_energy: string | null
    description: string | null
    created_at: Date
    updated_at: Date
    _count: StyleWorldCountAggregateOutputType | null
    _min: StyleWorldMinAggregateOutputType | null
    _max: StyleWorldMaxAggregateOutputType | null
  }

  type GetStyleWorldGroupByPayload<T extends StyleWorldGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<StyleWorldGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StyleWorldGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StyleWorldGroupByOutputType[P]>
            : GetScalarType<T[P], StyleWorldGroupByOutputType[P]>
        }
      >
    >


  export type StyleWorldSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    slug?: boolean
    tagline?: boolean
    core_energy?: boolean
    description?: boolean
    created_at?: boolean
    updated_at?: boolean
    substyles?: boolean | StyleWorld$substylesArgs<ExtArgs>
    _count?: boolean | StyleWorldCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["styleWorld"]>

  export type StyleWorldSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    slug?: boolean
    tagline?: boolean
    core_energy?: boolean
    description?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["styleWorld"]>

  export type StyleWorldSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    slug?: boolean
    tagline?: boolean
    core_energy?: boolean
    description?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["styleWorld"]>

  export type StyleWorldSelectScalar = {
    id?: boolean
    name?: boolean
    slug?: boolean
    tagline?: boolean
    core_energy?: boolean
    description?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type StyleWorldOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "slug" | "tagline" | "core_energy" | "description" | "created_at" | "updated_at", ExtArgs["result"]["styleWorld"]>
  export type StyleWorldInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    substyles?: boolean | StyleWorld$substylesArgs<ExtArgs>
    _count?: boolean | StyleWorldCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type StyleWorldIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type StyleWorldIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $StyleWorldPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "StyleWorld"
    objects: {
      substyles: Prisma.$SubstylePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      slug: string
      tagline: string | null
      core_energy: string | null
      description: string | null
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["styleWorld"]>
    composites: {}
  }

  type StyleWorldGetPayload<S extends boolean | null | undefined | StyleWorldDefaultArgs> = $Result.GetResult<Prisma.$StyleWorldPayload, S>

  type StyleWorldCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<StyleWorldFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: StyleWorldCountAggregateInputType | true
    }

  export interface StyleWorldDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['StyleWorld'], meta: { name: 'StyleWorld' } }
    /**
     * Find zero or one StyleWorld that matches the filter.
     * @param {StyleWorldFindUniqueArgs} args - Arguments to find a StyleWorld
     * @example
     * // Get one StyleWorld
     * const styleWorld = await prisma.styleWorld.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends StyleWorldFindUniqueArgs>(args: SelectSubset<T, StyleWorldFindUniqueArgs<ExtArgs>>): Prisma__StyleWorldClient<$Result.GetResult<Prisma.$StyleWorldPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one StyleWorld that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {StyleWorldFindUniqueOrThrowArgs} args - Arguments to find a StyleWorld
     * @example
     * // Get one StyleWorld
     * const styleWorld = await prisma.styleWorld.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends StyleWorldFindUniqueOrThrowArgs>(args: SelectSubset<T, StyleWorldFindUniqueOrThrowArgs<ExtArgs>>): Prisma__StyleWorldClient<$Result.GetResult<Prisma.$StyleWorldPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first StyleWorld that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StyleWorldFindFirstArgs} args - Arguments to find a StyleWorld
     * @example
     * // Get one StyleWorld
     * const styleWorld = await prisma.styleWorld.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends StyleWorldFindFirstArgs>(args?: SelectSubset<T, StyleWorldFindFirstArgs<ExtArgs>>): Prisma__StyleWorldClient<$Result.GetResult<Prisma.$StyleWorldPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first StyleWorld that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StyleWorldFindFirstOrThrowArgs} args - Arguments to find a StyleWorld
     * @example
     * // Get one StyleWorld
     * const styleWorld = await prisma.styleWorld.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends StyleWorldFindFirstOrThrowArgs>(args?: SelectSubset<T, StyleWorldFindFirstOrThrowArgs<ExtArgs>>): Prisma__StyleWorldClient<$Result.GetResult<Prisma.$StyleWorldPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more StyleWorlds that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StyleWorldFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all StyleWorlds
     * const styleWorlds = await prisma.styleWorld.findMany()
     * 
     * // Get first 10 StyleWorlds
     * const styleWorlds = await prisma.styleWorld.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const styleWorldWithIdOnly = await prisma.styleWorld.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends StyleWorldFindManyArgs>(args?: SelectSubset<T, StyleWorldFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StyleWorldPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a StyleWorld.
     * @param {StyleWorldCreateArgs} args - Arguments to create a StyleWorld.
     * @example
     * // Create one StyleWorld
     * const StyleWorld = await prisma.styleWorld.create({
     *   data: {
     *     // ... data to create a StyleWorld
     *   }
     * })
     * 
     */
    create<T extends StyleWorldCreateArgs>(args: SelectSubset<T, StyleWorldCreateArgs<ExtArgs>>): Prisma__StyleWorldClient<$Result.GetResult<Prisma.$StyleWorldPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many StyleWorlds.
     * @param {StyleWorldCreateManyArgs} args - Arguments to create many StyleWorlds.
     * @example
     * // Create many StyleWorlds
     * const styleWorld = await prisma.styleWorld.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends StyleWorldCreateManyArgs>(args?: SelectSubset<T, StyleWorldCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many StyleWorlds and returns the data saved in the database.
     * @param {StyleWorldCreateManyAndReturnArgs} args - Arguments to create many StyleWorlds.
     * @example
     * // Create many StyleWorlds
     * const styleWorld = await prisma.styleWorld.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many StyleWorlds and only return the `id`
     * const styleWorldWithIdOnly = await prisma.styleWorld.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends StyleWorldCreateManyAndReturnArgs>(args?: SelectSubset<T, StyleWorldCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StyleWorldPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a StyleWorld.
     * @param {StyleWorldDeleteArgs} args - Arguments to delete one StyleWorld.
     * @example
     * // Delete one StyleWorld
     * const StyleWorld = await prisma.styleWorld.delete({
     *   where: {
     *     // ... filter to delete one StyleWorld
     *   }
     * })
     * 
     */
    delete<T extends StyleWorldDeleteArgs>(args: SelectSubset<T, StyleWorldDeleteArgs<ExtArgs>>): Prisma__StyleWorldClient<$Result.GetResult<Prisma.$StyleWorldPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one StyleWorld.
     * @param {StyleWorldUpdateArgs} args - Arguments to update one StyleWorld.
     * @example
     * // Update one StyleWorld
     * const styleWorld = await prisma.styleWorld.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends StyleWorldUpdateArgs>(args: SelectSubset<T, StyleWorldUpdateArgs<ExtArgs>>): Prisma__StyleWorldClient<$Result.GetResult<Prisma.$StyleWorldPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more StyleWorlds.
     * @param {StyleWorldDeleteManyArgs} args - Arguments to filter StyleWorlds to delete.
     * @example
     * // Delete a few StyleWorlds
     * const { count } = await prisma.styleWorld.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends StyleWorldDeleteManyArgs>(args?: SelectSubset<T, StyleWorldDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more StyleWorlds.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StyleWorldUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many StyleWorlds
     * const styleWorld = await prisma.styleWorld.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends StyleWorldUpdateManyArgs>(args: SelectSubset<T, StyleWorldUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more StyleWorlds and returns the data updated in the database.
     * @param {StyleWorldUpdateManyAndReturnArgs} args - Arguments to update many StyleWorlds.
     * @example
     * // Update many StyleWorlds
     * const styleWorld = await prisma.styleWorld.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more StyleWorlds and only return the `id`
     * const styleWorldWithIdOnly = await prisma.styleWorld.updateManyAndReturn({
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
    updateManyAndReturn<T extends StyleWorldUpdateManyAndReturnArgs>(args: SelectSubset<T, StyleWorldUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StyleWorldPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one StyleWorld.
     * @param {StyleWorldUpsertArgs} args - Arguments to update or create a StyleWorld.
     * @example
     * // Update or create a StyleWorld
     * const styleWorld = await prisma.styleWorld.upsert({
     *   create: {
     *     // ... data to create a StyleWorld
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the StyleWorld we want to update
     *   }
     * })
     */
    upsert<T extends StyleWorldUpsertArgs>(args: SelectSubset<T, StyleWorldUpsertArgs<ExtArgs>>): Prisma__StyleWorldClient<$Result.GetResult<Prisma.$StyleWorldPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of StyleWorlds.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StyleWorldCountArgs} args - Arguments to filter StyleWorlds to count.
     * @example
     * // Count the number of StyleWorlds
     * const count = await prisma.styleWorld.count({
     *   where: {
     *     // ... the filter for the StyleWorlds we want to count
     *   }
     * })
    **/
    count<T extends StyleWorldCountArgs>(
      args?: Subset<T, StyleWorldCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StyleWorldCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a StyleWorld.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StyleWorldAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends StyleWorldAggregateArgs>(args: Subset<T, StyleWorldAggregateArgs>): Prisma.PrismaPromise<GetStyleWorldAggregateType<T>>

    /**
     * Group by StyleWorld.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StyleWorldGroupByArgs} args - Group by arguments.
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
      T extends StyleWorldGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: StyleWorldGroupByArgs['orderBy'] }
        : { orderBy?: StyleWorldGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, StyleWorldGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStyleWorldGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the StyleWorld model
   */
  readonly fields: StyleWorldFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for StyleWorld.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__StyleWorldClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    substyles<T extends StyleWorld$substylesArgs<ExtArgs> = {}>(args?: Subset<T, StyleWorld$substylesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubstylePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the StyleWorld model
   */
  interface StyleWorldFieldRefs {
    readonly id: FieldRef<"StyleWorld", 'String'>
    readonly name: FieldRef<"StyleWorld", 'String'>
    readonly slug: FieldRef<"StyleWorld", 'String'>
    readonly tagline: FieldRef<"StyleWorld", 'String'>
    readonly core_energy: FieldRef<"StyleWorld", 'String'>
    readonly description: FieldRef<"StyleWorld", 'String'>
    readonly created_at: FieldRef<"StyleWorld", 'DateTime'>
    readonly updated_at: FieldRef<"StyleWorld", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * StyleWorld findUnique
   */
  export type StyleWorldFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StyleWorld
     */
    select?: StyleWorldSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StyleWorld
     */
    omit?: StyleWorldOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StyleWorldInclude<ExtArgs> | null
    /**
     * Filter, which StyleWorld to fetch.
     */
    where: StyleWorldWhereUniqueInput
  }

  /**
   * StyleWorld findUniqueOrThrow
   */
  export type StyleWorldFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StyleWorld
     */
    select?: StyleWorldSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StyleWorld
     */
    omit?: StyleWorldOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StyleWorldInclude<ExtArgs> | null
    /**
     * Filter, which StyleWorld to fetch.
     */
    where: StyleWorldWhereUniqueInput
  }

  /**
   * StyleWorld findFirst
   */
  export type StyleWorldFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StyleWorld
     */
    select?: StyleWorldSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StyleWorld
     */
    omit?: StyleWorldOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StyleWorldInclude<ExtArgs> | null
    /**
     * Filter, which StyleWorld to fetch.
     */
    where?: StyleWorldWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StyleWorlds to fetch.
     */
    orderBy?: StyleWorldOrderByWithRelationInput | StyleWorldOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for StyleWorlds.
     */
    cursor?: StyleWorldWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StyleWorlds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StyleWorlds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of StyleWorlds.
     */
    distinct?: StyleWorldScalarFieldEnum | StyleWorldScalarFieldEnum[]
  }

  /**
   * StyleWorld findFirstOrThrow
   */
  export type StyleWorldFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StyleWorld
     */
    select?: StyleWorldSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StyleWorld
     */
    omit?: StyleWorldOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StyleWorldInclude<ExtArgs> | null
    /**
     * Filter, which StyleWorld to fetch.
     */
    where?: StyleWorldWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StyleWorlds to fetch.
     */
    orderBy?: StyleWorldOrderByWithRelationInput | StyleWorldOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for StyleWorlds.
     */
    cursor?: StyleWorldWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StyleWorlds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StyleWorlds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of StyleWorlds.
     */
    distinct?: StyleWorldScalarFieldEnum | StyleWorldScalarFieldEnum[]
  }

  /**
   * StyleWorld findMany
   */
  export type StyleWorldFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StyleWorld
     */
    select?: StyleWorldSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StyleWorld
     */
    omit?: StyleWorldOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StyleWorldInclude<ExtArgs> | null
    /**
     * Filter, which StyleWorlds to fetch.
     */
    where?: StyleWorldWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StyleWorlds to fetch.
     */
    orderBy?: StyleWorldOrderByWithRelationInput | StyleWorldOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing StyleWorlds.
     */
    cursor?: StyleWorldWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StyleWorlds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StyleWorlds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of StyleWorlds.
     */
    distinct?: StyleWorldScalarFieldEnum | StyleWorldScalarFieldEnum[]
  }

  /**
   * StyleWorld create
   */
  export type StyleWorldCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StyleWorld
     */
    select?: StyleWorldSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StyleWorld
     */
    omit?: StyleWorldOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StyleWorldInclude<ExtArgs> | null
    /**
     * The data needed to create a StyleWorld.
     */
    data: XOR<StyleWorldCreateInput, StyleWorldUncheckedCreateInput>
  }

  /**
   * StyleWorld createMany
   */
  export type StyleWorldCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many StyleWorlds.
     */
    data: StyleWorldCreateManyInput | StyleWorldCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * StyleWorld createManyAndReturn
   */
  export type StyleWorldCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StyleWorld
     */
    select?: StyleWorldSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the StyleWorld
     */
    omit?: StyleWorldOmit<ExtArgs> | null
    /**
     * The data used to create many StyleWorlds.
     */
    data: StyleWorldCreateManyInput | StyleWorldCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * StyleWorld update
   */
  export type StyleWorldUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StyleWorld
     */
    select?: StyleWorldSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StyleWorld
     */
    omit?: StyleWorldOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StyleWorldInclude<ExtArgs> | null
    /**
     * The data needed to update a StyleWorld.
     */
    data: XOR<StyleWorldUpdateInput, StyleWorldUncheckedUpdateInput>
    /**
     * Choose, which StyleWorld to update.
     */
    where: StyleWorldWhereUniqueInput
  }

  /**
   * StyleWorld updateMany
   */
  export type StyleWorldUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update StyleWorlds.
     */
    data: XOR<StyleWorldUpdateManyMutationInput, StyleWorldUncheckedUpdateManyInput>
    /**
     * Filter which StyleWorlds to update
     */
    where?: StyleWorldWhereInput
    /**
     * Limit how many StyleWorlds to update.
     */
    limit?: number
  }

  /**
   * StyleWorld updateManyAndReturn
   */
  export type StyleWorldUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StyleWorld
     */
    select?: StyleWorldSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the StyleWorld
     */
    omit?: StyleWorldOmit<ExtArgs> | null
    /**
     * The data used to update StyleWorlds.
     */
    data: XOR<StyleWorldUpdateManyMutationInput, StyleWorldUncheckedUpdateManyInput>
    /**
     * Filter which StyleWorlds to update
     */
    where?: StyleWorldWhereInput
    /**
     * Limit how many StyleWorlds to update.
     */
    limit?: number
  }

  /**
   * StyleWorld upsert
   */
  export type StyleWorldUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StyleWorld
     */
    select?: StyleWorldSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StyleWorld
     */
    omit?: StyleWorldOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StyleWorldInclude<ExtArgs> | null
    /**
     * The filter to search for the StyleWorld to update in case it exists.
     */
    where: StyleWorldWhereUniqueInput
    /**
     * In case the StyleWorld found by the `where` argument doesn't exist, create a new StyleWorld with this data.
     */
    create: XOR<StyleWorldCreateInput, StyleWorldUncheckedCreateInput>
    /**
     * In case the StyleWorld was found with the provided `where` argument, update it with this data.
     */
    update: XOR<StyleWorldUpdateInput, StyleWorldUncheckedUpdateInput>
  }

  /**
   * StyleWorld delete
   */
  export type StyleWorldDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StyleWorld
     */
    select?: StyleWorldSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StyleWorld
     */
    omit?: StyleWorldOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StyleWorldInclude<ExtArgs> | null
    /**
     * Filter which StyleWorld to delete.
     */
    where: StyleWorldWhereUniqueInput
  }

  /**
   * StyleWorld deleteMany
   */
  export type StyleWorldDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which StyleWorlds to delete
     */
    where?: StyleWorldWhereInput
    /**
     * Limit how many StyleWorlds to delete.
     */
    limit?: number
  }

  /**
   * StyleWorld.substyles
   */
  export type StyleWorld$substylesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Substyle
     */
    select?: SubstyleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Substyle
     */
    omit?: SubstyleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubstyleInclude<ExtArgs> | null
    where?: SubstyleWhereInput
    orderBy?: SubstyleOrderByWithRelationInput | SubstyleOrderByWithRelationInput[]
    cursor?: SubstyleWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SubstyleScalarFieldEnum | SubstyleScalarFieldEnum[]
  }

  /**
   * StyleWorld without action
   */
  export type StyleWorldDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StyleWorld
     */
    select?: StyleWorldSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StyleWorld
     */
    omit?: StyleWorldOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StyleWorldInclude<ExtArgs> | null
  }


  /**
   * Model Substyle
   */

  export type AggregateSubstyle = {
    _count: SubstyleCountAggregateOutputType | null
    _min: SubstyleMinAggregateOutputType | null
    _max: SubstyleMaxAggregateOutputType | null
  }

  export type SubstyleMinAggregateOutputType = {
    id: string | null
    style_world_id: string | null
    name: string | null
    slug: string | null
    tagline: string | null
    description: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type SubstyleMaxAggregateOutputType = {
    id: string | null
    style_world_id: string | null
    name: string | null
    slug: string | null
    tagline: string | null
    description: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type SubstyleCountAggregateOutputType = {
    id: number
    style_world_id: number
    name: number
    slug: number
    tagline: number
    description: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type SubstyleMinAggregateInputType = {
    id?: true
    style_world_id?: true
    name?: true
    slug?: true
    tagline?: true
    description?: true
    created_at?: true
    updated_at?: true
  }

  export type SubstyleMaxAggregateInputType = {
    id?: true
    style_world_id?: true
    name?: true
    slug?: true
    tagline?: true
    description?: true
    created_at?: true
    updated_at?: true
  }

  export type SubstyleCountAggregateInputType = {
    id?: true
    style_world_id?: true
    name?: true
    slug?: true
    tagline?: true
    description?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type SubstyleAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Substyle to aggregate.
     */
    where?: SubstyleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Substyles to fetch.
     */
    orderBy?: SubstyleOrderByWithRelationInput | SubstyleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SubstyleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Substyles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Substyles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Substyles
    **/
    _count?: true | SubstyleCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SubstyleMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SubstyleMaxAggregateInputType
  }

  export type GetSubstyleAggregateType<T extends SubstyleAggregateArgs> = {
        [P in keyof T & keyof AggregateSubstyle]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSubstyle[P]>
      : GetScalarType<T[P], AggregateSubstyle[P]>
  }




  export type SubstyleGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SubstyleWhereInput
    orderBy?: SubstyleOrderByWithAggregationInput | SubstyleOrderByWithAggregationInput[]
    by: SubstyleScalarFieldEnum[] | SubstyleScalarFieldEnum
    having?: SubstyleScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SubstyleCountAggregateInputType | true
    _min?: SubstyleMinAggregateInputType
    _max?: SubstyleMaxAggregateInputType
  }

  export type SubstyleGroupByOutputType = {
    id: string
    style_world_id: string
    name: string
    slug: string
    tagline: string | null
    description: string | null
    created_at: Date
    updated_at: Date
    _count: SubstyleCountAggregateOutputType | null
    _min: SubstyleMinAggregateOutputType | null
    _max: SubstyleMaxAggregateOutputType | null
  }

  type GetSubstyleGroupByPayload<T extends SubstyleGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SubstyleGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SubstyleGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SubstyleGroupByOutputType[P]>
            : GetScalarType<T[P], SubstyleGroupByOutputType[P]>
        }
      >
    >


  export type SubstyleSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    style_world_id?: boolean
    name?: boolean
    slug?: boolean
    tagline?: boolean
    description?: boolean
    created_at?: boolean
    updated_at?: boolean
    style_world?: boolean | StyleWorldDefaultArgs<ExtArgs>
    outfits?: boolean | Substyle$outfitsArgs<ExtArgs>
    _count?: boolean | SubstyleCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["substyle"]>

  export type SubstyleSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    style_world_id?: boolean
    name?: boolean
    slug?: boolean
    tagline?: boolean
    description?: boolean
    created_at?: boolean
    updated_at?: boolean
    style_world?: boolean | StyleWorldDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["substyle"]>

  export type SubstyleSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    style_world_id?: boolean
    name?: boolean
    slug?: boolean
    tagline?: boolean
    description?: boolean
    created_at?: boolean
    updated_at?: boolean
    style_world?: boolean | StyleWorldDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["substyle"]>

  export type SubstyleSelectScalar = {
    id?: boolean
    style_world_id?: boolean
    name?: boolean
    slug?: boolean
    tagline?: boolean
    description?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type SubstyleOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "style_world_id" | "name" | "slug" | "tagline" | "description" | "created_at" | "updated_at", ExtArgs["result"]["substyle"]>
  export type SubstyleInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    style_world?: boolean | StyleWorldDefaultArgs<ExtArgs>
    outfits?: boolean | Substyle$outfitsArgs<ExtArgs>
    _count?: boolean | SubstyleCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type SubstyleIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    style_world?: boolean | StyleWorldDefaultArgs<ExtArgs>
  }
  export type SubstyleIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    style_world?: boolean | StyleWorldDefaultArgs<ExtArgs>
  }

  export type $SubstylePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Substyle"
    objects: {
      style_world: Prisma.$StyleWorldPayload<ExtArgs>
      outfits: Prisma.$OutfitPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      style_world_id: string
      name: string
      slug: string
      tagline: string | null
      description: string | null
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["substyle"]>
    composites: {}
  }

  type SubstyleGetPayload<S extends boolean | null | undefined | SubstyleDefaultArgs> = $Result.GetResult<Prisma.$SubstylePayload, S>

  type SubstyleCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SubstyleFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SubstyleCountAggregateInputType | true
    }

  export interface SubstyleDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Substyle'], meta: { name: 'Substyle' } }
    /**
     * Find zero or one Substyle that matches the filter.
     * @param {SubstyleFindUniqueArgs} args - Arguments to find a Substyle
     * @example
     * // Get one Substyle
     * const substyle = await prisma.substyle.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SubstyleFindUniqueArgs>(args: SelectSubset<T, SubstyleFindUniqueArgs<ExtArgs>>): Prisma__SubstyleClient<$Result.GetResult<Prisma.$SubstylePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Substyle that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SubstyleFindUniqueOrThrowArgs} args - Arguments to find a Substyle
     * @example
     * // Get one Substyle
     * const substyle = await prisma.substyle.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SubstyleFindUniqueOrThrowArgs>(args: SelectSubset<T, SubstyleFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SubstyleClient<$Result.GetResult<Prisma.$SubstylePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Substyle that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubstyleFindFirstArgs} args - Arguments to find a Substyle
     * @example
     * // Get one Substyle
     * const substyle = await prisma.substyle.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SubstyleFindFirstArgs>(args?: SelectSubset<T, SubstyleFindFirstArgs<ExtArgs>>): Prisma__SubstyleClient<$Result.GetResult<Prisma.$SubstylePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Substyle that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubstyleFindFirstOrThrowArgs} args - Arguments to find a Substyle
     * @example
     * // Get one Substyle
     * const substyle = await prisma.substyle.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SubstyleFindFirstOrThrowArgs>(args?: SelectSubset<T, SubstyleFindFirstOrThrowArgs<ExtArgs>>): Prisma__SubstyleClient<$Result.GetResult<Prisma.$SubstylePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Substyles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubstyleFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Substyles
     * const substyles = await prisma.substyle.findMany()
     * 
     * // Get first 10 Substyles
     * const substyles = await prisma.substyle.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const substyleWithIdOnly = await prisma.substyle.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SubstyleFindManyArgs>(args?: SelectSubset<T, SubstyleFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubstylePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Substyle.
     * @param {SubstyleCreateArgs} args - Arguments to create a Substyle.
     * @example
     * // Create one Substyle
     * const Substyle = await prisma.substyle.create({
     *   data: {
     *     // ... data to create a Substyle
     *   }
     * })
     * 
     */
    create<T extends SubstyleCreateArgs>(args: SelectSubset<T, SubstyleCreateArgs<ExtArgs>>): Prisma__SubstyleClient<$Result.GetResult<Prisma.$SubstylePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Substyles.
     * @param {SubstyleCreateManyArgs} args - Arguments to create many Substyles.
     * @example
     * // Create many Substyles
     * const substyle = await prisma.substyle.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SubstyleCreateManyArgs>(args?: SelectSubset<T, SubstyleCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Substyles and returns the data saved in the database.
     * @param {SubstyleCreateManyAndReturnArgs} args - Arguments to create many Substyles.
     * @example
     * // Create many Substyles
     * const substyle = await prisma.substyle.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Substyles and only return the `id`
     * const substyleWithIdOnly = await prisma.substyle.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SubstyleCreateManyAndReturnArgs>(args?: SelectSubset<T, SubstyleCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubstylePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Substyle.
     * @param {SubstyleDeleteArgs} args - Arguments to delete one Substyle.
     * @example
     * // Delete one Substyle
     * const Substyle = await prisma.substyle.delete({
     *   where: {
     *     // ... filter to delete one Substyle
     *   }
     * })
     * 
     */
    delete<T extends SubstyleDeleteArgs>(args: SelectSubset<T, SubstyleDeleteArgs<ExtArgs>>): Prisma__SubstyleClient<$Result.GetResult<Prisma.$SubstylePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Substyle.
     * @param {SubstyleUpdateArgs} args - Arguments to update one Substyle.
     * @example
     * // Update one Substyle
     * const substyle = await prisma.substyle.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SubstyleUpdateArgs>(args: SelectSubset<T, SubstyleUpdateArgs<ExtArgs>>): Prisma__SubstyleClient<$Result.GetResult<Prisma.$SubstylePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Substyles.
     * @param {SubstyleDeleteManyArgs} args - Arguments to filter Substyles to delete.
     * @example
     * // Delete a few Substyles
     * const { count } = await prisma.substyle.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SubstyleDeleteManyArgs>(args?: SelectSubset<T, SubstyleDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Substyles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubstyleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Substyles
     * const substyle = await prisma.substyle.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SubstyleUpdateManyArgs>(args: SelectSubset<T, SubstyleUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Substyles and returns the data updated in the database.
     * @param {SubstyleUpdateManyAndReturnArgs} args - Arguments to update many Substyles.
     * @example
     * // Update many Substyles
     * const substyle = await prisma.substyle.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Substyles and only return the `id`
     * const substyleWithIdOnly = await prisma.substyle.updateManyAndReturn({
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
    updateManyAndReturn<T extends SubstyleUpdateManyAndReturnArgs>(args: SelectSubset<T, SubstyleUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubstylePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Substyle.
     * @param {SubstyleUpsertArgs} args - Arguments to update or create a Substyle.
     * @example
     * // Update or create a Substyle
     * const substyle = await prisma.substyle.upsert({
     *   create: {
     *     // ... data to create a Substyle
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Substyle we want to update
     *   }
     * })
     */
    upsert<T extends SubstyleUpsertArgs>(args: SelectSubset<T, SubstyleUpsertArgs<ExtArgs>>): Prisma__SubstyleClient<$Result.GetResult<Prisma.$SubstylePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Substyles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubstyleCountArgs} args - Arguments to filter Substyles to count.
     * @example
     * // Count the number of Substyles
     * const count = await prisma.substyle.count({
     *   where: {
     *     // ... the filter for the Substyles we want to count
     *   }
     * })
    **/
    count<T extends SubstyleCountArgs>(
      args?: Subset<T, SubstyleCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SubstyleCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Substyle.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubstyleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SubstyleAggregateArgs>(args: Subset<T, SubstyleAggregateArgs>): Prisma.PrismaPromise<GetSubstyleAggregateType<T>>

    /**
     * Group by Substyle.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubstyleGroupByArgs} args - Group by arguments.
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
      T extends SubstyleGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SubstyleGroupByArgs['orderBy'] }
        : { orderBy?: SubstyleGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SubstyleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSubstyleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Substyle model
   */
  readonly fields: SubstyleFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Substyle.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SubstyleClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    style_world<T extends StyleWorldDefaultArgs<ExtArgs> = {}>(args?: Subset<T, StyleWorldDefaultArgs<ExtArgs>>): Prisma__StyleWorldClient<$Result.GetResult<Prisma.$StyleWorldPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    outfits<T extends Substyle$outfitsArgs<ExtArgs> = {}>(args?: Subset<T, Substyle$outfitsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OutfitPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Substyle model
   */
  interface SubstyleFieldRefs {
    readonly id: FieldRef<"Substyle", 'String'>
    readonly style_world_id: FieldRef<"Substyle", 'String'>
    readonly name: FieldRef<"Substyle", 'String'>
    readonly slug: FieldRef<"Substyle", 'String'>
    readonly tagline: FieldRef<"Substyle", 'String'>
    readonly description: FieldRef<"Substyle", 'String'>
    readonly created_at: FieldRef<"Substyle", 'DateTime'>
    readonly updated_at: FieldRef<"Substyle", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Substyle findUnique
   */
  export type SubstyleFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Substyle
     */
    select?: SubstyleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Substyle
     */
    omit?: SubstyleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubstyleInclude<ExtArgs> | null
    /**
     * Filter, which Substyle to fetch.
     */
    where: SubstyleWhereUniqueInput
  }

  /**
   * Substyle findUniqueOrThrow
   */
  export type SubstyleFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Substyle
     */
    select?: SubstyleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Substyle
     */
    omit?: SubstyleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubstyleInclude<ExtArgs> | null
    /**
     * Filter, which Substyle to fetch.
     */
    where: SubstyleWhereUniqueInput
  }

  /**
   * Substyle findFirst
   */
  export type SubstyleFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Substyle
     */
    select?: SubstyleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Substyle
     */
    omit?: SubstyleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubstyleInclude<ExtArgs> | null
    /**
     * Filter, which Substyle to fetch.
     */
    where?: SubstyleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Substyles to fetch.
     */
    orderBy?: SubstyleOrderByWithRelationInput | SubstyleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Substyles.
     */
    cursor?: SubstyleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Substyles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Substyles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Substyles.
     */
    distinct?: SubstyleScalarFieldEnum | SubstyleScalarFieldEnum[]
  }

  /**
   * Substyle findFirstOrThrow
   */
  export type SubstyleFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Substyle
     */
    select?: SubstyleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Substyle
     */
    omit?: SubstyleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubstyleInclude<ExtArgs> | null
    /**
     * Filter, which Substyle to fetch.
     */
    where?: SubstyleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Substyles to fetch.
     */
    orderBy?: SubstyleOrderByWithRelationInput | SubstyleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Substyles.
     */
    cursor?: SubstyleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Substyles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Substyles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Substyles.
     */
    distinct?: SubstyleScalarFieldEnum | SubstyleScalarFieldEnum[]
  }

  /**
   * Substyle findMany
   */
  export type SubstyleFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Substyle
     */
    select?: SubstyleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Substyle
     */
    omit?: SubstyleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubstyleInclude<ExtArgs> | null
    /**
     * Filter, which Substyles to fetch.
     */
    where?: SubstyleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Substyles to fetch.
     */
    orderBy?: SubstyleOrderByWithRelationInput | SubstyleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Substyles.
     */
    cursor?: SubstyleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Substyles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Substyles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Substyles.
     */
    distinct?: SubstyleScalarFieldEnum | SubstyleScalarFieldEnum[]
  }

  /**
   * Substyle create
   */
  export type SubstyleCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Substyle
     */
    select?: SubstyleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Substyle
     */
    omit?: SubstyleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubstyleInclude<ExtArgs> | null
    /**
     * The data needed to create a Substyle.
     */
    data: XOR<SubstyleCreateInput, SubstyleUncheckedCreateInput>
  }

  /**
   * Substyle createMany
   */
  export type SubstyleCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Substyles.
     */
    data: SubstyleCreateManyInput | SubstyleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Substyle createManyAndReturn
   */
  export type SubstyleCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Substyle
     */
    select?: SubstyleSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Substyle
     */
    omit?: SubstyleOmit<ExtArgs> | null
    /**
     * The data used to create many Substyles.
     */
    data: SubstyleCreateManyInput | SubstyleCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubstyleIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Substyle update
   */
  export type SubstyleUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Substyle
     */
    select?: SubstyleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Substyle
     */
    omit?: SubstyleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubstyleInclude<ExtArgs> | null
    /**
     * The data needed to update a Substyle.
     */
    data: XOR<SubstyleUpdateInput, SubstyleUncheckedUpdateInput>
    /**
     * Choose, which Substyle to update.
     */
    where: SubstyleWhereUniqueInput
  }

  /**
   * Substyle updateMany
   */
  export type SubstyleUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Substyles.
     */
    data: XOR<SubstyleUpdateManyMutationInput, SubstyleUncheckedUpdateManyInput>
    /**
     * Filter which Substyles to update
     */
    where?: SubstyleWhereInput
    /**
     * Limit how many Substyles to update.
     */
    limit?: number
  }

  /**
   * Substyle updateManyAndReturn
   */
  export type SubstyleUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Substyle
     */
    select?: SubstyleSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Substyle
     */
    omit?: SubstyleOmit<ExtArgs> | null
    /**
     * The data used to update Substyles.
     */
    data: XOR<SubstyleUpdateManyMutationInput, SubstyleUncheckedUpdateManyInput>
    /**
     * Filter which Substyles to update
     */
    where?: SubstyleWhereInput
    /**
     * Limit how many Substyles to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubstyleIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Substyle upsert
   */
  export type SubstyleUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Substyle
     */
    select?: SubstyleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Substyle
     */
    omit?: SubstyleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubstyleInclude<ExtArgs> | null
    /**
     * The filter to search for the Substyle to update in case it exists.
     */
    where: SubstyleWhereUniqueInput
    /**
     * In case the Substyle found by the `where` argument doesn't exist, create a new Substyle with this data.
     */
    create: XOR<SubstyleCreateInput, SubstyleUncheckedCreateInput>
    /**
     * In case the Substyle was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SubstyleUpdateInput, SubstyleUncheckedUpdateInput>
  }

  /**
   * Substyle delete
   */
  export type SubstyleDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Substyle
     */
    select?: SubstyleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Substyle
     */
    omit?: SubstyleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubstyleInclude<ExtArgs> | null
    /**
     * Filter which Substyle to delete.
     */
    where: SubstyleWhereUniqueInput
  }

  /**
   * Substyle deleteMany
   */
  export type SubstyleDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Substyles to delete
     */
    where?: SubstyleWhereInput
    /**
     * Limit how many Substyles to delete.
     */
    limit?: number
  }

  /**
   * Substyle.outfits
   */
  export type Substyle$outfitsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Outfit
     */
    select?: OutfitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Outfit
     */
    omit?: OutfitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OutfitInclude<ExtArgs> | null
    where?: OutfitWhereInput
    orderBy?: OutfitOrderByWithRelationInput | OutfitOrderByWithRelationInput[]
    cursor?: OutfitWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OutfitScalarFieldEnum | OutfitScalarFieldEnum[]
  }

  /**
   * Substyle without action
   */
  export type SubstyleDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Substyle
     */
    select?: SubstyleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Substyle
     */
    omit?: SubstyleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubstyleInclude<ExtArgs> | null
  }


  /**
   * Model Outfit
   */

  export type AggregateOutfit = {
    _count: OutfitCountAggregateOutputType | null
    _min: OutfitMinAggregateOutputType | null
    _max: OutfitMaxAggregateOutputType | null
  }

  export type OutfitMinAggregateOutputType = {
    id: string | null
    substyle_id: string | null
    title: string | null
    one_liner: string | null
    overall_vibe: string | null
    is_tried: boolean | null
    is_favorite: boolean | null
    notes: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type OutfitMaxAggregateOutputType = {
    id: string | null
    substyle_id: string | null
    title: string | null
    one_liner: string | null
    overall_vibe: string | null
    is_tried: boolean | null
    is_favorite: boolean | null
    notes: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type OutfitCountAggregateOutputType = {
    id: number
    substyle_id: number
    title: number
    one_liner: number
    overall_vibe: number
    aesthetic_keywords: number
    is_tried: number
    is_favorite: number
    notes: number
    outfit_details: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type OutfitMinAggregateInputType = {
    id?: true
    substyle_id?: true
    title?: true
    one_liner?: true
    overall_vibe?: true
    is_tried?: true
    is_favorite?: true
    notes?: true
    created_at?: true
    updated_at?: true
  }

  export type OutfitMaxAggregateInputType = {
    id?: true
    substyle_id?: true
    title?: true
    one_liner?: true
    overall_vibe?: true
    is_tried?: true
    is_favorite?: true
    notes?: true
    created_at?: true
    updated_at?: true
  }

  export type OutfitCountAggregateInputType = {
    id?: true
    substyle_id?: true
    title?: true
    one_liner?: true
    overall_vibe?: true
    aesthetic_keywords?: true
    is_tried?: true
    is_favorite?: true
    notes?: true
    outfit_details?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type OutfitAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Outfit to aggregate.
     */
    where?: OutfitWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Outfits to fetch.
     */
    orderBy?: OutfitOrderByWithRelationInput | OutfitOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OutfitWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Outfits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Outfits.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Outfits
    **/
    _count?: true | OutfitCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OutfitMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OutfitMaxAggregateInputType
  }

  export type GetOutfitAggregateType<T extends OutfitAggregateArgs> = {
        [P in keyof T & keyof AggregateOutfit]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOutfit[P]>
      : GetScalarType<T[P], AggregateOutfit[P]>
  }




  export type OutfitGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OutfitWhereInput
    orderBy?: OutfitOrderByWithAggregationInput | OutfitOrderByWithAggregationInput[]
    by: OutfitScalarFieldEnum[] | OutfitScalarFieldEnum
    having?: OutfitScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OutfitCountAggregateInputType | true
    _min?: OutfitMinAggregateInputType
    _max?: OutfitMaxAggregateInputType
  }

  export type OutfitGroupByOutputType = {
    id: string
    substyle_id: string
    title: string
    one_liner: string | null
    overall_vibe: string | null
    aesthetic_keywords: string[]
    is_tried: boolean
    is_favorite: boolean
    notes: string | null
    outfit_details: JsonValue
    created_at: Date
    updated_at: Date
    _count: OutfitCountAggregateOutputType | null
    _min: OutfitMinAggregateOutputType | null
    _max: OutfitMaxAggregateOutputType | null
  }

  type GetOutfitGroupByPayload<T extends OutfitGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OutfitGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OutfitGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OutfitGroupByOutputType[P]>
            : GetScalarType<T[P], OutfitGroupByOutputType[P]>
        }
      >
    >


  export type OutfitSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    substyle_id?: boolean
    title?: boolean
    one_liner?: boolean
    overall_vibe?: boolean
    aesthetic_keywords?: boolean
    is_tried?: boolean
    is_favorite?: boolean
    notes?: boolean
    outfit_details?: boolean
    created_at?: boolean
    updated_at?: boolean
    substyle?: boolean | SubstyleDefaultArgs<ExtArgs>
    images?: boolean | Outfit$imagesArgs<ExtArgs>
    _count?: boolean | OutfitCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["outfit"]>

  export type OutfitSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    substyle_id?: boolean
    title?: boolean
    one_liner?: boolean
    overall_vibe?: boolean
    aesthetic_keywords?: boolean
    is_tried?: boolean
    is_favorite?: boolean
    notes?: boolean
    outfit_details?: boolean
    created_at?: boolean
    updated_at?: boolean
    substyle?: boolean | SubstyleDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["outfit"]>

  export type OutfitSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    substyle_id?: boolean
    title?: boolean
    one_liner?: boolean
    overall_vibe?: boolean
    aesthetic_keywords?: boolean
    is_tried?: boolean
    is_favorite?: boolean
    notes?: boolean
    outfit_details?: boolean
    created_at?: boolean
    updated_at?: boolean
    substyle?: boolean | SubstyleDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["outfit"]>

  export type OutfitSelectScalar = {
    id?: boolean
    substyle_id?: boolean
    title?: boolean
    one_liner?: boolean
    overall_vibe?: boolean
    aesthetic_keywords?: boolean
    is_tried?: boolean
    is_favorite?: boolean
    notes?: boolean
    outfit_details?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type OutfitOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "substyle_id" | "title" | "one_liner" | "overall_vibe" | "aesthetic_keywords" | "is_tried" | "is_favorite" | "notes" | "outfit_details" | "created_at" | "updated_at", ExtArgs["result"]["outfit"]>
  export type OutfitInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    substyle?: boolean | SubstyleDefaultArgs<ExtArgs>
    images?: boolean | Outfit$imagesArgs<ExtArgs>
    _count?: boolean | OutfitCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type OutfitIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    substyle?: boolean | SubstyleDefaultArgs<ExtArgs>
  }
  export type OutfitIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    substyle?: boolean | SubstyleDefaultArgs<ExtArgs>
  }

  export type $OutfitPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Outfit"
    objects: {
      substyle: Prisma.$SubstylePayload<ExtArgs>
      images: Prisma.$OutfitImagePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      substyle_id: string
      title: string
      one_liner: string | null
      overall_vibe: string | null
      aesthetic_keywords: string[]
      is_tried: boolean
      is_favorite: boolean
      notes: string | null
      outfit_details: Prisma.JsonValue
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["outfit"]>
    composites: {}
  }

  type OutfitGetPayload<S extends boolean | null | undefined | OutfitDefaultArgs> = $Result.GetResult<Prisma.$OutfitPayload, S>

  type OutfitCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<OutfitFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: OutfitCountAggregateInputType | true
    }

  export interface OutfitDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Outfit'], meta: { name: 'Outfit' } }
    /**
     * Find zero or one Outfit that matches the filter.
     * @param {OutfitFindUniqueArgs} args - Arguments to find a Outfit
     * @example
     * // Get one Outfit
     * const outfit = await prisma.outfit.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OutfitFindUniqueArgs>(args: SelectSubset<T, OutfitFindUniqueArgs<ExtArgs>>): Prisma__OutfitClient<$Result.GetResult<Prisma.$OutfitPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Outfit that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {OutfitFindUniqueOrThrowArgs} args - Arguments to find a Outfit
     * @example
     * // Get one Outfit
     * const outfit = await prisma.outfit.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OutfitFindUniqueOrThrowArgs>(args: SelectSubset<T, OutfitFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OutfitClient<$Result.GetResult<Prisma.$OutfitPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Outfit that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OutfitFindFirstArgs} args - Arguments to find a Outfit
     * @example
     * // Get one Outfit
     * const outfit = await prisma.outfit.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OutfitFindFirstArgs>(args?: SelectSubset<T, OutfitFindFirstArgs<ExtArgs>>): Prisma__OutfitClient<$Result.GetResult<Prisma.$OutfitPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Outfit that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OutfitFindFirstOrThrowArgs} args - Arguments to find a Outfit
     * @example
     * // Get one Outfit
     * const outfit = await prisma.outfit.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OutfitFindFirstOrThrowArgs>(args?: SelectSubset<T, OutfitFindFirstOrThrowArgs<ExtArgs>>): Prisma__OutfitClient<$Result.GetResult<Prisma.$OutfitPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Outfits that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OutfitFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Outfits
     * const outfits = await prisma.outfit.findMany()
     * 
     * // Get first 10 Outfits
     * const outfits = await prisma.outfit.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const outfitWithIdOnly = await prisma.outfit.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends OutfitFindManyArgs>(args?: SelectSubset<T, OutfitFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OutfitPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Outfit.
     * @param {OutfitCreateArgs} args - Arguments to create a Outfit.
     * @example
     * // Create one Outfit
     * const Outfit = await prisma.outfit.create({
     *   data: {
     *     // ... data to create a Outfit
     *   }
     * })
     * 
     */
    create<T extends OutfitCreateArgs>(args: SelectSubset<T, OutfitCreateArgs<ExtArgs>>): Prisma__OutfitClient<$Result.GetResult<Prisma.$OutfitPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Outfits.
     * @param {OutfitCreateManyArgs} args - Arguments to create many Outfits.
     * @example
     * // Create many Outfits
     * const outfit = await prisma.outfit.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OutfitCreateManyArgs>(args?: SelectSubset<T, OutfitCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Outfits and returns the data saved in the database.
     * @param {OutfitCreateManyAndReturnArgs} args - Arguments to create many Outfits.
     * @example
     * // Create many Outfits
     * const outfit = await prisma.outfit.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Outfits and only return the `id`
     * const outfitWithIdOnly = await prisma.outfit.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends OutfitCreateManyAndReturnArgs>(args?: SelectSubset<T, OutfitCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OutfitPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Outfit.
     * @param {OutfitDeleteArgs} args - Arguments to delete one Outfit.
     * @example
     * // Delete one Outfit
     * const Outfit = await prisma.outfit.delete({
     *   where: {
     *     // ... filter to delete one Outfit
     *   }
     * })
     * 
     */
    delete<T extends OutfitDeleteArgs>(args: SelectSubset<T, OutfitDeleteArgs<ExtArgs>>): Prisma__OutfitClient<$Result.GetResult<Prisma.$OutfitPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Outfit.
     * @param {OutfitUpdateArgs} args - Arguments to update one Outfit.
     * @example
     * // Update one Outfit
     * const outfit = await prisma.outfit.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OutfitUpdateArgs>(args: SelectSubset<T, OutfitUpdateArgs<ExtArgs>>): Prisma__OutfitClient<$Result.GetResult<Prisma.$OutfitPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Outfits.
     * @param {OutfitDeleteManyArgs} args - Arguments to filter Outfits to delete.
     * @example
     * // Delete a few Outfits
     * const { count } = await prisma.outfit.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OutfitDeleteManyArgs>(args?: SelectSubset<T, OutfitDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Outfits.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OutfitUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Outfits
     * const outfit = await prisma.outfit.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OutfitUpdateManyArgs>(args: SelectSubset<T, OutfitUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Outfits and returns the data updated in the database.
     * @param {OutfitUpdateManyAndReturnArgs} args - Arguments to update many Outfits.
     * @example
     * // Update many Outfits
     * const outfit = await prisma.outfit.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Outfits and only return the `id`
     * const outfitWithIdOnly = await prisma.outfit.updateManyAndReturn({
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
    updateManyAndReturn<T extends OutfitUpdateManyAndReturnArgs>(args: SelectSubset<T, OutfitUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OutfitPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Outfit.
     * @param {OutfitUpsertArgs} args - Arguments to update or create a Outfit.
     * @example
     * // Update or create a Outfit
     * const outfit = await prisma.outfit.upsert({
     *   create: {
     *     // ... data to create a Outfit
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Outfit we want to update
     *   }
     * })
     */
    upsert<T extends OutfitUpsertArgs>(args: SelectSubset<T, OutfitUpsertArgs<ExtArgs>>): Prisma__OutfitClient<$Result.GetResult<Prisma.$OutfitPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Outfits.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OutfitCountArgs} args - Arguments to filter Outfits to count.
     * @example
     * // Count the number of Outfits
     * const count = await prisma.outfit.count({
     *   where: {
     *     // ... the filter for the Outfits we want to count
     *   }
     * })
    **/
    count<T extends OutfitCountArgs>(
      args?: Subset<T, OutfitCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OutfitCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Outfit.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OutfitAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends OutfitAggregateArgs>(args: Subset<T, OutfitAggregateArgs>): Prisma.PrismaPromise<GetOutfitAggregateType<T>>

    /**
     * Group by Outfit.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OutfitGroupByArgs} args - Group by arguments.
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
      T extends OutfitGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OutfitGroupByArgs['orderBy'] }
        : { orderBy?: OutfitGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, OutfitGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOutfitGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Outfit model
   */
  readonly fields: OutfitFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Outfit.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OutfitClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    substyle<T extends SubstyleDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SubstyleDefaultArgs<ExtArgs>>): Prisma__SubstyleClient<$Result.GetResult<Prisma.$SubstylePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    images<T extends Outfit$imagesArgs<ExtArgs> = {}>(args?: Subset<T, Outfit$imagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OutfitImagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Outfit model
   */
  interface OutfitFieldRefs {
    readonly id: FieldRef<"Outfit", 'String'>
    readonly substyle_id: FieldRef<"Outfit", 'String'>
    readonly title: FieldRef<"Outfit", 'String'>
    readonly one_liner: FieldRef<"Outfit", 'String'>
    readonly overall_vibe: FieldRef<"Outfit", 'String'>
    readonly aesthetic_keywords: FieldRef<"Outfit", 'String[]'>
    readonly is_tried: FieldRef<"Outfit", 'Boolean'>
    readonly is_favorite: FieldRef<"Outfit", 'Boolean'>
    readonly notes: FieldRef<"Outfit", 'String'>
    readonly outfit_details: FieldRef<"Outfit", 'Json'>
    readonly created_at: FieldRef<"Outfit", 'DateTime'>
    readonly updated_at: FieldRef<"Outfit", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Outfit findUnique
   */
  export type OutfitFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Outfit
     */
    select?: OutfitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Outfit
     */
    omit?: OutfitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OutfitInclude<ExtArgs> | null
    /**
     * Filter, which Outfit to fetch.
     */
    where: OutfitWhereUniqueInput
  }

  /**
   * Outfit findUniqueOrThrow
   */
  export type OutfitFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Outfit
     */
    select?: OutfitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Outfit
     */
    omit?: OutfitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OutfitInclude<ExtArgs> | null
    /**
     * Filter, which Outfit to fetch.
     */
    where: OutfitWhereUniqueInput
  }

  /**
   * Outfit findFirst
   */
  export type OutfitFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Outfit
     */
    select?: OutfitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Outfit
     */
    omit?: OutfitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OutfitInclude<ExtArgs> | null
    /**
     * Filter, which Outfit to fetch.
     */
    where?: OutfitWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Outfits to fetch.
     */
    orderBy?: OutfitOrderByWithRelationInput | OutfitOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Outfits.
     */
    cursor?: OutfitWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Outfits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Outfits.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Outfits.
     */
    distinct?: OutfitScalarFieldEnum | OutfitScalarFieldEnum[]
  }

  /**
   * Outfit findFirstOrThrow
   */
  export type OutfitFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Outfit
     */
    select?: OutfitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Outfit
     */
    omit?: OutfitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OutfitInclude<ExtArgs> | null
    /**
     * Filter, which Outfit to fetch.
     */
    where?: OutfitWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Outfits to fetch.
     */
    orderBy?: OutfitOrderByWithRelationInput | OutfitOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Outfits.
     */
    cursor?: OutfitWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Outfits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Outfits.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Outfits.
     */
    distinct?: OutfitScalarFieldEnum | OutfitScalarFieldEnum[]
  }

  /**
   * Outfit findMany
   */
  export type OutfitFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Outfit
     */
    select?: OutfitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Outfit
     */
    omit?: OutfitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OutfitInclude<ExtArgs> | null
    /**
     * Filter, which Outfits to fetch.
     */
    where?: OutfitWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Outfits to fetch.
     */
    orderBy?: OutfitOrderByWithRelationInput | OutfitOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Outfits.
     */
    cursor?: OutfitWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Outfits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Outfits.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Outfits.
     */
    distinct?: OutfitScalarFieldEnum | OutfitScalarFieldEnum[]
  }

  /**
   * Outfit create
   */
  export type OutfitCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Outfit
     */
    select?: OutfitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Outfit
     */
    omit?: OutfitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OutfitInclude<ExtArgs> | null
    /**
     * The data needed to create a Outfit.
     */
    data: XOR<OutfitCreateInput, OutfitUncheckedCreateInput>
  }

  /**
   * Outfit createMany
   */
  export type OutfitCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Outfits.
     */
    data: OutfitCreateManyInput | OutfitCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Outfit createManyAndReturn
   */
  export type OutfitCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Outfit
     */
    select?: OutfitSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Outfit
     */
    omit?: OutfitOmit<ExtArgs> | null
    /**
     * The data used to create many Outfits.
     */
    data: OutfitCreateManyInput | OutfitCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OutfitIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Outfit update
   */
  export type OutfitUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Outfit
     */
    select?: OutfitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Outfit
     */
    omit?: OutfitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OutfitInclude<ExtArgs> | null
    /**
     * The data needed to update a Outfit.
     */
    data: XOR<OutfitUpdateInput, OutfitUncheckedUpdateInput>
    /**
     * Choose, which Outfit to update.
     */
    where: OutfitWhereUniqueInput
  }

  /**
   * Outfit updateMany
   */
  export type OutfitUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Outfits.
     */
    data: XOR<OutfitUpdateManyMutationInput, OutfitUncheckedUpdateManyInput>
    /**
     * Filter which Outfits to update
     */
    where?: OutfitWhereInput
    /**
     * Limit how many Outfits to update.
     */
    limit?: number
  }

  /**
   * Outfit updateManyAndReturn
   */
  export type OutfitUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Outfit
     */
    select?: OutfitSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Outfit
     */
    omit?: OutfitOmit<ExtArgs> | null
    /**
     * The data used to update Outfits.
     */
    data: XOR<OutfitUpdateManyMutationInput, OutfitUncheckedUpdateManyInput>
    /**
     * Filter which Outfits to update
     */
    where?: OutfitWhereInput
    /**
     * Limit how many Outfits to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OutfitIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Outfit upsert
   */
  export type OutfitUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Outfit
     */
    select?: OutfitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Outfit
     */
    omit?: OutfitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OutfitInclude<ExtArgs> | null
    /**
     * The filter to search for the Outfit to update in case it exists.
     */
    where: OutfitWhereUniqueInput
    /**
     * In case the Outfit found by the `where` argument doesn't exist, create a new Outfit with this data.
     */
    create: XOR<OutfitCreateInput, OutfitUncheckedCreateInput>
    /**
     * In case the Outfit was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OutfitUpdateInput, OutfitUncheckedUpdateInput>
  }

  /**
   * Outfit delete
   */
  export type OutfitDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Outfit
     */
    select?: OutfitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Outfit
     */
    omit?: OutfitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OutfitInclude<ExtArgs> | null
    /**
     * Filter which Outfit to delete.
     */
    where: OutfitWhereUniqueInput
  }

  /**
   * Outfit deleteMany
   */
  export type OutfitDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Outfits to delete
     */
    where?: OutfitWhereInput
    /**
     * Limit how many Outfits to delete.
     */
    limit?: number
  }

  /**
   * Outfit.images
   */
  export type Outfit$imagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OutfitImage
     */
    select?: OutfitImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OutfitImage
     */
    omit?: OutfitImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OutfitImageInclude<ExtArgs> | null
    where?: OutfitImageWhereInput
    orderBy?: OutfitImageOrderByWithRelationInput | OutfitImageOrderByWithRelationInput[]
    cursor?: OutfitImageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OutfitImageScalarFieldEnum | OutfitImageScalarFieldEnum[]
  }

  /**
   * Outfit without action
   */
  export type OutfitDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Outfit
     */
    select?: OutfitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Outfit
     */
    omit?: OutfitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OutfitInclude<ExtArgs> | null
  }


  /**
   * Model OutfitImage
   */

  export type AggregateOutfitImage = {
    _count: OutfitImageCountAggregateOutputType | null
    _min: OutfitImageMinAggregateOutputType | null
    _max: OutfitImageMaxAggregateOutputType | null
  }

  export type OutfitImageMinAggregateOutputType = {
    id: string | null
    outfit_id: string | null
    image_url: string | null
    storage_path: string | null
    caption: string | null
    is_primary: boolean | null
    uploaded_at: Date | null
  }

  export type OutfitImageMaxAggregateOutputType = {
    id: string | null
    outfit_id: string | null
    image_url: string | null
    storage_path: string | null
    caption: string | null
    is_primary: boolean | null
    uploaded_at: Date | null
  }

  export type OutfitImageCountAggregateOutputType = {
    id: number
    outfit_id: number
    image_url: number
    storage_path: number
    caption: number
    is_primary: number
    uploaded_at: number
    _all: number
  }


  export type OutfitImageMinAggregateInputType = {
    id?: true
    outfit_id?: true
    image_url?: true
    storage_path?: true
    caption?: true
    is_primary?: true
    uploaded_at?: true
  }

  export type OutfitImageMaxAggregateInputType = {
    id?: true
    outfit_id?: true
    image_url?: true
    storage_path?: true
    caption?: true
    is_primary?: true
    uploaded_at?: true
  }

  export type OutfitImageCountAggregateInputType = {
    id?: true
    outfit_id?: true
    image_url?: true
    storage_path?: true
    caption?: true
    is_primary?: true
    uploaded_at?: true
    _all?: true
  }

  export type OutfitImageAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OutfitImage to aggregate.
     */
    where?: OutfitImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OutfitImages to fetch.
     */
    orderBy?: OutfitImageOrderByWithRelationInput | OutfitImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OutfitImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OutfitImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OutfitImages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned OutfitImages
    **/
    _count?: true | OutfitImageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OutfitImageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OutfitImageMaxAggregateInputType
  }

  export type GetOutfitImageAggregateType<T extends OutfitImageAggregateArgs> = {
        [P in keyof T & keyof AggregateOutfitImage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOutfitImage[P]>
      : GetScalarType<T[P], AggregateOutfitImage[P]>
  }




  export type OutfitImageGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OutfitImageWhereInput
    orderBy?: OutfitImageOrderByWithAggregationInput | OutfitImageOrderByWithAggregationInput[]
    by: OutfitImageScalarFieldEnum[] | OutfitImageScalarFieldEnum
    having?: OutfitImageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OutfitImageCountAggregateInputType | true
    _min?: OutfitImageMinAggregateInputType
    _max?: OutfitImageMaxAggregateInputType
  }

  export type OutfitImageGroupByOutputType = {
    id: string
    outfit_id: string
    image_url: string
    storage_path: string
    caption: string | null
    is_primary: boolean
    uploaded_at: Date
    _count: OutfitImageCountAggregateOutputType | null
    _min: OutfitImageMinAggregateOutputType | null
    _max: OutfitImageMaxAggregateOutputType | null
  }

  type GetOutfitImageGroupByPayload<T extends OutfitImageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OutfitImageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OutfitImageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OutfitImageGroupByOutputType[P]>
            : GetScalarType<T[P], OutfitImageGroupByOutputType[P]>
        }
      >
    >


  export type OutfitImageSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    outfit_id?: boolean
    image_url?: boolean
    storage_path?: boolean
    caption?: boolean
    is_primary?: boolean
    uploaded_at?: boolean
    outfit?: boolean | OutfitDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["outfitImage"]>

  export type OutfitImageSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    outfit_id?: boolean
    image_url?: boolean
    storage_path?: boolean
    caption?: boolean
    is_primary?: boolean
    uploaded_at?: boolean
    outfit?: boolean | OutfitDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["outfitImage"]>

  export type OutfitImageSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    outfit_id?: boolean
    image_url?: boolean
    storage_path?: boolean
    caption?: boolean
    is_primary?: boolean
    uploaded_at?: boolean
    outfit?: boolean | OutfitDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["outfitImage"]>

  export type OutfitImageSelectScalar = {
    id?: boolean
    outfit_id?: boolean
    image_url?: boolean
    storage_path?: boolean
    caption?: boolean
    is_primary?: boolean
    uploaded_at?: boolean
  }

  export type OutfitImageOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "outfit_id" | "image_url" | "storage_path" | "caption" | "is_primary" | "uploaded_at", ExtArgs["result"]["outfitImage"]>
  export type OutfitImageInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    outfit?: boolean | OutfitDefaultArgs<ExtArgs>
  }
  export type OutfitImageIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    outfit?: boolean | OutfitDefaultArgs<ExtArgs>
  }
  export type OutfitImageIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    outfit?: boolean | OutfitDefaultArgs<ExtArgs>
  }

  export type $OutfitImagePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "OutfitImage"
    objects: {
      outfit: Prisma.$OutfitPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      outfit_id: string
      image_url: string
      storage_path: string
      caption: string | null
      is_primary: boolean
      uploaded_at: Date
    }, ExtArgs["result"]["outfitImage"]>
    composites: {}
  }

  type OutfitImageGetPayload<S extends boolean | null | undefined | OutfitImageDefaultArgs> = $Result.GetResult<Prisma.$OutfitImagePayload, S>

  type OutfitImageCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<OutfitImageFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: OutfitImageCountAggregateInputType | true
    }

  export interface OutfitImageDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['OutfitImage'], meta: { name: 'OutfitImage' } }
    /**
     * Find zero or one OutfitImage that matches the filter.
     * @param {OutfitImageFindUniqueArgs} args - Arguments to find a OutfitImage
     * @example
     * // Get one OutfitImage
     * const outfitImage = await prisma.outfitImage.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OutfitImageFindUniqueArgs>(args: SelectSubset<T, OutfitImageFindUniqueArgs<ExtArgs>>): Prisma__OutfitImageClient<$Result.GetResult<Prisma.$OutfitImagePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one OutfitImage that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {OutfitImageFindUniqueOrThrowArgs} args - Arguments to find a OutfitImage
     * @example
     * // Get one OutfitImage
     * const outfitImage = await prisma.outfitImage.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OutfitImageFindUniqueOrThrowArgs>(args: SelectSubset<T, OutfitImageFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OutfitImageClient<$Result.GetResult<Prisma.$OutfitImagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first OutfitImage that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OutfitImageFindFirstArgs} args - Arguments to find a OutfitImage
     * @example
     * // Get one OutfitImage
     * const outfitImage = await prisma.outfitImage.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OutfitImageFindFirstArgs>(args?: SelectSubset<T, OutfitImageFindFirstArgs<ExtArgs>>): Prisma__OutfitImageClient<$Result.GetResult<Prisma.$OutfitImagePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first OutfitImage that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OutfitImageFindFirstOrThrowArgs} args - Arguments to find a OutfitImage
     * @example
     * // Get one OutfitImage
     * const outfitImage = await prisma.outfitImage.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OutfitImageFindFirstOrThrowArgs>(args?: SelectSubset<T, OutfitImageFindFirstOrThrowArgs<ExtArgs>>): Prisma__OutfitImageClient<$Result.GetResult<Prisma.$OutfitImagePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more OutfitImages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OutfitImageFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all OutfitImages
     * const outfitImages = await prisma.outfitImage.findMany()
     * 
     * // Get first 10 OutfitImages
     * const outfitImages = await prisma.outfitImage.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const outfitImageWithIdOnly = await prisma.outfitImage.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends OutfitImageFindManyArgs>(args?: SelectSubset<T, OutfitImageFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OutfitImagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a OutfitImage.
     * @param {OutfitImageCreateArgs} args - Arguments to create a OutfitImage.
     * @example
     * // Create one OutfitImage
     * const OutfitImage = await prisma.outfitImage.create({
     *   data: {
     *     // ... data to create a OutfitImage
     *   }
     * })
     * 
     */
    create<T extends OutfitImageCreateArgs>(args: SelectSubset<T, OutfitImageCreateArgs<ExtArgs>>): Prisma__OutfitImageClient<$Result.GetResult<Prisma.$OutfitImagePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many OutfitImages.
     * @param {OutfitImageCreateManyArgs} args - Arguments to create many OutfitImages.
     * @example
     * // Create many OutfitImages
     * const outfitImage = await prisma.outfitImage.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OutfitImageCreateManyArgs>(args?: SelectSubset<T, OutfitImageCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many OutfitImages and returns the data saved in the database.
     * @param {OutfitImageCreateManyAndReturnArgs} args - Arguments to create many OutfitImages.
     * @example
     * // Create many OutfitImages
     * const outfitImage = await prisma.outfitImage.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many OutfitImages and only return the `id`
     * const outfitImageWithIdOnly = await prisma.outfitImage.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends OutfitImageCreateManyAndReturnArgs>(args?: SelectSubset<T, OutfitImageCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OutfitImagePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a OutfitImage.
     * @param {OutfitImageDeleteArgs} args - Arguments to delete one OutfitImage.
     * @example
     * // Delete one OutfitImage
     * const OutfitImage = await prisma.outfitImage.delete({
     *   where: {
     *     // ... filter to delete one OutfitImage
     *   }
     * })
     * 
     */
    delete<T extends OutfitImageDeleteArgs>(args: SelectSubset<T, OutfitImageDeleteArgs<ExtArgs>>): Prisma__OutfitImageClient<$Result.GetResult<Prisma.$OutfitImagePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one OutfitImage.
     * @param {OutfitImageUpdateArgs} args - Arguments to update one OutfitImage.
     * @example
     * // Update one OutfitImage
     * const outfitImage = await prisma.outfitImage.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OutfitImageUpdateArgs>(args: SelectSubset<T, OutfitImageUpdateArgs<ExtArgs>>): Prisma__OutfitImageClient<$Result.GetResult<Prisma.$OutfitImagePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more OutfitImages.
     * @param {OutfitImageDeleteManyArgs} args - Arguments to filter OutfitImages to delete.
     * @example
     * // Delete a few OutfitImages
     * const { count } = await prisma.outfitImage.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OutfitImageDeleteManyArgs>(args?: SelectSubset<T, OutfitImageDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more OutfitImages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OutfitImageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many OutfitImages
     * const outfitImage = await prisma.outfitImage.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OutfitImageUpdateManyArgs>(args: SelectSubset<T, OutfitImageUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more OutfitImages and returns the data updated in the database.
     * @param {OutfitImageUpdateManyAndReturnArgs} args - Arguments to update many OutfitImages.
     * @example
     * // Update many OutfitImages
     * const outfitImage = await prisma.outfitImage.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more OutfitImages and only return the `id`
     * const outfitImageWithIdOnly = await prisma.outfitImage.updateManyAndReturn({
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
    updateManyAndReturn<T extends OutfitImageUpdateManyAndReturnArgs>(args: SelectSubset<T, OutfitImageUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OutfitImagePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one OutfitImage.
     * @param {OutfitImageUpsertArgs} args - Arguments to update or create a OutfitImage.
     * @example
     * // Update or create a OutfitImage
     * const outfitImage = await prisma.outfitImage.upsert({
     *   create: {
     *     // ... data to create a OutfitImage
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the OutfitImage we want to update
     *   }
     * })
     */
    upsert<T extends OutfitImageUpsertArgs>(args: SelectSubset<T, OutfitImageUpsertArgs<ExtArgs>>): Prisma__OutfitImageClient<$Result.GetResult<Prisma.$OutfitImagePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of OutfitImages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OutfitImageCountArgs} args - Arguments to filter OutfitImages to count.
     * @example
     * // Count the number of OutfitImages
     * const count = await prisma.outfitImage.count({
     *   where: {
     *     // ... the filter for the OutfitImages we want to count
     *   }
     * })
    **/
    count<T extends OutfitImageCountArgs>(
      args?: Subset<T, OutfitImageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OutfitImageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a OutfitImage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OutfitImageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends OutfitImageAggregateArgs>(args: Subset<T, OutfitImageAggregateArgs>): Prisma.PrismaPromise<GetOutfitImageAggregateType<T>>

    /**
     * Group by OutfitImage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OutfitImageGroupByArgs} args - Group by arguments.
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
      T extends OutfitImageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OutfitImageGroupByArgs['orderBy'] }
        : { orderBy?: OutfitImageGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, OutfitImageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOutfitImageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the OutfitImage model
   */
  readonly fields: OutfitImageFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for OutfitImage.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OutfitImageClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    outfit<T extends OutfitDefaultArgs<ExtArgs> = {}>(args?: Subset<T, OutfitDefaultArgs<ExtArgs>>): Prisma__OutfitClient<$Result.GetResult<Prisma.$OutfitPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the OutfitImage model
   */
  interface OutfitImageFieldRefs {
    readonly id: FieldRef<"OutfitImage", 'String'>
    readonly outfit_id: FieldRef<"OutfitImage", 'String'>
    readonly image_url: FieldRef<"OutfitImage", 'String'>
    readonly storage_path: FieldRef<"OutfitImage", 'String'>
    readonly caption: FieldRef<"OutfitImage", 'String'>
    readonly is_primary: FieldRef<"OutfitImage", 'Boolean'>
    readonly uploaded_at: FieldRef<"OutfitImage", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * OutfitImage findUnique
   */
  export type OutfitImageFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OutfitImage
     */
    select?: OutfitImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OutfitImage
     */
    omit?: OutfitImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OutfitImageInclude<ExtArgs> | null
    /**
     * Filter, which OutfitImage to fetch.
     */
    where: OutfitImageWhereUniqueInput
  }

  /**
   * OutfitImage findUniqueOrThrow
   */
  export type OutfitImageFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OutfitImage
     */
    select?: OutfitImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OutfitImage
     */
    omit?: OutfitImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OutfitImageInclude<ExtArgs> | null
    /**
     * Filter, which OutfitImage to fetch.
     */
    where: OutfitImageWhereUniqueInput
  }

  /**
   * OutfitImage findFirst
   */
  export type OutfitImageFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OutfitImage
     */
    select?: OutfitImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OutfitImage
     */
    omit?: OutfitImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OutfitImageInclude<ExtArgs> | null
    /**
     * Filter, which OutfitImage to fetch.
     */
    where?: OutfitImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OutfitImages to fetch.
     */
    orderBy?: OutfitImageOrderByWithRelationInput | OutfitImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OutfitImages.
     */
    cursor?: OutfitImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OutfitImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OutfitImages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OutfitImages.
     */
    distinct?: OutfitImageScalarFieldEnum | OutfitImageScalarFieldEnum[]
  }

  /**
   * OutfitImage findFirstOrThrow
   */
  export type OutfitImageFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OutfitImage
     */
    select?: OutfitImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OutfitImage
     */
    omit?: OutfitImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OutfitImageInclude<ExtArgs> | null
    /**
     * Filter, which OutfitImage to fetch.
     */
    where?: OutfitImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OutfitImages to fetch.
     */
    orderBy?: OutfitImageOrderByWithRelationInput | OutfitImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OutfitImages.
     */
    cursor?: OutfitImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OutfitImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OutfitImages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OutfitImages.
     */
    distinct?: OutfitImageScalarFieldEnum | OutfitImageScalarFieldEnum[]
  }

  /**
   * OutfitImage findMany
   */
  export type OutfitImageFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OutfitImage
     */
    select?: OutfitImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OutfitImage
     */
    omit?: OutfitImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OutfitImageInclude<ExtArgs> | null
    /**
     * Filter, which OutfitImages to fetch.
     */
    where?: OutfitImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OutfitImages to fetch.
     */
    orderBy?: OutfitImageOrderByWithRelationInput | OutfitImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing OutfitImages.
     */
    cursor?: OutfitImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OutfitImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OutfitImages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OutfitImages.
     */
    distinct?: OutfitImageScalarFieldEnum | OutfitImageScalarFieldEnum[]
  }

  /**
   * OutfitImage create
   */
  export type OutfitImageCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OutfitImage
     */
    select?: OutfitImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OutfitImage
     */
    omit?: OutfitImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OutfitImageInclude<ExtArgs> | null
    /**
     * The data needed to create a OutfitImage.
     */
    data: XOR<OutfitImageCreateInput, OutfitImageUncheckedCreateInput>
  }

  /**
   * OutfitImage createMany
   */
  export type OutfitImageCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many OutfitImages.
     */
    data: OutfitImageCreateManyInput | OutfitImageCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * OutfitImage createManyAndReturn
   */
  export type OutfitImageCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OutfitImage
     */
    select?: OutfitImageSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the OutfitImage
     */
    omit?: OutfitImageOmit<ExtArgs> | null
    /**
     * The data used to create many OutfitImages.
     */
    data: OutfitImageCreateManyInput | OutfitImageCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OutfitImageIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * OutfitImage update
   */
  export type OutfitImageUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OutfitImage
     */
    select?: OutfitImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OutfitImage
     */
    omit?: OutfitImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OutfitImageInclude<ExtArgs> | null
    /**
     * The data needed to update a OutfitImage.
     */
    data: XOR<OutfitImageUpdateInput, OutfitImageUncheckedUpdateInput>
    /**
     * Choose, which OutfitImage to update.
     */
    where: OutfitImageWhereUniqueInput
  }

  /**
   * OutfitImage updateMany
   */
  export type OutfitImageUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update OutfitImages.
     */
    data: XOR<OutfitImageUpdateManyMutationInput, OutfitImageUncheckedUpdateManyInput>
    /**
     * Filter which OutfitImages to update
     */
    where?: OutfitImageWhereInput
    /**
     * Limit how many OutfitImages to update.
     */
    limit?: number
  }

  /**
   * OutfitImage updateManyAndReturn
   */
  export type OutfitImageUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OutfitImage
     */
    select?: OutfitImageSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the OutfitImage
     */
    omit?: OutfitImageOmit<ExtArgs> | null
    /**
     * The data used to update OutfitImages.
     */
    data: XOR<OutfitImageUpdateManyMutationInput, OutfitImageUncheckedUpdateManyInput>
    /**
     * Filter which OutfitImages to update
     */
    where?: OutfitImageWhereInput
    /**
     * Limit how many OutfitImages to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OutfitImageIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * OutfitImage upsert
   */
  export type OutfitImageUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OutfitImage
     */
    select?: OutfitImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OutfitImage
     */
    omit?: OutfitImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OutfitImageInclude<ExtArgs> | null
    /**
     * The filter to search for the OutfitImage to update in case it exists.
     */
    where: OutfitImageWhereUniqueInput
    /**
     * In case the OutfitImage found by the `where` argument doesn't exist, create a new OutfitImage with this data.
     */
    create: XOR<OutfitImageCreateInput, OutfitImageUncheckedCreateInput>
    /**
     * In case the OutfitImage was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OutfitImageUpdateInput, OutfitImageUncheckedUpdateInput>
  }

  /**
   * OutfitImage delete
   */
  export type OutfitImageDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OutfitImage
     */
    select?: OutfitImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OutfitImage
     */
    omit?: OutfitImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OutfitImageInclude<ExtArgs> | null
    /**
     * Filter which OutfitImage to delete.
     */
    where: OutfitImageWhereUniqueInput
  }

  /**
   * OutfitImage deleteMany
   */
  export type OutfitImageDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OutfitImages to delete
     */
    where?: OutfitImageWhereInput
    /**
     * Limit how many OutfitImages to delete.
     */
    limit?: number
  }

  /**
   * OutfitImage without action
   */
  export type OutfitImageDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OutfitImage
     */
    select?: OutfitImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OutfitImage
     */
    omit?: OutfitImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OutfitImageInclude<ExtArgs> | null
  }


  /**
   * Model AppTheme
   */

  export type AggregateAppTheme = {
    _count: AppThemeCountAggregateOutputType | null
    _min: AppThemeMinAggregateOutputType | null
    _max: AppThemeMaxAggregateOutputType | null
  }

  export type AppThemeMinAggregateOutputType = {
    id: string | null
    name: string | null
    is_default: boolean | null
    primary_color: string | null
    secondary_color: string | null
    accent_color: string | null
    background_color: string | null
    surface_color: string | null
    text_primary: string | null
    text_secondary: string | null
    border_color: string | null
    gradient_start: string | null
    gradient_end: string | null
    created_at: Date | null
  }

  export type AppThemeMaxAggregateOutputType = {
    id: string | null
    name: string | null
    is_default: boolean | null
    primary_color: string | null
    secondary_color: string | null
    accent_color: string | null
    background_color: string | null
    surface_color: string | null
    text_primary: string | null
    text_secondary: string | null
    border_color: string | null
    gradient_start: string | null
    gradient_end: string | null
    created_at: Date | null
  }

  export type AppThemeCountAggregateOutputType = {
    id: number
    name: number
    is_default: number
    primary_color: number
    secondary_color: number
    accent_color: number
    background_color: number
    surface_color: number
    text_primary: number
    text_secondary: number
    border_color: number
    gradient_start: number
    gradient_end: number
    created_at: number
    _all: number
  }


  export type AppThemeMinAggregateInputType = {
    id?: true
    name?: true
    is_default?: true
    primary_color?: true
    secondary_color?: true
    accent_color?: true
    background_color?: true
    surface_color?: true
    text_primary?: true
    text_secondary?: true
    border_color?: true
    gradient_start?: true
    gradient_end?: true
    created_at?: true
  }

  export type AppThemeMaxAggregateInputType = {
    id?: true
    name?: true
    is_default?: true
    primary_color?: true
    secondary_color?: true
    accent_color?: true
    background_color?: true
    surface_color?: true
    text_primary?: true
    text_secondary?: true
    border_color?: true
    gradient_start?: true
    gradient_end?: true
    created_at?: true
  }

  export type AppThemeCountAggregateInputType = {
    id?: true
    name?: true
    is_default?: true
    primary_color?: true
    secondary_color?: true
    accent_color?: true
    background_color?: true
    surface_color?: true
    text_primary?: true
    text_secondary?: true
    border_color?: true
    gradient_start?: true
    gradient_end?: true
    created_at?: true
    _all?: true
  }

  export type AppThemeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AppTheme to aggregate.
     */
    where?: AppThemeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AppThemes to fetch.
     */
    orderBy?: AppThemeOrderByWithRelationInput | AppThemeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AppThemeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AppThemes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AppThemes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AppThemes
    **/
    _count?: true | AppThemeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AppThemeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AppThemeMaxAggregateInputType
  }

  export type GetAppThemeAggregateType<T extends AppThemeAggregateArgs> = {
        [P in keyof T & keyof AggregateAppTheme]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAppTheme[P]>
      : GetScalarType<T[P], AggregateAppTheme[P]>
  }




  export type AppThemeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AppThemeWhereInput
    orderBy?: AppThemeOrderByWithAggregationInput | AppThemeOrderByWithAggregationInput[]
    by: AppThemeScalarFieldEnum[] | AppThemeScalarFieldEnum
    having?: AppThemeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AppThemeCountAggregateInputType | true
    _min?: AppThemeMinAggregateInputType
    _max?: AppThemeMaxAggregateInputType
  }

  export type AppThemeGroupByOutputType = {
    id: string
    name: string
    is_default: boolean
    primary_color: string
    secondary_color: string
    accent_color: string
    background_color: string
    surface_color: string
    text_primary: string
    text_secondary: string
    border_color: string
    gradient_start: string
    gradient_end: string
    created_at: Date
    _count: AppThemeCountAggregateOutputType | null
    _min: AppThemeMinAggregateOutputType | null
    _max: AppThemeMaxAggregateOutputType | null
  }

  type GetAppThemeGroupByPayload<T extends AppThemeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AppThemeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AppThemeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AppThemeGroupByOutputType[P]>
            : GetScalarType<T[P], AppThemeGroupByOutputType[P]>
        }
      >
    >


  export type AppThemeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    is_default?: boolean
    primary_color?: boolean
    secondary_color?: boolean
    accent_color?: boolean
    background_color?: boolean
    surface_color?: boolean
    text_primary?: boolean
    text_secondary?: boolean
    border_color?: boolean
    gradient_start?: boolean
    gradient_end?: boolean
    created_at?: boolean
  }, ExtArgs["result"]["appTheme"]>

  export type AppThemeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    is_default?: boolean
    primary_color?: boolean
    secondary_color?: boolean
    accent_color?: boolean
    background_color?: boolean
    surface_color?: boolean
    text_primary?: boolean
    text_secondary?: boolean
    border_color?: boolean
    gradient_start?: boolean
    gradient_end?: boolean
    created_at?: boolean
  }, ExtArgs["result"]["appTheme"]>

  export type AppThemeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    is_default?: boolean
    primary_color?: boolean
    secondary_color?: boolean
    accent_color?: boolean
    background_color?: boolean
    surface_color?: boolean
    text_primary?: boolean
    text_secondary?: boolean
    border_color?: boolean
    gradient_start?: boolean
    gradient_end?: boolean
    created_at?: boolean
  }, ExtArgs["result"]["appTheme"]>

  export type AppThemeSelectScalar = {
    id?: boolean
    name?: boolean
    is_default?: boolean
    primary_color?: boolean
    secondary_color?: boolean
    accent_color?: boolean
    background_color?: boolean
    surface_color?: boolean
    text_primary?: boolean
    text_secondary?: boolean
    border_color?: boolean
    gradient_start?: boolean
    gradient_end?: boolean
    created_at?: boolean
  }

  export type AppThemeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "is_default" | "primary_color" | "secondary_color" | "accent_color" | "background_color" | "surface_color" | "text_primary" | "text_secondary" | "border_color" | "gradient_start" | "gradient_end" | "created_at", ExtArgs["result"]["appTheme"]>

  export type $AppThemePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AppTheme"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      is_default: boolean
      primary_color: string
      secondary_color: string
      accent_color: string
      background_color: string
      surface_color: string
      text_primary: string
      text_secondary: string
      border_color: string
      gradient_start: string
      gradient_end: string
      created_at: Date
    }, ExtArgs["result"]["appTheme"]>
    composites: {}
  }

  type AppThemeGetPayload<S extends boolean | null | undefined | AppThemeDefaultArgs> = $Result.GetResult<Prisma.$AppThemePayload, S>

  type AppThemeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AppThemeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AppThemeCountAggregateInputType | true
    }

  export interface AppThemeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AppTheme'], meta: { name: 'AppTheme' } }
    /**
     * Find zero or one AppTheme that matches the filter.
     * @param {AppThemeFindUniqueArgs} args - Arguments to find a AppTheme
     * @example
     * // Get one AppTheme
     * const appTheme = await prisma.appTheme.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AppThemeFindUniqueArgs>(args: SelectSubset<T, AppThemeFindUniqueArgs<ExtArgs>>): Prisma__AppThemeClient<$Result.GetResult<Prisma.$AppThemePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one AppTheme that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AppThemeFindUniqueOrThrowArgs} args - Arguments to find a AppTheme
     * @example
     * // Get one AppTheme
     * const appTheme = await prisma.appTheme.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AppThemeFindUniqueOrThrowArgs>(args: SelectSubset<T, AppThemeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AppThemeClient<$Result.GetResult<Prisma.$AppThemePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AppTheme that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppThemeFindFirstArgs} args - Arguments to find a AppTheme
     * @example
     * // Get one AppTheme
     * const appTheme = await prisma.appTheme.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AppThemeFindFirstArgs>(args?: SelectSubset<T, AppThemeFindFirstArgs<ExtArgs>>): Prisma__AppThemeClient<$Result.GetResult<Prisma.$AppThemePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AppTheme that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppThemeFindFirstOrThrowArgs} args - Arguments to find a AppTheme
     * @example
     * // Get one AppTheme
     * const appTheme = await prisma.appTheme.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AppThemeFindFirstOrThrowArgs>(args?: SelectSubset<T, AppThemeFindFirstOrThrowArgs<ExtArgs>>): Prisma__AppThemeClient<$Result.GetResult<Prisma.$AppThemePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AppThemes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppThemeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AppThemes
     * const appThemes = await prisma.appTheme.findMany()
     * 
     * // Get first 10 AppThemes
     * const appThemes = await prisma.appTheme.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const appThemeWithIdOnly = await prisma.appTheme.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AppThemeFindManyArgs>(args?: SelectSubset<T, AppThemeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AppThemePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a AppTheme.
     * @param {AppThemeCreateArgs} args - Arguments to create a AppTheme.
     * @example
     * // Create one AppTheme
     * const AppTheme = await prisma.appTheme.create({
     *   data: {
     *     // ... data to create a AppTheme
     *   }
     * })
     * 
     */
    create<T extends AppThemeCreateArgs>(args: SelectSubset<T, AppThemeCreateArgs<ExtArgs>>): Prisma__AppThemeClient<$Result.GetResult<Prisma.$AppThemePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many AppThemes.
     * @param {AppThemeCreateManyArgs} args - Arguments to create many AppThemes.
     * @example
     * // Create many AppThemes
     * const appTheme = await prisma.appTheme.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AppThemeCreateManyArgs>(args?: SelectSubset<T, AppThemeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AppThemes and returns the data saved in the database.
     * @param {AppThemeCreateManyAndReturnArgs} args - Arguments to create many AppThemes.
     * @example
     * // Create many AppThemes
     * const appTheme = await prisma.appTheme.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AppThemes and only return the `id`
     * const appThemeWithIdOnly = await prisma.appTheme.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AppThemeCreateManyAndReturnArgs>(args?: SelectSubset<T, AppThemeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AppThemePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a AppTheme.
     * @param {AppThemeDeleteArgs} args - Arguments to delete one AppTheme.
     * @example
     * // Delete one AppTheme
     * const AppTheme = await prisma.appTheme.delete({
     *   where: {
     *     // ... filter to delete one AppTheme
     *   }
     * })
     * 
     */
    delete<T extends AppThemeDeleteArgs>(args: SelectSubset<T, AppThemeDeleteArgs<ExtArgs>>): Prisma__AppThemeClient<$Result.GetResult<Prisma.$AppThemePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one AppTheme.
     * @param {AppThemeUpdateArgs} args - Arguments to update one AppTheme.
     * @example
     * // Update one AppTheme
     * const appTheme = await prisma.appTheme.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AppThemeUpdateArgs>(args: SelectSubset<T, AppThemeUpdateArgs<ExtArgs>>): Prisma__AppThemeClient<$Result.GetResult<Prisma.$AppThemePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more AppThemes.
     * @param {AppThemeDeleteManyArgs} args - Arguments to filter AppThemes to delete.
     * @example
     * // Delete a few AppThemes
     * const { count } = await prisma.appTheme.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AppThemeDeleteManyArgs>(args?: SelectSubset<T, AppThemeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AppThemes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppThemeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AppThemes
     * const appTheme = await prisma.appTheme.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AppThemeUpdateManyArgs>(args: SelectSubset<T, AppThemeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AppThemes and returns the data updated in the database.
     * @param {AppThemeUpdateManyAndReturnArgs} args - Arguments to update many AppThemes.
     * @example
     * // Update many AppThemes
     * const appTheme = await prisma.appTheme.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more AppThemes and only return the `id`
     * const appThemeWithIdOnly = await prisma.appTheme.updateManyAndReturn({
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
    updateManyAndReturn<T extends AppThemeUpdateManyAndReturnArgs>(args: SelectSubset<T, AppThemeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AppThemePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one AppTheme.
     * @param {AppThemeUpsertArgs} args - Arguments to update or create a AppTheme.
     * @example
     * // Update or create a AppTheme
     * const appTheme = await prisma.appTheme.upsert({
     *   create: {
     *     // ... data to create a AppTheme
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AppTheme we want to update
     *   }
     * })
     */
    upsert<T extends AppThemeUpsertArgs>(args: SelectSubset<T, AppThemeUpsertArgs<ExtArgs>>): Prisma__AppThemeClient<$Result.GetResult<Prisma.$AppThemePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of AppThemes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppThemeCountArgs} args - Arguments to filter AppThemes to count.
     * @example
     * // Count the number of AppThemes
     * const count = await prisma.appTheme.count({
     *   where: {
     *     // ... the filter for the AppThemes we want to count
     *   }
     * })
    **/
    count<T extends AppThemeCountArgs>(
      args?: Subset<T, AppThemeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AppThemeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AppTheme.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppThemeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AppThemeAggregateArgs>(args: Subset<T, AppThemeAggregateArgs>): Prisma.PrismaPromise<GetAppThemeAggregateType<T>>

    /**
     * Group by AppTheme.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppThemeGroupByArgs} args - Group by arguments.
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
      T extends AppThemeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AppThemeGroupByArgs['orderBy'] }
        : { orderBy?: AppThemeGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AppThemeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAppThemeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AppTheme model
   */
  readonly fields: AppThemeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AppTheme.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AppThemeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the AppTheme model
   */
  interface AppThemeFieldRefs {
    readonly id: FieldRef<"AppTheme", 'String'>
    readonly name: FieldRef<"AppTheme", 'String'>
    readonly is_default: FieldRef<"AppTheme", 'Boolean'>
    readonly primary_color: FieldRef<"AppTheme", 'String'>
    readonly secondary_color: FieldRef<"AppTheme", 'String'>
    readonly accent_color: FieldRef<"AppTheme", 'String'>
    readonly background_color: FieldRef<"AppTheme", 'String'>
    readonly surface_color: FieldRef<"AppTheme", 'String'>
    readonly text_primary: FieldRef<"AppTheme", 'String'>
    readonly text_secondary: FieldRef<"AppTheme", 'String'>
    readonly border_color: FieldRef<"AppTheme", 'String'>
    readonly gradient_start: FieldRef<"AppTheme", 'String'>
    readonly gradient_end: FieldRef<"AppTheme", 'String'>
    readonly created_at: FieldRef<"AppTheme", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * AppTheme findUnique
   */
  export type AppThemeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AppTheme
     */
    select?: AppThemeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AppTheme
     */
    omit?: AppThemeOmit<ExtArgs> | null
    /**
     * Filter, which AppTheme to fetch.
     */
    where: AppThemeWhereUniqueInput
  }

  /**
   * AppTheme findUniqueOrThrow
   */
  export type AppThemeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AppTheme
     */
    select?: AppThemeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AppTheme
     */
    omit?: AppThemeOmit<ExtArgs> | null
    /**
     * Filter, which AppTheme to fetch.
     */
    where: AppThemeWhereUniqueInput
  }

  /**
   * AppTheme findFirst
   */
  export type AppThemeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AppTheme
     */
    select?: AppThemeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AppTheme
     */
    omit?: AppThemeOmit<ExtArgs> | null
    /**
     * Filter, which AppTheme to fetch.
     */
    where?: AppThemeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AppThemes to fetch.
     */
    orderBy?: AppThemeOrderByWithRelationInput | AppThemeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AppThemes.
     */
    cursor?: AppThemeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AppThemes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AppThemes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AppThemes.
     */
    distinct?: AppThemeScalarFieldEnum | AppThemeScalarFieldEnum[]
  }

  /**
   * AppTheme findFirstOrThrow
   */
  export type AppThemeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AppTheme
     */
    select?: AppThemeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AppTheme
     */
    omit?: AppThemeOmit<ExtArgs> | null
    /**
     * Filter, which AppTheme to fetch.
     */
    where?: AppThemeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AppThemes to fetch.
     */
    orderBy?: AppThemeOrderByWithRelationInput | AppThemeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AppThemes.
     */
    cursor?: AppThemeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AppThemes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AppThemes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AppThemes.
     */
    distinct?: AppThemeScalarFieldEnum | AppThemeScalarFieldEnum[]
  }

  /**
   * AppTheme findMany
   */
  export type AppThemeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AppTheme
     */
    select?: AppThemeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AppTheme
     */
    omit?: AppThemeOmit<ExtArgs> | null
    /**
     * Filter, which AppThemes to fetch.
     */
    where?: AppThemeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AppThemes to fetch.
     */
    orderBy?: AppThemeOrderByWithRelationInput | AppThemeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AppThemes.
     */
    cursor?: AppThemeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AppThemes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AppThemes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AppThemes.
     */
    distinct?: AppThemeScalarFieldEnum | AppThemeScalarFieldEnum[]
  }

  /**
   * AppTheme create
   */
  export type AppThemeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AppTheme
     */
    select?: AppThemeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AppTheme
     */
    omit?: AppThemeOmit<ExtArgs> | null
    /**
     * The data needed to create a AppTheme.
     */
    data: XOR<AppThemeCreateInput, AppThemeUncheckedCreateInput>
  }

  /**
   * AppTheme createMany
   */
  export type AppThemeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AppThemes.
     */
    data: AppThemeCreateManyInput | AppThemeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AppTheme createManyAndReturn
   */
  export type AppThemeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AppTheme
     */
    select?: AppThemeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AppTheme
     */
    omit?: AppThemeOmit<ExtArgs> | null
    /**
     * The data used to create many AppThemes.
     */
    data: AppThemeCreateManyInput | AppThemeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AppTheme update
   */
  export type AppThemeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AppTheme
     */
    select?: AppThemeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AppTheme
     */
    omit?: AppThemeOmit<ExtArgs> | null
    /**
     * The data needed to update a AppTheme.
     */
    data: XOR<AppThemeUpdateInput, AppThemeUncheckedUpdateInput>
    /**
     * Choose, which AppTheme to update.
     */
    where: AppThemeWhereUniqueInput
  }

  /**
   * AppTheme updateMany
   */
  export type AppThemeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AppThemes.
     */
    data: XOR<AppThemeUpdateManyMutationInput, AppThemeUncheckedUpdateManyInput>
    /**
     * Filter which AppThemes to update
     */
    where?: AppThemeWhereInput
    /**
     * Limit how many AppThemes to update.
     */
    limit?: number
  }

  /**
   * AppTheme updateManyAndReturn
   */
  export type AppThemeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AppTheme
     */
    select?: AppThemeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AppTheme
     */
    omit?: AppThemeOmit<ExtArgs> | null
    /**
     * The data used to update AppThemes.
     */
    data: XOR<AppThemeUpdateManyMutationInput, AppThemeUncheckedUpdateManyInput>
    /**
     * Filter which AppThemes to update
     */
    where?: AppThemeWhereInput
    /**
     * Limit how many AppThemes to update.
     */
    limit?: number
  }

  /**
   * AppTheme upsert
   */
  export type AppThemeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AppTheme
     */
    select?: AppThemeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AppTheme
     */
    omit?: AppThemeOmit<ExtArgs> | null
    /**
     * The filter to search for the AppTheme to update in case it exists.
     */
    where: AppThemeWhereUniqueInput
    /**
     * In case the AppTheme found by the `where` argument doesn't exist, create a new AppTheme with this data.
     */
    create: XOR<AppThemeCreateInput, AppThemeUncheckedCreateInput>
    /**
     * In case the AppTheme was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AppThemeUpdateInput, AppThemeUncheckedUpdateInput>
  }

  /**
   * AppTheme delete
   */
  export type AppThemeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AppTheme
     */
    select?: AppThemeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AppTheme
     */
    omit?: AppThemeOmit<ExtArgs> | null
    /**
     * Filter which AppTheme to delete.
     */
    where: AppThemeWhereUniqueInput
  }

  /**
   * AppTheme deleteMany
   */
  export type AppThemeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AppThemes to delete
     */
    where?: AppThemeWhereInput
    /**
     * Limit how many AppThemes to delete.
     */
    limit?: number
  }

  /**
   * AppTheme without action
   */
  export type AppThemeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AppTheme
     */
    select?: AppThemeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AppTheme
     */
    omit?: AppThemeOmit<ExtArgs> | null
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


  export const StyleWorldScalarFieldEnum: {
    id: 'id',
    name: 'name',
    slug: 'slug',
    tagline: 'tagline',
    core_energy: 'core_energy',
    description: 'description',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type StyleWorldScalarFieldEnum = (typeof StyleWorldScalarFieldEnum)[keyof typeof StyleWorldScalarFieldEnum]


  export const SubstyleScalarFieldEnum: {
    id: 'id',
    style_world_id: 'style_world_id',
    name: 'name',
    slug: 'slug',
    tagline: 'tagline',
    description: 'description',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type SubstyleScalarFieldEnum = (typeof SubstyleScalarFieldEnum)[keyof typeof SubstyleScalarFieldEnum]


  export const OutfitScalarFieldEnum: {
    id: 'id',
    substyle_id: 'substyle_id',
    title: 'title',
    one_liner: 'one_liner',
    overall_vibe: 'overall_vibe',
    aesthetic_keywords: 'aesthetic_keywords',
    is_tried: 'is_tried',
    is_favorite: 'is_favorite',
    notes: 'notes',
    outfit_details: 'outfit_details',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type OutfitScalarFieldEnum = (typeof OutfitScalarFieldEnum)[keyof typeof OutfitScalarFieldEnum]


  export const OutfitImageScalarFieldEnum: {
    id: 'id',
    outfit_id: 'outfit_id',
    image_url: 'image_url',
    storage_path: 'storage_path',
    caption: 'caption',
    is_primary: 'is_primary',
    uploaded_at: 'uploaded_at'
  };

  export type OutfitImageScalarFieldEnum = (typeof OutfitImageScalarFieldEnum)[keyof typeof OutfitImageScalarFieldEnum]


  export const AppThemeScalarFieldEnum: {
    id: 'id',
    name: 'name',
    is_default: 'is_default',
    primary_color: 'primary_color',
    secondary_color: 'secondary_color',
    accent_color: 'accent_color',
    background_color: 'background_color',
    surface_color: 'surface_color',
    text_primary: 'text_primary',
    text_secondary: 'text_secondary',
    border_color: 'border_color',
    gradient_start: 'gradient_start',
    gradient_end: 'gradient_end',
    created_at: 'created_at'
  };

  export type AppThemeScalarFieldEnum = (typeof AppThemeScalarFieldEnum)[keyof typeof AppThemeScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const JsonNullValueInput: {
    JsonNull: typeof JsonNull
  };

  export type JsonNullValueInput = (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput]


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


  export const StyleWorldOrderByRelevanceFieldEnum: {
    id: 'id',
    name: 'name',
    slug: 'slug',
    tagline: 'tagline',
    core_energy: 'core_energy',
    description: 'description'
  };

  export type StyleWorldOrderByRelevanceFieldEnum = (typeof StyleWorldOrderByRelevanceFieldEnum)[keyof typeof StyleWorldOrderByRelevanceFieldEnum]


  export const SubstyleOrderByRelevanceFieldEnum: {
    id: 'id',
    style_world_id: 'style_world_id',
    name: 'name',
    slug: 'slug',
    tagline: 'tagline',
    description: 'description'
  };

  export type SubstyleOrderByRelevanceFieldEnum = (typeof SubstyleOrderByRelevanceFieldEnum)[keyof typeof SubstyleOrderByRelevanceFieldEnum]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  export const OutfitOrderByRelevanceFieldEnum: {
    id: 'id',
    substyle_id: 'substyle_id',
    title: 'title',
    one_liner: 'one_liner',
    overall_vibe: 'overall_vibe',
    aesthetic_keywords: 'aesthetic_keywords',
    notes: 'notes'
  };

  export type OutfitOrderByRelevanceFieldEnum = (typeof OutfitOrderByRelevanceFieldEnum)[keyof typeof OutfitOrderByRelevanceFieldEnum]


  export const OutfitImageOrderByRelevanceFieldEnum: {
    id: 'id',
    outfit_id: 'outfit_id',
    image_url: 'image_url',
    storage_path: 'storage_path',
    caption: 'caption'
  };

  export type OutfitImageOrderByRelevanceFieldEnum = (typeof OutfitImageOrderByRelevanceFieldEnum)[keyof typeof OutfitImageOrderByRelevanceFieldEnum]


  export const AppThemeOrderByRelevanceFieldEnum: {
    id: 'id',
    name: 'name',
    primary_color: 'primary_color',
    secondary_color: 'secondary_color',
    accent_color: 'accent_color',
    background_color: 'background_color',
    surface_color: 'surface_color',
    text_primary: 'text_primary',
    text_secondary: 'text_secondary',
    border_color: 'border_color',
    gradient_start: 'gradient_start',
    gradient_end: 'gradient_end'
  };

  export type AppThemeOrderByRelevanceFieldEnum = (typeof AppThemeOrderByRelevanceFieldEnum)[keyof typeof AppThemeOrderByRelevanceFieldEnum]


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
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    
  /**
   * Deep Input Types
   */


  export type StyleWorldWhereInput = {
    AND?: StyleWorldWhereInput | StyleWorldWhereInput[]
    OR?: StyleWorldWhereInput[]
    NOT?: StyleWorldWhereInput | StyleWorldWhereInput[]
    id?: UuidFilter<"StyleWorld"> | string
    name?: StringFilter<"StyleWorld"> | string
    slug?: StringFilter<"StyleWorld"> | string
    tagline?: StringNullableFilter<"StyleWorld"> | string | null
    core_energy?: StringNullableFilter<"StyleWorld"> | string | null
    description?: StringNullableFilter<"StyleWorld"> | string | null
    created_at?: DateTimeFilter<"StyleWorld"> | Date | string
    updated_at?: DateTimeFilter<"StyleWorld"> | Date | string
    substyles?: SubstyleListRelationFilter
  }

  export type StyleWorldOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    tagline?: SortOrderInput | SortOrder
    core_energy?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    substyles?: SubstyleOrderByRelationAggregateInput
    _relevance?: StyleWorldOrderByRelevanceInput
  }

  export type StyleWorldWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    slug?: string
    AND?: StyleWorldWhereInput | StyleWorldWhereInput[]
    OR?: StyleWorldWhereInput[]
    NOT?: StyleWorldWhereInput | StyleWorldWhereInput[]
    name?: StringFilter<"StyleWorld"> | string
    tagline?: StringNullableFilter<"StyleWorld"> | string | null
    core_energy?: StringNullableFilter<"StyleWorld"> | string | null
    description?: StringNullableFilter<"StyleWorld"> | string | null
    created_at?: DateTimeFilter<"StyleWorld"> | Date | string
    updated_at?: DateTimeFilter<"StyleWorld"> | Date | string
    substyles?: SubstyleListRelationFilter
  }, "id" | "slug">

  export type StyleWorldOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    tagline?: SortOrderInput | SortOrder
    core_energy?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: StyleWorldCountOrderByAggregateInput
    _max?: StyleWorldMaxOrderByAggregateInput
    _min?: StyleWorldMinOrderByAggregateInput
  }

  export type StyleWorldScalarWhereWithAggregatesInput = {
    AND?: StyleWorldScalarWhereWithAggregatesInput | StyleWorldScalarWhereWithAggregatesInput[]
    OR?: StyleWorldScalarWhereWithAggregatesInput[]
    NOT?: StyleWorldScalarWhereWithAggregatesInput | StyleWorldScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"StyleWorld"> | string
    name?: StringWithAggregatesFilter<"StyleWorld"> | string
    slug?: StringWithAggregatesFilter<"StyleWorld"> | string
    tagline?: StringNullableWithAggregatesFilter<"StyleWorld"> | string | null
    core_energy?: StringNullableWithAggregatesFilter<"StyleWorld"> | string | null
    description?: StringNullableWithAggregatesFilter<"StyleWorld"> | string | null
    created_at?: DateTimeWithAggregatesFilter<"StyleWorld"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"StyleWorld"> | Date | string
  }

  export type SubstyleWhereInput = {
    AND?: SubstyleWhereInput | SubstyleWhereInput[]
    OR?: SubstyleWhereInput[]
    NOT?: SubstyleWhereInput | SubstyleWhereInput[]
    id?: UuidFilter<"Substyle"> | string
    style_world_id?: UuidFilter<"Substyle"> | string
    name?: StringFilter<"Substyle"> | string
    slug?: StringFilter<"Substyle"> | string
    tagline?: StringNullableFilter<"Substyle"> | string | null
    description?: StringNullableFilter<"Substyle"> | string | null
    created_at?: DateTimeFilter<"Substyle"> | Date | string
    updated_at?: DateTimeFilter<"Substyle"> | Date | string
    style_world?: XOR<StyleWorldScalarRelationFilter, StyleWorldWhereInput>
    outfits?: OutfitListRelationFilter
  }

  export type SubstyleOrderByWithRelationInput = {
    id?: SortOrder
    style_world_id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    tagline?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    style_world?: StyleWorldOrderByWithRelationInput
    outfits?: OutfitOrderByRelationAggregateInput
    _relevance?: SubstyleOrderByRelevanceInput
  }

  export type SubstyleWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    slug?: string
    AND?: SubstyleWhereInput | SubstyleWhereInput[]
    OR?: SubstyleWhereInput[]
    NOT?: SubstyleWhereInput | SubstyleWhereInput[]
    style_world_id?: UuidFilter<"Substyle"> | string
    name?: StringFilter<"Substyle"> | string
    tagline?: StringNullableFilter<"Substyle"> | string | null
    description?: StringNullableFilter<"Substyle"> | string | null
    created_at?: DateTimeFilter<"Substyle"> | Date | string
    updated_at?: DateTimeFilter<"Substyle"> | Date | string
    style_world?: XOR<StyleWorldScalarRelationFilter, StyleWorldWhereInput>
    outfits?: OutfitListRelationFilter
  }, "id" | "slug">

  export type SubstyleOrderByWithAggregationInput = {
    id?: SortOrder
    style_world_id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    tagline?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: SubstyleCountOrderByAggregateInput
    _max?: SubstyleMaxOrderByAggregateInput
    _min?: SubstyleMinOrderByAggregateInput
  }

  export type SubstyleScalarWhereWithAggregatesInput = {
    AND?: SubstyleScalarWhereWithAggregatesInput | SubstyleScalarWhereWithAggregatesInput[]
    OR?: SubstyleScalarWhereWithAggregatesInput[]
    NOT?: SubstyleScalarWhereWithAggregatesInput | SubstyleScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"Substyle"> | string
    style_world_id?: UuidWithAggregatesFilter<"Substyle"> | string
    name?: StringWithAggregatesFilter<"Substyle"> | string
    slug?: StringWithAggregatesFilter<"Substyle"> | string
    tagline?: StringNullableWithAggregatesFilter<"Substyle"> | string | null
    description?: StringNullableWithAggregatesFilter<"Substyle"> | string | null
    created_at?: DateTimeWithAggregatesFilter<"Substyle"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"Substyle"> | Date | string
  }

  export type OutfitWhereInput = {
    AND?: OutfitWhereInput | OutfitWhereInput[]
    OR?: OutfitWhereInput[]
    NOT?: OutfitWhereInput | OutfitWhereInput[]
    id?: UuidFilter<"Outfit"> | string
    substyle_id?: UuidFilter<"Outfit"> | string
    title?: StringFilter<"Outfit"> | string
    one_liner?: StringNullableFilter<"Outfit"> | string | null
    overall_vibe?: StringNullableFilter<"Outfit"> | string | null
    aesthetic_keywords?: StringNullableListFilter<"Outfit">
    is_tried?: BoolFilter<"Outfit"> | boolean
    is_favorite?: BoolFilter<"Outfit"> | boolean
    notes?: StringNullableFilter<"Outfit"> | string | null
    outfit_details?: JsonFilter<"Outfit">
    created_at?: DateTimeFilter<"Outfit"> | Date | string
    updated_at?: DateTimeFilter<"Outfit"> | Date | string
    substyle?: XOR<SubstyleScalarRelationFilter, SubstyleWhereInput>
    images?: OutfitImageListRelationFilter
  }

  export type OutfitOrderByWithRelationInput = {
    id?: SortOrder
    substyle_id?: SortOrder
    title?: SortOrder
    one_liner?: SortOrderInput | SortOrder
    overall_vibe?: SortOrderInput | SortOrder
    aesthetic_keywords?: SortOrder
    is_tried?: SortOrder
    is_favorite?: SortOrder
    notes?: SortOrderInput | SortOrder
    outfit_details?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    substyle?: SubstyleOrderByWithRelationInput
    images?: OutfitImageOrderByRelationAggregateInput
    _relevance?: OutfitOrderByRelevanceInput
  }

  export type OutfitWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: OutfitWhereInput | OutfitWhereInput[]
    OR?: OutfitWhereInput[]
    NOT?: OutfitWhereInput | OutfitWhereInput[]
    substyle_id?: UuidFilter<"Outfit"> | string
    title?: StringFilter<"Outfit"> | string
    one_liner?: StringNullableFilter<"Outfit"> | string | null
    overall_vibe?: StringNullableFilter<"Outfit"> | string | null
    aesthetic_keywords?: StringNullableListFilter<"Outfit">
    is_tried?: BoolFilter<"Outfit"> | boolean
    is_favorite?: BoolFilter<"Outfit"> | boolean
    notes?: StringNullableFilter<"Outfit"> | string | null
    outfit_details?: JsonFilter<"Outfit">
    created_at?: DateTimeFilter<"Outfit"> | Date | string
    updated_at?: DateTimeFilter<"Outfit"> | Date | string
    substyle?: XOR<SubstyleScalarRelationFilter, SubstyleWhereInput>
    images?: OutfitImageListRelationFilter
  }, "id">

  export type OutfitOrderByWithAggregationInput = {
    id?: SortOrder
    substyle_id?: SortOrder
    title?: SortOrder
    one_liner?: SortOrderInput | SortOrder
    overall_vibe?: SortOrderInput | SortOrder
    aesthetic_keywords?: SortOrder
    is_tried?: SortOrder
    is_favorite?: SortOrder
    notes?: SortOrderInput | SortOrder
    outfit_details?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: OutfitCountOrderByAggregateInput
    _max?: OutfitMaxOrderByAggregateInput
    _min?: OutfitMinOrderByAggregateInput
  }

  export type OutfitScalarWhereWithAggregatesInput = {
    AND?: OutfitScalarWhereWithAggregatesInput | OutfitScalarWhereWithAggregatesInput[]
    OR?: OutfitScalarWhereWithAggregatesInput[]
    NOT?: OutfitScalarWhereWithAggregatesInput | OutfitScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"Outfit"> | string
    substyle_id?: UuidWithAggregatesFilter<"Outfit"> | string
    title?: StringWithAggregatesFilter<"Outfit"> | string
    one_liner?: StringNullableWithAggregatesFilter<"Outfit"> | string | null
    overall_vibe?: StringNullableWithAggregatesFilter<"Outfit"> | string | null
    aesthetic_keywords?: StringNullableListFilter<"Outfit">
    is_tried?: BoolWithAggregatesFilter<"Outfit"> | boolean
    is_favorite?: BoolWithAggregatesFilter<"Outfit"> | boolean
    notes?: StringNullableWithAggregatesFilter<"Outfit"> | string | null
    outfit_details?: JsonWithAggregatesFilter<"Outfit">
    created_at?: DateTimeWithAggregatesFilter<"Outfit"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"Outfit"> | Date | string
  }

  export type OutfitImageWhereInput = {
    AND?: OutfitImageWhereInput | OutfitImageWhereInput[]
    OR?: OutfitImageWhereInput[]
    NOT?: OutfitImageWhereInput | OutfitImageWhereInput[]
    id?: UuidFilter<"OutfitImage"> | string
    outfit_id?: UuidFilter<"OutfitImage"> | string
    image_url?: StringFilter<"OutfitImage"> | string
    storage_path?: StringFilter<"OutfitImage"> | string
    caption?: StringNullableFilter<"OutfitImage"> | string | null
    is_primary?: BoolFilter<"OutfitImage"> | boolean
    uploaded_at?: DateTimeFilter<"OutfitImage"> | Date | string
    outfit?: XOR<OutfitScalarRelationFilter, OutfitWhereInput>
  }

  export type OutfitImageOrderByWithRelationInput = {
    id?: SortOrder
    outfit_id?: SortOrder
    image_url?: SortOrder
    storage_path?: SortOrder
    caption?: SortOrderInput | SortOrder
    is_primary?: SortOrder
    uploaded_at?: SortOrder
    outfit?: OutfitOrderByWithRelationInput
    _relevance?: OutfitImageOrderByRelevanceInput
  }

  export type OutfitImageWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: OutfitImageWhereInput | OutfitImageWhereInput[]
    OR?: OutfitImageWhereInput[]
    NOT?: OutfitImageWhereInput | OutfitImageWhereInput[]
    outfit_id?: UuidFilter<"OutfitImage"> | string
    image_url?: StringFilter<"OutfitImage"> | string
    storage_path?: StringFilter<"OutfitImage"> | string
    caption?: StringNullableFilter<"OutfitImage"> | string | null
    is_primary?: BoolFilter<"OutfitImage"> | boolean
    uploaded_at?: DateTimeFilter<"OutfitImage"> | Date | string
    outfit?: XOR<OutfitScalarRelationFilter, OutfitWhereInput>
  }, "id">

  export type OutfitImageOrderByWithAggregationInput = {
    id?: SortOrder
    outfit_id?: SortOrder
    image_url?: SortOrder
    storage_path?: SortOrder
    caption?: SortOrderInput | SortOrder
    is_primary?: SortOrder
    uploaded_at?: SortOrder
    _count?: OutfitImageCountOrderByAggregateInput
    _max?: OutfitImageMaxOrderByAggregateInput
    _min?: OutfitImageMinOrderByAggregateInput
  }

  export type OutfitImageScalarWhereWithAggregatesInput = {
    AND?: OutfitImageScalarWhereWithAggregatesInput | OutfitImageScalarWhereWithAggregatesInput[]
    OR?: OutfitImageScalarWhereWithAggregatesInput[]
    NOT?: OutfitImageScalarWhereWithAggregatesInput | OutfitImageScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"OutfitImage"> | string
    outfit_id?: UuidWithAggregatesFilter<"OutfitImage"> | string
    image_url?: StringWithAggregatesFilter<"OutfitImage"> | string
    storage_path?: StringWithAggregatesFilter<"OutfitImage"> | string
    caption?: StringNullableWithAggregatesFilter<"OutfitImage"> | string | null
    is_primary?: BoolWithAggregatesFilter<"OutfitImage"> | boolean
    uploaded_at?: DateTimeWithAggregatesFilter<"OutfitImage"> | Date | string
  }

  export type AppThemeWhereInput = {
    AND?: AppThemeWhereInput | AppThemeWhereInput[]
    OR?: AppThemeWhereInput[]
    NOT?: AppThemeWhereInput | AppThemeWhereInput[]
    id?: UuidFilter<"AppTheme"> | string
    name?: StringFilter<"AppTheme"> | string
    is_default?: BoolFilter<"AppTheme"> | boolean
    primary_color?: StringFilter<"AppTheme"> | string
    secondary_color?: StringFilter<"AppTheme"> | string
    accent_color?: StringFilter<"AppTheme"> | string
    background_color?: StringFilter<"AppTheme"> | string
    surface_color?: StringFilter<"AppTheme"> | string
    text_primary?: StringFilter<"AppTheme"> | string
    text_secondary?: StringFilter<"AppTheme"> | string
    border_color?: StringFilter<"AppTheme"> | string
    gradient_start?: StringFilter<"AppTheme"> | string
    gradient_end?: StringFilter<"AppTheme"> | string
    created_at?: DateTimeFilter<"AppTheme"> | Date | string
  }

  export type AppThemeOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    is_default?: SortOrder
    primary_color?: SortOrder
    secondary_color?: SortOrder
    accent_color?: SortOrder
    background_color?: SortOrder
    surface_color?: SortOrder
    text_primary?: SortOrder
    text_secondary?: SortOrder
    border_color?: SortOrder
    gradient_start?: SortOrder
    gradient_end?: SortOrder
    created_at?: SortOrder
    _relevance?: AppThemeOrderByRelevanceInput
  }

  export type AppThemeWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AppThemeWhereInput | AppThemeWhereInput[]
    OR?: AppThemeWhereInput[]
    NOT?: AppThemeWhereInput | AppThemeWhereInput[]
    name?: StringFilter<"AppTheme"> | string
    is_default?: BoolFilter<"AppTheme"> | boolean
    primary_color?: StringFilter<"AppTheme"> | string
    secondary_color?: StringFilter<"AppTheme"> | string
    accent_color?: StringFilter<"AppTheme"> | string
    background_color?: StringFilter<"AppTheme"> | string
    surface_color?: StringFilter<"AppTheme"> | string
    text_primary?: StringFilter<"AppTheme"> | string
    text_secondary?: StringFilter<"AppTheme"> | string
    border_color?: StringFilter<"AppTheme"> | string
    gradient_start?: StringFilter<"AppTheme"> | string
    gradient_end?: StringFilter<"AppTheme"> | string
    created_at?: DateTimeFilter<"AppTheme"> | Date | string
  }, "id">

  export type AppThemeOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    is_default?: SortOrder
    primary_color?: SortOrder
    secondary_color?: SortOrder
    accent_color?: SortOrder
    background_color?: SortOrder
    surface_color?: SortOrder
    text_primary?: SortOrder
    text_secondary?: SortOrder
    border_color?: SortOrder
    gradient_start?: SortOrder
    gradient_end?: SortOrder
    created_at?: SortOrder
    _count?: AppThemeCountOrderByAggregateInput
    _max?: AppThemeMaxOrderByAggregateInput
    _min?: AppThemeMinOrderByAggregateInput
  }

  export type AppThemeScalarWhereWithAggregatesInput = {
    AND?: AppThemeScalarWhereWithAggregatesInput | AppThemeScalarWhereWithAggregatesInput[]
    OR?: AppThemeScalarWhereWithAggregatesInput[]
    NOT?: AppThemeScalarWhereWithAggregatesInput | AppThemeScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"AppTheme"> | string
    name?: StringWithAggregatesFilter<"AppTheme"> | string
    is_default?: BoolWithAggregatesFilter<"AppTheme"> | boolean
    primary_color?: StringWithAggregatesFilter<"AppTheme"> | string
    secondary_color?: StringWithAggregatesFilter<"AppTheme"> | string
    accent_color?: StringWithAggregatesFilter<"AppTheme"> | string
    background_color?: StringWithAggregatesFilter<"AppTheme"> | string
    surface_color?: StringWithAggregatesFilter<"AppTheme"> | string
    text_primary?: StringWithAggregatesFilter<"AppTheme"> | string
    text_secondary?: StringWithAggregatesFilter<"AppTheme"> | string
    border_color?: StringWithAggregatesFilter<"AppTheme"> | string
    gradient_start?: StringWithAggregatesFilter<"AppTheme"> | string
    gradient_end?: StringWithAggregatesFilter<"AppTheme"> | string
    created_at?: DateTimeWithAggregatesFilter<"AppTheme"> | Date | string
  }

  export type StyleWorldCreateInput = {
    id?: string
    name: string
    slug: string
    tagline?: string | null
    core_energy?: string | null
    description?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    substyles?: SubstyleCreateNestedManyWithoutStyle_worldInput
  }

  export type StyleWorldUncheckedCreateInput = {
    id?: string
    name: string
    slug: string
    tagline?: string | null
    core_energy?: string | null
    description?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    substyles?: SubstyleUncheckedCreateNestedManyWithoutStyle_worldInput
  }

  export type StyleWorldUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    tagline?: NullableStringFieldUpdateOperationsInput | string | null
    core_energy?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    substyles?: SubstyleUpdateManyWithoutStyle_worldNestedInput
  }

  export type StyleWorldUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    tagline?: NullableStringFieldUpdateOperationsInput | string | null
    core_energy?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    substyles?: SubstyleUncheckedUpdateManyWithoutStyle_worldNestedInput
  }

  export type StyleWorldCreateManyInput = {
    id?: string
    name: string
    slug: string
    tagline?: string | null
    core_energy?: string | null
    description?: string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type StyleWorldUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    tagline?: NullableStringFieldUpdateOperationsInput | string | null
    core_energy?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StyleWorldUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    tagline?: NullableStringFieldUpdateOperationsInput | string | null
    core_energy?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubstyleCreateInput = {
    id?: string
    name: string
    slug: string
    tagline?: string | null
    description?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    style_world: StyleWorldCreateNestedOneWithoutSubstylesInput
    outfits?: OutfitCreateNestedManyWithoutSubstyleInput
  }

  export type SubstyleUncheckedCreateInput = {
    id?: string
    style_world_id: string
    name: string
    slug: string
    tagline?: string | null
    description?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    outfits?: OutfitUncheckedCreateNestedManyWithoutSubstyleInput
  }

  export type SubstyleUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    tagline?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    style_world?: StyleWorldUpdateOneRequiredWithoutSubstylesNestedInput
    outfits?: OutfitUpdateManyWithoutSubstyleNestedInput
  }

  export type SubstyleUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    style_world_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    tagline?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    outfits?: OutfitUncheckedUpdateManyWithoutSubstyleNestedInput
  }

  export type SubstyleCreateManyInput = {
    id?: string
    style_world_id: string
    name: string
    slug: string
    tagline?: string | null
    description?: string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type SubstyleUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    tagline?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubstyleUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    style_world_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    tagline?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OutfitCreateInput = {
    id?: string
    title: string
    one_liner?: string | null
    overall_vibe?: string | null
    aesthetic_keywords?: OutfitCreateaesthetic_keywordsInput | string[]
    is_tried?: boolean
    is_favorite?: boolean
    notes?: string | null
    outfit_details: JsonNullValueInput | InputJsonValue
    created_at?: Date | string
    updated_at?: Date | string
    substyle: SubstyleCreateNestedOneWithoutOutfitsInput
    images?: OutfitImageCreateNestedManyWithoutOutfitInput
  }

  export type OutfitUncheckedCreateInput = {
    id?: string
    substyle_id: string
    title: string
    one_liner?: string | null
    overall_vibe?: string | null
    aesthetic_keywords?: OutfitCreateaesthetic_keywordsInput | string[]
    is_tried?: boolean
    is_favorite?: boolean
    notes?: string | null
    outfit_details: JsonNullValueInput | InputJsonValue
    created_at?: Date | string
    updated_at?: Date | string
    images?: OutfitImageUncheckedCreateNestedManyWithoutOutfitInput
  }

  export type OutfitUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    one_liner?: NullableStringFieldUpdateOperationsInput | string | null
    overall_vibe?: NullableStringFieldUpdateOperationsInput | string | null
    aesthetic_keywords?: OutfitUpdateaesthetic_keywordsInput | string[]
    is_tried?: BoolFieldUpdateOperationsInput | boolean
    is_favorite?: BoolFieldUpdateOperationsInput | boolean
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    outfit_details?: JsonNullValueInput | InputJsonValue
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    substyle?: SubstyleUpdateOneRequiredWithoutOutfitsNestedInput
    images?: OutfitImageUpdateManyWithoutOutfitNestedInput
  }

  export type OutfitUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    substyle_id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    one_liner?: NullableStringFieldUpdateOperationsInput | string | null
    overall_vibe?: NullableStringFieldUpdateOperationsInput | string | null
    aesthetic_keywords?: OutfitUpdateaesthetic_keywordsInput | string[]
    is_tried?: BoolFieldUpdateOperationsInput | boolean
    is_favorite?: BoolFieldUpdateOperationsInput | boolean
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    outfit_details?: JsonNullValueInput | InputJsonValue
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    images?: OutfitImageUncheckedUpdateManyWithoutOutfitNestedInput
  }

  export type OutfitCreateManyInput = {
    id?: string
    substyle_id: string
    title: string
    one_liner?: string | null
    overall_vibe?: string | null
    aesthetic_keywords?: OutfitCreateaesthetic_keywordsInput | string[]
    is_tried?: boolean
    is_favorite?: boolean
    notes?: string | null
    outfit_details: JsonNullValueInput | InputJsonValue
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type OutfitUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    one_liner?: NullableStringFieldUpdateOperationsInput | string | null
    overall_vibe?: NullableStringFieldUpdateOperationsInput | string | null
    aesthetic_keywords?: OutfitUpdateaesthetic_keywordsInput | string[]
    is_tried?: BoolFieldUpdateOperationsInput | boolean
    is_favorite?: BoolFieldUpdateOperationsInput | boolean
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    outfit_details?: JsonNullValueInput | InputJsonValue
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OutfitUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    substyle_id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    one_liner?: NullableStringFieldUpdateOperationsInput | string | null
    overall_vibe?: NullableStringFieldUpdateOperationsInput | string | null
    aesthetic_keywords?: OutfitUpdateaesthetic_keywordsInput | string[]
    is_tried?: BoolFieldUpdateOperationsInput | boolean
    is_favorite?: BoolFieldUpdateOperationsInput | boolean
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    outfit_details?: JsonNullValueInput | InputJsonValue
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OutfitImageCreateInput = {
    id?: string
    image_url: string
    storage_path: string
    caption?: string | null
    is_primary?: boolean
    uploaded_at?: Date | string
    outfit: OutfitCreateNestedOneWithoutImagesInput
  }

  export type OutfitImageUncheckedCreateInput = {
    id?: string
    outfit_id: string
    image_url: string
    storage_path: string
    caption?: string | null
    is_primary?: boolean
    uploaded_at?: Date | string
  }

  export type OutfitImageUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    image_url?: StringFieldUpdateOperationsInput | string
    storage_path?: StringFieldUpdateOperationsInput | string
    caption?: NullableStringFieldUpdateOperationsInput | string | null
    is_primary?: BoolFieldUpdateOperationsInput | boolean
    uploaded_at?: DateTimeFieldUpdateOperationsInput | Date | string
    outfit?: OutfitUpdateOneRequiredWithoutImagesNestedInput
  }

  export type OutfitImageUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    outfit_id?: StringFieldUpdateOperationsInput | string
    image_url?: StringFieldUpdateOperationsInput | string
    storage_path?: StringFieldUpdateOperationsInput | string
    caption?: NullableStringFieldUpdateOperationsInput | string | null
    is_primary?: BoolFieldUpdateOperationsInput | boolean
    uploaded_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OutfitImageCreateManyInput = {
    id?: string
    outfit_id: string
    image_url: string
    storage_path: string
    caption?: string | null
    is_primary?: boolean
    uploaded_at?: Date | string
  }

  export type OutfitImageUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    image_url?: StringFieldUpdateOperationsInput | string
    storage_path?: StringFieldUpdateOperationsInput | string
    caption?: NullableStringFieldUpdateOperationsInput | string | null
    is_primary?: BoolFieldUpdateOperationsInput | boolean
    uploaded_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OutfitImageUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    outfit_id?: StringFieldUpdateOperationsInput | string
    image_url?: StringFieldUpdateOperationsInput | string
    storage_path?: StringFieldUpdateOperationsInput | string
    caption?: NullableStringFieldUpdateOperationsInput | string | null
    is_primary?: BoolFieldUpdateOperationsInput | boolean
    uploaded_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AppThemeCreateInput = {
    id?: string
    name: string
    is_default?: boolean
    primary_color: string
    secondary_color: string
    accent_color: string
    background_color: string
    surface_color: string
    text_primary: string
    text_secondary: string
    border_color: string
    gradient_start: string
    gradient_end: string
    created_at?: Date | string
  }

  export type AppThemeUncheckedCreateInput = {
    id?: string
    name: string
    is_default?: boolean
    primary_color: string
    secondary_color: string
    accent_color: string
    background_color: string
    surface_color: string
    text_primary: string
    text_secondary: string
    border_color: string
    gradient_start: string
    gradient_end: string
    created_at?: Date | string
  }

  export type AppThemeUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    is_default?: BoolFieldUpdateOperationsInput | boolean
    primary_color?: StringFieldUpdateOperationsInput | string
    secondary_color?: StringFieldUpdateOperationsInput | string
    accent_color?: StringFieldUpdateOperationsInput | string
    background_color?: StringFieldUpdateOperationsInput | string
    surface_color?: StringFieldUpdateOperationsInput | string
    text_primary?: StringFieldUpdateOperationsInput | string
    text_secondary?: StringFieldUpdateOperationsInput | string
    border_color?: StringFieldUpdateOperationsInput | string
    gradient_start?: StringFieldUpdateOperationsInput | string
    gradient_end?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AppThemeUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    is_default?: BoolFieldUpdateOperationsInput | boolean
    primary_color?: StringFieldUpdateOperationsInput | string
    secondary_color?: StringFieldUpdateOperationsInput | string
    accent_color?: StringFieldUpdateOperationsInput | string
    background_color?: StringFieldUpdateOperationsInput | string
    surface_color?: StringFieldUpdateOperationsInput | string
    text_primary?: StringFieldUpdateOperationsInput | string
    text_secondary?: StringFieldUpdateOperationsInput | string
    border_color?: StringFieldUpdateOperationsInput | string
    gradient_start?: StringFieldUpdateOperationsInput | string
    gradient_end?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AppThemeCreateManyInput = {
    id?: string
    name: string
    is_default?: boolean
    primary_color: string
    secondary_color: string
    accent_color: string
    background_color: string
    surface_color: string
    text_primary: string
    text_secondary: string
    border_color: string
    gradient_start: string
    gradient_end: string
    created_at?: Date | string
  }

  export type AppThemeUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    is_default?: BoolFieldUpdateOperationsInput | boolean
    primary_color?: StringFieldUpdateOperationsInput | string
    secondary_color?: StringFieldUpdateOperationsInput | string
    accent_color?: StringFieldUpdateOperationsInput | string
    background_color?: StringFieldUpdateOperationsInput | string
    surface_color?: StringFieldUpdateOperationsInput | string
    text_primary?: StringFieldUpdateOperationsInput | string
    text_secondary?: StringFieldUpdateOperationsInput | string
    border_color?: StringFieldUpdateOperationsInput | string
    gradient_start?: StringFieldUpdateOperationsInput | string
    gradient_end?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AppThemeUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    is_default?: BoolFieldUpdateOperationsInput | boolean
    primary_color?: StringFieldUpdateOperationsInput | string
    secondary_color?: StringFieldUpdateOperationsInput | string
    accent_color?: StringFieldUpdateOperationsInput | string
    background_color?: StringFieldUpdateOperationsInput | string
    surface_color?: StringFieldUpdateOperationsInput | string
    text_primary?: StringFieldUpdateOperationsInput | string
    text_secondary?: StringFieldUpdateOperationsInput | string
    border_color?: StringFieldUpdateOperationsInput | string
    gradient_start?: StringFieldUpdateOperationsInput | string
    gradient_end?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    mode?: QueryMode
    not?: NestedUuidFilter<$PrismaModel> | string
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
    search?: string
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
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
    search?: string
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
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

  export type SubstyleListRelationFilter = {
    every?: SubstyleWhereInput
    some?: SubstyleWhereInput
    none?: SubstyleWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type SubstyleOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type StyleWorldOrderByRelevanceInput = {
    fields: StyleWorldOrderByRelevanceFieldEnum | StyleWorldOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type StyleWorldCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    tagline?: SortOrder
    core_energy?: SortOrder
    description?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type StyleWorldMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    tagline?: SortOrder
    core_energy?: SortOrder
    description?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type StyleWorldMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    tagline?: SortOrder
    core_energy?: SortOrder
    description?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type UuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    mode?: QueryMode
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
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
    search?: string
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
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
    search?: string
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
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

  export type StyleWorldScalarRelationFilter = {
    is?: StyleWorldWhereInput
    isNot?: StyleWorldWhereInput
  }

  export type OutfitListRelationFilter = {
    every?: OutfitWhereInput
    some?: OutfitWhereInput
    none?: OutfitWhereInput
  }

  export type OutfitOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SubstyleOrderByRelevanceInput = {
    fields: SubstyleOrderByRelevanceFieldEnum | SubstyleOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type SubstyleCountOrderByAggregateInput = {
    id?: SortOrder
    style_world_id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    tagline?: SortOrder
    description?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type SubstyleMaxOrderByAggregateInput = {
    id?: SortOrder
    style_world_id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    tagline?: SortOrder
    description?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type SubstyleMinOrderByAggregateInput = {
    id?: SortOrder
    style_world_id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    tagline?: SortOrder
    description?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }
  export type JsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonFilterBase<$PrismaModel>>, 'path'>>

  export type JsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type SubstyleScalarRelationFilter = {
    is?: SubstyleWhereInput
    isNot?: SubstyleWhereInput
  }

  export type OutfitImageListRelationFilter = {
    every?: OutfitImageWhereInput
    some?: OutfitImageWhereInput
    none?: OutfitImageWhereInput
  }

  export type OutfitImageOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type OutfitOrderByRelevanceInput = {
    fields: OutfitOrderByRelevanceFieldEnum | OutfitOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type OutfitCountOrderByAggregateInput = {
    id?: SortOrder
    substyle_id?: SortOrder
    title?: SortOrder
    one_liner?: SortOrder
    overall_vibe?: SortOrder
    aesthetic_keywords?: SortOrder
    is_tried?: SortOrder
    is_favorite?: SortOrder
    notes?: SortOrder
    outfit_details?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type OutfitMaxOrderByAggregateInput = {
    id?: SortOrder
    substyle_id?: SortOrder
    title?: SortOrder
    one_liner?: SortOrder
    overall_vibe?: SortOrder
    is_tried?: SortOrder
    is_favorite?: SortOrder
    notes?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type OutfitMinOrderByAggregateInput = {
    id?: SortOrder
    substyle_id?: SortOrder
    title?: SortOrder
    one_liner?: SortOrder
    overall_vibe?: SortOrder
    is_tried?: SortOrder
    is_favorite?: SortOrder
    notes?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }
  export type JsonWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedJsonFilter<$PrismaModel>
    _max?: NestedJsonFilter<$PrismaModel>
  }

  export type OutfitScalarRelationFilter = {
    is?: OutfitWhereInput
    isNot?: OutfitWhereInput
  }

  export type OutfitImageOrderByRelevanceInput = {
    fields: OutfitImageOrderByRelevanceFieldEnum | OutfitImageOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type OutfitImageCountOrderByAggregateInput = {
    id?: SortOrder
    outfit_id?: SortOrder
    image_url?: SortOrder
    storage_path?: SortOrder
    caption?: SortOrder
    is_primary?: SortOrder
    uploaded_at?: SortOrder
  }

  export type OutfitImageMaxOrderByAggregateInput = {
    id?: SortOrder
    outfit_id?: SortOrder
    image_url?: SortOrder
    storage_path?: SortOrder
    caption?: SortOrder
    is_primary?: SortOrder
    uploaded_at?: SortOrder
  }

  export type OutfitImageMinOrderByAggregateInput = {
    id?: SortOrder
    outfit_id?: SortOrder
    image_url?: SortOrder
    storage_path?: SortOrder
    caption?: SortOrder
    is_primary?: SortOrder
    uploaded_at?: SortOrder
  }

  export type AppThemeOrderByRelevanceInput = {
    fields: AppThemeOrderByRelevanceFieldEnum | AppThemeOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type AppThemeCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    is_default?: SortOrder
    primary_color?: SortOrder
    secondary_color?: SortOrder
    accent_color?: SortOrder
    background_color?: SortOrder
    surface_color?: SortOrder
    text_primary?: SortOrder
    text_secondary?: SortOrder
    border_color?: SortOrder
    gradient_start?: SortOrder
    gradient_end?: SortOrder
    created_at?: SortOrder
  }

  export type AppThemeMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    is_default?: SortOrder
    primary_color?: SortOrder
    secondary_color?: SortOrder
    accent_color?: SortOrder
    background_color?: SortOrder
    surface_color?: SortOrder
    text_primary?: SortOrder
    text_secondary?: SortOrder
    border_color?: SortOrder
    gradient_start?: SortOrder
    gradient_end?: SortOrder
    created_at?: SortOrder
  }

  export type AppThemeMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    is_default?: SortOrder
    primary_color?: SortOrder
    secondary_color?: SortOrder
    accent_color?: SortOrder
    background_color?: SortOrder
    surface_color?: SortOrder
    text_primary?: SortOrder
    text_secondary?: SortOrder
    border_color?: SortOrder
    gradient_start?: SortOrder
    gradient_end?: SortOrder
    created_at?: SortOrder
  }

  export type SubstyleCreateNestedManyWithoutStyle_worldInput = {
    create?: XOR<SubstyleCreateWithoutStyle_worldInput, SubstyleUncheckedCreateWithoutStyle_worldInput> | SubstyleCreateWithoutStyle_worldInput[] | SubstyleUncheckedCreateWithoutStyle_worldInput[]
    connectOrCreate?: SubstyleCreateOrConnectWithoutStyle_worldInput | SubstyleCreateOrConnectWithoutStyle_worldInput[]
    createMany?: SubstyleCreateManyStyle_worldInputEnvelope
    connect?: SubstyleWhereUniqueInput | SubstyleWhereUniqueInput[]
  }

  export type SubstyleUncheckedCreateNestedManyWithoutStyle_worldInput = {
    create?: XOR<SubstyleCreateWithoutStyle_worldInput, SubstyleUncheckedCreateWithoutStyle_worldInput> | SubstyleCreateWithoutStyle_worldInput[] | SubstyleUncheckedCreateWithoutStyle_worldInput[]
    connectOrCreate?: SubstyleCreateOrConnectWithoutStyle_worldInput | SubstyleCreateOrConnectWithoutStyle_worldInput[]
    createMany?: SubstyleCreateManyStyle_worldInputEnvelope
    connect?: SubstyleWhereUniqueInput | SubstyleWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type SubstyleUpdateManyWithoutStyle_worldNestedInput = {
    create?: XOR<SubstyleCreateWithoutStyle_worldInput, SubstyleUncheckedCreateWithoutStyle_worldInput> | SubstyleCreateWithoutStyle_worldInput[] | SubstyleUncheckedCreateWithoutStyle_worldInput[]
    connectOrCreate?: SubstyleCreateOrConnectWithoutStyle_worldInput | SubstyleCreateOrConnectWithoutStyle_worldInput[]
    upsert?: SubstyleUpsertWithWhereUniqueWithoutStyle_worldInput | SubstyleUpsertWithWhereUniqueWithoutStyle_worldInput[]
    createMany?: SubstyleCreateManyStyle_worldInputEnvelope
    set?: SubstyleWhereUniqueInput | SubstyleWhereUniqueInput[]
    disconnect?: SubstyleWhereUniqueInput | SubstyleWhereUniqueInput[]
    delete?: SubstyleWhereUniqueInput | SubstyleWhereUniqueInput[]
    connect?: SubstyleWhereUniqueInput | SubstyleWhereUniqueInput[]
    update?: SubstyleUpdateWithWhereUniqueWithoutStyle_worldInput | SubstyleUpdateWithWhereUniqueWithoutStyle_worldInput[]
    updateMany?: SubstyleUpdateManyWithWhereWithoutStyle_worldInput | SubstyleUpdateManyWithWhereWithoutStyle_worldInput[]
    deleteMany?: SubstyleScalarWhereInput | SubstyleScalarWhereInput[]
  }

  export type SubstyleUncheckedUpdateManyWithoutStyle_worldNestedInput = {
    create?: XOR<SubstyleCreateWithoutStyle_worldInput, SubstyleUncheckedCreateWithoutStyle_worldInput> | SubstyleCreateWithoutStyle_worldInput[] | SubstyleUncheckedCreateWithoutStyle_worldInput[]
    connectOrCreate?: SubstyleCreateOrConnectWithoutStyle_worldInput | SubstyleCreateOrConnectWithoutStyle_worldInput[]
    upsert?: SubstyleUpsertWithWhereUniqueWithoutStyle_worldInput | SubstyleUpsertWithWhereUniqueWithoutStyle_worldInput[]
    createMany?: SubstyleCreateManyStyle_worldInputEnvelope
    set?: SubstyleWhereUniqueInput | SubstyleWhereUniqueInput[]
    disconnect?: SubstyleWhereUniqueInput | SubstyleWhereUniqueInput[]
    delete?: SubstyleWhereUniqueInput | SubstyleWhereUniqueInput[]
    connect?: SubstyleWhereUniqueInput | SubstyleWhereUniqueInput[]
    update?: SubstyleUpdateWithWhereUniqueWithoutStyle_worldInput | SubstyleUpdateWithWhereUniqueWithoutStyle_worldInput[]
    updateMany?: SubstyleUpdateManyWithWhereWithoutStyle_worldInput | SubstyleUpdateManyWithWhereWithoutStyle_worldInput[]
    deleteMany?: SubstyleScalarWhereInput | SubstyleScalarWhereInput[]
  }

  export type StyleWorldCreateNestedOneWithoutSubstylesInput = {
    create?: XOR<StyleWorldCreateWithoutSubstylesInput, StyleWorldUncheckedCreateWithoutSubstylesInput>
    connectOrCreate?: StyleWorldCreateOrConnectWithoutSubstylesInput
    connect?: StyleWorldWhereUniqueInput
  }

  export type OutfitCreateNestedManyWithoutSubstyleInput = {
    create?: XOR<OutfitCreateWithoutSubstyleInput, OutfitUncheckedCreateWithoutSubstyleInput> | OutfitCreateWithoutSubstyleInput[] | OutfitUncheckedCreateWithoutSubstyleInput[]
    connectOrCreate?: OutfitCreateOrConnectWithoutSubstyleInput | OutfitCreateOrConnectWithoutSubstyleInput[]
    createMany?: OutfitCreateManySubstyleInputEnvelope
    connect?: OutfitWhereUniqueInput | OutfitWhereUniqueInput[]
  }

  export type OutfitUncheckedCreateNestedManyWithoutSubstyleInput = {
    create?: XOR<OutfitCreateWithoutSubstyleInput, OutfitUncheckedCreateWithoutSubstyleInput> | OutfitCreateWithoutSubstyleInput[] | OutfitUncheckedCreateWithoutSubstyleInput[]
    connectOrCreate?: OutfitCreateOrConnectWithoutSubstyleInput | OutfitCreateOrConnectWithoutSubstyleInput[]
    createMany?: OutfitCreateManySubstyleInputEnvelope
    connect?: OutfitWhereUniqueInput | OutfitWhereUniqueInput[]
  }

  export type StyleWorldUpdateOneRequiredWithoutSubstylesNestedInput = {
    create?: XOR<StyleWorldCreateWithoutSubstylesInput, StyleWorldUncheckedCreateWithoutSubstylesInput>
    connectOrCreate?: StyleWorldCreateOrConnectWithoutSubstylesInput
    upsert?: StyleWorldUpsertWithoutSubstylesInput
    connect?: StyleWorldWhereUniqueInput
    update?: XOR<XOR<StyleWorldUpdateToOneWithWhereWithoutSubstylesInput, StyleWorldUpdateWithoutSubstylesInput>, StyleWorldUncheckedUpdateWithoutSubstylesInput>
  }

  export type OutfitUpdateManyWithoutSubstyleNestedInput = {
    create?: XOR<OutfitCreateWithoutSubstyleInput, OutfitUncheckedCreateWithoutSubstyleInput> | OutfitCreateWithoutSubstyleInput[] | OutfitUncheckedCreateWithoutSubstyleInput[]
    connectOrCreate?: OutfitCreateOrConnectWithoutSubstyleInput | OutfitCreateOrConnectWithoutSubstyleInput[]
    upsert?: OutfitUpsertWithWhereUniqueWithoutSubstyleInput | OutfitUpsertWithWhereUniqueWithoutSubstyleInput[]
    createMany?: OutfitCreateManySubstyleInputEnvelope
    set?: OutfitWhereUniqueInput | OutfitWhereUniqueInput[]
    disconnect?: OutfitWhereUniqueInput | OutfitWhereUniqueInput[]
    delete?: OutfitWhereUniqueInput | OutfitWhereUniqueInput[]
    connect?: OutfitWhereUniqueInput | OutfitWhereUniqueInput[]
    update?: OutfitUpdateWithWhereUniqueWithoutSubstyleInput | OutfitUpdateWithWhereUniqueWithoutSubstyleInput[]
    updateMany?: OutfitUpdateManyWithWhereWithoutSubstyleInput | OutfitUpdateManyWithWhereWithoutSubstyleInput[]
    deleteMany?: OutfitScalarWhereInput | OutfitScalarWhereInput[]
  }

  export type OutfitUncheckedUpdateManyWithoutSubstyleNestedInput = {
    create?: XOR<OutfitCreateWithoutSubstyleInput, OutfitUncheckedCreateWithoutSubstyleInput> | OutfitCreateWithoutSubstyleInput[] | OutfitUncheckedCreateWithoutSubstyleInput[]
    connectOrCreate?: OutfitCreateOrConnectWithoutSubstyleInput | OutfitCreateOrConnectWithoutSubstyleInput[]
    upsert?: OutfitUpsertWithWhereUniqueWithoutSubstyleInput | OutfitUpsertWithWhereUniqueWithoutSubstyleInput[]
    createMany?: OutfitCreateManySubstyleInputEnvelope
    set?: OutfitWhereUniqueInput | OutfitWhereUniqueInput[]
    disconnect?: OutfitWhereUniqueInput | OutfitWhereUniqueInput[]
    delete?: OutfitWhereUniqueInput | OutfitWhereUniqueInput[]
    connect?: OutfitWhereUniqueInput | OutfitWhereUniqueInput[]
    update?: OutfitUpdateWithWhereUniqueWithoutSubstyleInput | OutfitUpdateWithWhereUniqueWithoutSubstyleInput[]
    updateMany?: OutfitUpdateManyWithWhereWithoutSubstyleInput | OutfitUpdateManyWithWhereWithoutSubstyleInput[]
    deleteMany?: OutfitScalarWhereInput | OutfitScalarWhereInput[]
  }

  export type OutfitCreateaesthetic_keywordsInput = {
    set: string[]
  }

  export type SubstyleCreateNestedOneWithoutOutfitsInput = {
    create?: XOR<SubstyleCreateWithoutOutfitsInput, SubstyleUncheckedCreateWithoutOutfitsInput>
    connectOrCreate?: SubstyleCreateOrConnectWithoutOutfitsInput
    connect?: SubstyleWhereUniqueInput
  }

  export type OutfitImageCreateNestedManyWithoutOutfitInput = {
    create?: XOR<OutfitImageCreateWithoutOutfitInput, OutfitImageUncheckedCreateWithoutOutfitInput> | OutfitImageCreateWithoutOutfitInput[] | OutfitImageUncheckedCreateWithoutOutfitInput[]
    connectOrCreate?: OutfitImageCreateOrConnectWithoutOutfitInput | OutfitImageCreateOrConnectWithoutOutfitInput[]
    createMany?: OutfitImageCreateManyOutfitInputEnvelope
    connect?: OutfitImageWhereUniqueInput | OutfitImageWhereUniqueInput[]
  }

  export type OutfitImageUncheckedCreateNestedManyWithoutOutfitInput = {
    create?: XOR<OutfitImageCreateWithoutOutfitInput, OutfitImageUncheckedCreateWithoutOutfitInput> | OutfitImageCreateWithoutOutfitInput[] | OutfitImageUncheckedCreateWithoutOutfitInput[]
    connectOrCreate?: OutfitImageCreateOrConnectWithoutOutfitInput | OutfitImageCreateOrConnectWithoutOutfitInput[]
    createMany?: OutfitImageCreateManyOutfitInputEnvelope
    connect?: OutfitImageWhereUniqueInput | OutfitImageWhereUniqueInput[]
  }

  export type OutfitUpdateaesthetic_keywordsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type SubstyleUpdateOneRequiredWithoutOutfitsNestedInput = {
    create?: XOR<SubstyleCreateWithoutOutfitsInput, SubstyleUncheckedCreateWithoutOutfitsInput>
    connectOrCreate?: SubstyleCreateOrConnectWithoutOutfitsInput
    upsert?: SubstyleUpsertWithoutOutfitsInput
    connect?: SubstyleWhereUniqueInput
    update?: XOR<XOR<SubstyleUpdateToOneWithWhereWithoutOutfitsInput, SubstyleUpdateWithoutOutfitsInput>, SubstyleUncheckedUpdateWithoutOutfitsInput>
  }

  export type OutfitImageUpdateManyWithoutOutfitNestedInput = {
    create?: XOR<OutfitImageCreateWithoutOutfitInput, OutfitImageUncheckedCreateWithoutOutfitInput> | OutfitImageCreateWithoutOutfitInput[] | OutfitImageUncheckedCreateWithoutOutfitInput[]
    connectOrCreate?: OutfitImageCreateOrConnectWithoutOutfitInput | OutfitImageCreateOrConnectWithoutOutfitInput[]
    upsert?: OutfitImageUpsertWithWhereUniqueWithoutOutfitInput | OutfitImageUpsertWithWhereUniqueWithoutOutfitInput[]
    createMany?: OutfitImageCreateManyOutfitInputEnvelope
    set?: OutfitImageWhereUniqueInput | OutfitImageWhereUniqueInput[]
    disconnect?: OutfitImageWhereUniqueInput | OutfitImageWhereUniqueInput[]
    delete?: OutfitImageWhereUniqueInput | OutfitImageWhereUniqueInput[]
    connect?: OutfitImageWhereUniqueInput | OutfitImageWhereUniqueInput[]
    update?: OutfitImageUpdateWithWhereUniqueWithoutOutfitInput | OutfitImageUpdateWithWhereUniqueWithoutOutfitInput[]
    updateMany?: OutfitImageUpdateManyWithWhereWithoutOutfitInput | OutfitImageUpdateManyWithWhereWithoutOutfitInput[]
    deleteMany?: OutfitImageScalarWhereInput | OutfitImageScalarWhereInput[]
  }

  export type OutfitImageUncheckedUpdateManyWithoutOutfitNestedInput = {
    create?: XOR<OutfitImageCreateWithoutOutfitInput, OutfitImageUncheckedCreateWithoutOutfitInput> | OutfitImageCreateWithoutOutfitInput[] | OutfitImageUncheckedCreateWithoutOutfitInput[]
    connectOrCreate?: OutfitImageCreateOrConnectWithoutOutfitInput | OutfitImageCreateOrConnectWithoutOutfitInput[]
    upsert?: OutfitImageUpsertWithWhereUniqueWithoutOutfitInput | OutfitImageUpsertWithWhereUniqueWithoutOutfitInput[]
    createMany?: OutfitImageCreateManyOutfitInputEnvelope
    set?: OutfitImageWhereUniqueInput | OutfitImageWhereUniqueInput[]
    disconnect?: OutfitImageWhereUniqueInput | OutfitImageWhereUniqueInput[]
    delete?: OutfitImageWhereUniqueInput | OutfitImageWhereUniqueInput[]
    connect?: OutfitImageWhereUniqueInput | OutfitImageWhereUniqueInput[]
    update?: OutfitImageUpdateWithWhereUniqueWithoutOutfitInput | OutfitImageUpdateWithWhereUniqueWithoutOutfitInput[]
    updateMany?: OutfitImageUpdateManyWithWhereWithoutOutfitInput | OutfitImageUpdateManyWithWhereWithoutOutfitInput[]
    deleteMany?: OutfitImageScalarWhereInput | OutfitImageScalarWhereInput[]
  }

  export type OutfitCreateNestedOneWithoutImagesInput = {
    create?: XOR<OutfitCreateWithoutImagesInput, OutfitUncheckedCreateWithoutImagesInput>
    connectOrCreate?: OutfitCreateOrConnectWithoutImagesInput
    connect?: OutfitWhereUniqueInput
  }

  export type OutfitUpdateOneRequiredWithoutImagesNestedInput = {
    create?: XOR<OutfitCreateWithoutImagesInput, OutfitUncheckedCreateWithoutImagesInput>
    connectOrCreate?: OutfitCreateOrConnectWithoutImagesInput
    upsert?: OutfitUpsertWithoutImagesInput
    connect?: OutfitWhereUniqueInput
    update?: XOR<XOR<OutfitUpdateToOneWithWhereWithoutImagesInput, OutfitUpdateWithoutImagesInput>, OutfitUncheckedUpdateWithoutImagesInput>
  }

  export type NestedUuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedUuidFilter<$PrismaModel> | string
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
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
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
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
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

  export type NestedUuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string
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
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
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
    search?: string
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
  export type NestedJsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type SubstyleCreateWithoutStyle_worldInput = {
    id?: string
    name: string
    slug: string
    tagline?: string | null
    description?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    outfits?: OutfitCreateNestedManyWithoutSubstyleInput
  }

  export type SubstyleUncheckedCreateWithoutStyle_worldInput = {
    id?: string
    name: string
    slug: string
    tagline?: string | null
    description?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    outfits?: OutfitUncheckedCreateNestedManyWithoutSubstyleInput
  }

  export type SubstyleCreateOrConnectWithoutStyle_worldInput = {
    where: SubstyleWhereUniqueInput
    create: XOR<SubstyleCreateWithoutStyle_worldInput, SubstyleUncheckedCreateWithoutStyle_worldInput>
  }

  export type SubstyleCreateManyStyle_worldInputEnvelope = {
    data: SubstyleCreateManyStyle_worldInput | SubstyleCreateManyStyle_worldInput[]
    skipDuplicates?: boolean
  }

  export type SubstyleUpsertWithWhereUniqueWithoutStyle_worldInput = {
    where: SubstyleWhereUniqueInput
    update: XOR<SubstyleUpdateWithoutStyle_worldInput, SubstyleUncheckedUpdateWithoutStyle_worldInput>
    create: XOR<SubstyleCreateWithoutStyle_worldInput, SubstyleUncheckedCreateWithoutStyle_worldInput>
  }

  export type SubstyleUpdateWithWhereUniqueWithoutStyle_worldInput = {
    where: SubstyleWhereUniqueInput
    data: XOR<SubstyleUpdateWithoutStyle_worldInput, SubstyleUncheckedUpdateWithoutStyle_worldInput>
  }

  export type SubstyleUpdateManyWithWhereWithoutStyle_worldInput = {
    where: SubstyleScalarWhereInput
    data: XOR<SubstyleUpdateManyMutationInput, SubstyleUncheckedUpdateManyWithoutStyle_worldInput>
  }

  export type SubstyleScalarWhereInput = {
    AND?: SubstyleScalarWhereInput | SubstyleScalarWhereInput[]
    OR?: SubstyleScalarWhereInput[]
    NOT?: SubstyleScalarWhereInput | SubstyleScalarWhereInput[]
    id?: UuidFilter<"Substyle"> | string
    style_world_id?: UuidFilter<"Substyle"> | string
    name?: StringFilter<"Substyle"> | string
    slug?: StringFilter<"Substyle"> | string
    tagline?: StringNullableFilter<"Substyle"> | string | null
    description?: StringNullableFilter<"Substyle"> | string | null
    created_at?: DateTimeFilter<"Substyle"> | Date | string
    updated_at?: DateTimeFilter<"Substyle"> | Date | string
  }

  export type StyleWorldCreateWithoutSubstylesInput = {
    id?: string
    name: string
    slug: string
    tagline?: string | null
    core_energy?: string | null
    description?: string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type StyleWorldUncheckedCreateWithoutSubstylesInput = {
    id?: string
    name: string
    slug: string
    tagline?: string | null
    core_energy?: string | null
    description?: string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type StyleWorldCreateOrConnectWithoutSubstylesInput = {
    where: StyleWorldWhereUniqueInput
    create: XOR<StyleWorldCreateWithoutSubstylesInput, StyleWorldUncheckedCreateWithoutSubstylesInput>
  }

  export type OutfitCreateWithoutSubstyleInput = {
    id?: string
    title: string
    one_liner?: string | null
    overall_vibe?: string | null
    aesthetic_keywords?: OutfitCreateaesthetic_keywordsInput | string[]
    is_tried?: boolean
    is_favorite?: boolean
    notes?: string | null
    outfit_details: JsonNullValueInput | InputJsonValue
    created_at?: Date | string
    updated_at?: Date | string
    images?: OutfitImageCreateNestedManyWithoutOutfitInput
  }

  export type OutfitUncheckedCreateWithoutSubstyleInput = {
    id?: string
    title: string
    one_liner?: string | null
    overall_vibe?: string | null
    aesthetic_keywords?: OutfitCreateaesthetic_keywordsInput | string[]
    is_tried?: boolean
    is_favorite?: boolean
    notes?: string | null
    outfit_details: JsonNullValueInput | InputJsonValue
    created_at?: Date | string
    updated_at?: Date | string
    images?: OutfitImageUncheckedCreateNestedManyWithoutOutfitInput
  }

  export type OutfitCreateOrConnectWithoutSubstyleInput = {
    where: OutfitWhereUniqueInput
    create: XOR<OutfitCreateWithoutSubstyleInput, OutfitUncheckedCreateWithoutSubstyleInput>
  }

  export type OutfitCreateManySubstyleInputEnvelope = {
    data: OutfitCreateManySubstyleInput | OutfitCreateManySubstyleInput[]
    skipDuplicates?: boolean
  }

  export type StyleWorldUpsertWithoutSubstylesInput = {
    update: XOR<StyleWorldUpdateWithoutSubstylesInput, StyleWorldUncheckedUpdateWithoutSubstylesInput>
    create: XOR<StyleWorldCreateWithoutSubstylesInput, StyleWorldUncheckedCreateWithoutSubstylesInput>
    where?: StyleWorldWhereInput
  }

  export type StyleWorldUpdateToOneWithWhereWithoutSubstylesInput = {
    where?: StyleWorldWhereInput
    data: XOR<StyleWorldUpdateWithoutSubstylesInput, StyleWorldUncheckedUpdateWithoutSubstylesInput>
  }

  export type StyleWorldUpdateWithoutSubstylesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    tagline?: NullableStringFieldUpdateOperationsInput | string | null
    core_energy?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StyleWorldUncheckedUpdateWithoutSubstylesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    tagline?: NullableStringFieldUpdateOperationsInput | string | null
    core_energy?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OutfitUpsertWithWhereUniqueWithoutSubstyleInput = {
    where: OutfitWhereUniqueInput
    update: XOR<OutfitUpdateWithoutSubstyleInput, OutfitUncheckedUpdateWithoutSubstyleInput>
    create: XOR<OutfitCreateWithoutSubstyleInput, OutfitUncheckedCreateWithoutSubstyleInput>
  }

  export type OutfitUpdateWithWhereUniqueWithoutSubstyleInput = {
    where: OutfitWhereUniqueInput
    data: XOR<OutfitUpdateWithoutSubstyleInput, OutfitUncheckedUpdateWithoutSubstyleInput>
  }

  export type OutfitUpdateManyWithWhereWithoutSubstyleInput = {
    where: OutfitScalarWhereInput
    data: XOR<OutfitUpdateManyMutationInput, OutfitUncheckedUpdateManyWithoutSubstyleInput>
  }

  export type OutfitScalarWhereInput = {
    AND?: OutfitScalarWhereInput | OutfitScalarWhereInput[]
    OR?: OutfitScalarWhereInput[]
    NOT?: OutfitScalarWhereInput | OutfitScalarWhereInput[]
    id?: UuidFilter<"Outfit"> | string
    substyle_id?: UuidFilter<"Outfit"> | string
    title?: StringFilter<"Outfit"> | string
    one_liner?: StringNullableFilter<"Outfit"> | string | null
    overall_vibe?: StringNullableFilter<"Outfit"> | string | null
    aesthetic_keywords?: StringNullableListFilter<"Outfit">
    is_tried?: BoolFilter<"Outfit"> | boolean
    is_favorite?: BoolFilter<"Outfit"> | boolean
    notes?: StringNullableFilter<"Outfit"> | string | null
    outfit_details?: JsonFilter<"Outfit">
    created_at?: DateTimeFilter<"Outfit"> | Date | string
    updated_at?: DateTimeFilter<"Outfit"> | Date | string
  }

  export type SubstyleCreateWithoutOutfitsInput = {
    id?: string
    name: string
    slug: string
    tagline?: string | null
    description?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    style_world: StyleWorldCreateNestedOneWithoutSubstylesInput
  }

  export type SubstyleUncheckedCreateWithoutOutfitsInput = {
    id?: string
    style_world_id: string
    name: string
    slug: string
    tagline?: string | null
    description?: string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type SubstyleCreateOrConnectWithoutOutfitsInput = {
    where: SubstyleWhereUniqueInput
    create: XOR<SubstyleCreateWithoutOutfitsInput, SubstyleUncheckedCreateWithoutOutfitsInput>
  }

  export type OutfitImageCreateWithoutOutfitInput = {
    id?: string
    image_url: string
    storage_path: string
    caption?: string | null
    is_primary?: boolean
    uploaded_at?: Date | string
  }

  export type OutfitImageUncheckedCreateWithoutOutfitInput = {
    id?: string
    image_url: string
    storage_path: string
    caption?: string | null
    is_primary?: boolean
    uploaded_at?: Date | string
  }

  export type OutfitImageCreateOrConnectWithoutOutfitInput = {
    where: OutfitImageWhereUniqueInput
    create: XOR<OutfitImageCreateWithoutOutfitInput, OutfitImageUncheckedCreateWithoutOutfitInput>
  }

  export type OutfitImageCreateManyOutfitInputEnvelope = {
    data: OutfitImageCreateManyOutfitInput | OutfitImageCreateManyOutfitInput[]
    skipDuplicates?: boolean
  }

  export type SubstyleUpsertWithoutOutfitsInput = {
    update: XOR<SubstyleUpdateWithoutOutfitsInput, SubstyleUncheckedUpdateWithoutOutfitsInput>
    create: XOR<SubstyleCreateWithoutOutfitsInput, SubstyleUncheckedCreateWithoutOutfitsInput>
    where?: SubstyleWhereInput
  }

  export type SubstyleUpdateToOneWithWhereWithoutOutfitsInput = {
    where?: SubstyleWhereInput
    data: XOR<SubstyleUpdateWithoutOutfitsInput, SubstyleUncheckedUpdateWithoutOutfitsInput>
  }

  export type SubstyleUpdateWithoutOutfitsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    tagline?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    style_world?: StyleWorldUpdateOneRequiredWithoutSubstylesNestedInput
  }

  export type SubstyleUncheckedUpdateWithoutOutfitsInput = {
    id?: StringFieldUpdateOperationsInput | string
    style_world_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    tagline?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OutfitImageUpsertWithWhereUniqueWithoutOutfitInput = {
    where: OutfitImageWhereUniqueInput
    update: XOR<OutfitImageUpdateWithoutOutfitInput, OutfitImageUncheckedUpdateWithoutOutfitInput>
    create: XOR<OutfitImageCreateWithoutOutfitInput, OutfitImageUncheckedCreateWithoutOutfitInput>
  }

  export type OutfitImageUpdateWithWhereUniqueWithoutOutfitInput = {
    where: OutfitImageWhereUniqueInput
    data: XOR<OutfitImageUpdateWithoutOutfitInput, OutfitImageUncheckedUpdateWithoutOutfitInput>
  }

  export type OutfitImageUpdateManyWithWhereWithoutOutfitInput = {
    where: OutfitImageScalarWhereInput
    data: XOR<OutfitImageUpdateManyMutationInput, OutfitImageUncheckedUpdateManyWithoutOutfitInput>
  }

  export type OutfitImageScalarWhereInput = {
    AND?: OutfitImageScalarWhereInput | OutfitImageScalarWhereInput[]
    OR?: OutfitImageScalarWhereInput[]
    NOT?: OutfitImageScalarWhereInput | OutfitImageScalarWhereInput[]
    id?: UuidFilter<"OutfitImage"> | string
    outfit_id?: UuidFilter<"OutfitImage"> | string
    image_url?: StringFilter<"OutfitImage"> | string
    storage_path?: StringFilter<"OutfitImage"> | string
    caption?: StringNullableFilter<"OutfitImage"> | string | null
    is_primary?: BoolFilter<"OutfitImage"> | boolean
    uploaded_at?: DateTimeFilter<"OutfitImage"> | Date | string
  }

  export type OutfitCreateWithoutImagesInput = {
    id?: string
    title: string
    one_liner?: string | null
    overall_vibe?: string | null
    aesthetic_keywords?: OutfitCreateaesthetic_keywordsInput | string[]
    is_tried?: boolean
    is_favorite?: boolean
    notes?: string | null
    outfit_details: JsonNullValueInput | InputJsonValue
    created_at?: Date | string
    updated_at?: Date | string
    substyle: SubstyleCreateNestedOneWithoutOutfitsInput
  }

  export type OutfitUncheckedCreateWithoutImagesInput = {
    id?: string
    substyle_id: string
    title: string
    one_liner?: string | null
    overall_vibe?: string | null
    aesthetic_keywords?: OutfitCreateaesthetic_keywordsInput | string[]
    is_tried?: boolean
    is_favorite?: boolean
    notes?: string | null
    outfit_details: JsonNullValueInput | InputJsonValue
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type OutfitCreateOrConnectWithoutImagesInput = {
    where: OutfitWhereUniqueInput
    create: XOR<OutfitCreateWithoutImagesInput, OutfitUncheckedCreateWithoutImagesInput>
  }

  export type OutfitUpsertWithoutImagesInput = {
    update: XOR<OutfitUpdateWithoutImagesInput, OutfitUncheckedUpdateWithoutImagesInput>
    create: XOR<OutfitCreateWithoutImagesInput, OutfitUncheckedCreateWithoutImagesInput>
    where?: OutfitWhereInput
  }

  export type OutfitUpdateToOneWithWhereWithoutImagesInput = {
    where?: OutfitWhereInput
    data: XOR<OutfitUpdateWithoutImagesInput, OutfitUncheckedUpdateWithoutImagesInput>
  }

  export type OutfitUpdateWithoutImagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    one_liner?: NullableStringFieldUpdateOperationsInput | string | null
    overall_vibe?: NullableStringFieldUpdateOperationsInput | string | null
    aesthetic_keywords?: OutfitUpdateaesthetic_keywordsInput | string[]
    is_tried?: BoolFieldUpdateOperationsInput | boolean
    is_favorite?: BoolFieldUpdateOperationsInput | boolean
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    outfit_details?: JsonNullValueInput | InputJsonValue
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    substyle?: SubstyleUpdateOneRequiredWithoutOutfitsNestedInput
  }

  export type OutfitUncheckedUpdateWithoutImagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    substyle_id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    one_liner?: NullableStringFieldUpdateOperationsInput | string | null
    overall_vibe?: NullableStringFieldUpdateOperationsInput | string | null
    aesthetic_keywords?: OutfitUpdateaesthetic_keywordsInput | string[]
    is_tried?: BoolFieldUpdateOperationsInput | boolean
    is_favorite?: BoolFieldUpdateOperationsInput | boolean
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    outfit_details?: JsonNullValueInput | InputJsonValue
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubstyleCreateManyStyle_worldInput = {
    id?: string
    name: string
    slug: string
    tagline?: string | null
    description?: string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type SubstyleUpdateWithoutStyle_worldInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    tagline?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    outfits?: OutfitUpdateManyWithoutSubstyleNestedInput
  }

  export type SubstyleUncheckedUpdateWithoutStyle_worldInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    tagline?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    outfits?: OutfitUncheckedUpdateManyWithoutSubstyleNestedInput
  }

  export type SubstyleUncheckedUpdateManyWithoutStyle_worldInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    tagline?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OutfitCreateManySubstyleInput = {
    id?: string
    title: string
    one_liner?: string | null
    overall_vibe?: string | null
    aesthetic_keywords?: OutfitCreateaesthetic_keywordsInput | string[]
    is_tried?: boolean
    is_favorite?: boolean
    notes?: string | null
    outfit_details: JsonNullValueInput | InputJsonValue
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type OutfitUpdateWithoutSubstyleInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    one_liner?: NullableStringFieldUpdateOperationsInput | string | null
    overall_vibe?: NullableStringFieldUpdateOperationsInput | string | null
    aesthetic_keywords?: OutfitUpdateaesthetic_keywordsInput | string[]
    is_tried?: BoolFieldUpdateOperationsInput | boolean
    is_favorite?: BoolFieldUpdateOperationsInput | boolean
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    outfit_details?: JsonNullValueInput | InputJsonValue
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    images?: OutfitImageUpdateManyWithoutOutfitNestedInput
  }

  export type OutfitUncheckedUpdateWithoutSubstyleInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    one_liner?: NullableStringFieldUpdateOperationsInput | string | null
    overall_vibe?: NullableStringFieldUpdateOperationsInput | string | null
    aesthetic_keywords?: OutfitUpdateaesthetic_keywordsInput | string[]
    is_tried?: BoolFieldUpdateOperationsInput | boolean
    is_favorite?: BoolFieldUpdateOperationsInput | boolean
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    outfit_details?: JsonNullValueInput | InputJsonValue
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    images?: OutfitImageUncheckedUpdateManyWithoutOutfitNestedInput
  }

  export type OutfitUncheckedUpdateManyWithoutSubstyleInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    one_liner?: NullableStringFieldUpdateOperationsInput | string | null
    overall_vibe?: NullableStringFieldUpdateOperationsInput | string | null
    aesthetic_keywords?: OutfitUpdateaesthetic_keywordsInput | string[]
    is_tried?: BoolFieldUpdateOperationsInput | boolean
    is_favorite?: BoolFieldUpdateOperationsInput | boolean
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    outfit_details?: JsonNullValueInput | InputJsonValue
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OutfitImageCreateManyOutfitInput = {
    id?: string
    image_url: string
    storage_path: string
    caption?: string | null
    is_primary?: boolean
    uploaded_at?: Date | string
  }

  export type OutfitImageUpdateWithoutOutfitInput = {
    id?: StringFieldUpdateOperationsInput | string
    image_url?: StringFieldUpdateOperationsInput | string
    storage_path?: StringFieldUpdateOperationsInput | string
    caption?: NullableStringFieldUpdateOperationsInput | string | null
    is_primary?: BoolFieldUpdateOperationsInput | boolean
    uploaded_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OutfitImageUncheckedUpdateWithoutOutfitInput = {
    id?: StringFieldUpdateOperationsInput | string
    image_url?: StringFieldUpdateOperationsInput | string
    storage_path?: StringFieldUpdateOperationsInput | string
    caption?: NullableStringFieldUpdateOperationsInput | string | null
    is_primary?: BoolFieldUpdateOperationsInput | boolean
    uploaded_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OutfitImageUncheckedUpdateManyWithoutOutfitInput = {
    id?: StringFieldUpdateOperationsInput | string
    image_url?: StringFieldUpdateOperationsInput | string
    storage_path?: StringFieldUpdateOperationsInput | string
    caption?: NullableStringFieldUpdateOperationsInput | string | null
    is_primary?: BoolFieldUpdateOperationsInput | boolean
    uploaded_at?: DateTimeFieldUpdateOperationsInput | Date | string
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