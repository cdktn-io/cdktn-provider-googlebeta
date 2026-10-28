# `googleResourceManagerBoundaryConfig` Submodule <a name="`googleResourceManagerBoundaryConfig` Submodule" id="@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleResourceManagerBoundaryConfigA <a name="GoogleResourceManagerBoundaryConfigA" id="@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigA"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_resource_manager_boundary_config google_resource_manager_boundary_config}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigA.Initializer"></a>

```python
from cdktn_provider_google_beta import google_resource_manager_boundary_config

googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigA(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  parent: str,
  tag_key: str,
  deletion_policy: str = None,
  id: str = None,
  timeouts: GoogleResourceManagerBoundaryConfigTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigA.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigA.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigA.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigA.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigA.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigA.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigA.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigA.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigA.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigA.Initializer.parameter.parent">parent</a></code> | <code>str</code> | The parent resource whose BoundaryConfig this is. Must be of the form 'organizations/{organization_id}' or 'folders/{folder_id}'. |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigA.Initializer.parameter.tagKey">tag_key</a></code> | <code>str</code> | The namespaced name of the partitioning tag key, in the form '{parent_id}/{tag_key_short_name}', for example '123456789012/env'. |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigA.Initializer.parameter.deletionPolicy">deletion_policy</a></code> | <code>str</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigA.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_resource_manager_boundary_config#id GoogleResourceManagerBoundaryConfigA#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigA.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigTimeouts">GoogleResourceManagerBoundaryConfigTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigA.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigA.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigA.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigA.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigA.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigA.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigA.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigA.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigA.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `parent`<sup>Required</sup> <a name="parent" id="@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigA.Initializer.parameter.parent"></a>

- *Type:* str

The parent resource whose BoundaryConfig this is. Must be of the form 'organizations/{organization_id}' or 'folders/{folder_id}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_resource_manager_boundary_config#parent GoogleResourceManagerBoundaryConfigA#parent}

---

##### `tag_key`<sup>Required</sup> <a name="tag_key" id="@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigA.Initializer.parameter.tagKey"></a>

- *Type:* str

The namespaced name of the partitioning tag key, in the form '{parent_id}/{tag_key_short_name}', for example '123456789012/env'.

Boundaries under this parent filter projects on this tag key.

The service also accepts the 'tagKeys/{numeric_id}' form here, but
Boundaries accept only the namespaced form and are validated against this
value verbatim. Storing the 'tagKeys/{numeric_id}' form therefore makes
every subsequent Boundary create fail with 'FAILED_PRECONDITION'. Always
use the namespaced form, for example
'google_tags_tag_key.example.namespaced_name'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_resource_manager_boundary_config#tag_key GoogleResourceManagerBoundaryConfigA#tag_key}

---

##### `deletion_policy`<sup>Optional</sup> <a name="deletion_policy" id="@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigA.Initializer.parameter.deletionPolicy"></a>

- *Type:* str

Whether Terraform will be prevented from destroying the instance.

Defaults to "DELETE".
When a 'terraform destroy' or 'terraform apply' would delete the instance,
the command will fail if this field is set to "PREVENT" in Terraform state.
When set to "ABANDON", the command will remove the resource from Terraform
management without updating or deleting the resource in the API.
When set to "DELETE", deleting the resource is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_resource_manager_boundary_config#deletion_policy GoogleResourceManagerBoundaryConfigA#deletion_policy}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigA.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_resource_manager_boundary_config#id GoogleResourceManagerBoundaryConfigA#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigA.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigTimeouts">GoogleResourceManagerBoundaryConfigTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_resource_manager_boundary_config#timeouts GoogleResourceManagerBoundaryConfigA#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigA.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigA.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigA.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigA.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigA.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigA.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigA.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigA.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigA.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigA.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigA.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigA.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigA.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigA.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigA.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigA.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigA.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigA.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigA.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigA.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigA.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigA.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigA.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigA.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigA.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigA.resetDeletionPolicy">reset_deletion_policy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigA.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigA.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigA.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigA.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigA.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigA.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigA.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigA.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigA.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigA.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigA.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigA.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigA.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigA.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigA.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigA.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigA.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigA.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigA.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigA.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigA.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigA.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigA.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigA.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigA.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigA.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigA.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigA.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigA.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigA.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigA.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigA.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigA.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigA.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigA.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigA.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigA.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigA.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigA.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigA.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigA.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigA.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigA.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigA.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigA.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigA.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigA.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigA.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigA.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_resource_manager_boundary_config#create GoogleResourceManagerBoundaryConfigA#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigA.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_resource_manager_boundary_config#delete GoogleResourceManagerBoundaryConfigA#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigA.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_resource_manager_boundary_config#update GoogleResourceManagerBoundaryConfigA#update}.

---

##### `reset_deletion_policy` <a name="reset_deletion_policy" id="@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigA.resetDeletionPolicy"></a>

```python
def reset_deletion_policy() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigA.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigA.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigA.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigA.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigA.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigA.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a GoogleResourceManagerBoundaryConfigA resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigA.isConstruct"></a>

```python
from cdktn_provider_google_beta import google_resource_manager_boundary_config

googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigA.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigA.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigA.isTerraformElement"></a>

```python
from cdktn_provider_google_beta import google_resource_manager_boundary_config

googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigA.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigA.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigA.isTerraformResource"></a>

```python
from cdktn_provider_google_beta import google_resource_manager_boundary_config

googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigA.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigA.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigA.generateConfigForImport"></a>

```python
from cdktn_provider_google_beta import google_resource_manager_boundary_config

googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigA.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a GoogleResourceManagerBoundaryConfigA resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigA.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigA.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the GoogleResourceManagerBoundaryConfigA to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigA.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing GoogleResourceManagerBoundaryConfigA that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_resource_manager_boundary_config#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigA.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the GoogleResourceManagerBoundaryConfigA to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigA.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigA.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigA.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigA.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigA.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigA.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigA.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigA.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigA.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigA.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigA.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigA.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigA.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigA.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigA.property.etag">etag</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigA.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigA.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigTimeoutsOutputReference">GoogleResourceManagerBoundaryConfigTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigA.property.updateTime">update_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigA.property.deletionPolicyInput">deletion_policy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigA.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigA.property.parentInput">parent_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigA.property.tagKeyInput">tag_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigA.property.timeoutsInput">timeouts_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigTimeouts">GoogleResourceManagerBoundaryConfigTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigA.property.deletionPolicy">deletion_policy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigA.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigA.property.parent">parent</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigA.property.tagKey">tag_key</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigA.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigA.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigA.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigA.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigA.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigA.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigA.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigA.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigA.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigA.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigA.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigA.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigA.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigA.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigA.property.etag"></a>

```python
etag: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigA.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigA.property.timeouts"></a>

```python
timeouts: GoogleResourceManagerBoundaryConfigTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigTimeoutsOutputReference">GoogleResourceManagerBoundaryConfigTimeoutsOutputReference</a>

---

##### `update_time`<sup>Required</sup> <a name="update_time" id="@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigA.property.updateTime"></a>

```python
update_time: str
```

- *Type:* str

---

##### `deletion_policy_input`<sup>Optional</sup> <a name="deletion_policy_input" id="@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigA.property.deletionPolicyInput"></a>

```python
deletion_policy_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigA.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `parent_input`<sup>Optional</sup> <a name="parent_input" id="@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigA.property.parentInput"></a>

```python
parent_input: str
```

- *Type:* str

---

##### `tag_key_input`<sup>Optional</sup> <a name="tag_key_input" id="@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigA.property.tagKeyInput"></a>

```python
tag_key_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigA.property.timeoutsInput"></a>

```python
timeouts_input: IResolvable | GoogleResourceManagerBoundaryConfigTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigTimeouts">GoogleResourceManagerBoundaryConfigTimeouts</a>

---

##### `deletion_policy`<sup>Required</sup> <a name="deletion_policy" id="@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigA.property.deletionPolicy"></a>

```python
deletion_policy: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigA.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `parent`<sup>Required</sup> <a name="parent" id="@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigA.property.parent"></a>

```python
parent: str
```

- *Type:* str

---

##### `tag_key`<sup>Required</sup> <a name="tag_key" id="@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigA.property.tagKey"></a>

```python
tag_key: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigA.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigA.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleResourceManagerBoundaryConfigAConfig <a name="GoogleResourceManagerBoundaryConfigAConfig" id="@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigAConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigAConfig.Initializer"></a>

```python
from cdktn_provider_google_beta import google_resource_manager_boundary_config

googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigAConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  parent: str,
  tag_key: str,
  deletion_policy: str = None,
  id: str = None,
  timeouts: GoogleResourceManagerBoundaryConfigTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigAConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigAConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigAConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigAConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigAConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigAConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigAConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigAConfig.property.parent">parent</a></code> | <code>str</code> | The parent resource whose BoundaryConfig this is. Must be of the form 'organizations/{organization_id}' or 'folders/{folder_id}'. |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigAConfig.property.tagKey">tag_key</a></code> | <code>str</code> | The namespaced name of the partitioning tag key, in the form '{parent_id}/{tag_key_short_name}', for example '123456789012/env'. |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigAConfig.property.deletionPolicy">deletion_policy</a></code> | <code>str</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigAConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_resource_manager_boundary_config#id GoogleResourceManagerBoundaryConfigA#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigAConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigTimeouts">GoogleResourceManagerBoundaryConfigTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigAConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigAConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigAConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigAConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigAConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigAConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigAConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `parent`<sup>Required</sup> <a name="parent" id="@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigAConfig.property.parent"></a>

```python
parent: str
```

- *Type:* str

The parent resource whose BoundaryConfig this is. Must be of the form 'organizations/{organization_id}' or 'folders/{folder_id}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_resource_manager_boundary_config#parent GoogleResourceManagerBoundaryConfigA#parent}

---

##### `tag_key`<sup>Required</sup> <a name="tag_key" id="@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigAConfig.property.tagKey"></a>

```python
tag_key: str
```

- *Type:* str

The namespaced name of the partitioning tag key, in the form '{parent_id}/{tag_key_short_name}', for example '123456789012/env'.

Boundaries under this parent filter projects on this tag key.

The service also accepts the 'tagKeys/{numeric_id}' form here, but
Boundaries accept only the namespaced form and are validated against this
value verbatim. Storing the 'tagKeys/{numeric_id}' form therefore makes
every subsequent Boundary create fail with 'FAILED_PRECONDITION'. Always
use the namespaced form, for example
'google_tags_tag_key.example.namespaced_name'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_resource_manager_boundary_config#tag_key GoogleResourceManagerBoundaryConfigA#tag_key}

---

##### `deletion_policy`<sup>Optional</sup> <a name="deletion_policy" id="@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigAConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_resource_manager_boundary_config#deletion_policy GoogleResourceManagerBoundaryConfigA#deletion_policy}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigAConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_resource_manager_boundary_config#id GoogleResourceManagerBoundaryConfigA#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigAConfig.property.timeouts"></a>

```python
timeouts: GoogleResourceManagerBoundaryConfigTimeouts
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigTimeouts">GoogleResourceManagerBoundaryConfigTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_resource_manager_boundary_config#timeouts GoogleResourceManagerBoundaryConfigA#timeouts}

---

### GoogleResourceManagerBoundaryConfigTimeouts <a name="GoogleResourceManagerBoundaryConfigTimeouts" id="@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigTimeouts.Initializer"></a>

```python
from cdktn_provider_google_beta import google_resource_manager_boundary_config

googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_resource_manager_boundary_config#create GoogleResourceManagerBoundaryConfigA#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_resource_manager_boundary_config#delete GoogleResourceManagerBoundaryConfigA#delete}. |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_resource_manager_boundary_config#update GoogleResourceManagerBoundaryConfigA#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_resource_manager_boundary_config#create GoogleResourceManagerBoundaryConfigA#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_resource_manager_boundary_config#delete GoogleResourceManagerBoundaryConfigA#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_resource_manager_boundary_config#update GoogleResourceManagerBoundaryConfigA#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleResourceManagerBoundaryConfigTimeoutsOutputReference <a name="GoogleResourceManagerBoundaryConfigTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigTimeoutsOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_resource_manager_boundary_config

googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigTimeouts">GoogleResourceManagerBoundaryConfigTimeouts</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | GoogleResourceManagerBoundaryConfigTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigTimeouts">GoogleResourceManagerBoundaryConfigTimeouts</a>

---



