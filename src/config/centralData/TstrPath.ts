/**
 * Teste
 *
 */
export type TstrPath<T> = T extends Primitive
  ? T
  : T extends {}
  ? {
      [K in keyof T]?: TstrPath<T[K]> | FieldValue;
    } & NestedUpdateFields<T>
  : Partial<T>;

/**
 * Update data (for use with {@link (updateDoc:1)}) that consists of field paths
 * (e.g. 'foo' or 'foo.baz') mapped to values. Fields that contain dots
 * reference nested fields within the document. FieldValues can be passed in
 * as property values.
 */
type UpdateData<T> = T extends Primitive
  ? T
  : T extends {}
  ? {
      [K in keyof T]?: UpdateData<T[K]> | FieldValue;
    } & NestedUpdateFields<T>
  : Partial<T>;

/**
 * These types primarily exist to support the `UpdateData`,
 * `WithFieldValue`, and `PartialWithFieldValue` types and are not consumed
 * directly by the end developer.
 */
/** Primitive types. */
type Primitive = string | number | boolean | undefined | null;

/**
 * Sentinel values that can be used when writing document fields with `set()`
 * or `update()`.
 */
declare abstract class FieldValue {
  private constructor();
  /** Compares `FieldValue`s for equality. */
  abstract isEqual(other: FieldValue): boolean;
}

/**
 * For each field (e.g. 'bar'), find all nested keys (e.g. {'bar.baz': T1,
 * 'bar.qux': T2}). Intersect them together to make a single map containing
 * all possible keys that are all marked as optional
 */
type NestedUpdateFields<T extends Record<string, unknown>> =
  UnionToIntersection<
    {
      [K in keyof T & string]: ChildUpdateFields<K, T[K]>;
    }[keyof T & string]
  >;

/**
 * Given a union type `U = T1 | T2 | ...`, returns an intersected type
 * `(T1 & T2 & ...)`.
 *
 * Uses distributive conditional types and inference from conditional types.
 * This works because multiple candidates for the same type variable in
 * contra-variant positions causes an intersection type to be inferred.
 * https://www.typescriptlang.org/docs/handbook/advanced-types.html#type-inference-in-conditional-types
 * https://stackoverflow.com/questions/50374908/transform-union-type-to-intersection-type
 */
type UnionToIntersection<U> = (
  U extends unknown ? (k: U) => void : never
) extends (k: infer I) => void
  ? I
  : never;

/**
 * Helper for calculating the nested fields for a given type T1. This is needed
 * to distribute union types such as `undefined | {...}` (happens for optional
 * props) or `{a: A} | {b: B}`.
 *
 * In this use case, `V` is used to distribute the union types of `T[K]` on
 * `Record`, since `T[K]` is evaluated as an expression and not distributed.
 *
 * See https://www.typescriptlang.org/docs/handbook/advanced-types.html#distributive-conditional-types
 */
type ChildUpdateFields<K extends string, V> = V extends Record<string, unknown>
  ? AddPrefixToKeys<K, UpdateData<V>>
  : never;

/**
 * Returns a new map where every key is prefixed with the outer key appended
 * to a dot.
 */
type AddPrefixToKeys<
  Prefix extends string,
  T extends Record<string, unknown>,
> = {
  [K in keyof T & string as `${Prefix}.${K}`]+?: T[K];
};
