# `googleSaasRuntimeUnitKind` Submodule <a name="`googleSaasRuntimeUnitKind` Submodule" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleSaasRuntimeUnitKind <a name="GoogleSaasRuntimeUnitKind" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_saas_runtime_unit_kind google_saas_runtime_unit_kind}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.Initializer"></a>

```python
from cdktn_provider_google_beta import google_saas_runtime_unit_kind

googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  location: str,
  saas: str,
  unit_kind_id: str,
  annotations: typing.Mapping[str] = None,
  default_release: str = None,
  deletion_policy: str = None,
  dependencies: IResolvable | typing.List[GoogleSaasRuntimeUnitKindDependencies] = None,
  id: str = None,
  input_variable_mappings: IResolvable | typing.List[GoogleSaasRuntimeUnitKindInputVariableMappings] = None,
  labels: typing.Mapping[str] = None,
  output_variable_mappings: IResolvable | typing.List[GoogleSaasRuntimeUnitKindOutputVariableMappings] = None,
  project: str = None,
  timeouts: GoogleSaasRuntimeUnitKindTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.Initializer.parameter.location">location</a></code> | <code>str</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.Initializer.parameter.saas">saas</a></code> | <code>str</code> | A reference to the Saas that defines the product (managed service) that the producer wants to manage with App Lifecycle Manager. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.Initializer.parameter.unitKindId">unit_kind_id</a></code> | <code>str</code> | The ID value for the new unit kind. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.Initializer.parameter.annotations">annotations</a></code> | <code>typing.Mapping[str]</code> | Annotations is an unstructured key-value map stored with a resource that may be set by external tools to store and retrieve arbitrary metadata. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.Initializer.parameter.defaultRelease">default_release</a></code> | <code>str</code> | A reference to the Release object to use as default for creating new units of this UnitKind. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.Initializer.parameter.deletionPolicy">deletion_policy</a></code> | <code>str</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.Initializer.parameter.dependencies">dependencies</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindDependencies">GoogleSaasRuntimeUnitKindDependencies</a>]</code> | dependencies block. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_saas_runtime_unit_kind#id GoogleSaasRuntimeUnitKind#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.Initializer.parameter.inputVariableMappings">input_variable_mappings</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappings">GoogleSaasRuntimeUnitKindInputVariableMappings</a>]</code> | input_variable_mappings block. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.Initializer.parameter.labels">labels</a></code> | <code>typing.Mapping[str]</code> | The labels on the resource, which can be used for categorization. similar to Kubernetes resource labels. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.Initializer.parameter.outputVariableMappings">output_variable_mappings</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappings">GoogleSaasRuntimeUnitKindOutputVariableMappings</a>]</code> | output_variable_mappings block. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_saas_runtime_unit_kind#project GoogleSaasRuntimeUnitKind#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindTimeouts">GoogleSaasRuntimeUnitKindTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.Initializer.parameter.location"></a>

- *Type:* str

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_saas_runtime_unit_kind#location GoogleSaasRuntimeUnitKind#location}

---

##### `saas`<sup>Required</sup> <a name="saas" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.Initializer.parameter.saas"></a>

- *Type:* str

A reference to the Saas that defines the product (managed service) that the producer wants to manage with App Lifecycle Manager.

Part of the App Lifecycle Manager
common data model. Immutable once set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_saas_runtime_unit_kind#saas GoogleSaasRuntimeUnitKind#saas}

---

##### `unit_kind_id`<sup>Required</sup> <a name="unit_kind_id" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.Initializer.parameter.unitKindId"></a>

- *Type:* str

The ID value for the new unit kind.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_saas_runtime_unit_kind#unit_kind_id GoogleSaasRuntimeUnitKind#unit_kind_id}

---

##### `annotations`<sup>Optional</sup> <a name="annotations" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.Initializer.parameter.annotations"></a>

- *Type:* typing.Mapping[str]

Annotations is an unstructured key-value map stored with a resource that may be set by external tools to store and retrieve arbitrary metadata.

They are not queryable and should be preserved when modifying objects.

More info: https://kubernetes.io/docs/user-guide/annotations

**Note**: This field is non-authoritative, and will only manage the annotations present in your configuration.
Please refer to the field 'effective_annotations' for all of the annotations present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_saas_runtime_unit_kind#annotations GoogleSaasRuntimeUnitKind#annotations}

---

##### `default_release`<sup>Optional</sup> <a name="default_release" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.Initializer.parameter.defaultRelease"></a>

- *Type:* str

A reference to the Release object to use as default for creating new units of this UnitKind.

If not specified, a new unit must explicitly reference which release to use
for its creation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_saas_runtime_unit_kind#default_release GoogleSaasRuntimeUnitKind#default_release}

---

##### `deletion_policy`<sup>Optional</sup> <a name="deletion_policy" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.Initializer.parameter.deletionPolicy"></a>

- *Type:* str

Whether Terraform will be prevented from destroying the instance.

Defaults to "DELETE".
When a 'terraform destroy' or 'terraform apply' would delete the instance,
the command will fail if this field is set to "PREVENT" in Terraform state.
When set to "ABANDON", the command will remove the resource from Terraform
management without updating or deleting the resource in the API.
When set to "DELETE", deleting the resource is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_saas_runtime_unit_kind#deletion_policy GoogleSaasRuntimeUnitKind#deletion_policy}

---

##### `dependencies`<sup>Optional</sup> <a name="dependencies" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.Initializer.parameter.dependencies"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindDependencies">GoogleSaasRuntimeUnitKindDependencies</a>]

dependencies block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_saas_runtime_unit_kind#dependencies GoogleSaasRuntimeUnitKind#dependencies}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_saas_runtime_unit_kind#id GoogleSaasRuntimeUnitKind#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `input_variable_mappings`<sup>Optional</sup> <a name="input_variable_mappings" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.Initializer.parameter.inputVariableMappings"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappings">GoogleSaasRuntimeUnitKindInputVariableMappings</a>]

input_variable_mappings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_saas_runtime_unit_kind#input_variable_mappings GoogleSaasRuntimeUnitKind#input_variable_mappings}

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.Initializer.parameter.labels"></a>

- *Type:* typing.Mapping[str]

The labels on the resource, which can be used for categorization. similar to Kubernetes resource labels.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_saas_runtime_unit_kind#labels GoogleSaasRuntimeUnitKind#labels}

---

##### `output_variable_mappings`<sup>Optional</sup> <a name="output_variable_mappings" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.Initializer.parameter.outputVariableMappings"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappings">GoogleSaasRuntimeUnitKindOutputVariableMappings</a>]

output_variable_mappings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_saas_runtime_unit_kind#output_variable_mappings GoogleSaasRuntimeUnitKind#output_variable_mappings}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_saas_runtime_unit_kind#project GoogleSaasRuntimeUnitKind#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindTimeouts">GoogleSaasRuntimeUnitKindTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_saas_runtime_unit_kind#timeouts GoogleSaasRuntimeUnitKind#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.putDependencies">put_dependencies</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.putInputVariableMappings">put_input_variable_mappings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.putOutputVariableMappings">put_output_variable_mappings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.resetAnnotations">reset_annotations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.resetDefaultRelease">reset_default_release</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.resetDeletionPolicy">reset_deletion_policy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.resetDependencies">reset_dependencies</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.resetInputVariableMappings">reset_input_variable_mappings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.resetLabels">reset_labels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.resetOutputVariableMappings">reset_output_variable_mappings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.with"></a>

```python
def with(
  mixins: *IMixin
) -> IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_dependencies` <a name="put_dependencies" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.putDependencies"></a>

```python
def put_dependencies(
  value: IResolvable | typing.List[GoogleSaasRuntimeUnitKindDependencies]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.putDependencies.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindDependencies">GoogleSaasRuntimeUnitKindDependencies</a>]

---

##### `put_input_variable_mappings` <a name="put_input_variable_mappings" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.putInputVariableMappings"></a>

```python
def put_input_variable_mappings(
  value: IResolvable | typing.List[GoogleSaasRuntimeUnitKindInputVariableMappings]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.putInputVariableMappings.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappings">GoogleSaasRuntimeUnitKindInputVariableMappings</a>]

---

##### `put_output_variable_mappings` <a name="put_output_variable_mappings" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.putOutputVariableMappings"></a>

```python
def put_output_variable_mappings(
  value: IResolvable | typing.List[GoogleSaasRuntimeUnitKindOutputVariableMappings]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.putOutputVariableMappings.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappings">GoogleSaasRuntimeUnitKindOutputVariableMappings</a>]

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_saas_runtime_unit_kind#create GoogleSaasRuntimeUnitKind#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_saas_runtime_unit_kind#delete GoogleSaasRuntimeUnitKind#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_saas_runtime_unit_kind#update GoogleSaasRuntimeUnitKind#update}.

---

##### `reset_annotations` <a name="reset_annotations" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.resetAnnotations"></a>

```python
def reset_annotations() -> None
```

##### `reset_default_release` <a name="reset_default_release" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.resetDefaultRelease"></a>

```python
def reset_default_release() -> None
```

##### `reset_deletion_policy` <a name="reset_deletion_policy" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.resetDeletionPolicy"></a>

```python
def reset_deletion_policy() -> None
```

##### `reset_dependencies` <a name="reset_dependencies" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.resetDependencies"></a>

```python
def reset_dependencies() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_input_variable_mappings` <a name="reset_input_variable_mappings" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.resetInputVariableMappings"></a>

```python
def reset_input_variable_mappings() -> None
```

##### `reset_labels` <a name="reset_labels" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.resetLabels"></a>

```python
def reset_labels() -> None
```

##### `reset_output_variable_mappings` <a name="reset_output_variable_mappings" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.resetOutputVariableMappings"></a>

```python
def reset_output_variable_mappings() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a GoogleSaasRuntimeUnitKind resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.isConstruct"></a>

```python
from cdktn_provider_google_beta import google_saas_runtime_unit_kind

googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.is_construct(
  x: typing.Any
)
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

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.isTerraformElement"></a>

```python
from cdktn_provider_google_beta import google_saas_runtime_unit_kind

googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.isTerraformResource"></a>

```python
from cdktn_provider_google_beta import google_saas_runtime_unit_kind

googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.generateConfigForImport"></a>

```python
from cdktn_provider_google_beta import google_saas_runtime_unit_kind

googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a GoogleSaasRuntimeUnitKind resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the GoogleSaasRuntimeUnitKind to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing GoogleSaasRuntimeUnitKind that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_saas_runtime_unit_kind#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the GoogleSaasRuntimeUnitKind to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.property.createTime">create_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.property.dependencies">dependencies</a></code> | <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindDependenciesList">GoogleSaasRuntimeUnitKindDependenciesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.property.effectiveAnnotations">effective_annotations</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.property.effectiveLabels">effective_labels</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.property.etag">etag</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.property.inputVariableMappings">input_variable_mappings</a></code> | <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsList">GoogleSaasRuntimeUnitKindInputVariableMappingsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.property.outputVariableMappings">output_variable_mappings</a></code> | <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsList">GoogleSaasRuntimeUnitKindOutputVariableMappingsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.property.terraformLabels">terraform_labels</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindTimeoutsOutputReference">GoogleSaasRuntimeUnitKindTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.property.uid">uid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.property.updateTime">update_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.property.annotationsInput">annotations_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.property.defaultReleaseInput">default_release_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.property.deletionPolicyInput">deletion_policy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.property.dependenciesInput">dependencies_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindDependencies">GoogleSaasRuntimeUnitKindDependencies</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.property.inputVariableMappingsInput">input_variable_mappings_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappings">GoogleSaasRuntimeUnitKindInputVariableMappings</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.property.labelsInput">labels_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.property.outputVariableMappingsInput">output_variable_mappings_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappings">GoogleSaasRuntimeUnitKindOutputVariableMappings</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.property.saasInput">saas_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.property.timeoutsInput">timeouts_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindTimeouts">GoogleSaasRuntimeUnitKindTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.property.unitKindIdInput">unit_kind_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.property.annotations">annotations</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.property.defaultRelease">default_release</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.property.deletionPolicy">deletion_policy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.property.project">project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.property.saas">saas</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.property.unitKindId">unit_kind_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `create_time`<sup>Required</sup> <a name="create_time" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.property.createTime"></a>

```python
create_time: str
```

- *Type:* str

---

##### `dependencies`<sup>Required</sup> <a name="dependencies" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.property.dependencies"></a>

```python
dependencies: GoogleSaasRuntimeUnitKindDependenciesList
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindDependenciesList">GoogleSaasRuntimeUnitKindDependenciesList</a>

---

##### `effective_annotations`<sup>Required</sup> <a name="effective_annotations" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.property.effectiveAnnotations"></a>

```python
effective_annotations: StringMap
```

- *Type:* cdktn.StringMap

---

##### `effective_labels`<sup>Required</sup> <a name="effective_labels" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.property.effectiveLabels"></a>

```python
effective_labels: StringMap
```

- *Type:* cdktn.StringMap

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.property.etag"></a>

```python
etag: str
```

- *Type:* str

---

##### `input_variable_mappings`<sup>Required</sup> <a name="input_variable_mappings" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.property.inputVariableMappings"></a>

```python
input_variable_mappings: GoogleSaasRuntimeUnitKindInputVariableMappingsList
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsList">GoogleSaasRuntimeUnitKindInputVariableMappingsList</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `output_variable_mappings`<sup>Required</sup> <a name="output_variable_mappings" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.property.outputVariableMappings"></a>

```python
output_variable_mappings: GoogleSaasRuntimeUnitKindOutputVariableMappingsList
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsList">GoogleSaasRuntimeUnitKindOutputVariableMappingsList</a>

---

##### `terraform_labels`<sup>Required</sup> <a name="terraform_labels" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.property.terraformLabels"></a>

```python
terraform_labels: StringMap
```

- *Type:* cdktn.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.property.timeouts"></a>

```python
timeouts: GoogleSaasRuntimeUnitKindTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindTimeoutsOutputReference">GoogleSaasRuntimeUnitKindTimeoutsOutputReference</a>

---

##### `uid`<sup>Required</sup> <a name="uid" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.property.uid"></a>

```python
uid: str
```

- *Type:* str

---

##### `update_time`<sup>Required</sup> <a name="update_time" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.property.updateTime"></a>

```python
update_time: str
```

- *Type:* str

---

##### `annotations_input`<sup>Optional</sup> <a name="annotations_input" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.property.annotationsInput"></a>

```python
annotations_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `default_release_input`<sup>Optional</sup> <a name="default_release_input" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.property.defaultReleaseInput"></a>

```python
default_release_input: str
```

- *Type:* str

---

##### `deletion_policy_input`<sup>Optional</sup> <a name="deletion_policy_input" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.property.deletionPolicyInput"></a>

```python
deletion_policy_input: str
```

- *Type:* str

---

##### `dependencies_input`<sup>Optional</sup> <a name="dependencies_input" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.property.dependenciesInput"></a>

```python
dependencies_input: IResolvable | typing.List[GoogleSaasRuntimeUnitKindDependencies]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindDependencies">GoogleSaasRuntimeUnitKindDependencies</a>]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `input_variable_mappings_input`<sup>Optional</sup> <a name="input_variable_mappings_input" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.property.inputVariableMappingsInput"></a>

```python
input_variable_mappings_input: IResolvable | typing.List[GoogleSaasRuntimeUnitKindInputVariableMappings]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappings">GoogleSaasRuntimeUnitKindInputVariableMappings</a>]

---

##### `labels_input`<sup>Optional</sup> <a name="labels_input" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.property.labelsInput"></a>

```python
labels_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `output_variable_mappings_input`<sup>Optional</sup> <a name="output_variable_mappings_input" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.property.outputVariableMappingsInput"></a>

```python
output_variable_mappings_input: IResolvable | typing.List[GoogleSaasRuntimeUnitKindOutputVariableMappings]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappings">GoogleSaasRuntimeUnitKindOutputVariableMappings</a>]

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `saas_input`<sup>Optional</sup> <a name="saas_input" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.property.saasInput"></a>

```python
saas_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.property.timeoutsInput"></a>

```python
timeouts_input: IResolvable | GoogleSaasRuntimeUnitKindTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindTimeouts">GoogleSaasRuntimeUnitKindTimeouts</a>

---

##### `unit_kind_id_input`<sup>Optional</sup> <a name="unit_kind_id_input" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.property.unitKindIdInput"></a>

```python
unit_kind_id_input: str
```

- *Type:* str

---

##### `annotations`<sup>Required</sup> <a name="annotations" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.property.annotations"></a>

```python
annotations: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `default_release`<sup>Required</sup> <a name="default_release" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.property.defaultRelease"></a>

```python
default_release: str
```

- *Type:* str

---

##### `deletion_policy`<sup>Required</sup> <a name="deletion_policy" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.property.deletionPolicy"></a>

```python
deletion_policy: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.property.project"></a>

```python
project: str
```

- *Type:* str

---

##### `saas`<sup>Required</sup> <a name="saas" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.property.saas"></a>

```python
saas: str
```

- *Type:* str

---

##### `unit_kind_id`<sup>Required</sup> <a name="unit_kind_id" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.property.unitKindId"></a>

```python
unit_kind_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleSaasRuntimeUnitKindConfig <a name="GoogleSaasRuntimeUnitKindConfig" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindConfig.Initializer"></a>

```python
from cdktn_provider_google_beta import google_saas_runtime_unit_kind

googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  location: str,
  saas: str,
  unit_kind_id: str,
  annotations: typing.Mapping[str] = None,
  default_release: str = None,
  deletion_policy: str = None,
  dependencies: IResolvable | typing.List[GoogleSaasRuntimeUnitKindDependencies] = None,
  id: str = None,
  input_variable_mappings: IResolvable | typing.List[GoogleSaasRuntimeUnitKindInputVariableMappings] = None,
  labels: typing.Mapping[str] = None,
  output_variable_mappings: IResolvable | typing.List[GoogleSaasRuntimeUnitKindOutputVariableMappings] = None,
  project: str = None,
  timeouts: GoogleSaasRuntimeUnitKindTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindConfig.property.location">location</a></code> | <code>str</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindConfig.property.saas">saas</a></code> | <code>str</code> | A reference to the Saas that defines the product (managed service) that the producer wants to manage with App Lifecycle Manager. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindConfig.property.unitKindId">unit_kind_id</a></code> | <code>str</code> | The ID value for the new unit kind. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindConfig.property.annotations">annotations</a></code> | <code>typing.Mapping[str]</code> | Annotations is an unstructured key-value map stored with a resource that may be set by external tools to store and retrieve arbitrary metadata. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindConfig.property.defaultRelease">default_release</a></code> | <code>str</code> | A reference to the Release object to use as default for creating new units of this UnitKind. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindConfig.property.deletionPolicy">deletion_policy</a></code> | <code>str</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindConfig.property.dependencies">dependencies</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindDependencies">GoogleSaasRuntimeUnitKindDependencies</a>]</code> | dependencies block. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_saas_runtime_unit_kind#id GoogleSaasRuntimeUnitKind#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindConfig.property.inputVariableMappings">input_variable_mappings</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappings">GoogleSaasRuntimeUnitKindInputVariableMappings</a>]</code> | input_variable_mappings block. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindConfig.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | The labels on the resource, which can be used for categorization. similar to Kubernetes resource labels. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindConfig.property.outputVariableMappings">output_variable_mappings</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappings">GoogleSaasRuntimeUnitKindOutputVariableMappings</a>]</code> | output_variable_mappings block. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_saas_runtime_unit_kind#project GoogleSaasRuntimeUnitKind#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindTimeouts">GoogleSaasRuntimeUnitKindTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindConfig.property.location"></a>

```python
location: str
```

- *Type:* str

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_saas_runtime_unit_kind#location GoogleSaasRuntimeUnitKind#location}

---

##### `saas`<sup>Required</sup> <a name="saas" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindConfig.property.saas"></a>

```python
saas: str
```

- *Type:* str

A reference to the Saas that defines the product (managed service) that the producer wants to manage with App Lifecycle Manager.

Part of the App Lifecycle Manager
common data model. Immutable once set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_saas_runtime_unit_kind#saas GoogleSaasRuntimeUnitKind#saas}

---

##### `unit_kind_id`<sup>Required</sup> <a name="unit_kind_id" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindConfig.property.unitKindId"></a>

```python
unit_kind_id: str
```

- *Type:* str

The ID value for the new unit kind.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_saas_runtime_unit_kind#unit_kind_id GoogleSaasRuntimeUnitKind#unit_kind_id}

---

##### `annotations`<sup>Optional</sup> <a name="annotations" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindConfig.property.annotations"></a>

```python
annotations: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Annotations is an unstructured key-value map stored with a resource that may be set by external tools to store and retrieve arbitrary metadata.

They are not queryable and should be preserved when modifying objects.

More info: https://kubernetes.io/docs/user-guide/annotations

**Note**: This field is non-authoritative, and will only manage the annotations present in your configuration.
Please refer to the field 'effective_annotations' for all of the annotations present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_saas_runtime_unit_kind#annotations GoogleSaasRuntimeUnitKind#annotations}

---

##### `default_release`<sup>Optional</sup> <a name="default_release" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindConfig.property.defaultRelease"></a>

```python
default_release: str
```

- *Type:* str

A reference to the Release object to use as default for creating new units of this UnitKind.

If not specified, a new unit must explicitly reference which release to use
for its creation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_saas_runtime_unit_kind#default_release GoogleSaasRuntimeUnitKind#default_release}

---

##### `deletion_policy`<sup>Optional</sup> <a name="deletion_policy" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindConfig.property.deletionPolicy"></a>

```python
deletion_policy: str
```

- *Type:* str

Whether Terraform will be prevented from destroying the instance.

Defaults to "DELETE".
When a 'terraform destroy' or 'terraform apply' would delete the instance,
the command will fail if this field is set to "PREVENT" in Terraform state.
When set to "ABANDON", the command will remove the resource from Terraform
management without updating or deleting the resource in the API.
When set to "DELETE", deleting the resource is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_saas_runtime_unit_kind#deletion_policy GoogleSaasRuntimeUnitKind#deletion_policy}

---

##### `dependencies`<sup>Optional</sup> <a name="dependencies" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindConfig.property.dependencies"></a>

```python
dependencies: IResolvable | typing.List[GoogleSaasRuntimeUnitKindDependencies]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindDependencies">GoogleSaasRuntimeUnitKindDependencies</a>]

dependencies block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_saas_runtime_unit_kind#dependencies GoogleSaasRuntimeUnitKind#dependencies}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_saas_runtime_unit_kind#id GoogleSaasRuntimeUnitKind#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `input_variable_mappings`<sup>Optional</sup> <a name="input_variable_mappings" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindConfig.property.inputVariableMappings"></a>

```python
input_variable_mappings: IResolvable | typing.List[GoogleSaasRuntimeUnitKindInputVariableMappings]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappings">GoogleSaasRuntimeUnitKindInputVariableMappings</a>]

input_variable_mappings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_saas_runtime_unit_kind#input_variable_mappings GoogleSaasRuntimeUnitKind#input_variable_mappings}

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindConfig.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

The labels on the resource, which can be used for categorization. similar to Kubernetes resource labels.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_saas_runtime_unit_kind#labels GoogleSaasRuntimeUnitKind#labels}

---

##### `output_variable_mappings`<sup>Optional</sup> <a name="output_variable_mappings" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindConfig.property.outputVariableMappings"></a>

```python
output_variable_mappings: IResolvable | typing.List[GoogleSaasRuntimeUnitKindOutputVariableMappings]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappings">GoogleSaasRuntimeUnitKindOutputVariableMappings</a>]

output_variable_mappings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_saas_runtime_unit_kind#output_variable_mappings GoogleSaasRuntimeUnitKind#output_variable_mappings}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_saas_runtime_unit_kind#project GoogleSaasRuntimeUnitKind#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindConfig.property.timeouts"></a>

```python
timeouts: GoogleSaasRuntimeUnitKindTimeouts
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindTimeouts">GoogleSaasRuntimeUnitKindTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_saas_runtime_unit_kind#timeouts GoogleSaasRuntimeUnitKind#timeouts}

---

### GoogleSaasRuntimeUnitKindDependencies <a name="GoogleSaasRuntimeUnitKindDependencies" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindDependencies"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindDependencies.Initializer"></a>

```python
from cdktn_provider_google_beta import google_saas_runtime_unit_kind

googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindDependencies(
  alias: str,
  unit_kind: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindDependencies.property.alias">alias</a></code> | <code>str</code> | An alias for the dependency. Used for input variable mapping. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindDependencies.property.unitKind">unit_kind</a></code> | <code>str</code> | The unit kind of the dependency. |

---

##### `alias`<sup>Required</sup> <a name="alias" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindDependencies.property.alias"></a>

```python
alias: str
```

- *Type:* str

An alias for the dependency. Used for input variable mapping.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_saas_runtime_unit_kind#alias GoogleSaasRuntimeUnitKind#alias}

---

##### `unit_kind`<sup>Required</sup> <a name="unit_kind" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindDependencies.property.unitKind"></a>

```python
unit_kind: str
```

- *Type:* str

The unit kind of the dependency.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_saas_runtime_unit_kind#unit_kind GoogleSaasRuntimeUnitKind#unit_kind}

---

### GoogleSaasRuntimeUnitKindInputVariableMappings <a name="GoogleSaasRuntimeUnitKindInputVariableMappings" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappings.Initializer"></a>

```python
from cdktn_provider_google_beta import google_saas_runtime_unit_kind

googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappings(
  variable: str,
  from: GoogleSaasRuntimeUnitKindInputVariableMappingsFrom = None,
  to: GoogleSaasRuntimeUnitKindInputVariableMappingsTo = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappings.property.variable">variable</a></code> | <code>str</code> | name of the variable. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappings.property.from">from</a></code> | <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsFrom">GoogleSaasRuntimeUnitKindInputVariableMappingsFrom</a></code> | from block. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappings.property.to">to</a></code> | <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsTo">GoogleSaasRuntimeUnitKindInputVariableMappingsTo</a></code> | to block. |

---

##### `variable`<sup>Required</sup> <a name="variable" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappings.property.variable"></a>

```python
variable: str
```

- *Type:* str

name of the variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_saas_runtime_unit_kind#variable GoogleSaasRuntimeUnitKind#variable}

---

##### `from`<sup>Optional</sup> <a name="from" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappings.property.from"></a>

```python
from: GoogleSaasRuntimeUnitKindInputVariableMappingsFrom
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsFrom">GoogleSaasRuntimeUnitKindInputVariableMappingsFrom</a>

from block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_saas_runtime_unit_kind#from GoogleSaasRuntimeUnitKind#from}

---

##### `to`<sup>Optional</sup> <a name="to" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappings.property.to"></a>

```python
to: GoogleSaasRuntimeUnitKindInputVariableMappingsTo
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsTo">GoogleSaasRuntimeUnitKindInputVariableMappingsTo</a>

to block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_saas_runtime_unit_kind#to GoogleSaasRuntimeUnitKind#to}

---

### GoogleSaasRuntimeUnitKindInputVariableMappingsFrom <a name="GoogleSaasRuntimeUnitKindInputVariableMappingsFrom" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsFrom"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsFrom.Initializer"></a>

```python
from cdktn_provider_google_beta import google_saas_runtime_unit_kind

googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsFrom(
  dependency: str,
  output_variable: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsFrom.property.dependency">dependency</a></code> | <code>str</code> | Alias of the dependency that the outputVariable will pass its value to. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsFrom.property.outputVariable">output_variable</a></code> | <code>str</code> | Name of the outputVariable on the dependency. |

---

##### `dependency`<sup>Required</sup> <a name="dependency" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsFrom.property.dependency"></a>

```python
dependency: str
```

- *Type:* str

Alias of the dependency that the outputVariable will pass its value to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_saas_runtime_unit_kind#dependency GoogleSaasRuntimeUnitKind#dependency}

---

##### `output_variable`<sup>Required</sup> <a name="output_variable" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsFrom.property.outputVariable"></a>

```python
output_variable: str
```

- *Type:* str

Name of the outputVariable on the dependency.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_saas_runtime_unit_kind#output_variable GoogleSaasRuntimeUnitKind#output_variable}

---

### GoogleSaasRuntimeUnitKindInputVariableMappingsTo <a name="GoogleSaasRuntimeUnitKindInputVariableMappingsTo" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsTo"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsTo.Initializer"></a>

```python
from cdktn_provider_google_beta import google_saas_runtime_unit_kind

googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsTo(
  dependency: str,
  input_variable: str,
  ignore_for_lookup: bool | IResolvable = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsTo.property.dependency">dependency</a></code> | <code>str</code> | Alias of the dependency that the inputVariable will pass its value to. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsTo.property.inputVariable">input_variable</a></code> | <code>str</code> | Name of the inputVariable on the dependency. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsTo.property.ignoreForLookup">ignore_for_lookup</a></code> | <code>bool \| cdktn.IResolvable</code> | Tells App Lifecycle Manager if this mapping should be used during lookup or not. |

---

##### `dependency`<sup>Required</sup> <a name="dependency" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsTo.property.dependency"></a>

```python
dependency: str
```

- *Type:* str

Alias of the dependency that the inputVariable will pass its value to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_saas_runtime_unit_kind#dependency GoogleSaasRuntimeUnitKind#dependency}

---

##### `input_variable`<sup>Required</sup> <a name="input_variable" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsTo.property.inputVariable"></a>

```python
input_variable: str
```

- *Type:* str

Name of the inputVariable on the dependency.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_saas_runtime_unit_kind#input_variable GoogleSaasRuntimeUnitKind#input_variable}

---

##### `ignore_for_lookup`<sup>Optional</sup> <a name="ignore_for_lookup" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsTo.property.ignoreForLookup"></a>

```python
ignore_for_lookup: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Tells App Lifecycle Manager if this mapping should be used during lookup or not.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_saas_runtime_unit_kind#ignore_for_lookup GoogleSaasRuntimeUnitKind#ignore_for_lookup}

---

### GoogleSaasRuntimeUnitKindOutputVariableMappings <a name="GoogleSaasRuntimeUnitKindOutputVariableMappings" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappings.Initializer"></a>

```python
from cdktn_provider_google_beta import google_saas_runtime_unit_kind

googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappings(
  variable: str,
  from: GoogleSaasRuntimeUnitKindOutputVariableMappingsFrom = None,
  to: GoogleSaasRuntimeUnitKindOutputVariableMappingsTo = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappings.property.variable">variable</a></code> | <code>str</code> | name of the variable. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappings.property.from">from</a></code> | <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsFrom">GoogleSaasRuntimeUnitKindOutputVariableMappingsFrom</a></code> | from block. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappings.property.to">to</a></code> | <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsTo">GoogleSaasRuntimeUnitKindOutputVariableMappingsTo</a></code> | to block. |

---

##### `variable`<sup>Required</sup> <a name="variable" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappings.property.variable"></a>

```python
variable: str
```

- *Type:* str

name of the variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_saas_runtime_unit_kind#variable GoogleSaasRuntimeUnitKind#variable}

---

##### `from`<sup>Optional</sup> <a name="from" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappings.property.from"></a>

```python
from: GoogleSaasRuntimeUnitKindOutputVariableMappingsFrom
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsFrom">GoogleSaasRuntimeUnitKindOutputVariableMappingsFrom</a>

from block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_saas_runtime_unit_kind#from GoogleSaasRuntimeUnitKind#from}

---

##### `to`<sup>Optional</sup> <a name="to" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappings.property.to"></a>

```python
to: GoogleSaasRuntimeUnitKindOutputVariableMappingsTo
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsTo">GoogleSaasRuntimeUnitKindOutputVariableMappingsTo</a>

to block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_saas_runtime_unit_kind#to GoogleSaasRuntimeUnitKind#to}

---

### GoogleSaasRuntimeUnitKindOutputVariableMappingsFrom <a name="GoogleSaasRuntimeUnitKindOutputVariableMappingsFrom" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsFrom"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsFrom.Initializer"></a>

```python
from cdktn_provider_google_beta import google_saas_runtime_unit_kind

googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsFrom(
  dependency: str,
  output_variable: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsFrom.property.dependency">dependency</a></code> | <code>str</code> | Alias of the dependency that the outputVariable will pass its value to. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsFrom.property.outputVariable">output_variable</a></code> | <code>str</code> | Name of the outputVariable on the dependency. |

---

##### `dependency`<sup>Required</sup> <a name="dependency" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsFrom.property.dependency"></a>

```python
dependency: str
```

- *Type:* str

Alias of the dependency that the outputVariable will pass its value to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_saas_runtime_unit_kind#dependency GoogleSaasRuntimeUnitKind#dependency}

---

##### `output_variable`<sup>Required</sup> <a name="output_variable" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsFrom.property.outputVariable"></a>

```python
output_variable: str
```

- *Type:* str

Name of the outputVariable on the dependency.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_saas_runtime_unit_kind#output_variable GoogleSaasRuntimeUnitKind#output_variable}

---

### GoogleSaasRuntimeUnitKindOutputVariableMappingsTo <a name="GoogleSaasRuntimeUnitKindOutputVariableMappingsTo" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsTo"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsTo.Initializer"></a>

```python
from cdktn_provider_google_beta import google_saas_runtime_unit_kind

googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsTo(
  dependency: str,
  input_variable: str,
  ignore_for_lookup: bool | IResolvable = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsTo.property.dependency">dependency</a></code> | <code>str</code> | Alias of the dependency that the inputVariable will pass its value to. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsTo.property.inputVariable">input_variable</a></code> | <code>str</code> | Name of the inputVariable on the dependency. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsTo.property.ignoreForLookup">ignore_for_lookup</a></code> | <code>bool \| cdktn.IResolvable</code> | Tells App Lifecycle Manager if this mapping should be used during lookup or not. |

---

##### `dependency`<sup>Required</sup> <a name="dependency" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsTo.property.dependency"></a>

```python
dependency: str
```

- *Type:* str

Alias of the dependency that the inputVariable will pass its value to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_saas_runtime_unit_kind#dependency GoogleSaasRuntimeUnitKind#dependency}

---

##### `input_variable`<sup>Required</sup> <a name="input_variable" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsTo.property.inputVariable"></a>

```python
input_variable: str
```

- *Type:* str

Name of the inputVariable on the dependency.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_saas_runtime_unit_kind#input_variable GoogleSaasRuntimeUnitKind#input_variable}

---

##### `ignore_for_lookup`<sup>Optional</sup> <a name="ignore_for_lookup" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsTo.property.ignoreForLookup"></a>

```python
ignore_for_lookup: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Tells App Lifecycle Manager if this mapping should be used during lookup or not.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_saas_runtime_unit_kind#ignore_for_lookup GoogleSaasRuntimeUnitKind#ignore_for_lookup}

---

### GoogleSaasRuntimeUnitKindTimeouts <a name="GoogleSaasRuntimeUnitKindTimeouts" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindTimeouts.Initializer"></a>

```python
from cdktn_provider_google_beta import google_saas_runtime_unit_kind

googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_saas_runtime_unit_kind#create GoogleSaasRuntimeUnitKind#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_saas_runtime_unit_kind#delete GoogleSaasRuntimeUnitKind#delete}. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_saas_runtime_unit_kind#update GoogleSaasRuntimeUnitKind#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_saas_runtime_unit_kind#create GoogleSaasRuntimeUnitKind#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_saas_runtime_unit_kind#delete GoogleSaasRuntimeUnitKind#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_saas_runtime_unit_kind#update GoogleSaasRuntimeUnitKind#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleSaasRuntimeUnitKindDependenciesList <a name="GoogleSaasRuntimeUnitKindDependenciesList" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindDependenciesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindDependenciesList.Initializer"></a>

```python
from cdktn_provider_google_beta import google_saas_runtime_unit_kind

googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindDependenciesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindDependenciesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindDependenciesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindDependenciesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindDependenciesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindDependenciesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindDependenciesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindDependenciesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindDependenciesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindDependenciesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindDependenciesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindDependenciesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindDependenciesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindDependenciesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindDependenciesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindDependenciesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindDependenciesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindDependenciesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindDependenciesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleSaasRuntimeUnitKindDependenciesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindDependenciesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindDependenciesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindDependenciesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindDependenciesList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindDependencies">GoogleSaasRuntimeUnitKindDependencies</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindDependenciesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindDependenciesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindDependenciesList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[GoogleSaasRuntimeUnitKindDependencies]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindDependencies">GoogleSaasRuntimeUnitKindDependencies</a>]

---


### GoogleSaasRuntimeUnitKindDependenciesOutputReference <a name="GoogleSaasRuntimeUnitKindDependenciesOutputReference" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindDependenciesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindDependenciesOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_saas_runtime_unit_kind

googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindDependenciesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindDependenciesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindDependenciesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindDependenciesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindDependenciesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindDependenciesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindDependenciesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindDependenciesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindDependenciesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindDependenciesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindDependenciesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindDependenciesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindDependenciesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindDependenciesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindDependenciesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindDependenciesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindDependenciesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindDependenciesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindDependenciesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindDependenciesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindDependenciesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindDependenciesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindDependenciesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindDependenciesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindDependenciesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindDependenciesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindDependenciesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindDependenciesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindDependenciesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindDependenciesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindDependenciesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindDependenciesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindDependenciesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindDependenciesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindDependenciesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindDependenciesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindDependenciesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindDependenciesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindDependenciesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindDependenciesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindDependenciesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindDependenciesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindDependenciesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindDependenciesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindDependenciesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindDependenciesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindDependenciesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindDependenciesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindDependenciesOutputReference.property.aliasInput">alias_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindDependenciesOutputReference.property.unitKindInput">unit_kind_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindDependenciesOutputReference.property.alias">alias</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindDependenciesOutputReference.property.unitKind">unit_kind</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindDependenciesOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindDependencies">GoogleSaasRuntimeUnitKindDependencies</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindDependenciesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindDependenciesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `alias_input`<sup>Optional</sup> <a name="alias_input" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindDependenciesOutputReference.property.aliasInput"></a>

```python
alias_input: str
```

- *Type:* str

---

##### `unit_kind_input`<sup>Optional</sup> <a name="unit_kind_input" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindDependenciesOutputReference.property.unitKindInput"></a>

```python
unit_kind_input: str
```

- *Type:* str

---

##### `alias`<sup>Required</sup> <a name="alias" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindDependenciesOutputReference.property.alias"></a>

```python
alias: str
```

- *Type:* str

---

##### `unit_kind`<sup>Required</sup> <a name="unit_kind" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindDependenciesOutputReference.property.unitKind"></a>

```python
unit_kind: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindDependenciesOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | GoogleSaasRuntimeUnitKindDependencies
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindDependencies">GoogleSaasRuntimeUnitKindDependencies</a>

---


### GoogleSaasRuntimeUnitKindInputVariableMappingsFromOutputReference <a name="GoogleSaasRuntimeUnitKindInputVariableMappingsFromOutputReference" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsFromOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsFromOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_saas_runtime_unit_kind

googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsFromOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsFromOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsFromOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsFromOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsFromOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsFromOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsFromOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsFromOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsFromOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsFromOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsFromOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsFromOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsFromOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsFromOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsFromOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsFromOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsFromOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsFromOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsFromOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsFromOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsFromOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsFromOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsFromOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsFromOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsFromOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsFromOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsFromOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsFromOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsFromOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsFromOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsFromOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsFromOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsFromOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsFromOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsFromOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsFromOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsFromOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsFromOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsFromOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsFromOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsFromOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsFromOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsFromOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsFromOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsFromOutputReference.property.dependencyInput">dependency_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsFromOutputReference.property.outputVariableInput">output_variable_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsFromOutputReference.property.dependency">dependency</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsFromOutputReference.property.outputVariable">output_variable</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsFromOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsFrom">GoogleSaasRuntimeUnitKindInputVariableMappingsFrom</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsFromOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsFromOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `dependency_input`<sup>Optional</sup> <a name="dependency_input" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsFromOutputReference.property.dependencyInput"></a>

```python
dependency_input: str
```

- *Type:* str

---

##### `output_variable_input`<sup>Optional</sup> <a name="output_variable_input" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsFromOutputReference.property.outputVariableInput"></a>

```python
output_variable_input: str
```

- *Type:* str

---

##### `dependency`<sup>Required</sup> <a name="dependency" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsFromOutputReference.property.dependency"></a>

```python
dependency: str
```

- *Type:* str

---

##### `output_variable`<sup>Required</sup> <a name="output_variable" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsFromOutputReference.property.outputVariable"></a>

```python
output_variable: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsFromOutputReference.property.internalValue"></a>

```python
internal_value: GoogleSaasRuntimeUnitKindInputVariableMappingsFrom
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsFrom">GoogleSaasRuntimeUnitKindInputVariableMappingsFrom</a>

---


### GoogleSaasRuntimeUnitKindInputVariableMappingsList <a name="GoogleSaasRuntimeUnitKindInputVariableMappingsList" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsList.Initializer"></a>

```python
from cdktn_provider_google_beta import google_saas_runtime_unit_kind

googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleSaasRuntimeUnitKindInputVariableMappingsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappings">GoogleSaasRuntimeUnitKindInputVariableMappings</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[GoogleSaasRuntimeUnitKindInputVariableMappings]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappings">GoogleSaasRuntimeUnitKindInputVariableMappings</a>]

---


### GoogleSaasRuntimeUnitKindInputVariableMappingsOutputReference <a name="GoogleSaasRuntimeUnitKindInputVariableMappingsOutputReference" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_saas_runtime_unit_kind

googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsOutputReference.putFrom">put_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsOutputReference.putTo">put_to</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsOutputReference.resetFrom">reset_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsOutputReference.resetTo">reset_to</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_from` <a name="put_from" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsOutputReference.putFrom"></a>

```python
def put_from(
  dependency: str,
  output_variable: str
) -> None
```

###### `dependency`<sup>Required</sup> <a name="dependency" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsOutputReference.putFrom.parameter.dependency"></a>

- *Type:* str

Alias of the dependency that the outputVariable will pass its value to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_saas_runtime_unit_kind#dependency GoogleSaasRuntimeUnitKind#dependency}

---

###### `output_variable`<sup>Required</sup> <a name="output_variable" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsOutputReference.putFrom.parameter.outputVariable"></a>

- *Type:* str

Name of the outputVariable on the dependency.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_saas_runtime_unit_kind#output_variable GoogleSaasRuntimeUnitKind#output_variable}

---

##### `put_to` <a name="put_to" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsOutputReference.putTo"></a>

```python
def put_to(
  dependency: str,
  input_variable: str,
  ignore_for_lookup: bool | IResolvable = None
) -> None
```

###### `dependency`<sup>Required</sup> <a name="dependency" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsOutputReference.putTo.parameter.dependency"></a>

- *Type:* str

Alias of the dependency that the inputVariable will pass its value to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_saas_runtime_unit_kind#dependency GoogleSaasRuntimeUnitKind#dependency}

---

###### `input_variable`<sup>Required</sup> <a name="input_variable" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsOutputReference.putTo.parameter.inputVariable"></a>

- *Type:* str

Name of the inputVariable on the dependency.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_saas_runtime_unit_kind#input_variable GoogleSaasRuntimeUnitKind#input_variable}

---

###### `ignore_for_lookup`<sup>Optional</sup> <a name="ignore_for_lookup" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsOutputReference.putTo.parameter.ignoreForLookup"></a>

- *Type:* bool | cdktn.IResolvable

Tells App Lifecycle Manager if this mapping should be used during lookup or not.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_saas_runtime_unit_kind#ignore_for_lookup GoogleSaasRuntimeUnitKind#ignore_for_lookup}

---

##### `reset_from` <a name="reset_from" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsOutputReference.resetFrom"></a>

```python
def reset_from() -> None
```

##### `reset_to` <a name="reset_to" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsOutputReference.resetTo"></a>

```python
def reset_to() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsOutputReference.property.from">from</a></code> | <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsFromOutputReference">GoogleSaasRuntimeUnitKindInputVariableMappingsFromOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsOutputReference.property.to">to</a></code> | <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsToOutputReference">GoogleSaasRuntimeUnitKindInputVariableMappingsToOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsOutputReference.property.fromInput">from_input</a></code> | <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsFrom">GoogleSaasRuntimeUnitKindInputVariableMappingsFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsOutputReference.property.toInput">to_input</a></code> | <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsTo">GoogleSaasRuntimeUnitKindInputVariableMappingsTo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsOutputReference.property.variableInput">variable_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsOutputReference.property.variable">variable</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappings">GoogleSaasRuntimeUnitKindInputVariableMappings</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `from`<sup>Required</sup> <a name="from" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsOutputReference.property.from"></a>

```python
from: GoogleSaasRuntimeUnitKindInputVariableMappingsFromOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsFromOutputReference">GoogleSaasRuntimeUnitKindInputVariableMappingsFromOutputReference</a>

---

##### `to`<sup>Required</sup> <a name="to" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsOutputReference.property.to"></a>

```python
to: GoogleSaasRuntimeUnitKindInputVariableMappingsToOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsToOutputReference">GoogleSaasRuntimeUnitKindInputVariableMappingsToOutputReference</a>

---

##### `from_input`<sup>Optional</sup> <a name="from_input" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsOutputReference.property.fromInput"></a>

```python
from_input: GoogleSaasRuntimeUnitKindInputVariableMappingsFrom
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsFrom">GoogleSaasRuntimeUnitKindInputVariableMappingsFrom</a>

---

##### `to_input`<sup>Optional</sup> <a name="to_input" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsOutputReference.property.toInput"></a>

```python
to_input: GoogleSaasRuntimeUnitKindInputVariableMappingsTo
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsTo">GoogleSaasRuntimeUnitKindInputVariableMappingsTo</a>

---

##### `variable_input`<sup>Optional</sup> <a name="variable_input" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsOutputReference.property.variableInput"></a>

```python
variable_input: str
```

- *Type:* str

---

##### `variable`<sup>Required</sup> <a name="variable" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsOutputReference.property.variable"></a>

```python
variable: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | GoogleSaasRuntimeUnitKindInputVariableMappings
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappings">GoogleSaasRuntimeUnitKindInputVariableMappings</a>

---


### GoogleSaasRuntimeUnitKindInputVariableMappingsToOutputReference <a name="GoogleSaasRuntimeUnitKindInputVariableMappingsToOutputReference" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsToOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsToOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_saas_runtime_unit_kind

googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsToOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsToOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsToOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsToOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsToOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsToOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsToOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsToOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsToOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsToOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsToOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsToOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsToOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsToOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsToOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsToOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsToOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsToOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsToOutputReference.resetIgnoreForLookup">reset_ignore_for_lookup</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsToOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsToOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsToOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsToOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsToOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsToOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsToOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsToOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsToOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsToOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsToOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsToOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsToOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsToOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsToOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsToOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsToOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsToOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsToOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsToOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsToOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsToOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsToOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsToOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_ignore_for_lookup` <a name="reset_ignore_for_lookup" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsToOutputReference.resetIgnoreForLookup"></a>

```python
def reset_ignore_for_lookup() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsToOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsToOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsToOutputReference.property.dependencyInput">dependency_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsToOutputReference.property.ignoreForLookupInput">ignore_for_lookup_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsToOutputReference.property.inputVariableInput">input_variable_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsToOutputReference.property.dependency">dependency</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsToOutputReference.property.ignoreForLookup">ignore_for_lookup</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsToOutputReference.property.inputVariable">input_variable</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsToOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsTo">GoogleSaasRuntimeUnitKindInputVariableMappingsTo</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsToOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsToOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `dependency_input`<sup>Optional</sup> <a name="dependency_input" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsToOutputReference.property.dependencyInput"></a>

```python
dependency_input: str
```

- *Type:* str

---

##### `ignore_for_lookup_input`<sup>Optional</sup> <a name="ignore_for_lookup_input" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsToOutputReference.property.ignoreForLookupInput"></a>

```python
ignore_for_lookup_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `input_variable_input`<sup>Optional</sup> <a name="input_variable_input" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsToOutputReference.property.inputVariableInput"></a>

```python
input_variable_input: str
```

- *Type:* str

---

##### `dependency`<sup>Required</sup> <a name="dependency" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsToOutputReference.property.dependency"></a>

```python
dependency: str
```

- *Type:* str

---

##### `ignore_for_lookup`<sup>Required</sup> <a name="ignore_for_lookup" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsToOutputReference.property.ignoreForLookup"></a>

```python
ignore_for_lookup: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `input_variable`<sup>Required</sup> <a name="input_variable" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsToOutputReference.property.inputVariable"></a>

```python
input_variable: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsToOutputReference.property.internalValue"></a>

```python
internal_value: GoogleSaasRuntimeUnitKindInputVariableMappingsTo
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsTo">GoogleSaasRuntimeUnitKindInputVariableMappingsTo</a>

---


### GoogleSaasRuntimeUnitKindOutputVariableMappingsFromOutputReference <a name="GoogleSaasRuntimeUnitKindOutputVariableMappingsFromOutputReference" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsFromOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsFromOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_saas_runtime_unit_kind

googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsFromOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsFromOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsFromOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsFromOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsFromOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsFromOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsFromOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsFromOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsFromOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsFromOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsFromOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsFromOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsFromOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsFromOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsFromOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsFromOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsFromOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsFromOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsFromOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsFromOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsFromOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsFromOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsFromOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsFromOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsFromOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsFromOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsFromOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsFromOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsFromOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsFromOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsFromOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsFromOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsFromOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsFromOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsFromOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsFromOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsFromOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsFromOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsFromOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsFromOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsFromOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsFromOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsFromOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsFromOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsFromOutputReference.property.dependencyInput">dependency_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsFromOutputReference.property.outputVariableInput">output_variable_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsFromOutputReference.property.dependency">dependency</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsFromOutputReference.property.outputVariable">output_variable</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsFromOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsFrom">GoogleSaasRuntimeUnitKindOutputVariableMappingsFrom</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsFromOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsFromOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `dependency_input`<sup>Optional</sup> <a name="dependency_input" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsFromOutputReference.property.dependencyInput"></a>

```python
dependency_input: str
```

- *Type:* str

---

##### `output_variable_input`<sup>Optional</sup> <a name="output_variable_input" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsFromOutputReference.property.outputVariableInput"></a>

```python
output_variable_input: str
```

- *Type:* str

---

##### `dependency`<sup>Required</sup> <a name="dependency" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsFromOutputReference.property.dependency"></a>

```python
dependency: str
```

- *Type:* str

---

##### `output_variable`<sup>Required</sup> <a name="output_variable" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsFromOutputReference.property.outputVariable"></a>

```python
output_variable: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsFromOutputReference.property.internalValue"></a>

```python
internal_value: GoogleSaasRuntimeUnitKindOutputVariableMappingsFrom
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsFrom">GoogleSaasRuntimeUnitKindOutputVariableMappingsFrom</a>

---


### GoogleSaasRuntimeUnitKindOutputVariableMappingsList <a name="GoogleSaasRuntimeUnitKindOutputVariableMappingsList" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsList.Initializer"></a>

```python
from cdktn_provider_google_beta import google_saas_runtime_unit_kind

googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleSaasRuntimeUnitKindOutputVariableMappingsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappings">GoogleSaasRuntimeUnitKindOutputVariableMappings</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[GoogleSaasRuntimeUnitKindOutputVariableMappings]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappings">GoogleSaasRuntimeUnitKindOutputVariableMappings</a>]

---


### GoogleSaasRuntimeUnitKindOutputVariableMappingsOutputReference <a name="GoogleSaasRuntimeUnitKindOutputVariableMappingsOutputReference" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_saas_runtime_unit_kind

googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsOutputReference.putFrom">put_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsOutputReference.putTo">put_to</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsOutputReference.resetFrom">reset_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsOutputReference.resetTo">reset_to</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_from` <a name="put_from" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsOutputReference.putFrom"></a>

```python
def put_from(
  dependency: str,
  output_variable: str
) -> None
```

###### `dependency`<sup>Required</sup> <a name="dependency" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsOutputReference.putFrom.parameter.dependency"></a>

- *Type:* str

Alias of the dependency that the outputVariable will pass its value to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_saas_runtime_unit_kind#dependency GoogleSaasRuntimeUnitKind#dependency}

---

###### `output_variable`<sup>Required</sup> <a name="output_variable" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsOutputReference.putFrom.parameter.outputVariable"></a>

- *Type:* str

Name of the outputVariable on the dependency.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_saas_runtime_unit_kind#output_variable GoogleSaasRuntimeUnitKind#output_variable}

---

##### `put_to` <a name="put_to" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsOutputReference.putTo"></a>

```python
def put_to(
  dependency: str,
  input_variable: str,
  ignore_for_lookup: bool | IResolvable = None
) -> None
```

###### `dependency`<sup>Required</sup> <a name="dependency" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsOutputReference.putTo.parameter.dependency"></a>

- *Type:* str

Alias of the dependency that the inputVariable will pass its value to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_saas_runtime_unit_kind#dependency GoogleSaasRuntimeUnitKind#dependency}

---

###### `input_variable`<sup>Required</sup> <a name="input_variable" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsOutputReference.putTo.parameter.inputVariable"></a>

- *Type:* str

Name of the inputVariable on the dependency.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_saas_runtime_unit_kind#input_variable GoogleSaasRuntimeUnitKind#input_variable}

---

###### `ignore_for_lookup`<sup>Optional</sup> <a name="ignore_for_lookup" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsOutputReference.putTo.parameter.ignoreForLookup"></a>

- *Type:* bool | cdktn.IResolvable

Tells App Lifecycle Manager if this mapping should be used during lookup or not.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_saas_runtime_unit_kind#ignore_for_lookup GoogleSaasRuntimeUnitKind#ignore_for_lookup}

---

##### `reset_from` <a name="reset_from" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsOutputReference.resetFrom"></a>

```python
def reset_from() -> None
```

##### `reset_to` <a name="reset_to" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsOutputReference.resetTo"></a>

```python
def reset_to() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsOutputReference.property.from">from</a></code> | <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsFromOutputReference">GoogleSaasRuntimeUnitKindOutputVariableMappingsFromOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsOutputReference.property.to">to</a></code> | <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsToOutputReference">GoogleSaasRuntimeUnitKindOutputVariableMappingsToOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsOutputReference.property.fromInput">from_input</a></code> | <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsFrom">GoogleSaasRuntimeUnitKindOutputVariableMappingsFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsOutputReference.property.toInput">to_input</a></code> | <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsTo">GoogleSaasRuntimeUnitKindOutputVariableMappingsTo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsOutputReference.property.variableInput">variable_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsOutputReference.property.variable">variable</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappings">GoogleSaasRuntimeUnitKindOutputVariableMappings</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `from`<sup>Required</sup> <a name="from" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsOutputReference.property.from"></a>

```python
from: GoogleSaasRuntimeUnitKindOutputVariableMappingsFromOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsFromOutputReference">GoogleSaasRuntimeUnitKindOutputVariableMappingsFromOutputReference</a>

---

##### `to`<sup>Required</sup> <a name="to" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsOutputReference.property.to"></a>

```python
to: GoogleSaasRuntimeUnitKindOutputVariableMappingsToOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsToOutputReference">GoogleSaasRuntimeUnitKindOutputVariableMappingsToOutputReference</a>

---

##### `from_input`<sup>Optional</sup> <a name="from_input" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsOutputReference.property.fromInput"></a>

```python
from_input: GoogleSaasRuntimeUnitKindOutputVariableMappingsFrom
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsFrom">GoogleSaasRuntimeUnitKindOutputVariableMappingsFrom</a>

---

##### `to_input`<sup>Optional</sup> <a name="to_input" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsOutputReference.property.toInput"></a>

```python
to_input: GoogleSaasRuntimeUnitKindOutputVariableMappingsTo
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsTo">GoogleSaasRuntimeUnitKindOutputVariableMappingsTo</a>

---

##### `variable_input`<sup>Optional</sup> <a name="variable_input" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsOutputReference.property.variableInput"></a>

```python
variable_input: str
```

- *Type:* str

---

##### `variable`<sup>Required</sup> <a name="variable" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsOutputReference.property.variable"></a>

```python
variable: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | GoogleSaasRuntimeUnitKindOutputVariableMappings
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappings">GoogleSaasRuntimeUnitKindOutputVariableMappings</a>

---


### GoogleSaasRuntimeUnitKindOutputVariableMappingsToOutputReference <a name="GoogleSaasRuntimeUnitKindOutputVariableMappingsToOutputReference" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsToOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsToOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_saas_runtime_unit_kind

googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsToOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsToOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsToOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsToOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsToOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsToOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsToOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsToOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsToOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsToOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsToOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsToOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsToOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsToOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsToOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsToOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsToOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsToOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsToOutputReference.resetIgnoreForLookup">reset_ignore_for_lookup</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsToOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsToOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsToOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsToOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsToOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsToOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsToOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsToOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsToOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsToOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsToOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsToOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsToOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsToOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsToOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsToOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsToOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsToOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsToOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsToOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsToOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsToOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsToOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsToOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_ignore_for_lookup` <a name="reset_ignore_for_lookup" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsToOutputReference.resetIgnoreForLookup"></a>

```python
def reset_ignore_for_lookup() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsToOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsToOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsToOutputReference.property.dependencyInput">dependency_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsToOutputReference.property.ignoreForLookupInput">ignore_for_lookup_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsToOutputReference.property.inputVariableInput">input_variable_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsToOutputReference.property.dependency">dependency</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsToOutputReference.property.ignoreForLookup">ignore_for_lookup</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsToOutputReference.property.inputVariable">input_variable</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsToOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsTo">GoogleSaasRuntimeUnitKindOutputVariableMappingsTo</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsToOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsToOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `dependency_input`<sup>Optional</sup> <a name="dependency_input" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsToOutputReference.property.dependencyInput"></a>

```python
dependency_input: str
```

- *Type:* str

---

##### `ignore_for_lookup_input`<sup>Optional</sup> <a name="ignore_for_lookup_input" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsToOutputReference.property.ignoreForLookupInput"></a>

```python
ignore_for_lookup_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `input_variable_input`<sup>Optional</sup> <a name="input_variable_input" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsToOutputReference.property.inputVariableInput"></a>

```python
input_variable_input: str
```

- *Type:* str

---

##### `dependency`<sup>Required</sup> <a name="dependency" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsToOutputReference.property.dependency"></a>

```python
dependency: str
```

- *Type:* str

---

##### `ignore_for_lookup`<sup>Required</sup> <a name="ignore_for_lookup" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsToOutputReference.property.ignoreForLookup"></a>

```python
ignore_for_lookup: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `input_variable`<sup>Required</sup> <a name="input_variable" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsToOutputReference.property.inputVariable"></a>

```python
input_variable: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsToOutputReference.property.internalValue"></a>

```python
internal_value: GoogleSaasRuntimeUnitKindOutputVariableMappingsTo
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsTo">GoogleSaasRuntimeUnitKindOutputVariableMappingsTo</a>

---


### GoogleSaasRuntimeUnitKindTimeoutsOutputReference <a name="GoogleSaasRuntimeUnitKindTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindTimeoutsOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_saas_runtime_unit_kind

googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindTimeouts">GoogleSaasRuntimeUnitKindTimeouts</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | GoogleSaasRuntimeUnitKindTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindTimeouts">GoogleSaasRuntimeUnitKindTimeouts</a>

---



