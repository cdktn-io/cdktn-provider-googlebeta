# `googleNetworkManagementOrganizationVpcFlowLogsConfig` Submodule <a name="`googleNetworkManagementOrganizationVpcFlowLogsConfig` Submodule" id="@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleNetworkManagementOrganizationVpcFlowLogsConfig <a name="GoogleNetworkManagementOrganizationVpcFlowLogsConfig" id="@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_network_management_organization_vpc_flow_logs_config google_network_management_organization_vpc_flow_logs_config}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_network_management_organization_vpc_flow_logs_config.GoogleNetworkManagementOrganizationVpcFlowLogsConfig;

GoogleNetworkManagementOrganizationVpcFlowLogsConfig.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .location(java.lang.String)
    .organization(java.lang.String)
    .vpcFlowLogsConfigId(java.lang.String)
//  .aggregationInterval(java.lang.String)
//  .crossProjectMetadata(java.lang.String)
//  .description(java.lang.String)
//  .filterExpr(java.lang.String)
//  .flowSampling(java.lang.Number)
//  .id(java.lang.String)
//  .labels(java.util.Map<java.lang.String, java.lang.String>)
//  .metadata(java.lang.String)
//  .metadataFields(java.util.List<java.lang.String>)
//  .state(java.lang.String)
//  .timeouts(GoogleNetworkManagementOrganizationVpcFlowLogsConfigTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.Initializer.parameter.location">location</a></code> | <code>java.lang.String</code> | Resource ID segment making up resource 'name'. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.Initializer.parameter.organization">organization</a></code> | <code>java.lang.String</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.Initializer.parameter.vpcFlowLogsConfigId">vpcFlowLogsConfigId</a></code> | <code>java.lang.String</code> | Required. ID of the 'VpcFlowLogsConfig'. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.Initializer.parameter.aggregationInterval">aggregationInterval</a></code> | <code>java.lang.String</code> | Optional. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.Initializer.parameter.crossProjectMetadata">crossProjectMetadata</a></code> | <code>java.lang.String</code> | Determines whether to include cross project annotations in the logs. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | Optional. The user-supplied description of the VPC Flow Logs configuration. Maximum of 512 characters. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.Initializer.parameter.filterExpr">filterExpr</a></code> | <code>java.lang.String</code> | Optional. Export filter used to define which VPC Flow Logs should be logged. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.Initializer.parameter.flowSampling">flowSampling</a></code> | <code>java.lang.Number</code> | Optional. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_network_management_organization_vpc_flow_logs_config#id GoogleNetworkManagementOrganizationVpcFlowLogsConfig#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.Initializer.parameter.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Optional. Resource labels to represent the user-provided metadata. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.Initializer.parameter.metadata">metadata</a></code> | <code>java.lang.String</code> | Optional. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.Initializer.parameter.metadataFields">metadataFields</a></code> | <code>java.util.List<java.lang.String></code> | Optional. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.Initializer.parameter.state">state</a></code> | <code>java.lang.String</code> | Optional. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfigTimeouts">GoogleNetworkManagementOrganizationVpcFlowLogsConfigTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.Initializer.parameter.location"></a>

- *Type:* java.lang.String

Resource ID segment making up resource 'name'.

It identifies the resource
within its parent collection as described in https://google.aip.dev/122. See documentation
for resource type 'networkmanagement.googleapis.com/VpcFlowLogsConfig'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_network_management_organization_vpc_flow_logs_config#location GoogleNetworkManagementOrganizationVpcFlowLogsConfig#location}

---

##### `organization`<sup>Required</sup> <a name="organization" id="@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.Initializer.parameter.organization"></a>

- *Type:* java.lang.String

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_network_management_organization_vpc_flow_logs_config#organization GoogleNetworkManagementOrganizationVpcFlowLogsConfig#organization}

---

##### `vpcFlowLogsConfigId`<sup>Required</sup> <a name="vpcFlowLogsConfigId" id="@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.Initializer.parameter.vpcFlowLogsConfigId"></a>

- *Type:* java.lang.String

Required. ID of the 'VpcFlowLogsConfig'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_network_management_organization_vpc_flow_logs_config#vpc_flow_logs_config_id GoogleNetworkManagementOrganizationVpcFlowLogsConfig#vpc_flow_logs_config_id}

---

##### `aggregationInterval`<sup>Optional</sup> <a name="aggregationInterval" id="@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.Initializer.parameter.aggregationInterval"></a>

- *Type:* java.lang.String

Optional.

The aggregation interval for the logs. Default value is
INTERVAL_5_SEC.   Possible values: INTERVAL_5_SEC INTERVAL_30_SEC INTERVAL_1_MIN INTERVAL_5_MIN INTERVAL_10_MIN INTERVAL_15_MIN

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_network_management_organization_vpc_flow_logs_config#aggregation_interval GoogleNetworkManagementOrganizationVpcFlowLogsConfig#aggregation_interval}

---

##### `crossProjectMetadata`<sup>Optional</sup> <a name="crossProjectMetadata" id="@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.Initializer.parameter.crossProjectMetadata"></a>

- *Type:* java.lang.String

Determines whether to include cross project annotations in the logs.

This field is available only for organization configurations. If not
specified in org configs will be set to CROSS_PROJECT_METADATA_ENABLED.
Possible values:
CROSS_PROJECT_METADATA_ENABLED
CROSS_PROJECT_METADATA_DISABLED Possible values: ["CROSS_PROJECT_METADATA_ENABLED", "CROSS_PROJECT_METADATA_DISABLED"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_network_management_organization_vpc_flow_logs_config#cross_project_metadata GoogleNetworkManagementOrganizationVpcFlowLogsConfig#cross_project_metadata}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.Initializer.parameter.description"></a>

- *Type:* java.lang.String

Optional. The user-supplied description of the VPC Flow Logs configuration. Maximum of 512 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_network_management_organization_vpc_flow_logs_config#description GoogleNetworkManagementOrganizationVpcFlowLogsConfig#description}

---

##### `filterExpr`<sup>Optional</sup> <a name="filterExpr" id="@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.Initializer.parameter.filterExpr"></a>

- *Type:* java.lang.String

Optional. Export filter used to define which VPC Flow Logs should be logged.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_network_management_organization_vpc_flow_logs_config#filter_expr GoogleNetworkManagementOrganizationVpcFlowLogsConfig#filter_expr}

---

##### `flowSampling`<sup>Optional</sup> <a name="flowSampling" id="@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.Initializer.parameter.flowSampling"></a>

- *Type:* java.lang.Number

Optional.

The value of the field must be in (0, 1]. The sampling rate
of VPC Flow Logs where 1.0 means all collected logs are reported. Setting the
sampling rate to 0.0 is not allowed. If you want to disable VPC Flow Logs, use
the state field instead. Default value is 1.0

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_network_management_organization_vpc_flow_logs_config#flow_sampling GoogleNetworkManagementOrganizationVpcFlowLogsConfig#flow_sampling}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_network_management_organization_vpc_flow_logs_config#id GoogleNetworkManagementOrganizationVpcFlowLogsConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.Initializer.parameter.labels"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Optional. Resource labels to represent the user-provided metadata.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_network_management_organization_vpc_flow_logs_config#labels GoogleNetworkManagementOrganizationVpcFlowLogsConfig#labels}

---

##### `metadata`<sup>Optional</sup> <a name="metadata" id="@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.Initializer.parameter.metadata"></a>

- *Type:* java.lang.String

Optional.

Configures whether all, none or a subset of metadata fields
should be added to the reported VPC flow logs. Default value is INCLUDE_ALL_METADATA.
Possible values:  METADATA_UNSPECIFIED INCLUDE_ALL_METADATA EXCLUDE_ALL_METADATA CUSTOM_METADATA

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_network_management_organization_vpc_flow_logs_config#metadata GoogleNetworkManagementOrganizationVpcFlowLogsConfig#metadata}

---

##### `metadataFields`<sup>Optional</sup> <a name="metadataFields" id="@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.Initializer.parameter.metadataFields"></a>

- *Type:* java.util.List<java.lang.String>

Optional.

Custom metadata fields to include in the reported VPC flow
logs. Can only be specified if "metadata" was set to CUSTOM_METADATA.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_network_management_organization_vpc_flow_logs_config#metadata_fields GoogleNetworkManagementOrganizationVpcFlowLogsConfig#metadata_fields}

---

##### `state`<sup>Optional</sup> <a name="state" id="@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.Initializer.parameter.state"></a>

- *Type:* java.lang.String

Optional.

The state of the VPC Flow Log configuration. Default value
is ENABLED. When creating a new configuration, it must be enabled.
Possible values: ENABLED DISABLED

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_network_management_organization_vpc_flow_logs_config#state GoogleNetworkManagementOrganizationVpcFlowLogsConfig#state}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfigTimeouts">GoogleNetworkManagementOrganizationVpcFlowLogsConfigTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_network_management_organization_vpc_flow_logs_config#timeouts GoogleNetworkManagementOrganizationVpcFlowLogsConfig#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.resetAggregationInterval">resetAggregationInterval</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.resetCrossProjectMetadata">resetCrossProjectMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.resetFilterExpr">resetFilterExpr</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.resetFlowSampling">resetFlowSampling</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.resetMetadata">resetMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.resetMetadataFields">resetMetadataFields</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.resetState">resetState</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.putTimeouts"></a>

```java
public void putTimeouts(GoogleNetworkManagementOrganizationVpcFlowLogsConfigTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfigTimeouts">GoogleNetworkManagementOrganizationVpcFlowLogsConfigTimeouts</a>

---

##### `resetAggregationInterval` <a name="resetAggregationInterval" id="@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.resetAggregationInterval"></a>

```java
public void resetAggregationInterval()
```

##### `resetCrossProjectMetadata` <a name="resetCrossProjectMetadata" id="@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.resetCrossProjectMetadata"></a>

```java
public void resetCrossProjectMetadata()
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetFilterExpr` <a name="resetFilterExpr" id="@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.resetFilterExpr"></a>

```java
public void resetFilterExpr()
```

##### `resetFlowSampling` <a name="resetFlowSampling" id="@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.resetFlowSampling"></a>

```java
public void resetFlowSampling()
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.resetId"></a>

```java
public void resetId()
```

##### `resetLabels` <a name="resetLabels" id="@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.resetLabels"></a>

```java
public void resetLabels()
```

##### `resetMetadata` <a name="resetMetadata" id="@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.resetMetadata"></a>

```java
public void resetMetadata()
```

##### `resetMetadataFields` <a name="resetMetadataFields" id="@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.resetMetadataFields"></a>

```java
public void resetMetadataFields()
```

##### `resetState` <a name="resetState" id="@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.resetState"></a>

```java
public void resetState()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a GoogleNetworkManagementOrganizationVpcFlowLogsConfig resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.isConstruct"></a>

```java
import io.cdktn.providers.google_beta.google_network_management_organization_vpc_flow_logs_config.GoogleNetworkManagementOrganizationVpcFlowLogsConfig;

GoogleNetworkManagementOrganizationVpcFlowLogsConfig.isConstruct(java.lang.Object x)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.isTerraformElement"></a>

```java
import io.cdktn.providers.google_beta.google_network_management_organization_vpc_flow_logs_config.GoogleNetworkManagementOrganizationVpcFlowLogsConfig;

GoogleNetworkManagementOrganizationVpcFlowLogsConfig.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.isTerraformResource"></a>

```java
import io.cdktn.providers.google_beta.google_network_management_organization_vpc_flow_logs_config.GoogleNetworkManagementOrganizationVpcFlowLogsConfig;

GoogleNetworkManagementOrganizationVpcFlowLogsConfig.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.generateConfigForImport"></a>

```java
import io.cdktn.providers.google_beta.google_network_management_organization_vpc_flow_logs_config.GoogleNetworkManagementOrganizationVpcFlowLogsConfig;

GoogleNetworkManagementOrganizationVpcFlowLogsConfig.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),GoogleNetworkManagementOrganizationVpcFlowLogsConfig.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a GoogleNetworkManagementOrganizationVpcFlowLogsConfig resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the GoogleNetworkManagementOrganizationVpcFlowLogsConfig to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing GoogleNetworkManagementOrganizationVpcFlowLogsConfig that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_network_management_organization_vpc_flow_logs_config#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the GoogleNetworkManagementOrganizationVpcFlowLogsConfig to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.property.createTime">createTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.property.effectiveLabels">effectiveLabels</a></code> | <code>io.cdktn.cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.property.terraformLabels">terraformLabels</a></code> | <code>io.cdktn.cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfigTimeoutsOutputReference">GoogleNetworkManagementOrganizationVpcFlowLogsConfigTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.property.updateTime">updateTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.property.aggregationIntervalInput">aggregationIntervalInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.property.crossProjectMetadataInput">crossProjectMetadataInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.property.filterExprInput">filterExprInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.property.flowSamplingInput">flowSamplingInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.property.labelsInput">labelsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.property.locationInput">locationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.property.metadataFieldsInput">metadataFieldsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.property.metadataInput">metadataInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.property.organizationInput">organizationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.property.stateInput">stateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.property.timeoutsInput">timeoutsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfigTimeouts">GoogleNetworkManagementOrganizationVpcFlowLogsConfigTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.property.vpcFlowLogsConfigIdInput">vpcFlowLogsConfigIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.property.aggregationInterval">aggregationInterval</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.property.crossProjectMetadata">crossProjectMetadata</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.property.filterExpr">filterExpr</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.property.flowSampling">flowSampling</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.property.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.property.metadata">metadata</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.property.metadataFields">metadataFields</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.property.organization">organization</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.property.vpcFlowLogsConfigId">vpcFlowLogsConfigId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.property.createTime"></a>

```java
public java.lang.String getCreateTime();
```

- *Type:* java.lang.String

---

##### `effectiveLabels`<sup>Required</sup> <a name="effectiveLabels" id="@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.property.effectiveLabels"></a>

```java
public StringMap getEffectiveLabels();
```

- *Type:* io.cdktn.cdktn.StringMap

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `terraformLabels`<sup>Required</sup> <a name="terraformLabels" id="@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.property.terraformLabels"></a>

```java
public StringMap getTerraformLabels();
```

- *Type:* io.cdktn.cdktn.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.property.timeouts"></a>

```java
public GoogleNetworkManagementOrganizationVpcFlowLogsConfigTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfigTimeoutsOutputReference">GoogleNetworkManagementOrganizationVpcFlowLogsConfigTimeoutsOutputReference</a>

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.property.updateTime"></a>

```java
public java.lang.String getUpdateTime();
```

- *Type:* java.lang.String

---

##### `aggregationIntervalInput`<sup>Optional</sup> <a name="aggregationIntervalInput" id="@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.property.aggregationIntervalInput"></a>

```java
public java.lang.String getAggregationIntervalInput();
```

- *Type:* java.lang.String

---

##### `crossProjectMetadataInput`<sup>Optional</sup> <a name="crossProjectMetadataInput" id="@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.property.crossProjectMetadataInput"></a>

```java
public java.lang.String getCrossProjectMetadataInput();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `filterExprInput`<sup>Optional</sup> <a name="filterExprInput" id="@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.property.filterExprInput"></a>

```java
public java.lang.String getFilterExprInput();
```

- *Type:* java.lang.String

---

##### `flowSamplingInput`<sup>Optional</sup> <a name="flowSamplingInput" id="@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.property.flowSamplingInput"></a>

```java
public java.lang.Number getFlowSamplingInput();
```

- *Type:* java.lang.Number

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.property.labelsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabelsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.property.locationInput"></a>

```java
public java.lang.String getLocationInput();
```

- *Type:* java.lang.String

---

##### `metadataFieldsInput`<sup>Optional</sup> <a name="metadataFieldsInput" id="@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.property.metadataFieldsInput"></a>

```java
public java.util.List<java.lang.String> getMetadataFieldsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `metadataInput`<sup>Optional</sup> <a name="metadataInput" id="@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.property.metadataInput"></a>

```java
public java.lang.String getMetadataInput();
```

- *Type:* java.lang.String

---

##### `organizationInput`<sup>Optional</sup> <a name="organizationInput" id="@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.property.organizationInput"></a>

```java
public java.lang.String getOrganizationInput();
```

- *Type:* java.lang.String

---

##### `stateInput`<sup>Optional</sup> <a name="stateInput" id="@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.property.stateInput"></a>

```java
public java.lang.String getStateInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.property.timeoutsInput"></a>

```java
public IResolvable|GoogleNetworkManagementOrganizationVpcFlowLogsConfigTimeouts getTimeoutsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfigTimeouts">GoogleNetworkManagementOrganizationVpcFlowLogsConfigTimeouts</a>

---

##### `vpcFlowLogsConfigIdInput`<sup>Optional</sup> <a name="vpcFlowLogsConfigIdInput" id="@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.property.vpcFlowLogsConfigIdInput"></a>

```java
public java.lang.String getVpcFlowLogsConfigIdInput();
```

- *Type:* java.lang.String

---

##### `aggregationInterval`<sup>Required</sup> <a name="aggregationInterval" id="@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.property.aggregationInterval"></a>

```java
public java.lang.String getAggregationInterval();
```

- *Type:* java.lang.String

---

##### `crossProjectMetadata`<sup>Required</sup> <a name="crossProjectMetadata" id="@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.property.crossProjectMetadata"></a>

```java
public java.lang.String getCrossProjectMetadata();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `filterExpr`<sup>Required</sup> <a name="filterExpr" id="@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.property.filterExpr"></a>

```java
public java.lang.String getFilterExpr();
```

- *Type:* java.lang.String

---

##### `flowSampling`<sup>Required</sup> <a name="flowSampling" id="@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.property.flowSampling"></a>

```java
public java.lang.Number getFlowSampling();
```

- *Type:* java.lang.Number

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.property.labels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.property.metadata"></a>

```java
public java.lang.String getMetadata();
```

- *Type:* java.lang.String

---

##### `metadataFields`<sup>Required</sup> <a name="metadataFields" id="@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.property.metadataFields"></a>

```java
public java.util.List<java.lang.String> getMetadataFields();
```

- *Type:* java.util.List<java.lang.String>

---

##### `organization`<sup>Required</sup> <a name="organization" id="@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.property.organization"></a>

```java
public java.lang.String getOrganization();
```

- *Type:* java.lang.String

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `vpcFlowLogsConfigId`<sup>Required</sup> <a name="vpcFlowLogsConfigId" id="@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.property.vpcFlowLogsConfigId"></a>

```java
public java.lang.String getVpcFlowLogsConfigId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfig.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleNetworkManagementOrganizationVpcFlowLogsConfigConfig <a name="GoogleNetworkManagementOrganizationVpcFlowLogsConfigConfig" id="@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfigConfig.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_network_management_organization_vpc_flow_logs_config.GoogleNetworkManagementOrganizationVpcFlowLogsConfigConfig;

GoogleNetworkManagementOrganizationVpcFlowLogsConfigConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .location(java.lang.String)
    .organization(java.lang.String)
    .vpcFlowLogsConfigId(java.lang.String)
//  .aggregationInterval(java.lang.String)
//  .crossProjectMetadata(java.lang.String)
//  .description(java.lang.String)
//  .filterExpr(java.lang.String)
//  .flowSampling(java.lang.Number)
//  .id(java.lang.String)
//  .labels(java.util.Map<java.lang.String, java.lang.String>)
//  .metadata(java.lang.String)
//  .metadataFields(java.util.List<java.lang.String>)
//  .state(java.lang.String)
//  .timeouts(GoogleNetworkManagementOrganizationVpcFlowLogsConfigTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfigConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfigConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfigConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfigConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfigConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfigConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfigConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfigConfig.property.location">location</a></code> | <code>java.lang.String</code> | Resource ID segment making up resource 'name'. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfigConfig.property.organization">organization</a></code> | <code>java.lang.String</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfigConfig.property.vpcFlowLogsConfigId">vpcFlowLogsConfigId</a></code> | <code>java.lang.String</code> | Required. ID of the 'VpcFlowLogsConfig'. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfigConfig.property.aggregationInterval">aggregationInterval</a></code> | <code>java.lang.String</code> | Optional. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfigConfig.property.crossProjectMetadata">crossProjectMetadata</a></code> | <code>java.lang.String</code> | Determines whether to include cross project annotations in the logs. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfigConfig.property.description">description</a></code> | <code>java.lang.String</code> | Optional. The user-supplied description of the VPC Flow Logs configuration. Maximum of 512 characters. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfigConfig.property.filterExpr">filterExpr</a></code> | <code>java.lang.String</code> | Optional. Export filter used to define which VPC Flow Logs should be logged. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfigConfig.property.flowSampling">flowSampling</a></code> | <code>java.lang.Number</code> | Optional. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfigConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_network_management_organization_vpc_flow_logs_config#id GoogleNetworkManagementOrganizationVpcFlowLogsConfig#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfigConfig.property.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Optional. Resource labels to represent the user-provided metadata. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfigConfig.property.metadata">metadata</a></code> | <code>java.lang.String</code> | Optional. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfigConfig.property.metadataFields">metadataFields</a></code> | <code>java.util.List<java.lang.String></code> | Optional. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfigConfig.property.state">state</a></code> | <code>java.lang.String</code> | Optional. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfigConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfigTimeouts">GoogleNetworkManagementOrganizationVpcFlowLogsConfigTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfigConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfigConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfigConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfigConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfigConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfigConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfigConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfigConfig.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

Resource ID segment making up resource 'name'.

It identifies the resource
within its parent collection as described in https://google.aip.dev/122. See documentation
for resource type 'networkmanagement.googleapis.com/VpcFlowLogsConfig'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_network_management_organization_vpc_flow_logs_config#location GoogleNetworkManagementOrganizationVpcFlowLogsConfig#location}

---

##### `organization`<sup>Required</sup> <a name="organization" id="@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfigConfig.property.organization"></a>

```java
public java.lang.String getOrganization();
```

- *Type:* java.lang.String

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_network_management_organization_vpc_flow_logs_config#organization GoogleNetworkManagementOrganizationVpcFlowLogsConfig#organization}

---

##### `vpcFlowLogsConfigId`<sup>Required</sup> <a name="vpcFlowLogsConfigId" id="@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfigConfig.property.vpcFlowLogsConfigId"></a>

```java
public java.lang.String getVpcFlowLogsConfigId();
```

- *Type:* java.lang.String

Required. ID of the 'VpcFlowLogsConfig'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_network_management_organization_vpc_flow_logs_config#vpc_flow_logs_config_id GoogleNetworkManagementOrganizationVpcFlowLogsConfig#vpc_flow_logs_config_id}

---

##### `aggregationInterval`<sup>Optional</sup> <a name="aggregationInterval" id="@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfigConfig.property.aggregationInterval"></a>

```java
public java.lang.String getAggregationInterval();
```

- *Type:* java.lang.String

Optional.

The aggregation interval for the logs. Default value is
INTERVAL_5_SEC.   Possible values: INTERVAL_5_SEC INTERVAL_30_SEC INTERVAL_1_MIN INTERVAL_5_MIN INTERVAL_10_MIN INTERVAL_15_MIN

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_network_management_organization_vpc_flow_logs_config#aggregation_interval GoogleNetworkManagementOrganizationVpcFlowLogsConfig#aggregation_interval}

---

##### `crossProjectMetadata`<sup>Optional</sup> <a name="crossProjectMetadata" id="@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfigConfig.property.crossProjectMetadata"></a>

```java
public java.lang.String getCrossProjectMetadata();
```

- *Type:* java.lang.String

Determines whether to include cross project annotations in the logs.

This field is available only for organization configurations. If not
specified in org configs will be set to CROSS_PROJECT_METADATA_ENABLED.
Possible values:
CROSS_PROJECT_METADATA_ENABLED
CROSS_PROJECT_METADATA_DISABLED Possible values: ["CROSS_PROJECT_METADATA_ENABLED", "CROSS_PROJECT_METADATA_DISABLED"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_network_management_organization_vpc_flow_logs_config#cross_project_metadata GoogleNetworkManagementOrganizationVpcFlowLogsConfig#cross_project_metadata}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfigConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Optional. The user-supplied description of the VPC Flow Logs configuration. Maximum of 512 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_network_management_organization_vpc_flow_logs_config#description GoogleNetworkManagementOrganizationVpcFlowLogsConfig#description}

---

##### `filterExpr`<sup>Optional</sup> <a name="filterExpr" id="@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfigConfig.property.filterExpr"></a>

```java
public java.lang.String getFilterExpr();
```

- *Type:* java.lang.String

Optional. Export filter used to define which VPC Flow Logs should be logged.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_network_management_organization_vpc_flow_logs_config#filter_expr GoogleNetworkManagementOrganizationVpcFlowLogsConfig#filter_expr}

---

##### `flowSampling`<sup>Optional</sup> <a name="flowSampling" id="@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfigConfig.property.flowSampling"></a>

```java
public java.lang.Number getFlowSampling();
```

- *Type:* java.lang.Number

Optional.

The value of the field must be in (0, 1]. The sampling rate
of VPC Flow Logs where 1.0 means all collected logs are reported. Setting the
sampling rate to 0.0 is not allowed. If you want to disable VPC Flow Logs, use
the state field instead. Default value is 1.0

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_network_management_organization_vpc_flow_logs_config#flow_sampling GoogleNetworkManagementOrganizationVpcFlowLogsConfig#flow_sampling}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfigConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_network_management_organization_vpc_flow_logs_config#id GoogleNetworkManagementOrganizationVpcFlowLogsConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfigConfig.property.labels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Optional. Resource labels to represent the user-provided metadata.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_network_management_organization_vpc_flow_logs_config#labels GoogleNetworkManagementOrganizationVpcFlowLogsConfig#labels}

---

##### `metadata`<sup>Optional</sup> <a name="metadata" id="@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfigConfig.property.metadata"></a>

```java
public java.lang.String getMetadata();
```

- *Type:* java.lang.String

Optional.

Configures whether all, none or a subset of metadata fields
should be added to the reported VPC flow logs. Default value is INCLUDE_ALL_METADATA.
Possible values:  METADATA_UNSPECIFIED INCLUDE_ALL_METADATA EXCLUDE_ALL_METADATA CUSTOM_METADATA

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_network_management_organization_vpc_flow_logs_config#metadata GoogleNetworkManagementOrganizationVpcFlowLogsConfig#metadata}

---

##### `metadataFields`<sup>Optional</sup> <a name="metadataFields" id="@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfigConfig.property.metadataFields"></a>

```java
public java.util.List<java.lang.String> getMetadataFields();
```

- *Type:* java.util.List<java.lang.String>

Optional.

Custom metadata fields to include in the reported VPC flow
logs. Can only be specified if "metadata" was set to CUSTOM_METADATA.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_network_management_organization_vpc_flow_logs_config#metadata_fields GoogleNetworkManagementOrganizationVpcFlowLogsConfig#metadata_fields}

---

##### `state`<sup>Optional</sup> <a name="state" id="@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfigConfig.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

Optional.

The state of the VPC Flow Log configuration. Default value
is ENABLED. When creating a new configuration, it must be enabled.
Possible values: ENABLED DISABLED

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_network_management_organization_vpc_flow_logs_config#state GoogleNetworkManagementOrganizationVpcFlowLogsConfig#state}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfigConfig.property.timeouts"></a>

```java
public GoogleNetworkManagementOrganizationVpcFlowLogsConfigTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfigTimeouts">GoogleNetworkManagementOrganizationVpcFlowLogsConfigTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_network_management_organization_vpc_flow_logs_config#timeouts GoogleNetworkManagementOrganizationVpcFlowLogsConfig#timeouts}

---

### GoogleNetworkManagementOrganizationVpcFlowLogsConfigTimeouts <a name="GoogleNetworkManagementOrganizationVpcFlowLogsConfigTimeouts" id="@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfigTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfigTimeouts.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_network_management_organization_vpc_flow_logs_config.GoogleNetworkManagementOrganizationVpcFlowLogsConfigTimeouts;

GoogleNetworkManagementOrganizationVpcFlowLogsConfigTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfigTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_network_management_organization_vpc_flow_logs_config#create GoogleNetworkManagementOrganizationVpcFlowLogsConfig#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfigTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_network_management_organization_vpc_flow_logs_config#delete GoogleNetworkManagementOrganizationVpcFlowLogsConfig#delete}. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfigTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_network_management_organization_vpc_flow_logs_config#update GoogleNetworkManagementOrganizationVpcFlowLogsConfig#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfigTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_network_management_organization_vpc_flow_logs_config#create GoogleNetworkManagementOrganizationVpcFlowLogsConfig#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfigTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_network_management_organization_vpc_flow_logs_config#delete GoogleNetworkManagementOrganizationVpcFlowLogsConfig#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfigTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_network_management_organization_vpc_flow_logs_config#update GoogleNetworkManagementOrganizationVpcFlowLogsConfig#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleNetworkManagementOrganizationVpcFlowLogsConfigTimeoutsOutputReference <a name="GoogleNetworkManagementOrganizationVpcFlowLogsConfigTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfigTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfigTimeoutsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_network_management_organization_vpc_flow_logs_config.GoogleNetworkManagementOrganizationVpcFlowLogsConfigTimeoutsOutputReference;

new GoogleNetworkManagementOrganizationVpcFlowLogsConfigTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfigTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfigTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfigTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfigTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfigTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfigTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfigTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfigTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfigTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfigTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfigTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfigTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfigTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfigTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfigTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfigTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfigTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfigTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfigTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfigTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfigTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfigTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfigTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfigTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfigTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfigTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfigTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfigTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfigTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfigTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfigTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfigTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfigTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfigTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfigTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfigTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfigTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfigTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfigTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfigTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfigTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfigTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfigTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfigTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfigTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfigTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfigTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfigTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfigTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfigTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfigTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfigTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfigTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfigTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfigTimeouts">GoogleNetworkManagementOrganizationVpcFlowLogsConfigTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfigTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfigTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfigTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfigTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfigTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfigTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfigTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfigTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfigTimeoutsOutputReference.property.internalValue"></a>

```java
public IResolvable|GoogleNetworkManagementOrganizationVpcFlowLogsConfigTimeouts getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleNetworkManagementOrganizationVpcFlowLogsConfig.GoogleNetworkManagementOrganizationVpcFlowLogsConfigTimeouts">GoogleNetworkManagementOrganizationVpcFlowLogsConfigTimeouts</a>

---



