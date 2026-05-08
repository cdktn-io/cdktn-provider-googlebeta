# `googleSaasRuntimeRolloutKind` Submodule <a name="`googleSaasRuntimeRolloutKind` Submodule" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleSaasRuntimeRolloutKind <a name="GoogleSaasRuntimeRolloutKind" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_saas_runtime_rollout_kind google_saas_runtime_rollout_kind}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_saas_runtime_rollout_kind.GoogleSaasRuntimeRolloutKind;

GoogleSaasRuntimeRolloutKind.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .location(java.lang.String)
    .rolloutKindId(java.lang.String)
    .unitKind(java.lang.String)
//  .annotations(java.util.Map<java.lang.String, java.lang.String>)
//  .errorBudget(GoogleSaasRuntimeRolloutKindErrorBudget)
//  .id(java.lang.String)
//  .labels(java.util.Map<java.lang.String, java.lang.String>)
//  .project(java.lang.String)
//  .rolloutOrchestrationStrategy(java.lang.String)
//  .timeouts(GoogleSaasRuntimeRolloutKindTimeouts)
//  .unitFilter(java.lang.String)
//  .updateUnitKindStrategy(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.Initializer.parameter.location">location</a></code> | <code>java.lang.String</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.Initializer.parameter.rolloutKindId">rolloutKindId</a></code> | <code>java.lang.String</code> | The ID value for the new rollout kind. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.Initializer.parameter.unitKind">unitKind</a></code> | <code>java.lang.String</code> | UnitKind that this rollout kind corresponds to. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.Initializer.parameter.annotations">annotations</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Annotations is an unstructured key-value map stored with a resource that may be set by external tools to store and retrieve arbitrary metadata. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.Initializer.parameter.errorBudget">errorBudget</a></code> | <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindErrorBudget">GoogleSaasRuntimeRolloutKindErrorBudget</a></code> | error_budget block. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_saas_runtime_rollout_kind#id GoogleSaasRuntimeRolloutKind#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.Initializer.parameter.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | The labels on the resource, which can be used for categorization. similar to Kubernetes resource labels. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_saas_runtime_rollout_kind#project GoogleSaasRuntimeRolloutKind#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.Initializer.parameter.rolloutOrchestrationStrategy">rolloutOrchestrationStrategy</a></code> | <code>java.lang.String</code> | The strategy used for executing a Rollout. This is a required field. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindTimeouts">GoogleSaasRuntimeRolloutKindTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.Initializer.parameter.unitFilter">unitFilter</a></code> | <code>java.lang.String</code> | CEL(https://github.com/google/cel-spec) formatted filter string against Unit. The filter will be applied to determine the eligible unit population. This filter can only reduce, but not expand the scope of the rollout. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.Initializer.parameter.updateUnitKindStrategy">updateUnitKindStrategy</a></code> | <code>java.lang.String</code> | The config for updating the unit kind. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.Initializer.parameter.location"></a>

- *Type:* java.lang.String

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_saas_runtime_rollout_kind#location GoogleSaasRuntimeRolloutKind#location}

---

##### `rolloutKindId`<sup>Required</sup> <a name="rolloutKindId" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.Initializer.parameter.rolloutKindId"></a>

- *Type:* java.lang.String

The ID value for the new rollout kind.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_saas_runtime_rollout_kind#rollout_kind_id GoogleSaasRuntimeRolloutKind#rollout_kind_id}

---

##### `unitKind`<sup>Required</sup> <a name="unitKind" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.Initializer.parameter.unitKind"></a>

- *Type:* java.lang.String

UnitKind that this rollout kind corresponds to.

Rollouts stemming from this
rollout kind will target the units of this unit kind. In other words, this
defines the population of target units to be upgraded by rollouts.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_saas_runtime_rollout_kind#unit_kind GoogleSaasRuntimeRolloutKind#unit_kind}

---

##### `annotations`<sup>Optional</sup> <a name="annotations" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.Initializer.parameter.annotations"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Annotations is an unstructured key-value map stored with a resource that may be set by external tools to store and retrieve arbitrary metadata.

They are not queryable and should be preserved when modifying objects.

More info: https://kubernetes.io/docs/user-guide/annotations

**Note**: This field is non-authoritative, and will only manage the annotations present in your configuration.
Please refer to the field 'effective_annotations' for all of the annotations present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_saas_runtime_rollout_kind#annotations GoogleSaasRuntimeRolloutKind#annotations}

---

##### `errorBudget`<sup>Optional</sup> <a name="errorBudget" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.Initializer.parameter.errorBudget"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindErrorBudget">GoogleSaasRuntimeRolloutKindErrorBudget</a>

error_budget block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_saas_runtime_rollout_kind#error_budget GoogleSaasRuntimeRolloutKind#error_budget}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_saas_runtime_rollout_kind#id GoogleSaasRuntimeRolloutKind#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.Initializer.parameter.labels"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

The labels on the resource, which can be used for categorization. similar to Kubernetes resource labels.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_saas_runtime_rollout_kind#labels GoogleSaasRuntimeRolloutKind#labels}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.Initializer.parameter.project"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_saas_runtime_rollout_kind#project GoogleSaasRuntimeRolloutKind#project}.

---

##### `rolloutOrchestrationStrategy`<sup>Optional</sup> <a name="rolloutOrchestrationStrategy" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.Initializer.parameter.rolloutOrchestrationStrategy"></a>

- *Type:* java.lang.String

The strategy used for executing a Rollout. This is a required field.

There are two supported values strategies which are used to control a rollout.

* "Google.Cloud.Simple.AllAtOnce"
* "Google.Cloud.Simple.OneLocationAtATime"

A rollout with one of these simple strategies will rollout across
all locations defined in the associated UnitKind's Saas Locations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_saas_runtime_rollout_kind#rollout_orchestration_strategy GoogleSaasRuntimeRolloutKind#rollout_orchestration_strategy}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindTimeouts">GoogleSaasRuntimeRolloutKindTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_saas_runtime_rollout_kind#timeouts GoogleSaasRuntimeRolloutKind#timeouts}

---

##### `unitFilter`<sup>Optional</sup> <a name="unitFilter" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.Initializer.parameter.unitFilter"></a>

- *Type:* java.lang.String

CEL(https://github.com/google/cel-spec) formatted filter string against Unit. The filter will be applied to determine the eligible unit population. This filter can only reduce, but not expand the scope of the rollout.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_saas_runtime_rollout_kind#unit_filter GoogleSaasRuntimeRolloutKind#unit_filter}

---

##### `updateUnitKindStrategy`<sup>Optional</sup> <a name="updateUnitKindStrategy" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.Initializer.parameter.updateUnitKindStrategy"></a>

- *Type:* java.lang.String

The config for updating the unit kind.

By default, the unit kind will be
updated on the rollout start.
Possible values:
UPDATE_UNIT_KIND_STRATEGY_ON_START
UPDATE_UNIT_KIND_STRATEGY_NEVER Possible values: ["UPDATE_UNIT_KIND_STRATEGY_ON_START", "UPDATE_UNIT_KIND_STRATEGY_NEVER"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_saas_runtime_rollout_kind#update_unit_kind_strategy GoogleSaasRuntimeRolloutKind#update_unit_kind_strategy}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.putErrorBudget">putErrorBudget</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.resetAnnotations">resetAnnotations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.resetErrorBudget">resetErrorBudget</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.resetRolloutOrchestrationStrategy">resetRolloutOrchestrationStrategy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.resetUnitFilter">resetUnitFilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.resetUpdateUnitKindStrategy">resetUpdateUnitKindStrategy</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putErrorBudget` <a name="putErrorBudget" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.putErrorBudget"></a>

```java
public void putErrorBudget(GoogleSaasRuntimeRolloutKindErrorBudget value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.putErrorBudget.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindErrorBudget">GoogleSaasRuntimeRolloutKindErrorBudget</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.putTimeouts"></a>

```java
public void putTimeouts(GoogleSaasRuntimeRolloutKindTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindTimeouts">GoogleSaasRuntimeRolloutKindTimeouts</a>

---

##### `resetAnnotations` <a name="resetAnnotations" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.resetAnnotations"></a>

```java
public void resetAnnotations()
```

##### `resetErrorBudget` <a name="resetErrorBudget" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.resetErrorBudget"></a>

```java
public void resetErrorBudget()
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.resetId"></a>

```java
public void resetId()
```

##### `resetLabels` <a name="resetLabels" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.resetLabels"></a>

```java
public void resetLabels()
```

##### `resetProject` <a name="resetProject" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.resetProject"></a>

```java
public void resetProject()
```

##### `resetRolloutOrchestrationStrategy` <a name="resetRolloutOrchestrationStrategy" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.resetRolloutOrchestrationStrategy"></a>

```java
public void resetRolloutOrchestrationStrategy()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.resetTimeouts"></a>

```java
public void resetTimeouts()
```

##### `resetUnitFilter` <a name="resetUnitFilter" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.resetUnitFilter"></a>

```java
public void resetUnitFilter()
```

##### `resetUpdateUnitKindStrategy` <a name="resetUpdateUnitKindStrategy" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.resetUpdateUnitKindStrategy"></a>

```java
public void resetUpdateUnitKindStrategy()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a GoogleSaasRuntimeRolloutKind resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.isConstruct"></a>

```java
import io.cdktn.providers.google_beta.google_saas_runtime_rollout_kind.GoogleSaasRuntimeRolloutKind;

GoogleSaasRuntimeRolloutKind.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.isTerraformElement"></a>

```java
import io.cdktn.providers.google_beta.google_saas_runtime_rollout_kind.GoogleSaasRuntimeRolloutKind;

GoogleSaasRuntimeRolloutKind.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.isTerraformResource"></a>

```java
import io.cdktn.providers.google_beta.google_saas_runtime_rollout_kind.GoogleSaasRuntimeRolloutKind;

GoogleSaasRuntimeRolloutKind.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.generateConfigForImport"></a>

```java
import io.cdktn.providers.google_beta.google_saas_runtime_rollout_kind.GoogleSaasRuntimeRolloutKind;

GoogleSaasRuntimeRolloutKind.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),GoogleSaasRuntimeRolloutKind.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a GoogleSaasRuntimeRolloutKind resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the GoogleSaasRuntimeRolloutKind to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing GoogleSaasRuntimeRolloutKind that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_saas_runtime_rollout_kind#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the GoogleSaasRuntimeRolloutKind to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.property.createTime">createTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.property.effectiveAnnotations">effectiveAnnotations</a></code> | <code>io.cdktn.cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.property.effectiveLabels">effectiveLabels</a></code> | <code>io.cdktn.cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.property.errorBudget">errorBudget</a></code> | <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindErrorBudgetOutputReference">GoogleSaasRuntimeRolloutKindErrorBudgetOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.property.terraformLabels">terraformLabels</a></code> | <code>io.cdktn.cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindTimeoutsOutputReference">GoogleSaasRuntimeRolloutKindTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.property.uid">uid</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.property.updateTime">updateTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.property.annotationsInput">annotationsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.property.errorBudgetInput">errorBudgetInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindErrorBudget">GoogleSaasRuntimeRolloutKindErrorBudget</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.property.labelsInput">labelsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.property.locationInput">locationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.property.rolloutKindIdInput">rolloutKindIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.property.rolloutOrchestrationStrategyInput">rolloutOrchestrationStrategyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.property.timeoutsInput">timeoutsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindTimeouts">GoogleSaasRuntimeRolloutKindTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.property.unitFilterInput">unitFilterInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.property.unitKindInput">unitKindInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.property.updateUnitKindStrategyInput">updateUnitKindStrategyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.property.annotations">annotations</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.property.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.property.rolloutKindId">rolloutKindId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.property.rolloutOrchestrationStrategy">rolloutOrchestrationStrategy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.property.unitFilter">unitFilter</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.property.unitKind">unitKind</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.property.updateUnitKindStrategy">updateUnitKindStrategy</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.property.createTime"></a>

```java
public java.lang.String getCreateTime();
```

- *Type:* java.lang.String

---

##### `effectiveAnnotations`<sup>Required</sup> <a name="effectiveAnnotations" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.property.effectiveAnnotations"></a>

```java
public StringMap getEffectiveAnnotations();
```

- *Type:* io.cdktn.cdktn.StringMap

---

##### `effectiveLabels`<sup>Required</sup> <a name="effectiveLabels" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.property.effectiveLabels"></a>

```java
public StringMap getEffectiveLabels();
```

- *Type:* io.cdktn.cdktn.StringMap

---

##### `errorBudget`<sup>Required</sup> <a name="errorBudget" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.property.errorBudget"></a>

```java
public GoogleSaasRuntimeRolloutKindErrorBudgetOutputReference getErrorBudget();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindErrorBudgetOutputReference">GoogleSaasRuntimeRolloutKindErrorBudgetOutputReference</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `terraformLabels`<sup>Required</sup> <a name="terraformLabels" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.property.terraformLabels"></a>

```java
public StringMap getTerraformLabels();
```

- *Type:* io.cdktn.cdktn.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.property.timeouts"></a>

```java
public GoogleSaasRuntimeRolloutKindTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindTimeoutsOutputReference">GoogleSaasRuntimeRolloutKindTimeoutsOutputReference</a>

---

##### `uid`<sup>Required</sup> <a name="uid" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.property.uid"></a>

```java
public java.lang.String getUid();
```

- *Type:* java.lang.String

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.property.updateTime"></a>

```java
public java.lang.String getUpdateTime();
```

- *Type:* java.lang.String

---

##### `annotationsInput`<sup>Optional</sup> <a name="annotationsInput" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.property.annotationsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getAnnotationsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `errorBudgetInput`<sup>Optional</sup> <a name="errorBudgetInput" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.property.errorBudgetInput"></a>

```java
public GoogleSaasRuntimeRolloutKindErrorBudget getErrorBudgetInput();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindErrorBudget">GoogleSaasRuntimeRolloutKindErrorBudget</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.property.labelsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabelsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.property.locationInput"></a>

```java
public java.lang.String getLocationInput();
```

- *Type:* java.lang.String

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `rolloutKindIdInput`<sup>Optional</sup> <a name="rolloutKindIdInput" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.property.rolloutKindIdInput"></a>

```java
public java.lang.String getRolloutKindIdInput();
```

- *Type:* java.lang.String

---

##### `rolloutOrchestrationStrategyInput`<sup>Optional</sup> <a name="rolloutOrchestrationStrategyInput" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.property.rolloutOrchestrationStrategyInput"></a>

```java
public java.lang.String getRolloutOrchestrationStrategyInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.property.timeoutsInput"></a>

```java
public IResolvable|GoogleSaasRuntimeRolloutKindTimeouts getTimeoutsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindTimeouts">GoogleSaasRuntimeRolloutKindTimeouts</a>

---

##### `unitFilterInput`<sup>Optional</sup> <a name="unitFilterInput" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.property.unitFilterInput"></a>

```java
public java.lang.String getUnitFilterInput();
```

- *Type:* java.lang.String

---

##### `unitKindInput`<sup>Optional</sup> <a name="unitKindInput" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.property.unitKindInput"></a>

```java
public java.lang.String getUnitKindInput();
```

- *Type:* java.lang.String

---

##### `updateUnitKindStrategyInput`<sup>Optional</sup> <a name="updateUnitKindStrategyInput" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.property.updateUnitKindStrategyInput"></a>

```java
public java.lang.String getUpdateUnitKindStrategyInput();
```

- *Type:* java.lang.String

---

##### `annotations`<sup>Required</sup> <a name="annotations" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.property.annotations"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getAnnotations();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.property.labels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

##### `rolloutKindId`<sup>Required</sup> <a name="rolloutKindId" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.property.rolloutKindId"></a>

```java
public java.lang.String getRolloutKindId();
```

- *Type:* java.lang.String

---

##### `rolloutOrchestrationStrategy`<sup>Required</sup> <a name="rolloutOrchestrationStrategy" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.property.rolloutOrchestrationStrategy"></a>

```java
public java.lang.String getRolloutOrchestrationStrategy();
```

- *Type:* java.lang.String

---

##### `unitFilter`<sup>Required</sup> <a name="unitFilter" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.property.unitFilter"></a>

```java
public java.lang.String getUnitFilter();
```

- *Type:* java.lang.String

---

##### `unitKind`<sup>Required</sup> <a name="unitKind" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.property.unitKind"></a>

```java
public java.lang.String getUnitKind();
```

- *Type:* java.lang.String

---

##### `updateUnitKindStrategy`<sup>Required</sup> <a name="updateUnitKindStrategy" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.property.updateUnitKindStrategy"></a>

```java
public java.lang.String getUpdateUnitKindStrategy();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKind.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleSaasRuntimeRolloutKindConfig <a name="GoogleSaasRuntimeRolloutKindConfig" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindConfig.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_saas_runtime_rollout_kind.GoogleSaasRuntimeRolloutKindConfig;

GoogleSaasRuntimeRolloutKindConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .location(java.lang.String)
    .rolloutKindId(java.lang.String)
    .unitKind(java.lang.String)
//  .annotations(java.util.Map<java.lang.String, java.lang.String>)
//  .errorBudget(GoogleSaasRuntimeRolloutKindErrorBudget)
//  .id(java.lang.String)
//  .labels(java.util.Map<java.lang.String, java.lang.String>)
//  .project(java.lang.String)
//  .rolloutOrchestrationStrategy(java.lang.String)
//  .timeouts(GoogleSaasRuntimeRolloutKindTimeouts)
//  .unitFilter(java.lang.String)
//  .updateUnitKindStrategy(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindConfig.property.location">location</a></code> | <code>java.lang.String</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindConfig.property.rolloutKindId">rolloutKindId</a></code> | <code>java.lang.String</code> | The ID value for the new rollout kind. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindConfig.property.unitKind">unitKind</a></code> | <code>java.lang.String</code> | UnitKind that this rollout kind corresponds to. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindConfig.property.annotations">annotations</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Annotations is an unstructured key-value map stored with a resource that may be set by external tools to store and retrieve arbitrary metadata. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindConfig.property.errorBudget">errorBudget</a></code> | <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindErrorBudget">GoogleSaasRuntimeRolloutKindErrorBudget</a></code> | error_budget block. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_saas_runtime_rollout_kind#id GoogleSaasRuntimeRolloutKind#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindConfig.property.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | The labels on the resource, which can be used for categorization. similar to Kubernetes resource labels. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindConfig.property.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_saas_runtime_rollout_kind#project GoogleSaasRuntimeRolloutKind#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindConfig.property.rolloutOrchestrationStrategy">rolloutOrchestrationStrategy</a></code> | <code>java.lang.String</code> | The strategy used for executing a Rollout. This is a required field. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindTimeouts">GoogleSaasRuntimeRolloutKindTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindConfig.property.unitFilter">unitFilter</a></code> | <code>java.lang.String</code> | CEL(https://github.com/google/cel-spec) formatted filter string against Unit. The filter will be applied to determine the eligible unit population. This filter can only reduce, but not expand the scope of the rollout. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindConfig.property.updateUnitKindStrategy">updateUnitKindStrategy</a></code> | <code>java.lang.String</code> | The config for updating the unit kind. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindConfig.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_saas_runtime_rollout_kind#location GoogleSaasRuntimeRolloutKind#location}

---

##### `rolloutKindId`<sup>Required</sup> <a name="rolloutKindId" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindConfig.property.rolloutKindId"></a>

```java
public java.lang.String getRolloutKindId();
```

- *Type:* java.lang.String

The ID value for the new rollout kind.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_saas_runtime_rollout_kind#rollout_kind_id GoogleSaasRuntimeRolloutKind#rollout_kind_id}

---

##### `unitKind`<sup>Required</sup> <a name="unitKind" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindConfig.property.unitKind"></a>

```java
public java.lang.String getUnitKind();
```

- *Type:* java.lang.String

UnitKind that this rollout kind corresponds to.

Rollouts stemming from this
rollout kind will target the units of this unit kind. In other words, this
defines the population of target units to be upgraded by rollouts.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_saas_runtime_rollout_kind#unit_kind GoogleSaasRuntimeRolloutKind#unit_kind}

---

##### `annotations`<sup>Optional</sup> <a name="annotations" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindConfig.property.annotations"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getAnnotations();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Annotations is an unstructured key-value map stored with a resource that may be set by external tools to store and retrieve arbitrary metadata.

They are not queryable and should be preserved when modifying objects.

More info: https://kubernetes.io/docs/user-guide/annotations

**Note**: This field is non-authoritative, and will only manage the annotations present in your configuration.
Please refer to the field 'effective_annotations' for all of the annotations present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_saas_runtime_rollout_kind#annotations GoogleSaasRuntimeRolloutKind#annotations}

---

##### `errorBudget`<sup>Optional</sup> <a name="errorBudget" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindConfig.property.errorBudget"></a>

```java
public GoogleSaasRuntimeRolloutKindErrorBudget getErrorBudget();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindErrorBudget">GoogleSaasRuntimeRolloutKindErrorBudget</a>

error_budget block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_saas_runtime_rollout_kind#error_budget GoogleSaasRuntimeRolloutKind#error_budget}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_saas_runtime_rollout_kind#id GoogleSaasRuntimeRolloutKind#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindConfig.property.labels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

The labels on the resource, which can be used for categorization. similar to Kubernetes resource labels.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_saas_runtime_rollout_kind#labels GoogleSaasRuntimeRolloutKind#labels}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_saas_runtime_rollout_kind#project GoogleSaasRuntimeRolloutKind#project}.

---

##### `rolloutOrchestrationStrategy`<sup>Optional</sup> <a name="rolloutOrchestrationStrategy" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindConfig.property.rolloutOrchestrationStrategy"></a>

```java
public java.lang.String getRolloutOrchestrationStrategy();
```

- *Type:* java.lang.String

The strategy used for executing a Rollout. This is a required field.

There are two supported values strategies which are used to control a rollout.

* "Google.Cloud.Simple.AllAtOnce"
* "Google.Cloud.Simple.OneLocationAtATime"

A rollout with one of these simple strategies will rollout across
all locations defined in the associated UnitKind's Saas Locations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_saas_runtime_rollout_kind#rollout_orchestration_strategy GoogleSaasRuntimeRolloutKind#rollout_orchestration_strategy}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindConfig.property.timeouts"></a>

```java
public GoogleSaasRuntimeRolloutKindTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindTimeouts">GoogleSaasRuntimeRolloutKindTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_saas_runtime_rollout_kind#timeouts GoogleSaasRuntimeRolloutKind#timeouts}

---

##### `unitFilter`<sup>Optional</sup> <a name="unitFilter" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindConfig.property.unitFilter"></a>

```java
public java.lang.String getUnitFilter();
```

- *Type:* java.lang.String

CEL(https://github.com/google/cel-spec) formatted filter string against Unit. The filter will be applied to determine the eligible unit population. This filter can only reduce, but not expand the scope of the rollout.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_saas_runtime_rollout_kind#unit_filter GoogleSaasRuntimeRolloutKind#unit_filter}

---

##### `updateUnitKindStrategy`<sup>Optional</sup> <a name="updateUnitKindStrategy" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindConfig.property.updateUnitKindStrategy"></a>

```java
public java.lang.String getUpdateUnitKindStrategy();
```

- *Type:* java.lang.String

The config for updating the unit kind.

By default, the unit kind will be
updated on the rollout start.
Possible values:
UPDATE_UNIT_KIND_STRATEGY_ON_START
UPDATE_UNIT_KIND_STRATEGY_NEVER Possible values: ["UPDATE_UNIT_KIND_STRATEGY_ON_START", "UPDATE_UNIT_KIND_STRATEGY_NEVER"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_saas_runtime_rollout_kind#update_unit_kind_strategy GoogleSaasRuntimeRolloutKind#update_unit_kind_strategy}

---

### GoogleSaasRuntimeRolloutKindErrorBudget <a name="GoogleSaasRuntimeRolloutKindErrorBudget" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindErrorBudget"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindErrorBudget.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_saas_runtime_rollout_kind.GoogleSaasRuntimeRolloutKindErrorBudget;

GoogleSaasRuntimeRolloutKindErrorBudget.builder()
//  .allowedCount(java.lang.Number)
//  .allowedPercentage(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindErrorBudget.property.allowedCount">allowedCount</a></code> | <code>java.lang.Number</code> | The maximum number of failed units allowed in a location without pausing the rollout. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindErrorBudget.property.allowedPercentage">allowedPercentage</a></code> | <code>java.lang.Number</code> | The maximum percentage of units allowed to fail (0, 100] within a location without pausing the rollout. |

---

##### `allowedCount`<sup>Optional</sup> <a name="allowedCount" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindErrorBudget.property.allowedCount"></a>

```java
public java.lang.Number getAllowedCount();
```

- *Type:* java.lang.Number

The maximum number of failed units allowed in a location without pausing the rollout.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_saas_runtime_rollout_kind#allowed_count GoogleSaasRuntimeRolloutKind#allowed_count}

---

##### `allowedPercentage`<sup>Optional</sup> <a name="allowedPercentage" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindErrorBudget.property.allowedPercentage"></a>

```java
public java.lang.Number getAllowedPercentage();
```

- *Type:* java.lang.Number

The maximum percentage of units allowed to fail (0, 100] within a location without pausing the rollout.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_saas_runtime_rollout_kind#allowed_percentage GoogleSaasRuntimeRolloutKind#allowed_percentage}

---

### GoogleSaasRuntimeRolloutKindTimeouts <a name="GoogleSaasRuntimeRolloutKindTimeouts" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindTimeouts.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_saas_runtime_rollout_kind.GoogleSaasRuntimeRolloutKindTimeouts;

GoogleSaasRuntimeRolloutKindTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_saas_runtime_rollout_kind#create GoogleSaasRuntimeRolloutKind#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_saas_runtime_rollout_kind#delete GoogleSaasRuntimeRolloutKind#delete}. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_saas_runtime_rollout_kind#update GoogleSaasRuntimeRolloutKind#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_saas_runtime_rollout_kind#create GoogleSaasRuntimeRolloutKind#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_saas_runtime_rollout_kind#delete GoogleSaasRuntimeRolloutKind#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_saas_runtime_rollout_kind#update GoogleSaasRuntimeRolloutKind#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleSaasRuntimeRolloutKindErrorBudgetOutputReference <a name="GoogleSaasRuntimeRolloutKindErrorBudgetOutputReference" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindErrorBudgetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindErrorBudgetOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_saas_runtime_rollout_kind.GoogleSaasRuntimeRolloutKindErrorBudgetOutputReference;

new GoogleSaasRuntimeRolloutKindErrorBudgetOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindErrorBudgetOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindErrorBudgetOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindErrorBudgetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindErrorBudgetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindErrorBudgetOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindErrorBudgetOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindErrorBudgetOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindErrorBudgetOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindErrorBudgetOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindErrorBudgetOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindErrorBudgetOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindErrorBudgetOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindErrorBudgetOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindErrorBudgetOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindErrorBudgetOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindErrorBudgetOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindErrorBudgetOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindErrorBudgetOutputReference.resetAllowedCount">resetAllowedCount</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindErrorBudgetOutputReference.resetAllowedPercentage">resetAllowedPercentage</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindErrorBudgetOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindErrorBudgetOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindErrorBudgetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindErrorBudgetOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindErrorBudgetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindErrorBudgetOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindErrorBudgetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindErrorBudgetOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindErrorBudgetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindErrorBudgetOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindErrorBudgetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindErrorBudgetOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindErrorBudgetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindErrorBudgetOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindErrorBudgetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindErrorBudgetOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindErrorBudgetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindErrorBudgetOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindErrorBudgetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindErrorBudgetOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindErrorBudgetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindErrorBudgetOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindErrorBudgetOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindErrorBudgetOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAllowedCount` <a name="resetAllowedCount" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindErrorBudgetOutputReference.resetAllowedCount"></a>

```java
public void resetAllowedCount()
```

##### `resetAllowedPercentage` <a name="resetAllowedPercentage" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindErrorBudgetOutputReference.resetAllowedPercentage"></a>

```java
public void resetAllowedPercentage()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindErrorBudgetOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindErrorBudgetOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindErrorBudgetOutputReference.property.allowedCountInput">allowedCountInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindErrorBudgetOutputReference.property.allowedPercentageInput">allowedPercentageInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindErrorBudgetOutputReference.property.allowedCount">allowedCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindErrorBudgetOutputReference.property.allowedPercentage">allowedPercentage</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindErrorBudgetOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindErrorBudget">GoogleSaasRuntimeRolloutKindErrorBudget</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindErrorBudgetOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindErrorBudgetOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `allowedCountInput`<sup>Optional</sup> <a name="allowedCountInput" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindErrorBudgetOutputReference.property.allowedCountInput"></a>

```java
public java.lang.Number getAllowedCountInput();
```

- *Type:* java.lang.Number

---

##### `allowedPercentageInput`<sup>Optional</sup> <a name="allowedPercentageInput" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindErrorBudgetOutputReference.property.allowedPercentageInput"></a>

```java
public java.lang.Number getAllowedPercentageInput();
```

- *Type:* java.lang.Number

---

##### `allowedCount`<sup>Required</sup> <a name="allowedCount" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindErrorBudgetOutputReference.property.allowedCount"></a>

```java
public java.lang.Number getAllowedCount();
```

- *Type:* java.lang.Number

---

##### `allowedPercentage`<sup>Required</sup> <a name="allowedPercentage" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindErrorBudgetOutputReference.property.allowedPercentage"></a>

```java
public java.lang.Number getAllowedPercentage();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindErrorBudgetOutputReference.property.internalValue"></a>

```java
public GoogleSaasRuntimeRolloutKindErrorBudget getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindErrorBudget">GoogleSaasRuntimeRolloutKindErrorBudget</a>

---


### GoogleSaasRuntimeRolloutKindTimeoutsOutputReference <a name="GoogleSaasRuntimeRolloutKindTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindTimeoutsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_saas_runtime_rollout_kind.GoogleSaasRuntimeRolloutKindTimeoutsOutputReference;

new GoogleSaasRuntimeRolloutKindTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindTimeouts">GoogleSaasRuntimeRolloutKindTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindTimeoutsOutputReference.property.internalValue"></a>

```java
public IResolvable|GoogleSaasRuntimeRolloutKindTimeouts getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleSaasRuntimeRolloutKind.GoogleSaasRuntimeRolloutKindTimeouts">GoogleSaasRuntimeRolloutKindTimeouts</a>

---



