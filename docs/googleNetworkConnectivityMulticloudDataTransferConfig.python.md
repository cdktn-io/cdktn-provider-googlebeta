# `googleNetworkConnectivityMulticloudDataTransferConfig` Submodule <a name="`googleNetworkConnectivityMulticloudDataTransferConfig` Submodule" id="@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleNetworkConnectivityMulticloudDataTransferConfig <a name="GoogleNetworkConnectivityMulticloudDataTransferConfig" id="@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfig"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_network_connectivity_multicloud_data_transfer_config google_network_connectivity_multicloud_data_transfer_config}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfig.Initializer"></a>

```python
from cdktn_provider_google_beta import google_network_connectivity_multicloud_data_transfer_config

googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfig(
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
  name: str,
  deletion_policy: str = None,
  description: str = None,
  id: str = None,
  labels: typing.Mapping[str] = None,
  project: str = None,
  services: IResolvable | typing.List[GoogleNetworkConnectivityMulticloudDataTransferConfigServices] = None,
  timeouts: GoogleNetworkConnectivityMulticloudDataTransferConfigTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfig.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfig.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfig.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfig.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfig.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfig.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfig.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfig.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfig.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfig.Initializer.parameter.location">location</a></code> | <code>str</code> | The location of the multicloud data transfer config. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfig.Initializer.parameter.name">name</a></code> | <code>str</code> | The name of the MulticloudDataTransferConfig resource. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfig.Initializer.parameter.deletionPolicy">deletion_policy</a></code> | <code>str</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfig.Initializer.parameter.description">description</a></code> | <code>str</code> | A description of this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfig.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_network_connectivity_multicloud_data_transfer_config#id GoogleNetworkConnectivityMulticloudDataTransferConfig#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfig.Initializer.parameter.labels">labels</a></code> | <code>typing.Mapping[str]</code> | User-defined labels. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfig.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_network_connectivity_multicloud_data_transfer_config#project GoogleNetworkConnectivityMulticloudDataTransferConfig#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfig.Initializer.parameter.services">services</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfigServices">GoogleNetworkConnectivityMulticloudDataTransferConfigServices</a>]</code> | services block. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfig.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfigTimeouts">GoogleNetworkConnectivityMulticloudDataTransferConfigTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfig.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfig.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfig.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfig.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfig.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfig.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfig.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfig.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfig.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfig.Initializer.parameter.location"></a>

- *Type:* str

The location of the multicloud data transfer config.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_network_connectivity_multicloud_data_transfer_config#location GoogleNetworkConnectivityMulticloudDataTransferConfig#location}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfig.Initializer.parameter.name"></a>

- *Type:* str

The name of the MulticloudDataTransferConfig resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_network_connectivity_multicloud_data_transfer_config#name GoogleNetworkConnectivityMulticloudDataTransferConfig#name}

---

##### `deletion_policy`<sup>Optional</sup> <a name="deletion_policy" id="@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfig.Initializer.parameter.deletionPolicy"></a>

- *Type:* str

Whether Terraform will be prevented from destroying the instance.

Defaults to "DELETE".
When a 'terraform destroy' or 'terraform apply' would delete the instance,
the command will fail if this field is set to "PREVENT" in Terraform state.
When set to "ABANDON", the command will remove the resource from Terraform
management without updating or deleting the resource in the API.
When set to "DELETE", deleting the resource is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_network_connectivity_multicloud_data_transfer_config#deletion_policy GoogleNetworkConnectivityMulticloudDataTransferConfig#deletion_policy}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfig.Initializer.parameter.description"></a>

- *Type:* str

A description of this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_network_connectivity_multicloud_data_transfer_config#description GoogleNetworkConnectivityMulticloudDataTransferConfig#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfig.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_network_connectivity_multicloud_data_transfer_config#id GoogleNetworkConnectivityMulticloudDataTransferConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfig.Initializer.parameter.labels"></a>

- *Type:* typing.Mapping[str]

User-defined labels.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_network_connectivity_multicloud_data_transfer_config#labels GoogleNetworkConnectivityMulticloudDataTransferConfig#labels}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfig.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_network_connectivity_multicloud_data_transfer_config#project GoogleNetworkConnectivityMulticloudDataTransferConfig#project}.

---

##### `services`<sup>Optional</sup> <a name="services" id="@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfig.Initializer.parameter.services"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfigServices">GoogleNetworkConnectivityMulticloudDataTransferConfigServices</a>]

services block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_network_connectivity_multicloud_data_transfer_config#services GoogleNetworkConnectivityMulticloudDataTransferConfig#services}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfig.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfigTimeouts">GoogleNetworkConnectivityMulticloudDataTransferConfigTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_network_connectivity_multicloud_data_transfer_config#timeouts GoogleNetworkConnectivityMulticloudDataTransferConfig#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfig.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfig.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfig.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfig.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfig.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfig.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfig.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfig.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfig.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfig.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfig.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfig.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfig.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfig.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfig.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfig.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfig.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfig.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfig.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfig.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfig.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfig.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfig.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfig.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfig.putServices">put_services</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfig.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfig.resetDeletionPolicy">reset_deletion_policy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfig.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfig.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfig.resetLabels">reset_labels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfig.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfig.resetServices">reset_services</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfig.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfig.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfig.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfig.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfig.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfig.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfig.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfig.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfig.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfig.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfig.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfig.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfig.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfig.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfig.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfig.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfig.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfig.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfig.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfig.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfig.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfig.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfig.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfig.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfig.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfig.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfig.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfig.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfig.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfig.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfig.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfig.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfig.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfig.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfig.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_services` <a name="put_services" id="@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfig.putServices"></a>

```python
def put_services(
  value: IResolvable | typing.List[GoogleNetworkConnectivityMulticloudDataTransferConfigServices]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfig.putServices.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfigServices">GoogleNetworkConnectivityMulticloudDataTransferConfigServices</a>]

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfig.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfig.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_network_connectivity_multicloud_data_transfer_config#create GoogleNetworkConnectivityMulticloudDataTransferConfig#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfig.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_network_connectivity_multicloud_data_transfer_config#delete GoogleNetworkConnectivityMulticloudDataTransferConfig#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfig.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_network_connectivity_multicloud_data_transfer_config#update GoogleNetworkConnectivityMulticloudDataTransferConfig#update}.

---

##### `reset_deletion_policy` <a name="reset_deletion_policy" id="@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfig.resetDeletionPolicy"></a>

```python
def reset_deletion_policy() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfig.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfig.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_labels` <a name="reset_labels" id="@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfig.resetLabels"></a>

```python
def reset_labels() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfig.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_services` <a name="reset_services" id="@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfig.resetServices"></a>

```python
def reset_services() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfig.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfig.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfig.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfig.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfig.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a GoogleNetworkConnectivityMulticloudDataTransferConfig resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfig.isConstruct"></a>

```python
from cdktn_provider_google_beta import google_network_connectivity_multicloud_data_transfer_config

googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfig.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfig.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfig.isTerraformElement"></a>

```python
from cdktn_provider_google_beta import google_network_connectivity_multicloud_data_transfer_config

googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfig.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfig.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfig.isTerraformResource"></a>

```python
from cdktn_provider_google_beta import google_network_connectivity_multicloud_data_transfer_config

googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfig.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfig.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfig.generateConfigForImport"></a>

```python
from cdktn_provider_google_beta import google_network_connectivity_multicloud_data_transfer_config

googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfig.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a GoogleNetworkConnectivityMulticloudDataTransferConfig resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfig.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfig.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the GoogleNetworkConnectivityMulticloudDataTransferConfig to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfig.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing GoogleNetworkConnectivityMulticloudDataTransferConfig that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_network_connectivity_multicloud_data_transfer_config#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfig.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the GoogleNetworkConnectivityMulticloudDataTransferConfig to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfig.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfig.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfig.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfig.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfig.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfig.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfig.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfig.property.createTime">create_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfig.property.destinationsActiveCount">destinations_active_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfig.property.destinationsCount">destinations_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfig.property.effectiveLabels">effective_labels</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfig.property.etag">etag</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfig.property.services">services</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfigServicesList">GoogleNetworkConnectivityMulticloudDataTransferConfigServicesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfig.property.terraformLabels">terraform_labels</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfigTimeoutsOutputReference">GoogleNetworkConnectivityMulticloudDataTransferConfigTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfig.property.uid">uid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfig.property.updateTime">update_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfig.property.deletionPolicyInput">deletion_policy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfig.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfig.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfig.property.labelsInput">labels_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfig.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfig.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfig.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfig.property.servicesInput">services_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfigServices">GoogleNetworkConnectivityMulticloudDataTransferConfigServices</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfig.property.timeoutsInput">timeouts_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfigTimeouts">GoogleNetworkConnectivityMulticloudDataTransferConfigTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfig.property.deletionPolicy">deletion_policy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfig.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfig.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfig.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfig.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfig.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfig.property.project">project</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfig.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfig.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfig.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfig.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfig.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfig.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfig.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfig.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `create_time`<sup>Required</sup> <a name="create_time" id="@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfig.property.createTime"></a>

```python
create_time: str
```

- *Type:* str

---

##### `destinations_active_count`<sup>Required</sup> <a name="destinations_active_count" id="@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfig.property.destinationsActiveCount"></a>

```python
destinations_active_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `destinations_count`<sup>Required</sup> <a name="destinations_count" id="@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfig.property.destinationsCount"></a>

```python
destinations_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `effective_labels`<sup>Required</sup> <a name="effective_labels" id="@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfig.property.effectiveLabels"></a>

```python
effective_labels: StringMap
```

- *Type:* cdktn.StringMap

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfig.property.etag"></a>

```python
etag: str
```

- *Type:* str

---

##### `services`<sup>Required</sup> <a name="services" id="@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfig.property.services"></a>

```python
services: GoogleNetworkConnectivityMulticloudDataTransferConfigServicesList
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfigServicesList">GoogleNetworkConnectivityMulticloudDataTransferConfigServicesList</a>

---

##### `terraform_labels`<sup>Required</sup> <a name="terraform_labels" id="@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfig.property.terraformLabels"></a>

```python
terraform_labels: StringMap
```

- *Type:* cdktn.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfig.property.timeouts"></a>

```python
timeouts: GoogleNetworkConnectivityMulticloudDataTransferConfigTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfigTimeoutsOutputReference">GoogleNetworkConnectivityMulticloudDataTransferConfigTimeoutsOutputReference</a>

---

##### `uid`<sup>Required</sup> <a name="uid" id="@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfig.property.uid"></a>

```python
uid: str
```

- *Type:* str

---

##### `update_time`<sup>Required</sup> <a name="update_time" id="@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfig.property.updateTime"></a>

```python
update_time: str
```

- *Type:* str

---

##### `deletion_policy_input`<sup>Optional</sup> <a name="deletion_policy_input" id="@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfig.property.deletionPolicyInput"></a>

```python
deletion_policy_input: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfig.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfig.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `labels_input`<sup>Optional</sup> <a name="labels_input" id="@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfig.property.labelsInput"></a>

```python
labels_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfig.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfig.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfig.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `services_input`<sup>Optional</sup> <a name="services_input" id="@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfig.property.servicesInput"></a>

```python
services_input: IResolvable | typing.List[GoogleNetworkConnectivityMulticloudDataTransferConfigServices]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfigServices">GoogleNetworkConnectivityMulticloudDataTransferConfigServices</a>]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfig.property.timeoutsInput"></a>

```python
timeouts_input: IResolvable | GoogleNetworkConnectivityMulticloudDataTransferConfigTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfigTimeouts">GoogleNetworkConnectivityMulticloudDataTransferConfigTimeouts</a>

---

##### `deletion_policy`<sup>Required</sup> <a name="deletion_policy" id="@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfig.property.deletionPolicy"></a>

```python
deletion_policy: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfig.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfig.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfig.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfig.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfig.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfig.property.project"></a>

```python
project: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfig.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfig.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleNetworkConnectivityMulticloudDataTransferConfigConfig <a name="GoogleNetworkConnectivityMulticloudDataTransferConfigConfig" id="@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfigConfig.Initializer"></a>

```python
from cdktn_provider_google_beta import google_network_connectivity_multicloud_data_transfer_config

googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfigConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  location: str,
  name: str,
  deletion_policy: str = None,
  description: str = None,
  id: str = None,
  labels: typing.Mapping[str] = None,
  project: str = None,
  services: IResolvable | typing.List[GoogleNetworkConnectivityMulticloudDataTransferConfigServices] = None,
  timeouts: GoogleNetworkConnectivityMulticloudDataTransferConfigTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfigConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfigConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfigConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfigConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfigConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfigConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfigConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfigConfig.property.location">location</a></code> | <code>str</code> | The location of the multicloud data transfer config. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfigConfig.property.name">name</a></code> | <code>str</code> | The name of the MulticloudDataTransferConfig resource. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfigConfig.property.deletionPolicy">deletion_policy</a></code> | <code>str</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfigConfig.property.description">description</a></code> | <code>str</code> | A description of this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfigConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_network_connectivity_multicloud_data_transfer_config#id GoogleNetworkConnectivityMulticloudDataTransferConfig#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfigConfig.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | User-defined labels. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfigConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_network_connectivity_multicloud_data_transfer_config#project GoogleNetworkConnectivityMulticloudDataTransferConfig#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfigConfig.property.services">services</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfigServices">GoogleNetworkConnectivityMulticloudDataTransferConfigServices</a>]</code> | services block. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfigConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfigTimeouts">GoogleNetworkConnectivityMulticloudDataTransferConfigTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfigConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfigConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfigConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfigConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfigConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfigConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfigConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfigConfig.property.location"></a>

```python
location: str
```

- *Type:* str

The location of the multicloud data transfer config.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_network_connectivity_multicloud_data_transfer_config#location GoogleNetworkConnectivityMulticloudDataTransferConfig#location}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfigConfig.property.name"></a>

```python
name: str
```

- *Type:* str

The name of the MulticloudDataTransferConfig resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_network_connectivity_multicloud_data_transfer_config#name GoogleNetworkConnectivityMulticloudDataTransferConfig#name}

---

##### `deletion_policy`<sup>Optional</sup> <a name="deletion_policy" id="@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfigConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_network_connectivity_multicloud_data_transfer_config#deletion_policy GoogleNetworkConnectivityMulticloudDataTransferConfig#deletion_policy}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfigConfig.property.description"></a>

```python
description: str
```

- *Type:* str

A description of this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_network_connectivity_multicloud_data_transfer_config#description GoogleNetworkConnectivityMulticloudDataTransferConfig#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfigConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_network_connectivity_multicloud_data_transfer_config#id GoogleNetworkConnectivityMulticloudDataTransferConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfigConfig.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

User-defined labels.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_network_connectivity_multicloud_data_transfer_config#labels GoogleNetworkConnectivityMulticloudDataTransferConfig#labels}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfigConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_network_connectivity_multicloud_data_transfer_config#project GoogleNetworkConnectivityMulticloudDataTransferConfig#project}.

---

##### `services`<sup>Optional</sup> <a name="services" id="@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfigConfig.property.services"></a>

```python
services: IResolvable | typing.List[GoogleNetworkConnectivityMulticloudDataTransferConfigServices]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfigServices">GoogleNetworkConnectivityMulticloudDataTransferConfigServices</a>]

services block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_network_connectivity_multicloud_data_transfer_config#services GoogleNetworkConnectivityMulticloudDataTransferConfig#services}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfigConfig.property.timeouts"></a>

```python
timeouts: GoogleNetworkConnectivityMulticloudDataTransferConfigTimeouts
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfigTimeouts">GoogleNetworkConnectivityMulticloudDataTransferConfigTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_network_connectivity_multicloud_data_transfer_config#timeouts GoogleNetworkConnectivityMulticloudDataTransferConfig#timeouts}

---

### GoogleNetworkConnectivityMulticloudDataTransferConfigServices <a name="GoogleNetworkConnectivityMulticloudDataTransferConfigServices" id="@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfigServices"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfigServices.Initializer"></a>

```python
from cdktn_provider_google_beta import google_network_connectivity_multicloud_data_transfer_config

googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfigServices(
  service_name: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfigServices.property.serviceName">service_name</a></code> | <code>str</code> | The name of the service, like "big-query" or "cloud-storage". This corresponds to the map key in the API. |

---

##### `service_name`<sup>Required</sup> <a name="service_name" id="@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfigServices.property.serviceName"></a>

```python
service_name: str
```

- *Type:* str

The name of the service, like "big-query" or "cloud-storage". This corresponds to the map key in the API.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_network_connectivity_multicloud_data_transfer_config#service_name GoogleNetworkConnectivityMulticloudDataTransferConfig#service_name}

---

### GoogleNetworkConnectivityMulticloudDataTransferConfigServicesStates <a name="GoogleNetworkConnectivityMulticloudDataTransferConfigServicesStates" id="@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfigServicesStates"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfigServicesStates.Initializer"></a>

```python
from cdktn_provider_google_beta import google_network_connectivity_multicloud_data_transfer_config

googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfigServicesStates()
```


### GoogleNetworkConnectivityMulticloudDataTransferConfigTimeouts <a name="GoogleNetworkConnectivityMulticloudDataTransferConfigTimeouts" id="@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfigTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfigTimeouts.Initializer"></a>

```python
from cdktn_provider_google_beta import google_network_connectivity_multicloud_data_transfer_config

googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfigTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfigTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_network_connectivity_multicloud_data_transfer_config#create GoogleNetworkConnectivityMulticloudDataTransferConfig#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfigTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_network_connectivity_multicloud_data_transfer_config#delete GoogleNetworkConnectivityMulticloudDataTransferConfig#delete}. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfigTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_network_connectivity_multicloud_data_transfer_config#update GoogleNetworkConnectivityMulticloudDataTransferConfig#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfigTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_network_connectivity_multicloud_data_transfer_config#create GoogleNetworkConnectivityMulticloudDataTransferConfig#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfigTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_network_connectivity_multicloud_data_transfer_config#delete GoogleNetworkConnectivityMulticloudDataTransferConfig#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfigTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_network_connectivity_multicloud_data_transfer_config#update GoogleNetworkConnectivityMulticloudDataTransferConfig#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleNetworkConnectivityMulticloudDataTransferConfigServicesList <a name="GoogleNetworkConnectivityMulticloudDataTransferConfigServicesList" id="@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfigServicesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfigServicesList.Initializer"></a>

```python
from cdktn_provider_google_beta import google_network_connectivity_multicloud_data_transfer_config

googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfigServicesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfigServicesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfigServicesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfigServicesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfigServicesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfigServicesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfigServicesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfigServicesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfigServicesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfigServicesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfigServicesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfigServicesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfigServicesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfigServicesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfigServicesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfigServicesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfigServicesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfigServicesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfigServicesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleNetworkConnectivityMulticloudDataTransferConfigServicesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfigServicesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfigServicesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfigServicesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfigServicesList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfigServices">GoogleNetworkConnectivityMulticloudDataTransferConfigServices</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfigServicesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfigServicesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfigServicesList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[GoogleNetworkConnectivityMulticloudDataTransferConfigServices]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfigServices">GoogleNetworkConnectivityMulticloudDataTransferConfigServices</a>]

---


### GoogleNetworkConnectivityMulticloudDataTransferConfigServicesOutputReference <a name="GoogleNetworkConnectivityMulticloudDataTransferConfigServicesOutputReference" id="@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfigServicesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfigServicesOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_network_connectivity_multicloud_data_transfer_config

googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfigServicesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfigServicesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfigServicesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfigServicesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfigServicesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfigServicesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfigServicesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfigServicesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfigServicesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfigServicesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfigServicesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfigServicesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfigServicesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfigServicesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfigServicesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfigServicesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfigServicesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfigServicesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfigServicesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfigServicesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfigServicesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfigServicesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfigServicesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfigServicesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfigServicesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfigServicesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfigServicesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfigServicesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfigServicesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfigServicesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfigServicesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfigServicesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfigServicesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfigServicesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfigServicesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfigServicesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfigServicesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfigServicesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfigServicesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfigServicesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfigServicesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfigServicesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfigServicesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfigServicesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfigServicesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfigServicesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfigServicesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfigServicesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfigServicesOutputReference.property.states">states</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfigServicesStatesList">GoogleNetworkConnectivityMulticloudDataTransferConfigServicesStatesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfigServicesOutputReference.property.serviceNameInput">service_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfigServicesOutputReference.property.serviceName">service_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfigServicesOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfigServices">GoogleNetworkConnectivityMulticloudDataTransferConfigServices</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfigServicesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfigServicesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `states`<sup>Required</sup> <a name="states" id="@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfigServicesOutputReference.property.states"></a>

```python
states: GoogleNetworkConnectivityMulticloudDataTransferConfigServicesStatesList
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfigServicesStatesList">GoogleNetworkConnectivityMulticloudDataTransferConfigServicesStatesList</a>

---

##### `service_name_input`<sup>Optional</sup> <a name="service_name_input" id="@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfigServicesOutputReference.property.serviceNameInput"></a>

```python
service_name_input: str
```

- *Type:* str

---

##### `service_name`<sup>Required</sup> <a name="service_name" id="@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfigServicesOutputReference.property.serviceName"></a>

```python
service_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfigServicesOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | GoogleNetworkConnectivityMulticloudDataTransferConfigServices
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfigServices">GoogleNetworkConnectivityMulticloudDataTransferConfigServices</a>

---


### GoogleNetworkConnectivityMulticloudDataTransferConfigServicesStatesList <a name="GoogleNetworkConnectivityMulticloudDataTransferConfigServicesStatesList" id="@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfigServicesStatesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfigServicesStatesList.Initializer"></a>

```python
from cdktn_provider_google_beta import google_network_connectivity_multicloud_data_transfer_config

googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfigServicesStatesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfigServicesStatesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfigServicesStatesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfigServicesStatesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfigServicesStatesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfigServicesStatesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfigServicesStatesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfigServicesStatesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfigServicesStatesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfigServicesStatesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfigServicesStatesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfigServicesStatesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfigServicesStatesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfigServicesStatesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfigServicesStatesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfigServicesStatesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfigServicesStatesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfigServicesStatesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfigServicesStatesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleNetworkConnectivityMulticloudDataTransferConfigServicesStatesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfigServicesStatesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfigServicesStatesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfigServicesStatesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfigServicesStatesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfigServicesStatesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### GoogleNetworkConnectivityMulticloudDataTransferConfigServicesStatesOutputReference <a name="GoogleNetworkConnectivityMulticloudDataTransferConfigServicesStatesOutputReference" id="@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfigServicesStatesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfigServicesStatesOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_network_connectivity_multicloud_data_transfer_config

googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfigServicesStatesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfigServicesStatesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfigServicesStatesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfigServicesStatesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfigServicesStatesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfigServicesStatesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfigServicesStatesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfigServicesStatesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfigServicesStatesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfigServicesStatesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfigServicesStatesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfigServicesStatesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfigServicesStatesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfigServicesStatesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfigServicesStatesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfigServicesStatesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfigServicesStatesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfigServicesStatesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfigServicesStatesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfigServicesStatesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfigServicesStatesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfigServicesStatesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfigServicesStatesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfigServicesStatesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfigServicesStatesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfigServicesStatesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfigServicesStatesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfigServicesStatesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfigServicesStatesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfigServicesStatesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfigServicesStatesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfigServicesStatesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfigServicesStatesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfigServicesStatesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfigServicesStatesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfigServicesStatesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfigServicesStatesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfigServicesStatesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfigServicesStatesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfigServicesStatesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfigServicesStatesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfigServicesStatesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfigServicesStatesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfigServicesStatesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfigServicesStatesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfigServicesStatesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfigServicesStatesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfigServicesStatesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfigServicesStatesOutputReference.property.effectiveTime">effective_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfigServicesStatesOutputReference.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfigServicesStatesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfigServicesStates">GoogleNetworkConnectivityMulticloudDataTransferConfigServicesStates</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfigServicesStatesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfigServicesStatesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `effective_time`<sup>Required</sup> <a name="effective_time" id="@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfigServicesStatesOutputReference.property.effectiveTime"></a>

```python
effective_time: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfigServicesStatesOutputReference.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfigServicesStatesOutputReference.property.internalValue"></a>

```python
internal_value: GoogleNetworkConnectivityMulticloudDataTransferConfigServicesStates
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfigServicesStates">GoogleNetworkConnectivityMulticloudDataTransferConfigServicesStates</a>

---


### GoogleNetworkConnectivityMulticloudDataTransferConfigTimeoutsOutputReference <a name="GoogleNetworkConnectivityMulticloudDataTransferConfigTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfigTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfigTimeoutsOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_network_connectivity_multicloud_data_transfer_config

googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfigTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfigTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfigTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfigTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfigTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfigTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfigTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfigTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfigTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfigTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfigTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfigTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfigTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfigTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfigTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfigTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfigTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfigTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfigTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfigTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfigTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfigTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfigTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfigTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfigTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfigTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfigTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfigTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfigTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfigTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfigTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfigTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfigTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfigTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfigTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfigTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfigTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfigTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfigTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfigTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfigTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfigTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfigTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfigTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfigTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfigTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfigTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfigTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfigTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfigTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfigTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfigTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfigTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfigTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfigTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfigTimeouts">GoogleNetworkConnectivityMulticloudDataTransferConfigTimeouts</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfigTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfigTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfigTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfigTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfigTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfigTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfigTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfigTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfigTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | GoogleNetworkConnectivityMulticloudDataTransferConfigTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleNetworkConnectivityMulticloudDataTransferConfig.GoogleNetworkConnectivityMulticloudDataTransferConfigTimeouts">GoogleNetworkConnectivityMulticloudDataTransferConfigTimeouts</a>

---



