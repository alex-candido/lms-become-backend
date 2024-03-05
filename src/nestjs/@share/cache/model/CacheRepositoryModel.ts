import { IFieldDTO } from '../dtos/IFieldDTO';

export default abstract class CacheRepositoryModel {
  abstract set(key: string, value: string, ttl: any): Promise<string | null>;
  abstract get(key: string): Promise<string | null>;
  abstract delete(key: string): Promise<number>;
  abstract deleteField(key: string, field: IFieldDTO): Promise<string | null>;
  abstract getField(key: string, field: IFieldDTO): Promise<string | null>;
}
