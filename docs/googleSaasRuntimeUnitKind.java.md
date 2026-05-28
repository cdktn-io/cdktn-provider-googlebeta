# `googleSaasRuntimeUnitKind` Submodule <a name="`googleSaasRuntimeUnitKind` Submodule" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleSaasRuntimeUnitKind <a name="GoogleSaasRuntimeUnitKind" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_saas_runtime_unit_kind google_saas_runtime_unit_kind}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_saas_runtime_unit_kind.GoogleSaasRuntimeUnitKind;

GoogleSaasRuntimeUnitKind.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .location(java.lang.String)
    .saas(java.lang.String)
    .unitKindId(java.lang.String)
//  .annotations(java.util.Map<java.lang.String, java.lang.String>)
//  .defaultRelease(java.lang.String)
//  .deletionPolicy(java.lang.String)
//  .dependencies(IResolvable|java.util.List<GoogleSaasRuntimeUnitKindDependencies>)
//  .id(java.lang.String)
//  .inputVariableMappings(IResolvable|java.util.List<GoogleSaasRuntimeUnitKindInputVariableMappings>)
//  .labels(java.util.Map<java.lang.String, java.lang.String>)
//  .outputVariableMappings(IResolvable|java.util.List<GoogleSaasRuntimeUnitKindOutputVariableMappings>)
//  .project(java.lang.String)
//  .timeouts(GoogleSaasRuntimeUnitKindTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.Initializer.parameter.location">location</a></code> | <code>java.lang.String</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.Initializer.parameter.saas">saas</a></code> | <code>java.lang.String</code> | A reference to the Saas that defines the product (managed service) that the producer wants to manage with App Lifecycle Manager. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.Initializer.parameter.unitKindId">unitKindId</a></code> | <code>java.lang.String</code> | The ID value for the new unit kind. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.Initializer.parameter.annotations">annotations</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Annotations is an unstructured key-value map stored with a resource that may be set by external tools to store and retrieve arbitrary metadata. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.Initializer.parameter.defaultRelease">defaultRelease</a></code> | <code>java.lang.String</code> | A reference to the Release object to use as default for creating new units of this UnitKind. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.Initializer.parameter.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.Initializer.parameter.dependencies">dependencies</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindDependencies">GoogleSaasRuntimeUnitKindDependencies</a>></code> | dependencies block. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_saas_runtime_unit_kind#id GoogleSaasRuntimeUnitKind#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.Initializer.parameter.inputVariableMappings">inputVariableMappings</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappings">GoogleSaasRuntimeUnitKindInputVariableMappings</a>></code> | input_variable_mappings block. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.Initializer.parameter.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | The labels on the resource, which can be used for categorization. similar to Kubernetes resource labels. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.Initializer.parameter.outputVariableMappings">outputVariableMappings</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappings">GoogleSaasRuntimeUnitKindOutputVariableMappings</a>></code> | output_variable_mappings block. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_saas_runtime_unit_kind#project GoogleSaasRuntimeUnitKind#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindTimeouts">GoogleSaasRuntimeUnitKindTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.Initializer.parameter.location"></a>

- *Type:* java.lang.String

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_saas_runtime_unit_kind#location GoogleSaasRuntimeUnitKind#location}

---

##### `saas`<sup>Required</sup> <a name="saas" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.Initializer.parameter.saas"></a>

- *Type:* java.lang.String

A reference to the Saas that defines the product (managed service) that the producer wants to manage with App Lifecycle Manager.

Part of the App Lifecycle Manager
common data model. Immutable once set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_saas_runtime_unit_kind#saas GoogleSaasRuntimeUnitKind#saas}

---

##### `unitKindId`<sup>Required</sup> <a name="unitKindId" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.Initializer.parameter.unitKindId"></a>

- *Type:* java.lang.String

The ID value for the new unit kind.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_saas_runtime_unit_kind#unit_kind_id GoogleSaasRuntimeUnitKind#unit_kind_id}

---

##### `annotations`<sup>Optional</sup> <a name="annotations" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.Initializer.parameter.annotations"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Annotations is an unstructured key-value map stored with a resource that may be set by external tools to store and retrieve arbitrary metadata.

They are not queryable and should be preserved when modifying objects.

More info: https://kubernetes.io/docs/user-guide/annotations

**Note**: This field is non-authoritative, and will only manage the annotations present in your configuration.
Please refer to the field 'effective_annotations' for all of the annotations present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_saas_runtime_unit_kind#annotations GoogleSaasRuntimeUnitKind#annotations}

---

##### `defaultRelease`<sup>Optional</sup> <a name="defaultRelease" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.Initializer.parameter.defaultRelease"></a>

- *Type:* java.lang.String

A reference to the Release object to use as default for creating new units of this UnitKind.

If not specified, a new unit must explicitly reference which release to use
for its creation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_saas_runtime_unit_kind#default_release GoogleSaasRuntimeUnitKind#default_release}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.Initializer.parameter.deletionPolicy"></a>

- *Type:* java.lang.String

Whether Terraform will be prevented from destroying the instance.

Defaults to "DELETE".
When a 'terraform destroy' or 'terraform apply' would delete the instance,
the command will fail if this field is set to "PREVENT" in Terraform state.
When set to "ABANDON", the command will remove the resource from Terraform
management without updating or deleting the resource in the API.
When set to "DELETE", deleting the resource is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_saas_runtime_unit_kind#deletion_policy GoogleSaasRuntimeUnitKind#deletion_policy}

---

##### `dependencies`<sup>Optional</sup> <a name="dependencies" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.Initializer.parameter.dependencies"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindDependencies">GoogleSaasRuntimeUnitKindDependencies</a>>

dependencies block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_saas_runtime_unit_kind#dependencies GoogleSaasRuntimeUnitKind#dependencies}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_saas_runtime_unit_kind#id GoogleSaasRuntimeUnitKind#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `inputVariableMappings`<sup>Optional</sup> <a name="inputVariableMappings" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.Initializer.parameter.inputVariableMappings"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappings">GoogleSaasRuntimeUnitKindInputVariableMappings</a>>

input_variable_mappings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_saas_runtime_unit_kind#input_variable_mappings GoogleSaasRuntimeUnitKind#input_variable_mappings}

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.Initializer.parameter.labels"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

The labels on the resource, which can be used for categorization. similar to Kubernetes resource labels.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_saas_runtime_unit_kind#labels GoogleSaasRuntimeUnitKind#labels}

---

##### `outputVariableMappings`<sup>Optional</sup> <a name="outputVariableMappings" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.Initializer.parameter.outputVariableMappings"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappings">GoogleSaasRuntimeUnitKindOutputVariableMappings</a>>

output_variable_mappings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_saas_runtime_unit_kind#output_variable_mappings GoogleSaasRuntimeUnitKind#output_variable_mappings}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.Initializer.parameter.project"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_saas_runtime_unit_kind#project GoogleSaasRuntimeUnitKind#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindTimeouts">GoogleSaasRuntimeUnitKindTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_saas_runtime_unit_kind#timeouts GoogleSaasRuntimeUnitKind#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.putDependencies">putDependencies</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.putInputVariableMappings">putInputVariableMappings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.putOutputVariableMappings">putOutputVariableMappings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.resetAnnotations">resetAnnotations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.resetDefaultRelease">resetDefaultRelease</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.resetDeletionPolicy">resetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.resetDependencies">resetDependencies</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.resetInputVariableMappings">resetInputVariableMappings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.resetOutputVariableMappings">resetOutputVariableMappings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putDependencies` <a name="putDependencies" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.putDependencies"></a>

```java
public void putDependencies(IResolvable|java.util.List<GoogleSaasRuntimeUnitKindDependencies> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.putDependencies.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindDependencies">GoogleSaasRuntimeUnitKindDependencies</a>>

---

##### `putInputVariableMappings` <a name="putInputVariableMappings" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.putInputVariableMappings"></a>

```java
public void putInputVariableMappings(IResolvable|java.util.List<GoogleSaasRuntimeUnitKindInputVariableMappings> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.putInputVariableMappings.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappings">GoogleSaasRuntimeUnitKindInputVariableMappings</a>>

---

##### `putOutputVariableMappings` <a name="putOutputVariableMappings" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.putOutputVariableMappings"></a>

```java
public void putOutputVariableMappings(IResolvable|java.util.List<GoogleSaasRuntimeUnitKindOutputVariableMappings> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.putOutputVariableMappings.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappings">GoogleSaasRuntimeUnitKindOutputVariableMappings</a>>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.putTimeouts"></a>

```java
public void putTimeouts(GoogleSaasRuntimeUnitKindTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindTimeouts">GoogleSaasRuntimeUnitKindTimeouts</a>

---

##### `resetAnnotations` <a name="resetAnnotations" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.resetAnnotations"></a>

```java
public void resetAnnotations()
```

##### `resetDefaultRelease` <a name="resetDefaultRelease" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.resetDefaultRelease"></a>

```java
public void resetDefaultRelease()
```

##### `resetDeletionPolicy` <a name="resetDeletionPolicy" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.resetDeletionPolicy"></a>

```java
public void resetDeletionPolicy()
```

##### `resetDependencies` <a name="resetDependencies" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.resetDependencies"></a>

```java
public void resetDependencies()
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.resetId"></a>

```java
public void resetId()
```

##### `resetInputVariableMappings` <a name="resetInputVariableMappings" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.resetInputVariableMappings"></a>

```java
public void resetInputVariableMappings()
```

##### `resetLabels` <a name="resetLabels" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.resetLabels"></a>

```java
public void resetLabels()
```

##### `resetOutputVariableMappings` <a name="resetOutputVariableMappings" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.resetOutputVariableMappings"></a>

```java
public void resetOutputVariableMappings()
```

##### `resetProject` <a name="resetProject" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.resetProject"></a>

```java
public void resetProject()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a GoogleSaasRuntimeUnitKind resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.isConstruct"></a>

```java
import io.cdktn.providers.google_beta.google_saas_runtime_unit_kind.GoogleSaasRuntimeUnitKind;

GoogleSaasRuntimeUnitKind.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.isTerraformElement"></a>

```java
import io.cdktn.providers.google_beta.google_saas_runtime_unit_kind.GoogleSaasRuntimeUnitKind;

GoogleSaasRuntimeUnitKind.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.isTerraformResource"></a>

```java
import io.cdktn.providers.google_beta.google_saas_runtime_unit_kind.GoogleSaasRuntimeUnitKind;

GoogleSaasRuntimeUnitKind.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.generateConfigForImport"></a>

```java
import io.cdktn.providers.google_beta.google_saas_runtime_unit_kind.GoogleSaasRuntimeUnitKind;

GoogleSaasRuntimeUnitKind.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),GoogleSaasRuntimeUnitKind.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a GoogleSaasRuntimeUnitKind resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the GoogleSaasRuntimeUnitKind to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing GoogleSaasRuntimeUnitKind that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_saas_runtime_unit_kind#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the GoogleSaasRuntimeUnitKind to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.property.createTime">createTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.property.dependencies">dependencies</a></code> | <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindDependenciesList">GoogleSaasRuntimeUnitKindDependenciesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.property.effectiveAnnotations">effectiveAnnotations</a></code> | <code>io.cdktn.cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.property.effectiveLabels">effectiveLabels</a></code> | <code>io.cdktn.cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.property.etag">etag</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.property.inputVariableMappings">inputVariableMappings</a></code> | <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsList">GoogleSaasRuntimeUnitKindInputVariableMappingsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.property.outputVariableMappings">outputVariableMappings</a></code> | <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsList">GoogleSaasRuntimeUnitKindOutputVariableMappingsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.property.terraformLabels">terraformLabels</a></code> | <code>io.cdktn.cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindTimeoutsOutputReference">GoogleSaasRuntimeUnitKindTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.property.uid">uid</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.property.updateTime">updateTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.property.annotationsInput">annotationsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.property.defaultReleaseInput">defaultReleaseInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.property.deletionPolicyInput">deletionPolicyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.property.dependenciesInput">dependenciesInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindDependencies">GoogleSaasRuntimeUnitKindDependencies</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.property.inputVariableMappingsInput">inputVariableMappingsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappings">GoogleSaasRuntimeUnitKindInputVariableMappings</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.property.labelsInput">labelsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.property.locationInput">locationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.property.outputVariableMappingsInput">outputVariableMappingsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappings">GoogleSaasRuntimeUnitKindOutputVariableMappings</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.property.saasInput">saasInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.property.timeoutsInput">timeoutsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindTimeouts">GoogleSaasRuntimeUnitKindTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.property.unitKindIdInput">unitKindIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.property.annotations">annotations</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.property.defaultRelease">defaultRelease</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.property.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.property.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.property.saas">saas</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.property.unitKindId">unitKindId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.property.createTime"></a>

```java
public java.lang.String getCreateTime();
```

- *Type:* java.lang.String

---

##### `dependencies`<sup>Required</sup> <a name="dependencies" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.property.dependencies"></a>

```java
public GoogleSaasRuntimeUnitKindDependenciesList getDependencies();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindDependenciesList">GoogleSaasRuntimeUnitKindDependenciesList</a>

---

##### `effectiveAnnotations`<sup>Required</sup> <a name="effectiveAnnotations" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.property.effectiveAnnotations"></a>

```java
public StringMap getEffectiveAnnotations();
```

- *Type:* io.cdktn.cdktn.StringMap

---

##### `effectiveLabels`<sup>Required</sup> <a name="effectiveLabels" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.property.effectiveLabels"></a>

```java
public StringMap getEffectiveLabels();
```

- *Type:* io.cdktn.cdktn.StringMap

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.property.etag"></a>

```java
public java.lang.String getEtag();
```

- *Type:* java.lang.String

---

##### `inputVariableMappings`<sup>Required</sup> <a name="inputVariableMappings" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.property.inputVariableMappings"></a>

```java
public GoogleSaasRuntimeUnitKindInputVariableMappingsList getInputVariableMappings();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsList">GoogleSaasRuntimeUnitKindInputVariableMappingsList</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `outputVariableMappings`<sup>Required</sup> <a name="outputVariableMappings" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.property.outputVariableMappings"></a>

```java
public GoogleSaasRuntimeUnitKindOutputVariableMappingsList getOutputVariableMappings();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsList">GoogleSaasRuntimeUnitKindOutputVariableMappingsList</a>

---

##### `terraformLabels`<sup>Required</sup> <a name="terraformLabels" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.property.terraformLabels"></a>

```java
public StringMap getTerraformLabels();
```

- *Type:* io.cdktn.cdktn.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.property.timeouts"></a>

```java
public GoogleSaasRuntimeUnitKindTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindTimeoutsOutputReference">GoogleSaasRuntimeUnitKindTimeoutsOutputReference</a>

---

##### `uid`<sup>Required</sup> <a name="uid" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.property.uid"></a>

```java
public java.lang.String getUid();
```

- *Type:* java.lang.String

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.property.updateTime"></a>

```java
public java.lang.String getUpdateTime();
```

- *Type:* java.lang.String

---

##### `annotationsInput`<sup>Optional</sup> <a name="annotationsInput" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.property.annotationsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getAnnotationsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `defaultReleaseInput`<sup>Optional</sup> <a name="defaultReleaseInput" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.property.defaultReleaseInput"></a>

```java
public java.lang.String getDefaultReleaseInput();
```

- *Type:* java.lang.String

---

##### `deletionPolicyInput`<sup>Optional</sup> <a name="deletionPolicyInput" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.property.deletionPolicyInput"></a>

```java
public java.lang.String getDeletionPolicyInput();
```

- *Type:* java.lang.String

---

##### `dependenciesInput`<sup>Optional</sup> <a name="dependenciesInput" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.property.dependenciesInput"></a>

```java
public IResolvable|java.util.List<GoogleSaasRuntimeUnitKindDependencies> getDependenciesInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindDependencies">GoogleSaasRuntimeUnitKindDependencies</a>>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `inputVariableMappingsInput`<sup>Optional</sup> <a name="inputVariableMappingsInput" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.property.inputVariableMappingsInput"></a>

```java
public IResolvable|java.util.List<GoogleSaasRuntimeUnitKindInputVariableMappings> getInputVariableMappingsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappings">GoogleSaasRuntimeUnitKindInputVariableMappings</a>>

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.property.labelsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabelsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.property.locationInput"></a>

```java
public java.lang.String getLocationInput();
```

- *Type:* java.lang.String

---

##### `outputVariableMappingsInput`<sup>Optional</sup> <a name="outputVariableMappingsInput" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.property.outputVariableMappingsInput"></a>

```java
public IResolvable|java.util.List<GoogleSaasRuntimeUnitKindOutputVariableMappings> getOutputVariableMappingsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappings">GoogleSaasRuntimeUnitKindOutputVariableMappings</a>>

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `saasInput`<sup>Optional</sup> <a name="saasInput" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.property.saasInput"></a>

```java
public java.lang.String getSaasInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.property.timeoutsInput"></a>

```java
public IResolvable|GoogleSaasRuntimeUnitKindTimeouts getTimeoutsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindTimeouts">GoogleSaasRuntimeUnitKindTimeouts</a>

---

##### `unitKindIdInput`<sup>Optional</sup> <a name="unitKindIdInput" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.property.unitKindIdInput"></a>

```java
public java.lang.String getUnitKindIdInput();
```

- *Type:* java.lang.String

---

##### `annotations`<sup>Required</sup> <a name="annotations" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.property.annotations"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getAnnotations();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `defaultRelease`<sup>Required</sup> <a name="defaultRelease" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.property.defaultRelease"></a>

```java
public java.lang.String getDefaultRelease();
```

- *Type:* java.lang.String

---

##### `deletionPolicy`<sup>Required</sup> <a name="deletionPolicy" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.property.deletionPolicy"></a>

```java
public java.lang.String getDeletionPolicy();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.property.labels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

##### `saas`<sup>Required</sup> <a name="saas" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.property.saas"></a>

```java
public java.lang.String getSaas();
```

- *Type:* java.lang.String

---

##### `unitKindId`<sup>Required</sup> <a name="unitKindId" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.property.unitKindId"></a>

```java
public java.lang.String getUnitKindId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleSaasRuntimeUnitKindConfig <a name="GoogleSaasRuntimeUnitKindConfig" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindConfig.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_saas_runtime_unit_kind.GoogleSaasRuntimeUnitKindConfig;

GoogleSaasRuntimeUnitKindConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .location(java.lang.String)
    .saas(java.lang.String)
    .unitKindId(java.lang.String)
//  .annotations(java.util.Map<java.lang.String, java.lang.String>)
//  .defaultRelease(java.lang.String)
//  .deletionPolicy(java.lang.String)
//  .dependencies(IResolvable|java.util.List<GoogleSaasRuntimeUnitKindDependencies>)
//  .id(java.lang.String)
//  .inputVariableMappings(IResolvable|java.util.List<GoogleSaasRuntimeUnitKindInputVariableMappings>)
//  .labels(java.util.Map<java.lang.String, java.lang.String>)
//  .outputVariableMappings(IResolvable|java.util.List<GoogleSaasRuntimeUnitKindOutputVariableMappings>)
//  .project(java.lang.String)
//  .timeouts(GoogleSaasRuntimeUnitKindTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindConfig.property.location">location</a></code> | <code>java.lang.String</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindConfig.property.saas">saas</a></code> | <code>java.lang.String</code> | A reference to the Saas that defines the product (managed service) that the producer wants to manage with App Lifecycle Manager. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindConfig.property.unitKindId">unitKindId</a></code> | <code>java.lang.String</code> | The ID value for the new unit kind. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindConfig.property.annotations">annotations</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Annotations is an unstructured key-value map stored with a resource that may be set by external tools to store and retrieve arbitrary metadata. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindConfig.property.defaultRelease">defaultRelease</a></code> | <code>java.lang.String</code> | A reference to the Release object to use as default for creating new units of this UnitKind. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindConfig.property.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindConfig.property.dependencies">dependencies</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindDependencies">GoogleSaasRuntimeUnitKindDependencies</a>></code> | dependencies block. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_saas_runtime_unit_kind#id GoogleSaasRuntimeUnitKind#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindConfig.property.inputVariableMappings">inputVariableMappings</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappings">GoogleSaasRuntimeUnitKindInputVariableMappings</a>></code> | input_variable_mappings block. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindConfig.property.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | The labels on the resource, which can be used for categorization. similar to Kubernetes resource labels. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindConfig.property.outputVariableMappings">outputVariableMappings</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappings">GoogleSaasRuntimeUnitKindOutputVariableMappings</a>></code> | output_variable_mappings block. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindConfig.property.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_saas_runtime_unit_kind#project GoogleSaasRuntimeUnitKind#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindTimeouts">GoogleSaasRuntimeUnitKindTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindConfig.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_saas_runtime_unit_kind#location GoogleSaasRuntimeUnitKind#location}

---

##### `saas`<sup>Required</sup> <a name="saas" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindConfig.property.saas"></a>

```java
public java.lang.String getSaas();
```

- *Type:* java.lang.String

A reference to the Saas that defines the product (managed service) that the producer wants to manage with App Lifecycle Manager.

Part of the App Lifecycle Manager
common data model. Immutable once set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_saas_runtime_unit_kind#saas GoogleSaasRuntimeUnitKind#saas}

---

##### `unitKindId`<sup>Required</sup> <a name="unitKindId" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindConfig.property.unitKindId"></a>

```java
public java.lang.String getUnitKindId();
```

- *Type:* java.lang.String

The ID value for the new unit kind.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_saas_runtime_unit_kind#unit_kind_id GoogleSaasRuntimeUnitKind#unit_kind_id}

---

##### `annotations`<sup>Optional</sup> <a name="annotations" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindConfig.property.annotations"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getAnnotations();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Annotations is an unstructured key-value map stored with a resource that may be set by external tools to store and retrieve arbitrary metadata.

They are not queryable and should be preserved when modifying objects.

More info: https://kubernetes.io/docs/user-guide/annotations

**Note**: This field is non-authoritative, and will only manage the annotations present in your configuration.
Please refer to the field 'effective_annotations' for all of the annotations present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_saas_runtime_unit_kind#annotations GoogleSaasRuntimeUnitKind#annotations}

---

##### `defaultRelease`<sup>Optional</sup> <a name="defaultRelease" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindConfig.property.defaultRelease"></a>

```java
public java.lang.String getDefaultRelease();
```

- *Type:* java.lang.String

A reference to the Release object to use as default for creating new units of this UnitKind.

If not specified, a new unit must explicitly reference which release to use
for its creation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_saas_runtime_unit_kind#default_release GoogleSaasRuntimeUnitKind#default_release}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_saas_runtime_unit_kind#deletion_policy GoogleSaasRuntimeUnitKind#deletion_policy}

---

##### `dependencies`<sup>Optional</sup> <a name="dependencies" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindConfig.property.dependencies"></a>

```java
public IResolvable|java.util.List<GoogleSaasRuntimeUnitKindDependencies> getDependencies();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindDependencies">GoogleSaasRuntimeUnitKindDependencies</a>>

dependencies block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_saas_runtime_unit_kind#dependencies GoogleSaasRuntimeUnitKind#dependencies}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_saas_runtime_unit_kind#id GoogleSaasRuntimeUnitKind#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `inputVariableMappings`<sup>Optional</sup> <a name="inputVariableMappings" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindConfig.property.inputVariableMappings"></a>

```java
public IResolvable|java.util.List<GoogleSaasRuntimeUnitKindInputVariableMappings> getInputVariableMappings();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappings">GoogleSaasRuntimeUnitKindInputVariableMappings</a>>

input_variable_mappings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_saas_runtime_unit_kind#input_variable_mappings GoogleSaasRuntimeUnitKind#input_variable_mappings}

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindConfig.property.labels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

The labels on the resource, which can be used for categorization. similar to Kubernetes resource labels.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_saas_runtime_unit_kind#labels GoogleSaasRuntimeUnitKind#labels}

---

##### `outputVariableMappings`<sup>Optional</sup> <a name="outputVariableMappings" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindConfig.property.outputVariableMappings"></a>

```java
public IResolvable|java.util.List<GoogleSaasRuntimeUnitKindOutputVariableMappings> getOutputVariableMappings();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappings">GoogleSaasRuntimeUnitKindOutputVariableMappings</a>>

output_variable_mappings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_saas_runtime_unit_kind#output_variable_mappings GoogleSaasRuntimeUnitKind#output_variable_mappings}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_saas_runtime_unit_kind#project GoogleSaasRuntimeUnitKind#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindConfig.property.timeouts"></a>

```java
public GoogleSaasRuntimeUnitKindTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindTimeouts">GoogleSaasRuntimeUnitKindTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_saas_runtime_unit_kind#timeouts GoogleSaasRuntimeUnitKind#timeouts}

---

### GoogleSaasRuntimeUnitKindDependencies <a name="GoogleSaasRuntimeUnitKindDependencies" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindDependencies"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindDependencies.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_saas_runtime_unit_kind.GoogleSaasRuntimeUnitKindDependencies;

GoogleSaasRuntimeUnitKindDependencies.builder()
    .alias(java.lang.String)
    .unitKind(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindDependencies.property.alias">alias</a></code> | <code>java.lang.String</code> | An alias for the dependency. Used for input variable mapping. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindDependencies.property.unitKind">unitKind</a></code> | <code>java.lang.String</code> | The unit kind of the dependency. |

---

##### `alias`<sup>Required</sup> <a name="alias" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindDependencies.property.alias"></a>

```java
public java.lang.String getAlias();
```

- *Type:* java.lang.String

An alias for the dependency. Used for input variable mapping.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_saas_runtime_unit_kind#alias GoogleSaasRuntimeUnitKind#alias}

---

##### `unitKind`<sup>Required</sup> <a name="unitKind" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindDependencies.property.unitKind"></a>

```java
public java.lang.String getUnitKind();
```

- *Type:* java.lang.String

The unit kind of the dependency.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_saas_runtime_unit_kind#unit_kind GoogleSaasRuntimeUnitKind#unit_kind}

---

### GoogleSaasRuntimeUnitKindInputVariableMappings <a name="GoogleSaasRuntimeUnitKindInputVariableMappings" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappings.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_saas_runtime_unit_kind.GoogleSaasRuntimeUnitKindInputVariableMappings;

GoogleSaasRuntimeUnitKindInputVariableMappings.builder()
    .variable(java.lang.String)
//  .from(GoogleSaasRuntimeUnitKindInputVariableMappingsFrom)
//  .to(GoogleSaasRuntimeUnitKindInputVariableMappingsTo)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappings.property.variable">variable</a></code> | <code>java.lang.String</code> | name of the variable. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappings.property.from">from</a></code> | <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsFrom">GoogleSaasRuntimeUnitKindInputVariableMappingsFrom</a></code> | from block. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappings.property.to">to</a></code> | <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsTo">GoogleSaasRuntimeUnitKindInputVariableMappingsTo</a></code> | to block. |

---

##### `variable`<sup>Required</sup> <a name="variable" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappings.property.variable"></a>

```java
public java.lang.String getVariable();
```

- *Type:* java.lang.String

name of the variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_saas_runtime_unit_kind#variable GoogleSaasRuntimeUnitKind#variable}

---

##### `from`<sup>Optional</sup> <a name="from" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappings.property.from"></a>

```java
public GoogleSaasRuntimeUnitKindInputVariableMappingsFrom getFrom();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsFrom">GoogleSaasRuntimeUnitKindInputVariableMappingsFrom</a>

from block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_saas_runtime_unit_kind#from GoogleSaasRuntimeUnitKind#from}

---

##### `to`<sup>Optional</sup> <a name="to" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappings.property.to"></a>

```java
public GoogleSaasRuntimeUnitKindInputVariableMappingsTo getTo();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsTo">GoogleSaasRuntimeUnitKindInputVariableMappingsTo</a>

to block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_saas_runtime_unit_kind#to GoogleSaasRuntimeUnitKind#to}

---

### GoogleSaasRuntimeUnitKindInputVariableMappingsFrom <a name="GoogleSaasRuntimeUnitKindInputVariableMappingsFrom" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsFrom"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsFrom.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_saas_runtime_unit_kind.GoogleSaasRuntimeUnitKindInputVariableMappingsFrom;

GoogleSaasRuntimeUnitKindInputVariableMappingsFrom.builder()
    .dependency(java.lang.String)
    .outputVariable(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsFrom.property.dependency">dependency</a></code> | <code>java.lang.String</code> | Alias of the dependency that the outputVariable will pass its value to. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsFrom.property.outputVariable">outputVariable</a></code> | <code>java.lang.String</code> | Name of the outputVariable on the dependency. |

---

##### `dependency`<sup>Required</sup> <a name="dependency" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsFrom.property.dependency"></a>

```java
public java.lang.String getDependency();
```

- *Type:* java.lang.String

Alias of the dependency that the outputVariable will pass its value to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_saas_runtime_unit_kind#dependency GoogleSaasRuntimeUnitKind#dependency}

---

##### `outputVariable`<sup>Required</sup> <a name="outputVariable" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsFrom.property.outputVariable"></a>

```java
public java.lang.String getOutputVariable();
```

- *Type:* java.lang.String

Name of the outputVariable on the dependency.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_saas_runtime_unit_kind#output_variable GoogleSaasRuntimeUnitKind#output_variable}

---

### GoogleSaasRuntimeUnitKindInputVariableMappingsTo <a name="GoogleSaasRuntimeUnitKindInputVariableMappingsTo" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsTo"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsTo.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_saas_runtime_unit_kind.GoogleSaasRuntimeUnitKindInputVariableMappingsTo;

GoogleSaasRuntimeUnitKindInputVariableMappingsTo.builder()
    .dependency(java.lang.String)
    .inputVariable(java.lang.String)
//  .ignoreForLookup(java.lang.Boolean|IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsTo.property.dependency">dependency</a></code> | <code>java.lang.String</code> | Alias of the dependency that the inputVariable will pass its value to. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsTo.property.inputVariable">inputVariable</a></code> | <code>java.lang.String</code> | Name of the inputVariable on the dependency. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsTo.property.ignoreForLookup">ignoreForLookup</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Tells App Lifecycle Manager if this mapping should be used during lookup or not. |

---

##### `dependency`<sup>Required</sup> <a name="dependency" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsTo.property.dependency"></a>

```java
public java.lang.String getDependency();
```

- *Type:* java.lang.String

Alias of the dependency that the inputVariable will pass its value to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_saas_runtime_unit_kind#dependency GoogleSaasRuntimeUnitKind#dependency}

---

##### `inputVariable`<sup>Required</sup> <a name="inputVariable" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsTo.property.inputVariable"></a>

```java
public java.lang.String getInputVariable();
```

- *Type:* java.lang.String

Name of the inputVariable on the dependency.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_saas_runtime_unit_kind#input_variable GoogleSaasRuntimeUnitKind#input_variable}

---

##### `ignoreForLookup`<sup>Optional</sup> <a name="ignoreForLookup" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsTo.property.ignoreForLookup"></a>

```java
public java.lang.Boolean|IResolvable getIgnoreForLookup();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Tells App Lifecycle Manager if this mapping should be used during lookup or not.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_saas_runtime_unit_kind#ignore_for_lookup GoogleSaasRuntimeUnitKind#ignore_for_lookup}

---

### GoogleSaasRuntimeUnitKindOutputVariableMappings <a name="GoogleSaasRuntimeUnitKindOutputVariableMappings" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappings.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_saas_runtime_unit_kind.GoogleSaasRuntimeUnitKindOutputVariableMappings;

GoogleSaasRuntimeUnitKindOutputVariableMappings.builder()
    .variable(java.lang.String)
//  .from(GoogleSaasRuntimeUnitKindOutputVariableMappingsFrom)
//  .to(GoogleSaasRuntimeUnitKindOutputVariableMappingsTo)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappings.property.variable">variable</a></code> | <code>java.lang.String</code> | name of the variable. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappings.property.from">from</a></code> | <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsFrom">GoogleSaasRuntimeUnitKindOutputVariableMappingsFrom</a></code> | from block. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappings.property.to">to</a></code> | <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsTo">GoogleSaasRuntimeUnitKindOutputVariableMappingsTo</a></code> | to block. |

---

##### `variable`<sup>Required</sup> <a name="variable" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappings.property.variable"></a>

```java
public java.lang.String getVariable();
```

- *Type:* java.lang.String

name of the variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_saas_runtime_unit_kind#variable GoogleSaasRuntimeUnitKind#variable}

---

##### `from`<sup>Optional</sup> <a name="from" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappings.property.from"></a>

```java
public GoogleSaasRuntimeUnitKindOutputVariableMappingsFrom getFrom();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsFrom">GoogleSaasRuntimeUnitKindOutputVariableMappingsFrom</a>

from block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_saas_runtime_unit_kind#from GoogleSaasRuntimeUnitKind#from}

---

##### `to`<sup>Optional</sup> <a name="to" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappings.property.to"></a>

```java
public GoogleSaasRuntimeUnitKindOutputVariableMappingsTo getTo();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsTo">GoogleSaasRuntimeUnitKindOutputVariableMappingsTo</a>

to block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_saas_runtime_unit_kind#to GoogleSaasRuntimeUnitKind#to}

---

### GoogleSaasRuntimeUnitKindOutputVariableMappingsFrom <a name="GoogleSaasRuntimeUnitKindOutputVariableMappingsFrom" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsFrom"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsFrom.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_saas_runtime_unit_kind.GoogleSaasRuntimeUnitKindOutputVariableMappingsFrom;

GoogleSaasRuntimeUnitKindOutputVariableMappingsFrom.builder()
    .dependency(java.lang.String)
    .outputVariable(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsFrom.property.dependency">dependency</a></code> | <code>java.lang.String</code> | Alias of the dependency that the outputVariable will pass its value to. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsFrom.property.outputVariable">outputVariable</a></code> | <code>java.lang.String</code> | Name of the outputVariable on the dependency. |

---

##### `dependency`<sup>Required</sup> <a name="dependency" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsFrom.property.dependency"></a>

```java
public java.lang.String getDependency();
```

- *Type:* java.lang.String

Alias of the dependency that the outputVariable will pass its value to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_saas_runtime_unit_kind#dependency GoogleSaasRuntimeUnitKind#dependency}

---

##### `outputVariable`<sup>Required</sup> <a name="outputVariable" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsFrom.property.outputVariable"></a>

```java
public java.lang.String getOutputVariable();
```

- *Type:* java.lang.String

Name of the outputVariable on the dependency.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_saas_runtime_unit_kind#output_variable GoogleSaasRuntimeUnitKind#output_variable}

---

### GoogleSaasRuntimeUnitKindOutputVariableMappingsTo <a name="GoogleSaasRuntimeUnitKindOutputVariableMappingsTo" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsTo"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsTo.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_saas_runtime_unit_kind.GoogleSaasRuntimeUnitKindOutputVariableMappingsTo;

GoogleSaasRuntimeUnitKindOutputVariableMappingsTo.builder()
    .dependency(java.lang.String)
    .inputVariable(java.lang.String)
//  .ignoreForLookup(java.lang.Boolean|IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsTo.property.dependency">dependency</a></code> | <code>java.lang.String</code> | Alias of the dependency that the inputVariable will pass its value to. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsTo.property.inputVariable">inputVariable</a></code> | <code>java.lang.String</code> | Name of the inputVariable on the dependency. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsTo.property.ignoreForLookup">ignoreForLookup</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Tells App Lifecycle Manager if this mapping should be used during lookup or not. |

---

##### `dependency`<sup>Required</sup> <a name="dependency" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsTo.property.dependency"></a>

```java
public java.lang.String getDependency();
```

- *Type:* java.lang.String

Alias of the dependency that the inputVariable will pass its value to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_saas_runtime_unit_kind#dependency GoogleSaasRuntimeUnitKind#dependency}

---

##### `inputVariable`<sup>Required</sup> <a name="inputVariable" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsTo.property.inputVariable"></a>

```java
public java.lang.String getInputVariable();
```

- *Type:* java.lang.String

Name of the inputVariable on the dependency.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_saas_runtime_unit_kind#input_variable GoogleSaasRuntimeUnitKind#input_variable}

---

##### `ignoreForLookup`<sup>Optional</sup> <a name="ignoreForLookup" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsTo.property.ignoreForLookup"></a>

```java
public java.lang.Boolean|IResolvable getIgnoreForLookup();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Tells App Lifecycle Manager if this mapping should be used during lookup or not.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_saas_runtime_unit_kind#ignore_for_lookup GoogleSaasRuntimeUnitKind#ignore_for_lookup}

---

### GoogleSaasRuntimeUnitKindTimeouts <a name="GoogleSaasRuntimeUnitKindTimeouts" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindTimeouts.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_saas_runtime_unit_kind.GoogleSaasRuntimeUnitKindTimeouts;

GoogleSaasRuntimeUnitKindTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_saas_runtime_unit_kind#create GoogleSaasRuntimeUnitKind#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_saas_runtime_unit_kind#delete GoogleSaasRuntimeUnitKind#delete}. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_saas_runtime_unit_kind#update GoogleSaasRuntimeUnitKind#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_saas_runtime_unit_kind#create GoogleSaasRuntimeUnitKind#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_saas_runtime_unit_kind#delete GoogleSaasRuntimeUnitKind#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_saas_runtime_unit_kind#update GoogleSaasRuntimeUnitKind#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleSaasRuntimeUnitKindDependenciesList <a name="GoogleSaasRuntimeUnitKindDependenciesList" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindDependenciesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindDependenciesList.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_saas_runtime_unit_kind.GoogleSaasRuntimeUnitKindDependenciesList;

new GoogleSaasRuntimeUnitKindDependenciesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindDependenciesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindDependenciesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindDependenciesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindDependenciesList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindDependenciesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindDependenciesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindDependenciesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindDependenciesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindDependenciesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindDependenciesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindDependenciesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindDependenciesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindDependenciesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindDependenciesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindDependenciesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindDependenciesList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindDependenciesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindDependenciesList.get"></a>

```java
public GoogleSaasRuntimeUnitKindDependenciesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindDependenciesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindDependenciesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindDependenciesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindDependenciesList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindDependencies">GoogleSaasRuntimeUnitKindDependencies</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindDependenciesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindDependenciesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindDependenciesList.property.internalValue"></a>

```java
public IResolvable|java.util.List<GoogleSaasRuntimeUnitKindDependencies> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindDependencies">GoogleSaasRuntimeUnitKindDependencies</a>>

---


### GoogleSaasRuntimeUnitKindDependenciesOutputReference <a name="GoogleSaasRuntimeUnitKindDependenciesOutputReference" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindDependenciesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindDependenciesOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_saas_runtime_unit_kind.GoogleSaasRuntimeUnitKindDependenciesOutputReference;

new GoogleSaasRuntimeUnitKindDependenciesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindDependenciesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindDependenciesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindDependenciesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindDependenciesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindDependenciesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindDependenciesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindDependenciesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindDependenciesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindDependenciesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindDependenciesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindDependenciesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindDependenciesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindDependenciesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindDependenciesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindDependenciesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindDependenciesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindDependenciesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindDependenciesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindDependenciesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindDependenciesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindDependenciesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindDependenciesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindDependenciesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindDependenciesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindDependenciesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindDependenciesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindDependenciesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindDependenciesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindDependenciesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindDependenciesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindDependenciesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindDependenciesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindDependenciesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindDependenciesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindDependenciesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindDependenciesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindDependenciesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindDependenciesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindDependenciesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindDependenciesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindDependenciesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindDependenciesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindDependenciesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindDependenciesOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindDependenciesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindDependenciesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindDependenciesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindDependenciesOutputReference.property.aliasInput">aliasInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindDependenciesOutputReference.property.unitKindInput">unitKindInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindDependenciesOutputReference.property.alias">alias</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindDependenciesOutputReference.property.unitKind">unitKind</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindDependenciesOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindDependencies">GoogleSaasRuntimeUnitKindDependencies</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindDependenciesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindDependenciesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `aliasInput`<sup>Optional</sup> <a name="aliasInput" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindDependenciesOutputReference.property.aliasInput"></a>

```java
public java.lang.String getAliasInput();
```

- *Type:* java.lang.String

---

##### `unitKindInput`<sup>Optional</sup> <a name="unitKindInput" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindDependenciesOutputReference.property.unitKindInput"></a>

```java
public java.lang.String getUnitKindInput();
```

- *Type:* java.lang.String

---

##### `alias`<sup>Required</sup> <a name="alias" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindDependenciesOutputReference.property.alias"></a>

```java
public java.lang.String getAlias();
```

- *Type:* java.lang.String

---

##### `unitKind`<sup>Required</sup> <a name="unitKind" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindDependenciesOutputReference.property.unitKind"></a>

```java
public java.lang.String getUnitKind();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindDependenciesOutputReference.property.internalValue"></a>

```java
public IResolvable|GoogleSaasRuntimeUnitKindDependencies getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindDependencies">GoogleSaasRuntimeUnitKindDependencies</a>

---


### GoogleSaasRuntimeUnitKindInputVariableMappingsFromOutputReference <a name="GoogleSaasRuntimeUnitKindInputVariableMappingsFromOutputReference" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsFromOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsFromOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_saas_runtime_unit_kind.GoogleSaasRuntimeUnitKindInputVariableMappingsFromOutputReference;

new GoogleSaasRuntimeUnitKindInputVariableMappingsFromOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsFromOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsFromOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsFromOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsFromOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsFromOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsFromOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsFromOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsFromOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsFromOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsFromOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsFromOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsFromOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsFromOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsFromOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsFromOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsFromOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsFromOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsFromOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsFromOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsFromOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsFromOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsFromOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsFromOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsFromOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsFromOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsFromOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsFromOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsFromOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsFromOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsFromOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsFromOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsFromOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsFromOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsFromOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsFromOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsFromOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsFromOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsFromOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsFromOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsFromOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsFromOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsFromOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsFromOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsFromOutputReference.property.dependencyInput">dependencyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsFromOutputReference.property.outputVariableInput">outputVariableInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsFromOutputReference.property.dependency">dependency</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsFromOutputReference.property.outputVariable">outputVariable</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsFromOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsFrom">GoogleSaasRuntimeUnitKindInputVariableMappingsFrom</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsFromOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsFromOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `dependencyInput`<sup>Optional</sup> <a name="dependencyInput" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsFromOutputReference.property.dependencyInput"></a>

```java
public java.lang.String getDependencyInput();
```

- *Type:* java.lang.String

---

##### `outputVariableInput`<sup>Optional</sup> <a name="outputVariableInput" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsFromOutputReference.property.outputVariableInput"></a>

```java
public java.lang.String getOutputVariableInput();
```

- *Type:* java.lang.String

---

##### `dependency`<sup>Required</sup> <a name="dependency" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsFromOutputReference.property.dependency"></a>

```java
public java.lang.String getDependency();
```

- *Type:* java.lang.String

---

##### `outputVariable`<sup>Required</sup> <a name="outputVariable" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsFromOutputReference.property.outputVariable"></a>

```java
public java.lang.String getOutputVariable();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsFromOutputReference.property.internalValue"></a>

```java
public GoogleSaasRuntimeUnitKindInputVariableMappingsFrom getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsFrom">GoogleSaasRuntimeUnitKindInputVariableMappingsFrom</a>

---


### GoogleSaasRuntimeUnitKindInputVariableMappingsList <a name="GoogleSaasRuntimeUnitKindInputVariableMappingsList" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsList.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_saas_runtime_unit_kind.GoogleSaasRuntimeUnitKindInputVariableMappingsList;

new GoogleSaasRuntimeUnitKindInputVariableMappingsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsList.get"></a>

```java
public GoogleSaasRuntimeUnitKindInputVariableMappingsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappings">GoogleSaasRuntimeUnitKindInputVariableMappings</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<GoogleSaasRuntimeUnitKindInputVariableMappings> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappings">GoogleSaasRuntimeUnitKindInputVariableMappings</a>>

---


### GoogleSaasRuntimeUnitKindInputVariableMappingsOutputReference <a name="GoogleSaasRuntimeUnitKindInputVariableMappingsOutputReference" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_saas_runtime_unit_kind.GoogleSaasRuntimeUnitKindInputVariableMappingsOutputReference;

new GoogleSaasRuntimeUnitKindInputVariableMappingsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsOutputReference.putFrom">putFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsOutputReference.putTo">putTo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsOutputReference.resetFrom">resetFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsOutputReference.resetTo">resetTo</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putFrom` <a name="putFrom" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsOutputReference.putFrom"></a>

```java
public void putFrom(GoogleSaasRuntimeUnitKindInputVariableMappingsFrom value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsOutputReference.putFrom.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsFrom">GoogleSaasRuntimeUnitKindInputVariableMappingsFrom</a>

---

##### `putTo` <a name="putTo" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsOutputReference.putTo"></a>

```java
public void putTo(GoogleSaasRuntimeUnitKindInputVariableMappingsTo value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsOutputReference.putTo.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsTo">GoogleSaasRuntimeUnitKindInputVariableMappingsTo</a>

---

##### `resetFrom` <a name="resetFrom" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsOutputReference.resetFrom"></a>

```java
public void resetFrom()
```

##### `resetTo` <a name="resetTo" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsOutputReference.resetTo"></a>

```java
public void resetTo()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsOutputReference.property.from">from</a></code> | <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsFromOutputReference">GoogleSaasRuntimeUnitKindInputVariableMappingsFromOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsOutputReference.property.to">to</a></code> | <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsToOutputReference">GoogleSaasRuntimeUnitKindInputVariableMappingsToOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsOutputReference.property.fromInput">fromInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsFrom">GoogleSaasRuntimeUnitKindInputVariableMappingsFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsOutputReference.property.toInput">toInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsTo">GoogleSaasRuntimeUnitKindInputVariableMappingsTo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsOutputReference.property.variableInput">variableInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsOutputReference.property.variable">variable</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappings">GoogleSaasRuntimeUnitKindInputVariableMappings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `from`<sup>Required</sup> <a name="from" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsOutputReference.property.from"></a>

```java
public GoogleSaasRuntimeUnitKindInputVariableMappingsFromOutputReference getFrom();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsFromOutputReference">GoogleSaasRuntimeUnitKindInputVariableMappingsFromOutputReference</a>

---

##### `to`<sup>Required</sup> <a name="to" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsOutputReference.property.to"></a>

```java
public GoogleSaasRuntimeUnitKindInputVariableMappingsToOutputReference getTo();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsToOutputReference">GoogleSaasRuntimeUnitKindInputVariableMappingsToOutputReference</a>

---

##### `fromInput`<sup>Optional</sup> <a name="fromInput" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsOutputReference.property.fromInput"></a>

```java
public GoogleSaasRuntimeUnitKindInputVariableMappingsFrom getFromInput();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsFrom">GoogleSaasRuntimeUnitKindInputVariableMappingsFrom</a>

---

##### `toInput`<sup>Optional</sup> <a name="toInput" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsOutputReference.property.toInput"></a>

```java
public GoogleSaasRuntimeUnitKindInputVariableMappingsTo getToInput();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsTo">GoogleSaasRuntimeUnitKindInputVariableMappingsTo</a>

---

##### `variableInput`<sup>Optional</sup> <a name="variableInput" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsOutputReference.property.variableInput"></a>

```java
public java.lang.String getVariableInput();
```

- *Type:* java.lang.String

---

##### `variable`<sup>Required</sup> <a name="variable" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsOutputReference.property.variable"></a>

```java
public java.lang.String getVariable();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsOutputReference.property.internalValue"></a>

```java
public IResolvable|GoogleSaasRuntimeUnitKindInputVariableMappings getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappings">GoogleSaasRuntimeUnitKindInputVariableMappings</a>

---


### GoogleSaasRuntimeUnitKindInputVariableMappingsToOutputReference <a name="GoogleSaasRuntimeUnitKindInputVariableMappingsToOutputReference" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsToOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsToOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_saas_runtime_unit_kind.GoogleSaasRuntimeUnitKindInputVariableMappingsToOutputReference;

new GoogleSaasRuntimeUnitKindInputVariableMappingsToOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsToOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsToOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsToOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsToOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsToOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsToOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsToOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsToOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsToOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsToOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsToOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsToOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsToOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsToOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsToOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsToOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsToOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsToOutputReference.resetIgnoreForLookup">resetIgnoreForLookup</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsToOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsToOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsToOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsToOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsToOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsToOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsToOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsToOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsToOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsToOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsToOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsToOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsToOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsToOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsToOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsToOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsToOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsToOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsToOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsToOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsToOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsToOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsToOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsToOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetIgnoreForLookup` <a name="resetIgnoreForLookup" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsToOutputReference.resetIgnoreForLookup"></a>

```java
public void resetIgnoreForLookup()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsToOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsToOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsToOutputReference.property.dependencyInput">dependencyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsToOutputReference.property.ignoreForLookupInput">ignoreForLookupInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsToOutputReference.property.inputVariableInput">inputVariableInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsToOutputReference.property.dependency">dependency</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsToOutputReference.property.ignoreForLookup">ignoreForLookup</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsToOutputReference.property.inputVariable">inputVariable</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsToOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsTo">GoogleSaasRuntimeUnitKindInputVariableMappingsTo</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsToOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsToOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `dependencyInput`<sup>Optional</sup> <a name="dependencyInput" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsToOutputReference.property.dependencyInput"></a>

```java
public java.lang.String getDependencyInput();
```

- *Type:* java.lang.String

---

##### `ignoreForLookupInput`<sup>Optional</sup> <a name="ignoreForLookupInput" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsToOutputReference.property.ignoreForLookupInput"></a>

```java
public java.lang.Boolean|IResolvable getIgnoreForLookupInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `inputVariableInput`<sup>Optional</sup> <a name="inputVariableInput" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsToOutputReference.property.inputVariableInput"></a>

```java
public java.lang.String getInputVariableInput();
```

- *Type:* java.lang.String

---

##### `dependency`<sup>Required</sup> <a name="dependency" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsToOutputReference.property.dependency"></a>

```java
public java.lang.String getDependency();
```

- *Type:* java.lang.String

---

##### `ignoreForLookup`<sup>Required</sup> <a name="ignoreForLookup" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsToOutputReference.property.ignoreForLookup"></a>

```java
public java.lang.Boolean|IResolvable getIgnoreForLookup();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `inputVariable`<sup>Required</sup> <a name="inputVariable" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsToOutputReference.property.inputVariable"></a>

```java
public java.lang.String getInputVariable();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsToOutputReference.property.internalValue"></a>

```java
public GoogleSaasRuntimeUnitKindInputVariableMappingsTo getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsTo">GoogleSaasRuntimeUnitKindInputVariableMappingsTo</a>

---


### GoogleSaasRuntimeUnitKindOutputVariableMappingsFromOutputReference <a name="GoogleSaasRuntimeUnitKindOutputVariableMappingsFromOutputReference" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsFromOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsFromOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_saas_runtime_unit_kind.GoogleSaasRuntimeUnitKindOutputVariableMappingsFromOutputReference;

new GoogleSaasRuntimeUnitKindOutputVariableMappingsFromOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsFromOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsFromOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsFromOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsFromOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsFromOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsFromOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsFromOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsFromOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsFromOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsFromOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsFromOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsFromOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsFromOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsFromOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsFromOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsFromOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsFromOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsFromOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsFromOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsFromOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsFromOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsFromOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsFromOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsFromOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsFromOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsFromOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsFromOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsFromOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsFromOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsFromOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsFromOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsFromOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsFromOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsFromOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsFromOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsFromOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsFromOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsFromOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsFromOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsFromOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsFromOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsFromOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsFromOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsFromOutputReference.property.dependencyInput">dependencyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsFromOutputReference.property.outputVariableInput">outputVariableInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsFromOutputReference.property.dependency">dependency</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsFromOutputReference.property.outputVariable">outputVariable</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsFromOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsFrom">GoogleSaasRuntimeUnitKindOutputVariableMappingsFrom</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsFromOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsFromOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `dependencyInput`<sup>Optional</sup> <a name="dependencyInput" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsFromOutputReference.property.dependencyInput"></a>

```java
public java.lang.String getDependencyInput();
```

- *Type:* java.lang.String

---

##### `outputVariableInput`<sup>Optional</sup> <a name="outputVariableInput" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsFromOutputReference.property.outputVariableInput"></a>

```java
public java.lang.String getOutputVariableInput();
```

- *Type:* java.lang.String

---

##### `dependency`<sup>Required</sup> <a name="dependency" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsFromOutputReference.property.dependency"></a>

```java
public java.lang.String getDependency();
```

- *Type:* java.lang.String

---

##### `outputVariable`<sup>Required</sup> <a name="outputVariable" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsFromOutputReference.property.outputVariable"></a>

```java
public java.lang.String getOutputVariable();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsFromOutputReference.property.internalValue"></a>

```java
public GoogleSaasRuntimeUnitKindOutputVariableMappingsFrom getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsFrom">GoogleSaasRuntimeUnitKindOutputVariableMappingsFrom</a>

---


### GoogleSaasRuntimeUnitKindOutputVariableMappingsList <a name="GoogleSaasRuntimeUnitKindOutputVariableMappingsList" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsList.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_saas_runtime_unit_kind.GoogleSaasRuntimeUnitKindOutputVariableMappingsList;

new GoogleSaasRuntimeUnitKindOutputVariableMappingsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsList.get"></a>

```java
public GoogleSaasRuntimeUnitKindOutputVariableMappingsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappings">GoogleSaasRuntimeUnitKindOutputVariableMappings</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<GoogleSaasRuntimeUnitKindOutputVariableMappings> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappings">GoogleSaasRuntimeUnitKindOutputVariableMappings</a>>

---


### GoogleSaasRuntimeUnitKindOutputVariableMappingsOutputReference <a name="GoogleSaasRuntimeUnitKindOutputVariableMappingsOutputReference" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_saas_runtime_unit_kind.GoogleSaasRuntimeUnitKindOutputVariableMappingsOutputReference;

new GoogleSaasRuntimeUnitKindOutputVariableMappingsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsOutputReference.putFrom">putFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsOutputReference.putTo">putTo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsOutputReference.resetFrom">resetFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsOutputReference.resetTo">resetTo</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putFrom` <a name="putFrom" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsOutputReference.putFrom"></a>

```java
public void putFrom(GoogleSaasRuntimeUnitKindOutputVariableMappingsFrom value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsOutputReference.putFrom.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsFrom">GoogleSaasRuntimeUnitKindOutputVariableMappingsFrom</a>

---

##### `putTo` <a name="putTo" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsOutputReference.putTo"></a>

```java
public void putTo(GoogleSaasRuntimeUnitKindOutputVariableMappingsTo value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsOutputReference.putTo.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsTo">GoogleSaasRuntimeUnitKindOutputVariableMappingsTo</a>

---

##### `resetFrom` <a name="resetFrom" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsOutputReference.resetFrom"></a>

```java
public void resetFrom()
```

##### `resetTo` <a name="resetTo" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsOutputReference.resetTo"></a>

```java
public void resetTo()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsOutputReference.property.from">from</a></code> | <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsFromOutputReference">GoogleSaasRuntimeUnitKindOutputVariableMappingsFromOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsOutputReference.property.to">to</a></code> | <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsToOutputReference">GoogleSaasRuntimeUnitKindOutputVariableMappingsToOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsOutputReference.property.fromInput">fromInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsFrom">GoogleSaasRuntimeUnitKindOutputVariableMappingsFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsOutputReference.property.toInput">toInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsTo">GoogleSaasRuntimeUnitKindOutputVariableMappingsTo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsOutputReference.property.variableInput">variableInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsOutputReference.property.variable">variable</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappings">GoogleSaasRuntimeUnitKindOutputVariableMappings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `from`<sup>Required</sup> <a name="from" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsOutputReference.property.from"></a>

```java
public GoogleSaasRuntimeUnitKindOutputVariableMappingsFromOutputReference getFrom();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsFromOutputReference">GoogleSaasRuntimeUnitKindOutputVariableMappingsFromOutputReference</a>

---

##### `to`<sup>Required</sup> <a name="to" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsOutputReference.property.to"></a>

```java
public GoogleSaasRuntimeUnitKindOutputVariableMappingsToOutputReference getTo();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsToOutputReference">GoogleSaasRuntimeUnitKindOutputVariableMappingsToOutputReference</a>

---

##### `fromInput`<sup>Optional</sup> <a name="fromInput" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsOutputReference.property.fromInput"></a>

```java
public GoogleSaasRuntimeUnitKindOutputVariableMappingsFrom getFromInput();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsFrom">GoogleSaasRuntimeUnitKindOutputVariableMappingsFrom</a>

---

##### `toInput`<sup>Optional</sup> <a name="toInput" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsOutputReference.property.toInput"></a>

```java
public GoogleSaasRuntimeUnitKindOutputVariableMappingsTo getToInput();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsTo">GoogleSaasRuntimeUnitKindOutputVariableMappingsTo</a>

---

##### `variableInput`<sup>Optional</sup> <a name="variableInput" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsOutputReference.property.variableInput"></a>

```java
public java.lang.String getVariableInput();
```

- *Type:* java.lang.String

---

##### `variable`<sup>Required</sup> <a name="variable" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsOutputReference.property.variable"></a>

```java
public java.lang.String getVariable();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsOutputReference.property.internalValue"></a>

```java
public IResolvable|GoogleSaasRuntimeUnitKindOutputVariableMappings getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappings">GoogleSaasRuntimeUnitKindOutputVariableMappings</a>

---


### GoogleSaasRuntimeUnitKindOutputVariableMappingsToOutputReference <a name="GoogleSaasRuntimeUnitKindOutputVariableMappingsToOutputReference" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsToOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsToOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_saas_runtime_unit_kind.GoogleSaasRuntimeUnitKindOutputVariableMappingsToOutputReference;

new GoogleSaasRuntimeUnitKindOutputVariableMappingsToOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsToOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsToOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsToOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsToOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsToOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsToOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsToOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsToOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsToOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsToOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsToOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsToOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsToOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsToOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsToOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsToOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsToOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsToOutputReference.resetIgnoreForLookup">resetIgnoreForLookup</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsToOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsToOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsToOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsToOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsToOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsToOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsToOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsToOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsToOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsToOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsToOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsToOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsToOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsToOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsToOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsToOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsToOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsToOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsToOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsToOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsToOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsToOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsToOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsToOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetIgnoreForLookup` <a name="resetIgnoreForLookup" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsToOutputReference.resetIgnoreForLookup"></a>

```java
public void resetIgnoreForLookup()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsToOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsToOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsToOutputReference.property.dependencyInput">dependencyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsToOutputReference.property.ignoreForLookupInput">ignoreForLookupInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsToOutputReference.property.inputVariableInput">inputVariableInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsToOutputReference.property.dependency">dependency</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsToOutputReference.property.ignoreForLookup">ignoreForLookup</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsToOutputReference.property.inputVariable">inputVariable</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsToOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsTo">GoogleSaasRuntimeUnitKindOutputVariableMappingsTo</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsToOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsToOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `dependencyInput`<sup>Optional</sup> <a name="dependencyInput" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsToOutputReference.property.dependencyInput"></a>

```java
public java.lang.String getDependencyInput();
```

- *Type:* java.lang.String

---

##### `ignoreForLookupInput`<sup>Optional</sup> <a name="ignoreForLookupInput" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsToOutputReference.property.ignoreForLookupInput"></a>

```java
public java.lang.Boolean|IResolvable getIgnoreForLookupInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `inputVariableInput`<sup>Optional</sup> <a name="inputVariableInput" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsToOutputReference.property.inputVariableInput"></a>

```java
public java.lang.String getInputVariableInput();
```

- *Type:* java.lang.String

---

##### `dependency`<sup>Required</sup> <a name="dependency" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsToOutputReference.property.dependency"></a>

```java
public java.lang.String getDependency();
```

- *Type:* java.lang.String

---

##### `ignoreForLookup`<sup>Required</sup> <a name="ignoreForLookup" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsToOutputReference.property.ignoreForLookup"></a>

```java
public java.lang.Boolean|IResolvable getIgnoreForLookup();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `inputVariable`<sup>Required</sup> <a name="inputVariable" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsToOutputReference.property.inputVariable"></a>

```java
public java.lang.String getInputVariable();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsToOutputReference.property.internalValue"></a>

```java
public GoogleSaasRuntimeUnitKindOutputVariableMappingsTo getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsTo">GoogleSaasRuntimeUnitKindOutputVariableMappingsTo</a>

---


### GoogleSaasRuntimeUnitKindTimeoutsOutputReference <a name="GoogleSaasRuntimeUnitKindTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindTimeoutsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_saas_runtime_unit_kind.GoogleSaasRuntimeUnitKindTimeoutsOutputReference;

new GoogleSaasRuntimeUnitKindTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindTimeouts">GoogleSaasRuntimeUnitKindTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindTimeoutsOutputReference.property.internalValue"></a>

```java
public IResolvable|GoogleSaasRuntimeUnitKindTimeouts getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindTimeouts">GoogleSaasRuntimeUnitKindTimeouts</a>

---



