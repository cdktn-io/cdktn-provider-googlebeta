# `googleNetworkServicesMulticastDomainGroup` Submodule <a name="`googleNetworkServicesMulticastDomainGroup` Submodule" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainGroup"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleNetworkServicesMulticastDomainGroup <a name="GoogleNetworkServicesMulticastDomainGroup" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainGroup.GoogleNetworkServicesMulticastDomainGroup"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_network_services_multicast_domain_group google_network_services_multicast_domain_group}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainGroup.GoogleNetworkServicesMulticastDomainGroup.Initializer"></a>

```python
from cdktn_provider_google_beta import google_network_services_multicast_domain_group

googleNetworkServicesMulticastDomainGroup.GoogleNetworkServicesMulticastDomainGroup(
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
  multicast_domain_group_id: str,
  deletion_policy: str = None,
  description: str = None,
  id: str = None,
  labels: typing.Mapping[str] = None,
  project: str = None,
  timeouts: GoogleNetworkServicesMulticastDomainGroupTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainGroup.GoogleNetworkServicesMulticastDomainGroup.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainGroup.GoogleNetworkServicesMulticastDomainGroup.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainGroup.GoogleNetworkServicesMulticastDomainGroup.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainGroup.GoogleNetworkServicesMulticastDomainGroup.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainGroup.GoogleNetworkServicesMulticastDomainGroup.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainGroup.GoogleNetworkServicesMulticastDomainGroup.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainGroup.GoogleNetworkServicesMulticastDomainGroup.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainGroup.GoogleNetworkServicesMulticastDomainGroup.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainGroup.GoogleNetworkServicesMulticastDomainGroup.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainGroup.GoogleNetworkServicesMulticastDomainGroup.Initializer.parameter.location">location</a></code> | <code>str</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainGroup.GoogleNetworkServicesMulticastDomainGroup.Initializer.parameter.multicastDomainGroupId">multicast_domain_group_id</a></code> | <code>str</code> | A unique name for the multicast domain group. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainGroup.GoogleNetworkServicesMulticastDomainGroup.Initializer.parameter.deletionPolicy">deletion_policy</a></code> | <code>str</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainGroup.GoogleNetworkServicesMulticastDomainGroup.Initializer.parameter.description">description</a></code> | <code>str</code> | An optional text description of the multicast domain group. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainGroup.GoogleNetworkServicesMulticastDomainGroup.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_network_services_multicast_domain_group#id GoogleNetworkServicesMulticastDomainGroup#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainGroup.GoogleNetworkServicesMulticastDomainGroup.Initializer.parameter.labels">labels</a></code> | <code>typing.Mapping[str]</code> | Labels as key-value pairs. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainGroup.GoogleNetworkServicesMulticastDomainGroup.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_network_services_multicast_domain_group#project GoogleNetworkServicesMulticastDomainGroup#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainGroup.GoogleNetworkServicesMulticastDomainGroup.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainGroup.GoogleNetworkServicesMulticastDomainGroupTimeouts">GoogleNetworkServicesMulticastDomainGroupTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainGroup.GoogleNetworkServicesMulticastDomainGroup.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainGroup.GoogleNetworkServicesMulticastDomainGroup.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainGroup.GoogleNetworkServicesMulticastDomainGroup.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainGroup.GoogleNetworkServicesMulticastDomainGroup.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainGroup.GoogleNetworkServicesMulticastDomainGroup.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainGroup.GoogleNetworkServicesMulticastDomainGroup.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainGroup.GoogleNetworkServicesMulticastDomainGroup.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainGroup.GoogleNetworkServicesMulticastDomainGroup.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainGroup.GoogleNetworkServicesMulticastDomainGroup.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainGroup.GoogleNetworkServicesMulticastDomainGroup.Initializer.parameter.location"></a>

- *Type:* str

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_network_services_multicast_domain_group#location GoogleNetworkServicesMulticastDomainGroup#location}

---

##### `multicast_domain_group_id`<sup>Required</sup> <a name="multicast_domain_group_id" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainGroup.GoogleNetworkServicesMulticastDomainGroup.Initializer.parameter.multicastDomainGroupId"></a>

- *Type:* str

A unique name for the multicast domain group.

The name is restricted to letters, numbers, and hyphen, with the first
character a letter, and the last a letter or a number. The name must not
exceed 48 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_network_services_multicast_domain_group#multicast_domain_group_id GoogleNetworkServicesMulticastDomainGroup#multicast_domain_group_id}

---

##### `deletion_policy`<sup>Optional</sup> <a name="deletion_policy" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainGroup.GoogleNetworkServicesMulticastDomainGroup.Initializer.parameter.deletionPolicy"></a>

- *Type:* str

Whether Terraform will be prevented from destroying the instance.

Defaults to "DELETE".
When a 'terraform destroy' or 'terraform apply' would delete the instance,
the command will fail if this field is set to "PREVENT" in Terraform state.
When set to "ABANDON", the command will remove the resource from Terraform
management without updating or deleting the resource in the API.
When set to "DELETE", deleting the resource is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_network_services_multicast_domain_group#deletion_policy GoogleNetworkServicesMulticastDomainGroup#deletion_policy}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainGroup.GoogleNetworkServicesMulticastDomainGroup.Initializer.parameter.description"></a>

- *Type:* str

An optional text description of the multicast domain group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_network_services_multicast_domain_group#description GoogleNetworkServicesMulticastDomainGroup#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainGroup.GoogleNetworkServicesMulticastDomainGroup.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_network_services_multicast_domain_group#id GoogleNetworkServicesMulticastDomainGroup#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainGroup.GoogleNetworkServicesMulticastDomainGroup.Initializer.parameter.labels"></a>

- *Type:* typing.Mapping[str]

Labels as key-value pairs.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_network_services_multicast_domain_group#labels GoogleNetworkServicesMulticastDomainGroup#labels}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainGroup.GoogleNetworkServicesMulticastDomainGroup.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_network_services_multicast_domain_group#project GoogleNetworkServicesMulticastDomainGroup#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainGroup.GoogleNetworkServicesMulticastDomainGroup.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainGroup.GoogleNetworkServicesMulticastDomainGroupTimeouts">GoogleNetworkServicesMulticastDomainGroupTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_network_services_multicast_domain_group#timeouts GoogleNetworkServicesMulticastDomainGroup#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainGroup.GoogleNetworkServicesMulticastDomainGroup.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainGroup.GoogleNetworkServicesMulticastDomainGroup.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainGroup.GoogleNetworkServicesMulticastDomainGroup.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainGroup.GoogleNetworkServicesMulticastDomainGroup.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainGroup.GoogleNetworkServicesMulticastDomainGroup.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainGroup.GoogleNetworkServicesMulticastDomainGroup.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainGroup.GoogleNetworkServicesMulticastDomainGroup.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainGroup.GoogleNetworkServicesMulticastDomainGroup.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainGroup.GoogleNetworkServicesMulticastDomainGroup.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainGroup.GoogleNetworkServicesMulticastDomainGroup.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainGroup.GoogleNetworkServicesMulticastDomainGroup.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainGroup.GoogleNetworkServicesMulticastDomainGroup.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainGroup.GoogleNetworkServicesMulticastDomainGroup.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainGroup.GoogleNetworkServicesMulticastDomainGroup.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainGroup.GoogleNetworkServicesMulticastDomainGroup.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainGroup.GoogleNetworkServicesMulticastDomainGroup.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainGroup.GoogleNetworkServicesMulticastDomainGroup.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainGroup.GoogleNetworkServicesMulticastDomainGroup.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainGroup.GoogleNetworkServicesMulticastDomainGroup.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainGroup.GoogleNetworkServicesMulticastDomainGroup.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainGroup.GoogleNetworkServicesMulticastDomainGroup.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainGroup.GoogleNetworkServicesMulticastDomainGroup.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainGroup.GoogleNetworkServicesMulticastDomainGroup.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainGroup.GoogleNetworkServicesMulticastDomainGroup.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainGroup.GoogleNetworkServicesMulticastDomainGroup.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainGroup.GoogleNetworkServicesMulticastDomainGroup.resetDeletionPolicy">reset_deletion_policy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainGroup.GoogleNetworkServicesMulticastDomainGroup.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainGroup.GoogleNetworkServicesMulticastDomainGroup.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainGroup.GoogleNetworkServicesMulticastDomainGroup.resetLabels">reset_labels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainGroup.GoogleNetworkServicesMulticastDomainGroup.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainGroup.GoogleNetworkServicesMulticastDomainGroup.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainGroup.GoogleNetworkServicesMulticastDomainGroup.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainGroup.GoogleNetworkServicesMulticastDomainGroup.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainGroup.GoogleNetworkServicesMulticastDomainGroup.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainGroup.GoogleNetworkServicesMulticastDomainGroup.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainGroup.GoogleNetworkServicesMulticastDomainGroup.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainGroup.GoogleNetworkServicesMulticastDomainGroup.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainGroup.GoogleNetworkServicesMulticastDomainGroup.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainGroup.GoogleNetworkServicesMulticastDomainGroup.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainGroup.GoogleNetworkServicesMulticastDomainGroup.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainGroup.GoogleNetworkServicesMulticastDomainGroup.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainGroup.GoogleNetworkServicesMulticastDomainGroup.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainGroup.GoogleNetworkServicesMulticastDomainGroup.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainGroup.GoogleNetworkServicesMulticastDomainGroup.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainGroup.GoogleNetworkServicesMulticastDomainGroup.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainGroup.GoogleNetworkServicesMulticastDomainGroup.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainGroup.GoogleNetworkServicesMulticastDomainGroup.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainGroup.GoogleNetworkServicesMulticastDomainGroup.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainGroup.GoogleNetworkServicesMulticastDomainGroup.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainGroup.GoogleNetworkServicesMulticastDomainGroup.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainGroup.GoogleNetworkServicesMulticastDomainGroup.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainGroup.GoogleNetworkServicesMulticastDomainGroup.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainGroup.GoogleNetworkServicesMulticastDomainGroup.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainGroup.GoogleNetworkServicesMulticastDomainGroup.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainGroup.GoogleNetworkServicesMulticastDomainGroup.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainGroup.GoogleNetworkServicesMulticastDomainGroup.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainGroup.GoogleNetworkServicesMulticastDomainGroup.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainGroup.GoogleNetworkServicesMulticastDomainGroup.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainGroup.GoogleNetworkServicesMulticastDomainGroup.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainGroup.GoogleNetworkServicesMulticastDomainGroup.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainGroup.GoogleNetworkServicesMulticastDomainGroup.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainGroup.GoogleNetworkServicesMulticastDomainGroup.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainGroup.GoogleNetworkServicesMulticastDomainGroup.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainGroup.GoogleNetworkServicesMulticastDomainGroup.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainGroup.GoogleNetworkServicesMulticastDomainGroup.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainGroup.GoogleNetworkServicesMulticastDomainGroup.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainGroup.GoogleNetworkServicesMulticastDomainGroup.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainGroup.GoogleNetworkServicesMulticastDomainGroup.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainGroup.GoogleNetworkServicesMulticastDomainGroup.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainGroup.GoogleNetworkServicesMulticastDomainGroup.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainGroup.GoogleNetworkServicesMulticastDomainGroup.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainGroup.GoogleNetworkServicesMulticastDomainGroup.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainGroup.GoogleNetworkServicesMulticastDomainGroup.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainGroup.GoogleNetworkServicesMulticastDomainGroup.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainGroup.GoogleNetworkServicesMulticastDomainGroup.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainGroup.GoogleNetworkServicesMulticastDomainGroup.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainGroup.GoogleNetworkServicesMulticastDomainGroup.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainGroup.GoogleNetworkServicesMulticastDomainGroup.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_network_services_multicast_domain_group#create GoogleNetworkServicesMulticastDomainGroup#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainGroup.GoogleNetworkServicesMulticastDomainGroup.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_network_services_multicast_domain_group#delete GoogleNetworkServicesMulticastDomainGroup#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainGroup.GoogleNetworkServicesMulticastDomainGroup.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_network_services_multicast_domain_group#update GoogleNetworkServicesMulticastDomainGroup#update}.

---

##### `reset_deletion_policy` <a name="reset_deletion_policy" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainGroup.GoogleNetworkServicesMulticastDomainGroup.resetDeletionPolicy"></a>

```python
def reset_deletion_policy() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainGroup.GoogleNetworkServicesMulticastDomainGroup.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainGroup.GoogleNetworkServicesMulticastDomainGroup.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_labels` <a name="reset_labels" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainGroup.GoogleNetworkServicesMulticastDomainGroup.resetLabels"></a>

```python
def reset_labels() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainGroup.GoogleNetworkServicesMulticastDomainGroup.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainGroup.GoogleNetworkServicesMulticastDomainGroup.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainGroup.GoogleNetworkServicesMulticastDomainGroup.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainGroup.GoogleNetworkServicesMulticastDomainGroup.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainGroup.GoogleNetworkServicesMulticastDomainGroup.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainGroup.GoogleNetworkServicesMulticastDomainGroup.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a GoogleNetworkServicesMulticastDomainGroup resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainGroup.GoogleNetworkServicesMulticastDomainGroup.isConstruct"></a>

```python
from cdktn_provider_google_beta import google_network_services_multicast_domain_group

googleNetworkServicesMulticastDomainGroup.GoogleNetworkServicesMulticastDomainGroup.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainGroup.GoogleNetworkServicesMulticastDomainGroup.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainGroup.GoogleNetworkServicesMulticastDomainGroup.isTerraformElement"></a>

```python
from cdktn_provider_google_beta import google_network_services_multicast_domain_group

googleNetworkServicesMulticastDomainGroup.GoogleNetworkServicesMulticastDomainGroup.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainGroup.GoogleNetworkServicesMulticastDomainGroup.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainGroup.GoogleNetworkServicesMulticastDomainGroup.isTerraformResource"></a>

```python
from cdktn_provider_google_beta import google_network_services_multicast_domain_group

googleNetworkServicesMulticastDomainGroup.GoogleNetworkServicesMulticastDomainGroup.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainGroup.GoogleNetworkServicesMulticastDomainGroup.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainGroup.GoogleNetworkServicesMulticastDomainGroup.generateConfigForImport"></a>

```python
from cdktn_provider_google_beta import google_network_services_multicast_domain_group

googleNetworkServicesMulticastDomainGroup.GoogleNetworkServicesMulticastDomainGroup.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a GoogleNetworkServicesMulticastDomainGroup resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainGroup.GoogleNetworkServicesMulticastDomainGroup.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainGroup.GoogleNetworkServicesMulticastDomainGroup.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the GoogleNetworkServicesMulticastDomainGroup to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainGroup.GoogleNetworkServicesMulticastDomainGroup.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing GoogleNetworkServicesMulticastDomainGroup that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_network_services_multicast_domain_group#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainGroup.GoogleNetworkServicesMulticastDomainGroup.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the GoogleNetworkServicesMulticastDomainGroup to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainGroup.GoogleNetworkServicesMulticastDomainGroup.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainGroup.GoogleNetworkServicesMulticastDomainGroup.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainGroup.GoogleNetworkServicesMulticastDomainGroup.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainGroup.GoogleNetworkServicesMulticastDomainGroup.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainGroup.GoogleNetworkServicesMulticastDomainGroup.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainGroup.GoogleNetworkServicesMulticastDomainGroup.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainGroup.GoogleNetworkServicesMulticastDomainGroup.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainGroup.GoogleNetworkServicesMulticastDomainGroup.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainGroup.GoogleNetworkServicesMulticastDomainGroup.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainGroup.GoogleNetworkServicesMulticastDomainGroup.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainGroup.GoogleNetworkServicesMulticastDomainGroup.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainGroup.GoogleNetworkServicesMulticastDomainGroup.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainGroup.GoogleNetworkServicesMulticastDomainGroup.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainGroup.GoogleNetworkServicesMulticastDomainGroup.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainGroup.GoogleNetworkServicesMulticastDomainGroup.property.createTime">create_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainGroup.GoogleNetworkServicesMulticastDomainGroup.property.effectiveLabels">effective_labels</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainGroup.GoogleNetworkServicesMulticastDomainGroup.property.multicastDomains">multicast_domains</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainGroup.GoogleNetworkServicesMulticastDomainGroup.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainGroup.GoogleNetworkServicesMulticastDomainGroup.property.state">state</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainGroup.GoogleNetworkServicesMulticastDomainGroupStateList">GoogleNetworkServicesMulticastDomainGroupStateList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainGroup.GoogleNetworkServicesMulticastDomainGroup.property.terraformLabels">terraform_labels</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainGroup.GoogleNetworkServicesMulticastDomainGroup.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainGroup.GoogleNetworkServicesMulticastDomainGroupTimeoutsOutputReference">GoogleNetworkServicesMulticastDomainGroupTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainGroup.GoogleNetworkServicesMulticastDomainGroup.property.uniqueId">unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainGroup.GoogleNetworkServicesMulticastDomainGroup.property.updateTime">update_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainGroup.GoogleNetworkServicesMulticastDomainGroup.property.deletionPolicyInput">deletion_policy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainGroup.GoogleNetworkServicesMulticastDomainGroup.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainGroup.GoogleNetworkServicesMulticastDomainGroup.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainGroup.GoogleNetworkServicesMulticastDomainGroup.property.labelsInput">labels_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainGroup.GoogleNetworkServicesMulticastDomainGroup.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainGroup.GoogleNetworkServicesMulticastDomainGroup.property.multicastDomainGroupIdInput">multicast_domain_group_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainGroup.GoogleNetworkServicesMulticastDomainGroup.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainGroup.GoogleNetworkServicesMulticastDomainGroup.property.timeoutsInput">timeouts_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainGroup.GoogleNetworkServicesMulticastDomainGroupTimeouts">GoogleNetworkServicesMulticastDomainGroupTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainGroup.GoogleNetworkServicesMulticastDomainGroup.property.deletionPolicy">deletion_policy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainGroup.GoogleNetworkServicesMulticastDomainGroup.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainGroup.GoogleNetworkServicesMulticastDomainGroup.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainGroup.GoogleNetworkServicesMulticastDomainGroup.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainGroup.GoogleNetworkServicesMulticastDomainGroup.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainGroup.GoogleNetworkServicesMulticastDomainGroup.property.multicastDomainGroupId">multicast_domain_group_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainGroup.GoogleNetworkServicesMulticastDomainGroup.property.project">project</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainGroup.GoogleNetworkServicesMulticastDomainGroup.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainGroup.GoogleNetworkServicesMulticastDomainGroup.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainGroup.GoogleNetworkServicesMulticastDomainGroup.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainGroup.GoogleNetworkServicesMulticastDomainGroup.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainGroup.GoogleNetworkServicesMulticastDomainGroup.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainGroup.GoogleNetworkServicesMulticastDomainGroup.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainGroup.GoogleNetworkServicesMulticastDomainGroup.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainGroup.GoogleNetworkServicesMulticastDomainGroup.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainGroup.GoogleNetworkServicesMulticastDomainGroup.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainGroup.GoogleNetworkServicesMulticastDomainGroup.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainGroup.GoogleNetworkServicesMulticastDomainGroup.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainGroup.GoogleNetworkServicesMulticastDomainGroup.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainGroup.GoogleNetworkServicesMulticastDomainGroup.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainGroup.GoogleNetworkServicesMulticastDomainGroup.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `create_time`<sup>Required</sup> <a name="create_time" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainGroup.GoogleNetworkServicesMulticastDomainGroup.property.createTime"></a>

```python
create_time: str
```

- *Type:* str

---

##### `effective_labels`<sup>Required</sup> <a name="effective_labels" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainGroup.GoogleNetworkServicesMulticastDomainGroup.property.effectiveLabels"></a>

```python
effective_labels: StringMap
```

- *Type:* cdktn.StringMap

---

##### `multicast_domains`<sup>Required</sup> <a name="multicast_domains" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainGroup.GoogleNetworkServicesMulticastDomainGroup.property.multicastDomains"></a>

```python
multicast_domains: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainGroup.GoogleNetworkServicesMulticastDomainGroup.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainGroup.GoogleNetworkServicesMulticastDomainGroup.property.state"></a>

```python
state: GoogleNetworkServicesMulticastDomainGroupStateList
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainGroup.GoogleNetworkServicesMulticastDomainGroupStateList">GoogleNetworkServicesMulticastDomainGroupStateList</a>

---

##### `terraform_labels`<sup>Required</sup> <a name="terraform_labels" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainGroup.GoogleNetworkServicesMulticastDomainGroup.property.terraformLabels"></a>

```python
terraform_labels: StringMap
```

- *Type:* cdktn.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainGroup.GoogleNetworkServicesMulticastDomainGroup.property.timeouts"></a>

```python
timeouts: GoogleNetworkServicesMulticastDomainGroupTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainGroup.GoogleNetworkServicesMulticastDomainGroupTimeoutsOutputReference">GoogleNetworkServicesMulticastDomainGroupTimeoutsOutputReference</a>

---

##### `unique_id`<sup>Required</sup> <a name="unique_id" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainGroup.GoogleNetworkServicesMulticastDomainGroup.property.uniqueId"></a>

```python
unique_id: str
```

- *Type:* str

---

##### `update_time`<sup>Required</sup> <a name="update_time" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainGroup.GoogleNetworkServicesMulticastDomainGroup.property.updateTime"></a>

```python
update_time: str
```

- *Type:* str

---

##### `deletion_policy_input`<sup>Optional</sup> <a name="deletion_policy_input" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainGroup.GoogleNetworkServicesMulticastDomainGroup.property.deletionPolicyInput"></a>

```python
deletion_policy_input: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainGroup.GoogleNetworkServicesMulticastDomainGroup.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainGroup.GoogleNetworkServicesMulticastDomainGroup.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `labels_input`<sup>Optional</sup> <a name="labels_input" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainGroup.GoogleNetworkServicesMulticastDomainGroup.property.labelsInput"></a>

```python
labels_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainGroup.GoogleNetworkServicesMulticastDomainGroup.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `multicast_domain_group_id_input`<sup>Optional</sup> <a name="multicast_domain_group_id_input" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainGroup.GoogleNetworkServicesMulticastDomainGroup.property.multicastDomainGroupIdInput"></a>

```python
multicast_domain_group_id_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainGroup.GoogleNetworkServicesMulticastDomainGroup.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainGroup.GoogleNetworkServicesMulticastDomainGroup.property.timeoutsInput"></a>

```python
timeouts_input: IResolvable | GoogleNetworkServicesMulticastDomainGroupTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainGroup.GoogleNetworkServicesMulticastDomainGroupTimeouts">GoogleNetworkServicesMulticastDomainGroupTimeouts</a>

---

##### `deletion_policy`<sup>Required</sup> <a name="deletion_policy" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainGroup.GoogleNetworkServicesMulticastDomainGroup.property.deletionPolicy"></a>

```python
deletion_policy: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainGroup.GoogleNetworkServicesMulticastDomainGroup.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainGroup.GoogleNetworkServicesMulticastDomainGroup.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainGroup.GoogleNetworkServicesMulticastDomainGroup.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainGroup.GoogleNetworkServicesMulticastDomainGroup.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `multicast_domain_group_id`<sup>Required</sup> <a name="multicast_domain_group_id" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainGroup.GoogleNetworkServicesMulticastDomainGroup.property.multicastDomainGroupId"></a>

```python
multicast_domain_group_id: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainGroup.GoogleNetworkServicesMulticastDomainGroup.property.project"></a>

```python
project: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainGroup.GoogleNetworkServicesMulticastDomainGroup.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainGroup.GoogleNetworkServicesMulticastDomainGroup.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleNetworkServicesMulticastDomainGroupConfig <a name="GoogleNetworkServicesMulticastDomainGroupConfig" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainGroup.GoogleNetworkServicesMulticastDomainGroupConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainGroup.GoogleNetworkServicesMulticastDomainGroupConfig.Initializer"></a>

```python
from cdktn_provider_google_beta import google_network_services_multicast_domain_group

googleNetworkServicesMulticastDomainGroup.GoogleNetworkServicesMulticastDomainGroupConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  location: str,
  multicast_domain_group_id: str,
  deletion_policy: str = None,
  description: str = None,
  id: str = None,
  labels: typing.Mapping[str] = None,
  project: str = None,
  timeouts: GoogleNetworkServicesMulticastDomainGroupTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainGroup.GoogleNetworkServicesMulticastDomainGroupConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainGroup.GoogleNetworkServicesMulticastDomainGroupConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainGroup.GoogleNetworkServicesMulticastDomainGroupConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainGroup.GoogleNetworkServicesMulticastDomainGroupConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainGroup.GoogleNetworkServicesMulticastDomainGroupConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainGroup.GoogleNetworkServicesMulticastDomainGroupConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainGroup.GoogleNetworkServicesMulticastDomainGroupConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainGroup.GoogleNetworkServicesMulticastDomainGroupConfig.property.location">location</a></code> | <code>str</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainGroup.GoogleNetworkServicesMulticastDomainGroupConfig.property.multicastDomainGroupId">multicast_domain_group_id</a></code> | <code>str</code> | A unique name for the multicast domain group. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainGroup.GoogleNetworkServicesMulticastDomainGroupConfig.property.deletionPolicy">deletion_policy</a></code> | <code>str</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainGroup.GoogleNetworkServicesMulticastDomainGroupConfig.property.description">description</a></code> | <code>str</code> | An optional text description of the multicast domain group. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainGroup.GoogleNetworkServicesMulticastDomainGroupConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_network_services_multicast_domain_group#id GoogleNetworkServicesMulticastDomainGroup#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainGroup.GoogleNetworkServicesMulticastDomainGroupConfig.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | Labels as key-value pairs. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainGroup.GoogleNetworkServicesMulticastDomainGroupConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_network_services_multicast_domain_group#project GoogleNetworkServicesMulticastDomainGroup#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainGroup.GoogleNetworkServicesMulticastDomainGroupConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainGroup.GoogleNetworkServicesMulticastDomainGroupTimeouts">GoogleNetworkServicesMulticastDomainGroupTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainGroup.GoogleNetworkServicesMulticastDomainGroupConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainGroup.GoogleNetworkServicesMulticastDomainGroupConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainGroup.GoogleNetworkServicesMulticastDomainGroupConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainGroup.GoogleNetworkServicesMulticastDomainGroupConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainGroup.GoogleNetworkServicesMulticastDomainGroupConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainGroup.GoogleNetworkServicesMulticastDomainGroupConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainGroup.GoogleNetworkServicesMulticastDomainGroupConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainGroup.GoogleNetworkServicesMulticastDomainGroupConfig.property.location"></a>

```python
location: str
```

- *Type:* str

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_network_services_multicast_domain_group#location GoogleNetworkServicesMulticastDomainGroup#location}

---

##### `multicast_domain_group_id`<sup>Required</sup> <a name="multicast_domain_group_id" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainGroup.GoogleNetworkServicesMulticastDomainGroupConfig.property.multicastDomainGroupId"></a>

```python
multicast_domain_group_id: str
```

- *Type:* str

A unique name for the multicast domain group.

The name is restricted to letters, numbers, and hyphen, with the first
character a letter, and the last a letter or a number. The name must not
exceed 48 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_network_services_multicast_domain_group#multicast_domain_group_id GoogleNetworkServicesMulticastDomainGroup#multicast_domain_group_id}

---

##### `deletion_policy`<sup>Optional</sup> <a name="deletion_policy" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainGroup.GoogleNetworkServicesMulticastDomainGroupConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_network_services_multicast_domain_group#deletion_policy GoogleNetworkServicesMulticastDomainGroup#deletion_policy}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainGroup.GoogleNetworkServicesMulticastDomainGroupConfig.property.description"></a>

```python
description: str
```

- *Type:* str

An optional text description of the multicast domain group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_network_services_multicast_domain_group#description GoogleNetworkServicesMulticastDomainGroup#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainGroup.GoogleNetworkServicesMulticastDomainGroupConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_network_services_multicast_domain_group#id GoogleNetworkServicesMulticastDomainGroup#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainGroup.GoogleNetworkServicesMulticastDomainGroupConfig.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Labels as key-value pairs.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_network_services_multicast_domain_group#labels GoogleNetworkServicesMulticastDomainGroup#labels}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainGroup.GoogleNetworkServicesMulticastDomainGroupConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_network_services_multicast_domain_group#project GoogleNetworkServicesMulticastDomainGroup#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainGroup.GoogleNetworkServicesMulticastDomainGroupConfig.property.timeouts"></a>

```python
timeouts: GoogleNetworkServicesMulticastDomainGroupTimeouts
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainGroup.GoogleNetworkServicesMulticastDomainGroupTimeouts">GoogleNetworkServicesMulticastDomainGroupTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_network_services_multicast_domain_group#timeouts GoogleNetworkServicesMulticastDomainGroup#timeouts}

---

### GoogleNetworkServicesMulticastDomainGroupState <a name="GoogleNetworkServicesMulticastDomainGroupState" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainGroup.GoogleNetworkServicesMulticastDomainGroupState"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainGroup.GoogleNetworkServicesMulticastDomainGroupState.Initializer"></a>

```python
from cdktn_provider_google_beta import google_network_services_multicast_domain_group

googleNetworkServicesMulticastDomainGroup.GoogleNetworkServicesMulticastDomainGroupState()
```


### GoogleNetworkServicesMulticastDomainGroupTimeouts <a name="GoogleNetworkServicesMulticastDomainGroupTimeouts" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainGroup.GoogleNetworkServicesMulticastDomainGroupTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainGroup.GoogleNetworkServicesMulticastDomainGroupTimeouts.Initializer"></a>

```python
from cdktn_provider_google_beta import google_network_services_multicast_domain_group

googleNetworkServicesMulticastDomainGroup.GoogleNetworkServicesMulticastDomainGroupTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainGroup.GoogleNetworkServicesMulticastDomainGroupTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_network_services_multicast_domain_group#create GoogleNetworkServicesMulticastDomainGroup#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainGroup.GoogleNetworkServicesMulticastDomainGroupTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_network_services_multicast_domain_group#delete GoogleNetworkServicesMulticastDomainGroup#delete}. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainGroup.GoogleNetworkServicesMulticastDomainGroupTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_network_services_multicast_domain_group#update GoogleNetworkServicesMulticastDomainGroup#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainGroup.GoogleNetworkServicesMulticastDomainGroupTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_network_services_multicast_domain_group#create GoogleNetworkServicesMulticastDomainGroup#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainGroup.GoogleNetworkServicesMulticastDomainGroupTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_network_services_multicast_domain_group#delete GoogleNetworkServicesMulticastDomainGroup#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainGroup.GoogleNetworkServicesMulticastDomainGroupTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_network_services_multicast_domain_group#update GoogleNetworkServicesMulticastDomainGroup#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleNetworkServicesMulticastDomainGroupStateList <a name="GoogleNetworkServicesMulticastDomainGroupStateList" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainGroup.GoogleNetworkServicesMulticastDomainGroupStateList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainGroup.GoogleNetworkServicesMulticastDomainGroupStateList.Initializer"></a>

```python
from cdktn_provider_google_beta import google_network_services_multicast_domain_group

googleNetworkServicesMulticastDomainGroup.GoogleNetworkServicesMulticastDomainGroupStateList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainGroup.GoogleNetworkServicesMulticastDomainGroupStateList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainGroup.GoogleNetworkServicesMulticastDomainGroupStateList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainGroup.GoogleNetworkServicesMulticastDomainGroupStateList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainGroup.GoogleNetworkServicesMulticastDomainGroupStateList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainGroup.GoogleNetworkServicesMulticastDomainGroupStateList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainGroup.GoogleNetworkServicesMulticastDomainGroupStateList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainGroup.GoogleNetworkServicesMulticastDomainGroupStateList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainGroup.GoogleNetworkServicesMulticastDomainGroupStateList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainGroup.GoogleNetworkServicesMulticastDomainGroupStateList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainGroup.GoogleNetworkServicesMulticastDomainGroupStateList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainGroup.GoogleNetworkServicesMulticastDomainGroupStateList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainGroup.GoogleNetworkServicesMulticastDomainGroupStateList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainGroup.GoogleNetworkServicesMulticastDomainGroupStateList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainGroup.GoogleNetworkServicesMulticastDomainGroupStateList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainGroup.GoogleNetworkServicesMulticastDomainGroupStateList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainGroup.GoogleNetworkServicesMulticastDomainGroupStateList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainGroup.GoogleNetworkServicesMulticastDomainGroupStateList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainGroup.GoogleNetworkServicesMulticastDomainGroupStateList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleNetworkServicesMulticastDomainGroupStateOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainGroup.GoogleNetworkServicesMulticastDomainGroupStateList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainGroup.GoogleNetworkServicesMulticastDomainGroupStateList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainGroup.GoogleNetworkServicesMulticastDomainGroupStateList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainGroup.GoogleNetworkServicesMulticastDomainGroupStateList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainGroup.GoogleNetworkServicesMulticastDomainGroupStateList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### GoogleNetworkServicesMulticastDomainGroupStateOutputReference <a name="GoogleNetworkServicesMulticastDomainGroupStateOutputReference" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainGroup.GoogleNetworkServicesMulticastDomainGroupStateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainGroup.GoogleNetworkServicesMulticastDomainGroupStateOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_network_services_multicast_domain_group

googleNetworkServicesMulticastDomainGroup.GoogleNetworkServicesMulticastDomainGroupStateOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainGroup.GoogleNetworkServicesMulticastDomainGroupStateOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainGroup.GoogleNetworkServicesMulticastDomainGroupStateOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainGroup.GoogleNetworkServicesMulticastDomainGroupStateOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainGroup.GoogleNetworkServicesMulticastDomainGroupStateOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainGroup.GoogleNetworkServicesMulticastDomainGroupStateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainGroup.GoogleNetworkServicesMulticastDomainGroupStateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainGroup.GoogleNetworkServicesMulticastDomainGroupStateOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainGroup.GoogleNetworkServicesMulticastDomainGroupStateOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainGroup.GoogleNetworkServicesMulticastDomainGroupStateOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainGroup.GoogleNetworkServicesMulticastDomainGroupStateOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainGroup.GoogleNetworkServicesMulticastDomainGroupStateOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainGroup.GoogleNetworkServicesMulticastDomainGroupStateOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainGroup.GoogleNetworkServicesMulticastDomainGroupStateOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainGroup.GoogleNetworkServicesMulticastDomainGroupStateOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainGroup.GoogleNetworkServicesMulticastDomainGroupStateOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainGroup.GoogleNetworkServicesMulticastDomainGroupStateOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainGroup.GoogleNetworkServicesMulticastDomainGroupStateOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainGroup.GoogleNetworkServicesMulticastDomainGroupStateOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainGroup.GoogleNetworkServicesMulticastDomainGroupStateOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainGroup.GoogleNetworkServicesMulticastDomainGroupStateOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainGroup.GoogleNetworkServicesMulticastDomainGroupStateOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainGroup.GoogleNetworkServicesMulticastDomainGroupStateOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainGroup.GoogleNetworkServicesMulticastDomainGroupStateOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainGroup.GoogleNetworkServicesMulticastDomainGroupStateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainGroup.GoogleNetworkServicesMulticastDomainGroupStateOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainGroup.GoogleNetworkServicesMulticastDomainGroupStateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainGroup.GoogleNetworkServicesMulticastDomainGroupStateOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainGroup.GoogleNetworkServicesMulticastDomainGroupStateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainGroup.GoogleNetworkServicesMulticastDomainGroupStateOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainGroup.GoogleNetworkServicesMulticastDomainGroupStateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainGroup.GoogleNetworkServicesMulticastDomainGroupStateOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainGroup.GoogleNetworkServicesMulticastDomainGroupStateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainGroup.GoogleNetworkServicesMulticastDomainGroupStateOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainGroup.GoogleNetworkServicesMulticastDomainGroupStateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainGroup.GoogleNetworkServicesMulticastDomainGroupStateOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainGroup.GoogleNetworkServicesMulticastDomainGroupStateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainGroup.GoogleNetworkServicesMulticastDomainGroupStateOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainGroup.GoogleNetworkServicesMulticastDomainGroupStateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainGroup.GoogleNetworkServicesMulticastDomainGroupStateOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainGroup.GoogleNetworkServicesMulticastDomainGroupStateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainGroup.GoogleNetworkServicesMulticastDomainGroupStateOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainGroup.GoogleNetworkServicesMulticastDomainGroupStateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainGroup.GoogleNetworkServicesMulticastDomainGroupStateOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainGroup.GoogleNetworkServicesMulticastDomainGroupStateOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainGroup.GoogleNetworkServicesMulticastDomainGroupStateOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainGroup.GoogleNetworkServicesMulticastDomainGroupStateOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainGroup.GoogleNetworkServicesMulticastDomainGroupStateOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainGroup.GoogleNetworkServicesMulticastDomainGroupStateOutputReference.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainGroup.GoogleNetworkServicesMulticastDomainGroupStateOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainGroup.GoogleNetworkServicesMulticastDomainGroupState">GoogleNetworkServicesMulticastDomainGroupState</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainGroup.GoogleNetworkServicesMulticastDomainGroupStateOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainGroup.GoogleNetworkServicesMulticastDomainGroupStateOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainGroup.GoogleNetworkServicesMulticastDomainGroupStateOutputReference.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainGroup.GoogleNetworkServicesMulticastDomainGroupStateOutputReference.property.internalValue"></a>

```python
internal_value: GoogleNetworkServicesMulticastDomainGroupState
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainGroup.GoogleNetworkServicesMulticastDomainGroupState">GoogleNetworkServicesMulticastDomainGroupState</a>

---


### GoogleNetworkServicesMulticastDomainGroupTimeoutsOutputReference <a name="GoogleNetworkServicesMulticastDomainGroupTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainGroup.GoogleNetworkServicesMulticastDomainGroupTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainGroup.GoogleNetworkServicesMulticastDomainGroupTimeoutsOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_network_services_multicast_domain_group

googleNetworkServicesMulticastDomainGroup.GoogleNetworkServicesMulticastDomainGroupTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainGroup.GoogleNetworkServicesMulticastDomainGroupTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainGroup.GoogleNetworkServicesMulticastDomainGroupTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainGroup.GoogleNetworkServicesMulticastDomainGroupTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainGroup.GoogleNetworkServicesMulticastDomainGroupTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainGroup.GoogleNetworkServicesMulticastDomainGroupTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainGroup.GoogleNetworkServicesMulticastDomainGroupTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainGroup.GoogleNetworkServicesMulticastDomainGroupTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainGroup.GoogleNetworkServicesMulticastDomainGroupTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainGroup.GoogleNetworkServicesMulticastDomainGroupTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainGroup.GoogleNetworkServicesMulticastDomainGroupTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainGroup.GoogleNetworkServicesMulticastDomainGroupTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainGroup.GoogleNetworkServicesMulticastDomainGroupTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainGroup.GoogleNetworkServicesMulticastDomainGroupTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainGroup.GoogleNetworkServicesMulticastDomainGroupTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainGroup.GoogleNetworkServicesMulticastDomainGroupTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainGroup.GoogleNetworkServicesMulticastDomainGroupTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainGroup.GoogleNetworkServicesMulticastDomainGroupTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainGroup.GoogleNetworkServicesMulticastDomainGroupTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainGroup.GoogleNetworkServicesMulticastDomainGroupTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainGroup.GoogleNetworkServicesMulticastDomainGroupTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainGroup.GoogleNetworkServicesMulticastDomainGroupTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainGroup.GoogleNetworkServicesMulticastDomainGroupTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainGroup.GoogleNetworkServicesMulticastDomainGroupTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainGroup.GoogleNetworkServicesMulticastDomainGroupTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainGroup.GoogleNetworkServicesMulticastDomainGroupTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainGroup.GoogleNetworkServicesMulticastDomainGroupTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainGroup.GoogleNetworkServicesMulticastDomainGroupTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainGroup.GoogleNetworkServicesMulticastDomainGroupTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainGroup.GoogleNetworkServicesMulticastDomainGroupTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainGroup.GoogleNetworkServicesMulticastDomainGroupTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainGroup.GoogleNetworkServicesMulticastDomainGroupTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainGroup.GoogleNetworkServicesMulticastDomainGroupTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainGroup.GoogleNetworkServicesMulticastDomainGroupTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainGroup.GoogleNetworkServicesMulticastDomainGroupTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainGroup.GoogleNetworkServicesMulticastDomainGroupTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainGroup.GoogleNetworkServicesMulticastDomainGroupTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainGroup.GoogleNetworkServicesMulticastDomainGroupTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainGroup.GoogleNetworkServicesMulticastDomainGroupTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainGroup.GoogleNetworkServicesMulticastDomainGroupTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainGroup.GoogleNetworkServicesMulticastDomainGroupTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainGroup.GoogleNetworkServicesMulticastDomainGroupTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainGroup.GoogleNetworkServicesMulticastDomainGroupTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainGroup.GoogleNetworkServicesMulticastDomainGroupTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainGroup.GoogleNetworkServicesMulticastDomainGroupTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainGroup.GoogleNetworkServicesMulticastDomainGroupTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainGroup.GoogleNetworkServicesMulticastDomainGroupTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainGroup.GoogleNetworkServicesMulticastDomainGroupTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainGroup.GoogleNetworkServicesMulticastDomainGroupTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainGroup.GoogleNetworkServicesMulticastDomainGroupTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainGroup.GoogleNetworkServicesMulticastDomainGroupTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainGroup.GoogleNetworkServicesMulticastDomainGroupTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainGroup.GoogleNetworkServicesMulticastDomainGroupTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainGroup.GoogleNetworkServicesMulticastDomainGroupTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainGroup.GoogleNetworkServicesMulticastDomainGroupTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainGroup.GoogleNetworkServicesMulticastDomainGroupTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainGroup.GoogleNetworkServicesMulticastDomainGroupTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainGroup.GoogleNetworkServicesMulticastDomainGroupTimeouts">GoogleNetworkServicesMulticastDomainGroupTimeouts</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainGroup.GoogleNetworkServicesMulticastDomainGroupTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainGroup.GoogleNetworkServicesMulticastDomainGroupTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainGroup.GoogleNetworkServicesMulticastDomainGroupTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainGroup.GoogleNetworkServicesMulticastDomainGroupTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainGroup.GoogleNetworkServicesMulticastDomainGroupTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainGroup.GoogleNetworkServicesMulticastDomainGroupTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainGroup.GoogleNetworkServicesMulticastDomainGroupTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainGroup.GoogleNetworkServicesMulticastDomainGroupTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainGroup.GoogleNetworkServicesMulticastDomainGroupTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | GoogleNetworkServicesMulticastDomainGroupTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainGroup.GoogleNetworkServicesMulticastDomainGroupTimeouts">GoogleNetworkServicesMulticastDomainGroupTimeouts</a>

---



