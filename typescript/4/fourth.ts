export type Maybe<T> = T | null;

export interface Scalars {
  ID: string,
  String: string,
  Boolean: boolean,
  Int: number,
  Float: number,
  /** Date custom scalar type */
  Date: any,
  DateTime: any,
}

export interface Address {
  __typename?: 'Address',
  id: Scalars['Float'],
  updtTs: Scalars['Date'],
  updtOpId: Scalars['Float'],
  isActive: Scalars['Boolean'],
  isCurrent: Scalars['Boolean'],
  line1: Scalars['String'],
  city: Scalars['String'],
  zipCode: Scalars['String'],
}

export interface Customer {
  __typename?: 'Customer',
  id: Scalars['Float'],
  updtTs: Scalars['Date'],
  updtOpId: Scalars['Float'],
  isActive: Scalars['Boolean'],
  isCurrent: Scalars['Boolean'],
  displayName: Scalars['String'],
  legalAddress: Address,
  legalName: Scalars['String'],
  vatNumber?: Maybe<Scalars['String']>,
  invoicingEmail: Scalars['String'],
  idNumber: Scalars['String'],
}

export type CustomerDetailPartsFragment = (
  { __typename?: 'Customer' }
  & Pick<Customer, 'id' | 'updtTs' | 'updtOpId' | 'isActive' | 'isCurrent' | 'displayName' | 'legalName' | 'vatNumber' | 'invoicingEmail' | 'idNumber'>
  & { legalAddress: (
    { __typename?: 'Address' }
    & Pick<Address, 'id' | 'updtTs' | 'updtOpId' | 'isActive' | 'isCurrent' | 'line1' | 'city' | 'zipCode'>
    ) }
  );
