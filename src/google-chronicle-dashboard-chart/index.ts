/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_chronicle_dashboard_chart
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface GoogleChronicleDashboardChartConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_chronicle_dashboard_chart#id GoogleChronicleDashboardChart#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The ID of the Chronicle instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_chronicle_dashboard_chart#instance GoogleChronicleDashboardChart#instance}
  */
  readonly instance: string;
  /**
  * The location of the Chronicle instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_chronicle_dashboard_chart#location GoogleChronicleDashboardChart#location}
  */
  readonly location: string;
  /**
  * The parent NativeDashboard resource name, formatted as projects/{project}/locations/{location}/instances/{instance}/nativeDashboards/{dashboard_id}
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_chronicle_dashboard_chart#native_dashboard GoogleChronicleDashboardChart#native_dashboard}
  */
  readonly nativeDashboard?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_chronicle_dashboard_chart#project GoogleChronicleDashboardChart#project}
  */
  readonly project?: string;
  /**
  * chart_layout block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_chronicle_dashboard_chart#chart_layout GoogleChronicleDashboardChart#chart_layout}
  */
  readonly chartLayout?: GoogleChronicleDashboardChartChartLayout;
  /**
  * dashboard_chart block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_chronicle_dashboard_chart#dashboard_chart GoogleChronicleDashboardChart#dashboard_chart}
  */
  readonly dashboardChart: GoogleChronicleDashboardChartDashboardChart;
  /**
  * dashboard_query block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_chronicle_dashboard_chart#dashboard_query GoogleChronicleDashboardChart#dashboard_query}
  */
  readonly dashboardQuery?: GoogleChronicleDashboardChartDashboardQuery;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_chronicle_dashboard_chart#timeouts GoogleChronicleDashboardChart#timeouts}
  */
  readonly timeouts?: GoogleChronicleDashboardChartTimeouts;
}
export interface GoogleChronicleDashboardChartChartLayout {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_chronicle_dashboard_chart#span_x GoogleChronicleDashboardChart#span_x}
  */
  readonly spanX: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_chronicle_dashboard_chart#span_y GoogleChronicleDashboardChart#span_y}
  */
  readonly spanY: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_chronicle_dashboard_chart#start_x GoogleChronicleDashboardChart#start_x}
  */
  readonly startX?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_chronicle_dashboard_chart#start_y GoogleChronicleDashboardChart#start_y}
  */
  readonly startY?: number;
}

export function googleChronicleDashboardChartChartLayoutToTerraform(struct?: GoogleChronicleDashboardChartChartLayoutOutputReference | GoogleChronicleDashboardChartChartLayout): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    span_x: cdktn.numberToTerraform(struct!.spanX),
    span_y: cdktn.numberToTerraform(struct!.spanY),
    start_x: cdktn.numberToTerraform(struct!.startX),
    start_y: cdktn.numberToTerraform(struct!.startY),
  }
}


export function googleChronicleDashboardChartChartLayoutToHclTerraform(struct?: GoogleChronicleDashboardChartChartLayoutOutputReference | GoogleChronicleDashboardChartChartLayout): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    span_x: {
      value: cdktn.numberToHclTerraform(struct!.spanX),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    span_y: {
      value: cdktn.numberToHclTerraform(struct!.spanY),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    start_x: {
      value: cdktn.numberToHclTerraform(struct!.startX),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    start_y: {
      value: cdktn.numberToHclTerraform(struct!.startY),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleChronicleDashboardChartChartLayoutOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleChronicleDashboardChartChartLayout | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._spanX !== undefined) {
      hasAnyValues = true;
      internalValueResult.spanX = this._spanX;
    }
    if (this._spanY !== undefined) {
      hasAnyValues = true;
      internalValueResult.spanY = this._spanY;
    }
    if (this._startX !== undefined) {
      hasAnyValues = true;
      internalValueResult.startX = this._startX;
    }
    if (this._startY !== undefined) {
      hasAnyValues = true;
      internalValueResult.startY = this._startY;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleChronicleDashboardChartChartLayout | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._spanX = undefined;
      this._spanY = undefined;
      this._startX = undefined;
      this._startY = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._spanX = value.spanX;
      this._spanY = value.spanY;
      this._startX = value.startX;
      this._startY = value.startY;
    }
  }

  // span_x - computed: false, optional: false, required: true
  private _spanX?: number; 
  public get spanX() {
    return this.getNumberAttribute('span_x');
  }
  public set spanX(value: number) {
    this._spanX = value;
  }
  // Temporarily expose input value. Use with caution.
  public get spanXInput() {
    return this._spanX;
  }

  // span_y - computed: false, optional: false, required: true
  private _spanY?: number; 
  public get spanY() {
    return this.getNumberAttribute('span_y');
  }
  public set spanY(value: number) {
    this._spanY = value;
  }
  // Temporarily expose input value. Use with caution.
  public get spanYInput() {
    return this._spanY;
  }

  // start_x - computed: false, optional: true, required: false
  private _startX?: number; 
  public get startX() {
    return this.getNumberAttribute('start_x');
  }
  public set startX(value: number) {
    this._startX = value;
  }
  public resetStartX() {
    this._startX = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startXInput() {
    return this._startX;
  }

  // start_y - computed: false, optional: true, required: false
  private _startY?: number; 
  public get startY() {
    return this.getNumberAttribute('start_y');
  }
  public set startY(value: number) {
    this._startY = value;
  }
  public resetStartY() {
    this._startY = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startYInput() {
    return this._startY;
  }
}
export interface GoogleChronicleDashboardChartDashboardChartChartDatasource {
  /**
  * Name(s) of the datasource used in the chart. Available values include:
  * 'UDM', 'ENTITY', 'INGESTION_METRICS', 'RULE_DETECTIONS', 'RULESETS',
  * 'GLOBAL', 'IOC_MATCHES', 'RULES', 'SOAR_CASES', 'SOAR_PLAYBOOKS',
  * 'SOAR_CASE_HISTORY', 'DATA_TABLE', 'INVESTIGATION', 'INVESTIGATION_FEEDBACK'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_chronicle_dashboard_chart#data_sources GoogleChronicleDashboardChart#data_sources}
  */
  readonly dataSources?: string[];
}

export function googleChronicleDashboardChartDashboardChartChartDatasourceToTerraform(struct?: GoogleChronicleDashboardChartDashboardChartChartDatasourceOutputReference | GoogleChronicleDashboardChartDashboardChartChartDatasource): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    data_sources: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.dataSources),
  }
}


export function googleChronicleDashboardChartDashboardChartChartDatasourceToHclTerraform(struct?: GoogleChronicleDashboardChartDashboardChartChartDatasourceOutputReference | GoogleChronicleDashboardChartDashboardChartChartDatasource): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    data_sources: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.dataSources),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleChronicleDashboardChartDashboardChartChartDatasourceOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleChronicleDashboardChartDashboardChartChartDatasource | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dataSources !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataSources = this._dataSources;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleChronicleDashboardChartDashboardChartChartDatasource | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dataSources = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._dataSources = value.dataSources;
    }
  }

  // dashboard_query - computed: true, optional: false, required: false
  public get dashboardQuery() {
    return this.getStringAttribute('dashboard_query');
  }

  // data_sources - computed: false, optional: true, required: false
  private _dataSources?: string[]; 
  public get dataSources() {
    return this.getListAttribute('data_sources');
  }
  public set dataSources(value: string[]) {
    this._dataSources = value;
  }
  public resetDataSources() {
    this._dataSources = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataSourcesInput() {
    return this._dataSources;
  }
}
export interface GoogleChronicleDashboardChartDashboardChartDrillDownConfigLeftDrillDownsCustomSettingsExternalLink {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_chronicle_dashboard_chart#description GoogleChronicleDashboardChart#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_chronicle_dashboard_chart#link GoogleChronicleDashboardChart#link}
  */
  readonly link: string;
}

export function googleChronicleDashboardChartDashboardChartDrillDownConfigLeftDrillDownsCustomSettingsExternalLinkToTerraform(struct?: GoogleChronicleDashboardChartDashboardChartDrillDownConfigLeftDrillDownsCustomSettingsExternalLinkOutputReference | GoogleChronicleDashboardChartDashboardChartDrillDownConfigLeftDrillDownsCustomSettingsExternalLink): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktn.stringToTerraform(struct!.description),
    link: cdktn.stringToTerraform(struct!.link),
  }
}


export function googleChronicleDashboardChartDashboardChartDrillDownConfigLeftDrillDownsCustomSettingsExternalLinkToHclTerraform(struct?: GoogleChronicleDashboardChartDashboardChartDrillDownConfigLeftDrillDownsCustomSettingsExternalLinkOutputReference | GoogleChronicleDashboardChartDashboardChartDrillDownConfigLeftDrillDownsCustomSettingsExternalLink): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    description: {
      value: cdktn.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    link: {
      value: cdktn.stringToHclTerraform(struct!.link),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleChronicleDashboardChartDashboardChartDrillDownConfigLeftDrillDownsCustomSettingsExternalLinkOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleChronicleDashboardChartDashboardChartDrillDownConfigLeftDrillDownsCustomSettingsExternalLink | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._link !== undefined) {
      hasAnyValues = true;
      internalValueResult.link = this._link;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleChronicleDashboardChartDashboardChartDrillDownConfigLeftDrillDownsCustomSettingsExternalLink | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._description = undefined;
      this._link = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._description = value.description;
      this._link = value.link;
    }
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // link - computed: false, optional: false, required: true
  private _link?: string; 
  public get link() {
    return this.getStringAttribute('link');
  }
  public set link(value: string) {
    this._link = value;
  }
  // Temporarily expose input value. Use with caution.
  public get linkInput() {
    return this._link;
  }
}
export interface GoogleChronicleDashboardChartDashboardChartDrillDownConfigLeftDrillDownsCustomSettingsFilterDashboardFiltersFilterOperatorAndValues {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_chronicle_dashboard_chart#field_values GoogleChronicleDashboardChart#field_values}
  */
  readonly fieldValues?: string[];
  /**
  *  Possible values: ["EQUAL", "NOT_EQUAL", "IN", "GREATER_THAN", "GREATER_THAN_OR_EQUAL_TO", "LESS_THAN", "LESS_THAN_OR_EQUAL_TO", "BETWEEN", "PAST", "IS_NULL", "IS_NOT_NULL", "STARTS_WITH", "ENDS_WITH", "DOES_NOT_STARTS_WITH", "DOES_NOT_ENDS_WITH", "NOT_IN", "CONTAINS", "DOES_NOT_CONTAIN"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_chronicle_dashboard_chart#filter_operator GoogleChronicleDashboardChart#filter_operator}
  */
  readonly filterOperator?: string;
}

export function googleChronicleDashboardChartDashboardChartDrillDownConfigLeftDrillDownsCustomSettingsFilterDashboardFiltersFilterOperatorAndValuesToTerraform(struct?: GoogleChronicleDashboardChartDashboardChartDrillDownConfigLeftDrillDownsCustomSettingsFilterDashboardFiltersFilterOperatorAndValues | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    field_values: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.fieldValues),
    filter_operator: cdktn.stringToTerraform(struct!.filterOperator),
  }
}


export function googleChronicleDashboardChartDashboardChartDrillDownConfigLeftDrillDownsCustomSettingsFilterDashboardFiltersFilterOperatorAndValuesToHclTerraform(struct?: GoogleChronicleDashboardChartDashboardChartDrillDownConfigLeftDrillDownsCustomSettingsFilterDashboardFiltersFilterOperatorAndValues | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    field_values: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.fieldValues),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    filter_operator: {
      value: cdktn.stringToHclTerraform(struct!.filterOperator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleChronicleDashboardChartDashboardChartDrillDownConfigLeftDrillDownsCustomSettingsFilterDashboardFiltersFilterOperatorAndValuesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): GoogleChronicleDashboardChartDashboardChartDrillDownConfigLeftDrillDownsCustomSettingsFilterDashboardFiltersFilterOperatorAndValues | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fieldValues !== undefined) {
      hasAnyValues = true;
      internalValueResult.fieldValues = this._fieldValues;
    }
    if (this._filterOperator !== undefined) {
      hasAnyValues = true;
      internalValueResult.filterOperator = this._filterOperator;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleChronicleDashboardChartDashboardChartDrillDownConfigLeftDrillDownsCustomSettingsFilterDashboardFiltersFilterOperatorAndValues | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._fieldValues = undefined;
      this._filterOperator = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._fieldValues = value.fieldValues;
      this._filterOperator = value.filterOperator;
    }
  }

  // field_values - computed: false, optional: true, required: false
  private _fieldValues?: string[]; 
  public get fieldValues() {
    return this.getListAttribute('field_values');
  }
  public set fieldValues(value: string[]) {
    this._fieldValues = value;
  }
  public resetFieldValues() {
    this._fieldValues = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldValuesInput() {
    return this._fieldValues;
  }

  // filter_operator - computed: false, optional: true, required: false
  private _filterOperator?: string; 
  public get filterOperator() {
    return this.getStringAttribute('filter_operator');
  }
  public set filterOperator(value: string) {
    this._filterOperator = value;
  }
  public resetFilterOperator() {
    this._filterOperator = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterOperatorInput() {
    return this._filterOperator;
  }
}

export class GoogleChronicleDashboardChartDashboardChartDrillDownConfigLeftDrillDownsCustomSettingsFilterDashboardFiltersFilterOperatorAndValuesList extends cdktn.ComplexList {
  public internalValue? : GoogleChronicleDashboardChartDashboardChartDrillDownConfigLeftDrillDownsCustomSettingsFilterDashboardFiltersFilterOperatorAndValues[] | cdktn.IResolvable

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
  public get(index: number): GoogleChronicleDashboardChartDashboardChartDrillDownConfigLeftDrillDownsCustomSettingsFilterDashboardFiltersFilterOperatorAndValuesOutputReference {
    return new GoogleChronicleDashboardChartDashboardChartDrillDownConfigLeftDrillDownsCustomSettingsFilterDashboardFiltersFilterOperatorAndValuesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleChronicleDashboardChartDashboardChartDrillDownConfigLeftDrillDownsCustomSettingsFilterDashboardFilters {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_chronicle_dashboard_chart#dashboard_filter_id GoogleChronicleDashboardChart#dashboard_filter_id}
  */
  readonly dashboardFilterId: string;
  /**
  * filter_operator_and_values block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_chronicle_dashboard_chart#filter_operator_and_values GoogleChronicleDashboardChart#filter_operator_and_values}
  */
  readonly filterOperatorAndValues: GoogleChronicleDashboardChartDashboardChartDrillDownConfigLeftDrillDownsCustomSettingsFilterDashboardFiltersFilterOperatorAndValues[] | cdktn.IResolvable;
}

export function googleChronicleDashboardChartDashboardChartDrillDownConfigLeftDrillDownsCustomSettingsFilterDashboardFiltersToTerraform(struct?: GoogleChronicleDashboardChartDashboardChartDrillDownConfigLeftDrillDownsCustomSettingsFilterDashboardFilters | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dashboard_filter_id: cdktn.stringToTerraform(struct!.dashboardFilterId),
    filter_operator_and_values: cdktn.listMapper(googleChronicleDashboardChartDashboardChartDrillDownConfigLeftDrillDownsCustomSettingsFilterDashboardFiltersFilterOperatorAndValuesToTerraform, true)(struct!.filterOperatorAndValues),
  }
}


export function googleChronicleDashboardChartDashboardChartDrillDownConfigLeftDrillDownsCustomSettingsFilterDashboardFiltersToHclTerraform(struct?: GoogleChronicleDashboardChartDashboardChartDrillDownConfigLeftDrillDownsCustomSettingsFilterDashboardFilters | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dashboard_filter_id: {
      value: cdktn.stringToHclTerraform(struct!.dashboardFilterId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    filter_operator_and_values: {
      value: cdktn.listMapperHcl(googleChronicleDashboardChartDashboardChartDrillDownConfigLeftDrillDownsCustomSettingsFilterDashboardFiltersFilterOperatorAndValuesToHclTerraform, true)(struct!.filterOperatorAndValues),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleChronicleDashboardChartDashboardChartDrillDownConfigLeftDrillDownsCustomSettingsFilterDashboardFiltersFilterOperatorAndValuesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleChronicleDashboardChartDashboardChartDrillDownConfigLeftDrillDownsCustomSettingsFilterDashboardFiltersOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): GoogleChronicleDashboardChartDashboardChartDrillDownConfigLeftDrillDownsCustomSettingsFilterDashboardFilters | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dashboardFilterId !== undefined) {
      hasAnyValues = true;
      internalValueResult.dashboardFilterId = this._dashboardFilterId;
    }
    if (this._filterOperatorAndValues?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.filterOperatorAndValues = this._filterOperatorAndValues?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleChronicleDashboardChartDashboardChartDrillDownConfigLeftDrillDownsCustomSettingsFilterDashboardFilters | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dashboardFilterId = undefined;
      this._filterOperatorAndValues.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dashboardFilterId = value.dashboardFilterId;
      this._filterOperatorAndValues.internalValue = value.filterOperatorAndValues;
    }
  }

  // dashboard_filter_id - computed: false, optional: false, required: true
  private _dashboardFilterId?: string; 
  public get dashboardFilterId() {
    return this.getStringAttribute('dashboard_filter_id');
  }
  public set dashboardFilterId(value: string) {
    this._dashboardFilterId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dashboardFilterIdInput() {
    return this._dashboardFilterId;
  }

  // filter_operator_and_values - computed: false, optional: false, required: true
  private _filterOperatorAndValues = new GoogleChronicleDashboardChartDashboardChartDrillDownConfigLeftDrillDownsCustomSettingsFilterDashboardFiltersFilterOperatorAndValuesList(this, "filter_operator_and_values", false);
  public get filterOperatorAndValues() {
    return this._filterOperatorAndValues;
  }
  public putFilterOperatorAndValues(value: GoogleChronicleDashboardChartDashboardChartDrillDownConfigLeftDrillDownsCustomSettingsFilterDashboardFiltersFilterOperatorAndValues[] | cdktn.IResolvable) {
    this._filterOperatorAndValues.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get filterOperatorAndValuesInput() {
    return this._filterOperatorAndValues.internalValue;
  }
}

export class GoogleChronicleDashboardChartDashboardChartDrillDownConfigLeftDrillDownsCustomSettingsFilterDashboardFiltersList extends cdktn.ComplexList {
  public internalValue? : GoogleChronicleDashboardChartDashboardChartDrillDownConfigLeftDrillDownsCustomSettingsFilterDashboardFilters[] | cdktn.IResolvable

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
  public get(index: number): GoogleChronicleDashboardChartDashboardChartDrillDownConfigLeftDrillDownsCustomSettingsFilterDashboardFiltersOutputReference {
    return new GoogleChronicleDashboardChartDashboardChartDrillDownConfigLeftDrillDownsCustomSettingsFilterDashboardFiltersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleChronicleDashboardChartDashboardChartDrillDownConfigLeftDrillDownsCustomSettingsFilter {
  /**
  * dashboard_filters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_chronicle_dashboard_chart#dashboard_filters GoogleChronicleDashboardChart#dashboard_filters}
  */
  readonly dashboardFilters: GoogleChronicleDashboardChartDashboardChartDrillDownConfigLeftDrillDownsCustomSettingsFilterDashboardFilters[] | cdktn.IResolvable;
}

export function googleChronicleDashboardChartDashboardChartDrillDownConfigLeftDrillDownsCustomSettingsFilterToTerraform(struct?: GoogleChronicleDashboardChartDashboardChartDrillDownConfigLeftDrillDownsCustomSettingsFilterOutputReference | GoogleChronicleDashboardChartDashboardChartDrillDownConfigLeftDrillDownsCustomSettingsFilter): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dashboard_filters: cdktn.listMapper(googleChronicleDashboardChartDashboardChartDrillDownConfigLeftDrillDownsCustomSettingsFilterDashboardFiltersToTerraform, true)(struct!.dashboardFilters),
  }
}


export function googleChronicleDashboardChartDashboardChartDrillDownConfigLeftDrillDownsCustomSettingsFilterToHclTerraform(struct?: GoogleChronicleDashboardChartDashboardChartDrillDownConfigLeftDrillDownsCustomSettingsFilterOutputReference | GoogleChronicleDashboardChartDashboardChartDrillDownConfigLeftDrillDownsCustomSettingsFilter): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dashboard_filters: {
      value: cdktn.listMapperHcl(googleChronicleDashboardChartDashboardChartDrillDownConfigLeftDrillDownsCustomSettingsFilterDashboardFiltersToHclTerraform, true)(struct!.dashboardFilters),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleChronicleDashboardChartDashboardChartDrillDownConfigLeftDrillDownsCustomSettingsFilterDashboardFiltersList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleChronicleDashboardChartDashboardChartDrillDownConfigLeftDrillDownsCustomSettingsFilterOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleChronicleDashboardChartDashboardChartDrillDownConfigLeftDrillDownsCustomSettingsFilter | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dashboardFilters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dashboardFilters = this._dashboardFilters?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleChronicleDashboardChartDashboardChartDrillDownConfigLeftDrillDownsCustomSettingsFilter | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dashboardFilters.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._dashboardFilters.internalValue = value.dashboardFilters;
    }
  }

  // dashboard_filters - computed: false, optional: false, required: true
  private _dashboardFilters = new GoogleChronicleDashboardChartDashboardChartDrillDownConfigLeftDrillDownsCustomSettingsFilterDashboardFiltersList(this, "dashboard_filters", false);
  public get dashboardFilters() {
    return this._dashboardFilters;
  }
  public putDashboardFilters(value: GoogleChronicleDashboardChartDashboardChartDrillDownConfigLeftDrillDownsCustomSettingsFilterDashboardFilters[] | cdktn.IResolvable) {
    this._dashboardFilters.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dashboardFiltersInput() {
    return this._dashboardFilters.internalValue;
  }
}
export interface GoogleChronicleDashboardChartDashboardChartDrillDownConfigLeftDrillDownsCustomSettingsQuery {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_chronicle_dashboard_chart#query GoogleChronicleDashboardChart#query}
  */
  readonly query: string;
}

export function googleChronicleDashboardChartDashboardChartDrillDownConfigLeftDrillDownsCustomSettingsQueryToTerraform(struct?: GoogleChronicleDashboardChartDashboardChartDrillDownConfigLeftDrillDownsCustomSettingsQueryOutputReference | GoogleChronicleDashboardChartDashboardChartDrillDownConfigLeftDrillDownsCustomSettingsQuery): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    query: cdktn.stringToTerraform(struct!.query),
  }
}


export function googleChronicleDashboardChartDashboardChartDrillDownConfigLeftDrillDownsCustomSettingsQueryToHclTerraform(struct?: GoogleChronicleDashboardChartDashboardChartDrillDownConfigLeftDrillDownsCustomSettingsQueryOutputReference | GoogleChronicleDashboardChartDashboardChartDrillDownConfigLeftDrillDownsCustomSettingsQuery): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    query: {
      value: cdktn.stringToHclTerraform(struct!.query),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleChronicleDashboardChartDashboardChartDrillDownConfigLeftDrillDownsCustomSettingsQueryOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleChronicleDashboardChartDashboardChartDrillDownConfigLeftDrillDownsCustomSettingsQuery | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._query !== undefined) {
      hasAnyValues = true;
      internalValueResult.query = this._query;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleChronicleDashboardChartDashboardChartDrillDownConfigLeftDrillDownsCustomSettingsQuery | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._query = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._query = value.query;
    }
  }

  // query - computed: false, optional: false, required: true
  private _query?: string; 
  public get query() {
    return this.getStringAttribute('query');
  }
  public set query(value: string) {
    this._query = value;
  }
  // Temporarily expose input value. Use with caution.
  public get queryInput() {
    return this._query;
  }
}
export interface GoogleChronicleDashboardChartDashboardChartDrillDownConfigLeftDrillDownsCustomSettings {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_chronicle_dashboard_chart#left_click_column GoogleChronicleDashboardChart#left_click_column}
  */
  readonly leftClickColumn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_chronicle_dashboard_chart#new_tab GoogleChronicleDashboardChart#new_tab}
  */
  readonly newTab: boolean | cdktn.IResolvable;
  /**
  * external_link block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_chronicle_dashboard_chart#external_link GoogleChronicleDashboardChart#external_link}
  */
  readonly externalLink?: GoogleChronicleDashboardChartDashboardChartDrillDownConfigLeftDrillDownsCustomSettingsExternalLink;
  /**
  * filter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_chronicle_dashboard_chart#filter GoogleChronicleDashboardChart#filter}
  */
  readonly filter?: GoogleChronicleDashboardChartDashboardChartDrillDownConfigLeftDrillDownsCustomSettingsFilter;
  /**
  * query block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_chronicle_dashboard_chart#query GoogleChronicleDashboardChart#query}
  */
  readonly query?: GoogleChronicleDashboardChartDashboardChartDrillDownConfigLeftDrillDownsCustomSettingsQuery;
}

export function googleChronicleDashboardChartDashboardChartDrillDownConfigLeftDrillDownsCustomSettingsToTerraform(struct?: GoogleChronicleDashboardChartDashboardChartDrillDownConfigLeftDrillDownsCustomSettingsOutputReference | GoogleChronicleDashboardChartDashboardChartDrillDownConfigLeftDrillDownsCustomSettings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    left_click_column: cdktn.stringToTerraform(struct!.leftClickColumn),
    new_tab: cdktn.booleanToTerraform(struct!.newTab),
    external_link: googleChronicleDashboardChartDashboardChartDrillDownConfigLeftDrillDownsCustomSettingsExternalLinkToTerraform(struct!.externalLink),
    filter: googleChronicleDashboardChartDashboardChartDrillDownConfigLeftDrillDownsCustomSettingsFilterToTerraform(struct!.filter),
    query: googleChronicleDashboardChartDashboardChartDrillDownConfigLeftDrillDownsCustomSettingsQueryToTerraform(struct!.query),
  }
}


export function googleChronicleDashboardChartDashboardChartDrillDownConfigLeftDrillDownsCustomSettingsToHclTerraform(struct?: GoogleChronicleDashboardChartDashboardChartDrillDownConfigLeftDrillDownsCustomSettingsOutputReference | GoogleChronicleDashboardChartDashboardChartDrillDownConfigLeftDrillDownsCustomSettings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    left_click_column: {
      value: cdktn.stringToHclTerraform(struct!.leftClickColumn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    new_tab: {
      value: cdktn.booleanToHclTerraform(struct!.newTab),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    external_link: {
      value: googleChronicleDashboardChartDashboardChartDrillDownConfigLeftDrillDownsCustomSettingsExternalLinkToHclTerraform(struct!.externalLink),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleChronicleDashboardChartDashboardChartDrillDownConfigLeftDrillDownsCustomSettingsExternalLinkList",
    },
    filter: {
      value: googleChronicleDashboardChartDashboardChartDrillDownConfigLeftDrillDownsCustomSettingsFilterToHclTerraform(struct!.filter),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleChronicleDashboardChartDashboardChartDrillDownConfigLeftDrillDownsCustomSettingsFilterList",
    },
    query: {
      value: googleChronicleDashboardChartDashboardChartDrillDownConfigLeftDrillDownsCustomSettingsQueryToHclTerraform(struct!.query),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleChronicleDashboardChartDashboardChartDrillDownConfigLeftDrillDownsCustomSettingsQueryList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleChronicleDashboardChartDashboardChartDrillDownConfigLeftDrillDownsCustomSettingsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleChronicleDashboardChartDashboardChartDrillDownConfigLeftDrillDownsCustomSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._leftClickColumn !== undefined) {
      hasAnyValues = true;
      internalValueResult.leftClickColumn = this._leftClickColumn;
    }
    if (this._newTab !== undefined) {
      hasAnyValues = true;
      internalValueResult.newTab = this._newTab;
    }
    if (this._externalLink?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.externalLink = this._externalLink?.internalValue;
    }
    if (this._filter?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.filter = this._filter?.internalValue;
    }
    if (this._query?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.query = this._query?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleChronicleDashboardChartDashboardChartDrillDownConfigLeftDrillDownsCustomSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._leftClickColumn = undefined;
      this._newTab = undefined;
      this._externalLink.internalValue = undefined;
      this._filter.internalValue = undefined;
      this._query.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._leftClickColumn = value.leftClickColumn;
      this._newTab = value.newTab;
      this._externalLink.internalValue = value.externalLink;
      this._filter.internalValue = value.filter;
      this._query.internalValue = value.query;
    }
  }

  // left_click_column - computed: false, optional: true, required: false
  private _leftClickColumn?: string; 
  public get leftClickColumn() {
    return this.getStringAttribute('left_click_column');
  }
  public set leftClickColumn(value: string) {
    this._leftClickColumn = value;
  }
  public resetLeftClickColumn() {
    this._leftClickColumn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get leftClickColumnInput() {
    return this._leftClickColumn;
  }

  // new_tab - computed: false, optional: false, required: true
  private _newTab?: boolean | cdktn.IResolvable; 
  public get newTab() {
    return this.getBooleanAttribute('new_tab');
  }
  public set newTab(value: boolean | cdktn.IResolvable) {
    this._newTab = value;
  }
  // Temporarily expose input value. Use with caution.
  public get newTabInput() {
    return this._newTab;
  }

  // external_link - computed: false, optional: true, required: false
  private _externalLink = new GoogleChronicleDashboardChartDashboardChartDrillDownConfigLeftDrillDownsCustomSettingsExternalLinkOutputReference(this, "external_link");
  public get externalLink() {
    return this._externalLink;
  }
  public putExternalLink(value: GoogleChronicleDashboardChartDashboardChartDrillDownConfigLeftDrillDownsCustomSettingsExternalLink) {
    this._externalLink.internalValue = value;
  }
  public resetExternalLink() {
    this._externalLink.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalLinkInput() {
    return this._externalLink.internalValue;
  }

  // filter - computed: false, optional: true, required: false
  private _filter = new GoogleChronicleDashboardChartDashboardChartDrillDownConfigLeftDrillDownsCustomSettingsFilterOutputReference(this, "filter");
  public get filter() {
    return this._filter;
  }
  public putFilter(value: GoogleChronicleDashboardChartDashboardChartDrillDownConfigLeftDrillDownsCustomSettingsFilter) {
    this._filter.internalValue = value;
  }
  public resetFilter() {
    this._filter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterInput() {
    return this._filter.internalValue;
  }

  // query - computed: false, optional: true, required: false
  private _query = new GoogleChronicleDashboardChartDashboardChartDrillDownConfigLeftDrillDownsCustomSettingsQueryOutputReference(this, "query");
  public get query() {
    return this._query;
  }
  public putQuery(value: GoogleChronicleDashboardChartDashboardChartDrillDownConfigLeftDrillDownsCustomSettingsQuery) {
    this._query.internalValue = value;
  }
  public resetQuery() {
    this._query.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryInput() {
    return this._query.internalValue;
  }
}
export interface GoogleChronicleDashboardChartDashboardChartDrillDownConfigLeftDrillDownsDefaultSettings {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_chronicle_dashboard_chart#enabled GoogleChronicleDashboardChart#enabled}
  */
  readonly enabled: boolean | cdktn.IResolvable;
}

export function googleChronicleDashboardChartDashboardChartDrillDownConfigLeftDrillDownsDefaultSettingsToTerraform(struct?: GoogleChronicleDashboardChartDashboardChartDrillDownConfigLeftDrillDownsDefaultSettingsOutputReference | GoogleChronicleDashboardChartDashboardChartDrillDownConfigLeftDrillDownsDefaultSettings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktn.booleanToTerraform(struct!.enabled),
  }
}


export function googleChronicleDashboardChartDashboardChartDrillDownConfigLeftDrillDownsDefaultSettingsToHclTerraform(struct?: GoogleChronicleDashboardChartDashboardChartDrillDownConfigLeftDrillDownsDefaultSettingsOutputReference | GoogleChronicleDashboardChartDashboardChartDrillDownConfigLeftDrillDownsDefaultSettings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enabled: {
      value: cdktn.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleChronicleDashboardChartDashboardChartDrillDownConfigLeftDrillDownsDefaultSettingsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleChronicleDashboardChartDashboardChartDrillDownConfigLeftDrillDownsDefaultSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleChronicleDashboardChartDashboardChartDrillDownConfigLeftDrillDownsDefaultSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
    }
  }

  // enabled - computed: false, optional: false, required: true
  private _enabled?: boolean | cdktn.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktn.IResolvable) {
    this._enabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }
}
export interface GoogleChronicleDashboardChartDashboardChartDrillDownConfigLeftDrillDowns {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_chronicle_dashboard_chart#display_name GoogleChronicleDashboardChart#display_name}
  */
  readonly displayName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_chronicle_dashboard_chart#id GoogleChronicleDashboardChart#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * custom_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_chronicle_dashboard_chart#custom_settings GoogleChronicleDashboardChart#custom_settings}
  */
  readonly customSettings?: GoogleChronicleDashboardChartDashboardChartDrillDownConfigLeftDrillDownsCustomSettings;
  /**
  * default_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_chronicle_dashboard_chart#default_settings GoogleChronicleDashboardChart#default_settings}
  */
  readonly defaultSettings?: GoogleChronicleDashboardChartDashboardChartDrillDownConfigLeftDrillDownsDefaultSettings;
}

export function googleChronicleDashboardChartDashboardChartDrillDownConfigLeftDrillDownsToTerraform(struct?: GoogleChronicleDashboardChartDashboardChartDrillDownConfigLeftDrillDowns | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    display_name: cdktn.stringToTerraform(struct!.displayName),
    id: cdktn.stringToTerraform(struct!.id),
    custom_settings: googleChronicleDashboardChartDashboardChartDrillDownConfigLeftDrillDownsCustomSettingsToTerraform(struct!.customSettings),
    default_settings: googleChronicleDashboardChartDashboardChartDrillDownConfigLeftDrillDownsDefaultSettingsToTerraform(struct!.defaultSettings),
  }
}


export function googleChronicleDashboardChartDashboardChartDrillDownConfigLeftDrillDownsToHclTerraform(struct?: GoogleChronicleDashboardChartDashboardChartDrillDownConfigLeftDrillDowns | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    display_name: {
      value: cdktn.stringToHclTerraform(struct!.displayName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    id: {
      value: cdktn.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    custom_settings: {
      value: googleChronicleDashboardChartDashboardChartDrillDownConfigLeftDrillDownsCustomSettingsToHclTerraform(struct!.customSettings),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleChronicleDashboardChartDashboardChartDrillDownConfigLeftDrillDownsCustomSettingsList",
    },
    default_settings: {
      value: googleChronicleDashboardChartDashboardChartDrillDownConfigLeftDrillDownsDefaultSettingsToHclTerraform(struct!.defaultSettings),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleChronicleDashboardChartDashboardChartDrillDownConfigLeftDrillDownsDefaultSettingsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleChronicleDashboardChartDashboardChartDrillDownConfigLeftDrillDownsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): GoogleChronicleDashboardChartDashboardChartDrillDownConfigLeftDrillDowns | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._displayName !== undefined) {
      hasAnyValues = true;
      internalValueResult.displayName = this._displayName;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._customSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customSettings = this._customSettings?.internalValue;
    }
    if (this._defaultSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultSettings = this._defaultSettings?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleChronicleDashboardChartDashboardChartDrillDownConfigLeftDrillDowns | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._displayName = undefined;
      this._id = undefined;
      this._customSettings.internalValue = undefined;
      this._defaultSettings.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._displayName = value.displayName;
      this._id = value.id;
      this._customSettings.internalValue = value.customSettings;
      this._defaultSettings.internalValue = value.defaultSettings;
    }
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

  // id - computed: false, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // custom_settings - computed: false, optional: true, required: false
  private _customSettings = new GoogleChronicleDashboardChartDashboardChartDrillDownConfigLeftDrillDownsCustomSettingsOutputReference(this, "custom_settings");
  public get customSettings() {
    return this._customSettings;
  }
  public putCustomSettings(value: GoogleChronicleDashboardChartDashboardChartDrillDownConfigLeftDrillDownsCustomSettings) {
    this._customSettings.internalValue = value;
  }
  public resetCustomSettings() {
    this._customSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customSettingsInput() {
    return this._customSettings.internalValue;
  }

  // default_settings - computed: false, optional: true, required: false
  private _defaultSettings = new GoogleChronicleDashboardChartDashboardChartDrillDownConfigLeftDrillDownsDefaultSettingsOutputReference(this, "default_settings");
  public get defaultSettings() {
    return this._defaultSettings;
  }
  public putDefaultSettings(value: GoogleChronicleDashboardChartDashboardChartDrillDownConfigLeftDrillDownsDefaultSettings) {
    this._defaultSettings.internalValue = value;
  }
  public resetDefaultSettings() {
    this._defaultSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultSettingsInput() {
    return this._defaultSettings.internalValue;
  }
}

export class GoogleChronicleDashboardChartDashboardChartDrillDownConfigLeftDrillDownsList extends cdktn.ComplexList {
  public internalValue? : GoogleChronicleDashboardChartDashboardChartDrillDownConfigLeftDrillDowns[] | cdktn.IResolvable

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
  public get(index: number): GoogleChronicleDashboardChartDashboardChartDrillDownConfigLeftDrillDownsOutputReference {
    return new GoogleChronicleDashboardChartDashboardChartDrillDownConfigLeftDrillDownsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleChronicleDashboardChartDashboardChartDrillDownConfigRightDrillDownsCustomSettingsExternalLink {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_chronicle_dashboard_chart#description GoogleChronicleDashboardChart#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_chronicle_dashboard_chart#link GoogleChronicleDashboardChart#link}
  */
  readonly link: string;
}

export function googleChronicleDashboardChartDashboardChartDrillDownConfigRightDrillDownsCustomSettingsExternalLinkToTerraform(struct?: GoogleChronicleDashboardChartDashboardChartDrillDownConfigRightDrillDownsCustomSettingsExternalLinkOutputReference | GoogleChronicleDashboardChartDashboardChartDrillDownConfigRightDrillDownsCustomSettingsExternalLink): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktn.stringToTerraform(struct!.description),
    link: cdktn.stringToTerraform(struct!.link),
  }
}


export function googleChronicleDashboardChartDashboardChartDrillDownConfigRightDrillDownsCustomSettingsExternalLinkToHclTerraform(struct?: GoogleChronicleDashboardChartDashboardChartDrillDownConfigRightDrillDownsCustomSettingsExternalLinkOutputReference | GoogleChronicleDashboardChartDashboardChartDrillDownConfigRightDrillDownsCustomSettingsExternalLink): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    description: {
      value: cdktn.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    link: {
      value: cdktn.stringToHclTerraform(struct!.link),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleChronicleDashboardChartDashboardChartDrillDownConfigRightDrillDownsCustomSettingsExternalLinkOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleChronicleDashboardChartDashboardChartDrillDownConfigRightDrillDownsCustomSettingsExternalLink | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._link !== undefined) {
      hasAnyValues = true;
      internalValueResult.link = this._link;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleChronicleDashboardChartDashboardChartDrillDownConfigRightDrillDownsCustomSettingsExternalLink | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._description = undefined;
      this._link = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._description = value.description;
      this._link = value.link;
    }
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // link - computed: false, optional: false, required: true
  private _link?: string; 
  public get link() {
    return this.getStringAttribute('link');
  }
  public set link(value: string) {
    this._link = value;
  }
  // Temporarily expose input value. Use with caution.
  public get linkInput() {
    return this._link;
  }
}
export interface GoogleChronicleDashboardChartDashboardChartDrillDownConfigRightDrillDownsCustomSettingsFilterDashboardFiltersFilterOperatorAndValues {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_chronicle_dashboard_chart#field_values GoogleChronicleDashboardChart#field_values}
  */
  readonly fieldValues?: string[];
  /**
  *  Possible values: ["EQUAL", "NOT_EQUAL", "IN", "GREATER_THAN", "GREATER_THAN_OR_EQUAL_TO", "LESS_THAN", "LESS_THAN_OR_EQUAL_TO", "BETWEEN", "PAST", "IS_NULL", "IS_NOT_NULL", "STARTS_WITH", "ENDS_WITH", "DOES_NOT_STARTS_WITH", "DOES_NOT_ENDS_WITH", "NOT_IN", "CONTAINS", "DOES_NOT_CONTAIN"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_chronicle_dashboard_chart#filter_operator GoogleChronicleDashboardChart#filter_operator}
  */
  readonly filterOperator?: string;
}

export function googleChronicleDashboardChartDashboardChartDrillDownConfigRightDrillDownsCustomSettingsFilterDashboardFiltersFilterOperatorAndValuesToTerraform(struct?: GoogleChronicleDashboardChartDashboardChartDrillDownConfigRightDrillDownsCustomSettingsFilterDashboardFiltersFilterOperatorAndValues | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    field_values: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.fieldValues),
    filter_operator: cdktn.stringToTerraform(struct!.filterOperator),
  }
}


export function googleChronicleDashboardChartDashboardChartDrillDownConfigRightDrillDownsCustomSettingsFilterDashboardFiltersFilterOperatorAndValuesToHclTerraform(struct?: GoogleChronicleDashboardChartDashboardChartDrillDownConfigRightDrillDownsCustomSettingsFilterDashboardFiltersFilterOperatorAndValues | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    field_values: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.fieldValues),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    filter_operator: {
      value: cdktn.stringToHclTerraform(struct!.filterOperator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleChronicleDashboardChartDashboardChartDrillDownConfigRightDrillDownsCustomSettingsFilterDashboardFiltersFilterOperatorAndValuesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): GoogleChronicleDashboardChartDashboardChartDrillDownConfigRightDrillDownsCustomSettingsFilterDashboardFiltersFilterOperatorAndValues | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fieldValues !== undefined) {
      hasAnyValues = true;
      internalValueResult.fieldValues = this._fieldValues;
    }
    if (this._filterOperator !== undefined) {
      hasAnyValues = true;
      internalValueResult.filterOperator = this._filterOperator;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleChronicleDashboardChartDashboardChartDrillDownConfigRightDrillDownsCustomSettingsFilterDashboardFiltersFilterOperatorAndValues | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._fieldValues = undefined;
      this._filterOperator = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._fieldValues = value.fieldValues;
      this._filterOperator = value.filterOperator;
    }
  }

  // field_values - computed: false, optional: true, required: false
  private _fieldValues?: string[]; 
  public get fieldValues() {
    return this.getListAttribute('field_values');
  }
  public set fieldValues(value: string[]) {
    this._fieldValues = value;
  }
  public resetFieldValues() {
    this._fieldValues = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldValuesInput() {
    return this._fieldValues;
  }

  // filter_operator - computed: false, optional: true, required: false
  private _filterOperator?: string; 
  public get filterOperator() {
    return this.getStringAttribute('filter_operator');
  }
  public set filterOperator(value: string) {
    this._filterOperator = value;
  }
  public resetFilterOperator() {
    this._filterOperator = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterOperatorInput() {
    return this._filterOperator;
  }
}

export class GoogleChronicleDashboardChartDashboardChartDrillDownConfigRightDrillDownsCustomSettingsFilterDashboardFiltersFilterOperatorAndValuesList extends cdktn.ComplexList {
  public internalValue? : GoogleChronicleDashboardChartDashboardChartDrillDownConfigRightDrillDownsCustomSettingsFilterDashboardFiltersFilterOperatorAndValues[] | cdktn.IResolvable

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
  public get(index: number): GoogleChronicleDashboardChartDashboardChartDrillDownConfigRightDrillDownsCustomSettingsFilterDashboardFiltersFilterOperatorAndValuesOutputReference {
    return new GoogleChronicleDashboardChartDashboardChartDrillDownConfigRightDrillDownsCustomSettingsFilterDashboardFiltersFilterOperatorAndValuesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleChronicleDashboardChartDashboardChartDrillDownConfigRightDrillDownsCustomSettingsFilterDashboardFilters {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_chronicle_dashboard_chart#dashboard_filter_id GoogleChronicleDashboardChart#dashboard_filter_id}
  */
  readonly dashboardFilterId: string;
  /**
  * filter_operator_and_values block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_chronicle_dashboard_chart#filter_operator_and_values GoogleChronicleDashboardChart#filter_operator_and_values}
  */
  readonly filterOperatorAndValues: GoogleChronicleDashboardChartDashboardChartDrillDownConfigRightDrillDownsCustomSettingsFilterDashboardFiltersFilterOperatorAndValues[] | cdktn.IResolvable;
}

export function googleChronicleDashboardChartDashboardChartDrillDownConfigRightDrillDownsCustomSettingsFilterDashboardFiltersToTerraform(struct?: GoogleChronicleDashboardChartDashboardChartDrillDownConfigRightDrillDownsCustomSettingsFilterDashboardFilters | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dashboard_filter_id: cdktn.stringToTerraform(struct!.dashboardFilterId),
    filter_operator_and_values: cdktn.listMapper(googleChronicleDashboardChartDashboardChartDrillDownConfigRightDrillDownsCustomSettingsFilterDashboardFiltersFilterOperatorAndValuesToTerraform, true)(struct!.filterOperatorAndValues),
  }
}


export function googleChronicleDashboardChartDashboardChartDrillDownConfigRightDrillDownsCustomSettingsFilterDashboardFiltersToHclTerraform(struct?: GoogleChronicleDashboardChartDashboardChartDrillDownConfigRightDrillDownsCustomSettingsFilterDashboardFilters | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dashboard_filter_id: {
      value: cdktn.stringToHclTerraform(struct!.dashboardFilterId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    filter_operator_and_values: {
      value: cdktn.listMapperHcl(googleChronicleDashboardChartDashboardChartDrillDownConfigRightDrillDownsCustomSettingsFilterDashboardFiltersFilterOperatorAndValuesToHclTerraform, true)(struct!.filterOperatorAndValues),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleChronicleDashboardChartDashboardChartDrillDownConfigRightDrillDownsCustomSettingsFilterDashboardFiltersFilterOperatorAndValuesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleChronicleDashboardChartDashboardChartDrillDownConfigRightDrillDownsCustomSettingsFilterDashboardFiltersOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): GoogleChronicleDashboardChartDashboardChartDrillDownConfigRightDrillDownsCustomSettingsFilterDashboardFilters | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dashboardFilterId !== undefined) {
      hasAnyValues = true;
      internalValueResult.dashboardFilterId = this._dashboardFilterId;
    }
    if (this._filterOperatorAndValues?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.filterOperatorAndValues = this._filterOperatorAndValues?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleChronicleDashboardChartDashboardChartDrillDownConfigRightDrillDownsCustomSettingsFilterDashboardFilters | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dashboardFilterId = undefined;
      this._filterOperatorAndValues.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dashboardFilterId = value.dashboardFilterId;
      this._filterOperatorAndValues.internalValue = value.filterOperatorAndValues;
    }
  }

  // dashboard_filter_id - computed: false, optional: false, required: true
  private _dashboardFilterId?: string; 
  public get dashboardFilterId() {
    return this.getStringAttribute('dashboard_filter_id');
  }
  public set dashboardFilterId(value: string) {
    this._dashboardFilterId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dashboardFilterIdInput() {
    return this._dashboardFilterId;
  }

  // filter_operator_and_values - computed: false, optional: false, required: true
  private _filterOperatorAndValues = new GoogleChronicleDashboardChartDashboardChartDrillDownConfigRightDrillDownsCustomSettingsFilterDashboardFiltersFilterOperatorAndValuesList(this, "filter_operator_and_values", false);
  public get filterOperatorAndValues() {
    return this._filterOperatorAndValues;
  }
  public putFilterOperatorAndValues(value: GoogleChronicleDashboardChartDashboardChartDrillDownConfigRightDrillDownsCustomSettingsFilterDashboardFiltersFilterOperatorAndValues[] | cdktn.IResolvable) {
    this._filterOperatorAndValues.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get filterOperatorAndValuesInput() {
    return this._filterOperatorAndValues.internalValue;
  }
}

export class GoogleChronicleDashboardChartDashboardChartDrillDownConfigRightDrillDownsCustomSettingsFilterDashboardFiltersList extends cdktn.ComplexList {
  public internalValue? : GoogleChronicleDashboardChartDashboardChartDrillDownConfigRightDrillDownsCustomSettingsFilterDashboardFilters[] | cdktn.IResolvable

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
  public get(index: number): GoogleChronicleDashboardChartDashboardChartDrillDownConfigRightDrillDownsCustomSettingsFilterDashboardFiltersOutputReference {
    return new GoogleChronicleDashboardChartDashboardChartDrillDownConfigRightDrillDownsCustomSettingsFilterDashboardFiltersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleChronicleDashboardChartDashboardChartDrillDownConfigRightDrillDownsCustomSettingsFilter {
  /**
  * dashboard_filters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_chronicle_dashboard_chart#dashboard_filters GoogleChronicleDashboardChart#dashboard_filters}
  */
  readonly dashboardFilters: GoogleChronicleDashboardChartDashboardChartDrillDownConfigRightDrillDownsCustomSettingsFilterDashboardFilters[] | cdktn.IResolvable;
}

export function googleChronicleDashboardChartDashboardChartDrillDownConfigRightDrillDownsCustomSettingsFilterToTerraform(struct?: GoogleChronicleDashboardChartDashboardChartDrillDownConfigRightDrillDownsCustomSettingsFilterOutputReference | GoogleChronicleDashboardChartDashboardChartDrillDownConfigRightDrillDownsCustomSettingsFilter): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dashboard_filters: cdktn.listMapper(googleChronicleDashboardChartDashboardChartDrillDownConfigRightDrillDownsCustomSettingsFilterDashboardFiltersToTerraform, true)(struct!.dashboardFilters),
  }
}


export function googleChronicleDashboardChartDashboardChartDrillDownConfigRightDrillDownsCustomSettingsFilterToHclTerraform(struct?: GoogleChronicleDashboardChartDashboardChartDrillDownConfigRightDrillDownsCustomSettingsFilterOutputReference | GoogleChronicleDashboardChartDashboardChartDrillDownConfigRightDrillDownsCustomSettingsFilter): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dashboard_filters: {
      value: cdktn.listMapperHcl(googleChronicleDashboardChartDashboardChartDrillDownConfigRightDrillDownsCustomSettingsFilterDashboardFiltersToHclTerraform, true)(struct!.dashboardFilters),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleChronicleDashboardChartDashboardChartDrillDownConfigRightDrillDownsCustomSettingsFilterDashboardFiltersList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleChronicleDashboardChartDashboardChartDrillDownConfigRightDrillDownsCustomSettingsFilterOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleChronicleDashboardChartDashboardChartDrillDownConfigRightDrillDownsCustomSettingsFilter | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dashboardFilters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dashboardFilters = this._dashboardFilters?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleChronicleDashboardChartDashboardChartDrillDownConfigRightDrillDownsCustomSettingsFilter | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dashboardFilters.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._dashboardFilters.internalValue = value.dashboardFilters;
    }
  }

  // dashboard_filters - computed: false, optional: false, required: true
  private _dashboardFilters = new GoogleChronicleDashboardChartDashboardChartDrillDownConfigRightDrillDownsCustomSettingsFilterDashboardFiltersList(this, "dashboard_filters", false);
  public get dashboardFilters() {
    return this._dashboardFilters;
  }
  public putDashboardFilters(value: GoogleChronicleDashboardChartDashboardChartDrillDownConfigRightDrillDownsCustomSettingsFilterDashboardFilters[] | cdktn.IResolvable) {
    this._dashboardFilters.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dashboardFiltersInput() {
    return this._dashboardFilters.internalValue;
  }
}
export interface GoogleChronicleDashboardChartDashboardChartDrillDownConfigRightDrillDownsCustomSettingsQuery {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_chronicle_dashboard_chart#query GoogleChronicleDashboardChart#query}
  */
  readonly query: string;
}

export function googleChronicleDashboardChartDashboardChartDrillDownConfigRightDrillDownsCustomSettingsQueryToTerraform(struct?: GoogleChronicleDashboardChartDashboardChartDrillDownConfigRightDrillDownsCustomSettingsQueryOutputReference | GoogleChronicleDashboardChartDashboardChartDrillDownConfigRightDrillDownsCustomSettingsQuery): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    query: cdktn.stringToTerraform(struct!.query),
  }
}


export function googleChronicleDashboardChartDashboardChartDrillDownConfigRightDrillDownsCustomSettingsQueryToHclTerraform(struct?: GoogleChronicleDashboardChartDashboardChartDrillDownConfigRightDrillDownsCustomSettingsQueryOutputReference | GoogleChronicleDashboardChartDashboardChartDrillDownConfigRightDrillDownsCustomSettingsQuery): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    query: {
      value: cdktn.stringToHclTerraform(struct!.query),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleChronicleDashboardChartDashboardChartDrillDownConfigRightDrillDownsCustomSettingsQueryOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleChronicleDashboardChartDashboardChartDrillDownConfigRightDrillDownsCustomSettingsQuery | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._query !== undefined) {
      hasAnyValues = true;
      internalValueResult.query = this._query;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleChronicleDashboardChartDashboardChartDrillDownConfigRightDrillDownsCustomSettingsQuery | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._query = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._query = value.query;
    }
  }

  // query - computed: false, optional: false, required: true
  private _query?: string; 
  public get query() {
    return this.getStringAttribute('query');
  }
  public set query(value: string) {
    this._query = value;
  }
  // Temporarily expose input value. Use with caution.
  public get queryInput() {
    return this._query;
  }
}
export interface GoogleChronicleDashboardChartDashboardChartDrillDownConfigRightDrillDownsCustomSettings {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_chronicle_dashboard_chart#new_tab GoogleChronicleDashboardChart#new_tab}
  */
  readonly newTab: boolean | cdktn.IResolvable;
  /**
  * external_link block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_chronicle_dashboard_chart#external_link GoogleChronicleDashboardChart#external_link}
  */
  readonly externalLink?: GoogleChronicleDashboardChartDashboardChartDrillDownConfigRightDrillDownsCustomSettingsExternalLink;
  /**
  * filter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_chronicle_dashboard_chart#filter GoogleChronicleDashboardChart#filter}
  */
  readonly filter?: GoogleChronicleDashboardChartDashboardChartDrillDownConfigRightDrillDownsCustomSettingsFilter;
  /**
  * query block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_chronicle_dashboard_chart#query GoogleChronicleDashboardChart#query}
  */
  readonly query?: GoogleChronicleDashboardChartDashboardChartDrillDownConfigRightDrillDownsCustomSettingsQuery;
}

export function googleChronicleDashboardChartDashboardChartDrillDownConfigRightDrillDownsCustomSettingsToTerraform(struct?: GoogleChronicleDashboardChartDashboardChartDrillDownConfigRightDrillDownsCustomSettingsOutputReference | GoogleChronicleDashboardChartDashboardChartDrillDownConfigRightDrillDownsCustomSettings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    new_tab: cdktn.booleanToTerraform(struct!.newTab),
    external_link: googleChronicleDashboardChartDashboardChartDrillDownConfigRightDrillDownsCustomSettingsExternalLinkToTerraform(struct!.externalLink),
    filter: googleChronicleDashboardChartDashboardChartDrillDownConfigRightDrillDownsCustomSettingsFilterToTerraform(struct!.filter),
    query: googleChronicleDashboardChartDashboardChartDrillDownConfigRightDrillDownsCustomSettingsQueryToTerraform(struct!.query),
  }
}


export function googleChronicleDashboardChartDashboardChartDrillDownConfigRightDrillDownsCustomSettingsToHclTerraform(struct?: GoogleChronicleDashboardChartDashboardChartDrillDownConfigRightDrillDownsCustomSettingsOutputReference | GoogleChronicleDashboardChartDashboardChartDrillDownConfigRightDrillDownsCustomSettings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    new_tab: {
      value: cdktn.booleanToHclTerraform(struct!.newTab),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    external_link: {
      value: googleChronicleDashboardChartDashboardChartDrillDownConfigRightDrillDownsCustomSettingsExternalLinkToHclTerraform(struct!.externalLink),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleChronicleDashboardChartDashboardChartDrillDownConfigRightDrillDownsCustomSettingsExternalLinkList",
    },
    filter: {
      value: googleChronicleDashboardChartDashboardChartDrillDownConfigRightDrillDownsCustomSettingsFilterToHclTerraform(struct!.filter),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleChronicleDashboardChartDashboardChartDrillDownConfigRightDrillDownsCustomSettingsFilterList",
    },
    query: {
      value: googleChronicleDashboardChartDashboardChartDrillDownConfigRightDrillDownsCustomSettingsQueryToHclTerraform(struct!.query),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleChronicleDashboardChartDashboardChartDrillDownConfigRightDrillDownsCustomSettingsQueryList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleChronicleDashboardChartDashboardChartDrillDownConfigRightDrillDownsCustomSettingsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleChronicleDashboardChartDashboardChartDrillDownConfigRightDrillDownsCustomSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._newTab !== undefined) {
      hasAnyValues = true;
      internalValueResult.newTab = this._newTab;
    }
    if (this._externalLink?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.externalLink = this._externalLink?.internalValue;
    }
    if (this._filter?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.filter = this._filter?.internalValue;
    }
    if (this._query?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.query = this._query?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleChronicleDashboardChartDashboardChartDrillDownConfigRightDrillDownsCustomSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._newTab = undefined;
      this._externalLink.internalValue = undefined;
      this._filter.internalValue = undefined;
      this._query.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._newTab = value.newTab;
      this._externalLink.internalValue = value.externalLink;
      this._filter.internalValue = value.filter;
      this._query.internalValue = value.query;
    }
  }

  // new_tab - computed: false, optional: false, required: true
  private _newTab?: boolean | cdktn.IResolvable; 
  public get newTab() {
    return this.getBooleanAttribute('new_tab');
  }
  public set newTab(value: boolean | cdktn.IResolvable) {
    this._newTab = value;
  }
  // Temporarily expose input value. Use with caution.
  public get newTabInput() {
    return this._newTab;
  }

  // external_link - computed: false, optional: true, required: false
  private _externalLink = new GoogleChronicleDashboardChartDashboardChartDrillDownConfigRightDrillDownsCustomSettingsExternalLinkOutputReference(this, "external_link");
  public get externalLink() {
    return this._externalLink;
  }
  public putExternalLink(value: GoogleChronicleDashboardChartDashboardChartDrillDownConfigRightDrillDownsCustomSettingsExternalLink) {
    this._externalLink.internalValue = value;
  }
  public resetExternalLink() {
    this._externalLink.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalLinkInput() {
    return this._externalLink.internalValue;
  }

  // filter - computed: false, optional: true, required: false
  private _filter = new GoogleChronicleDashboardChartDashboardChartDrillDownConfigRightDrillDownsCustomSettingsFilterOutputReference(this, "filter");
  public get filter() {
    return this._filter;
  }
  public putFilter(value: GoogleChronicleDashboardChartDashboardChartDrillDownConfigRightDrillDownsCustomSettingsFilter) {
    this._filter.internalValue = value;
  }
  public resetFilter() {
    this._filter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterInput() {
    return this._filter.internalValue;
  }

  // query - computed: false, optional: true, required: false
  private _query = new GoogleChronicleDashboardChartDashboardChartDrillDownConfigRightDrillDownsCustomSettingsQueryOutputReference(this, "query");
  public get query() {
    return this._query;
  }
  public putQuery(value: GoogleChronicleDashboardChartDashboardChartDrillDownConfigRightDrillDownsCustomSettingsQuery) {
    this._query.internalValue = value;
  }
  public resetQuery() {
    this._query.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryInput() {
    return this._query.internalValue;
  }
}
export interface GoogleChronicleDashboardChartDashboardChartDrillDownConfigRightDrillDownsDefaultSettings {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_chronicle_dashboard_chart#enabled GoogleChronicleDashboardChart#enabled}
  */
  readonly enabled: boolean | cdktn.IResolvable;
}

export function googleChronicleDashboardChartDashboardChartDrillDownConfigRightDrillDownsDefaultSettingsToTerraform(struct?: GoogleChronicleDashboardChartDashboardChartDrillDownConfigRightDrillDownsDefaultSettingsOutputReference | GoogleChronicleDashboardChartDashboardChartDrillDownConfigRightDrillDownsDefaultSettings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktn.booleanToTerraform(struct!.enabled),
  }
}


export function googleChronicleDashboardChartDashboardChartDrillDownConfigRightDrillDownsDefaultSettingsToHclTerraform(struct?: GoogleChronicleDashboardChartDashboardChartDrillDownConfigRightDrillDownsDefaultSettingsOutputReference | GoogleChronicleDashboardChartDashboardChartDrillDownConfigRightDrillDownsDefaultSettings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enabled: {
      value: cdktn.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleChronicleDashboardChartDashboardChartDrillDownConfigRightDrillDownsDefaultSettingsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleChronicleDashboardChartDashboardChartDrillDownConfigRightDrillDownsDefaultSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleChronicleDashboardChartDashboardChartDrillDownConfigRightDrillDownsDefaultSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
    }
  }

  // enabled - computed: false, optional: false, required: true
  private _enabled?: boolean | cdktn.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktn.IResolvable) {
    this._enabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }
}
export interface GoogleChronicleDashboardChartDashboardChartDrillDownConfigRightDrillDowns {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_chronicle_dashboard_chart#display_name GoogleChronicleDashboardChart#display_name}
  */
  readonly displayName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_chronicle_dashboard_chart#id GoogleChronicleDashboardChart#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * custom_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_chronicle_dashboard_chart#custom_settings GoogleChronicleDashboardChart#custom_settings}
  */
  readonly customSettings?: GoogleChronicleDashboardChartDashboardChartDrillDownConfigRightDrillDownsCustomSettings;
  /**
  * default_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_chronicle_dashboard_chart#default_settings GoogleChronicleDashboardChart#default_settings}
  */
  readonly defaultSettings?: GoogleChronicleDashboardChartDashboardChartDrillDownConfigRightDrillDownsDefaultSettings;
}

export function googleChronicleDashboardChartDashboardChartDrillDownConfigRightDrillDownsToTerraform(struct?: GoogleChronicleDashboardChartDashboardChartDrillDownConfigRightDrillDowns | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    display_name: cdktn.stringToTerraform(struct!.displayName),
    id: cdktn.stringToTerraform(struct!.id),
    custom_settings: googleChronicleDashboardChartDashboardChartDrillDownConfigRightDrillDownsCustomSettingsToTerraform(struct!.customSettings),
    default_settings: googleChronicleDashboardChartDashboardChartDrillDownConfigRightDrillDownsDefaultSettingsToTerraform(struct!.defaultSettings),
  }
}


export function googleChronicleDashboardChartDashboardChartDrillDownConfigRightDrillDownsToHclTerraform(struct?: GoogleChronicleDashboardChartDashboardChartDrillDownConfigRightDrillDowns | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    display_name: {
      value: cdktn.stringToHclTerraform(struct!.displayName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    id: {
      value: cdktn.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    custom_settings: {
      value: googleChronicleDashboardChartDashboardChartDrillDownConfigRightDrillDownsCustomSettingsToHclTerraform(struct!.customSettings),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleChronicleDashboardChartDashboardChartDrillDownConfigRightDrillDownsCustomSettingsList",
    },
    default_settings: {
      value: googleChronicleDashboardChartDashboardChartDrillDownConfigRightDrillDownsDefaultSettingsToHclTerraform(struct!.defaultSettings),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleChronicleDashboardChartDashboardChartDrillDownConfigRightDrillDownsDefaultSettingsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleChronicleDashboardChartDashboardChartDrillDownConfigRightDrillDownsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): GoogleChronicleDashboardChartDashboardChartDrillDownConfigRightDrillDowns | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._displayName !== undefined) {
      hasAnyValues = true;
      internalValueResult.displayName = this._displayName;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._customSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customSettings = this._customSettings?.internalValue;
    }
    if (this._defaultSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultSettings = this._defaultSettings?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleChronicleDashboardChartDashboardChartDrillDownConfigRightDrillDowns | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._displayName = undefined;
      this._id = undefined;
      this._customSettings.internalValue = undefined;
      this._defaultSettings.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._displayName = value.displayName;
      this._id = value.id;
      this._customSettings.internalValue = value.customSettings;
      this._defaultSettings.internalValue = value.defaultSettings;
    }
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

  // id - computed: false, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // custom_settings - computed: false, optional: true, required: false
  private _customSettings = new GoogleChronicleDashboardChartDashboardChartDrillDownConfigRightDrillDownsCustomSettingsOutputReference(this, "custom_settings");
  public get customSettings() {
    return this._customSettings;
  }
  public putCustomSettings(value: GoogleChronicleDashboardChartDashboardChartDrillDownConfigRightDrillDownsCustomSettings) {
    this._customSettings.internalValue = value;
  }
  public resetCustomSettings() {
    this._customSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customSettingsInput() {
    return this._customSettings.internalValue;
  }

  // default_settings - computed: false, optional: true, required: false
  private _defaultSettings = new GoogleChronicleDashboardChartDashboardChartDrillDownConfigRightDrillDownsDefaultSettingsOutputReference(this, "default_settings");
  public get defaultSettings() {
    return this._defaultSettings;
  }
  public putDefaultSettings(value: GoogleChronicleDashboardChartDashboardChartDrillDownConfigRightDrillDownsDefaultSettings) {
    this._defaultSettings.internalValue = value;
  }
  public resetDefaultSettings() {
    this._defaultSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultSettingsInput() {
    return this._defaultSettings.internalValue;
  }
}

export class GoogleChronicleDashboardChartDashboardChartDrillDownConfigRightDrillDownsList extends cdktn.ComplexList {
  public internalValue? : GoogleChronicleDashboardChartDashboardChartDrillDownConfigRightDrillDowns[] | cdktn.IResolvable

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
  public get(index: number): GoogleChronicleDashboardChartDashboardChartDrillDownConfigRightDrillDownsOutputReference {
    return new GoogleChronicleDashboardChartDashboardChartDrillDownConfigRightDrillDownsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleChronicleDashboardChartDashboardChartDrillDownConfig {
  /**
  * left_drill_downs block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_chronicle_dashboard_chart#left_drill_downs GoogleChronicleDashboardChart#left_drill_downs}
  */
  readonly leftDrillDowns?: GoogleChronicleDashboardChartDashboardChartDrillDownConfigLeftDrillDowns[] | cdktn.IResolvable;
  /**
  * right_drill_downs block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_chronicle_dashboard_chart#right_drill_downs GoogleChronicleDashboardChart#right_drill_downs}
  */
  readonly rightDrillDowns?: GoogleChronicleDashboardChartDashboardChartDrillDownConfigRightDrillDowns[] | cdktn.IResolvable;
}

export function googleChronicleDashboardChartDashboardChartDrillDownConfigToTerraform(struct?: GoogleChronicleDashboardChartDashboardChartDrillDownConfigOutputReference | GoogleChronicleDashboardChartDashboardChartDrillDownConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    left_drill_downs: cdktn.listMapper(googleChronicleDashboardChartDashboardChartDrillDownConfigLeftDrillDownsToTerraform, true)(struct!.leftDrillDowns),
    right_drill_downs: cdktn.listMapper(googleChronicleDashboardChartDashboardChartDrillDownConfigRightDrillDownsToTerraform, true)(struct!.rightDrillDowns),
  }
}


export function googleChronicleDashboardChartDashboardChartDrillDownConfigToHclTerraform(struct?: GoogleChronicleDashboardChartDashboardChartDrillDownConfigOutputReference | GoogleChronicleDashboardChartDashboardChartDrillDownConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    left_drill_downs: {
      value: cdktn.listMapperHcl(googleChronicleDashboardChartDashboardChartDrillDownConfigLeftDrillDownsToHclTerraform, true)(struct!.leftDrillDowns),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleChronicleDashboardChartDashboardChartDrillDownConfigLeftDrillDownsList",
    },
    right_drill_downs: {
      value: cdktn.listMapperHcl(googleChronicleDashboardChartDashboardChartDrillDownConfigRightDrillDownsToHclTerraform, true)(struct!.rightDrillDowns),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleChronicleDashboardChartDashboardChartDrillDownConfigRightDrillDownsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleChronicleDashboardChartDashboardChartDrillDownConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleChronicleDashboardChartDashboardChartDrillDownConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._leftDrillDowns?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.leftDrillDowns = this._leftDrillDowns?.internalValue;
    }
    if (this._rightDrillDowns?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rightDrillDowns = this._rightDrillDowns?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleChronicleDashboardChartDashboardChartDrillDownConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._leftDrillDowns.internalValue = undefined;
      this._rightDrillDowns.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._leftDrillDowns.internalValue = value.leftDrillDowns;
      this._rightDrillDowns.internalValue = value.rightDrillDowns;
    }
  }

  // left_drill_downs - computed: false, optional: true, required: false
  private _leftDrillDowns = new GoogleChronicleDashboardChartDashboardChartDrillDownConfigLeftDrillDownsList(this, "left_drill_downs", false);
  public get leftDrillDowns() {
    return this._leftDrillDowns;
  }
  public putLeftDrillDowns(value: GoogleChronicleDashboardChartDashboardChartDrillDownConfigLeftDrillDowns[] | cdktn.IResolvable) {
    this._leftDrillDowns.internalValue = value;
  }
  public resetLeftDrillDowns() {
    this._leftDrillDowns.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get leftDrillDownsInput() {
    return this._leftDrillDowns.internalValue;
  }

  // right_drill_downs - computed: false, optional: true, required: false
  private _rightDrillDowns = new GoogleChronicleDashboardChartDashboardChartDrillDownConfigRightDrillDownsList(this, "right_drill_downs", false);
  public get rightDrillDowns() {
    return this._rightDrillDowns;
  }
  public putRightDrillDowns(value: GoogleChronicleDashboardChartDashboardChartDrillDownConfigRightDrillDowns[] | cdktn.IResolvable) {
    this._rightDrillDowns.internalValue = value;
  }
  public resetRightDrillDowns() {
    this._rightDrillDowns.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rightDrillDownsInput() {
    return this._rightDrillDowns.internalValue;
  }
}
export interface GoogleChronicleDashboardChartDashboardChartVisualizationButtonProperties {
  /**
  *  Possible values: ["BUTTON_STYLE_UNSPECIFIED", "BUTTON_STYLE_FILLED", "BUTTON_STYLE_OUTLINED", "BUTTON_STYLE_TRANSPARENT"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_chronicle_dashboard_chart#button_style GoogleChronicleDashboardChart#button_style}
  */
  readonly buttonStyle?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_chronicle_dashboard_chart#color GoogleChronicleDashboardChart#color}
  */
  readonly color?: string;
}

export function googleChronicleDashboardChartDashboardChartVisualizationButtonPropertiesToTerraform(struct?: GoogleChronicleDashboardChartDashboardChartVisualizationButtonPropertiesOutputReference | GoogleChronicleDashboardChartDashboardChartVisualizationButtonProperties): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    button_style: cdktn.stringToTerraform(struct!.buttonStyle),
    color: cdktn.stringToTerraform(struct!.color),
  }
}


export function googleChronicleDashboardChartDashboardChartVisualizationButtonPropertiesToHclTerraform(struct?: GoogleChronicleDashboardChartDashboardChartVisualizationButtonPropertiesOutputReference | GoogleChronicleDashboardChartDashboardChartVisualizationButtonProperties): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    button_style: {
      value: cdktn.stringToHclTerraform(struct!.buttonStyle),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    color: {
      value: cdktn.stringToHclTerraform(struct!.color),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleChronicleDashboardChartDashboardChartVisualizationButtonPropertiesOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleChronicleDashboardChartDashboardChartVisualizationButtonProperties | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._buttonStyle !== undefined) {
      hasAnyValues = true;
      internalValueResult.buttonStyle = this._buttonStyle;
    }
    if (this._color !== undefined) {
      hasAnyValues = true;
      internalValueResult.color = this._color;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleChronicleDashboardChartDashboardChartVisualizationButtonProperties | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._buttonStyle = undefined;
      this._color = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._buttonStyle = value.buttonStyle;
      this._color = value.color;
    }
  }

  // button_style - computed: false, optional: true, required: false
  private _buttonStyle?: string; 
  public get buttonStyle() {
    return this.getStringAttribute('button_style');
  }
  public set buttonStyle(value: string) {
    this._buttonStyle = value;
  }
  public resetButtonStyle() {
    this._buttonStyle = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get buttonStyleInput() {
    return this._buttonStyle;
  }

  // color - computed: false, optional: true, required: false
  private _color?: string; 
  public get color() {
    return this.getStringAttribute('color');
  }
  public set color(value: string) {
    this._color = value;
  }
  public resetColor() {
    this._color = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get colorInput() {
    return this._color;
  }
}
export interface GoogleChronicleDashboardChartDashboardChartVisualizationButton {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_chronicle_dashboard_chart#description GoogleChronicleDashboardChart#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_chronicle_dashboard_chart#hyperlink GoogleChronicleDashboardChart#hyperlink}
  */
  readonly hyperlink: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_chronicle_dashboard_chart#label GoogleChronicleDashboardChart#label}
  */
  readonly label: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_chronicle_dashboard_chart#new_tab GoogleChronicleDashboardChart#new_tab}
  */
  readonly newTab?: boolean | cdktn.IResolvable;
  /**
  * properties block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_chronicle_dashboard_chart#properties GoogleChronicleDashboardChart#properties}
  */
  readonly properties?: GoogleChronicleDashboardChartDashboardChartVisualizationButtonProperties;
}

export function googleChronicleDashboardChartDashboardChartVisualizationButtonToTerraform(struct?: GoogleChronicleDashboardChartDashboardChartVisualizationButtonOutputReference | GoogleChronicleDashboardChartDashboardChartVisualizationButton): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktn.stringToTerraform(struct!.description),
    hyperlink: cdktn.stringToTerraform(struct!.hyperlink),
    label: cdktn.stringToTerraform(struct!.label),
    new_tab: cdktn.booleanToTerraform(struct!.newTab),
    properties: googleChronicleDashboardChartDashboardChartVisualizationButtonPropertiesToTerraform(struct!.properties),
  }
}


export function googleChronicleDashboardChartDashboardChartVisualizationButtonToHclTerraform(struct?: GoogleChronicleDashboardChartDashboardChartVisualizationButtonOutputReference | GoogleChronicleDashboardChartDashboardChartVisualizationButton): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    description: {
      value: cdktn.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    hyperlink: {
      value: cdktn.stringToHclTerraform(struct!.hyperlink),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    label: {
      value: cdktn.stringToHclTerraform(struct!.label),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    new_tab: {
      value: cdktn.booleanToHclTerraform(struct!.newTab),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    properties: {
      value: googleChronicleDashboardChartDashboardChartVisualizationButtonPropertiesToHclTerraform(struct!.properties),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleChronicleDashboardChartDashboardChartVisualizationButtonPropertiesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleChronicleDashboardChartDashboardChartVisualizationButtonOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleChronicleDashboardChartDashboardChartVisualizationButton | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._hyperlink !== undefined) {
      hasAnyValues = true;
      internalValueResult.hyperlink = this._hyperlink;
    }
    if (this._label !== undefined) {
      hasAnyValues = true;
      internalValueResult.label = this._label;
    }
    if (this._newTab !== undefined) {
      hasAnyValues = true;
      internalValueResult.newTab = this._newTab;
    }
    if (this._properties?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.properties = this._properties?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleChronicleDashboardChartDashboardChartVisualizationButton | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._description = undefined;
      this._hyperlink = undefined;
      this._label = undefined;
      this._newTab = undefined;
      this._properties.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._description = value.description;
      this._hyperlink = value.hyperlink;
      this._label = value.label;
      this._newTab = value.newTab;
      this._properties.internalValue = value.properties;
    }
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // hyperlink - computed: false, optional: false, required: true
  private _hyperlink?: string; 
  public get hyperlink() {
    return this.getStringAttribute('hyperlink');
  }
  public set hyperlink(value: string) {
    this._hyperlink = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hyperlinkInput() {
    return this._hyperlink;
  }

  // label - computed: false, optional: false, required: true
  private _label?: string; 
  public get label() {
    return this.getStringAttribute('label');
  }
  public set label(value: string) {
    this._label = value;
  }
  // Temporarily expose input value. Use with caution.
  public get labelInput() {
    return this._label;
  }

  // new_tab - computed: false, optional: true, required: false
  private _newTab?: boolean | cdktn.IResolvable; 
  public get newTab() {
    return this.getBooleanAttribute('new_tab');
  }
  public set newTab(value: boolean | cdktn.IResolvable) {
    this._newTab = value;
  }
  public resetNewTab() {
    this._newTab = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get newTabInput() {
    return this._newTab;
  }

  // properties - computed: false, optional: true, required: false
  private _properties = new GoogleChronicleDashboardChartDashboardChartVisualizationButtonPropertiesOutputReference(this, "properties");
  public get properties() {
    return this._properties;
  }
  public putProperties(value: GoogleChronicleDashboardChartDashboardChartVisualizationButtonProperties) {
    this._properties.internalValue = value;
  }
  public resetProperties() {
    this._properties.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get propertiesInput() {
    return this._properties.internalValue;
  }
}
export interface GoogleChronicleDashboardChartDashboardChartVisualizationColumnDefs {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_chronicle_dashboard_chart#field GoogleChronicleDashboardChart#field}
  */
  readonly field?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_chronicle_dashboard_chart#header GoogleChronicleDashboardChart#header}
  */
  readonly header?: string;
}

export function googleChronicleDashboardChartDashboardChartVisualizationColumnDefsToTerraform(struct?: GoogleChronicleDashboardChartDashboardChartVisualizationColumnDefs | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    field: cdktn.stringToTerraform(struct!.field),
    header: cdktn.stringToTerraform(struct!.header),
  }
}


export function googleChronicleDashboardChartDashboardChartVisualizationColumnDefsToHclTerraform(struct?: GoogleChronicleDashboardChartDashboardChartVisualizationColumnDefs | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    field: {
      value: cdktn.stringToHclTerraform(struct!.field),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    header: {
      value: cdktn.stringToHclTerraform(struct!.header),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleChronicleDashboardChartDashboardChartVisualizationColumnDefsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): GoogleChronicleDashboardChartDashboardChartVisualizationColumnDefs | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._field !== undefined) {
      hasAnyValues = true;
      internalValueResult.field = this._field;
    }
    if (this._header !== undefined) {
      hasAnyValues = true;
      internalValueResult.header = this._header;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleChronicleDashboardChartDashboardChartVisualizationColumnDefs | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._field = undefined;
      this._header = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._field = value.field;
      this._header = value.header;
    }
  }

  // field - computed: false, optional: true, required: false
  private _field?: string; 
  public get field() {
    return this.getStringAttribute('field');
  }
  public set field(value: string) {
    this._field = value;
  }
  public resetField() {
    this._field = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldInput() {
    return this._field;
  }

  // header - computed: false, optional: true, required: false
  private _header?: string; 
  public get header() {
    return this.getStringAttribute('header');
  }
  public set header(value: string) {
    this._header = value;
  }
  public resetHeader() {
    this._header = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headerInput() {
    return this._header;
  }
}

export class GoogleChronicleDashboardChartDashboardChartVisualizationColumnDefsList extends cdktn.ComplexList {
  public internalValue? : GoogleChronicleDashboardChartDashboardChartVisualizationColumnDefs[] | cdktn.IResolvable

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
  public get(index: number): GoogleChronicleDashboardChartDashboardChartVisualizationColumnDefsOutputReference {
    return new GoogleChronicleDashboardChartDashboardChartVisualizationColumnDefsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleChronicleDashboardChartDashboardChartVisualizationGoogleMapsConfigDataSettings {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_chronicle_dashboard_chart#count_column GoogleChronicleDashboardChart#count_column}
  */
  readonly countColumn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_chronicle_dashboard_chart#latitude_column GoogleChronicleDashboardChart#latitude_column}
  */
  readonly latitudeColumn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_chronicle_dashboard_chart#longitude_column GoogleChronicleDashboardChart#longitude_column}
  */
  readonly longitudeColumn?: string;
}

export function googleChronicleDashboardChartDashboardChartVisualizationGoogleMapsConfigDataSettingsToTerraform(struct?: GoogleChronicleDashboardChartDashboardChartVisualizationGoogleMapsConfigDataSettingsOutputReference | GoogleChronicleDashboardChartDashboardChartVisualizationGoogleMapsConfigDataSettings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    count_column: cdktn.stringToTerraform(struct!.countColumn),
    latitude_column: cdktn.stringToTerraform(struct!.latitudeColumn),
    longitude_column: cdktn.stringToTerraform(struct!.longitudeColumn),
  }
}


export function googleChronicleDashboardChartDashboardChartVisualizationGoogleMapsConfigDataSettingsToHclTerraform(struct?: GoogleChronicleDashboardChartDashboardChartVisualizationGoogleMapsConfigDataSettingsOutputReference | GoogleChronicleDashboardChartDashboardChartVisualizationGoogleMapsConfigDataSettings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    count_column: {
      value: cdktn.stringToHclTerraform(struct!.countColumn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    latitude_column: {
      value: cdktn.stringToHclTerraform(struct!.latitudeColumn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    longitude_column: {
      value: cdktn.stringToHclTerraform(struct!.longitudeColumn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleChronicleDashboardChartDashboardChartVisualizationGoogleMapsConfigDataSettingsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleChronicleDashboardChartDashboardChartVisualizationGoogleMapsConfigDataSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._countColumn !== undefined) {
      hasAnyValues = true;
      internalValueResult.countColumn = this._countColumn;
    }
    if (this._latitudeColumn !== undefined) {
      hasAnyValues = true;
      internalValueResult.latitudeColumn = this._latitudeColumn;
    }
    if (this._longitudeColumn !== undefined) {
      hasAnyValues = true;
      internalValueResult.longitudeColumn = this._longitudeColumn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleChronicleDashboardChartDashboardChartVisualizationGoogleMapsConfigDataSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._countColumn = undefined;
      this._latitudeColumn = undefined;
      this._longitudeColumn = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._countColumn = value.countColumn;
      this._latitudeColumn = value.latitudeColumn;
      this._longitudeColumn = value.longitudeColumn;
    }
  }

  // count_column - computed: false, optional: true, required: false
  private _countColumn?: string; 
  public get countColumn() {
    return this.getStringAttribute('count_column');
  }
  public set countColumn(value: string) {
    this._countColumn = value;
  }
  public resetCountColumn() {
    this._countColumn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get countColumnInput() {
    return this._countColumn;
  }

  // latitude_column - computed: false, optional: true, required: false
  private _latitudeColumn?: string; 
  public get latitudeColumn() {
    return this.getStringAttribute('latitude_column');
  }
  public set latitudeColumn(value: string) {
    this._latitudeColumn = value;
  }
  public resetLatitudeColumn() {
    this._latitudeColumn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get latitudeColumnInput() {
    return this._latitudeColumn;
  }

  // longitude_column - computed: false, optional: true, required: false
  private _longitudeColumn?: string; 
  public get longitudeColumn() {
    return this.getStringAttribute('longitude_column');
  }
  public set longitudeColumn(value: string) {
    this._longitudeColumn = value;
  }
  public resetLongitudeColumn() {
    this._longitudeColumn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get longitudeColumnInput() {
    return this._longitudeColumn;
  }
}
export interface GoogleChronicleDashboardChartDashboardChartVisualizationGoogleMapsConfigMapPosition {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_chronicle_dashboard_chart#fit_data GoogleChronicleDashboardChart#fit_data}
  */
  readonly fitData?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_chronicle_dashboard_chart#latitude_value GoogleChronicleDashboardChart#latitude_value}
  */
  readonly latitudeValue?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_chronicle_dashboard_chart#longitude_value GoogleChronicleDashboardChart#longitude_value}
  */
  readonly longitudeValue?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_chronicle_dashboard_chart#zoom_scale_value GoogleChronicleDashboardChart#zoom_scale_value}
  */
  readonly zoomScaleValue?: number;
}

export function googleChronicleDashboardChartDashboardChartVisualizationGoogleMapsConfigMapPositionToTerraform(struct?: GoogleChronicleDashboardChartDashboardChartVisualizationGoogleMapsConfigMapPositionOutputReference | GoogleChronicleDashboardChartDashboardChartVisualizationGoogleMapsConfigMapPosition): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    fit_data: cdktn.booleanToTerraform(struct!.fitData),
    latitude_value: cdktn.numberToTerraform(struct!.latitudeValue),
    longitude_value: cdktn.numberToTerraform(struct!.longitudeValue),
    zoom_scale_value: cdktn.numberToTerraform(struct!.zoomScaleValue),
  }
}


export function googleChronicleDashboardChartDashboardChartVisualizationGoogleMapsConfigMapPositionToHclTerraform(struct?: GoogleChronicleDashboardChartDashboardChartVisualizationGoogleMapsConfigMapPositionOutputReference | GoogleChronicleDashboardChartDashboardChartVisualizationGoogleMapsConfigMapPosition): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    fit_data: {
      value: cdktn.booleanToHclTerraform(struct!.fitData),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    latitude_value: {
      value: cdktn.numberToHclTerraform(struct!.latitudeValue),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    longitude_value: {
      value: cdktn.numberToHclTerraform(struct!.longitudeValue),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    zoom_scale_value: {
      value: cdktn.numberToHclTerraform(struct!.zoomScaleValue),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleChronicleDashboardChartDashboardChartVisualizationGoogleMapsConfigMapPositionOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleChronicleDashboardChartDashboardChartVisualizationGoogleMapsConfigMapPosition | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fitData !== undefined) {
      hasAnyValues = true;
      internalValueResult.fitData = this._fitData;
    }
    if (this._latitudeValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.latitudeValue = this._latitudeValue;
    }
    if (this._longitudeValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.longitudeValue = this._longitudeValue;
    }
    if (this._zoomScaleValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.zoomScaleValue = this._zoomScaleValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleChronicleDashboardChartDashboardChartVisualizationGoogleMapsConfigMapPosition | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._fitData = undefined;
      this._latitudeValue = undefined;
      this._longitudeValue = undefined;
      this._zoomScaleValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._fitData = value.fitData;
      this._latitudeValue = value.latitudeValue;
      this._longitudeValue = value.longitudeValue;
      this._zoomScaleValue = value.zoomScaleValue;
    }
  }

  // fit_data - computed: false, optional: true, required: false
  private _fitData?: boolean | cdktn.IResolvable; 
  public get fitData() {
    return this.getBooleanAttribute('fit_data');
  }
  public set fitData(value: boolean | cdktn.IResolvable) {
    this._fitData = value;
  }
  public resetFitData() {
    this._fitData = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fitDataInput() {
    return this._fitData;
  }

  // latitude_value - computed: false, optional: true, required: false
  private _latitudeValue?: number; 
  public get latitudeValue() {
    return this.getNumberAttribute('latitude_value');
  }
  public set latitudeValue(value: number) {
    this._latitudeValue = value;
  }
  public resetLatitudeValue() {
    this._latitudeValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get latitudeValueInput() {
    return this._latitudeValue;
  }

  // longitude_value - computed: false, optional: true, required: false
  private _longitudeValue?: number; 
  public get longitudeValue() {
    return this.getNumberAttribute('longitude_value');
  }
  public set longitudeValue(value: number) {
    this._longitudeValue = value;
  }
  public resetLongitudeValue() {
    this._longitudeValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get longitudeValueInput() {
    return this._longitudeValue;
  }

  // zoom_scale_value - computed: false, optional: true, required: false
  private _zoomScaleValue?: number; 
  public get zoomScaleValue() {
    return this.getNumberAttribute('zoom_scale_value');
  }
  public set zoomScaleValue(value: number) {
    this._zoomScaleValue = value;
  }
  public resetZoomScaleValue() {
    this._zoomScaleValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zoomScaleValueInput() {
    return this._zoomScaleValue;
  }
}
export interface GoogleChronicleDashboardChartDashboardChartVisualizationGoogleMapsConfigPointSettings {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_chronicle_dashboard_chart#color GoogleChronicleDashboardChart#color}
  */
  readonly color?: string;
  /**
  *  Possible values: ["POINT_SIZE_TYPE_UNSPECIFIED", "POINT_SIZE_TYPE_FIXED", "POINT_SIZE_TYPE_PROPORTIONAL_TO_SIZE"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_chronicle_dashboard_chart#point_size_type GoogleChronicleDashboardChart#point_size_type}
  */
  readonly pointSizeType?: string;
}

export function googleChronicleDashboardChartDashboardChartVisualizationGoogleMapsConfigPointSettingsToTerraform(struct?: GoogleChronicleDashboardChartDashboardChartVisualizationGoogleMapsConfigPointSettingsOutputReference | GoogleChronicleDashboardChartDashboardChartVisualizationGoogleMapsConfigPointSettings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    color: cdktn.stringToTerraform(struct!.color),
    point_size_type: cdktn.stringToTerraform(struct!.pointSizeType),
  }
}


export function googleChronicleDashboardChartDashboardChartVisualizationGoogleMapsConfigPointSettingsToHclTerraform(struct?: GoogleChronicleDashboardChartDashboardChartVisualizationGoogleMapsConfigPointSettingsOutputReference | GoogleChronicleDashboardChartDashboardChartVisualizationGoogleMapsConfigPointSettings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    color: {
      value: cdktn.stringToHclTerraform(struct!.color),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    point_size_type: {
      value: cdktn.stringToHclTerraform(struct!.pointSizeType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleChronicleDashboardChartDashboardChartVisualizationGoogleMapsConfigPointSettingsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleChronicleDashboardChartDashboardChartVisualizationGoogleMapsConfigPointSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._color !== undefined) {
      hasAnyValues = true;
      internalValueResult.color = this._color;
    }
    if (this._pointSizeType !== undefined) {
      hasAnyValues = true;
      internalValueResult.pointSizeType = this._pointSizeType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleChronicleDashboardChartDashboardChartVisualizationGoogleMapsConfigPointSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._color = undefined;
      this._pointSizeType = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._color = value.color;
      this._pointSizeType = value.pointSizeType;
    }
  }

  // color - computed: false, optional: true, required: false
  private _color?: string; 
  public get color() {
    return this.getStringAttribute('color');
  }
  public set color(value: string) {
    this._color = value;
  }
  public resetColor() {
    this._color = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get colorInput() {
    return this._color;
  }

  // point_size_type - computed: false, optional: true, required: false
  private _pointSizeType?: string; 
  public get pointSizeType() {
    return this.getStringAttribute('point_size_type');
  }
  public set pointSizeType(value: string) {
    this._pointSizeType = value;
  }
  public resetPointSizeType() {
    this._pointSizeType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pointSizeTypeInput() {
    return this._pointSizeType;
  }
}
export interface GoogleChronicleDashboardChartDashboardChartVisualizationGoogleMapsConfig {
  /**
  *  Possible values: ["PLOT_MODE_UNSPECIFIED", "PLOT_MODE_POINTS", "PLOT_MODE_HEATMAP", "PLOT_MODE_BOTH"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_chronicle_dashboard_chart#plot_mode GoogleChronicleDashboardChart#plot_mode}
  */
  readonly plotMode?: string;
  /**
  * data_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_chronicle_dashboard_chart#data_settings GoogleChronicleDashboardChart#data_settings}
  */
  readonly dataSettings?: GoogleChronicleDashboardChartDashboardChartVisualizationGoogleMapsConfigDataSettings;
  /**
  * map_position block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_chronicle_dashboard_chart#map_position GoogleChronicleDashboardChart#map_position}
  */
  readonly mapPosition?: GoogleChronicleDashboardChartDashboardChartVisualizationGoogleMapsConfigMapPosition;
  /**
  * point_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_chronicle_dashboard_chart#point_settings GoogleChronicleDashboardChart#point_settings}
  */
  readonly pointSettings?: GoogleChronicleDashboardChartDashboardChartVisualizationGoogleMapsConfigPointSettings;
}

export function googleChronicleDashboardChartDashboardChartVisualizationGoogleMapsConfigToTerraform(struct?: GoogleChronicleDashboardChartDashboardChartVisualizationGoogleMapsConfigOutputReference | GoogleChronicleDashboardChartDashboardChartVisualizationGoogleMapsConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    plot_mode: cdktn.stringToTerraform(struct!.plotMode),
    data_settings: googleChronicleDashboardChartDashboardChartVisualizationGoogleMapsConfigDataSettingsToTerraform(struct!.dataSettings),
    map_position: googleChronicleDashboardChartDashboardChartVisualizationGoogleMapsConfigMapPositionToTerraform(struct!.mapPosition),
    point_settings: googleChronicleDashboardChartDashboardChartVisualizationGoogleMapsConfigPointSettingsToTerraform(struct!.pointSettings),
  }
}


export function googleChronicleDashboardChartDashboardChartVisualizationGoogleMapsConfigToHclTerraform(struct?: GoogleChronicleDashboardChartDashboardChartVisualizationGoogleMapsConfigOutputReference | GoogleChronicleDashboardChartDashboardChartVisualizationGoogleMapsConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    plot_mode: {
      value: cdktn.stringToHclTerraform(struct!.plotMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    data_settings: {
      value: googleChronicleDashboardChartDashboardChartVisualizationGoogleMapsConfigDataSettingsToHclTerraform(struct!.dataSettings),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleChronicleDashboardChartDashboardChartVisualizationGoogleMapsConfigDataSettingsList",
    },
    map_position: {
      value: googleChronicleDashboardChartDashboardChartVisualizationGoogleMapsConfigMapPositionToHclTerraform(struct!.mapPosition),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleChronicleDashboardChartDashboardChartVisualizationGoogleMapsConfigMapPositionList",
    },
    point_settings: {
      value: googleChronicleDashboardChartDashboardChartVisualizationGoogleMapsConfigPointSettingsToHclTerraform(struct!.pointSettings),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleChronicleDashboardChartDashboardChartVisualizationGoogleMapsConfigPointSettingsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleChronicleDashboardChartDashboardChartVisualizationGoogleMapsConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleChronicleDashboardChartDashboardChartVisualizationGoogleMapsConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._plotMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.plotMode = this._plotMode;
    }
    if (this._dataSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataSettings = this._dataSettings?.internalValue;
    }
    if (this._mapPosition?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.mapPosition = this._mapPosition?.internalValue;
    }
    if (this._pointSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.pointSettings = this._pointSettings?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleChronicleDashboardChartDashboardChartVisualizationGoogleMapsConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._plotMode = undefined;
      this._dataSettings.internalValue = undefined;
      this._mapPosition.internalValue = undefined;
      this._pointSettings.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._plotMode = value.plotMode;
      this._dataSettings.internalValue = value.dataSettings;
      this._mapPosition.internalValue = value.mapPosition;
      this._pointSettings.internalValue = value.pointSettings;
    }
  }

  // plot_mode - computed: false, optional: true, required: false
  private _plotMode?: string; 
  public get plotMode() {
    return this.getStringAttribute('plot_mode');
  }
  public set plotMode(value: string) {
    this._plotMode = value;
  }
  public resetPlotMode() {
    this._plotMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get plotModeInput() {
    return this._plotMode;
  }

  // data_settings - computed: false, optional: true, required: false
  private _dataSettings = new GoogleChronicleDashboardChartDashboardChartVisualizationGoogleMapsConfigDataSettingsOutputReference(this, "data_settings");
  public get dataSettings() {
    return this._dataSettings;
  }
  public putDataSettings(value: GoogleChronicleDashboardChartDashboardChartVisualizationGoogleMapsConfigDataSettings) {
    this._dataSettings.internalValue = value;
  }
  public resetDataSettings() {
    this._dataSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataSettingsInput() {
    return this._dataSettings.internalValue;
  }

  // map_position - computed: false, optional: true, required: false
  private _mapPosition = new GoogleChronicleDashboardChartDashboardChartVisualizationGoogleMapsConfigMapPositionOutputReference(this, "map_position");
  public get mapPosition() {
    return this._mapPosition;
  }
  public putMapPosition(value: GoogleChronicleDashboardChartDashboardChartVisualizationGoogleMapsConfigMapPosition) {
    this._mapPosition.internalValue = value;
  }
  public resetMapPosition() {
    this._mapPosition.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mapPositionInput() {
    return this._mapPosition.internalValue;
  }

  // point_settings - computed: false, optional: true, required: false
  private _pointSettings = new GoogleChronicleDashboardChartDashboardChartVisualizationGoogleMapsConfigPointSettingsOutputReference(this, "point_settings");
  public get pointSettings() {
    return this._pointSettings;
  }
  public putPointSettings(value: GoogleChronicleDashboardChartDashboardChartVisualizationGoogleMapsConfigPointSettings) {
    this._pointSettings.internalValue = value;
  }
  public resetPointSettings() {
    this._pointSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pointSettingsInput() {
    return this._pointSettings.internalValue;
  }
}
export interface GoogleChronicleDashboardChartDashboardChartVisualizationLegends {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_chronicle_dashboard_chart#bottom GoogleChronicleDashboardChart#bottom}
  */
  readonly bottom?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_chronicle_dashboard_chart#id GoogleChronicleDashboardChart#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_chronicle_dashboard_chart#left GoogleChronicleDashboardChart#left}
  */
  readonly left?: number;
  /**
  *  Possible values: ["AUTO", "LEFT", "RIGHT"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_chronicle_dashboard_chart#legend_align GoogleChronicleDashboardChart#legend_align}
  */
  readonly legendAlign?: string;
  /**
  *  Possible values: ["VERTICAL", "HORIZONTAL"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_chronicle_dashboard_chart#legend_orient GoogleChronicleDashboardChart#legend_orient}
  */
  readonly legendOrient?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_chronicle_dashboard_chart#padding GoogleChronicleDashboardChart#padding}
  */
  readonly padding?: number[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_chronicle_dashboard_chart#right GoogleChronicleDashboardChart#right}
  */
  readonly right?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_chronicle_dashboard_chart#show GoogleChronicleDashboardChart#show}
  */
  readonly show?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_chronicle_dashboard_chart#top GoogleChronicleDashboardChart#top}
  */
  readonly top?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_chronicle_dashboard_chart#z GoogleChronicleDashboardChart#z}
  */
  readonly z?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_chronicle_dashboard_chart#z_level GoogleChronicleDashboardChart#z_level}
  */
  readonly zLevel?: number;
}

export function googleChronicleDashboardChartDashboardChartVisualizationLegendsToTerraform(struct?: GoogleChronicleDashboardChartDashboardChartVisualizationLegends | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bottom: cdktn.numberToTerraform(struct!.bottom),
    id: cdktn.stringToTerraform(struct!.id),
    left: cdktn.numberToTerraform(struct!.left),
    legend_align: cdktn.stringToTerraform(struct!.legendAlign),
    legend_orient: cdktn.stringToTerraform(struct!.legendOrient),
    padding: cdktn.listMapper(cdktn.numberToTerraform, false)(struct!.padding),
    right: cdktn.numberToTerraform(struct!.right),
    show: cdktn.booleanToTerraform(struct!.show),
    top: cdktn.numberToTerraform(struct!.top),
    z: cdktn.numberToTerraform(struct!.z),
    z_level: cdktn.numberToTerraform(struct!.zLevel),
  }
}


export function googleChronicleDashboardChartDashboardChartVisualizationLegendsToHclTerraform(struct?: GoogleChronicleDashboardChartDashboardChartVisualizationLegends | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bottom: {
      value: cdktn.numberToHclTerraform(struct!.bottom),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    id: {
      value: cdktn.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    left: {
      value: cdktn.numberToHclTerraform(struct!.left),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    legend_align: {
      value: cdktn.stringToHclTerraform(struct!.legendAlign),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    legend_orient: {
      value: cdktn.stringToHclTerraform(struct!.legendOrient),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    padding: {
      value: cdktn.listMapperHcl(cdktn.numberToHclTerraform, false)(struct!.padding),
      isBlock: false,
      type: "list",
      storageClassType: "numberList",
    },
    right: {
      value: cdktn.numberToHclTerraform(struct!.right),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    show: {
      value: cdktn.booleanToHclTerraform(struct!.show),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    top: {
      value: cdktn.numberToHclTerraform(struct!.top),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    z: {
      value: cdktn.numberToHclTerraform(struct!.z),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    z_level: {
      value: cdktn.numberToHclTerraform(struct!.zLevel),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleChronicleDashboardChartDashboardChartVisualizationLegendsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): GoogleChronicleDashboardChartDashboardChartVisualizationLegends | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bottom !== undefined) {
      hasAnyValues = true;
      internalValueResult.bottom = this._bottom;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._left !== undefined) {
      hasAnyValues = true;
      internalValueResult.left = this._left;
    }
    if (this._legendAlign !== undefined) {
      hasAnyValues = true;
      internalValueResult.legendAlign = this._legendAlign;
    }
    if (this._legendOrient !== undefined) {
      hasAnyValues = true;
      internalValueResult.legendOrient = this._legendOrient;
    }
    if (this._padding !== undefined) {
      hasAnyValues = true;
      internalValueResult.padding = this._padding;
    }
    if (this._right !== undefined) {
      hasAnyValues = true;
      internalValueResult.right = this._right;
    }
    if (this._show !== undefined) {
      hasAnyValues = true;
      internalValueResult.show = this._show;
    }
    if (this._top !== undefined) {
      hasAnyValues = true;
      internalValueResult.top = this._top;
    }
    if (this._z !== undefined) {
      hasAnyValues = true;
      internalValueResult.z = this._z;
    }
    if (this._zLevel !== undefined) {
      hasAnyValues = true;
      internalValueResult.zLevel = this._zLevel;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleChronicleDashboardChartDashboardChartVisualizationLegends | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._bottom = undefined;
      this._id = undefined;
      this._left = undefined;
      this._legendAlign = undefined;
      this._legendOrient = undefined;
      this._padding = undefined;
      this._right = undefined;
      this._show = undefined;
      this._top = undefined;
      this._z = undefined;
      this._zLevel = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._bottom = value.bottom;
      this._id = value.id;
      this._left = value.left;
      this._legendAlign = value.legendAlign;
      this._legendOrient = value.legendOrient;
      this._padding = value.padding;
      this._right = value.right;
      this._show = value.show;
      this._top = value.top;
      this._z = value.z;
      this._zLevel = value.zLevel;
    }
  }

  // bottom - computed: true, optional: true, required: false
  private _bottom?: number; 
  public get bottom() {
    return this.getNumberAttribute('bottom');
  }
  public set bottom(value: number) {
    this._bottom = value;
  }
  public resetBottom() {
    this._bottom = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bottomInput() {
    return this._bottom;
  }

  // id - computed: false, optional: true, required: false
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

  // left - computed: true, optional: true, required: false
  private _left?: number; 
  public get left() {
    return this.getNumberAttribute('left');
  }
  public set left(value: number) {
    this._left = value;
  }
  public resetLeft() {
    this._left = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get leftInput() {
    return this._left;
  }

  // legend_align - computed: false, optional: true, required: false
  private _legendAlign?: string; 
  public get legendAlign() {
    return this.getStringAttribute('legend_align');
  }
  public set legendAlign(value: string) {
    this._legendAlign = value;
  }
  public resetLegendAlign() {
    this._legendAlign = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get legendAlignInput() {
    return this._legendAlign;
  }

  // legend_orient - computed: false, optional: true, required: false
  private _legendOrient?: string; 
  public get legendOrient() {
    return this.getStringAttribute('legend_orient');
  }
  public set legendOrient(value: string) {
    this._legendOrient = value;
  }
  public resetLegendOrient() {
    this._legendOrient = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get legendOrientInput() {
    return this._legendOrient;
  }

  // padding - computed: true, optional: true, required: false
  private _padding?: number[]; 
  public get padding() {
    return this.getNumberListAttribute('padding');
  }
  public set padding(value: number[]) {
    this._padding = value;
  }
  public resetPadding() {
    this._padding = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get paddingInput() {
    return this._padding;
  }

  // right - computed: true, optional: true, required: false
  private _right?: number; 
  public get right() {
    return this.getNumberAttribute('right');
  }
  public set right(value: number) {
    this._right = value;
  }
  public resetRight() {
    this._right = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rightInput() {
    return this._right;
  }

  // show - computed: true, optional: true, required: false
  private _show?: boolean | cdktn.IResolvable; 
  public get show() {
    return this.getBooleanAttribute('show');
  }
  public set show(value: boolean | cdktn.IResolvable) {
    this._show = value;
  }
  public resetShow() {
    this._show = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get showInput() {
    return this._show;
  }

  // top - computed: true, optional: true, required: false
  private _top?: number; 
  public get top() {
    return this.getNumberAttribute('top');
  }
  public set top(value: number) {
    this._top = value;
  }
  public resetTop() {
    this._top = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get topInput() {
    return this._top;
  }

  // z - computed: true, optional: true, required: false
  private _z?: number; 
  public get z() {
    return this.getNumberAttribute('z');
  }
  public set z(value: number) {
    this._z = value;
  }
  public resetZ() {
    this._z = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zInput() {
    return this._z;
  }

  // z_level - computed: true, optional: true, required: false
  private _zLevel?: number; 
  public get zLevel() {
    return this.getNumberAttribute('z_level');
  }
  public set zLevel(value: number) {
    this._zLevel = value;
  }
  public resetZLevel() {
    this._zLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zLevelInput() {
    return this._zLevel;
  }
}

export class GoogleChronicleDashboardChartDashboardChartVisualizationLegendsList extends cdktn.ComplexList {
  public internalValue? : GoogleChronicleDashboardChartDashboardChartVisualizationLegends[] | cdktn.IResolvable

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
  public get(index: number): GoogleChronicleDashboardChartDashboardChartVisualizationLegendsOutputReference {
    return new GoogleChronicleDashboardChartDashboardChartVisualizationLegendsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleChronicleDashboardChartDashboardChartVisualizationMarkdownProperties {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_chronicle_dashboard_chart#background_color GoogleChronicleDashboardChart#background_color}
  */
  readonly backgroundColor?: string;
}

export function googleChronicleDashboardChartDashboardChartVisualizationMarkdownPropertiesToTerraform(struct?: GoogleChronicleDashboardChartDashboardChartVisualizationMarkdownPropertiesOutputReference | GoogleChronicleDashboardChartDashboardChartVisualizationMarkdownProperties): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    background_color: cdktn.stringToTerraform(struct!.backgroundColor),
  }
}


export function googleChronicleDashboardChartDashboardChartVisualizationMarkdownPropertiesToHclTerraform(struct?: GoogleChronicleDashboardChartDashboardChartVisualizationMarkdownPropertiesOutputReference | GoogleChronicleDashboardChartDashboardChartVisualizationMarkdownProperties): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    background_color: {
      value: cdktn.stringToHclTerraform(struct!.backgroundColor),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleChronicleDashboardChartDashboardChartVisualizationMarkdownPropertiesOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleChronicleDashboardChartDashboardChartVisualizationMarkdownProperties | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._backgroundColor !== undefined) {
      hasAnyValues = true;
      internalValueResult.backgroundColor = this._backgroundColor;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleChronicleDashboardChartDashboardChartVisualizationMarkdownProperties | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._backgroundColor = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._backgroundColor = value.backgroundColor;
    }
  }

  // background_color - computed: false, optional: true, required: false
  private _backgroundColor?: string; 
  public get backgroundColor() {
    return this.getStringAttribute('background_color');
  }
  public set backgroundColor(value: string) {
    this._backgroundColor = value;
  }
  public resetBackgroundColor() {
    this._backgroundColor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backgroundColorInput() {
    return this._backgroundColor;
  }
}
export interface GoogleChronicleDashboardChartDashboardChartVisualizationMarkdown {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_chronicle_dashboard_chart#content GoogleChronicleDashboardChart#content}
  */
  readonly content: string;
  /**
  * properties block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_chronicle_dashboard_chart#properties GoogleChronicleDashboardChart#properties}
  */
  readonly properties?: GoogleChronicleDashboardChartDashboardChartVisualizationMarkdownProperties;
}

export function googleChronicleDashboardChartDashboardChartVisualizationMarkdownToTerraform(struct?: GoogleChronicleDashboardChartDashboardChartVisualizationMarkdownOutputReference | GoogleChronicleDashboardChartDashboardChartVisualizationMarkdown): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    content: cdktn.stringToTerraform(struct!.content),
    properties: googleChronicleDashboardChartDashboardChartVisualizationMarkdownPropertiesToTerraform(struct!.properties),
  }
}


export function googleChronicleDashboardChartDashboardChartVisualizationMarkdownToHclTerraform(struct?: GoogleChronicleDashboardChartDashboardChartVisualizationMarkdownOutputReference | GoogleChronicleDashboardChartDashboardChartVisualizationMarkdown): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    content: {
      value: cdktn.stringToHclTerraform(struct!.content),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    properties: {
      value: googleChronicleDashboardChartDashboardChartVisualizationMarkdownPropertiesToHclTerraform(struct!.properties),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleChronicleDashboardChartDashboardChartVisualizationMarkdownPropertiesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleChronicleDashboardChartDashboardChartVisualizationMarkdownOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleChronicleDashboardChartDashboardChartVisualizationMarkdown | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._content !== undefined) {
      hasAnyValues = true;
      internalValueResult.content = this._content;
    }
    if (this._properties?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.properties = this._properties?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleChronicleDashboardChartDashboardChartVisualizationMarkdown | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._content = undefined;
      this._properties.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._content = value.content;
      this._properties.internalValue = value.properties;
    }
  }

  // content - computed: false, optional: false, required: true
  private _content?: string; 
  public get content() {
    return this.getStringAttribute('content');
  }
  public set content(value: string) {
    this._content = value;
  }
  // Temporarily expose input value. Use with caution.
  public get contentInput() {
    return this._content;
  }

  // properties - computed: false, optional: true, required: false
  private _properties = new GoogleChronicleDashboardChartDashboardChartVisualizationMarkdownPropertiesOutputReference(this, "properties");
  public get properties() {
    return this._properties;
  }
  public putProperties(value: GoogleChronicleDashboardChartDashboardChartVisualizationMarkdownProperties) {
    this._properties.internalValue = value;
  }
  public resetProperties() {
    this._properties.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get propertiesInput() {
    return this._properties.internalValue;
  }
}
export interface GoogleChronicleDashboardChartDashboardChartVisualizationSeriesAreaStyle {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_chronicle_dashboard_chart#color GoogleChronicleDashboardChart#color}
  */
  readonly color?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_chronicle_dashboard_chart#opacity GoogleChronicleDashboardChart#opacity}
  */
  readonly opacity?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_chronicle_dashboard_chart#origin GoogleChronicleDashboardChart#origin}
  */
  readonly origin?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_chronicle_dashboard_chart#shadow_blur GoogleChronicleDashboardChart#shadow_blur}
  */
  readonly shadowBlur?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_chronicle_dashboard_chart#shadow_color GoogleChronicleDashboardChart#shadow_color}
  */
  readonly shadowColor?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_chronicle_dashboard_chart#shadow_offset_x GoogleChronicleDashboardChart#shadow_offset_x}
  */
  readonly shadowOffsetX?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_chronicle_dashboard_chart#shadow_offset_y GoogleChronicleDashboardChart#shadow_offset_y}
  */
  readonly shadowOffsetY?: number;
}

export function googleChronicleDashboardChartDashboardChartVisualizationSeriesAreaStyleToTerraform(struct?: GoogleChronicleDashboardChartDashboardChartVisualizationSeriesAreaStyleOutputReference | GoogleChronicleDashboardChartDashboardChartVisualizationSeriesAreaStyle): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    color: cdktn.stringToTerraform(struct!.color),
    opacity: cdktn.numberToTerraform(struct!.opacity),
    origin: cdktn.stringToTerraform(struct!.origin),
    shadow_blur: cdktn.numberToTerraform(struct!.shadowBlur),
    shadow_color: cdktn.stringToTerraform(struct!.shadowColor),
    shadow_offset_x: cdktn.numberToTerraform(struct!.shadowOffsetX),
    shadow_offset_y: cdktn.numberToTerraform(struct!.shadowOffsetY),
  }
}


export function googleChronicleDashboardChartDashboardChartVisualizationSeriesAreaStyleToHclTerraform(struct?: GoogleChronicleDashboardChartDashboardChartVisualizationSeriesAreaStyleOutputReference | GoogleChronicleDashboardChartDashboardChartVisualizationSeriesAreaStyle): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    color: {
      value: cdktn.stringToHclTerraform(struct!.color),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    opacity: {
      value: cdktn.numberToHclTerraform(struct!.opacity),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    origin: {
      value: cdktn.stringToHclTerraform(struct!.origin),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    shadow_blur: {
      value: cdktn.numberToHclTerraform(struct!.shadowBlur),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    shadow_color: {
      value: cdktn.stringToHclTerraform(struct!.shadowColor),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    shadow_offset_x: {
      value: cdktn.numberToHclTerraform(struct!.shadowOffsetX),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    shadow_offset_y: {
      value: cdktn.numberToHclTerraform(struct!.shadowOffsetY),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleChronicleDashboardChartDashboardChartVisualizationSeriesAreaStyleOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleChronicleDashboardChartDashboardChartVisualizationSeriesAreaStyle | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._color !== undefined) {
      hasAnyValues = true;
      internalValueResult.color = this._color;
    }
    if (this._opacity !== undefined) {
      hasAnyValues = true;
      internalValueResult.opacity = this._opacity;
    }
    if (this._origin !== undefined) {
      hasAnyValues = true;
      internalValueResult.origin = this._origin;
    }
    if (this._shadowBlur !== undefined) {
      hasAnyValues = true;
      internalValueResult.shadowBlur = this._shadowBlur;
    }
    if (this._shadowColor !== undefined) {
      hasAnyValues = true;
      internalValueResult.shadowColor = this._shadowColor;
    }
    if (this._shadowOffsetX !== undefined) {
      hasAnyValues = true;
      internalValueResult.shadowOffsetX = this._shadowOffsetX;
    }
    if (this._shadowOffsetY !== undefined) {
      hasAnyValues = true;
      internalValueResult.shadowOffsetY = this._shadowOffsetY;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleChronicleDashboardChartDashboardChartVisualizationSeriesAreaStyle | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._color = undefined;
      this._opacity = undefined;
      this._origin = undefined;
      this._shadowBlur = undefined;
      this._shadowColor = undefined;
      this._shadowOffsetX = undefined;
      this._shadowOffsetY = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._color = value.color;
      this._opacity = value.opacity;
      this._origin = value.origin;
      this._shadowBlur = value.shadowBlur;
      this._shadowColor = value.shadowColor;
      this._shadowOffsetX = value.shadowOffsetX;
      this._shadowOffsetY = value.shadowOffsetY;
    }
  }

  // color - computed: false, optional: true, required: false
  private _color?: string; 
  public get color() {
    return this.getStringAttribute('color');
  }
  public set color(value: string) {
    this._color = value;
  }
  public resetColor() {
    this._color = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get colorInput() {
    return this._color;
  }

  // opacity - computed: false, optional: true, required: false
  private _opacity?: number; 
  public get opacity() {
    return this.getNumberAttribute('opacity');
  }
  public set opacity(value: number) {
    this._opacity = value;
  }
  public resetOpacity() {
    this._opacity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get opacityInput() {
    return this._opacity;
  }

  // origin - computed: false, optional: true, required: false
  private _origin?: string; 
  public get origin() {
    return this.getStringAttribute('origin');
  }
  public set origin(value: string) {
    this._origin = value;
  }
  public resetOrigin() {
    this._origin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get originInput() {
    return this._origin;
  }

  // shadow_blur - computed: false, optional: true, required: false
  private _shadowBlur?: number; 
  public get shadowBlur() {
    return this.getNumberAttribute('shadow_blur');
  }
  public set shadowBlur(value: number) {
    this._shadowBlur = value;
  }
  public resetShadowBlur() {
    this._shadowBlur = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shadowBlurInput() {
    return this._shadowBlur;
  }

  // shadow_color - computed: false, optional: true, required: false
  private _shadowColor?: string; 
  public get shadowColor() {
    return this.getStringAttribute('shadow_color');
  }
  public set shadowColor(value: string) {
    this._shadowColor = value;
  }
  public resetShadowColor() {
    this._shadowColor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shadowColorInput() {
    return this._shadowColor;
  }

  // shadow_offset_x - computed: false, optional: true, required: false
  private _shadowOffsetX?: number; 
  public get shadowOffsetX() {
    return this.getNumberAttribute('shadow_offset_x');
  }
  public set shadowOffsetX(value: number) {
    this._shadowOffsetX = value;
  }
  public resetShadowOffsetX() {
    this._shadowOffsetX = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shadowOffsetXInput() {
    return this._shadowOffsetX;
  }

  // shadow_offset_y - computed: false, optional: true, required: false
  private _shadowOffsetY?: number; 
  public get shadowOffsetY() {
    return this.getNumberAttribute('shadow_offset_y');
  }
  public set shadowOffsetY(value: number) {
    this._shadowOffsetY = value;
  }
  public resetShadowOffsetY() {
    this._shadowOffsetY = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shadowOffsetYInput() {
    return this._shadowOffsetY;
  }
}
export interface GoogleChronicleDashboardChartDashboardChartVisualizationSeriesDataLabel {
  /**
  * Whether to show data label.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_chronicle_dashboard_chart#show GoogleChronicleDashboardChart#show}
  */
  readonly show?: boolean | cdktn.IResolvable;
}

export function googleChronicleDashboardChartDashboardChartVisualizationSeriesDataLabelToTerraform(struct?: GoogleChronicleDashboardChartDashboardChartVisualizationSeriesDataLabelOutputReference | GoogleChronicleDashboardChartDashboardChartVisualizationSeriesDataLabel): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    show: cdktn.booleanToTerraform(struct!.show),
  }
}


export function googleChronicleDashboardChartDashboardChartVisualizationSeriesDataLabelToHclTerraform(struct?: GoogleChronicleDashboardChartDashboardChartVisualizationSeriesDataLabelOutputReference | GoogleChronicleDashboardChartDashboardChartVisualizationSeriesDataLabel): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    show: {
      value: cdktn.booleanToHclTerraform(struct!.show),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleChronicleDashboardChartDashboardChartVisualizationSeriesDataLabelOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleChronicleDashboardChartDashboardChartVisualizationSeriesDataLabel | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._show !== undefined) {
      hasAnyValues = true;
      internalValueResult.show = this._show;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleChronicleDashboardChartDashboardChartVisualizationSeriesDataLabel | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._show = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._show = value.show;
    }
  }

  // show - computed: false, optional: true, required: false
  private _show?: boolean | cdktn.IResolvable; 
  public get show() {
    return this.getBooleanAttribute('show');
  }
  public set show(value: boolean | cdktn.IResolvable) {
    this._show = value;
  }
  public resetShow() {
    this._show = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get showInput() {
    return this._show;
  }
}
export interface GoogleChronicleDashboardChartDashboardChartVisualizationSeriesEncode {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_chronicle_dashboard_chart#item_name GoogleChronicleDashboardChart#item_name}
  */
  readonly itemName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_chronicle_dashboard_chart#value GoogleChronicleDashboardChart#value}
  */
  readonly value?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_chronicle_dashboard_chart#x GoogleChronicleDashboardChart#x}
  */
  readonly x?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_chronicle_dashboard_chart#y GoogleChronicleDashboardChart#y}
  */
  readonly y?: string;
}

export function googleChronicleDashboardChartDashboardChartVisualizationSeriesEncodeToTerraform(struct?: GoogleChronicleDashboardChartDashboardChartVisualizationSeriesEncodeOutputReference | GoogleChronicleDashboardChartDashboardChartVisualizationSeriesEncode): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    item_name: cdktn.stringToTerraform(struct!.itemName),
    value: cdktn.stringToTerraform(struct!.value),
    x: cdktn.stringToTerraform(struct!.x),
    y: cdktn.stringToTerraform(struct!.y),
  }
}


export function googleChronicleDashboardChartDashboardChartVisualizationSeriesEncodeToHclTerraform(struct?: GoogleChronicleDashboardChartDashboardChartVisualizationSeriesEncodeOutputReference | GoogleChronicleDashboardChartDashboardChartVisualizationSeriesEncode): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    item_name: {
      value: cdktn.stringToHclTerraform(struct!.itemName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktn.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    x: {
      value: cdktn.stringToHclTerraform(struct!.x),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    y: {
      value: cdktn.stringToHclTerraform(struct!.y),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleChronicleDashboardChartDashboardChartVisualizationSeriesEncodeOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleChronicleDashboardChartDashboardChartVisualizationSeriesEncode | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._itemName !== undefined) {
      hasAnyValues = true;
      internalValueResult.itemName = this._itemName;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    if (this._x !== undefined) {
      hasAnyValues = true;
      internalValueResult.x = this._x;
    }
    if (this._y !== undefined) {
      hasAnyValues = true;
      internalValueResult.y = this._y;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleChronicleDashboardChartDashboardChartVisualizationSeriesEncode | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._itemName = undefined;
      this._value = undefined;
      this._x = undefined;
      this._y = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._itemName = value.itemName;
      this._value = value.value;
      this._x = value.x;
      this._y = value.y;
    }
  }

  // item_name - computed: false, optional: true, required: false
  private _itemName?: string; 
  public get itemName() {
    return this.getStringAttribute('item_name');
  }
  public set itemName(value: string) {
    this._itemName = value;
  }
  public resetItemName() {
    this._itemName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get itemNameInput() {
    return this._itemName;
  }

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }

  // x - computed: false, optional: true, required: false
  private _x?: string; 
  public get x() {
    return this.getStringAttribute('x');
  }
  public set x(value: string) {
    this._x = value;
  }
  public resetX() {
    this._x = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get xInput() {
    return this._x;
  }

  // y - computed: false, optional: true, required: false
  private _y?: string; 
  public get y() {
    return this.getStringAttribute('y');
  }
  public set y(value: string) {
    this._y = value;
  }
  public resetY() {
    this._y = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get yInput() {
    return this._y;
  }
}
export interface GoogleChronicleDashboardChartDashboardChartVisualizationSeriesGaugeConfigBaseValue {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_chronicle_dashboard_chart#color GoogleChronicleDashboardChart#color}
  */
  readonly color?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_chronicle_dashboard_chart#value GoogleChronicleDashboardChart#value}
  */
  readonly value?: number;
}

export function googleChronicleDashboardChartDashboardChartVisualizationSeriesGaugeConfigBaseValueToTerraform(struct?: GoogleChronicleDashboardChartDashboardChartVisualizationSeriesGaugeConfigBaseValueOutputReference | GoogleChronicleDashboardChartDashboardChartVisualizationSeriesGaugeConfigBaseValue): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    color: cdktn.stringToTerraform(struct!.color),
    value: cdktn.numberToTerraform(struct!.value),
  }
}


export function googleChronicleDashboardChartDashboardChartVisualizationSeriesGaugeConfigBaseValueToHclTerraform(struct?: GoogleChronicleDashboardChartDashboardChartVisualizationSeriesGaugeConfigBaseValueOutputReference | GoogleChronicleDashboardChartDashboardChartVisualizationSeriesGaugeConfigBaseValue): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    color: {
      value: cdktn.stringToHclTerraform(struct!.color),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktn.numberToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleChronicleDashboardChartDashboardChartVisualizationSeriesGaugeConfigBaseValueOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleChronicleDashboardChartDashboardChartVisualizationSeriesGaugeConfigBaseValue | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._color !== undefined) {
      hasAnyValues = true;
      internalValueResult.color = this._color;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleChronicleDashboardChartDashboardChartVisualizationSeriesGaugeConfigBaseValue | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._color = undefined;
      this._value = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._color = value.color;
      this._value = value.value;
    }
  }

  // color - computed: false, optional: true, required: false
  private _color?: string; 
  public get color() {
    return this.getStringAttribute('color');
  }
  public set color(value: string) {
    this._color = value;
  }
  public resetColor() {
    this._color = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get colorInput() {
    return this._color;
  }

  // value - computed: false, optional: true, required: false
  private _value?: number; 
  public get value() {
    return this.getNumberAttribute('value');
  }
  public set value(value: number) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}
export interface GoogleChronicleDashboardChartDashboardChartVisualizationSeriesGaugeConfigLimitValue {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_chronicle_dashboard_chart#color GoogleChronicleDashboardChart#color}
  */
  readonly color?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_chronicle_dashboard_chart#value GoogleChronicleDashboardChart#value}
  */
  readonly value?: number;
}

export function googleChronicleDashboardChartDashboardChartVisualizationSeriesGaugeConfigLimitValueToTerraform(struct?: GoogleChronicleDashboardChartDashboardChartVisualizationSeriesGaugeConfigLimitValueOutputReference | GoogleChronicleDashboardChartDashboardChartVisualizationSeriesGaugeConfigLimitValue): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    color: cdktn.stringToTerraform(struct!.color),
    value: cdktn.numberToTerraform(struct!.value),
  }
}


export function googleChronicleDashboardChartDashboardChartVisualizationSeriesGaugeConfigLimitValueToHclTerraform(struct?: GoogleChronicleDashboardChartDashboardChartVisualizationSeriesGaugeConfigLimitValueOutputReference | GoogleChronicleDashboardChartDashboardChartVisualizationSeriesGaugeConfigLimitValue): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    color: {
      value: cdktn.stringToHclTerraform(struct!.color),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktn.numberToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleChronicleDashboardChartDashboardChartVisualizationSeriesGaugeConfigLimitValueOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleChronicleDashboardChartDashboardChartVisualizationSeriesGaugeConfigLimitValue | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._color !== undefined) {
      hasAnyValues = true;
      internalValueResult.color = this._color;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleChronicleDashboardChartDashboardChartVisualizationSeriesGaugeConfigLimitValue | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._color = undefined;
      this._value = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._color = value.color;
      this._value = value.value;
    }
  }

  // color - computed: false, optional: true, required: false
  private _color?: string; 
  public get color() {
    return this.getStringAttribute('color');
  }
  public set color(value: string) {
    this._color = value;
  }
  public resetColor() {
    this._color = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get colorInput() {
    return this._color;
  }

  // value - computed: false, optional: true, required: false
  private _value?: number; 
  public get value() {
    return this.getNumberAttribute('value');
  }
  public set value(value: number) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}
export interface GoogleChronicleDashboardChartDashboardChartVisualizationSeriesGaugeConfigThresholdValues {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_chronicle_dashboard_chart#color GoogleChronicleDashboardChart#color}
  */
  readonly color?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_chronicle_dashboard_chart#value GoogleChronicleDashboardChart#value}
  */
  readonly value?: number;
}

export function googleChronicleDashboardChartDashboardChartVisualizationSeriesGaugeConfigThresholdValuesToTerraform(struct?: GoogleChronicleDashboardChartDashboardChartVisualizationSeriesGaugeConfigThresholdValues | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    color: cdktn.stringToTerraform(struct!.color),
    value: cdktn.numberToTerraform(struct!.value),
  }
}


export function googleChronicleDashboardChartDashboardChartVisualizationSeriesGaugeConfigThresholdValuesToHclTerraform(struct?: GoogleChronicleDashboardChartDashboardChartVisualizationSeriesGaugeConfigThresholdValues | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    color: {
      value: cdktn.stringToHclTerraform(struct!.color),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktn.numberToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleChronicleDashboardChartDashboardChartVisualizationSeriesGaugeConfigThresholdValuesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): GoogleChronicleDashboardChartDashboardChartVisualizationSeriesGaugeConfigThresholdValues | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._color !== undefined) {
      hasAnyValues = true;
      internalValueResult.color = this._color;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleChronicleDashboardChartDashboardChartVisualizationSeriesGaugeConfigThresholdValues | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._color = undefined;
      this._value = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._color = value.color;
      this._value = value.value;
    }
  }

  // color - computed: false, optional: true, required: false
  private _color?: string; 
  public get color() {
    return this.getStringAttribute('color');
  }
  public set color(value: string) {
    this._color = value;
  }
  public resetColor() {
    this._color = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get colorInput() {
    return this._color;
  }

  // value - computed: false, optional: true, required: false
  private _value?: number; 
  public get value() {
    return this.getNumberAttribute('value');
  }
  public set value(value: number) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class GoogleChronicleDashboardChartDashboardChartVisualizationSeriesGaugeConfigThresholdValuesList extends cdktn.ComplexList {
  public internalValue? : GoogleChronicleDashboardChartDashboardChartVisualizationSeriesGaugeConfigThresholdValues[] | cdktn.IResolvable

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
  public get(index: number): GoogleChronicleDashboardChartDashboardChartVisualizationSeriesGaugeConfigThresholdValuesOutputReference {
    return new GoogleChronicleDashboardChartDashboardChartVisualizationSeriesGaugeConfigThresholdValuesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleChronicleDashboardChartDashboardChartVisualizationSeriesGaugeConfig {
  /**
  * base_value block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_chronicle_dashboard_chart#base_value GoogleChronicleDashboardChart#base_value}
  */
  readonly baseValue?: GoogleChronicleDashboardChartDashboardChartVisualizationSeriesGaugeConfigBaseValue;
  /**
  * limit_value block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_chronicle_dashboard_chart#limit_value GoogleChronicleDashboardChart#limit_value}
  */
  readonly limitValue?: GoogleChronicleDashboardChartDashboardChartVisualizationSeriesGaugeConfigLimitValue;
  /**
  * threshold_values block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_chronicle_dashboard_chart#threshold_values GoogleChronicleDashboardChart#threshold_values}
  */
  readonly thresholdValues?: GoogleChronicleDashboardChartDashboardChartVisualizationSeriesGaugeConfigThresholdValues[] | cdktn.IResolvable;
}

export function googleChronicleDashboardChartDashboardChartVisualizationSeriesGaugeConfigToTerraform(struct?: GoogleChronicleDashboardChartDashboardChartVisualizationSeriesGaugeConfigOutputReference | GoogleChronicleDashboardChartDashboardChartVisualizationSeriesGaugeConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    base_value: googleChronicleDashboardChartDashboardChartVisualizationSeriesGaugeConfigBaseValueToTerraform(struct!.baseValue),
    limit_value: googleChronicleDashboardChartDashboardChartVisualizationSeriesGaugeConfigLimitValueToTerraform(struct!.limitValue),
    threshold_values: cdktn.listMapper(googleChronicleDashboardChartDashboardChartVisualizationSeriesGaugeConfigThresholdValuesToTerraform, true)(struct!.thresholdValues),
  }
}


export function googleChronicleDashboardChartDashboardChartVisualizationSeriesGaugeConfigToHclTerraform(struct?: GoogleChronicleDashboardChartDashboardChartVisualizationSeriesGaugeConfigOutputReference | GoogleChronicleDashboardChartDashboardChartVisualizationSeriesGaugeConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    base_value: {
      value: googleChronicleDashboardChartDashboardChartVisualizationSeriesGaugeConfigBaseValueToHclTerraform(struct!.baseValue),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleChronicleDashboardChartDashboardChartVisualizationSeriesGaugeConfigBaseValueList",
    },
    limit_value: {
      value: googleChronicleDashboardChartDashboardChartVisualizationSeriesGaugeConfigLimitValueToHclTerraform(struct!.limitValue),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleChronicleDashboardChartDashboardChartVisualizationSeriesGaugeConfigLimitValueList",
    },
    threshold_values: {
      value: cdktn.listMapperHcl(googleChronicleDashboardChartDashboardChartVisualizationSeriesGaugeConfigThresholdValuesToHclTerraform, true)(struct!.thresholdValues),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleChronicleDashboardChartDashboardChartVisualizationSeriesGaugeConfigThresholdValuesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleChronicleDashboardChartDashboardChartVisualizationSeriesGaugeConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleChronicleDashboardChartDashboardChartVisualizationSeriesGaugeConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._baseValue?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.baseValue = this._baseValue?.internalValue;
    }
    if (this._limitValue?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.limitValue = this._limitValue?.internalValue;
    }
    if (this._thresholdValues?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.thresholdValues = this._thresholdValues?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleChronicleDashboardChartDashboardChartVisualizationSeriesGaugeConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._baseValue.internalValue = undefined;
      this._limitValue.internalValue = undefined;
      this._thresholdValues.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._baseValue.internalValue = value.baseValue;
      this._limitValue.internalValue = value.limitValue;
      this._thresholdValues.internalValue = value.thresholdValues;
    }
  }

  // base_value - computed: false, optional: true, required: false
  private _baseValue = new GoogleChronicleDashboardChartDashboardChartVisualizationSeriesGaugeConfigBaseValueOutputReference(this, "base_value");
  public get baseValue() {
    return this._baseValue;
  }
  public putBaseValue(value: GoogleChronicleDashboardChartDashboardChartVisualizationSeriesGaugeConfigBaseValue) {
    this._baseValue.internalValue = value;
  }
  public resetBaseValue() {
    this._baseValue.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get baseValueInput() {
    return this._baseValue.internalValue;
  }

  // limit_value - computed: false, optional: true, required: false
  private _limitValue = new GoogleChronicleDashboardChartDashboardChartVisualizationSeriesGaugeConfigLimitValueOutputReference(this, "limit_value");
  public get limitValue() {
    return this._limitValue;
  }
  public putLimitValue(value: GoogleChronicleDashboardChartDashboardChartVisualizationSeriesGaugeConfigLimitValue) {
    this._limitValue.internalValue = value;
  }
  public resetLimitValue() {
    this._limitValue.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get limitValueInput() {
    return this._limitValue.internalValue;
  }

  // threshold_values - computed: false, optional: true, required: false
  private _thresholdValues = new GoogleChronicleDashboardChartDashboardChartVisualizationSeriesGaugeConfigThresholdValuesList(this, "threshold_values", false);
  public get thresholdValues() {
    return this._thresholdValues;
  }
  public putThresholdValues(value: GoogleChronicleDashboardChartDashboardChartVisualizationSeriesGaugeConfigThresholdValues[] | cdktn.IResolvable) {
    this._thresholdValues.internalValue = value;
  }
  public resetThresholdValues() {
    this._thresholdValues.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get thresholdValuesInput() {
    return this._thresholdValues.internalValue;
  }
}
export interface GoogleChronicleDashboardChartDashboardChartVisualizationSeriesItemColorsColorsValue {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_chronicle_dashboard_chart#color GoogleChronicleDashboardChart#color}
  */
  readonly color?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_chronicle_dashboard_chart#label GoogleChronicleDashboardChart#label}
  */
  readonly label?: string;
}

export function googleChronicleDashboardChartDashboardChartVisualizationSeriesItemColorsColorsValueToTerraform(struct?: GoogleChronicleDashboardChartDashboardChartVisualizationSeriesItemColorsColorsValueOutputReference | GoogleChronicleDashboardChartDashboardChartVisualizationSeriesItemColorsColorsValue): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    color: cdktn.stringToTerraform(struct!.color),
    label: cdktn.stringToTerraform(struct!.label),
  }
}


export function googleChronicleDashboardChartDashboardChartVisualizationSeriesItemColorsColorsValueToHclTerraform(struct?: GoogleChronicleDashboardChartDashboardChartVisualizationSeriesItemColorsColorsValueOutputReference | GoogleChronicleDashboardChartDashboardChartVisualizationSeriesItemColorsColorsValue): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    color: {
      value: cdktn.stringToHclTerraform(struct!.color),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    label: {
      value: cdktn.stringToHclTerraform(struct!.label),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleChronicleDashboardChartDashboardChartVisualizationSeriesItemColorsColorsValueOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleChronicleDashboardChartDashboardChartVisualizationSeriesItemColorsColorsValue | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._color !== undefined) {
      hasAnyValues = true;
      internalValueResult.color = this._color;
    }
    if (this._label !== undefined) {
      hasAnyValues = true;
      internalValueResult.label = this._label;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleChronicleDashboardChartDashboardChartVisualizationSeriesItemColorsColorsValue | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._color = undefined;
      this._label = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._color = value.color;
      this._label = value.label;
    }
  }

  // color - computed: false, optional: true, required: false
  private _color?: string; 
  public get color() {
    return this.getStringAttribute('color');
  }
  public set color(value: string) {
    this._color = value;
  }
  public resetColor() {
    this._color = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get colorInput() {
    return this._color;
  }

  // label - computed: false, optional: true, required: false
  private _label?: string; 
  public get label() {
    return this.getStringAttribute('label');
  }
  public set label(value: string) {
    this._label = value;
  }
  public resetLabel() {
    this._label = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelInput() {
    return this._label;
  }
}
export interface GoogleChronicleDashboardChartDashboardChartVisualizationSeriesItemColorsColors {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_chronicle_dashboard_chart#key GoogleChronicleDashboardChart#key}
  */
  readonly key?: string;
  /**
  * value block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_chronicle_dashboard_chart#value GoogleChronicleDashboardChart#value}
  */
  readonly value?: GoogleChronicleDashboardChartDashboardChartVisualizationSeriesItemColorsColorsValue;
}

export function googleChronicleDashboardChartDashboardChartVisualizationSeriesItemColorsColorsToTerraform(struct?: GoogleChronicleDashboardChartDashboardChartVisualizationSeriesItemColorsColors | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktn.stringToTerraform(struct!.key),
    value: googleChronicleDashboardChartDashboardChartVisualizationSeriesItemColorsColorsValueToTerraform(struct!.value),
  }
}


export function googleChronicleDashboardChartDashboardChartVisualizationSeriesItemColorsColorsToHclTerraform(struct?: GoogleChronicleDashboardChartDashboardChartVisualizationSeriesItemColorsColors | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktn.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: googleChronicleDashboardChartDashboardChartVisualizationSeriesItemColorsColorsValueToHclTerraform(struct!.value),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleChronicleDashboardChartDashboardChartVisualizationSeriesItemColorsColorsValueList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleChronicleDashboardChartDashboardChartVisualizationSeriesItemColorsColorsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): GoogleChronicleDashboardChartDashboardChartVisualizationSeriesItemColorsColors | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._value?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleChronicleDashboardChartDashboardChartVisualizationSeriesItemColorsColors | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._value.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._value.internalValue = value.value;
    }
  }

  // key - computed: false, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // value - computed: false, optional: true, required: false
  private _value = new GoogleChronicleDashboardChartDashboardChartVisualizationSeriesItemColorsColorsValueOutputReference(this, "value");
  public get value() {
    return this._value;
  }
  public putValue(value: GoogleChronicleDashboardChartDashboardChartVisualizationSeriesItemColorsColorsValue) {
    this._value.internalValue = value;
  }
  public resetValue() {
    this._value.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value.internalValue;
  }
}

export class GoogleChronicleDashboardChartDashboardChartVisualizationSeriesItemColorsColorsList extends cdktn.ComplexList {
  public internalValue? : GoogleChronicleDashboardChartDashboardChartVisualizationSeriesItemColorsColors[] | cdktn.IResolvable

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
  public get(index: number): GoogleChronicleDashboardChartDashboardChartVisualizationSeriesItemColorsColorsOutputReference {
    return new GoogleChronicleDashboardChartDashboardChartVisualizationSeriesItemColorsColorsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleChronicleDashboardChartDashboardChartVisualizationSeriesItemColors {
  /**
  * colors block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_chronicle_dashboard_chart#colors GoogleChronicleDashboardChart#colors}
  */
  readonly colors?: GoogleChronicleDashboardChartDashboardChartVisualizationSeriesItemColorsColors[] | cdktn.IResolvable;
}

export function googleChronicleDashboardChartDashboardChartVisualizationSeriesItemColorsToTerraform(struct?: GoogleChronicleDashboardChartDashboardChartVisualizationSeriesItemColorsOutputReference | GoogleChronicleDashboardChartDashboardChartVisualizationSeriesItemColors): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    colors: cdktn.listMapper(googleChronicleDashboardChartDashboardChartVisualizationSeriesItemColorsColorsToTerraform, true)(struct!.colors),
  }
}


export function googleChronicleDashboardChartDashboardChartVisualizationSeriesItemColorsToHclTerraform(struct?: GoogleChronicleDashboardChartDashboardChartVisualizationSeriesItemColorsOutputReference | GoogleChronicleDashboardChartDashboardChartVisualizationSeriesItemColors): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    colors: {
      value: cdktn.listMapperHcl(googleChronicleDashboardChartDashboardChartVisualizationSeriesItemColorsColorsToHclTerraform, true)(struct!.colors),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleChronicleDashboardChartDashboardChartVisualizationSeriesItemColorsColorsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleChronicleDashboardChartDashboardChartVisualizationSeriesItemColorsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleChronicleDashboardChartDashboardChartVisualizationSeriesItemColors | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._colors?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.colors = this._colors?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleChronicleDashboardChartDashboardChartVisualizationSeriesItemColors | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._colors.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._colors.internalValue = value.colors;
    }
  }

  // colors - computed: false, optional: true, required: false
  private _colors = new GoogleChronicleDashboardChartDashboardChartVisualizationSeriesItemColorsColorsList(this, "colors", false);
  public get colors() {
    return this._colors;
  }
  public putColors(value: GoogleChronicleDashboardChartDashboardChartVisualizationSeriesItemColorsColors[] | cdktn.IResolvable) {
    this._colors.internalValue = value;
  }
  public resetColors() {
    this._colors.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get colorsInput() {
    return this._colors.internalValue;
  }
}
export interface GoogleChronicleDashboardChartDashboardChartVisualizationSeriesItemStyle {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_chronicle_dashboard_chart#border_color GoogleChronicleDashboardChart#border_color}
  */
  readonly borderColor?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_chronicle_dashboard_chart#border_width GoogleChronicleDashboardChart#border_width}
  */
  readonly borderWidth?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_chronicle_dashboard_chart#color GoogleChronicleDashboardChart#color}
  */
  readonly color?: string;
}

export function googleChronicleDashboardChartDashboardChartVisualizationSeriesItemStyleToTerraform(struct?: GoogleChronicleDashboardChartDashboardChartVisualizationSeriesItemStyleOutputReference | GoogleChronicleDashboardChartDashboardChartVisualizationSeriesItemStyle): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    border_color: cdktn.stringToTerraform(struct!.borderColor),
    border_width: cdktn.numberToTerraform(struct!.borderWidth),
    color: cdktn.stringToTerraform(struct!.color),
  }
}


export function googleChronicleDashboardChartDashboardChartVisualizationSeriesItemStyleToHclTerraform(struct?: GoogleChronicleDashboardChartDashboardChartVisualizationSeriesItemStyleOutputReference | GoogleChronicleDashboardChartDashboardChartVisualizationSeriesItemStyle): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    border_color: {
      value: cdktn.stringToHclTerraform(struct!.borderColor),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    border_width: {
      value: cdktn.numberToHclTerraform(struct!.borderWidth),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    color: {
      value: cdktn.stringToHclTerraform(struct!.color),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleChronicleDashboardChartDashboardChartVisualizationSeriesItemStyleOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleChronicleDashboardChartDashboardChartVisualizationSeriesItemStyle | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._borderColor !== undefined) {
      hasAnyValues = true;
      internalValueResult.borderColor = this._borderColor;
    }
    if (this._borderWidth !== undefined) {
      hasAnyValues = true;
      internalValueResult.borderWidth = this._borderWidth;
    }
    if (this._color !== undefined) {
      hasAnyValues = true;
      internalValueResult.color = this._color;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleChronicleDashboardChartDashboardChartVisualizationSeriesItemStyle | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._borderColor = undefined;
      this._borderWidth = undefined;
      this._color = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._borderColor = value.borderColor;
      this._borderWidth = value.borderWidth;
      this._color = value.color;
    }
  }

  // border_color - computed: false, optional: true, required: false
  private _borderColor?: string; 
  public get borderColor() {
    return this.getStringAttribute('border_color');
  }
  public set borderColor(value: string) {
    this._borderColor = value;
  }
  public resetBorderColor() {
    this._borderColor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get borderColorInput() {
    return this._borderColor;
  }

  // border_width - computed: false, optional: true, required: false
  private _borderWidth?: number; 
  public get borderWidth() {
    return this.getNumberAttribute('border_width');
  }
  public set borderWidth(value: number) {
    this._borderWidth = value;
  }
  public resetBorderWidth() {
    this._borderWidth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get borderWidthInput() {
    return this._borderWidth;
  }

  // color - computed: false, optional: true, required: false
  private _color?: string; 
  public get color() {
    return this.getStringAttribute('color');
  }
  public set color(value: string) {
    this._color = value;
  }
  public resetColor() {
    this._color = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get colorInput() {
    return this._color;
  }
}
export interface GoogleChronicleDashboardChartDashboardChartVisualizationSeriesMetricTrendConfig {
  /**
  *  Possible values: ["METRIC_DISPLAY_TREND_UNSPECIFIED", "METRIC_DISPLAY_TREND_ABSOLUTE_VALUE", "METRIC_DISPLAY_TREND_PERCENTAGE", "METRIC_DISPLAY_TREND_ABSOLUTE_VALUE_AND_PERCENTAGE"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_chronicle_dashboard_chart#metric_display_trend GoogleChronicleDashboardChart#metric_display_trend}
  */
  readonly metricDisplayTrend?: string;
  /**
  *  Possible values: ["METRIC_FORMAT_UNSPECIFIED", "METRIC_FORMAT_NUMBER", "METRIC_FORMAT_PLAIN_TEXT"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_chronicle_dashboard_chart#metric_format GoogleChronicleDashboardChart#metric_format}
  */
  readonly metricFormat?: string;
  /**
  *  Possible values: ["METRIC_TREND_TYPE_UNSPECIFIED", "METRIC_TREND_TYPE_REGULAR", "METRIC_TREND_TYPE_INVERSE"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_chronicle_dashboard_chart#metric_trend_type GoogleChronicleDashboardChart#metric_trend_type}
  */
  readonly metricTrendType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_chronicle_dashboard_chart#show_metric_trend GoogleChronicleDashboardChart#show_metric_trend}
  */
  readonly showMetricTrend?: boolean | cdktn.IResolvable;
}

export function googleChronicleDashboardChartDashboardChartVisualizationSeriesMetricTrendConfigToTerraform(struct?: GoogleChronicleDashboardChartDashboardChartVisualizationSeriesMetricTrendConfigOutputReference | GoogleChronicleDashboardChartDashboardChartVisualizationSeriesMetricTrendConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    metric_display_trend: cdktn.stringToTerraform(struct!.metricDisplayTrend),
    metric_format: cdktn.stringToTerraform(struct!.metricFormat),
    metric_trend_type: cdktn.stringToTerraform(struct!.metricTrendType),
    show_metric_trend: cdktn.booleanToTerraform(struct!.showMetricTrend),
  }
}


export function googleChronicleDashboardChartDashboardChartVisualizationSeriesMetricTrendConfigToHclTerraform(struct?: GoogleChronicleDashboardChartDashboardChartVisualizationSeriesMetricTrendConfigOutputReference | GoogleChronicleDashboardChartDashboardChartVisualizationSeriesMetricTrendConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    metric_display_trend: {
      value: cdktn.stringToHclTerraform(struct!.metricDisplayTrend),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    metric_format: {
      value: cdktn.stringToHclTerraform(struct!.metricFormat),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    metric_trend_type: {
      value: cdktn.stringToHclTerraform(struct!.metricTrendType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    show_metric_trend: {
      value: cdktn.booleanToHclTerraform(struct!.showMetricTrend),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleChronicleDashboardChartDashboardChartVisualizationSeriesMetricTrendConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleChronicleDashboardChartDashboardChartVisualizationSeriesMetricTrendConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._metricDisplayTrend !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricDisplayTrend = this._metricDisplayTrend;
    }
    if (this._metricFormat !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricFormat = this._metricFormat;
    }
    if (this._metricTrendType !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricTrendType = this._metricTrendType;
    }
    if (this._showMetricTrend !== undefined) {
      hasAnyValues = true;
      internalValueResult.showMetricTrend = this._showMetricTrend;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleChronicleDashboardChartDashboardChartVisualizationSeriesMetricTrendConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._metricDisplayTrend = undefined;
      this._metricFormat = undefined;
      this._metricTrendType = undefined;
      this._showMetricTrend = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._metricDisplayTrend = value.metricDisplayTrend;
      this._metricFormat = value.metricFormat;
      this._metricTrendType = value.metricTrendType;
      this._showMetricTrend = value.showMetricTrend;
    }
  }

  // metric_display_trend - computed: false, optional: true, required: false
  private _metricDisplayTrend?: string; 
  public get metricDisplayTrend() {
    return this.getStringAttribute('metric_display_trend');
  }
  public set metricDisplayTrend(value: string) {
    this._metricDisplayTrend = value;
  }
  public resetMetricDisplayTrend() {
    this._metricDisplayTrend = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricDisplayTrendInput() {
    return this._metricDisplayTrend;
  }

  // metric_format - computed: false, optional: true, required: false
  private _metricFormat?: string; 
  public get metricFormat() {
    return this.getStringAttribute('metric_format');
  }
  public set metricFormat(value: string) {
    this._metricFormat = value;
  }
  public resetMetricFormat() {
    this._metricFormat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricFormatInput() {
    return this._metricFormat;
  }

  // metric_trend_type - computed: false, optional: true, required: false
  private _metricTrendType?: string; 
  public get metricTrendType() {
    return this.getStringAttribute('metric_trend_type');
  }
  public set metricTrendType(value: string) {
    this._metricTrendType = value;
  }
  public resetMetricTrendType() {
    this._metricTrendType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricTrendTypeInput() {
    return this._metricTrendType;
  }

  // show_metric_trend - computed: false, optional: true, required: false
  private _showMetricTrend?: boolean | cdktn.IResolvable; 
  public get showMetricTrend() {
    return this.getBooleanAttribute('show_metric_trend');
  }
  public set showMetricTrend(value: boolean | cdktn.IResolvable) {
    this._showMetricTrend = value;
  }
  public resetShowMetricTrend() {
    this._showMetricTrend = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get showMetricTrendInput() {
    return this._showMetricTrend;
  }
}
export interface GoogleChronicleDashboardChartDashboardChartVisualizationSeries {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_chronicle_dashboard_chart#field GoogleChronicleDashboardChart#field}
  */
  readonly field?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_chronicle_dashboard_chart#label GoogleChronicleDashboardChart#label}
  */
  readonly label?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_chronicle_dashboard_chart#radius GoogleChronicleDashboardChart#radius}
  */
  readonly radius?: string[];
  /**
  * User specified series label.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_chronicle_dashboard_chart#series_name GoogleChronicleDashboardChart#series_name}
  */
  readonly seriesName?: string;
  /**
  *  Possible values: ["SAMESIGN", "ALL", "POSITIVE", "NEGATIVE"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_chronicle_dashboard_chart#series_stack_strategy GoogleChronicleDashboardChart#series_stack_strategy}
  */
  readonly seriesStackStrategy?: string;
  /**
  *  Possible values: ["LINE", "BAR", "PIE", "TEXT", "MAP", "GAUGE", "SCATTERPLOT"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_chronicle_dashboard_chart#series_type GoogleChronicleDashboardChart#series_type}
  */
  readonly seriesType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_chronicle_dashboard_chart#series_unique_value GoogleChronicleDashboardChart#series_unique_value}
  */
  readonly seriesUniqueValue?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_chronicle_dashboard_chart#show_background GoogleChronicleDashboardChart#show_background}
  */
  readonly showBackground?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_chronicle_dashboard_chart#show_symbol GoogleChronicleDashboardChart#show_symbol}
  */
  readonly showSymbol?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_chronicle_dashboard_chart#stack GoogleChronicleDashboardChart#stack}
  */
  readonly stack?: string;
  /**
  * area_style block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_chronicle_dashboard_chart#area_style GoogleChronicleDashboardChart#area_style}
  */
  readonly areaStyle?: GoogleChronicleDashboardChartDashboardChartVisualizationSeriesAreaStyle;
  /**
  * data_label block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_chronicle_dashboard_chart#data_label GoogleChronicleDashboardChart#data_label}
  */
  readonly dataLabel?: GoogleChronicleDashboardChartDashboardChartVisualizationSeriesDataLabel;
  /**
  * encode block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_chronicle_dashboard_chart#encode GoogleChronicleDashboardChart#encode}
  */
  readonly encode?: GoogleChronicleDashboardChartDashboardChartVisualizationSeriesEncode;
  /**
  * gauge_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_chronicle_dashboard_chart#gauge_config GoogleChronicleDashboardChart#gauge_config}
  */
  readonly gaugeConfig?: GoogleChronicleDashboardChartDashboardChartVisualizationSeriesGaugeConfig;
  /**
  * item_colors block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_chronicle_dashboard_chart#item_colors GoogleChronicleDashboardChart#item_colors}
  */
  readonly itemColors?: GoogleChronicleDashboardChartDashboardChartVisualizationSeriesItemColors;
  /**
  * item_style block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_chronicle_dashboard_chart#item_style GoogleChronicleDashboardChart#item_style}
  */
  readonly itemStyle?: GoogleChronicleDashboardChartDashboardChartVisualizationSeriesItemStyle;
  /**
  * metric_trend_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_chronicle_dashboard_chart#metric_trend_config GoogleChronicleDashboardChart#metric_trend_config}
  */
  readonly metricTrendConfig?: GoogleChronicleDashboardChartDashboardChartVisualizationSeriesMetricTrendConfig;
}

export function googleChronicleDashboardChartDashboardChartVisualizationSeriesToTerraform(struct?: GoogleChronicleDashboardChartDashboardChartVisualizationSeries | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    field: cdktn.stringToTerraform(struct!.field),
    label: cdktn.stringToTerraform(struct!.label),
    radius: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.radius),
    series_name: cdktn.stringToTerraform(struct!.seriesName),
    series_stack_strategy: cdktn.stringToTerraform(struct!.seriesStackStrategy),
    series_type: cdktn.stringToTerraform(struct!.seriesType),
    series_unique_value: cdktn.stringToTerraform(struct!.seriesUniqueValue),
    show_background: cdktn.booleanToTerraform(struct!.showBackground),
    show_symbol: cdktn.booleanToTerraform(struct!.showSymbol),
    stack: cdktn.stringToTerraform(struct!.stack),
    area_style: googleChronicleDashboardChartDashboardChartVisualizationSeriesAreaStyleToTerraform(struct!.areaStyle),
    data_label: googleChronicleDashboardChartDashboardChartVisualizationSeriesDataLabelToTerraform(struct!.dataLabel),
    encode: googleChronicleDashboardChartDashboardChartVisualizationSeriesEncodeToTerraform(struct!.encode),
    gauge_config: googleChronicleDashboardChartDashboardChartVisualizationSeriesGaugeConfigToTerraform(struct!.gaugeConfig),
    item_colors: googleChronicleDashboardChartDashboardChartVisualizationSeriesItemColorsToTerraform(struct!.itemColors),
    item_style: googleChronicleDashboardChartDashboardChartVisualizationSeriesItemStyleToTerraform(struct!.itemStyle),
    metric_trend_config: googleChronicleDashboardChartDashboardChartVisualizationSeriesMetricTrendConfigToTerraform(struct!.metricTrendConfig),
  }
}


export function googleChronicleDashboardChartDashboardChartVisualizationSeriesToHclTerraform(struct?: GoogleChronicleDashboardChartDashboardChartVisualizationSeries | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    field: {
      value: cdktn.stringToHclTerraform(struct!.field),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    label: {
      value: cdktn.stringToHclTerraform(struct!.label),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    radius: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.radius),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    series_name: {
      value: cdktn.stringToHclTerraform(struct!.seriesName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    series_stack_strategy: {
      value: cdktn.stringToHclTerraform(struct!.seriesStackStrategy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    series_type: {
      value: cdktn.stringToHclTerraform(struct!.seriesType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    series_unique_value: {
      value: cdktn.stringToHclTerraform(struct!.seriesUniqueValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    show_background: {
      value: cdktn.booleanToHclTerraform(struct!.showBackground),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    show_symbol: {
      value: cdktn.booleanToHclTerraform(struct!.showSymbol),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    stack: {
      value: cdktn.stringToHclTerraform(struct!.stack),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    area_style: {
      value: googleChronicleDashboardChartDashboardChartVisualizationSeriesAreaStyleToHclTerraform(struct!.areaStyle),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleChronicleDashboardChartDashboardChartVisualizationSeriesAreaStyleList",
    },
    data_label: {
      value: googleChronicleDashboardChartDashboardChartVisualizationSeriesDataLabelToHclTerraform(struct!.dataLabel),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleChronicleDashboardChartDashboardChartVisualizationSeriesDataLabelList",
    },
    encode: {
      value: googleChronicleDashboardChartDashboardChartVisualizationSeriesEncodeToHclTerraform(struct!.encode),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleChronicleDashboardChartDashboardChartVisualizationSeriesEncodeList",
    },
    gauge_config: {
      value: googleChronicleDashboardChartDashboardChartVisualizationSeriesGaugeConfigToHclTerraform(struct!.gaugeConfig),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleChronicleDashboardChartDashboardChartVisualizationSeriesGaugeConfigList",
    },
    item_colors: {
      value: googleChronicleDashboardChartDashboardChartVisualizationSeriesItemColorsToHclTerraform(struct!.itemColors),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleChronicleDashboardChartDashboardChartVisualizationSeriesItemColorsList",
    },
    item_style: {
      value: googleChronicleDashboardChartDashboardChartVisualizationSeriesItemStyleToHclTerraform(struct!.itemStyle),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleChronicleDashboardChartDashboardChartVisualizationSeriesItemStyleList",
    },
    metric_trend_config: {
      value: googleChronicleDashboardChartDashboardChartVisualizationSeriesMetricTrendConfigToHclTerraform(struct!.metricTrendConfig),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleChronicleDashboardChartDashboardChartVisualizationSeriesMetricTrendConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleChronicleDashboardChartDashboardChartVisualizationSeriesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): GoogleChronicleDashboardChartDashboardChartVisualizationSeries | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._field !== undefined) {
      hasAnyValues = true;
      internalValueResult.field = this._field;
    }
    if (this._label !== undefined) {
      hasAnyValues = true;
      internalValueResult.label = this._label;
    }
    if (this._radius !== undefined) {
      hasAnyValues = true;
      internalValueResult.radius = this._radius;
    }
    if (this._seriesName !== undefined) {
      hasAnyValues = true;
      internalValueResult.seriesName = this._seriesName;
    }
    if (this._seriesStackStrategy !== undefined) {
      hasAnyValues = true;
      internalValueResult.seriesStackStrategy = this._seriesStackStrategy;
    }
    if (this._seriesType !== undefined) {
      hasAnyValues = true;
      internalValueResult.seriesType = this._seriesType;
    }
    if (this._seriesUniqueValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.seriesUniqueValue = this._seriesUniqueValue;
    }
    if (this._showBackground !== undefined) {
      hasAnyValues = true;
      internalValueResult.showBackground = this._showBackground;
    }
    if (this._showSymbol !== undefined) {
      hasAnyValues = true;
      internalValueResult.showSymbol = this._showSymbol;
    }
    if (this._stack !== undefined) {
      hasAnyValues = true;
      internalValueResult.stack = this._stack;
    }
    if (this._areaStyle?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.areaStyle = this._areaStyle?.internalValue;
    }
    if (this._dataLabel?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataLabel = this._dataLabel?.internalValue;
    }
    if (this._encode?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.encode = this._encode?.internalValue;
    }
    if (this._gaugeConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.gaugeConfig = this._gaugeConfig?.internalValue;
    }
    if (this._itemColors?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.itemColors = this._itemColors?.internalValue;
    }
    if (this._itemStyle?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.itemStyle = this._itemStyle?.internalValue;
    }
    if (this._metricTrendConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricTrendConfig = this._metricTrendConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleChronicleDashboardChartDashboardChartVisualizationSeries | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._field = undefined;
      this._label = undefined;
      this._radius = undefined;
      this._seriesName = undefined;
      this._seriesStackStrategy = undefined;
      this._seriesType = undefined;
      this._seriesUniqueValue = undefined;
      this._showBackground = undefined;
      this._showSymbol = undefined;
      this._stack = undefined;
      this._areaStyle.internalValue = undefined;
      this._dataLabel.internalValue = undefined;
      this._encode.internalValue = undefined;
      this._gaugeConfig.internalValue = undefined;
      this._itemColors.internalValue = undefined;
      this._itemStyle.internalValue = undefined;
      this._metricTrendConfig.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._field = value.field;
      this._label = value.label;
      this._radius = value.radius;
      this._seriesName = value.seriesName;
      this._seriesStackStrategy = value.seriesStackStrategy;
      this._seriesType = value.seriesType;
      this._seriesUniqueValue = value.seriesUniqueValue;
      this._showBackground = value.showBackground;
      this._showSymbol = value.showSymbol;
      this._stack = value.stack;
      this._areaStyle.internalValue = value.areaStyle;
      this._dataLabel.internalValue = value.dataLabel;
      this._encode.internalValue = value.encode;
      this._gaugeConfig.internalValue = value.gaugeConfig;
      this._itemColors.internalValue = value.itemColors;
      this._itemStyle.internalValue = value.itemStyle;
      this._metricTrendConfig.internalValue = value.metricTrendConfig;
    }
  }

  // field - computed: false, optional: true, required: false
  private _field?: string; 
  public get field() {
    return this.getStringAttribute('field');
  }
  public set field(value: string) {
    this._field = value;
  }
  public resetField() {
    this._field = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldInput() {
    return this._field;
  }

  // label - computed: false, optional: true, required: false
  private _label?: string; 
  public get label() {
    return this.getStringAttribute('label');
  }
  public set label(value: string) {
    this._label = value;
  }
  public resetLabel() {
    this._label = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelInput() {
    return this._label;
  }

  // radius - computed: false, optional: true, required: false
  private _radius?: string[]; 
  public get radius() {
    return this.getListAttribute('radius');
  }
  public set radius(value: string[]) {
    this._radius = value;
  }
  public resetRadius() {
    this._radius = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get radiusInput() {
    return this._radius;
  }

  // series_name - computed: false, optional: true, required: false
  private _seriesName?: string; 
  public get seriesName() {
    return this.getStringAttribute('series_name');
  }
  public set seriesName(value: string) {
    this._seriesName = value;
  }
  public resetSeriesName() {
    this._seriesName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get seriesNameInput() {
    return this._seriesName;
  }

  // series_stack_strategy - computed: false, optional: true, required: false
  private _seriesStackStrategy?: string; 
  public get seriesStackStrategy() {
    return this.getStringAttribute('series_stack_strategy');
  }
  public set seriesStackStrategy(value: string) {
    this._seriesStackStrategy = value;
  }
  public resetSeriesStackStrategy() {
    this._seriesStackStrategy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get seriesStackStrategyInput() {
    return this._seriesStackStrategy;
  }

  // series_type - computed: false, optional: true, required: false
  private _seriesType?: string; 
  public get seriesType() {
    return this.getStringAttribute('series_type');
  }
  public set seriesType(value: string) {
    this._seriesType = value;
  }
  public resetSeriesType() {
    this._seriesType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get seriesTypeInput() {
    return this._seriesType;
  }

  // series_unique_value - computed: false, optional: true, required: false
  private _seriesUniqueValue?: string; 
  public get seriesUniqueValue() {
    return this.getStringAttribute('series_unique_value');
  }
  public set seriesUniqueValue(value: string) {
    this._seriesUniqueValue = value;
  }
  public resetSeriesUniqueValue() {
    this._seriesUniqueValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get seriesUniqueValueInput() {
    return this._seriesUniqueValue;
  }

  // show_background - computed: true, optional: true, required: false
  private _showBackground?: boolean | cdktn.IResolvable; 
  public get showBackground() {
    return this.getBooleanAttribute('show_background');
  }
  public set showBackground(value: boolean | cdktn.IResolvable) {
    this._showBackground = value;
  }
  public resetShowBackground() {
    this._showBackground = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get showBackgroundInput() {
    return this._showBackground;
  }

  // show_symbol - computed: false, optional: true, required: false
  private _showSymbol?: boolean | cdktn.IResolvable; 
  public get showSymbol() {
    return this.getBooleanAttribute('show_symbol');
  }
  public set showSymbol(value: boolean | cdktn.IResolvable) {
    this._showSymbol = value;
  }
  public resetShowSymbol() {
    this._showSymbol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get showSymbolInput() {
    return this._showSymbol;
  }

  // stack - computed: false, optional: true, required: false
  private _stack?: string; 
  public get stack() {
    return this.getStringAttribute('stack');
  }
  public set stack(value: string) {
    this._stack = value;
  }
  public resetStack() {
    this._stack = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stackInput() {
    return this._stack;
  }

  // area_style - computed: false, optional: true, required: false
  private _areaStyle = new GoogleChronicleDashboardChartDashboardChartVisualizationSeriesAreaStyleOutputReference(this, "area_style");
  public get areaStyle() {
    return this._areaStyle;
  }
  public putAreaStyle(value: GoogleChronicleDashboardChartDashboardChartVisualizationSeriesAreaStyle) {
    this._areaStyle.internalValue = value;
  }
  public resetAreaStyle() {
    this._areaStyle.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get areaStyleInput() {
    return this._areaStyle.internalValue;
  }

  // data_label - computed: false, optional: true, required: false
  private _dataLabel = new GoogleChronicleDashboardChartDashboardChartVisualizationSeriesDataLabelOutputReference(this, "data_label");
  public get dataLabel() {
    return this._dataLabel;
  }
  public putDataLabel(value: GoogleChronicleDashboardChartDashboardChartVisualizationSeriesDataLabel) {
    this._dataLabel.internalValue = value;
  }
  public resetDataLabel() {
    this._dataLabel.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataLabelInput() {
    return this._dataLabel.internalValue;
  }

  // encode - computed: false, optional: true, required: false
  private _encode = new GoogleChronicleDashboardChartDashboardChartVisualizationSeriesEncodeOutputReference(this, "encode");
  public get encode() {
    return this._encode;
  }
  public putEncode(value: GoogleChronicleDashboardChartDashboardChartVisualizationSeriesEncode) {
    this._encode.internalValue = value;
  }
  public resetEncode() {
    this._encode.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encodeInput() {
    return this._encode.internalValue;
  }

  // gauge_config - computed: false, optional: true, required: false
  private _gaugeConfig = new GoogleChronicleDashboardChartDashboardChartVisualizationSeriesGaugeConfigOutputReference(this, "gauge_config");
  public get gaugeConfig() {
    return this._gaugeConfig;
  }
  public putGaugeConfig(value: GoogleChronicleDashboardChartDashboardChartVisualizationSeriesGaugeConfig) {
    this._gaugeConfig.internalValue = value;
  }
  public resetGaugeConfig() {
    this._gaugeConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gaugeConfigInput() {
    return this._gaugeConfig.internalValue;
  }

  // item_colors - computed: false, optional: true, required: false
  private _itemColors = new GoogleChronicleDashboardChartDashboardChartVisualizationSeriesItemColorsOutputReference(this, "item_colors");
  public get itemColors() {
    return this._itemColors;
  }
  public putItemColors(value: GoogleChronicleDashboardChartDashboardChartVisualizationSeriesItemColors) {
    this._itemColors.internalValue = value;
  }
  public resetItemColors() {
    this._itemColors.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get itemColorsInput() {
    return this._itemColors.internalValue;
  }

  // item_style - computed: false, optional: true, required: false
  private _itemStyle = new GoogleChronicleDashboardChartDashboardChartVisualizationSeriesItemStyleOutputReference(this, "item_style");
  public get itemStyle() {
    return this._itemStyle;
  }
  public putItemStyle(value: GoogleChronicleDashboardChartDashboardChartVisualizationSeriesItemStyle) {
    this._itemStyle.internalValue = value;
  }
  public resetItemStyle() {
    this._itemStyle.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get itemStyleInput() {
    return this._itemStyle.internalValue;
  }

  // metric_trend_config - computed: false, optional: true, required: false
  private _metricTrendConfig = new GoogleChronicleDashboardChartDashboardChartVisualizationSeriesMetricTrendConfigOutputReference(this, "metric_trend_config");
  public get metricTrendConfig() {
    return this._metricTrendConfig;
  }
  public putMetricTrendConfig(value: GoogleChronicleDashboardChartDashboardChartVisualizationSeriesMetricTrendConfig) {
    this._metricTrendConfig.internalValue = value;
  }
  public resetMetricTrendConfig() {
    this._metricTrendConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricTrendConfigInput() {
    return this._metricTrendConfig.internalValue;
  }
}

export class GoogleChronicleDashboardChartDashboardChartVisualizationSeriesList extends cdktn.ComplexList {
  public internalValue? : GoogleChronicleDashboardChartDashboardChartVisualizationSeries[] | cdktn.IResolvable

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
  public get(index: number): GoogleChronicleDashboardChartDashboardChartVisualizationSeriesOutputReference {
    return new GoogleChronicleDashboardChartDashboardChartVisualizationSeriesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleChronicleDashboardChartDashboardChartVisualizationTableConfigColumnRenderTypeSettings {
  /**
  *  Possible values: ["RENDER_TYPE_UNSPECIFIED", "RENDER_TYPE_TEXT", "RENDER_TYPE_ICON", "RENDER_TYPE_ICON_AND_TEXT"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_chronicle_dashboard_chart#column_render_type GoogleChronicleDashboardChart#column_render_type}
  */
  readonly columnRenderType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_chronicle_dashboard_chart#field GoogleChronicleDashboardChart#field}
  */
  readonly field?: string;
}

export function googleChronicleDashboardChartDashboardChartVisualizationTableConfigColumnRenderTypeSettingsToTerraform(struct?: GoogleChronicleDashboardChartDashboardChartVisualizationTableConfigColumnRenderTypeSettings | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    column_render_type: cdktn.stringToTerraform(struct!.columnRenderType),
    field: cdktn.stringToTerraform(struct!.field),
  }
}


export function googleChronicleDashboardChartDashboardChartVisualizationTableConfigColumnRenderTypeSettingsToHclTerraform(struct?: GoogleChronicleDashboardChartDashboardChartVisualizationTableConfigColumnRenderTypeSettings | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    column_render_type: {
      value: cdktn.stringToHclTerraform(struct!.columnRenderType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    field: {
      value: cdktn.stringToHclTerraform(struct!.field),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleChronicleDashboardChartDashboardChartVisualizationTableConfigColumnRenderTypeSettingsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): GoogleChronicleDashboardChartDashboardChartVisualizationTableConfigColumnRenderTypeSettings | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._columnRenderType !== undefined) {
      hasAnyValues = true;
      internalValueResult.columnRenderType = this._columnRenderType;
    }
    if (this._field !== undefined) {
      hasAnyValues = true;
      internalValueResult.field = this._field;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleChronicleDashboardChartDashboardChartVisualizationTableConfigColumnRenderTypeSettings | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._columnRenderType = undefined;
      this._field = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._columnRenderType = value.columnRenderType;
      this._field = value.field;
    }
  }

  // column_render_type - computed: false, optional: true, required: false
  private _columnRenderType?: string; 
  public get columnRenderType() {
    return this.getStringAttribute('column_render_type');
  }
  public set columnRenderType(value: string) {
    this._columnRenderType = value;
  }
  public resetColumnRenderType() {
    this._columnRenderType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get columnRenderTypeInput() {
    return this._columnRenderType;
  }

  // field - computed: false, optional: true, required: false
  private _field?: string; 
  public get field() {
    return this.getStringAttribute('field');
  }
  public set field(value: string) {
    this._field = value;
  }
  public resetField() {
    this._field = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldInput() {
    return this._field;
  }
}

export class GoogleChronicleDashboardChartDashboardChartVisualizationTableConfigColumnRenderTypeSettingsList extends cdktn.ComplexList {
  public internalValue? : GoogleChronicleDashboardChartDashboardChartVisualizationTableConfigColumnRenderTypeSettings[] | cdktn.IResolvable

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
  public get(index: number): GoogleChronicleDashboardChartDashboardChartVisualizationTableConfigColumnRenderTypeSettingsOutputReference {
    return new GoogleChronicleDashboardChartDashboardChartVisualizationTableConfigColumnRenderTypeSettingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleChronicleDashboardChartDashboardChartVisualizationTableConfigColumnTooltipSettings {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_chronicle_dashboard_chart#cell_tooltip_text GoogleChronicleDashboardChart#cell_tooltip_text}
  */
  readonly cellTooltipText?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_chronicle_dashboard_chart#field GoogleChronicleDashboardChart#field}
  */
  readonly field: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_chronicle_dashboard_chart#header_tooltip_text GoogleChronicleDashboardChart#header_tooltip_text}
  */
  readonly headerTooltipText?: string;
}

export function googleChronicleDashboardChartDashboardChartVisualizationTableConfigColumnTooltipSettingsToTerraform(struct?: GoogleChronicleDashboardChartDashboardChartVisualizationTableConfigColumnTooltipSettings | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cell_tooltip_text: cdktn.stringToTerraform(struct!.cellTooltipText),
    field: cdktn.stringToTerraform(struct!.field),
    header_tooltip_text: cdktn.stringToTerraform(struct!.headerTooltipText),
  }
}


export function googleChronicleDashboardChartDashboardChartVisualizationTableConfigColumnTooltipSettingsToHclTerraform(struct?: GoogleChronicleDashboardChartDashboardChartVisualizationTableConfigColumnTooltipSettings | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cell_tooltip_text: {
      value: cdktn.stringToHclTerraform(struct!.cellTooltipText),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    field: {
      value: cdktn.stringToHclTerraform(struct!.field),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    header_tooltip_text: {
      value: cdktn.stringToHclTerraform(struct!.headerTooltipText),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleChronicleDashboardChartDashboardChartVisualizationTableConfigColumnTooltipSettingsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): GoogleChronicleDashboardChartDashboardChartVisualizationTableConfigColumnTooltipSettings | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cellTooltipText !== undefined) {
      hasAnyValues = true;
      internalValueResult.cellTooltipText = this._cellTooltipText;
    }
    if (this._field !== undefined) {
      hasAnyValues = true;
      internalValueResult.field = this._field;
    }
    if (this._headerTooltipText !== undefined) {
      hasAnyValues = true;
      internalValueResult.headerTooltipText = this._headerTooltipText;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleChronicleDashboardChartDashboardChartVisualizationTableConfigColumnTooltipSettings | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cellTooltipText = undefined;
      this._field = undefined;
      this._headerTooltipText = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cellTooltipText = value.cellTooltipText;
      this._field = value.field;
      this._headerTooltipText = value.headerTooltipText;
    }
  }

  // cell_tooltip_text - computed: false, optional: true, required: false
  private _cellTooltipText?: string; 
  public get cellTooltipText() {
    return this.getStringAttribute('cell_tooltip_text');
  }
  public set cellTooltipText(value: string) {
    this._cellTooltipText = value;
  }
  public resetCellTooltipText() {
    this._cellTooltipText = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cellTooltipTextInput() {
    return this._cellTooltipText;
  }

  // field - computed: false, optional: false, required: true
  private _field?: string; 
  public get field() {
    return this.getStringAttribute('field');
  }
  public set field(value: string) {
    this._field = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldInput() {
    return this._field;
  }

  // header_tooltip_text - computed: false, optional: true, required: false
  private _headerTooltipText?: string; 
  public get headerTooltipText() {
    return this.getStringAttribute('header_tooltip_text');
  }
  public set headerTooltipText(value: string) {
    this._headerTooltipText = value;
  }
  public resetHeaderTooltipText() {
    this._headerTooltipText = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headerTooltipTextInput() {
    return this._headerTooltipText;
  }
}

export class GoogleChronicleDashboardChartDashboardChartVisualizationTableConfigColumnTooltipSettingsList extends cdktn.ComplexList {
  public internalValue? : GoogleChronicleDashboardChartDashboardChartVisualizationTableConfigColumnTooltipSettings[] | cdktn.IResolvable

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
  public get(index: number): GoogleChronicleDashboardChartDashboardChartVisualizationTableConfigColumnTooltipSettingsOutputReference {
    return new GoogleChronicleDashboardChartDashboardChartVisualizationTableConfigColumnTooltipSettingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleChronicleDashboardChartDashboardChartVisualizationTableConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_chronicle_dashboard_chart#enable_text_wrap GoogleChronicleDashboardChart#enable_text_wrap}
  */
  readonly enableTextWrap?: boolean | cdktn.IResolvable;
  /**
  * column_render_type_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_chronicle_dashboard_chart#column_render_type_settings GoogleChronicleDashboardChart#column_render_type_settings}
  */
  readonly columnRenderTypeSettings?: GoogleChronicleDashboardChartDashboardChartVisualizationTableConfigColumnRenderTypeSettings[] | cdktn.IResolvable;
  /**
  * column_tooltip_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_chronicle_dashboard_chart#column_tooltip_settings GoogleChronicleDashboardChart#column_tooltip_settings}
  */
  readonly columnTooltipSettings?: GoogleChronicleDashboardChartDashboardChartVisualizationTableConfigColumnTooltipSettings[] | cdktn.IResolvable;
}

export function googleChronicleDashboardChartDashboardChartVisualizationTableConfigToTerraform(struct?: GoogleChronicleDashboardChartDashboardChartVisualizationTableConfigOutputReference | GoogleChronicleDashboardChartDashboardChartVisualizationTableConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enable_text_wrap: cdktn.booleanToTerraform(struct!.enableTextWrap),
    column_render_type_settings: cdktn.listMapper(googleChronicleDashboardChartDashboardChartVisualizationTableConfigColumnRenderTypeSettingsToTerraform, true)(struct!.columnRenderTypeSettings),
    column_tooltip_settings: cdktn.listMapper(googleChronicleDashboardChartDashboardChartVisualizationTableConfigColumnTooltipSettingsToTerraform, true)(struct!.columnTooltipSettings),
  }
}


export function googleChronicleDashboardChartDashboardChartVisualizationTableConfigToHclTerraform(struct?: GoogleChronicleDashboardChartDashboardChartVisualizationTableConfigOutputReference | GoogleChronicleDashboardChartDashboardChartVisualizationTableConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enable_text_wrap: {
      value: cdktn.booleanToHclTerraform(struct!.enableTextWrap),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    column_render_type_settings: {
      value: cdktn.listMapperHcl(googleChronicleDashboardChartDashboardChartVisualizationTableConfigColumnRenderTypeSettingsToHclTerraform, true)(struct!.columnRenderTypeSettings),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleChronicleDashboardChartDashboardChartVisualizationTableConfigColumnRenderTypeSettingsList",
    },
    column_tooltip_settings: {
      value: cdktn.listMapperHcl(googleChronicleDashboardChartDashboardChartVisualizationTableConfigColumnTooltipSettingsToHclTerraform, true)(struct!.columnTooltipSettings),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleChronicleDashboardChartDashboardChartVisualizationTableConfigColumnTooltipSettingsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleChronicleDashboardChartDashboardChartVisualizationTableConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleChronicleDashboardChartDashboardChartVisualizationTableConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enableTextWrap !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableTextWrap = this._enableTextWrap;
    }
    if (this._columnRenderTypeSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.columnRenderTypeSettings = this._columnRenderTypeSettings?.internalValue;
    }
    if (this._columnTooltipSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.columnTooltipSettings = this._columnTooltipSettings?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleChronicleDashboardChartDashboardChartVisualizationTableConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enableTextWrap = undefined;
      this._columnRenderTypeSettings.internalValue = undefined;
      this._columnTooltipSettings.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enableTextWrap = value.enableTextWrap;
      this._columnRenderTypeSettings.internalValue = value.columnRenderTypeSettings;
      this._columnTooltipSettings.internalValue = value.columnTooltipSettings;
    }
  }

  // enable_text_wrap - computed: false, optional: true, required: false
  private _enableTextWrap?: boolean | cdktn.IResolvable; 
  public get enableTextWrap() {
    return this.getBooleanAttribute('enable_text_wrap');
  }
  public set enableTextWrap(value: boolean | cdktn.IResolvable) {
    this._enableTextWrap = value;
  }
  public resetEnableTextWrap() {
    this._enableTextWrap = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableTextWrapInput() {
    return this._enableTextWrap;
  }

  // column_render_type_settings - computed: false, optional: true, required: false
  private _columnRenderTypeSettings = new GoogleChronicleDashboardChartDashboardChartVisualizationTableConfigColumnRenderTypeSettingsList(this, "column_render_type_settings", false);
  public get columnRenderTypeSettings() {
    return this._columnRenderTypeSettings;
  }
  public putColumnRenderTypeSettings(value: GoogleChronicleDashboardChartDashboardChartVisualizationTableConfigColumnRenderTypeSettings[] | cdktn.IResolvable) {
    this._columnRenderTypeSettings.internalValue = value;
  }
  public resetColumnRenderTypeSettings() {
    this._columnRenderTypeSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get columnRenderTypeSettingsInput() {
    return this._columnRenderTypeSettings.internalValue;
  }

  // column_tooltip_settings - computed: false, optional: true, required: false
  private _columnTooltipSettings = new GoogleChronicleDashboardChartDashboardChartVisualizationTableConfigColumnTooltipSettingsList(this, "column_tooltip_settings", false);
  public get columnTooltipSettings() {
    return this._columnTooltipSettings;
  }
  public putColumnTooltipSettings(value: GoogleChronicleDashboardChartDashboardChartVisualizationTableConfigColumnTooltipSettings[] | cdktn.IResolvable) {
    this._columnTooltipSettings.internalValue = value;
  }
  public resetColumnTooltipSettings() {
    this._columnTooltipSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get columnTooltipSettingsInput() {
    return this._columnTooltipSettings.internalValue;
  }
}
export interface GoogleChronicleDashboardChartDashboardChartVisualizationTooltip {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_chronicle_dashboard_chart#show GoogleChronicleDashboardChart#show}
  */
  readonly show?: boolean | cdktn.IResolvable;
  /**
  *  Possible values: ["TOOLTIP_TRIGGER_UNSPECIFIED", "TOOLTIP_TRIGGER_NONE", "TOOLTIP_TRIGGER_ITEM", "TOOLTIP_TRIGGER_AXIS"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_chronicle_dashboard_chart#tooltip_trigger GoogleChronicleDashboardChart#tooltip_trigger}
  */
  readonly tooltipTrigger?: string;
}

export function googleChronicleDashboardChartDashboardChartVisualizationTooltipToTerraform(struct?: GoogleChronicleDashboardChartDashboardChartVisualizationTooltipOutputReference | GoogleChronicleDashboardChartDashboardChartVisualizationTooltip): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    show: cdktn.booleanToTerraform(struct!.show),
    tooltip_trigger: cdktn.stringToTerraform(struct!.tooltipTrigger),
  }
}


export function googleChronicleDashboardChartDashboardChartVisualizationTooltipToHclTerraform(struct?: GoogleChronicleDashboardChartDashboardChartVisualizationTooltipOutputReference | GoogleChronicleDashboardChartDashboardChartVisualizationTooltip): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    show: {
      value: cdktn.booleanToHclTerraform(struct!.show),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    tooltip_trigger: {
      value: cdktn.stringToHclTerraform(struct!.tooltipTrigger),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleChronicleDashboardChartDashboardChartVisualizationTooltipOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleChronicleDashboardChartDashboardChartVisualizationTooltip | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._show !== undefined) {
      hasAnyValues = true;
      internalValueResult.show = this._show;
    }
    if (this._tooltipTrigger !== undefined) {
      hasAnyValues = true;
      internalValueResult.tooltipTrigger = this._tooltipTrigger;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleChronicleDashboardChartDashboardChartVisualizationTooltip | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._show = undefined;
      this._tooltipTrigger = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._show = value.show;
      this._tooltipTrigger = value.tooltipTrigger;
    }
  }

  // show - computed: false, optional: true, required: false
  private _show?: boolean | cdktn.IResolvable; 
  public get show() {
    return this.getBooleanAttribute('show');
  }
  public set show(value: boolean | cdktn.IResolvable) {
    this._show = value;
  }
  public resetShow() {
    this._show = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get showInput() {
    return this._show;
  }

  // tooltip_trigger - computed: false, optional: true, required: false
  private _tooltipTrigger?: string; 
  public get tooltipTrigger() {
    return this.getStringAttribute('tooltip_trigger');
  }
  public set tooltipTrigger(value: string) {
    this._tooltipTrigger = value;
  }
  public resetTooltipTrigger() {
    this._tooltipTrigger = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tooltipTriggerInput() {
    return this._tooltipTrigger;
  }
}
export interface GoogleChronicleDashboardChartDashboardChartVisualizationVisualMapsPieces {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_chronicle_dashboard_chart#color GoogleChronicleDashboardChart#color}
  */
  readonly color?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_chronicle_dashboard_chart#label GoogleChronicleDashboardChart#label}
  */
  readonly label?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_chronicle_dashboard_chart#max GoogleChronicleDashboardChart#max}
  */
  readonly max?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_chronicle_dashboard_chart#min GoogleChronicleDashboardChart#min}
  */
  readonly min?: number;
}

export function googleChronicleDashboardChartDashboardChartVisualizationVisualMapsPiecesToTerraform(struct?: GoogleChronicleDashboardChartDashboardChartVisualizationVisualMapsPieces | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    color: cdktn.stringToTerraform(struct!.color),
    label: cdktn.stringToTerraform(struct!.label),
    max: cdktn.numberToTerraform(struct!.max),
    min: cdktn.numberToTerraform(struct!.min),
  }
}


export function googleChronicleDashboardChartDashboardChartVisualizationVisualMapsPiecesToHclTerraform(struct?: GoogleChronicleDashboardChartDashboardChartVisualizationVisualMapsPieces | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    color: {
      value: cdktn.stringToHclTerraform(struct!.color),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    label: {
      value: cdktn.stringToHclTerraform(struct!.label),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    max: {
      value: cdktn.numberToHclTerraform(struct!.max),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    min: {
      value: cdktn.numberToHclTerraform(struct!.min),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleChronicleDashboardChartDashboardChartVisualizationVisualMapsPiecesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): GoogleChronicleDashboardChartDashboardChartVisualizationVisualMapsPieces | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._color !== undefined) {
      hasAnyValues = true;
      internalValueResult.color = this._color;
    }
    if (this._label !== undefined) {
      hasAnyValues = true;
      internalValueResult.label = this._label;
    }
    if (this._max !== undefined) {
      hasAnyValues = true;
      internalValueResult.max = this._max;
    }
    if (this._min !== undefined) {
      hasAnyValues = true;
      internalValueResult.min = this._min;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleChronicleDashboardChartDashboardChartVisualizationVisualMapsPieces | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._color = undefined;
      this._label = undefined;
      this._max = undefined;
      this._min = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._color = value.color;
      this._label = value.label;
      this._max = value.max;
      this._min = value.min;
    }
  }

  // color - computed: false, optional: true, required: false
  private _color?: string; 
  public get color() {
    return this.getStringAttribute('color');
  }
  public set color(value: string) {
    this._color = value;
  }
  public resetColor() {
    this._color = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get colorInput() {
    return this._color;
  }

  // label - computed: false, optional: true, required: false
  private _label?: string; 
  public get label() {
    return this.getStringAttribute('label');
  }
  public set label(value: string) {
    this._label = value;
  }
  public resetLabel() {
    this._label = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelInput() {
    return this._label;
  }

  // max - computed: false, optional: true, required: false
  private _max?: number; 
  public get max() {
    return this.getNumberAttribute('max');
  }
  public set max(value: number) {
    this._max = value;
  }
  public resetMax() {
    this._max = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxInput() {
    return this._max;
  }

  // min - computed: false, optional: true, required: false
  private _min?: number; 
  public get min() {
    return this.getNumberAttribute('min');
  }
  public set min(value: number) {
    this._min = value;
  }
  public resetMin() {
    this._min = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minInput() {
    return this._min;
  }
}

export class GoogleChronicleDashboardChartDashboardChartVisualizationVisualMapsPiecesList extends cdktn.ComplexList {
  public internalValue? : GoogleChronicleDashboardChartDashboardChartVisualizationVisualMapsPieces[] | cdktn.IResolvable

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
  public get(index: number): GoogleChronicleDashboardChartDashboardChartVisualizationVisualMapsPiecesOutputReference {
    return new GoogleChronicleDashboardChartDashboardChartVisualizationVisualMapsPiecesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleChronicleDashboardChartDashboardChartVisualizationVisualMaps {
  /**
  *  Possible values: ["VISUAL_MAP_TYPE_UNSPECIFIED", "CONTINUOUS", "PIECEWISE"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_chronicle_dashboard_chart#visual_map_type GoogleChronicleDashboardChart#visual_map_type}
  */
  readonly visualMapType?: string;
  /**
  * pieces block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_chronicle_dashboard_chart#pieces GoogleChronicleDashboardChart#pieces}
  */
  readonly pieces?: GoogleChronicleDashboardChartDashboardChartVisualizationVisualMapsPieces[] | cdktn.IResolvable;
}

export function googleChronicleDashboardChartDashboardChartVisualizationVisualMapsToTerraform(struct?: GoogleChronicleDashboardChartDashboardChartVisualizationVisualMaps | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    visual_map_type: cdktn.stringToTerraform(struct!.visualMapType),
    pieces: cdktn.listMapper(googleChronicleDashboardChartDashboardChartVisualizationVisualMapsPiecesToTerraform, true)(struct!.pieces),
  }
}


export function googleChronicleDashboardChartDashboardChartVisualizationVisualMapsToHclTerraform(struct?: GoogleChronicleDashboardChartDashboardChartVisualizationVisualMaps | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    visual_map_type: {
      value: cdktn.stringToHclTerraform(struct!.visualMapType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pieces: {
      value: cdktn.listMapperHcl(googleChronicleDashboardChartDashboardChartVisualizationVisualMapsPiecesToHclTerraform, true)(struct!.pieces),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleChronicleDashboardChartDashboardChartVisualizationVisualMapsPiecesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleChronicleDashboardChartDashboardChartVisualizationVisualMapsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): GoogleChronicleDashboardChartDashboardChartVisualizationVisualMaps | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._visualMapType !== undefined) {
      hasAnyValues = true;
      internalValueResult.visualMapType = this._visualMapType;
    }
    if (this._pieces?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.pieces = this._pieces?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleChronicleDashboardChartDashboardChartVisualizationVisualMaps | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._visualMapType = undefined;
      this._pieces.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._visualMapType = value.visualMapType;
      this._pieces.internalValue = value.pieces;
    }
  }

  // visual_map_type - computed: false, optional: true, required: false
  private _visualMapType?: string; 
  public get visualMapType() {
    return this.getStringAttribute('visual_map_type');
  }
  public set visualMapType(value: string) {
    this._visualMapType = value;
  }
  public resetVisualMapType() {
    this._visualMapType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get visualMapTypeInput() {
    return this._visualMapType;
  }

  // pieces - computed: false, optional: true, required: false
  private _pieces = new GoogleChronicleDashboardChartDashboardChartVisualizationVisualMapsPiecesList(this, "pieces", false);
  public get pieces() {
    return this._pieces;
  }
  public putPieces(value: GoogleChronicleDashboardChartDashboardChartVisualizationVisualMapsPieces[] | cdktn.IResolvable) {
    this._pieces.internalValue = value;
  }
  public resetPieces() {
    this._pieces.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get piecesInput() {
    return this._pieces.internalValue;
  }
}

export class GoogleChronicleDashboardChartDashboardChartVisualizationVisualMapsList extends cdktn.ComplexList {
  public internalValue? : GoogleChronicleDashboardChartDashboardChartVisualizationVisualMaps[] | cdktn.IResolvable

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
  public get(index: number): GoogleChronicleDashboardChartDashboardChartVisualizationVisualMapsOutputReference {
    return new GoogleChronicleDashboardChartDashboardChartVisualizationVisualMapsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleChronicleDashboardChartDashboardChartVisualizationXAxes {
  /**
  *  Possible values: ["VALUE", "CATEGORY", "TIME", "LOG"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_chronicle_dashboard_chart#axis_type GoogleChronicleDashboardChart#axis_type}
  */
  readonly axisType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_chronicle_dashboard_chart#display_name GoogleChronicleDashboardChart#display_name}
  */
  readonly displayName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_chronicle_dashboard_chart#max GoogleChronicleDashboardChart#max}
  */
  readonly max?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_chronicle_dashboard_chart#min GoogleChronicleDashboardChart#min}
  */
  readonly min?: number;
}

export function googleChronicleDashboardChartDashboardChartVisualizationXAxesToTerraform(struct?: GoogleChronicleDashboardChartDashboardChartVisualizationXAxes | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    axis_type: cdktn.stringToTerraform(struct!.axisType),
    display_name: cdktn.stringToTerraform(struct!.displayName),
    max: cdktn.numberToTerraform(struct!.max),
    min: cdktn.numberToTerraform(struct!.min),
  }
}


export function googleChronicleDashboardChartDashboardChartVisualizationXAxesToHclTerraform(struct?: GoogleChronicleDashboardChartDashboardChartVisualizationXAxes | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    axis_type: {
      value: cdktn.stringToHclTerraform(struct!.axisType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    display_name: {
      value: cdktn.stringToHclTerraform(struct!.displayName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    max: {
      value: cdktn.numberToHclTerraform(struct!.max),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    min: {
      value: cdktn.numberToHclTerraform(struct!.min),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleChronicleDashboardChartDashboardChartVisualizationXAxesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): GoogleChronicleDashboardChartDashboardChartVisualizationXAxes | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._axisType !== undefined) {
      hasAnyValues = true;
      internalValueResult.axisType = this._axisType;
    }
    if (this._displayName !== undefined) {
      hasAnyValues = true;
      internalValueResult.displayName = this._displayName;
    }
    if (this._max !== undefined) {
      hasAnyValues = true;
      internalValueResult.max = this._max;
    }
    if (this._min !== undefined) {
      hasAnyValues = true;
      internalValueResult.min = this._min;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleChronicleDashboardChartDashboardChartVisualizationXAxes | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._axisType = undefined;
      this._displayName = undefined;
      this._max = undefined;
      this._min = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._axisType = value.axisType;
      this._displayName = value.displayName;
      this._max = value.max;
      this._min = value.min;
    }
  }

  // axis_type - computed: false, optional: true, required: false
  private _axisType?: string; 
  public get axisType() {
    return this.getStringAttribute('axis_type');
  }
  public set axisType(value: string) {
    this._axisType = value;
  }
  public resetAxisType() {
    this._axisType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get axisTypeInput() {
    return this._axisType;
  }

  // display_name - computed: false, optional: true, required: false
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  public resetDisplayName() {
    this._displayName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName;
  }

  // max - computed: true, optional: true, required: false
  private _max?: number; 
  public get max() {
    return this.getNumberAttribute('max');
  }
  public set max(value: number) {
    this._max = value;
  }
  public resetMax() {
    this._max = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxInput() {
    return this._max;
  }

  // min - computed: true, optional: true, required: false
  private _min?: number; 
  public get min() {
    return this.getNumberAttribute('min');
  }
  public set min(value: number) {
    this._min = value;
  }
  public resetMin() {
    this._min = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minInput() {
    return this._min;
  }
}

export class GoogleChronicleDashboardChartDashboardChartVisualizationXAxesList extends cdktn.ComplexList {
  public internalValue? : GoogleChronicleDashboardChartDashboardChartVisualizationXAxes[] | cdktn.IResolvable

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
  public get(index: number): GoogleChronicleDashboardChartDashboardChartVisualizationXAxesOutputReference {
    return new GoogleChronicleDashboardChartDashboardChartVisualizationXAxesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleChronicleDashboardChartDashboardChartVisualizationYAxes {
  /**
  *  Possible values: ["VALUE", "CATEGORY", "TIME", "LOG"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_chronicle_dashboard_chart#axis_type GoogleChronicleDashboardChart#axis_type}
  */
  readonly axisType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_chronicle_dashboard_chart#display_name GoogleChronicleDashboardChart#display_name}
  */
  readonly displayName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_chronicle_dashboard_chart#max GoogleChronicleDashboardChart#max}
  */
  readonly max?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_chronicle_dashboard_chart#min GoogleChronicleDashboardChart#min}
  */
  readonly min?: number;
}

export function googleChronicleDashboardChartDashboardChartVisualizationYAxesToTerraform(struct?: GoogleChronicleDashboardChartDashboardChartVisualizationYAxes | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    axis_type: cdktn.stringToTerraform(struct!.axisType),
    display_name: cdktn.stringToTerraform(struct!.displayName),
    max: cdktn.numberToTerraform(struct!.max),
    min: cdktn.numberToTerraform(struct!.min),
  }
}


export function googleChronicleDashboardChartDashboardChartVisualizationYAxesToHclTerraform(struct?: GoogleChronicleDashboardChartDashboardChartVisualizationYAxes | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    axis_type: {
      value: cdktn.stringToHclTerraform(struct!.axisType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    display_name: {
      value: cdktn.stringToHclTerraform(struct!.displayName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    max: {
      value: cdktn.numberToHclTerraform(struct!.max),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    min: {
      value: cdktn.numberToHclTerraform(struct!.min),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleChronicleDashboardChartDashboardChartVisualizationYAxesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): GoogleChronicleDashboardChartDashboardChartVisualizationYAxes | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._axisType !== undefined) {
      hasAnyValues = true;
      internalValueResult.axisType = this._axisType;
    }
    if (this._displayName !== undefined) {
      hasAnyValues = true;
      internalValueResult.displayName = this._displayName;
    }
    if (this._max !== undefined) {
      hasAnyValues = true;
      internalValueResult.max = this._max;
    }
    if (this._min !== undefined) {
      hasAnyValues = true;
      internalValueResult.min = this._min;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleChronicleDashboardChartDashboardChartVisualizationYAxes | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._axisType = undefined;
      this._displayName = undefined;
      this._max = undefined;
      this._min = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._axisType = value.axisType;
      this._displayName = value.displayName;
      this._max = value.max;
      this._min = value.min;
    }
  }

  // axis_type - computed: false, optional: true, required: false
  private _axisType?: string; 
  public get axisType() {
    return this.getStringAttribute('axis_type');
  }
  public set axisType(value: string) {
    this._axisType = value;
  }
  public resetAxisType() {
    this._axisType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get axisTypeInput() {
    return this._axisType;
  }

  // display_name - computed: false, optional: true, required: false
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  public resetDisplayName() {
    this._displayName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName;
  }

  // max - computed: true, optional: true, required: false
  private _max?: number; 
  public get max() {
    return this.getNumberAttribute('max');
  }
  public set max(value: number) {
    this._max = value;
  }
  public resetMax() {
    this._max = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxInput() {
    return this._max;
  }

  // min - computed: true, optional: true, required: false
  private _min?: number; 
  public get min() {
    return this.getNumberAttribute('min');
  }
  public set min(value: number) {
    this._min = value;
  }
  public resetMin() {
    this._min = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minInput() {
    return this._min;
  }
}

export class GoogleChronicleDashboardChartDashboardChartVisualizationYAxesList extends cdktn.ComplexList {
  public internalValue? : GoogleChronicleDashboardChartDashboardChartVisualizationYAxes[] | cdktn.IResolvable

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
  public get(index: number): GoogleChronicleDashboardChartDashboardChartVisualizationYAxesOutputReference {
    return new GoogleChronicleDashboardChartDashboardChartVisualizationYAxesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleChronicleDashboardChartDashboardChartVisualization {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_chronicle_dashboard_chart#grouping_type GoogleChronicleDashboardChart#grouping_type}
  */
  readonly groupingType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_chronicle_dashboard_chart#series_column GoogleChronicleDashboardChart#series_column}
  */
  readonly seriesColumn?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_chronicle_dashboard_chart#threshold_coloring_enabled GoogleChronicleDashboardChart#threshold_coloring_enabled}
  */
  readonly thresholdColoringEnabled?: boolean | cdktn.IResolvable;
  /**
  * button block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_chronicle_dashboard_chart#button GoogleChronicleDashboardChart#button}
  */
  readonly button?: GoogleChronicleDashboardChartDashboardChartVisualizationButton;
  /**
  * column_defs block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_chronicle_dashboard_chart#column_defs GoogleChronicleDashboardChart#column_defs}
  */
  readonly columnDefs?: GoogleChronicleDashboardChartDashboardChartVisualizationColumnDefs[] | cdktn.IResolvable;
  /**
  * google_maps_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_chronicle_dashboard_chart#google_maps_config GoogleChronicleDashboardChart#google_maps_config}
  */
  readonly googleMapsConfig?: GoogleChronicleDashboardChartDashboardChartVisualizationGoogleMapsConfig;
  /**
  * legends block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_chronicle_dashboard_chart#legends GoogleChronicleDashboardChart#legends}
  */
  readonly legends?: GoogleChronicleDashboardChartDashboardChartVisualizationLegends[] | cdktn.IResolvable;
  /**
  * markdown block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_chronicle_dashboard_chart#markdown GoogleChronicleDashboardChart#markdown}
  */
  readonly markdown?: GoogleChronicleDashboardChartDashboardChartVisualizationMarkdown;
  /**
  * series block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_chronicle_dashboard_chart#series GoogleChronicleDashboardChart#series}
  */
  readonly series?: GoogleChronicleDashboardChartDashboardChartVisualizationSeries[] | cdktn.IResolvable;
  /**
  * table_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_chronicle_dashboard_chart#table_config GoogleChronicleDashboardChart#table_config}
  */
  readonly tableConfig?: GoogleChronicleDashboardChartDashboardChartVisualizationTableConfig;
  /**
  * tooltip block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_chronicle_dashboard_chart#tooltip GoogleChronicleDashboardChart#tooltip}
  */
  readonly tooltip?: GoogleChronicleDashboardChartDashboardChartVisualizationTooltip;
  /**
  * visual_maps block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_chronicle_dashboard_chart#visual_maps GoogleChronicleDashboardChart#visual_maps}
  */
  readonly visualMaps?: GoogleChronicleDashboardChartDashboardChartVisualizationVisualMaps[] | cdktn.IResolvable;
  /**
  * x_axes block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_chronicle_dashboard_chart#x_axes GoogleChronicleDashboardChart#x_axes}
  */
  readonly xAxes?: GoogleChronicleDashboardChartDashboardChartVisualizationXAxes[] | cdktn.IResolvable;
  /**
  * y_axes block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_chronicle_dashboard_chart#y_axes GoogleChronicleDashboardChart#y_axes}
  */
  readonly yAxes?: GoogleChronicleDashboardChartDashboardChartVisualizationYAxes[] | cdktn.IResolvable;
}

export function googleChronicleDashboardChartDashboardChartVisualizationToTerraform(struct?: GoogleChronicleDashboardChartDashboardChartVisualizationOutputReference | GoogleChronicleDashboardChartDashboardChartVisualization): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    grouping_type: cdktn.stringToTerraform(struct!.groupingType),
    series_column: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.seriesColumn),
    threshold_coloring_enabled: cdktn.booleanToTerraform(struct!.thresholdColoringEnabled),
    button: googleChronicleDashboardChartDashboardChartVisualizationButtonToTerraform(struct!.button),
    column_defs: cdktn.listMapper(googleChronicleDashboardChartDashboardChartVisualizationColumnDefsToTerraform, true)(struct!.columnDefs),
    google_maps_config: googleChronicleDashboardChartDashboardChartVisualizationGoogleMapsConfigToTerraform(struct!.googleMapsConfig),
    legends: cdktn.listMapper(googleChronicleDashboardChartDashboardChartVisualizationLegendsToTerraform, true)(struct!.legends),
    markdown: googleChronicleDashboardChartDashboardChartVisualizationMarkdownToTerraform(struct!.markdown),
    series: cdktn.listMapper(googleChronicleDashboardChartDashboardChartVisualizationSeriesToTerraform, true)(struct!.series),
    table_config: googleChronicleDashboardChartDashboardChartVisualizationTableConfigToTerraform(struct!.tableConfig),
    tooltip: googleChronicleDashboardChartDashboardChartVisualizationTooltipToTerraform(struct!.tooltip),
    visual_maps: cdktn.listMapper(googleChronicleDashboardChartDashboardChartVisualizationVisualMapsToTerraform, true)(struct!.visualMaps),
    x_axes: cdktn.listMapper(googleChronicleDashboardChartDashboardChartVisualizationXAxesToTerraform, true)(struct!.xAxes),
    y_axes: cdktn.listMapper(googleChronicleDashboardChartDashboardChartVisualizationYAxesToTerraform, true)(struct!.yAxes),
  }
}


export function googleChronicleDashboardChartDashboardChartVisualizationToHclTerraform(struct?: GoogleChronicleDashboardChartDashboardChartVisualizationOutputReference | GoogleChronicleDashboardChartDashboardChartVisualization): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    grouping_type: {
      value: cdktn.stringToHclTerraform(struct!.groupingType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    series_column: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.seriesColumn),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    threshold_coloring_enabled: {
      value: cdktn.booleanToHclTerraform(struct!.thresholdColoringEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    button: {
      value: googleChronicleDashboardChartDashboardChartVisualizationButtonToHclTerraform(struct!.button),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleChronicleDashboardChartDashboardChartVisualizationButtonList",
    },
    column_defs: {
      value: cdktn.listMapperHcl(googleChronicleDashboardChartDashboardChartVisualizationColumnDefsToHclTerraform, true)(struct!.columnDefs),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleChronicleDashboardChartDashboardChartVisualizationColumnDefsList",
    },
    google_maps_config: {
      value: googleChronicleDashboardChartDashboardChartVisualizationGoogleMapsConfigToHclTerraform(struct!.googleMapsConfig),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleChronicleDashboardChartDashboardChartVisualizationGoogleMapsConfigList",
    },
    legends: {
      value: cdktn.listMapperHcl(googleChronicleDashboardChartDashboardChartVisualizationLegendsToHclTerraform, true)(struct!.legends),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleChronicleDashboardChartDashboardChartVisualizationLegendsList",
    },
    markdown: {
      value: googleChronicleDashboardChartDashboardChartVisualizationMarkdownToHclTerraform(struct!.markdown),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleChronicleDashboardChartDashboardChartVisualizationMarkdownList",
    },
    series: {
      value: cdktn.listMapperHcl(googleChronicleDashboardChartDashboardChartVisualizationSeriesToHclTerraform, true)(struct!.series),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleChronicleDashboardChartDashboardChartVisualizationSeriesList",
    },
    table_config: {
      value: googleChronicleDashboardChartDashboardChartVisualizationTableConfigToHclTerraform(struct!.tableConfig),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleChronicleDashboardChartDashboardChartVisualizationTableConfigList",
    },
    tooltip: {
      value: googleChronicleDashboardChartDashboardChartVisualizationTooltipToHclTerraform(struct!.tooltip),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleChronicleDashboardChartDashboardChartVisualizationTooltipList",
    },
    visual_maps: {
      value: cdktn.listMapperHcl(googleChronicleDashboardChartDashboardChartVisualizationVisualMapsToHclTerraform, true)(struct!.visualMaps),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleChronicleDashboardChartDashboardChartVisualizationVisualMapsList",
    },
    x_axes: {
      value: cdktn.listMapperHcl(googleChronicleDashboardChartDashboardChartVisualizationXAxesToHclTerraform, true)(struct!.xAxes),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleChronicleDashboardChartDashboardChartVisualizationXAxesList",
    },
    y_axes: {
      value: cdktn.listMapperHcl(googleChronicleDashboardChartDashboardChartVisualizationYAxesToHclTerraform, true)(struct!.yAxes),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleChronicleDashboardChartDashboardChartVisualizationYAxesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleChronicleDashboardChartDashboardChartVisualizationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleChronicleDashboardChartDashboardChartVisualization | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._groupingType !== undefined) {
      hasAnyValues = true;
      internalValueResult.groupingType = this._groupingType;
    }
    if (this._seriesColumn !== undefined) {
      hasAnyValues = true;
      internalValueResult.seriesColumn = this._seriesColumn;
    }
    if (this._thresholdColoringEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.thresholdColoringEnabled = this._thresholdColoringEnabled;
    }
    if (this._button?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.button = this._button?.internalValue;
    }
    if (this._columnDefs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.columnDefs = this._columnDefs?.internalValue;
    }
    if (this._googleMapsConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.googleMapsConfig = this._googleMapsConfig?.internalValue;
    }
    if (this._legends?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.legends = this._legends?.internalValue;
    }
    if (this._markdown?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.markdown = this._markdown?.internalValue;
    }
    if (this._series?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.series = this._series?.internalValue;
    }
    if (this._tableConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tableConfig = this._tableConfig?.internalValue;
    }
    if (this._tooltip?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tooltip = this._tooltip?.internalValue;
    }
    if (this._visualMaps?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.visualMaps = this._visualMaps?.internalValue;
    }
    if (this._xAxes?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.xAxes = this._xAxes?.internalValue;
    }
    if (this._yAxes?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.yAxes = this._yAxes?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleChronicleDashboardChartDashboardChartVisualization | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._groupingType = undefined;
      this._seriesColumn = undefined;
      this._thresholdColoringEnabled = undefined;
      this._button.internalValue = undefined;
      this._columnDefs.internalValue = undefined;
      this._googleMapsConfig.internalValue = undefined;
      this._legends.internalValue = undefined;
      this._markdown.internalValue = undefined;
      this._series.internalValue = undefined;
      this._tableConfig.internalValue = undefined;
      this._tooltip.internalValue = undefined;
      this._visualMaps.internalValue = undefined;
      this._xAxes.internalValue = undefined;
      this._yAxes.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._groupingType = value.groupingType;
      this._seriesColumn = value.seriesColumn;
      this._thresholdColoringEnabled = value.thresholdColoringEnabled;
      this._button.internalValue = value.button;
      this._columnDefs.internalValue = value.columnDefs;
      this._googleMapsConfig.internalValue = value.googleMapsConfig;
      this._legends.internalValue = value.legends;
      this._markdown.internalValue = value.markdown;
      this._series.internalValue = value.series;
      this._tableConfig.internalValue = value.tableConfig;
      this._tooltip.internalValue = value.tooltip;
      this._visualMaps.internalValue = value.visualMaps;
      this._xAxes.internalValue = value.xAxes;
      this._yAxes.internalValue = value.yAxes;
    }
  }

  // grouping_type - computed: false, optional: true, required: false
  private _groupingType?: string; 
  public get groupingType() {
    return this.getStringAttribute('grouping_type');
  }
  public set groupingType(value: string) {
    this._groupingType = value;
  }
  public resetGroupingType() {
    this._groupingType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupingTypeInput() {
    return this._groupingType;
  }

  // series_column - computed: false, optional: true, required: false
  private _seriesColumn?: string[]; 
  public get seriesColumn() {
    return this.getListAttribute('series_column');
  }
  public set seriesColumn(value: string[]) {
    this._seriesColumn = value;
  }
  public resetSeriesColumn() {
    this._seriesColumn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get seriesColumnInput() {
    return this._seriesColumn;
  }

  // threshold_coloring_enabled - computed: false, optional: true, required: false
  private _thresholdColoringEnabled?: boolean | cdktn.IResolvable; 
  public get thresholdColoringEnabled() {
    return this.getBooleanAttribute('threshold_coloring_enabled');
  }
  public set thresholdColoringEnabled(value: boolean | cdktn.IResolvable) {
    this._thresholdColoringEnabled = value;
  }
  public resetThresholdColoringEnabled() {
    this._thresholdColoringEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get thresholdColoringEnabledInput() {
    return this._thresholdColoringEnabled;
  }

  // button - computed: false, optional: true, required: false
  private _button = new GoogleChronicleDashboardChartDashboardChartVisualizationButtonOutputReference(this, "button");
  public get button() {
    return this._button;
  }
  public putButton(value: GoogleChronicleDashboardChartDashboardChartVisualizationButton) {
    this._button.internalValue = value;
  }
  public resetButton() {
    this._button.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get buttonInput() {
    return this._button.internalValue;
  }

  // column_defs - computed: false, optional: true, required: false
  private _columnDefs = new GoogleChronicleDashboardChartDashboardChartVisualizationColumnDefsList(this, "column_defs", false);
  public get columnDefs() {
    return this._columnDefs;
  }
  public putColumnDefs(value: GoogleChronicleDashboardChartDashboardChartVisualizationColumnDefs[] | cdktn.IResolvable) {
    this._columnDefs.internalValue = value;
  }
  public resetColumnDefs() {
    this._columnDefs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get columnDefsInput() {
    return this._columnDefs.internalValue;
  }

  // google_maps_config - computed: false, optional: true, required: false
  private _googleMapsConfig = new GoogleChronicleDashboardChartDashboardChartVisualizationGoogleMapsConfigOutputReference(this, "google_maps_config");
  public get googleMapsConfig() {
    return this._googleMapsConfig;
  }
  public putGoogleMapsConfig(value: GoogleChronicleDashboardChartDashboardChartVisualizationGoogleMapsConfig) {
    this._googleMapsConfig.internalValue = value;
  }
  public resetGoogleMapsConfig() {
    this._googleMapsConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get googleMapsConfigInput() {
    return this._googleMapsConfig.internalValue;
  }

  // legends - computed: false, optional: true, required: false
  private _legends = new GoogleChronicleDashboardChartDashboardChartVisualizationLegendsList(this, "legends", false);
  public get legends() {
    return this._legends;
  }
  public putLegends(value: GoogleChronicleDashboardChartDashboardChartVisualizationLegends[] | cdktn.IResolvable) {
    this._legends.internalValue = value;
  }
  public resetLegends() {
    this._legends.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get legendsInput() {
    return this._legends.internalValue;
  }

  // markdown - computed: false, optional: true, required: false
  private _markdown = new GoogleChronicleDashboardChartDashboardChartVisualizationMarkdownOutputReference(this, "markdown");
  public get markdown() {
    return this._markdown;
  }
  public putMarkdown(value: GoogleChronicleDashboardChartDashboardChartVisualizationMarkdown) {
    this._markdown.internalValue = value;
  }
  public resetMarkdown() {
    this._markdown.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get markdownInput() {
    return this._markdown.internalValue;
  }

  // series - computed: false, optional: true, required: false
  private _series = new GoogleChronicleDashboardChartDashboardChartVisualizationSeriesList(this, "series", false);
  public get series() {
    return this._series;
  }
  public putSeries(value: GoogleChronicleDashboardChartDashboardChartVisualizationSeries[] | cdktn.IResolvable) {
    this._series.internalValue = value;
  }
  public resetSeries() {
    this._series.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get seriesInput() {
    return this._series.internalValue;
  }

  // table_config - computed: false, optional: true, required: false
  private _tableConfig = new GoogleChronicleDashboardChartDashboardChartVisualizationTableConfigOutputReference(this, "table_config");
  public get tableConfig() {
    return this._tableConfig;
  }
  public putTableConfig(value: GoogleChronicleDashboardChartDashboardChartVisualizationTableConfig) {
    this._tableConfig.internalValue = value;
  }
  public resetTableConfig() {
    this._tableConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tableConfigInput() {
    return this._tableConfig.internalValue;
  }

  // tooltip - computed: false, optional: true, required: false
  private _tooltip = new GoogleChronicleDashboardChartDashboardChartVisualizationTooltipOutputReference(this, "tooltip");
  public get tooltip() {
    return this._tooltip;
  }
  public putTooltip(value: GoogleChronicleDashboardChartDashboardChartVisualizationTooltip) {
    this._tooltip.internalValue = value;
  }
  public resetTooltip() {
    this._tooltip.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tooltipInput() {
    return this._tooltip.internalValue;
  }

  // visual_maps - computed: false, optional: true, required: false
  private _visualMaps = new GoogleChronicleDashboardChartDashboardChartVisualizationVisualMapsList(this, "visual_maps", false);
  public get visualMaps() {
    return this._visualMaps;
  }
  public putVisualMaps(value: GoogleChronicleDashboardChartDashboardChartVisualizationVisualMaps[] | cdktn.IResolvable) {
    this._visualMaps.internalValue = value;
  }
  public resetVisualMaps() {
    this._visualMaps.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get visualMapsInput() {
    return this._visualMaps.internalValue;
  }

  // x_axes - computed: false, optional: true, required: false
  private _xAxes = new GoogleChronicleDashboardChartDashboardChartVisualizationXAxesList(this, "x_axes", false);
  public get xAxes() {
    return this._xAxes;
  }
  public putXAxes(value: GoogleChronicleDashboardChartDashboardChartVisualizationXAxes[] | cdktn.IResolvable) {
    this._xAxes.internalValue = value;
  }
  public resetXAxes() {
    this._xAxes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get xAxesInput() {
    return this._xAxes.internalValue;
  }

  // y_axes - computed: false, optional: true, required: false
  private _yAxes = new GoogleChronicleDashboardChartDashboardChartVisualizationYAxesList(this, "y_axes", false);
  public get yAxes() {
    return this._yAxes;
  }
  public putYAxes(value: GoogleChronicleDashboardChartDashboardChartVisualizationYAxes[] | cdktn.IResolvable) {
    this._yAxes.internalValue = value;
  }
  public resetYAxes() {
    this._yAxes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get yAxesInput() {
    return this._yAxes.internalValue;
  }
}
export interface GoogleChronicleDashboardChartDashboardChart {
  /**
  * Description of the dashboardChart.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_chronicle_dashboard_chart#description GoogleChronicleDashboardChart#description}
  */
  readonly description?: string;
  /**
  * Display name/Title of the dashboardChart visible to users.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_chronicle_dashboard_chart#display_name GoogleChronicleDashboardChart#display_name}
  */
  readonly displayName: string;
  /**
  * Type of tile (e.g., visualization, button, markdown). Possible values: ["TILE_TYPE_UNSPECIFIED", "TILE_TYPE_VISUALIZATION", "TILE_TYPE_BUTTON", "TILE_TYPE_MARKDOWN"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_chronicle_dashboard_chart#tile_type GoogleChronicleDashboardChart#tile_type}
  */
  readonly tileType?: string;
  /**
  * chart_datasource block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_chronicle_dashboard_chart#chart_datasource GoogleChronicleDashboardChart#chart_datasource}
  */
  readonly chartDatasource?: GoogleChronicleDashboardChartDashboardChartChartDatasource;
  /**
  * drill_down_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_chronicle_dashboard_chart#drill_down_config GoogleChronicleDashboardChart#drill_down_config}
  */
  readonly drillDownConfig?: GoogleChronicleDashboardChartDashboardChartDrillDownConfig;
  /**
  * visualization block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_chronicle_dashboard_chart#visualization GoogleChronicleDashboardChart#visualization}
  */
  readonly visualization: GoogleChronicleDashboardChartDashboardChartVisualization;
}

export function googleChronicleDashboardChartDashboardChartToTerraform(struct?: GoogleChronicleDashboardChartDashboardChartOutputReference | GoogleChronicleDashboardChartDashboardChart): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktn.stringToTerraform(struct!.description),
    display_name: cdktn.stringToTerraform(struct!.displayName),
    tile_type: cdktn.stringToTerraform(struct!.tileType),
    chart_datasource: googleChronicleDashboardChartDashboardChartChartDatasourceToTerraform(struct!.chartDatasource),
    drill_down_config: googleChronicleDashboardChartDashboardChartDrillDownConfigToTerraform(struct!.drillDownConfig),
    visualization: googleChronicleDashboardChartDashboardChartVisualizationToTerraform(struct!.visualization),
  }
}


export function googleChronicleDashboardChartDashboardChartToHclTerraform(struct?: GoogleChronicleDashboardChartDashboardChartOutputReference | GoogleChronicleDashboardChartDashboardChart): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    description: {
      value: cdktn.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    display_name: {
      value: cdktn.stringToHclTerraform(struct!.displayName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tile_type: {
      value: cdktn.stringToHclTerraform(struct!.tileType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    chart_datasource: {
      value: googleChronicleDashboardChartDashboardChartChartDatasourceToHclTerraform(struct!.chartDatasource),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleChronicleDashboardChartDashboardChartChartDatasourceList",
    },
    drill_down_config: {
      value: googleChronicleDashboardChartDashboardChartDrillDownConfigToHclTerraform(struct!.drillDownConfig),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleChronicleDashboardChartDashboardChartDrillDownConfigList",
    },
    visualization: {
      value: googleChronicleDashboardChartDashboardChartVisualizationToHclTerraform(struct!.visualization),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleChronicleDashboardChartDashboardChartVisualizationList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleChronicleDashboardChartDashboardChartOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleChronicleDashboardChartDashboardChart | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._displayName !== undefined) {
      hasAnyValues = true;
      internalValueResult.displayName = this._displayName;
    }
    if (this._tileType !== undefined) {
      hasAnyValues = true;
      internalValueResult.tileType = this._tileType;
    }
    if (this._chartDatasource?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.chartDatasource = this._chartDatasource?.internalValue;
    }
    if (this._drillDownConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.drillDownConfig = this._drillDownConfig?.internalValue;
    }
    if (this._visualization?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.visualization = this._visualization?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleChronicleDashboardChartDashboardChart | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._description = undefined;
      this._displayName = undefined;
      this._tileType = undefined;
      this._chartDatasource.internalValue = undefined;
      this._drillDownConfig.internalValue = undefined;
      this._visualization.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._description = value.description;
      this._displayName = value.displayName;
      this._tileType = value.tileType;
      this._chartDatasource.internalValue = value.chartDatasource;
      this._drillDownConfig.internalValue = value.drillDownConfig;
      this._visualization.internalValue = value.visualization;
    }
  }

  // description - computed: true, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
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

  // etag - computed: true, optional: false, required: false
  public get etag() {
    return this.getStringAttribute('etag');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // tile_type - computed: false, optional: true, required: false
  private _tileType?: string; 
  public get tileType() {
    return this.getStringAttribute('tile_type');
  }
  public set tileType(value: string) {
    this._tileType = value;
  }
  public resetTileType() {
    this._tileType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tileTypeInput() {
    return this._tileType;
  }

  // chart_datasource - computed: false, optional: true, required: false
  private _chartDatasource = new GoogleChronicleDashboardChartDashboardChartChartDatasourceOutputReference(this, "chart_datasource");
  public get chartDatasource() {
    return this._chartDatasource;
  }
  public putChartDatasource(value: GoogleChronicleDashboardChartDashboardChartChartDatasource) {
    this._chartDatasource.internalValue = value;
  }
  public resetChartDatasource() {
    this._chartDatasource.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get chartDatasourceInput() {
    return this._chartDatasource.internalValue;
  }

  // drill_down_config - computed: false, optional: true, required: false
  private _drillDownConfig = new GoogleChronicleDashboardChartDashboardChartDrillDownConfigOutputReference(this, "drill_down_config");
  public get drillDownConfig() {
    return this._drillDownConfig;
  }
  public putDrillDownConfig(value: GoogleChronicleDashboardChartDashboardChartDrillDownConfig) {
    this._drillDownConfig.internalValue = value;
  }
  public resetDrillDownConfig() {
    this._drillDownConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get drillDownConfigInput() {
    return this._drillDownConfig.internalValue;
  }

  // visualization - computed: false, optional: false, required: true
  private _visualization = new GoogleChronicleDashboardChartDashboardChartVisualizationOutputReference(this, "visualization");
  public get visualization() {
    return this._visualization;
  }
  public putVisualization(value: GoogleChronicleDashboardChartDashboardChartVisualization) {
    this._visualization.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get visualizationInput() {
    return this._visualization.internalValue;
  }
}
export interface GoogleChronicleDashboardChartDashboardQueryInputRelativeTime {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_chronicle_dashboard_chart#start_time_val GoogleChronicleDashboardChart#start_time_val}
  */
  readonly startTimeVal: string;
  /**
  * The time unit for the relative range. Possible values: ["SECOND", "MINUTE", "HOUR", "DAY", "WEEK", "MONTH", "YEAR"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_chronicle_dashboard_chart#time_unit GoogleChronicleDashboardChart#time_unit}
  */
  readonly timeUnit: string;
}

export function googleChronicleDashboardChartDashboardQueryInputRelativeTimeToTerraform(struct?: GoogleChronicleDashboardChartDashboardQueryInputRelativeTimeOutputReference | GoogleChronicleDashboardChartDashboardQueryInputRelativeTime): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    start_time_val: cdktn.stringToTerraform(struct!.startTimeVal),
    time_unit: cdktn.stringToTerraform(struct!.timeUnit),
  }
}


export function googleChronicleDashboardChartDashboardQueryInputRelativeTimeToHclTerraform(struct?: GoogleChronicleDashboardChartDashboardQueryInputRelativeTimeOutputReference | GoogleChronicleDashboardChartDashboardQueryInputRelativeTime): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    start_time_val: {
      value: cdktn.stringToHclTerraform(struct!.startTimeVal),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    time_unit: {
      value: cdktn.stringToHclTerraform(struct!.timeUnit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleChronicleDashboardChartDashboardQueryInputRelativeTimeOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleChronicleDashboardChartDashboardQueryInputRelativeTime | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._startTimeVal !== undefined) {
      hasAnyValues = true;
      internalValueResult.startTimeVal = this._startTimeVal;
    }
    if (this._timeUnit !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeUnit = this._timeUnit;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleChronicleDashboardChartDashboardQueryInputRelativeTime | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._startTimeVal = undefined;
      this._timeUnit = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._startTimeVal = value.startTimeVal;
      this._timeUnit = value.timeUnit;
    }
  }

  // start_time_val - computed: false, optional: false, required: true
  private _startTimeVal?: string; 
  public get startTimeVal() {
    return this.getStringAttribute('start_time_val');
  }
  public set startTimeVal(value: string) {
    this._startTimeVal = value;
  }
  // Temporarily expose input value. Use with caution.
  public get startTimeValInput() {
    return this._startTimeVal;
  }

  // time_unit - computed: false, optional: false, required: true
  private _timeUnit?: string; 
  public get timeUnit() {
    return this.getStringAttribute('time_unit');
  }
  public set timeUnit(value: string) {
    this._timeUnit = value;
  }
  // Temporarily expose input value. Use with caution.
  public get timeUnitInput() {
    return this._timeUnit;
  }
}
export interface GoogleChronicleDashboardChartDashboardQueryInputTimeWindow {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_chronicle_dashboard_chart#end_time GoogleChronicleDashboardChart#end_time}
  */
  readonly endTime?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_chronicle_dashboard_chart#start_time GoogleChronicleDashboardChart#start_time}
  */
  readonly startTime?: string;
}

export function googleChronicleDashboardChartDashboardQueryInputTimeWindowToTerraform(struct?: GoogleChronicleDashboardChartDashboardQueryInputTimeWindowOutputReference | GoogleChronicleDashboardChartDashboardQueryInputTimeWindow): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    end_time: cdktn.stringToTerraform(struct!.endTime),
    start_time: cdktn.stringToTerraform(struct!.startTime),
  }
}


export function googleChronicleDashboardChartDashboardQueryInputTimeWindowToHclTerraform(struct?: GoogleChronicleDashboardChartDashboardQueryInputTimeWindowOutputReference | GoogleChronicleDashboardChartDashboardQueryInputTimeWindow): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    end_time: {
      value: cdktn.stringToHclTerraform(struct!.endTime),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    start_time: {
      value: cdktn.stringToHclTerraform(struct!.startTime),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleChronicleDashboardChartDashboardQueryInputTimeWindowOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleChronicleDashboardChartDashboardQueryInputTimeWindow | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._endTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.endTime = this._endTime;
    }
    if (this._startTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.startTime = this._startTime;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleChronicleDashboardChartDashboardQueryInputTimeWindow | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._endTime = undefined;
      this._startTime = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._endTime = value.endTime;
      this._startTime = value.startTime;
    }
  }

  // end_time - computed: false, optional: true, required: false
  private _endTime?: string; 
  public get endTime() {
    return this.getStringAttribute('end_time');
  }
  public set endTime(value: string) {
    this._endTime = value;
  }
  public resetEndTime() {
    this._endTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endTimeInput() {
    return this._endTime;
  }

  // start_time - computed: false, optional: true, required: false
  private _startTime?: string; 
  public get startTime() {
    return this.getStringAttribute('start_time');
  }
  public set startTime(value: string) {
    this._startTime = value;
  }
  public resetStartTime() {
    this._startTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startTimeInput() {
    return this._startTime;
  }
}
export interface GoogleChronicleDashboardChartDashboardQueryInput {
  /**
  * relative_time block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_chronicle_dashboard_chart#relative_time GoogleChronicleDashboardChart#relative_time}
  */
  readonly relativeTime?: GoogleChronicleDashboardChartDashboardQueryInputRelativeTime;
  /**
  * time_window block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_chronicle_dashboard_chart#time_window GoogleChronicleDashboardChart#time_window}
  */
  readonly timeWindow?: GoogleChronicleDashboardChartDashboardQueryInputTimeWindow;
}

export function googleChronicleDashboardChartDashboardQueryInputToTerraform(struct?: GoogleChronicleDashboardChartDashboardQueryInputOutputReference | GoogleChronicleDashboardChartDashboardQueryInput): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    relative_time: googleChronicleDashboardChartDashboardQueryInputRelativeTimeToTerraform(struct!.relativeTime),
    time_window: googleChronicleDashboardChartDashboardQueryInputTimeWindowToTerraform(struct!.timeWindow),
  }
}


export function googleChronicleDashboardChartDashboardQueryInputToHclTerraform(struct?: GoogleChronicleDashboardChartDashboardQueryInputOutputReference | GoogleChronicleDashboardChartDashboardQueryInput): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    relative_time: {
      value: googleChronicleDashboardChartDashboardQueryInputRelativeTimeToHclTerraform(struct!.relativeTime),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleChronicleDashboardChartDashboardQueryInputRelativeTimeList",
    },
    time_window: {
      value: googleChronicleDashboardChartDashboardQueryInputTimeWindowToHclTerraform(struct!.timeWindow),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleChronicleDashboardChartDashboardQueryInputTimeWindowList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleChronicleDashboardChartDashboardQueryInputOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleChronicleDashboardChartDashboardQueryInput | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._relativeTime?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.relativeTime = this._relativeTime?.internalValue;
    }
    if (this._timeWindow?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeWindow = this._timeWindow?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleChronicleDashboardChartDashboardQueryInput | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._relativeTime.internalValue = undefined;
      this._timeWindow.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._relativeTime.internalValue = value.relativeTime;
      this._timeWindow.internalValue = value.timeWindow;
    }
  }

  // relative_time - computed: false, optional: true, required: false
  private _relativeTime = new GoogleChronicleDashboardChartDashboardQueryInputRelativeTimeOutputReference(this, "relative_time");
  public get relativeTime() {
    return this._relativeTime;
  }
  public putRelativeTime(value: GoogleChronicleDashboardChartDashboardQueryInputRelativeTime) {
    this._relativeTime.internalValue = value;
  }
  public resetRelativeTime() {
    this._relativeTime.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get relativeTimeInput() {
    return this._relativeTime.internalValue;
  }

  // time_window - computed: false, optional: true, required: false
  private _timeWindow = new GoogleChronicleDashboardChartDashboardQueryInputTimeWindowOutputReference(this, "time_window");
  public get timeWindow() {
    return this._timeWindow;
  }
  public putTimeWindow(value: GoogleChronicleDashboardChartDashboardQueryInputTimeWindow) {
    this._timeWindow.internalValue = value;
  }
  public resetTimeWindow() {
    this._timeWindow.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeWindowInput() {
    return this._timeWindow.internalValue;
  }
}
export interface GoogleChronicleDashboardChartDashboardQuery {
  /**
  * The raw query string.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_chronicle_dashboard_chart#query GoogleChronicleDashboardChart#query}
  */
  readonly query: string;
  /**
  * input block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_chronicle_dashboard_chart#input GoogleChronicleDashboardChart#input}
  */
  readonly input?: GoogleChronicleDashboardChartDashboardQueryInput;
}

export function googleChronicleDashboardChartDashboardQueryToTerraform(struct?: GoogleChronicleDashboardChartDashboardQueryOutputReference | GoogleChronicleDashboardChartDashboardQuery): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    query: cdktn.stringToTerraform(struct!.query),
    input: googleChronicleDashboardChartDashboardQueryInputToTerraform(struct!.input),
  }
}


export function googleChronicleDashboardChartDashboardQueryToHclTerraform(struct?: GoogleChronicleDashboardChartDashboardQueryOutputReference | GoogleChronicleDashboardChartDashboardQuery): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    query: {
      value: cdktn.stringToHclTerraform(struct!.query),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    input: {
      value: googleChronicleDashboardChartDashboardQueryInputToHclTerraform(struct!.input),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleChronicleDashboardChartDashboardQueryInputList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleChronicleDashboardChartDashboardQueryOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleChronicleDashboardChartDashboardQuery | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._query !== undefined) {
      hasAnyValues = true;
      internalValueResult.query = this._query;
    }
    if (this._input?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.input = this._input?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleChronicleDashboardChartDashboardQuery | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._query = undefined;
      this._input.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._query = value.query;
      this._input.internalValue = value.input;
    }
  }

  // etag - computed: true, optional: false, required: false
  public get etag() {
    return this.getStringAttribute('etag');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // query - computed: false, optional: false, required: true
  private _query?: string; 
  public get query() {
    return this.getStringAttribute('query');
  }
  public set query(value: string) {
    this._query = value;
  }
  // Temporarily expose input value. Use with caution.
  public get queryInput() {
    return this._query;
  }

  // input - computed: false, optional: true, required: false
  private _input = new GoogleChronicleDashboardChartDashboardQueryInputOutputReference(this, "input");
  public get input() {
    return this._input;
  }
  public putInput(value: GoogleChronicleDashboardChartDashboardQueryInput) {
    this._input.internalValue = value;
  }
  public resetInput() {
    this._input.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inputInput() {
    return this._input.internalValue;
  }
}
export interface GoogleChronicleDashboardChartTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_chronicle_dashboard_chart#create GoogleChronicleDashboardChart#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_chronicle_dashboard_chart#delete GoogleChronicleDashboardChart#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_chronicle_dashboard_chart#update GoogleChronicleDashboardChart#update}
  */
  readonly update?: string;
}

export function googleChronicleDashboardChartTimeoutsToTerraform(struct?: GoogleChronicleDashboardChartTimeouts | cdktn.IResolvable): any {
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


export function googleChronicleDashboardChartTimeoutsToHclTerraform(struct?: GoogleChronicleDashboardChartTimeouts | cdktn.IResolvable): any {
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

export class GoogleChronicleDashboardChartTimeoutsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GoogleChronicleDashboardChartTimeouts | cdktn.IResolvable | undefined {
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

  public set internalValue(value: GoogleChronicleDashboardChartTimeouts | cdktn.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_chronicle_dashboard_chart google_chronicle_dashboard_chart}
*/
export class GoogleChronicleDashboardChart extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_chronicle_dashboard_chart";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a GoogleChronicleDashboardChart resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the GoogleChronicleDashboardChart to import
  * @param importFromId The id of the existing GoogleChronicleDashboardChart that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_chronicle_dashboard_chart#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the GoogleChronicleDashboardChart to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "google_chronicle_dashboard_chart", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_chronicle_dashboard_chart google_chronicle_dashboard_chart} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GoogleChronicleDashboardChartConfig
  */
  public constructor(scope: Construct, id: string, config: GoogleChronicleDashboardChartConfig) {
    super(scope, id, {
      terraformResourceType: 'google_chronicle_dashboard_chart',
      terraformGeneratorMetadata: {
        providerName: 'google-beta',
        providerVersion: '7.31.0',
        providerVersionConstraint: '~> 7.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._id = config.id;
    this._instance = config.instance;
    this._location = config.location;
    this._nativeDashboard = config.nativeDashboard;
    this._project = config.project;
    this._chartLayout.internalValue = config.chartLayout;
    this._dashboardChart.internalValue = config.dashboardChart;
    this._dashboardQuery.internalValue = config.dashboardQuery;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // chart_id - computed: true, optional: false, required: false
  public get chartId() {
    return this.getStringAttribute('chart_id');
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

  // instance - computed: false, optional: false, required: true
  private _instance?: string; 
  public get instance() {
    return this.getStringAttribute('instance');
  }
  public set instance(value: string) {
    this._instance = value;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceInput() {
    return this._instance;
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

  // native_dashboard - computed: false, optional: true, required: false
  private _nativeDashboard?: string; 
  public get nativeDashboard() {
    return this.getStringAttribute('native_dashboard');
  }
  public set nativeDashboard(value: string) {
    this._nativeDashboard = value;
  }
  public resetNativeDashboard() {
    this._nativeDashboard = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nativeDashboardInput() {
    return this._nativeDashboard;
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

  // chart_layout - computed: false, optional: true, required: false
  private _chartLayout = new GoogleChronicleDashboardChartChartLayoutOutputReference(this, "chart_layout");
  public get chartLayout() {
    return this._chartLayout;
  }
  public putChartLayout(value: GoogleChronicleDashboardChartChartLayout) {
    this._chartLayout.internalValue = value;
  }
  public resetChartLayout() {
    this._chartLayout.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get chartLayoutInput() {
    return this._chartLayout.internalValue;
  }

  // dashboard_chart - computed: false, optional: false, required: true
  private _dashboardChart = new GoogleChronicleDashboardChartDashboardChartOutputReference(this, "dashboard_chart");
  public get dashboardChart() {
    return this._dashboardChart;
  }
  public putDashboardChart(value: GoogleChronicleDashboardChartDashboardChart) {
    this._dashboardChart.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dashboardChartInput() {
    return this._dashboardChart.internalValue;
  }

  // dashboard_query - computed: false, optional: true, required: false
  private _dashboardQuery = new GoogleChronicleDashboardChartDashboardQueryOutputReference(this, "dashboard_query");
  public get dashboardQuery() {
    return this._dashboardQuery;
  }
  public putDashboardQuery(value: GoogleChronicleDashboardChartDashboardQuery) {
    this._dashboardQuery.internalValue = value;
  }
  public resetDashboardQuery() {
    this._dashboardQuery.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dashboardQueryInput() {
    return this._dashboardQuery.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new GoogleChronicleDashboardChartTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: GoogleChronicleDashboardChartTimeouts) {
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
      id: cdktn.stringToTerraform(this._id),
      instance: cdktn.stringToTerraform(this._instance),
      location: cdktn.stringToTerraform(this._location),
      native_dashboard: cdktn.stringToTerraform(this._nativeDashboard),
      project: cdktn.stringToTerraform(this._project),
      chart_layout: googleChronicleDashboardChartChartLayoutToTerraform(this._chartLayout.internalValue),
      dashboard_chart: googleChronicleDashboardChartDashboardChartToTerraform(this._dashboardChart.internalValue),
      dashboard_query: googleChronicleDashboardChartDashboardQueryToTerraform(this._dashboardQuery.internalValue),
      timeouts: googleChronicleDashboardChartTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktn.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      instance: {
        value: cdktn.stringToHclTerraform(this._instance),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      location: {
        value: cdktn.stringToHclTerraform(this._location),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      native_dashboard: {
        value: cdktn.stringToHclTerraform(this._nativeDashboard),
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
      chart_layout: {
        value: googleChronicleDashboardChartChartLayoutToHclTerraform(this._chartLayout.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleChronicleDashboardChartChartLayoutList",
      },
      dashboard_chart: {
        value: googleChronicleDashboardChartDashboardChartToHclTerraform(this._dashboardChart.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleChronicleDashboardChartDashboardChartList",
      },
      dashboard_query: {
        value: googleChronicleDashboardChartDashboardQueryToHclTerraform(this._dashboardQuery.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleChronicleDashboardChartDashboardQueryList",
      },
      timeouts: {
        value: googleChronicleDashboardChartTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "GoogleChronicleDashboardChartTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
