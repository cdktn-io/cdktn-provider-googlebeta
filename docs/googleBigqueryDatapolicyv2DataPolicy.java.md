# `googleBigqueryDatapolicyv2DataPolicy` Submodule <a name="`googleBigqueryDatapolicyv2DataPolicy` Submodule" id="@cdktn/provider-google-beta.googleBigqueryDatapolicyv2DataPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleBigqueryDatapolicyv2DataPolicy <a name="GoogleBigqueryDatapolicyv2DataPolicy" id="@cdktn/provider-google-beta.googleBigqueryDatapolicyv2DataPolicy.GoogleBigqueryDatapolicyv2DataPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_bigquery_datapolicyv2_data_policy google_bigquery_datapolicyv2_data_policy}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleBigqueryDatapolicyv2DataPolicy.GoogleBigqueryDatapolicyv2DataPolicy.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_bigquery_datapolicyv2_data_policy.GoogleBigqueryDatapolicyv2DataPolicy;

GoogleBigqueryDatapolicyv2DataPolicy.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .dataPolicyId(java.lang.String)
    .dataPolicyType(java.lang.String)
    .location(java.lang.String)
//  .dataMaskingPolicy(GoogleBigqueryDatapolicyv2DataPolicyDataMaskingPolicy)
//  .deletionPolicy(java.lang.String)
//  .etag(java.lang.String)
//  .grantees(java.util.List<java.lang.String>)
//  .id(java.lang.String)
//  .project(java.lang.String)
//  .timeouts(GoogleBigqueryDatapolicyv2DataPolicyTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDatapolicyv2DataPolicy.GoogleBigqueryDatapolicyv2DataPolicy.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDatapolicyv2DataPolicy.GoogleBigqueryDatapolicyv2DataPolicy.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDatapolicyv2DataPolicy.GoogleBigqueryDatapolicyv2DataPolicy.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDatapolicyv2DataPolicy.GoogleBigqueryDatapolicyv2DataPolicy.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDatapolicyv2DataPolicy.GoogleBigqueryDatapolicyv2DataPolicy.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDatapolicyv2DataPolicy.GoogleBigqueryDatapolicyv2DataPolicy.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDatapolicyv2DataPolicy.GoogleBigqueryDatapolicyv2DataPolicy.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDatapolicyv2DataPolicy.GoogleBigqueryDatapolicyv2DataPolicy.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDatapolicyv2DataPolicy.GoogleBigqueryDatapolicyv2DataPolicy.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDatapolicyv2DataPolicy.GoogleBigqueryDatapolicyv2DataPolicy.Initializer.parameter.dataPolicyId">dataPolicyId</a></code> | <code>java.lang.String</code> | User-assigned (human readable) ID of the data policy that needs to be unique within a project. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDatapolicyv2DataPolicy.GoogleBigqueryDatapolicyv2DataPolicy.Initializer.parameter.dataPolicyType">dataPolicyType</a></code> | <code>java.lang.String</code> | Type of data policy. Possible values: DATA_MASKING_POLICY RAW_DATA_ACCESS_POLICY COLUMN_LEVEL_SECURITY_POLICY. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDatapolicyv2DataPolicy.GoogleBigqueryDatapolicyv2DataPolicy.Initializer.parameter.location">location</a></code> | <code>java.lang.String</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDatapolicyv2DataPolicy.GoogleBigqueryDatapolicyv2DataPolicy.Initializer.parameter.dataMaskingPolicy">dataMaskingPolicy</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBigqueryDatapolicyv2DataPolicy.GoogleBigqueryDatapolicyv2DataPolicyDataMaskingPolicy">GoogleBigqueryDatapolicyv2DataPolicyDataMaskingPolicy</a></code> | data_masking_policy block. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDatapolicyv2DataPolicy.GoogleBigqueryDatapolicyv2DataPolicy.Initializer.parameter.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDatapolicyv2DataPolicy.GoogleBigqueryDatapolicyv2DataPolicy.Initializer.parameter.etag">etag</a></code> | <code>java.lang.String</code> | The etag for this Data Policy. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDatapolicyv2DataPolicy.GoogleBigqueryDatapolicyv2DataPolicy.Initializer.parameter.grantees">grantees</a></code> | <code>java.util.List<java.lang.String></code> | The list of IAM principals that have Fine Grained Access to the underlying data goverened by this data policy. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDatapolicyv2DataPolicy.GoogleBigqueryDatapolicyv2DataPolicy.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_bigquery_datapolicyv2_data_policy#id GoogleBigqueryDatapolicyv2DataPolicy#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDatapolicyv2DataPolicy.GoogleBigqueryDatapolicyv2DataPolicy.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_bigquery_datapolicyv2_data_policy#project GoogleBigqueryDatapolicyv2DataPolicy#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDatapolicyv2DataPolicy.GoogleBigqueryDatapolicyv2DataPolicy.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBigqueryDatapolicyv2DataPolicy.GoogleBigqueryDatapolicyv2DataPolicyTimeouts">GoogleBigqueryDatapolicyv2DataPolicyTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleBigqueryDatapolicyv2DataPolicy.GoogleBigqueryDatapolicyv2DataPolicy.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleBigqueryDatapolicyv2DataPolicy.GoogleBigqueryDatapolicyv2DataPolicy.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleBigqueryDatapolicyv2DataPolicy.GoogleBigqueryDatapolicyv2DataPolicy.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleBigqueryDatapolicyv2DataPolicy.GoogleBigqueryDatapolicyv2DataPolicy.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleBigqueryDatapolicyv2DataPolicy.GoogleBigqueryDatapolicyv2DataPolicy.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleBigqueryDatapolicyv2DataPolicy.GoogleBigqueryDatapolicyv2DataPolicy.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleBigqueryDatapolicyv2DataPolicy.GoogleBigqueryDatapolicyv2DataPolicy.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleBigqueryDatapolicyv2DataPolicy.GoogleBigqueryDatapolicyv2DataPolicy.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleBigqueryDatapolicyv2DataPolicy.GoogleBigqueryDatapolicyv2DataPolicy.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `dataPolicyId`<sup>Required</sup> <a name="dataPolicyId" id="@cdktn/provider-google-beta.googleBigqueryDatapolicyv2DataPolicy.GoogleBigqueryDatapolicyv2DataPolicy.Initializer.parameter.dataPolicyId"></a>

- *Type:* java.lang.String

User-assigned (human readable) ID of the data policy that needs to be unique within a project.

Used as {data_policy_id} in part of the resource
name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_bigquery_datapolicyv2_data_policy#data_policy_id GoogleBigqueryDatapolicyv2DataPolicy#data_policy_id}

---

##### `dataPolicyType`<sup>Required</sup> <a name="dataPolicyType" id="@cdktn/provider-google-beta.googleBigqueryDatapolicyv2DataPolicy.GoogleBigqueryDatapolicyv2DataPolicy.Initializer.parameter.dataPolicyType"></a>

- *Type:* java.lang.String

Type of data policy. Possible values: DATA_MASKING_POLICY RAW_DATA_ACCESS_POLICY COLUMN_LEVEL_SECURITY_POLICY.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_bigquery_datapolicyv2_data_policy#data_policy_type GoogleBigqueryDatapolicyv2DataPolicy#data_policy_type}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleBigqueryDatapolicyv2DataPolicy.GoogleBigqueryDatapolicyv2DataPolicy.Initializer.parameter.location"></a>

- *Type:* java.lang.String

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_bigquery_datapolicyv2_data_policy#location GoogleBigqueryDatapolicyv2DataPolicy#location}

---

##### `dataMaskingPolicy`<sup>Optional</sup> <a name="dataMaskingPolicy" id="@cdktn/provider-google-beta.googleBigqueryDatapolicyv2DataPolicy.GoogleBigqueryDatapolicyv2DataPolicy.Initializer.parameter.dataMaskingPolicy"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleBigqueryDatapolicyv2DataPolicy.GoogleBigqueryDatapolicyv2DataPolicyDataMaskingPolicy">GoogleBigqueryDatapolicyv2DataPolicyDataMaskingPolicy</a>

data_masking_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_bigquery_datapolicyv2_data_policy#data_masking_policy GoogleBigqueryDatapolicyv2DataPolicy#data_masking_policy}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google-beta.googleBigqueryDatapolicyv2DataPolicy.GoogleBigqueryDatapolicyv2DataPolicy.Initializer.parameter.deletionPolicy"></a>

- *Type:* java.lang.String

Whether Terraform will be prevented from destroying the instance.

Defaults to "DELETE".
When a 'terraform destroy' or 'terraform apply' would delete the instance,
the command will fail if this field is set to "PREVENT" in Terraform state.
When set to "ABANDON", the command will remove the resource from Terraform
management without updating or deleting the resource in the API.
When set to "DELETE", deleting the resource is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_bigquery_datapolicyv2_data_policy#deletion_policy GoogleBigqueryDatapolicyv2DataPolicy#deletion_policy}

---

##### `etag`<sup>Optional</sup> <a name="etag" id="@cdktn/provider-google-beta.googleBigqueryDatapolicyv2DataPolicy.GoogleBigqueryDatapolicyv2DataPolicy.Initializer.parameter.etag"></a>

- *Type:* java.lang.String

The etag for this Data Policy.

This field is used for UpdateDataPolicy calls. If Data Policy exists, this
field is required and must match the server's etag. It will also be
populated in the response of GetDataPolicy, CreateDataPolicy, and
UpdateDataPolicy calls.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_bigquery_datapolicyv2_data_policy#etag GoogleBigqueryDatapolicyv2DataPolicy#etag}

---

##### `grantees`<sup>Optional</sup> <a name="grantees" id="@cdktn/provider-google-beta.googleBigqueryDatapolicyv2DataPolicy.GoogleBigqueryDatapolicyv2DataPolicy.Initializer.parameter.grantees"></a>

- *Type:* java.util.List<java.lang.String>

The list of IAM principals that have Fine Grained Access to the underlying data goverened by this data policy.

Uses the [IAM V2 principal
syntax](https://cloud.google.com/iam/docs/principal-identifiers#v2) Only
supports principal types users, groups, serviceaccounts, cloudidentity.
This field is supported in V2 Data Policy only. In case of V1 data policies
(i.e. verion = 1 and policy_tag is set), this field is not populated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_bigquery_datapolicyv2_data_policy#grantees GoogleBigqueryDatapolicyv2DataPolicy#grantees}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleBigqueryDatapolicyv2DataPolicy.GoogleBigqueryDatapolicyv2DataPolicy.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_bigquery_datapolicyv2_data_policy#id GoogleBigqueryDatapolicyv2DataPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.googleBigqueryDatapolicyv2DataPolicy.GoogleBigqueryDatapolicyv2DataPolicy.Initializer.parameter.project"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_bigquery_datapolicyv2_data_policy#project GoogleBigqueryDatapolicyv2DataPolicy#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleBigqueryDatapolicyv2DataPolicy.GoogleBigqueryDatapolicyv2DataPolicy.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleBigqueryDatapolicyv2DataPolicy.GoogleBigqueryDatapolicyv2DataPolicyTimeouts">GoogleBigqueryDatapolicyv2DataPolicyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_bigquery_datapolicyv2_data_policy#timeouts GoogleBigqueryDatapolicyv2DataPolicy#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDatapolicyv2DataPolicy.GoogleBigqueryDatapolicyv2DataPolicy.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDatapolicyv2DataPolicy.GoogleBigqueryDatapolicyv2DataPolicy.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDatapolicyv2DataPolicy.GoogleBigqueryDatapolicyv2DataPolicy.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDatapolicyv2DataPolicy.GoogleBigqueryDatapolicyv2DataPolicy.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDatapolicyv2DataPolicy.GoogleBigqueryDatapolicyv2DataPolicy.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDatapolicyv2DataPolicy.GoogleBigqueryDatapolicyv2DataPolicy.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDatapolicyv2DataPolicy.GoogleBigqueryDatapolicyv2DataPolicy.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDatapolicyv2DataPolicy.GoogleBigqueryDatapolicyv2DataPolicy.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDatapolicyv2DataPolicy.GoogleBigqueryDatapolicyv2DataPolicy.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDatapolicyv2DataPolicy.GoogleBigqueryDatapolicyv2DataPolicy.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDatapolicyv2DataPolicy.GoogleBigqueryDatapolicyv2DataPolicy.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDatapolicyv2DataPolicy.GoogleBigqueryDatapolicyv2DataPolicy.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDatapolicyv2DataPolicy.GoogleBigqueryDatapolicyv2DataPolicy.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDatapolicyv2DataPolicy.GoogleBigqueryDatapolicyv2DataPolicy.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDatapolicyv2DataPolicy.GoogleBigqueryDatapolicyv2DataPolicy.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDatapolicyv2DataPolicy.GoogleBigqueryDatapolicyv2DataPolicy.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDatapolicyv2DataPolicy.GoogleBigqueryDatapolicyv2DataPolicy.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDatapolicyv2DataPolicy.GoogleBigqueryDatapolicyv2DataPolicy.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDatapolicyv2DataPolicy.GoogleBigqueryDatapolicyv2DataPolicy.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDatapolicyv2DataPolicy.GoogleBigqueryDatapolicyv2DataPolicy.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDatapolicyv2DataPolicy.GoogleBigqueryDatapolicyv2DataPolicy.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDatapolicyv2DataPolicy.GoogleBigqueryDatapolicyv2DataPolicy.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDatapolicyv2DataPolicy.GoogleBigqueryDatapolicyv2DataPolicy.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDatapolicyv2DataPolicy.GoogleBigqueryDatapolicyv2DataPolicy.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDatapolicyv2DataPolicy.GoogleBigqueryDatapolicyv2DataPolicy.putDataMaskingPolicy">putDataMaskingPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDatapolicyv2DataPolicy.GoogleBigqueryDatapolicyv2DataPolicy.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDatapolicyv2DataPolicy.GoogleBigqueryDatapolicyv2DataPolicy.resetDataMaskingPolicy">resetDataMaskingPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDatapolicyv2DataPolicy.GoogleBigqueryDatapolicyv2DataPolicy.resetDeletionPolicy">resetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDatapolicyv2DataPolicy.GoogleBigqueryDatapolicyv2DataPolicy.resetEtag">resetEtag</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDatapolicyv2DataPolicy.GoogleBigqueryDatapolicyv2DataPolicy.resetGrantees">resetGrantees</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDatapolicyv2DataPolicy.GoogleBigqueryDatapolicyv2DataPolicy.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDatapolicyv2DataPolicy.GoogleBigqueryDatapolicyv2DataPolicy.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDatapolicyv2DataPolicy.GoogleBigqueryDatapolicyv2DataPolicy.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleBigqueryDatapolicyv2DataPolicy.GoogleBigqueryDatapolicyv2DataPolicy.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google-beta.googleBigqueryDatapolicyv2DataPolicy.GoogleBigqueryDatapolicyv2DataPolicy.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google-beta.googleBigqueryDatapolicyv2DataPolicy.GoogleBigqueryDatapolicyv2DataPolicy.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google-beta.googleBigqueryDatapolicyv2DataPolicy.GoogleBigqueryDatapolicyv2DataPolicy.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google-beta.googleBigqueryDatapolicyv2DataPolicy.GoogleBigqueryDatapolicyv2DataPolicy.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleBigqueryDatapolicyv2DataPolicy.GoogleBigqueryDatapolicyv2DataPolicy.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google-beta.googleBigqueryDatapolicyv2DataPolicy.GoogleBigqueryDatapolicyv2DataPolicy.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google-beta.googleBigqueryDatapolicyv2DataPolicy.GoogleBigqueryDatapolicyv2DataPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google-beta.googleBigqueryDatapolicyv2DataPolicy.GoogleBigqueryDatapolicyv2DataPolicy.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google-beta.googleBigqueryDatapolicyv2DataPolicy.GoogleBigqueryDatapolicyv2DataPolicy.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google-beta.googleBigqueryDatapolicyv2DataPolicy.GoogleBigqueryDatapolicyv2DataPolicy.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google-beta.googleBigqueryDatapolicyv2DataPolicy.GoogleBigqueryDatapolicyv2DataPolicy.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google-beta.googleBigqueryDatapolicyv2DataPolicy.GoogleBigqueryDatapolicyv2DataPolicy.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleBigqueryDatapolicyv2DataPolicy.GoogleBigqueryDatapolicyv2DataPolicy.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleBigqueryDatapolicyv2DataPolicy.GoogleBigqueryDatapolicyv2DataPolicy.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryDatapolicyv2DataPolicy.GoogleBigqueryDatapolicyv2DataPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleBigqueryDatapolicyv2DataPolicy.GoogleBigqueryDatapolicyv2DataPolicy.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryDatapolicyv2DataPolicy.GoogleBigqueryDatapolicyv2DataPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleBigqueryDatapolicyv2DataPolicy.GoogleBigqueryDatapolicyv2DataPolicy.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryDatapolicyv2DataPolicy.GoogleBigqueryDatapolicyv2DataPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleBigqueryDatapolicyv2DataPolicy.GoogleBigqueryDatapolicyv2DataPolicy.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryDatapolicyv2DataPolicy.GoogleBigqueryDatapolicyv2DataPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleBigqueryDatapolicyv2DataPolicy.GoogleBigqueryDatapolicyv2DataPolicy.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryDatapolicyv2DataPolicy.GoogleBigqueryDatapolicyv2DataPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleBigqueryDatapolicyv2DataPolicy.GoogleBigqueryDatapolicyv2DataPolicy.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryDatapolicyv2DataPolicy.GoogleBigqueryDatapolicyv2DataPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleBigqueryDatapolicyv2DataPolicy.GoogleBigqueryDatapolicyv2DataPolicy.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryDatapolicyv2DataPolicy.GoogleBigqueryDatapolicyv2DataPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleBigqueryDatapolicyv2DataPolicy.GoogleBigqueryDatapolicyv2DataPolicy.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryDatapolicyv2DataPolicy.GoogleBigqueryDatapolicyv2DataPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleBigqueryDatapolicyv2DataPolicy.GoogleBigqueryDatapolicyv2DataPolicy.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryDatapolicyv2DataPolicy.GoogleBigqueryDatapolicyv2DataPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google-beta.googleBigqueryDatapolicyv2DataPolicy.GoogleBigqueryDatapolicyv2DataPolicy.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google-beta.googleBigqueryDatapolicyv2DataPolicy.GoogleBigqueryDatapolicyv2DataPolicy.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleBigqueryDatapolicyv2DataPolicy.GoogleBigqueryDatapolicyv2DataPolicy.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleBigqueryDatapolicyv2DataPolicy.GoogleBigqueryDatapolicyv2DataPolicy.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleBigqueryDatapolicyv2DataPolicy.GoogleBigqueryDatapolicyv2DataPolicy.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryDatapolicyv2DataPolicy.GoogleBigqueryDatapolicyv2DataPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google-beta.googleBigqueryDatapolicyv2DataPolicy.GoogleBigqueryDatapolicyv2DataPolicy.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleBigqueryDatapolicyv2DataPolicy.GoogleBigqueryDatapolicyv2DataPolicy.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google-beta.googleBigqueryDatapolicyv2DataPolicy.GoogleBigqueryDatapolicyv2DataPolicy.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleBigqueryDatapolicyv2DataPolicy.GoogleBigqueryDatapolicyv2DataPolicy.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google-beta.googleBigqueryDatapolicyv2DataPolicy.GoogleBigqueryDatapolicyv2DataPolicy.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google-beta.googleBigqueryDatapolicyv2DataPolicy.GoogleBigqueryDatapolicyv2DataPolicy.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleBigqueryDatapolicyv2DataPolicy.GoogleBigqueryDatapolicyv2DataPolicy.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putDataMaskingPolicy` <a name="putDataMaskingPolicy" id="@cdktn/provider-google-beta.googleBigqueryDatapolicyv2DataPolicy.GoogleBigqueryDatapolicyv2DataPolicy.putDataMaskingPolicy"></a>

```java
public void putDataMaskingPolicy(GoogleBigqueryDatapolicyv2DataPolicyDataMaskingPolicy value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleBigqueryDatapolicyv2DataPolicy.GoogleBigqueryDatapolicyv2DataPolicy.putDataMaskingPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleBigqueryDatapolicyv2DataPolicy.GoogleBigqueryDatapolicyv2DataPolicyDataMaskingPolicy">GoogleBigqueryDatapolicyv2DataPolicyDataMaskingPolicy</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-google-beta.googleBigqueryDatapolicyv2DataPolicy.GoogleBigqueryDatapolicyv2DataPolicy.putTimeouts"></a>

```java
public void putTimeouts(GoogleBigqueryDatapolicyv2DataPolicyTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleBigqueryDatapolicyv2DataPolicy.GoogleBigqueryDatapolicyv2DataPolicy.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleBigqueryDatapolicyv2DataPolicy.GoogleBigqueryDatapolicyv2DataPolicyTimeouts">GoogleBigqueryDatapolicyv2DataPolicyTimeouts</a>

---

##### `resetDataMaskingPolicy` <a name="resetDataMaskingPolicy" id="@cdktn/provider-google-beta.googleBigqueryDatapolicyv2DataPolicy.GoogleBigqueryDatapolicyv2DataPolicy.resetDataMaskingPolicy"></a>

```java
public void resetDataMaskingPolicy()
```

##### `resetDeletionPolicy` <a name="resetDeletionPolicy" id="@cdktn/provider-google-beta.googleBigqueryDatapolicyv2DataPolicy.GoogleBigqueryDatapolicyv2DataPolicy.resetDeletionPolicy"></a>

```java
public void resetDeletionPolicy()
```

##### `resetEtag` <a name="resetEtag" id="@cdktn/provider-google-beta.googleBigqueryDatapolicyv2DataPolicy.GoogleBigqueryDatapolicyv2DataPolicy.resetEtag"></a>

```java
public void resetEtag()
```

##### `resetGrantees` <a name="resetGrantees" id="@cdktn/provider-google-beta.googleBigqueryDatapolicyv2DataPolicy.GoogleBigqueryDatapolicyv2DataPolicy.resetGrantees"></a>

```java
public void resetGrantees()
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google-beta.googleBigqueryDatapolicyv2DataPolicy.GoogleBigqueryDatapolicyv2DataPolicy.resetId"></a>

```java
public void resetId()
```

##### `resetProject` <a name="resetProject" id="@cdktn/provider-google-beta.googleBigqueryDatapolicyv2DataPolicy.GoogleBigqueryDatapolicyv2DataPolicy.resetProject"></a>

```java
public void resetProject()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-google-beta.googleBigqueryDatapolicyv2DataPolicy.GoogleBigqueryDatapolicyv2DataPolicy.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDatapolicyv2DataPolicy.GoogleBigqueryDatapolicyv2DataPolicy.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDatapolicyv2DataPolicy.GoogleBigqueryDatapolicyv2DataPolicy.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDatapolicyv2DataPolicy.GoogleBigqueryDatapolicyv2DataPolicy.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDatapolicyv2DataPolicy.GoogleBigqueryDatapolicyv2DataPolicy.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a GoogleBigqueryDatapolicyv2DataPolicy resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google-beta.googleBigqueryDatapolicyv2DataPolicy.GoogleBigqueryDatapolicyv2DataPolicy.isConstruct"></a>

```java
import io.cdktn.providers.google_beta.google_bigquery_datapolicyv2_data_policy.GoogleBigqueryDatapolicyv2DataPolicy;

GoogleBigqueryDatapolicyv2DataPolicy.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleBigqueryDatapolicyv2DataPolicy.GoogleBigqueryDatapolicyv2DataPolicy.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google-beta.googleBigqueryDatapolicyv2DataPolicy.GoogleBigqueryDatapolicyv2DataPolicy.isTerraformElement"></a>

```java
import io.cdktn.providers.google_beta.google_bigquery_datapolicyv2_data_policy.GoogleBigqueryDatapolicyv2DataPolicy;

GoogleBigqueryDatapolicyv2DataPolicy.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleBigqueryDatapolicyv2DataPolicy.GoogleBigqueryDatapolicyv2DataPolicy.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google-beta.googleBigqueryDatapolicyv2DataPolicy.GoogleBigqueryDatapolicyv2DataPolicy.isTerraformResource"></a>

```java
import io.cdktn.providers.google_beta.google_bigquery_datapolicyv2_data_policy.GoogleBigqueryDatapolicyv2DataPolicy;

GoogleBigqueryDatapolicyv2DataPolicy.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleBigqueryDatapolicyv2DataPolicy.GoogleBigqueryDatapolicyv2DataPolicy.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google-beta.googleBigqueryDatapolicyv2DataPolicy.GoogleBigqueryDatapolicyv2DataPolicy.generateConfigForImport"></a>

```java
import io.cdktn.providers.google_beta.google_bigquery_datapolicyv2_data_policy.GoogleBigqueryDatapolicyv2DataPolicy;

GoogleBigqueryDatapolicyv2DataPolicy.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),GoogleBigqueryDatapolicyv2DataPolicy.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a GoogleBigqueryDatapolicyv2DataPolicy resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleBigqueryDatapolicyv2DataPolicy.GoogleBigqueryDatapolicyv2DataPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google-beta.googleBigqueryDatapolicyv2DataPolicy.GoogleBigqueryDatapolicyv2DataPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the GoogleBigqueryDatapolicyv2DataPolicy to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google-beta.googleBigqueryDatapolicyv2DataPolicy.GoogleBigqueryDatapolicyv2DataPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing GoogleBigqueryDatapolicyv2DataPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_bigquery_datapolicyv2_data_policy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleBigqueryDatapolicyv2DataPolicy.GoogleBigqueryDatapolicyv2DataPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the GoogleBigqueryDatapolicyv2DataPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDatapolicyv2DataPolicy.GoogleBigqueryDatapolicyv2DataPolicy.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDatapolicyv2DataPolicy.GoogleBigqueryDatapolicyv2DataPolicy.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDatapolicyv2DataPolicy.GoogleBigqueryDatapolicyv2DataPolicy.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDatapolicyv2DataPolicy.GoogleBigqueryDatapolicyv2DataPolicy.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDatapolicyv2DataPolicy.GoogleBigqueryDatapolicyv2DataPolicy.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDatapolicyv2DataPolicy.GoogleBigqueryDatapolicyv2DataPolicy.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDatapolicyv2DataPolicy.GoogleBigqueryDatapolicyv2DataPolicy.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDatapolicyv2DataPolicy.GoogleBigqueryDatapolicyv2DataPolicy.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDatapolicyv2DataPolicy.GoogleBigqueryDatapolicyv2DataPolicy.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDatapolicyv2DataPolicy.GoogleBigqueryDatapolicyv2DataPolicy.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDatapolicyv2DataPolicy.GoogleBigqueryDatapolicyv2DataPolicy.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDatapolicyv2DataPolicy.GoogleBigqueryDatapolicyv2DataPolicy.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDatapolicyv2DataPolicy.GoogleBigqueryDatapolicyv2DataPolicy.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDatapolicyv2DataPolicy.GoogleBigqueryDatapolicyv2DataPolicy.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDatapolicyv2DataPolicy.GoogleBigqueryDatapolicyv2DataPolicy.property.dataMaskingPolicy">dataMaskingPolicy</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBigqueryDatapolicyv2DataPolicy.GoogleBigqueryDatapolicyv2DataPolicyDataMaskingPolicyOutputReference">GoogleBigqueryDatapolicyv2DataPolicyDataMaskingPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDatapolicyv2DataPolicy.GoogleBigqueryDatapolicyv2DataPolicy.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDatapolicyv2DataPolicy.GoogleBigqueryDatapolicyv2DataPolicy.property.policyTag">policyTag</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDatapolicyv2DataPolicy.GoogleBigqueryDatapolicyv2DataPolicy.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBigqueryDatapolicyv2DataPolicy.GoogleBigqueryDatapolicyv2DataPolicyTimeoutsOutputReference">GoogleBigqueryDatapolicyv2DataPolicyTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDatapolicyv2DataPolicy.GoogleBigqueryDatapolicyv2DataPolicy.property.version">version</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDatapolicyv2DataPolicy.GoogleBigqueryDatapolicyv2DataPolicy.property.dataMaskingPolicyInput">dataMaskingPolicyInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBigqueryDatapolicyv2DataPolicy.GoogleBigqueryDatapolicyv2DataPolicyDataMaskingPolicy">GoogleBigqueryDatapolicyv2DataPolicyDataMaskingPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDatapolicyv2DataPolicy.GoogleBigqueryDatapolicyv2DataPolicy.property.dataPolicyIdInput">dataPolicyIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDatapolicyv2DataPolicy.GoogleBigqueryDatapolicyv2DataPolicy.property.dataPolicyTypeInput">dataPolicyTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDatapolicyv2DataPolicy.GoogleBigqueryDatapolicyv2DataPolicy.property.deletionPolicyInput">deletionPolicyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDatapolicyv2DataPolicy.GoogleBigqueryDatapolicyv2DataPolicy.property.etagInput">etagInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDatapolicyv2DataPolicy.GoogleBigqueryDatapolicyv2DataPolicy.property.granteesInput">granteesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDatapolicyv2DataPolicy.GoogleBigqueryDatapolicyv2DataPolicy.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDatapolicyv2DataPolicy.GoogleBigqueryDatapolicyv2DataPolicy.property.locationInput">locationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDatapolicyv2DataPolicy.GoogleBigqueryDatapolicyv2DataPolicy.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDatapolicyv2DataPolicy.GoogleBigqueryDatapolicyv2DataPolicy.property.timeoutsInput">timeoutsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleBigqueryDatapolicyv2DataPolicy.GoogleBigqueryDatapolicyv2DataPolicyTimeouts">GoogleBigqueryDatapolicyv2DataPolicyTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDatapolicyv2DataPolicy.GoogleBigqueryDatapolicyv2DataPolicy.property.dataPolicyId">dataPolicyId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDatapolicyv2DataPolicy.GoogleBigqueryDatapolicyv2DataPolicy.property.dataPolicyType">dataPolicyType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDatapolicyv2DataPolicy.GoogleBigqueryDatapolicyv2DataPolicy.property.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDatapolicyv2DataPolicy.GoogleBigqueryDatapolicyv2DataPolicy.property.etag">etag</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDatapolicyv2DataPolicy.GoogleBigqueryDatapolicyv2DataPolicy.property.grantees">grantees</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDatapolicyv2DataPolicy.GoogleBigqueryDatapolicyv2DataPolicy.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDatapolicyv2DataPolicy.GoogleBigqueryDatapolicyv2DataPolicy.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDatapolicyv2DataPolicy.GoogleBigqueryDatapolicyv2DataPolicy.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google-beta.googleBigqueryDatapolicyv2DataPolicy.GoogleBigqueryDatapolicyv2DataPolicy.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google-beta.googleBigqueryDatapolicyv2DataPolicy.GoogleBigqueryDatapolicyv2DataPolicy.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleBigqueryDatapolicyv2DataPolicy.GoogleBigqueryDatapolicyv2DataPolicy.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google-beta.googleBigqueryDatapolicyv2DataPolicy.GoogleBigqueryDatapolicyv2DataPolicy.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google-beta.googleBigqueryDatapolicyv2DataPolicy.GoogleBigqueryDatapolicyv2DataPolicy.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google-beta.googleBigqueryDatapolicyv2DataPolicy.GoogleBigqueryDatapolicyv2DataPolicy.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google-beta.googleBigqueryDatapolicyv2DataPolicy.GoogleBigqueryDatapolicyv2DataPolicy.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleBigqueryDatapolicyv2DataPolicy.GoogleBigqueryDatapolicyv2DataPolicy.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleBigqueryDatapolicyv2DataPolicy.GoogleBigqueryDatapolicyv2DataPolicy.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleBigqueryDatapolicyv2DataPolicy.GoogleBigqueryDatapolicyv2DataPolicy.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleBigqueryDatapolicyv2DataPolicy.GoogleBigqueryDatapolicyv2DataPolicy.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleBigqueryDatapolicyv2DataPolicy.GoogleBigqueryDatapolicyv2DataPolicy.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleBigqueryDatapolicyv2DataPolicy.GoogleBigqueryDatapolicyv2DataPolicy.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleBigqueryDatapolicyv2DataPolicy.GoogleBigqueryDatapolicyv2DataPolicy.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `dataMaskingPolicy`<sup>Required</sup> <a name="dataMaskingPolicy" id="@cdktn/provider-google-beta.googleBigqueryDatapolicyv2DataPolicy.GoogleBigqueryDatapolicyv2DataPolicy.property.dataMaskingPolicy"></a>

```java
public GoogleBigqueryDatapolicyv2DataPolicyDataMaskingPolicyOutputReference getDataMaskingPolicy();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleBigqueryDatapolicyv2DataPolicy.GoogleBigqueryDatapolicyv2DataPolicyDataMaskingPolicyOutputReference">GoogleBigqueryDatapolicyv2DataPolicyDataMaskingPolicyOutputReference</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleBigqueryDatapolicyv2DataPolicy.GoogleBigqueryDatapolicyv2DataPolicy.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `policyTag`<sup>Required</sup> <a name="policyTag" id="@cdktn/provider-google-beta.googleBigqueryDatapolicyv2DataPolicy.GoogleBigqueryDatapolicyv2DataPolicy.property.policyTag"></a>

```java
public java.lang.String getPolicyTag();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleBigqueryDatapolicyv2DataPolicy.GoogleBigqueryDatapolicyv2DataPolicy.property.timeouts"></a>

```java
public GoogleBigqueryDatapolicyv2DataPolicyTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleBigqueryDatapolicyv2DataPolicy.GoogleBigqueryDatapolicyv2DataPolicyTimeoutsOutputReference">GoogleBigqueryDatapolicyv2DataPolicyTimeoutsOutputReference</a>

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktn/provider-google-beta.googleBigqueryDatapolicyv2DataPolicy.GoogleBigqueryDatapolicyv2DataPolicy.property.version"></a>

```java
public java.lang.String getVersion();
```

- *Type:* java.lang.String

---

##### `dataMaskingPolicyInput`<sup>Optional</sup> <a name="dataMaskingPolicyInput" id="@cdktn/provider-google-beta.googleBigqueryDatapolicyv2DataPolicy.GoogleBigqueryDatapolicyv2DataPolicy.property.dataMaskingPolicyInput"></a>

```java
public GoogleBigqueryDatapolicyv2DataPolicyDataMaskingPolicy getDataMaskingPolicyInput();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleBigqueryDatapolicyv2DataPolicy.GoogleBigqueryDatapolicyv2DataPolicyDataMaskingPolicy">GoogleBigqueryDatapolicyv2DataPolicyDataMaskingPolicy</a>

---

##### `dataPolicyIdInput`<sup>Optional</sup> <a name="dataPolicyIdInput" id="@cdktn/provider-google-beta.googleBigqueryDatapolicyv2DataPolicy.GoogleBigqueryDatapolicyv2DataPolicy.property.dataPolicyIdInput"></a>

```java
public java.lang.String getDataPolicyIdInput();
```

- *Type:* java.lang.String

---

##### `dataPolicyTypeInput`<sup>Optional</sup> <a name="dataPolicyTypeInput" id="@cdktn/provider-google-beta.googleBigqueryDatapolicyv2DataPolicy.GoogleBigqueryDatapolicyv2DataPolicy.property.dataPolicyTypeInput"></a>

```java
public java.lang.String getDataPolicyTypeInput();
```

- *Type:* java.lang.String

---

##### `deletionPolicyInput`<sup>Optional</sup> <a name="deletionPolicyInput" id="@cdktn/provider-google-beta.googleBigqueryDatapolicyv2DataPolicy.GoogleBigqueryDatapolicyv2DataPolicy.property.deletionPolicyInput"></a>

```java
public java.lang.String getDeletionPolicyInput();
```

- *Type:* java.lang.String

---

##### `etagInput`<sup>Optional</sup> <a name="etagInput" id="@cdktn/provider-google-beta.googleBigqueryDatapolicyv2DataPolicy.GoogleBigqueryDatapolicyv2DataPolicy.property.etagInput"></a>

```java
public java.lang.String getEtagInput();
```

- *Type:* java.lang.String

---

##### `granteesInput`<sup>Optional</sup> <a name="granteesInput" id="@cdktn/provider-google-beta.googleBigqueryDatapolicyv2DataPolicy.GoogleBigqueryDatapolicyv2DataPolicy.property.granteesInput"></a>

```java
public java.util.List<java.lang.String> getGranteesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google-beta.googleBigqueryDatapolicyv2DataPolicy.GoogleBigqueryDatapolicyv2DataPolicy.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktn/provider-google-beta.googleBigqueryDatapolicyv2DataPolicy.GoogleBigqueryDatapolicyv2DataPolicy.property.locationInput"></a>

```java
public java.lang.String getLocationInput();
```

- *Type:* java.lang.String

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktn/provider-google-beta.googleBigqueryDatapolicyv2DataPolicy.GoogleBigqueryDatapolicyv2DataPolicy.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-google-beta.googleBigqueryDatapolicyv2DataPolicy.GoogleBigqueryDatapolicyv2DataPolicy.property.timeoutsInput"></a>

```java
public IResolvable|GoogleBigqueryDatapolicyv2DataPolicyTimeouts getTimeoutsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleBigqueryDatapolicyv2DataPolicy.GoogleBigqueryDatapolicyv2DataPolicyTimeouts">GoogleBigqueryDatapolicyv2DataPolicyTimeouts</a>

---

##### `dataPolicyId`<sup>Required</sup> <a name="dataPolicyId" id="@cdktn/provider-google-beta.googleBigqueryDatapolicyv2DataPolicy.GoogleBigqueryDatapolicyv2DataPolicy.property.dataPolicyId"></a>

```java
public java.lang.String getDataPolicyId();
```

- *Type:* java.lang.String

---

##### `dataPolicyType`<sup>Required</sup> <a name="dataPolicyType" id="@cdktn/provider-google-beta.googleBigqueryDatapolicyv2DataPolicy.GoogleBigqueryDatapolicyv2DataPolicy.property.dataPolicyType"></a>

```java
public java.lang.String getDataPolicyType();
```

- *Type:* java.lang.String

---

##### `deletionPolicy`<sup>Required</sup> <a name="deletionPolicy" id="@cdktn/provider-google-beta.googleBigqueryDatapolicyv2DataPolicy.GoogleBigqueryDatapolicyv2DataPolicy.property.deletionPolicy"></a>

```java
public java.lang.String getDeletionPolicy();
```

- *Type:* java.lang.String

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktn/provider-google-beta.googleBigqueryDatapolicyv2DataPolicy.GoogleBigqueryDatapolicyv2DataPolicy.property.etag"></a>

```java
public java.lang.String getEtag();
```

- *Type:* java.lang.String

---

##### `grantees`<sup>Required</sup> <a name="grantees" id="@cdktn/provider-google-beta.googleBigqueryDatapolicyv2DataPolicy.GoogleBigqueryDatapolicyv2DataPolicy.property.grantees"></a>

```java
public java.util.List<java.lang.String> getGrantees();
```

- *Type:* java.util.List<java.lang.String>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleBigqueryDatapolicyv2DataPolicy.GoogleBigqueryDatapolicyv2DataPolicy.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleBigqueryDatapolicyv2DataPolicy.GoogleBigqueryDatapolicyv2DataPolicy.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google-beta.googleBigqueryDatapolicyv2DataPolicy.GoogleBigqueryDatapolicyv2DataPolicy.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDatapolicyv2DataPolicy.GoogleBigqueryDatapolicyv2DataPolicy.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google-beta.googleBigqueryDatapolicyv2DataPolicy.GoogleBigqueryDatapolicyv2DataPolicy.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleBigqueryDatapolicyv2DataPolicyConfig <a name="GoogleBigqueryDatapolicyv2DataPolicyConfig" id="@cdktn/provider-google-beta.googleBigqueryDatapolicyv2DataPolicy.GoogleBigqueryDatapolicyv2DataPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleBigqueryDatapolicyv2DataPolicy.GoogleBigqueryDatapolicyv2DataPolicyConfig.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_bigquery_datapolicyv2_data_policy.GoogleBigqueryDatapolicyv2DataPolicyConfig;

GoogleBigqueryDatapolicyv2DataPolicyConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .dataPolicyId(java.lang.String)
    .dataPolicyType(java.lang.String)
    .location(java.lang.String)
//  .dataMaskingPolicy(GoogleBigqueryDatapolicyv2DataPolicyDataMaskingPolicy)
//  .deletionPolicy(java.lang.String)
//  .etag(java.lang.String)
//  .grantees(java.util.List<java.lang.String>)
//  .id(java.lang.String)
//  .project(java.lang.String)
//  .timeouts(GoogleBigqueryDatapolicyv2DataPolicyTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDatapolicyv2DataPolicy.GoogleBigqueryDatapolicyv2DataPolicyConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDatapolicyv2DataPolicy.GoogleBigqueryDatapolicyv2DataPolicyConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDatapolicyv2DataPolicy.GoogleBigqueryDatapolicyv2DataPolicyConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDatapolicyv2DataPolicy.GoogleBigqueryDatapolicyv2DataPolicyConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDatapolicyv2DataPolicy.GoogleBigqueryDatapolicyv2DataPolicyConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDatapolicyv2DataPolicy.GoogleBigqueryDatapolicyv2DataPolicyConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDatapolicyv2DataPolicy.GoogleBigqueryDatapolicyv2DataPolicyConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDatapolicyv2DataPolicy.GoogleBigqueryDatapolicyv2DataPolicyConfig.property.dataPolicyId">dataPolicyId</a></code> | <code>java.lang.String</code> | User-assigned (human readable) ID of the data policy that needs to be unique within a project. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDatapolicyv2DataPolicy.GoogleBigqueryDatapolicyv2DataPolicyConfig.property.dataPolicyType">dataPolicyType</a></code> | <code>java.lang.String</code> | Type of data policy. Possible values: DATA_MASKING_POLICY RAW_DATA_ACCESS_POLICY COLUMN_LEVEL_SECURITY_POLICY. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDatapolicyv2DataPolicy.GoogleBigqueryDatapolicyv2DataPolicyConfig.property.location">location</a></code> | <code>java.lang.String</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDatapolicyv2DataPolicy.GoogleBigqueryDatapolicyv2DataPolicyConfig.property.dataMaskingPolicy">dataMaskingPolicy</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBigqueryDatapolicyv2DataPolicy.GoogleBigqueryDatapolicyv2DataPolicyDataMaskingPolicy">GoogleBigqueryDatapolicyv2DataPolicyDataMaskingPolicy</a></code> | data_masking_policy block. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDatapolicyv2DataPolicy.GoogleBigqueryDatapolicyv2DataPolicyConfig.property.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDatapolicyv2DataPolicy.GoogleBigqueryDatapolicyv2DataPolicyConfig.property.etag">etag</a></code> | <code>java.lang.String</code> | The etag for this Data Policy. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDatapolicyv2DataPolicy.GoogleBigqueryDatapolicyv2DataPolicyConfig.property.grantees">grantees</a></code> | <code>java.util.List<java.lang.String></code> | The list of IAM principals that have Fine Grained Access to the underlying data goverened by this data policy. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDatapolicyv2DataPolicy.GoogleBigqueryDatapolicyv2DataPolicyConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_bigquery_datapolicyv2_data_policy#id GoogleBigqueryDatapolicyv2DataPolicy#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDatapolicyv2DataPolicy.GoogleBigqueryDatapolicyv2DataPolicyConfig.property.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_bigquery_datapolicyv2_data_policy#project GoogleBigqueryDatapolicyv2DataPolicy#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDatapolicyv2DataPolicy.GoogleBigqueryDatapolicyv2DataPolicyConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBigqueryDatapolicyv2DataPolicy.GoogleBigqueryDatapolicyv2DataPolicyTimeouts">GoogleBigqueryDatapolicyv2DataPolicyTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleBigqueryDatapolicyv2DataPolicy.GoogleBigqueryDatapolicyv2DataPolicyConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleBigqueryDatapolicyv2DataPolicy.GoogleBigqueryDatapolicyv2DataPolicyConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleBigqueryDatapolicyv2DataPolicy.GoogleBigqueryDatapolicyv2DataPolicyConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleBigqueryDatapolicyv2DataPolicy.GoogleBigqueryDatapolicyv2DataPolicyConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleBigqueryDatapolicyv2DataPolicy.GoogleBigqueryDatapolicyv2DataPolicyConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleBigqueryDatapolicyv2DataPolicy.GoogleBigqueryDatapolicyv2DataPolicyConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleBigqueryDatapolicyv2DataPolicy.GoogleBigqueryDatapolicyv2DataPolicyConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `dataPolicyId`<sup>Required</sup> <a name="dataPolicyId" id="@cdktn/provider-google-beta.googleBigqueryDatapolicyv2DataPolicy.GoogleBigqueryDatapolicyv2DataPolicyConfig.property.dataPolicyId"></a>

```java
public java.lang.String getDataPolicyId();
```

- *Type:* java.lang.String

User-assigned (human readable) ID of the data policy that needs to be unique within a project.

Used as {data_policy_id} in part of the resource
name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_bigquery_datapolicyv2_data_policy#data_policy_id GoogleBigqueryDatapolicyv2DataPolicy#data_policy_id}

---

##### `dataPolicyType`<sup>Required</sup> <a name="dataPolicyType" id="@cdktn/provider-google-beta.googleBigqueryDatapolicyv2DataPolicy.GoogleBigqueryDatapolicyv2DataPolicyConfig.property.dataPolicyType"></a>

```java
public java.lang.String getDataPolicyType();
```

- *Type:* java.lang.String

Type of data policy. Possible values: DATA_MASKING_POLICY RAW_DATA_ACCESS_POLICY COLUMN_LEVEL_SECURITY_POLICY.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_bigquery_datapolicyv2_data_policy#data_policy_type GoogleBigqueryDatapolicyv2DataPolicy#data_policy_type}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleBigqueryDatapolicyv2DataPolicy.GoogleBigqueryDatapolicyv2DataPolicyConfig.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_bigquery_datapolicyv2_data_policy#location GoogleBigqueryDatapolicyv2DataPolicy#location}

---

##### `dataMaskingPolicy`<sup>Optional</sup> <a name="dataMaskingPolicy" id="@cdktn/provider-google-beta.googleBigqueryDatapolicyv2DataPolicy.GoogleBigqueryDatapolicyv2DataPolicyConfig.property.dataMaskingPolicy"></a>

```java
public GoogleBigqueryDatapolicyv2DataPolicyDataMaskingPolicy getDataMaskingPolicy();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleBigqueryDatapolicyv2DataPolicy.GoogleBigqueryDatapolicyv2DataPolicyDataMaskingPolicy">GoogleBigqueryDatapolicyv2DataPolicyDataMaskingPolicy</a>

data_masking_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_bigquery_datapolicyv2_data_policy#data_masking_policy GoogleBigqueryDatapolicyv2DataPolicy#data_masking_policy}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google-beta.googleBigqueryDatapolicyv2DataPolicy.GoogleBigqueryDatapolicyv2DataPolicyConfig.property.deletionPolicy"></a>

```java
public java.lang.String getDeletionPolicy();
```

- *Type:* java.lang.String

Whether Terraform will be prevented from destroying the instance.

Defaults to "DELETE".
When a 'terraform destroy' or 'terraform apply' would delete the instance,
the command will fail if this field is set to "PREVENT" in Terraform state.
When set to "ABANDON", the command will remove the resource from Terraform
management without updating or deleting the resource in the API.
When set to "DELETE", deleting the resource is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_bigquery_datapolicyv2_data_policy#deletion_policy GoogleBigqueryDatapolicyv2DataPolicy#deletion_policy}

---

##### `etag`<sup>Optional</sup> <a name="etag" id="@cdktn/provider-google-beta.googleBigqueryDatapolicyv2DataPolicy.GoogleBigqueryDatapolicyv2DataPolicyConfig.property.etag"></a>

```java
public java.lang.String getEtag();
```

- *Type:* java.lang.String

The etag for this Data Policy.

This field is used for UpdateDataPolicy calls. If Data Policy exists, this
field is required and must match the server's etag. It will also be
populated in the response of GetDataPolicy, CreateDataPolicy, and
UpdateDataPolicy calls.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_bigquery_datapolicyv2_data_policy#etag GoogleBigqueryDatapolicyv2DataPolicy#etag}

---

##### `grantees`<sup>Optional</sup> <a name="grantees" id="@cdktn/provider-google-beta.googleBigqueryDatapolicyv2DataPolicy.GoogleBigqueryDatapolicyv2DataPolicyConfig.property.grantees"></a>

```java
public java.util.List<java.lang.String> getGrantees();
```

- *Type:* java.util.List<java.lang.String>

The list of IAM principals that have Fine Grained Access to the underlying data goverened by this data policy.

Uses the [IAM V2 principal
syntax](https://cloud.google.com/iam/docs/principal-identifiers#v2) Only
supports principal types users, groups, serviceaccounts, cloudidentity.
This field is supported in V2 Data Policy only. In case of V1 data policies
(i.e. verion = 1 and policy_tag is set), this field is not populated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_bigquery_datapolicyv2_data_policy#grantees GoogleBigqueryDatapolicyv2DataPolicy#grantees}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleBigqueryDatapolicyv2DataPolicy.GoogleBigqueryDatapolicyv2DataPolicyConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_bigquery_datapolicyv2_data_policy#id GoogleBigqueryDatapolicyv2DataPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.googleBigqueryDatapolicyv2DataPolicy.GoogleBigqueryDatapolicyv2DataPolicyConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_bigquery_datapolicyv2_data_policy#project GoogleBigqueryDatapolicyv2DataPolicy#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleBigqueryDatapolicyv2DataPolicy.GoogleBigqueryDatapolicyv2DataPolicyConfig.property.timeouts"></a>

```java
public GoogleBigqueryDatapolicyv2DataPolicyTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleBigqueryDatapolicyv2DataPolicy.GoogleBigqueryDatapolicyv2DataPolicyTimeouts">GoogleBigqueryDatapolicyv2DataPolicyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_bigquery_datapolicyv2_data_policy#timeouts GoogleBigqueryDatapolicyv2DataPolicy#timeouts}

---

### GoogleBigqueryDatapolicyv2DataPolicyDataMaskingPolicy <a name="GoogleBigqueryDatapolicyv2DataPolicyDataMaskingPolicy" id="@cdktn/provider-google-beta.googleBigqueryDatapolicyv2DataPolicy.GoogleBigqueryDatapolicyv2DataPolicyDataMaskingPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleBigqueryDatapolicyv2DataPolicy.GoogleBigqueryDatapolicyv2DataPolicyDataMaskingPolicy.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_bigquery_datapolicyv2_data_policy.GoogleBigqueryDatapolicyv2DataPolicyDataMaskingPolicy;

GoogleBigqueryDatapolicyv2DataPolicyDataMaskingPolicy.builder()
//  .predefinedExpression(java.lang.String)
//  .routine(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDatapolicyv2DataPolicy.GoogleBigqueryDatapolicyv2DataPolicyDataMaskingPolicy.property.predefinedExpression">predefinedExpression</a></code> | <code>java.lang.String</code> | A predefined masking expression. Possible values: SHA256 ALWAYS_NULL DEFAULT_MASKING_VALUE LAST_FOUR_CHARACTERS FIRST_FOUR_CHARACTERS EMAIL_MASK DATE_YEAR_MASK RANDOM_HASH. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDatapolicyv2DataPolicy.GoogleBigqueryDatapolicyv2DataPolicyDataMaskingPolicy.property.routine">routine</a></code> | <code>java.lang.String</code> | The name of the BigQuery routine that contains the custom masking routine, in the format of 'projects/{project_number}/datasets/{dataset_id}/routines/{routine_id}'. |

---

##### `predefinedExpression`<sup>Optional</sup> <a name="predefinedExpression" id="@cdktn/provider-google-beta.googleBigqueryDatapolicyv2DataPolicy.GoogleBigqueryDatapolicyv2DataPolicyDataMaskingPolicy.property.predefinedExpression"></a>

```java
public java.lang.String getPredefinedExpression();
```

- *Type:* java.lang.String

A predefined masking expression. Possible values: SHA256 ALWAYS_NULL DEFAULT_MASKING_VALUE LAST_FOUR_CHARACTERS FIRST_FOUR_CHARACTERS EMAIL_MASK DATE_YEAR_MASK RANDOM_HASH.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_bigquery_datapolicyv2_data_policy#predefined_expression GoogleBigqueryDatapolicyv2DataPolicy#predefined_expression}

---

##### `routine`<sup>Optional</sup> <a name="routine" id="@cdktn/provider-google-beta.googleBigqueryDatapolicyv2DataPolicy.GoogleBigqueryDatapolicyv2DataPolicyDataMaskingPolicy.property.routine"></a>

```java
public java.lang.String getRoutine();
```

- *Type:* java.lang.String

The name of the BigQuery routine that contains the custom masking routine, in the format of 'projects/{project_number}/datasets/{dataset_id}/routines/{routine_id}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_bigquery_datapolicyv2_data_policy#routine GoogleBigqueryDatapolicyv2DataPolicy#routine}

---

### GoogleBigqueryDatapolicyv2DataPolicyTimeouts <a name="GoogleBigqueryDatapolicyv2DataPolicyTimeouts" id="@cdktn/provider-google-beta.googleBigqueryDatapolicyv2DataPolicy.GoogleBigqueryDatapolicyv2DataPolicyTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleBigqueryDatapolicyv2DataPolicy.GoogleBigqueryDatapolicyv2DataPolicyTimeouts.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_bigquery_datapolicyv2_data_policy.GoogleBigqueryDatapolicyv2DataPolicyTimeouts;

GoogleBigqueryDatapolicyv2DataPolicyTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDatapolicyv2DataPolicy.GoogleBigqueryDatapolicyv2DataPolicyTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_bigquery_datapolicyv2_data_policy#create GoogleBigqueryDatapolicyv2DataPolicy#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDatapolicyv2DataPolicy.GoogleBigqueryDatapolicyv2DataPolicyTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_bigquery_datapolicyv2_data_policy#delete GoogleBigqueryDatapolicyv2DataPolicy#delete}. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDatapolicyv2DataPolicy.GoogleBigqueryDatapolicyv2DataPolicyTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_bigquery_datapolicyv2_data_policy#update GoogleBigqueryDatapolicyv2DataPolicy#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google-beta.googleBigqueryDatapolicyv2DataPolicy.GoogleBigqueryDatapolicyv2DataPolicyTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_bigquery_datapolicyv2_data_policy#create GoogleBigqueryDatapolicyv2DataPolicy#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google-beta.googleBigqueryDatapolicyv2DataPolicy.GoogleBigqueryDatapolicyv2DataPolicyTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_bigquery_datapolicyv2_data_policy#delete GoogleBigqueryDatapolicyv2DataPolicy#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google-beta.googleBigqueryDatapolicyv2DataPolicy.GoogleBigqueryDatapolicyv2DataPolicyTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_bigquery_datapolicyv2_data_policy#update GoogleBigqueryDatapolicyv2DataPolicy#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleBigqueryDatapolicyv2DataPolicyDataMaskingPolicyOutputReference <a name="GoogleBigqueryDatapolicyv2DataPolicyDataMaskingPolicyOutputReference" id="@cdktn/provider-google-beta.googleBigqueryDatapolicyv2DataPolicy.GoogleBigqueryDatapolicyv2DataPolicyDataMaskingPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleBigqueryDatapolicyv2DataPolicy.GoogleBigqueryDatapolicyv2DataPolicyDataMaskingPolicyOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_bigquery_datapolicyv2_data_policy.GoogleBigqueryDatapolicyv2DataPolicyDataMaskingPolicyOutputReference;

new GoogleBigqueryDatapolicyv2DataPolicyDataMaskingPolicyOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDatapolicyv2DataPolicy.GoogleBigqueryDatapolicyv2DataPolicyDataMaskingPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDatapolicyv2DataPolicy.GoogleBigqueryDatapolicyv2DataPolicyDataMaskingPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleBigqueryDatapolicyv2DataPolicy.GoogleBigqueryDatapolicyv2DataPolicyDataMaskingPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryDatapolicyv2DataPolicy.GoogleBigqueryDatapolicyv2DataPolicyDataMaskingPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDatapolicyv2DataPolicy.GoogleBigqueryDatapolicyv2DataPolicyDataMaskingPolicyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDatapolicyv2DataPolicy.GoogleBigqueryDatapolicyv2DataPolicyDataMaskingPolicyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDatapolicyv2DataPolicy.GoogleBigqueryDatapolicyv2DataPolicyDataMaskingPolicyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDatapolicyv2DataPolicy.GoogleBigqueryDatapolicyv2DataPolicyDataMaskingPolicyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDatapolicyv2DataPolicy.GoogleBigqueryDatapolicyv2DataPolicyDataMaskingPolicyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDatapolicyv2DataPolicy.GoogleBigqueryDatapolicyv2DataPolicyDataMaskingPolicyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDatapolicyv2DataPolicy.GoogleBigqueryDatapolicyv2DataPolicyDataMaskingPolicyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDatapolicyv2DataPolicy.GoogleBigqueryDatapolicyv2DataPolicyDataMaskingPolicyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDatapolicyv2DataPolicy.GoogleBigqueryDatapolicyv2DataPolicyDataMaskingPolicyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDatapolicyv2DataPolicy.GoogleBigqueryDatapolicyv2DataPolicyDataMaskingPolicyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDatapolicyv2DataPolicy.GoogleBigqueryDatapolicyv2DataPolicyDataMaskingPolicyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDatapolicyv2DataPolicy.GoogleBigqueryDatapolicyv2DataPolicyDataMaskingPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDatapolicyv2DataPolicy.GoogleBigqueryDatapolicyv2DataPolicyDataMaskingPolicyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDatapolicyv2DataPolicy.GoogleBigqueryDatapolicyv2DataPolicyDataMaskingPolicyOutputReference.resetPredefinedExpression">resetPredefinedExpression</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDatapolicyv2DataPolicy.GoogleBigqueryDatapolicyv2DataPolicyDataMaskingPolicyOutputReference.resetRoutine">resetRoutine</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleBigqueryDatapolicyv2DataPolicy.GoogleBigqueryDatapolicyv2DataPolicyDataMaskingPolicyOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleBigqueryDatapolicyv2DataPolicy.GoogleBigqueryDatapolicyv2DataPolicyDataMaskingPolicyOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryDatapolicyv2DataPolicy.GoogleBigqueryDatapolicyv2DataPolicyDataMaskingPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleBigqueryDatapolicyv2DataPolicy.GoogleBigqueryDatapolicyv2DataPolicyDataMaskingPolicyOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryDatapolicyv2DataPolicy.GoogleBigqueryDatapolicyv2DataPolicyDataMaskingPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleBigqueryDatapolicyv2DataPolicy.GoogleBigqueryDatapolicyv2DataPolicyDataMaskingPolicyOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryDatapolicyv2DataPolicy.GoogleBigqueryDatapolicyv2DataPolicyDataMaskingPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleBigqueryDatapolicyv2DataPolicy.GoogleBigqueryDatapolicyv2DataPolicyDataMaskingPolicyOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryDatapolicyv2DataPolicy.GoogleBigqueryDatapolicyv2DataPolicyDataMaskingPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleBigqueryDatapolicyv2DataPolicy.GoogleBigqueryDatapolicyv2DataPolicyDataMaskingPolicyOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryDatapolicyv2DataPolicy.GoogleBigqueryDatapolicyv2DataPolicyDataMaskingPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleBigqueryDatapolicyv2DataPolicy.GoogleBigqueryDatapolicyv2DataPolicyDataMaskingPolicyOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryDatapolicyv2DataPolicy.GoogleBigqueryDatapolicyv2DataPolicyDataMaskingPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleBigqueryDatapolicyv2DataPolicy.GoogleBigqueryDatapolicyv2DataPolicyDataMaskingPolicyOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryDatapolicyv2DataPolicy.GoogleBigqueryDatapolicyv2DataPolicyDataMaskingPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleBigqueryDatapolicyv2DataPolicy.GoogleBigqueryDatapolicyv2DataPolicyDataMaskingPolicyOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryDatapolicyv2DataPolicy.GoogleBigqueryDatapolicyv2DataPolicyDataMaskingPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleBigqueryDatapolicyv2DataPolicy.GoogleBigqueryDatapolicyv2DataPolicyDataMaskingPolicyOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryDatapolicyv2DataPolicy.GoogleBigqueryDatapolicyv2DataPolicyDataMaskingPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleBigqueryDatapolicyv2DataPolicy.GoogleBigqueryDatapolicyv2DataPolicyDataMaskingPolicyOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleBigqueryDatapolicyv2DataPolicy.GoogleBigqueryDatapolicyv2DataPolicyDataMaskingPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleBigqueryDatapolicyv2DataPolicy.GoogleBigqueryDatapolicyv2DataPolicyDataMaskingPolicyOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleBigqueryDatapolicyv2DataPolicy.GoogleBigqueryDatapolicyv2DataPolicyDataMaskingPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleBigqueryDatapolicyv2DataPolicy.GoogleBigqueryDatapolicyv2DataPolicyDataMaskingPolicyOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetPredefinedExpression` <a name="resetPredefinedExpression" id="@cdktn/provider-google-beta.googleBigqueryDatapolicyv2DataPolicy.GoogleBigqueryDatapolicyv2DataPolicyDataMaskingPolicyOutputReference.resetPredefinedExpression"></a>

```java
public void resetPredefinedExpression()
```

##### `resetRoutine` <a name="resetRoutine" id="@cdktn/provider-google-beta.googleBigqueryDatapolicyv2DataPolicy.GoogleBigqueryDatapolicyv2DataPolicyDataMaskingPolicyOutputReference.resetRoutine"></a>

```java
public void resetRoutine()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDatapolicyv2DataPolicy.GoogleBigqueryDatapolicyv2DataPolicyDataMaskingPolicyOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDatapolicyv2DataPolicy.GoogleBigqueryDatapolicyv2DataPolicyDataMaskingPolicyOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDatapolicyv2DataPolicy.GoogleBigqueryDatapolicyv2DataPolicyDataMaskingPolicyOutputReference.property.predefinedExpressionInput">predefinedExpressionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDatapolicyv2DataPolicy.GoogleBigqueryDatapolicyv2DataPolicyDataMaskingPolicyOutputReference.property.routineInput">routineInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDatapolicyv2DataPolicy.GoogleBigqueryDatapolicyv2DataPolicyDataMaskingPolicyOutputReference.property.predefinedExpression">predefinedExpression</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDatapolicyv2DataPolicy.GoogleBigqueryDatapolicyv2DataPolicyDataMaskingPolicyOutputReference.property.routine">routine</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDatapolicyv2DataPolicy.GoogleBigqueryDatapolicyv2DataPolicyDataMaskingPolicyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBigqueryDatapolicyv2DataPolicy.GoogleBigqueryDatapolicyv2DataPolicyDataMaskingPolicy">GoogleBigqueryDatapolicyv2DataPolicyDataMaskingPolicy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleBigqueryDatapolicyv2DataPolicy.GoogleBigqueryDatapolicyv2DataPolicyDataMaskingPolicyOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleBigqueryDatapolicyv2DataPolicy.GoogleBigqueryDatapolicyv2DataPolicyDataMaskingPolicyOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `predefinedExpressionInput`<sup>Optional</sup> <a name="predefinedExpressionInput" id="@cdktn/provider-google-beta.googleBigqueryDatapolicyv2DataPolicy.GoogleBigqueryDatapolicyv2DataPolicyDataMaskingPolicyOutputReference.property.predefinedExpressionInput"></a>

```java
public java.lang.String getPredefinedExpressionInput();
```

- *Type:* java.lang.String

---

##### `routineInput`<sup>Optional</sup> <a name="routineInput" id="@cdktn/provider-google-beta.googleBigqueryDatapolicyv2DataPolicy.GoogleBigqueryDatapolicyv2DataPolicyDataMaskingPolicyOutputReference.property.routineInput"></a>

```java
public java.lang.String getRoutineInput();
```

- *Type:* java.lang.String

---

##### `predefinedExpression`<sup>Required</sup> <a name="predefinedExpression" id="@cdktn/provider-google-beta.googleBigqueryDatapolicyv2DataPolicy.GoogleBigqueryDatapolicyv2DataPolicyDataMaskingPolicyOutputReference.property.predefinedExpression"></a>

```java
public java.lang.String getPredefinedExpression();
```

- *Type:* java.lang.String

---

##### `routine`<sup>Required</sup> <a name="routine" id="@cdktn/provider-google-beta.googleBigqueryDatapolicyv2DataPolicy.GoogleBigqueryDatapolicyv2DataPolicyDataMaskingPolicyOutputReference.property.routine"></a>

```java
public java.lang.String getRoutine();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleBigqueryDatapolicyv2DataPolicy.GoogleBigqueryDatapolicyv2DataPolicyDataMaskingPolicyOutputReference.property.internalValue"></a>

```java
public GoogleBigqueryDatapolicyv2DataPolicyDataMaskingPolicy getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleBigqueryDatapolicyv2DataPolicy.GoogleBigqueryDatapolicyv2DataPolicyDataMaskingPolicy">GoogleBigqueryDatapolicyv2DataPolicyDataMaskingPolicy</a>

---


### GoogleBigqueryDatapolicyv2DataPolicyTimeoutsOutputReference <a name="GoogleBigqueryDatapolicyv2DataPolicyTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleBigqueryDatapolicyv2DataPolicy.GoogleBigqueryDatapolicyv2DataPolicyTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleBigqueryDatapolicyv2DataPolicy.GoogleBigqueryDatapolicyv2DataPolicyTimeoutsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_bigquery_datapolicyv2_data_policy.GoogleBigqueryDatapolicyv2DataPolicyTimeoutsOutputReference;

new GoogleBigqueryDatapolicyv2DataPolicyTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDatapolicyv2DataPolicy.GoogleBigqueryDatapolicyv2DataPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDatapolicyv2DataPolicy.GoogleBigqueryDatapolicyv2DataPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleBigqueryDatapolicyv2DataPolicy.GoogleBigqueryDatapolicyv2DataPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryDatapolicyv2DataPolicy.GoogleBigqueryDatapolicyv2DataPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDatapolicyv2DataPolicy.GoogleBigqueryDatapolicyv2DataPolicyTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDatapolicyv2DataPolicy.GoogleBigqueryDatapolicyv2DataPolicyTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDatapolicyv2DataPolicy.GoogleBigqueryDatapolicyv2DataPolicyTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDatapolicyv2DataPolicy.GoogleBigqueryDatapolicyv2DataPolicyTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDatapolicyv2DataPolicy.GoogleBigqueryDatapolicyv2DataPolicyTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDatapolicyv2DataPolicy.GoogleBigqueryDatapolicyv2DataPolicyTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDatapolicyv2DataPolicy.GoogleBigqueryDatapolicyv2DataPolicyTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDatapolicyv2DataPolicy.GoogleBigqueryDatapolicyv2DataPolicyTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDatapolicyv2DataPolicy.GoogleBigqueryDatapolicyv2DataPolicyTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDatapolicyv2DataPolicy.GoogleBigqueryDatapolicyv2DataPolicyTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDatapolicyv2DataPolicy.GoogleBigqueryDatapolicyv2DataPolicyTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDatapolicyv2DataPolicy.GoogleBigqueryDatapolicyv2DataPolicyTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDatapolicyv2DataPolicy.GoogleBigqueryDatapolicyv2DataPolicyTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDatapolicyv2DataPolicy.GoogleBigqueryDatapolicyv2DataPolicyTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDatapolicyv2DataPolicy.GoogleBigqueryDatapolicyv2DataPolicyTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDatapolicyv2DataPolicy.GoogleBigqueryDatapolicyv2DataPolicyTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleBigqueryDatapolicyv2DataPolicy.GoogleBigqueryDatapolicyv2DataPolicyTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleBigqueryDatapolicyv2DataPolicy.GoogleBigqueryDatapolicyv2DataPolicyTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryDatapolicyv2DataPolicy.GoogleBigqueryDatapolicyv2DataPolicyTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleBigqueryDatapolicyv2DataPolicy.GoogleBigqueryDatapolicyv2DataPolicyTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryDatapolicyv2DataPolicy.GoogleBigqueryDatapolicyv2DataPolicyTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleBigqueryDatapolicyv2DataPolicy.GoogleBigqueryDatapolicyv2DataPolicyTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryDatapolicyv2DataPolicy.GoogleBigqueryDatapolicyv2DataPolicyTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleBigqueryDatapolicyv2DataPolicy.GoogleBigqueryDatapolicyv2DataPolicyTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryDatapolicyv2DataPolicy.GoogleBigqueryDatapolicyv2DataPolicyTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleBigqueryDatapolicyv2DataPolicy.GoogleBigqueryDatapolicyv2DataPolicyTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryDatapolicyv2DataPolicy.GoogleBigqueryDatapolicyv2DataPolicyTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleBigqueryDatapolicyv2DataPolicy.GoogleBigqueryDatapolicyv2DataPolicyTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryDatapolicyv2DataPolicy.GoogleBigqueryDatapolicyv2DataPolicyTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleBigqueryDatapolicyv2DataPolicy.GoogleBigqueryDatapolicyv2DataPolicyTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryDatapolicyv2DataPolicy.GoogleBigqueryDatapolicyv2DataPolicyTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleBigqueryDatapolicyv2DataPolicy.GoogleBigqueryDatapolicyv2DataPolicyTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryDatapolicyv2DataPolicy.GoogleBigqueryDatapolicyv2DataPolicyTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleBigqueryDatapolicyv2DataPolicy.GoogleBigqueryDatapolicyv2DataPolicyTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryDatapolicyv2DataPolicy.GoogleBigqueryDatapolicyv2DataPolicyTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleBigqueryDatapolicyv2DataPolicy.GoogleBigqueryDatapolicyv2DataPolicyTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleBigqueryDatapolicyv2DataPolicy.GoogleBigqueryDatapolicyv2DataPolicyTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleBigqueryDatapolicyv2DataPolicy.GoogleBigqueryDatapolicyv2DataPolicyTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleBigqueryDatapolicyv2DataPolicy.GoogleBigqueryDatapolicyv2DataPolicyTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleBigqueryDatapolicyv2DataPolicy.GoogleBigqueryDatapolicyv2DataPolicyTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-google-beta.googleBigqueryDatapolicyv2DataPolicy.GoogleBigqueryDatapolicyv2DataPolicyTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-google-beta.googleBigqueryDatapolicyv2DataPolicy.GoogleBigqueryDatapolicyv2DataPolicyTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-google-beta.googleBigqueryDatapolicyv2DataPolicy.GoogleBigqueryDatapolicyv2DataPolicyTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDatapolicyv2DataPolicy.GoogleBigqueryDatapolicyv2DataPolicyTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDatapolicyv2DataPolicy.GoogleBigqueryDatapolicyv2DataPolicyTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDatapolicyv2DataPolicy.GoogleBigqueryDatapolicyv2DataPolicyTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDatapolicyv2DataPolicy.GoogleBigqueryDatapolicyv2DataPolicyTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDatapolicyv2DataPolicy.GoogleBigqueryDatapolicyv2DataPolicyTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDatapolicyv2DataPolicy.GoogleBigqueryDatapolicyv2DataPolicyTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDatapolicyv2DataPolicy.GoogleBigqueryDatapolicyv2DataPolicyTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDatapolicyv2DataPolicy.GoogleBigqueryDatapolicyv2DataPolicyTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDatapolicyv2DataPolicy.GoogleBigqueryDatapolicyv2DataPolicyTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleBigqueryDatapolicyv2DataPolicy.GoogleBigqueryDatapolicyv2DataPolicyTimeouts">GoogleBigqueryDatapolicyv2DataPolicyTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleBigqueryDatapolicyv2DataPolicy.GoogleBigqueryDatapolicyv2DataPolicyTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleBigqueryDatapolicyv2DataPolicy.GoogleBigqueryDatapolicyv2DataPolicyTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-google-beta.googleBigqueryDatapolicyv2DataPolicy.GoogleBigqueryDatapolicyv2DataPolicyTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-google-beta.googleBigqueryDatapolicyv2DataPolicy.GoogleBigqueryDatapolicyv2DataPolicyTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-google-beta.googleBigqueryDatapolicyv2DataPolicy.GoogleBigqueryDatapolicyv2DataPolicyTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google-beta.googleBigqueryDatapolicyv2DataPolicy.GoogleBigqueryDatapolicyv2DataPolicyTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google-beta.googleBigqueryDatapolicyv2DataPolicy.GoogleBigqueryDatapolicyv2DataPolicyTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google-beta.googleBigqueryDatapolicyv2DataPolicy.GoogleBigqueryDatapolicyv2DataPolicyTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleBigqueryDatapolicyv2DataPolicy.GoogleBigqueryDatapolicyv2DataPolicyTimeoutsOutputReference.property.internalValue"></a>

```java
public IResolvable|GoogleBigqueryDatapolicyv2DataPolicyTimeouts getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleBigqueryDatapolicyv2DataPolicy.GoogleBigqueryDatapolicyv2DataPolicyTimeouts">GoogleBigqueryDatapolicyv2DataPolicyTimeouts</a>

---



