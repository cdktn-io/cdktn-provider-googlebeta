# `googleNetworkServicesCdnEdgeExtension` Submodule <a name="`googleNetworkServicesCdnEdgeExtension` Submodule" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleNetworkServicesCdnEdgeExtension <a name="GoogleNetworkServicesCdnEdgeExtension" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_network_services_cdn_edge_extension google_network_services_cdn_edge_extension}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.Initializer"></a>

```python
from cdktn_provider_google_beta import google_network_services_cdn_edge_extension

googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  extension_chains: IResolvable | typing.List[GoogleNetworkServicesCdnEdgeExtensionExtensionChains],
  location: str,
  name: str,
  target: GoogleNetworkServicesCdnEdgeExtensionTarget,
  deletion_policy: str = None,
  description: str = None,
  id: str = None,
  labels: typing.Mapping[str] = None,
  project: str = None,
  timeouts: GoogleNetworkServicesCdnEdgeExtensionTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.Initializer.parameter.extensionChains">extension_chains</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChains">GoogleNetworkServicesCdnEdgeExtensionExtensionChains</a>]</code> | extension_chains block. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.Initializer.parameter.location">location</a></code> | <code>str</code> | The location of the CDN edge extension. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.Initializer.parameter.name">name</a></code> | <code>str</code> | Name of the CdnEdgeExtension resource in the following format: projects/{project}/locations/{location}/cdnEdgeExtensions/{cdn_edge_extension}. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.Initializer.parameter.target">target</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionTarget">GoogleNetworkServicesCdnEdgeExtensionTarget</a></code> | target block. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.Initializer.parameter.deletionPolicy">deletion_policy</a></code> | <code>str</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.Initializer.parameter.description">description</a></code> | <code>str</code> | A human-readable description of the resource. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_network_services_cdn_edge_extension#id GoogleNetworkServicesCdnEdgeExtension#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.Initializer.parameter.labels">labels</a></code> | <code>typing.Mapping[str]</code> | Set of labels associated with the CdnEdgeExtension resource. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_network_services_cdn_edge_extension#project GoogleNetworkServicesCdnEdgeExtension#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionTimeouts">GoogleNetworkServicesCdnEdgeExtensionTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `extension_chains`<sup>Required</sup> <a name="extension_chains" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.Initializer.parameter.extensionChains"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChains">GoogleNetworkServicesCdnEdgeExtensionExtensionChains</a>]

extension_chains block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_network_services_cdn_edge_extension#extension_chains GoogleNetworkServicesCdnEdgeExtension#extension_chains}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.Initializer.parameter.location"></a>

- *Type:* str

The location of the CDN edge extension.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_network_services_cdn_edge_extension#location GoogleNetworkServicesCdnEdgeExtension#location}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.Initializer.parameter.name"></a>

- *Type:* str

Name of the CdnEdgeExtension resource in the following format: projects/{project}/locations/{location}/cdnEdgeExtensions/{cdn_edge_extension}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_network_services_cdn_edge_extension#name GoogleNetworkServicesCdnEdgeExtension#name}

---

##### `target`<sup>Required</sup> <a name="target" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.Initializer.parameter.target"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionTarget">GoogleNetworkServicesCdnEdgeExtensionTarget</a>

target block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_network_services_cdn_edge_extension#target GoogleNetworkServicesCdnEdgeExtension#target}

---

##### `deletion_policy`<sup>Optional</sup> <a name="deletion_policy" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.Initializer.parameter.deletionPolicy"></a>

- *Type:* str

Whether Terraform will be prevented from destroying the instance.

Defaults to "DELETE".
When a 'terraform destroy' or 'terraform apply' would delete the instance,
the command will fail if this field is set to "PREVENT" in Terraform state.
When set to "ABANDON", the command will remove the resource from Terraform
management without updating or deleting the resource in the API.
When set to "DELETE", deleting the resource is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_network_services_cdn_edge_extension#deletion_policy GoogleNetworkServicesCdnEdgeExtension#deletion_policy}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.Initializer.parameter.description"></a>

- *Type:* str

A human-readable description of the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_network_services_cdn_edge_extension#description GoogleNetworkServicesCdnEdgeExtension#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_network_services_cdn_edge_extension#id GoogleNetworkServicesCdnEdgeExtension#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.Initializer.parameter.labels"></a>

- *Type:* typing.Mapping[str]

Set of labels associated with the CdnEdgeExtension resource.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_network_services_cdn_edge_extension#labels GoogleNetworkServicesCdnEdgeExtension#labels}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_network_services_cdn_edge_extension#project GoogleNetworkServicesCdnEdgeExtension#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionTimeouts">GoogleNetworkServicesCdnEdgeExtensionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_network_services_cdn_edge_extension#timeouts GoogleNetworkServicesCdnEdgeExtension#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.putExtensionChains">put_extension_chains</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.putTarget">put_target</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.resetDeletionPolicy">reset_deletion_policy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.resetLabels">reset_labels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_extension_chains` <a name="put_extension_chains" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.putExtensionChains"></a>

```python
def put_extension_chains(
  value: IResolvable | typing.List[GoogleNetworkServicesCdnEdgeExtensionExtensionChains]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.putExtensionChains.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChains">GoogleNetworkServicesCdnEdgeExtensionExtensionChains</a>]

---

##### `put_target` <a name="put_target" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.putTarget"></a>

```python
def put_target(
  resources: typing.List[str]
) -> None
```

###### `resources`<sup>Required</sup> <a name="resources" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.putTarget.parameter.resources"></a>

- *Type:* typing.List[str]

A list of references to the resources that are targeted by CdnEdgeExtension.

Types of resources supported: EdgeCacheService.
The format can be 'projects/{project}/locations/{location}/edgeCacheServices/{edgeCacheService}' or
'//networkservices.googleapis.com/projects/{project}/locations/{location}/edgeCacheServices/{edgeCacheService}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_network_services_cdn_edge_extension#resources GoogleNetworkServicesCdnEdgeExtension#resources}

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_network_services_cdn_edge_extension#create GoogleNetworkServicesCdnEdgeExtension#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_network_services_cdn_edge_extension#delete GoogleNetworkServicesCdnEdgeExtension#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_network_services_cdn_edge_extension#update GoogleNetworkServicesCdnEdgeExtension#update}.

---

##### `reset_deletion_policy` <a name="reset_deletion_policy" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.resetDeletionPolicy"></a>

```python
def reset_deletion_policy() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_labels` <a name="reset_labels" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.resetLabels"></a>

```python
def reset_labels() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a GoogleNetworkServicesCdnEdgeExtension resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.isConstruct"></a>

```python
from cdktn_provider_google_beta import google_network_services_cdn_edge_extension

googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.isTerraformElement"></a>

```python
from cdktn_provider_google_beta import google_network_services_cdn_edge_extension

googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.isTerraformResource"></a>

```python
from cdktn_provider_google_beta import google_network_services_cdn_edge_extension

googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.generateConfigForImport"></a>

```python
from cdktn_provider_google_beta import google_network_services_cdn_edge_extension

googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a GoogleNetworkServicesCdnEdgeExtension resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the GoogleNetworkServicesCdnEdgeExtension to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing GoogleNetworkServicesCdnEdgeExtension that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_network_services_cdn_edge_extension#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the GoogleNetworkServicesCdnEdgeExtension to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.property.effectiveLabels">effective_labels</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.property.extensionChains">extension_chains</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsList">GoogleNetworkServicesCdnEdgeExtensionExtensionChainsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.property.target">target</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionTargetOutputReference">GoogleNetworkServicesCdnEdgeExtensionTargetOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.property.terraformLabels">terraform_labels</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionTimeoutsOutputReference">GoogleNetworkServicesCdnEdgeExtensionTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.property.deletionPolicyInput">deletion_policy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.property.extensionChainsInput">extension_chains_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChains">GoogleNetworkServicesCdnEdgeExtensionExtensionChains</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.property.labelsInput">labels_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.property.targetInput">target_input</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionTarget">GoogleNetworkServicesCdnEdgeExtensionTarget</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.property.timeoutsInput">timeouts_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionTimeouts">GoogleNetworkServicesCdnEdgeExtensionTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.property.deletionPolicy">deletion_policy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.property.project">project</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `effective_labels`<sup>Required</sup> <a name="effective_labels" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.property.effectiveLabels"></a>

```python
effective_labels: StringMap
```

- *Type:* cdktn.StringMap

---

##### `extension_chains`<sup>Required</sup> <a name="extension_chains" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.property.extensionChains"></a>

```python
extension_chains: GoogleNetworkServicesCdnEdgeExtensionExtensionChainsList
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsList">GoogleNetworkServicesCdnEdgeExtensionExtensionChainsList</a>

---

##### `target`<sup>Required</sup> <a name="target" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.property.target"></a>

```python
target: GoogleNetworkServicesCdnEdgeExtensionTargetOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionTargetOutputReference">GoogleNetworkServicesCdnEdgeExtensionTargetOutputReference</a>

---

##### `terraform_labels`<sup>Required</sup> <a name="terraform_labels" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.property.terraformLabels"></a>

```python
terraform_labels: StringMap
```

- *Type:* cdktn.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.property.timeouts"></a>

```python
timeouts: GoogleNetworkServicesCdnEdgeExtensionTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionTimeoutsOutputReference">GoogleNetworkServicesCdnEdgeExtensionTimeoutsOutputReference</a>

---

##### `deletion_policy_input`<sup>Optional</sup> <a name="deletion_policy_input" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.property.deletionPolicyInput"></a>

```python
deletion_policy_input: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `extension_chains_input`<sup>Optional</sup> <a name="extension_chains_input" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.property.extensionChainsInput"></a>

```python
extension_chains_input: IResolvable | typing.List[GoogleNetworkServicesCdnEdgeExtensionExtensionChains]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChains">GoogleNetworkServicesCdnEdgeExtensionExtensionChains</a>]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `labels_input`<sup>Optional</sup> <a name="labels_input" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.property.labelsInput"></a>

```python
labels_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `target_input`<sup>Optional</sup> <a name="target_input" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.property.targetInput"></a>

```python
target_input: GoogleNetworkServicesCdnEdgeExtensionTarget
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionTarget">GoogleNetworkServicesCdnEdgeExtensionTarget</a>

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.property.timeoutsInput"></a>

```python
timeouts_input: IResolvable | GoogleNetworkServicesCdnEdgeExtensionTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionTimeouts">GoogleNetworkServicesCdnEdgeExtensionTimeouts</a>

---

##### `deletion_policy`<sup>Required</sup> <a name="deletion_policy" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.property.deletionPolicy"></a>

```python
deletion_policy: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.property.project"></a>

```python
project: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleNetworkServicesCdnEdgeExtensionConfig <a name="GoogleNetworkServicesCdnEdgeExtensionConfig" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionConfig.Initializer"></a>

```python
from cdktn_provider_google_beta import google_network_services_cdn_edge_extension

googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  extension_chains: IResolvable | typing.List[GoogleNetworkServicesCdnEdgeExtensionExtensionChains],
  location: str,
  name: str,
  target: GoogleNetworkServicesCdnEdgeExtensionTarget,
  deletion_policy: str = None,
  description: str = None,
  id: str = None,
  labels: typing.Mapping[str] = None,
  project: str = None,
  timeouts: GoogleNetworkServicesCdnEdgeExtensionTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionConfig.property.extensionChains">extension_chains</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChains">GoogleNetworkServicesCdnEdgeExtensionExtensionChains</a>]</code> | extension_chains block. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionConfig.property.location">location</a></code> | <code>str</code> | The location of the CDN edge extension. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionConfig.property.name">name</a></code> | <code>str</code> | Name of the CdnEdgeExtension resource in the following format: projects/{project}/locations/{location}/cdnEdgeExtensions/{cdn_edge_extension}. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionConfig.property.target">target</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionTarget">GoogleNetworkServicesCdnEdgeExtensionTarget</a></code> | target block. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionConfig.property.deletionPolicy">deletion_policy</a></code> | <code>str</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionConfig.property.description">description</a></code> | <code>str</code> | A human-readable description of the resource. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_network_services_cdn_edge_extension#id GoogleNetworkServicesCdnEdgeExtension#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionConfig.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | Set of labels associated with the CdnEdgeExtension resource. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_network_services_cdn_edge_extension#project GoogleNetworkServicesCdnEdgeExtension#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionTimeouts">GoogleNetworkServicesCdnEdgeExtensionTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `extension_chains`<sup>Required</sup> <a name="extension_chains" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionConfig.property.extensionChains"></a>

```python
extension_chains: IResolvable | typing.List[GoogleNetworkServicesCdnEdgeExtensionExtensionChains]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChains">GoogleNetworkServicesCdnEdgeExtensionExtensionChains</a>]

extension_chains block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_network_services_cdn_edge_extension#extension_chains GoogleNetworkServicesCdnEdgeExtension#extension_chains}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionConfig.property.location"></a>

```python
location: str
```

- *Type:* str

The location of the CDN edge extension.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_network_services_cdn_edge_extension#location GoogleNetworkServicesCdnEdgeExtension#location}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Name of the CdnEdgeExtension resource in the following format: projects/{project}/locations/{location}/cdnEdgeExtensions/{cdn_edge_extension}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_network_services_cdn_edge_extension#name GoogleNetworkServicesCdnEdgeExtension#name}

---

##### `target`<sup>Required</sup> <a name="target" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionConfig.property.target"></a>

```python
target: GoogleNetworkServicesCdnEdgeExtensionTarget
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionTarget">GoogleNetworkServicesCdnEdgeExtensionTarget</a>

target block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_network_services_cdn_edge_extension#target GoogleNetworkServicesCdnEdgeExtension#target}

---

##### `deletion_policy`<sup>Optional</sup> <a name="deletion_policy" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_network_services_cdn_edge_extension#deletion_policy GoogleNetworkServicesCdnEdgeExtension#deletion_policy}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionConfig.property.description"></a>

```python
description: str
```

- *Type:* str

A human-readable description of the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_network_services_cdn_edge_extension#description GoogleNetworkServicesCdnEdgeExtension#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_network_services_cdn_edge_extension#id GoogleNetworkServicesCdnEdgeExtension#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionConfig.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Set of labels associated with the CdnEdgeExtension resource.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_network_services_cdn_edge_extension#labels GoogleNetworkServicesCdnEdgeExtension#labels}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_network_services_cdn_edge_extension#project GoogleNetworkServicesCdnEdgeExtension#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionConfig.property.timeouts"></a>

```python
timeouts: GoogleNetworkServicesCdnEdgeExtensionTimeouts
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionTimeouts">GoogleNetworkServicesCdnEdgeExtensionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_network_services_cdn_edge_extension#timeouts GoogleNetworkServicesCdnEdgeExtension#timeouts}

---

### GoogleNetworkServicesCdnEdgeExtensionExtensionChains <a name="GoogleNetworkServicesCdnEdgeExtensionExtensionChains" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChains"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChains.Initializer"></a>

```python
from cdktn_provider_google_beta import google_network_services_cdn_edge_extension

googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChains(
  extensions: IResolvable | typing.List[GoogleNetworkServicesCdnEdgeExtensionExtensionChainsExtensions],
  match_condition: GoogleNetworkServicesCdnEdgeExtensionExtensionChainsMatchCondition,
  name: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChains.property.extensions">extensions</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsExtensions">GoogleNetworkServicesCdnEdgeExtensionExtensionChainsExtensions</a>]</code> | extensions block. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChains.property.matchCondition">match_condition</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsMatchCondition">GoogleNetworkServicesCdnEdgeExtensionExtensionChainsMatchCondition</a></code> | match_condition block. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChains.property.name">name</a></code> | <code>str</code> | The name for this extension chain. |

---

##### `extensions`<sup>Required</sup> <a name="extensions" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChains.property.extensions"></a>

```python
extensions: IResolvable | typing.List[GoogleNetworkServicesCdnEdgeExtensionExtensionChainsExtensions]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsExtensions">GoogleNetworkServicesCdnEdgeExtensionExtensionChainsExtensions</a>]

extensions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_network_services_cdn_edge_extension#extensions GoogleNetworkServicesCdnEdgeExtension#extensions}

---

##### `match_condition`<sup>Required</sup> <a name="match_condition" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChains.property.matchCondition"></a>

```python
match_condition: GoogleNetworkServicesCdnEdgeExtensionExtensionChainsMatchCondition
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsMatchCondition">GoogleNetworkServicesCdnEdgeExtensionExtensionChainsMatchCondition</a>

match_condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_network_services_cdn_edge_extension#match_condition GoogleNetworkServicesCdnEdgeExtension#match_condition}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChains.property.name"></a>

```python
name: str
```

- *Type:* str

The name for this extension chain.

The name is logged as part of the HTTP request logs.
The name must conform with RFC-1034, is restricted to lower-cased letters, numbers and hyphens,
and can have a maximum length of 63 characters. Additionally, the first character must be a letter
and the last character must be a letter or a number.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_network_services_cdn_edge_extension#name GoogleNetworkServicesCdnEdgeExtension#name}

---

### GoogleNetworkServicesCdnEdgeExtensionExtensionChainsExtensions <a name="GoogleNetworkServicesCdnEdgeExtensionExtensionChainsExtensions" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsExtensions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsExtensions.Initializer"></a>

```python
from cdktn_provider_google_beta import google_network_services_cdn_edge_extension

googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsExtensions(
  name: str,
  service: str,
  fail_open: bool | IResolvable = None,
  forward_attributes: typing.List[str] = None,
  forward_headers: typing.List[str] = None,
  supported_events: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsExtensions.property.name">name</a></code> | <code>str</code> | The name for this extension. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsExtensions.property.service">service</a></code> | <code>str</code> | The reference to the service that runs the extension. Must be a reference to a WasmPlugin resource. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsExtensions.property.failOpen">fail_open</a></code> | <code>bool \| cdktn.IResolvable</code> | Determines how the proxy behaves if the call to the extension fails or times out. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsExtensions.property.forwardAttributes">forward_attributes</a></code> | <code>typing.List[str]</code> | List of the Envoy attributes to forward to the extension server. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsExtensions.property.forwardHeaders">forward_headers</a></code> | <code>typing.List[str]</code> | List of the HTTP headers to forward to the extension (from the client or backend). |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsExtensions.property.supportedEvents">supported_events</a></code> | <code>typing.List[str]</code> | A set of events during request or response processing for which this extension is called. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsExtensions.property.name"></a>

```python
name: str
```

- *Type:* str

The name for this extension.

The name is logged as part of the HTTP request logs.
The name must conform with RFC-1034, is restricted to lower-cased letters, numbers and hyphens,
and can have a maximum length of 63 characters. Additionally, the first character must be a letter
and the last a letter or a number.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_network_services_cdn_edge_extension#name GoogleNetworkServicesCdnEdgeExtension#name}

---

##### `service`<sup>Required</sup> <a name="service" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsExtensions.property.service"></a>

```python
service: str
```

- *Type:* str

The reference to the service that runs the extension. Must be a reference to a WasmPlugin resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_network_services_cdn_edge_extension#service GoogleNetworkServicesCdnEdgeExtension#service}

---

##### `fail_open`<sup>Optional</sup> <a name="fail_open" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsExtensions.property.failOpen"></a>

```python
fail_open: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Determines how the proxy behaves if the call to the extension fails or times out.

When set to TRUE, request or response processing continues without error.
Any subsequent extensions in the extension chain are also executed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_network_services_cdn_edge_extension#fail_open GoogleNetworkServicesCdnEdgeExtension#fail_open}

---

##### `forward_attributes`<sup>Optional</sup> <a name="forward_attributes" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsExtensions.property.forwardAttributes"></a>

```python
forward_attributes: typing.List[str]
```

- *Type:* typing.List[str]

List of the Envoy attributes to forward to the extension server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_network_services_cdn_edge_extension#forward_attributes GoogleNetworkServicesCdnEdgeExtension#forward_attributes}

---

##### `forward_headers`<sup>Optional</sup> <a name="forward_headers" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsExtensions.property.forwardHeaders"></a>

```python
forward_headers: typing.List[str]
```

- *Type:* typing.List[str]

List of the HTTP headers to forward to the extension (from the client or backend).

If omitted, all headers are sent. Each element is a string indicating the header name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_network_services_cdn_edge_extension#forward_headers GoogleNetworkServicesCdnEdgeExtension#forward_headers}

---

##### `supported_events`<sup>Optional</sup> <a name="supported_events" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsExtensions.property.supportedEvents"></a>

```python
supported_events: typing.List[str]
```

- *Type:* typing.List[str]

A set of events during request or response processing for which this extension is called.

Eligible values are 'REQUEST_HEADERS' and 'RESPONSE_HEADERS'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_network_services_cdn_edge_extension#supported_events GoogleNetworkServicesCdnEdgeExtension#supported_events}

---

### GoogleNetworkServicesCdnEdgeExtensionExtensionChainsMatchCondition <a name="GoogleNetworkServicesCdnEdgeExtensionExtensionChainsMatchCondition" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsMatchCondition"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsMatchCondition.Initializer"></a>

```python
from cdktn_provider_google_beta import google_network_services_cdn_edge_extension

googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsMatchCondition(
  cel_expression: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsMatchCondition.property.celExpression">cel_expression</a></code> | <code>str</code> | A Common Expression Language (CEL) expression that is used to match requests for which the extension chain is executed. |

---

##### `cel_expression`<sup>Required</sup> <a name="cel_expression" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsMatchCondition.property.celExpression"></a>

```python
cel_expression: str
```

- *Type:* str

A Common Expression Language (CEL) expression that is used to match requests for which the extension chain is executed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_network_services_cdn_edge_extension#cel_expression GoogleNetworkServicesCdnEdgeExtension#cel_expression}

---

### GoogleNetworkServicesCdnEdgeExtensionTarget <a name="GoogleNetworkServicesCdnEdgeExtensionTarget" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionTarget"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionTarget.Initializer"></a>

```python
from cdktn_provider_google_beta import google_network_services_cdn_edge_extension

googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionTarget(
  resources: typing.List[str]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionTarget.property.resources">resources</a></code> | <code>typing.List[str]</code> | A list of references to the resources that are targeted by CdnEdgeExtension. |

---

##### `resources`<sup>Required</sup> <a name="resources" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionTarget.property.resources"></a>

```python
resources: typing.List[str]
```

- *Type:* typing.List[str]

A list of references to the resources that are targeted by CdnEdgeExtension.

Types of resources supported: EdgeCacheService.
The format can be 'projects/{project}/locations/{location}/edgeCacheServices/{edgeCacheService}' or
'//networkservices.googleapis.com/projects/{project}/locations/{location}/edgeCacheServices/{edgeCacheService}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_network_services_cdn_edge_extension#resources GoogleNetworkServicesCdnEdgeExtension#resources}

---

### GoogleNetworkServicesCdnEdgeExtensionTimeouts <a name="GoogleNetworkServicesCdnEdgeExtensionTimeouts" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionTimeouts.Initializer"></a>

```python
from cdktn_provider_google_beta import google_network_services_cdn_edge_extension

googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_network_services_cdn_edge_extension#create GoogleNetworkServicesCdnEdgeExtension#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_network_services_cdn_edge_extension#delete GoogleNetworkServicesCdnEdgeExtension#delete}. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_network_services_cdn_edge_extension#update GoogleNetworkServicesCdnEdgeExtension#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_network_services_cdn_edge_extension#create GoogleNetworkServicesCdnEdgeExtension#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_network_services_cdn_edge_extension#delete GoogleNetworkServicesCdnEdgeExtension#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_network_services_cdn_edge_extension#update GoogleNetworkServicesCdnEdgeExtension#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleNetworkServicesCdnEdgeExtensionExtensionChainsExtensionsList <a name="GoogleNetworkServicesCdnEdgeExtensionExtensionChainsExtensionsList" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsExtensionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsExtensionsList.Initializer"></a>

```python
from cdktn_provider_google_beta import google_network_services_cdn_edge_extension

googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsExtensionsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsExtensionsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsExtensionsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsExtensionsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsExtensionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsExtensionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsExtensionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsExtensionsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsExtensionsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsExtensionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsExtensionsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsExtensionsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsExtensionsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsExtensionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsExtensionsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsExtensionsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsExtensionsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsExtensionsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsExtensionsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleNetworkServicesCdnEdgeExtensionExtensionChainsExtensionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsExtensionsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsExtensionsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsExtensionsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsExtensionsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsExtensions">GoogleNetworkServicesCdnEdgeExtensionExtensionChainsExtensions</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsExtensionsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsExtensionsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsExtensionsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[GoogleNetworkServicesCdnEdgeExtensionExtensionChainsExtensions]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsExtensions">GoogleNetworkServicesCdnEdgeExtensionExtensionChainsExtensions</a>]

---


### GoogleNetworkServicesCdnEdgeExtensionExtensionChainsExtensionsOutputReference <a name="GoogleNetworkServicesCdnEdgeExtensionExtensionChainsExtensionsOutputReference" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsExtensionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsExtensionsOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_network_services_cdn_edge_extension

googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsExtensionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsExtensionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsExtensionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsExtensionsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsExtensionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsExtensionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsExtensionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsExtensionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsExtensionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsExtensionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsExtensionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsExtensionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsExtensionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsExtensionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsExtensionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsExtensionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsExtensionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsExtensionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsExtensionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsExtensionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsExtensionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsExtensionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsExtensionsOutputReference.resetFailOpen">reset_fail_open</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsExtensionsOutputReference.resetForwardAttributes">reset_forward_attributes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsExtensionsOutputReference.resetForwardHeaders">reset_forward_headers</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsExtensionsOutputReference.resetSupportedEvents">reset_supported_events</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsExtensionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsExtensionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsExtensionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsExtensionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsExtensionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsExtensionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsExtensionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsExtensionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsExtensionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsExtensionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsExtensionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsExtensionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsExtensionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsExtensionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsExtensionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsExtensionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsExtensionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsExtensionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsExtensionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsExtensionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsExtensionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsExtensionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsExtensionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsExtensionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_fail_open` <a name="reset_fail_open" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsExtensionsOutputReference.resetFailOpen"></a>

```python
def reset_fail_open() -> None
```

##### `reset_forward_attributes` <a name="reset_forward_attributes" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsExtensionsOutputReference.resetForwardAttributes"></a>

```python
def reset_forward_attributes() -> None
```

##### `reset_forward_headers` <a name="reset_forward_headers" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsExtensionsOutputReference.resetForwardHeaders"></a>

```python
def reset_forward_headers() -> None
```

##### `reset_supported_events` <a name="reset_supported_events" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsExtensionsOutputReference.resetSupportedEvents"></a>

```python
def reset_supported_events() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsExtensionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsExtensionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsExtensionsOutputReference.property.failOpenInput">fail_open_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsExtensionsOutputReference.property.forwardAttributesInput">forward_attributes_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsExtensionsOutputReference.property.forwardHeadersInput">forward_headers_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsExtensionsOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsExtensionsOutputReference.property.serviceInput">service_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsExtensionsOutputReference.property.supportedEventsInput">supported_events_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsExtensionsOutputReference.property.failOpen">fail_open</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsExtensionsOutputReference.property.forwardAttributes">forward_attributes</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsExtensionsOutputReference.property.forwardHeaders">forward_headers</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsExtensionsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsExtensionsOutputReference.property.service">service</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsExtensionsOutputReference.property.supportedEvents">supported_events</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsExtensionsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsExtensions">GoogleNetworkServicesCdnEdgeExtensionExtensionChainsExtensions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsExtensionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsExtensionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `fail_open_input`<sup>Optional</sup> <a name="fail_open_input" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsExtensionsOutputReference.property.failOpenInput"></a>

```python
fail_open_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `forward_attributes_input`<sup>Optional</sup> <a name="forward_attributes_input" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsExtensionsOutputReference.property.forwardAttributesInput"></a>

```python
forward_attributes_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `forward_headers_input`<sup>Optional</sup> <a name="forward_headers_input" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsExtensionsOutputReference.property.forwardHeadersInput"></a>

```python
forward_headers_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsExtensionsOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `service_input`<sup>Optional</sup> <a name="service_input" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsExtensionsOutputReference.property.serviceInput"></a>

```python
service_input: str
```

- *Type:* str

---

##### `supported_events_input`<sup>Optional</sup> <a name="supported_events_input" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsExtensionsOutputReference.property.supportedEventsInput"></a>

```python
supported_events_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `fail_open`<sup>Required</sup> <a name="fail_open" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsExtensionsOutputReference.property.failOpen"></a>

```python
fail_open: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `forward_attributes`<sup>Required</sup> <a name="forward_attributes" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsExtensionsOutputReference.property.forwardAttributes"></a>

```python
forward_attributes: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `forward_headers`<sup>Required</sup> <a name="forward_headers" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsExtensionsOutputReference.property.forwardHeaders"></a>

```python
forward_headers: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsExtensionsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `service`<sup>Required</sup> <a name="service" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsExtensionsOutputReference.property.service"></a>

```python
service: str
```

- *Type:* str

---

##### `supported_events`<sup>Required</sup> <a name="supported_events" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsExtensionsOutputReference.property.supportedEvents"></a>

```python
supported_events: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsExtensionsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | GoogleNetworkServicesCdnEdgeExtensionExtensionChainsExtensions
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsExtensions">GoogleNetworkServicesCdnEdgeExtensionExtensionChainsExtensions</a>

---


### GoogleNetworkServicesCdnEdgeExtensionExtensionChainsList <a name="GoogleNetworkServicesCdnEdgeExtensionExtensionChainsList" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsList.Initializer"></a>

```python
from cdktn_provider_google_beta import google_network_services_cdn_edge_extension

googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleNetworkServicesCdnEdgeExtensionExtensionChainsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChains">GoogleNetworkServicesCdnEdgeExtensionExtensionChains</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[GoogleNetworkServicesCdnEdgeExtensionExtensionChains]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChains">GoogleNetworkServicesCdnEdgeExtensionExtensionChains</a>]

---


### GoogleNetworkServicesCdnEdgeExtensionExtensionChainsMatchConditionOutputReference <a name="GoogleNetworkServicesCdnEdgeExtensionExtensionChainsMatchConditionOutputReference" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsMatchConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsMatchConditionOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_network_services_cdn_edge_extension

googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsMatchConditionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsMatchConditionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsMatchConditionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsMatchConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsMatchConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsMatchConditionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsMatchConditionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsMatchConditionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsMatchConditionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsMatchConditionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsMatchConditionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsMatchConditionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsMatchConditionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsMatchConditionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsMatchConditionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsMatchConditionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsMatchConditionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsMatchConditionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsMatchConditionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsMatchConditionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsMatchConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsMatchConditionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsMatchConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsMatchConditionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsMatchConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsMatchConditionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsMatchConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsMatchConditionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsMatchConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsMatchConditionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsMatchConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsMatchConditionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsMatchConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsMatchConditionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsMatchConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsMatchConditionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsMatchConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsMatchConditionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsMatchConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsMatchConditionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsMatchConditionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsMatchConditionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsMatchConditionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsMatchConditionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsMatchConditionOutputReference.property.celExpressionInput">cel_expression_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsMatchConditionOutputReference.property.celExpression">cel_expression</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsMatchConditionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsMatchCondition">GoogleNetworkServicesCdnEdgeExtensionExtensionChainsMatchCondition</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsMatchConditionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsMatchConditionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `cel_expression_input`<sup>Optional</sup> <a name="cel_expression_input" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsMatchConditionOutputReference.property.celExpressionInput"></a>

```python
cel_expression_input: str
```

- *Type:* str

---

##### `cel_expression`<sup>Required</sup> <a name="cel_expression" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsMatchConditionOutputReference.property.celExpression"></a>

```python
cel_expression: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsMatchConditionOutputReference.property.internalValue"></a>

```python
internal_value: GoogleNetworkServicesCdnEdgeExtensionExtensionChainsMatchCondition
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsMatchCondition">GoogleNetworkServicesCdnEdgeExtensionExtensionChainsMatchCondition</a>

---


### GoogleNetworkServicesCdnEdgeExtensionExtensionChainsOutputReference <a name="GoogleNetworkServicesCdnEdgeExtensionExtensionChainsOutputReference" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_network_services_cdn_edge_extension

googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsOutputReference.putExtensions">put_extensions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsOutputReference.putMatchCondition">put_match_condition</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_extensions` <a name="put_extensions" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsOutputReference.putExtensions"></a>

```python
def put_extensions(
  value: IResolvable | typing.List[GoogleNetworkServicesCdnEdgeExtensionExtensionChainsExtensions]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsOutputReference.putExtensions.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsExtensions">GoogleNetworkServicesCdnEdgeExtensionExtensionChainsExtensions</a>]

---

##### `put_match_condition` <a name="put_match_condition" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsOutputReference.putMatchCondition"></a>

```python
def put_match_condition(
  cel_expression: str
) -> None
```

###### `cel_expression`<sup>Required</sup> <a name="cel_expression" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsOutputReference.putMatchCondition.parameter.celExpression"></a>

- *Type:* str

A Common Expression Language (CEL) expression that is used to match requests for which the extension chain is executed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_network_services_cdn_edge_extension#cel_expression GoogleNetworkServicesCdnEdgeExtension#cel_expression}

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsOutputReference.property.extensions">extensions</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsExtensionsList">GoogleNetworkServicesCdnEdgeExtensionExtensionChainsExtensionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsOutputReference.property.matchCondition">match_condition</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsMatchConditionOutputReference">GoogleNetworkServicesCdnEdgeExtensionExtensionChainsMatchConditionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsOutputReference.property.extensionsInput">extensions_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsExtensions">GoogleNetworkServicesCdnEdgeExtensionExtensionChainsExtensions</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsOutputReference.property.matchConditionInput">match_condition_input</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsMatchCondition">GoogleNetworkServicesCdnEdgeExtensionExtensionChainsMatchCondition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChains">GoogleNetworkServicesCdnEdgeExtensionExtensionChains</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `extensions`<sup>Required</sup> <a name="extensions" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsOutputReference.property.extensions"></a>

```python
extensions: GoogleNetworkServicesCdnEdgeExtensionExtensionChainsExtensionsList
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsExtensionsList">GoogleNetworkServicesCdnEdgeExtensionExtensionChainsExtensionsList</a>

---

##### `match_condition`<sup>Required</sup> <a name="match_condition" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsOutputReference.property.matchCondition"></a>

```python
match_condition: GoogleNetworkServicesCdnEdgeExtensionExtensionChainsMatchConditionOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsMatchConditionOutputReference">GoogleNetworkServicesCdnEdgeExtensionExtensionChainsMatchConditionOutputReference</a>

---

##### `extensions_input`<sup>Optional</sup> <a name="extensions_input" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsOutputReference.property.extensionsInput"></a>

```python
extensions_input: IResolvable | typing.List[GoogleNetworkServicesCdnEdgeExtensionExtensionChainsExtensions]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsExtensions">GoogleNetworkServicesCdnEdgeExtensionExtensionChainsExtensions</a>]

---

##### `match_condition_input`<sup>Optional</sup> <a name="match_condition_input" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsOutputReference.property.matchConditionInput"></a>

```python
match_condition_input: GoogleNetworkServicesCdnEdgeExtensionExtensionChainsMatchCondition
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsMatchCondition">GoogleNetworkServicesCdnEdgeExtensionExtensionChainsMatchCondition</a>

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | GoogleNetworkServicesCdnEdgeExtensionExtensionChains
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChains">GoogleNetworkServicesCdnEdgeExtensionExtensionChains</a>

---


### GoogleNetworkServicesCdnEdgeExtensionTargetOutputReference <a name="GoogleNetworkServicesCdnEdgeExtensionTargetOutputReference" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionTargetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionTargetOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_network_services_cdn_edge_extension

googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionTargetOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionTargetOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionTargetOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionTargetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionTargetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionTargetOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionTargetOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionTargetOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionTargetOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionTargetOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionTargetOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionTargetOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionTargetOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionTargetOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionTargetOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionTargetOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionTargetOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionTargetOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionTargetOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionTargetOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionTargetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionTargetOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionTargetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionTargetOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionTargetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionTargetOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionTargetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionTargetOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionTargetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionTargetOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionTargetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionTargetOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionTargetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionTargetOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionTargetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionTargetOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionTargetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionTargetOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionTargetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionTargetOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionTargetOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionTargetOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionTargetOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionTargetOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionTargetOutputReference.property.resourcesInput">resources_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionTargetOutputReference.property.resources">resources</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionTargetOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionTarget">GoogleNetworkServicesCdnEdgeExtensionTarget</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionTargetOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionTargetOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `resources_input`<sup>Optional</sup> <a name="resources_input" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionTargetOutputReference.property.resourcesInput"></a>

```python
resources_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `resources`<sup>Required</sup> <a name="resources" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionTargetOutputReference.property.resources"></a>

```python
resources: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionTargetOutputReference.property.internalValue"></a>

```python
internal_value: GoogleNetworkServicesCdnEdgeExtensionTarget
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionTarget">GoogleNetworkServicesCdnEdgeExtensionTarget</a>

---


### GoogleNetworkServicesCdnEdgeExtensionTimeoutsOutputReference <a name="GoogleNetworkServicesCdnEdgeExtensionTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionTimeoutsOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_network_services_cdn_edge_extension

googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionTimeouts">GoogleNetworkServicesCdnEdgeExtensionTimeouts</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | GoogleNetworkServicesCdnEdgeExtensionTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionTimeouts">GoogleNetworkServicesCdnEdgeExtensionTimeouts</a>

---



