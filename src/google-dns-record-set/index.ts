/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_dns_record_set
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface GoogleDnsRecordSetConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_dns_record_set#id GoogleDnsRecordSet#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The name of the zone in which this record set will reside.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_dns_record_set#managed_zone GoogleDnsRecordSet#managed_zone}
  */
  readonly managedZone: string;
  /**
  * The DNS name this record set will apply to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_dns_record_set#name GoogleDnsRecordSet#name}
  */
  readonly name: string;
  /**
  * The ID of the project in which the resource belongs. If it is not provided, the provider project is used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_dns_record_set#project GoogleDnsRecordSet#project}
  */
  readonly project?: string;
  /**
  * The string data for the records in this record set whose meaning depends on the DNS type. For TXT record, if the string data contains spaces, add surrounding \" if you don't want your string to get split on spaces. To specify a single record value longer than 255 characters such as a TXT record for DKIM, add \"\" inside the Terraform configuration string (e.g. "first255characters\"\"morecharacters").
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_dns_record_set#rrdatas GoogleDnsRecordSet#rrdatas}
  */
  readonly rrdatas?: string[];
  /**
  * The time-to-live of this record set (seconds).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_dns_record_set#ttl GoogleDnsRecordSet#ttl}
  */
  readonly ttl?: number;
  /**
  * The DNS record set type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_dns_record_set#type GoogleDnsRecordSet#type}
  */
  readonly type: string;
  /**
  * routing_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_dns_record_set#routing_policy GoogleDnsRecordSet#routing_policy}
  */
  readonly routingPolicy?: GoogleDnsRecordSetRoutingPolicy;
}
export interface GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancers {
  /**
  * The frontend IP address of the load balancer.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_dns_record_set#ip_address GoogleDnsRecordSet#ip_address}
  */
  readonly ipAddress: string;
  /**
  * The configured IP protocol of the load balancer. This value is case-sensitive. Possible values: ["tcp", "udp"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_dns_record_set#ip_protocol GoogleDnsRecordSet#ip_protocol}
  */
  readonly ipProtocol: string;
  /**
  * The type of load balancer. This value is case-sensitive. Possible values: ["regionalL4ilb", "regionalL7ilb", "globalL7ilb"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_dns_record_set#load_balancer_type GoogleDnsRecordSet#load_balancer_type}
  */
  readonly loadBalancerType?: string;
  /**
  * The fully qualified url of the network in which the load balancer belongs. This should be formatted like `https://www.googleapis.com/compute/v1/projects/{project}/global/networks/{network}`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_dns_record_set#network_url GoogleDnsRecordSet#network_url}
  */
  readonly networkUrl: string;
  /**
  * The configured port of the load balancer.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_dns_record_set#port GoogleDnsRecordSet#port}
  */
  readonly port: string;
  /**
  * The ID of the project in which the load balancer belongs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_dns_record_set#project GoogleDnsRecordSet#project}
  */
  readonly project: string;
  /**
  * The region of the load balancer. Only needed for regional load balancers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_dns_record_set#region GoogleDnsRecordSet#region}
  */
  readonly region?: string;
}

export function googleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancersToTerraform(struct?: GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancers | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ip_address: cdktn.stringToTerraform(struct!.ipAddress),
    ip_protocol: cdktn.stringToTerraform(struct!.ipProtocol),
    load_balancer_type: cdktn.stringToTerraform(struct!.loadBalancerType),
    network_url: cdktn.stringToTerraform(struct!.networkUrl),
    port: cdktn.stringToTerraform(struct!.port),
    project: cdktn.stringToTerraform(struct!.project),
    region: cdktn.stringToTerraform(struct!.region),
  }
}


export function googleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancersToHclTerraform(struct?: GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancers | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ip_address: {
      value: cdktn.stringToHclTerraform(struct!.ipAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ip_protocol: {
      value: cdktn.stringToHclTerraform(struct!.ipProtocol),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    load_balancer_type: {
      value: cdktn.stringToHclTerraform(struct!.loadBalancerType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    network_url: {
      value: cdktn.stringToHclTerraform(struct!.networkUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port: {
      value: cdktn.stringToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    project: {
      value: cdktn.stringToHclTerraform(struct!.project),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    region: {
      value: cdktn.stringToHclTerraform(struct!.region),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancersOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancers | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ipAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipAddress = this._ipAddress;
    }
    if (this._ipProtocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipProtocol = this._ipProtocol;
    }
    if (this._loadBalancerType !== undefined) {
      hasAnyValues = true;
      internalValueResult.loadBalancerType = this._loadBalancerType;
    }
    if (this._networkUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkUrl = this._networkUrl;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._project !== undefined) {
      hasAnyValues = true;
      internalValueResult.project = this._project;
    }
    if (this._region !== undefined) {
      hasAnyValues = true;
      internalValueResult.region = this._region;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancers | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ipAddress = undefined;
      this._ipProtocol = undefined;
      this._loadBalancerType = undefined;
      this._networkUrl = undefined;
      this._port = undefined;
      this._project = undefined;
      this._region = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ipAddress = value.ipAddress;
      this._ipProtocol = value.ipProtocol;
      this._loadBalancerType = value.loadBalancerType;
      this._networkUrl = value.networkUrl;
      this._port = value.port;
      this._project = value.project;
      this._region = value.region;
    }
  }

  // ip_address - computed: false, optional: false, required: true
  private _ipAddress?: string; 
  public get ipAddress() {
    return this.getStringAttribute('ip_address');
  }
  public set ipAddress(value: string) {
    this._ipAddress = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipAddressInput() {
    return this._ipAddress;
  }

  // ip_protocol - computed: false, optional: false, required: true
  private _ipProtocol?: string; 
  public get ipProtocol() {
    return this.getStringAttribute('ip_protocol');
  }
  public set ipProtocol(value: string) {
    this._ipProtocol = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipProtocolInput() {
    return this._ipProtocol;
  }

  // load_balancer_type - computed: false, optional: true, required: false
  private _loadBalancerType?: string; 
  public get loadBalancerType() {
    return this.getStringAttribute('load_balancer_type');
  }
  public set loadBalancerType(value: string) {
    this._loadBalancerType = value;
  }
  public resetLoadBalancerType() {
    this._loadBalancerType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loadBalancerTypeInput() {
    return this._loadBalancerType;
  }

  // network_url - computed: false, optional: false, required: true
  private _networkUrl?: string; 
  public get networkUrl() {
    return this.getStringAttribute('network_url');
  }
  public set networkUrl(value: string) {
    this._networkUrl = value;
  }
  // Temporarily expose input value. Use with caution.
  public get networkUrlInput() {
    return this._networkUrl;
  }

  // port - computed: false, optional: false, required: true
  private _port?: string; 
  public get port() {
    return this.getStringAttribute('port');
  }
  public set port(value: string) {
    this._port = value;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // project - computed: false, optional: false, required: true
  private _project?: string; 
  public get project() {
    return this.getStringAttribute('project');
  }
  public set project(value: string) {
    this._project = value;
  }
  // Temporarily expose input value. Use with caution.
  public get projectInput() {
    return this._project;
  }

  // region - computed: false, optional: true, required: false
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  public resetRegion() {
    this._region = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }
}

export class GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancersList extends cdktn.ComplexList {
  public internalValue? : GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancers[] | cdktn.IResolvable

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
  public get(index: number): GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancersOutputReference {
    return new GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargets {
  /**
  * The Internet IP addresses to be health checked.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_dns_record_set#external_endpoints GoogleDnsRecordSet#external_endpoints}
  */
  readonly externalEndpoints?: string[];
  /**
  * internal_load_balancers block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_dns_record_set#internal_load_balancers GoogleDnsRecordSet#internal_load_balancers}
  */
  readonly internalLoadBalancers?: GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancers[] | cdktn.IResolvable;
}

export function googleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsToTerraform(struct?: GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsOutputReference | GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargets): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    external_endpoints: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.externalEndpoints),
    internal_load_balancers: cdktn.listMapper(googleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancersToTerraform, true)(struct!.internalLoadBalancers),
  }
}


export function googleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsToHclTerraform(struct?: GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsOutputReference | GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargets): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    external_endpoints: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.externalEndpoints),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    internal_load_balancers: {
      value: cdktn.listMapperHcl(googleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancersToHclTerraform, true)(struct!.internalLoadBalancers),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancersList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargets | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._externalEndpoints !== undefined) {
      hasAnyValues = true;
      internalValueResult.externalEndpoints = this._externalEndpoints;
    }
    if (this._internalLoadBalancers?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.internalLoadBalancers = this._internalLoadBalancers?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargets | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._externalEndpoints = undefined;
      this._internalLoadBalancers.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._externalEndpoints = value.externalEndpoints;
      this._internalLoadBalancers.internalValue = value.internalLoadBalancers;
    }
  }

  // external_endpoints - computed: false, optional: true, required: false
  private _externalEndpoints?: string[]; 
  public get externalEndpoints() {
    return this.getListAttribute('external_endpoints');
  }
  public set externalEndpoints(value: string[]) {
    this._externalEndpoints = value;
  }
  public resetExternalEndpoints() {
    this._externalEndpoints = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalEndpointsInput() {
    return this._externalEndpoints;
  }

  // internal_load_balancers - computed: false, optional: true, required: false
  private _internalLoadBalancers = new GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancersList(this, "internal_load_balancers", false);
  public get internalLoadBalancers() {
    return this._internalLoadBalancers;
  }
  public putInternalLoadBalancers(value: GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancers[] | cdktn.IResolvable) {
    this._internalLoadBalancers.internalValue = value;
  }
  public resetInternalLoadBalancers() {
    this._internalLoadBalancers.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get internalLoadBalancersInput() {
    return this._internalLoadBalancers.internalValue;
  }
}
export interface GoogleDnsRecordSetRoutingPolicyGeo {
  /**
  * The location name defined in Google Cloud.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_dns_record_set#location GoogleDnsRecordSet#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_dns_record_set#rrdatas GoogleDnsRecordSet#rrdatas}
  */
  readonly rrdatas?: string[];
  /**
  * health_checked_targets block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_dns_record_set#health_checked_targets GoogleDnsRecordSet#health_checked_targets}
  */
  readonly healthCheckedTargets?: GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargets;
}

export function googleDnsRecordSetRoutingPolicyGeoToTerraform(struct?: GoogleDnsRecordSetRoutingPolicyGeo | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    location: cdktn.stringToTerraform(struct!.location),
    rrdatas: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.rrdatas),
    health_checked_targets: googleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsToTerraform(struct!.healthCheckedTargets),
  }
}


export function googleDnsRecordSetRoutingPolicyGeoToHclTerraform(struct?: GoogleDnsRecordSetRoutingPolicyGeo | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    location: {
      value: cdktn.stringToHclTerraform(struct!.location),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    rrdatas: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.rrdatas),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    health_checked_targets: {
      value: googleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsToHclTerraform(struct!.healthCheckedTargets),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDnsRecordSetRoutingPolicyGeoOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): GoogleDnsRecordSetRoutingPolicyGeo | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._location !== undefined) {
      hasAnyValues = true;
      internalValueResult.location = this._location;
    }
    if (this._rrdatas !== undefined) {
      hasAnyValues = true;
      internalValueResult.rrdatas = this._rrdatas;
    }
    if (this._healthCheckedTargets?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.healthCheckedTargets = this._healthCheckedTargets?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDnsRecordSetRoutingPolicyGeo | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._location = undefined;
      this._rrdatas = undefined;
      this._healthCheckedTargets.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._location = value.location;
      this._rrdatas = value.rrdatas;
      this._healthCheckedTargets.internalValue = value.healthCheckedTargets;
    }
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

  // rrdatas - computed: false, optional: true, required: false
  private _rrdatas?: string[]; 
  public get rrdatas() {
    return this.getListAttribute('rrdatas');
  }
  public set rrdatas(value: string[]) {
    this._rrdatas = value;
  }
  public resetRrdatas() {
    this._rrdatas = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rrdatasInput() {
    return this._rrdatas;
  }

  // health_checked_targets - computed: false, optional: true, required: false
  private _healthCheckedTargets = new GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsOutputReference(this, "health_checked_targets");
  public get healthCheckedTargets() {
    return this._healthCheckedTargets;
  }
  public putHealthCheckedTargets(value: GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargets) {
    this._healthCheckedTargets.internalValue = value;
  }
  public resetHealthCheckedTargets() {
    this._healthCheckedTargets.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get healthCheckedTargetsInput() {
    return this._healthCheckedTargets.internalValue;
  }
}

export class GoogleDnsRecordSetRoutingPolicyGeoList extends cdktn.ComplexList {
  public internalValue? : GoogleDnsRecordSetRoutingPolicyGeo[] | cdktn.IResolvable

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
  public get(index: number): GoogleDnsRecordSetRoutingPolicyGeoOutputReference {
    return new GoogleDnsRecordSetRoutingPolicyGeoOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancers {
  /**
  * The frontend IP address of the load balancer.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_dns_record_set#ip_address GoogleDnsRecordSet#ip_address}
  */
  readonly ipAddress: string;
  /**
  * The configured IP protocol of the load balancer. This value is case-sensitive. Possible values: ["tcp", "udp"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_dns_record_set#ip_protocol GoogleDnsRecordSet#ip_protocol}
  */
  readonly ipProtocol: string;
  /**
  * The type of load balancer. This value is case-sensitive. Possible values: ["regionalL4ilb", "regionalL7ilb", "globalL7ilb"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_dns_record_set#load_balancer_type GoogleDnsRecordSet#load_balancer_type}
  */
  readonly loadBalancerType?: string;
  /**
  * The fully qualified url of the network in which the load balancer belongs. This should be formatted like `https://www.googleapis.com/compute/v1/projects/{project}/global/networks/{network}`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_dns_record_set#network_url GoogleDnsRecordSet#network_url}
  */
  readonly networkUrl: string;
  /**
  * The configured port of the load balancer.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_dns_record_set#port GoogleDnsRecordSet#port}
  */
  readonly port: string;
  /**
  * The ID of the project in which the load balancer belongs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_dns_record_set#project GoogleDnsRecordSet#project}
  */
  readonly project: string;
  /**
  * The region of the load balancer. Only needed for regional load balancers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_dns_record_set#region GoogleDnsRecordSet#region}
  */
  readonly region?: string;
}

export function googleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancersToTerraform(struct?: GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancers | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ip_address: cdktn.stringToTerraform(struct!.ipAddress),
    ip_protocol: cdktn.stringToTerraform(struct!.ipProtocol),
    load_balancer_type: cdktn.stringToTerraform(struct!.loadBalancerType),
    network_url: cdktn.stringToTerraform(struct!.networkUrl),
    port: cdktn.stringToTerraform(struct!.port),
    project: cdktn.stringToTerraform(struct!.project),
    region: cdktn.stringToTerraform(struct!.region),
  }
}


export function googleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancersToHclTerraform(struct?: GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancers | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ip_address: {
      value: cdktn.stringToHclTerraform(struct!.ipAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ip_protocol: {
      value: cdktn.stringToHclTerraform(struct!.ipProtocol),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    load_balancer_type: {
      value: cdktn.stringToHclTerraform(struct!.loadBalancerType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    network_url: {
      value: cdktn.stringToHclTerraform(struct!.networkUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port: {
      value: cdktn.stringToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    project: {
      value: cdktn.stringToHclTerraform(struct!.project),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    region: {
      value: cdktn.stringToHclTerraform(struct!.region),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancersOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancers | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ipAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipAddress = this._ipAddress;
    }
    if (this._ipProtocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipProtocol = this._ipProtocol;
    }
    if (this._loadBalancerType !== undefined) {
      hasAnyValues = true;
      internalValueResult.loadBalancerType = this._loadBalancerType;
    }
    if (this._networkUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkUrl = this._networkUrl;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._project !== undefined) {
      hasAnyValues = true;
      internalValueResult.project = this._project;
    }
    if (this._region !== undefined) {
      hasAnyValues = true;
      internalValueResult.region = this._region;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancers | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ipAddress = undefined;
      this._ipProtocol = undefined;
      this._loadBalancerType = undefined;
      this._networkUrl = undefined;
      this._port = undefined;
      this._project = undefined;
      this._region = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ipAddress = value.ipAddress;
      this._ipProtocol = value.ipProtocol;
      this._loadBalancerType = value.loadBalancerType;
      this._networkUrl = value.networkUrl;
      this._port = value.port;
      this._project = value.project;
      this._region = value.region;
    }
  }

  // ip_address - computed: false, optional: false, required: true
  private _ipAddress?: string; 
  public get ipAddress() {
    return this.getStringAttribute('ip_address');
  }
  public set ipAddress(value: string) {
    this._ipAddress = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipAddressInput() {
    return this._ipAddress;
  }

  // ip_protocol - computed: false, optional: false, required: true
  private _ipProtocol?: string; 
  public get ipProtocol() {
    return this.getStringAttribute('ip_protocol');
  }
  public set ipProtocol(value: string) {
    this._ipProtocol = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipProtocolInput() {
    return this._ipProtocol;
  }

  // load_balancer_type - computed: false, optional: true, required: false
  private _loadBalancerType?: string; 
  public get loadBalancerType() {
    return this.getStringAttribute('load_balancer_type');
  }
  public set loadBalancerType(value: string) {
    this._loadBalancerType = value;
  }
  public resetLoadBalancerType() {
    this._loadBalancerType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loadBalancerTypeInput() {
    return this._loadBalancerType;
  }

  // network_url - computed: false, optional: false, required: true
  private _networkUrl?: string; 
  public get networkUrl() {
    return this.getStringAttribute('network_url');
  }
  public set networkUrl(value: string) {
    this._networkUrl = value;
  }
  // Temporarily expose input value. Use with caution.
  public get networkUrlInput() {
    return this._networkUrl;
  }

  // port - computed: false, optional: false, required: true
  private _port?: string; 
  public get port() {
    return this.getStringAttribute('port');
  }
  public set port(value: string) {
    this._port = value;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // project - computed: false, optional: false, required: true
  private _project?: string; 
  public get project() {
    return this.getStringAttribute('project');
  }
  public set project(value: string) {
    this._project = value;
  }
  // Temporarily expose input value. Use with caution.
  public get projectInput() {
    return this._project;
  }

  // region - computed: false, optional: true, required: false
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  public resetRegion() {
    this._region = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }
}

export class GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancersList extends cdktn.ComplexList {
  public internalValue? : GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancers[] | cdktn.IResolvable

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
  public get(index: number): GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancersOutputReference {
    return new GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargets {
  /**
  * The Internet IP addresses to be health checked.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_dns_record_set#external_endpoints GoogleDnsRecordSet#external_endpoints}
  */
  readonly externalEndpoints?: string[];
  /**
  * internal_load_balancers block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_dns_record_set#internal_load_balancers GoogleDnsRecordSet#internal_load_balancers}
  */
  readonly internalLoadBalancers?: GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancers[] | cdktn.IResolvable;
}

export function googleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsToTerraform(struct?: GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsOutputReference | GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargets): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    external_endpoints: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.externalEndpoints),
    internal_load_balancers: cdktn.listMapper(googleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancersToTerraform, true)(struct!.internalLoadBalancers),
  }
}


export function googleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsToHclTerraform(struct?: GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsOutputReference | GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargets): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    external_endpoints: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.externalEndpoints),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    internal_load_balancers: {
      value: cdktn.listMapperHcl(googleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancersToHclTerraform, true)(struct!.internalLoadBalancers),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancersList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargets | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._externalEndpoints !== undefined) {
      hasAnyValues = true;
      internalValueResult.externalEndpoints = this._externalEndpoints;
    }
    if (this._internalLoadBalancers?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.internalLoadBalancers = this._internalLoadBalancers?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargets | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._externalEndpoints = undefined;
      this._internalLoadBalancers.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._externalEndpoints = value.externalEndpoints;
      this._internalLoadBalancers.internalValue = value.internalLoadBalancers;
    }
  }

  // external_endpoints - computed: false, optional: true, required: false
  private _externalEndpoints?: string[]; 
  public get externalEndpoints() {
    return this.getListAttribute('external_endpoints');
  }
  public set externalEndpoints(value: string[]) {
    this._externalEndpoints = value;
  }
  public resetExternalEndpoints() {
    this._externalEndpoints = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalEndpointsInput() {
    return this._externalEndpoints;
  }

  // internal_load_balancers - computed: false, optional: true, required: false
  private _internalLoadBalancers = new GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancersList(this, "internal_load_balancers", false);
  public get internalLoadBalancers() {
    return this._internalLoadBalancers;
  }
  public putInternalLoadBalancers(value: GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancers[] | cdktn.IResolvable) {
    this._internalLoadBalancers.internalValue = value;
  }
  public resetInternalLoadBalancers() {
    this._internalLoadBalancers.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get internalLoadBalancersInput() {
    return this._internalLoadBalancers.internalValue;
  }
}
export interface GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeo {
  /**
  * The location name defined in Google Cloud.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_dns_record_set#location GoogleDnsRecordSet#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_dns_record_set#rrdatas GoogleDnsRecordSet#rrdatas}
  */
  readonly rrdatas?: string[];
  /**
  * health_checked_targets block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_dns_record_set#health_checked_targets GoogleDnsRecordSet#health_checked_targets}
  */
  readonly healthCheckedTargets?: GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargets;
}

export function googleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoToTerraform(struct?: GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeo | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    location: cdktn.stringToTerraform(struct!.location),
    rrdatas: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.rrdatas),
    health_checked_targets: googleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsToTerraform(struct!.healthCheckedTargets),
  }
}


export function googleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoToHclTerraform(struct?: GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeo | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    location: {
      value: cdktn.stringToHclTerraform(struct!.location),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    rrdatas: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.rrdatas),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    health_checked_targets: {
      value: googleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsToHclTerraform(struct!.healthCheckedTargets),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeo | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._location !== undefined) {
      hasAnyValues = true;
      internalValueResult.location = this._location;
    }
    if (this._rrdatas !== undefined) {
      hasAnyValues = true;
      internalValueResult.rrdatas = this._rrdatas;
    }
    if (this._healthCheckedTargets?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.healthCheckedTargets = this._healthCheckedTargets?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeo | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._location = undefined;
      this._rrdatas = undefined;
      this._healthCheckedTargets.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._location = value.location;
      this._rrdatas = value.rrdatas;
      this._healthCheckedTargets.internalValue = value.healthCheckedTargets;
    }
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

  // rrdatas - computed: false, optional: true, required: false
  private _rrdatas?: string[]; 
  public get rrdatas() {
    return this.getListAttribute('rrdatas');
  }
  public set rrdatas(value: string[]) {
    this._rrdatas = value;
  }
  public resetRrdatas() {
    this._rrdatas = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rrdatasInput() {
    return this._rrdatas;
  }

  // health_checked_targets - computed: false, optional: true, required: false
  private _healthCheckedTargets = new GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsOutputReference(this, "health_checked_targets");
  public get healthCheckedTargets() {
    return this._healthCheckedTargets;
  }
  public putHealthCheckedTargets(value: GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargets) {
    this._healthCheckedTargets.internalValue = value;
  }
  public resetHealthCheckedTargets() {
    this._healthCheckedTargets.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get healthCheckedTargetsInput() {
    return this._healthCheckedTargets.internalValue;
  }
}

export class GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoList extends cdktn.ComplexList {
  public internalValue? : GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeo[] | cdktn.IResolvable

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
  public get(index: number): GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoOutputReference {
    return new GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancers {
  /**
  * The frontend IP address of the load balancer.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_dns_record_set#ip_address GoogleDnsRecordSet#ip_address}
  */
  readonly ipAddress: string;
  /**
  * The configured IP protocol of the load balancer. This value is case-sensitive. Possible values: ["tcp", "udp"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_dns_record_set#ip_protocol GoogleDnsRecordSet#ip_protocol}
  */
  readonly ipProtocol: string;
  /**
  * The type of load balancer. This value is case-sensitive. Possible values: ["regionalL4ilb", "regionalL7ilb", "globalL7ilb"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_dns_record_set#load_balancer_type GoogleDnsRecordSet#load_balancer_type}
  */
  readonly loadBalancerType?: string;
  /**
  * The fully qualified url of the network in which the load balancer belongs. This should be formatted like `https://www.googleapis.com/compute/v1/projects/{project}/global/networks/{network}`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_dns_record_set#network_url GoogleDnsRecordSet#network_url}
  */
  readonly networkUrl: string;
  /**
  * The configured port of the load balancer.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_dns_record_set#port GoogleDnsRecordSet#port}
  */
  readonly port: string;
  /**
  * The ID of the project in which the load balancer belongs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_dns_record_set#project GoogleDnsRecordSet#project}
  */
  readonly project: string;
  /**
  * The region of the load balancer. Only needed for regional load balancers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_dns_record_set#region GoogleDnsRecordSet#region}
  */
  readonly region?: string;
}

export function googleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancersToTerraform(struct?: GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancers | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ip_address: cdktn.stringToTerraform(struct!.ipAddress),
    ip_protocol: cdktn.stringToTerraform(struct!.ipProtocol),
    load_balancer_type: cdktn.stringToTerraform(struct!.loadBalancerType),
    network_url: cdktn.stringToTerraform(struct!.networkUrl),
    port: cdktn.stringToTerraform(struct!.port),
    project: cdktn.stringToTerraform(struct!.project),
    region: cdktn.stringToTerraform(struct!.region),
  }
}


export function googleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancersToHclTerraform(struct?: GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancers | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ip_address: {
      value: cdktn.stringToHclTerraform(struct!.ipAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ip_protocol: {
      value: cdktn.stringToHclTerraform(struct!.ipProtocol),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    load_balancer_type: {
      value: cdktn.stringToHclTerraform(struct!.loadBalancerType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    network_url: {
      value: cdktn.stringToHclTerraform(struct!.networkUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port: {
      value: cdktn.stringToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    project: {
      value: cdktn.stringToHclTerraform(struct!.project),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    region: {
      value: cdktn.stringToHclTerraform(struct!.region),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancersOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancers | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ipAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipAddress = this._ipAddress;
    }
    if (this._ipProtocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipProtocol = this._ipProtocol;
    }
    if (this._loadBalancerType !== undefined) {
      hasAnyValues = true;
      internalValueResult.loadBalancerType = this._loadBalancerType;
    }
    if (this._networkUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkUrl = this._networkUrl;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._project !== undefined) {
      hasAnyValues = true;
      internalValueResult.project = this._project;
    }
    if (this._region !== undefined) {
      hasAnyValues = true;
      internalValueResult.region = this._region;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancers | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ipAddress = undefined;
      this._ipProtocol = undefined;
      this._loadBalancerType = undefined;
      this._networkUrl = undefined;
      this._port = undefined;
      this._project = undefined;
      this._region = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ipAddress = value.ipAddress;
      this._ipProtocol = value.ipProtocol;
      this._loadBalancerType = value.loadBalancerType;
      this._networkUrl = value.networkUrl;
      this._port = value.port;
      this._project = value.project;
      this._region = value.region;
    }
  }

  // ip_address - computed: false, optional: false, required: true
  private _ipAddress?: string; 
  public get ipAddress() {
    return this.getStringAttribute('ip_address');
  }
  public set ipAddress(value: string) {
    this._ipAddress = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipAddressInput() {
    return this._ipAddress;
  }

  // ip_protocol - computed: false, optional: false, required: true
  private _ipProtocol?: string; 
  public get ipProtocol() {
    return this.getStringAttribute('ip_protocol');
  }
  public set ipProtocol(value: string) {
    this._ipProtocol = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipProtocolInput() {
    return this._ipProtocol;
  }

  // load_balancer_type - computed: false, optional: true, required: false
  private _loadBalancerType?: string; 
  public get loadBalancerType() {
    return this.getStringAttribute('load_balancer_type');
  }
  public set loadBalancerType(value: string) {
    this._loadBalancerType = value;
  }
  public resetLoadBalancerType() {
    this._loadBalancerType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loadBalancerTypeInput() {
    return this._loadBalancerType;
  }

  // network_url - computed: false, optional: false, required: true
  private _networkUrl?: string; 
  public get networkUrl() {
    return this.getStringAttribute('network_url');
  }
  public set networkUrl(value: string) {
    this._networkUrl = value;
  }
  // Temporarily expose input value. Use with caution.
  public get networkUrlInput() {
    return this._networkUrl;
  }

  // port - computed: false, optional: false, required: true
  private _port?: string; 
  public get port() {
    return this.getStringAttribute('port');
  }
  public set port(value: string) {
    this._port = value;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // project - computed: false, optional: false, required: true
  private _project?: string; 
  public get project() {
    return this.getStringAttribute('project');
  }
  public set project(value: string) {
    this._project = value;
  }
  // Temporarily expose input value. Use with caution.
  public get projectInput() {
    return this._project;
  }

  // region - computed: false, optional: true, required: false
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  public resetRegion() {
    this._region = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }
}

export class GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancersList extends cdktn.ComplexList {
  public internalValue? : GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancers[] | cdktn.IResolvable

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
  public get(index: number): GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancersOutputReference {
    return new GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimary {
  /**
  * The Internet IP addresses to be health checked.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_dns_record_set#external_endpoints GoogleDnsRecordSet#external_endpoints}
  */
  readonly externalEndpoints?: string[];
  /**
  * internal_load_balancers block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_dns_record_set#internal_load_balancers GoogleDnsRecordSet#internal_load_balancers}
  */
  readonly internalLoadBalancers?: GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancers[] | cdktn.IResolvable;
}

export function googleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryToTerraform(struct?: GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryOutputReference | GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimary): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    external_endpoints: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.externalEndpoints),
    internal_load_balancers: cdktn.listMapper(googleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancersToTerraform, true)(struct!.internalLoadBalancers),
  }
}


export function googleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryToHclTerraform(struct?: GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryOutputReference | GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimary): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    external_endpoints: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.externalEndpoints),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    internal_load_balancers: {
      value: cdktn.listMapperHcl(googleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancersToHclTerraform, true)(struct!.internalLoadBalancers),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancersList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimary | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._externalEndpoints !== undefined) {
      hasAnyValues = true;
      internalValueResult.externalEndpoints = this._externalEndpoints;
    }
    if (this._internalLoadBalancers?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.internalLoadBalancers = this._internalLoadBalancers?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimary | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._externalEndpoints = undefined;
      this._internalLoadBalancers.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._externalEndpoints = value.externalEndpoints;
      this._internalLoadBalancers.internalValue = value.internalLoadBalancers;
    }
  }

  // external_endpoints - computed: false, optional: true, required: false
  private _externalEndpoints?: string[]; 
  public get externalEndpoints() {
    return this.getListAttribute('external_endpoints');
  }
  public set externalEndpoints(value: string[]) {
    this._externalEndpoints = value;
  }
  public resetExternalEndpoints() {
    this._externalEndpoints = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalEndpointsInput() {
    return this._externalEndpoints;
  }

  // internal_load_balancers - computed: false, optional: true, required: false
  private _internalLoadBalancers = new GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancersList(this, "internal_load_balancers", false);
  public get internalLoadBalancers() {
    return this._internalLoadBalancers;
  }
  public putInternalLoadBalancers(value: GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancers[] | cdktn.IResolvable) {
    this._internalLoadBalancers.internalValue = value;
  }
  public resetInternalLoadBalancers() {
    this._internalLoadBalancers.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get internalLoadBalancersInput() {
    return this._internalLoadBalancers.internalValue;
  }
}
export interface GoogleDnsRecordSetRoutingPolicyPrimaryBackup {
  /**
  * Specifies whether to enable fencing for backup geo queries.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_dns_record_set#enable_geo_fencing_for_backups GoogleDnsRecordSet#enable_geo_fencing_for_backups}
  */
  readonly enableGeoFencingForBackups?: boolean | cdktn.IResolvable;
  /**
  * Specifies the percentage of traffic to send to the backup targets even when the primary targets are healthy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_dns_record_set#trickle_ratio GoogleDnsRecordSet#trickle_ratio}
  */
  readonly trickleRatio?: number;
  /**
  * backup_geo block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_dns_record_set#backup_geo GoogleDnsRecordSet#backup_geo}
  */
  readonly backupGeo: GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeo[] | cdktn.IResolvable;
  /**
  * primary block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_dns_record_set#primary GoogleDnsRecordSet#primary}
  */
  readonly primary: GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimary;
}

export function googleDnsRecordSetRoutingPolicyPrimaryBackupToTerraform(struct?: GoogleDnsRecordSetRoutingPolicyPrimaryBackupOutputReference | GoogleDnsRecordSetRoutingPolicyPrimaryBackup): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enable_geo_fencing_for_backups: cdktn.booleanToTerraform(struct!.enableGeoFencingForBackups),
    trickle_ratio: cdktn.numberToTerraform(struct!.trickleRatio),
    backup_geo: cdktn.listMapper(googleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoToTerraform, true)(struct!.backupGeo),
    primary: googleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryToTerraform(struct!.primary),
  }
}


export function googleDnsRecordSetRoutingPolicyPrimaryBackupToHclTerraform(struct?: GoogleDnsRecordSetRoutingPolicyPrimaryBackupOutputReference | GoogleDnsRecordSetRoutingPolicyPrimaryBackup): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enable_geo_fencing_for_backups: {
      value: cdktn.booleanToHclTerraform(struct!.enableGeoFencingForBackups),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    trickle_ratio: {
      value: cdktn.numberToHclTerraform(struct!.trickleRatio),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    backup_geo: {
      value: cdktn.listMapperHcl(googleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoToHclTerraform, true)(struct!.backupGeo),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoList",
    },
    primary: {
      value: googleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryToHclTerraform(struct!.primary),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDnsRecordSetRoutingPolicyPrimaryBackupOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDnsRecordSetRoutingPolicyPrimaryBackup | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enableGeoFencingForBackups !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableGeoFencingForBackups = this._enableGeoFencingForBackups;
    }
    if (this._trickleRatio !== undefined) {
      hasAnyValues = true;
      internalValueResult.trickleRatio = this._trickleRatio;
    }
    if (this._backupGeo?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.backupGeo = this._backupGeo?.internalValue;
    }
    if (this._primary?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.primary = this._primary?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDnsRecordSetRoutingPolicyPrimaryBackup | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enableGeoFencingForBackups = undefined;
      this._trickleRatio = undefined;
      this._backupGeo.internalValue = undefined;
      this._primary.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enableGeoFencingForBackups = value.enableGeoFencingForBackups;
      this._trickleRatio = value.trickleRatio;
      this._backupGeo.internalValue = value.backupGeo;
      this._primary.internalValue = value.primary;
    }
  }

  // enable_geo_fencing_for_backups - computed: false, optional: true, required: false
  private _enableGeoFencingForBackups?: boolean | cdktn.IResolvable; 
  public get enableGeoFencingForBackups() {
    return this.getBooleanAttribute('enable_geo_fencing_for_backups');
  }
  public set enableGeoFencingForBackups(value: boolean | cdktn.IResolvable) {
    this._enableGeoFencingForBackups = value;
  }
  public resetEnableGeoFencingForBackups() {
    this._enableGeoFencingForBackups = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableGeoFencingForBackupsInput() {
    return this._enableGeoFencingForBackups;
  }

  // trickle_ratio - computed: false, optional: true, required: false
  private _trickleRatio?: number; 
  public get trickleRatio() {
    return this.getNumberAttribute('trickle_ratio');
  }
  public set trickleRatio(value: number) {
    this._trickleRatio = value;
  }
  public resetTrickleRatio() {
    this._trickleRatio = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trickleRatioInput() {
    return this._trickleRatio;
  }

  // backup_geo - computed: false, optional: false, required: true
  private _backupGeo = new GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoList(this, "backup_geo", false);
  public get backupGeo() {
    return this._backupGeo;
  }
  public putBackupGeo(value: GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeo[] | cdktn.IResolvable) {
    this._backupGeo.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get backupGeoInput() {
    return this._backupGeo.internalValue;
  }

  // primary - computed: false, optional: false, required: true
  private _primary = new GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryOutputReference(this, "primary");
  public get primary() {
    return this._primary;
  }
  public putPrimary(value: GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimary) {
    this._primary.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get primaryInput() {
    return this._primary.internalValue;
  }
}
export interface GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancers {
  /**
  * The frontend IP address of the load balancer.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_dns_record_set#ip_address GoogleDnsRecordSet#ip_address}
  */
  readonly ipAddress: string;
  /**
  * The configured IP protocol of the load balancer. This value is case-sensitive. Possible values: ["tcp", "udp"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_dns_record_set#ip_protocol GoogleDnsRecordSet#ip_protocol}
  */
  readonly ipProtocol: string;
  /**
  * The type of load balancer. This value is case-sensitive. Possible values: ["regionalL4ilb", "regionalL7ilb", "globalL7ilb"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_dns_record_set#load_balancer_type GoogleDnsRecordSet#load_balancer_type}
  */
  readonly loadBalancerType?: string;
  /**
  * The fully qualified url of the network in which the load balancer belongs. This should be formatted like `https://www.googleapis.com/compute/v1/projects/{project}/global/networks/{network}`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_dns_record_set#network_url GoogleDnsRecordSet#network_url}
  */
  readonly networkUrl: string;
  /**
  * The configured port of the load balancer.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_dns_record_set#port GoogleDnsRecordSet#port}
  */
  readonly port: string;
  /**
  * The ID of the project in which the load balancer belongs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_dns_record_set#project GoogleDnsRecordSet#project}
  */
  readonly project: string;
  /**
  * The region of the load balancer. Only needed for regional load balancers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_dns_record_set#region GoogleDnsRecordSet#region}
  */
  readonly region?: string;
}

export function googleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancersToTerraform(struct?: GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancers | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ip_address: cdktn.stringToTerraform(struct!.ipAddress),
    ip_protocol: cdktn.stringToTerraform(struct!.ipProtocol),
    load_balancer_type: cdktn.stringToTerraform(struct!.loadBalancerType),
    network_url: cdktn.stringToTerraform(struct!.networkUrl),
    port: cdktn.stringToTerraform(struct!.port),
    project: cdktn.stringToTerraform(struct!.project),
    region: cdktn.stringToTerraform(struct!.region),
  }
}


export function googleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancersToHclTerraform(struct?: GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancers | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ip_address: {
      value: cdktn.stringToHclTerraform(struct!.ipAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ip_protocol: {
      value: cdktn.stringToHclTerraform(struct!.ipProtocol),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    load_balancer_type: {
      value: cdktn.stringToHclTerraform(struct!.loadBalancerType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    network_url: {
      value: cdktn.stringToHclTerraform(struct!.networkUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port: {
      value: cdktn.stringToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    project: {
      value: cdktn.stringToHclTerraform(struct!.project),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    region: {
      value: cdktn.stringToHclTerraform(struct!.region),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancersOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancers | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ipAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipAddress = this._ipAddress;
    }
    if (this._ipProtocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipProtocol = this._ipProtocol;
    }
    if (this._loadBalancerType !== undefined) {
      hasAnyValues = true;
      internalValueResult.loadBalancerType = this._loadBalancerType;
    }
    if (this._networkUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkUrl = this._networkUrl;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._project !== undefined) {
      hasAnyValues = true;
      internalValueResult.project = this._project;
    }
    if (this._region !== undefined) {
      hasAnyValues = true;
      internalValueResult.region = this._region;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancers | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ipAddress = undefined;
      this._ipProtocol = undefined;
      this._loadBalancerType = undefined;
      this._networkUrl = undefined;
      this._port = undefined;
      this._project = undefined;
      this._region = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ipAddress = value.ipAddress;
      this._ipProtocol = value.ipProtocol;
      this._loadBalancerType = value.loadBalancerType;
      this._networkUrl = value.networkUrl;
      this._port = value.port;
      this._project = value.project;
      this._region = value.region;
    }
  }

  // ip_address - computed: false, optional: false, required: true
  private _ipAddress?: string; 
  public get ipAddress() {
    return this.getStringAttribute('ip_address');
  }
  public set ipAddress(value: string) {
    this._ipAddress = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipAddressInput() {
    return this._ipAddress;
  }

  // ip_protocol - computed: false, optional: false, required: true
  private _ipProtocol?: string; 
  public get ipProtocol() {
    return this.getStringAttribute('ip_protocol');
  }
  public set ipProtocol(value: string) {
    this._ipProtocol = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipProtocolInput() {
    return this._ipProtocol;
  }

  // load_balancer_type - computed: false, optional: true, required: false
  private _loadBalancerType?: string; 
  public get loadBalancerType() {
    return this.getStringAttribute('load_balancer_type');
  }
  public set loadBalancerType(value: string) {
    this._loadBalancerType = value;
  }
  public resetLoadBalancerType() {
    this._loadBalancerType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loadBalancerTypeInput() {
    return this._loadBalancerType;
  }

  // network_url - computed: false, optional: false, required: true
  private _networkUrl?: string; 
  public get networkUrl() {
    return this.getStringAttribute('network_url');
  }
  public set networkUrl(value: string) {
    this._networkUrl = value;
  }
  // Temporarily expose input value. Use with caution.
  public get networkUrlInput() {
    return this._networkUrl;
  }

  // port - computed: false, optional: false, required: true
  private _port?: string; 
  public get port() {
    return this.getStringAttribute('port');
  }
  public set port(value: string) {
    this._port = value;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // project - computed: false, optional: false, required: true
  private _project?: string; 
  public get project() {
    return this.getStringAttribute('project');
  }
  public set project(value: string) {
    this._project = value;
  }
  // Temporarily expose input value. Use with caution.
  public get projectInput() {
    return this._project;
  }

  // region - computed: false, optional: true, required: false
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  public resetRegion() {
    this._region = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }
}

export class GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancersList extends cdktn.ComplexList {
  public internalValue? : GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancers[] | cdktn.IResolvable

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
  public get(index: number): GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancersOutputReference {
    return new GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargets {
  /**
  * The Internet IP addresses to be health checked.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_dns_record_set#external_endpoints GoogleDnsRecordSet#external_endpoints}
  */
  readonly externalEndpoints?: string[];
  /**
  * internal_load_balancers block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_dns_record_set#internal_load_balancers GoogleDnsRecordSet#internal_load_balancers}
  */
  readonly internalLoadBalancers?: GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancers[] | cdktn.IResolvable;
}

export function googleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsToTerraform(struct?: GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsOutputReference | GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargets): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    external_endpoints: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.externalEndpoints),
    internal_load_balancers: cdktn.listMapper(googleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancersToTerraform, true)(struct!.internalLoadBalancers),
  }
}


export function googleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsToHclTerraform(struct?: GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsOutputReference | GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargets): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    external_endpoints: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.externalEndpoints),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    internal_load_balancers: {
      value: cdktn.listMapperHcl(googleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancersToHclTerraform, true)(struct!.internalLoadBalancers),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancersList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargets | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._externalEndpoints !== undefined) {
      hasAnyValues = true;
      internalValueResult.externalEndpoints = this._externalEndpoints;
    }
    if (this._internalLoadBalancers?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.internalLoadBalancers = this._internalLoadBalancers?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargets | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._externalEndpoints = undefined;
      this._internalLoadBalancers.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._externalEndpoints = value.externalEndpoints;
      this._internalLoadBalancers.internalValue = value.internalLoadBalancers;
    }
  }

  // external_endpoints - computed: false, optional: true, required: false
  private _externalEndpoints?: string[]; 
  public get externalEndpoints() {
    return this.getListAttribute('external_endpoints');
  }
  public set externalEndpoints(value: string[]) {
    this._externalEndpoints = value;
  }
  public resetExternalEndpoints() {
    this._externalEndpoints = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalEndpointsInput() {
    return this._externalEndpoints;
  }

  // internal_load_balancers - computed: false, optional: true, required: false
  private _internalLoadBalancers = new GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancersList(this, "internal_load_balancers", false);
  public get internalLoadBalancers() {
    return this._internalLoadBalancers;
  }
  public putInternalLoadBalancers(value: GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancers[] | cdktn.IResolvable) {
    this._internalLoadBalancers.internalValue = value;
  }
  public resetInternalLoadBalancers() {
    this._internalLoadBalancers.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get internalLoadBalancersInput() {
    return this._internalLoadBalancers.internalValue;
  }
}
export interface GoogleDnsRecordSetRoutingPolicyWrr {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_dns_record_set#rrdatas GoogleDnsRecordSet#rrdatas}
  */
  readonly rrdatas?: string[];
  /**
  * The ratio of traffic routed to the target.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_dns_record_set#weight GoogleDnsRecordSet#weight}
  */
  readonly weight: number;
  /**
  * health_checked_targets block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_dns_record_set#health_checked_targets GoogleDnsRecordSet#health_checked_targets}
  */
  readonly healthCheckedTargets?: GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargets;
}

export function googleDnsRecordSetRoutingPolicyWrrToTerraform(struct?: GoogleDnsRecordSetRoutingPolicyWrr | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    rrdatas: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.rrdatas),
    weight: cdktn.numberToTerraform(struct!.weight),
    health_checked_targets: googleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsToTerraform(struct!.healthCheckedTargets),
  }
}


export function googleDnsRecordSetRoutingPolicyWrrToHclTerraform(struct?: GoogleDnsRecordSetRoutingPolicyWrr | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    rrdatas: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.rrdatas),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    weight: {
      value: cdktn.numberToHclTerraform(struct!.weight),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    health_checked_targets: {
      value: googleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsToHclTerraform(struct!.healthCheckedTargets),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDnsRecordSetRoutingPolicyWrrOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): GoogleDnsRecordSetRoutingPolicyWrr | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._rrdatas !== undefined) {
      hasAnyValues = true;
      internalValueResult.rrdatas = this._rrdatas;
    }
    if (this._weight !== undefined) {
      hasAnyValues = true;
      internalValueResult.weight = this._weight;
    }
    if (this._healthCheckedTargets?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.healthCheckedTargets = this._healthCheckedTargets?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDnsRecordSetRoutingPolicyWrr | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._rrdatas = undefined;
      this._weight = undefined;
      this._healthCheckedTargets.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._rrdatas = value.rrdatas;
      this._weight = value.weight;
      this._healthCheckedTargets.internalValue = value.healthCheckedTargets;
    }
  }

  // rrdatas - computed: false, optional: true, required: false
  private _rrdatas?: string[]; 
  public get rrdatas() {
    return this.getListAttribute('rrdatas');
  }
  public set rrdatas(value: string[]) {
    this._rrdatas = value;
  }
  public resetRrdatas() {
    this._rrdatas = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rrdatasInput() {
    return this._rrdatas;
  }

  // weight - computed: false, optional: false, required: true
  private _weight?: number; 
  public get weight() {
    return this.getNumberAttribute('weight');
  }
  public set weight(value: number) {
    this._weight = value;
  }
  // Temporarily expose input value. Use with caution.
  public get weightInput() {
    return this._weight;
  }

  // health_checked_targets - computed: false, optional: true, required: false
  private _healthCheckedTargets = new GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsOutputReference(this, "health_checked_targets");
  public get healthCheckedTargets() {
    return this._healthCheckedTargets;
  }
  public putHealthCheckedTargets(value: GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargets) {
    this._healthCheckedTargets.internalValue = value;
  }
  public resetHealthCheckedTargets() {
    this._healthCheckedTargets.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get healthCheckedTargetsInput() {
    return this._healthCheckedTargets.internalValue;
  }
}

export class GoogleDnsRecordSetRoutingPolicyWrrList extends cdktn.ComplexList {
  public internalValue? : GoogleDnsRecordSetRoutingPolicyWrr[] | cdktn.IResolvable

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
  public get(index: number): GoogleDnsRecordSetRoutingPolicyWrrOutputReference {
    return new GoogleDnsRecordSetRoutingPolicyWrrOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleDnsRecordSetRoutingPolicy {
  /**
  * Specifies whether to enable fencing for geo queries.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_dns_record_set#enable_geo_fencing GoogleDnsRecordSet#enable_geo_fencing}
  */
  readonly enableGeoFencing?: boolean | cdktn.IResolvable;
  /**
  * Specifies the health check.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_dns_record_set#health_check GoogleDnsRecordSet#health_check}
  */
  readonly healthCheck?: string;
  /**
  * geo block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_dns_record_set#geo GoogleDnsRecordSet#geo}
  */
  readonly geo?: GoogleDnsRecordSetRoutingPolicyGeo[] | cdktn.IResolvable;
  /**
  * primary_backup block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_dns_record_set#primary_backup GoogleDnsRecordSet#primary_backup}
  */
  readonly primaryBackup?: GoogleDnsRecordSetRoutingPolicyPrimaryBackup;
  /**
  * wrr block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_dns_record_set#wrr GoogleDnsRecordSet#wrr}
  */
  readonly wrr?: GoogleDnsRecordSetRoutingPolicyWrr[] | cdktn.IResolvable;
}

export function googleDnsRecordSetRoutingPolicyToTerraform(struct?: GoogleDnsRecordSetRoutingPolicyOutputReference | GoogleDnsRecordSetRoutingPolicy): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enable_geo_fencing: cdktn.booleanToTerraform(struct!.enableGeoFencing),
    health_check: cdktn.stringToTerraform(struct!.healthCheck),
    geo: cdktn.listMapper(googleDnsRecordSetRoutingPolicyGeoToTerraform, true)(struct!.geo),
    primary_backup: googleDnsRecordSetRoutingPolicyPrimaryBackupToTerraform(struct!.primaryBackup),
    wrr: cdktn.listMapper(googleDnsRecordSetRoutingPolicyWrrToTerraform, true)(struct!.wrr),
  }
}


export function googleDnsRecordSetRoutingPolicyToHclTerraform(struct?: GoogleDnsRecordSetRoutingPolicyOutputReference | GoogleDnsRecordSetRoutingPolicy): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enable_geo_fencing: {
      value: cdktn.booleanToHclTerraform(struct!.enableGeoFencing),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    health_check: {
      value: cdktn.stringToHclTerraform(struct!.healthCheck),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    geo: {
      value: cdktn.listMapperHcl(googleDnsRecordSetRoutingPolicyGeoToHclTerraform, true)(struct!.geo),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDnsRecordSetRoutingPolicyGeoList",
    },
    primary_backup: {
      value: googleDnsRecordSetRoutingPolicyPrimaryBackupToHclTerraform(struct!.primaryBackup),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDnsRecordSetRoutingPolicyPrimaryBackupList",
    },
    wrr: {
      value: cdktn.listMapperHcl(googleDnsRecordSetRoutingPolicyWrrToHclTerraform, true)(struct!.wrr),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDnsRecordSetRoutingPolicyWrrList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDnsRecordSetRoutingPolicyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDnsRecordSetRoutingPolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enableGeoFencing !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableGeoFencing = this._enableGeoFencing;
    }
    if (this._healthCheck !== undefined) {
      hasAnyValues = true;
      internalValueResult.healthCheck = this._healthCheck;
    }
    if (this._geo?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.geo = this._geo?.internalValue;
    }
    if (this._primaryBackup?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.primaryBackup = this._primaryBackup?.internalValue;
    }
    if (this._wrr?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.wrr = this._wrr?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDnsRecordSetRoutingPolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enableGeoFencing = undefined;
      this._healthCheck = undefined;
      this._geo.internalValue = undefined;
      this._primaryBackup.internalValue = undefined;
      this._wrr.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enableGeoFencing = value.enableGeoFencing;
      this._healthCheck = value.healthCheck;
      this._geo.internalValue = value.geo;
      this._primaryBackup.internalValue = value.primaryBackup;
      this._wrr.internalValue = value.wrr;
    }
  }

  // enable_geo_fencing - computed: false, optional: true, required: false
  private _enableGeoFencing?: boolean | cdktn.IResolvable; 
  public get enableGeoFencing() {
    return this.getBooleanAttribute('enable_geo_fencing');
  }
  public set enableGeoFencing(value: boolean | cdktn.IResolvable) {
    this._enableGeoFencing = value;
  }
  public resetEnableGeoFencing() {
    this._enableGeoFencing = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableGeoFencingInput() {
    return this._enableGeoFencing;
  }

  // health_check - computed: false, optional: true, required: false
  private _healthCheck?: string; 
  public get healthCheck() {
    return this.getStringAttribute('health_check');
  }
  public set healthCheck(value: string) {
    this._healthCheck = value;
  }
  public resetHealthCheck() {
    this._healthCheck = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get healthCheckInput() {
    return this._healthCheck;
  }

  // geo - computed: false, optional: true, required: false
  private _geo = new GoogleDnsRecordSetRoutingPolicyGeoList(this, "geo", false);
  public get geo() {
    return this._geo;
  }
  public putGeo(value: GoogleDnsRecordSetRoutingPolicyGeo[] | cdktn.IResolvable) {
    this._geo.internalValue = value;
  }
  public resetGeo() {
    this._geo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get geoInput() {
    return this._geo.internalValue;
  }

  // primary_backup - computed: false, optional: true, required: false
  private _primaryBackup = new GoogleDnsRecordSetRoutingPolicyPrimaryBackupOutputReference(this, "primary_backup");
  public get primaryBackup() {
    return this._primaryBackup;
  }
  public putPrimaryBackup(value: GoogleDnsRecordSetRoutingPolicyPrimaryBackup) {
    this._primaryBackup.internalValue = value;
  }
  public resetPrimaryBackup() {
    this._primaryBackup.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get primaryBackupInput() {
    return this._primaryBackup.internalValue;
  }

  // wrr - computed: false, optional: true, required: false
  private _wrr = new GoogleDnsRecordSetRoutingPolicyWrrList(this, "wrr", false);
  public get wrr() {
    return this._wrr;
  }
  public putWrr(value: GoogleDnsRecordSetRoutingPolicyWrr[] | cdktn.IResolvable) {
    this._wrr.internalValue = value;
  }
  public resetWrr() {
    this._wrr.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wrrInput() {
    return this._wrr.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_dns_record_set google_dns_record_set}
*/
export class GoogleDnsRecordSet extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_dns_record_set";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a GoogleDnsRecordSet resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the GoogleDnsRecordSet to import
  * @param importFromId The id of the existing GoogleDnsRecordSet that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_dns_record_set#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the GoogleDnsRecordSet to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "google_dns_record_set", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_dns_record_set google_dns_record_set} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GoogleDnsRecordSetConfig
  */
  public constructor(scope: Construct, id: string, config: GoogleDnsRecordSetConfig) {
    super(scope, id, {
      terraformResourceType: 'google_dns_record_set',
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
    this._id = config.id;
    this._managedZone = config.managedZone;
    this._name = config.name;
    this._project = config.project;
    this._rrdatas = config.rrdatas;
    this._ttl = config.ttl;
    this._type = config.type;
    this._routingPolicy.internalValue = config.routingPolicy;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // managed_zone - computed: false, optional: false, required: true
  private _managedZone?: string; 
  public get managedZone() {
    return this.getStringAttribute('managed_zone');
  }
  public set managedZone(value: string) {
    this._managedZone = value;
  }
  // Temporarily expose input value. Use with caution.
  public get managedZoneInput() {
    return this._managedZone;
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
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

  // rrdatas - computed: false, optional: true, required: false
  private _rrdatas?: string[]; 
  public get rrdatas() {
    return this.getListAttribute('rrdatas');
  }
  public set rrdatas(value: string[]) {
    this._rrdatas = value;
  }
  public resetRrdatas() {
    this._rrdatas = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rrdatasInput() {
    return this._rrdatas;
  }

  // ttl - computed: false, optional: true, required: false
  private _ttl?: number; 
  public get ttl() {
    return this.getNumberAttribute('ttl');
  }
  public set ttl(value: number) {
    this._ttl = value;
  }
  public resetTtl() {
    this._ttl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ttlInput() {
    return this._ttl;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // routing_policy - computed: false, optional: true, required: false
  private _routingPolicy = new GoogleDnsRecordSetRoutingPolicyOutputReference(this, "routing_policy");
  public get routingPolicy() {
    return this._routingPolicy;
  }
  public putRoutingPolicy(value: GoogleDnsRecordSetRoutingPolicy) {
    this._routingPolicy.internalValue = value;
  }
  public resetRoutingPolicy() {
    this._routingPolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routingPolicyInput() {
    return this._routingPolicy.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktn.stringToTerraform(this._id),
      managed_zone: cdktn.stringToTerraform(this._managedZone),
      name: cdktn.stringToTerraform(this._name),
      project: cdktn.stringToTerraform(this._project),
      rrdatas: cdktn.listMapper(cdktn.stringToTerraform, false)(this._rrdatas),
      ttl: cdktn.numberToTerraform(this._ttl),
      type: cdktn.stringToTerraform(this._type),
      routing_policy: googleDnsRecordSetRoutingPolicyToTerraform(this._routingPolicy.internalValue),
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
      managed_zone: {
        value: cdktn.stringToHclTerraform(this._managedZone),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name: {
        value: cdktn.stringToHclTerraform(this._name),
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
      rrdatas: {
        value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._rrdatas),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      ttl: {
        value: cdktn.numberToHclTerraform(this._ttl),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      type: {
        value: cdktn.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      routing_policy: {
        value: googleDnsRecordSetRoutingPolicyToHclTerraform(this._routingPolicy.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleDnsRecordSetRoutingPolicyList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
