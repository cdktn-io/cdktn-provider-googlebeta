# `googleResourceManagerCapabilityConfig` Submodule <a name="`googleResourceManagerCapabilityConfig` Submodule" id="@cdktn/provider-google-beta.googleResourceManagerCapabilityConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleResourceManagerCapabilityConfigA <a name="GoogleResourceManagerCapabilityConfigA" id="@cdktn/provider-google-beta.googleResourceManagerCapabilityConfig.GoogleResourceManagerCapabilityConfigA"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_resource_manager_capability_config google_resource_manager_capability_config}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleResourceManagerCapabilityConfig.GoogleResourceManagerCapabilityConfigA.Initializer"></a>

```python
from cdktn_provider_google_beta import google_resource_manager_capability_config

googleResourceManagerCapabilityConfig.GoogleResourceManagerCapabilityConfigA(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  capability_config_id: str,
  parent: str,
  types: typing.List[str],
  deletion_policy: str = None,
  display_name: str = None,
  id: str = None,
  management_project: str = None,
  timeouts: GoogleResourceManagerCapabilityConfigTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerCapabilityConfig.GoogleResourceManagerCapabilityConfigA.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerCapabilityConfig.GoogleResourceManagerCapabilityConfigA.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerCapabilityConfig.GoogleResourceManagerCapabilityConfigA.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerCapabilityConfig.GoogleResourceManagerCapabilityConfigA.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerCapabilityConfig.GoogleResourceManagerCapabilityConfigA.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerCapabilityConfig.GoogleResourceManagerCapabilityConfigA.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerCapabilityConfig.GoogleResourceManagerCapabilityConfigA.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerCapabilityConfig.GoogleResourceManagerCapabilityConfigA.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerCapabilityConfig.GoogleResourceManagerCapabilityConfigA.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerCapabilityConfig.GoogleResourceManagerCapabilityConfigA.Initializer.parameter.capabilityConfigId">capability_config_id</a></code> | <code>str</code> | User-specified identifier of the capability config. Must be 6 to 30 characters, and contain only lowercase letters, numbers, and hyphens. |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerCapabilityConfig.GoogleResourceManagerCapabilityConfigA.Initializer.parameter.parent">parent</a></code> | <code>str</code> | The parent resource in which to create the capability config. Format: 'folders/{folder_id}', 'organizations/{organization_id}', or 'projects/{project_number}'. |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerCapabilityConfig.GoogleResourceManagerCapabilityConfigA.Initializer.parameter.types">types</a></code> | <code>typing.List[str]</code> | The capabilities enabled for the resource and its sub-tree. Possible values: "AGENT_MANAGEMENT". |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerCapabilityConfig.GoogleResourceManagerCapabilityConfigA.Initializer.parameter.deletionPolicy">deletion_policy</a></code> | <code>str</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerCapabilityConfig.GoogleResourceManagerCapabilityConfigA.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | User-defined name for the capability config. Must be between 4 and 30 characters. |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerCapabilityConfig.GoogleResourceManagerCapabilityConfigA.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_resource_manager_capability_config#id GoogleResourceManagerCapabilityConfigA#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerCapabilityConfig.GoogleResourceManagerCapabilityConfigA.Initializer.parameter.managementProject">management_project</a></code> | <code>str</code> | The management project for the capability config. |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerCapabilityConfig.GoogleResourceManagerCapabilityConfigA.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleResourceManagerCapabilityConfig.GoogleResourceManagerCapabilityConfigTimeouts">GoogleResourceManagerCapabilityConfigTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleResourceManagerCapabilityConfig.GoogleResourceManagerCapabilityConfigA.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleResourceManagerCapabilityConfig.GoogleResourceManagerCapabilityConfigA.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleResourceManagerCapabilityConfig.GoogleResourceManagerCapabilityConfigA.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleResourceManagerCapabilityConfig.GoogleResourceManagerCapabilityConfigA.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google-beta.googleResourceManagerCapabilityConfig.GoogleResourceManagerCapabilityConfigA.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google-beta.googleResourceManagerCapabilityConfig.GoogleResourceManagerCapabilityConfigA.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleResourceManagerCapabilityConfig.GoogleResourceManagerCapabilityConfigA.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleResourceManagerCapabilityConfig.GoogleResourceManagerCapabilityConfigA.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleResourceManagerCapabilityConfig.GoogleResourceManagerCapabilityConfigA.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `capability_config_id`<sup>Required</sup> <a name="capability_config_id" id="@cdktn/provider-google-beta.googleResourceManagerCapabilityConfig.GoogleResourceManagerCapabilityConfigA.Initializer.parameter.capabilityConfigId"></a>

- *Type:* str

User-specified identifier of the capability config. Must be 6 to 30 characters, and contain only lowercase letters, numbers, and hyphens.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_resource_manager_capability_config#capability_config_id GoogleResourceManagerCapabilityConfigA#capability_config_id}

---

##### `parent`<sup>Required</sup> <a name="parent" id="@cdktn/provider-google-beta.googleResourceManagerCapabilityConfig.GoogleResourceManagerCapabilityConfigA.Initializer.parameter.parent"></a>

- *Type:* str

The parent resource in which to create the capability config. Format: 'folders/{folder_id}', 'organizations/{organization_id}', or 'projects/{project_number}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_resource_manager_capability_config#parent GoogleResourceManagerCapabilityConfigA#parent}

---

##### `types`<sup>Required</sup> <a name="types" id="@cdktn/provider-google-beta.googleResourceManagerCapabilityConfig.GoogleResourceManagerCapabilityConfigA.Initializer.parameter.types"></a>

- *Type:* typing.List[str]

The capabilities enabled for the resource and its sub-tree. Possible values: "AGENT_MANAGEMENT".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_resource_manager_capability_config#types GoogleResourceManagerCapabilityConfigA#types}

---

##### `deletion_policy`<sup>Optional</sup> <a name="deletion_policy" id="@cdktn/provider-google-beta.googleResourceManagerCapabilityConfig.GoogleResourceManagerCapabilityConfigA.Initializer.parameter.deletionPolicy"></a>

- *Type:* str

Whether Terraform will be prevented from destroying the instance.

Defaults to "DELETE".
When a 'terraform destroy' or 'terraform apply' would delete the instance,
the command will fail if this field is set to "PREVENT" in Terraform state.
When set to "ABANDON", the command will remove the resource from Terraform
management without updating or deleting the resource in the API.
When set to "DELETE", deleting the resource is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_resource_manager_capability_config#deletion_policy GoogleResourceManagerCapabilityConfigA#deletion_policy}

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="@cdktn/provider-google-beta.googleResourceManagerCapabilityConfig.GoogleResourceManagerCapabilityConfigA.Initializer.parameter.displayName"></a>

- *Type:* str

User-defined name for the capability config. Must be between 4 and 30 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_resource_manager_capability_config#display_name GoogleResourceManagerCapabilityConfigA#display_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleResourceManagerCapabilityConfig.GoogleResourceManagerCapabilityConfigA.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_resource_manager_capability_config#id GoogleResourceManagerCapabilityConfigA#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `management_project`<sup>Optional</sup> <a name="management_project" id="@cdktn/provider-google-beta.googleResourceManagerCapabilityConfig.GoogleResourceManagerCapabilityConfigA.Initializer.parameter.managementProject"></a>

- *Type:* str

The management project for the capability config.

If unspecified, a project will be created automatically.
Must be specified for project-scoped capability config.
Format: 'projects/{project_number}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_resource_manager_capability_config#management_project GoogleResourceManagerCapabilityConfigA#management_project}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleResourceManagerCapabilityConfig.GoogleResourceManagerCapabilityConfigA.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleResourceManagerCapabilityConfig.GoogleResourceManagerCapabilityConfigTimeouts">GoogleResourceManagerCapabilityConfigTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_resource_manager_capability_config#timeouts GoogleResourceManagerCapabilityConfigA#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerCapabilityConfig.GoogleResourceManagerCapabilityConfigA.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerCapabilityConfig.GoogleResourceManagerCapabilityConfigA.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerCapabilityConfig.GoogleResourceManagerCapabilityConfigA.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerCapabilityConfig.GoogleResourceManagerCapabilityConfigA.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerCapabilityConfig.GoogleResourceManagerCapabilityConfigA.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerCapabilityConfig.GoogleResourceManagerCapabilityConfigA.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerCapabilityConfig.GoogleResourceManagerCapabilityConfigA.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerCapabilityConfig.GoogleResourceManagerCapabilityConfigA.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerCapabilityConfig.GoogleResourceManagerCapabilityConfigA.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerCapabilityConfig.GoogleResourceManagerCapabilityConfigA.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerCapabilityConfig.GoogleResourceManagerCapabilityConfigA.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerCapabilityConfig.GoogleResourceManagerCapabilityConfigA.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerCapabilityConfig.GoogleResourceManagerCapabilityConfigA.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerCapabilityConfig.GoogleResourceManagerCapabilityConfigA.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerCapabilityConfig.GoogleResourceManagerCapabilityConfigA.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerCapabilityConfig.GoogleResourceManagerCapabilityConfigA.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerCapabilityConfig.GoogleResourceManagerCapabilityConfigA.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerCapabilityConfig.GoogleResourceManagerCapabilityConfigA.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerCapabilityConfig.GoogleResourceManagerCapabilityConfigA.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerCapabilityConfig.GoogleResourceManagerCapabilityConfigA.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerCapabilityConfig.GoogleResourceManagerCapabilityConfigA.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerCapabilityConfig.GoogleResourceManagerCapabilityConfigA.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerCapabilityConfig.GoogleResourceManagerCapabilityConfigA.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerCapabilityConfig.GoogleResourceManagerCapabilityConfigA.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerCapabilityConfig.GoogleResourceManagerCapabilityConfigA.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerCapabilityConfig.GoogleResourceManagerCapabilityConfigA.resetDeletionPolicy">reset_deletion_policy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerCapabilityConfig.GoogleResourceManagerCapabilityConfigA.resetDisplayName">reset_display_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerCapabilityConfig.GoogleResourceManagerCapabilityConfigA.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerCapabilityConfig.GoogleResourceManagerCapabilityConfigA.resetManagementProject">reset_management_project</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerCapabilityConfig.GoogleResourceManagerCapabilityConfigA.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleResourceManagerCapabilityConfig.GoogleResourceManagerCapabilityConfigA.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google-beta.googleResourceManagerCapabilityConfig.GoogleResourceManagerCapabilityConfigA.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google-beta.googleResourceManagerCapabilityConfig.GoogleResourceManagerCapabilityConfigA.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-google-beta.googleResourceManagerCapabilityConfig.GoogleResourceManagerCapabilityConfigA.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google-beta.googleResourceManagerCapabilityConfig.GoogleResourceManagerCapabilityConfigA.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleResourceManagerCapabilityConfig.GoogleResourceManagerCapabilityConfigA.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-google-beta.googleResourceManagerCapabilityConfig.GoogleResourceManagerCapabilityConfigA.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-google-beta.googleResourceManagerCapabilityConfig.GoogleResourceManagerCapabilityConfigA.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-google-beta.googleResourceManagerCapabilityConfig.GoogleResourceManagerCapabilityConfigA.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-google-beta.googleResourceManagerCapabilityConfig.GoogleResourceManagerCapabilityConfigA.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-google-beta.googleResourceManagerCapabilityConfig.GoogleResourceManagerCapabilityConfigA.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-google-beta.googleResourceManagerCapabilityConfig.GoogleResourceManagerCapabilityConfigA.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-google-beta.googleResourceManagerCapabilityConfig.GoogleResourceManagerCapabilityConfigA.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-google-beta.googleResourceManagerCapabilityConfig.GoogleResourceManagerCapabilityConfigA.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleResourceManagerCapabilityConfig.GoogleResourceManagerCapabilityConfigA.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleResourceManagerCapabilityConfig.GoogleResourceManagerCapabilityConfigA.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleResourceManagerCapabilityConfig.GoogleResourceManagerCapabilityConfigA.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleResourceManagerCapabilityConfig.GoogleResourceManagerCapabilityConfigA.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleResourceManagerCapabilityConfig.GoogleResourceManagerCapabilityConfigA.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleResourceManagerCapabilityConfig.GoogleResourceManagerCapabilityConfigA.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleResourceManagerCapabilityConfig.GoogleResourceManagerCapabilityConfigA.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleResourceManagerCapabilityConfig.GoogleResourceManagerCapabilityConfigA.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleResourceManagerCapabilityConfig.GoogleResourceManagerCapabilityConfigA.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleResourceManagerCapabilityConfig.GoogleResourceManagerCapabilityConfigA.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleResourceManagerCapabilityConfig.GoogleResourceManagerCapabilityConfigA.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleResourceManagerCapabilityConfig.GoogleResourceManagerCapabilityConfigA.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleResourceManagerCapabilityConfig.GoogleResourceManagerCapabilityConfigA.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleResourceManagerCapabilityConfig.GoogleResourceManagerCapabilityConfigA.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleResourceManagerCapabilityConfig.GoogleResourceManagerCapabilityConfigA.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleResourceManagerCapabilityConfig.GoogleResourceManagerCapabilityConfigA.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleResourceManagerCapabilityConfig.GoogleResourceManagerCapabilityConfigA.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleResourceManagerCapabilityConfig.GoogleResourceManagerCapabilityConfigA.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-google-beta.googleResourceManagerCapabilityConfig.GoogleResourceManagerCapabilityConfigA.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-google-beta.googleResourceManagerCapabilityConfig.GoogleResourceManagerCapabilityConfigA.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleResourceManagerCapabilityConfig.GoogleResourceManagerCapabilityConfigA.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleResourceManagerCapabilityConfig.GoogleResourceManagerCapabilityConfigA.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleResourceManagerCapabilityConfig.GoogleResourceManagerCapabilityConfigA.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleResourceManagerCapabilityConfig.GoogleResourceManagerCapabilityConfigA.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-google-beta.googleResourceManagerCapabilityConfig.GoogleResourceManagerCapabilityConfigA.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleResourceManagerCapabilityConfig.GoogleResourceManagerCapabilityConfigA.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-google-beta.googleResourceManagerCapabilityConfig.GoogleResourceManagerCapabilityConfigA.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-google-beta.googleResourceManagerCapabilityConfig.GoogleResourceManagerCapabilityConfigA.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google-beta.googleResourceManagerCapabilityConfig.GoogleResourceManagerCapabilityConfigA.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-google-beta.googleResourceManagerCapabilityConfig.GoogleResourceManagerCapabilityConfigA.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleResourceManagerCapabilityConfig.GoogleResourceManagerCapabilityConfigA.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktn/provider-google-beta.googleResourceManagerCapabilityConfig.GoogleResourceManagerCapabilityConfigA.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google-beta.googleResourceManagerCapabilityConfig.GoogleResourceManagerCapabilityConfigA.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_resource_manager_capability_config#create GoogleResourceManagerCapabilityConfigA#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google-beta.googleResourceManagerCapabilityConfig.GoogleResourceManagerCapabilityConfigA.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_resource_manager_capability_config#delete GoogleResourceManagerCapabilityConfigA#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google-beta.googleResourceManagerCapabilityConfig.GoogleResourceManagerCapabilityConfigA.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_resource_manager_capability_config#update GoogleResourceManagerCapabilityConfigA#update}.

---

##### `reset_deletion_policy` <a name="reset_deletion_policy" id="@cdktn/provider-google-beta.googleResourceManagerCapabilityConfig.GoogleResourceManagerCapabilityConfigA.resetDeletionPolicy"></a>

```python
def reset_deletion_policy() -> None
```

##### `reset_display_name` <a name="reset_display_name" id="@cdktn/provider-google-beta.googleResourceManagerCapabilityConfig.GoogleResourceManagerCapabilityConfigA.resetDisplayName"></a>

```python
def reset_display_name() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktn/provider-google-beta.googleResourceManagerCapabilityConfig.GoogleResourceManagerCapabilityConfigA.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_management_project` <a name="reset_management_project" id="@cdktn/provider-google-beta.googleResourceManagerCapabilityConfig.GoogleResourceManagerCapabilityConfigA.resetManagementProject"></a>

```python
def reset_management_project() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktn/provider-google-beta.googleResourceManagerCapabilityConfig.GoogleResourceManagerCapabilityConfigA.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerCapabilityConfig.GoogleResourceManagerCapabilityConfigA.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerCapabilityConfig.GoogleResourceManagerCapabilityConfigA.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerCapabilityConfig.GoogleResourceManagerCapabilityConfigA.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerCapabilityConfig.GoogleResourceManagerCapabilityConfigA.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a GoogleResourceManagerCapabilityConfigA resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-google-beta.googleResourceManagerCapabilityConfig.GoogleResourceManagerCapabilityConfigA.isConstruct"></a>

```python
from cdktn_provider_google_beta import google_resource_manager_capability_config

googleResourceManagerCapabilityConfig.GoogleResourceManagerCapabilityConfigA.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleResourceManagerCapabilityConfig.GoogleResourceManagerCapabilityConfigA.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-google-beta.googleResourceManagerCapabilityConfig.GoogleResourceManagerCapabilityConfigA.isTerraformElement"></a>

```python
from cdktn_provider_google_beta import google_resource_manager_capability_config

googleResourceManagerCapabilityConfig.GoogleResourceManagerCapabilityConfigA.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleResourceManagerCapabilityConfig.GoogleResourceManagerCapabilityConfigA.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-google-beta.googleResourceManagerCapabilityConfig.GoogleResourceManagerCapabilityConfigA.isTerraformResource"></a>

```python
from cdktn_provider_google_beta import google_resource_manager_capability_config

googleResourceManagerCapabilityConfig.GoogleResourceManagerCapabilityConfigA.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleResourceManagerCapabilityConfig.GoogleResourceManagerCapabilityConfigA.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-google-beta.googleResourceManagerCapabilityConfig.GoogleResourceManagerCapabilityConfigA.generateConfigForImport"></a>

```python
from cdktn_provider_google_beta import google_resource_manager_capability_config

googleResourceManagerCapabilityConfig.GoogleResourceManagerCapabilityConfigA.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a GoogleResourceManagerCapabilityConfigA resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleResourceManagerCapabilityConfig.GoogleResourceManagerCapabilityConfigA.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-google-beta.googleResourceManagerCapabilityConfig.GoogleResourceManagerCapabilityConfigA.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the GoogleResourceManagerCapabilityConfigA to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-google-beta.googleResourceManagerCapabilityConfig.GoogleResourceManagerCapabilityConfigA.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing GoogleResourceManagerCapabilityConfigA that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_resource_manager_capability_config#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleResourceManagerCapabilityConfig.GoogleResourceManagerCapabilityConfigA.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the GoogleResourceManagerCapabilityConfigA to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerCapabilityConfig.GoogleResourceManagerCapabilityConfigA.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerCapabilityConfig.GoogleResourceManagerCapabilityConfigA.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerCapabilityConfig.GoogleResourceManagerCapabilityConfigA.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerCapabilityConfig.GoogleResourceManagerCapabilityConfigA.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerCapabilityConfig.GoogleResourceManagerCapabilityConfigA.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerCapabilityConfig.GoogleResourceManagerCapabilityConfigA.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerCapabilityConfig.GoogleResourceManagerCapabilityConfigA.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerCapabilityConfig.GoogleResourceManagerCapabilityConfigA.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerCapabilityConfig.GoogleResourceManagerCapabilityConfigA.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerCapabilityConfig.GoogleResourceManagerCapabilityConfigA.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerCapabilityConfig.GoogleResourceManagerCapabilityConfigA.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerCapabilityConfig.GoogleResourceManagerCapabilityConfigA.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerCapabilityConfig.GoogleResourceManagerCapabilityConfigA.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerCapabilityConfig.GoogleResourceManagerCapabilityConfigA.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerCapabilityConfig.GoogleResourceManagerCapabilityConfigA.property.createTime">create_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerCapabilityConfig.GoogleResourceManagerCapabilityConfigA.property.etag">etag</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerCapabilityConfig.GoogleResourceManagerCapabilityConfigA.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerCapabilityConfig.GoogleResourceManagerCapabilityConfigA.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerCapabilityConfig.GoogleResourceManagerCapabilityConfigA.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleResourceManagerCapabilityConfig.GoogleResourceManagerCapabilityConfigTimeoutsOutputReference">GoogleResourceManagerCapabilityConfigTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerCapabilityConfig.GoogleResourceManagerCapabilityConfigA.property.updateTime">update_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerCapabilityConfig.GoogleResourceManagerCapabilityConfigA.property.capabilityConfigIdInput">capability_config_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerCapabilityConfig.GoogleResourceManagerCapabilityConfigA.property.deletionPolicyInput">deletion_policy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerCapabilityConfig.GoogleResourceManagerCapabilityConfigA.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerCapabilityConfig.GoogleResourceManagerCapabilityConfigA.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerCapabilityConfig.GoogleResourceManagerCapabilityConfigA.property.managementProjectInput">management_project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerCapabilityConfig.GoogleResourceManagerCapabilityConfigA.property.parentInput">parent_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerCapabilityConfig.GoogleResourceManagerCapabilityConfigA.property.timeoutsInput">timeouts_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleResourceManagerCapabilityConfig.GoogleResourceManagerCapabilityConfigTimeouts">GoogleResourceManagerCapabilityConfigTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerCapabilityConfig.GoogleResourceManagerCapabilityConfigA.property.typesInput">types_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerCapabilityConfig.GoogleResourceManagerCapabilityConfigA.property.capabilityConfigId">capability_config_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerCapabilityConfig.GoogleResourceManagerCapabilityConfigA.property.deletionPolicy">deletion_policy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerCapabilityConfig.GoogleResourceManagerCapabilityConfigA.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerCapabilityConfig.GoogleResourceManagerCapabilityConfigA.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerCapabilityConfig.GoogleResourceManagerCapabilityConfigA.property.managementProject">management_project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerCapabilityConfig.GoogleResourceManagerCapabilityConfigA.property.parent">parent</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerCapabilityConfig.GoogleResourceManagerCapabilityConfigA.property.types">types</a></code> | <code>typing.List[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google-beta.googleResourceManagerCapabilityConfig.GoogleResourceManagerCapabilityConfigA.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-google-beta.googleResourceManagerCapabilityConfig.GoogleResourceManagerCapabilityConfigA.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleResourceManagerCapabilityConfig.GoogleResourceManagerCapabilityConfigA.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-google-beta.googleResourceManagerCapabilityConfig.GoogleResourceManagerCapabilityConfigA.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-google-beta.googleResourceManagerCapabilityConfig.GoogleResourceManagerCapabilityConfigA.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-google-beta.googleResourceManagerCapabilityConfig.GoogleResourceManagerCapabilityConfigA.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-google-beta.googleResourceManagerCapabilityConfig.GoogleResourceManagerCapabilityConfigA.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleResourceManagerCapabilityConfig.GoogleResourceManagerCapabilityConfigA.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleResourceManagerCapabilityConfig.GoogleResourceManagerCapabilityConfigA.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google-beta.googleResourceManagerCapabilityConfig.GoogleResourceManagerCapabilityConfigA.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google-beta.googleResourceManagerCapabilityConfig.GoogleResourceManagerCapabilityConfigA.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleResourceManagerCapabilityConfig.GoogleResourceManagerCapabilityConfigA.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleResourceManagerCapabilityConfig.GoogleResourceManagerCapabilityConfigA.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleResourceManagerCapabilityConfig.GoogleResourceManagerCapabilityConfigA.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `create_time`<sup>Required</sup> <a name="create_time" id="@cdktn/provider-google-beta.googleResourceManagerCapabilityConfig.GoogleResourceManagerCapabilityConfigA.property.createTime"></a>

```python
create_time: str
```

- *Type:* str

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktn/provider-google-beta.googleResourceManagerCapabilityConfig.GoogleResourceManagerCapabilityConfigA.property.etag"></a>

```python
etag: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleResourceManagerCapabilityConfig.GoogleResourceManagerCapabilityConfigA.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-google-beta.googleResourceManagerCapabilityConfig.GoogleResourceManagerCapabilityConfigA.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleResourceManagerCapabilityConfig.GoogleResourceManagerCapabilityConfigA.property.timeouts"></a>

```python
timeouts: GoogleResourceManagerCapabilityConfigTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleResourceManagerCapabilityConfig.GoogleResourceManagerCapabilityConfigTimeoutsOutputReference">GoogleResourceManagerCapabilityConfigTimeoutsOutputReference</a>

---

##### `update_time`<sup>Required</sup> <a name="update_time" id="@cdktn/provider-google-beta.googleResourceManagerCapabilityConfig.GoogleResourceManagerCapabilityConfigA.property.updateTime"></a>

```python
update_time: str
```

- *Type:* str

---

##### `capability_config_id_input`<sup>Optional</sup> <a name="capability_config_id_input" id="@cdktn/provider-google-beta.googleResourceManagerCapabilityConfig.GoogleResourceManagerCapabilityConfigA.property.capabilityConfigIdInput"></a>

```python
capability_config_id_input: str
```

- *Type:* str

---

##### `deletion_policy_input`<sup>Optional</sup> <a name="deletion_policy_input" id="@cdktn/provider-google-beta.googleResourceManagerCapabilityConfig.GoogleResourceManagerCapabilityConfigA.property.deletionPolicyInput"></a>

```python
deletion_policy_input: str
```

- *Type:* str

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="@cdktn/provider-google-beta.googleResourceManagerCapabilityConfig.GoogleResourceManagerCapabilityConfigA.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-google-beta.googleResourceManagerCapabilityConfig.GoogleResourceManagerCapabilityConfigA.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `management_project_input`<sup>Optional</sup> <a name="management_project_input" id="@cdktn/provider-google-beta.googleResourceManagerCapabilityConfig.GoogleResourceManagerCapabilityConfigA.property.managementProjectInput"></a>

```python
management_project_input: str
```

- *Type:* str

---

##### `parent_input`<sup>Optional</sup> <a name="parent_input" id="@cdktn/provider-google-beta.googleResourceManagerCapabilityConfig.GoogleResourceManagerCapabilityConfigA.property.parentInput"></a>

```python
parent_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktn/provider-google-beta.googleResourceManagerCapabilityConfig.GoogleResourceManagerCapabilityConfigA.property.timeoutsInput"></a>

```python
timeouts_input: IResolvable | GoogleResourceManagerCapabilityConfigTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleResourceManagerCapabilityConfig.GoogleResourceManagerCapabilityConfigTimeouts">GoogleResourceManagerCapabilityConfigTimeouts</a>

---

##### `types_input`<sup>Optional</sup> <a name="types_input" id="@cdktn/provider-google-beta.googleResourceManagerCapabilityConfig.GoogleResourceManagerCapabilityConfigA.property.typesInput"></a>

```python
types_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `capability_config_id`<sup>Required</sup> <a name="capability_config_id" id="@cdktn/provider-google-beta.googleResourceManagerCapabilityConfig.GoogleResourceManagerCapabilityConfigA.property.capabilityConfigId"></a>

```python
capability_config_id: str
```

- *Type:* str

---

##### `deletion_policy`<sup>Required</sup> <a name="deletion_policy" id="@cdktn/provider-google-beta.googleResourceManagerCapabilityConfig.GoogleResourceManagerCapabilityConfigA.property.deletionPolicy"></a>

```python
deletion_policy: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktn/provider-google-beta.googleResourceManagerCapabilityConfig.GoogleResourceManagerCapabilityConfigA.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleResourceManagerCapabilityConfig.GoogleResourceManagerCapabilityConfigA.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `management_project`<sup>Required</sup> <a name="management_project" id="@cdktn/provider-google-beta.googleResourceManagerCapabilityConfig.GoogleResourceManagerCapabilityConfigA.property.managementProject"></a>

```python
management_project: str
```

- *Type:* str

---

##### `parent`<sup>Required</sup> <a name="parent" id="@cdktn/provider-google-beta.googleResourceManagerCapabilityConfig.GoogleResourceManagerCapabilityConfigA.property.parent"></a>

```python
parent: str
```

- *Type:* str

---

##### `types`<sup>Required</sup> <a name="types" id="@cdktn/provider-google-beta.googleResourceManagerCapabilityConfig.GoogleResourceManagerCapabilityConfigA.property.types"></a>

```python
types: typing.List[str]
```

- *Type:* typing.List[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerCapabilityConfig.GoogleResourceManagerCapabilityConfigA.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google-beta.googleResourceManagerCapabilityConfig.GoogleResourceManagerCapabilityConfigA.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleResourceManagerCapabilityConfigAConfig <a name="GoogleResourceManagerCapabilityConfigAConfig" id="@cdktn/provider-google-beta.googleResourceManagerCapabilityConfig.GoogleResourceManagerCapabilityConfigAConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleResourceManagerCapabilityConfig.GoogleResourceManagerCapabilityConfigAConfig.Initializer"></a>

```python
from cdktn_provider_google_beta import google_resource_manager_capability_config

googleResourceManagerCapabilityConfig.GoogleResourceManagerCapabilityConfigAConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  capability_config_id: str,
  parent: str,
  types: typing.List[str],
  deletion_policy: str = None,
  display_name: str = None,
  id: str = None,
  management_project: str = None,
  timeouts: GoogleResourceManagerCapabilityConfigTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerCapabilityConfig.GoogleResourceManagerCapabilityConfigAConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerCapabilityConfig.GoogleResourceManagerCapabilityConfigAConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerCapabilityConfig.GoogleResourceManagerCapabilityConfigAConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerCapabilityConfig.GoogleResourceManagerCapabilityConfigAConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerCapabilityConfig.GoogleResourceManagerCapabilityConfigAConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerCapabilityConfig.GoogleResourceManagerCapabilityConfigAConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerCapabilityConfig.GoogleResourceManagerCapabilityConfigAConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerCapabilityConfig.GoogleResourceManagerCapabilityConfigAConfig.property.capabilityConfigId">capability_config_id</a></code> | <code>str</code> | User-specified identifier of the capability config. Must be 6 to 30 characters, and contain only lowercase letters, numbers, and hyphens. |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerCapabilityConfig.GoogleResourceManagerCapabilityConfigAConfig.property.parent">parent</a></code> | <code>str</code> | The parent resource in which to create the capability config. Format: 'folders/{folder_id}', 'organizations/{organization_id}', or 'projects/{project_number}'. |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerCapabilityConfig.GoogleResourceManagerCapabilityConfigAConfig.property.types">types</a></code> | <code>typing.List[str]</code> | The capabilities enabled for the resource and its sub-tree. Possible values: "AGENT_MANAGEMENT". |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerCapabilityConfig.GoogleResourceManagerCapabilityConfigAConfig.property.deletionPolicy">deletion_policy</a></code> | <code>str</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerCapabilityConfig.GoogleResourceManagerCapabilityConfigAConfig.property.displayName">display_name</a></code> | <code>str</code> | User-defined name for the capability config. Must be between 4 and 30 characters. |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerCapabilityConfig.GoogleResourceManagerCapabilityConfigAConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_resource_manager_capability_config#id GoogleResourceManagerCapabilityConfigA#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerCapabilityConfig.GoogleResourceManagerCapabilityConfigAConfig.property.managementProject">management_project</a></code> | <code>str</code> | The management project for the capability config. |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerCapabilityConfig.GoogleResourceManagerCapabilityConfigAConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleResourceManagerCapabilityConfig.GoogleResourceManagerCapabilityConfigTimeouts">GoogleResourceManagerCapabilityConfigTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleResourceManagerCapabilityConfig.GoogleResourceManagerCapabilityConfigAConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleResourceManagerCapabilityConfig.GoogleResourceManagerCapabilityConfigAConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google-beta.googleResourceManagerCapabilityConfig.GoogleResourceManagerCapabilityConfigAConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google-beta.googleResourceManagerCapabilityConfig.GoogleResourceManagerCapabilityConfigAConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleResourceManagerCapabilityConfig.GoogleResourceManagerCapabilityConfigAConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleResourceManagerCapabilityConfig.GoogleResourceManagerCapabilityConfigAConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleResourceManagerCapabilityConfig.GoogleResourceManagerCapabilityConfigAConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `capability_config_id`<sup>Required</sup> <a name="capability_config_id" id="@cdktn/provider-google-beta.googleResourceManagerCapabilityConfig.GoogleResourceManagerCapabilityConfigAConfig.property.capabilityConfigId"></a>

```python
capability_config_id: str
```

- *Type:* str

User-specified identifier of the capability config. Must be 6 to 30 characters, and contain only lowercase letters, numbers, and hyphens.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_resource_manager_capability_config#capability_config_id GoogleResourceManagerCapabilityConfigA#capability_config_id}

---

##### `parent`<sup>Required</sup> <a name="parent" id="@cdktn/provider-google-beta.googleResourceManagerCapabilityConfig.GoogleResourceManagerCapabilityConfigAConfig.property.parent"></a>

```python
parent: str
```

- *Type:* str

The parent resource in which to create the capability config. Format: 'folders/{folder_id}', 'organizations/{organization_id}', or 'projects/{project_number}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_resource_manager_capability_config#parent GoogleResourceManagerCapabilityConfigA#parent}

---

##### `types`<sup>Required</sup> <a name="types" id="@cdktn/provider-google-beta.googleResourceManagerCapabilityConfig.GoogleResourceManagerCapabilityConfigAConfig.property.types"></a>

```python
types: typing.List[str]
```

- *Type:* typing.List[str]

The capabilities enabled for the resource and its sub-tree. Possible values: "AGENT_MANAGEMENT".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_resource_manager_capability_config#types GoogleResourceManagerCapabilityConfigA#types}

---

##### `deletion_policy`<sup>Optional</sup> <a name="deletion_policy" id="@cdktn/provider-google-beta.googleResourceManagerCapabilityConfig.GoogleResourceManagerCapabilityConfigAConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_resource_manager_capability_config#deletion_policy GoogleResourceManagerCapabilityConfigA#deletion_policy}

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="@cdktn/provider-google-beta.googleResourceManagerCapabilityConfig.GoogleResourceManagerCapabilityConfigAConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

User-defined name for the capability config. Must be between 4 and 30 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_resource_manager_capability_config#display_name GoogleResourceManagerCapabilityConfigA#display_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleResourceManagerCapabilityConfig.GoogleResourceManagerCapabilityConfigAConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_resource_manager_capability_config#id GoogleResourceManagerCapabilityConfigA#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `management_project`<sup>Optional</sup> <a name="management_project" id="@cdktn/provider-google-beta.googleResourceManagerCapabilityConfig.GoogleResourceManagerCapabilityConfigAConfig.property.managementProject"></a>

```python
management_project: str
```

- *Type:* str

The management project for the capability config.

If unspecified, a project will be created automatically.
Must be specified for project-scoped capability config.
Format: 'projects/{project_number}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_resource_manager_capability_config#management_project GoogleResourceManagerCapabilityConfigA#management_project}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleResourceManagerCapabilityConfig.GoogleResourceManagerCapabilityConfigAConfig.property.timeouts"></a>

```python
timeouts: GoogleResourceManagerCapabilityConfigTimeouts
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleResourceManagerCapabilityConfig.GoogleResourceManagerCapabilityConfigTimeouts">GoogleResourceManagerCapabilityConfigTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_resource_manager_capability_config#timeouts GoogleResourceManagerCapabilityConfigA#timeouts}

---

### GoogleResourceManagerCapabilityConfigTimeouts <a name="GoogleResourceManagerCapabilityConfigTimeouts" id="@cdktn/provider-google-beta.googleResourceManagerCapabilityConfig.GoogleResourceManagerCapabilityConfigTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleResourceManagerCapabilityConfig.GoogleResourceManagerCapabilityConfigTimeouts.Initializer"></a>

```python
from cdktn_provider_google_beta import google_resource_manager_capability_config

googleResourceManagerCapabilityConfig.GoogleResourceManagerCapabilityConfigTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerCapabilityConfig.GoogleResourceManagerCapabilityConfigTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_resource_manager_capability_config#create GoogleResourceManagerCapabilityConfigA#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerCapabilityConfig.GoogleResourceManagerCapabilityConfigTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_resource_manager_capability_config#delete GoogleResourceManagerCapabilityConfigA#delete}. |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerCapabilityConfig.GoogleResourceManagerCapabilityConfigTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_resource_manager_capability_config#update GoogleResourceManagerCapabilityConfigA#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google-beta.googleResourceManagerCapabilityConfig.GoogleResourceManagerCapabilityConfigTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_resource_manager_capability_config#create GoogleResourceManagerCapabilityConfigA#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google-beta.googleResourceManagerCapabilityConfig.GoogleResourceManagerCapabilityConfigTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_resource_manager_capability_config#delete GoogleResourceManagerCapabilityConfigA#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google-beta.googleResourceManagerCapabilityConfig.GoogleResourceManagerCapabilityConfigTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_resource_manager_capability_config#update GoogleResourceManagerCapabilityConfigA#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleResourceManagerCapabilityConfigTimeoutsOutputReference <a name="GoogleResourceManagerCapabilityConfigTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleResourceManagerCapabilityConfig.GoogleResourceManagerCapabilityConfigTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleResourceManagerCapabilityConfig.GoogleResourceManagerCapabilityConfigTimeoutsOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_resource_manager_capability_config

googleResourceManagerCapabilityConfig.GoogleResourceManagerCapabilityConfigTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerCapabilityConfig.GoogleResourceManagerCapabilityConfigTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerCapabilityConfig.GoogleResourceManagerCapabilityConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleResourceManagerCapabilityConfig.GoogleResourceManagerCapabilityConfigTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleResourceManagerCapabilityConfig.GoogleResourceManagerCapabilityConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerCapabilityConfig.GoogleResourceManagerCapabilityConfigTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerCapabilityConfig.GoogleResourceManagerCapabilityConfigTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerCapabilityConfig.GoogleResourceManagerCapabilityConfigTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerCapabilityConfig.GoogleResourceManagerCapabilityConfigTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerCapabilityConfig.GoogleResourceManagerCapabilityConfigTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerCapabilityConfig.GoogleResourceManagerCapabilityConfigTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerCapabilityConfig.GoogleResourceManagerCapabilityConfigTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerCapabilityConfig.GoogleResourceManagerCapabilityConfigTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerCapabilityConfig.GoogleResourceManagerCapabilityConfigTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerCapabilityConfig.GoogleResourceManagerCapabilityConfigTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerCapabilityConfig.GoogleResourceManagerCapabilityConfigTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerCapabilityConfig.GoogleResourceManagerCapabilityConfigTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerCapabilityConfig.GoogleResourceManagerCapabilityConfigTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerCapabilityConfig.GoogleResourceManagerCapabilityConfigTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerCapabilityConfig.GoogleResourceManagerCapabilityConfigTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerCapabilityConfig.GoogleResourceManagerCapabilityConfigTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleResourceManagerCapabilityConfig.GoogleResourceManagerCapabilityConfigTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleResourceManagerCapabilityConfig.GoogleResourceManagerCapabilityConfigTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleResourceManagerCapabilityConfig.GoogleResourceManagerCapabilityConfigTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleResourceManagerCapabilityConfig.GoogleResourceManagerCapabilityConfigTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleResourceManagerCapabilityConfig.GoogleResourceManagerCapabilityConfigTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleResourceManagerCapabilityConfig.GoogleResourceManagerCapabilityConfigTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleResourceManagerCapabilityConfig.GoogleResourceManagerCapabilityConfigTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleResourceManagerCapabilityConfig.GoogleResourceManagerCapabilityConfigTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleResourceManagerCapabilityConfig.GoogleResourceManagerCapabilityConfigTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleResourceManagerCapabilityConfig.GoogleResourceManagerCapabilityConfigTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleResourceManagerCapabilityConfig.GoogleResourceManagerCapabilityConfigTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleResourceManagerCapabilityConfig.GoogleResourceManagerCapabilityConfigTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleResourceManagerCapabilityConfig.GoogleResourceManagerCapabilityConfigTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleResourceManagerCapabilityConfig.GoogleResourceManagerCapabilityConfigTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleResourceManagerCapabilityConfig.GoogleResourceManagerCapabilityConfigTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleResourceManagerCapabilityConfig.GoogleResourceManagerCapabilityConfigTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleResourceManagerCapabilityConfig.GoogleResourceManagerCapabilityConfigTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleResourceManagerCapabilityConfig.GoogleResourceManagerCapabilityConfigTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleResourceManagerCapabilityConfig.GoogleResourceManagerCapabilityConfigTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleResourceManagerCapabilityConfig.GoogleResourceManagerCapabilityConfigTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleResourceManagerCapabilityConfig.GoogleResourceManagerCapabilityConfigTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleResourceManagerCapabilityConfig.GoogleResourceManagerCapabilityConfigTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleResourceManagerCapabilityConfig.GoogleResourceManagerCapabilityConfigTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleResourceManagerCapabilityConfig.GoogleResourceManagerCapabilityConfigTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktn/provider-google-beta.googleResourceManagerCapabilityConfig.GoogleResourceManagerCapabilityConfigTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktn/provider-google-beta.googleResourceManagerCapabilityConfig.GoogleResourceManagerCapabilityConfigTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktn/provider-google-beta.googleResourceManagerCapabilityConfig.GoogleResourceManagerCapabilityConfigTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerCapabilityConfig.GoogleResourceManagerCapabilityConfigTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerCapabilityConfig.GoogleResourceManagerCapabilityConfigTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerCapabilityConfig.GoogleResourceManagerCapabilityConfigTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerCapabilityConfig.GoogleResourceManagerCapabilityConfigTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerCapabilityConfig.GoogleResourceManagerCapabilityConfigTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerCapabilityConfig.GoogleResourceManagerCapabilityConfigTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerCapabilityConfig.GoogleResourceManagerCapabilityConfigTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerCapabilityConfig.GoogleResourceManagerCapabilityConfigTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerCapabilityConfig.GoogleResourceManagerCapabilityConfigTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleResourceManagerCapabilityConfig.GoogleResourceManagerCapabilityConfigTimeouts">GoogleResourceManagerCapabilityConfigTimeouts</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleResourceManagerCapabilityConfig.GoogleResourceManagerCapabilityConfigTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleResourceManagerCapabilityConfig.GoogleResourceManagerCapabilityConfigTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktn/provider-google-beta.googleResourceManagerCapabilityConfig.GoogleResourceManagerCapabilityConfigTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktn/provider-google-beta.googleResourceManagerCapabilityConfig.GoogleResourceManagerCapabilityConfigTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktn/provider-google-beta.googleResourceManagerCapabilityConfig.GoogleResourceManagerCapabilityConfigTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google-beta.googleResourceManagerCapabilityConfig.GoogleResourceManagerCapabilityConfigTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google-beta.googleResourceManagerCapabilityConfig.GoogleResourceManagerCapabilityConfigTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google-beta.googleResourceManagerCapabilityConfig.GoogleResourceManagerCapabilityConfigTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleResourceManagerCapabilityConfig.GoogleResourceManagerCapabilityConfigTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | GoogleResourceManagerCapabilityConfigTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleResourceManagerCapabilityConfig.GoogleResourceManagerCapabilityConfigTimeouts">GoogleResourceManagerCapabilityConfigTimeouts</a>

---



