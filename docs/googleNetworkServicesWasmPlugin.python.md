# `googleNetworkServicesWasmPlugin` Submodule <a name="`googleNetworkServicesWasmPlugin` Submodule" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleNetworkServicesWasmPlugin <a name="GoogleNetworkServicesWasmPlugin" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_network_services_wasm_plugin google_network_services_wasm_plugin}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.Initializer"></a>

```python
from cdktn_provider_google_beta import google_network_services_wasm_plugin

googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  main_version_id: str,
  name: str,
  versions: IResolvable | typing.List[GoogleNetworkServicesWasmPluginVersions],
  deletion_policy: str = None,
  description: str = None,
  id: str = None,
  labels: typing.Mapping[str] = None,
  location: str = None,
  log_config: GoogleNetworkServicesWasmPluginLogConfig = None,
  project: str = None,
  timeouts: GoogleNetworkServicesWasmPluginTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.Initializer.parameter.mainVersionId">main_version_id</a></code> | <code>str</code> | The ID of the WasmPluginVersion resource that is the currently serving one. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.Initializer.parameter.name">name</a></code> | <code>str</code> | Identifier. Name of the WasmPlugin resource. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.Initializer.parameter.versions">versions</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginVersions">GoogleNetworkServicesWasmPluginVersions</a>]</code> | versions block. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.Initializer.parameter.deletionPolicy">deletion_policy</a></code> | <code>str</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.Initializer.parameter.description">description</a></code> | <code>str</code> | Optional. A human-readable description of the resource. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_network_services_wasm_plugin#id GoogleNetworkServicesWasmPlugin#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.Initializer.parameter.labels">labels</a></code> | <code>typing.Mapping[str]</code> | Optional. Set of labels associated with the WasmPlugin resource. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.Initializer.parameter.location">location</a></code> | <code>str</code> | The location of the traffic extension. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.Initializer.parameter.logConfig">log_config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginLogConfig">GoogleNetworkServicesWasmPluginLogConfig</a></code> | log_config block. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_network_services_wasm_plugin#project GoogleNetworkServicesWasmPlugin#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginTimeouts">GoogleNetworkServicesWasmPluginTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `main_version_id`<sup>Required</sup> <a name="main_version_id" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.Initializer.parameter.mainVersionId"></a>

- *Type:* str

The ID of the WasmPluginVersion resource that is the currently serving one.

The version referred to must be a child of this WasmPlugin resource and should be listed in the "versions" field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_network_services_wasm_plugin#main_version_id GoogleNetworkServicesWasmPlugin#main_version_id}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.Initializer.parameter.name"></a>

- *Type:* str

Identifier. Name of the WasmPlugin resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_network_services_wasm_plugin#name GoogleNetworkServicesWasmPlugin#name}

---

##### `versions`<sup>Required</sup> <a name="versions" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.Initializer.parameter.versions"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginVersions">GoogleNetworkServicesWasmPluginVersions</a>]

versions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_network_services_wasm_plugin#versions GoogleNetworkServicesWasmPlugin#versions}

---

##### `deletion_policy`<sup>Optional</sup> <a name="deletion_policy" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.Initializer.parameter.deletionPolicy"></a>

- *Type:* str

Whether Terraform will be prevented from destroying the instance.

Defaults to "DELETE".
When a 'terraform destroy' or 'terraform apply' would delete the instance,
the command will fail if this field is set to "PREVENT" in Terraform state.
When set to "ABANDON", the command will remove the resource from Terraform
management without updating or deleting the resource in the API.
When set to "DELETE", deleting the resource is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_network_services_wasm_plugin#deletion_policy GoogleNetworkServicesWasmPlugin#deletion_policy}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.Initializer.parameter.description"></a>

- *Type:* str

Optional. A human-readable description of the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_network_services_wasm_plugin#description GoogleNetworkServicesWasmPlugin#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_network_services_wasm_plugin#id GoogleNetworkServicesWasmPlugin#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.Initializer.parameter.labels"></a>

- *Type:* typing.Mapping[str]

Optional. Set of labels associated with the WasmPlugin resource.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_network_services_wasm_plugin#labels GoogleNetworkServicesWasmPlugin#labels}

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.Initializer.parameter.location"></a>

- *Type:* str

The location of the traffic extension.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_network_services_wasm_plugin#location GoogleNetworkServicesWasmPlugin#location}

---

##### `log_config`<sup>Optional</sup> <a name="log_config" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.Initializer.parameter.logConfig"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginLogConfig">GoogleNetworkServicesWasmPluginLogConfig</a>

log_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_network_services_wasm_plugin#log_config GoogleNetworkServicesWasmPlugin#log_config}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_network_services_wasm_plugin#project GoogleNetworkServicesWasmPlugin#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginTimeouts">GoogleNetworkServicesWasmPluginTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_network_services_wasm_plugin#timeouts GoogleNetworkServicesWasmPlugin#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.putLogConfig">put_log_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.putVersions">put_versions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.resetDeletionPolicy">reset_deletion_policy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.resetLabels">reset_labels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.resetLocation">reset_location</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.resetLogConfig">reset_log_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_log_config` <a name="put_log_config" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.putLogConfig"></a>

```python
def put_log_config(
  enable: bool | IResolvable = None,
  min_log_level: str = None,
  sample_rate: typing.Union[int, float] = None
) -> None
```

###### `enable`<sup>Optional</sup> <a name="enable" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.putLogConfig.parameter.enable"></a>

- *Type:* bool | cdktn.IResolvable

Optional. Specifies whether to enable logging for activity by this plugin.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_network_services_wasm_plugin#enable GoogleNetworkServicesWasmPlugin#enable}

---

###### `min_log_level`<sup>Optional</sup> <a name="min_log_level" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.putLogConfig.parameter.minLogLevel"></a>

- *Type:* str

Non-empty default.

Specificies the lowest level of the plugin logs that are exported to Cloud Logging. This setting relates to the logs generated by using logging statements in your Wasm code.
This field is can be set only if logging is enabled for the plugin.
If the field is not provided when logging is enabled, it is set to INFO by default. Possible values: ["LOG_LEVEL_UNSPECIFIED", "TRACE", "DEBUG", "INFO", "WARN", "ERROR", "CRITICAL"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_network_services_wasm_plugin#min_log_level GoogleNetworkServicesWasmPlugin#min_log_level}

---

###### `sample_rate`<sup>Optional</sup> <a name="sample_rate" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.putLogConfig.parameter.sampleRate"></a>

- *Type:* typing.Union[int, float]

Non-empty default.

Configures the sampling rate of activity logs, where 1.0 means all logged activity is reported and 0.0 means no activity is reported.
A floating point value between 0.0 and 1.0 indicates that a percentage of log messages is stored.
The default value when logging is enabled is 1.0. The value of the field must be between 0 and 1 (inclusive).
This field can be specified only if logging is enabled for this plugin.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_network_services_wasm_plugin#sample_rate GoogleNetworkServicesWasmPlugin#sample_rate}

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_network_services_wasm_plugin#create GoogleNetworkServicesWasmPlugin#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_network_services_wasm_plugin#delete GoogleNetworkServicesWasmPlugin#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_network_services_wasm_plugin#update GoogleNetworkServicesWasmPlugin#update}.

---

##### `put_versions` <a name="put_versions" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.putVersions"></a>

```python
def put_versions(
  value: IResolvable | typing.List[GoogleNetworkServicesWasmPluginVersions]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.putVersions.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginVersions">GoogleNetworkServicesWasmPluginVersions</a>]

---

##### `reset_deletion_policy` <a name="reset_deletion_policy" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.resetDeletionPolicy"></a>

```python
def reset_deletion_policy() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_labels` <a name="reset_labels" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.resetLabels"></a>

```python
def reset_labels() -> None
```

##### `reset_location` <a name="reset_location" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.resetLocation"></a>

```python
def reset_location() -> None
```

##### `reset_log_config` <a name="reset_log_config" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.resetLogConfig"></a>

```python
def reset_log_config() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a GoogleNetworkServicesWasmPlugin resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.isConstruct"></a>

```python
from cdktn_provider_google_beta import google_network_services_wasm_plugin

googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.isTerraformElement"></a>

```python
from cdktn_provider_google_beta import google_network_services_wasm_plugin

googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.isTerraformResource"></a>

```python
from cdktn_provider_google_beta import google_network_services_wasm_plugin

googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.generateConfigForImport"></a>

```python
from cdktn_provider_google_beta import google_network_services_wasm_plugin

googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a GoogleNetworkServicesWasmPlugin resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the GoogleNetworkServicesWasmPlugin to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing GoogleNetworkServicesWasmPlugin that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_network_services_wasm_plugin#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the GoogleNetworkServicesWasmPlugin to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.property.createTime">create_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.property.effectiveLabels">effective_labels</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.property.logConfig">log_config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginLogConfigOutputReference">GoogleNetworkServicesWasmPluginLogConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.property.terraformLabels">terraform_labels</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginTimeoutsOutputReference">GoogleNetworkServicesWasmPluginTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.property.updateTime">update_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.property.usedBy">used_by</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginUsedByList">GoogleNetworkServicesWasmPluginUsedByList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.property.versions">versions</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginVersionsList">GoogleNetworkServicesWasmPluginVersionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.property.deletionPolicyInput">deletion_policy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.property.labelsInput">labels_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.property.logConfigInput">log_config_input</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginLogConfig">GoogleNetworkServicesWasmPluginLogConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.property.mainVersionIdInput">main_version_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.property.timeoutsInput">timeouts_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginTimeouts">GoogleNetworkServicesWasmPluginTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.property.versionsInput">versions_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginVersions">GoogleNetworkServicesWasmPluginVersions</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.property.deletionPolicy">deletion_policy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.property.mainVersionId">main_version_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.property.project">project</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `create_time`<sup>Required</sup> <a name="create_time" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.property.createTime"></a>

```python
create_time: str
```

- *Type:* str

---

##### `effective_labels`<sup>Required</sup> <a name="effective_labels" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.property.effectiveLabels"></a>

```python
effective_labels: StringMap
```

- *Type:* cdktn.StringMap

---

##### `log_config`<sup>Required</sup> <a name="log_config" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.property.logConfig"></a>

```python
log_config: GoogleNetworkServicesWasmPluginLogConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginLogConfigOutputReference">GoogleNetworkServicesWasmPluginLogConfigOutputReference</a>

---

##### `terraform_labels`<sup>Required</sup> <a name="terraform_labels" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.property.terraformLabels"></a>

```python
terraform_labels: StringMap
```

- *Type:* cdktn.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.property.timeouts"></a>

```python
timeouts: GoogleNetworkServicesWasmPluginTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginTimeoutsOutputReference">GoogleNetworkServicesWasmPluginTimeoutsOutputReference</a>

---

##### `update_time`<sup>Required</sup> <a name="update_time" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.property.updateTime"></a>

```python
update_time: str
```

- *Type:* str

---

##### `used_by`<sup>Required</sup> <a name="used_by" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.property.usedBy"></a>

```python
used_by: GoogleNetworkServicesWasmPluginUsedByList
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginUsedByList">GoogleNetworkServicesWasmPluginUsedByList</a>

---

##### `versions`<sup>Required</sup> <a name="versions" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.property.versions"></a>

```python
versions: GoogleNetworkServicesWasmPluginVersionsList
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginVersionsList">GoogleNetworkServicesWasmPluginVersionsList</a>

---

##### `deletion_policy_input`<sup>Optional</sup> <a name="deletion_policy_input" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.property.deletionPolicyInput"></a>

```python
deletion_policy_input: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `labels_input`<sup>Optional</sup> <a name="labels_input" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.property.labelsInput"></a>

```python
labels_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `log_config_input`<sup>Optional</sup> <a name="log_config_input" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.property.logConfigInput"></a>

```python
log_config_input: GoogleNetworkServicesWasmPluginLogConfig
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginLogConfig">GoogleNetworkServicesWasmPluginLogConfig</a>

---

##### `main_version_id_input`<sup>Optional</sup> <a name="main_version_id_input" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.property.mainVersionIdInput"></a>

```python
main_version_id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.property.timeoutsInput"></a>

```python
timeouts_input: IResolvable | GoogleNetworkServicesWasmPluginTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginTimeouts">GoogleNetworkServicesWasmPluginTimeouts</a>

---

##### `versions_input`<sup>Optional</sup> <a name="versions_input" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.property.versionsInput"></a>

```python
versions_input: IResolvable | typing.List[GoogleNetworkServicesWasmPluginVersions]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginVersions">GoogleNetworkServicesWasmPluginVersions</a>]

---

##### `deletion_policy`<sup>Required</sup> <a name="deletion_policy" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.property.deletionPolicy"></a>

```python
deletion_policy: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `main_version_id`<sup>Required</sup> <a name="main_version_id" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.property.mainVersionId"></a>

```python
main_version_id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.property.project"></a>

```python
project: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleNetworkServicesWasmPluginConfig <a name="GoogleNetworkServicesWasmPluginConfig" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginConfig.Initializer"></a>

```python
from cdktn_provider_google_beta import google_network_services_wasm_plugin

googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  main_version_id: str,
  name: str,
  versions: IResolvable | typing.List[GoogleNetworkServicesWasmPluginVersions],
  deletion_policy: str = None,
  description: str = None,
  id: str = None,
  labels: typing.Mapping[str] = None,
  location: str = None,
  log_config: GoogleNetworkServicesWasmPluginLogConfig = None,
  project: str = None,
  timeouts: GoogleNetworkServicesWasmPluginTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginConfig.property.mainVersionId">main_version_id</a></code> | <code>str</code> | The ID of the WasmPluginVersion resource that is the currently serving one. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginConfig.property.name">name</a></code> | <code>str</code> | Identifier. Name of the WasmPlugin resource. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginConfig.property.versions">versions</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginVersions">GoogleNetworkServicesWasmPluginVersions</a>]</code> | versions block. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginConfig.property.deletionPolicy">deletion_policy</a></code> | <code>str</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginConfig.property.description">description</a></code> | <code>str</code> | Optional. A human-readable description of the resource. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_network_services_wasm_plugin#id GoogleNetworkServicesWasmPlugin#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginConfig.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | Optional. Set of labels associated with the WasmPlugin resource. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginConfig.property.location">location</a></code> | <code>str</code> | The location of the traffic extension. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginConfig.property.logConfig">log_config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginLogConfig">GoogleNetworkServicesWasmPluginLogConfig</a></code> | log_config block. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_network_services_wasm_plugin#project GoogleNetworkServicesWasmPlugin#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginTimeouts">GoogleNetworkServicesWasmPluginTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `main_version_id`<sup>Required</sup> <a name="main_version_id" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginConfig.property.mainVersionId"></a>

```python
main_version_id: str
```

- *Type:* str

The ID of the WasmPluginVersion resource that is the currently serving one.

The version referred to must be a child of this WasmPlugin resource and should be listed in the "versions" field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_network_services_wasm_plugin#main_version_id GoogleNetworkServicesWasmPlugin#main_version_id}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Identifier. Name of the WasmPlugin resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_network_services_wasm_plugin#name GoogleNetworkServicesWasmPlugin#name}

---

##### `versions`<sup>Required</sup> <a name="versions" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginConfig.property.versions"></a>

```python
versions: IResolvable | typing.List[GoogleNetworkServicesWasmPluginVersions]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginVersions">GoogleNetworkServicesWasmPluginVersions</a>]

versions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_network_services_wasm_plugin#versions GoogleNetworkServicesWasmPlugin#versions}

---

##### `deletion_policy`<sup>Optional</sup> <a name="deletion_policy" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_network_services_wasm_plugin#deletion_policy GoogleNetworkServicesWasmPlugin#deletion_policy}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Optional. A human-readable description of the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_network_services_wasm_plugin#description GoogleNetworkServicesWasmPlugin#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_network_services_wasm_plugin#id GoogleNetworkServicesWasmPlugin#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginConfig.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Optional. Set of labels associated with the WasmPlugin resource.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_network_services_wasm_plugin#labels GoogleNetworkServicesWasmPlugin#labels}

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginConfig.property.location"></a>

```python
location: str
```

- *Type:* str

The location of the traffic extension.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_network_services_wasm_plugin#location GoogleNetworkServicesWasmPlugin#location}

---

##### `log_config`<sup>Optional</sup> <a name="log_config" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginConfig.property.logConfig"></a>

```python
log_config: GoogleNetworkServicesWasmPluginLogConfig
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginLogConfig">GoogleNetworkServicesWasmPluginLogConfig</a>

log_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_network_services_wasm_plugin#log_config GoogleNetworkServicesWasmPlugin#log_config}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_network_services_wasm_plugin#project GoogleNetworkServicesWasmPlugin#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginConfig.property.timeouts"></a>

```python
timeouts: GoogleNetworkServicesWasmPluginTimeouts
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginTimeouts">GoogleNetworkServicesWasmPluginTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_network_services_wasm_plugin#timeouts GoogleNetworkServicesWasmPlugin#timeouts}

---

### GoogleNetworkServicesWasmPluginLogConfig <a name="GoogleNetworkServicesWasmPluginLogConfig" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginLogConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginLogConfig.Initializer"></a>

```python
from cdktn_provider_google_beta import google_network_services_wasm_plugin

googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginLogConfig(
  enable: bool | IResolvable = None,
  min_log_level: str = None,
  sample_rate: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginLogConfig.property.enable">enable</a></code> | <code>bool \| cdktn.IResolvable</code> | Optional. Specifies whether to enable logging for activity by this plugin. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginLogConfig.property.minLogLevel">min_log_level</a></code> | <code>str</code> | Non-empty default. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginLogConfig.property.sampleRate">sample_rate</a></code> | <code>typing.Union[int, float]</code> | Non-empty default. |

---

##### `enable`<sup>Optional</sup> <a name="enable" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginLogConfig.property.enable"></a>

```python
enable: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Optional. Specifies whether to enable logging for activity by this plugin.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_network_services_wasm_plugin#enable GoogleNetworkServicesWasmPlugin#enable}

---

##### `min_log_level`<sup>Optional</sup> <a name="min_log_level" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginLogConfig.property.minLogLevel"></a>

```python
min_log_level: str
```

- *Type:* str

Non-empty default.

Specificies the lowest level of the plugin logs that are exported to Cloud Logging. This setting relates to the logs generated by using logging statements in your Wasm code.
This field is can be set only if logging is enabled for the plugin.
If the field is not provided when logging is enabled, it is set to INFO by default. Possible values: ["LOG_LEVEL_UNSPECIFIED", "TRACE", "DEBUG", "INFO", "WARN", "ERROR", "CRITICAL"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_network_services_wasm_plugin#min_log_level GoogleNetworkServicesWasmPlugin#min_log_level}

---

##### `sample_rate`<sup>Optional</sup> <a name="sample_rate" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginLogConfig.property.sampleRate"></a>

```python
sample_rate: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Non-empty default.

Configures the sampling rate of activity logs, where 1.0 means all logged activity is reported and 0.0 means no activity is reported.
A floating point value between 0.0 and 1.0 indicates that a percentage of log messages is stored.
The default value when logging is enabled is 1.0. The value of the field must be between 0 and 1 (inclusive).
This field can be specified only if logging is enabled for this plugin.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_network_services_wasm_plugin#sample_rate GoogleNetworkServicesWasmPlugin#sample_rate}

---

### GoogleNetworkServicesWasmPluginTimeouts <a name="GoogleNetworkServicesWasmPluginTimeouts" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginTimeouts.Initializer"></a>

```python
from cdktn_provider_google_beta import google_network_services_wasm_plugin

googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_network_services_wasm_plugin#create GoogleNetworkServicesWasmPlugin#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_network_services_wasm_plugin#delete GoogleNetworkServicesWasmPlugin#delete}. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_network_services_wasm_plugin#update GoogleNetworkServicesWasmPlugin#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_network_services_wasm_plugin#create GoogleNetworkServicesWasmPlugin#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_network_services_wasm_plugin#delete GoogleNetworkServicesWasmPlugin#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_network_services_wasm_plugin#update GoogleNetworkServicesWasmPlugin#update}.

---

### GoogleNetworkServicesWasmPluginUsedBy <a name="GoogleNetworkServicesWasmPluginUsedBy" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginUsedBy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginUsedBy.Initializer"></a>

```python
from cdktn_provider_google_beta import google_network_services_wasm_plugin

googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginUsedBy()
```


### GoogleNetworkServicesWasmPluginVersions <a name="GoogleNetworkServicesWasmPluginVersions" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginVersions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginVersions.Initializer"></a>

```python
from cdktn_provider_google_beta import google_network_services_wasm_plugin

googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginVersions(
  version_name: str,
  description: str = None,
  image_uri: str = None,
  labels: typing.Mapping[str] = None,
  plugin_config_data: str = None,
  plugin_config_uri: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginVersions.property.versionName">version_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_network_services_wasm_plugin#version_name GoogleNetworkServicesWasmPlugin#version_name}. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginVersions.property.description">description</a></code> | <code>str</code> | Optional. A human-readable description of the resource. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginVersions.property.imageUri">image_uri</a></code> | <code>str</code> | Optional. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginVersions.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | Optional. Set of labels associated with the WasmPlugin resource. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginVersions.property.pluginConfigData">plugin_config_data</a></code> | <code>str</code> | A base64-encoded string containing the configuration for the plugin. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginVersions.property.pluginConfigUri">plugin_config_uri</a></code> | <code>str</code> | URI of the plugin configuration stored in the Artifact Registry. |

---

##### `version_name`<sup>Required</sup> <a name="version_name" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginVersions.property.versionName"></a>

```python
version_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_network_services_wasm_plugin#version_name GoogleNetworkServicesWasmPlugin#version_name}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginVersions.property.description"></a>

```python
description: str
```

- *Type:* str

Optional. A human-readable description of the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_network_services_wasm_plugin#description GoogleNetworkServicesWasmPlugin#description}

---

##### `image_uri`<sup>Optional</sup> <a name="image_uri" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginVersions.property.imageUri"></a>

```python
image_uri: str
```

- *Type:* str

Optional.

URI of the container image containing the plugin, stored in the Artifact Registry. When a new WasmPluginVersion resource is created, the digest of the container image is saved in the imageDigest field.
When downloading an image, the digest value is used instead of an image tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_network_services_wasm_plugin#image_uri GoogleNetworkServicesWasmPlugin#image_uri}

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginVersions.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Optional. Set of labels associated with the WasmPlugin resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_network_services_wasm_plugin#labels GoogleNetworkServicesWasmPlugin#labels}

---

##### `plugin_config_data`<sup>Optional</sup> <a name="plugin_config_data" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginVersions.property.pluginConfigData"></a>

```python
plugin_config_data: str
```

- *Type:* str

A base64-encoded string containing the configuration for the plugin.

The configuration is provided to the plugin at runtime through the ON_CONFIGURE callback.
When a new WasmPluginVersion resource is created, the digest of the contents is saved in the pluginConfigDigest field.
Conflics with pluginConfigUri.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_network_services_wasm_plugin#plugin_config_data GoogleNetworkServicesWasmPlugin#plugin_config_data}

---

##### `plugin_config_uri`<sup>Optional</sup> <a name="plugin_config_uri" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginVersions.property.pluginConfigUri"></a>

```python
plugin_config_uri: str
```

- *Type:* str

URI of the plugin configuration stored in the Artifact Registry.

The configuration is provided to the plugin at runtime through the ON_CONFIGURE callback.
The container image must contain only a single file with the name plugin.config.
When a new WasmPluginVersion resource is created, the digest of the container image is saved in the pluginConfigDigest field.
Conflics with pluginConfigData.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_network_services_wasm_plugin#plugin_config_uri GoogleNetworkServicesWasmPlugin#plugin_config_uri}

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleNetworkServicesWasmPluginLogConfigOutputReference <a name="GoogleNetworkServicesWasmPluginLogConfigOutputReference" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginLogConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginLogConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_network_services_wasm_plugin

googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginLogConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginLogConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginLogConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginLogConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginLogConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginLogConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginLogConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginLogConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginLogConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginLogConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginLogConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginLogConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginLogConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginLogConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginLogConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginLogConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginLogConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginLogConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginLogConfigOutputReference.resetEnable">reset_enable</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginLogConfigOutputReference.resetMinLogLevel">reset_min_log_level</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginLogConfigOutputReference.resetSampleRate">reset_sample_rate</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginLogConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginLogConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginLogConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginLogConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginLogConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginLogConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginLogConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginLogConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginLogConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginLogConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginLogConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginLogConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginLogConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginLogConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginLogConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginLogConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginLogConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginLogConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginLogConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginLogConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginLogConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginLogConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginLogConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginLogConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_enable` <a name="reset_enable" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginLogConfigOutputReference.resetEnable"></a>

```python
def reset_enable() -> None
```

##### `reset_min_log_level` <a name="reset_min_log_level" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginLogConfigOutputReference.resetMinLogLevel"></a>

```python
def reset_min_log_level() -> None
```

##### `reset_sample_rate` <a name="reset_sample_rate" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginLogConfigOutputReference.resetSampleRate"></a>

```python
def reset_sample_rate() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginLogConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginLogConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginLogConfigOutputReference.property.enableInput">enable_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginLogConfigOutputReference.property.minLogLevelInput">min_log_level_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginLogConfigOutputReference.property.sampleRateInput">sample_rate_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginLogConfigOutputReference.property.enable">enable</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginLogConfigOutputReference.property.minLogLevel">min_log_level</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginLogConfigOutputReference.property.sampleRate">sample_rate</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginLogConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginLogConfig">GoogleNetworkServicesWasmPluginLogConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginLogConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginLogConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `enable_input`<sup>Optional</sup> <a name="enable_input" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginLogConfigOutputReference.property.enableInput"></a>

```python
enable_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `min_log_level_input`<sup>Optional</sup> <a name="min_log_level_input" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginLogConfigOutputReference.property.minLogLevelInput"></a>

```python
min_log_level_input: str
```

- *Type:* str

---

##### `sample_rate_input`<sup>Optional</sup> <a name="sample_rate_input" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginLogConfigOutputReference.property.sampleRateInput"></a>

```python
sample_rate_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `enable`<sup>Required</sup> <a name="enable" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginLogConfigOutputReference.property.enable"></a>

```python
enable: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `min_log_level`<sup>Required</sup> <a name="min_log_level" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginLogConfigOutputReference.property.minLogLevel"></a>

```python
min_log_level: str
```

- *Type:* str

---

##### `sample_rate`<sup>Required</sup> <a name="sample_rate" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginLogConfigOutputReference.property.sampleRate"></a>

```python
sample_rate: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginLogConfigOutputReference.property.internalValue"></a>

```python
internal_value: GoogleNetworkServicesWasmPluginLogConfig
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginLogConfig">GoogleNetworkServicesWasmPluginLogConfig</a>

---


### GoogleNetworkServicesWasmPluginTimeoutsOutputReference <a name="GoogleNetworkServicesWasmPluginTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginTimeoutsOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_network_services_wasm_plugin

googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginTimeouts">GoogleNetworkServicesWasmPluginTimeouts</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | GoogleNetworkServicesWasmPluginTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginTimeouts">GoogleNetworkServicesWasmPluginTimeouts</a>

---


### GoogleNetworkServicesWasmPluginUsedByList <a name="GoogleNetworkServicesWasmPluginUsedByList" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginUsedByList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginUsedByList.Initializer"></a>

```python
from cdktn_provider_google_beta import google_network_services_wasm_plugin

googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginUsedByList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginUsedByList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginUsedByList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginUsedByList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginUsedByList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginUsedByList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginUsedByList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginUsedByList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginUsedByList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginUsedByList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginUsedByList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginUsedByList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginUsedByList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginUsedByList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginUsedByList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginUsedByList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginUsedByList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginUsedByList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginUsedByList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleNetworkServicesWasmPluginUsedByOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginUsedByList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginUsedByList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginUsedByList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginUsedByList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginUsedByList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### GoogleNetworkServicesWasmPluginUsedByOutputReference <a name="GoogleNetworkServicesWasmPluginUsedByOutputReference" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginUsedByOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginUsedByOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_network_services_wasm_plugin

googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginUsedByOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginUsedByOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginUsedByOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginUsedByOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginUsedByOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginUsedByOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginUsedByOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginUsedByOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginUsedByOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginUsedByOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginUsedByOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginUsedByOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginUsedByOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginUsedByOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginUsedByOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginUsedByOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginUsedByOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginUsedByOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginUsedByOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginUsedByOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginUsedByOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginUsedByOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginUsedByOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginUsedByOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginUsedByOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginUsedByOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginUsedByOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginUsedByOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginUsedByOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginUsedByOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginUsedByOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginUsedByOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginUsedByOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginUsedByOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginUsedByOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginUsedByOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginUsedByOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginUsedByOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginUsedByOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginUsedByOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginUsedByOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginUsedByOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginUsedByOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginUsedByOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginUsedByOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginUsedByOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginUsedByOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginUsedByOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginUsedByOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginUsedByOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginUsedBy">GoogleNetworkServicesWasmPluginUsedBy</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginUsedByOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginUsedByOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginUsedByOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginUsedByOutputReference.property.internalValue"></a>

```python
internal_value: GoogleNetworkServicesWasmPluginUsedBy
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginUsedBy">GoogleNetworkServicesWasmPluginUsedBy</a>

---


### GoogleNetworkServicesWasmPluginVersionsList <a name="GoogleNetworkServicesWasmPluginVersionsList" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginVersionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginVersionsList.Initializer"></a>

```python
from cdktn_provider_google_beta import google_network_services_wasm_plugin

googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginVersionsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginVersionsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginVersionsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginVersionsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginVersionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginVersionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginVersionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginVersionsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginVersionsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginVersionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginVersionsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginVersionsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginVersionsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginVersionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginVersionsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginVersionsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginVersionsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginVersionsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginVersionsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleNetworkServicesWasmPluginVersionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginVersionsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginVersionsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginVersionsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginVersionsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginVersions">GoogleNetworkServicesWasmPluginVersions</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginVersionsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginVersionsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginVersionsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[GoogleNetworkServicesWasmPluginVersions]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginVersions">GoogleNetworkServicesWasmPluginVersions</a>]

---


### GoogleNetworkServicesWasmPluginVersionsOutputReference <a name="GoogleNetworkServicesWasmPluginVersionsOutputReference" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginVersionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginVersionsOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_network_services_wasm_plugin

googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginVersionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginVersionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginVersionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginVersionsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginVersionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginVersionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginVersionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginVersionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginVersionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginVersionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginVersionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginVersionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginVersionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginVersionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginVersionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginVersionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginVersionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginVersionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginVersionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginVersionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginVersionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginVersionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginVersionsOutputReference.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginVersionsOutputReference.resetImageUri">reset_image_uri</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginVersionsOutputReference.resetLabels">reset_labels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginVersionsOutputReference.resetPluginConfigData">reset_plugin_config_data</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginVersionsOutputReference.resetPluginConfigUri">reset_plugin_config_uri</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginVersionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginVersionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginVersionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginVersionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginVersionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginVersionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginVersionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginVersionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginVersionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginVersionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginVersionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginVersionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginVersionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginVersionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginVersionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginVersionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginVersionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginVersionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginVersionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginVersionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginVersionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginVersionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginVersionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginVersionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_description` <a name="reset_description" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginVersionsOutputReference.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_image_uri` <a name="reset_image_uri" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginVersionsOutputReference.resetImageUri"></a>

```python
def reset_image_uri() -> None
```

##### `reset_labels` <a name="reset_labels" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginVersionsOutputReference.resetLabels"></a>

```python
def reset_labels() -> None
```

##### `reset_plugin_config_data` <a name="reset_plugin_config_data" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginVersionsOutputReference.resetPluginConfigData"></a>

```python
def reset_plugin_config_data() -> None
```

##### `reset_plugin_config_uri` <a name="reset_plugin_config_uri" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginVersionsOutputReference.resetPluginConfigUri"></a>

```python
def reset_plugin_config_uri() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginVersionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginVersionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginVersionsOutputReference.property.createTime">create_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginVersionsOutputReference.property.imageDigest">image_digest</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginVersionsOutputReference.property.pluginConfigDigest">plugin_config_digest</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginVersionsOutputReference.property.updateTime">update_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginVersionsOutputReference.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginVersionsOutputReference.property.imageUriInput">image_uri_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginVersionsOutputReference.property.labelsInput">labels_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginVersionsOutputReference.property.pluginConfigDataInput">plugin_config_data_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginVersionsOutputReference.property.pluginConfigUriInput">plugin_config_uri_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginVersionsOutputReference.property.versionNameInput">version_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginVersionsOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginVersionsOutputReference.property.imageUri">image_uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginVersionsOutputReference.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginVersionsOutputReference.property.pluginConfigData">plugin_config_data</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginVersionsOutputReference.property.pluginConfigUri">plugin_config_uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginVersionsOutputReference.property.versionName">version_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginVersionsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginVersions">GoogleNetworkServicesWasmPluginVersions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginVersionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginVersionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_time`<sup>Required</sup> <a name="create_time" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginVersionsOutputReference.property.createTime"></a>

```python
create_time: str
```

- *Type:* str

---

##### `image_digest`<sup>Required</sup> <a name="image_digest" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginVersionsOutputReference.property.imageDigest"></a>

```python
image_digest: str
```

- *Type:* str

---

##### `plugin_config_digest`<sup>Required</sup> <a name="plugin_config_digest" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginVersionsOutputReference.property.pluginConfigDigest"></a>

```python
plugin_config_digest: str
```

- *Type:* str

---

##### `update_time`<sup>Required</sup> <a name="update_time" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginVersionsOutputReference.property.updateTime"></a>

```python
update_time: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginVersionsOutputReference.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `image_uri_input`<sup>Optional</sup> <a name="image_uri_input" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginVersionsOutputReference.property.imageUriInput"></a>

```python
image_uri_input: str
```

- *Type:* str

---

##### `labels_input`<sup>Optional</sup> <a name="labels_input" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginVersionsOutputReference.property.labelsInput"></a>

```python
labels_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `plugin_config_data_input`<sup>Optional</sup> <a name="plugin_config_data_input" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginVersionsOutputReference.property.pluginConfigDataInput"></a>

```python
plugin_config_data_input: str
```

- *Type:* str

---

##### `plugin_config_uri_input`<sup>Optional</sup> <a name="plugin_config_uri_input" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginVersionsOutputReference.property.pluginConfigUriInput"></a>

```python
plugin_config_uri_input: str
```

- *Type:* str

---

##### `version_name_input`<sup>Optional</sup> <a name="version_name_input" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginVersionsOutputReference.property.versionNameInput"></a>

```python
version_name_input: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginVersionsOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `image_uri`<sup>Required</sup> <a name="image_uri" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginVersionsOutputReference.property.imageUri"></a>

```python
image_uri: str
```

- *Type:* str

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginVersionsOutputReference.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `plugin_config_data`<sup>Required</sup> <a name="plugin_config_data" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginVersionsOutputReference.property.pluginConfigData"></a>

```python
plugin_config_data: str
```

- *Type:* str

---

##### `plugin_config_uri`<sup>Required</sup> <a name="plugin_config_uri" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginVersionsOutputReference.property.pluginConfigUri"></a>

```python
plugin_config_uri: str
```

- *Type:* str

---

##### `version_name`<sup>Required</sup> <a name="version_name" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginVersionsOutputReference.property.versionName"></a>

```python
version_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginVersionsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | GoogleNetworkServicesWasmPluginVersions
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginVersions">GoogleNetworkServicesWasmPluginVersions</a>

---



