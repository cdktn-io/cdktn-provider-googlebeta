# `googleNetworkConnectivityHubIamMember` Submodule <a name="`googleNetworkConnectivityHubIamMember` Submodule" id="@cdktn/provider-google-beta.googleNetworkConnectivityHubIamMember"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleNetworkConnectivityHubIamMember <a name="GoogleNetworkConnectivityHubIamMember" id="@cdktn/provider-google-beta.googleNetworkConnectivityHubIamMember.GoogleNetworkConnectivityHubIamMember"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_network_connectivity_hub_iam_member google_network_connectivity_hub_iam_member}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleNetworkConnectivityHubIamMember.GoogleNetworkConnectivityHubIamMember.Initializer"></a>

```python
from cdktn_provider_google_beta import google_network_connectivity_hub_iam_member

googleNetworkConnectivityHubIamMember.GoogleNetworkConnectivityHubIamMember(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  hub: str,
  member: str,
  role: str,
  condition: GoogleNetworkConnectivityHubIamMemberCondition = None,
  id: str = None,
  project: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityHubIamMember.GoogleNetworkConnectivityHubIamMember.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityHubIamMember.GoogleNetworkConnectivityHubIamMember.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityHubIamMember.GoogleNetworkConnectivityHubIamMember.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityHubIamMember.GoogleNetworkConnectivityHubIamMember.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityHubIamMember.GoogleNetworkConnectivityHubIamMember.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityHubIamMember.GoogleNetworkConnectivityHubIamMember.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityHubIamMember.GoogleNetworkConnectivityHubIamMember.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityHubIamMember.GoogleNetworkConnectivityHubIamMember.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityHubIamMember.GoogleNetworkConnectivityHubIamMember.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityHubIamMember.GoogleNetworkConnectivityHubIamMember.Initializer.parameter.hub">hub</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_network_connectivity_hub_iam_member#hub GoogleNetworkConnectivityHubIamMember#hub}. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityHubIamMember.GoogleNetworkConnectivityHubIamMember.Initializer.parameter.member">member</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_network_connectivity_hub_iam_member#member GoogleNetworkConnectivityHubIamMember#member}. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityHubIamMember.GoogleNetworkConnectivityHubIamMember.Initializer.parameter.role">role</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_network_connectivity_hub_iam_member#role GoogleNetworkConnectivityHubIamMember#role}. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityHubIamMember.GoogleNetworkConnectivityHubIamMember.Initializer.parameter.condition">condition</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityHubIamMember.GoogleNetworkConnectivityHubIamMemberCondition">GoogleNetworkConnectivityHubIamMemberCondition</a></code> | condition block. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityHubIamMember.GoogleNetworkConnectivityHubIamMember.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_network_connectivity_hub_iam_member#id GoogleNetworkConnectivityHubIamMember#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityHubIamMember.GoogleNetworkConnectivityHubIamMember.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_network_connectivity_hub_iam_member#project GoogleNetworkConnectivityHubIamMember#project}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleNetworkConnectivityHubIamMember.GoogleNetworkConnectivityHubIamMember.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleNetworkConnectivityHubIamMember.GoogleNetworkConnectivityHubIamMember.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleNetworkConnectivityHubIamMember.GoogleNetworkConnectivityHubIamMember.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleNetworkConnectivityHubIamMember.GoogleNetworkConnectivityHubIamMember.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google-beta.googleNetworkConnectivityHubIamMember.GoogleNetworkConnectivityHubIamMember.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google-beta.googleNetworkConnectivityHubIamMember.GoogleNetworkConnectivityHubIamMember.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleNetworkConnectivityHubIamMember.GoogleNetworkConnectivityHubIamMember.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleNetworkConnectivityHubIamMember.GoogleNetworkConnectivityHubIamMember.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleNetworkConnectivityHubIamMember.GoogleNetworkConnectivityHubIamMember.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `hub`<sup>Required</sup> <a name="hub" id="@cdktn/provider-google-beta.googleNetworkConnectivityHubIamMember.GoogleNetworkConnectivityHubIamMember.Initializer.parameter.hub"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_network_connectivity_hub_iam_member#hub GoogleNetworkConnectivityHubIamMember#hub}.

---

##### `member`<sup>Required</sup> <a name="member" id="@cdktn/provider-google-beta.googleNetworkConnectivityHubIamMember.GoogleNetworkConnectivityHubIamMember.Initializer.parameter.member"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_network_connectivity_hub_iam_member#member GoogleNetworkConnectivityHubIamMember#member}.

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktn/provider-google-beta.googleNetworkConnectivityHubIamMember.GoogleNetworkConnectivityHubIamMember.Initializer.parameter.role"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_network_connectivity_hub_iam_member#role GoogleNetworkConnectivityHubIamMember#role}.

---

##### `condition`<sup>Optional</sup> <a name="condition" id="@cdktn/provider-google-beta.googleNetworkConnectivityHubIamMember.GoogleNetworkConnectivityHubIamMember.Initializer.parameter.condition"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkConnectivityHubIamMember.GoogleNetworkConnectivityHubIamMemberCondition">GoogleNetworkConnectivityHubIamMemberCondition</a>

condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_network_connectivity_hub_iam_member#condition GoogleNetworkConnectivityHubIamMember#condition}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleNetworkConnectivityHubIamMember.GoogleNetworkConnectivityHubIamMember.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_network_connectivity_hub_iam_member#id GoogleNetworkConnectivityHubIamMember#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.googleNetworkConnectivityHubIamMember.GoogleNetworkConnectivityHubIamMember.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_network_connectivity_hub_iam_member#project GoogleNetworkConnectivityHubIamMember#project}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityHubIamMember.GoogleNetworkConnectivityHubIamMember.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityHubIamMember.GoogleNetworkConnectivityHubIamMember.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityHubIamMember.GoogleNetworkConnectivityHubIamMember.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityHubIamMember.GoogleNetworkConnectivityHubIamMember.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityHubIamMember.GoogleNetworkConnectivityHubIamMember.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityHubIamMember.GoogleNetworkConnectivityHubIamMember.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityHubIamMember.GoogleNetworkConnectivityHubIamMember.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityHubIamMember.GoogleNetworkConnectivityHubIamMember.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityHubIamMember.GoogleNetworkConnectivityHubIamMember.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityHubIamMember.GoogleNetworkConnectivityHubIamMember.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityHubIamMember.GoogleNetworkConnectivityHubIamMember.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityHubIamMember.GoogleNetworkConnectivityHubIamMember.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityHubIamMember.GoogleNetworkConnectivityHubIamMember.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityHubIamMember.GoogleNetworkConnectivityHubIamMember.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityHubIamMember.GoogleNetworkConnectivityHubIamMember.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityHubIamMember.GoogleNetworkConnectivityHubIamMember.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityHubIamMember.GoogleNetworkConnectivityHubIamMember.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityHubIamMember.GoogleNetworkConnectivityHubIamMember.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityHubIamMember.GoogleNetworkConnectivityHubIamMember.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityHubIamMember.GoogleNetworkConnectivityHubIamMember.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityHubIamMember.GoogleNetworkConnectivityHubIamMember.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityHubIamMember.GoogleNetworkConnectivityHubIamMember.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityHubIamMember.GoogleNetworkConnectivityHubIamMember.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityHubIamMember.GoogleNetworkConnectivityHubIamMember.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityHubIamMember.GoogleNetworkConnectivityHubIamMember.putCondition">put_condition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityHubIamMember.GoogleNetworkConnectivityHubIamMember.resetCondition">reset_condition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityHubIamMember.GoogleNetworkConnectivityHubIamMember.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityHubIamMember.GoogleNetworkConnectivityHubIamMember.resetProject">reset_project</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleNetworkConnectivityHubIamMember.GoogleNetworkConnectivityHubIamMember.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google-beta.googleNetworkConnectivityHubIamMember.GoogleNetworkConnectivityHubIamMember.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google-beta.googleNetworkConnectivityHubIamMember.GoogleNetworkConnectivityHubIamMember.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-google-beta.googleNetworkConnectivityHubIamMember.GoogleNetworkConnectivityHubIamMember.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google-beta.googleNetworkConnectivityHubIamMember.GoogleNetworkConnectivityHubIamMember.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleNetworkConnectivityHubIamMember.GoogleNetworkConnectivityHubIamMember.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-google-beta.googleNetworkConnectivityHubIamMember.GoogleNetworkConnectivityHubIamMember.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-google-beta.googleNetworkConnectivityHubIamMember.GoogleNetworkConnectivityHubIamMember.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-google-beta.googleNetworkConnectivityHubIamMember.GoogleNetworkConnectivityHubIamMember.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-google-beta.googleNetworkConnectivityHubIamMember.GoogleNetworkConnectivityHubIamMember.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-google-beta.googleNetworkConnectivityHubIamMember.GoogleNetworkConnectivityHubIamMember.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-google-beta.googleNetworkConnectivityHubIamMember.GoogleNetworkConnectivityHubIamMember.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-google-beta.googleNetworkConnectivityHubIamMember.GoogleNetworkConnectivityHubIamMember.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-google-beta.googleNetworkConnectivityHubIamMember.GoogleNetworkConnectivityHubIamMember.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleNetworkConnectivityHubIamMember.GoogleNetworkConnectivityHubIamMember.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkConnectivityHubIamMember.GoogleNetworkConnectivityHubIamMember.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleNetworkConnectivityHubIamMember.GoogleNetworkConnectivityHubIamMember.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkConnectivityHubIamMember.GoogleNetworkConnectivityHubIamMember.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleNetworkConnectivityHubIamMember.GoogleNetworkConnectivityHubIamMember.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkConnectivityHubIamMember.GoogleNetworkConnectivityHubIamMember.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleNetworkConnectivityHubIamMember.GoogleNetworkConnectivityHubIamMember.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkConnectivityHubIamMember.GoogleNetworkConnectivityHubIamMember.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleNetworkConnectivityHubIamMember.GoogleNetworkConnectivityHubIamMember.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkConnectivityHubIamMember.GoogleNetworkConnectivityHubIamMember.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleNetworkConnectivityHubIamMember.GoogleNetworkConnectivityHubIamMember.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkConnectivityHubIamMember.GoogleNetworkConnectivityHubIamMember.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleNetworkConnectivityHubIamMember.GoogleNetworkConnectivityHubIamMember.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkConnectivityHubIamMember.GoogleNetworkConnectivityHubIamMember.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleNetworkConnectivityHubIamMember.GoogleNetworkConnectivityHubIamMember.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkConnectivityHubIamMember.GoogleNetworkConnectivityHubIamMember.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleNetworkConnectivityHubIamMember.GoogleNetworkConnectivityHubIamMember.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkConnectivityHubIamMember.GoogleNetworkConnectivityHubIamMember.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-google-beta.googleNetworkConnectivityHubIamMember.GoogleNetworkConnectivityHubIamMember.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-google-beta.googleNetworkConnectivityHubIamMember.GoogleNetworkConnectivityHubIamMember.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleNetworkConnectivityHubIamMember.GoogleNetworkConnectivityHubIamMember.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleNetworkConnectivityHubIamMember.GoogleNetworkConnectivityHubIamMember.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleNetworkConnectivityHubIamMember.GoogleNetworkConnectivityHubIamMember.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkConnectivityHubIamMember.GoogleNetworkConnectivityHubIamMember.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-google-beta.googleNetworkConnectivityHubIamMember.GoogleNetworkConnectivityHubIamMember.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleNetworkConnectivityHubIamMember.GoogleNetworkConnectivityHubIamMember.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-google-beta.googleNetworkConnectivityHubIamMember.GoogleNetworkConnectivityHubIamMember.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-google-beta.googleNetworkConnectivityHubIamMember.GoogleNetworkConnectivityHubIamMember.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google-beta.googleNetworkConnectivityHubIamMember.GoogleNetworkConnectivityHubIamMember.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-google-beta.googleNetworkConnectivityHubIamMember.GoogleNetworkConnectivityHubIamMember.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleNetworkConnectivityHubIamMember.GoogleNetworkConnectivityHubIamMember.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_condition` <a name="put_condition" id="@cdktn/provider-google-beta.googleNetworkConnectivityHubIamMember.GoogleNetworkConnectivityHubIamMember.putCondition"></a>

```python
def put_condition(
  expression: str,
  title: str,
  description: str = None
) -> None
```

###### `expression`<sup>Required</sup> <a name="expression" id="@cdktn/provider-google-beta.googleNetworkConnectivityHubIamMember.GoogleNetworkConnectivityHubIamMember.putCondition.parameter.expression"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_network_connectivity_hub_iam_member#expression GoogleNetworkConnectivityHubIamMember#expression}.

---

###### `title`<sup>Required</sup> <a name="title" id="@cdktn/provider-google-beta.googleNetworkConnectivityHubIamMember.GoogleNetworkConnectivityHubIamMember.putCondition.parameter.title"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_network_connectivity_hub_iam_member#title GoogleNetworkConnectivityHubIamMember#title}.

---

###### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google-beta.googleNetworkConnectivityHubIamMember.GoogleNetworkConnectivityHubIamMember.putCondition.parameter.description"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_network_connectivity_hub_iam_member#description GoogleNetworkConnectivityHubIamMember#description}.

---

##### `reset_condition` <a name="reset_condition" id="@cdktn/provider-google-beta.googleNetworkConnectivityHubIamMember.GoogleNetworkConnectivityHubIamMember.resetCondition"></a>

```python
def reset_condition() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktn/provider-google-beta.googleNetworkConnectivityHubIamMember.GoogleNetworkConnectivityHubIamMember.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktn/provider-google-beta.googleNetworkConnectivityHubIamMember.GoogleNetworkConnectivityHubIamMember.resetProject"></a>

```python
def reset_project() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityHubIamMember.GoogleNetworkConnectivityHubIamMember.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityHubIamMember.GoogleNetworkConnectivityHubIamMember.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityHubIamMember.GoogleNetworkConnectivityHubIamMember.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityHubIamMember.GoogleNetworkConnectivityHubIamMember.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a GoogleNetworkConnectivityHubIamMember resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-google-beta.googleNetworkConnectivityHubIamMember.GoogleNetworkConnectivityHubIamMember.isConstruct"></a>

```python
from cdktn_provider_google_beta import google_network_connectivity_hub_iam_member

googleNetworkConnectivityHubIamMember.GoogleNetworkConnectivityHubIamMember.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleNetworkConnectivityHubIamMember.GoogleNetworkConnectivityHubIamMember.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-google-beta.googleNetworkConnectivityHubIamMember.GoogleNetworkConnectivityHubIamMember.isTerraformElement"></a>

```python
from cdktn_provider_google_beta import google_network_connectivity_hub_iam_member

googleNetworkConnectivityHubIamMember.GoogleNetworkConnectivityHubIamMember.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleNetworkConnectivityHubIamMember.GoogleNetworkConnectivityHubIamMember.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-google-beta.googleNetworkConnectivityHubIamMember.GoogleNetworkConnectivityHubIamMember.isTerraformResource"></a>

```python
from cdktn_provider_google_beta import google_network_connectivity_hub_iam_member

googleNetworkConnectivityHubIamMember.GoogleNetworkConnectivityHubIamMember.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleNetworkConnectivityHubIamMember.GoogleNetworkConnectivityHubIamMember.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-google-beta.googleNetworkConnectivityHubIamMember.GoogleNetworkConnectivityHubIamMember.generateConfigForImport"></a>

```python
from cdktn_provider_google_beta import google_network_connectivity_hub_iam_member

googleNetworkConnectivityHubIamMember.GoogleNetworkConnectivityHubIamMember.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a GoogleNetworkConnectivityHubIamMember resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleNetworkConnectivityHubIamMember.GoogleNetworkConnectivityHubIamMember.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-google-beta.googleNetworkConnectivityHubIamMember.GoogleNetworkConnectivityHubIamMember.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the GoogleNetworkConnectivityHubIamMember to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-google-beta.googleNetworkConnectivityHubIamMember.GoogleNetworkConnectivityHubIamMember.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing GoogleNetworkConnectivityHubIamMember that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_network_connectivity_hub_iam_member#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleNetworkConnectivityHubIamMember.GoogleNetworkConnectivityHubIamMember.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the GoogleNetworkConnectivityHubIamMember to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityHubIamMember.GoogleNetworkConnectivityHubIamMember.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityHubIamMember.GoogleNetworkConnectivityHubIamMember.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityHubIamMember.GoogleNetworkConnectivityHubIamMember.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityHubIamMember.GoogleNetworkConnectivityHubIamMember.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityHubIamMember.GoogleNetworkConnectivityHubIamMember.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityHubIamMember.GoogleNetworkConnectivityHubIamMember.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityHubIamMember.GoogleNetworkConnectivityHubIamMember.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityHubIamMember.GoogleNetworkConnectivityHubIamMember.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityHubIamMember.GoogleNetworkConnectivityHubIamMember.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityHubIamMember.GoogleNetworkConnectivityHubIamMember.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityHubIamMember.GoogleNetworkConnectivityHubIamMember.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityHubIamMember.GoogleNetworkConnectivityHubIamMember.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityHubIamMember.GoogleNetworkConnectivityHubIamMember.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityHubIamMember.GoogleNetworkConnectivityHubIamMember.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityHubIamMember.GoogleNetworkConnectivityHubIamMember.property.condition">condition</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityHubIamMember.GoogleNetworkConnectivityHubIamMemberConditionOutputReference">GoogleNetworkConnectivityHubIamMemberConditionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityHubIamMember.GoogleNetworkConnectivityHubIamMember.property.etag">etag</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityHubIamMember.GoogleNetworkConnectivityHubIamMember.property.conditionInput">condition_input</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityHubIamMember.GoogleNetworkConnectivityHubIamMemberCondition">GoogleNetworkConnectivityHubIamMemberCondition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityHubIamMember.GoogleNetworkConnectivityHubIamMember.property.hubInput">hub_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityHubIamMember.GoogleNetworkConnectivityHubIamMember.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityHubIamMember.GoogleNetworkConnectivityHubIamMember.property.memberInput">member_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityHubIamMember.GoogleNetworkConnectivityHubIamMember.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityHubIamMember.GoogleNetworkConnectivityHubIamMember.property.roleInput">role_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityHubIamMember.GoogleNetworkConnectivityHubIamMember.property.hub">hub</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityHubIamMember.GoogleNetworkConnectivityHubIamMember.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityHubIamMember.GoogleNetworkConnectivityHubIamMember.property.member">member</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityHubIamMember.GoogleNetworkConnectivityHubIamMember.property.project">project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityHubIamMember.GoogleNetworkConnectivityHubIamMember.property.role">role</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google-beta.googleNetworkConnectivityHubIamMember.GoogleNetworkConnectivityHubIamMember.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-google-beta.googleNetworkConnectivityHubIamMember.GoogleNetworkConnectivityHubIamMember.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleNetworkConnectivityHubIamMember.GoogleNetworkConnectivityHubIamMember.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-google-beta.googleNetworkConnectivityHubIamMember.GoogleNetworkConnectivityHubIamMember.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-google-beta.googleNetworkConnectivityHubIamMember.GoogleNetworkConnectivityHubIamMember.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-google-beta.googleNetworkConnectivityHubIamMember.GoogleNetworkConnectivityHubIamMember.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-google-beta.googleNetworkConnectivityHubIamMember.GoogleNetworkConnectivityHubIamMember.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleNetworkConnectivityHubIamMember.GoogleNetworkConnectivityHubIamMember.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleNetworkConnectivityHubIamMember.GoogleNetworkConnectivityHubIamMember.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google-beta.googleNetworkConnectivityHubIamMember.GoogleNetworkConnectivityHubIamMember.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google-beta.googleNetworkConnectivityHubIamMember.GoogleNetworkConnectivityHubIamMember.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleNetworkConnectivityHubIamMember.GoogleNetworkConnectivityHubIamMember.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleNetworkConnectivityHubIamMember.GoogleNetworkConnectivityHubIamMember.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleNetworkConnectivityHubIamMember.GoogleNetworkConnectivityHubIamMember.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `condition`<sup>Required</sup> <a name="condition" id="@cdktn/provider-google-beta.googleNetworkConnectivityHubIamMember.GoogleNetworkConnectivityHubIamMember.property.condition"></a>

```python
condition: GoogleNetworkConnectivityHubIamMemberConditionOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkConnectivityHubIamMember.GoogleNetworkConnectivityHubIamMemberConditionOutputReference">GoogleNetworkConnectivityHubIamMemberConditionOutputReference</a>

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktn/provider-google-beta.googleNetworkConnectivityHubIamMember.GoogleNetworkConnectivityHubIamMember.property.etag"></a>

```python
etag: str
```

- *Type:* str

---

##### `condition_input`<sup>Optional</sup> <a name="condition_input" id="@cdktn/provider-google-beta.googleNetworkConnectivityHubIamMember.GoogleNetworkConnectivityHubIamMember.property.conditionInput"></a>

```python
condition_input: GoogleNetworkConnectivityHubIamMemberCondition
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkConnectivityHubIamMember.GoogleNetworkConnectivityHubIamMemberCondition">GoogleNetworkConnectivityHubIamMemberCondition</a>

---

##### `hub_input`<sup>Optional</sup> <a name="hub_input" id="@cdktn/provider-google-beta.googleNetworkConnectivityHubIamMember.GoogleNetworkConnectivityHubIamMember.property.hubInput"></a>

```python
hub_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-google-beta.googleNetworkConnectivityHubIamMember.GoogleNetworkConnectivityHubIamMember.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `member_input`<sup>Optional</sup> <a name="member_input" id="@cdktn/provider-google-beta.googleNetworkConnectivityHubIamMember.GoogleNetworkConnectivityHubIamMember.property.memberInput"></a>

```python
member_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktn/provider-google-beta.googleNetworkConnectivityHubIamMember.GoogleNetworkConnectivityHubIamMember.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `role_input`<sup>Optional</sup> <a name="role_input" id="@cdktn/provider-google-beta.googleNetworkConnectivityHubIamMember.GoogleNetworkConnectivityHubIamMember.property.roleInput"></a>

```python
role_input: str
```

- *Type:* str

---

##### `hub`<sup>Required</sup> <a name="hub" id="@cdktn/provider-google-beta.googleNetworkConnectivityHubIamMember.GoogleNetworkConnectivityHubIamMember.property.hub"></a>

```python
hub: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleNetworkConnectivityHubIamMember.GoogleNetworkConnectivityHubIamMember.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `member`<sup>Required</sup> <a name="member" id="@cdktn/provider-google-beta.googleNetworkConnectivityHubIamMember.GoogleNetworkConnectivityHubIamMember.property.member"></a>

```python
member: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google-beta.googleNetworkConnectivityHubIamMember.GoogleNetworkConnectivityHubIamMember.property.project"></a>

```python
project: str
```

- *Type:* str

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktn/provider-google-beta.googleNetworkConnectivityHubIamMember.GoogleNetworkConnectivityHubIamMember.property.role"></a>

```python
role: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityHubIamMember.GoogleNetworkConnectivityHubIamMember.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google-beta.googleNetworkConnectivityHubIamMember.GoogleNetworkConnectivityHubIamMember.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleNetworkConnectivityHubIamMemberCondition <a name="GoogleNetworkConnectivityHubIamMemberCondition" id="@cdktn/provider-google-beta.googleNetworkConnectivityHubIamMember.GoogleNetworkConnectivityHubIamMemberCondition"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleNetworkConnectivityHubIamMember.GoogleNetworkConnectivityHubIamMemberCondition.Initializer"></a>

```python
from cdktn_provider_google_beta import google_network_connectivity_hub_iam_member

googleNetworkConnectivityHubIamMember.GoogleNetworkConnectivityHubIamMemberCondition(
  expression: str,
  title: str,
  description: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityHubIamMember.GoogleNetworkConnectivityHubIamMemberCondition.property.expression">expression</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_network_connectivity_hub_iam_member#expression GoogleNetworkConnectivityHubIamMember#expression}. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityHubIamMember.GoogleNetworkConnectivityHubIamMemberCondition.property.title">title</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_network_connectivity_hub_iam_member#title GoogleNetworkConnectivityHubIamMember#title}. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityHubIamMember.GoogleNetworkConnectivityHubIamMemberCondition.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_network_connectivity_hub_iam_member#description GoogleNetworkConnectivityHubIamMember#description}. |

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktn/provider-google-beta.googleNetworkConnectivityHubIamMember.GoogleNetworkConnectivityHubIamMemberCondition.property.expression"></a>

```python
expression: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_network_connectivity_hub_iam_member#expression GoogleNetworkConnectivityHubIamMember#expression}.

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktn/provider-google-beta.googleNetworkConnectivityHubIamMember.GoogleNetworkConnectivityHubIamMemberCondition.property.title"></a>

```python
title: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_network_connectivity_hub_iam_member#title GoogleNetworkConnectivityHubIamMember#title}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google-beta.googleNetworkConnectivityHubIamMember.GoogleNetworkConnectivityHubIamMemberCondition.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_network_connectivity_hub_iam_member#description GoogleNetworkConnectivityHubIamMember#description}.

---

### GoogleNetworkConnectivityHubIamMemberConfig <a name="GoogleNetworkConnectivityHubIamMemberConfig" id="@cdktn/provider-google-beta.googleNetworkConnectivityHubIamMember.GoogleNetworkConnectivityHubIamMemberConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleNetworkConnectivityHubIamMember.GoogleNetworkConnectivityHubIamMemberConfig.Initializer"></a>

```python
from cdktn_provider_google_beta import google_network_connectivity_hub_iam_member

googleNetworkConnectivityHubIamMember.GoogleNetworkConnectivityHubIamMemberConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  hub: str,
  member: str,
  role: str,
  condition: GoogleNetworkConnectivityHubIamMemberCondition = None,
  id: str = None,
  project: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityHubIamMember.GoogleNetworkConnectivityHubIamMemberConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityHubIamMember.GoogleNetworkConnectivityHubIamMemberConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityHubIamMember.GoogleNetworkConnectivityHubIamMemberConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityHubIamMember.GoogleNetworkConnectivityHubIamMemberConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityHubIamMember.GoogleNetworkConnectivityHubIamMemberConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityHubIamMember.GoogleNetworkConnectivityHubIamMemberConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityHubIamMember.GoogleNetworkConnectivityHubIamMemberConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityHubIamMember.GoogleNetworkConnectivityHubIamMemberConfig.property.hub">hub</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_network_connectivity_hub_iam_member#hub GoogleNetworkConnectivityHubIamMember#hub}. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityHubIamMember.GoogleNetworkConnectivityHubIamMemberConfig.property.member">member</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_network_connectivity_hub_iam_member#member GoogleNetworkConnectivityHubIamMember#member}. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityHubIamMember.GoogleNetworkConnectivityHubIamMemberConfig.property.role">role</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_network_connectivity_hub_iam_member#role GoogleNetworkConnectivityHubIamMember#role}. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityHubIamMember.GoogleNetworkConnectivityHubIamMemberConfig.property.condition">condition</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityHubIamMember.GoogleNetworkConnectivityHubIamMemberCondition">GoogleNetworkConnectivityHubIamMemberCondition</a></code> | condition block. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityHubIamMember.GoogleNetworkConnectivityHubIamMemberConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_network_connectivity_hub_iam_member#id GoogleNetworkConnectivityHubIamMember#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityHubIamMember.GoogleNetworkConnectivityHubIamMemberConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_network_connectivity_hub_iam_member#project GoogleNetworkConnectivityHubIamMember#project}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleNetworkConnectivityHubIamMember.GoogleNetworkConnectivityHubIamMemberConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleNetworkConnectivityHubIamMember.GoogleNetworkConnectivityHubIamMemberConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google-beta.googleNetworkConnectivityHubIamMember.GoogleNetworkConnectivityHubIamMemberConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google-beta.googleNetworkConnectivityHubIamMember.GoogleNetworkConnectivityHubIamMemberConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleNetworkConnectivityHubIamMember.GoogleNetworkConnectivityHubIamMemberConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleNetworkConnectivityHubIamMember.GoogleNetworkConnectivityHubIamMemberConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleNetworkConnectivityHubIamMember.GoogleNetworkConnectivityHubIamMemberConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `hub`<sup>Required</sup> <a name="hub" id="@cdktn/provider-google-beta.googleNetworkConnectivityHubIamMember.GoogleNetworkConnectivityHubIamMemberConfig.property.hub"></a>

```python
hub: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_network_connectivity_hub_iam_member#hub GoogleNetworkConnectivityHubIamMember#hub}.

---

##### `member`<sup>Required</sup> <a name="member" id="@cdktn/provider-google-beta.googleNetworkConnectivityHubIamMember.GoogleNetworkConnectivityHubIamMemberConfig.property.member"></a>

```python
member: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_network_connectivity_hub_iam_member#member GoogleNetworkConnectivityHubIamMember#member}.

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktn/provider-google-beta.googleNetworkConnectivityHubIamMember.GoogleNetworkConnectivityHubIamMemberConfig.property.role"></a>

```python
role: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_network_connectivity_hub_iam_member#role GoogleNetworkConnectivityHubIamMember#role}.

---

##### `condition`<sup>Optional</sup> <a name="condition" id="@cdktn/provider-google-beta.googleNetworkConnectivityHubIamMember.GoogleNetworkConnectivityHubIamMemberConfig.property.condition"></a>

```python
condition: GoogleNetworkConnectivityHubIamMemberCondition
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkConnectivityHubIamMember.GoogleNetworkConnectivityHubIamMemberCondition">GoogleNetworkConnectivityHubIamMemberCondition</a>

condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_network_connectivity_hub_iam_member#condition GoogleNetworkConnectivityHubIamMember#condition}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleNetworkConnectivityHubIamMember.GoogleNetworkConnectivityHubIamMemberConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_network_connectivity_hub_iam_member#id GoogleNetworkConnectivityHubIamMember#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.googleNetworkConnectivityHubIamMember.GoogleNetworkConnectivityHubIamMemberConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_network_connectivity_hub_iam_member#project GoogleNetworkConnectivityHubIamMember#project}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleNetworkConnectivityHubIamMemberConditionOutputReference <a name="GoogleNetworkConnectivityHubIamMemberConditionOutputReference" id="@cdktn/provider-google-beta.googleNetworkConnectivityHubIamMember.GoogleNetworkConnectivityHubIamMemberConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleNetworkConnectivityHubIamMember.GoogleNetworkConnectivityHubIamMemberConditionOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_network_connectivity_hub_iam_member

googleNetworkConnectivityHubIamMember.GoogleNetworkConnectivityHubIamMemberConditionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityHubIamMember.GoogleNetworkConnectivityHubIamMemberConditionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityHubIamMember.GoogleNetworkConnectivityHubIamMemberConditionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleNetworkConnectivityHubIamMember.GoogleNetworkConnectivityHubIamMemberConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkConnectivityHubIamMember.GoogleNetworkConnectivityHubIamMemberConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityHubIamMember.GoogleNetworkConnectivityHubIamMemberConditionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityHubIamMember.GoogleNetworkConnectivityHubIamMemberConditionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityHubIamMember.GoogleNetworkConnectivityHubIamMemberConditionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityHubIamMember.GoogleNetworkConnectivityHubIamMemberConditionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityHubIamMember.GoogleNetworkConnectivityHubIamMemberConditionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityHubIamMember.GoogleNetworkConnectivityHubIamMemberConditionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityHubIamMember.GoogleNetworkConnectivityHubIamMemberConditionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityHubIamMember.GoogleNetworkConnectivityHubIamMemberConditionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityHubIamMember.GoogleNetworkConnectivityHubIamMemberConditionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityHubIamMember.GoogleNetworkConnectivityHubIamMemberConditionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityHubIamMember.GoogleNetworkConnectivityHubIamMemberConditionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityHubIamMember.GoogleNetworkConnectivityHubIamMemberConditionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityHubIamMember.GoogleNetworkConnectivityHubIamMemberConditionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityHubIamMember.GoogleNetworkConnectivityHubIamMemberConditionOutputReference.resetDescription">reset_description</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleNetworkConnectivityHubIamMember.GoogleNetworkConnectivityHubIamMemberConditionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleNetworkConnectivityHubIamMember.GoogleNetworkConnectivityHubIamMemberConditionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkConnectivityHubIamMember.GoogleNetworkConnectivityHubIamMemberConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleNetworkConnectivityHubIamMember.GoogleNetworkConnectivityHubIamMemberConditionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkConnectivityHubIamMember.GoogleNetworkConnectivityHubIamMemberConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleNetworkConnectivityHubIamMember.GoogleNetworkConnectivityHubIamMemberConditionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkConnectivityHubIamMember.GoogleNetworkConnectivityHubIamMemberConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleNetworkConnectivityHubIamMember.GoogleNetworkConnectivityHubIamMemberConditionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkConnectivityHubIamMember.GoogleNetworkConnectivityHubIamMemberConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleNetworkConnectivityHubIamMember.GoogleNetworkConnectivityHubIamMemberConditionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkConnectivityHubIamMember.GoogleNetworkConnectivityHubIamMemberConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleNetworkConnectivityHubIamMember.GoogleNetworkConnectivityHubIamMemberConditionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkConnectivityHubIamMember.GoogleNetworkConnectivityHubIamMemberConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleNetworkConnectivityHubIamMember.GoogleNetworkConnectivityHubIamMemberConditionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkConnectivityHubIamMember.GoogleNetworkConnectivityHubIamMemberConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleNetworkConnectivityHubIamMember.GoogleNetworkConnectivityHubIamMemberConditionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkConnectivityHubIamMember.GoogleNetworkConnectivityHubIamMemberConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleNetworkConnectivityHubIamMember.GoogleNetworkConnectivityHubIamMemberConditionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkConnectivityHubIamMember.GoogleNetworkConnectivityHubIamMemberConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleNetworkConnectivityHubIamMember.GoogleNetworkConnectivityHubIamMemberConditionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleNetworkConnectivityHubIamMember.GoogleNetworkConnectivityHubIamMemberConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleNetworkConnectivityHubIamMember.GoogleNetworkConnectivityHubIamMemberConditionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleNetworkConnectivityHubIamMember.GoogleNetworkConnectivityHubIamMemberConditionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleNetworkConnectivityHubIamMember.GoogleNetworkConnectivityHubIamMemberConditionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_description` <a name="reset_description" id="@cdktn/provider-google-beta.googleNetworkConnectivityHubIamMember.GoogleNetworkConnectivityHubIamMemberConditionOutputReference.resetDescription"></a>

```python
def reset_description() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityHubIamMember.GoogleNetworkConnectivityHubIamMemberConditionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityHubIamMember.GoogleNetworkConnectivityHubIamMemberConditionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityHubIamMember.GoogleNetworkConnectivityHubIamMemberConditionOutputReference.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityHubIamMember.GoogleNetworkConnectivityHubIamMemberConditionOutputReference.property.expressionInput">expression_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityHubIamMember.GoogleNetworkConnectivityHubIamMemberConditionOutputReference.property.titleInput">title_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityHubIamMember.GoogleNetworkConnectivityHubIamMemberConditionOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityHubIamMember.GoogleNetworkConnectivityHubIamMemberConditionOutputReference.property.expression">expression</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityHubIamMember.GoogleNetworkConnectivityHubIamMemberConditionOutputReference.property.title">title</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityHubIamMember.GoogleNetworkConnectivityHubIamMemberConditionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityHubIamMember.GoogleNetworkConnectivityHubIamMemberCondition">GoogleNetworkConnectivityHubIamMemberCondition</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleNetworkConnectivityHubIamMember.GoogleNetworkConnectivityHubIamMemberConditionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleNetworkConnectivityHubIamMember.GoogleNetworkConnectivityHubIamMemberConditionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktn/provider-google-beta.googleNetworkConnectivityHubIamMember.GoogleNetworkConnectivityHubIamMemberConditionOutputReference.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `expression_input`<sup>Optional</sup> <a name="expression_input" id="@cdktn/provider-google-beta.googleNetworkConnectivityHubIamMember.GoogleNetworkConnectivityHubIamMemberConditionOutputReference.property.expressionInput"></a>

```python
expression_input: str
```

- *Type:* str

---

##### `title_input`<sup>Optional</sup> <a name="title_input" id="@cdktn/provider-google-beta.googleNetworkConnectivityHubIamMember.GoogleNetworkConnectivityHubIamMemberConditionOutputReference.property.titleInput"></a>

```python
title_input: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google-beta.googleNetworkConnectivityHubIamMember.GoogleNetworkConnectivityHubIamMemberConditionOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktn/provider-google-beta.googleNetworkConnectivityHubIamMember.GoogleNetworkConnectivityHubIamMemberConditionOutputReference.property.expression"></a>

```python
expression: str
```

- *Type:* str

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktn/provider-google-beta.googleNetworkConnectivityHubIamMember.GoogleNetworkConnectivityHubIamMemberConditionOutputReference.property.title"></a>

```python
title: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleNetworkConnectivityHubIamMember.GoogleNetworkConnectivityHubIamMemberConditionOutputReference.property.internalValue"></a>

```python
internal_value: GoogleNetworkConnectivityHubIamMemberCondition
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkConnectivityHubIamMember.GoogleNetworkConnectivityHubIamMemberCondition">GoogleNetworkConnectivityHubIamMemberCondition</a>

---



