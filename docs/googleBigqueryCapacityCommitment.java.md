# `googleBigqueryCapacityCommitment` Submodule <a name="`googleBigqueryCapacityCommitment` Submodule" id="@cdktn/provider-google-beta.googleBigqueryCapacityCommitment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleBigqueryCapacityCommitment <a name="GoogleBigqueryCapacityCommitment" id="@cdktn/provider-google-beta.googleBigqueryCapacityCommitment.GoogleBigqueryCapacityCommitment"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_bigquery_capacity_commitment google_bigquery_capacity_commitment}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleBigqueryCapacityCommitment.GoogleBigqueryCapacityCommitment.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_bigquery_capacity_commitment.GoogleBigqueryCapacityCommitment;

GoogleBigqueryCapacityCommitment.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .plan(java.lang.String)
    .slotCount(java.lang.Number)
//  .capacityCommitmentId(java.lang.String)
//  .deletionPolicy(java.lang.String)
//  .edition(java.lang.String)
//  .enforceSingleAdminProjectPerOrg(java.lang.String)
//  .id(java.lang.String)
//  .location(java.lang.String)
//  .project(java.lang.String)
//  .renewalPlan(java.lang.String)
//  .timeouts(GoogleBigqueryCapacityCommitmentTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryCapacityCommitment.GoogleBigqueryCapacityCommitment.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryCapacityCommitment.GoogleBigqueryCapacityCommitment.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryCapacityCommitment.GoogleBigqueryCapacityCommitment.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryCapacityCommitment.GoogleBigqueryCapacityCommitment.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryCapacityCommitment.GoogleBigqueryCapacityCommitment.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryCapacityCommitment.GoogleBigqueryCapacityCommitment.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryCapacityCommitment.GoogleBigqueryCapacityCommitment.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryCapacityCommitment.GoogleBigqueryCapacityCommitment.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryCapacityCommitment.GoogleBigqueryCapacityCommitment.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryCapacityCommitment.GoogleBigqueryCapacityCommitment.Initializer.parameter.plan">plan</a></code> | <code>java.lang.String</code> | Capacity commitment plan. Valid values are at https://cloud.google.com/bigquery/docs/reference/reservations/rpc/google.cloud.bigquery.reservation.v1#commitmentplan. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryCapacityCommitment.GoogleBigqueryCapacityCommitment.Initializer.parameter.slotCount">slotCount</a></code> | <code>java.lang.Number</code> | Number of slots in this commitment. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryCapacityCommitment.GoogleBigqueryCapacityCommitment.Initializer.parameter.capacityCommitmentId">capacityCommitmentId</a></code> | <code>java.lang.String</code> | The optional capacity commitment ID. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryCapacityCommitment.GoogleBigqueryCapacityCommitment.Initializer.parameter.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryCapacityCommitment.GoogleBigqueryCapacityCommitment.Initializer.parameter.edition">edition</a></code> | <code>java.lang.String</code> | The edition type. Valid values are STANDARD, ENTERPRISE, ENTERPRISE_PLUS. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryCapacityCommitment.GoogleBigqueryCapacityCommitment.Initializer.parameter.enforceSingleAdminProjectPerOrg">enforceSingleAdminProjectPerOrg</a></code> | <code>java.lang.String</code> | If true, fail the request if another project in the organization has a capacity commitment. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryCapacityCommitment.GoogleBigqueryCapacityCommitment.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_bigquery_capacity_commitment#id GoogleBigqueryCapacityCommitment#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryCapacityCommitment.GoogleBigqueryCapacityCommitment.Initializer.parameter.location">location</a></code> | <code>java.lang.String</code> | The geographic location where the transfer config should reside. Examples: US, EU, asia-northeast1. The default value is US. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryCapacityCommitment.GoogleBigqueryCapacityCommitment.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_bigquery_capacity_commitment#project GoogleBigqueryCapacityCommitment#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryCapacityCommitment.GoogleBigqueryCapacityCommitment.Initializer.parameter.renewalPlan">renewalPlan</a></code> | <code>java.lang.String</code> | The plan this capacity commitment is converted to after commitmentEndTime passes. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryCapacityCommitment.GoogleBigqueryCapacityCommitment.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBigqueryCapacityCommitment.GoogleBigqueryCapacityCommitmentTimeouts">GoogleBigqueryCapacityCommitmentTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleBigqueryCapacityCommitment.GoogleBigqueryCapacityCommitment.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleBigqueryCapacityCommitment.GoogleBigqueryCapacityCommitment.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleBigqueryCapacityCommitment.GoogleBigqueryCapacityCommitment.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleBigqueryCapacityCommitment.GoogleBigqueryCapacityCommitment.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleBigqueryCapacityCommitment.GoogleBigqueryCapacityCommitment.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleBigqueryCapacityCommitment.GoogleBigqueryCapacityCommitment.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleBigqueryCapacityCommitment.GoogleBigqueryCapacityCommitment.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleBigqueryCapacityCommitment.GoogleBigqueryCapacityCommitment.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleBigqueryCapacityCommitment.GoogleBigqueryCapacityCommitment.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `plan`<sup>Required</sup> <a name="plan" id="@cdktn/provider-google-beta.googleBigqueryCapacityCommitment.GoogleBigqueryCapacityCommitment.Initializer.parameter.plan"></a>

- *Type:* java.lang.String

Capacity commitment plan. Valid values are at https://cloud.google.com/bigquery/docs/reference/reservations/rpc/google.cloud.bigquery.reservation.v1#commitmentplan.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_bigquery_capacity_commitment#plan GoogleBigqueryCapacityCommitment#plan}

---

##### `slotCount`<sup>Required</sup> <a name="slotCount" id="@cdktn/provider-google-beta.googleBigqueryCapacityCommitment.GoogleBigqueryCapacityCommitment.Initializer.parameter.slotCount"></a>

- *Type:* java.lang.Number

Number of slots in this commitment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_bigquery_capacity_commitment#slot_count GoogleBigqueryCapacityCommitment#slot_count}

---

##### `capacityCommitmentId`<sup>Optional</sup> <a name="capacityCommitmentId" id="@cdktn/provider-google-beta.googleBigqueryCapacityCommitment.GoogleBigqueryCapacityCommitment.Initializer.parameter.capacityCommitmentId"></a>

- *Type:* java.lang.String

The optional capacity commitment ID.

Capacity commitment name will be generated automatically if this field is
empty. This field must only contain lower case alphanumeric characters or dashes. The first and last character
cannot be a dash. Max length is 64 characters. NOTE: this ID won't be kept if the capacity commitment is split
or merged.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_bigquery_capacity_commitment#capacity_commitment_id GoogleBigqueryCapacityCommitment#capacity_commitment_id}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google-beta.googleBigqueryCapacityCommitment.GoogleBigqueryCapacityCommitment.Initializer.parameter.deletionPolicy"></a>

- *Type:* java.lang.String

Whether Terraform will be prevented from destroying the instance.

Defaults to "DELETE".
When a 'terraform destroy' or 'terraform apply' would delete the instance,
the command will fail if this field is set to "PREVENT" in Terraform state.
When set to "ABANDON", the command will remove the resource from Terraform
management without updating or deleting the resource in the API.
When set to "DELETE", deleting the resource is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_bigquery_capacity_commitment#deletion_policy GoogleBigqueryCapacityCommitment#deletion_policy}

---

##### `edition`<sup>Optional</sup> <a name="edition" id="@cdktn/provider-google-beta.googleBigqueryCapacityCommitment.GoogleBigqueryCapacityCommitment.Initializer.parameter.edition"></a>

- *Type:* java.lang.String

The edition type. Valid values are STANDARD, ENTERPRISE, ENTERPRISE_PLUS.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_bigquery_capacity_commitment#edition GoogleBigqueryCapacityCommitment#edition}

---

##### `enforceSingleAdminProjectPerOrg`<sup>Optional</sup> <a name="enforceSingleAdminProjectPerOrg" id="@cdktn/provider-google-beta.googleBigqueryCapacityCommitment.GoogleBigqueryCapacityCommitment.Initializer.parameter.enforceSingleAdminProjectPerOrg"></a>

- *Type:* java.lang.String

If true, fail the request if another project in the organization has a capacity commitment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_bigquery_capacity_commitment#enforce_single_admin_project_per_org GoogleBigqueryCapacityCommitment#enforce_single_admin_project_per_org}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleBigqueryCapacityCommitment.GoogleBigqueryCapacityCommitment.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_bigquery_capacity_commitment#id GoogleBigqueryCapacityCommitment#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktn/provider-google-beta.googleBigqueryCapacityCommitment.GoogleBigqueryCapacityCommitment.Initializer.parameter.location"></a>

- *Type:* java.lang.String

The geographic location where the transfer config should reside. Examples: US, EU, asia-northeast1. The default value is US.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_bigquery_capacity_commitment#location GoogleBigqueryCapacityCommitment#location}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.googleBigqueryCapacityCommitment.GoogleBigqueryCapacityCommitment.Initializer.parameter.project"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_bigquery_capacity_commitment#project GoogleBigqueryCapacityCommitment#project}.

---

##### `renewalPlan`<sup>Optional</sup> <a name="renewalPlan" id="@cdktn/provider-google-beta.googleBigqueryCapacityCommitment.GoogleBigqueryCapacityCommitment.Initializer.parameter.renewalPlan"></a>

- *Type:* java.lang.String

The plan this capacity commitment is converted to after commitmentEndTime passes.

Once the plan is changed, committed period is extended according to commitment plan. Only applicable for some commitment plans.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_bigquery_capacity_commitment#renewal_plan GoogleBigqueryCapacityCommitment#renewal_plan}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleBigqueryCapacityCommitment.GoogleBigqueryCapacityCommitment.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleBigqueryCapacityCommitment.GoogleBigqueryCapacityCommitmentTimeouts">GoogleBigqueryCapacityCommitmentTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_bigquery_capacity_commitment#timeouts GoogleBigqueryCapacityCommitment#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryCapacityCommitment.GoogleBigqueryCapacityCommitment.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryCapacityCommitment.GoogleBigqueryCapacityCommitment.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryCapacityCommitment.GoogleBigqueryCapacityCommitment.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryCapacityCommitment.GoogleBigqueryCapacityCommitment.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryCapacityCommitment.GoogleBigqueryCapacityCommitment.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryCapacityCommitment.GoogleBigqueryCapacityCommitment.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryCapacityCommitment.GoogleBigqueryCapacityCommitment.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryCapacityCommitment.GoogleBigqueryCapacityCommitment.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryCapacityCommitment.GoogleBigqueryCapacityCommitment.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryCapacityCommitment.GoogleBigqueryCapacityCommitment.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryCapacityCommitment.GoogleBigqueryCapacityCommitment.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryCapacityCommitment.GoogleBigqueryCapacityCommitment.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryCapacityCommitment.GoogleBigqueryCapacityCommitment.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryCapacityCommitment.GoogleBigqueryCapacityCommitment.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryCapacityCommitment.GoogleBigqueryCapacityCommitment.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryCapacityCommitment.GoogleBigqueryCapacityCommitment.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryCapacityCommitment.GoogleBigqueryCapacityCommitment.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryCapacityCommitment.GoogleBigqueryCapacityCommitment.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryCapacityCommitment.GoogleBigqueryCapacityCommitment.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryCapacityCommitment.GoogleBigqueryCapacityCommitment.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryCapacityCommitment.GoogleBigqueryCapacityCommitment.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryCapacityCommitment.GoogleBigqueryCapacityCommitment.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryCapacityCommitment.GoogleBigqueryCapacityCommitment.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryCapacityCommitment.GoogleBigqueryCapacityCommitment.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryCapacityCommitment.GoogleBigqueryCapacityCommitment.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryCapacityCommitment.GoogleBigqueryCapacityCommitment.resetCapacityCommitmentId">resetCapacityCommitmentId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryCapacityCommitment.GoogleBigqueryCapacityCommitment.resetDeletionPolicy">resetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryCapacityCommitment.GoogleBigqueryCapacityCommitment.resetEdition">resetEdition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryCapacityCommitment.GoogleBigqueryCapacityCommitment.resetEnforceSingleAdminProjectPerOrg">resetEnforceSingleAdminProjectPerOrg</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryCapacityCommitment.GoogleBigqueryCapacityCommitment.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryCapacityCommitment.GoogleBigqueryCapacityCommitment.resetLocation">resetLocation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryCapacityCommitment.GoogleBigqueryCapacityCommitment.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryCapacityCommitment.GoogleBigqueryCapacityCommitment.resetRenewalPlan">resetRenewalPlan</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryCapacityCommitment.GoogleBigqueryCapacityCommitment.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleBigqueryCapacityCommitment.GoogleBigqueryCapacityCommitment.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google-beta.googleBigqueryCapacityCommitment.GoogleBigqueryCapacityCommitment.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google-beta.googleBigqueryCapacityCommitment.GoogleBigqueryCapacityCommitment.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google-beta.googleBigqueryCapacityCommitment.GoogleBigqueryCapacityCommitment.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google-beta.googleBigqueryCapacityCommitment.GoogleBigqueryCapacityCommitment.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleBigqueryCapacityCommitment.GoogleBigqueryCapacityCommitment.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google-beta.googleBigqueryCapacityCommitment.GoogleBigqueryCapacityCommitment.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google-beta.googleBigqueryCapacityCommitment.GoogleBigqueryCapacityCommitment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google-beta.googleBigqueryCapacityCommitment.GoogleBigqueryCapacityCommitment.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google-beta.googleBigqueryCapacityCommitment.GoogleBigqueryCapacityCommitment.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google-beta.googleBigqueryCapacityCommitment.GoogleBigqueryCapacityCommitment.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google-beta.googleBigqueryCapacityCommitment.GoogleBigqueryCapacityCommitment.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google-beta.googleBigqueryCapacityCommitment.GoogleBigqueryCapacityCommitment.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleBigqueryCapacityCommitment.GoogleBigqueryCapacityCommitment.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleBigqueryCapacityCommitment.GoogleBigqueryCapacityCommitment.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryCapacityCommitment.GoogleBigqueryCapacityCommitment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleBigqueryCapacityCommitment.GoogleBigqueryCapacityCommitment.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryCapacityCommitment.GoogleBigqueryCapacityCommitment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleBigqueryCapacityCommitment.GoogleBigqueryCapacityCommitment.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryCapacityCommitment.GoogleBigqueryCapacityCommitment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleBigqueryCapacityCommitment.GoogleBigqueryCapacityCommitment.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryCapacityCommitment.GoogleBigqueryCapacityCommitment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleBigqueryCapacityCommitment.GoogleBigqueryCapacityCommitment.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryCapacityCommitment.GoogleBigqueryCapacityCommitment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleBigqueryCapacityCommitment.GoogleBigqueryCapacityCommitment.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryCapacityCommitment.GoogleBigqueryCapacityCommitment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleBigqueryCapacityCommitment.GoogleBigqueryCapacityCommitment.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryCapacityCommitment.GoogleBigqueryCapacityCommitment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleBigqueryCapacityCommitment.GoogleBigqueryCapacityCommitment.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryCapacityCommitment.GoogleBigqueryCapacityCommitment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleBigqueryCapacityCommitment.GoogleBigqueryCapacityCommitment.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryCapacityCommitment.GoogleBigqueryCapacityCommitment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google-beta.googleBigqueryCapacityCommitment.GoogleBigqueryCapacityCommitment.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google-beta.googleBigqueryCapacityCommitment.GoogleBigqueryCapacityCommitment.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleBigqueryCapacityCommitment.GoogleBigqueryCapacityCommitment.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleBigqueryCapacityCommitment.GoogleBigqueryCapacityCommitment.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleBigqueryCapacityCommitment.GoogleBigqueryCapacityCommitment.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryCapacityCommitment.GoogleBigqueryCapacityCommitment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google-beta.googleBigqueryCapacityCommitment.GoogleBigqueryCapacityCommitment.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleBigqueryCapacityCommitment.GoogleBigqueryCapacityCommitment.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google-beta.googleBigqueryCapacityCommitment.GoogleBigqueryCapacityCommitment.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleBigqueryCapacityCommitment.GoogleBigqueryCapacityCommitment.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google-beta.googleBigqueryCapacityCommitment.GoogleBigqueryCapacityCommitment.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google-beta.googleBigqueryCapacityCommitment.GoogleBigqueryCapacityCommitment.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleBigqueryCapacityCommitment.GoogleBigqueryCapacityCommitment.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-google-beta.googleBigqueryCapacityCommitment.GoogleBigqueryCapacityCommitment.putTimeouts"></a>

```java
public void putTimeouts(GoogleBigqueryCapacityCommitmentTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleBigqueryCapacityCommitment.GoogleBigqueryCapacityCommitment.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleBigqueryCapacityCommitment.GoogleBigqueryCapacityCommitmentTimeouts">GoogleBigqueryCapacityCommitmentTimeouts</a>

---

##### `resetCapacityCommitmentId` <a name="resetCapacityCommitmentId" id="@cdktn/provider-google-beta.googleBigqueryCapacityCommitment.GoogleBigqueryCapacityCommitment.resetCapacityCommitmentId"></a>

```java
public void resetCapacityCommitmentId()
```

##### `resetDeletionPolicy` <a name="resetDeletionPolicy" id="@cdktn/provider-google-beta.googleBigqueryCapacityCommitment.GoogleBigqueryCapacityCommitment.resetDeletionPolicy"></a>

```java
public void resetDeletionPolicy()
```

##### `resetEdition` <a name="resetEdition" id="@cdktn/provider-google-beta.googleBigqueryCapacityCommitment.GoogleBigqueryCapacityCommitment.resetEdition"></a>

```java
public void resetEdition()
```

##### `resetEnforceSingleAdminProjectPerOrg` <a name="resetEnforceSingleAdminProjectPerOrg" id="@cdktn/provider-google-beta.googleBigqueryCapacityCommitment.GoogleBigqueryCapacityCommitment.resetEnforceSingleAdminProjectPerOrg"></a>

```java
public void resetEnforceSingleAdminProjectPerOrg()
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google-beta.googleBigqueryCapacityCommitment.GoogleBigqueryCapacityCommitment.resetId"></a>

```java
public void resetId()
```

##### `resetLocation` <a name="resetLocation" id="@cdktn/provider-google-beta.googleBigqueryCapacityCommitment.GoogleBigqueryCapacityCommitment.resetLocation"></a>

```java
public void resetLocation()
```

##### `resetProject` <a name="resetProject" id="@cdktn/provider-google-beta.googleBigqueryCapacityCommitment.GoogleBigqueryCapacityCommitment.resetProject"></a>

```java
public void resetProject()
```

##### `resetRenewalPlan` <a name="resetRenewalPlan" id="@cdktn/provider-google-beta.googleBigqueryCapacityCommitment.GoogleBigqueryCapacityCommitment.resetRenewalPlan"></a>

```java
public void resetRenewalPlan()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-google-beta.googleBigqueryCapacityCommitment.GoogleBigqueryCapacityCommitment.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryCapacityCommitment.GoogleBigqueryCapacityCommitment.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryCapacityCommitment.GoogleBigqueryCapacityCommitment.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryCapacityCommitment.GoogleBigqueryCapacityCommitment.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryCapacityCommitment.GoogleBigqueryCapacityCommitment.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a GoogleBigqueryCapacityCommitment resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google-beta.googleBigqueryCapacityCommitment.GoogleBigqueryCapacityCommitment.isConstruct"></a>

```java
import io.cdktn.providers.google_beta.google_bigquery_capacity_commitment.GoogleBigqueryCapacityCommitment;

GoogleBigqueryCapacityCommitment.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleBigqueryCapacityCommitment.GoogleBigqueryCapacityCommitment.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google-beta.googleBigqueryCapacityCommitment.GoogleBigqueryCapacityCommitment.isTerraformElement"></a>

```java
import io.cdktn.providers.google_beta.google_bigquery_capacity_commitment.GoogleBigqueryCapacityCommitment;

GoogleBigqueryCapacityCommitment.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleBigqueryCapacityCommitment.GoogleBigqueryCapacityCommitment.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google-beta.googleBigqueryCapacityCommitment.GoogleBigqueryCapacityCommitment.isTerraformResource"></a>

```java
import io.cdktn.providers.google_beta.google_bigquery_capacity_commitment.GoogleBigqueryCapacityCommitment;

GoogleBigqueryCapacityCommitment.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleBigqueryCapacityCommitment.GoogleBigqueryCapacityCommitment.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google-beta.googleBigqueryCapacityCommitment.GoogleBigqueryCapacityCommitment.generateConfigForImport"></a>

```java
import io.cdktn.providers.google_beta.google_bigquery_capacity_commitment.GoogleBigqueryCapacityCommitment;

GoogleBigqueryCapacityCommitment.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),GoogleBigqueryCapacityCommitment.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a GoogleBigqueryCapacityCommitment resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleBigqueryCapacityCommitment.GoogleBigqueryCapacityCommitment.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google-beta.googleBigqueryCapacityCommitment.GoogleBigqueryCapacityCommitment.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the GoogleBigqueryCapacityCommitment to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google-beta.googleBigqueryCapacityCommitment.GoogleBigqueryCapacityCommitment.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing GoogleBigqueryCapacityCommitment that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_bigquery_capacity_commitment#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleBigqueryCapacityCommitment.GoogleBigqueryCapacityCommitment.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the GoogleBigqueryCapacityCommitment to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryCapacityCommitment.GoogleBigqueryCapacityCommitment.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryCapacityCommitment.GoogleBigqueryCapacityCommitment.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryCapacityCommitment.GoogleBigqueryCapacityCommitment.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryCapacityCommitment.GoogleBigqueryCapacityCommitment.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryCapacityCommitment.GoogleBigqueryCapacityCommitment.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryCapacityCommitment.GoogleBigqueryCapacityCommitment.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryCapacityCommitment.GoogleBigqueryCapacityCommitment.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryCapacityCommitment.GoogleBigqueryCapacityCommitment.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryCapacityCommitment.GoogleBigqueryCapacityCommitment.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryCapacityCommitment.GoogleBigqueryCapacityCommitment.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryCapacityCommitment.GoogleBigqueryCapacityCommitment.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryCapacityCommitment.GoogleBigqueryCapacityCommitment.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryCapacityCommitment.GoogleBigqueryCapacityCommitment.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryCapacityCommitment.GoogleBigqueryCapacityCommitment.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryCapacityCommitment.GoogleBigqueryCapacityCommitment.property.commitmentEndTime">commitmentEndTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryCapacityCommitment.GoogleBigqueryCapacityCommitment.property.commitmentStartTime">commitmentStartTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryCapacityCommitment.GoogleBigqueryCapacityCommitment.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryCapacityCommitment.GoogleBigqueryCapacityCommitment.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryCapacityCommitment.GoogleBigqueryCapacityCommitment.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBigqueryCapacityCommitment.GoogleBigqueryCapacityCommitmentTimeoutsOutputReference">GoogleBigqueryCapacityCommitmentTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryCapacityCommitment.GoogleBigqueryCapacityCommitment.property.capacityCommitmentIdInput">capacityCommitmentIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryCapacityCommitment.GoogleBigqueryCapacityCommitment.property.deletionPolicyInput">deletionPolicyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryCapacityCommitment.GoogleBigqueryCapacityCommitment.property.editionInput">editionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryCapacityCommitment.GoogleBigqueryCapacityCommitment.property.enforceSingleAdminProjectPerOrgInput">enforceSingleAdminProjectPerOrgInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryCapacityCommitment.GoogleBigqueryCapacityCommitment.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryCapacityCommitment.GoogleBigqueryCapacityCommitment.property.locationInput">locationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryCapacityCommitment.GoogleBigqueryCapacityCommitment.property.planInput">planInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryCapacityCommitment.GoogleBigqueryCapacityCommitment.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryCapacityCommitment.GoogleBigqueryCapacityCommitment.property.renewalPlanInput">renewalPlanInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryCapacityCommitment.GoogleBigqueryCapacityCommitment.property.slotCountInput">slotCountInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryCapacityCommitment.GoogleBigqueryCapacityCommitment.property.timeoutsInput">timeoutsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleBigqueryCapacityCommitment.GoogleBigqueryCapacityCommitmentTimeouts">GoogleBigqueryCapacityCommitmentTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryCapacityCommitment.GoogleBigqueryCapacityCommitment.property.capacityCommitmentId">capacityCommitmentId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryCapacityCommitment.GoogleBigqueryCapacityCommitment.property.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryCapacityCommitment.GoogleBigqueryCapacityCommitment.property.edition">edition</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryCapacityCommitment.GoogleBigqueryCapacityCommitment.property.enforceSingleAdminProjectPerOrg">enforceSingleAdminProjectPerOrg</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryCapacityCommitment.GoogleBigqueryCapacityCommitment.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryCapacityCommitment.GoogleBigqueryCapacityCommitment.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryCapacityCommitment.GoogleBigqueryCapacityCommitment.property.plan">plan</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryCapacityCommitment.GoogleBigqueryCapacityCommitment.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryCapacityCommitment.GoogleBigqueryCapacityCommitment.property.renewalPlan">renewalPlan</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryCapacityCommitment.GoogleBigqueryCapacityCommitment.property.slotCount">slotCount</a></code> | <code>java.lang.Number</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google-beta.googleBigqueryCapacityCommitment.GoogleBigqueryCapacityCommitment.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google-beta.googleBigqueryCapacityCommitment.GoogleBigqueryCapacityCommitment.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleBigqueryCapacityCommitment.GoogleBigqueryCapacityCommitment.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google-beta.googleBigqueryCapacityCommitment.GoogleBigqueryCapacityCommitment.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google-beta.googleBigqueryCapacityCommitment.GoogleBigqueryCapacityCommitment.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google-beta.googleBigqueryCapacityCommitment.GoogleBigqueryCapacityCommitment.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google-beta.googleBigqueryCapacityCommitment.GoogleBigqueryCapacityCommitment.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleBigqueryCapacityCommitment.GoogleBigqueryCapacityCommitment.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleBigqueryCapacityCommitment.GoogleBigqueryCapacityCommitment.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleBigqueryCapacityCommitment.GoogleBigqueryCapacityCommitment.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleBigqueryCapacityCommitment.GoogleBigqueryCapacityCommitment.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleBigqueryCapacityCommitment.GoogleBigqueryCapacityCommitment.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleBigqueryCapacityCommitment.GoogleBigqueryCapacityCommitment.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleBigqueryCapacityCommitment.GoogleBigqueryCapacityCommitment.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `commitmentEndTime`<sup>Required</sup> <a name="commitmentEndTime" id="@cdktn/provider-google-beta.googleBigqueryCapacityCommitment.GoogleBigqueryCapacityCommitment.property.commitmentEndTime"></a>

```java
public java.lang.String getCommitmentEndTime();
```

- *Type:* java.lang.String

---

##### `commitmentStartTime`<sup>Required</sup> <a name="commitmentStartTime" id="@cdktn/provider-google-beta.googleBigqueryCapacityCommitment.GoogleBigqueryCapacityCommitment.property.commitmentStartTime"></a>

```java
public java.lang.String getCommitmentStartTime();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleBigqueryCapacityCommitment.GoogleBigqueryCapacityCommitment.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-google-beta.googleBigqueryCapacityCommitment.GoogleBigqueryCapacityCommitment.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleBigqueryCapacityCommitment.GoogleBigqueryCapacityCommitment.property.timeouts"></a>

```java
public GoogleBigqueryCapacityCommitmentTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleBigqueryCapacityCommitment.GoogleBigqueryCapacityCommitmentTimeoutsOutputReference">GoogleBigqueryCapacityCommitmentTimeoutsOutputReference</a>

---

##### `capacityCommitmentIdInput`<sup>Optional</sup> <a name="capacityCommitmentIdInput" id="@cdktn/provider-google-beta.googleBigqueryCapacityCommitment.GoogleBigqueryCapacityCommitment.property.capacityCommitmentIdInput"></a>

```java
public java.lang.String getCapacityCommitmentIdInput();
```

- *Type:* java.lang.String

---

##### `deletionPolicyInput`<sup>Optional</sup> <a name="deletionPolicyInput" id="@cdktn/provider-google-beta.googleBigqueryCapacityCommitment.GoogleBigqueryCapacityCommitment.property.deletionPolicyInput"></a>

```java
public java.lang.String getDeletionPolicyInput();
```

- *Type:* java.lang.String

---

##### `editionInput`<sup>Optional</sup> <a name="editionInput" id="@cdktn/provider-google-beta.googleBigqueryCapacityCommitment.GoogleBigqueryCapacityCommitment.property.editionInput"></a>

```java
public java.lang.String getEditionInput();
```

- *Type:* java.lang.String

---

##### `enforceSingleAdminProjectPerOrgInput`<sup>Optional</sup> <a name="enforceSingleAdminProjectPerOrgInput" id="@cdktn/provider-google-beta.googleBigqueryCapacityCommitment.GoogleBigqueryCapacityCommitment.property.enforceSingleAdminProjectPerOrgInput"></a>

```java
public java.lang.String getEnforceSingleAdminProjectPerOrgInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google-beta.googleBigqueryCapacityCommitment.GoogleBigqueryCapacityCommitment.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktn/provider-google-beta.googleBigqueryCapacityCommitment.GoogleBigqueryCapacityCommitment.property.locationInput"></a>

```java
public java.lang.String getLocationInput();
```

- *Type:* java.lang.String

---

##### `planInput`<sup>Optional</sup> <a name="planInput" id="@cdktn/provider-google-beta.googleBigqueryCapacityCommitment.GoogleBigqueryCapacityCommitment.property.planInput"></a>

```java
public java.lang.String getPlanInput();
```

- *Type:* java.lang.String

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktn/provider-google-beta.googleBigqueryCapacityCommitment.GoogleBigqueryCapacityCommitment.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `renewalPlanInput`<sup>Optional</sup> <a name="renewalPlanInput" id="@cdktn/provider-google-beta.googleBigqueryCapacityCommitment.GoogleBigqueryCapacityCommitment.property.renewalPlanInput"></a>

```java
public java.lang.String getRenewalPlanInput();
```

- *Type:* java.lang.String

---

##### `slotCountInput`<sup>Optional</sup> <a name="slotCountInput" id="@cdktn/provider-google-beta.googleBigqueryCapacityCommitment.GoogleBigqueryCapacityCommitment.property.slotCountInput"></a>

```java
public java.lang.Number getSlotCountInput();
```

- *Type:* java.lang.Number

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-google-beta.googleBigqueryCapacityCommitment.GoogleBigqueryCapacityCommitment.property.timeoutsInput"></a>

```java
public IResolvable|GoogleBigqueryCapacityCommitmentTimeouts getTimeoutsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleBigqueryCapacityCommitment.GoogleBigqueryCapacityCommitmentTimeouts">GoogleBigqueryCapacityCommitmentTimeouts</a>

---

##### `capacityCommitmentId`<sup>Required</sup> <a name="capacityCommitmentId" id="@cdktn/provider-google-beta.googleBigqueryCapacityCommitment.GoogleBigqueryCapacityCommitment.property.capacityCommitmentId"></a>

```java
public java.lang.String getCapacityCommitmentId();
```

- *Type:* java.lang.String

---

##### `deletionPolicy`<sup>Required</sup> <a name="deletionPolicy" id="@cdktn/provider-google-beta.googleBigqueryCapacityCommitment.GoogleBigqueryCapacityCommitment.property.deletionPolicy"></a>

```java
public java.lang.String getDeletionPolicy();
```

- *Type:* java.lang.String

---

##### `edition`<sup>Required</sup> <a name="edition" id="@cdktn/provider-google-beta.googleBigqueryCapacityCommitment.GoogleBigqueryCapacityCommitment.property.edition"></a>

```java
public java.lang.String getEdition();
```

- *Type:* java.lang.String

---

##### `enforceSingleAdminProjectPerOrg`<sup>Required</sup> <a name="enforceSingleAdminProjectPerOrg" id="@cdktn/provider-google-beta.googleBigqueryCapacityCommitment.GoogleBigqueryCapacityCommitment.property.enforceSingleAdminProjectPerOrg"></a>

```java
public java.lang.String getEnforceSingleAdminProjectPerOrg();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleBigqueryCapacityCommitment.GoogleBigqueryCapacityCommitment.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleBigqueryCapacityCommitment.GoogleBigqueryCapacityCommitment.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `plan`<sup>Required</sup> <a name="plan" id="@cdktn/provider-google-beta.googleBigqueryCapacityCommitment.GoogleBigqueryCapacityCommitment.property.plan"></a>

```java
public java.lang.String getPlan();
```

- *Type:* java.lang.String

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google-beta.googleBigqueryCapacityCommitment.GoogleBigqueryCapacityCommitment.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

##### `renewalPlan`<sup>Required</sup> <a name="renewalPlan" id="@cdktn/provider-google-beta.googleBigqueryCapacityCommitment.GoogleBigqueryCapacityCommitment.property.renewalPlan"></a>

```java
public java.lang.String getRenewalPlan();
```

- *Type:* java.lang.String

---

##### `slotCount`<sup>Required</sup> <a name="slotCount" id="@cdktn/provider-google-beta.googleBigqueryCapacityCommitment.GoogleBigqueryCapacityCommitment.property.slotCount"></a>

```java
public java.lang.Number getSlotCount();
```

- *Type:* java.lang.Number

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryCapacityCommitment.GoogleBigqueryCapacityCommitment.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google-beta.googleBigqueryCapacityCommitment.GoogleBigqueryCapacityCommitment.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleBigqueryCapacityCommitmentConfig <a name="GoogleBigqueryCapacityCommitmentConfig" id="@cdktn/provider-google-beta.googleBigqueryCapacityCommitment.GoogleBigqueryCapacityCommitmentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleBigqueryCapacityCommitment.GoogleBigqueryCapacityCommitmentConfig.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_bigquery_capacity_commitment.GoogleBigqueryCapacityCommitmentConfig;

GoogleBigqueryCapacityCommitmentConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .plan(java.lang.String)
    .slotCount(java.lang.Number)
//  .capacityCommitmentId(java.lang.String)
//  .deletionPolicy(java.lang.String)
//  .edition(java.lang.String)
//  .enforceSingleAdminProjectPerOrg(java.lang.String)
//  .id(java.lang.String)
//  .location(java.lang.String)
//  .project(java.lang.String)
//  .renewalPlan(java.lang.String)
//  .timeouts(GoogleBigqueryCapacityCommitmentTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryCapacityCommitment.GoogleBigqueryCapacityCommitmentConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryCapacityCommitment.GoogleBigqueryCapacityCommitmentConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryCapacityCommitment.GoogleBigqueryCapacityCommitmentConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryCapacityCommitment.GoogleBigqueryCapacityCommitmentConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryCapacityCommitment.GoogleBigqueryCapacityCommitmentConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryCapacityCommitment.GoogleBigqueryCapacityCommitmentConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryCapacityCommitment.GoogleBigqueryCapacityCommitmentConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryCapacityCommitment.GoogleBigqueryCapacityCommitmentConfig.property.plan">plan</a></code> | <code>java.lang.String</code> | Capacity commitment plan. Valid values are at https://cloud.google.com/bigquery/docs/reference/reservations/rpc/google.cloud.bigquery.reservation.v1#commitmentplan. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryCapacityCommitment.GoogleBigqueryCapacityCommitmentConfig.property.slotCount">slotCount</a></code> | <code>java.lang.Number</code> | Number of slots in this commitment. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryCapacityCommitment.GoogleBigqueryCapacityCommitmentConfig.property.capacityCommitmentId">capacityCommitmentId</a></code> | <code>java.lang.String</code> | The optional capacity commitment ID. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryCapacityCommitment.GoogleBigqueryCapacityCommitmentConfig.property.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryCapacityCommitment.GoogleBigqueryCapacityCommitmentConfig.property.edition">edition</a></code> | <code>java.lang.String</code> | The edition type. Valid values are STANDARD, ENTERPRISE, ENTERPRISE_PLUS. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryCapacityCommitment.GoogleBigqueryCapacityCommitmentConfig.property.enforceSingleAdminProjectPerOrg">enforceSingleAdminProjectPerOrg</a></code> | <code>java.lang.String</code> | If true, fail the request if another project in the organization has a capacity commitment. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryCapacityCommitment.GoogleBigqueryCapacityCommitmentConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_bigquery_capacity_commitment#id GoogleBigqueryCapacityCommitment#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryCapacityCommitment.GoogleBigqueryCapacityCommitmentConfig.property.location">location</a></code> | <code>java.lang.String</code> | The geographic location where the transfer config should reside. Examples: US, EU, asia-northeast1. The default value is US. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryCapacityCommitment.GoogleBigqueryCapacityCommitmentConfig.property.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_bigquery_capacity_commitment#project GoogleBigqueryCapacityCommitment#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryCapacityCommitment.GoogleBigqueryCapacityCommitmentConfig.property.renewalPlan">renewalPlan</a></code> | <code>java.lang.String</code> | The plan this capacity commitment is converted to after commitmentEndTime passes. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryCapacityCommitment.GoogleBigqueryCapacityCommitmentConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBigqueryCapacityCommitment.GoogleBigqueryCapacityCommitmentTimeouts">GoogleBigqueryCapacityCommitmentTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleBigqueryCapacityCommitment.GoogleBigqueryCapacityCommitmentConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleBigqueryCapacityCommitment.GoogleBigqueryCapacityCommitmentConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleBigqueryCapacityCommitment.GoogleBigqueryCapacityCommitmentConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleBigqueryCapacityCommitment.GoogleBigqueryCapacityCommitmentConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleBigqueryCapacityCommitment.GoogleBigqueryCapacityCommitmentConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleBigqueryCapacityCommitment.GoogleBigqueryCapacityCommitmentConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleBigqueryCapacityCommitment.GoogleBigqueryCapacityCommitmentConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `plan`<sup>Required</sup> <a name="plan" id="@cdktn/provider-google-beta.googleBigqueryCapacityCommitment.GoogleBigqueryCapacityCommitmentConfig.property.plan"></a>

```java
public java.lang.String getPlan();
```

- *Type:* java.lang.String

Capacity commitment plan. Valid values are at https://cloud.google.com/bigquery/docs/reference/reservations/rpc/google.cloud.bigquery.reservation.v1#commitmentplan.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_bigquery_capacity_commitment#plan GoogleBigqueryCapacityCommitment#plan}

---

##### `slotCount`<sup>Required</sup> <a name="slotCount" id="@cdktn/provider-google-beta.googleBigqueryCapacityCommitment.GoogleBigqueryCapacityCommitmentConfig.property.slotCount"></a>

```java
public java.lang.Number getSlotCount();
```

- *Type:* java.lang.Number

Number of slots in this commitment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_bigquery_capacity_commitment#slot_count GoogleBigqueryCapacityCommitment#slot_count}

---

##### `capacityCommitmentId`<sup>Optional</sup> <a name="capacityCommitmentId" id="@cdktn/provider-google-beta.googleBigqueryCapacityCommitment.GoogleBigqueryCapacityCommitmentConfig.property.capacityCommitmentId"></a>

```java
public java.lang.String getCapacityCommitmentId();
```

- *Type:* java.lang.String

The optional capacity commitment ID.

Capacity commitment name will be generated automatically if this field is
empty. This field must only contain lower case alphanumeric characters or dashes. The first and last character
cannot be a dash. Max length is 64 characters. NOTE: this ID won't be kept if the capacity commitment is split
or merged.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_bigquery_capacity_commitment#capacity_commitment_id GoogleBigqueryCapacityCommitment#capacity_commitment_id}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google-beta.googleBigqueryCapacityCommitment.GoogleBigqueryCapacityCommitmentConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_bigquery_capacity_commitment#deletion_policy GoogleBigqueryCapacityCommitment#deletion_policy}

---

##### `edition`<sup>Optional</sup> <a name="edition" id="@cdktn/provider-google-beta.googleBigqueryCapacityCommitment.GoogleBigqueryCapacityCommitmentConfig.property.edition"></a>

```java
public java.lang.String getEdition();
```

- *Type:* java.lang.String

The edition type. Valid values are STANDARD, ENTERPRISE, ENTERPRISE_PLUS.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_bigquery_capacity_commitment#edition GoogleBigqueryCapacityCommitment#edition}

---

##### `enforceSingleAdminProjectPerOrg`<sup>Optional</sup> <a name="enforceSingleAdminProjectPerOrg" id="@cdktn/provider-google-beta.googleBigqueryCapacityCommitment.GoogleBigqueryCapacityCommitmentConfig.property.enforceSingleAdminProjectPerOrg"></a>

```java
public java.lang.String getEnforceSingleAdminProjectPerOrg();
```

- *Type:* java.lang.String

If true, fail the request if another project in the organization has a capacity commitment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_bigquery_capacity_commitment#enforce_single_admin_project_per_org GoogleBigqueryCapacityCommitment#enforce_single_admin_project_per_org}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleBigqueryCapacityCommitment.GoogleBigqueryCapacityCommitmentConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_bigquery_capacity_commitment#id GoogleBigqueryCapacityCommitment#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktn/provider-google-beta.googleBigqueryCapacityCommitment.GoogleBigqueryCapacityCommitmentConfig.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

The geographic location where the transfer config should reside. Examples: US, EU, asia-northeast1. The default value is US.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_bigquery_capacity_commitment#location GoogleBigqueryCapacityCommitment#location}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.googleBigqueryCapacityCommitment.GoogleBigqueryCapacityCommitmentConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_bigquery_capacity_commitment#project GoogleBigqueryCapacityCommitment#project}.

---

##### `renewalPlan`<sup>Optional</sup> <a name="renewalPlan" id="@cdktn/provider-google-beta.googleBigqueryCapacityCommitment.GoogleBigqueryCapacityCommitmentConfig.property.renewalPlan"></a>

```java
public java.lang.String getRenewalPlan();
```

- *Type:* java.lang.String

The plan this capacity commitment is converted to after commitmentEndTime passes.

Once the plan is changed, committed period is extended according to commitment plan. Only applicable for some commitment plans.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_bigquery_capacity_commitment#renewal_plan GoogleBigqueryCapacityCommitment#renewal_plan}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleBigqueryCapacityCommitment.GoogleBigqueryCapacityCommitmentConfig.property.timeouts"></a>

```java
public GoogleBigqueryCapacityCommitmentTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleBigqueryCapacityCommitment.GoogleBigqueryCapacityCommitmentTimeouts">GoogleBigqueryCapacityCommitmentTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_bigquery_capacity_commitment#timeouts GoogleBigqueryCapacityCommitment#timeouts}

---

### GoogleBigqueryCapacityCommitmentTimeouts <a name="GoogleBigqueryCapacityCommitmentTimeouts" id="@cdktn/provider-google-beta.googleBigqueryCapacityCommitment.GoogleBigqueryCapacityCommitmentTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleBigqueryCapacityCommitment.GoogleBigqueryCapacityCommitmentTimeouts.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_bigquery_capacity_commitment.GoogleBigqueryCapacityCommitmentTimeouts;

GoogleBigqueryCapacityCommitmentTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryCapacityCommitment.GoogleBigqueryCapacityCommitmentTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_bigquery_capacity_commitment#create GoogleBigqueryCapacityCommitment#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryCapacityCommitment.GoogleBigqueryCapacityCommitmentTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_bigquery_capacity_commitment#delete GoogleBigqueryCapacityCommitment#delete}. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryCapacityCommitment.GoogleBigqueryCapacityCommitmentTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_bigquery_capacity_commitment#update GoogleBigqueryCapacityCommitment#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google-beta.googleBigqueryCapacityCommitment.GoogleBigqueryCapacityCommitmentTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_bigquery_capacity_commitment#create GoogleBigqueryCapacityCommitment#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google-beta.googleBigqueryCapacityCommitment.GoogleBigqueryCapacityCommitmentTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_bigquery_capacity_commitment#delete GoogleBigqueryCapacityCommitment#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google-beta.googleBigqueryCapacityCommitment.GoogleBigqueryCapacityCommitmentTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_bigquery_capacity_commitment#update GoogleBigqueryCapacityCommitment#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleBigqueryCapacityCommitmentTimeoutsOutputReference <a name="GoogleBigqueryCapacityCommitmentTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleBigqueryCapacityCommitment.GoogleBigqueryCapacityCommitmentTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleBigqueryCapacityCommitment.GoogleBigqueryCapacityCommitmentTimeoutsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_bigquery_capacity_commitment.GoogleBigqueryCapacityCommitmentTimeoutsOutputReference;

new GoogleBigqueryCapacityCommitmentTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryCapacityCommitment.GoogleBigqueryCapacityCommitmentTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryCapacityCommitment.GoogleBigqueryCapacityCommitmentTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleBigqueryCapacityCommitment.GoogleBigqueryCapacityCommitmentTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryCapacityCommitment.GoogleBigqueryCapacityCommitmentTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryCapacityCommitment.GoogleBigqueryCapacityCommitmentTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryCapacityCommitment.GoogleBigqueryCapacityCommitmentTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryCapacityCommitment.GoogleBigqueryCapacityCommitmentTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryCapacityCommitment.GoogleBigqueryCapacityCommitmentTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryCapacityCommitment.GoogleBigqueryCapacityCommitmentTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryCapacityCommitment.GoogleBigqueryCapacityCommitmentTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryCapacityCommitment.GoogleBigqueryCapacityCommitmentTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryCapacityCommitment.GoogleBigqueryCapacityCommitmentTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryCapacityCommitment.GoogleBigqueryCapacityCommitmentTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryCapacityCommitment.GoogleBigqueryCapacityCommitmentTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryCapacityCommitment.GoogleBigqueryCapacityCommitmentTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryCapacityCommitment.GoogleBigqueryCapacityCommitmentTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryCapacityCommitment.GoogleBigqueryCapacityCommitmentTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryCapacityCommitment.GoogleBigqueryCapacityCommitmentTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryCapacityCommitment.GoogleBigqueryCapacityCommitmentTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryCapacityCommitment.GoogleBigqueryCapacityCommitmentTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleBigqueryCapacityCommitment.GoogleBigqueryCapacityCommitmentTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleBigqueryCapacityCommitment.GoogleBigqueryCapacityCommitmentTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryCapacityCommitment.GoogleBigqueryCapacityCommitmentTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleBigqueryCapacityCommitment.GoogleBigqueryCapacityCommitmentTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryCapacityCommitment.GoogleBigqueryCapacityCommitmentTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleBigqueryCapacityCommitment.GoogleBigqueryCapacityCommitmentTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryCapacityCommitment.GoogleBigqueryCapacityCommitmentTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleBigqueryCapacityCommitment.GoogleBigqueryCapacityCommitmentTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryCapacityCommitment.GoogleBigqueryCapacityCommitmentTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleBigqueryCapacityCommitment.GoogleBigqueryCapacityCommitmentTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryCapacityCommitment.GoogleBigqueryCapacityCommitmentTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleBigqueryCapacityCommitment.GoogleBigqueryCapacityCommitmentTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryCapacityCommitment.GoogleBigqueryCapacityCommitmentTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleBigqueryCapacityCommitment.GoogleBigqueryCapacityCommitmentTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryCapacityCommitment.GoogleBigqueryCapacityCommitmentTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleBigqueryCapacityCommitment.GoogleBigqueryCapacityCommitmentTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryCapacityCommitment.GoogleBigqueryCapacityCommitmentTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleBigqueryCapacityCommitment.GoogleBigqueryCapacityCommitmentTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryCapacityCommitment.GoogleBigqueryCapacityCommitmentTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleBigqueryCapacityCommitment.GoogleBigqueryCapacityCommitmentTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleBigqueryCapacityCommitment.GoogleBigqueryCapacityCommitmentTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleBigqueryCapacityCommitment.GoogleBigqueryCapacityCommitmentTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleBigqueryCapacityCommitment.GoogleBigqueryCapacityCommitmentTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleBigqueryCapacityCommitment.GoogleBigqueryCapacityCommitmentTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-google-beta.googleBigqueryCapacityCommitment.GoogleBigqueryCapacityCommitmentTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-google-beta.googleBigqueryCapacityCommitment.GoogleBigqueryCapacityCommitmentTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-google-beta.googleBigqueryCapacityCommitment.GoogleBigqueryCapacityCommitmentTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryCapacityCommitment.GoogleBigqueryCapacityCommitmentTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryCapacityCommitment.GoogleBigqueryCapacityCommitmentTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryCapacityCommitment.GoogleBigqueryCapacityCommitmentTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryCapacityCommitment.GoogleBigqueryCapacityCommitmentTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryCapacityCommitment.GoogleBigqueryCapacityCommitmentTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryCapacityCommitment.GoogleBigqueryCapacityCommitmentTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryCapacityCommitment.GoogleBigqueryCapacityCommitmentTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryCapacityCommitment.GoogleBigqueryCapacityCommitmentTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryCapacityCommitment.GoogleBigqueryCapacityCommitmentTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleBigqueryCapacityCommitment.GoogleBigqueryCapacityCommitmentTimeouts">GoogleBigqueryCapacityCommitmentTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleBigqueryCapacityCommitment.GoogleBigqueryCapacityCommitmentTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleBigqueryCapacityCommitment.GoogleBigqueryCapacityCommitmentTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-google-beta.googleBigqueryCapacityCommitment.GoogleBigqueryCapacityCommitmentTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-google-beta.googleBigqueryCapacityCommitment.GoogleBigqueryCapacityCommitmentTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-google-beta.googleBigqueryCapacityCommitment.GoogleBigqueryCapacityCommitmentTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google-beta.googleBigqueryCapacityCommitment.GoogleBigqueryCapacityCommitmentTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google-beta.googleBigqueryCapacityCommitment.GoogleBigqueryCapacityCommitmentTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google-beta.googleBigqueryCapacityCommitment.GoogleBigqueryCapacityCommitmentTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleBigqueryCapacityCommitment.GoogleBigqueryCapacityCommitmentTimeoutsOutputReference.property.internalValue"></a>

```java
public IResolvable|GoogleBigqueryCapacityCommitmentTimeouts getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleBigqueryCapacityCommitment.GoogleBigqueryCapacityCommitmentTimeouts">GoogleBigqueryCapacityCommitmentTimeouts</a>

---



