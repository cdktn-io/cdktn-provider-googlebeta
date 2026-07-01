# `googleAgentRegistryBinding` Submodule <a name="`googleAgentRegistryBinding` Submodule" id="@cdktn/provider-google-beta.googleAgentRegistryBinding"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleAgentRegistryBinding <a name="GoogleAgentRegistryBinding" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.39.0/docs/resources/google_agent_registry_binding google_agent_registry_binding}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.Initializer"></a>

```python
from cdktn_provider_google_beta import google_agent_registry_binding

googleAgentRegistryBinding.GoogleAgentRegistryBinding(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  auth_provider_binding: GoogleAgentRegistryBindingAuthProviderBinding,
  binding_id: str,
  location: str,
  source: GoogleAgentRegistryBindingSource,
  target: GoogleAgentRegistryBindingTarget,
  deletion_policy: str = None,
  description: str = None,
  display_name: str = None,
  id: str = None,
  project: str = None,
  timeouts: GoogleAgentRegistryBindingTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.Initializer.parameter.authProviderBinding">auth_provider_binding</a></code> | <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingAuthProviderBinding">GoogleAgentRegistryBindingAuthProviderBinding</a></code> | auth_provider_binding block. |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.Initializer.parameter.bindingId">binding_id</a></code> | <code>str</code> | The name of the Binding. |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.Initializer.parameter.location">location</a></code> | <code>str</code> | The location of the resource. |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.Initializer.parameter.source">source</a></code> | <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingSource">GoogleAgentRegistryBindingSource</a></code> | source block. |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.Initializer.parameter.target">target</a></code> | <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingTarget">GoogleAgentRegistryBindingTarget</a></code> | target block. |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.Initializer.parameter.deletionPolicy">deletion_policy</a></code> | <code>str</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.Initializer.parameter.description">description</a></code> | <code>str</code> | The description of the Binding. |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | User-defined display name for the Binding. |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.39.0/docs/resources/google_agent_registry_binding#id GoogleAgentRegistryBinding#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.39.0/docs/resources/google_agent_registry_binding#project GoogleAgentRegistryBinding#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingTimeouts">GoogleAgentRegistryBindingTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `auth_provider_binding`<sup>Required</sup> <a name="auth_provider_binding" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.Initializer.parameter.authProviderBinding"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingAuthProviderBinding">GoogleAgentRegistryBindingAuthProviderBinding</a>

auth_provider_binding block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.39.0/docs/resources/google_agent_registry_binding#auth_provider_binding GoogleAgentRegistryBinding#auth_provider_binding}

---

##### `binding_id`<sup>Required</sup> <a name="binding_id" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.Initializer.parameter.bindingId"></a>

- *Type:* str

The name of the Binding.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.39.0/docs/resources/google_agent_registry_binding#binding_id GoogleAgentRegistryBinding#binding_id}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.Initializer.parameter.location"></a>

- *Type:* str

The location of the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.39.0/docs/resources/google_agent_registry_binding#location GoogleAgentRegistryBinding#location}

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.Initializer.parameter.source"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingSource">GoogleAgentRegistryBindingSource</a>

source block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.39.0/docs/resources/google_agent_registry_binding#source GoogleAgentRegistryBinding#source}

---

##### `target`<sup>Required</sup> <a name="target" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.Initializer.parameter.target"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingTarget">GoogleAgentRegistryBindingTarget</a>

target block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.39.0/docs/resources/google_agent_registry_binding#target GoogleAgentRegistryBinding#target}

---

##### `deletion_policy`<sup>Optional</sup> <a name="deletion_policy" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.Initializer.parameter.deletionPolicy"></a>

- *Type:* str

Whether Terraform will be prevented from destroying the instance.

Defaults to "DELETE".
When a 'terraform destroy' or 'terraform apply' would delete the instance,
the command will fail if this field is set to "PREVENT" in Terraform state.
When set to "ABANDON", the command will remove the resource from Terraform
management without updating or deleting the resource in the API.
When set to "DELETE", deleting the resource is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.39.0/docs/resources/google_agent_registry_binding#deletion_policy GoogleAgentRegistryBinding#deletion_policy}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.Initializer.parameter.description"></a>

- *Type:* str

The description of the Binding.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.39.0/docs/resources/google_agent_registry_binding#description GoogleAgentRegistryBinding#description}

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.Initializer.parameter.displayName"></a>

- *Type:* str

User-defined display name for the Binding.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.39.0/docs/resources/google_agent_registry_binding#display_name GoogleAgentRegistryBinding#display_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.39.0/docs/resources/google_agent_registry_binding#id GoogleAgentRegistryBinding#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.39.0/docs/resources/google_agent_registry_binding#project GoogleAgentRegistryBinding#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingTimeouts">GoogleAgentRegistryBindingTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.39.0/docs/resources/google_agent_registry_binding#timeouts GoogleAgentRegistryBinding#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.putAuthProviderBinding">put_auth_provider_binding</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.putSource">put_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.putTarget">put_target</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.resetDeletionPolicy">reset_deletion_policy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.resetDisplayName">reset_display_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_auth_provider_binding` <a name="put_auth_provider_binding" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.putAuthProviderBinding"></a>

```python
def put_auth_provider_binding(
  auth_provider: str,
  continue_uri: str = None,
  scopes: typing.List[str] = None
) -> None
```

###### `auth_provider`<sup>Required</sup> <a name="auth_provider" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.putAuthProviderBinding.parameter.authProvider"></a>

- *Type:* str

The resource name of the target auth provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.39.0/docs/resources/google_agent_registry_binding#auth_provider GoogleAgentRegistryBinding#auth_provider}

---

###### `continue_uri`<sup>Optional</sup> <a name="continue_uri" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.putAuthProviderBinding.parameter.continueUri"></a>

- *Type:* str

The continue URI of the auth provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.39.0/docs/resources/google_agent_registry_binding#continue_uri GoogleAgentRegistryBinding#continue_uri}

---

###### `scopes`<sup>Optional</sup> <a name="scopes" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.putAuthProviderBinding.parameter.scopes"></a>

- *Type:* typing.List[str]

The list of OAuth2 scopes of the auth provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.39.0/docs/resources/google_agent_registry_binding#scopes GoogleAgentRegistryBinding#scopes}

---

##### `put_source` <a name="put_source" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.putSource"></a>

```python
def put_source(
  identifier: str
) -> None
```

###### `identifier`<sup>Required</sup> <a name="identifier" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.putSource.parameter.identifier"></a>

- *Type:* str

The identifier of the source Agent. Format: 'urn:agent:{publisher}:{namespace}:{name}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.39.0/docs/resources/google_agent_registry_binding#identifier GoogleAgentRegistryBinding#identifier}

---

##### `put_target` <a name="put_target" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.putTarget"></a>

```python
def put_target(
  identifier: str
) -> None
```

###### `identifier`<sup>Required</sup> <a name="identifier" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.putTarget.parameter.identifier"></a>

- *Type:* str

The identifier of the target Agent, MCP Server, or Endpoint. Format: * 'urn:agent:{publisher}:{namespace}:{name}' * 'urn:mcp:{publisher}:{namespace}:{name}' * 'urn:endpoint:{publisher}:{namespace}:{name}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.39.0/docs/resources/google_agent_registry_binding#identifier GoogleAgentRegistryBinding#identifier}

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.39.0/docs/resources/google_agent_registry_binding#create GoogleAgentRegistryBinding#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.39.0/docs/resources/google_agent_registry_binding#delete GoogleAgentRegistryBinding#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.39.0/docs/resources/google_agent_registry_binding#update GoogleAgentRegistryBinding#update}.

---

##### `reset_deletion_policy` <a name="reset_deletion_policy" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.resetDeletionPolicy"></a>

```python
def reset_deletion_policy() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_display_name` <a name="reset_display_name" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.resetDisplayName"></a>

```python
def reset_display_name() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a GoogleAgentRegistryBinding resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.isConstruct"></a>

```python
from cdktn_provider_google_beta import google_agent_registry_binding

googleAgentRegistryBinding.GoogleAgentRegistryBinding.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.isTerraformElement"></a>

```python
from cdktn_provider_google_beta import google_agent_registry_binding

googleAgentRegistryBinding.GoogleAgentRegistryBinding.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.isTerraformResource"></a>

```python
from cdktn_provider_google_beta import google_agent_registry_binding

googleAgentRegistryBinding.GoogleAgentRegistryBinding.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.generateConfigForImport"></a>

```python
from cdktn_provider_google_beta import google_agent_registry_binding

googleAgentRegistryBinding.GoogleAgentRegistryBinding.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a GoogleAgentRegistryBinding resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the GoogleAgentRegistryBinding to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing GoogleAgentRegistryBinding that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.39.0/docs/resources/google_agent_registry_binding#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the GoogleAgentRegistryBinding to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.property.authProviderBinding">auth_provider_binding</a></code> | <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingAuthProviderBindingOutputReference">GoogleAgentRegistryBindingAuthProviderBindingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.property.createTime">create_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.property.source">source</a></code> | <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingSourceOutputReference">GoogleAgentRegistryBindingSourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.property.target">target</a></code> | <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingTargetOutputReference">GoogleAgentRegistryBindingTargetOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingTimeoutsOutputReference">GoogleAgentRegistryBindingTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.property.updateTime">update_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.property.authProviderBindingInput">auth_provider_binding_input</a></code> | <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingAuthProviderBinding">GoogleAgentRegistryBindingAuthProviderBinding</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.property.bindingIdInput">binding_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.property.deletionPolicyInput">deletion_policy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.property.sourceInput">source_input</a></code> | <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingSource">GoogleAgentRegistryBindingSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.property.targetInput">target_input</a></code> | <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingTarget">GoogleAgentRegistryBindingTarget</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.property.timeoutsInput">timeouts_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingTimeouts">GoogleAgentRegistryBindingTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.property.bindingId">binding_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.property.deletionPolicy">deletion_policy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.property.project">project</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `auth_provider_binding`<sup>Required</sup> <a name="auth_provider_binding" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.property.authProviderBinding"></a>

```python
auth_provider_binding: GoogleAgentRegistryBindingAuthProviderBindingOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingAuthProviderBindingOutputReference">GoogleAgentRegistryBindingAuthProviderBindingOutputReference</a>

---

##### `create_time`<sup>Required</sup> <a name="create_time" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.property.createTime"></a>

```python
create_time: str
```

- *Type:* str

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.property.source"></a>

```python
source: GoogleAgentRegistryBindingSourceOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingSourceOutputReference">GoogleAgentRegistryBindingSourceOutputReference</a>

---

##### `target`<sup>Required</sup> <a name="target" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.property.target"></a>

```python
target: GoogleAgentRegistryBindingTargetOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingTargetOutputReference">GoogleAgentRegistryBindingTargetOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.property.timeouts"></a>

```python
timeouts: GoogleAgentRegistryBindingTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingTimeoutsOutputReference">GoogleAgentRegistryBindingTimeoutsOutputReference</a>

---

##### `update_time`<sup>Required</sup> <a name="update_time" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.property.updateTime"></a>

```python
update_time: str
```

- *Type:* str

---

##### `auth_provider_binding_input`<sup>Optional</sup> <a name="auth_provider_binding_input" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.property.authProviderBindingInput"></a>

```python
auth_provider_binding_input: GoogleAgentRegistryBindingAuthProviderBinding
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingAuthProviderBinding">GoogleAgentRegistryBindingAuthProviderBinding</a>

---

##### `binding_id_input`<sup>Optional</sup> <a name="binding_id_input" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.property.bindingIdInput"></a>

```python
binding_id_input: str
```

- *Type:* str

---

##### `deletion_policy_input`<sup>Optional</sup> <a name="deletion_policy_input" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.property.deletionPolicyInput"></a>

```python
deletion_policy_input: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `source_input`<sup>Optional</sup> <a name="source_input" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.property.sourceInput"></a>

```python
source_input: GoogleAgentRegistryBindingSource
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingSource">GoogleAgentRegistryBindingSource</a>

---

##### `target_input`<sup>Optional</sup> <a name="target_input" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.property.targetInput"></a>

```python
target_input: GoogleAgentRegistryBindingTarget
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingTarget">GoogleAgentRegistryBindingTarget</a>

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.property.timeoutsInput"></a>

```python
timeouts_input: IResolvable | GoogleAgentRegistryBindingTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingTimeouts">GoogleAgentRegistryBindingTimeouts</a>

---

##### `binding_id`<sup>Required</sup> <a name="binding_id" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.property.bindingId"></a>

```python
binding_id: str
```

- *Type:* str

---

##### `deletion_policy`<sup>Required</sup> <a name="deletion_policy" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.property.deletionPolicy"></a>

```python
deletion_policy: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.property.project"></a>

```python
project: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleAgentRegistryBindingAuthProviderBinding <a name="GoogleAgentRegistryBindingAuthProviderBinding" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingAuthProviderBinding"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingAuthProviderBinding.Initializer"></a>

```python
from cdktn_provider_google_beta import google_agent_registry_binding

googleAgentRegistryBinding.GoogleAgentRegistryBindingAuthProviderBinding(
  auth_provider: str,
  continue_uri: str = None,
  scopes: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingAuthProviderBinding.property.authProvider">auth_provider</a></code> | <code>str</code> | The resource name of the target auth provider. |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingAuthProviderBinding.property.continueUri">continue_uri</a></code> | <code>str</code> | The continue URI of the auth provider. |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingAuthProviderBinding.property.scopes">scopes</a></code> | <code>typing.List[str]</code> | The list of OAuth2 scopes of the auth provider. |

---

##### `auth_provider`<sup>Required</sup> <a name="auth_provider" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingAuthProviderBinding.property.authProvider"></a>

```python
auth_provider: str
```

- *Type:* str

The resource name of the target auth provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.39.0/docs/resources/google_agent_registry_binding#auth_provider GoogleAgentRegistryBinding#auth_provider}

---

##### `continue_uri`<sup>Optional</sup> <a name="continue_uri" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingAuthProviderBinding.property.continueUri"></a>

```python
continue_uri: str
```

- *Type:* str

The continue URI of the auth provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.39.0/docs/resources/google_agent_registry_binding#continue_uri GoogleAgentRegistryBinding#continue_uri}

---

##### `scopes`<sup>Optional</sup> <a name="scopes" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingAuthProviderBinding.property.scopes"></a>

```python
scopes: typing.List[str]
```

- *Type:* typing.List[str]

The list of OAuth2 scopes of the auth provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.39.0/docs/resources/google_agent_registry_binding#scopes GoogleAgentRegistryBinding#scopes}

---

### GoogleAgentRegistryBindingConfig <a name="GoogleAgentRegistryBindingConfig" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingConfig.Initializer"></a>

```python
from cdktn_provider_google_beta import google_agent_registry_binding

googleAgentRegistryBinding.GoogleAgentRegistryBindingConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  auth_provider_binding: GoogleAgentRegistryBindingAuthProviderBinding,
  binding_id: str,
  location: str,
  source: GoogleAgentRegistryBindingSource,
  target: GoogleAgentRegistryBindingTarget,
  deletion_policy: str = None,
  description: str = None,
  display_name: str = None,
  id: str = None,
  project: str = None,
  timeouts: GoogleAgentRegistryBindingTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingConfig.property.authProviderBinding">auth_provider_binding</a></code> | <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingAuthProviderBinding">GoogleAgentRegistryBindingAuthProviderBinding</a></code> | auth_provider_binding block. |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingConfig.property.bindingId">binding_id</a></code> | <code>str</code> | The name of the Binding. |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingConfig.property.location">location</a></code> | <code>str</code> | The location of the resource. |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingConfig.property.source">source</a></code> | <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingSource">GoogleAgentRegistryBindingSource</a></code> | source block. |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingConfig.property.target">target</a></code> | <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingTarget">GoogleAgentRegistryBindingTarget</a></code> | target block. |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingConfig.property.deletionPolicy">deletion_policy</a></code> | <code>str</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingConfig.property.description">description</a></code> | <code>str</code> | The description of the Binding. |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingConfig.property.displayName">display_name</a></code> | <code>str</code> | User-defined display name for the Binding. |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.39.0/docs/resources/google_agent_registry_binding#id GoogleAgentRegistryBinding#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.39.0/docs/resources/google_agent_registry_binding#project GoogleAgentRegistryBinding#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingTimeouts">GoogleAgentRegistryBindingTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `auth_provider_binding`<sup>Required</sup> <a name="auth_provider_binding" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingConfig.property.authProviderBinding"></a>

```python
auth_provider_binding: GoogleAgentRegistryBindingAuthProviderBinding
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingAuthProviderBinding">GoogleAgentRegistryBindingAuthProviderBinding</a>

auth_provider_binding block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.39.0/docs/resources/google_agent_registry_binding#auth_provider_binding GoogleAgentRegistryBinding#auth_provider_binding}

---

##### `binding_id`<sup>Required</sup> <a name="binding_id" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingConfig.property.bindingId"></a>

```python
binding_id: str
```

- *Type:* str

The name of the Binding.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.39.0/docs/resources/google_agent_registry_binding#binding_id GoogleAgentRegistryBinding#binding_id}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingConfig.property.location"></a>

```python
location: str
```

- *Type:* str

The location of the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.39.0/docs/resources/google_agent_registry_binding#location GoogleAgentRegistryBinding#location}

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingConfig.property.source"></a>

```python
source: GoogleAgentRegistryBindingSource
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingSource">GoogleAgentRegistryBindingSource</a>

source block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.39.0/docs/resources/google_agent_registry_binding#source GoogleAgentRegistryBinding#source}

---

##### `target`<sup>Required</sup> <a name="target" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingConfig.property.target"></a>

```python
target: GoogleAgentRegistryBindingTarget
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingTarget">GoogleAgentRegistryBindingTarget</a>

target block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.39.0/docs/resources/google_agent_registry_binding#target GoogleAgentRegistryBinding#target}

---

##### `deletion_policy`<sup>Optional</sup> <a name="deletion_policy" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.39.0/docs/resources/google_agent_registry_binding#deletion_policy GoogleAgentRegistryBinding#deletion_policy}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingConfig.property.description"></a>

```python
description: str
```

- *Type:* str

The description of the Binding.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.39.0/docs/resources/google_agent_registry_binding#description GoogleAgentRegistryBinding#description}

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

User-defined display name for the Binding.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.39.0/docs/resources/google_agent_registry_binding#display_name GoogleAgentRegistryBinding#display_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.39.0/docs/resources/google_agent_registry_binding#id GoogleAgentRegistryBinding#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.39.0/docs/resources/google_agent_registry_binding#project GoogleAgentRegistryBinding#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingConfig.property.timeouts"></a>

```python
timeouts: GoogleAgentRegistryBindingTimeouts
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingTimeouts">GoogleAgentRegistryBindingTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.39.0/docs/resources/google_agent_registry_binding#timeouts GoogleAgentRegistryBinding#timeouts}

---

### GoogleAgentRegistryBindingSource <a name="GoogleAgentRegistryBindingSource" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingSource"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingSource.Initializer"></a>

```python
from cdktn_provider_google_beta import google_agent_registry_binding

googleAgentRegistryBinding.GoogleAgentRegistryBindingSource(
  identifier: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingSource.property.identifier">identifier</a></code> | <code>str</code> | The identifier of the source Agent. Format: 'urn:agent:{publisher}:{namespace}:{name}'. |

---

##### `identifier`<sup>Required</sup> <a name="identifier" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingSource.property.identifier"></a>

```python
identifier: str
```

- *Type:* str

The identifier of the source Agent. Format: 'urn:agent:{publisher}:{namespace}:{name}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.39.0/docs/resources/google_agent_registry_binding#identifier GoogleAgentRegistryBinding#identifier}

---

### GoogleAgentRegistryBindingTarget <a name="GoogleAgentRegistryBindingTarget" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingTarget"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingTarget.Initializer"></a>

```python
from cdktn_provider_google_beta import google_agent_registry_binding

googleAgentRegistryBinding.GoogleAgentRegistryBindingTarget(
  identifier: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingTarget.property.identifier">identifier</a></code> | <code>str</code> | The identifier of the target Agent, MCP Server, or Endpoint. Format: * 'urn:agent:{publisher}:{namespace}:{name}' * 'urn:mcp:{publisher}:{namespace}:{name}' * 'urn:endpoint:{publisher}:{namespace}:{name}'. |

---

##### `identifier`<sup>Required</sup> <a name="identifier" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingTarget.property.identifier"></a>

```python
identifier: str
```

- *Type:* str

The identifier of the target Agent, MCP Server, or Endpoint. Format: * 'urn:agent:{publisher}:{namespace}:{name}' * 'urn:mcp:{publisher}:{namespace}:{name}' * 'urn:endpoint:{publisher}:{namespace}:{name}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.39.0/docs/resources/google_agent_registry_binding#identifier GoogleAgentRegistryBinding#identifier}

---

### GoogleAgentRegistryBindingTimeouts <a name="GoogleAgentRegistryBindingTimeouts" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingTimeouts.Initializer"></a>

```python
from cdktn_provider_google_beta import google_agent_registry_binding

googleAgentRegistryBinding.GoogleAgentRegistryBindingTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.39.0/docs/resources/google_agent_registry_binding#create GoogleAgentRegistryBinding#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.39.0/docs/resources/google_agent_registry_binding#delete GoogleAgentRegistryBinding#delete}. |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.39.0/docs/resources/google_agent_registry_binding#update GoogleAgentRegistryBinding#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.39.0/docs/resources/google_agent_registry_binding#create GoogleAgentRegistryBinding#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.39.0/docs/resources/google_agent_registry_binding#delete GoogleAgentRegistryBinding#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.39.0/docs/resources/google_agent_registry_binding#update GoogleAgentRegistryBinding#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleAgentRegistryBindingAuthProviderBindingOutputReference <a name="GoogleAgentRegistryBindingAuthProviderBindingOutputReference" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingAuthProviderBindingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingAuthProviderBindingOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_agent_registry_binding

googleAgentRegistryBinding.GoogleAgentRegistryBindingAuthProviderBindingOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingAuthProviderBindingOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingAuthProviderBindingOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingAuthProviderBindingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingAuthProviderBindingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingAuthProviderBindingOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingAuthProviderBindingOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingAuthProviderBindingOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingAuthProviderBindingOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingAuthProviderBindingOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingAuthProviderBindingOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingAuthProviderBindingOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingAuthProviderBindingOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingAuthProviderBindingOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingAuthProviderBindingOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingAuthProviderBindingOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingAuthProviderBindingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingAuthProviderBindingOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingAuthProviderBindingOutputReference.resetContinueUri">reset_continue_uri</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingAuthProviderBindingOutputReference.resetScopes">reset_scopes</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingAuthProviderBindingOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingAuthProviderBindingOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingAuthProviderBindingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingAuthProviderBindingOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingAuthProviderBindingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingAuthProviderBindingOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingAuthProviderBindingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingAuthProviderBindingOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingAuthProviderBindingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingAuthProviderBindingOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingAuthProviderBindingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingAuthProviderBindingOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingAuthProviderBindingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingAuthProviderBindingOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingAuthProviderBindingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingAuthProviderBindingOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingAuthProviderBindingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingAuthProviderBindingOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingAuthProviderBindingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingAuthProviderBindingOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingAuthProviderBindingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingAuthProviderBindingOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingAuthProviderBindingOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingAuthProviderBindingOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_continue_uri` <a name="reset_continue_uri" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingAuthProviderBindingOutputReference.resetContinueUri"></a>

```python
def reset_continue_uri() -> None
```

##### `reset_scopes` <a name="reset_scopes" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingAuthProviderBindingOutputReference.resetScopes"></a>

```python
def reset_scopes() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingAuthProviderBindingOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingAuthProviderBindingOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingAuthProviderBindingOutputReference.property.authProviderInput">auth_provider_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingAuthProviderBindingOutputReference.property.continueUriInput">continue_uri_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingAuthProviderBindingOutputReference.property.scopesInput">scopes_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingAuthProviderBindingOutputReference.property.authProvider">auth_provider</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingAuthProviderBindingOutputReference.property.continueUri">continue_uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingAuthProviderBindingOutputReference.property.scopes">scopes</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingAuthProviderBindingOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingAuthProviderBinding">GoogleAgentRegistryBindingAuthProviderBinding</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingAuthProviderBindingOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingAuthProviderBindingOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `auth_provider_input`<sup>Optional</sup> <a name="auth_provider_input" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingAuthProviderBindingOutputReference.property.authProviderInput"></a>

```python
auth_provider_input: str
```

- *Type:* str

---

##### `continue_uri_input`<sup>Optional</sup> <a name="continue_uri_input" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingAuthProviderBindingOutputReference.property.continueUriInput"></a>

```python
continue_uri_input: str
```

- *Type:* str

---

##### `scopes_input`<sup>Optional</sup> <a name="scopes_input" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingAuthProviderBindingOutputReference.property.scopesInput"></a>

```python
scopes_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `auth_provider`<sup>Required</sup> <a name="auth_provider" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingAuthProviderBindingOutputReference.property.authProvider"></a>

```python
auth_provider: str
```

- *Type:* str

---

##### `continue_uri`<sup>Required</sup> <a name="continue_uri" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingAuthProviderBindingOutputReference.property.continueUri"></a>

```python
continue_uri: str
```

- *Type:* str

---

##### `scopes`<sup>Required</sup> <a name="scopes" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingAuthProviderBindingOutputReference.property.scopes"></a>

```python
scopes: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingAuthProviderBindingOutputReference.property.internalValue"></a>

```python
internal_value: GoogleAgentRegistryBindingAuthProviderBinding
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingAuthProviderBinding">GoogleAgentRegistryBindingAuthProviderBinding</a>

---


### GoogleAgentRegistryBindingSourceOutputReference <a name="GoogleAgentRegistryBindingSourceOutputReference" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingSourceOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_agent_registry_binding

googleAgentRegistryBinding.GoogleAgentRegistryBindingSourceOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingSourceOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingSourceOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingSourceOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingSourceOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingSourceOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingSourceOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingSourceOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingSourceOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingSourceOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingSourceOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingSourceOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingSourceOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingSourceOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingSourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingSourceOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingSourceOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingSourceOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingSourceOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingSourceOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingSourceOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingSourceOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingSourceOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingSourceOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingSourceOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingSourceOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingSourceOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingSourceOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingSourceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingSourceOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingSourceOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingSourceOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingSourceOutputReference.property.identifierInput">identifier_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingSourceOutputReference.property.identifier">identifier</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingSourceOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingSource">GoogleAgentRegistryBindingSource</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingSourceOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingSourceOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `identifier_input`<sup>Optional</sup> <a name="identifier_input" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingSourceOutputReference.property.identifierInput"></a>

```python
identifier_input: str
```

- *Type:* str

---

##### `identifier`<sup>Required</sup> <a name="identifier" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingSourceOutputReference.property.identifier"></a>

```python
identifier: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingSourceOutputReference.property.internalValue"></a>

```python
internal_value: GoogleAgentRegistryBindingSource
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingSource">GoogleAgentRegistryBindingSource</a>

---


### GoogleAgentRegistryBindingTargetOutputReference <a name="GoogleAgentRegistryBindingTargetOutputReference" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingTargetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingTargetOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_agent_registry_binding

googleAgentRegistryBinding.GoogleAgentRegistryBindingTargetOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingTargetOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingTargetOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingTargetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingTargetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingTargetOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingTargetOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingTargetOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingTargetOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingTargetOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingTargetOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingTargetOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingTargetOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingTargetOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingTargetOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingTargetOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingTargetOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingTargetOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingTargetOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingTargetOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingTargetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingTargetOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingTargetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingTargetOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingTargetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingTargetOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingTargetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingTargetOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingTargetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingTargetOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingTargetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingTargetOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingTargetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingTargetOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingTargetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingTargetOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingTargetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingTargetOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingTargetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingTargetOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingTargetOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingTargetOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingTargetOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingTargetOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingTargetOutputReference.property.identifierInput">identifier_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingTargetOutputReference.property.identifier">identifier</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingTargetOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingTarget">GoogleAgentRegistryBindingTarget</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingTargetOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingTargetOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `identifier_input`<sup>Optional</sup> <a name="identifier_input" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingTargetOutputReference.property.identifierInput"></a>

```python
identifier_input: str
```

- *Type:* str

---

##### `identifier`<sup>Required</sup> <a name="identifier" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingTargetOutputReference.property.identifier"></a>

```python
identifier: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingTargetOutputReference.property.internalValue"></a>

```python
internal_value: GoogleAgentRegistryBindingTarget
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingTarget">GoogleAgentRegistryBindingTarget</a>

---


### GoogleAgentRegistryBindingTimeoutsOutputReference <a name="GoogleAgentRegistryBindingTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingTimeoutsOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_agent_registry_binding

googleAgentRegistryBinding.GoogleAgentRegistryBindingTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingTimeouts">GoogleAgentRegistryBindingTimeouts</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | GoogleAgentRegistryBindingTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingTimeouts">GoogleAgentRegistryBindingTimeouts</a>

---



