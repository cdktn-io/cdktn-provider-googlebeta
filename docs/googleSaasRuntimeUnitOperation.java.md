# `googleSaasRuntimeUnitOperation` Submodule <a name="`googleSaasRuntimeUnitOperation` Submodule" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleSaasRuntimeUnitOperation <a name="GoogleSaasRuntimeUnitOperation" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_saas_runtime_unit_operation google_saas_runtime_unit_operation}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_saas_runtime_unit_operation.GoogleSaasRuntimeUnitOperation;

GoogleSaasRuntimeUnitOperation.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .location(java.lang.String)
    .unit(java.lang.String)
    .unitOperationId(java.lang.String)
//  .annotations(java.util.Map<java.lang.String, java.lang.String>)
//  .deprovision(GoogleSaasRuntimeUnitOperationDeprovision)
//  .id(java.lang.String)
//  .labels(java.util.Map<java.lang.String, java.lang.String>)
//  .project(java.lang.String)
//  .provision(GoogleSaasRuntimeUnitOperationProvision)
//  .timeouts(GoogleSaasRuntimeUnitOperationTimeouts)
//  .upgrade(GoogleSaasRuntimeUnitOperationUpgrade)
//  .waitForCompletion(java.lang.Boolean|IResolvable)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.Initializer.parameter.location">location</a></code> | <code>java.lang.String</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.Initializer.parameter.unit">unit</a></code> | <code>java.lang.String</code> | The Unit a given UnitOperation will act upon. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.Initializer.parameter.unitOperationId">unitOperationId</a></code> | <code>java.lang.String</code> | The ID value for the new unit operation. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.Initializer.parameter.annotations">annotations</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Annotations is an unstructured key-value map stored with a resource that may be set by external tools to store and retrieve arbitrary metadata. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.Initializer.parameter.deprovision">deprovision</a></code> | <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationDeprovision">GoogleSaasRuntimeUnitOperationDeprovision</a></code> | deprovision block. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_saas_runtime_unit_operation#id GoogleSaasRuntimeUnitOperation#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.Initializer.parameter.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | The labels on the resource, which can be used for categorization. similar to Kubernetes resource labels. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_saas_runtime_unit_operation#project GoogleSaasRuntimeUnitOperation#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.Initializer.parameter.provision">provision</a></code> | <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvision">GoogleSaasRuntimeUnitOperationProvision</a></code> | provision block. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationTimeouts">GoogleSaasRuntimeUnitOperationTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.Initializer.parameter.upgrade">upgrade</a></code> | <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgrade">GoogleSaasRuntimeUnitOperationUpgrade</a></code> | upgrade block. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.Initializer.parameter.waitForCompletion">waitForCompletion</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | If true, wait for the UnitOperation to reach a terminal state (SUCCEEDED, FAILED, CANCELLED) before completing the apply. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.Initializer.parameter.location"></a>

- *Type:* java.lang.String

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_saas_runtime_unit_operation#location GoogleSaasRuntimeUnitOperation#location}

---

##### `unit`<sup>Required</sup> <a name="unit" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.Initializer.parameter.unit"></a>

- *Type:* java.lang.String

The Unit a given UnitOperation will act upon.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_saas_runtime_unit_operation#unit GoogleSaasRuntimeUnitOperation#unit}

---

##### `unitOperationId`<sup>Required</sup> <a name="unitOperationId" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.Initializer.parameter.unitOperationId"></a>

- *Type:* java.lang.String

The ID value for the new unit operation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_saas_runtime_unit_operation#unit_operation_id GoogleSaasRuntimeUnitOperation#unit_operation_id}

---

##### `annotations`<sup>Optional</sup> <a name="annotations" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.Initializer.parameter.annotations"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Annotations is an unstructured key-value map stored with a resource that may be set by external tools to store and retrieve arbitrary metadata.

They are not queryable and should be preserved when modifying objects.

More info: https://kubernetes.io/docs/user-guide/annotations

**Note**: This field is non-authoritative, and will only manage the annotations present in your configuration.
Please refer to the field 'effective_annotations' for all of the annotations present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_saas_runtime_unit_operation#annotations GoogleSaasRuntimeUnitOperation#annotations}

---

##### `deprovision`<sup>Optional</sup> <a name="deprovision" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.Initializer.parameter.deprovision"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationDeprovision">GoogleSaasRuntimeUnitOperationDeprovision</a>

deprovision block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_saas_runtime_unit_operation#deprovision GoogleSaasRuntimeUnitOperation#deprovision}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_saas_runtime_unit_operation#id GoogleSaasRuntimeUnitOperation#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.Initializer.parameter.labels"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

The labels on the resource, which can be used for categorization. similar to Kubernetes resource labels.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_saas_runtime_unit_operation#labels GoogleSaasRuntimeUnitOperation#labels}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.Initializer.parameter.project"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_saas_runtime_unit_operation#project GoogleSaasRuntimeUnitOperation#project}.

---

##### `provision`<sup>Optional</sup> <a name="provision" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.Initializer.parameter.provision"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvision">GoogleSaasRuntimeUnitOperationProvision</a>

provision block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_saas_runtime_unit_operation#provision GoogleSaasRuntimeUnitOperation#provision}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationTimeouts">GoogleSaasRuntimeUnitOperationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_saas_runtime_unit_operation#timeouts GoogleSaasRuntimeUnitOperation#timeouts}

---

##### `upgrade`<sup>Optional</sup> <a name="upgrade" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.Initializer.parameter.upgrade"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgrade">GoogleSaasRuntimeUnitOperationUpgrade</a>

upgrade block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_saas_runtime_unit_operation#upgrade GoogleSaasRuntimeUnitOperation#upgrade}

---

##### `waitForCompletion`<sup>Optional</sup> <a name="waitForCompletion" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.Initializer.parameter.waitForCompletion"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

If true, wait for the UnitOperation to reach a terminal state (SUCCEEDED, FAILED, CANCELLED) before completing the apply.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_saas_runtime_unit_operation#wait_for_completion GoogleSaasRuntimeUnitOperation#wait_for_completion}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.putDeprovision">putDeprovision</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.putProvision">putProvision</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.putUpgrade">putUpgrade</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.resetAnnotations">resetAnnotations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.resetDeprovision">resetDeprovision</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.resetProvision">resetProvision</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.resetUpgrade">resetUpgrade</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.resetWaitForCompletion">resetWaitForCompletion</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putDeprovision` <a name="putDeprovision" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.putDeprovision"></a>

```java
public void putDeprovision(GoogleSaasRuntimeUnitOperationDeprovision value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.putDeprovision.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationDeprovision">GoogleSaasRuntimeUnitOperationDeprovision</a>

---

##### `putProvision` <a name="putProvision" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.putProvision"></a>

```java
public void putProvision(GoogleSaasRuntimeUnitOperationProvision value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.putProvision.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvision">GoogleSaasRuntimeUnitOperationProvision</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.putTimeouts"></a>

```java
public void putTimeouts(GoogleSaasRuntimeUnitOperationTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationTimeouts">GoogleSaasRuntimeUnitOperationTimeouts</a>

---

##### `putUpgrade` <a name="putUpgrade" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.putUpgrade"></a>

```java
public void putUpgrade(GoogleSaasRuntimeUnitOperationUpgrade value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.putUpgrade.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgrade">GoogleSaasRuntimeUnitOperationUpgrade</a>

---

##### `resetAnnotations` <a name="resetAnnotations" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.resetAnnotations"></a>

```java
public void resetAnnotations()
```

##### `resetDeprovision` <a name="resetDeprovision" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.resetDeprovision"></a>

```java
public void resetDeprovision()
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.resetId"></a>

```java
public void resetId()
```

##### `resetLabels` <a name="resetLabels" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.resetLabels"></a>

```java
public void resetLabels()
```

##### `resetProject` <a name="resetProject" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.resetProject"></a>

```java
public void resetProject()
```

##### `resetProvision` <a name="resetProvision" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.resetProvision"></a>

```java
public void resetProvision()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.resetTimeouts"></a>

```java
public void resetTimeouts()
```

##### `resetUpgrade` <a name="resetUpgrade" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.resetUpgrade"></a>

```java
public void resetUpgrade()
```

##### `resetWaitForCompletion` <a name="resetWaitForCompletion" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.resetWaitForCompletion"></a>

```java
public void resetWaitForCompletion()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a GoogleSaasRuntimeUnitOperation resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.isConstruct"></a>

```java
import io.cdktn.providers.google_beta.google_saas_runtime_unit_operation.GoogleSaasRuntimeUnitOperation;

GoogleSaasRuntimeUnitOperation.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.isTerraformElement"></a>

```java
import io.cdktn.providers.google_beta.google_saas_runtime_unit_operation.GoogleSaasRuntimeUnitOperation;

GoogleSaasRuntimeUnitOperation.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.isTerraformResource"></a>

```java
import io.cdktn.providers.google_beta.google_saas_runtime_unit_operation.GoogleSaasRuntimeUnitOperation;

GoogleSaasRuntimeUnitOperation.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.generateConfigForImport"></a>

```java
import io.cdktn.providers.google_beta.google_saas_runtime_unit_operation.GoogleSaasRuntimeUnitOperation;

GoogleSaasRuntimeUnitOperation.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),GoogleSaasRuntimeUnitOperation.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a GoogleSaasRuntimeUnitOperation resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the GoogleSaasRuntimeUnitOperation to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing GoogleSaasRuntimeUnitOperation that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_saas_runtime_unit_operation#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the GoogleSaasRuntimeUnitOperation to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.property.conditions">conditions</a></code> | <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationConditionsList">GoogleSaasRuntimeUnitOperationConditionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.property.createTime">createTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.property.deprovision">deprovision</a></code> | <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationDeprovisionOutputReference">GoogleSaasRuntimeUnitOperationDeprovisionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.property.effectiveAnnotations">effectiveAnnotations</a></code> | <code>io.cdktn.cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.property.effectiveLabels">effectiveLabels</a></code> | <code>io.cdktn.cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.property.engineState">engineState</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.property.errorCategory">errorCategory</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.property.etag">etag</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.property.provision">provision</a></code> | <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionOutputReference">GoogleSaasRuntimeUnitOperationProvisionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.property.terraformLabels">terraformLabels</a></code> | <code>io.cdktn.cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationTimeoutsOutputReference">GoogleSaasRuntimeUnitOperationTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.property.uid">uid</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.property.updateTime">updateTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.property.upgrade">upgrade</a></code> | <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeOutputReference">GoogleSaasRuntimeUnitOperationUpgradeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.property.annotationsInput">annotationsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.property.deprovisionInput">deprovisionInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationDeprovision">GoogleSaasRuntimeUnitOperationDeprovision</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.property.labelsInput">labelsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.property.locationInput">locationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.property.provisionInput">provisionInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvision">GoogleSaasRuntimeUnitOperationProvision</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.property.timeoutsInput">timeoutsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationTimeouts">GoogleSaasRuntimeUnitOperationTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.property.unitInput">unitInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.property.unitOperationIdInput">unitOperationIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.property.upgradeInput">upgradeInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgrade">GoogleSaasRuntimeUnitOperationUpgrade</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.property.waitForCompletionInput">waitForCompletionInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.property.annotations">annotations</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.property.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.property.unit">unit</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.property.unitOperationId">unitOperationId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.property.waitForCompletion">waitForCompletion</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `conditions`<sup>Required</sup> <a name="conditions" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.property.conditions"></a>

```java
public GoogleSaasRuntimeUnitOperationConditionsList getConditions();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationConditionsList">GoogleSaasRuntimeUnitOperationConditionsList</a>

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.property.createTime"></a>

```java
public java.lang.String getCreateTime();
```

- *Type:* java.lang.String

---

##### `deprovision`<sup>Required</sup> <a name="deprovision" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.property.deprovision"></a>

```java
public GoogleSaasRuntimeUnitOperationDeprovisionOutputReference getDeprovision();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationDeprovisionOutputReference">GoogleSaasRuntimeUnitOperationDeprovisionOutputReference</a>

---

##### `effectiveAnnotations`<sup>Required</sup> <a name="effectiveAnnotations" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.property.effectiveAnnotations"></a>

```java
public StringMap getEffectiveAnnotations();
```

- *Type:* io.cdktn.cdktn.StringMap

---

##### `effectiveLabels`<sup>Required</sup> <a name="effectiveLabels" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.property.effectiveLabels"></a>

```java
public StringMap getEffectiveLabels();
```

- *Type:* io.cdktn.cdktn.StringMap

---

##### `engineState`<sup>Required</sup> <a name="engineState" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.property.engineState"></a>

```java
public java.lang.String getEngineState();
```

- *Type:* java.lang.String

---

##### `errorCategory`<sup>Required</sup> <a name="errorCategory" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.property.errorCategory"></a>

```java
public java.lang.String getErrorCategory();
```

- *Type:* java.lang.String

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.property.etag"></a>

```java
public java.lang.String getEtag();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `provision`<sup>Required</sup> <a name="provision" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.property.provision"></a>

```java
public GoogleSaasRuntimeUnitOperationProvisionOutputReference getProvision();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionOutputReference">GoogleSaasRuntimeUnitOperationProvisionOutputReference</a>

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `terraformLabels`<sup>Required</sup> <a name="terraformLabels" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.property.terraformLabels"></a>

```java
public StringMap getTerraformLabels();
```

- *Type:* io.cdktn.cdktn.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.property.timeouts"></a>

```java
public GoogleSaasRuntimeUnitOperationTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationTimeoutsOutputReference">GoogleSaasRuntimeUnitOperationTimeoutsOutputReference</a>

---

##### `uid`<sup>Required</sup> <a name="uid" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.property.uid"></a>

```java
public java.lang.String getUid();
```

- *Type:* java.lang.String

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.property.updateTime"></a>

```java
public java.lang.String getUpdateTime();
```

- *Type:* java.lang.String

---

##### `upgrade`<sup>Required</sup> <a name="upgrade" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.property.upgrade"></a>

```java
public GoogleSaasRuntimeUnitOperationUpgradeOutputReference getUpgrade();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeOutputReference">GoogleSaasRuntimeUnitOperationUpgradeOutputReference</a>

---

##### `annotationsInput`<sup>Optional</sup> <a name="annotationsInput" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.property.annotationsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getAnnotationsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `deprovisionInput`<sup>Optional</sup> <a name="deprovisionInput" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.property.deprovisionInput"></a>

```java
public GoogleSaasRuntimeUnitOperationDeprovision getDeprovisionInput();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationDeprovision">GoogleSaasRuntimeUnitOperationDeprovision</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.property.labelsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabelsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.property.locationInput"></a>

```java
public java.lang.String getLocationInput();
```

- *Type:* java.lang.String

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `provisionInput`<sup>Optional</sup> <a name="provisionInput" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.property.provisionInput"></a>

```java
public GoogleSaasRuntimeUnitOperationProvision getProvisionInput();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvision">GoogleSaasRuntimeUnitOperationProvision</a>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.property.timeoutsInput"></a>

```java
public IResolvable|GoogleSaasRuntimeUnitOperationTimeouts getTimeoutsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationTimeouts">GoogleSaasRuntimeUnitOperationTimeouts</a>

---

##### `unitInput`<sup>Optional</sup> <a name="unitInput" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.property.unitInput"></a>

```java
public java.lang.String getUnitInput();
```

- *Type:* java.lang.String

---

##### `unitOperationIdInput`<sup>Optional</sup> <a name="unitOperationIdInput" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.property.unitOperationIdInput"></a>

```java
public java.lang.String getUnitOperationIdInput();
```

- *Type:* java.lang.String

---

##### `upgradeInput`<sup>Optional</sup> <a name="upgradeInput" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.property.upgradeInput"></a>

```java
public GoogleSaasRuntimeUnitOperationUpgrade getUpgradeInput();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgrade">GoogleSaasRuntimeUnitOperationUpgrade</a>

---

##### `waitForCompletionInput`<sup>Optional</sup> <a name="waitForCompletionInput" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.property.waitForCompletionInput"></a>

```java
public java.lang.Boolean|IResolvable getWaitForCompletionInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `annotations`<sup>Required</sup> <a name="annotations" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.property.annotations"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getAnnotations();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.property.labels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

##### `unit`<sup>Required</sup> <a name="unit" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.property.unit"></a>

```java
public java.lang.String getUnit();
```

- *Type:* java.lang.String

---

##### `unitOperationId`<sup>Required</sup> <a name="unitOperationId" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.property.unitOperationId"></a>

```java
public java.lang.String getUnitOperationId();
```

- *Type:* java.lang.String

---

##### `waitForCompletion`<sup>Required</sup> <a name="waitForCompletion" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.property.waitForCompletion"></a>

```java
public java.lang.Boolean|IResolvable getWaitForCompletion();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperation.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleSaasRuntimeUnitOperationConditions <a name="GoogleSaasRuntimeUnitOperationConditions" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationConditions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationConditions.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_saas_runtime_unit_operation.GoogleSaasRuntimeUnitOperationConditions;

GoogleSaasRuntimeUnitOperationConditions.builder()
    .build();
```


### GoogleSaasRuntimeUnitOperationConfig <a name="GoogleSaasRuntimeUnitOperationConfig" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationConfig.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_saas_runtime_unit_operation.GoogleSaasRuntimeUnitOperationConfig;

GoogleSaasRuntimeUnitOperationConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .location(java.lang.String)
    .unit(java.lang.String)
    .unitOperationId(java.lang.String)
//  .annotations(java.util.Map<java.lang.String, java.lang.String>)
//  .deprovision(GoogleSaasRuntimeUnitOperationDeprovision)
//  .id(java.lang.String)
//  .labels(java.util.Map<java.lang.String, java.lang.String>)
//  .project(java.lang.String)
//  .provision(GoogleSaasRuntimeUnitOperationProvision)
//  .timeouts(GoogleSaasRuntimeUnitOperationTimeouts)
//  .upgrade(GoogleSaasRuntimeUnitOperationUpgrade)
//  .waitForCompletion(java.lang.Boolean|IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationConfig.property.location">location</a></code> | <code>java.lang.String</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationConfig.property.unit">unit</a></code> | <code>java.lang.String</code> | The Unit a given UnitOperation will act upon. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationConfig.property.unitOperationId">unitOperationId</a></code> | <code>java.lang.String</code> | The ID value for the new unit operation. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationConfig.property.annotations">annotations</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Annotations is an unstructured key-value map stored with a resource that may be set by external tools to store and retrieve arbitrary metadata. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationConfig.property.deprovision">deprovision</a></code> | <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationDeprovision">GoogleSaasRuntimeUnitOperationDeprovision</a></code> | deprovision block. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_saas_runtime_unit_operation#id GoogleSaasRuntimeUnitOperation#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationConfig.property.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | The labels on the resource, which can be used for categorization. similar to Kubernetes resource labels. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationConfig.property.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_saas_runtime_unit_operation#project GoogleSaasRuntimeUnitOperation#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationConfig.property.provision">provision</a></code> | <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvision">GoogleSaasRuntimeUnitOperationProvision</a></code> | provision block. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationTimeouts">GoogleSaasRuntimeUnitOperationTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationConfig.property.upgrade">upgrade</a></code> | <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgrade">GoogleSaasRuntimeUnitOperationUpgrade</a></code> | upgrade block. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationConfig.property.waitForCompletion">waitForCompletion</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | If true, wait for the UnitOperation to reach a terminal state (SUCCEEDED, FAILED, CANCELLED) before completing the apply. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationConfig.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_saas_runtime_unit_operation#location GoogleSaasRuntimeUnitOperation#location}

---

##### `unit`<sup>Required</sup> <a name="unit" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationConfig.property.unit"></a>

```java
public java.lang.String getUnit();
```

- *Type:* java.lang.String

The Unit a given UnitOperation will act upon.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_saas_runtime_unit_operation#unit GoogleSaasRuntimeUnitOperation#unit}

---

##### `unitOperationId`<sup>Required</sup> <a name="unitOperationId" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationConfig.property.unitOperationId"></a>

```java
public java.lang.String getUnitOperationId();
```

- *Type:* java.lang.String

The ID value for the new unit operation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_saas_runtime_unit_operation#unit_operation_id GoogleSaasRuntimeUnitOperation#unit_operation_id}

---

##### `annotations`<sup>Optional</sup> <a name="annotations" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationConfig.property.annotations"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getAnnotations();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Annotations is an unstructured key-value map stored with a resource that may be set by external tools to store and retrieve arbitrary metadata.

They are not queryable and should be preserved when modifying objects.

More info: https://kubernetes.io/docs/user-guide/annotations

**Note**: This field is non-authoritative, and will only manage the annotations present in your configuration.
Please refer to the field 'effective_annotations' for all of the annotations present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_saas_runtime_unit_operation#annotations GoogleSaasRuntimeUnitOperation#annotations}

---

##### `deprovision`<sup>Optional</sup> <a name="deprovision" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationConfig.property.deprovision"></a>

```java
public GoogleSaasRuntimeUnitOperationDeprovision getDeprovision();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationDeprovision">GoogleSaasRuntimeUnitOperationDeprovision</a>

deprovision block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_saas_runtime_unit_operation#deprovision GoogleSaasRuntimeUnitOperation#deprovision}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_saas_runtime_unit_operation#id GoogleSaasRuntimeUnitOperation#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationConfig.property.labels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

The labels on the resource, which can be used for categorization. similar to Kubernetes resource labels.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_saas_runtime_unit_operation#labels GoogleSaasRuntimeUnitOperation#labels}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_saas_runtime_unit_operation#project GoogleSaasRuntimeUnitOperation#project}.

---

##### `provision`<sup>Optional</sup> <a name="provision" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationConfig.property.provision"></a>

```java
public GoogleSaasRuntimeUnitOperationProvision getProvision();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvision">GoogleSaasRuntimeUnitOperationProvision</a>

provision block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_saas_runtime_unit_operation#provision GoogleSaasRuntimeUnitOperation#provision}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationConfig.property.timeouts"></a>

```java
public GoogleSaasRuntimeUnitOperationTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationTimeouts">GoogleSaasRuntimeUnitOperationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_saas_runtime_unit_operation#timeouts GoogleSaasRuntimeUnitOperation#timeouts}

---

##### `upgrade`<sup>Optional</sup> <a name="upgrade" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationConfig.property.upgrade"></a>

```java
public GoogleSaasRuntimeUnitOperationUpgrade getUpgrade();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgrade">GoogleSaasRuntimeUnitOperationUpgrade</a>

upgrade block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_saas_runtime_unit_operation#upgrade GoogleSaasRuntimeUnitOperation#upgrade}

---

##### `waitForCompletion`<sup>Optional</sup> <a name="waitForCompletion" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationConfig.property.waitForCompletion"></a>

```java
public java.lang.Boolean|IResolvable getWaitForCompletion();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

If true, wait for the UnitOperation to reach a terminal state (SUCCEEDED, FAILED, CANCELLED) before completing the apply.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_saas_runtime_unit_operation#wait_for_completion GoogleSaasRuntimeUnitOperation#wait_for_completion}

---

### GoogleSaasRuntimeUnitOperationDeprovision <a name="GoogleSaasRuntimeUnitOperationDeprovision" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationDeprovision"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationDeprovision.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_saas_runtime_unit_operation.GoogleSaasRuntimeUnitOperationDeprovision;

GoogleSaasRuntimeUnitOperationDeprovision.builder()
    .build();
```


### GoogleSaasRuntimeUnitOperationProvision <a name="GoogleSaasRuntimeUnitOperationProvision" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvision"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvision.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_saas_runtime_unit_operation.GoogleSaasRuntimeUnitOperationProvision;

GoogleSaasRuntimeUnitOperationProvision.builder()
//  .inputVariables(IResolvable|java.util.List<GoogleSaasRuntimeUnitOperationProvisionInputVariables>)
//  .release(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvision.property.inputVariables">inputVariables</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionInputVariables">GoogleSaasRuntimeUnitOperationProvisionInputVariables</a>></code> | input_variables block. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvision.property.release">release</a></code> | <code>java.lang.String</code> | Reference to the Release object to use for the Unit. (optional). |

---

##### `inputVariables`<sup>Optional</sup> <a name="inputVariables" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvision.property.inputVariables"></a>

```java
public IResolvable|java.util.List<GoogleSaasRuntimeUnitOperationProvisionInputVariables> getInputVariables();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionInputVariables">GoogleSaasRuntimeUnitOperationProvisionInputVariables</a>>

input_variables block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_saas_runtime_unit_operation#input_variables GoogleSaasRuntimeUnitOperation#input_variables}

---

##### `release`<sup>Optional</sup> <a name="release" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvision.property.release"></a>

```java
public java.lang.String getRelease();
```

- *Type:* java.lang.String

Reference to the Release object to use for the Unit. (optional).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_saas_runtime_unit_operation#release GoogleSaasRuntimeUnitOperation#release}

---

### GoogleSaasRuntimeUnitOperationProvisionInputVariables <a name="GoogleSaasRuntimeUnitOperationProvisionInputVariables" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionInputVariables"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionInputVariables.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_saas_runtime_unit_operation.GoogleSaasRuntimeUnitOperationProvisionInputVariables;

GoogleSaasRuntimeUnitOperationProvisionInputVariables.builder()
    .variable(java.lang.String)
//  .type(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionInputVariables.property.variable">variable</a></code> | <code>java.lang.String</code> | Name of the variable from actuation configs. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionInputVariables.property.type">type</a></code> | <code>java.lang.String</code> | Name of a supported variable type. Supported types are string, int, bool. Possible values: STRING INT BOOL. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionInputVariables.property.value">value</a></code> | <code>java.lang.String</code> | String encoded value for the variable. |

---

##### `variable`<sup>Required</sup> <a name="variable" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionInputVariables.property.variable"></a>

```java
public java.lang.String getVariable();
```

- *Type:* java.lang.String

Name of the variable from actuation configs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_saas_runtime_unit_operation#variable GoogleSaasRuntimeUnitOperation#variable}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionInputVariables.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

Name of a supported variable type. Supported types are string, int, bool. Possible values: STRING INT BOOL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_saas_runtime_unit_operation#type GoogleSaasRuntimeUnitOperation#type}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionInputVariables.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

String encoded value for the variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_saas_runtime_unit_operation#value GoogleSaasRuntimeUnitOperation#value}

---

### GoogleSaasRuntimeUnitOperationTimeouts <a name="GoogleSaasRuntimeUnitOperationTimeouts" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationTimeouts.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_saas_runtime_unit_operation.GoogleSaasRuntimeUnitOperationTimeouts;

GoogleSaasRuntimeUnitOperationTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_saas_runtime_unit_operation#create GoogleSaasRuntimeUnitOperation#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_saas_runtime_unit_operation#delete GoogleSaasRuntimeUnitOperation#delete}. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_saas_runtime_unit_operation#update GoogleSaasRuntimeUnitOperation#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_saas_runtime_unit_operation#create GoogleSaasRuntimeUnitOperation#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_saas_runtime_unit_operation#delete GoogleSaasRuntimeUnitOperation#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_saas_runtime_unit_operation#update GoogleSaasRuntimeUnitOperation#update}.

---

### GoogleSaasRuntimeUnitOperationUpgrade <a name="GoogleSaasRuntimeUnitOperationUpgrade" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgrade"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgrade.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_saas_runtime_unit_operation.GoogleSaasRuntimeUnitOperationUpgrade;

GoogleSaasRuntimeUnitOperationUpgrade.builder()
//  .inputVariables(IResolvable|java.util.List<GoogleSaasRuntimeUnitOperationUpgradeInputVariables>)
//  .release(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgrade.property.inputVariables">inputVariables</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeInputVariables">GoogleSaasRuntimeUnitOperationUpgradeInputVariables</a>></code> | input_variables block. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgrade.property.release">release</a></code> | <code>java.lang.String</code> | Reference to the Release object to use for the Unit. (optional). |

---

##### `inputVariables`<sup>Optional</sup> <a name="inputVariables" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgrade.property.inputVariables"></a>

```java
public IResolvable|java.util.List<GoogleSaasRuntimeUnitOperationUpgradeInputVariables> getInputVariables();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeInputVariables">GoogleSaasRuntimeUnitOperationUpgradeInputVariables</a>>

input_variables block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_saas_runtime_unit_operation#input_variables GoogleSaasRuntimeUnitOperation#input_variables}

---

##### `release`<sup>Optional</sup> <a name="release" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgrade.property.release"></a>

```java
public java.lang.String getRelease();
```

- *Type:* java.lang.String

Reference to the Release object to use for the Unit. (optional).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_saas_runtime_unit_operation#release GoogleSaasRuntimeUnitOperation#release}

---

### GoogleSaasRuntimeUnitOperationUpgradeInputVariables <a name="GoogleSaasRuntimeUnitOperationUpgradeInputVariables" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeInputVariables"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeInputVariables.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_saas_runtime_unit_operation.GoogleSaasRuntimeUnitOperationUpgradeInputVariables;

GoogleSaasRuntimeUnitOperationUpgradeInputVariables.builder()
    .variable(java.lang.String)
//  .type(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeInputVariables.property.variable">variable</a></code> | <code>java.lang.String</code> | Name of the variable from actuation configs. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeInputVariables.property.type">type</a></code> | <code>java.lang.String</code> | Name of a supported variable type. Supported types are string, int, bool. Possible values: STRING INT BOOL. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeInputVariables.property.value">value</a></code> | <code>java.lang.String</code> | String encoded value for the variable. |

---

##### `variable`<sup>Required</sup> <a name="variable" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeInputVariables.property.variable"></a>

```java
public java.lang.String getVariable();
```

- *Type:* java.lang.String

Name of the variable from actuation configs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_saas_runtime_unit_operation#variable GoogleSaasRuntimeUnitOperation#variable}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeInputVariables.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

Name of a supported variable type. Supported types are string, int, bool. Possible values: STRING INT BOOL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_saas_runtime_unit_operation#type GoogleSaasRuntimeUnitOperation#type}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeInputVariables.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

String encoded value for the variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_saas_runtime_unit_operation#value GoogleSaasRuntimeUnitOperation#value}

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleSaasRuntimeUnitOperationConditionsList <a name="GoogleSaasRuntimeUnitOperationConditionsList" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationConditionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationConditionsList.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_saas_runtime_unit_operation.GoogleSaasRuntimeUnitOperationConditionsList;

new GoogleSaasRuntimeUnitOperationConditionsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationConditionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationConditionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationConditionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationConditionsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationConditionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationConditionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationConditionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationConditionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationConditionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationConditionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationConditionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationConditionsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationConditionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationConditionsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationConditionsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationConditionsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationConditionsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationConditionsList.get"></a>

```java
public GoogleSaasRuntimeUnitOperationConditionsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationConditionsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationConditionsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationConditionsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationConditionsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationConditionsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### GoogleSaasRuntimeUnitOperationConditionsOutputReference <a name="GoogleSaasRuntimeUnitOperationConditionsOutputReference" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationConditionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationConditionsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_saas_runtime_unit_operation.GoogleSaasRuntimeUnitOperationConditionsOutputReference;

new GoogleSaasRuntimeUnitOperationConditionsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationConditionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationConditionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationConditionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationConditionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationConditionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationConditionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationConditionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationConditionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationConditionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationConditionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationConditionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationConditionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationConditionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationConditionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationConditionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationConditionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationConditionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationConditionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationConditionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationConditionsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationConditionsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationConditionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationConditionsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationConditionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationConditionsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationConditionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationConditionsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationConditionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationConditionsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationConditionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationConditionsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationConditionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationConditionsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationConditionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationConditionsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationConditionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationConditionsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationConditionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationConditionsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationConditionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationConditionsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationConditionsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationConditionsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationConditionsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationConditionsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationConditionsOutputReference.property.lastTransitionTime">lastTransitionTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationConditionsOutputReference.property.message">message</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationConditionsOutputReference.property.reason">reason</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationConditionsOutputReference.property.status">status</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationConditionsOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationConditionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationConditions">GoogleSaasRuntimeUnitOperationConditions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationConditionsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationConditionsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `lastTransitionTime`<sup>Required</sup> <a name="lastTransitionTime" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationConditionsOutputReference.property.lastTransitionTime"></a>

```java
public java.lang.String getLastTransitionTime();
```

- *Type:* java.lang.String

---

##### `message`<sup>Required</sup> <a name="message" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationConditionsOutputReference.property.message"></a>

```java
public java.lang.String getMessage();
```

- *Type:* java.lang.String

---

##### `reason`<sup>Required</sup> <a name="reason" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationConditionsOutputReference.property.reason"></a>

```java
public java.lang.String getReason();
```

- *Type:* java.lang.String

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationConditionsOutputReference.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationConditionsOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationConditionsOutputReference.property.internalValue"></a>

```java
public GoogleSaasRuntimeUnitOperationConditions getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationConditions">GoogleSaasRuntimeUnitOperationConditions</a>

---


### GoogleSaasRuntimeUnitOperationDeprovisionOutputReference <a name="GoogleSaasRuntimeUnitOperationDeprovisionOutputReference" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationDeprovisionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationDeprovisionOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_saas_runtime_unit_operation.GoogleSaasRuntimeUnitOperationDeprovisionOutputReference;

new GoogleSaasRuntimeUnitOperationDeprovisionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationDeprovisionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationDeprovisionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationDeprovisionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationDeprovisionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationDeprovisionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationDeprovisionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationDeprovisionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationDeprovisionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationDeprovisionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationDeprovisionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationDeprovisionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationDeprovisionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationDeprovisionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationDeprovisionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationDeprovisionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationDeprovisionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationDeprovisionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationDeprovisionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationDeprovisionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationDeprovisionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationDeprovisionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationDeprovisionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationDeprovisionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationDeprovisionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationDeprovisionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationDeprovisionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationDeprovisionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationDeprovisionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationDeprovisionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationDeprovisionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationDeprovisionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationDeprovisionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationDeprovisionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationDeprovisionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationDeprovisionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationDeprovisionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationDeprovisionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationDeprovisionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationDeprovisionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationDeprovisionOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationDeprovisionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationDeprovisionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationDeprovisionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationDeprovisionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationDeprovision">GoogleSaasRuntimeUnitOperationDeprovision</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationDeprovisionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationDeprovisionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationDeprovisionOutputReference.property.internalValue"></a>

```java
public GoogleSaasRuntimeUnitOperationDeprovision getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationDeprovision">GoogleSaasRuntimeUnitOperationDeprovision</a>

---


### GoogleSaasRuntimeUnitOperationProvisionInputVariablesList <a name="GoogleSaasRuntimeUnitOperationProvisionInputVariablesList" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionInputVariablesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionInputVariablesList.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_saas_runtime_unit_operation.GoogleSaasRuntimeUnitOperationProvisionInputVariablesList;

new GoogleSaasRuntimeUnitOperationProvisionInputVariablesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionInputVariablesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionInputVariablesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionInputVariablesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionInputVariablesList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionInputVariablesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionInputVariablesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionInputVariablesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionInputVariablesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionInputVariablesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionInputVariablesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionInputVariablesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionInputVariablesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionInputVariablesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionInputVariablesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionInputVariablesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionInputVariablesList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionInputVariablesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionInputVariablesList.get"></a>

```java
public GoogleSaasRuntimeUnitOperationProvisionInputVariablesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionInputVariablesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionInputVariablesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionInputVariablesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionInputVariablesList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionInputVariables">GoogleSaasRuntimeUnitOperationProvisionInputVariables</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionInputVariablesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionInputVariablesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionInputVariablesList.property.internalValue"></a>

```java
public IResolvable|java.util.List<GoogleSaasRuntimeUnitOperationProvisionInputVariables> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionInputVariables">GoogleSaasRuntimeUnitOperationProvisionInputVariables</a>>

---


### GoogleSaasRuntimeUnitOperationProvisionInputVariablesOutputReference <a name="GoogleSaasRuntimeUnitOperationProvisionInputVariablesOutputReference" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionInputVariablesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionInputVariablesOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_saas_runtime_unit_operation.GoogleSaasRuntimeUnitOperationProvisionInputVariablesOutputReference;

new GoogleSaasRuntimeUnitOperationProvisionInputVariablesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionInputVariablesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionInputVariablesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionInputVariablesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionInputVariablesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionInputVariablesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionInputVariablesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionInputVariablesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionInputVariablesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionInputVariablesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionInputVariablesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionInputVariablesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionInputVariablesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionInputVariablesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionInputVariablesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionInputVariablesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionInputVariablesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionInputVariablesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionInputVariablesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionInputVariablesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionInputVariablesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionInputVariablesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionInputVariablesOutputReference.resetType">resetType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionInputVariablesOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionInputVariablesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionInputVariablesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionInputVariablesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionInputVariablesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionInputVariablesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionInputVariablesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionInputVariablesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionInputVariablesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionInputVariablesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionInputVariablesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionInputVariablesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionInputVariablesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionInputVariablesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionInputVariablesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionInputVariablesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionInputVariablesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionInputVariablesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionInputVariablesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionInputVariablesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionInputVariablesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionInputVariablesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionInputVariablesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionInputVariablesOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionInputVariablesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetType` <a name="resetType" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionInputVariablesOutputReference.resetType"></a>

```java
public void resetType()
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionInputVariablesOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionInputVariablesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionInputVariablesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionInputVariablesOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionInputVariablesOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionInputVariablesOutputReference.property.variableInput">variableInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionInputVariablesOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionInputVariablesOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionInputVariablesOutputReference.property.variable">variable</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionInputVariablesOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionInputVariables">GoogleSaasRuntimeUnitOperationProvisionInputVariables</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionInputVariablesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionInputVariablesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionInputVariablesOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionInputVariablesOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `variableInput`<sup>Optional</sup> <a name="variableInput" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionInputVariablesOutputReference.property.variableInput"></a>

```java
public java.lang.String getVariableInput();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionInputVariablesOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionInputVariablesOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `variable`<sup>Required</sup> <a name="variable" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionInputVariablesOutputReference.property.variable"></a>

```java
public java.lang.String getVariable();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionInputVariablesOutputReference.property.internalValue"></a>

```java
public IResolvable|GoogleSaasRuntimeUnitOperationProvisionInputVariables getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionInputVariables">GoogleSaasRuntimeUnitOperationProvisionInputVariables</a>

---


### GoogleSaasRuntimeUnitOperationProvisionOutputReference <a name="GoogleSaasRuntimeUnitOperationProvisionOutputReference" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_saas_runtime_unit_operation.GoogleSaasRuntimeUnitOperationProvisionOutputReference;

new GoogleSaasRuntimeUnitOperationProvisionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionOutputReference.putInputVariables">putInputVariables</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionOutputReference.resetInputVariables">resetInputVariables</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionOutputReference.resetRelease">resetRelease</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putInputVariables` <a name="putInputVariables" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionOutputReference.putInputVariables"></a>

```java
public void putInputVariables(IResolvable|java.util.List<GoogleSaasRuntimeUnitOperationProvisionInputVariables> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionOutputReference.putInputVariables.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionInputVariables">GoogleSaasRuntimeUnitOperationProvisionInputVariables</a>>

---

##### `resetInputVariables` <a name="resetInputVariables" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionOutputReference.resetInputVariables"></a>

```java
public void resetInputVariables()
```

##### `resetRelease` <a name="resetRelease" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionOutputReference.resetRelease"></a>

```java
public void resetRelease()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionOutputReference.property.inputVariables">inputVariables</a></code> | <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionInputVariablesList">GoogleSaasRuntimeUnitOperationProvisionInputVariablesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionOutputReference.property.inputVariablesInput">inputVariablesInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionInputVariables">GoogleSaasRuntimeUnitOperationProvisionInputVariables</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionOutputReference.property.releaseInput">releaseInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionOutputReference.property.release">release</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvision">GoogleSaasRuntimeUnitOperationProvision</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `inputVariables`<sup>Required</sup> <a name="inputVariables" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionOutputReference.property.inputVariables"></a>

```java
public GoogleSaasRuntimeUnitOperationProvisionInputVariablesList getInputVariables();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionInputVariablesList">GoogleSaasRuntimeUnitOperationProvisionInputVariablesList</a>

---

##### `inputVariablesInput`<sup>Optional</sup> <a name="inputVariablesInput" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionOutputReference.property.inputVariablesInput"></a>

```java
public IResolvable|java.util.List<GoogleSaasRuntimeUnitOperationProvisionInputVariables> getInputVariablesInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionInputVariables">GoogleSaasRuntimeUnitOperationProvisionInputVariables</a>>

---

##### `releaseInput`<sup>Optional</sup> <a name="releaseInput" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionOutputReference.property.releaseInput"></a>

```java
public java.lang.String getReleaseInput();
```

- *Type:* java.lang.String

---

##### `release`<sup>Required</sup> <a name="release" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionOutputReference.property.release"></a>

```java
public java.lang.String getRelease();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvisionOutputReference.property.internalValue"></a>

```java
public GoogleSaasRuntimeUnitOperationProvision getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationProvision">GoogleSaasRuntimeUnitOperationProvision</a>

---


### GoogleSaasRuntimeUnitOperationTimeoutsOutputReference <a name="GoogleSaasRuntimeUnitOperationTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationTimeoutsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_saas_runtime_unit_operation.GoogleSaasRuntimeUnitOperationTimeoutsOutputReference;

new GoogleSaasRuntimeUnitOperationTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationTimeouts">GoogleSaasRuntimeUnitOperationTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationTimeoutsOutputReference.property.internalValue"></a>

```java
public IResolvable|GoogleSaasRuntimeUnitOperationTimeouts getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationTimeouts">GoogleSaasRuntimeUnitOperationTimeouts</a>

---


### GoogleSaasRuntimeUnitOperationUpgradeInputVariablesList <a name="GoogleSaasRuntimeUnitOperationUpgradeInputVariablesList" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeInputVariablesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeInputVariablesList.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_saas_runtime_unit_operation.GoogleSaasRuntimeUnitOperationUpgradeInputVariablesList;

new GoogleSaasRuntimeUnitOperationUpgradeInputVariablesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeInputVariablesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeInputVariablesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeInputVariablesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeInputVariablesList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeInputVariablesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeInputVariablesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeInputVariablesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeInputVariablesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeInputVariablesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeInputVariablesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeInputVariablesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeInputVariablesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeInputVariablesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeInputVariablesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeInputVariablesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeInputVariablesList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeInputVariablesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeInputVariablesList.get"></a>

```java
public GoogleSaasRuntimeUnitOperationUpgradeInputVariablesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeInputVariablesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeInputVariablesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeInputVariablesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeInputVariablesList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeInputVariables">GoogleSaasRuntimeUnitOperationUpgradeInputVariables</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeInputVariablesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeInputVariablesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeInputVariablesList.property.internalValue"></a>

```java
public IResolvable|java.util.List<GoogleSaasRuntimeUnitOperationUpgradeInputVariables> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeInputVariables">GoogleSaasRuntimeUnitOperationUpgradeInputVariables</a>>

---


### GoogleSaasRuntimeUnitOperationUpgradeInputVariablesOutputReference <a name="GoogleSaasRuntimeUnitOperationUpgradeInputVariablesOutputReference" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeInputVariablesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeInputVariablesOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_saas_runtime_unit_operation.GoogleSaasRuntimeUnitOperationUpgradeInputVariablesOutputReference;

new GoogleSaasRuntimeUnitOperationUpgradeInputVariablesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeInputVariablesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeInputVariablesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeInputVariablesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeInputVariablesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeInputVariablesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeInputVariablesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeInputVariablesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeInputVariablesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeInputVariablesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeInputVariablesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeInputVariablesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeInputVariablesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeInputVariablesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeInputVariablesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeInputVariablesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeInputVariablesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeInputVariablesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeInputVariablesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeInputVariablesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeInputVariablesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeInputVariablesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeInputVariablesOutputReference.resetType">resetType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeInputVariablesOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeInputVariablesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeInputVariablesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeInputVariablesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeInputVariablesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeInputVariablesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeInputVariablesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeInputVariablesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeInputVariablesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeInputVariablesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeInputVariablesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeInputVariablesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeInputVariablesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeInputVariablesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeInputVariablesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeInputVariablesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeInputVariablesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeInputVariablesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeInputVariablesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeInputVariablesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeInputVariablesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeInputVariablesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeInputVariablesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeInputVariablesOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeInputVariablesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetType` <a name="resetType" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeInputVariablesOutputReference.resetType"></a>

```java
public void resetType()
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeInputVariablesOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeInputVariablesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeInputVariablesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeInputVariablesOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeInputVariablesOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeInputVariablesOutputReference.property.variableInput">variableInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeInputVariablesOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeInputVariablesOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeInputVariablesOutputReference.property.variable">variable</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeInputVariablesOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeInputVariables">GoogleSaasRuntimeUnitOperationUpgradeInputVariables</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeInputVariablesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeInputVariablesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeInputVariablesOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeInputVariablesOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `variableInput`<sup>Optional</sup> <a name="variableInput" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeInputVariablesOutputReference.property.variableInput"></a>

```java
public java.lang.String getVariableInput();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeInputVariablesOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeInputVariablesOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `variable`<sup>Required</sup> <a name="variable" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeInputVariablesOutputReference.property.variable"></a>

```java
public java.lang.String getVariable();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeInputVariablesOutputReference.property.internalValue"></a>

```java
public IResolvable|GoogleSaasRuntimeUnitOperationUpgradeInputVariables getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeInputVariables">GoogleSaasRuntimeUnitOperationUpgradeInputVariables</a>

---


### GoogleSaasRuntimeUnitOperationUpgradeOutputReference <a name="GoogleSaasRuntimeUnitOperationUpgradeOutputReference" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_saas_runtime_unit_operation.GoogleSaasRuntimeUnitOperationUpgradeOutputReference;

new GoogleSaasRuntimeUnitOperationUpgradeOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeOutputReference.putInputVariables">putInputVariables</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeOutputReference.resetInputVariables">resetInputVariables</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeOutputReference.resetRelease">resetRelease</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putInputVariables` <a name="putInputVariables" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeOutputReference.putInputVariables"></a>

```java
public void putInputVariables(IResolvable|java.util.List<GoogleSaasRuntimeUnitOperationUpgradeInputVariables> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeOutputReference.putInputVariables.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeInputVariables">GoogleSaasRuntimeUnitOperationUpgradeInputVariables</a>>

---

##### `resetInputVariables` <a name="resetInputVariables" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeOutputReference.resetInputVariables"></a>

```java
public void resetInputVariables()
```

##### `resetRelease` <a name="resetRelease" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeOutputReference.resetRelease"></a>

```java
public void resetRelease()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeOutputReference.property.inputVariables">inputVariables</a></code> | <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeInputVariablesList">GoogleSaasRuntimeUnitOperationUpgradeInputVariablesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeOutputReference.property.inputVariablesInput">inputVariablesInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeInputVariables">GoogleSaasRuntimeUnitOperationUpgradeInputVariables</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeOutputReference.property.releaseInput">releaseInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeOutputReference.property.release">release</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgrade">GoogleSaasRuntimeUnitOperationUpgrade</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `inputVariables`<sup>Required</sup> <a name="inputVariables" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeOutputReference.property.inputVariables"></a>

```java
public GoogleSaasRuntimeUnitOperationUpgradeInputVariablesList getInputVariables();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeInputVariablesList">GoogleSaasRuntimeUnitOperationUpgradeInputVariablesList</a>

---

##### `inputVariablesInput`<sup>Optional</sup> <a name="inputVariablesInput" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeOutputReference.property.inputVariablesInput"></a>

```java
public IResolvable|java.util.List<GoogleSaasRuntimeUnitOperationUpgradeInputVariables> getInputVariablesInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeInputVariables">GoogleSaasRuntimeUnitOperationUpgradeInputVariables</a>>

---

##### `releaseInput`<sup>Optional</sup> <a name="releaseInput" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeOutputReference.property.releaseInput"></a>

```java
public java.lang.String getReleaseInput();
```

- *Type:* java.lang.String

---

##### `release`<sup>Required</sup> <a name="release" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeOutputReference.property.release"></a>

```java
public java.lang.String getRelease();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgradeOutputReference.property.internalValue"></a>

```java
public GoogleSaasRuntimeUnitOperationUpgrade getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitOperation.GoogleSaasRuntimeUnitOperationUpgrade">GoogleSaasRuntimeUnitOperationUpgrade</a>

---



