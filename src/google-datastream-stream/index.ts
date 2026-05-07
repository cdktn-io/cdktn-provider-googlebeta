/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_datastream_stream
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface GoogleDatastreamStreamConfig extends cdktn.TerraformMetaArguments {
  /**
  * Create the stream without validating it.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_datastream_stream#create_without_validation GoogleDatastreamStream#create_without_validation}
  */
  readonly createWithoutValidation?: boolean | cdktn.IResolvable;
  /**
  * A reference to a KMS encryption key. If provided, it will be used to encrypt the data. If left blank, data
  * will be encrypted using an internal Stream-specific encryption key provisioned through KMS.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_datastream_stream#customer_managed_encryption_key GoogleDatastreamStream#customer_managed_encryption_key}
  */
  readonly customerManagedEncryptionKey?: string;
  /**
  * Desired state of the Stream. Set this field to 'RUNNING' to start the stream,
  * 'NOT_STARTED' to create the stream without starting and 'PAUSED' to pause
  * the stream from a 'RUNNING' state.
  * Possible values: NOT_STARTED, RUNNING, PAUSED. Default: NOT_STARTED
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_datastream_stream#desired_state GoogleDatastreamStream#desired_state}
  */
  readonly desiredState?: string;
  /**
  * Display name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_datastream_stream#display_name GoogleDatastreamStream#display_name}
  */
  readonly displayName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_datastream_stream#id GoogleDatastreamStream#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Labels.
  * 
  * **Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
  * Please refer to the field 'effective_labels' for all of the labels present on the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_datastream_stream#labels GoogleDatastreamStream#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * The name of the location this stream is located in.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_datastream_stream#location GoogleDatastreamStream#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_datastream_stream#project GoogleDatastreamStream#project}
  */
  readonly project?: string;
  /**
  * The stream identifier.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_datastream_stream#stream_id GoogleDatastreamStream#stream_id}
  */
  readonly streamId: string;
  /**
  * backfill_all block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_datastream_stream#backfill_all GoogleDatastreamStream#backfill_all}
  */
  readonly backfillAll?: GoogleDatastreamStreamBackfillAll;
  /**
  * backfill_none block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_datastream_stream#backfill_none GoogleDatastreamStream#backfill_none}
  */
  readonly backfillNone?: GoogleDatastreamStreamBackfillNone;
  /**
  * destination_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_datastream_stream#destination_config GoogleDatastreamStream#destination_config}
  */
  readonly destinationConfig: GoogleDatastreamStreamDestinationConfig;
  /**
  * source_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_datastream_stream#source_config GoogleDatastreamStream#source_config}
  */
  readonly sourceConfig: GoogleDatastreamStreamSourceConfig;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_datastream_stream#timeouts GoogleDatastreamStream#timeouts}
  */
  readonly timeouts?: GoogleDatastreamStreamTimeouts;
}
export interface GoogleDatastreamStreamBackfillAllMysqlExcludedObjectsMysqlDatabasesMysqlTablesMysqlColumns {
  /**
  * Column collation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_datastream_stream#collation GoogleDatastreamStream#collation}
  */
  readonly collation?: string;
  /**
  * Column name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_datastream_stream#column GoogleDatastreamStream#column}
  */
  readonly column?: string;
  /**
  * The MySQL data type. Full data types list can be found here:
  * https://dev.mysql.com/doc/refman/8.0/en/data-types.html
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_datastream_stream#data_type GoogleDatastreamStream#data_type}
  */
  readonly dataType?: string;
  /**
  * Whether or not the column can accept a null value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_datastream_stream#nullable GoogleDatastreamStream#nullable}
  */
  readonly nullable?: boolean | cdktn.IResolvable;
  /**
  * The ordinal position of the column in the table.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_datastream_stream#ordinal_position GoogleDatastreamStream#ordinal_position}
  */
  readonly ordinalPosition?: number;
  /**
  * Whether or not the column represents a primary key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_datastream_stream#primary_key GoogleDatastreamStream#primary_key}
  */
  readonly primaryKey?: boolean | cdktn.IResolvable;
}

export function googleDatastreamStreamBackfillAllMysqlExcludedObjectsMysqlDatabasesMysqlTablesMysqlColumnsToTerraform(struct?: GoogleDatastreamStreamBackfillAllMysqlExcludedObjectsMysqlDatabasesMysqlTablesMysqlColumns | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    collation: cdktn.stringToTerraform(struct!.collation),
    column: cdktn.stringToTerraform(struct!.column),
    data_type: cdktn.stringToTerraform(struct!.dataType),
    nullable: cdktn.booleanToTerraform(struct!.nullable),
    ordinal_position: cdktn.numberToTerraform(struct!.ordinalPosition),
    primary_key: cdktn.booleanToTerraform(struct!.primaryKey),
  }
}


export function googleDatastreamStreamBackfillAllMysqlExcludedObjectsMysqlDatabasesMysqlTablesMysqlColumnsToHclTerraform(struct?: GoogleDatastreamStreamBackfillAllMysqlExcludedObjectsMysqlDatabasesMysqlTablesMysqlColumns | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    collation: {
      value: cdktn.stringToHclTerraform(struct!.collation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    column: {
      value: cdktn.stringToHclTerraform(struct!.column),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    data_type: {
      value: cdktn.stringToHclTerraform(struct!.dataType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    nullable: {
      value: cdktn.booleanToHclTerraform(struct!.nullable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    ordinal_position: {
      value: cdktn.numberToHclTerraform(struct!.ordinalPosition),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    primary_key: {
      value: cdktn.booleanToHclTerraform(struct!.primaryKey),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDatastreamStreamBackfillAllMysqlExcludedObjectsMysqlDatabasesMysqlTablesMysqlColumnsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): GoogleDatastreamStreamBackfillAllMysqlExcludedObjectsMysqlDatabasesMysqlTablesMysqlColumns | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._collation !== undefined) {
      hasAnyValues = true;
      internalValueResult.collation = this._collation;
    }
    if (this._column !== undefined) {
      hasAnyValues = true;
      internalValueResult.column = this._column;
    }
    if (this._dataType !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataType = this._dataType;
    }
    if (this._nullable !== undefined) {
      hasAnyValues = true;
      internalValueResult.nullable = this._nullable;
    }
    if (this._ordinalPosition !== undefined) {
      hasAnyValues = true;
      internalValueResult.ordinalPosition = this._ordinalPosition;
    }
    if (this._primaryKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.primaryKey = this._primaryKey;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDatastreamStreamBackfillAllMysqlExcludedObjectsMysqlDatabasesMysqlTablesMysqlColumns | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._collation = undefined;
      this._column = undefined;
      this._dataType = undefined;
      this._nullable = undefined;
      this._ordinalPosition = undefined;
      this._primaryKey = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._collation = value.collation;
      this._column = value.column;
      this._dataType = value.dataType;
      this._nullable = value.nullable;
      this._ordinalPosition = value.ordinalPosition;
      this._primaryKey = value.primaryKey;
    }
  }

  // collation - computed: false, optional: true, required: false
  private _collation?: string; 
  public get collation() {
    return this.getStringAttribute('collation');
  }
  public set collation(value: string) {
    this._collation = value;
  }
  public resetCollation() {
    this._collation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get collationInput() {
    return this._collation;
  }

  // column - computed: false, optional: true, required: false
  private _column?: string; 
  public get column() {
    return this.getStringAttribute('column');
  }
  public set column(value: string) {
    this._column = value;
  }
  public resetColumn() {
    this._column = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get columnInput() {
    return this._column;
  }

  // data_type - computed: false, optional: true, required: false
  private _dataType?: string; 
  public get dataType() {
    return this.getStringAttribute('data_type');
  }
  public set dataType(value: string) {
    this._dataType = value;
  }
  public resetDataType() {
    this._dataType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataTypeInput() {
    return this._dataType;
  }

  // length - computed: true, optional: false, required: false
  public get length() {
    return this.getNumberAttribute('length');
  }

  // nullable - computed: false, optional: true, required: false
  private _nullable?: boolean | cdktn.IResolvable; 
  public get nullable() {
    return this.getBooleanAttribute('nullable');
  }
  public set nullable(value: boolean | cdktn.IResolvable) {
    this._nullable = value;
  }
  public resetNullable() {
    this._nullable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nullableInput() {
    return this._nullable;
  }

  // ordinal_position - computed: false, optional: true, required: false
  private _ordinalPosition?: number; 
  public get ordinalPosition() {
    return this.getNumberAttribute('ordinal_position');
  }
  public set ordinalPosition(value: number) {
    this._ordinalPosition = value;
  }
  public resetOrdinalPosition() {
    this._ordinalPosition = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ordinalPositionInput() {
    return this._ordinalPosition;
  }

  // primary_key - computed: false, optional: true, required: false
  private _primaryKey?: boolean | cdktn.IResolvable; 
  public get primaryKey() {
    return this.getBooleanAttribute('primary_key');
  }
  public set primaryKey(value: boolean | cdktn.IResolvable) {
    this._primaryKey = value;
  }
  public resetPrimaryKey() {
    this._primaryKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get primaryKeyInput() {
    return this._primaryKey;
  }
}

export class GoogleDatastreamStreamBackfillAllMysqlExcludedObjectsMysqlDatabasesMysqlTablesMysqlColumnsList extends cdktn.ComplexList {
  public internalValue? : GoogleDatastreamStreamBackfillAllMysqlExcludedObjectsMysqlDatabasesMysqlTablesMysqlColumns[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): GoogleDatastreamStreamBackfillAllMysqlExcludedObjectsMysqlDatabasesMysqlTablesMysqlColumnsOutputReference {
    return new GoogleDatastreamStreamBackfillAllMysqlExcludedObjectsMysqlDatabasesMysqlTablesMysqlColumnsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleDatastreamStreamBackfillAllMysqlExcludedObjectsMysqlDatabasesMysqlTables {
  /**
  * Table name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_datastream_stream#table GoogleDatastreamStream#table}
  */
  readonly table: string;
  /**
  * mysql_columns block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_datastream_stream#mysql_columns GoogleDatastreamStream#mysql_columns}
  */
  readonly mysqlColumns?: GoogleDatastreamStreamBackfillAllMysqlExcludedObjectsMysqlDatabasesMysqlTablesMysqlColumns[] | cdktn.IResolvable;
}

export function googleDatastreamStreamBackfillAllMysqlExcludedObjectsMysqlDatabasesMysqlTablesToTerraform(struct?: GoogleDatastreamStreamBackfillAllMysqlExcludedObjectsMysqlDatabasesMysqlTables | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    table: cdktn.stringToTerraform(struct!.table),
    mysql_columns: cdktn.listMapper(googleDatastreamStreamBackfillAllMysqlExcludedObjectsMysqlDatabasesMysqlTablesMysqlColumnsToTerraform, true)(struct!.mysqlColumns),
  }
}


export function googleDatastreamStreamBackfillAllMysqlExcludedObjectsMysqlDatabasesMysqlTablesToHclTerraform(struct?: GoogleDatastreamStreamBackfillAllMysqlExcludedObjectsMysqlDatabasesMysqlTables | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    table: {
      value: cdktn.stringToHclTerraform(struct!.table),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mysql_columns: {
      value: cdktn.listMapperHcl(googleDatastreamStreamBackfillAllMysqlExcludedObjectsMysqlDatabasesMysqlTablesMysqlColumnsToHclTerraform, true)(struct!.mysqlColumns),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDatastreamStreamBackfillAllMysqlExcludedObjectsMysqlDatabasesMysqlTablesMysqlColumnsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDatastreamStreamBackfillAllMysqlExcludedObjectsMysqlDatabasesMysqlTablesOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): GoogleDatastreamStreamBackfillAllMysqlExcludedObjectsMysqlDatabasesMysqlTables | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._table !== undefined) {
      hasAnyValues = true;
      internalValueResult.table = this._table;
    }
    if (this._mysqlColumns?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.mysqlColumns = this._mysqlColumns?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDatastreamStreamBackfillAllMysqlExcludedObjectsMysqlDatabasesMysqlTables | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._table = undefined;
      this._mysqlColumns.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._table = value.table;
      this._mysqlColumns.internalValue = value.mysqlColumns;
    }
  }

  // table - computed: false, optional: false, required: true
  private _table?: string; 
  public get table() {
    return this.getStringAttribute('table');
  }
  public set table(value: string) {
    this._table = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tableInput() {
    return this._table;
  }

  // mysql_columns - computed: false, optional: true, required: false
  private _mysqlColumns = new GoogleDatastreamStreamBackfillAllMysqlExcludedObjectsMysqlDatabasesMysqlTablesMysqlColumnsList(this, "mysql_columns", false);
  public get mysqlColumns() {
    return this._mysqlColumns;
  }
  public putMysqlColumns(value: GoogleDatastreamStreamBackfillAllMysqlExcludedObjectsMysqlDatabasesMysqlTablesMysqlColumns[] | cdktn.IResolvable) {
    this._mysqlColumns.internalValue = value;
  }
  public resetMysqlColumns() {
    this._mysqlColumns.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mysqlColumnsInput() {
    return this._mysqlColumns.internalValue;
  }
}

export class GoogleDatastreamStreamBackfillAllMysqlExcludedObjectsMysqlDatabasesMysqlTablesList extends cdktn.ComplexList {
  public internalValue? : GoogleDatastreamStreamBackfillAllMysqlExcludedObjectsMysqlDatabasesMysqlTables[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): GoogleDatastreamStreamBackfillAllMysqlExcludedObjectsMysqlDatabasesMysqlTablesOutputReference {
    return new GoogleDatastreamStreamBackfillAllMysqlExcludedObjectsMysqlDatabasesMysqlTablesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleDatastreamStreamBackfillAllMysqlExcludedObjectsMysqlDatabases {
  /**
  * Database name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_datastream_stream#database GoogleDatastreamStream#database}
  */
  readonly database: string;
  /**
  * mysql_tables block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_datastream_stream#mysql_tables GoogleDatastreamStream#mysql_tables}
  */
  readonly mysqlTables?: GoogleDatastreamStreamBackfillAllMysqlExcludedObjectsMysqlDatabasesMysqlTables[] | cdktn.IResolvable;
}

export function googleDatastreamStreamBackfillAllMysqlExcludedObjectsMysqlDatabasesToTerraform(struct?: GoogleDatastreamStreamBackfillAllMysqlExcludedObjectsMysqlDatabases | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    database: cdktn.stringToTerraform(struct!.database),
    mysql_tables: cdktn.listMapper(googleDatastreamStreamBackfillAllMysqlExcludedObjectsMysqlDatabasesMysqlTablesToTerraform, true)(struct!.mysqlTables),
  }
}


export function googleDatastreamStreamBackfillAllMysqlExcludedObjectsMysqlDatabasesToHclTerraform(struct?: GoogleDatastreamStreamBackfillAllMysqlExcludedObjectsMysqlDatabases | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    database: {
      value: cdktn.stringToHclTerraform(struct!.database),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mysql_tables: {
      value: cdktn.listMapperHcl(googleDatastreamStreamBackfillAllMysqlExcludedObjectsMysqlDatabasesMysqlTablesToHclTerraform, true)(struct!.mysqlTables),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDatastreamStreamBackfillAllMysqlExcludedObjectsMysqlDatabasesMysqlTablesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDatastreamStreamBackfillAllMysqlExcludedObjectsMysqlDatabasesOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): GoogleDatastreamStreamBackfillAllMysqlExcludedObjectsMysqlDatabases | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._database !== undefined) {
      hasAnyValues = true;
      internalValueResult.database = this._database;
    }
    if (this._mysqlTables?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.mysqlTables = this._mysqlTables?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDatastreamStreamBackfillAllMysqlExcludedObjectsMysqlDatabases | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._database = undefined;
      this._mysqlTables.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._database = value.database;
      this._mysqlTables.internalValue = value.mysqlTables;
    }
  }

  // database - computed: false, optional: false, required: true
  private _database?: string; 
  public get database() {
    return this.getStringAttribute('database');
  }
  public set database(value: string) {
    this._database = value;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseInput() {
    return this._database;
  }

  // mysql_tables - computed: false, optional: true, required: false
  private _mysqlTables = new GoogleDatastreamStreamBackfillAllMysqlExcludedObjectsMysqlDatabasesMysqlTablesList(this, "mysql_tables", false);
  public get mysqlTables() {
    return this._mysqlTables;
  }
  public putMysqlTables(value: GoogleDatastreamStreamBackfillAllMysqlExcludedObjectsMysqlDatabasesMysqlTables[] | cdktn.IResolvable) {
    this._mysqlTables.internalValue = value;
  }
  public resetMysqlTables() {
    this._mysqlTables.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mysqlTablesInput() {
    return this._mysqlTables.internalValue;
  }
}

export class GoogleDatastreamStreamBackfillAllMysqlExcludedObjectsMysqlDatabasesList extends cdktn.ComplexList {
  public internalValue? : GoogleDatastreamStreamBackfillAllMysqlExcludedObjectsMysqlDatabases[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): GoogleDatastreamStreamBackfillAllMysqlExcludedObjectsMysqlDatabasesOutputReference {
    return new GoogleDatastreamStreamBackfillAllMysqlExcludedObjectsMysqlDatabasesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleDatastreamStreamBackfillAllMysqlExcludedObjects {
  /**
  * mysql_databases block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_datastream_stream#mysql_databases GoogleDatastreamStream#mysql_databases}
  */
  readonly mysqlDatabases: GoogleDatastreamStreamBackfillAllMysqlExcludedObjectsMysqlDatabases[] | cdktn.IResolvable;
}

export function googleDatastreamStreamBackfillAllMysqlExcludedObjectsToTerraform(struct?: GoogleDatastreamStreamBackfillAllMysqlExcludedObjectsOutputReference | GoogleDatastreamStreamBackfillAllMysqlExcludedObjects): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    mysql_databases: cdktn.listMapper(googleDatastreamStreamBackfillAllMysqlExcludedObjectsMysqlDatabasesToTerraform, true)(struct!.mysqlDatabases),
  }
}


export function googleDatastreamStreamBackfillAllMysqlExcludedObjectsToHclTerraform(struct?: GoogleDatastreamStreamBackfillAllMysqlExcludedObjectsOutputReference | GoogleDatastreamStreamBackfillAllMysqlExcludedObjects): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    mysql_databases: {
      value: cdktn.listMapperHcl(googleDatastreamStreamBackfillAllMysqlExcludedObjectsMysqlDatabasesToHclTerraform, true)(struct!.mysqlDatabases),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDatastreamStreamBackfillAllMysqlExcludedObjectsMysqlDatabasesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDatastreamStreamBackfillAllMysqlExcludedObjectsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDatastreamStreamBackfillAllMysqlExcludedObjects | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._mysqlDatabases?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.mysqlDatabases = this._mysqlDatabases?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDatastreamStreamBackfillAllMysqlExcludedObjects | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._mysqlDatabases.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._mysqlDatabases.internalValue = value.mysqlDatabases;
    }
  }

  // mysql_databases - computed: false, optional: false, required: true
  private _mysqlDatabases = new GoogleDatastreamStreamBackfillAllMysqlExcludedObjectsMysqlDatabasesList(this, "mysql_databases", false);
  public get mysqlDatabases() {
    return this._mysqlDatabases;
  }
  public putMysqlDatabases(value: GoogleDatastreamStreamBackfillAllMysqlExcludedObjectsMysqlDatabases[] | cdktn.IResolvable) {
    this._mysqlDatabases.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get mysqlDatabasesInput() {
    return this._mysqlDatabases.internalValue;
  }
}
export interface GoogleDatastreamStreamBackfillAllOracleExcludedObjectsOracleSchemasOracleTablesOracleColumns {
  /**
  * Column name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_datastream_stream#column GoogleDatastreamStream#column}
  */
  readonly column?: string;
  /**
  * The Oracle data type. Full data types list can be found here:
  * https://docs.oracle.com/en/database/oracle/oracle-database/21/sqlrf/Data-Types.html
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_datastream_stream#data_type GoogleDatastreamStream#data_type}
  */
  readonly dataType?: string;
}

export function googleDatastreamStreamBackfillAllOracleExcludedObjectsOracleSchemasOracleTablesOracleColumnsToTerraform(struct?: GoogleDatastreamStreamBackfillAllOracleExcludedObjectsOracleSchemasOracleTablesOracleColumns | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    column: cdktn.stringToTerraform(struct!.column),
    data_type: cdktn.stringToTerraform(struct!.dataType),
  }
}


export function googleDatastreamStreamBackfillAllOracleExcludedObjectsOracleSchemasOracleTablesOracleColumnsToHclTerraform(struct?: GoogleDatastreamStreamBackfillAllOracleExcludedObjectsOracleSchemasOracleTablesOracleColumns | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    column: {
      value: cdktn.stringToHclTerraform(struct!.column),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    data_type: {
      value: cdktn.stringToHclTerraform(struct!.dataType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDatastreamStreamBackfillAllOracleExcludedObjectsOracleSchemasOracleTablesOracleColumnsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): GoogleDatastreamStreamBackfillAllOracleExcludedObjectsOracleSchemasOracleTablesOracleColumns | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._column !== undefined) {
      hasAnyValues = true;
      internalValueResult.column = this._column;
    }
    if (this._dataType !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataType = this._dataType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDatastreamStreamBackfillAllOracleExcludedObjectsOracleSchemasOracleTablesOracleColumns | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._column = undefined;
      this._dataType = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._column = value.column;
      this._dataType = value.dataType;
    }
  }

  // column - computed: false, optional: true, required: false
  private _column?: string; 
  public get column() {
    return this.getStringAttribute('column');
  }
  public set column(value: string) {
    this._column = value;
  }
  public resetColumn() {
    this._column = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get columnInput() {
    return this._column;
  }

  // data_type - computed: false, optional: true, required: false
  private _dataType?: string; 
  public get dataType() {
    return this.getStringAttribute('data_type');
  }
  public set dataType(value: string) {
    this._dataType = value;
  }
  public resetDataType() {
    this._dataType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataTypeInput() {
    return this._dataType;
  }

  // encoding - computed: true, optional: false, required: false
  public get encoding() {
    return this.getStringAttribute('encoding');
  }

  // length - computed: true, optional: false, required: false
  public get length() {
    return this.getNumberAttribute('length');
  }

  // nullable - computed: true, optional: false, required: false
  public get nullable() {
    return this.getBooleanAttribute('nullable');
  }

  // ordinal_position - computed: true, optional: false, required: false
  public get ordinalPosition() {
    return this.getNumberAttribute('ordinal_position');
  }

  // precision - computed: true, optional: false, required: false
  public get precision() {
    return this.getNumberAttribute('precision');
  }

  // primary_key - computed: true, optional: false, required: false
  public get primaryKey() {
    return this.getBooleanAttribute('primary_key');
  }

  // scale - computed: true, optional: false, required: false
  public get scale() {
    return this.getNumberAttribute('scale');
  }
}

export class GoogleDatastreamStreamBackfillAllOracleExcludedObjectsOracleSchemasOracleTablesOracleColumnsList extends cdktn.ComplexList {
  public internalValue? : GoogleDatastreamStreamBackfillAllOracleExcludedObjectsOracleSchemasOracleTablesOracleColumns[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): GoogleDatastreamStreamBackfillAllOracleExcludedObjectsOracleSchemasOracleTablesOracleColumnsOutputReference {
    return new GoogleDatastreamStreamBackfillAllOracleExcludedObjectsOracleSchemasOracleTablesOracleColumnsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleDatastreamStreamBackfillAllOracleExcludedObjectsOracleSchemasOracleTables {
  /**
  * Table name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_datastream_stream#table GoogleDatastreamStream#table}
  */
  readonly table: string;
  /**
  * oracle_columns block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_datastream_stream#oracle_columns GoogleDatastreamStream#oracle_columns}
  */
  readonly oracleColumns?: GoogleDatastreamStreamBackfillAllOracleExcludedObjectsOracleSchemasOracleTablesOracleColumns[] | cdktn.IResolvable;
}

export function googleDatastreamStreamBackfillAllOracleExcludedObjectsOracleSchemasOracleTablesToTerraform(struct?: GoogleDatastreamStreamBackfillAllOracleExcludedObjectsOracleSchemasOracleTables | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    table: cdktn.stringToTerraform(struct!.table),
    oracle_columns: cdktn.listMapper(googleDatastreamStreamBackfillAllOracleExcludedObjectsOracleSchemasOracleTablesOracleColumnsToTerraform, true)(struct!.oracleColumns),
  }
}


export function googleDatastreamStreamBackfillAllOracleExcludedObjectsOracleSchemasOracleTablesToHclTerraform(struct?: GoogleDatastreamStreamBackfillAllOracleExcludedObjectsOracleSchemasOracleTables | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    table: {
      value: cdktn.stringToHclTerraform(struct!.table),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    oracle_columns: {
      value: cdktn.listMapperHcl(googleDatastreamStreamBackfillAllOracleExcludedObjectsOracleSchemasOracleTablesOracleColumnsToHclTerraform, true)(struct!.oracleColumns),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDatastreamStreamBackfillAllOracleExcludedObjectsOracleSchemasOracleTablesOracleColumnsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDatastreamStreamBackfillAllOracleExcludedObjectsOracleSchemasOracleTablesOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): GoogleDatastreamStreamBackfillAllOracleExcludedObjectsOracleSchemasOracleTables | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._table !== undefined) {
      hasAnyValues = true;
      internalValueResult.table = this._table;
    }
    if (this._oracleColumns?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.oracleColumns = this._oracleColumns?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDatastreamStreamBackfillAllOracleExcludedObjectsOracleSchemasOracleTables | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._table = undefined;
      this._oracleColumns.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._table = value.table;
      this._oracleColumns.internalValue = value.oracleColumns;
    }
  }

  // table - computed: false, optional: false, required: true
  private _table?: string; 
  public get table() {
    return this.getStringAttribute('table');
  }
  public set table(value: string) {
    this._table = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tableInput() {
    return this._table;
  }

  // oracle_columns - computed: false, optional: true, required: false
  private _oracleColumns = new GoogleDatastreamStreamBackfillAllOracleExcludedObjectsOracleSchemasOracleTablesOracleColumnsList(this, "oracle_columns", false);
  public get oracleColumns() {
    return this._oracleColumns;
  }
  public putOracleColumns(value: GoogleDatastreamStreamBackfillAllOracleExcludedObjectsOracleSchemasOracleTablesOracleColumns[] | cdktn.IResolvable) {
    this._oracleColumns.internalValue = value;
  }
  public resetOracleColumns() {
    this._oracleColumns.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oracleColumnsInput() {
    return this._oracleColumns.internalValue;
  }
}

export class GoogleDatastreamStreamBackfillAllOracleExcludedObjectsOracleSchemasOracleTablesList extends cdktn.ComplexList {
  public internalValue? : GoogleDatastreamStreamBackfillAllOracleExcludedObjectsOracleSchemasOracleTables[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): GoogleDatastreamStreamBackfillAllOracleExcludedObjectsOracleSchemasOracleTablesOutputReference {
    return new GoogleDatastreamStreamBackfillAllOracleExcludedObjectsOracleSchemasOracleTablesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleDatastreamStreamBackfillAllOracleExcludedObjectsOracleSchemas {
  /**
  * Schema name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_datastream_stream#schema GoogleDatastreamStream#schema}
  */
  readonly schema: string;
  /**
  * oracle_tables block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_datastream_stream#oracle_tables GoogleDatastreamStream#oracle_tables}
  */
  readonly oracleTables?: GoogleDatastreamStreamBackfillAllOracleExcludedObjectsOracleSchemasOracleTables[] | cdktn.IResolvable;
}

export function googleDatastreamStreamBackfillAllOracleExcludedObjectsOracleSchemasToTerraform(struct?: GoogleDatastreamStreamBackfillAllOracleExcludedObjectsOracleSchemas | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    schema: cdktn.stringToTerraform(struct!.schema),
    oracle_tables: cdktn.listMapper(googleDatastreamStreamBackfillAllOracleExcludedObjectsOracleSchemasOracleTablesToTerraform, true)(struct!.oracleTables),
  }
}


export function googleDatastreamStreamBackfillAllOracleExcludedObjectsOracleSchemasToHclTerraform(struct?: GoogleDatastreamStreamBackfillAllOracleExcludedObjectsOracleSchemas | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    schema: {
      value: cdktn.stringToHclTerraform(struct!.schema),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    oracle_tables: {
      value: cdktn.listMapperHcl(googleDatastreamStreamBackfillAllOracleExcludedObjectsOracleSchemasOracleTablesToHclTerraform, true)(struct!.oracleTables),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDatastreamStreamBackfillAllOracleExcludedObjectsOracleSchemasOracleTablesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDatastreamStreamBackfillAllOracleExcludedObjectsOracleSchemasOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): GoogleDatastreamStreamBackfillAllOracleExcludedObjectsOracleSchemas | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._schema !== undefined) {
      hasAnyValues = true;
      internalValueResult.schema = this._schema;
    }
    if (this._oracleTables?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.oracleTables = this._oracleTables?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDatastreamStreamBackfillAllOracleExcludedObjectsOracleSchemas | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._schema = undefined;
      this._oracleTables.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._schema = value.schema;
      this._oracleTables.internalValue = value.oracleTables;
    }
  }

  // schema - computed: false, optional: false, required: true
  private _schema?: string; 
  public get schema() {
    return this.getStringAttribute('schema');
  }
  public set schema(value: string) {
    this._schema = value;
  }
  // Temporarily expose input value. Use with caution.
  public get schemaInput() {
    return this._schema;
  }

  // oracle_tables - computed: false, optional: true, required: false
  private _oracleTables = new GoogleDatastreamStreamBackfillAllOracleExcludedObjectsOracleSchemasOracleTablesList(this, "oracle_tables", false);
  public get oracleTables() {
    return this._oracleTables;
  }
  public putOracleTables(value: GoogleDatastreamStreamBackfillAllOracleExcludedObjectsOracleSchemasOracleTables[] | cdktn.IResolvable) {
    this._oracleTables.internalValue = value;
  }
  public resetOracleTables() {
    this._oracleTables.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oracleTablesInput() {
    return this._oracleTables.internalValue;
  }
}

export class GoogleDatastreamStreamBackfillAllOracleExcludedObjectsOracleSchemasList extends cdktn.ComplexList {
  public internalValue? : GoogleDatastreamStreamBackfillAllOracleExcludedObjectsOracleSchemas[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): GoogleDatastreamStreamBackfillAllOracleExcludedObjectsOracleSchemasOutputReference {
    return new GoogleDatastreamStreamBackfillAllOracleExcludedObjectsOracleSchemasOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleDatastreamStreamBackfillAllOracleExcludedObjects {
  /**
  * oracle_schemas block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_datastream_stream#oracle_schemas GoogleDatastreamStream#oracle_schemas}
  */
  readonly oracleSchemas: GoogleDatastreamStreamBackfillAllOracleExcludedObjectsOracleSchemas[] | cdktn.IResolvable;
}

export function googleDatastreamStreamBackfillAllOracleExcludedObjectsToTerraform(struct?: GoogleDatastreamStreamBackfillAllOracleExcludedObjectsOutputReference | GoogleDatastreamStreamBackfillAllOracleExcludedObjects): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    oracle_schemas: cdktn.listMapper(googleDatastreamStreamBackfillAllOracleExcludedObjectsOracleSchemasToTerraform, true)(struct!.oracleSchemas),
  }
}


export function googleDatastreamStreamBackfillAllOracleExcludedObjectsToHclTerraform(struct?: GoogleDatastreamStreamBackfillAllOracleExcludedObjectsOutputReference | GoogleDatastreamStreamBackfillAllOracleExcludedObjects): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    oracle_schemas: {
      value: cdktn.listMapperHcl(googleDatastreamStreamBackfillAllOracleExcludedObjectsOracleSchemasToHclTerraform, true)(struct!.oracleSchemas),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDatastreamStreamBackfillAllOracleExcludedObjectsOracleSchemasList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDatastreamStreamBackfillAllOracleExcludedObjectsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDatastreamStreamBackfillAllOracleExcludedObjects | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._oracleSchemas?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.oracleSchemas = this._oracleSchemas?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDatastreamStreamBackfillAllOracleExcludedObjects | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._oracleSchemas.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._oracleSchemas.internalValue = value.oracleSchemas;
    }
  }

  // oracle_schemas - computed: false, optional: false, required: true
  private _oracleSchemas = new GoogleDatastreamStreamBackfillAllOracleExcludedObjectsOracleSchemasList(this, "oracle_schemas", false);
  public get oracleSchemas() {
    return this._oracleSchemas;
  }
  public putOracleSchemas(value: GoogleDatastreamStreamBackfillAllOracleExcludedObjectsOracleSchemas[] | cdktn.IResolvable) {
    this._oracleSchemas.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get oracleSchemasInput() {
    return this._oracleSchemas.internalValue;
  }
}
export interface GoogleDatastreamStreamBackfillAllPostgresqlExcludedObjectsPostgresqlSchemasPostgresqlTablesPostgresqlColumns {
  /**
  * Column name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_datastream_stream#column GoogleDatastreamStream#column}
  */
  readonly column?: string;
  /**
  * The PostgreSQL data type. Full data types list can be found here:
  * https://www.postgresql.org/docs/current/datatype.html
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_datastream_stream#data_type GoogleDatastreamStream#data_type}
  */
  readonly dataType?: string;
  /**
  * Whether or not the column can accept a null value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_datastream_stream#nullable GoogleDatastreamStream#nullable}
  */
  readonly nullable?: boolean | cdktn.IResolvable;
  /**
  * The ordinal position of the column in the table.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_datastream_stream#ordinal_position GoogleDatastreamStream#ordinal_position}
  */
  readonly ordinalPosition?: number;
  /**
  * Whether or not the column represents a primary key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_datastream_stream#primary_key GoogleDatastreamStream#primary_key}
  */
  readonly primaryKey?: boolean | cdktn.IResolvable;
}

export function googleDatastreamStreamBackfillAllPostgresqlExcludedObjectsPostgresqlSchemasPostgresqlTablesPostgresqlColumnsToTerraform(struct?: GoogleDatastreamStreamBackfillAllPostgresqlExcludedObjectsPostgresqlSchemasPostgresqlTablesPostgresqlColumns | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    column: cdktn.stringToTerraform(struct!.column),
    data_type: cdktn.stringToTerraform(struct!.dataType),
    nullable: cdktn.booleanToTerraform(struct!.nullable),
    ordinal_position: cdktn.numberToTerraform(struct!.ordinalPosition),
    primary_key: cdktn.booleanToTerraform(struct!.primaryKey),
  }
}


export function googleDatastreamStreamBackfillAllPostgresqlExcludedObjectsPostgresqlSchemasPostgresqlTablesPostgresqlColumnsToHclTerraform(struct?: GoogleDatastreamStreamBackfillAllPostgresqlExcludedObjectsPostgresqlSchemasPostgresqlTablesPostgresqlColumns | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    column: {
      value: cdktn.stringToHclTerraform(struct!.column),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    data_type: {
      value: cdktn.stringToHclTerraform(struct!.dataType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    nullable: {
      value: cdktn.booleanToHclTerraform(struct!.nullable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    ordinal_position: {
      value: cdktn.numberToHclTerraform(struct!.ordinalPosition),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    primary_key: {
      value: cdktn.booleanToHclTerraform(struct!.primaryKey),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDatastreamStreamBackfillAllPostgresqlExcludedObjectsPostgresqlSchemasPostgresqlTablesPostgresqlColumnsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): GoogleDatastreamStreamBackfillAllPostgresqlExcludedObjectsPostgresqlSchemasPostgresqlTablesPostgresqlColumns | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._column !== undefined) {
      hasAnyValues = true;
      internalValueResult.column = this._column;
    }
    if (this._dataType !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataType = this._dataType;
    }
    if (this._nullable !== undefined) {
      hasAnyValues = true;
      internalValueResult.nullable = this._nullable;
    }
    if (this._ordinalPosition !== undefined) {
      hasAnyValues = true;
      internalValueResult.ordinalPosition = this._ordinalPosition;
    }
    if (this._primaryKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.primaryKey = this._primaryKey;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDatastreamStreamBackfillAllPostgresqlExcludedObjectsPostgresqlSchemasPostgresqlTablesPostgresqlColumns | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._column = undefined;
      this._dataType = undefined;
      this._nullable = undefined;
      this._ordinalPosition = undefined;
      this._primaryKey = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._column = value.column;
      this._dataType = value.dataType;
      this._nullable = value.nullable;
      this._ordinalPosition = value.ordinalPosition;
      this._primaryKey = value.primaryKey;
    }
  }

  // column - computed: false, optional: true, required: false
  private _column?: string; 
  public get column() {
    return this.getStringAttribute('column');
  }
  public set column(value: string) {
    this._column = value;
  }
  public resetColumn() {
    this._column = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get columnInput() {
    return this._column;
  }

  // data_type - computed: false, optional: true, required: false
  private _dataType?: string; 
  public get dataType() {
    return this.getStringAttribute('data_type');
  }
  public set dataType(value: string) {
    this._dataType = value;
  }
  public resetDataType() {
    this._dataType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataTypeInput() {
    return this._dataType;
  }

  // length - computed: true, optional: false, required: false
  public get length() {
    return this.getNumberAttribute('length');
  }

  // nullable - computed: false, optional: true, required: false
  private _nullable?: boolean | cdktn.IResolvable; 
  public get nullable() {
    return this.getBooleanAttribute('nullable');
  }
  public set nullable(value: boolean | cdktn.IResolvable) {
    this._nullable = value;
  }
  public resetNullable() {
    this._nullable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nullableInput() {
    return this._nullable;
  }

  // ordinal_position - computed: false, optional: true, required: false
  private _ordinalPosition?: number; 
  public get ordinalPosition() {
    return this.getNumberAttribute('ordinal_position');
  }
  public set ordinalPosition(value: number) {
    this._ordinalPosition = value;
  }
  public resetOrdinalPosition() {
    this._ordinalPosition = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ordinalPositionInput() {
    return this._ordinalPosition;
  }

  // precision - computed: true, optional: false, required: false
  public get precision() {
    return this.getNumberAttribute('precision');
  }

  // primary_key - computed: false, optional: true, required: false
  private _primaryKey?: boolean | cdktn.IResolvable; 
  public get primaryKey() {
    return this.getBooleanAttribute('primary_key');
  }
  public set primaryKey(value: boolean | cdktn.IResolvable) {
    this._primaryKey = value;
  }
  public resetPrimaryKey() {
    this._primaryKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get primaryKeyInput() {
    return this._primaryKey;
  }

  // scale - computed: true, optional: false, required: false
  public get scale() {
    return this.getNumberAttribute('scale');
  }
}

export class GoogleDatastreamStreamBackfillAllPostgresqlExcludedObjectsPostgresqlSchemasPostgresqlTablesPostgresqlColumnsList extends cdktn.ComplexList {
  public internalValue? : GoogleDatastreamStreamBackfillAllPostgresqlExcludedObjectsPostgresqlSchemasPostgresqlTablesPostgresqlColumns[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): GoogleDatastreamStreamBackfillAllPostgresqlExcludedObjectsPostgresqlSchemasPostgresqlTablesPostgresqlColumnsOutputReference {
    return new GoogleDatastreamStreamBackfillAllPostgresqlExcludedObjectsPostgresqlSchemasPostgresqlTablesPostgresqlColumnsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleDatastreamStreamBackfillAllPostgresqlExcludedObjectsPostgresqlSchemasPostgresqlTables {
  /**
  * Table name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_datastream_stream#table GoogleDatastreamStream#table}
  */
  readonly table: string;
  /**
  * postgresql_columns block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_datastream_stream#postgresql_columns GoogleDatastreamStream#postgresql_columns}
  */
  readonly postgresqlColumns?: GoogleDatastreamStreamBackfillAllPostgresqlExcludedObjectsPostgresqlSchemasPostgresqlTablesPostgresqlColumns[] | cdktn.IResolvable;
}

export function googleDatastreamStreamBackfillAllPostgresqlExcludedObjectsPostgresqlSchemasPostgresqlTablesToTerraform(struct?: GoogleDatastreamStreamBackfillAllPostgresqlExcludedObjectsPostgresqlSchemasPostgresqlTables | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    table: cdktn.stringToTerraform(struct!.table),
    postgresql_columns: cdktn.listMapper(googleDatastreamStreamBackfillAllPostgresqlExcludedObjectsPostgresqlSchemasPostgresqlTablesPostgresqlColumnsToTerraform, true)(struct!.postgresqlColumns),
  }
}


export function googleDatastreamStreamBackfillAllPostgresqlExcludedObjectsPostgresqlSchemasPostgresqlTablesToHclTerraform(struct?: GoogleDatastreamStreamBackfillAllPostgresqlExcludedObjectsPostgresqlSchemasPostgresqlTables | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    table: {
      value: cdktn.stringToHclTerraform(struct!.table),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    postgresql_columns: {
      value: cdktn.listMapperHcl(googleDatastreamStreamBackfillAllPostgresqlExcludedObjectsPostgresqlSchemasPostgresqlTablesPostgresqlColumnsToHclTerraform, true)(struct!.postgresqlColumns),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDatastreamStreamBackfillAllPostgresqlExcludedObjectsPostgresqlSchemasPostgresqlTablesPostgresqlColumnsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDatastreamStreamBackfillAllPostgresqlExcludedObjectsPostgresqlSchemasPostgresqlTablesOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): GoogleDatastreamStreamBackfillAllPostgresqlExcludedObjectsPostgresqlSchemasPostgresqlTables | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._table !== undefined) {
      hasAnyValues = true;
      internalValueResult.table = this._table;
    }
    if (this._postgresqlColumns?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.postgresqlColumns = this._postgresqlColumns?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDatastreamStreamBackfillAllPostgresqlExcludedObjectsPostgresqlSchemasPostgresqlTables | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._table = undefined;
      this._postgresqlColumns.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._table = value.table;
      this._postgresqlColumns.internalValue = value.postgresqlColumns;
    }
  }

  // table - computed: false, optional: false, required: true
  private _table?: string; 
  public get table() {
    return this.getStringAttribute('table');
  }
  public set table(value: string) {
    this._table = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tableInput() {
    return this._table;
  }

  // postgresql_columns - computed: false, optional: true, required: false
  private _postgresqlColumns = new GoogleDatastreamStreamBackfillAllPostgresqlExcludedObjectsPostgresqlSchemasPostgresqlTablesPostgresqlColumnsList(this, "postgresql_columns", false);
  public get postgresqlColumns() {
    return this._postgresqlColumns;
  }
  public putPostgresqlColumns(value: GoogleDatastreamStreamBackfillAllPostgresqlExcludedObjectsPostgresqlSchemasPostgresqlTablesPostgresqlColumns[] | cdktn.IResolvable) {
    this._postgresqlColumns.internalValue = value;
  }
  public resetPostgresqlColumns() {
    this._postgresqlColumns.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get postgresqlColumnsInput() {
    return this._postgresqlColumns.internalValue;
  }
}

export class GoogleDatastreamStreamBackfillAllPostgresqlExcludedObjectsPostgresqlSchemasPostgresqlTablesList extends cdktn.ComplexList {
  public internalValue? : GoogleDatastreamStreamBackfillAllPostgresqlExcludedObjectsPostgresqlSchemasPostgresqlTables[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): GoogleDatastreamStreamBackfillAllPostgresqlExcludedObjectsPostgresqlSchemasPostgresqlTablesOutputReference {
    return new GoogleDatastreamStreamBackfillAllPostgresqlExcludedObjectsPostgresqlSchemasPostgresqlTablesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleDatastreamStreamBackfillAllPostgresqlExcludedObjectsPostgresqlSchemas {
  /**
  * Database name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_datastream_stream#schema GoogleDatastreamStream#schema}
  */
  readonly schema: string;
  /**
  * postgresql_tables block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_datastream_stream#postgresql_tables GoogleDatastreamStream#postgresql_tables}
  */
  readonly postgresqlTables?: GoogleDatastreamStreamBackfillAllPostgresqlExcludedObjectsPostgresqlSchemasPostgresqlTables[] | cdktn.IResolvable;
}

export function googleDatastreamStreamBackfillAllPostgresqlExcludedObjectsPostgresqlSchemasToTerraform(struct?: GoogleDatastreamStreamBackfillAllPostgresqlExcludedObjectsPostgresqlSchemas | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    schema: cdktn.stringToTerraform(struct!.schema),
    postgresql_tables: cdktn.listMapper(googleDatastreamStreamBackfillAllPostgresqlExcludedObjectsPostgresqlSchemasPostgresqlTablesToTerraform, true)(struct!.postgresqlTables),
  }
}


export function googleDatastreamStreamBackfillAllPostgresqlExcludedObjectsPostgresqlSchemasToHclTerraform(struct?: GoogleDatastreamStreamBackfillAllPostgresqlExcludedObjectsPostgresqlSchemas | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    schema: {
      value: cdktn.stringToHclTerraform(struct!.schema),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    postgresql_tables: {
      value: cdktn.listMapperHcl(googleDatastreamStreamBackfillAllPostgresqlExcludedObjectsPostgresqlSchemasPostgresqlTablesToHclTerraform, true)(struct!.postgresqlTables),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDatastreamStreamBackfillAllPostgresqlExcludedObjectsPostgresqlSchemasPostgresqlTablesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDatastreamStreamBackfillAllPostgresqlExcludedObjectsPostgresqlSchemasOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): GoogleDatastreamStreamBackfillAllPostgresqlExcludedObjectsPostgresqlSchemas | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._schema !== undefined) {
      hasAnyValues = true;
      internalValueResult.schema = this._schema;
    }
    if (this._postgresqlTables?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.postgresqlTables = this._postgresqlTables?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDatastreamStreamBackfillAllPostgresqlExcludedObjectsPostgresqlSchemas | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._schema = undefined;
      this._postgresqlTables.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._schema = value.schema;
      this._postgresqlTables.internalValue = value.postgresqlTables;
    }
  }

  // schema - computed: false, optional: false, required: true
  private _schema?: string; 
  public get schema() {
    return this.getStringAttribute('schema');
  }
  public set schema(value: string) {
    this._schema = value;
  }
  // Temporarily expose input value. Use with caution.
  public get schemaInput() {
    return this._schema;
  }

  // postgresql_tables - computed: false, optional: true, required: false
  private _postgresqlTables = new GoogleDatastreamStreamBackfillAllPostgresqlExcludedObjectsPostgresqlSchemasPostgresqlTablesList(this, "postgresql_tables", false);
  public get postgresqlTables() {
    return this._postgresqlTables;
  }
  public putPostgresqlTables(value: GoogleDatastreamStreamBackfillAllPostgresqlExcludedObjectsPostgresqlSchemasPostgresqlTables[] | cdktn.IResolvable) {
    this._postgresqlTables.internalValue = value;
  }
  public resetPostgresqlTables() {
    this._postgresqlTables.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get postgresqlTablesInput() {
    return this._postgresqlTables.internalValue;
  }
}

export class GoogleDatastreamStreamBackfillAllPostgresqlExcludedObjectsPostgresqlSchemasList extends cdktn.ComplexList {
  public internalValue? : GoogleDatastreamStreamBackfillAllPostgresqlExcludedObjectsPostgresqlSchemas[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): GoogleDatastreamStreamBackfillAllPostgresqlExcludedObjectsPostgresqlSchemasOutputReference {
    return new GoogleDatastreamStreamBackfillAllPostgresqlExcludedObjectsPostgresqlSchemasOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleDatastreamStreamBackfillAllPostgresqlExcludedObjects {
  /**
  * postgresql_schemas block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_datastream_stream#postgresql_schemas GoogleDatastreamStream#postgresql_schemas}
  */
  readonly postgresqlSchemas: GoogleDatastreamStreamBackfillAllPostgresqlExcludedObjectsPostgresqlSchemas[] | cdktn.IResolvable;
}

export function googleDatastreamStreamBackfillAllPostgresqlExcludedObjectsToTerraform(struct?: GoogleDatastreamStreamBackfillAllPostgresqlExcludedObjectsOutputReference | GoogleDatastreamStreamBackfillAllPostgresqlExcludedObjects): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    postgresql_schemas: cdktn.listMapper(googleDatastreamStreamBackfillAllPostgresqlExcludedObjectsPostgresqlSchemasToTerraform, true)(struct!.postgresqlSchemas),
  }
}


export function googleDatastreamStreamBackfillAllPostgresqlExcludedObjectsToHclTerraform(struct?: GoogleDatastreamStreamBackfillAllPostgresqlExcludedObjectsOutputReference | GoogleDatastreamStreamBackfillAllPostgresqlExcludedObjects): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    postgresql_schemas: {
      value: cdktn.listMapperHcl(googleDatastreamStreamBackfillAllPostgresqlExcludedObjectsPostgresqlSchemasToHclTerraform, true)(struct!.postgresqlSchemas),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDatastreamStreamBackfillAllPostgresqlExcludedObjectsPostgresqlSchemasList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDatastreamStreamBackfillAllPostgresqlExcludedObjectsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDatastreamStreamBackfillAllPostgresqlExcludedObjects | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._postgresqlSchemas?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.postgresqlSchemas = this._postgresqlSchemas?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDatastreamStreamBackfillAllPostgresqlExcludedObjects | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._postgresqlSchemas.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._postgresqlSchemas.internalValue = value.postgresqlSchemas;
    }
  }

  // postgresql_schemas - computed: false, optional: false, required: true
  private _postgresqlSchemas = new GoogleDatastreamStreamBackfillAllPostgresqlExcludedObjectsPostgresqlSchemasList(this, "postgresql_schemas", false);
  public get postgresqlSchemas() {
    return this._postgresqlSchemas;
  }
  public putPostgresqlSchemas(value: GoogleDatastreamStreamBackfillAllPostgresqlExcludedObjectsPostgresqlSchemas[] | cdktn.IResolvable) {
    this._postgresqlSchemas.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get postgresqlSchemasInput() {
    return this._postgresqlSchemas.internalValue;
  }
}
export interface GoogleDatastreamStreamBackfillAllSalesforceExcludedObjectsObjectsFields {
  /**
  * Field name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_datastream_stream#name GoogleDatastreamStream#name}
  */
  readonly name?: string;
}

export function googleDatastreamStreamBackfillAllSalesforceExcludedObjectsObjectsFieldsToTerraform(struct?: GoogleDatastreamStreamBackfillAllSalesforceExcludedObjectsObjectsFields | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktn.stringToTerraform(struct!.name),
  }
}


export function googleDatastreamStreamBackfillAllSalesforceExcludedObjectsObjectsFieldsToHclTerraform(struct?: GoogleDatastreamStreamBackfillAllSalesforceExcludedObjectsObjectsFields | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktn.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDatastreamStreamBackfillAllSalesforceExcludedObjectsObjectsFieldsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): GoogleDatastreamStreamBackfillAllSalesforceExcludedObjectsObjectsFields | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDatastreamStreamBackfillAllSalesforceExcludedObjectsObjectsFields | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
    }
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }
}

export class GoogleDatastreamStreamBackfillAllSalesforceExcludedObjectsObjectsFieldsList extends cdktn.ComplexList {
  public internalValue? : GoogleDatastreamStreamBackfillAllSalesforceExcludedObjectsObjectsFields[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): GoogleDatastreamStreamBackfillAllSalesforceExcludedObjectsObjectsFieldsOutputReference {
    return new GoogleDatastreamStreamBackfillAllSalesforceExcludedObjectsObjectsFieldsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleDatastreamStreamBackfillAllSalesforceExcludedObjectsObjects {
  /**
  * Name of object in Salesforce Org.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_datastream_stream#object_name GoogleDatastreamStream#object_name}
  */
  readonly objectName?: string;
  /**
  * fields block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_datastream_stream#fields GoogleDatastreamStream#fields}
  */
  readonly fields?: GoogleDatastreamStreamBackfillAllSalesforceExcludedObjectsObjectsFields[] | cdktn.IResolvable;
}

export function googleDatastreamStreamBackfillAllSalesforceExcludedObjectsObjectsToTerraform(struct?: GoogleDatastreamStreamBackfillAllSalesforceExcludedObjectsObjects | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    object_name: cdktn.stringToTerraform(struct!.objectName),
    fields: cdktn.listMapper(googleDatastreamStreamBackfillAllSalesforceExcludedObjectsObjectsFieldsToTerraform, true)(struct!.fields),
  }
}


export function googleDatastreamStreamBackfillAllSalesforceExcludedObjectsObjectsToHclTerraform(struct?: GoogleDatastreamStreamBackfillAllSalesforceExcludedObjectsObjects | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    object_name: {
      value: cdktn.stringToHclTerraform(struct!.objectName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    fields: {
      value: cdktn.listMapperHcl(googleDatastreamStreamBackfillAllSalesforceExcludedObjectsObjectsFieldsToHclTerraform, true)(struct!.fields),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDatastreamStreamBackfillAllSalesforceExcludedObjectsObjectsFieldsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDatastreamStreamBackfillAllSalesforceExcludedObjectsObjectsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): GoogleDatastreamStreamBackfillAllSalesforceExcludedObjectsObjects | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._objectName !== undefined) {
      hasAnyValues = true;
      internalValueResult.objectName = this._objectName;
    }
    if (this._fields?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fields = this._fields?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDatastreamStreamBackfillAllSalesforceExcludedObjectsObjects | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._objectName = undefined;
      this._fields.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._objectName = value.objectName;
      this._fields.internalValue = value.fields;
    }
  }

  // object_name - computed: false, optional: true, required: false
  private _objectName?: string; 
  public get objectName() {
    return this.getStringAttribute('object_name');
  }
  public set objectName(value: string) {
    this._objectName = value;
  }
  public resetObjectName() {
    this._objectName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectNameInput() {
    return this._objectName;
  }

  // fields - computed: false, optional: true, required: false
  private _fields = new GoogleDatastreamStreamBackfillAllSalesforceExcludedObjectsObjectsFieldsList(this, "fields", false);
  public get fields() {
    return this._fields;
  }
  public putFields(value: GoogleDatastreamStreamBackfillAllSalesforceExcludedObjectsObjectsFields[] | cdktn.IResolvable) {
    this._fields.internalValue = value;
  }
  public resetFields() {
    this._fields.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldsInput() {
    return this._fields.internalValue;
  }
}

export class GoogleDatastreamStreamBackfillAllSalesforceExcludedObjectsObjectsList extends cdktn.ComplexList {
  public internalValue? : GoogleDatastreamStreamBackfillAllSalesforceExcludedObjectsObjects[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): GoogleDatastreamStreamBackfillAllSalesforceExcludedObjectsObjectsOutputReference {
    return new GoogleDatastreamStreamBackfillAllSalesforceExcludedObjectsObjectsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleDatastreamStreamBackfillAllSalesforceExcludedObjects {
  /**
  * objects block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_datastream_stream#objects GoogleDatastreamStream#objects}
  */
  readonly objects: GoogleDatastreamStreamBackfillAllSalesforceExcludedObjectsObjects[] | cdktn.IResolvable;
}

export function googleDatastreamStreamBackfillAllSalesforceExcludedObjectsToTerraform(struct?: GoogleDatastreamStreamBackfillAllSalesforceExcludedObjectsOutputReference | GoogleDatastreamStreamBackfillAllSalesforceExcludedObjects): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    objects: cdktn.listMapper(googleDatastreamStreamBackfillAllSalesforceExcludedObjectsObjectsToTerraform, true)(struct!.objects),
  }
}


export function googleDatastreamStreamBackfillAllSalesforceExcludedObjectsToHclTerraform(struct?: GoogleDatastreamStreamBackfillAllSalesforceExcludedObjectsOutputReference | GoogleDatastreamStreamBackfillAllSalesforceExcludedObjects): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    objects: {
      value: cdktn.listMapperHcl(googleDatastreamStreamBackfillAllSalesforceExcludedObjectsObjectsToHclTerraform, true)(struct!.objects),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDatastreamStreamBackfillAllSalesforceExcludedObjectsObjectsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDatastreamStreamBackfillAllSalesforceExcludedObjectsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDatastreamStreamBackfillAllSalesforceExcludedObjects | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._objects?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.objects = this._objects?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDatastreamStreamBackfillAllSalesforceExcludedObjects | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._objects.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._objects.internalValue = value.objects;
    }
  }

  // objects - computed: false, optional: false, required: true
  private _objects = new GoogleDatastreamStreamBackfillAllSalesforceExcludedObjectsObjectsList(this, "objects", false);
  public get objects() {
    return this._objects;
  }
  public putObjects(value: GoogleDatastreamStreamBackfillAllSalesforceExcludedObjectsObjects[] | cdktn.IResolvable) {
    this._objects.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get objectsInput() {
    return this._objects.internalValue;
  }
}
export interface GoogleDatastreamStreamBackfillAllSqlServerExcludedObjectsSchemasTablesColumns {
  /**
  * Column name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_datastream_stream#column GoogleDatastreamStream#column}
  */
  readonly column?: string;
  /**
  * The SQL Server data type. Full data types list can be found here:
  * https://learn.microsoft.com/en-us/sql/t-sql/data-types/data-types-transact-sql?view=sql-server-ver16
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_datastream_stream#data_type GoogleDatastreamStream#data_type}
  */
  readonly dataType?: string;
}

export function googleDatastreamStreamBackfillAllSqlServerExcludedObjectsSchemasTablesColumnsToTerraform(struct?: GoogleDatastreamStreamBackfillAllSqlServerExcludedObjectsSchemasTablesColumns | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    column: cdktn.stringToTerraform(struct!.column),
    data_type: cdktn.stringToTerraform(struct!.dataType),
  }
}


export function googleDatastreamStreamBackfillAllSqlServerExcludedObjectsSchemasTablesColumnsToHclTerraform(struct?: GoogleDatastreamStreamBackfillAllSqlServerExcludedObjectsSchemasTablesColumns | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    column: {
      value: cdktn.stringToHclTerraform(struct!.column),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    data_type: {
      value: cdktn.stringToHclTerraform(struct!.dataType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDatastreamStreamBackfillAllSqlServerExcludedObjectsSchemasTablesColumnsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): GoogleDatastreamStreamBackfillAllSqlServerExcludedObjectsSchemasTablesColumns | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._column !== undefined) {
      hasAnyValues = true;
      internalValueResult.column = this._column;
    }
    if (this._dataType !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataType = this._dataType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDatastreamStreamBackfillAllSqlServerExcludedObjectsSchemasTablesColumns | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._column = undefined;
      this._dataType = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._column = value.column;
      this._dataType = value.dataType;
    }
  }

  // column - computed: false, optional: true, required: false
  private _column?: string; 
  public get column() {
    return this.getStringAttribute('column');
  }
  public set column(value: string) {
    this._column = value;
  }
  public resetColumn() {
    this._column = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get columnInput() {
    return this._column;
  }

  // data_type - computed: false, optional: true, required: false
  private _dataType?: string; 
  public get dataType() {
    return this.getStringAttribute('data_type');
  }
  public set dataType(value: string) {
    this._dataType = value;
  }
  public resetDataType() {
    this._dataType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataTypeInput() {
    return this._dataType;
  }

  // length - computed: true, optional: false, required: false
  public get length() {
    return this.getNumberAttribute('length');
  }

  // nullable - computed: true, optional: false, required: false
  public get nullable() {
    return this.getBooleanAttribute('nullable');
  }

  // ordinal_position - computed: true, optional: false, required: false
  public get ordinalPosition() {
    return this.getNumberAttribute('ordinal_position');
  }

  // precision - computed: true, optional: false, required: false
  public get precision() {
    return this.getNumberAttribute('precision');
  }

  // primary_key - computed: true, optional: false, required: false
  public get primaryKey() {
    return this.getBooleanAttribute('primary_key');
  }

  // scale - computed: true, optional: false, required: false
  public get scale() {
    return this.getNumberAttribute('scale');
  }
}

export class GoogleDatastreamStreamBackfillAllSqlServerExcludedObjectsSchemasTablesColumnsList extends cdktn.ComplexList {
  public internalValue? : GoogleDatastreamStreamBackfillAllSqlServerExcludedObjectsSchemasTablesColumns[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): GoogleDatastreamStreamBackfillAllSqlServerExcludedObjectsSchemasTablesColumnsOutputReference {
    return new GoogleDatastreamStreamBackfillAllSqlServerExcludedObjectsSchemasTablesColumnsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleDatastreamStreamBackfillAllSqlServerExcludedObjectsSchemasTables {
  /**
  * Table name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_datastream_stream#table GoogleDatastreamStream#table}
  */
  readonly table: string;
  /**
  * columns block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_datastream_stream#columns GoogleDatastreamStream#columns}
  */
  readonly columns?: GoogleDatastreamStreamBackfillAllSqlServerExcludedObjectsSchemasTablesColumns[] | cdktn.IResolvable;
}

export function googleDatastreamStreamBackfillAllSqlServerExcludedObjectsSchemasTablesToTerraform(struct?: GoogleDatastreamStreamBackfillAllSqlServerExcludedObjectsSchemasTables | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    table: cdktn.stringToTerraform(struct!.table),
    columns: cdktn.listMapper(googleDatastreamStreamBackfillAllSqlServerExcludedObjectsSchemasTablesColumnsToTerraform, true)(struct!.columns),
  }
}


export function googleDatastreamStreamBackfillAllSqlServerExcludedObjectsSchemasTablesToHclTerraform(struct?: GoogleDatastreamStreamBackfillAllSqlServerExcludedObjectsSchemasTables | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    table: {
      value: cdktn.stringToHclTerraform(struct!.table),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    columns: {
      value: cdktn.listMapperHcl(googleDatastreamStreamBackfillAllSqlServerExcludedObjectsSchemasTablesColumnsToHclTerraform, true)(struct!.columns),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDatastreamStreamBackfillAllSqlServerExcludedObjectsSchemasTablesColumnsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDatastreamStreamBackfillAllSqlServerExcludedObjectsSchemasTablesOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): GoogleDatastreamStreamBackfillAllSqlServerExcludedObjectsSchemasTables | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._table !== undefined) {
      hasAnyValues = true;
      internalValueResult.table = this._table;
    }
    if (this._columns?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.columns = this._columns?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDatastreamStreamBackfillAllSqlServerExcludedObjectsSchemasTables | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._table = undefined;
      this._columns.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._table = value.table;
      this._columns.internalValue = value.columns;
    }
  }

  // table - computed: false, optional: false, required: true
  private _table?: string; 
  public get table() {
    return this.getStringAttribute('table');
  }
  public set table(value: string) {
    this._table = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tableInput() {
    return this._table;
  }

  // columns - computed: false, optional: true, required: false
  private _columns = new GoogleDatastreamStreamBackfillAllSqlServerExcludedObjectsSchemasTablesColumnsList(this, "columns", false);
  public get columns() {
    return this._columns;
  }
  public putColumns(value: GoogleDatastreamStreamBackfillAllSqlServerExcludedObjectsSchemasTablesColumns[] | cdktn.IResolvable) {
    this._columns.internalValue = value;
  }
  public resetColumns() {
    this._columns.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get columnsInput() {
    return this._columns.internalValue;
  }
}

export class GoogleDatastreamStreamBackfillAllSqlServerExcludedObjectsSchemasTablesList extends cdktn.ComplexList {
  public internalValue? : GoogleDatastreamStreamBackfillAllSqlServerExcludedObjectsSchemasTables[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): GoogleDatastreamStreamBackfillAllSqlServerExcludedObjectsSchemasTablesOutputReference {
    return new GoogleDatastreamStreamBackfillAllSqlServerExcludedObjectsSchemasTablesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleDatastreamStreamBackfillAllSqlServerExcludedObjectsSchemas {
  /**
  * Schema name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_datastream_stream#schema GoogleDatastreamStream#schema}
  */
  readonly schema: string;
  /**
  * tables block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_datastream_stream#tables GoogleDatastreamStream#tables}
  */
  readonly tables?: GoogleDatastreamStreamBackfillAllSqlServerExcludedObjectsSchemasTables[] | cdktn.IResolvable;
}

export function googleDatastreamStreamBackfillAllSqlServerExcludedObjectsSchemasToTerraform(struct?: GoogleDatastreamStreamBackfillAllSqlServerExcludedObjectsSchemas | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    schema: cdktn.stringToTerraform(struct!.schema),
    tables: cdktn.listMapper(googleDatastreamStreamBackfillAllSqlServerExcludedObjectsSchemasTablesToTerraform, true)(struct!.tables),
  }
}


export function googleDatastreamStreamBackfillAllSqlServerExcludedObjectsSchemasToHclTerraform(struct?: GoogleDatastreamStreamBackfillAllSqlServerExcludedObjectsSchemas | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    schema: {
      value: cdktn.stringToHclTerraform(struct!.schema),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tables: {
      value: cdktn.listMapperHcl(googleDatastreamStreamBackfillAllSqlServerExcludedObjectsSchemasTablesToHclTerraform, true)(struct!.tables),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDatastreamStreamBackfillAllSqlServerExcludedObjectsSchemasTablesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDatastreamStreamBackfillAllSqlServerExcludedObjectsSchemasOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): GoogleDatastreamStreamBackfillAllSqlServerExcludedObjectsSchemas | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._schema !== undefined) {
      hasAnyValues = true;
      internalValueResult.schema = this._schema;
    }
    if (this._tables?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tables = this._tables?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDatastreamStreamBackfillAllSqlServerExcludedObjectsSchemas | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._schema = undefined;
      this._tables.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._schema = value.schema;
      this._tables.internalValue = value.tables;
    }
  }

  // schema - computed: false, optional: false, required: true
  private _schema?: string; 
  public get schema() {
    return this.getStringAttribute('schema');
  }
  public set schema(value: string) {
    this._schema = value;
  }
  // Temporarily expose input value. Use with caution.
  public get schemaInput() {
    return this._schema;
  }

  // tables - computed: false, optional: true, required: false
  private _tables = new GoogleDatastreamStreamBackfillAllSqlServerExcludedObjectsSchemasTablesList(this, "tables", false);
  public get tables() {
    return this._tables;
  }
  public putTables(value: GoogleDatastreamStreamBackfillAllSqlServerExcludedObjectsSchemasTables[] | cdktn.IResolvable) {
    this._tables.internalValue = value;
  }
  public resetTables() {
    this._tables.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tablesInput() {
    return this._tables.internalValue;
  }
}

export class GoogleDatastreamStreamBackfillAllSqlServerExcludedObjectsSchemasList extends cdktn.ComplexList {
  public internalValue? : GoogleDatastreamStreamBackfillAllSqlServerExcludedObjectsSchemas[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): GoogleDatastreamStreamBackfillAllSqlServerExcludedObjectsSchemasOutputReference {
    return new GoogleDatastreamStreamBackfillAllSqlServerExcludedObjectsSchemasOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleDatastreamStreamBackfillAllSqlServerExcludedObjects {
  /**
  * schemas block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_datastream_stream#schemas GoogleDatastreamStream#schemas}
  */
  readonly schemas: GoogleDatastreamStreamBackfillAllSqlServerExcludedObjectsSchemas[] | cdktn.IResolvable;
}

export function googleDatastreamStreamBackfillAllSqlServerExcludedObjectsToTerraform(struct?: GoogleDatastreamStreamBackfillAllSqlServerExcludedObjectsOutputReference | GoogleDatastreamStreamBackfillAllSqlServerExcludedObjects): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    schemas: cdktn.listMapper(googleDatastreamStreamBackfillAllSqlServerExcludedObjectsSchemasToTerraform, true)(struct!.schemas),
  }
}


export function googleDatastreamStreamBackfillAllSqlServerExcludedObjectsToHclTerraform(struct?: GoogleDatastreamStreamBackfillAllSqlServerExcludedObjectsOutputReference | GoogleDatastreamStreamBackfillAllSqlServerExcludedObjects): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    schemas: {
      value: cdktn.listMapperHcl(googleDatastreamStreamBackfillAllSqlServerExcludedObjectsSchemasToHclTerraform, true)(struct!.schemas),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDatastreamStreamBackfillAllSqlServerExcludedObjectsSchemasList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDatastreamStreamBackfillAllSqlServerExcludedObjectsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDatastreamStreamBackfillAllSqlServerExcludedObjects | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._schemas?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.schemas = this._schemas?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDatastreamStreamBackfillAllSqlServerExcludedObjects | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._schemas.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._schemas.internalValue = value.schemas;
    }
  }

  // schemas - computed: false, optional: false, required: true
  private _schemas = new GoogleDatastreamStreamBackfillAllSqlServerExcludedObjectsSchemasList(this, "schemas", false);
  public get schemas() {
    return this._schemas;
  }
  public putSchemas(value: GoogleDatastreamStreamBackfillAllSqlServerExcludedObjectsSchemas[] | cdktn.IResolvable) {
    this._schemas.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get schemasInput() {
    return this._schemas.internalValue;
  }
}
export interface GoogleDatastreamStreamBackfillAll {
  /**
  * mysql_excluded_objects block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_datastream_stream#mysql_excluded_objects GoogleDatastreamStream#mysql_excluded_objects}
  */
  readonly mysqlExcludedObjects?: GoogleDatastreamStreamBackfillAllMysqlExcludedObjects;
  /**
  * oracle_excluded_objects block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_datastream_stream#oracle_excluded_objects GoogleDatastreamStream#oracle_excluded_objects}
  */
  readonly oracleExcludedObjects?: GoogleDatastreamStreamBackfillAllOracleExcludedObjects;
  /**
  * postgresql_excluded_objects block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_datastream_stream#postgresql_excluded_objects GoogleDatastreamStream#postgresql_excluded_objects}
  */
  readonly postgresqlExcludedObjects?: GoogleDatastreamStreamBackfillAllPostgresqlExcludedObjects;
  /**
  * salesforce_excluded_objects block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_datastream_stream#salesforce_excluded_objects GoogleDatastreamStream#salesforce_excluded_objects}
  */
  readonly salesforceExcludedObjects?: GoogleDatastreamStreamBackfillAllSalesforceExcludedObjects;
  /**
  * sql_server_excluded_objects block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_datastream_stream#sql_server_excluded_objects GoogleDatastreamStream#sql_server_excluded_objects}
  */
  readonly sqlServerExcludedObjects?: GoogleDatastreamStreamBackfillAllSqlServerExcludedObjects;
}

export function googleDatastreamStreamBackfillAllToTerraform(struct?: GoogleDatastreamStreamBackfillAllOutputReference | GoogleDatastreamStreamBackfillAll): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    mysql_excluded_objects: googleDatastreamStreamBackfillAllMysqlExcludedObjectsToTerraform(struct!.mysqlExcludedObjects),
    oracle_excluded_objects: googleDatastreamStreamBackfillAllOracleExcludedObjectsToTerraform(struct!.oracleExcludedObjects),
    postgresql_excluded_objects: googleDatastreamStreamBackfillAllPostgresqlExcludedObjectsToTerraform(struct!.postgresqlExcludedObjects),
    salesforce_excluded_objects: googleDatastreamStreamBackfillAllSalesforceExcludedObjectsToTerraform(struct!.salesforceExcludedObjects),
    sql_server_excluded_objects: googleDatastreamStreamBackfillAllSqlServerExcludedObjectsToTerraform(struct!.sqlServerExcludedObjects),
  }
}


export function googleDatastreamStreamBackfillAllToHclTerraform(struct?: GoogleDatastreamStreamBackfillAllOutputReference | GoogleDatastreamStreamBackfillAll): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    mysql_excluded_objects: {
      value: googleDatastreamStreamBackfillAllMysqlExcludedObjectsToHclTerraform(struct!.mysqlExcludedObjects),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDatastreamStreamBackfillAllMysqlExcludedObjectsList",
    },
    oracle_excluded_objects: {
      value: googleDatastreamStreamBackfillAllOracleExcludedObjectsToHclTerraform(struct!.oracleExcludedObjects),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDatastreamStreamBackfillAllOracleExcludedObjectsList",
    },
    postgresql_excluded_objects: {
      value: googleDatastreamStreamBackfillAllPostgresqlExcludedObjectsToHclTerraform(struct!.postgresqlExcludedObjects),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDatastreamStreamBackfillAllPostgresqlExcludedObjectsList",
    },
    salesforce_excluded_objects: {
      value: googleDatastreamStreamBackfillAllSalesforceExcludedObjectsToHclTerraform(struct!.salesforceExcludedObjects),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDatastreamStreamBackfillAllSalesforceExcludedObjectsList",
    },
    sql_server_excluded_objects: {
      value: googleDatastreamStreamBackfillAllSqlServerExcludedObjectsToHclTerraform(struct!.sqlServerExcludedObjects),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDatastreamStreamBackfillAllSqlServerExcludedObjectsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDatastreamStreamBackfillAllOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDatastreamStreamBackfillAll | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._mysqlExcludedObjects?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.mysqlExcludedObjects = this._mysqlExcludedObjects?.internalValue;
    }
    if (this._oracleExcludedObjects?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.oracleExcludedObjects = this._oracleExcludedObjects?.internalValue;
    }
    if (this._postgresqlExcludedObjects?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.postgresqlExcludedObjects = this._postgresqlExcludedObjects?.internalValue;
    }
    if (this._salesforceExcludedObjects?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.salesforceExcludedObjects = this._salesforceExcludedObjects?.internalValue;
    }
    if (this._sqlServerExcludedObjects?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sqlServerExcludedObjects = this._sqlServerExcludedObjects?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDatastreamStreamBackfillAll | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._mysqlExcludedObjects.internalValue = undefined;
      this._oracleExcludedObjects.internalValue = undefined;
      this._postgresqlExcludedObjects.internalValue = undefined;
      this._salesforceExcludedObjects.internalValue = undefined;
      this._sqlServerExcludedObjects.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._mysqlExcludedObjects.internalValue = value.mysqlExcludedObjects;
      this._oracleExcludedObjects.internalValue = value.oracleExcludedObjects;
      this._postgresqlExcludedObjects.internalValue = value.postgresqlExcludedObjects;
      this._salesforceExcludedObjects.internalValue = value.salesforceExcludedObjects;
      this._sqlServerExcludedObjects.internalValue = value.sqlServerExcludedObjects;
    }
  }

  // mysql_excluded_objects - computed: false, optional: true, required: false
  private _mysqlExcludedObjects = new GoogleDatastreamStreamBackfillAllMysqlExcludedObjectsOutputReference(this, "mysql_excluded_objects");
  public get mysqlExcludedObjects() {
    return this._mysqlExcludedObjects;
  }
  public putMysqlExcludedObjects(value: GoogleDatastreamStreamBackfillAllMysqlExcludedObjects) {
    this._mysqlExcludedObjects.internalValue = value;
  }
  public resetMysqlExcludedObjects() {
    this._mysqlExcludedObjects.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mysqlExcludedObjectsInput() {
    return this._mysqlExcludedObjects.internalValue;
  }

  // oracle_excluded_objects - computed: false, optional: true, required: false
  private _oracleExcludedObjects = new GoogleDatastreamStreamBackfillAllOracleExcludedObjectsOutputReference(this, "oracle_excluded_objects");
  public get oracleExcludedObjects() {
    return this._oracleExcludedObjects;
  }
  public putOracleExcludedObjects(value: GoogleDatastreamStreamBackfillAllOracleExcludedObjects) {
    this._oracleExcludedObjects.internalValue = value;
  }
  public resetOracleExcludedObjects() {
    this._oracleExcludedObjects.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oracleExcludedObjectsInput() {
    return this._oracleExcludedObjects.internalValue;
  }

  // postgresql_excluded_objects - computed: false, optional: true, required: false
  private _postgresqlExcludedObjects = new GoogleDatastreamStreamBackfillAllPostgresqlExcludedObjectsOutputReference(this, "postgresql_excluded_objects");
  public get postgresqlExcludedObjects() {
    return this._postgresqlExcludedObjects;
  }
  public putPostgresqlExcludedObjects(value: GoogleDatastreamStreamBackfillAllPostgresqlExcludedObjects) {
    this._postgresqlExcludedObjects.internalValue = value;
  }
  public resetPostgresqlExcludedObjects() {
    this._postgresqlExcludedObjects.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get postgresqlExcludedObjectsInput() {
    return this._postgresqlExcludedObjects.internalValue;
  }

  // salesforce_excluded_objects - computed: false, optional: true, required: false
  private _salesforceExcludedObjects = new GoogleDatastreamStreamBackfillAllSalesforceExcludedObjectsOutputReference(this, "salesforce_excluded_objects");
  public get salesforceExcludedObjects() {
    return this._salesforceExcludedObjects;
  }
  public putSalesforceExcludedObjects(value: GoogleDatastreamStreamBackfillAllSalesforceExcludedObjects) {
    this._salesforceExcludedObjects.internalValue = value;
  }
  public resetSalesforceExcludedObjects() {
    this._salesforceExcludedObjects.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get salesforceExcludedObjectsInput() {
    return this._salesforceExcludedObjects.internalValue;
  }

  // sql_server_excluded_objects - computed: false, optional: true, required: false
  private _sqlServerExcludedObjects = new GoogleDatastreamStreamBackfillAllSqlServerExcludedObjectsOutputReference(this, "sql_server_excluded_objects");
  public get sqlServerExcludedObjects() {
    return this._sqlServerExcludedObjects;
  }
  public putSqlServerExcludedObjects(value: GoogleDatastreamStreamBackfillAllSqlServerExcludedObjects) {
    this._sqlServerExcludedObjects.internalValue = value;
  }
  public resetSqlServerExcludedObjects() {
    this._sqlServerExcludedObjects.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sqlServerExcludedObjectsInput() {
    return this._sqlServerExcludedObjects.internalValue;
  }
}
export interface GoogleDatastreamStreamBackfillNone {
}

export function googleDatastreamStreamBackfillNoneToTerraform(struct?: GoogleDatastreamStreamBackfillNoneOutputReference | GoogleDatastreamStreamBackfillNone): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function googleDatastreamStreamBackfillNoneToHclTerraform(struct?: GoogleDatastreamStreamBackfillNoneOutputReference | GoogleDatastreamStreamBackfillNone): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GoogleDatastreamStreamBackfillNoneOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDatastreamStreamBackfillNone | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDatastreamStreamBackfillNone | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface GoogleDatastreamStreamDestinationConfigBigqueryDestinationConfigAppendOnly {
}

export function googleDatastreamStreamDestinationConfigBigqueryDestinationConfigAppendOnlyToTerraform(struct?: GoogleDatastreamStreamDestinationConfigBigqueryDestinationConfigAppendOnlyOutputReference | GoogleDatastreamStreamDestinationConfigBigqueryDestinationConfigAppendOnly): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function googleDatastreamStreamDestinationConfigBigqueryDestinationConfigAppendOnlyToHclTerraform(struct?: GoogleDatastreamStreamDestinationConfigBigqueryDestinationConfigAppendOnlyOutputReference | GoogleDatastreamStreamDestinationConfigBigqueryDestinationConfigAppendOnly): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GoogleDatastreamStreamDestinationConfigBigqueryDestinationConfigAppendOnlyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDatastreamStreamDestinationConfigBigqueryDestinationConfigAppendOnly | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDatastreamStreamDestinationConfigBigqueryDestinationConfigAppendOnly | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface GoogleDatastreamStreamDestinationConfigBigqueryDestinationConfigBlmtConfig {
  /**
  * The Cloud Storage bucket name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_datastream_stream#bucket GoogleDatastreamStream#bucket}
  */
  readonly bucket: string;
  /**
  * The bigquery connection. Format: '{project}.{location}.{name}'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_datastream_stream#connection_name GoogleDatastreamStream#connection_name}
  */
  readonly connectionName: string;
  /**
  * The file format.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_datastream_stream#file_format GoogleDatastreamStream#file_format}
  */
  readonly fileFormat: string;
  /**
  * The root path inside the Cloud Storage bucket.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_datastream_stream#root_path GoogleDatastreamStream#root_path}
  */
  readonly rootPath?: string;
  /**
  * The table format.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_datastream_stream#table_format GoogleDatastreamStream#table_format}
  */
  readonly tableFormat: string;
}

export function googleDatastreamStreamDestinationConfigBigqueryDestinationConfigBlmtConfigToTerraform(struct?: GoogleDatastreamStreamDestinationConfigBigqueryDestinationConfigBlmtConfigOutputReference | GoogleDatastreamStreamDestinationConfigBigqueryDestinationConfigBlmtConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bucket: cdktn.stringToTerraform(struct!.bucket),
    connection_name: cdktn.stringToTerraform(struct!.connectionName),
    file_format: cdktn.stringToTerraform(struct!.fileFormat),
    root_path: cdktn.stringToTerraform(struct!.rootPath),
    table_format: cdktn.stringToTerraform(struct!.tableFormat),
  }
}


export function googleDatastreamStreamDestinationConfigBigqueryDestinationConfigBlmtConfigToHclTerraform(struct?: GoogleDatastreamStreamDestinationConfigBigqueryDestinationConfigBlmtConfigOutputReference | GoogleDatastreamStreamDestinationConfigBigqueryDestinationConfigBlmtConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bucket: {
      value: cdktn.stringToHclTerraform(struct!.bucket),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    connection_name: {
      value: cdktn.stringToHclTerraform(struct!.connectionName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    file_format: {
      value: cdktn.stringToHclTerraform(struct!.fileFormat),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    root_path: {
      value: cdktn.stringToHclTerraform(struct!.rootPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    table_format: {
      value: cdktn.stringToHclTerraform(struct!.tableFormat),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDatastreamStreamDestinationConfigBigqueryDestinationConfigBlmtConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDatastreamStreamDestinationConfigBigqueryDestinationConfigBlmtConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bucket !== undefined) {
      hasAnyValues = true;
      internalValueResult.bucket = this._bucket;
    }
    if (this._connectionName !== undefined) {
      hasAnyValues = true;
      internalValueResult.connectionName = this._connectionName;
    }
    if (this._fileFormat !== undefined) {
      hasAnyValues = true;
      internalValueResult.fileFormat = this._fileFormat;
    }
    if (this._rootPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.rootPath = this._rootPath;
    }
    if (this._tableFormat !== undefined) {
      hasAnyValues = true;
      internalValueResult.tableFormat = this._tableFormat;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDatastreamStreamDestinationConfigBigqueryDestinationConfigBlmtConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._bucket = undefined;
      this._connectionName = undefined;
      this._fileFormat = undefined;
      this._rootPath = undefined;
      this._tableFormat = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._bucket = value.bucket;
      this._connectionName = value.connectionName;
      this._fileFormat = value.fileFormat;
      this._rootPath = value.rootPath;
      this._tableFormat = value.tableFormat;
    }
  }

  // bucket - computed: false, optional: false, required: true
  private _bucket?: string; 
  public get bucket() {
    return this.getStringAttribute('bucket');
  }
  public set bucket(value: string) {
    this._bucket = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketInput() {
    return this._bucket;
  }

  // connection_name - computed: false, optional: false, required: true
  private _connectionName?: string; 
  public get connectionName() {
    return this.getStringAttribute('connection_name');
  }
  public set connectionName(value: string) {
    this._connectionName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionNameInput() {
    return this._connectionName;
  }

  // file_format - computed: false, optional: false, required: true
  private _fileFormat?: string; 
  public get fileFormat() {
    return this.getStringAttribute('file_format');
  }
  public set fileFormat(value: string) {
    this._fileFormat = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fileFormatInput() {
    return this._fileFormat;
  }

  // root_path - computed: false, optional: true, required: false
  private _rootPath?: string; 
  public get rootPath() {
    return this.getStringAttribute('root_path');
  }
  public set rootPath(value: string) {
    this._rootPath = value;
  }
  public resetRootPath() {
    this._rootPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rootPathInput() {
    return this._rootPath;
  }

  // table_format - computed: false, optional: false, required: true
  private _tableFormat?: string; 
  public get tableFormat() {
    return this.getStringAttribute('table_format');
  }
  public set tableFormat(value: string) {
    this._tableFormat = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tableFormatInput() {
    return this._tableFormat;
  }
}
export interface GoogleDatastreamStreamDestinationConfigBigqueryDestinationConfigMerge {
}

export function googleDatastreamStreamDestinationConfigBigqueryDestinationConfigMergeToTerraform(struct?: GoogleDatastreamStreamDestinationConfigBigqueryDestinationConfigMergeOutputReference | GoogleDatastreamStreamDestinationConfigBigqueryDestinationConfigMerge): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function googleDatastreamStreamDestinationConfigBigqueryDestinationConfigMergeToHclTerraform(struct?: GoogleDatastreamStreamDestinationConfigBigqueryDestinationConfigMergeOutputReference | GoogleDatastreamStreamDestinationConfigBigqueryDestinationConfigMerge): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GoogleDatastreamStreamDestinationConfigBigqueryDestinationConfigMergeOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDatastreamStreamDestinationConfigBigqueryDestinationConfigMerge | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDatastreamStreamDestinationConfigBigqueryDestinationConfigMerge | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface GoogleDatastreamStreamDestinationConfigBigqueryDestinationConfigSingleTargetDataset {
  /**
  * Dataset ID in the format projects/{project}/datasets/{dataset_id} or
  * {project}:{dataset_id}
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_datastream_stream#dataset_id GoogleDatastreamStream#dataset_id}
  */
  readonly datasetId: string;
}

export function googleDatastreamStreamDestinationConfigBigqueryDestinationConfigSingleTargetDatasetToTerraform(struct?: GoogleDatastreamStreamDestinationConfigBigqueryDestinationConfigSingleTargetDatasetOutputReference | GoogleDatastreamStreamDestinationConfigBigqueryDestinationConfigSingleTargetDataset): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dataset_id: cdktn.stringToTerraform(struct!.datasetId),
  }
}


export function googleDatastreamStreamDestinationConfigBigqueryDestinationConfigSingleTargetDatasetToHclTerraform(struct?: GoogleDatastreamStreamDestinationConfigBigqueryDestinationConfigSingleTargetDatasetOutputReference | GoogleDatastreamStreamDestinationConfigBigqueryDestinationConfigSingleTargetDataset): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dataset_id: {
      value: cdktn.stringToHclTerraform(struct!.datasetId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDatastreamStreamDestinationConfigBigqueryDestinationConfigSingleTargetDatasetOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDatastreamStreamDestinationConfigBigqueryDestinationConfigSingleTargetDataset | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._datasetId !== undefined) {
      hasAnyValues = true;
      internalValueResult.datasetId = this._datasetId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDatastreamStreamDestinationConfigBigqueryDestinationConfigSingleTargetDataset | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._datasetId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._datasetId = value.datasetId;
    }
  }

  // dataset_id - computed: false, optional: false, required: true
  private _datasetId?: string; 
  public get datasetId() {
    return this.getStringAttribute('dataset_id');
  }
  public set datasetId(value: string) {
    this._datasetId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get datasetIdInput() {
    return this._datasetId;
  }
}
export interface GoogleDatastreamStreamDestinationConfigBigqueryDestinationConfigSourceHierarchyDatasetsDatasetTemplate {
  /**
  * If supplied, every created dataset will have its name prefixed by the provided value.
  * The prefix and name will be separated by an underscore. i.e. _.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_datastream_stream#dataset_id_prefix GoogleDatastreamStream#dataset_id_prefix}
  */
  readonly datasetIdPrefix?: string;
  /**
  * Describes the Cloud KMS encryption key that will be used to protect destination BigQuery
  * table. The BigQuery Service Account associated with your project requires access to this
  * encryption key. i.e. projects/{project}/locations/{location}/keyRings/{key_ring}/cryptoKeys/{cryptoKey}.
  * See https://cloud.google.com/bigquery/docs/customer-managed-encryption for more information.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_datastream_stream#kms_key_name GoogleDatastreamStream#kms_key_name}
  */
  readonly kmsKeyName?: string;
  /**
  * The geographic location where the dataset should reside.
  * See https://cloud.google.com/bigquery/docs/locations for supported locations.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_datastream_stream#location GoogleDatastreamStream#location}
  */
  readonly location: string;
}

export function googleDatastreamStreamDestinationConfigBigqueryDestinationConfigSourceHierarchyDatasetsDatasetTemplateToTerraform(struct?: GoogleDatastreamStreamDestinationConfigBigqueryDestinationConfigSourceHierarchyDatasetsDatasetTemplateOutputReference | GoogleDatastreamStreamDestinationConfigBigqueryDestinationConfigSourceHierarchyDatasetsDatasetTemplate): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dataset_id_prefix: cdktn.stringToTerraform(struct!.datasetIdPrefix),
    kms_key_name: cdktn.stringToTerraform(struct!.kmsKeyName),
    location: cdktn.stringToTerraform(struct!.location),
  }
}


export function googleDatastreamStreamDestinationConfigBigqueryDestinationConfigSourceHierarchyDatasetsDatasetTemplateToHclTerraform(struct?: GoogleDatastreamStreamDestinationConfigBigqueryDestinationConfigSourceHierarchyDatasetsDatasetTemplateOutputReference | GoogleDatastreamStreamDestinationConfigBigqueryDestinationConfigSourceHierarchyDatasetsDatasetTemplate): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dataset_id_prefix: {
      value: cdktn.stringToHclTerraform(struct!.datasetIdPrefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    kms_key_name: {
      value: cdktn.stringToHclTerraform(struct!.kmsKeyName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    location: {
      value: cdktn.stringToHclTerraform(struct!.location),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDatastreamStreamDestinationConfigBigqueryDestinationConfigSourceHierarchyDatasetsDatasetTemplateOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDatastreamStreamDestinationConfigBigqueryDestinationConfigSourceHierarchyDatasetsDatasetTemplate | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._datasetIdPrefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.datasetIdPrefix = this._datasetIdPrefix;
    }
    if (this._kmsKeyName !== undefined) {
      hasAnyValues = true;
      internalValueResult.kmsKeyName = this._kmsKeyName;
    }
    if (this._location !== undefined) {
      hasAnyValues = true;
      internalValueResult.location = this._location;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDatastreamStreamDestinationConfigBigqueryDestinationConfigSourceHierarchyDatasetsDatasetTemplate | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._datasetIdPrefix = undefined;
      this._kmsKeyName = undefined;
      this._location = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._datasetIdPrefix = value.datasetIdPrefix;
      this._kmsKeyName = value.kmsKeyName;
      this._location = value.location;
    }
  }

  // dataset_id_prefix - computed: false, optional: true, required: false
  private _datasetIdPrefix?: string; 
  public get datasetIdPrefix() {
    return this.getStringAttribute('dataset_id_prefix');
  }
  public set datasetIdPrefix(value: string) {
    this._datasetIdPrefix = value;
  }
  public resetDatasetIdPrefix() {
    this._datasetIdPrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get datasetIdPrefixInput() {
    return this._datasetIdPrefix;
  }

  // kms_key_name - computed: false, optional: true, required: false
  private _kmsKeyName?: string; 
  public get kmsKeyName() {
    return this.getStringAttribute('kms_key_name');
  }
  public set kmsKeyName(value: string) {
    this._kmsKeyName = value;
  }
  public resetKmsKeyName() {
    this._kmsKeyName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kmsKeyNameInput() {
    return this._kmsKeyName;
  }

  // location - computed: false, optional: false, required: true
  private _location?: string; 
  public get location() {
    return this.getStringAttribute('location');
  }
  public set location(value: string) {
    this._location = value;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location;
  }
}
export interface GoogleDatastreamStreamDestinationConfigBigqueryDestinationConfigSourceHierarchyDatasets {
  /**
  * dataset_template block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_datastream_stream#dataset_template GoogleDatastreamStream#dataset_template}
  */
  readonly datasetTemplate: GoogleDatastreamStreamDestinationConfigBigqueryDestinationConfigSourceHierarchyDatasetsDatasetTemplate;
}

export function googleDatastreamStreamDestinationConfigBigqueryDestinationConfigSourceHierarchyDatasetsToTerraform(struct?: GoogleDatastreamStreamDestinationConfigBigqueryDestinationConfigSourceHierarchyDatasetsOutputReference | GoogleDatastreamStreamDestinationConfigBigqueryDestinationConfigSourceHierarchyDatasets): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dataset_template: googleDatastreamStreamDestinationConfigBigqueryDestinationConfigSourceHierarchyDatasetsDatasetTemplateToTerraform(struct!.datasetTemplate),
  }
}


export function googleDatastreamStreamDestinationConfigBigqueryDestinationConfigSourceHierarchyDatasetsToHclTerraform(struct?: GoogleDatastreamStreamDestinationConfigBigqueryDestinationConfigSourceHierarchyDatasetsOutputReference | GoogleDatastreamStreamDestinationConfigBigqueryDestinationConfigSourceHierarchyDatasets): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dataset_template: {
      value: googleDatastreamStreamDestinationConfigBigqueryDestinationConfigSourceHierarchyDatasetsDatasetTemplateToHclTerraform(struct!.datasetTemplate),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDatastreamStreamDestinationConfigBigqueryDestinationConfigSourceHierarchyDatasetsDatasetTemplateList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDatastreamStreamDestinationConfigBigqueryDestinationConfigSourceHierarchyDatasetsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDatastreamStreamDestinationConfigBigqueryDestinationConfigSourceHierarchyDatasets | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._datasetTemplate?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.datasetTemplate = this._datasetTemplate?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDatastreamStreamDestinationConfigBigqueryDestinationConfigSourceHierarchyDatasets | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._datasetTemplate.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._datasetTemplate.internalValue = value.datasetTemplate;
    }
  }

  // dataset_template - computed: false, optional: false, required: true
  private _datasetTemplate = new GoogleDatastreamStreamDestinationConfigBigqueryDestinationConfigSourceHierarchyDatasetsDatasetTemplateOutputReference(this, "dataset_template");
  public get datasetTemplate() {
    return this._datasetTemplate;
  }
  public putDatasetTemplate(value: GoogleDatastreamStreamDestinationConfigBigqueryDestinationConfigSourceHierarchyDatasetsDatasetTemplate) {
    this._datasetTemplate.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get datasetTemplateInput() {
    return this._datasetTemplate.internalValue;
  }
}
export interface GoogleDatastreamStreamDestinationConfigBigqueryDestinationConfig {
  /**
  * The guaranteed data freshness (in seconds) when querying tables created by the stream.
  * Editing this field will only affect new tables created in the future, but existing tables
  * will not be impacted. Lower values mean that queries will return fresher data, but may result in higher cost.
  * A duration in seconds with up to nine fractional digits, terminated by 's'. Example: "3.5s". Defaults to 900s.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_datastream_stream#data_freshness GoogleDatastreamStream#data_freshness}
  */
  readonly dataFreshness?: string;
  /**
  * append_only block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_datastream_stream#append_only GoogleDatastreamStream#append_only}
  */
  readonly appendOnly?: GoogleDatastreamStreamDestinationConfigBigqueryDestinationConfigAppendOnly;
  /**
  * blmt_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_datastream_stream#blmt_config GoogleDatastreamStream#blmt_config}
  */
  readonly blmtConfig?: GoogleDatastreamStreamDestinationConfigBigqueryDestinationConfigBlmtConfig;
  /**
  * merge block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_datastream_stream#merge GoogleDatastreamStream#merge}
  */
  readonly merge?: GoogleDatastreamStreamDestinationConfigBigqueryDestinationConfigMerge;
  /**
  * single_target_dataset block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_datastream_stream#single_target_dataset GoogleDatastreamStream#single_target_dataset}
  */
  readonly singleTargetDataset?: GoogleDatastreamStreamDestinationConfigBigqueryDestinationConfigSingleTargetDataset;
  /**
  * source_hierarchy_datasets block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_datastream_stream#source_hierarchy_datasets GoogleDatastreamStream#source_hierarchy_datasets}
  */
  readonly sourceHierarchyDatasets?: GoogleDatastreamStreamDestinationConfigBigqueryDestinationConfigSourceHierarchyDatasets;
}

export function googleDatastreamStreamDestinationConfigBigqueryDestinationConfigToTerraform(struct?: GoogleDatastreamStreamDestinationConfigBigqueryDestinationConfigOutputReference | GoogleDatastreamStreamDestinationConfigBigqueryDestinationConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    data_freshness: cdktn.stringToTerraform(struct!.dataFreshness),
    append_only: googleDatastreamStreamDestinationConfigBigqueryDestinationConfigAppendOnlyToTerraform(struct!.appendOnly),
    blmt_config: googleDatastreamStreamDestinationConfigBigqueryDestinationConfigBlmtConfigToTerraform(struct!.blmtConfig),
    merge: googleDatastreamStreamDestinationConfigBigqueryDestinationConfigMergeToTerraform(struct!.merge),
    single_target_dataset: googleDatastreamStreamDestinationConfigBigqueryDestinationConfigSingleTargetDatasetToTerraform(struct!.singleTargetDataset),
    source_hierarchy_datasets: googleDatastreamStreamDestinationConfigBigqueryDestinationConfigSourceHierarchyDatasetsToTerraform(struct!.sourceHierarchyDatasets),
  }
}


export function googleDatastreamStreamDestinationConfigBigqueryDestinationConfigToHclTerraform(struct?: GoogleDatastreamStreamDestinationConfigBigqueryDestinationConfigOutputReference | GoogleDatastreamStreamDestinationConfigBigqueryDestinationConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    data_freshness: {
      value: cdktn.stringToHclTerraform(struct!.dataFreshness),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    append_only: {
      value: googleDatastreamStreamDestinationConfigBigqueryDestinationConfigAppendOnlyToHclTerraform(struct!.appendOnly),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDatastreamStreamDestinationConfigBigqueryDestinationConfigAppendOnlyList",
    },
    blmt_config: {
      value: googleDatastreamStreamDestinationConfigBigqueryDestinationConfigBlmtConfigToHclTerraform(struct!.blmtConfig),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDatastreamStreamDestinationConfigBigqueryDestinationConfigBlmtConfigList",
    },
    merge: {
      value: googleDatastreamStreamDestinationConfigBigqueryDestinationConfigMergeToHclTerraform(struct!.merge),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDatastreamStreamDestinationConfigBigqueryDestinationConfigMergeList",
    },
    single_target_dataset: {
      value: googleDatastreamStreamDestinationConfigBigqueryDestinationConfigSingleTargetDatasetToHclTerraform(struct!.singleTargetDataset),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDatastreamStreamDestinationConfigBigqueryDestinationConfigSingleTargetDatasetList",
    },
    source_hierarchy_datasets: {
      value: googleDatastreamStreamDestinationConfigBigqueryDestinationConfigSourceHierarchyDatasetsToHclTerraform(struct!.sourceHierarchyDatasets),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDatastreamStreamDestinationConfigBigqueryDestinationConfigSourceHierarchyDatasetsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDatastreamStreamDestinationConfigBigqueryDestinationConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDatastreamStreamDestinationConfigBigqueryDestinationConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dataFreshness !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataFreshness = this._dataFreshness;
    }
    if (this._appendOnly?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.appendOnly = this._appendOnly?.internalValue;
    }
    if (this._blmtConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.blmtConfig = this._blmtConfig?.internalValue;
    }
    if (this._merge?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.merge = this._merge?.internalValue;
    }
    if (this._singleTargetDataset?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.singleTargetDataset = this._singleTargetDataset?.internalValue;
    }
    if (this._sourceHierarchyDatasets?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceHierarchyDatasets = this._sourceHierarchyDatasets?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDatastreamStreamDestinationConfigBigqueryDestinationConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dataFreshness = undefined;
      this._appendOnly.internalValue = undefined;
      this._blmtConfig.internalValue = undefined;
      this._merge.internalValue = undefined;
      this._singleTargetDataset.internalValue = undefined;
      this._sourceHierarchyDatasets.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._dataFreshness = value.dataFreshness;
      this._appendOnly.internalValue = value.appendOnly;
      this._blmtConfig.internalValue = value.blmtConfig;
      this._merge.internalValue = value.merge;
      this._singleTargetDataset.internalValue = value.singleTargetDataset;
      this._sourceHierarchyDatasets.internalValue = value.sourceHierarchyDatasets;
    }
  }

  // data_freshness - computed: false, optional: true, required: false
  private _dataFreshness?: string; 
  public get dataFreshness() {
    return this.getStringAttribute('data_freshness');
  }
  public set dataFreshness(value: string) {
    this._dataFreshness = value;
  }
  public resetDataFreshness() {
    this._dataFreshness = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataFreshnessInput() {
    return this._dataFreshness;
  }

  // append_only - computed: false, optional: true, required: false
  private _appendOnly = new GoogleDatastreamStreamDestinationConfigBigqueryDestinationConfigAppendOnlyOutputReference(this, "append_only");
  public get appendOnly() {
    return this._appendOnly;
  }
  public putAppendOnly(value: GoogleDatastreamStreamDestinationConfigBigqueryDestinationConfigAppendOnly) {
    this._appendOnly.internalValue = value;
  }
  public resetAppendOnly() {
    this._appendOnly.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appendOnlyInput() {
    return this._appendOnly.internalValue;
  }

  // blmt_config - computed: false, optional: true, required: false
  private _blmtConfig = new GoogleDatastreamStreamDestinationConfigBigqueryDestinationConfigBlmtConfigOutputReference(this, "blmt_config");
  public get blmtConfig() {
    return this._blmtConfig;
  }
  public putBlmtConfig(value: GoogleDatastreamStreamDestinationConfigBigqueryDestinationConfigBlmtConfig) {
    this._blmtConfig.internalValue = value;
  }
  public resetBlmtConfig() {
    this._blmtConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blmtConfigInput() {
    return this._blmtConfig.internalValue;
  }

  // merge - computed: false, optional: true, required: false
  private _merge = new GoogleDatastreamStreamDestinationConfigBigqueryDestinationConfigMergeOutputReference(this, "merge");
  public get merge() {
    return this._merge;
  }
  public putMerge(value: GoogleDatastreamStreamDestinationConfigBigqueryDestinationConfigMerge) {
    this._merge.internalValue = value;
  }
  public resetMerge() {
    this._merge.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mergeInput() {
    return this._merge.internalValue;
  }

  // single_target_dataset - computed: false, optional: true, required: false
  private _singleTargetDataset = new GoogleDatastreamStreamDestinationConfigBigqueryDestinationConfigSingleTargetDatasetOutputReference(this, "single_target_dataset");
  public get singleTargetDataset() {
    return this._singleTargetDataset;
  }
  public putSingleTargetDataset(value: GoogleDatastreamStreamDestinationConfigBigqueryDestinationConfigSingleTargetDataset) {
    this._singleTargetDataset.internalValue = value;
  }
  public resetSingleTargetDataset() {
    this._singleTargetDataset.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get singleTargetDatasetInput() {
    return this._singleTargetDataset.internalValue;
  }

  // source_hierarchy_datasets - computed: false, optional: true, required: false
  private _sourceHierarchyDatasets = new GoogleDatastreamStreamDestinationConfigBigqueryDestinationConfigSourceHierarchyDatasetsOutputReference(this, "source_hierarchy_datasets");
  public get sourceHierarchyDatasets() {
    return this._sourceHierarchyDatasets;
  }
  public putSourceHierarchyDatasets(value: GoogleDatastreamStreamDestinationConfigBigqueryDestinationConfigSourceHierarchyDatasets) {
    this._sourceHierarchyDatasets.internalValue = value;
  }
  public resetSourceHierarchyDatasets() {
    this._sourceHierarchyDatasets.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceHierarchyDatasetsInput() {
    return this._sourceHierarchyDatasets.internalValue;
  }
}
export interface GoogleDatastreamStreamDestinationConfigGcsDestinationConfigAvroFileFormat {
}

export function googleDatastreamStreamDestinationConfigGcsDestinationConfigAvroFileFormatToTerraform(struct?: GoogleDatastreamStreamDestinationConfigGcsDestinationConfigAvroFileFormatOutputReference | GoogleDatastreamStreamDestinationConfigGcsDestinationConfigAvroFileFormat): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function googleDatastreamStreamDestinationConfigGcsDestinationConfigAvroFileFormatToHclTerraform(struct?: GoogleDatastreamStreamDestinationConfigGcsDestinationConfigAvroFileFormatOutputReference | GoogleDatastreamStreamDestinationConfigGcsDestinationConfigAvroFileFormat): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GoogleDatastreamStreamDestinationConfigGcsDestinationConfigAvroFileFormatOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDatastreamStreamDestinationConfigGcsDestinationConfigAvroFileFormat | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDatastreamStreamDestinationConfigGcsDestinationConfigAvroFileFormat | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface GoogleDatastreamStreamDestinationConfigGcsDestinationConfigJsonFileFormat {
  /**
  * Compression of the loaded JSON file. Possible values: ["NO_COMPRESSION", "GZIP"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_datastream_stream#compression GoogleDatastreamStream#compression}
  */
  readonly compression?: string;
  /**
  * The schema file format along JSON data files. Possible values: ["NO_SCHEMA_FILE", "AVRO_SCHEMA_FILE"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_datastream_stream#schema_file_format GoogleDatastreamStream#schema_file_format}
  */
  readonly schemaFileFormat?: string;
}

export function googleDatastreamStreamDestinationConfigGcsDestinationConfigJsonFileFormatToTerraform(struct?: GoogleDatastreamStreamDestinationConfigGcsDestinationConfigJsonFileFormatOutputReference | GoogleDatastreamStreamDestinationConfigGcsDestinationConfigJsonFileFormat): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    compression: cdktn.stringToTerraform(struct!.compression),
    schema_file_format: cdktn.stringToTerraform(struct!.schemaFileFormat),
  }
}


export function googleDatastreamStreamDestinationConfigGcsDestinationConfigJsonFileFormatToHclTerraform(struct?: GoogleDatastreamStreamDestinationConfigGcsDestinationConfigJsonFileFormatOutputReference | GoogleDatastreamStreamDestinationConfigGcsDestinationConfigJsonFileFormat): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    compression: {
      value: cdktn.stringToHclTerraform(struct!.compression),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    schema_file_format: {
      value: cdktn.stringToHclTerraform(struct!.schemaFileFormat),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDatastreamStreamDestinationConfigGcsDestinationConfigJsonFileFormatOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDatastreamStreamDestinationConfigGcsDestinationConfigJsonFileFormat | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._compression !== undefined) {
      hasAnyValues = true;
      internalValueResult.compression = this._compression;
    }
    if (this._schemaFileFormat !== undefined) {
      hasAnyValues = true;
      internalValueResult.schemaFileFormat = this._schemaFileFormat;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDatastreamStreamDestinationConfigGcsDestinationConfigJsonFileFormat | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._compression = undefined;
      this._schemaFileFormat = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._compression = value.compression;
      this._schemaFileFormat = value.schemaFileFormat;
    }
  }

  // compression - computed: false, optional: true, required: false
  private _compression?: string; 
  public get compression() {
    return this.getStringAttribute('compression');
  }
  public set compression(value: string) {
    this._compression = value;
  }
  public resetCompression() {
    this._compression = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get compressionInput() {
    return this._compression;
  }

  // schema_file_format - computed: false, optional: true, required: false
  private _schemaFileFormat?: string; 
  public get schemaFileFormat() {
    return this.getStringAttribute('schema_file_format');
  }
  public set schemaFileFormat(value: string) {
    this._schemaFileFormat = value;
  }
  public resetSchemaFileFormat() {
    this._schemaFileFormat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schemaFileFormatInput() {
    return this._schemaFileFormat;
  }
}
export interface GoogleDatastreamStreamDestinationConfigGcsDestinationConfig {
  /**
  * The maximum duration for which new events are added before a file is closed and a new file is created.
  * A duration in seconds with up to nine fractional digits, terminated by 's'. Example: "3.5s". Defaults to 900s.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_datastream_stream#file_rotation_interval GoogleDatastreamStream#file_rotation_interval}
  */
  readonly fileRotationInterval?: string;
  /**
  * The maximum file size to be saved in the bucket.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_datastream_stream#file_rotation_mb GoogleDatastreamStream#file_rotation_mb}
  */
  readonly fileRotationMb?: number;
  /**
  * Path inside the Cloud Storage bucket to write data to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_datastream_stream#path GoogleDatastreamStream#path}
  */
  readonly path?: string;
  /**
  * avro_file_format block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_datastream_stream#avro_file_format GoogleDatastreamStream#avro_file_format}
  */
  readonly avroFileFormat?: GoogleDatastreamStreamDestinationConfigGcsDestinationConfigAvroFileFormat;
  /**
  * json_file_format block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_datastream_stream#json_file_format GoogleDatastreamStream#json_file_format}
  */
  readonly jsonFileFormat?: GoogleDatastreamStreamDestinationConfigGcsDestinationConfigJsonFileFormat;
}

export function googleDatastreamStreamDestinationConfigGcsDestinationConfigToTerraform(struct?: GoogleDatastreamStreamDestinationConfigGcsDestinationConfigOutputReference | GoogleDatastreamStreamDestinationConfigGcsDestinationConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    file_rotation_interval: cdktn.stringToTerraform(struct!.fileRotationInterval),
    file_rotation_mb: cdktn.numberToTerraform(struct!.fileRotationMb),
    path: cdktn.stringToTerraform(struct!.path),
    avro_file_format: googleDatastreamStreamDestinationConfigGcsDestinationConfigAvroFileFormatToTerraform(struct!.avroFileFormat),
    json_file_format: googleDatastreamStreamDestinationConfigGcsDestinationConfigJsonFileFormatToTerraform(struct!.jsonFileFormat),
  }
}


export function googleDatastreamStreamDestinationConfigGcsDestinationConfigToHclTerraform(struct?: GoogleDatastreamStreamDestinationConfigGcsDestinationConfigOutputReference | GoogleDatastreamStreamDestinationConfigGcsDestinationConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    file_rotation_interval: {
      value: cdktn.stringToHclTerraform(struct!.fileRotationInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    file_rotation_mb: {
      value: cdktn.numberToHclTerraform(struct!.fileRotationMb),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    path: {
      value: cdktn.stringToHclTerraform(struct!.path),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    avro_file_format: {
      value: googleDatastreamStreamDestinationConfigGcsDestinationConfigAvroFileFormatToHclTerraform(struct!.avroFileFormat),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDatastreamStreamDestinationConfigGcsDestinationConfigAvroFileFormatList",
    },
    json_file_format: {
      value: googleDatastreamStreamDestinationConfigGcsDestinationConfigJsonFileFormatToHclTerraform(struct!.jsonFileFormat),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDatastreamStreamDestinationConfigGcsDestinationConfigJsonFileFormatList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDatastreamStreamDestinationConfigGcsDestinationConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDatastreamStreamDestinationConfigGcsDestinationConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fileRotationInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.fileRotationInterval = this._fileRotationInterval;
    }
    if (this._fileRotationMb !== undefined) {
      hasAnyValues = true;
      internalValueResult.fileRotationMb = this._fileRotationMb;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    if (this._avroFileFormat?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.avroFileFormat = this._avroFileFormat?.internalValue;
    }
    if (this._jsonFileFormat?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.jsonFileFormat = this._jsonFileFormat?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDatastreamStreamDestinationConfigGcsDestinationConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._fileRotationInterval = undefined;
      this._fileRotationMb = undefined;
      this._path = undefined;
      this._avroFileFormat.internalValue = undefined;
      this._jsonFileFormat.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._fileRotationInterval = value.fileRotationInterval;
      this._fileRotationMb = value.fileRotationMb;
      this._path = value.path;
      this._avroFileFormat.internalValue = value.avroFileFormat;
      this._jsonFileFormat.internalValue = value.jsonFileFormat;
    }
  }

  // file_rotation_interval - computed: true, optional: true, required: false
  private _fileRotationInterval?: string; 
  public get fileRotationInterval() {
    return this.getStringAttribute('file_rotation_interval');
  }
  public set fileRotationInterval(value: string) {
    this._fileRotationInterval = value;
  }
  public resetFileRotationInterval() {
    this._fileRotationInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileRotationIntervalInput() {
    return this._fileRotationInterval;
  }

  // file_rotation_mb - computed: true, optional: true, required: false
  private _fileRotationMb?: number; 
  public get fileRotationMb() {
    return this.getNumberAttribute('file_rotation_mb');
  }
  public set fileRotationMb(value: number) {
    this._fileRotationMb = value;
  }
  public resetFileRotationMb() {
    this._fileRotationMb = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileRotationMbInput() {
    return this._fileRotationMb;
  }

  // path - computed: false, optional: true, required: false
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  public resetPath() {
    this._path = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }

  // avro_file_format - computed: false, optional: true, required: false
  private _avroFileFormat = new GoogleDatastreamStreamDestinationConfigGcsDestinationConfigAvroFileFormatOutputReference(this, "avro_file_format");
  public get avroFileFormat() {
    return this._avroFileFormat;
  }
  public putAvroFileFormat(value: GoogleDatastreamStreamDestinationConfigGcsDestinationConfigAvroFileFormat) {
    this._avroFileFormat.internalValue = value;
  }
  public resetAvroFileFormat() {
    this._avroFileFormat.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get avroFileFormatInput() {
    return this._avroFileFormat.internalValue;
  }

  // json_file_format - computed: false, optional: true, required: false
  private _jsonFileFormat = new GoogleDatastreamStreamDestinationConfigGcsDestinationConfigJsonFileFormatOutputReference(this, "json_file_format");
  public get jsonFileFormat() {
    return this._jsonFileFormat;
  }
  public putJsonFileFormat(value: GoogleDatastreamStreamDestinationConfigGcsDestinationConfigJsonFileFormat) {
    this._jsonFileFormat.internalValue = value;
  }
  public resetJsonFileFormat() {
    this._jsonFileFormat.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jsonFileFormatInput() {
    return this._jsonFileFormat.internalValue;
  }
}
export interface GoogleDatastreamStreamDestinationConfig {
  /**
  * Destination connection profile resource. Format: projects/{project}/locations/{location}/connectionProfiles/{name}
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_datastream_stream#destination_connection_profile GoogleDatastreamStream#destination_connection_profile}
  */
  readonly destinationConnectionProfile: string;
  /**
  * bigquery_destination_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_datastream_stream#bigquery_destination_config GoogleDatastreamStream#bigquery_destination_config}
  */
  readonly bigqueryDestinationConfig?: GoogleDatastreamStreamDestinationConfigBigqueryDestinationConfig;
  /**
  * gcs_destination_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_datastream_stream#gcs_destination_config GoogleDatastreamStream#gcs_destination_config}
  */
  readonly gcsDestinationConfig?: GoogleDatastreamStreamDestinationConfigGcsDestinationConfig;
}

export function googleDatastreamStreamDestinationConfigToTerraform(struct?: GoogleDatastreamStreamDestinationConfigOutputReference | GoogleDatastreamStreamDestinationConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    destination_connection_profile: cdktn.stringToTerraform(struct!.destinationConnectionProfile),
    bigquery_destination_config: googleDatastreamStreamDestinationConfigBigqueryDestinationConfigToTerraform(struct!.bigqueryDestinationConfig),
    gcs_destination_config: googleDatastreamStreamDestinationConfigGcsDestinationConfigToTerraform(struct!.gcsDestinationConfig),
  }
}


export function googleDatastreamStreamDestinationConfigToHclTerraform(struct?: GoogleDatastreamStreamDestinationConfigOutputReference | GoogleDatastreamStreamDestinationConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    destination_connection_profile: {
      value: cdktn.stringToHclTerraform(struct!.destinationConnectionProfile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    bigquery_destination_config: {
      value: googleDatastreamStreamDestinationConfigBigqueryDestinationConfigToHclTerraform(struct!.bigqueryDestinationConfig),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDatastreamStreamDestinationConfigBigqueryDestinationConfigList",
    },
    gcs_destination_config: {
      value: googleDatastreamStreamDestinationConfigGcsDestinationConfigToHclTerraform(struct!.gcsDestinationConfig),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDatastreamStreamDestinationConfigGcsDestinationConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDatastreamStreamDestinationConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDatastreamStreamDestinationConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._destinationConnectionProfile !== undefined) {
      hasAnyValues = true;
      internalValueResult.destinationConnectionProfile = this._destinationConnectionProfile;
    }
    if (this._bigqueryDestinationConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.bigqueryDestinationConfig = this._bigqueryDestinationConfig?.internalValue;
    }
    if (this._gcsDestinationConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.gcsDestinationConfig = this._gcsDestinationConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDatastreamStreamDestinationConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._destinationConnectionProfile = undefined;
      this._bigqueryDestinationConfig.internalValue = undefined;
      this._gcsDestinationConfig.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._destinationConnectionProfile = value.destinationConnectionProfile;
      this._bigqueryDestinationConfig.internalValue = value.bigqueryDestinationConfig;
      this._gcsDestinationConfig.internalValue = value.gcsDestinationConfig;
    }
  }

  // destination_connection_profile - computed: false, optional: false, required: true
  private _destinationConnectionProfile?: string; 
  public get destinationConnectionProfile() {
    return this.getStringAttribute('destination_connection_profile');
  }
  public set destinationConnectionProfile(value: string) {
    this._destinationConnectionProfile = value;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationConnectionProfileInput() {
    return this._destinationConnectionProfile;
  }

  // bigquery_destination_config - computed: false, optional: true, required: false
  private _bigqueryDestinationConfig = new GoogleDatastreamStreamDestinationConfigBigqueryDestinationConfigOutputReference(this, "bigquery_destination_config");
  public get bigqueryDestinationConfig() {
    return this._bigqueryDestinationConfig;
  }
  public putBigqueryDestinationConfig(value: GoogleDatastreamStreamDestinationConfigBigqueryDestinationConfig) {
    this._bigqueryDestinationConfig.internalValue = value;
  }
  public resetBigqueryDestinationConfig() {
    this._bigqueryDestinationConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bigqueryDestinationConfigInput() {
    return this._bigqueryDestinationConfig.internalValue;
  }

  // gcs_destination_config - computed: false, optional: true, required: false
  private _gcsDestinationConfig = new GoogleDatastreamStreamDestinationConfigGcsDestinationConfigOutputReference(this, "gcs_destination_config");
  public get gcsDestinationConfig() {
    return this._gcsDestinationConfig;
  }
  public putGcsDestinationConfig(value: GoogleDatastreamStreamDestinationConfigGcsDestinationConfig) {
    this._gcsDestinationConfig.internalValue = value;
  }
  public resetGcsDestinationConfig() {
    this._gcsDestinationConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gcsDestinationConfigInput() {
    return this._gcsDestinationConfig.internalValue;
  }
}
export interface GoogleDatastreamStreamSourceConfigMysqlSourceConfigBinaryLogPosition {
}

export function googleDatastreamStreamSourceConfigMysqlSourceConfigBinaryLogPositionToTerraform(struct?: GoogleDatastreamStreamSourceConfigMysqlSourceConfigBinaryLogPositionOutputReference | GoogleDatastreamStreamSourceConfigMysqlSourceConfigBinaryLogPosition): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function googleDatastreamStreamSourceConfigMysqlSourceConfigBinaryLogPositionToHclTerraform(struct?: GoogleDatastreamStreamSourceConfigMysqlSourceConfigBinaryLogPositionOutputReference | GoogleDatastreamStreamSourceConfigMysqlSourceConfigBinaryLogPosition): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GoogleDatastreamStreamSourceConfigMysqlSourceConfigBinaryLogPositionOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDatastreamStreamSourceConfigMysqlSourceConfigBinaryLogPosition | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDatastreamStreamSourceConfigMysqlSourceConfigBinaryLogPosition | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface GoogleDatastreamStreamSourceConfigMysqlSourceConfigExcludeObjectsMysqlDatabasesMysqlTablesMysqlColumns {
  /**
  * Column collation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_datastream_stream#collation GoogleDatastreamStream#collation}
  */
  readonly collation?: string;
  /**
  * Column name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_datastream_stream#column GoogleDatastreamStream#column}
  */
  readonly column?: string;
  /**
  * The MySQL data type. Full data types list can be found here:
  * https://dev.mysql.com/doc/refman/8.0/en/data-types.html
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_datastream_stream#data_type GoogleDatastreamStream#data_type}
  */
  readonly dataType?: string;
  /**
  * Whether or not the column can accept a null value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_datastream_stream#nullable GoogleDatastreamStream#nullable}
  */
  readonly nullable?: boolean | cdktn.IResolvable;
  /**
  * The ordinal position of the column in the table.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_datastream_stream#ordinal_position GoogleDatastreamStream#ordinal_position}
  */
  readonly ordinalPosition?: number;
  /**
  * Whether or not the column represents a primary key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_datastream_stream#primary_key GoogleDatastreamStream#primary_key}
  */
  readonly primaryKey?: boolean | cdktn.IResolvable;
}

export function googleDatastreamStreamSourceConfigMysqlSourceConfigExcludeObjectsMysqlDatabasesMysqlTablesMysqlColumnsToTerraform(struct?: GoogleDatastreamStreamSourceConfigMysqlSourceConfigExcludeObjectsMysqlDatabasesMysqlTablesMysqlColumns | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    collation: cdktn.stringToTerraform(struct!.collation),
    column: cdktn.stringToTerraform(struct!.column),
    data_type: cdktn.stringToTerraform(struct!.dataType),
    nullable: cdktn.booleanToTerraform(struct!.nullable),
    ordinal_position: cdktn.numberToTerraform(struct!.ordinalPosition),
    primary_key: cdktn.booleanToTerraform(struct!.primaryKey),
  }
}


export function googleDatastreamStreamSourceConfigMysqlSourceConfigExcludeObjectsMysqlDatabasesMysqlTablesMysqlColumnsToHclTerraform(struct?: GoogleDatastreamStreamSourceConfigMysqlSourceConfigExcludeObjectsMysqlDatabasesMysqlTablesMysqlColumns | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    collation: {
      value: cdktn.stringToHclTerraform(struct!.collation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    column: {
      value: cdktn.stringToHclTerraform(struct!.column),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    data_type: {
      value: cdktn.stringToHclTerraform(struct!.dataType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    nullable: {
      value: cdktn.booleanToHclTerraform(struct!.nullable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    ordinal_position: {
      value: cdktn.numberToHclTerraform(struct!.ordinalPosition),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    primary_key: {
      value: cdktn.booleanToHclTerraform(struct!.primaryKey),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDatastreamStreamSourceConfigMysqlSourceConfigExcludeObjectsMysqlDatabasesMysqlTablesMysqlColumnsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): GoogleDatastreamStreamSourceConfigMysqlSourceConfigExcludeObjectsMysqlDatabasesMysqlTablesMysqlColumns | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._collation !== undefined) {
      hasAnyValues = true;
      internalValueResult.collation = this._collation;
    }
    if (this._column !== undefined) {
      hasAnyValues = true;
      internalValueResult.column = this._column;
    }
    if (this._dataType !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataType = this._dataType;
    }
    if (this._nullable !== undefined) {
      hasAnyValues = true;
      internalValueResult.nullable = this._nullable;
    }
    if (this._ordinalPosition !== undefined) {
      hasAnyValues = true;
      internalValueResult.ordinalPosition = this._ordinalPosition;
    }
    if (this._primaryKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.primaryKey = this._primaryKey;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDatastreamStreamSourceConfigMysqlSourceConfigExcludeObjectsMysqlDatabasesMysqlTablesMysqlColumns | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._collation = undefined;
      this._column = undefined;
      this._dataType = undefined;
      this._nullable = undefined;
      this._ordinalPosition = undefined;
      this._primaryKey = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._collation = value.collation;
      this._column = value.column;
      this._dataType = value.dataType;
      this._nullable = value.nullable;
      this._ordinalPosition = value.ordinalPosition;
      this._primaryKey = value.primaryKey;
    }
  }

  // collation - computed: false, optional: true, required: false
  private _collation?: string; 
  public get collation() {
    return this.getStringAttribute('collation');
  }
  public set collation(value: string) {
    this._collation = value;
  }
  public resetCollation() {
    this._collation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get collationInput() {
    return this._collation;
  }

  // column - computed: false, optional: true, required: false
  private _column?: string; 
  public get column() {
    return this.getStringAttribute('column');
  }
  public set column(value: string) {
    this._column = value;
  }
  public resetColumn() {
    this._column = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get columnInput() {
    return this._column;
  }

  // data_type - computed: false, optional: true, required: false
  private _dataType?: string; 
  public get dataType() {
    return this.getStringAttribute('data_type');
  }
  public set dataType(value: string) {
    this._dataType = value;
  }
  public resetDataType() {
    this._dataType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataTypeInput() {
    return this._dataType;
  }

  // length - computed: true, optional: false, required: false
  public get length() {
    return this.getNumberAttribute('length');
  }

  // nullable - computed: false, optional: true, required: false
  private _nullable?: boolean | cdktn.IResolvable; 
  public get nullable() {
    return this.getBooleanAttribute('nullable');
  }
  public set nullable(value: boolean | cdktn.IResolvable) {
    this._nullable = value;
  }
  public resetNullable() {
    this._nullable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nullableInput() {
    return this._nullable;
  }

  // ordinal_position - computed: false, optional: true, required: false
  private _ordinalPosition?: number; 
  public get ordinalPosition() {
    return this.getNumberAttribute('ordinal_position');
  }
  public set ordinalPosition(value: number) {
    this._ordinalPosition = value;
  }
  public resetOrdinalPosition() {
    this._ordinalPosition = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ordinalPositionInput() {
    return this._ordinalPosition;
  }

  // primary_key - computed: false, optional: true, required: false
  private _primaryKey?: boolean | cdktn.IResolvable; 
  public get primaryKey() {
    return this.getBooleanAttribute('primary_key');
  }
  public set primaryKey(value: boolean | cdktn.IResolvable) {
    this._primaryKey = value;
  }
  public resetPrimaryKey() {
    this._primaryKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get primaryKeyInput() {
    return this._primaryKey;
  }
}

export class GoogleDatastreamStreamSourceConfigMysqlSourceConfigExcludeObjectsMysqlDatabasesMysqlTablesMysqlColumnsList extends cdktn.ComplexList {
  public internalValue? : GoogleDatastreamStreamSourceConfigMysqlSourceConfigExcludeObjectsMysqlDatabasesMysqlTablesMysqlColumns[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): GoogleDatastreamStreamSourceConfigMysqlSourceConfigExcludeObjectsMysqlDatabasesMysqlTablesMysqlColumnsOutputReference {
    return new GoogleDatastreamStreamSourceConfigMysqlSourceConfigExcludeObjectsMysqlDatabasesMysqlTablesMysqlColumnsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleDatastreamStreamSourceConfigMysqlSourceConfigExcludeObjectsMysqlDatabasesMysqlTables {
  /**
  * Table name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_datastream_stream#table GoogleDatastreamStream#table}
  */
  readonly table: string;
  /**
  * mysql_columns block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_datastream_stream#mysql_columns GoogleDatastreamStream#mysql_columns}
  */
  readonly mysqlColumns?: GoogleDatastreamStreamSourceConfigMysqlSourceConfigExcludeObjectsMysqlDatabasesMysqlTablesMysqlColumns[] | cdktn.IResolvable;
}

export function googleDatastreamStreamSourceConfigMysqlSourceConfigExcludeObjectsMysqlDatabasesMysqlTablesToTerraform(struct?: GoogleDatastreamStreamSourceConfigMysqlSourceConfigExcludeObjectsMysqlDatabasesMysqlTables | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    table: cdktn.stringToTerraform(struct!.table),
    mysql_columns: cdktn.listMapper(googleDatastreamStreamSourceConfigMysqlSourceConfigExcludeObjectsMysqlDatabasesMysqlTablesMysqlColumnsToTerraform, true)(struct!.mysqlColumns),
  }
}


export function googleDatastreamStreamSourceConfigMysqlSourceConfigExcludeObjectsMysqlDatabasesMysqlTablesToHclTerraform(struct?: GoogleDatastreamStreamSourceConfigMysqlSourceConfigExcludeObjectsMysqlDatabasesMysqlTables | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    table: {
      value: cdktn.stringToHclTerraform(struct!.table),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mysql_columns: {
      value: cdktn.listMapperHcl(googleDatastreamStreamSourceConfigMysqlSourceConfigExcludeObjectsMysqlDatabasesMysqlTablesMysqlColumnsToHclTerraform, true)(struct!.mysqlColumns),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDatastreamStreamSourceConfigMysqlSourceConfigExcludeObjectsMysqlDatabasesMysqlTablesMysqlColumnsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDatastreamStreamSourceConfigMysqlSourceConfigExcludeObjectsMysqlDatabasesMysqlTablesOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): GoogleDatastreamStreamSourceConfigMysqlSourceConfigExcludeObjectsMysqlDatabasesMysqlTables | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._table !== undefined) {
      hasAnyValues = true;
      internalValueResult.table = this._table;
    }
    if (this._mysqlColumns?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.mysqlColumns = this._mysqlColumns?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDatastreamStreamSourceConfigMysqlSourceConfigExcludeObjectsMysqlDatabasesMysqlTables | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._table = undefined;
      this._mysqlColumns.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._table = value.table;
      this._mysqlColumns.internalValue = value.mysqlColumns;
    }
  }

  // table - computed: false, optional: false, required: true
  private _table?: string; 
  public get table() {
    return this.getStringAttribute('table');
  }
  public set table(value: string) {
    this._table = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tableInput() {
    return this._table;
  }

  // mysql_columns - computed: false, optional: true, required: false
  private _mysqlColumns = new GoogleDatastreamStreamSourceConfigMysqlSourceConfigExcludeObjectsMysqlDatabasesMysqlTablesMysqlColumnsList(this, "mysql_columns", false);
  public get mysqlColumns() {
    return this._mysqlColumns;
  }
  public putMysqlColumns(value: GoogleDatastreamStreamSourceConfigMysqlSourceConfigExcludeObjectsMysqlDatabasesMysqlTablesMysqlColumns[] | cdktn.IResolvable) {
    this._mysqlColumns.internalValue = value;
  }
  public resetMysqlColumns() {
    this._mysqlColumns.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mysqlColumnsInput() {
    return this._mysqlColumns.internalValue;
  }
}

export class GoogleDatastreamStreamSourceConfigMysqlSourceConfigExcludeObjectsMysqlDatabasesMysqlTablesList extends cdktn.ComplexList {
  public internalValue? : GoogleDatastreamStreamSourceConfigMysqlSourceConfigExcludeObjectsMysqlDatabasesMysqlTables[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): GoogleDatastreamStreamSourceConfigMysqlSourceConfigExcludeObjectsMysqlDatabasesMysqlTablesOutputReference {
    return new GoogleDatastreamStreamSourceConfigMysqlSourceConfigExcludeObjectsMysqlDatabasesMysqlTablesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleDatastreamStreamSourceConfigMysqlSourceConfigExcludeObjectsMysqlDatabases {
  /**
  * Database name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_datastream_stream#database GoogleDatastreamStream#database}
  */
  readonly database: string;
  /**
  * mysql_tables block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_datastream_stream#mysql_tables GoogleDatastreamStream#mysql_tables}
  */
  readonly mysqlTables?: GoogleDatastreamStreamSourceConfigMysqlSourceConfigExcludeObjectsMysqlDatabasesMysqlTables[] | cdktn.IResolvable;
}

export function googleDatastreamStreamSourceConfigMysqlSourceConfigExcludeObjectsMysqlDatabasesToTerraform(struct?: GoogleDatastreamStreamSourceConfigMysqlSourceConfigExcludeObjectsMysqlDatabases | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    database: cdktn.stringToTerraform(struct!.database),
    mysql_tables: cdktn.listMapper(googleDatastreamStreamSourceConfigMysqlSourceConfigExcludeObjectsMysqlDatabasesMysqlTablesToTerraform, true)(struct!.mysqlTables),
  }
}


export function googleDatastreamStreamSourceConfigMysqlSourceConfigExcludeObjectsMysqlDatabasesToHclTerraform(struct?: GoogleDatastreamStreamSourceConfigMysqlSourceConfigExcludeObjectsMysqlDatabases | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    database: {
      value: cdktn.stringToHclTerraform(struct!.database),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mysql_tables: {
      value: cdktn.listMapperHcl(googleDatastreamStreamSourceConfigMysqlSourceConfigExcludeObjectsMysqlDatabasesMysqlTablesToHclTerraform, true)(struct!.mysqlTables),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDatastreamStreamSourceConfigMysqlSourceConfigExcludeObjectsMysqlDatabasesMysqlTablesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDatastreamStreamSourceConfigMysqlSourceConfigExcludeObjectsMysqlDatabasesOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): GoogleDatastreamStreamSourceConfigMysqlSourceConfigExcludeObjectsMysqlDatabases | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._database !== undefined) {
      hasAnyValues = true;
      internalValueResult.database = this._database;
    }
    if (this._mysqlTables?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.mysqlTables = this._mysqlTables?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDatastreamStreamSourceConfigMysqlSourceConfigExcludeObjectsMysqlDatabases | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._database = undefined;
      this._mysqlTables.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._database = value.database;
      this._mysqlTables.internalValue = value.mysqlTables;
    }
  }

  // database - computed: false, optional: false, required: true
  private _database?: string; 
  public get database() {
    return this.getStringAttribute('database');
  }
  public set database(value: string) {
    this._database = value;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseInput() {
    return this._database;
  }

  // mysql_tables - computed: false, optional: true, required: false
  private _mysqlTables = new GoogleDatastreamStreamSourceConfigMysqlSourceConfigExcludeObjectsMysqlDatabasesMysqlTablesList(this, "mysql_tables", false);
  public get mysqlTables() {
    return this._mysqlTables;
  }
  public putMysqlTables(value: GoogleDatastreamStreamSourceConfigMysqlSourceConfigExcludeObjectsMysqlDatabasesMysqlTables[] | cdktn.IResolvable) {
    this._mysqlTables.internalValue = value;
  }
  public resetMysqlTables() {
    this._mysqlTables.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mysqlTablesInput() {
    return this._mysqlTables.internalValue;
  }
}

export class GoogleDatastreamStreamSourceConfigMysqlSourceConfigExcludeObjectsMysqlDatabasesList extends cdktn.ComplexList {
  public internalValue? : GoogleDatastreamStreamSourceConfigMysqlSourceConfigExcludeObjectsMysqlDatabases[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): GoogleDatastreamStreamSourceConfigMysqlSourceConfigExcludeObjectsMysqlDatabasesOutputReference {
    return new GoogleDatastreamStreamSourceConfigMysqlSourceConfigExcludeObjectsMysqlDatabasesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleDatastreamStreamSourceConfigMysqlSourceConfigExcludeObjects {
  /**
  * mysql_databases block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_datastream_stream#mysql_databases GoogleDatastreamStream#mysql_databases}
  */
  readonly mysqlDatabases: GoogleDatastreamStreamSourceConfigMysqlSourceConfigExcludeObjectsMysqlDatabases[] | cdktn.IResolvable;
}

export function googleDatastreamStreamSourceConfigMysqlSourceConfigExcludeObjectsToTerraform(struct?: GoogleDatastreamStreamSourceConfigMysqlSourceConfigExcludeObjectsOutputReference | GoogleDatastreamStreamSourceConfigMysqlSourceConfigExcludeObjects): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    mysql_databases: cdktn.listMapper(googleDatastreamStreamSourceConfigMysqlSourceConfigExcludeObjectsMysqlDatabasesToTerraform, true)(struct!.mysqlDatabases),
  }
}


export function googleDatastreamStreamSourceConfigMysqlSourceConfigExcludeObjectsToHclTerraform(struct?: GoogleDatastreamStreamSourceConfigMysqlSourceConfigExcludeObjectsOutputReference | GoogleDatastreamStreamSourceConfigMysqlSourceConfigExcludeObjects): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    mysql_databases: {
      value: cdktn.listMapperHcl(googleDatastreamStreamSourceConfigMysqlSourceConfigExcludeObjectsMysqlDatabasesToHclTerraform, true)(struct!.mysqlDatabases),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDatastreamStreamSourceConfigMysqlSourceConfigExcludeObjectsMysqlDatabasesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDatastreamStreamSourceConfigMysqlSourceConfigExcludeObjectsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDatastreamStreamSourceConfigMysqlSourceConfigExcludeObjects | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._mysqlDatabases?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.mysqlDatabases = this._mysqlDatabases?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDatastreamStreamSourceConfigMysqlSourceConfigExcludeObjects | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._mysqlDatabases.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._mysqlDatabases.internalValue = value.mysqlDatabases;
    }
  }

  // mysql_databases - computed: false, optional: false, required: true
  private _mysqlDatabases = new GoogleDatastreamStreamSourceConfigMysqlSourceConfigExcludeObjectsMysqlDatabasesList(this, "mysql_databases", false);
  public get mysqlDatabases() {
    return this._mysqlDatabases;
  }
  public putMysqlDatabases(value: GoogleDatastreamStreamSourceConfigMysqlSourceConfigExcludeObjectsMysqlDatabases[] | cdktn.IResolvable) {
    this._mysqlDatabases.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get mysqlDatabasesInput() {
    return this._mysqlDatabases.internalValue;
  }
}
export interface GoogleDatastreamStreamSourceConfigMysqlSourceConfigGtid {
}

export function googleDatastreamStreamSourceConfigMysqlSourceConfigGtidToTerraform(struct?: GoogleDatastreamStreamSourceConfigMysqlSourceConfigGtidOutputReference | GoogleDatastreamStreamSourceConfigMysqlSourceConfigGtid): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function googleDatastreamStreamSourceConfigMysqlSourceConfigGtidToHclTerraform(struct?: GoogleDatastreamStreamSourceConfigMysqlSourceConfigGtidOutputReference | GoogleDatastreamStreamSourceConfigMysqlSourceConfigGtid): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GoogleDatastreamStreamSourceConfigMysqlSourceConfigGtidOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDatastreamStreamSourceConfigMysqlSourceConfigGtid | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDatastreamStreamSourceConfigMysqlSourceConfigGtid | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface GoogleDatastreamStreamSourceConfigMysqlSourceConfigIncludeObjectsMysqlDatabasesMysqlTablesMysqlColumns {
  /**
  * Column collation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_datastream_stream#collation GoogleDatastreamStream#collation}
  */
  readonly collation?: string;
  /**
  * Column name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_datastream_stream#column GoogleDatastreamStream#column}
  */
  readonly column?: string;
  /**
  * The MySQL data type. Full data types list can be found here:
  * https://dev.mysql.com/doc/refman/8.0/en/data-types.html
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_datastream_stream#data_type GoogleDatastreamStream#data_type}
  */
  readonly dataType?: string;
  /**
  * Whether or not the column can accept a null value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_datastream_stream#nullable GoogleDatastreamStream#nullable}
  */
  readonly nullable?: boolean | cdktn.IResolvable;
  /**
  * The ordinal position of the column in the table.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_datastream_stream#ordinal_position GoogleDatastreamStream#ordinal_position}
  */
  readonly ordinalPosition?: number;
  /**
  * Whether or not the column represents a primary key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_datastream_stream#primary_key GoogleDatastreamStream#primary_key}
  */
  readonly primaryKey?: boolean | cdktn.IResolvable;
}

export function googleDatastreamStreamSourceConfigMysqlSourceConfigIncludeObjectsMysqlDatabasesMysqlTablesMysqlColumnsToTerraform(struct?: GoogleDatastreamStreamSourceConfigMysqlSourceConfigIncludeObjectsMysqlDatabasesMysqlTablesMysqlColumns | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    collation: cdktn.stringToTerraform(struct!.collation),
    column: cdktn.stringToTerraform(struct!.column),
    data_type: cdktn.stringToTerraform(struct!.dataType),
    nullable: cdktn.booleanToTerraform(struct!.nullable),
    ordinal_position: cdktn.numberToTerraform(struct!.ordinalPosition),
    primary_key: cdktn.booleanToTerraform(struct!.primaryKey),
  }
}


export function googleDatastreamStreamSourceConfigMysqlSourceConfigIncludeObjectsMysqlDatabasesMysqlTablesMysqlColumnsToHclTerraform(struct?: GoogleDatastreamStreamSourceConfigMysqlSourceConfigIncludeObjectsMysqlDatabasesMysqlTablesMysqlColumns | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    collation: {
      value: cdktn.stringToHclTerraform(struct!.collation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    column: {
      value: cdktn.stringToHclTerraform(struct!.column),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    data_type: {
      value: cdktn.stringToHclTerraform(struct!.dataType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    nullable: {
      value: cdktn.booleanToHclTerraform(struct!.nullable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    ordinal_position: {
      value: cdktn.numberToHclTerraform(struct!.ordinalPosition),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    primary_key: {
      value: cdktn.booleanToHclTerraform(struct!.primaryKey),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDatastreamStreamSourceConfigMysqlSourceConfigIncludeObjectsMysqlDatabasesMysqlTablesMysqlColumnsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): GoogleDatastreamStreamSourceConfigMysqlSourceConfigIncludeObjectsMysqlDatabasesMysqlTablesMysqlColumns | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._collation !== undefined) {
      hasAnyValues = true;
      internalValueResult.collation = this._collation;
    }
    if (this._column !== undefined) {
      hasAnyValues = true;
      internalValueResult.column = this._column;
    }
    if (this._dataType !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataType = this._dataType;
    }
    if (this._nullable !== undefined) {
      hasAnyValues = true;
      internalValueResult.nullable = this._nullable;
    }
    if (this._ordinalPosition !== undefined) {
      hasAnyValues = true;
      internalValueResult.ordinalPosition = this._ordinalPosition;
    }
    if (this._primaryKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.primaryKey = this._primaryKey;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDatastreamStreamSourceConfigMysqlSourceConfigIncludeObjectsMysqlDatabasesMysqlTablesMysqlColumns | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._collation = undefined;
      this._column = undefined;
      this._dataType = undefined;
      this._nullable = undefined;
      this._ordinalPosition = undefined;
      this._primaryKey = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._collation = value.collation;
      this._column = value.column;
      this._dataType = value.dataType;
      this._nullable = value.nullable;
      this._ordinalPosition = value.ordinalPosition;
      this._primaryKey = value.primaryKey;
    }
  }

  // collation - computed: false, optional: true, required: false
  private _collation?: string; 
  public get collation() {
    return this.getStringAttribute('collation');
  }
  public set collation(value: string) {
    this._collation = value;
  }
  public resetCollation() {
    this._collation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get collationInput() {
    return this._collation;
  }

  // column - computed: false, optional: true, required: false
  private _column?: string; 
  public get column() {
    return this.getStringAttribute('column');
  }
  public set column(value: string) {
    this._column = value;
  }
  public resetColumn() {
    this._column = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get columnInput() {
    return this._column;
  }

  // data_type - computed: false, optional: true, required: false
  private _dataType?: string; 
  public get dataType() {
    return this.getStringAttribute('data_type');
  }
  public set dataType(value: string) {
    this._dataType = value;
  }
  public resetDataType() {
    this._dataType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataTypeInput() {
    return this._dataType;
  }

  // length - computed: true, optional: false, required: false
  public get length() {
    return this.getNumberAttribute('length');
  }

  // nullable - computed: false, optional: true, required: false
  private _nullable?: boolean | cdktn.IResolvable; 
  public get nullable() {
    return this.getBooleanAttribute('nullable');
  }
  public set nullable(value: boolean | cdktn.IResolvable) {
    this._nullable = value;
  }
  public resetNullable() {
    this._nullable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nullableInput() {
    return this._nullable;
  }

  // ordinal_position - computed: false, optional: true, required: false
  private _ordinalPosition?: number; 
  public get ordinalPosition() {
    return this.getNumberAttribute('ordinal_position');
  }
  public set ordinalPosition(value: number) {
    this._ordinalPosition = value;
  }
  public resetOrdinalPosition() {
    this._ordinalPosition = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ordinalPositionInput() {
    return this._ordinalPosition;
  }

  // primary_key - computed: false, optional: true, required: false
  private _primaryKey?: boolean | cdktn.IResolvable; 
  public get primaryKey() {
    return this.getBooleanAttribute('primary_key');
  }
  public set primaryKey(value: boolean | cdktn.IResolvable) {
    this._primaryKey = value;
  }
  public resetPrimaryKey() {
    this._primaryKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get primaryKeyInput() {
    return this._primaryKey;
  }
}

export class GoogleDatastreamStreamSourceConfigMysqlSourceConfigIncludeObjectsMysqlDatabasesMysqlTablesMysqlColumnsList extends cdktn.ComplexList {
  public internalValue? : GoogleDatastreamStreamSourceConfigMysqlSourceConfigIncludeObjectsMysqlDatabasesMysqlTablesMysqlColumns[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): GoogleDatastreamStreamSourceConfigMysqlSourceConfigIncludeObjectsMysqlDatabasesMysqlTablesMysqlColumnsOutputReference {
    return new GoogleDatastreamStreamSourceConfigMysqlSourceConfigIncludeObjectsMysqlDatabasesMysqlTablesMysqlColumnsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleDatastreamStreamSourceConfigMysqlSourceConfigIncludeObjectsMysqlDatabasesMysqlTables {
  /**
  * Table name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_datastream_stream#table GoogleDatastreamStream#table}
  */
  readonly table: string;
  /**
  * mysql_columns block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_datastream_stream#mysql_columns GoogleDatastreamStream#mysql_columns}
  */
  readonly mysqlColumns?: GoogleDatastreamStreamSourceConfigMysqlSourceConfigIncludeObjectsMysqlDatabasesMysqlTablesMysqlColumns[] | cdktn.IResolvable;
}

export function googleDatastreamStreamSourceConfigMysqlSourceConfigIncludeObjectsMysqlDatabasesMysqlTablesToTerraform(struct?: GoogleDatastreamStreamSourceConfigMysqlSourceConfigIncludeObjectsMysqlDatabasesMysqlTables | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    table: cdktn.stringToTerraform(struct!.table),
    mysql_columns: cdktn.listMapper(googleDatastreamStreamSourceConfigMysqlSourceConfigIncludeObjectsMysqlDatabasesMysqlTablesMysqlColumnsToTerraform, true)(struct!.mysqlColumns),
  }
}


export function googleDatastreamStreamSourceConfigMysqlSourceConfigIncludeObjectsMysqlDatabasesMysqlTablesToHclTerraform(struct?: GoogleDatastreamStreamSourceConfigMysqlSourceConfigIncludeObjectsMysqlDatabasesMysqlTables | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    table: {
      value: cdktn.stringToHclTerraform(struct!.table),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mysql_columns: {
      value: cdktn.listMapperHcl(googleDatastreamStreamSourceConfigMysqlSourceConfigIncludeObjectsMysqlDatabasesMysqlTablesMysqlColumnsToHclTerraform, true)(struct!.mysqlColumns),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDatastreamStreamSourceConfigMysqlSourceConfigIncludeObjectsMysqlDatabasesMysqlTablesMysqlColumnsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDatastreamStreamSourceConfigMysqlSourceConfigIncludeObjectsMysqlDatabasesMysqlTablesOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): GoogleDatastreamStreamSourceConfigMysqlSourceConfigIncludeObjectsMysqlDatabasesMysqlTables | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._table !== undefined) {
      hasAnyValues = true;
      internalValueResult.table = this._table;
    }
    if (this._mysqlColumns?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.mysqlColumns = this._mysqlColumns?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDatastreamStreamSourceConfigMysqlSourceConfigIncludeObjectsMysqlDatabasesMysqlTables | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._table = undefined;
      this._mysqlColumns.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._table = value.table;
      this._mysqlColumns.internalValue = value.mysqlColumns;
    }
  }

  // table - computed: false, optional: false, required: true
  private _table?: string; 
  public get table() {
    return this.getStringAttribute('table');
  }
  public set table(value: string) {
    this._table = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tableInput() {
    return this._table;
  }

  // mysql_columns - computed: false, optional: true, required: false
  private _mysqlColumns = new GoogleDatastreamStreamSourceConfigMysqlSourceConfigIncludeObjectsMysqlDatabasesMysqlTablesMysqlColumnsList(this, "mysql_columns", false);
  public get mysqlColumns() {
    return this._mysqlColumns;
  }
  public putMysqlColumns(value: GoogleDatastreamStreamSourceConfigMysqlSourceConfigIncludeObjectsMysqlDatabasesMysqlTablesMysqlColumns[] | cdktn.IResolvable) {
    this._mysqlColumns.internalValue = value;
  }
  public resetMysqlColumns() {
    this._mysqlColumns.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mysqlColumnsInput() {
    return this._mysqlColumns.internalValue;
  }
}

export class GoogleDatastreamStreamSourceConfigMysqlSourceConfigIncludeObjectsMysqlDatabasesMysqlTablesList extends cdktn.ComplexList {
  public internalValue? : GoogleDatastreamStreamSourceConfigMysqlSourceConfigIncludeObjectsMysqlDatabasesMysqlTables[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): GoogleDatastreamStreamSourceConfigMysqlSourceConfigIncludeObjectsMysqlDatabasesMysqlTablesOutputReference {
    return new GoogleDatastreamStreamSourceConfigMysqlSourceConfigIncludeObjectsMysqlDatabasesMysqlTablesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleDatastreamStreamSourceConfigMysqlSourceConfigIncludeObjectsMysqlDatabases {
  /**
  * Database name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_datastream_stream#database GoogleDatastreamStream#database}
  */
  readonly database: string;
  /**
  * mysql_tables block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_datastream_stream#mysql_tables GoogleDatastreamStream#mysql_tables}
  */
  readonly mysqlTables?: GoogleDatastreamStreamSourceConfigMysqlSourceConfigIncludeObjectsMysqlDatabasesMysqlTables[] | cdktn.IResolvable;
}

export function googleDatastreamStreamSourceConfigMysqlSourceConfigIncludeObjectsMysqlDatabasesToTerraform(struct?: GoogleDatastreamStreamSourceConfigMysqlSourceConfigIncludeObjectsMysqlDatabases | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    database: cdktn.stringToTerraform(struct!.database),
    mysql_tables: cdktn.listMapper(googleDatastreamStreamSourceConfigMysqlSourceConfigIncludeObjectsMysqlDatabasesMysqlTablesToTerraform, true)(struct!.mysqlTables),
  }
}


export function googleDatastreamStreamSourceConfigMysqlSourceConfigIncludeObjectsMysqlDatabasesToHclTerraform(struct?: GoogleDatastreamStreamSourceConfigMysqlSourceConfigIncludeObjectsMysqlDatabases | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    database: {
      value: cdktn.stringToHclTerraform(struct!.database),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mysql_tables: {
      value: cdktn.listMapperHcl(googleDatastreamStreamSourceConfigMysqlSourceConfigIncludeObjectsMysqlDatabasesMysqlTablesToHclTerraform, true)(struct!.mysqlTables),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDatastreamStreamSourceConfigMysqlSourceConfigIncludeObjectsMysqlDatabasesMysqlTablesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDatastreamStreamSourceConfigMysqlSourceConfigIncludeObjectsMysqlDatabasesOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): GoogleDatastreamStreamSourceConfigMysqlSourceConfigIncludeObjectsMysqlDatabases | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._database !== undefined) {
      hasAnyValues = true;
      internalValueResult.database = this._database;
    }
    if (this._mysqlTables?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.mysqlTables = this._mysqlTables?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDatastreamStreamSourceConfigMysqlSourceConfigIncludeObjectsMysqlDatabases | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._database = undefined;
      this._mysqlTables.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._database = value.database;
      this._mysqlTables.internalValue = value.mysqlTables;
    }
  }

  // database - computed: false, optional: false, required: true
  private _database?: string; 
  public get database() {
    return this.getStringAttribute('database');
  }
  public set database(value: string) {
    this._database = value;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseInput() {
    return this._database;
  }

  // mysql_tables - computed: false, optional: true, required: false
  private _mysqlTables = new GoogleDatastreamStreamSourceConfigMysqlSourceConfigIncludeObjectsMysqlDatabasesMysqlTablesList(this, "mysql_tables", false);
  public get mysqlTables() {
    return this._mysqlTables;
  }
  public putMysqlTables(value: GoogleDatastreamStreamSourceConfigMysqlSourceConfigIncludeObjectsMysqlDatabasesMysqlTables[] | cdktn.IResolvable) {
    this._mysqlTables.internalValue = value;
  }
  public resetMysqlTables() {
    this._mysqlTables.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mysqlTablesInput() {
    return this._mysqlTables.internalValue;
  }
}

export class GoogleDatastreamStreamSourceConfigMysqlSourceConfigIncludeObjectsMysqlDatabasesList extends cdktn.ComplexList {
  public internalValue? : GoogleDatastreamStreamSourceConfigMysqlSourceConfigIncludeObjectsMysqlDatabases[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): GoogleDatastreamStreamSourceConfigMysqlSourceConfigIncludeObjectsMysqlDatabasesOutputReference {
    return new GoogleDatastreamStreamSourceConfigMysqlSourceConfigIncludeObjectsMysqlDatabasesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleDatastreamStreamSourceConfigMysqlSourceConfigIncludeObjects {
  /**
  * mysql_databases block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_datastream_stream#mysql_databases GoogleDatastreamStream#mysql_databases}
  */
  readonly mysqlDatabases: GoogleDatastreamStreamSourceConfigMysqlSourceConfigIncludeObjectsMysqlDatabases[] | cdktn.IResolvable;
}

export function googleDatastreamStreamSourceConfigMysqlSourceConfigIncludeObjectsToTerraform(struct?: GoogleDatastreamStreamSourceConfigMysqlSourceConfigIncludeObjectsOutputReference | GoogleDatastreamStreamSourceConfigMysqlSourceConfigIncludeObjects): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    mysql_databases: cdktn.listMapper(googleDatastreamStreamSourceConfigMysqlSourceConfigIncludeObjectsMysqlDatabasesToTerraform, true)(struct!.mysqlDatabases),
  }
}


export function googleDatastreamStreamSourceConfigMysqlSourceConfigIncludeObjectsToHclTerraform(struct?: GoogleDatastreamStreamSourceConfigMysqlSourceConfigIncludeObjectsOutputReference | GoogleDatastreamStreamSourceConfigMysqlSourceConfigIncludeObjects): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    mysql_databases: {
      value: cdktn.listMapperHcl(googleDatastreamStreamSourceConfigMysqlSourceConfigIncludeObjectsMysqlDatabasesToHclTerraform, true)(struct!.mysqlDatabases),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDatastreamStreamSourceConfigMysqlSourceConfigIncludeObjectsMysqlDatabasesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDatastreamStreamSourceConfigMysqlSourceConfigIncludeObjectsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDatastreamStreamSourceConfigMysqlSourceConfigIncludeObjects | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._mysqlDatabases?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.mysqlDatabases = this._mysqlDatabases?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDatastreamStreamSourceConfigMysqlSourceConfigIncludeObjects | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._mysqlDatabases.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._mysqlDatabases.internalValue = value.mysqlDatabases;
    }
  }

  // mysql_databases - computed: false, optional: false, required: true
  private _mysqlDatabases = new GoogleDatastreamStreamSourceConfigMysqlSourceConfigIncludeObjectsMysqlDatabasesList(this, "mysql_databases", false);
  public get mysqlDatabases() {
    return this._mysqlDatabases;
  }
  public putMysqlDatabases(value: GoogleDatastreamStreamSourceConfigMysqlSourceConfigIncludeObjectsMysqlDatabases[] | cdktn.IResolvable) {
    this._mysqlDatabases.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get mysqlDatabasesInput() {
    return this._mysqlDatabases.internalValue;
  }
}
export interface GoogleDatastreamStreamSourceConfigMysqlSourceConfig {
  /**
  * Maximum number of concurrent backfill tasks. The number should be non negative.
  * If not set (or set to 0), the system's default value will be used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_datastream_stream#max_concurrent_backfill_tasks GoogleDatastreamStream#max_concurrent_backfill_tasks}
  */
  readonly maxConcurrentBackfillTasks?: number;
  /**
  * Maximum number of concurrent CDC tasks. The number should be non negative.
  * If not set (or set to 0), the system's default value will be used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_datastream_stream#max_concurrent_cdc_tasks GoogleDatastreamStream#max_concurrent_cdc_tasks}
  */
  readonly maxConcurrentCdcTasks?: number;
  /**
  * binary_log_position block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_datastream_stream#binary_log_position GoogleDatastreamStream#binary_log_position}
  */
  readonly binaryLogPosition?: GoogleDatastreamStreamSourceConfigMysqlSourceConfigBinaryLogPosition;
  /**
  * exclude_objects block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_datastream_stream#exclude_objects GoogleDatastreamStream#exclude_objects}
  */
  readonly excludeObjects?: GoogleDatastreamStreamSourceConfigMysqlSourceConfigExcludeObjects;
  /**
  * gtid block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_datastream_stream#gtid GoogleDatastreamStream#gtid}
  */
  readonly gtid?: GoogleDatastreamStreamSourceConfigMysqlSourceConfigGtid;
  /**
  * include_objects block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_datastream_stream#include_objects GoogleDatastreamStream#include_objects}
  */
  readonly includeObjects?: GoogleDatastreamStreamSourceConfigMysqlSourceConfigIncludeObjects;
}

export function googleDatastreamStreamSourceConfigMysqlSourceConfigToTerraform(struct?: GoogleDatastreamStreamSourceConfigMysqlSourceConfigOutputReference | GoogleDatastreamStreamSourceConfigMysqlSourceConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max_concurrent_backfill_tasks: cdktn.numberToTerraform(struct!.maxConcurrentBackfillTasks),
    max_concurrent_cdc_tasks: cdktn.numberToTerraform(struct!.maxConcurrentCdcTasks),
    binary_log_position: googleDatastreamStreamSourceConfigMysqlSourceConfigBinaryLogPositionToTerraform(struct!.binaryLogPosition),
    exclude_objects: googleDatastreamStreamSourceConfigMysqlSourceConfigExcludeObjectsToTerraform(struct!.excludeObjects),
    gtid: googleDatastreamStreamSourceConfigMysqlSourceConfigGtidToTerraform(struct!.gtid),
    include_objects: googleDatastreamStreamSourceConfigMysqlSourceConfigIncludeObjectsToTerraform(struct!.includeObjects),
  }
}


export function googleDatastreamStreamSourceConfigMysqlSourceConfigToHclTerraform(struct?: GoogleDatastreamStreamSourceConfigMysqlSourceConfigOutputReference | GoogleDatastreamStreamSourceConfigMysqlSourceConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    max_concurrent_backfill_tasks: {
      value: cdktn.numberToHclTerraform(struct!.maxConcurrentBackfillTasks),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_concurrent_cdc_tasks: {
      value: cdktn.numberToHclTerraform(struct!.maxConcurrentCdcTasks),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    binary_log_position: {
      value: googleDatastreamStreamSourceConfigMysqlSourceConfigBinaryLogPositionToHclTerraform(struct!.binaryLogPosition),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDatastreamStreamSourceConfigMysqlSourceConfigBinaryLogPositionList",
    },
    exclude_objects: {
      value: googleDatastreamStreamSourceConfigMysqlSourceConfigExcludeObjectsToHclTerraform(struct!.excludeObjects),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDatastreamStreamSourceConfigMysqlSourceConfigExcludeObjectsList",
    },
    gtid: {
      value: googleDatastreamStreamSourceConfigMysqlSourceConfigGtidToHclTerraform(struct!.gtid),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDatastreamStreamSourceConfigMysqlSourceConfigGtidList",
    },
    include_objects: {
      value: googleDatastreamStreamSourceConfigMysqlSourceConfigIncludeObjectsToHclTerraform(struct!.includeObjects),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDatastreamStreamSourceConfigMysqlSourceConfigIncludeObjectsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDatastreamStreamSourceConfigMysqlSourceConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDatastreamStreamSourceConfigMysqlSourceConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maxConcurrentBackfillTasks !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxConcurrentBackfillTasks = this._maxConcurrentBackfillTasks;
    }
    if (this._maxConcurrentCdcTasks !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxConcurrentCdcTasks = this._maxConcurrentCdcTasks;
    }
    if (this._binaryLogPosition?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.binaryLogPosition = this._binaryLogPosition?.internalValue;
    }
    if (this._excludeObjects?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.excludeObjects = this._excludeObjects?.internalValue;
    }
    if (this._gtid?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.gtid = this._gtid?.internalValue;
    }
    if (this._includeObjects?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.includeObjects = this._includeObjects?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDatastreamStreamSourceConfigMysqlSourceConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._maxConcurrentBackfillTasks = undefined;
      this._maxConcurrentCdcTasks = undefined;
      this._binaryLogPosition.internalValue = undefined;
      this._excludeObjects.internalValue = undefined;
      this._gtid.internalValue = undefined;
      this._includeObjects.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._maxConcurrentBackfillTasks = value.maxConcurrentBackfillTasks;
      this._maxConcurrentCdcTasks = value.maxConcurrentCdcTasks;
      this._binaryLogPosition.internalValue = value.binaryLogPosition;
      this._excludeObjects.internalValue = value.excludeObjects;
      this._gtid.internalValue = value.gtid;
      this._includeObjects.internalValue = value.includeObjects;
    }
  }

  // max_concurrent_backfill_tasks - computed: true, optional: true, required: false
  private _maxConcurrentBackfillTasks?: number; 
  public get maxConcurrentBackfillTasks() {
    return this.getNumberAttribute('max_concurrent_backfill_tasks');
  }
  public set maxConcurrentBackfillTasks(value: number) {
    this._maxConcurrentBackfillTasks = value;
  }
  public resetMaxConcurrentBackfillTasks() {
    this._maxConcurrentBackfillTasks = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxConcurrentBackfillTasksInput() {
    return this._maxConcurrentBackfillTasks;
  }

  // max_concurrent_cdc_tasks - computed: true, optional: true, required: false
  private _maxConcurrentCdcTasks?: number; 
  public get maxConcurrentCdcTasks() {
    return this.getNumberAttribute('max_concurrent_cdc_tasks');
  }
  public set maxConcurrentCdcTasks(value: number) {
    this._maxConcurrentCdcTasks = value;
  }
  public resetMaxConcurrentCdcTasks() {
    this._maxConcurrentCdcTasks = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxConcurrentCdcTasksInput() {
    return this._maxConcurrentCdcTasks;
  }

  // binary_log_position - computed: false, optional: true, required: false
  private _binaryLogPosition = new GoogleDatastreamStreamSourceConfigMysqlSourceConfigBinaryLogPositionOutputReference(this, "binary_log_position");
  public get binaryLogPosition() {
    return this._binaryLogPosition;
  }
  public putBinaryLogPosition(value: GoogleDatastreamStreamSourceConfigMysqlSourceConfigBinaryLogPosition) {
    this._binaryLogPosition.internalValue = value;
  }
  public resetBinaryLogPosition() {
    this._binaryLogPosition.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get binaryLogPositionInput() {
    return this._binaryLogPosition.internalValue;
  }

  // exclude_objects - computed: false, optional: true, required: false
  private _excludeObjects = new GoogleDatastreamStreamSourceConfigMysqlSourceConfigExcludeObjectsOutputReference(this, "exclude_objects");
  public get excludeObjects() {
    return this._excludeObjects;
  }
  public putExcludeObjects(value: GoogleDatastreamStreamSourceConfigMysqlSourceConfigExcludeObjects) {
    this._excludeObjects.internalValue = value;
  }
  public resetExcludeObjects() {
    this._excludeObjects.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludeObjectsInput() {
    return this._excludeObjects.internalValue;
  }

  // gtid - computed: false, optional: true, required: false
  private _gtid = new GoogleDatastreamStreamSourceConfigMysqlSourceConfigGtidOutputReference(this, "gtid");
  public get gtid() {
    return this._gtid;
  }
  public putGtid(value: GoogleDatastreamStreamSourceConfigMysqlSourceConfigGtid) {
    this._gtid.internalValue = value;
  }
  public resetGtid() {
    this._gtid.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gtidInput() {
    return this._gtid.internalValue;
  }

  // include_objects - computed: false, optional: true, required: false
  private _includeObjects = new GoogleDatastreamStreamSourceConfigMysqlSourceConfigIncludeObjectsOutputReference(this, "include_objects");
  public get includeObjects() {
    return this._includeObjects;
  }
  public putIncludeObjects(value: GoogleDatastreamStreamSourceConfigMysqlSourceConfigIncludeObjects) {
    this._includeObjects.internalValue = value;
  }
  public resetIncludeObjects() {
    this._includeObjects.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeObjectsInput() {
    return this._includeObjects.internalValue;
  }
}
export interface GoogleDatastreamStreamSourceConfigOracleSourceConfigDropLargeObjects {
}

export function googleDatastreamStreamSourceConfigOracleSourceConfigDropLargeObjectsToTerraform(struct?: GoogleDatastreamStreamSourceConfigOracleSourceConfigDropLargeObjectsOutputReference | GoogleDatastreamStreamSourceConfigOracleSourceConfigDropLargeObjects): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function googleDatastreamStreamSourceConfigOracleSourceConfigDropLargeObjectsToHclTerraform(struct?: GoogleDatastreamStreamSourceConfigOracleSourceConfigDropLargeObjectsOutputReference | GoogleDatastreamStreamSourceConfigOracleSourceConfigDropLargeObjects): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GoogleDatastreamStreamSourceConfigOracleSourceConfigDropLargeObjectsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDatastreamStreamSourceConfigOracleSourceConfigDropLargeObjects | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDatastreamStreamSourceConfigOracleSourceConfigDropLargeObjects | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface GoogleDatastreamStreamSourceConfigOracleSourceConfigExcludeObjectsOracleSchemasOracleTablesOracleColumns {
  /**
  * Column name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_datastream_stream#column GoogleDatastreamStream#column}
  */
  readonly column?: string;
  /**
  * The Oracle data type. Full data types list can be found here:
  * https://docs.oracle.com/en/database/oracle/oracle-database/21/sqlrf/Data-Types.html
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_datastream_stream#data_type GoogleDatastreamStream#data_type}
  */
  readonly dataType?: string;
}

export function googleDatastreamStreamSourceConfigOracleSourceConfigExcludeObjectsOracleSchemasOracleTablesOracleColumnsToTerraform(struct?: GoogleDatastreamStreamSourceConfigOracleSourceConfigExcludeObjectsOracleSchemasOracleTablesOracleColumns | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    column: cdktn.stringToTerraform(struct!.column),
    data_type: cdktn.stringToTerraform(struct!.dataType),
  }
}


export function googleDatastreamStreamSourceConfigOracleSourceConfigExcludeObjectsOracleSchemasOracleTablesOracleColumnsToHclTerraform(struct?: GoogleDatastreamStreamSourceConfigOracleSourceConfigExcludeObjectsOracleSchemasOracleTablesOracleColumns | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    column: {
      value: cdktn.stringToHclTerraform(struct!.column),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    data_type: {
      value: cdktn.stringToHclTerraform(struct!.dataType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDatastreamStreamSourceConfigOracleSourceConfigExcludeObjectsOracleSchemasOracleTablesOracleColumnsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): GoogleDatastreamStreamSourceConfigOracleSourceConfigExcludeObjectsOracleSchemasOracleTablesOracleColumns | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._column !== undefined) {
      hasAnyValues = true;
      internalValueResult.column = this._column;
    }
    if (this._dataType !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataType = this._dataType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDatastreamStreamSourceConfigOracleSourceConfigExcludeObjectsOracleSchemasOracleTablesOracleColumns | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._column = undefined;
      this._dataType = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._column = value.column;
      this._dataType = value.dataType;
    }
  }

  // column - computed: false, optional: true, required: false
  private _column?: string; 
  public get column() {
    return this.getStringAttribute('column');
  }
  public set column(value: string) {
    this._column = value;
  }
  public resetColumn() {
    this._column = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get columnInput() {
    return this._column;
  }

  // data_type - computed: false, optional: true, required: false
  private _dataType?: string; 
  public get dataType() {
    return this.getStringAttribute('data_type');
  }
  public set dataType(value: string) {
    this._dataType = value;
  }
  public resetDataType() {
    this._dataType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataTypeInput() {
    return this._dataType;
  }

  // encoding - computed: true, optional: false, required: false
  public get encoding() {
    return this.getStringAttribute('encoding');
  }

  // length - computed: true, optional: false, required: false
  public get length() {
    return this.getNumberAttribute('length');
  }

  // nullable - computed: true, optional: false, required: false
  public get nullable() {
    return this.getBooleanAttribute('nullable');
  }

  // ordinal_position - computed: true, optional: false, required: false
  public get ordinalPosition() {
    return this.getNumberAttribute('ordinal_position');
  }

  // precision - computed: true, optional: false, required: false
  public get precision() {
    return this.getNumberAttribute('precision');
  }

  // primary_key - computed: true, optional: false, required: false
  public get primaryKey() {
    return this.getBooleanAttribute('primary_key');
  }

  // scale - computed: true, optional: false, required: false
  public get scale() {
    return this.getNumberAttribute('scale');
  }
}

export class GoogleDatastreamStreamSourceConfigOracleSourceConfigExcludeObjectsOracleSchemasOracleTablesOracleColumnsList extends cdktn.ComplexList {
  public internalValue? : GoogleDatastreamStreamSourceConfigOracleSourceConfigExcludeObjectsOracleSchemasOracleTablesOracleColumns[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): GoogleDatastreamStreamSourceConfigOracleSourceConfigExcludeObjectsOracleSchemasOracleTablesOracleColumnsOutputReference {
    return new GoogleDatastreamStreamSourceConfigOracleSourceConfigExcludeObjectsOracleSchemasOracleTablesOracleColumnsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleDatastreamStreamSourceConfigOracleSourceConfigExcludeObjectsOracleSchemasOracleTables {
  /**
  * Table name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_datastream_stream#table GoogleDatastreamStream#table}
  */
  readonly table: string;
  /**
  * oracle_columns block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_datastream_stream#oracle_columns GoogleDatastreamStream#oracle_columns}
  */
  readonly oracleColumns?: GoogleDatastreamStreamSourceConfigOracleSourceConfigExcludeObjectsOracleSchemasOracleTablesOracleColumns[] | cdktn.IResolvable;
}

export function googleDatastreamStreamSourceConfigOracleSourceConfigExcludeObjectsOracleSchemasOracleTablesToTerraform(struct?: GoogleDatastreamStreamSourceConfigOracleSourceConfigExcludeObjectsOracleSchemasOracleTables | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    table: cdktn.stringToTerraform(struct!.table),
    oracle_columns: cdktn.listMapper(googleDatastreamStreamSourceConfigOracleSourceConfigExcludeObjectsOracleSchemasOracleTablesOracleColumnsToTerraform, true)(struct!.oracleColumns),
  }
}


export function googleDatastreamStreamSourceConfigOracleSourceConfigExcludeObjectsOracleSchemasOracleTablesToHclTerraform(struct?: GoogleDatastreamStreamSourceConfigOracleSourceConfigExcludeObjectsOracleSchemasOracleTables | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    table: {
      value: cdktn.stringToHclTerraform(struct!.table),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    oracle_columns: {
      value: cdktn.listMapperHcl(googleDatastreamStreamSourceConfigOracleSourceConfigExcludeObjectsOracleSchemasOracleTablesOracleColumnsToHclTerraform, true)(struct!.oracleColumns),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDatastreamStreamSourceConfigOracleSourceConfigExcludeObjectsOracleSchemasOracleTablesOracleColumnsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDatastreamStreamSourceConfigOracleSourceConfigExcludeObjectsOracleSchemasOracleTablesOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): GoogleDatastreamStreamSourceConfigOracleSourceConfigExcludeObjectsOracleSchemasOracleTables | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._table !== undefined) {
      hasAnyValues = true;
      internalValueResult.table = this._table;
    }
    if (this._oracleColumns?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.oracleColumns = this._oracleColumns?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDatastreamStreamSourceConfigOracleSourceConfigExcludeObjectsOracleSchemasOracleTables | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._table = undefined;
      this._oracleColumns.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._table = value.table;
      this._oracleColumns.internalValue = value.oracleColumns;
    }
  }

  // table - computed: false, optional: false, required: true
  private _table?: string; 
  public get table() {
    return this.getStringAttribute('table');
  }
  public set table(value: string) {
    this._table = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tableInput() {
    return this._table;
  }

  // oracle_columns - computed: false, optional: true, required: false
  private _oracleColumns = new GoogleDatastreamStreamSourceConfigOracleSourceConfigExcludeObjectsOracleSchemasOracleTablesOracleColumnsList(this, "oracle_columns", false);
  public get oracleColumns() {
    return this._oracleColumns;
  }
  public putOracleColumns(value: GoogleDatastreamStreamSourceConfigOracleSourceConfigExcludeObjectsOracleSchemasOracleTablesOracleColumns[] | cdktn.IResolvable) {
    this._oracleColumns.internalValue = value;
  }
  public resetOracleColumns() {
    this._oracleColumns.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oracleColumnsInput() {
    return this._oracleColumns.internalValue;
  }
}

export class GoogleDatastreamStreamSourceConfigOracleSourceConfigExcludeObjectsOracleSchemasOracleTablesList extends cdktn.ComplexList {
  public internalValue? : GoogleDatastreamStreamSourceConfigOracleSourceConfigExcludeObjectsOracleSchemasOracleTables[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): GoogleDatastreamStreamSourceConfigOracleSourceConfigExcludeObjectsOracleSchemasOracleTablesOutputReference {
    return new GoogleDatastreamStreamSourceConfigOracleSourceConfigExcludeObjectsOracleSchemasOracleTablesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleDatastreamStreamSourceConfigOracleSourceConfigExcludeObjectsOracleSchemas {
  /**
  * Schema name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_datastream_stream#schema GoogleDatastreamStream#schema}
  */
  readonly schema: string;
  /**
  * oracle_tables block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_datastream_stream#oracle_tables GoogleDatastreamStream#oracle_tables}
  */
  readonly oracleTables?: GoogleDatastreamStreamSourceConfigOracleSourceConfigExcludeObjectsOracleSchemasOracleTables[] | cdktn.IResolvable;
}

export function googleDatastreamStreamSourceConfigOracleSourceConfigExcludeObjectsOracleSchemasToTerraform(struct?: GoogleDatastreamStreamSourceConfigOracleSourceConfigExcludeObjectsOracleSchemas | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    schema: cdktn.stringToTerraform(struct!.schema),
    oracle_tables: cdktn.listMapper(googleDatastreamStreamSourceConfigOracleSourceConfigExcludeObjectsOracleSchemasOracleTablesToTerraform, true)(struct!.oracleTables),
  }
}


export function googleDatastreamStreamSourceConfigOracleSourceConfigExcludeObjectsOracleSchemasToHclTerraform(struct?: GoogleDatastreamStreamSourceConfigOracleSourceConfigExcludeObjectsOracleSchemas | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    schema: {
      value: cdktn.stringToHclTerraform(struct!.schema),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    oracle_tables: {
      value: cdktn.listMapperHcl(googleDatastreamStreamSourceConfigOracleSourceConfigExcludeObjectsOracleSchemasOracleTablesToHclTerraform, true)(struct!.oracleTables),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDatastreamStreamSourceConfigOracleSourceConfigExcludeObjectsOracleSchemasOracleTablesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDatastreamStreamSourceConfigOracleSourceConfigExcludeObjectsOracleSchemasOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): GoogleDatastreamStreamSourceConfigOracleSourceConfigExcludeObjectsOracleSchemas | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._schema !== undefined) {
      hasAnyValues = true;
      internalValueResult.schema = this._schema;
    }
    if (this._oracleTables?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.oracleTables = this._oracleTables?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDatastreamStreamSourceConfigOracleSourceConfigExcludeObjectsOracleSchemas | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._schema = undefined;
      this._oracleTables.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._schema = value.schema;
      this._oracleTables.internalValue = value.oracleTables;
    }
  }

  // schema - computed: false, optional: false, required: true
  private _schema?: string; 
  public get schema() {
    return this.getStringAttribute('schema');
  }
  public set schema(value: string) {
    this._schema = value;
  }
  // Temporarily expose input value. Use with caution.
  public get schemaInput() {
    return this._schema;
  }

  // oracle_tables - computed: false, optional: true, required: false
  private _oracleTables = new GoogleDatastreamStreamSourceConfigOracleSourceConfigExcludeObjectsOracleSchemasOracleTablesList(this, "oracle_tables", false);
  public get oracleTables() {
    return this._oracleTables;
  }
  public putOracleTables(value: GoogleDatastreamStreamSourceConfigOracleSourceConfigExcludeObjectsOracleSchemasOracleTables[] | cdktn.IResolvable) {
    this._oracleTables.internalValue = value;
  }
  public resetOracleTables() {
    this._oracleTables.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oracleTablesInput() {
    return this._oracleTables.internalValue;
  }
}

export class GoogleDatastreamStreamSourceConfigOracleSourceConfigExcludeObjectsOracleSchemasList extends cdktn.ComplexList {
  public internalValue? : GoogleDatastreamStreamSourceConfigOracleSourceConfigExcludeObjectsOracleSchemas[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): GoogleDatastreamStreamSourceConfigOracleSourceConfigExcludeObjectsOracleSchemasOutputReference {
    return new GoogleDatastreamStreamSourceConfigOracleSourceConfigExcludeObjectsOracleSchemasOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleDatastreamStreamSourceConfigOracleSourceConfigExcludeObjects {
  /**
  * oracle_schemas block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_datastream_stream#oracle_schemas GoogleDatastreamStream#oracle_schemas}
  */
  readonly oracleSchemas: GoogleDatastreamStreamSourceConfigOracleSourceConfigExcludeObjectsOracleSchemas[] | cdktn.IResolvable;
}

export function googleDatastreamStreamSourceConfigOracleSourceConfigExcludeObjectsToTerraform(struct?: GoogleDatastreamStreamSourceConfigOracleSourceConfigExcludeObjectsOutputReference | GoogleDatastreamStreamSourceConfigOracleSourceConfigExcludeObjects): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    oracle_schemas: cdktn.listMapper(googleDatastreamStreamSourceConfigOracleSourceConfigExcludeObjectsOracleSchemasToTerraform, true)(struct!.oracleSchemas),
  }
}


export function googleDatastreamStreamSourceConfigOracleSourceConfigExcludeObjectsToHclTerraform(struct?: GoogleDatastreamStreamSourceConfigOracleSourceConfigExcludeObjectsOutputReference | GoogleDatastreamStreamSourceConfigOracleSourceConfigExcludeObjects): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    oracle_schemas: {
      value: cdktn.listMapperHcl(googleDatastreamStreamSourceConfigOracleSourceConfigExcludeObjectsOracleSchemasToHclTerraform, true)(struct!.oracleSchemas),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDatastreamStreamSourceConfigOracleSourceConfigExcludeObjectsOracleSchemasList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDatastreamStreamSourceConfigOracleSourceConfigExcludeObjectsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDatastreamStreamSourceConfigOracleSourceConfigExcludeObjects | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._oracleSchemas?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.oracleSchemas = this._oracleSchemas?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDatastreamStreamSourceConfigOracleSourceConfigExcludeObjects | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._oracleSchemas.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._oracleSchemas.internalValue = value.oracleSchemas;
    }
  }

  // oracle_schemas - computed: false, optional: false, required: true
  private _oracleSchemas = new GoogleDatastreamStreamSourceConfigOracleSourceConfigExcludeObjectsOracleSchemasList(this, "oracle_schemas", false);
  public get oracleSchemas() {
    return this._oracleSchemas;
  }
  public putOracleSchemas(value: GoogleDatastreamStreamSourceConfigOracleSourceConfigExcludeObjectsOracleSchemas[] | cdktn.IResolvable) {
    this._oracleSchemas.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get oracleSchemasInput() {
    return this._oracleSchemas.internalValue;
  }
}
export interface GoogleDatastreamStreamSourceConfigOracleSourceConfigIncludeObjectsOracleSchemasOracleTablesOracleColumns {
  /**
  * Column name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_datastream_stream#column GoogleDatastreamStream#column}
  */
  readonly column?: string;
  /**
  * The Oracle data type. Full data types list can be found here:
  * https://docs.oracle.com/en/database/oracle/oracle-database/21/sqlrf/Data-Types.html
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_datastream_stream#data_type GoogleDatastreamStream#data_type}
  */
  readonly dataType?: string;
}

export function googleDatastreamStreamSourceConfigOracleSourceConfigIncludeObjectsOracleSchemasOracleTablesOracleColumnsToTerraform(struct?: GoogleDatastreamStreamSourceConfigOracleSourceConfigIncludeObjectsOracleSchemasOracleTablesOracleColumns | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    column: cdktn.stringToTerraform(struct!.column),
    data_type: cdktn.stringToTerraform(struct!.dataType),
  }
}


export function googleDatastreamStreamSourceConfigOracleSourceConfigIncludeObjectsOracleSchemasOracleTablesOracleColumnsToHclTerraform(struct?: GoogleDatastreamStreamSourceConfigOracleSourceConfigIncludeObjectsOracleSchemasOracleTablesOracleColumns | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    column: {
      value: cdktn.stringToHclTerraform(struct!.column),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    data_type: {
      value: cdktn.stringToHclTerraform(struct!.dataType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDatastreamStreamSourceConfigOracleSourceConfigIncludeObjectsOracleSchemasOracleTablesOracleColumnsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): GoogleDatastreamStreamSourceConfigOracleSourceConfigIncludeObjectsOracleSchemasOracleTablesOracleColumns | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._column !== undefined) {
      hasAnyValues = true;
      internalValueResult.column = this._column;
    }
    if (this._dataType !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataType = this._dataType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDatastreamStreamSourceConfigOracleSourceConfigIncludeObjectsOracleSchemasOracleTablesOracleColumns | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._column = undefined;
      this._dataType = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._column = value.column;
      this._dataType = value.dataType;
    }
  }

  // column - computed: false, optional: true, required: false
  private _column?: string; 
  public get column() {
    return this.getStringAttribute('column');
  }
  public set column(value: string) {
    this._column = value;
  }
  public resetColumn() {
    this._column = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get columnInput() {
    return this._column;
  }

  // data_type - computed: false, optional: true, required: false
  private _dataType?: string; 
  public get dataType() {
    return this.getStringAttribute('data_type');
  }
  public set dataType(value: string) {
    this._dataType = value;
  }
  public resetDataType() {
    this._dataType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataTypeInput() {
    return this._dataType;
  }

  // encoding - computed: true, optional: false, required: false
  public get encoding() {
    return this.getStringAttribute('encoding');
  }

  // length - computed: true, optional: false, required: false
  public get length() {
    return this.getNumberAttribute('length');
  }

  // nullable - computed: true, optional: false, required: false
  public get nullable() {
    return this.getBooleanAttribute('nullable');
  }

  // ordinal_position - computed: true, optional: false, required: false
  public get ordinalPosition() {
    return this.getNumberAttribute('ordinal_position');
  }

  // precision - computed: true, optional: false, required: false
  public get precision() {
    return this.getNumberAttribute('precision');
  }

  // primary_key - computed: true, optional: false, required: false
  public get primaryKey() {
    return this.getBooleanAttribute('primary_key');
  }

  // scale - computed: true, optional: false, required: false
  public get scale() {
    return this.getNumberAttribute('scale');
  }
}

export class GoogleDatastreamStreamSourceConfigOracleSourceConfigIncludeObjectsOracleSchemasOracleTablesOracleColumnsList extends cdktn.ComplexList {
  public internalValue? : GoogleDatastreamStreamSourceConfigOracleSourceConfigIncludeObjectsOracleSchemasOracleTablesOracleColumns[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): GoogleDatastreamStreamSourceConfigOracleSourceConfigIncludeObjectsOracleSchemasOracleTablesOracleColumnsOutputReference {
    return new GoogleDatastreamStreamSourceConfigOracleSourceConfigIncludeObjectsOracleSchemasOracleTablesOracleColumnsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleDatastreamStreamSourceConfigOracleSourceConfigIncludeObjectsOracleSchemasOracleTables {
  /**
  * Table name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_datastream_stream#table GoogleDatastreamStream#table}
  */
  readonly table: string;
  /**
  * oracle_columns block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_datastream_stream#oracle_columns GoogleDatastreamStream#oracle_columns}
  */
  readonly oracleColumns?: GoogleDatastreamStreamSourceConfigOracleSourceConfigIncludeObjectsOracleSchemasOracleTablesOracleColumns[] | cdktn.IResolvable;
}

export function googleDatastreamStreamSourceConfigOracleSourceConfigIncludeObjectsOracleSchemasOracleTablesToTerraform(struct?: GoogleDatastreamStreamSourceConfigOracleSourceConfigIncludeObjectsOracleSchemasOracleTables | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    table: cdktn.stringToTerraform(struct!.table),
    oracle_columns: cdktn.listMapper(googleDatastreamStreamSourceConfigOracleSourceConfigIncludeObjectsOracleSchemasOracleTablesOracleColumnsToTerraform, true)(struct!.oracleColumns),
  }
}


export function googleDatastreamStreamSourceConfigOracleSourceConfigIncludeObjectsOracleSchemasOracleTablesToHclTerraform(struct?: GoogleDatastreamStreamSourceConfigOracleSourceConfigIncludeObjectsOracleSchemasOracleTables | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    table: {
      value: cdktn.stringToHclTerraform(struct!.table),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    oracle_columns: {
      value: cdktn.listMapperHcl(googleDatastreamStreamSourceConfigOracleSourceConfigIncludeObjectsOracleSchemasOracleTablesOracleColumnsToHclTerraform, true)(struct!.oracleColumns),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDatastreamStreamSourceConfigOracleSourceConfigIncludeObjectsOracleSchemasOracleTablesOracleColumnsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDatastreamStreamSourceConfigOracleSourceConfigIncludeObjectsOracleSchemasOracleTablesOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): GoogleDatastreamStreamSourceConfigOracleSourceConfigIncludeObjectsOracleSchemasOracleTables | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._table !== undefined) {
      hasAnyValues = true;
      internalValueResult.table = this._table;
    }
    if (this._oracleColumns?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.oracleColumns = this._oracleColumns?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDatastreamStreamSourceConfigOracleSourceConfigIncludeObjectsOracleSchemasOracleTables | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._table = undefined;
      this._oracleColumns.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._table = value.table;
      this._oracleColumns.internalValue = value.oracleColumns;
    }
  }

  // table - computed: false, optional: false, required: true
  private _table?: string; 
  public get table() {
    return this.getStringAttribute('table');
  }
  public set table(value: string) {
    this._table = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tableInput() {
    return this._table;
  }

  // oracle_columns - computed: false, optional: true, required: false
  private _oracleColumns = new GoogleDatastreamStreamSourceConfigOracleSourceConfigIncludeObjectsOracleSchemasOracleTablesOracleColumnsList(this, "oracle_columns", false);
  public get oracleColumns() {
    return this._oracleColumns;
  }
  public putOracleColumns(value: GoogleDatastreamStreamSourceConfigOracleSourceConfigIncludeObjectsOracleSchemasOracleTablesOracleColumns[] | cdktn.IResolvable) {
    this._oracleColumns.internalValue = value;
  }
  public resetOracleColumns() {
    this._oracleColumns.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oracleColumnsInput() {
    return this._oracleColumns.internalValue;
  }
}

export class GoogleDatastreamStreamSourceConfigOracleSourceConfigIncludeObjectsOracleSchemasOracleTablesList extends cdktn.ComplexList {
  public internalValue? : GoogleDatastreamStreamSourceConfigOracleSourceConfigIncludeObjectsOracleSchemasOracleTables[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): GoogleDatastreamStreamSourceConfigOracleSourceConfigIncludeObjectsOracleSchemasOracleTablesOutputReference {
    return new GoogleDatastreamStreamSourceConfigOracleSourceConfigIncludeObjectsOracleSchemasOracleTablesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleDatastreamStreamSourceConfigOracleSourceConfigIncludeObjectsOracleSchemas {
  /**
  * Schema name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_datastream_stream#schema GoogleDatastreamStream#schema}
  */
  readonly schema: string;
  /**
  * oracle_tables block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_datastream_stream#oracle_tables GoogleDatastreamStream#oracle_tables}
  */
  readonly oracleTables?: GoogleDatastreamStreamSourceConfigOracleSourceConfigIncludeObjectsOracleSchemasOracleTables[] | cdktn.IResolvable;
}

export function googleDatastreamStreamSourceConfigOracleSourceConfigIncludeObjectsOracleSchemasToTerraform(struct?: GoogleDatastreamStreamSourceConfigOracleSourceConfigIncludeObjectsOracleSchemas | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    schema: cdktn.stringToTerraform(struct!.schema),
    oracle_tables: cdktn.listMapper(googleDatastreamStreamSourceConfigOracleSourceConfigIncludeObjectsOracleSchemasOracleTablesToTerraform, true)(struct!.oracleTables),
  }
}


export function googleDatastreamStreamSourceConfigOracleSourceConfigIncludeObjectsOracleSchemasToHclTerraform(struct?: GoogleDatastreamStreamSourceConfigOracleSourceConfigIncludeObjectsOracleSchemas | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    schema: {
      value: cdktn.stringToHclTerraform(struct!.schema),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    oracle_tables: {
      value: cdktn.listMapperHcl(googleDatastreamStreamSourceConfigOracleSourceConfigIncludeObjectsOracleSchemasOracleTablesToHclTerraform, true)(struct!.oracleTables),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDatastreamStreamSourceConfigOracleSourceConfigIncludeObjectsOracleSchemasOracleTablesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDatastreamStreamSourceConfigOracleSourceConfigIncludeObjectsOracleSchemasOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): GoogleDatastreamStreamSourceConfigOracleSourceConfigIncludeObjectsOracleSchemas | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._schema !== undefined) {
      hasAnyValues = true;
      internalValueResult.schema = this._schema;
    }
    if (this._oracleTables?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.oracleTables = this._oracleTables?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDatastreamStreamSourceConfigOracleSourceConfigIncludeObjectsOracleSchemas | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._schema = undefined;
      this._oracleTables.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._schema = value.schema;
      this._oracleTables.internalValue = value.oracleTables;
    }
  }

  // schema - computed: false, optional: false, required: true
  private _schema?: string; 
  public get schema() {
    return this.getStringAttribute('schema');
  }
  public set schema(value: string) {
    this._schema = value;
  }
  // Temporarily expose input value. Use with caution.
  public get schemaInput() {
    return this._schema;
  }

  // oracle_tables - computed: false, optional: true, required: false
  private _oracleTables = new GoogleDatastreamStreamSourceConfigOracleSourceConfigIncludeObjectsOracleSchemasOracleTablesList(this, "oracle_tables", false);
  public get oracleTables() {
    return this._oracleTables;
  }
  public putOracleTables(value: GoogleDatastreamStreamSourceConfigOracleSourceConfigIncludeObjectsOracleSchemasOracleTables[] | cdktn.IResolvable) {
    this._oracleTables.internalValue = value;
  }
  public resetOracleTables() {
    this._oracleTables.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oracleTablesInput() {
    return this._oracleTables.internalValue;
  }
}

export class GoogleDatastreamStreamSourceConfigOracleSourceConfigIncludeObjectsOracleSchemasList extends cdktn.ComplexList {
  public internalValue? : GoogleDatastreamStreamSourceConfigOracleSourceConfigIncludeObjectsOracleSchemas[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): GoogleDatastreamStreamSourceConfigOracleSourceConfigIncludeObjectsOracleSchemasOutputReference {
    return new GoogleDatastreamStreamSourceConfigOracleSourceConfigIncludeObjectsOracleSchemasOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleDatastreamStreamSourceConfigOracleSourceConfigIncludeObjects {
  /**
  * oracle_schemas block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_datastream_stream#oracle_schemas GoogleDatastreamStream#oracle_schemas}
  */
  readonly oracleSchemas: GoogleDatastreamStreamSourceConfigOracleSourceConfigIncludeObjectsOracleSchemas[] | cdktn.IResolvable;
}

export function googleDatastreamStreamSourceConfigOracleSourceConfigIncludeObjectsToTerraform(struct?: GoogleDatastreamStreamSourceConfigOracleSourceConfigIncludeObjectsOutputReference | GoogleDatastreamStreamSourceConfigOracleSourceConfigIncludeObjects): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    oracle_schemas: cdktn.listMapper(googleDatastreamStreamSourceConfigOracleSourceConfigIncludeObjectsOracleSchemasToTerraform, true)(struct!.oracleSchemas),
  }
}


export function googleDatastreamStreamSourceConfigOracleSourceConfigIncludeObjectsToHclTerraform(struct?: GoogleDatastreamStreamSourceConfigOracleSourceConfigIncludeObjectsOutputReference | GoogleDatastreamStreamSourceConfigOracleSourceConfigIncludeObjects): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    oracle_schemas: {
      value: cdktn.listMapperHcl(googleDatastreamStreamSourceConfigOracleSourceConfigIncludeObjectsOracleSchemasToHclTerraform, true)(struct!.oracleSchemas),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDatastreamStreamSourceConfigOracleSourceConfigIncludeObjectsOracleSchemasList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDatastreamStreamSourceConfigOracleSourceConfigIncludeObjectsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDatastreamStreamSourceConfigOracleSourceConfigIncludeObjects | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._oracleSchemas?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.oracleSchemas = this._oracleSchemas?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDatastreamStreamSourceConfigOracleSourceConfigIncludeObjects | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._oracleSchemas.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._oracleSchemas.internalValue = value.oracleSchemas;
    }
  }

  // oracle_schemas - computed: false, optional: false, required: true
  private _oracleSchemas = new GoogleDatastreamStreamSourceConfigOracleSourceConfigIncludeObjectsOracleSchemasList(this, "oracle_schemas", false);
  public get oracleSchemas() {
    return this._oracleSchemas;
  }
  public putOracleSchemas(value: GoogleDatastreamStreamSourceConfigOracleSourceConfigIncludeObjectsOracleSchemas[] | cdktn.IResolvable) {
    this._oracleSchemas.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get oracleSchemasInput() {
    return this._oracleSchemas.internalValue;
  }
}
export interface GoogleDatastreamStreamSourceConfigOracleSourceConfigStreamLargeObjects {
}

export function googleDatastreamStreamSourceConfigOracleSourceConfigStreamLargeObjectsToTerraform(struct?: GoogleDatastreamStreamSourceConfigOracleSourceConfigStreamLargeObjectsOutputReference | GoogleDatastreamStreamSourceConfigOracleSourceConfigStreamLargeObjects): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function googleDatastreamStreamSourceConfigOracleSourceConfigStreamLargeObjectsToHclTerraform(struct?: GoogleDatastreamStreamSourceConfigOracleSourceConfigStreamLargeObjectsOutputReference | GoogleDatastreamStreamSourceConfigOracleSourceConfigStreamLargeObjects): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GoogleDatastreamStreamSourceConfigOracleSourceConfigStreamLargeObjectsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDatastreamStreamSourceConfigOracleSourceConfigStreamLargeObjects | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDatastreamStreamSourceConfigOracleSourceConfigStreamLargeObjects | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface GoogleDatastreamStreamSourceConfigOracleSourceConfig {
  /**
  * Maximum number of concurrent backfill tasks. The number should be non negative.
  * If not set (or set to 0), the system's default value will be used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_datastream_stream#max_concurrent_backfill_tasks GoogleDatastreamStream#max_concurrent_backfill_tasks}
  */
  readonly maxConcurrentBackfillTasks?: number;
  /**
  * Maximum number of concurrent CDC tasks. The number should be non negative.
  * If not set (or set to 0), the system's default value will be used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_datastream_stream#max_concurrent_cdc_tasks GoogleDatastreamStream#max_concurrent_cdc_tasks}
  */
  readonly maxConcurrentCdcTasks?: number;
  /**
  * drop_large_objects block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_datastream_stream#drop_large_objects GoogleDatastreamStream#drop_large_objects}
  */
  readonly dropLargeObjects?: GoogleDatastreamStreamSourceConfigOracleSourceConfigDropLargeObjects;
  /**
  * exclude_objects block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_datastream_stream#exclude_objects GoogleDatastreamStream#exclude_objects}
  */
  readonly excludeObjects?: GoogleDatastreamStreamSourceConfigOracleSourceConfigExcludeObjects;
  /**
  * include_objects block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_datastream_stream#include_objects GoogleDatastreamStream#include_objects}
  */
  readonly includeObjects?: GoogleDatastreamStreamSourceConfigOracleSourceConfigIncludeObjects;
  /**
  * stream_large_objects block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_datastream_stream#stream_large_objects GoogleDatastreamStream#stream_large_objects}
  */
  readonly streamLargeObjects?: GoogleDatastreamStreamSourceConfigOracleSourceConfigStreamLargeObjects;
}

export function googleDatastreamStreamSourceConfigOracleSourceConfigToTerraform(struct?: GoogleDatastreamStreamSourceConfigOracleSourceConfigOutputReference | GoogleDatastreamStreamSourceConfigOracleSourceConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max_concurrent_backfill_tasks: cdktn.numberToTerraform(struct!.maxConcurrentBackfillTasks),
    max_concurrent_cdc_tasks: cdktn.numberToTerraform(struct!.maxConcurrentCdcTasks),
    drop_large_objects: googleDatastreamStreamSourceConfigOracleSourceConfigDropLargeObjectsToTerraform(struct!.dropLargeObjects),
    exclude_objects: googleDatastreamStreamSourceConfigOracleSourceConfigExcludeObjectsToTerraform(struct!.excludeObjects),
    include_objects: googleDatastreamStreamSourceConfigOracleSourceConfigIncludeObjectsToTerraform(struct!.includeObjects),
    stream_large_objects: googleDatastreamStreamSourceConfigOracleSourceConfigStreamLargeObjectsToTerraform(struct!.streamLargeObjects),
  }
}


export function googleDatastreamStreamSourceConfigOracleSourceConfigToHclTerraform(struct?: GoogleDatastreamStreamSourceConfigOracleSourceConfigOutputReference | GoogleDatastreamStreamSourceConfigOracleSourceConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    max_concurrent_backfill_tasks: {
      value: cdktn.numberToHclTerraform(struct!.maxConcurrentBackfillTasks),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_concurrent_cdc_tasks: {
      value: cdktn.numberToHclTerraform(struct!.maxConcurrentCdcTasks),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    drop_large_objects: {
      value: googleDatastreamStreamSourceConfigOracleSourceConfigDropLargeObjectsToHclTerraform(struct!.dropLargeObjects),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDatastreamStreamSourceConfigOracleSourceConfigDropLargeObjectsList",
    },
    exclude_objects: {
      value: googleDatastreamStreamSourceConfigOracleSourceConfigExcludeObjectsToHclTerraform(struct!.excludeObjects),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDatastreamStreamSourceConfigOracleSourceConfigExcludeObjectsList",
    },
    include_objects: {
      value: googleDatastreamStreamSourceConfigOracleSourceConfigIncludeObjectsToHclTerraform(struct!.includeObjects),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDatastreamStreamSourceConfigOracleSourceConfigIncludeObjectsList",
    },
    stream_large_objects: {
      value: googleDatastreamStreamSourceConfigOracleSourceConfigStreamLargeObjectsToHclTerraform(struct!.streamLargeObjects),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDatastreamStreamSourceConfigOracleSourceConfigStreamLargeObjectsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDatastreamStreamSourceConfigOracleSourceConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDatastreamStreamSourceConfigOracleSourceConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maxConcurrentBackfillTasks !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxConcurrentBackfillTasks = this._maxConcurrentBackfillTasks;
    }
    if (this._maxConcurrentCdcTasks !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxConcurrentCdcTasks = this._maxConcurrentCdcTasks;
    }
    if (this._dropLargeObjects?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dropLargeObjects = this._dropLargeObjects?.internalValue;
    }
    if (this._excludeObjects?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.excludeObjects = this._excludeObjects?.internalValue;
    }
    if (this._includeObjects?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.includeObjects = this._includeObjects?.internalValue;
    }
    if (this._streamLargeObjects?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.streamLargeObjects = this._streamLargeObjects?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDatastreamStreamSourceConfigOracleSourceConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._maxConcurrentBackfillTasks = undefined;
      this._maxConcurrentCdcTasks = undefined;
      this._dropLargeObjects.internalValue = undefined;
      this._excludeObjects.internalValue = undefined;
      this._includeObjects.internalValue = undefined;
      this._streamLargeObjects.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._maxConcurrentBackfillTasks = value.maxConcurrentBackfillTasks;
      this._maxConcurrentCdcTasks = value.maxConcurrentCdcTasks;
      this._dropLargeObjects.internalValue = value.dropLargeObjects;
      this._excludeObjects.internalValue = value.excludeObjects;
      this._includeObjects.internalValue = value.includeObjects;
      this._streamLargeObjects.internalValue = value.streamLargeObjects;
    }
  }

  // max_concurrent_backfill_tasks - computed: true, optional: true, required: false
  private _maxConcurrentBackfillTasks?: number; 
  public get maxConcurrentBackfillTasks() {
    return this.getNumberAttribute('max_concurrent_backfill_tasks');
  }
  public set maxConcurrentBackfillTasks(value: number) {
    this._maxConcurrentBackfillTasks = value;
  }
  public resetMaxConcurrentBackfillTasks() {
    this._maxConcurrentBackfillTasks = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxConcurrentBackfillTasksInput() {
    return this._maxConcurrentBackfillTasks;
  }

  // max_concurrent_cdc_tasks - computed: true, optional: true, required: false
  private _maxConcurrentCdcTasks?: number; 
  public get maxConcurrentCdcTasks() {
    return this.getNumberAttribute('max_concurrent_cdc_tasks');
  }
  public set maxConcurrentCdcTasks(value: number) {
    this._maxConcurrentCdcTasks = value;
  }
  public resetMaxConcurrentCdcTasks() {
    this._maxConcurrentCdcTasks = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxConcurrentCdcTasksInput() {
    return this._maxConcurrentCdcTasks;
  }

  // drop_large_objects - computed: false, optional: true, required: false
  private _dropLargeObjects = new GoogleDatastreamStreamSourceConfigOracleSourceConfigDropLargeObjectsOutputReference(this, "drop_large_objects");
  public get dropLargeObjects() {
    return this._dropLargeObjects;
  }
  public putDropLargeObjects(value: GoogleDatastreamStreamSourceConfigOracleSourceConfigDropLargeObjects) {
    this._dropLargeObjects.internalValue = value;
  }
  public resetDropLargeObjects() {
    this._dropLargeObjects.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dropLargeObjectsInput() {
    return this._dropLargeObjects.internalValue;
  }

  // exclude_objects - computed: false, optional: true, required: false
  private _excludeObjects = new GoogleDatastreamStreamSourceConfigOracleSourceConfigExcludeObjectsOutputReference(this, "exclude_objects");
  public get excludeObjects() {
    return this._excludeObjects;
  }
  public putExcludeObjects(value: GoogleDatastreamStreamSourceConfigOracleSourceConfigExcludeObjects) {
    this._excludeObjects.internalValue = value;
  }
  public resetExcludeObjects() {
    this._excludeObjects.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludeObjectsInput() {
    return this._excludeObjects.internalValue;
  }

  // include_objects - computed: false, optional: true, required: false
  private _includeObjects = new GoogleDatastreamStreamSourceConfigOracleSourceConfigIncludeObjectsOutputReference(this, "include_objects");
  public get includeObjects() {
    return this._includeObjects;
  }
  public putIncludeObjects(value: GoogleDatastreamStreamSourceConfigOracleSourceConfigIncludeObjects) {
    this._includeObjects.internalValue = value;
  }
  public resetIncludeObjects() {
    this._includeObjects.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeObjectsInput() {
    return this._includeObjects.internalValue;
  }

  // stream_large_objects - computed: false, optional: true, required: false
  private _streamLargeObjects = new GoogleDatastreamStreamSourceConfigOracleSourceConfigStreamLargeObjectsOutputReference(this, "stream_large_objects");
  public get streamLargeObjects() {
    return this._streamLargeObjects;
  }
  public putStreamLargeObjects(value: GoogleDatastreamStreamSourceConfigOracleSourceConfigStreamLargeObjects) {
    this._streamLargeObjects.internalValue = value;
  }
  public resetStreamLargeObjects() {
    this._streamLargeObjects.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get streamLargeObjectsInput() {
    return this._streamLargeObjects.internalValue;
  }
}
export interface GoogleDatastreamStreamSourceConfigPostgresqlSourceConfigExcludeObjectsPostgresqlSchemasPostgresqlTablesPostgresqlColumns {
  /**
  * Column name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_datastream_stream#column GoogleDatastreamStream#column}
  */
  readonly column?: string;
  /**
  * The PostgreSQL data type. Full data types list can be found here:
  * https://www.postgresql.org/docs/current/datatype.html
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_datastream_stream#data_type GoogleDatastreamStream#data_type}
  */
  readonly dataType?: string;
  /**
  * Whether or not the column can accept a null value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_datastream_stream#nullable GoogleDatastreamStream#nullable}
  */
  readonly nullable?: boolean | cdktn.IResolvable;
  /**
  * The ordinal position of the column in the table.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_datastream_stream#ordinal_position GoogleDatastreamStream#ordinal_position}
  */
  readonly ordinalPosition?: number;
  /**
  * Whether or not the column represents a primary key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_datastream_stream#primary_key GoogleDatastreamStream#primary_key}
  */
  readonly primaryKey?: boolean | cdktn.IResolvable;
}

export function googleDatastreamStreamSourceConfigPostgresqlSourceConfigExcludeObjectsPostgresqlSchemasPostgresqlTablesPostgresqlColumnsToTerraform(struct?: GoogleDatastreamStreamSourceConfigPostgresqlSourceConfigExcludeObjectsPostgresqlSchemasPostgresqlTablesPostgresqlColumns | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    column: cdktn.stringToTerraform(struct!.column),
    data_type: cdktn.stringToTerraform(struct!.dataType),
    nullable: cdktn.booleanToTerraform(struct!.nullable),
    ordinal_position: cdktn.numberToTerraform(struct!.ordinalPosition),
    primary_key: cdktn.booleanToTerraform(struct!.primaryKey),
  }
}


export function googleDatastreamStreamSourceConfigPostgresqlSourceConfigExcludeObjectsPostgresqlSchemasPostgresqlTablesPostgresqlColumnsToHclTerraform(struct?: GoogleDatastreamStreamSourceConfigPostgresqlSourceConfigExcludeObjectsPostgresqlSchemasPostgresqlTablesPostgresqlColumns | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    column: {
      value: cdktn.stringToHclTerraform(struct!.column),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    data_type: {
      value: cdktn.stringToHclTerraform(struct!.dataType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    nullable: {
      value: cdktn.booleanToHclTerraform(struct!.nullable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    ordinal_position: {
      value: cdktn.numberToHclTerraform(struct!.ordinalPosition),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    primary_key: {
      value: cdktn.booleanToHclTerraform(struct!.primaryKey),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDatastreamStreamSourceConfigPostgresqlSourceConfigExcludeObjectsPostgresqlSchemasPostgresqlTablesPostgresqlColumnsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): GoogleDatastreamStreamSourceConfigPostgresqlSourceConfigExcludeObjectsPostgresqlSchemasPostgresqlTablesPostgresqlColumns | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._column !== undefined) {
      hasAnyValues = true;
      internalValueResult.column = this._column;
    }
    if (this._dataType !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataType = this._dataType;
    }
    if (this._nullable !== undefined) {
      hasAnyValues = true;
      internalValueResult.nullable = this._nullable;
    }
    if (this._ordinalPosition !== undefined) {
      hasAnyValues = true;
      internalValueResult.ordinalPosition = this._ordinalPosition;
    }
    if (this._primaryKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.primaryKey = this._primaryKey;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDatastreamStreamSourceConfigPostgresqlSourceConfigExcludeObjectsPostgresqlSchemasPostgresqlTablesPostgresqlColumns | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._column = undefined;
      this._dataType = undefined;
      this._nullable = undefined;
      this._ordinalPosition = undefined;
      this._primaryKey = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._column = value.column;
      this._dataType = value.dataType;
      this._nullable = value.nullable;
      this._ordinalPosition = value.ordinalPosition;
      this._primaryKey = value.primaryKey;
    }
  }

  // column - computed: false, optional: true, required: false
  private _column?: string; 
  public get column() {
    return this.getStringAttribute('column');
  }
  public set column(value: string) {
    this._column = value;
  }
  public resetColumn() {
    this._column = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get columnInput() {
    return this._column;
  }

  // data_type - computed: false, optional: true, required: false
  private _dataType?: string; 
  public get dataType() {
    return this.getStringAttribute('data_type');
  }
  public set dataType(value: string) {
    this._dataType = value;
  }
  public resetDataType() {
    this._dataType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataTypeInput() {
    return this._dataType;
  }

  // length - computed: true, optional: false, required: false
  public get length() {
    return this.getNumberAttribute('length');
  }

  // nullable - computed: false, optional: true, required: false
  private _nullable?: boolean | cdktn.IResolvable; 
  public get nullable() {
    return this.getBooleanAttribute('nullable');
  }
  public set nullable(value: boolean | cdktn.IResolvable) {
    this._nullable = value;
  }
  public resetNullable() {
    this._nullable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nullableInput() {
    return this._nullable;
  }

  // ordinal_position - computed: false, optional: true, required: false
  private _ordinalPosition?: number; 
  public get ordinalPosition() {
    return this.getNumberAttribute('ordinal_position');
  }
  public set ordinalPosition(value: number) {
    this._ordinalPosition = value;
  }
  public resetOrdinalPosition() {
    this._ordinalPosition = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ordinalPositionInput() {
    return this._ordinalPosition;
  }

  // precision - computed: true, optional: false, required: false
  public get precision() {
    return this.getNumberAttribute('precision');
  }

  // primary_key - computed: false, optional: true, required: false
  private _primaryKey?: boolean | cdktn.IResolvable; 
  public get primaryKey() {
    return this.getBooleanAttribute('primary_key');
  }
  public set primaryKey(value: boolean | cdktn.IResolvable) {
    this._primaryKey = value;
  }
  public resetPrimaryKey() {
    this._primaryKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get primaryKeyInput() {
    return this._primaryKey;
  }

  // scale - computed: true, optional: false, required: false
  public get scale() {
    return this.getNumberAttribute('scale');
  }
}

export class GoogleDatastreamStreamSourceConfigPostgresqlSourceConfigExcludeObjectsPostgresqlSchemasPostgresqlTablesPostgresqlColumnsList extends cdktn.ComplexList {
  public internalValue? : GoogleDatastreamStreamSourceConfigPostgresqlSourceConfigExcludeObjectsPostgresqlSchemasPostgresqlTablesPostgresqlColumns[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): GoogleDatastreamStreamSourceConfigPostgresqlSourceConfigExcludeObjectsPostgresqlSchemasPostgresqlTablesPostgresqlColumnsOutputReference {
    return new GoogleDatastreamStreamSourceConfigPostgresqlSourceConfigExcludeObjectsPostgresqlSchemasPostgresqlTablesPostgresqlColumnsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleDatastreamStreamSourceConfigPostgresqlSourceConfigExcludeObjectsPostgresqlSchemasPostgresqlTables {
  /**
  * Table name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_datastream_stream#table GoogleDatastreamStream#table}
  */
  readonly table: string;
  /**
  * postgresql_columns block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_datastream_stream#postgresql_columns GoogleDatastreamStream#postgresql_columns}
  */
  readonly postgresqlColumns?: GoogleDatastreamStreamSourceConfigPostgresqlSourceConfigExcludeObjectsPostgresqlSchemasPostgresqlTablesPostgresqlColumns[] | cdktn.IResolvable;
}

export function googleDatastreamStreamSourceConfigPostgresqlSourceConfigExcludeObjectsPostgresqlSchemasPostgresqlTablesToTerraform(struct?: GoogleDatastreamStreamSourceConfigPostgresqlSourceConfigExcludeObjectsPostgresqlSchemasPostgresqlTables | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    table: cdktn.stringToTerraform(struct!.table),
    postgresql_columns: cdktn.listMapper(googleDatastreamStreamSourceConfigPostgresqlSourceConfigExcludeObjectsPostgresqlSchemasPostgresqlTablesPostgresqlColumnsToTerraform, true)(struct!.postgresqlColumns),
  }
}


export function googleDatastreamStreamSourceConfigPostgresqlSourceConfigExcludeObjectsPostgresqlSchemasPostgresqlTablesToHclTerraform(struct?: GoogleDatastreamStreamSourceConfigPostgresqlSourceConfigExcludeObjectsPostgresqlSchemasPostgresqlTables | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    table: {
      value: cdktn.stringToHclTerraform(struct!.table),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    postgresql_columns: {
      value: cdktn.listMapperHcl(googleDatastreamStreamSourceConfigPostgresqlSourceConfigExcludeObjectsPostgresqlSchemasPostgresqlTablesPostgresqlColumnsToHclTerraform, true)(struct!.postgresqlColumns),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDatastreamStreamSourceConfigPostgresqlSourceConfigExcludeObjectsPostgresqlSchemasPostgresqlTablesPostgresqlColumnsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDatastreamStreamSourceConfigPostgresqlSourceConfigExcludeObjectsPostgresqlSchemasPostgresqlTablesOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): GoogleDatastreamStreamSourceConfigPostgresqlSourceConfigExcludeObjectsPostgresqlSchemasPostgresqlTables | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._table !== undefined) {
      hasAnyValues = true;
      internalValueResult.table = this._table;
    }
    if (this._postgresqlColumns?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.postgresqlColumns = this._postgresqlColumns?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDatastreamStreamSourceConfigPostgresqlSourceConfigExcludeObjectsPostgresqlSchemasPostgresqlTables | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._table = undefined;
      this._postgresqlColumns.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._table = value.table;
      this._postgresqlColumns.internalValue = value.postgresqlColumns;
    }
  }

  // table - computed: false, optional: false, required: true
  private _table?: string; 
  public get table() {
    return this.getStringAttribute('table');
  }
  public set table(value: string) {
    this._table = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tableInput() {
    return this._table;
  }

  // postgresql_columns - computed: false, optional: true, required: false
  private _postgresqlColumns = new GoogleDatastreamStreamSourceConfigPostgresqlSourceConfigExcludeObjectsPostgresqlSchemasPostgresqlTablesPostgresqlColumnsList(this, "postgresql_columns", false);
  public get postgresqlColumns() {
    return this._postgresqlColumns;
  }
  public putPostgresqlColumns(value: GoogleDatastreamStreamSourceConfigPostgresqlSourceConfigExcludeObjectsPostgresqlSchemasPostgresqlTablesPostgresqlColumns[] | cdktn.IResolvable) {
    this._postgresqlColumns.internalValue = value;
  }
  public resetPostgresqlColumns() {
    this._postgresqlColumns.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get postgresqlColumnsInput() {
    return this._postgresqlColumns.internalValue;
  }
}

export class GoogleDatastreamStreamSourceConfigPostgresqlSourceConfigExcludeObjectsPostgresqlSchemasPostgresqlTablesList extends cdktn.ComplexList {
  public internalValue? : GoogleDatastreamStreamSourceConfigPostgresqlSourceConfigExcludeObjectsPostgresqlSchemasPostgresqlTables[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): GoogleDatastreamStreamSourceConfigPostgresqlSourceConfigExcludeObjectsPostgresqlSchemasPostgresqlTablesOutputReference {
    return new GoogleDatastreamStreamSourceConfigPostgresqlSourceConfigExcludeObjectsPostgresqlSchemasPostgresqlTablesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleDatastreamStreamSourceConfigPostgresqlSourceConfigExcludeObjectsPostgresqlSchemas {
  /**
  * Database name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_datastream_stream#schema GoogleDatastreamStream#schema}
  */
  readonly schema: string;
  /**
  * postgresql_tables block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_datastream_stream#postgresql_tables GoogleDatastreamStream#postgresql_tables}
  */
  readonly postgresqlTables?: GoogleDatastreamStreamSourceConfigPostgresqlSourceConfigExcludeObjectsPostgresqlSchemasPostgresqlTables[] | cdktn.IResolvable;
}

export function googleDatastreamStreamSourceConfigPostgresqlSourceConfigExcludeObjectsPostgresqlSchemasToTerraform(struct?: GoogleDatastreamStreamSourceConfigPostgresqlSourceConfigExcludeObjectsPostgresqlSchemas | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    schema: cdktn.stringToTerraform(struct!.schema),
    postgresql_tables: cdktn.listMapper(googleDatastreamStreamSourceConfigPostgresqlSourceConfigExcludeObjectsPostgresqlSchemasPostgresqlTablesToTerraform, true)(struct!.postgresqlTables),
  }
}


export function googleDatastreamStreamSourceConfigPostgresqlSourceConfigExcludeObjectsPostgresqlSchemasToHclTerraform(struct?: GoogleDatastreamStreamSourceConfigPostgresqlSourceConfigExcludeObjectsPostgresqlSchemas | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    schema: {
      value: cdktn.stringToHclTerraform(struct!.schema),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    postgresql_tables: {
      value: cdktn.listMapperHcl(googleDatastreamStreamSourceConfigPostgresqlSourceConfigExcludeObjectsPostgresqlSchemasPostgresqlTablesToHclTerraform, true)(struct!.postgresqlTables),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDatastreamStreamSourceConfigPostgresqlSourceConfigExcludeObjectsPostgresqlSchemasPostgresqlTablesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDatastreamStreamSourceConfigPostgresqlSourceConfigExcludeObjectsPostgresqlSchemasOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): GoogleDatastreamStreamSourceConfigPostgresqlSourceConfigExcludeObjectsPostgresqlSchemas | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._schema !== undefined) {
      hasAnyValues = true;
      internalValueResult.schema = this._schema;
    }
    if (this._postgresqlTables?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.postgresqlTables = this._postgresqlTables?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDatastreamStreamSourceConfigPostgresqlSourceConfigExcludeObjectsPostgresqlSchemas | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._schema = undefined;
      this._postgresqlTables.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._schema = value.schema;
      this._postgresqlTables.internalValue = value.postgresqlTables;
    }
  }

  // schema - computed: false, optional: false, required: true
  private _schema?: string; 
  public get schema() {
    return this.getStringAttribute('schema');
  }
  public set schema(value: string) {
    this._schema = value;
  }
  // Temporarily expose input value. Use with caution.
  public get schemaInput() {
    return this._schema;
  }

  // postgresql_tables - computed: false, optional: true, required: false
  private _postgresqlTables = new GoogleDatastreamStreamSourceConfigPostgresqlSourceConfigExcludeObjectsPostgresqlSchemasPostgresqlTablesList(this, "postgresql_tables", false);
  public get postgresqlTables() {
    return this._postgresqlTables;
  }
  public putPostgresqlTables(value: GoogleDatastreamStreamSourceConfigPostgresqlSourceConfigExcludeObjectsPostgresqlSchemasPostgresqlTables[] | cdktn.IResolvable) {
    this._postgresqlTables.internalValue = value;
  }
  public resetPostgresqlTables() {
    this._postgresqlTables.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get postgresqlTablesInput() {
    return this._postgresqlTables.internalValue;
  }
}

export class GoogleDatastreamStreamSourceConfigPostgresqlSourceConfigExcludeObjectsPostgresqlSchemasList extends cdktn.ComplexList {
  public internalValue? : GoogleDatastreamStreamSourceConfigPostgresqlSourceConfigExcludeObjectsPostgresqlSchemas[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): GoogleDatastreamStreamSourceConfigPostgresqlSourceConfigExcludeObjectsPostgresqlSchemasOutputReference {
    return new GoogleDatastreamStreamSourceConfigPostgresqlSourceConfigExcludeObjectsPostgresqlSchemasOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleDatastreamStreamSourceConfigPostgresqlSourceConfigExcludeObjects {
  /**
  * postgresql_schemas block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_datastream_stream#postgresql_schemas GoogleDatastreamStream#postgresql_schemas}
  */
  readonly postgresqlSchemas: GoogleDatastreamStreamSourceConfigPostgresqlSourceConfigExcludeObjectsPostgresqlSchemas[] | cdktn.IResolvable;
}

export function googleDatastreamStreamSourceConfigPostgresqlSourceConfigExcludeObjectsToTerraform(struct?: GoogleDatastreamStreamSourceConfigPostgresqlSourceConfigExcludeObjectsOutputReference | GoogleDatastreamStreamSourceConfigPostgresqlSourceConfigExcludeObjects): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    postgresql_schemas: cdktn.listMapper(googleDatastreamStreamSourceConfigPostgresqlSourceConfigExcludeObjectsPostgresqlSchemasToTerraform, true)(struct!.postgresqlSchemas),
  }
}


export function googleDatastreamStreamSourceConfigPostgresqlSourceConfigExcludeObjectsToHclTerraform(struct?: GoogleDatastreamStreamSourceConfigPostgresqlSourceConfigExcludeObjectsOutputReference | GoogleDatastreamStreamSourceConfigPostgresqlSourceConfigExcludeObjects): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    postgresql_schemas: {
      value: cdktn.listMapperHcl(googleDatastreamStreamSourceConfigPostgresqlSourceConfigExcludeObjectsPostgresqlSchemasToHclTerraform, true)(struct!.postgresqlSchemas),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDatastreamStreamSourceConfigPostgresqlSourceConfigExcludeObjectsPostgresqlSchemasList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDatastreamStreamSourceConfigPostgresqlSourceConfigExcludeObjectsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDatastreamStreamSourceConfigPostgresqlSourceConfigExcludeObjects | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._postgresqlSchemas?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.postgresqlSchemas = this._postgresqlSchemas?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDatastreamStreamSourceConfigPostgresqlSourceConfigExcludeObjects | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._postgresqlSchemas.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._postgresqlSchemas.internalValue = value.postgresqlSchemas;
    }
  }

  // postgresql_schemas - computed: false, optional: false, required: true
  private _postgresqlSchemas = new GoogleDatastreamStreamSourceConfigPostgresqlSourceConfigExcludeObjectsPostgresqlSchemasList(this, "postgresql_schemas", false);
  public get postgresqlSchemas() {
    return this._postgresqlSchemas;
  }
  public putPostgresqlSchemas(value: GoogleDatastreamStreamSourceConfigPostgresqlSourceConfigExcludeObjectsPostgresqlSchemas[] | cdktn.IResolvable) {
    this._postgresqlSchemas.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get postgresqlSchemasInput() {
    return this._postgresqlSchemas.internalValue;
  }
}
export interface GoogleDatastreamStreamSourceConfigPostgresqlSourceConfigIncludeObjectsPostgresqlSchemasPostgresqlTablesPostgresqlColumns {
  /**
  * Column name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_datastream_stream#column GoogleDatastreamStream#column}
  */
  readonly column?: string;
  /**
  * The PostgreSQL data type. Full data types list can be found here:
  * https://www.postgresql.org/docs/current/datatype.html
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_datastream_stream#data_type GoogleDatastreamStream#data_type}
  */
  readonly dataType?: string;
  /**
  * Whether or not the column can accept a null value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_datastream_stream#nullable GoogleDatastreamStream#nullable}
  */
  readonly nullable?: boolean | cdktn.IResolvable;
  /**
  * The ordinal position of the column in the table.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_datastream_stream#ordinal_position GoogleDatastreamStream#ordinal_position}
  */
  readonly ordinalPosition?: number;
  /**
  * Whether or not the column represents a primary key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_datastream_stream#primary_key GoogleDatastreamStream#primary_key}
  */
  readonly primaryKey?: boolean | cdktn.IResolvable;
}

export function googleDatastreamStreamSourceConfigPostgresqlSourceConfigIncludeObjectsPostgresqlSchemasPostgresqlTablesPostgresqlColumnsToTerraform(struct?: GoogleDatastreamStreamSourceConfigPostgresqlSourceConfigIncludeObjectsPostgresqlSchemasPostgresqlTablesPostgresqlColumns | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    column: cdktn.stringToTerraform(struct!.column),
    data_type: cdktn.stringToTerraform(struct!.dataType),
    nullable: cdktn.booleanToTerraform(struct!.nullable),
    ordinal_position: cdktn.numberToTerraform(struct!.ordinalPosition),
    primary_key: cdktn.booleanToTerraform(struct!.primaryKey),
  }
}


export function googleDatastreamStreamSourceConfigPostgresqlSourceConfigIncludeObjectsPostgresqlSchemasPostgresqlTablesPostgresqlColumnsToHclTerraform(struct?: GoogleDatastreamStreamSourceConfigPostgresqlSourceConfigIncludeObjectsPostgresqlSchemasPostgresqlTablesPostgresqlColumns | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    column: {
      value: cdktn.stringToHclTerraform(struct!.column),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    data_type: {
      value: cdktn.stringToHclTerraform(struct!.dataType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    nullable: {
      value: cdktn.booleanToHclTerraform(struct!.nullable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    ordinal_position: {
      value: cdktn.numberToHclTerraform(struct!.ordinalPosition),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    primary_key: {
      value: cdktn.booleanToHclTerraform(struct!.primaryKey),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDatastreamStreamSourceConfigPostgresqlSourceConfigIncludeObjectsPostgresqlSchemasPostgresqlTablesPostgresqlColumnsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): GoogleDatastreamStreamSourceConfigPostgresqlSourceConfigIncludeObjectsPostgresqlSchemasPostgresqlTablesPostgresqlColumns | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._column !== undefined) {
      hasAnyValues = true;
      internalValueResult.column = this._column;
    }
    if (this._dataType !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataType = this._dataType;
    }
    if (this._nullable !== undefined) {
      hasAnyValues = true;
      internalValueResult.nullable = this._nullable;
    }
    if (this._ordinalPosition !== undefined) {
      hasAnyValues = true;
      internalValueResult.ordinalPosition = this._ordinalPosition;
    }
    if (this._primaryKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.primaryKey = this._primaryKey;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDatastreamStreamSourceConfigPostgresqlSourceConfigIncludeObjectsPostgresqlSchemasPostgresqlTablesPostgresqlColumns | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._column = undefined;
      this._dataType = undefined;
      this._nullable = undefined;
      this._ordinalPosition = undefined;
      this._primaryKey = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._column = value.column;
      this._dataType = value.dataType;
      this._nullable = value.nullable;
      this._ordinalPosition = value.ordinalPosition;
      this._primaryKey = value.primaryKey;
    }
  }

  // column - computed: false, optional: true, required: false
  private _column?: string; 
  public get column() {
    return this.getStringAttribute('column');
  }
  public set column(value: string) {
    this._column = value;
  }
  public resetColumn() {
    this._column = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get columnInput() {
    return this._column;
  }

  // data_type - computed: false, optional: true, required: false
  private _dataType?: string; 
  public get dataType() {
    return this.getStringAttribute('data_type');
  }
  public set dataType(value: string) {
    this._dataType = value;
  }
  public resetDataType() {
    this._dataType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataTypeInput() {
    return this._dataType;
  }

  // length - computed: true, optional: false, required: false
  public get length() {
    return this.getNumberAttribute('length');
  }

  // nullable - computed: false, optional: true, required: false
  private _nullable?: boolean | cdktn.IResolvable; 
  public get nullable() {
    return this.getBooleanAttribute('nullable');
  }
  public set nullable(value: boolean | cdktn.IResolvable) {
    this._nullable = value;
  }
  public resetNullable() {
    this._nullable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nullableInput() {
    return this._nullable;
  }

  // ordinal_position - computed: false, optional: true, required: false
  private _ordinalPosition?: number; 
  public get ordinalPosition() {
    return this.getNumberAttribute('ordinal_position');
  }
  public set ordinalPosition(value: number) {
    this._ordinalPosition = value;
  }
  public resetOrdinalPosition() {
    this._ordinalPosition = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ordinalPositionInput() {
    return this._ordinalPosition;
  }

  // precision - computed: true, optional: false, required: false
  public get precision() {
    return this.getNumberAttribute('precision');
  }

  // primary_key - computed: false, optional: true, required: false
  private _primaryKey?: boolean | cdktn.IResolvable; 
  public get primaryKey() {
    return this.getBooleanAttribute('primary_key');
  }
  public set primaryKey(value: boolean | cdktn.IResolvable) {
    this._primaryKey = value;
  }
  public resetPrimaryKey() {
    this._primaryKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get primaryKeyInput() {
    return this._primaryKey;
  }

  // scale - computed: true, optional: false, required: false
  public get scale() {
    return this.getNumberAttribute('scale');
  }
}

export class GoogleDatastreamStreamSourceConfigPostgresqlSourceConfigIncludeObjectsPostgresqlSchemasPostgresqlTablesPostgresqlColumnsList extends cdktn.ComplexList {
  public internalValue? : GoogleDatastreamStreamSourceConfigPostgresqlSourceConfigIncludeObjectsPostgresqlSchemasPostgresqlTablesPostgresqlColumns[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): GoogleDatastreamStreamSourceConfigPostgresqlSourceConfigIncludeObjectsPostgresqlSchemasPostgresqlTablesPostgresqlColumnsOutputReference {
    return new GoogleDatastreamStreamSourceConfigPostgresqlSourceConfigIncludeObjectsPostgresqlSchemasPostgresqlTablesPostgresqlColumnsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleDatastreamStreamSourceConfigPostgresqlSourceConfigIncludeObjectsPostgresqlSchemasPostgresqlTables {
  /**
  * Table name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_datastream_stream#table GoogleDatastreamStream#table}
  */
  readonly table: string;
  /**
  * postgresql_columns block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_datastream_stream#postgresql_columns GoogleDatastreamStream#postgresql_columns}
  */
  readonly postgresqlColumns?: GoogleDatastreamStreamSourceConfigPostgresqlSourceConfigIncludeObjectsPostgresqlSchemasPostgresqlTablesPostgresqlColumns[] | cdktn.IResolvable;
}

export function googleDatastreamStreamSourceConfigPostgresqlSourceConfigIncludeObjectsPostgresqlSchemasPostgresqlTablesToTerraform(struct?: GoogleDatastreamStreamSourceConfigPostgresqlSourceConfigIncludeObjectsPostgresqlSchemasPostgresqlTables | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    table: cdktn.stringToTerraform(struct!.table),
    postgresql_columns: cdktn.listMapper(googleDatastreamStreamSourceConfigPostgresqlSourceConfigIncludeObjectsPostgresqlSchemasPostgresqlTablesPostgresqlColumnsToTerraform, true)(struct!.postgresqlColumns),
  }
}


export function googleDatastreamStreamSourceConfigPostgresqlSourceConfigIncludeObjectsPostgresqlSchemasPostgresqlTablesToHclTerraform(struct?: GoogleDatastreamStreamSourceConfigPostgresqlSourceConfigIncludeObjectsPostgresqlSchemasPostgresqlTables | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    table: {
      value: cdktn.stringToHclTerraform(struct!.table),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    postgresql_columns: {
      value: cdktn.listMapperHcl(googleDatastreamStreamSourceConfigPostgresqlSourceConfigIncludeObjectsPostgresqlSchemasPostgresqlTablesPostgresqlColumnsToHclTerraform, true)(struct!.postgresqlColumns),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDatastreamStreamSourceConfigPostgresqlSourceConfigIncludeObjectsPostgresqlSchemasPostgresqlTablesPostgresqlColumnsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDatastreamStreamSourceConfigPostgresqlSourceConfigIncludeObjectsPostgresqlSchemasPostgresqlTablesOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): GoogleDatastreamStreamSourceConfigPostgresqlSourceConfigIncludeObjectsPostgresqlSchemasPostgresqlTables | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._table !== undefined) {
      hasAnyValues = true;
      internalValueResult.table = this._table;
    }
    if (this._postgresqlColumns?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.postgresqlColumns = this._postgresqlColumns?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDatastreamStreamSourceConfigPostgresqlSourceConfigIncludeObjectsPostgresqlSchemasPostgresqlTables | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._table = undefined;
      this._postgresqlColumns.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._table = value.table;
      this._postgresqlColumns.internalValue = value.postgresqlColumns;
    }
  }

  // table - computed: false, optional: false, required: true
  private _table?: string; 
  public get table() {
    return this.getStringAttribute('table');
  }
  public set table(value: string) {
    this._table = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tableInput() {
    return this._table;
  }

  // postgresql_columns - computed: false, optional: true, required: false
  private _postgresqlColumns = new GoogleDatastreamStreamSourceConfigPostgresqlSourceConfigIncludeObjectsPostgresqlSchemasPostgresqlTablesPostgresqlColumnsList(this, "postgresql_columns", false);
  public get postgresqlColumns() {
    return this._postgresqlColumns;
  }
  public putPostgresqlColumns(value: GoogleDatastreamStreamSourceConfigPostgresqlSourceConfigIncludeObjectsPostgresqlSchemasPostgresqlTablesPostgresqlColumns[] | cdktn.IResolvable) {
    this._postgresqlColumns.internalValue = value;
  }
  public resetPostgresqlColumns() {
    this._postgresqlColumns.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get postgresqlColumnsInput() {
    return this._postgresqlColumns.internalValue;
  }
}

export class GoogleDatastreamStreamSourceConfigPostgresqlSourceConfigIncludeObjectsPostgresqlSchemasPostgresqlTablesList extends cdktn.ComplexList {
  public internalValue? : GoogleDatastreamStreamSourceConfigPostgresqlSourceConfigIncludeObjectsPostgresqlSchemasPostgresqlTables[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): GoogleDatastreamStreamSourceConfigPostgresqlSourceConfigIncludeObjectsPostgresqlSchemasPostgresqlTablesOutputReference {
    return new GoogleDatastreamStreamSourceConfigPostgresqlSourceConfigIncludeObjectsPostgresqlSchemasPostgresqlTablesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleDatastreamStreamSourceConfigPostgresqlSourceConfigIncludeObjectsPostgresqlSchemas {
  /**
  * Database name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_datastream_stream#schema GoogleDatastreamStream#schema}
  */
  readonly schema: string;
  /**
  * postgresql_tables block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_datastream_stream#postgresql_tables GoogleDatastreamStream#postgresql_tables}
  */
  readonly postgresqlTables?: GoogleDatastreamStreamSourceConfigPostgresqlSourceConfigIncludeObjectsPostgresqlSchemasPostgresqlTables[] | cdktn.IResolvable;
}

export function googleDatastreamStreamSourceConfigPostgresqlSourceConfigIncludeObjectsPostgresqlSchemasToTerraform(struct?: GoogleDatastreamStreamSourceConfigPostgresqlSourceConfigIncludeObjectsPostgresqlSchemas | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    schema: cdktn.stringToTerraform(struct!.schema),
    postgresql_tables: cdktn.listMapper(googleDatastreamStreamSourceConfigPostgresqlSourceConfigIncludeObjectsPostgresqlSchemasPostgresqlTablesToTerraform, true)(struct!.postgresqlTables),
  }
}


export function googleDatastreamStreamSourceConfigPostgresqlSourceConfigIncludeObjectsPostgresqlSchemasToHclTerraform(struct?: GoogleDatastreamStreamSourceConfigPostgresqlSourceConfigIncludeObjectsPostgresqlSchemas | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    schema: {
      value: cdktn.stringToHclTerraform(struct!.schema),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    postgresql_tables: {
      value: cdktn.listMapperHcl(googleDatastreamStreamSourceConfigPostgresqlSourceConfigIncludeObjectsPostgresqlSchemasPostgresqlTablesToHclTerraform, true)(struct!.postgresqlTables),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDatastreamStreamSourceConfigPostgresqlSourceConfigIncludeObjectsPostgresqlSchemasPostgresqlTablesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDatastreamStreamSourceConfigPostgresqlSourceConfigIncludeObjectsPostgresqlSchemasOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): GoogleDatastreamStreamSourceConfigPostgresqlSourceConfigIncludeObjectsPostgresqlSchemas | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._schema !== undefined) {
      hasAnyValues = true;
      internalValueResult.schema = this._schema;
    }
    if (this._postgresqlTables?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.postgresqlTables = this._postgresqlTables?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDatastreamStreamSourceConfigPostgresqlSourceConfigIncludeObjectsPostgresqlSchemas | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._schema = undefined;
      this._postgresqlTables.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._schema = value.schema;
      this._postgresqlTables.internalValue = value.postgresqlTables;
    }
  }

  // schema - computed: false, optional: false, required: true
  private _schema?: string; 
  public get schema() {
    return this.getStringAttribute('schema');
  }
  public set schema(value: string) {
    this._schema = value;
  }
  // Temporarily expose input value. Use with caution.
  public get schemaInput() {
    return this._schema;
  }

  // postgresql_tables - computed: false, optional: true, required: false
  private _postgresqlTables = new GoogleDatastreamStreamSourceConfigPostgresqlSourceConfigIncludeObjectsPostgresqlSchemasPostgresqlTablesList(this, "postgresql_tables", false);
  public get postgresqlTables() {
    return this._postgresqlTables;
  }
  public putPostgresqlTables(value: GoogleDatastreamStreamSourceConfigPostgresqlSourceConfigIncludeObjectsPostgresqlSchemasPostgresqlTables[] | cdktn.IResolvable) {
    this._postgresqlTables.internalValue = value;
  }
  public resetPostgresqlTables() {
    this._postgresqlTables.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get postgresqlTablesInput() {
    return this._postgresqlTables.internalValue;
  }
}

export class GoogleDatastreamStreamSourceConfigPostgresqlSourceConfigIncludeObjectsPostgresqlSchemasList extends cdktn.ComplexList {
  public internalValue? : GoogleDatastreamStreamSourceConfigPostgresqlSourceConfigIncludeObjectsPostgresqlSchemas[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): GoogleDatastreamStreamSourceConfigPostgresqlSourceConfigIncludeObjectsPostgresqlSchemasOutputReference {
    return new GoogleDatastreamStreamSourceConfigPostgresqlSourceConfigIncludeObjectsPostgresqlSchemasOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleDatastreamStreamSourceConfigPostgresqlSourceConfigIncludeObjects {
  /**
  * postgresql_schemas block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_datastream_stream#postgresql_schemas GoogleDatastreamStream#postgresql_schemas}
  */
  readonly postgresqlSchemas: GoogleDatastreamStreamSourceConfigPostgresqlSourceConfigIncludeObjectsPostgresqlSchemas[] | cdktn.IResolvable;
}

export function googleDatastreamStreamSourceConfigPostgresqlSourceConfigIncludeObjectsToTerraform(struct?: GoogleDatastreamStreamSourceConfigPostgresqlSourceConfigIncludeObjectsOutputReference | GoogleDatastreamStreamSourceConfigPostgresqlSourceConfigIncludeObjects): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    postgresql_schemas: cdktn.listMapper(googleDatastreamStreamSourceConfigPostgresqlSourceConfigIncludeObjectsPostgresqlSchemasToTerraform, true)(struct!.postgresqlSchemas),
  }
}


export function googleDatastreamStreamSourceConfigPostgresqlSourceConfigIncludeObjectsToHclTerraform(struct?: GoogleDatastreamStreamSourceConfigPostgresqlSourceConfigIncludeObjectsOutputReference | GoogleDatastreamStreamSourceConfigPostgresqlSourceConfigIncludeObjects): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    postgresql_schemas: {
      value: cdktn.listMapperHcl(googleDatastreamStreamSourceConfigPostgresqlSourceConfigIncludeObjectsPostgresqlSchemasToHclTerraform, true)(struct!.postgresqlSchemas),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDatastreamStreamSourceConfigPostgresqlSourceConfigIncludeObjectsPostgresqlSchemasList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDatastreamStreamSourceConfigPostgresqlSourceConfigIncludeObjectsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDatastreamStreamSourceConfigPostgresqlSourceConfigIncludeObjects | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._postgresqlSchemas?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.postgresqlSchemas = this._postgresqlSchemas?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDatastreamStreamSourceConfigPostgresqlSourceConfigIncludeObjects | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._postgresqlSchemas.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._postgresqlSchemas.internalValue = value.postgresqlSchemas;
    }
  }

  // postgresql_schemas - computed: false, optional: false, required: true
  private _postgresqlSchemas = new GoogleDatastreamStreamSourceConfigPostgresqlSourceConfigIncludeObjectsPostgresqlSchemasList(this, "postgresql_schemas", false);
  public get postgresqlSchemas() {
    return this._postgresqlSchemas;
  }
  public putPostgresqlSchemas(value: GoogleDatastreamStreamSourceConfigPostgresqlSourceConfigIncludeObjectsPostgresqlSchemas[] | cdktn.IResolvable) {
    this._postgresqlSchemas.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get postgresqlSchemasInput() {
    return this._postgresqlSchemas.internalValue;
  }
}
export interface GoogleDatastreamStreamSourceConfigPostgresqlSourceConfig {
  /**
  * Maximum number of concurrent backfill tasks. The number should be non
  * negative. If not set (or set to 0), the system's default value will be used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_datastream_stream#max_concurrent_backfill_tasks GoogleDatastreamStream#max_concurrent_backfill_tasks}
  */
  readonly maxConcurrentBackfillTasks?: number;
  /**
  * The name of the publication that includes the set of all tables
  * that are defined in the stream's include_objects.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_datastream_stream#publication GoogleDatastreamStream#publication}
  */
  readonly publication: string;
  /**
  * The name of the logical replication slot that's configured with
  * the pgoutput plugin.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_datastream_stream#replication_slot GoogleDatastreamStream#replication_slot}
  */
  readonly replicationSlot: string;
  /**
  * exclude_objects block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_datastream_stream#exclude_objects GoogleDatastreamStream#exclude_objects}
  */
  readonly excludeObjects?: GoogleDatastreamStreamSourceConfigPostgresqlSourceConfigExcludeObjects;
  /**
  * include_objects block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_datastream_stream#include_objects GoogleDatastreamStream#include_objects}
  */
  readonly includeObjects?: GoogleDatastreamStreamSourceConfigPostgresqlSourceConfigIncludeObjects;
}

export function googleDatastreamStreamSourceConfigPostgresqlSourceConfigToTerraform(struct?: GoogleDatastreamStreamSourceConfigPostgresqlSourceConfigOutputReference | GoogleDatastreamStreamSourceConfigPostgresqlSourceConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max_concurrent_backfill_tasks: cdktn.numberToTerraform(struct!.maxConcurrentBackfillTasks),
    publication: cdktn.stringToTerraform(struct!.publication),
    replication_slot: cdktn.stringToTerraform(struct!.replicationSlot),
    exclude_objects: googleDatastreamStreamSourceConfigPostgresqlSourceConfigExcludeObjectsToTerraform(struct!.excludeObjects),
    include_objects: googleDatastreamStreamSourceConfigPostgresqlSourceConfigIncludeObjectsToTerraform(struct!.includeObjects),
  }
}


export function googleDatastreamStreamSourceConfigPostgresqlSourceConfigToHclTerraform(struct?: GoogleDatastreamStreamSourceConfigPostgresqlSourceConfigOutputReference | GoogleDatastreamStreamSourceConfigPostgresqlSourceConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    max_concurrent_backfill_tasks: {
      value: cdktn.numberToHclTerraform(struct!.maxConcurrentBackfillTasks),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    publication: {
      value: cdktn.stringToHclTerraform(struct!.publication),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    replication_slot: {
      value: cdktn.stringToHclTerraform(struct!.replicationSlot),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    exclude_objects: {
      value: googleDatastreamStreamSourceConfigPostgresqlSourceConfigExcludeObjectsToHclTerraform(struct!.excludeObjects),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDatastreamStreamSourceConfigPostgresqlSourceConfigExcludeObjectsList",
    },
    include_objects: {
      value: googleDatastreamStreamSourceConfigPostgresqlSourceConfigIncludeObjectsToHclTerraform(struct!.includeObjects),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDatastreamStreamSourceConfigPostgresqlSourceConfigIncludeObjectsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDatastreamStreamSourceConfigPostgresqlSourceConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDatastreamStreamSourceConfigPostgresqlSourceConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maxConcurrentBackfillTasks !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxConcurrentBackfillTasks = this._maxConcurrentBackfillTasks;
    }
    if (this._publication !== undefined) {
      hasAnyValues = true;
      internalValueResult.publication = this._publication;
    }
    if (this._replicationSlot !== undefined) {
      hasAnyValues = true;
      internalValueResult.replicationSlot = this._replicationSlot;
    }
    if (this._excludeObjects?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.excludeObjects = this._excludeObjects?.internalValue;
    }
    if (this._includeObjects?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.includeObjects = this._includeObjects?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDatastreamStreamSourceConfigPostgresqlSourceConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._maxConcurrentBackfillTasks = undefined;
      this._publication = undefined;
      this._replicationSlot = undefined;
      this._excludeObjects.internalValue = undefined;
      this._includeObjects.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._maxConcurrentBackfillTasks = value.maxConcurrentBackfillTasks;
      this._publication = value.publication;
      this._replicationSlot = value.replicationSlot;
      this._excludeObjects.internalValue = value.excludeObjects;
      this._includeObjects.internalValue = value.includeObjects;
    }
  }

  // max_concurrent_backfill_tasks - computed: true, optional: true, required: false
  private _maxConcurrentBackfillTasks?: number; 
  public get maxConcurrentBackfillTasks() {
    return this.getNumberAttribute('max_concurrent_backfill_tasks');
  }
  public set maxConcurrentBackfillTasks(value: number) {
    this._maxConcurrentBackfillTasks = value;
  }
  public resetMaxConcurrentBackfillTasks() {
    this._maxConcurrentBackfillTasks = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxConcurrentBackfillTasksInput() {
    return this._maxConcurrentBackfillTasks;
  }

  // publication - computed: false, optional: false, required: true
  private _publication?: string; 
  public get publication() {
    return this.getStringAttribute('publication');
  }
  public set publication(value: string) {
    this._publication = value;
  }
  // Temporarily expose input value. Use with caution.
  public get publicationInput() {
    return this._publication;
  }

  // replication_slot - computed: false, optional: false, required: true
  private _replicationSlot?: string; 
  public get replicationSlot() {
    return this.getStringAttribute('replication_slot');
  }
  public set replicationSlot(value: string) {
    this._replicationSlot = value;
  }
  // Temporarily expose input value. Use with caution.
  public get replicationSlotInput() {
    return this._replicationSlot;
  }

  // exclude_objects - computed: false, optional: true, required: false
  private _excludeObjects = new GoogleDatastreamStreamSourceConfigPostgresqlSourceConfigExcludeObjectsOutputReference(this, "exclude_objects");
  public get excludeObjects() {
    return this._excludeObjects;
  }
  public putExcludeObjects(value: GoogleDatastreamStreamSourceConfigPostgresqlSourceConfigExcludeObjects) {
    this._excludeObjects.internalValue = value;
  }
  public resetExcludeObjects() {
    this._excludeObjects.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludeObjectsInput() {
    return this._excludeObjects.internalValue;
  }

  // include_objects - computed: false, optional: true, required: false
  private _includeObjects = new GoogleDatastreamStreamSourceConfigPostgresqlSourceConfigIncludeObjectsOutputReference(this, "include_objects");
  public get includeObjects() {
    return this._includeObjects;
  }
  public putIncludeObjects(value: GoogleDatastreamStreamSourceConfigPostgresqlSourceConfigIncludeObjects) {
    this._includeObjects.internalValue = value;
  }
  public resetIncludeObjects() {
    this._includeObjects.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeObjectsInput() {
    return this._includeObjects.internalValue;
  }
}
export interface GoogleDatastreamStreamSourceConfigSalesforceSourceConfigExcludeObjectsObjectsFields {
  /**
  * Field name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_datastream_stream#name GoogleDatastreamStream#name}
  */
  readonly name?: string;
}

export function googleDatastreamStreamSourceConfigSalesforceSourceConfigExcludeObjectsObjectsFieldsToTerraform(struct?: GoogleDatastreamStreamSourceConfigSalesforceSourceConfigExcludeObjectsObjectsFields | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktn.stringToTerraform(struct!.name),
  }
}


export function googleDatastreamStreamSourceConfigSalesforceSourceConfigExcludeObjectsObjectsFieldsToHclTerraform(struct?: GoogleDatastreamStreamSourceConfigSalesforceSourceConfigExcludeObjectsObjectsFields | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktn.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDatastreamStreamSourceConfigSalesforceSourceConfigExcludeObjectsObjectsFieldsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): GoogleDatastreamStreamSourceConfigSalesforceSourceConfigExcludeObjectsObjectsFields | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDatastreamStreamSourceConfigSalesforceSourceConfigExcludeObjectsObjectsFields | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
    }
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }
}

export class GoogleDatastreamStreamSourceConfigSalesforceSourceConfigExcludeObjectsObjectsFieldsList extends cdktn.ComplexList {
  public internalValue? : GoogleDatastreamStreamSourceConfigSalesforceSourceConfigExcludeObjectsObjectsFields[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): GoogleDatastreamStreamSourceConfigSalesforceSourceConfigExcludeObjectsObjectsFieldsOutputReference {
    return new GoogleDatastreamStreamSourceConfigSalesforceSourceConfigExcludeObjectsObjectsFieldsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleDatastreamStreamSourceConfigSalesforceSourceConfigExcludeObjectsObjects {
  /**
  * Name of object in Salesforce Org.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_datastream_stream#object_name GoogleDatastreamStream#object_name}
  */
  readonly objectName?: string;
  /**
  * fields block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_datastream_stream#fields GoogleDatastreamStream#fields}
  */
  readonly fields?: GoogleDatastreamStreamSourceConfigSalesforceSourceConfigExcludeObjectsObjectsFields[] | cdktn.IResolvable;
}

export function googleDatastreamStreamSourceConfigSalesforceSourceConfigExcludeObjectsObjectsToTerraform(struct?: GoogleDatastreamStreamSourceConfigSalesforceSourceConfigExcludeObjectsObjects | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    object_name: cdktn.stringToTerraform(struct!.objectName),
    fields: cdktn.listMapper(googleDatastreamStreamSourceConfigSalesforceSourceConfigExcludeObjectsObjectsFieldsToTerraform, true)(struct!.fields),
  }
}


export function googleDatastreamStreamSourceConfigSalesforceSourceConfigExcludeObjectsObjectsToHclTerraform(struct?: GoogleDatastreamStreamSourceConfigSalesforceSourceConfigExcludeObjectsObjects | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    object_name: {
      value: cdktn.stringToHclTerraform(struct!.objectName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    fields: {
      value: cdktn.listMapperHcl(googleDatastreamStreamSourceConfigSalesforceSourceConfigExcludeObjectsObjectsFieldsToHclTerraform, true)(struct!.fields),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDatastreamStreamSourceConfigSalesforceSourceConfigExcludeObjectsObjectsFieldsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDatastreamStreamSourceConfigSalesforceSourceConfigExcludeObjectsObjectsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): GoogleDatastreamStreamSourceConfigSalesforceSourceConfigExcludeObjectsObjects | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._objectName !== undefined) {
      hasAnyValues = true;
      internalValueResult.objectName = this._objectName;
    }
    if (this._fields?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fields = this._fields?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDatastreamStreamSourceConfigSalesforceSourceConfigExcludeObjectsObjects | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._objectName = undefined;
      this._fields.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._objectName = value.objectName;
      this._fields.internalValue = value.fields;
    }
  }

  // object_name - computed: false, optional: true, required: false
  private _objectName?: string; 
  public get objectName() {
    return this.getStringAttribute('object_name');
  }
  public set objectName(value: string) {
    this._objectName = value;
  }
  public resetObjectName() {
    this._objectName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectNameInput() {
    return this._objectName;
  }

  // fields - computed: false, optional: true, required: false
  private _fields = new GoogleDatastreamStreamSourceConfigSalesforceSourceConfigExcludeObjectsObjectsFieldsList(this, "fields", false);
  public get fields() {
    return this._fields;
  }
  public putFields(value: GoogleDatastreamStreamSourceConfigSalesforceSourceConfigExcludeObjectsObjectsFields[] | cdktn.IResolvable) {
    this._fields.internalValue = value;
  }
  public resetFields() {
    this._fields.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldsInput() {
    return this._fields.internalValue;
  }
}

export class GoogleDatastreamStreamSourceConfigSalesforceSourceConfigExcludeObjectsObjectsList extends cdktn.ComplexList {
  public internalValue? : GoogleDatastreamStreamSourceConfigSalesforceSourceConfigExcludeObjectsObjects[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): GoogleDatastreamStreamSourceConfigSalesforceSourceConfigExcludeObjectsObjectsOutputReference {
    return new GoogleDatastreamStreamSourceConfigSalesforceSourceConfigExcludeObjectsObjectsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleDatastreamStreamSourceConfigSalesforceSourceConfigExcludeObjects {
  /**
  * objects block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_datastream_stream#objects GoogleDatastreamStream#objects}
  */
  readonly objects: GoogleDatastreamStreamSourceConfigSalesforceSourceConfigExcludeObjectsObjects[] | cdktn.IResolvable;
}

export function googleDatastreamStreamSourceConfigSalesforceSourceConfigExcludeObjectsToTerraform(struct?: GoogleDatastreamStreamSourceConfigSalesforceSourceConfigExcludeObjectsOutputReference | GoogleDatastreamStreamSourceConfigSalesforceSourceConfigExcludeObjects): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    objects: cdktn.listMapper(googleDatastreamStreamSourceConfigSalesforceSourceConfigExcludeObjectsObjectsToTerraform, true)(struct!.objects),
  }
}


export function googleDatastreamStreamSourceConfigSalesforceSourceConfigExcludeObjectsToHclTerraform(struct?: GoogleDatastreamStreamSourceConfigSalesforceSourceConfigExcludeObjectsOutputReference | GoogleDatastreamStreamSourceConfigSalesforceSourceConfigExcludeObjects): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    objects: {
      value: cdktn.listMapperHcl(googleDatastreamStreamSourceConfigSalesforceSourceConfigExcludeObjectsObjectsToHclTerraform, true)(struct!.objects),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDatastreamStreamSourceConfigSalesforceSourceConfigExcludeObjectsObjectsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDatastreamStreamSourceConfigSalesforceSourceConfigExcludeObjectsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDatastreamStreamSourceConfigSalesforceSourceConfigExcludeObjects | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._objects?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.objects = this._objects?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDatastreamStreamSourceConfigSalesforceSourceConfigExcludeObjects | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._objects.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._objects.internalValue = value.objects;
    }
  }

  // objects - computed: false, optional: false, required: true
  private _objects = new GoogleDatastreamStreamSourceConfigSalesforceSourceConfigExcludeObjectsObjectsList(this, "objects", false);
  public get objects() {
    return this._objects;
  }
  public putObjects(value: GoogleDatastreamStreamSourceConfigSalesforceSourceConfigExcludeObjectsObjects[] | cdktn.IResolvable) {
    this._objects.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get objectsInput() {
    return this._objects.internalValue;
  }
}
export interface GoogleDatastreamStreamSourceConfigSalesforceSourceConfigIncludeObjectsObjectsFields {
  /**
  * Field name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_datastream_stream#name GoogleDatastreamStream#name}
  */
  readonly name?: string;
}

export function googleDatastreamStreamSourceConfigSalesforceSourceConfigIncludeObjectsObjectsFieldsToTerraform(struct?: GoogleDatastreamStreamSourceConfigSalesforceSourceConfigIncludeObjectsObjectsFields | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktn.stringToTerraform(struct!.name),
  }
}


export function googleDatastreamStreamSourceConfigSalesforceSourceConfigIncludeObjectsObjectsFieldsToHclTerraform(struct?: GoogleDatastreamStreamSourceConfigSalesforceSourceConfigIncludeObjectsObjectsFields | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktn.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDatastreamStreamSourceConfigSalesforceSourceConfigIncludeObjectsObjectsFieldsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): GoogleDatastreamStreamSourceConfigSalesforceSourceConfigIncludeObjectsObjectsFields | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDatastreamStreamSourceConfigSalesforceSourceConfigIncludeObjectsObjectsFields | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
    }
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }
}

export class GoogleDatastreamStreamSourceConfigSalesforceSourceConfigIncludeObjectsObjectsFieldsList extends cdktn.ComplexList {
  public internalValue? : GoogleDatastreamStreamSourceConfigSalesforceSourceConfigIncludeObjectsObjectsFields[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): GoogleDatastreamStreamSourceConfigSalesforceSourceConfigIncludeObjectsObjectsFieldsOutputReference {
    return new GoogleDatastreamStreamSourceConfigSalesforceSourceConfigIncludeObjectsObjectsFieldsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleDatastreamStreamSourceConfigSalesforceSourceConfigIncludeObjectsObjects {
  /**
  * Name of object in Salesforce Org.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_datastream_stream#object_name GoogleDatastreamStream#object_name}
  */
  readonly objectName?: string;
  /**
  * fields block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_datastream_stream#fields GoogleDatastreamStream#fields}
  */
  readonly fields?: GoogleDatastreamStreamSourceConfigSalesforceSourceConfigIncludeObjectsObjectsFields[] | cdktn.IResolvable;
}

export function googleDatastreamStreamSourceConfigSalesforceSourceConfigIncludeObjectsObjectsToTerraform(struct?: GoogleDatastreamStreamSourceConfigSalesforceSourceConfigIncludeObjectsObjects | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    object_name: cdktn.stringToTerraform(struct!.objectName),
    fields: cdktn.listMapper(googleDatastreamStreamSourceConfigSalesforceSourceConfigIncludeObjectsObjectsFieldsToTerraform, true)(struct!.fields),
  }
}


export function googleDatastreamStreamSourceConfigSalesforceSourceConfigIncludeObjectsObjectsToHclTerraform(struct?: GoogleDatastreamStreamSourceConfigSalesforceSourceConfigIncludeObjectsObjects | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    object_name: {
      value: cdktn.stringToHclTerraform(struct!.objectName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    fields: {
      value: cdktn.listMapperHcl(googleDatastreamStreamSourceConfigSalesforceSourceConfigIncludeObjectsObjectsFieldsToHclTerraform, true)(struct!.fields),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDatastreamStreamSourceConfigSalesforceSourceConfigIncludeObjectsObjectsFieldsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDatastreamStreamSourceConfigSalesforceSourceConfigIncludeObjectsObjectsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): GoogleDatastreamStreamSourceConfigSalesforceSourceConfigIncludeObjectsObjects | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._objectName !== undefined) {
      hasAnyValues = true;
      internalValueResult.objectName = this._objectName;
    }
    if (this._fields?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fields = this._fields?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDatastreamStreamSourceConfigSalesforceSourceConfigIncludeObjectsObjects | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._objectName = undefined;
      this._fields.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._objectName = value.objectName;
      this._fields.internalValue = value.fields;
    }
  }

  // object_name - computed: false, optional: true, required: false
  private _objectName?: string; 
  public get objectName() {
    return this.getStringAttribute('object_name');
  }
  public set objectName(value: string) {
    this._objectName = value;
  }
  public resetObjectName() {
    this._objectName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectNameInput() {
    return this._objectName;
  }

  // fields - computed: false, optional: true, required: false
  private _fields = new GoogleDatastreamStreamSourceConfigSalesforceSourceConfigIncludeObjectsObjectsFieldsList(this, "fields", false);
  public get fields() {
    return this._fields;
  }
  public putFields(value: GoogleDatastreamStreamSourceConfigSalesforceSourceConfigIncludeObjectsObjectsFields[] | cdktn.IResolvable) {
    this._fields.internalValue = value;
  }
  public resetFields() {
    this._fields.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldsInput() {
    return this._fields.internalValue;
  }
}

export class GoogleDatastreamStreamSourceConfigSalesforceSourceConfigIncludeObjectsObjectsList extends cdktn.ComplexList {
  public internalValue? : GoogleDatastreamStreamSourceConfigSalesforceSourceConfigIncludeObjectsObjects[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): GoogleDatastreamStreamSourceConfigSalesforceSourceConfigIncludeObjectsObjectsOutputReference {
    return new GoogleDatastreamStreamSourceConfigSalesforceSourceConfigIncludeObjectsObjectsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleDatastreamStreamSourceConfigSalesforceSourceConfigIncludeObjects {
  /**
  * objects block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_datastream_stream#objects GoogleDatastreamStream#objects}
  */
  readonly objects: GoogleDatastreamStreamSourceConfigSalesforceSourceConfigIncludeObjectsObjects[] | cdktn.IResolvable;
}

export function googleDatastreamStreamSourceConfigSalesforceSourceConfigIncludeObjectsToTerraform(struct?: GoogleDatastreamStreamSourceConfigSalesforceSourceConfigIncludeObjectsOutputReference | GoogleDatastreamStreamSourceConfigSalesforceSourceConfigIncludeObjects): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    objects: cdktn.listMapper(googleDatastreamStreamSourceConfigSalesforceSourceConfigIncludeObjectsObjectsToTerraform, true)(struct!.objects),
  }
}


export function googleDatastreamStreamSourceConfigSalesforceSourceConfigIncludeObjectsToHclTerraform(struct?: GoogleDatastreamStreamSourceConfigSalesforceSourceConfigIncludeObjectsOutputReference | GoogleDatastreamStreamSourceConfigSalesforceSourceConfigIncludeObjects): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    objects: {
      value: cdktn.listMapperHcl(googleDatastreamStreamSourceConfigSalesforceSourceConfigIncludeObjectsObjectsToHclTerraform, true)(struct!.objects),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDatastreamStreamSourceConfigSalesforceSourceConfigIncludeObjectsObjectsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDatastreamStreamSourceConfigSalesforceSourceConfigIncludeObjectsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDatastreamStreamSourceConfigSalesforceSourceConfigIncludeObjects | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._objects?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.objects = this._objects?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDatastreamStreamSourceConfigSalesforceSourceConfigIncludeObjects | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._objects.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._objects.internalValue = value.objects;
    }
  }

  // objects - computed: false, optional: false, required: true
  private _objects = new GoogleDatastreamStreamSourceConfigSalesforceSourceConfigIncludeObjectsObjectsList(this, "objects", false);
  public get objects() {
    return this._objects;
  }
  public putObjects(value: GoogleDatastreamStreamSourceConfigSalesforceSourceConfigIncludeObjectsObjects[] | cdktn.IResolvable) {
    this._objects.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get objectsInput() {
    return this._objects.internalValue;
  }
}
export interface GoogleDatastreamStreamSourceConfigSalesforceSourceConfig {
  /**
  * Salesforce objects polling interval. The interval at which new changes will be polled for each object. The duration must be between 5 minutes and 24 hours.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_datastream_stream#polling_interval GoogleDatastreamStream#polling_interval}
  */
  readonly pollingInterval: string;
  /**
  * exclude_objects block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_datastream_stream#exclude_objects GoogleDatastreamStream#exclude_objects}
  */
  readonly excludeObjects?: GoogleDatastreamStreamSourceConfigSalesforceSourceConfigExcludeObjects;
  /**
  * include_objects block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_datastream_stream#include_objects GoogleDatastreamStream#include_objects}
  */
  readonly includeObjects?: GoogleDatastreamStreamSourceConfigSalesforceSourceConfigIncludeObjects;
}

export function googleDatastreamStreamSourceConfigSalesforceSourceConfigToTerraform(struct?: GoogleDatastreamStreamSourceConfigSalesforceSourceConfigOutputReference | GoogleDatastreamStreamSourceConfigSalesforceSourceConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    polling_interval: cdktn.stringToTerraform(struct!.pollingInterval),
    exclude_objects: googleDatastreamStreamSourceConfigSalesforceSourceConfigExcludeObjectsToTerraform(struct!.excludeObjects),
    include_objects: googleDatastreamStreamSourceConfigSalesforceSourceConfigIncludeObjectsToTerraform(struct!.includeObjects),
  }
}


export function googleDatastreamStreamSourceConfigSalesforceSourceConfigToHclTerraform(struct?: GoogleDatastreamStreamSourceConfigSalesforceSourceConfigOutputReference | GoogleDatastreamStreamSourceConfigSalesforceSourceConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    polling_interval: {
      value: cdktn.stringToHclTerraform(struct!.pollingInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    exclude_objects: {
      value: googleDatastreamStreamSourceConfigSalesforceSourceConfigExcludeObjectsToHclTerraform(struct!.excludeObjects),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDatastreamStreamSourceConfigSalesforceSourceConfigExcludeObjectsList",
    },
    include_objects: {
      value: googleDatastreamStreamSourceConfigSalesforceSourceConfigIncludeObjectsToHclTerraform(struct!.includeObjects),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDatastreamStreamSourceConfigSalesforceSourceConfigIncludeObjectsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDatastreamStreamSourceConfigSalesforceSourceConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDatastreamStreamSourceConfigSalesforceSourceConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._pollingInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.pollingInterval = this._pollingInterval;
    }
    if (this._excludeObjects?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.excludeObjects = this._excludeObjects?.internalValue;
    }
    if (this._includeObjects?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.includeObjects = this._includeObjects?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDatastreamStreamSourceConfigSalesforceSourceConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._pollingInterval = undefined;
      this._excludeObjects.internalValue = undefined;
      this._includeObjects.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._pollingInterval = value.pollingInterval;
      this._excludeObjects.internalValue = value.excludeObjects;
      this._includeObjects.internalValue = value.includeObjects;
    }
  }

  // polling_interval - computed: false, optional: false, required: true
  private _pollingInterval?: string; 
  public get pollingInterval() {
    return this.getStringAttribute('polling_interval');
  }
  public set pollingInterval(value: string) {
    this._pollingInterval = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pollingIntervalInput() {
    return this._pollingInterval;
  }

  // exclude_objects - computed: false, optional: true, required: false
  private _excludeObjects = new GoogleDatastreamStreamSourceConfigSalesforceSourceConfigExcludeObjectsOutputReference(this, "exclude_objects");
  public get excludeObjects() {
    return this._excludeObjects;
  }
  public putExcludeObjects(value: GoogleDatastreamStreamSourceConfigSalesforceSourceConfigExcludeObjects) {
    this._excludeObjects.internalValue = value;
  }
  public resetExcludeObjects() {
    this._excludeObjects.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludeObjectsInput() {
    return this._excludeObjects.internalValue;
  }

  // include_objects - computed: false, optional: true, required: false
  private _includeObjects = new GoogleDatastreamStreamSourceConfigSalesforceSourceConfigIncludeObjectsOutputReference(this, "include_objects");
  public get includeObjects() {
    return this._includeObjects;
  }
  public putIncludeObjects(value: GoogleDatastreamStreamSourceConfigSalesforceSourceConfigIncludeObjects) {
    this._includeObjects.internalValue = value;
  }
  public resetIncludeObjects() {
    this._includeObjects.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeObjectsInput() {
    return this._includeObjects.internalValue;
  }
}
export interface GoogleDatastreamStreamSourceConfigSqlServerSourceConfigChangeTables {
}

export function googleDatastreamStreamSourceConfigSqlServerSourceConfigChangeTablesToTerraform(struct?: GoogleDatastreamStreamSourceConfigSqlServerSourceConfigChangeTablesOutputReference | GoogleDatastreamStreamSourceConfigSqlServerSourceConfigChangeTables): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function googleDatastreamStreamSourceConfigSqlServerSourceConfigChangeTablesToHclTerraform(struct?: GoogleDatastreamStreamSourceConfigSqlServerSourceConfigChangeTablesOutputReference | GoogleDatastreamStreamSourceConfigSqlServerSourceConfigChangeTables): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GoogleDatastreamStreamSourceConfigSqlServerSourceConfigChangeTablesOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDatastreamStreamSourceConfigSqlServerSourceConfigChangeTables | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDatastreamStreamSourceConfigSqlServerSourceConfigChangeTables | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface GoogleDatastreamStreamSourceConfigSqlServerSourceConfigExcludeObjectsSchemasTablesColumns {
  /**
  * Column name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_datastream_stream#column GoogleDatastreamStream#column}
  */
  readonly column?: string;
  /**
  * The SQL Server data type. Full data types list can be found here:
  * https://learn.microsoft.com/en-us/sql/t-sql/data-types/data-types-transact-sql?view=sql-server-ver16
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_datastream_stream#data_type GoogleDatastreamStream#data_type}
  */
  readonly dataType?: string;
}

export function googleDatastreamStreamSourceConfigSqlServerSourceConfigExcludeObjectsSchemasTablesColumnsToTerraform(struct?: GoogleDatastreamStreamSourceConfigSqlServerSourceConfigExcludeObjectsSchemasTablesColumns | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    column: cdktn.stringToTerraform(struct!.column),
    data_type: cdktn.stringToTerraform(struct!.dataType),
  }
}


export function googleDatastreamStreamSourceConfigSqlServerSourceConfigExcludeObjectsSchemasTablesColumnsToHclTerraform(struct?: GoogleDatastreamStreamSourceConfigSqlServerSourceConfigExcludeObjectsSchemasTablesColumns | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    column: {
      value: cdktn.stringToHclTerraform(struct!.column),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    data_type: {
      value: cdktn.stringToHclTerraform(struct!.dataType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDatastreamStreamSourceConfigSqlServerSourceConfigExcludeObjectsSchemasTablesColumnsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): GoogleDatastreamStreamSourceConfigSqlServerSourceConfigExcludeObjectsSchemasTablesColumns | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._column !== undefined) {
      hasAnyValues = true;
      internalValueResult.column = this._column;
    }
    if (this._dataType !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataType = this._dataType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDatastreamStreamSourceConfigSqlServerSourceConfigExcludeObjectsSchemasTablesColumns | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._column = undefined;
      this._dataType = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._column = value.column;
      this._dataType = value.dataType;
    }
  }

  // column - computed: false, optional: true, required: false
  private _column?: string; 
  public get column() {
    return this.getStringAttribute('column');
  }
  public set column(value: string) {
    this._column = value;
  }
  public resetColumn() {
    this._column = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get columnInput() {
    return this._column;
  }

  // data_type - computed: false, optional: true, required: false
  private _dataType?: string; 
  public get dataType() {
    return this.getStringAttribute('data_type');
  }
  public set dataType(value: string) {
    this._dataType = value;
  }
  public resetDataType() {
    this._dataType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataTypeInput() {
    return this._dataType;
  }

  // length - computed: true, optional: false, required: false
  public get length() {
    return this.getNumberAttribute('length');
  }

  // nullable - computed: true, optional: false, required: false
  public get nullable() {
    return this.getBooleanAttribute('nullable');
  }

  // ordinal_position - computed: true, optional: false, required: false
  public get ordinalPosition() {
    return this.getNumberAttribute('ordinal_position');
  }

  // precision - computed: true, optional: false, required: false
  public get precision() {
    return this.getNumberAttribute('precision');
  }

  // primary_key - computed: true, optional: false, required: false
  public get primaryKey() {
    return this.getBooleanAttribute('primary_key');
  }

  // scale - computed: true, optional: false, required: false
  public get scale() {
    return this.getNumberAttribute('scale');
  }
}

export class GoogleDatastreamStreamSourceConfigSqlServerSourceConfigExcludeObjectsSchemasTablesColumnsList extends cdktn.ComplexList {
  public internalValue? : GoogleDatastreamStreamSourceConfigSqlServerSourceConfigExcludeObjectsSchemasTablesColumns[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): GoogleDatastreamStreamSourceConfigSqlServerSourceConfigExcludeObjectsSchemasTablesColumnsOutputReference {
    return new GoogleDatastreamStreamSourceConfigSqlServerSourceConfigExcludeObjectsSchemasTablesColumnsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleDatastreamStreamSourceConfigSqlServerSourceConfigExcludeObjectsSchemasTables {
  /**
  * Table name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_datastream_stream#table GoogleDatastreamStream#table}
  */
  readonly table: string;
  /**
  * columns block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_datastream_stream#columns GoogleDatastreamStream#columns}
  */
  readonly columns?: GoogleDatastreamStreamSourceConfigSqlServerSourceConfigExcludeObjectsSchemasTablesColumns[] | cdktn.IResolvable;
}

export function googleDatastreamStreamSourceConfigSqlServerSourceConfigExcludeObjectsSchemasTablesToTerraform(struct?: GoogleDatastreamStreamSourceConfigSqlServerSourceConfigExcludeObjectsSchemasTables | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    table: cdktn.stringToTerraform(struct!.table),
    columns: cdktn.listMapper(googleDatastreamStreamSourceConfigSqlServerSourceConfigExcludeObjectsSchemasTablesColumnsToTerraform, true)(struct!.columns),
  }
}


export function googleDatastreamStreamSourceConfigSqlServerSourceConfigExcludeObjectsSchemasTablesToHclTerraform(struct?: GoogleDatastreamStreamSourceConfigSqlServerSourceConfigExcludeObjectsSchemasTables | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    table: {
      value: cdktn.stringToHclTerraform(struct!.table),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    columns: {
      value: cdktn.listMapperHcl(googleDatastreamStreamSourceConfigSqlServerSourceConfigExcludeObjectsSchemasTablesColumnsToHclTerraform, true)(struct!.columns),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDatastreamStreamSourceConfigSqlServerSourceConfigExcludeObjectsSchemasTablesColumnsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDatastreamStreamSourceConfigSqlServerSourceConfigExcludeObjectsSchemasTablesOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): GoogleDatastreamStreamSourceConfigSqlServerSourceConfigExcludeObjectsSchemasTables | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._table !== undefined) {
      hasAnyValues = true;
      internalValueResult.table = this._table;
    }
    if (this._columns?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.columns = this._columns?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDatastreamStreamSourceConfigSqlServerSourceConfigExcludeObjectsSchemasTables | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._table = undefined;
      this._columns.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._table = value.table;
      this._columns.internalValue = value.columns;
    }
  }

  // table - computed: false, optional: false, required: true
  private _table?: string; 
  public get table() {
    return this.getStringAttribute('table');
  }
  public set table(value: string) {
    this._table = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tableInput() {
    return this._table;
  }

  // columns - computed: false, optional: true, required: false
  private _columns = new GoogleDatastreamStreamSourceConfigSqlServerSourceConfigExcludeObjectsSchemasTablesColumnsList(this, "columns", false);
  public get columns() {
    return this._columns;
  }
  public putColumns(value: GoogleDatastreamStreamSourceConfigSqlServerSourceConfigExcludeObjectsSchemasTablesColumns[] | cdktn.IResolvable) {
    this._columns.internalValue = value;
  }
  public resetColumns() {
    this._columns.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get columnsInput() {
    return this._columns.internalValue;
  }
}

export class GoogleDatastreamStreamSourceConfigSqlServerSourceConfigExcludeObjectsSchemasTablesList extends cdktn.ComplexList {
  public internalValue? : GoogleDatastreamStreamSourceConfigSqlServerSourceConfigExcludeObjectsSchemasTables[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): GoogleDatastreamStreamSourceConfigSqlServerSourceConfigExcludeObjectsSchemasTablesOutputReference {
    return new GoogleDatastreamStreamSourceConfigSqlServerSourceConfigExcludeObjectsSchemasTablesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleDatastreamStreamSourceConfigSqlServerSourceConfigExcludeObjectsSchemas {
  /**
  * Schema name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_datastream_stream#schema GoogleDatastreamStream#schema}
  */
  readonly schema: string;
  /**
  * tables block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_datastream_stream#tables GoogleDatastreamStream#tables}
  */
  readonly tables?: GoogleDatastreamStreamSourceConfigSqlServerSourceConfigExcludeObjectsSchemasTables[] | cdktn.IResolvable;
}

export function googleDatastreamStreamSourceConfigSqlServerSourceConfigExcludeObjectsSchemasToTerraform(struct?: GoogleDatastreamStreamSourceConfigSqlServerSourceConfigExcludeObjectsSchemas | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    schema: cdktn.stringToTerraform(struct!.schema),
    tables: cdktn.listMapper(googleDatastreamStreamSourceConfigSqlServerSourceConfigExcludeObjectsSchemasTablesToTerraform, true)(struct!.tables),
  }
}


export function googleDatastreamStreamSourceConfigSqlServerSourceConfigExcludeObjectsSchemasToHclTerraform(struct?: GoogleDatastreamStreamSourceConfigSqlServerSourceConfigExcludeObjectsSchemas | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    schema: {
      value: cdktn.stringToHclTerraform(struct!.schema),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tables: {
      value: cdktn.listMapperHcl(googleDatastreamStreamSourceConfigSqlServerSourceConfigExcludeObjectsSchemasTablesToHclTerraform, true)(struct!.tables),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDatastreamStreamSourceConfigSqlServerSourceConfigExcludeObjectsSchemasTablesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDatastreamStreamSourceConfigSqlServerSourceConfigExcludeObjectsSchemasOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): GoogleDatastreamStreamSourceConfigSqlServerSourceConfigExcludeObjectsSchemas | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._schema !== undefined) {
      hasAnyValues = true;
      internalValueResult.schema = this._schema;
    }
    if (this._tables?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tables = this._tables?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDatastreamStreamSourceConfigSqlServerSourceConfigExcludeObjectsSchemas | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._schema = undefined;
      this._tables.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._schema = value.schema;
      this._tables.internalValue = value.tables;
    }
  }

  // schema - computed: false, optional: false, required: true
  private _schema?: string; 
  public get schema() {
    return this.getStringAttribute('schema');
  }
  public set schema(value: string) {
    this._schema = value;
  }
  // Temporarily expose input value. Use with caution.
  public get schemaInput() {
    return this._schema;
  }

  // tables - computed: false, optional: true, required: false
  private _tables = new GoogleDatastreamStreamSourceConfigSqlServerSourceConfigExcludeObjectsSchemasTablesList(this, "tables", false);
  public get tables() {
    return this._tables;
  }
  public putTables(value: GoogleDatastreamStreamSourceConfigSqlServerSourceConfigExcludeObjectsSchemasTables[] | cdktn.IResolvable) {
    this._tables.internalValue = value;
  }
  public resetTables() {
    this._tables.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tablesInput() {
    return this._tables.internalValue;
  }
}

export class GoogleDatastreamStreamSourceConfigSqlServerSourceConfigExcludeObjectsSchemasList extends cdktn.ComplexList {
  public internalValue? : GoogleDatastreamStreamSourceConfigSqlServerSourceConfigExcludeObjectsSchemas[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): GoogleDatastreamStreamSourceConfigSqlServerSourceConfigExcludeObjectsSchemasOutputReference {
    return new GoogleDatastreamStreamSourceConfigSqlServerSourceConfigExcludeObjectsSchemasOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleDatastreamStreamSourceConfigSqlServerSourceConfigExcludeObjects {
  /**
  * schemas block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_datastream_stream#schemas GoogleDatastreamStream#schemas}
  */
  readonly schemas: GoogleDatastreamStreamSourceConfigSqlServerSourceConfigExcludeObjectsSchemas[] | cdktn.IResolvable;
}

export function googleDatastreamStreamSourceConfigSqlServerSourceConfigExcludeObjectsToTerraform(struct?: GoogleDatastreamStreamSourceConfigSqlServerSourceConfigExcludeObjectsOutputReference | GoogleDatastreamStreamSourceConfigSqlServerSourceConfigExcludeObjects): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    schemas: cdktn.listMapper(googleDatastreamStreamSourceConfigSqlServerSourceConfigExcludeObjectsSchemasToTerraform, true)(struct!.schemas),
  }
}


export function googleDatastreamStreamSourceConfigSqlServerSourceConfigExcludeObjectsToHclTerraform(struct?: GoogleDatastreamStreamSourceConfigSqlServerSourceConfigExcludeObjectsOutputReference | GoogleDatastreamStreamSourceConfigSqlServerSourceConfigExcludeObjects): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    schemas: {
      value: cdktn.listMapperHcl(googleDatastreamStreamSourceConfigSqlServerSourceConfigExcludeObjectsSchemasToHclTerraform, true)(struct!.schemas),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDatastreamStreamSourceConfigSqlServerSourceConfigExcludeObjectsSchemasList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDatastreamStreamSourceConfigSqlServerSourceConfigExcludeObjectsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDatastreamStreamSourceConfigSqlServerSourceConfigExcludeObjects | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._schemas?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.schemas = this._schemas?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDatastreamStreamSourceConfigSqlServerSourceConfigExcludeObjects | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._schemas.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._schemas.internalValue = value.schemas;
    }
  }

  // schemas - computed: false, optional: false, required: true
  private _schemas = new GoogleDatastreamStreamSourceConfigSqlServerSourceConfigExcludeObjectsSchemasList(this, "schemas", false);
  public get schemas() {
    return this._schemas;
  }
  public putSchemas(value: GoogleDatastreamStreamSourceConfigSqlServerSourceConfigExcludeObjectsSchemas[] | cdktn.IResolvable) {
    this._schemas.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get schemasInput() {
    return this._schemas.internalValue;
  }
}
export interface GoogleDatastreamStreamSourceConfigSqlServerSourceConfigIncludeObjectsSchemasTablesColumns {
  /**
  * Column name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_datastream_stream#column GoogleDatastreamStream#column}
  */
  readonly column?: string;
  /**
  * The SQL Server data type. Full data types list can be found here:
  * https://learn.microsoft.com/en-us/sql/t-sql/data-types/data-types-transact-sql?view=sql-server-ver16
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_datastream_stream#data_type GoogleDatastreamStream#data_type}
  */
  readonly dataType?: string;
}

export function googleDatastreamStreamSourceConfigSqlServerSourceConfigIncludeObjectsSchemasTablesColumnsToTerraform(struct?: GoogleDatastreamStreamSourceConfigSqlServerSourceConfigIncludeObjectsSchemasTablesColumns | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    column: cdktn.stringToTerraform(struct!.column),
    data_type: cdktn.stringToTerraform(struct!.dataType),
  }
}


export function googleDatastreamStreamSourceConfigSqlServerSourceConfigIncludeObjectsSchemasTablesColumnsToHclTerraform(struct?: GoogleDatastreamStreamSourceConfigSqlServerSourceConfigIncludeObjectsSchemasTablesColumns | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    column: {
      value: cdktn.stringToHclTerraform(struct!.column),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    data_type: {
      value: cdktn.stringToHclTerraform(struct!.dataType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDatastreamStreamSourceConfigSqlServerSourceConfigIncludeObjectsSchemasTablesColumnsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): GoogleDatastreamStreamSourceConfigSqlServerSourceConfigIncludeObjectsSchemasTablesColumns | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._column !== undefined) {
      hasAnyValues = true;
      internalValueResult.column = this._column;
    }
    if (this._dataType !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataType = this._dataType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDatastreamStreamSourceConfigSqlServerSourceConfigIncludeObjectsSchemasTablesColumns | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._column = undefined;
      this._dataType = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._column = value.column;
      this._dataType = value.dataType;
    }
  }

  // column - computed: false, optional: true, required: false
  private _column?: string; 
  public get column() {
    return this.getStringAttribute('column');
  }
  public set column(value: string) {
    this._column = value;
  }
  public resetColumn() {
    this._column = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get columnInput() {
    return this._column;
  }

  // data_type - computed: false, optional: true, required: false
  private _dataType?: string; 
  public get dataType() {
    return this.getStringAttribute('data_type');
  }
  public set dataType(value: string) {
    this._dataType = value;
  }
  public resetDataType() {
    this._dataType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataTypeInput() {
    return this._dataType;
  }

  // length - computed: true, optional: false, required: false
  public get length() {
    return this.getNumberAttribute('length');
  }

  // nullable - computed: true, optional: false, required: false
  public get nullable() {
    return this.getBooleanAttribute('nullable');
  }

  // ordinal_position - computed: true, optional: false, required: false
  public get ordinalPosition() {
    return this.getNumberAttribute('ordinal_position');
  }

  // precision - computed: true, optional: false, required: false
  public get precision() {
    return this.getNumberAttribute('precision');
  }

  // primary_key - computed: true, optional: false, required: false
  public get primaryKey() {
    return this.getBooleanAttribute('primary_key');
  }

  // scale - computed: true, optional: false, required: false
  public get scale() {
    return this.getNumberAttribute('scale');
  }
}

export class GoogleDatastreamStreamSourceConfigSqlServerSourceConfigIncludeObjectsSchemasTablesColumnsList extends cdktn.ComplexList {
  public internalValue? : GoogleDatastreamStreamSourceConfigSqlServerSourceConfigIncludeObjectsSchemasTablesColumns[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): GoogleDatastreamStreamSourceConfigSqlServerSourceConfigIncludeObjectsSchemasTablesColumnsOutputReference {
    return new GoogleDatastreamStreamSourceConfigSqlServerSourceConfigIncludeObjectsSchemasTablesColumnsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleDatastreamStreamSourceConfigSqlServerSourceConfigIncludeObjectsSchemasTables {
  /**
  * Table name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_datastream_stream#table GoogleDatastreamStream#table}
  */
  readonly table: string;
  /**
  * columns block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_datastream_stream#columns GoogleDatastreamStream#columns}
  */
  readonly columns?: GoogleDatastreamStreamSourceConfigSqlServerSourceConfigIncludeObjectsSchemasTablesColumns[] | cdktn.IResolvable;
}

export function googleDatastreamStreamSourceConfigSqlServerSourceConfigIncludeObjectsSchemasTablesToTerraform(struct?: GoogleDatastreamStreamSourceConfigSqlServerSourceConfigIncludeObjectsSchemasTables | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    table: cdktn.stringToTerraform(struct!.table),
    columns: cdktn.listMapper(googleDatastreamStreamSourceConfigSqlServerSourceConfigIncludeObjectsSchemasTablesColumnsToTerraform, true)(struct!.columns),
  }
}


export function googleDatastreamStreamSourceConfigSqlServerSourceConfigIncludeObjectsSchemasTablesToHclTerraform(struct?: GoogleDatastreamStreamSourceConfigSqlServerSourceConfigIncludeObjectsSchemasTables | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    table: {
      value: cdktn.stringToHclTerraform(struct!.table),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    columns: {
      value: cdktn.listMapperHcl(googleDatastreamStreamSourceConfigSqlServerSourceConfigIncludeObjectsSchemasTablesColumnsToHclTerraform, true)(struct!.columns),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDatastreamStreamSourceConfigSqlServerSourceConfigIncludeObjectsSchemasTablesColumnsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDatastreamStreamSourceConfigSqlServerSourceConfigIncludeObjectsSchemasTablesOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): GoogleDatastreamStreamSourceConfigSqlServerSourceConfigIncludeObjectsSchemasTables | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._table !== undefined) {
      hasAnyValues = true;
      internalValueResult.table = this._table;
    }
    if (this._columns?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.columns = this._columns?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDatastreamStreamSourceConfigSqlServerSourceConfigIncludeObjectsSchemasTables | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._table = undefined;
      this._columns.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._table = value.table;
      this._columns.internalValue = value.columns;
    }
  }

  // table - computed: false, optional: false, required: true
  private _table?: string; 
  public get table() {
    return this.getStringAttribute('table');
  }
  public set table(value: string) {
    this._table = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tableInput() {
    return this._table;
  }

  // columns - computed: false, optional: true, required: false
  private _columns = new GoogleDatastreamStreamSourceConfigSqlServerSourceConfigIncludeObjectsSchemasTablesColumnsList(this, "columns", false);
  public get columns() {
    return this._columns;
  }
  public putColumns(value: GoogleDatastreamStreamSourceConfigSqlServerSourceConfigIncludeObjectsSchemasTablesColumns[] | cdktn.IResolvable) {
    this._columns.internalValue = value;
  }
  public resetColumns() {
    this._columns.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get columnsInput() {
    return this._columns.internalValue;
  }
}

export class GoogleDatastreamStreamSourceConfigSqlServerSourceConfigIncludeObjectsSchemasTablesList extends cdktn.ComplexList {
  public internalValue? : GoogleDatastreamStreamSourceConfigSqlServerSourceConfigIncludeObjectsSchemasTables[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): GoogleDatastreamStreamSourceConfigSqlServerSourceConfigIncludeObjectsSchemasTablesOutputReference {
    return new GoogleDatastreamStreamSourceConfigSqlServerSourceConfigIncludeObjectsSchemasTablesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleDatastreamStreamSourceConfigSqlServerSourceConfigIncludeObjectsSchemas {
  /**
  * Schema name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_datastream_stream#schema GoogleDatastreamStream#schema}
  */
  readonly schema: string;
  /**
  * tables block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_datastream_stream#tables GoogleDatastreamStream#tables}
  */
  readonly tables?: GoogleDatastreamStreamSourceConfigSqlServerSourceConfigIncludeObjectsSchemasTables[] | cdktn.IResolvable;
}

export function googleDatastreamStreamSourceConfigSqlServerSourceConfigIncludeObjectsSchemasToTerraform(struct?: GoogleDatastreamStreamSourceConfigSqlServerSourceConfigIncludeObjectsSchemas | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    schema: cdktn.stringToTerraform(struct!.schema),
    tables: cdktn.listMapper(googleDatastreamStreamSourceConfigSqlServerSourceConfigIncludeObjectsSchemasTablesToTerraform, true)(struct!.tables),
  }
}


export function googleDatastreamStreamSourceConfigSqlServerSourceConfigIncludeObjectsSchemasToHclTerraform(struct?: GoogleDatastreamStreamSourceConfigSqlServerSourceConfigIncludeObjectsSchemas | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    schema: {
      value: cdktn.stringToHclTerraform(struct!.schema),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tables: {
      value: cdktn.listMapperHcl(googleDatastreamStreamSourceConfigSqlServerSourceConfigIncludeObjectsSchemasTablesToHclTerraform, true)(struct!.tables),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDatastreamStreamSourceConfigSqlServerSourceConfigIncludeObjectsSchemasTablesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDatastreamStreamSourceConfigSqlServerSourceConfigIncludeObjectsSchemasOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): GoogleDatastreamStreamSourceConfigSqlServerSourceConfigIncludeObjectsSchemas | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._schema !== undefined) {
      hasAnyValues = true;
      internalValueResult.schema = this._schema;
    }
    if (this._tables?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tables = this._tables?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDatastreamStreamSourceConfigSqlServerSourceConfigIncludeObjectsSchemas | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._schema = undefined;
      this._tables.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._schema = value.schema;
      this._tables.internalValue = value.tables;
    }
  }

  // schema - computed: false, optional: false, required: true
  private _schema?: string; 
  public get schema() {
    return this.getStringAttribute('schema');
  }
  public set schema(value: string) {
    this._schema = value;
  }
  // Temporarily expose input value. Use with caution.
  public get schemaInput() {
    return this._schema;
  }

  // tables - computed: false, optional: true, required: false
  private _tables = new GoogleDatastreamStreamSourceConfigSqlServerSourceConfigIncludeObjectsSchemasTablesList(this, "tables", false);
  public get tables() {
    return this._tables;
  }
  public putTables(value: GoogleDatastreamStreamSourceConfigSqlServerSourceConfigIncludeObjectsSchemasTables[] | cdktn.IResolvable) {
    this._tables.internalValue = value;
  }
  public resetTables() {
    this._tables.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tablesInput() {
    return this._tables.internalValue;
  }
}

export class GoogleDatastreamStreamSourceConfigSqlServerSourceConfigIncludeObjectsSchemasList extends cdktn.ComplexList {
  public internalValue? : GoogleDatastreamStreamSourceConfigSqlServerSourceConfigIncludeObjectsSchemas[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): GoogleDatastreamStreamSourceConfigSqlServerSourceConfigIncludeObjectsSchemasOutputReference {
    return new GoogleDatastreamStreamSourceConfigSqlServerSourceConfigIncludeObjectsSchemasOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleDatastreamStreamSourceConfigSqlServerSourceConfigIncludeObjects {
  /**
  * schemas block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_datastream_stream#schemas GoogleDatastreamStream#schemas}
  */
  readonly schemas: GoogleDatastreamStreamSourceConfigSqlServerSourceConfigIncludeObjectsSchemas[] | cdktn.IResolvable;
}

export function googleDatastreamStreamSourceConfigSqlServerSourceConfigIncludeObjectsToTerraform(struct?: GoogleDatastreamStreamSourceConfigSqlServerSourceConfigIncludeObjectsOutputReference | GoogleDatastreamStreamSourceConfigSqlServerSourceConfigIncludeObjects): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    schemas: cdktn.listMapper(googleDatastreamStreamSourceConfigSqlServerSourceConfigIncludeObjectsSchemasToTerraform, true)(struct!.schemas),
  }
}


export function googleDatastreamStreamSourceConfigSqlServerSourceConfigIncludeObjectsToHclTerraform(struct?: GoogleDatastreamStreamSourceConfigSqlServerSourceConfigIncludeObjectsOutputReference | GoogleDatastreamStreamSourceConfigSqlServerSourceConfigIncludeObjects): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    schemas: {
      value: cdktn.listMapperHcl(googleDatastreamStreamSourceConfigSqlServerSourceConfigIncludeObjectsSchemasToHclTerraform, true)(struct!.schemas),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDatastreamStreamSourceConfigSqlServerSourceConfigIncludeObjectsSchemasList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDatastreamStreamSourceConfigSqlServerSourceConfigIncludeObjectsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDatastreamStreamSourceConfigSqlServerSourceConfigIncludeObjects | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._schemas?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.schemas = this._schemas?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDatastreamStreamSourceConfigSqlServerSourceConfigIncludeObjects | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._schemas.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._schemas.internalValue = value.schemas;
    }
  }

  // schemas - computed: false, optional: false, required: true
  private _schemas = new GoogleDatastreamStreamSourceConfigSqlServerSourceConfigIncludeObjectsSchemasList(this, "schemas", false);
  public get schemas() {
    return this._schemas;
  }
  public putSchemas(value: GoogleDatastreamStreamSourceConfigSqlServerSourceConfigIncludeObjectsSchemas[] | cdktn.IResolvable) {
    this._schemas.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get schemasInput() {
    return this._schemas.internalValue;
  }
}
export interface GoogleDatastreamStreamSourceConfigSqlServerSourceConfigTransactionLogs {
}

export function googleDatastreamStreamSourceConfigSqlServerSourceConfigTransactionLogsToTerraform(struct?: GoogleDatastreamStreamSourceConfigSqlServerSourceConfigTransactionLogsOutputReference | GoogleDatastreamStreamSourceConfigSqlServerSourceConfigTransactionLogs): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function googleDatastreamStreamSourceConfigSqlServerSourceConfigTransactionLogsToHclTerraform(struct?: GoogleDatastreamStreamSourceConfigSqlServerSourceConfigTransactionLogsOutputReference | GoogleDatastreamStreamSourceConfigSqlServerSourceConfigTransactionLogs): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GoogleDatastreamStreamSourceConfigSqlServerSourceConfigTransactionLogsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDatastreamStreamSourceConfigSqlServerSourceConfigTransactionLogs | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDatastreamStreamSourceConfigSqlServerSourceConfigTransactionLogs | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface GoogleDatastreamStreamSourceConfigSqlServerSourceConfig {
  /**
  * Max concurrent backfill tasks.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_datastream_stream#max_concurrent_backfill_tasks GoogleDatastreamStream#max_concurrent_backfill_tasks}
  */
  readonly maxConcurrentBackfillTasks?: number;
  /**
  * Max concurrent CDC tasks.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_datastream_stream#max_concurrent_cdc_tasks GoogleDatastreamStream#max_concurrent_cdc_tasks}
  */
  readonly maxConcurrentCdcTasks?: number;
  /**
  * change_tables block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_datastream_stream#change_tables GoogleDatastreamStream#change_tables}
  */
  readonly changeTables?: GoogleDatastreamStreamSourceConfigSqlServerSourceConfigChangeTables;
  /**
  * exclude_objects block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_datastream_stream#exclude_objects GoogleDatastreamStream#exclude_objects}
  */
  readonly excludeObjects?: GoogleDatastreamStreamSourceConfigSqlServerSourceConfigExcludeObjects;
  /**
  * include_objects block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_datastream_stream#include_objects GoogleDatastreamStream#include_objects}
  */
  readonly includeObjects?: GoogleDatastreamStreamSourceConfigSqlServerSourceConfigIncludeObjects;
  /**
  * transaction_logs block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_datastream_stream#transaction_logs GoogleDatastreamStream#transaction_logs}
  */
  readonly transactionLogs?: GoogleDatastreamStreamSourceConfigSqlServerSourceConfigTransactionLogs;
}

export function googleDatastreamStreamSourceConfigSqlServerSourceConfigToTerraform(struct?: GoogleDatastreamStreamSourceConfigSqlServerSourceConfigOutputReference | GoogleDatastreamStreamSourceConfigSqlServerSourceConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max_concurrent_backfill_tasks: cdktn.numberToTerraform(struct!.maxConcurrentBackfillTasks),
    max_concurrent_cdc_tasks: cdktn.numberToTerraform(struct!.maxConcurrentCdcTasks),
    change_tables: googleDatastreamStreamSourceConfigSqlServerSourceConfigChangeTablesToTerraform(struct!.changeTables),
    exclude_objects: googleDatastreamStreamSourceConfigSqlServerSourceConfigExcludeObjectsToTerraform(struct!.excludeObjects),
    include_objects: googleDatastreamStreamSourceConfigSqlServerSourceConfigIncludeObjectsToTerraform(struct!.includeObjects),
    transaction_logs: googleDatastreamStreamSourceConfigSqlServerSourceConfigTransactionLogsToTerraform(struct!.transactionLogs),
  }
}


export function googleDatastreamStreamSourceConfigSqlServerSourceConfigToHclTerraform(struct?: GoogleDatastreamStreamSourceConfigSqlServerSourceConfigOutputReference | GoogleDatastreamStreamSourceConfigSqlServerSourceConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    max_concurrent_backfill_tasks: {
      value: cdktn.numberToHclTerraform(struct!.maxConcurrentBackfillTasks),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_concurrent_cdc_tasks: {
      value: cdktn.numberToHclTerraform(struct!.maxConcurrentCdcTasks),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    change_tables: {
      value: googleDatastreamStreamSourceConfigSqlServerSourceConfigChangeTablesToHclTerraform(struct!.changeTables),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDatastreamStreamSourceConfigSqlServerSourceConfigChangeTablesList",
    },
    exclude_objects: {
      value: googleDatastreamStreamSourceConfigSqlServerSourceConfigExcludeObjectsToHclTerraform(struct!.excludeObjects),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDatastreamStreamSourceConfigSqlServerSourceConfigExcludeObjectsList",
    },
    include_objects: {
      value: googleDatastreamStreamSourceConfigSqlServerSourceConfigIncludeObjectsToHclTerraform(struct!.includeObjects),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDatastreamStreamSourceConfigSqlServerSourceConfigIncludeObjectsList",
    },
    transaction_logs: {
      value: googleDatastreamStreamSourceConfigSqlServerSourceConfigTransactionLogsToHclTerraform(struct!.transactionLogs),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDatastreamStreamSourceConfigSqlServerSourceConfigTransactionLogsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDatastreamStreamSourceConfigSqlServerSourceConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDatastreamStreamSourceConfigSqlServerSourceConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maxConcurrentBackfillTasks !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxConcurrentBackfillTasks = this._maxConcurrentBackfillTasks;
    }
    if (this._maxConcurrentCdcTasks !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxConcurrentCdcTasks = this._maxConcurrentCdcTasks;
    }
    if (this._changeTables?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.changeTables = this._changeTables?.internalValue;
    }
    if (this._excludeObjects?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.excludeObjects = this._excludeObjects?.internalValue;
    }
    if (this._includeObjects?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.includeObjects = this._includeObjects?.internalValue;
    }
    if (this._transactionLogs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.transactionLogs = this._transactionLogs?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDatastreamStreamSourceConfigSqlServerSourceConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._maxConcurrentBackfillTasks = undefined;
      this._maxConcurrentCdcTasks = undefined;
      this._changeTables.internalValue = undefined;
      this._excludeObjects.internalValue = undefined;
      this._includeObjects.internalValue = undefined;
      this._transactionLogs.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._maxConcurrentBackfillTasks = value.maxConcurrentBackfillTasks;
      this._maxConcurrentCdcTasks = value.maxConcurrentCdcTasks;
      this._changeTables.internalValue = value.changeTables;
      this._excludeObjects.internalValue = value.excludeObjects;
      this._includeObjects.internalValue = value.includeObjects;
      this._transactionLogs.internalValue = value.transactionLogs;
    }
  }

  // max_concurrent_backfill_tasks - computed: true, optional: true, required: false
  private _maxConcurrentBackfillTasks?: number; 
  public get maxConcurrentBackfillTasks() {
    return this.getNumberAttribute('max_concurrent_backfill_tasks');
  }
  public set maxConcurrentBackfillTasks(value: number) {
    this._maxConcurrentBackfillTasks = value;
  }
  public resetMaxConcurrentBackfillTasks() {
    this._maxConcurrentBackfillTasks = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxConcurrentBackfillTasksInput() {
    return this._maxConcurrentBackfillTasks;
  }

  // max_concurrent_cdc_tasks - computed: true, optional: true, required: false
  private _maxConcurrentCdcTasks?: number; 
  public get maxConcurrentCdcTasks() {
    return this.getNumberAttribute('max_concurrent_cdc_tasks');
  }
  public set maxConcurrentCdcTasks(value: number) {
    this._maxConcurrentCdcTasks = value;
  }
  public resetMaxConcurrentCdcTasks() {
    this._maxConcurrentCdcTasks = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxConcurrentCdcTasksInput() {
    return this._maxConcurrentCdcTasks;
  }

  // change_tables - computed: false, optional: true, required: false
  private _changeTables = new GoogleDatastreamStreamSourceConfigSqlServerSourceConfigChangeTablesOutputReference(this, "change_tables");
  public get changeTables() {
    return this._changeTables;
  }
  public putChangeTables(value: GoogleDatastreamStreamSourceConfigSqlServerSourceConfigChangeTables) {
    this._changeTables.internalValue = value;
  }
  public resetChangeTables() {
    this._changeTables.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get changeTablesInput() {
    return this._changeTables.internalValue;
  }

  // exclude_objects - computed: false, optional: true, required: false
  private _excludeObjects = new GoogleDatastreamStreamSourceConfigSqlServerSourceConfigExcludeObjectsOutputReference(this, "exclude_objects");
  public get excludeObjects() {
    return this._excludeObjects;
  }
  public putExcludeObjects(value: GoogleDatastreamStreamSourceConfigSqlServerSourceConfigExcludeObjects) {
    this._excludeObjects.internalValue = value;
  }
  public resetExcludeObjects() {
    this._excludeObjects.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludeObjectsInput() {
    return this._excludeObjects.internalValue;
  }

  // include_objects - computed: false, optional: true, required: false
  private _includeObjects = new GoogleDatastreamStreamSourceConfigSqlServerSourceConfigIncludeObjectsOutputReference(this, "include_objects");
  public get includeObjects() {
    return this._includeObjects;
  }
  public putIncludeObjects(value: GoogleDatastreamStreamSourceConfigSqlServerSourceConfigIncludeObjects) {
    this._includeObjects.internalValue = value;
  }
  public resetIncludeObjects() {
    this._includeObjects.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeObjectsInput() {
    return this._includeObjects.internalValue;
  }

  // transaction_logs - computed: false, optional: true, required: false
  private _transactionLogs = new GoogleDatastreamStreamSourceConfigSqlServerSourceConfigTransactionLogsOutputReference(this, "transaction_logs");
  public get transactionLogs() {
    return this._transactionLogs;
  }
  public putTransactionLogs(value: GoogleDatastreamStreamSourceConfigSqlServerSourceConfigTransactionLogs) {
    this._transactionLogs.internalValue = value;
  }
  public resetTransactionLogs() {
    this._transactionLogs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transactionLogsInput() {
    return this._transactionLogs.internalValue;
  }
}
export interface GoogleDatastreamStreamSourceConfig {
  /**
  * Source connection profile resource. Format: projects/{project}/locations/{location}/connectionProfiles/{name}
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_datastream_stream#source_connection_profile GoogleDatastreamStream#source_connection_profile}
  */
  readonly sourceConnectionProfile: string;
  /**
  * mysql_source_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_datastream_stream#mysql_source_config GoogleDatastreamStream#mysql_source_config}
  */
  readonly mysqlSourceConfig?: GoogleDatastreamStreamSourceConfigMysqlSourceConfig;
  /**
  * oracle_source_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_datastream_stream#oracle_source_config GoogleDatastreamStream#oracle_source_config}
  */
  readonly oracleSourceConfig?: GoogleDatastreamStreamSourceConfigOracleSourceConfig;
  /**
  * postgresql_source_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_datastream_stream#postgresql_source_config GoogleDatastreamStream#postgresql_source_config}
  */
  readonly postgresqlSourceConfig?: GoogleDatastreamStreamSourceConfigPostgresqlSourceConfig;
  /**
  * salesforce_source_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_datastream_stream#salesforce_source_config GoogleDatastreamStream#salesforce_source_config}
  */
  readonly salesforceSourceConfig?: GoogleDatastreamStreamSourceConfigSalesforceSourceConfig;
  /**
  * sql_server_source_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_datastream_stream#sql_server_source_config GoogleDatastreamStream#sql_server_source_config}
  */
  readonly sqlServerSourceConfig?: GoogleDatastreamStreamSourceConfigSqlServerSourceConfig;
}

export function googleDatastreamStreamSourceConfigToTerraform(struct?: GoogleDatastreamStreamSourceConfigOutputReference | GoogleDatastreamStreamSourceConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    source_connection_profile: cdktn.stringToTerraform(struct!.sourceConnectionProfile),
    mysql_source_config: googleDatastreamStreamSourceConfigMysqlSourceConfigToTerraform(struct!.mysqlSourceConfig),
    oracle_source_config: googleDatastreamStreamSourceConfigOracleSourceConfigToTerraform(struct!.oracleSourceConfig),
    postgresql_source_config: googleDatastreamStreamSourceConfigPostgresqlSourceConfigToTerraform(struct!.postgresqlSourceConfig),
    salesforce_source_config: googleDatastreamStreamSourceConfigSalesforceSourceConfigToTerraform(struct!.salesforceSourceConfig),
    sql_server_source_config: googleDatastreamStreamSourceConfigSqlServerSourceConfigToTerraform(struct!.sqlServerSourceConfig),
  }
}


export function googleDatastreamStreamSourceConfigToHclTerraform(struct?: GoogleDatastreamStreamSourceConfigOutputReference | GoogleDatastreamStreamSourceConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    source_connection_profile: {
      value: cdktn.stringToHclTerraform(struct!.sourceConnectionProfile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mysql_source_config: {
      value: googleDatastreamStreamSourceConfigMysqlSourceConfigToHclTerraform(struct!.mysqlSourceConfig),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDatastreamStreamSourceConfigMysqlSourceConfigList",
    },
    oracle_source_config: {
      value: googleDatastreamStreamSourceConfigOracleSourceConfigToHclTerraform(struct!.oracleSourceConfig),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDatastreamStreamSourceConfigOracleSourceConfigList",
    },
    postgresql_source_config: {
      value: googleDatastreamStreamSourceConfigPostgresqlSourceConfigToHclTerraform(struct!.postgresqlSourceConfig),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDatastreamStreamSourceConfigPostgresqlSourceConfigList",
    },
    salesforce_source_config: {
      value: googleDatastreamStreamSourceConfigSalesforceSourceConfigToHclTerraform(struct!.salesforceSourceConfig),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDatastreamStreamSourceConfigSalesforceSourceConfigList",
    },
    sql_server_source_config: {
      value: googleDatastreamStreamSourceConfigSqlServerSourceConfigToHclTerraform(struct!.sqlServerSourceConfig),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDatastreamStreamSourceConfigSqlServerSourceConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDatastreamStreamSourceConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDatastreamStreamSourceConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._sourceConnectionProfile !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceConnectionProfile = this._sourceConnectionProfile;
    }
    if (this._mysqlSourceConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.mysqlSourceConfig = this._mysqlSourceConfig?.internalValue;
    }
    if (this._oracleSourceConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.oracleSourceConfig = this._oracleSourceConfig?.internalValue;
    }
    if (this._postgresqlSourceConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.postgresqlSourceConfig = this._postgresqlSourceConfig?.internalValue;
    }
    if (this._salesforceSourceConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.salesforceSourceConfig = this._salesforceSourceConfig?.internalValue;
    }
    if (this._sqlServerSourceConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sqlServerSourceConfig = this._sqlServerSourceConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDatastreamStreamSourceConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._sourceConnectionProfile = undefined;
      this._mysqlSourceConfig.internalValue = undefined;
      this._oracleSourceConfig.internalValue = undefined;
      this._postgresqlSourceConfig.internalValue = undefined;
      this._salesforceSourceConfig.internalValue = undefined;
      this._sqlServerSourceConfig.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._sourceConnectionProfile = value.sourceConnectionProfile;
      this._mysqlSourceConfig.internalValue = value.mysqlSourceConfig;
      this._oracleSourceConfig.internalValue = value.oracleSourceConfig;
      this._postgresqlSourceConfig.internalValue = value.postgresqlSourceConfig;
      this._salesforceSourceConfig.internalValue = value.salesforceSourceConfig;
      this._sqlServerSourceConfig.internalValue = value.sqlServerSourceConfig;
    }
  }

  // source_connection_profile - computed: false, optional: false, required: true
  private _sourceConnectionProfile?: string; 
  public get sourceConnectionProfile() {
    return this.getStringAttribute('source_connection_profile');
  }
  public set sourceConnectionProfile(value: string) {
    this._sourceConnectionProfile = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceConnectionProfileInput() {
    return this._sourceConnectionProfile;
  }

  // mysql_source_config - computed: false, optional: true, required: false
  private _mysqlSourceConfig = new GoogleDatastreamStreamSourceConfigMysqlSourceConfigOutputReference(this, "mysql_source_config");
  public get mysqlSourceConfig() {
    return this._mysqlSourceConfig;
  }
  public putMysqlSourceConfig(value: GoogleDatastreamStreamSourceConfigMysqlSourceConfig) {
    this._mysqlSourceConfig.internalValue = value;
  }
  public resetMysqlSourceConfig() {
    this._mysqlSourceConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mysqlSourceConfigInput() {
    return this._mysqlSourceConfig.internalValue;
  }

  // oracle_source_config - computed: false, optional: true, required: false
  private _oracleSourceConfig = new GoogleDatastreamStreamSourceConfigOracleSourceConfigOutputReference(this, "oracle_source_config");
  public get oracleSourceConfig() {
    return this._oracleSourceConfig;
  }
  public putOracleSourceConfig(value: GoogleDatastreamStreamSourceConfigOracleSourceConfig) {
    this._oracleSourceConfig.internalValue = value;
  }
  public resetOracleSourceConfig() {
    this._oracleSourceConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oracleSourceConfigInput() {
    return this._oracleSourceConfig.internalValue;
  }

  // postgresql_source_config - computed: false, optional: true, required: false
  private _postgresqlSourceConfig = new GoogleDatastreamStreamSourceConfigPostgresqlSourceConfigOutputReference(this, "postgresql_source_config");
  public get postgresqlSourceConfig() {
    return this._postgresqlSourceConfig;
  }
  public putPostgresqlSourceConfig(value: GoogleDatastreamStreamSourceConfigPostgresqlSourceConfig) {
    this._postgresqlSourceConfig.internalValue = value;
  }
  public resetPostgresqlSourceConfig() {
    this._postgresqlSourceConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get postgresqlSourceConfigInput() {
    return this._postgresqlSourceConfig.internalValue;
  }

  // salesforce_source_config - computed: false, optional: true, required: false
  private _salesforceSourceConfig = new GoogleDatastreamStreamSourceConfigSalesforceSourceConfigOutputReference(this, "salesforce_source_config");
  public get salesforceSourceConfig() {
    return this._salesforceSourceConfig;
  }
  public putSalesforceSourceConfig(value: GoogleDatastreamStreamSourceConfigSalesforceSourceConfig) {
    this._salesforceSourceConfig.internalValue = value;
  }
  public resetSalesforceSourceConfig() {
    this._salesforceSourceConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get salesforceSourceConfigInput() {
    return this._salesforceSourceConfig.internalValue;
  }

  // sql_server_source_config - computed: false, optional: true, required: false
  private _sqlServerSourceConfig = new GoogleDatastreamStreamSourceConfigSqlServerSourceConfigOutputReference(this, "sql_server_source_config");
  public get sqlServerSourceConfig() {
    return this._sqlServerSourceConfig;
  }
  public putSqlServerSourceConfig(value: GoogleDatastreamStreamSourceConfigSqlServerSourceConfig) {
    this._sqlServerSourceConfig.internalValue = value;
  }
  public resetSqlServerSourceConfig() {
    this._sqlServerSourceConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sqlServerSourceConfigInput() {
    return this._sqlServerSourceConfig.internalValue;
  }
}
export interface GoogleDatastreamStreamTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_datastream_stream#create GoogleDatastreamStream#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_datastream_stream#delete GoogleDatastreamStream#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_datastream_stream#update GoogleDatastreamStream#update}
  */
  readonly update?: string;
}

export function googleDatastreamStreamTimeoutsToTerraform(struct?: GoogleDatastreamStreamTimeouts | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktn.stringToTerraform(struct!.create),
    delete: cdktn.stringToTerraform(struct!.delete),
    update: cdktn.stringToTerraform(struct!.update),
  }
}


export function googleDatastreamStreamTimeoutsToHclTerraform(struct?: GoogleDatastreamStreamTimeouts | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create: {
      value: cdktn.stringToHclTerraform(struct!.create),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    delete: {
      value: cdktn.stringToHclTerraform(struct!.delete),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    update: {
      value: cdktn.stringToHclTerraform(struct!.update),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDatastreamStreamTimeoutsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GoogleDatastreamStreamTimeouts | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDatastreamStreamTimeouts | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
      this._update = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
      this._delete = value.delete;
      this._update = value.update;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
  }

  // update - computed: false, optional: true, required: false
  private _update?: string; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_datastream_stream google_datastream_stream}
*/
export class GoogleDatastreamStream extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_datastream_stream";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a GoogleDatastreamStream resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the GoogleDatastreamStream to import
  * @param importFromId The id of the existing GoogleDatastreamStream that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_datastream_stream#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the GoogleDatastreamStream to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "google_datastream_stream", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_datastream_stream google_datastream_stream} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GoogleDatastreamStreamConfig
  */
  public constructor(scope: Construct, id: string, config: GoogleDatastreamStreamConfig) {
    super(scope, id, {
      terraformResourceType: 'google_datastream_stream',
      terraformGeneratorMetadata: {
        providerName: 'google-beta',
        providerVersion: '6.50.0',
        providerVersionConstraint: '~> 6.50.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._createWithoutValidation = config.createWithoutValidation;
    this._customerManagedEncryptionKey = config.customerManagedEncryptionKey;
    this._desiredState = config.desiredState;
    this._displayName = config.displayName;
    this._id = config.id;
    this._labels = config.labels;
    this._location = config.location;
    this._project = config.project;
    this._streamId = config.streamId;
    this._backfillAll.internalValue = config.backfillAll;
    this._backfillNone.internalValue = config.backfillNone;
    this._destinationConfig.internalValue = config.destinationConfig;
    this._sourceConfig.internalValue = config.sourceConfig;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // create_without_validation - computed: false, optional: true, required: false
  private _createWithoutValidation?: boolean | cdktn.IResolvable; 
  public get createWithoutValidation() {
    return this.getBooleanAttribute('create_without_validation');
  }
  public set createWithoutValidation(value: boolean | cdktn.IResolvable) {
    this._createWithoutValidation = value;
  }
  public resetCreateWithoutValidation() {
    this._createWithoutValidation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createWithoutValidationInput() {
    return this._createWithoutValidation;
  }

  // customer_managed_encryption_key - computed: false, optional: true, required: false
  private _customerManagedEncryptionKey?: string; 
  public get customerManagedEncryptionKey() {
    return this.getStringAttribute('customer_managed_encryption_key');
  }
  public set customerManagedEncryptionKey(value: string) {
    this._customerManagedEncryptionKey = value;
  }
  public resetCustomerManagedEncryptionKey() {
    this._customerManagedEncryptionKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customerManagedEncryptionKeyInput() {
    return this._customerManagedEncryptionKey;
  }

  // desired_state - computed: false, optional: true, required: false
  private _desiredState?: string; 
  public get desiredState() {
    return this.getStringAttribute('desired_state');
  }
  public set desiredState(value: string) {
    this._desiredState = value;
  }
  public resetDesiredState() {
    this._desiredState = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get desiredStateInput() {
    return this._desiredState;
  }

  // display_name - computed: false, optional: false, required: true
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName;
  }

  // effective_labels - computed: true, optional: false, required: false
  private _effectiveLabels = new cdktn.StringMap(this, "effective_labels");
  public get effectiveLabels() {
    return this._effectiveLabels;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // labels - computed: false, optional: true, required: false
  private _labels?: { [key: string]: string }; 
  public get labels() {
    return this.getStringMapAttribute('labels');
  }
  public set labels(value: { [key: string]: string }) {
    this._labels = value;
  }
  public resetLabels() {
    this._labels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelsInput() {
    return this._labels;
  }

  // location - computed: false, optional: false, required: true
  private _location?: string; 
  public get location() {
    return this.getStringAttribute('location');
  }
  public set location(value: string) {
    this._location = value;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // project - computed: true, optional: true, required: false
  private _project?: string; 
  public get project() {
    return this.getStringAttribute('project');
  }
  public set project(value: string) {
    this._project = value;
  }
  public resetProject() {
    this._project = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectInput() {
    return this._project;
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // stream_id - computed: false, optional: false, required: true
  private _streamId?: string; 
  public get streamId() {
    return this.getStringAttribute('stream_id');
  }
  public set streamId(value: string) {
    this._streamId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get streamIdInput() {
    return this._streamId;
  }

  // terraform_labels - computed: true, optional: false, required: false
  private _terraformLabels = new cdktn.StringMap(this, "terraform_labels");
  public get terraformLabels() {
    return this._terraformLabels;
  }

  // backfill_all - computed: false, optional: true, required: false
  private _backfillAll = new GoogleDatastreamStreamBackfillAllOutputReference(this, "backfill_all");
  public get backfillAll() {
    return this._backfillAll;
  }
  public putBackfillAll(value: GoogleDatastreamStreamBackfillAll) {
    this._backfillAll.internalValue = value;
  }
  public resetBackfillAll() {
    this._backfillAll.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backfillAllInput() {
    return this._backfillAll.internalValue;
  }

  // backfill_none - computed: false, optional: true, required: false
  private _backfillNone = new GoogleDatastreamStreamBackfillNoneOutputReference(this, "backfill_none");
  public get backfillNone() {
    return this._backfillNone;
  }
  public putBackfillNone(value: GoogleDatastreamStreamBackfillNone) {
    this._backfillNone.internalValue = value;
  }
  public resetBackfillNone() {
    this._backfillNone.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backfillNoneInput() {
    return this._backfillNone.internalValue;
  }

  // destination_config - computed: false, optional: false, required: true
  private _destinationConfig = new GoogleDatastreamStreamDestinationConfigOutputReference(this, "destination_config");
  public get destinationConfig() {
    return this._destinationConfig;
  }
  public putDestinationConfig(value: GoogleDatastreamStreamDestinationConfig) {
    this._destinationConfig.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationConfigInput() {
    return this._destinationConfig.internalValue;
  }

  // source_config - computed: false, optional: false, required: true
  private _sourceConfig = new GoogleDatastreamStreamSourceConfigOutputReference(this, "source_config");
  public get sourceConfig() {
    return this._sourceConfig;
  }
  public putSourceConfig(value: GoogleDatastreamStreamSourceConfig) {
    this._sourceConfig.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceConfigInput() {
    return this._sourceConfig.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new GoogleDatastreamStreamTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: GoogleDatastreamStreamTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      create_without_validation: cdktn.booleanToTerraform(this._createWithoutValidation),
      customer_managed_encryption_key: cdktn.stringToTerraform(this._customerManagedEncryptionKey),
      desired_state: cdktn.stringToTerraform(this._desiredState),
      display_name: cdktn.stringToTerraform(this._displayName),
      id: cdktn.stringToTerraform(this._id),
      labels: cdktn.hashMapper(cdktn.stringToTerraform)(this._labels),
      location: cdktn.stringToTerraform(this._location),
      project: cdktn.stringToTerraform(this._project),
      stream_id: cdktn.stringToTerraform(this._streamId),
      backfill_all: googleDatastreamStreamBackfillAllToTerraform(this._backfillAll.internalValue),
      backfill_none: googleDatastreamStreamBackfillNoneToTerraform(this._backfillNone.internalValue),
      destination_config: googleDatastreamStreamDestinationConfigToTerraform(this._destinationConfig.internalValue),
      source_config: googleDatastreamStreamSourceConfigToTerraform(this._sourceConfig.internalValue),
      timeouts: googleDatastreamStreamTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      create_without_validation: {
        value: cdktn.booleanToHclTerraform(this._createWithoutValidation),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      customer_managed_encryption_key: {
        value: cdktn.stringToHclTerraform(this._customerManagedEncryptionKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      desired_state: {
        value: cdktn.stringToHclTerraform(this._desiredState),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      display_name: {
        value: cdktn.stringToHclTerraform(this._displayName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktn.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      labels: {
        value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(this._labels),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      location: {
        value: cdktn.stringToHclTerraform(this._location),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      project: {
        value: cdktn.stringToHclTerraform(this._project),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      stream_id: {
        value: cdktn.stringToHclTerraform(this._streamId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      backfill_all: {
        value: googleDatastreamStreamBackfillAllToHclTerraform(this._backfillAll.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleDatastreamStreamBackfillAllList",
      },
      backfill_none: {
        value: googleDatastreamStreamBackfillNoneToHclTerraform(this._backfillNone.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleDatastreamStreamBackfillNoneList",
      },
      destination_config: {
        value: googleDatastreamStreamDestinationConfigToHclTerraform(this._destinationConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleDatastreamStreamDestinationConfigList",
      },
      source_config: {
        value: googleDatastreamStreamSourceConfigToHclTerraform(this._sourceConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleDatastreamStreamSourceConfigList",
      },
      timeouts: {
        value: googleDatastreamStreamTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "GoogleDatastreamStreamTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
