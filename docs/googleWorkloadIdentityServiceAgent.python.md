# `googleWorkloadIdentityServiceAgent` Submodule <a name="`googleWorkloadIdentityServiceAgent` Submodule" id="@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleWorkloadIdentityServiceAgent <a name="GoogleWorkloadIdentityServiceAgent" id="@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgent"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_workload_identity_service_agent google_workload_identity_service_agent}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgent.Initializer"></a>

```python
from cdktn_provider_google_beta import google_workload_identity_service_agent

googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgent(
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
  id: str = None,
  timeouts: GoogleWorkloadIdentityServiceAgentTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgent.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgent.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgent.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgent.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgent.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgent.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgent.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgent.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgent.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgent.Initializer.parameter.parent">parent</a></code> | <code>str</code> | The parent resource path. |
| <code><a href="#@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgent.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_workload_identity_service_agent#id GoogleWorkloadIdentityServiceAgent#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgent.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgentTimeouts">GoogleWorkloadIdentityServiceAgentTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgent.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgent.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgent.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgent.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgent.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgent.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgent.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgent.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgent.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `parent`<sup>Required</sup> <a name="parent" id="@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgent.Initializer.parameter.parent"></a>

- *Type:* str

The parent resource path.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_workload_identity_service_agent#parent GoogleWorkloadIdentityServiceAgent#parent}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgent.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_workload_identity_service_agent#id GoogleWorkloadIdentityServiceAgent#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgent.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgentTimeouts">GoogleWorkloadIdentityServiceAgentTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_workload_identity_service_agent#timeouts GoogleWorkloadIdentityServiceAgent#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgent.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgent.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgent.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgent.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgent.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgent.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgent.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgent.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgent.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgent.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgent.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgent.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgent.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgent.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgent.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgent.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgent.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgent.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgent.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgent.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgent.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgent.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgent.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgent.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgent.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgent.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgent.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgent.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgent.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgent.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgent.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgent.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgent.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgent.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgent.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgent.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgent.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgent.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgent.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgent.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgent.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgent.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgent.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgent.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgent.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgent.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgent.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgent.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgent.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgent.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgent.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgent.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgent.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgent.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgent.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgent.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgent.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgent.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgent.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgent.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgent.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgent.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgent.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgent.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgent.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgent.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgent.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgent.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgent.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgent.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgent.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgent.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgent.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgent.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_workload_identity_service_agent#create GoogleWorkloadIdentityServiceAgent#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgent.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_workload_identity_service_agent#delete GoogleWorkloadIdentityServiceAgent#delete}.

---

##### `reset_id` <a name="reset_id" id="@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgent.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgent.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgent.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgent.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgent.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgent.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a GoogleWorkloadIdentityServiceAgent resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgent.isConstruct"></a>

```python
from cdktn_provider_google_beta import google_workload_identity_service_agent

googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgent.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgent.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgent.isTerraformElement"></a>

```python
from cdktn_provider_google_beta import google_workload_identity_service_agent

googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgent.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgent.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgent.isTerraformResource"></a>

```python
from cdktn_provider_google_beta import google_workload_identity_service_agent

googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgent.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgent.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgent.generateConfigForImport"></a>

```python
from cdktn_provider_google_beta import google_workload_identity_service_agent

googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgent.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a GoogleWorkloadIdentityServiceAgent resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgent.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgent.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the GoogleWorkloadIdentityServiceAgent to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgent.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing GoogleWorkloadIdentityServiceAgent that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_workload_identity_service_agent#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgent.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the GoogleWorkloadIdentityServiceAgent to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgent.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgent.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgent.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgent.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgent.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgent.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgent.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgent.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgent.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgent.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgent.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgent.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgent.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgent.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgent.property.serviceAgents">service_agents</a></code> | <code><a href="#@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgentServiceAgentsList">GoogleWorkloadIdentityServiceAgentServiceAgentsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgent.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgentTimeoutsOutputReference">GoogleWorkloadIdentityServiceAgentTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgent.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgent.property.parentInput">parent_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgent.property.timeoutsInput">timeouts_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgentTimeouts">GoogleWorkloadIdentityServiceAgentTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgent.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgent.property.parent">parent</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgent.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgent.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgent.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgent.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgent.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgent.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgent.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgent.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgent.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgent.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgent.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgent.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgent.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgent.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `service_agents`<sup>Required</sup> <a name="service_agents" id="@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgent.property.serviceAgents"></a>

```python
service_agents: GoogleWorkloadIdentityServiceAgentServiceAgentsList
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgentServiceAgentsList">GoogleWorkloadIdentityServiceAgentServiceAgentsList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgent.property.timeouts"></a>

```python
timeouts: GoogleWorkloadIdentityServiceAgentTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgentTimeoutsOutputReference">GoogleWorkloadIdentityServiceAgentTimeoutsOutputReference</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgent.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `parent_input`<sup>Optional</sup> <a name="parent_input" id="@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgent.property.parentInput"></a>

```python
parent_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgent.property.timeoutsInput"></a>

```python
timeouts_input: IResolvable | GoogleWorkloadIdentityServiceAgentTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgentTimeouts">GoogleWorkloadIdentityServiceAgentTimeouts</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgent.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `parent`<sup>Required</sup> <a name="parent" id="@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgent.property.parent"></a>

```python
parent: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgent.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgent.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleWorkloadIdentityServiceAgentConfig <a name="GoogleWorkloadIdentityServiceAgentConfig" id="@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgentConfig.Initializer"></a>

```python
from cdktn_provider_google_beta import google_workload_identity_service_agent

googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgentConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  parent: str,
  id: str = None,
  timeouts: GoogleWorkloadIdentityServiceAgentTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgentConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgentConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgentConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgentConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgentConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgentConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgentConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgentConfig.property.parent">parent</a></code> | <code>str</code> | The parent resource path. |
| <code><a href="#@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgentConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_workload_identity_service_agent#id GoogleWorkloadIdentityServiceAgent#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgentConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgentTimeouts">GoogleWorkloadIdentityServiceAgentTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgentConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgentConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgentConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgentConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgentConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgentConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgentConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `parent`<sup>Required</sup> <a name="parent" id="@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgentConfig.property.parent"></a>

```python
parent: str
```

- *Type:* str

The parent resource path.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_workload_identity_service_agent#parent GoogleWorkloadIdentityServiceAgent#parent}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgentConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_workload_identity_service_agent#id GoogleWorkloadIdentityServiceAgent#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgentConfig.property.timeouts"></a>

```python
timeouts: GoogleWorkloadIdentityServiceAgentTimeouts
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgentTimeouts">GoogleWorkloadIdentityServiceAgentTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_workload_identity_service_agent#timeouts GoogleWorkloadIdentityServiceAgent#timeouts}

---

### GoogleWorkloadIdentityServiceAgentServiceAgents <a name="GoogleWorkloadIdentityServiceAgentServiceAgents" id="@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgentServiceAgents"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgentServiceAgents.Initializer"></a>

```python
from cdktn_provider_google_beta import google_workload_identity_service_agent

googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgentServiceAgents()
```


### GoogleWorkloadIdentityServiceAgentTimeouts <a name="GoogleWorkloadIdentityServiceAgentTimeouts" id="@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgentTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgentTimeouts.Initializer"></a>

```python
from cdktn_provider_google_beta import google_workload_identity_service_agent

googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgentTimeouts(
  create: str = None,
  delete: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgentTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_workload_identity_service_agent#create GoogleWorkloadIdentityServiceAgent#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgentTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_workload_identity_service_agent#delete GoogleWorkloadIdentityServiceAgent#delete}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgentTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_workload_identity_service_agent#create GoogleWorkloadIdentityServiceAgent#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgentTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_workload_identity_service_agent#delete GoogleWorkloadIdentityServiceAgent#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleWorkloadIdentityServiceAgentServiceAgentsList <a name="GoogleWorkloadIdentityServiceAgentServiceAgentsList" id="@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgentServiceAgentsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgentServiceAgentsList.Initializer"></a>

```python
from cdktn_provider_google_beta import google_workload_identity_service_agent

googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgentServiceAgentsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgentServiceAgentsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgentServiceAgentsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgentServiceAgentsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgentServiceAgentsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgentServiceAgentsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgentServiceAgentsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgentServiceAgentsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgentServiceAgentsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgentServiceAgentsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgentServiceAgentsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgentServiceAgentsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgentServiceAgentsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgentServiceAgentsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgentServiceAgentsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgentServiceAgentsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgentServiceAgentsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgentServiceAgentsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgentServiceAgentsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleWorkloadIdentityServiceAgentServiceAgentsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgentServiceAgentsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgentServiceAgentsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgentServiceAgentsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgentServiceAgentsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgentServiceAgentsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### GoogleWorkloadIdentityServiceAgentServiceAgentsOutputReference <a name="GoogleWorkloadIdentityServiceAgentServiceAgentsOutputReference" id="@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgentServiceAgentsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgentServiceAgentsOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_workload_identity_service_agent

googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgentServiceAgentsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgentServiceAgentsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgentServiceAgentsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgentServiceAgentsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgentServiceAgentsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgentServiceAgentsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgentServiceAgentsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgentServiceAgentsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgentServiceAgentsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgentServiceAgentsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgentServiceAgentsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgentServiceAgentsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgentServiceAgentsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgentServiceAgentsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgentServiceAgentsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgentServiceAgentsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgentServiceAgentsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgentServiceAgentsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgentServiceAgentsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgentServiceAgentsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgentServiceAgentsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgentServiceAgentsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgentServiceAgentsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgentServiceAgentsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgentServiceAgentsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgentServiceAgentsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgentServiceAgentsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgentServiceAgentsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgentServiceAgentsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgentServiceAgentsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgentServiceAgentsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgentServiceAgentsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgentServiceAgentsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgentServiceAgentsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgentServiceAgentsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgentServiceAgentsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgentServiceAgentsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgentServiceAgentsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgentServiceAgentsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgentServiceAgentsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgentServiceAgentsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgentServiceAgentsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgentServiceAgentsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgentServiceAgentsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgentServiceAgentsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgentServiceAgentsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgentServiceAgentsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgentServiceAgentsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgentServiceAgentsOutputReference.property.container">container</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgentServiceAgentsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgentServiceAgentsOutputReference.property.principal">principal</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgentServiceAgentsOutputReference.property.role">role</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgentServiceAgentsOutputReference.property.serviceProducer">service_producer</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgentServiceAgentsOutputReference.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgentServiceAgentsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgentServiceAgents">GoogleWorkloadIdentityServiceAgentServiceAgents</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgentServiceAgentsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgentServiceAgentsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `container`<sup>Required</sup> <a name="container" id="@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgentServiceAgentsOutputReference.property.container"></a>

```python
container: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgentServiceAgentsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `principal`<sup>Required</sup> <a name="principal" id="@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgentServiceAgentsOutputReference.property.principal"></a>

```python
principal: str
```

- *Type:* str

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgentServiceAgentsOutputReference.property.role"></a>

```python
role: str
```

- *Type:* str

---

##### `service_producer`<sup>Required</sup> <a name="service_producer" id="@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgentServiceAgentsOutputReference.property.serviceProducer"></a>

```python
service_producer: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgentServiceAgentsOutputReference.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgentServiceAgentsOutputReference.property.internalValue"></a>

```python
internal_value: GoogleWorkloadIdentityServiceAgentServiceAgents
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgentServiceAgents">GoogleWorkloadIdentityServiceAgentServiceAgents</a>

---


### GoogleWorkloadIdentityServiceAgentTimeoutsOutputReference <a name="GoogleWorkloadIdentityServiceAgentTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgentTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgentTimeoutsOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_workload_identity_service_agent

googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgentTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgentTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgentTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgentTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgentTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgentTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgentTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgentTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgentTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgentTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgentTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgentTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgentTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgentTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgentTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgentTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgentTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgentTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgentTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgentTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgentTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgentTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgentTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgentTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgentTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgentTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgentTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgentTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgentTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgentTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgentTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgentTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgentTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgentTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgentTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgentTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgentTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgentTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgentTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgentTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgentTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgentTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgentTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgentTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgentTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgentTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgentTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgentTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgentTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgentTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgentTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgentTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgentTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgentTimeouts">GoogleWorkloadIdentityServiceAgentTimeouts</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgentTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgentTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgentTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgentTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgentTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgentTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgentTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | GoogleWorkloadIdentityServiceAgentTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgentTimeouts">GoogleWorkloadIdentityServiceAgentTimeouts</a>

---



