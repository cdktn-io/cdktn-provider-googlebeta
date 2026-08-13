# `googleIapAgentRegistryEndpointIamBinding` Submodule <a name="`googleIapAgentRegistryEndpointIamBinding` Submodule" id="@cdktn/provider-google-beta.googleIapAgentRegistryEndpointIamBinding"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleIapAgentRegistryEndpointIamBinding <a name="GoogleIapAgentRegistryEndpointIamBinding" id="@cdktn/provider-google-beta.googleIapAgentRegistryEndpointIamBinding.GoogleIapAgentRegistryEndpointIamBinding"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.44.0/docs/resources/google_iap_agent_registry_endpoint_iam_binding google_iap_agent_registry_endpoint_iam_binding}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleIapAgentRegistryEndpointIamBinding.GoogleIapAgentRegistryEndpointIamBinding.Initializer"></a>

```python
from cdktn_provider_google_beta import google_iap_agent_registry_endpoint_iam_binding

googleIapAgentRegistryEndpointIamBinding.GoogleIapAgentRegistryEndpointIamBinding(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  endpoint_id: str,
  members: typing.List[str],
  role: str,
  condition: GoogleIapAgentRegistryEndpointIamBindingCondition = None,
  id: str = None,
  location: str = None,
  project: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryEndpointIamBinding.GoogleIapAgentRegistryEndpointIamBinding.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryEndpointIamBinding.GoogleIapAgentRegistryEndpointIamBinding.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryEndpointIamBinding.GoogleIapAgentRegistryEndpointIamBinding.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryEndpointIamBinding.GoogleIapAgentRegistryEndpointIamBinding.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryEndpointIamBinding.GoogleIapAgentRegistryEndpointIamBinding.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryEndpointIamBinding.GoogleIapAgentRegistryEndpointIamBinding.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryEndpointIamBinding.GoogleIapAgentRegistryEndpointIamBinding.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryEndpointIamBinding.GoogleIapAgentRegistryEndpointIamBinding.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryEndpointIamBinding.GoogleIapAgentRegistryEndpointIamBinding.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryEndpointIamBinding.GoogleIapAgentRegistryEndpointIamBinding.Initializer.parameter.endpointId">endpoint_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.44.0/docs/resources/google_iap_agent_registry_endpoint_iam_binding#endpoint_id GoogleIapAgentRegistryEndpointIamBinding#endpoint_id}. |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryEndpointIamBinding.GoogleIapAgentRegistryEndpointIamBinding.Initializer.parameter.members">members</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.44.0/docs/resources/google_iap_agent_registry_endpoint_iam_binding#members GoogleIapAgentRegistryEndpointIamBinding#members}. |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryEndpointIamBinding.GoogleIapAgentRegistryEndpointIamBinding.Initializer.parameter.role">role</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.44.0/docs/resources/google_iap_agent_registry_endpoint_iam_binding#role GoogleIapAgentRegistryEndpointIamBinding#role}. |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryEndpointIamBinding.GoogleIapAgentRegistryEndpointIamBinding.Initializer.parameter.condition">condition</a></code> | <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryEndpointIamBinding.GoogleIapAgentRegistryEndpointIamBindingCondition">GoogleIapAgentRegistryEndpointIamBindingCondition</a></code> | condition block. |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryEndpointIamBinding.GoogleIapAgentRegistryEndpointIamBinding.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.44.0/docs/resources/google_iap_agent_registry_endpoint_iam_binding#id GoogleIapAgentRegistryEndpointIamBinding#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryEndpointIamBinding.GoogleIapAgentRegistryEndpointIamBinding.Initializer.parameter.location">location</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.44.0/docs/resources/google_iap_agent_registry_endpoint_iam_binding#location GoogleIapAgentRegistryEndpointIamBinding#location}. |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryEndpointIamBinding.GoogleIapAgentRegistryEndpointIamBinding.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.44.0/docs/resources/google_iap_agent_registry_endpoint_iam_binding#project GoogleIapAgentRegistryEndpointIamBinding#project}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleIapAgentRegistryEndpointIamBinding.GoogleIapAgentRegistryEndpointIamBinding.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleIapAgentRegistryEndpointIamBinding.GoogleIapAgentRegistryEndpointIamBinding.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleIapAgentRegistryEndpointIamBinding.GoogleIapAgentRegistryEndpointIamBinding.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleIapAgentRegistryEndpointIamBinding.GoogleIapAgentRegistryEndpointIamBinding.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google-beta.googleIapAgentRegistryEndpointIamBinding.GoogleIapAgentRegistryEndpointIamBinding.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google-beta.googleIapAgentRegistryEndpointIamBinding.GoogleIapAgentRegistryEndpointIamBinding.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleIapAgentRegistryEndpointIamBinding.GoogleIapAgentRegistryEndpointIamBinding.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleIapAgentRegistryEndpointIamBinding.GoogleIapAgentRegistryEndpointIamBinding.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleIapAgentRegistryEndpointIamBinding.GoogleIapAgentRegistryEndpointIamBinding.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `endpoint_id`<sup>Required</sup> <a name="endpoint_id" id="@cdktn/provider-google-beta.googleIapAgentRegistryEndpointIamBinding.GoogleIapAgentRegistryEndpointIamBinding.Initializer.parameter.endpointId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.44.0/docs/resources/google_iap_agent_registry_endpoint_iam_binding#endpoint_id GoogleIapAgentRegistryEndpointIamBinding#endpoint_id}.

---

##### `members`<sup>Required</sup> <a name="members" id="@cdktn/provider-google-beta.googleIapAgentRegistryEndpointIamBinding.GoogleIapAgentRegistryEndpointIamBinding.Initializer.parameter.members"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.44.0/docs/resources/google_iap_agent_registry_endpoint_iam_binding#members GoogleIapAgentRegistryEndpointIamBinding#members}.

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktn/provider-google-beta.googleIapAgentRegistryEndpointIamBinding.GoogleIapAgentRegistryEndpointIamBinding.Initializer.parameter.role"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.44.0/docs/resources/google_iap_agent_registry_endpoint_iam_binding#role GoogleIapAgentRegistryEndpointIamBinding#role}.

---

##### `condition`<sup>Optional</sup> <a name="condition" id="@cdktn/provider-google-beta.googleIapAgentRegistryEndpointIamBinding.GoogleIapAgentRegistryEndpointIamBinding.Initializer.parameter.condition"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleIapAgentRegistryEndpointIamBinding.GoogleIapAgentRegistryEndpointIamBindingCondition">GoogleIapAgentRegistryEndpointIamBindingCondition</a>

condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.44.0/docs/resources/google_iap_agent_registry_endpoint_iam_binding#condition GoogleIapAgentRegistryEndpointIamBinding#condition}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleIapAgentRegistryEndpointIamBinding.GoogleIapAgentRegistryEndpointIamBinding.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.44.0/docs/resources/google_iap_agent_registry_endpoint_iam_binding#id GoogleIapAgentRegistryEndpointIamBinding#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktn/provider-google-beta.googleIapAgentRegistryEndpointIamBinding.GoogleIapAgentRegistryEndpointIamBinding.Initializer.parameter.location"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.44.0/docs/resources/google_iap_agent_registry_endpoint_iam_binding#location GoogleIapAgentRegistryEndpointIamBinding#location}.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.googleIapAgentRegistryEndpointIamBinding.GoogleIapAgentRegistryEndpointIamBinding.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.44.0/docs/resources/google_iap_agent_registry_endpoint_iam_binding#project GoogleIapAgentRegistryEndpointIamBinding#project}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryEndpointIamBinding.GoogleIapAgentRegistryEndpointIamBinding.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryEndpointIamBinding.GoogleIapAgentRegistryEndpointIamBinding.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryEndpointIamBinding.GoogleIapAgentRegistryEndpointIamBinding.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryEndpointIamBinding.GoogleIapAgentRegistryEndpointIamBinding.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryEndpointIamBinding.GoogleIapAgentRegistryEndpointIamBinding.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryEndpointIamBinding.GoogleIapAgentRegistryEndpointIamBinding.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryEndpointIamBinding.GoogleIapAgentRegistryEndpointIamBinding.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryEndpointIamBinding.GoogleIapAgentRegistryEndpointIamBinding.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryEndpointIamBinding.GoogleIapAgentRegistryEndpointIamBinding.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryEndpointIamBinding.GoogleIapAgentRegistryEndpointIamBinding.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryEndpointIamBinding.GoogleIapAgentRegistryEndpointIamBinding.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryEndpointIamBinding.GoogleIapAgentRegistryEndpointIamBinding.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryEndpointIamBinding.GoogleIapAgentRegistryEndpointIamBinding.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryEndpointIamBinding.GoogleIapAgentRegistryEndpointIamBinding.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryEndpointIamBinding.GoogleIapAgentRegistryEndpointIamBinding.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryEndpointIamBinding.GoogleIapAgentRegistryEndpointIamBinding.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryEndpointIamBinding.GoogleIapAgentRegistryEndpointIamBinding.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryEndpointIamBinding.GoogleIapAgentRegistryEndpointIamBinding.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryEndpointIamBinding.GoogleIapAgentRegistryEndpointIamBinding.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryEndpointIamBinding.GoogleIapAgentRegistryEndpointIamBinding.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryEndpointIamBinding.GoogleIapAgentRegistryEndpointIamBinding.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryEndpointIamBinding.GoogleIapAgentRegistryEndpointIamBinding.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryEndpointIamBinding.GoogleIapAgentRegistryEndpointIamBinding.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryEndpointIamBinding.GoogleIapAgentRegistryEndpointIamBinding.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryEndpointIamBinding.GoogleIapAgentRegistryEndpointIamBinding.putCondition">put_condition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryEndpointIamBinding.GoogleIapAgentRegistryEndpointIamBinding.resetCondition">reset_condition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryEndpointIamBinding.GoogleIapAgentRegistryEndpointIamBinding.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryEndpointIamBinding.GoogleIapAgentRegistryEndpointIamBinding.resetLocation">reset_location</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryEndpointIamBinding.GoogleIapAgentRegistryEndpointIamBinding.resetProject">reset_project</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleIapAgentRegistryEndpointIamBinding.GoogleIapAgentRegistryEndpointIamBinding.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google-beta.googleIapAgentRegistryEndpointIamBinding.GoogleIapAgentRegistryEndpointIamBinding.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google-beta.googleIapAgentRegistryEndpointIamBinding.GoogleIapAgentRegistryEndpointIamBinding.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-google-beta.googleIapAgentRegistryEndpointIamBinding.GoogleIapAgentRegistryEndpointIamBinding.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google-beta.googleIapAgentRegistryEndpointIamBinding.GoogleIapAgentRegistryEndpointIamBinding.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleIapAgentRegistryEndpointIamBinding.GoogleIapAgentRegistryEndpointIamBinding.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-google-beta.googleIapAgentRegistryEndpointIamBinding.GoogleIapAgentRegistryEndpointIamBinding.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-google-beta.googleIapAgentRegistryEndpointIamBinding.GoogleIapAgentRegistryEndpointIamBinding.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-google-beta.googleIapAgentRegistryEndpointIamBinding.GoogleIapAgentRegistryEndpointIamBinding.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-google-beta.googleIapAgentRegistryEndpointIamBinding.GoogleIapAgentRegistryEndpointIamBinding.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-google-beta.googleIapAgentRegistryEndpointIamBinding.GoogleIapAgentRegistryEndpointIamBinding.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-google-beta.googleIapAgentRegistryEndpointIamBinding.GoogleIapAgentRegistryEndpointIamBinding.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-google-beta.googleIapAgentRegistryEndpointIamBinding.GoogleIapAgentRegistryEndpointIamBinding.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-google-beta.googleIapAgentRegistryEndpointIamBinding.GoogleIapAgentRegistryEndpointIamBinding.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleIapAgentRegistryEndpointIamBinding.GoogleIapAgentRegistryEndpointIamBinding.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleIapAgentRegistryEndpointIamBinding.GoogleIapAgentRegistryEndpointIamBinding.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleIapAgentRegistryEndpointIamBinding.GoogleIapAgentRegistryEndpointIamBinding.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleIapAgentRegistryEndpointIamBinding.GoogleIapAgentRegistryEndpointIamBinding.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleIapAgentRegistryEndpointIamBinding.GoogleIapAgentRegistryEndpointIamBinding.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleIapAgentRegistryEndpointIamBinding.GoogleIapAgentRegistryEndpointIamBinding.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleIapAgentRegistryEndpointIamBinding.GoogleIapAgentRegistryEndpointIamBinding.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleIapAgentRegistryEndpointIamBinding.GoogleIapAgentRegistryEndpointIamBinding.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleIapAgentRegistryEndpointIamBinding.GoogleIapAgentRegistryEndpointIamBinding.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleIapAgentRegistryEndpointIamBinding.GoogleIapAgentRegistryEndpointIamBinding.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleIapAgentRegistryEndpointIamBinding.GoogleIapAgentRegistryEndpointIamBinding.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleIapAgentRegistryEndpointIamBinding.GoogleIapAgentRegistryEndpointIamBinding.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleIapAgentRegistryEndpointIamBinding.GoogleIapAgentRegistryEndpointIamBinding.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleIapAgentRegistryEndpointIamBinding.GoogleIapAgentRegistryEndpointIamBinding.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleIapAgentRegistryEndpointIamBinding.GoogleIapAgentRegistryEndpointIamBinding.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleIapAgentRegistryEndpointIamBinding.GoogleIapAgentRegistryEndpointIamBinding.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleIapAgentRegistryEndpointIamBinding.GoogleIapAgentRegistryEndpointIamBinding.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleIapAgentRegistryEndpointIamBinding.GoogleIapAgentRegistryEndpointIamBinding.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-google-beta.googleIapAgentRegistryEndpointIamBinding.GoogleIapAgentRegistryEndpointIamBinding.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-google-beta.googleIapAgentRegistryEndpointIamBinding.GoogleIapAgentRegistryEndpointIamBinding.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleIapAgentRegistryEndpointIamBinding.GoogleIapAgentRegistryEndpointIamBinding.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleIapAgentRegistryEndpointIamBinding.GoogleIapAgentRegistryEndpointIamBinding.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleIapAgentRegistryEndpointIamBinding.GoogleIapAgentRegistryEndpointIamBinding.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleIapAgentRegistryEndpointIamBinding.GoogleIapAgentRegistryEndpointIamBinding.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-google-beta.googleIapAgentRegistryEndpointIamBinding.GoogleIapAgentRegistryEndpointIamBinding.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleIapAgentRegistryEndpointIamBinding.GoogleIapAgentRegistryEndpointIamBinding.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-google-beta.googleIapAgentRegistryEndpointIamBinding.GoogleIapAgentRegistryEndpointIamBinding.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-google-beta.googleIapAgentRegistryEndpointIamBinding.GoogleIapAgentRegistryEndpointIamBinding.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google-beta.googleIapAgentRegistryEndpointIamBinding.GoogleIapAgentRegistryEndpointIamBinding.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-google-beta.googleIapAgentRegistryEndpointIamBinding.GoogleIapAgentRegistryEndpointIamBinding.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleIapAgentRegistryEndpointIamBinding.GoogleIapAgentRegistryEndpointIamBinding.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_condition` <a name="put_condition" id="@cdktn/provider-google-beta.googleIapAgentRegistryEndpointIamBinding.GoogleIapAgentRegistryEndpointIamBinding.putCondition"></a>

```python
def put_condition(
  expression: str,
  title: str,
  description: str = None
) -> None
```

###### `expression`<sup>Required</sup> <a name="expression" id="@cdktn/provider-google-beta.googleIapAgentRegistryEndpointIamBinding.GoogleIapAgentRegistryEndpointIamBinding.putCondition.parameter.expression"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.44.0/docs/resources/google_iap_agent_registry_endpoint_iam_binding#expression GoogleIapAgentRegistryEndpointIamBinding#expression}.

---

###### `title`<sup>Required</sup> <a name="title" id="@cdktn/provider-google-beta.googleIapAgentRegistryEndpointIamBinding.GoogleIapAgentRegistryEndpointIamBinding.putCondition.parameter.title"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.44.0/docs/resources/google_iap_agent_registry_endpoint_iam_binding#title GoogleIapAgentRegistryEndpointIamBinding#title}.

---

###### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google-beta.googleIapAgentRegistryEndpointIamBinding.GoogleIapAgentRegistryEndpointIamBinding.putCondition.parameter.description"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.44.0/docs/resources/google_iap_agent_registry_endpoint_iam_binding#description GoogleIapAgentRegistryEndpointIamBinding#description}.

---

##### `reset_condition` <a name="reset_condition" id="@cdktn/provider-google-beta.googleIapAgentRegistryEndpointIamBinding.GoogleIapAgentRegistryEndpointIamBinding.resetCondition"></a>

```python
def reset_condition() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktn/provider-google-beta.googleIapAgentRegistryEndpointIamBinding.GoogleIapAgentRegistryEndpointIamBinding.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_location` <a name="reset_location" id="@cdktn/provider-google-beta.googleIapAgentRegistryEndpointIamBinding.GoogleIapAgentRegistryEndpointIamBinding.resetLocation"></a>

```python
def reset_location() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktn/provider-google-beta.googleIapAgentRegistryEndpointIamBinding.GoogleIapAgentRegistryEndpointIamBinding.resetProject"></a>

```python
def reset_project() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryEndpointIamBinding.GoogleIapAgentRegistryEndpointIamBinding.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryEndpointIamBinding.GoogleIapAgentRegistryEndpointIamBinding.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryEndpointIamBinding.GoogleIapAgentRegistryEndpointIamBinding.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryEndpointIamBinding.GoogleIapAgentRegistryEndpointIamBinding.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a GoogleIapAgentRegistryEndpointIamBinding resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-google-beta.googleIapAgentRegistryEndpointIamBinding.GoogleIapAgentRegistryEndpointIamBinding.isConstruct"></a>

```python
from cdktn_provider_google_beta import google_iap_agent_registry_endpoint_iam_binding

googleIapAgentRegistryEndpointIamBinding.GoogleIapAgentRegistryEndpointIamBinding.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleIapAgentRegistryEndpointIamBinding.GoogleIapAgentRegistryEndpointIamBinding.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-google-beta.googleIapAgentRegistryEndpointIamBinding.GoogleIapAgentRegistryEndpointIamBinding.isTerraformElement"></a>

```python
from cdktn_provider_google_beta import google_iap_agent_registry_endpoint_iam_binding

googleIapAgentRegistryEndpointIamBinding.GoogleIapAgentRegistryEndpointIamBinding.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleIapAgentRegistryEndpointIamBinding.GoogleIapAgentRegistryEndpointIamBinding.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-google-beta.googleIapAgentRegistryEndpointIamBinding.GoogleIapAgentRegistryEndpointIamBinding.isTerraformResource"></a>

```python
from cdktn_provider_google_beta import google_iap_agent_registry_endpoint_iam_binding

googleIapAgentRegistryEndpointIamBinding.GoogleIapAgentRegistryEndpointIamBinding.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleIapAgentRegistryEndpointIamBinding.GoogleIapAgentRegistryEndpointIamBinding.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-google-beta.googleIapAgentRegistryEndpointIamBinding.GoogleIapAgentRegistryEndpointIamBinding.generateConfigForImport"></a>

```python
from cdktn_provider_google_beta import google_iap_agent_registry_endpoint_iam_binding

googleIapAgentRegistryEndpointIamBinding.GoogleIapAgentRegistryEndpointIamBinding.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a GoogleIapAgentRegistryEndpointIamBinding resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleIapAgentRegistryEndpointIamBinding.GoogleIapAgentRegistryEndpointIamBinding.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-google-beta.googleIapAgentRegistryEndpointIamBinding.GoogleIapAgentRegistryEndpointIamBinding.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the GoogleIapAgentRegistryEndpointIamBinding to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-google-beta.googleIapAgentRegistryEndpointIamBinding.GoogleIapAgentRegistryEndpointIamBinding.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing GoogleIapAgentRegistryEndpointIamBinding that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.44.0/docs/resources/google_iap_agent_registry_endpoint_iam_binding#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleIapAgentRegistryEndpointIamBinding.GoogleIapAgentRegistryEndpointIamBinding.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the GoogleIapAgentRegistryEndpointIamBinding to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryEndpointIamBinding.GoogleIapAgentRegistryEndpointIamBinding.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryEndpointIamBinding.GoogleIapAgentRegistryEndpointIamBinding.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryEndpointIamBinding.GoogleIapAgentRegistryEndpointIamBinding.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryEndpointIamBinding.GoogleIapAgentRegistryEndpointIamBinding.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryEndpointIamBinding.GoogleIapAgentRegistryEndpointIamBinding.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryEndpointIamBinding.GoogleIapAgentRegistryEndpointIamBinding.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryEndpointIamBinding.GoogleIapAgentRegistryEndpointIamBinding.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryEndpointIamBinding.GoogleIapAgentRegistryEndpointIamBinding.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryEndpointIamBinding.GoogleIapAgentRegistryEndpointIamBinding.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryEndpointIamBinding.GoogleIapAgentRegistryEndpointIamBinding.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryEndpointIamBinding.GoogleIapAgentRegistryEndpointIamBinding.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryEndpointIamBinding.GoogleIapAgentRegistryEndpointIamBinding.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryEndpointIamBinding.GoogleIapAgentRegistryEndpointIamBinding.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryEndpointIamBinding.GoogleIapAgentRegistryEndpointIamBinding.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryEndpointIamBinding.GoogleIapAgentRegistryEndpointIamBinding.property.condition">condition</a></code> | <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryEndpointIamBinding.GoogleIapAgentRegistryEndpointIamBindingConditionOutputReference">GoogleIapAgentRegistryEndpointIamBindingConditionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryEndpointIamBinding.GoogleIapAgentRegistryEndpointIamBinding.property.etag">etag</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryEndpointIamBinding.GoogleIapAgentRegistryEndpointIamBinding.property.conditionInput">condition_input</a></code> | <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryEndpointIamBinding.GoogleIapAgentRegistryEndpointIamBindingCondition">GoogleIapAgentRegistryEndpointIamBindingCondition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryEndpointIamBinding.GoogleIapAgentRegistryEndpointIamBinding.property.endpointIdInput">endpoint_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryEndpointIamBinding.GoogleIapAgentRegistryEndpointIamBinding.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryEndpointIamBinding.GoogleIapAgentRegistryEndpointIamBinding.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryEndpointIamBinding.GoogleIapAgentRegistryEndpointIamBinding.property.membersInput">members_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryEndpointIamBinding.GoogleIapAgentRegistryEndpointIamBinding.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryEndpointIamBinding.GoogleIapAgentRegistryEndpointIamBinding.property.roleInput">role_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryEndpointIamBinding.GoogleIapAgentRegistryEndpointIamBinding.property.endpointId">endpoint_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryEndpointIamBinding.GoogleIapAgentRegistryEndpointIamBinding.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryEndpointIamBinding.GoogleIapAgentRegistryEndpointIamBinding.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryEndpointIamBinding.GoogleIapAgentRegistryEndpointIamBinding.property.members">members</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryEndpointIamBinding.GoogleIapAgentRegistryEndpointIamBinding.property.project">project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryEndpointIamBinding.GoogleIapAgentRegistryEndpointIamBinding.property.role">role</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google-beta.googleIapAgentRegistryEndpointIamBinding.GoogleIapAgentRegistryEndpointIamBinding.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-google-beta.googleIapAgentRegistryEndpointIamBinding.GoogleIapAgentRegistryEndpointIamBinding.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleIapAgentRegistryEndpointIamBinding.GoogleIapAgentRegistryEndpointIamBinding.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-google-beta.googleIapAgentRegistryEndpointIamBinding.GoogleIapAgentRegistryEndpointIamBinding.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-google-beta.googleIapAgentRegistryEndpointIamBinding.GoogleIapAgentRegistryEndpointIamBinding.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-google-beta.googleIapAgentRegistryEndpointIamBinding.GoogleIapAgentRegistryEndpointIamBinding.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-google-beta.googleIapAgentRegistryEndpointIamBinding.GoogleIapAgentRegistryEndpointIamBinding.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleIapAgentRegistryEndpointIamBinding.GoogleIapAgentRegistryEndpointIamBinding.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleIapAgentRegistryEndpointIamBinding.GoogleIapAgentRegistryEndpointIamBinding.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google-beta.googleIapAgentRegistryEndpointIamBinding.GoogleIapAgentRegistryEndpointIamBinding.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google-beta.googleIapAgentRegistryEndpointIamBinding.GoogleIapAgentRegistryEndpointIamBinding.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleIapAgentRegistryEndpointIamBinding.GoogleIapAgentRegistryEndpointIamBinding.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleIapAgentRegistryEndpointIamBinding.GoogleIapAgentRegistryEndpointIamBinding.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleIapAgentRegistryEndpointIamBinding.GoogleIapAgentRegistryEndpointIamBinding.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `condition`<sup>Required</sup> <a name="condition" id="@cdktn/provider-google-beta.googleIapAgentRegistryEndpointIamBinding.GoogleIapAgentRegistryEndpointIamBinding.property.condition"></a>

```python
condition: GoogleIapAgentRegistryEndpointIamBindingConditionOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleIapAgentRegistryEndpointIamBinding.GoogleIapAgentRegistryEndpointIamBindingConditionOutputReference">GoogleIapAgentRegistryEndpointIamBindingConditionOutputReference</a>

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktn/provider-google-beta.googleIapAgentRegistryEndpointIamBinding.GoogleIapAgentRegistryEndpointIamBinding.property.etag"></a>

```python
etag: str
```

- *Type:* str

---

##### `condition_input`<sup>Optional</sup> <a name="condition_input" id="@cdktn/provider-google-beta.googleIapAgentRegistryEndpointIamBinding.GoogleIapAgentRegistryEndpointIamBinding.property.conditionInput"></a>

```python
condition_input: GoogleIapAgentRegistryEndpointIamBindingCondition
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleIapAgentRegistryEndpointIamBinding.GoogleIapAgentRegistryEndpointIamBindingCondition">GoogleIapAgentRegistryEndpointIamBindingCondition</a>

---

##### `endpoint_id_input`<sup>Optional</sup> <a name="endpoint_id_input" id="@cdktn/provider-google-beta.googleIapAgentRegistryEndpointIamBinding.GoogleIapAgentRegistryEndpointIamBinding.property.endpointIdInput"></a>

```python
endpoint_id_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-google-beta.googleIapAgentRegistryEndpointIamBinding.GoogleIapAgentRegistryEndpointIamBinding.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktn/provider-google-beta.googleIapAgentRegistryEndpointIamBinding.GoogleIapAgentRegistryEndpointIamBinding.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `members_input`<sup>Optional</sup> <a name="members_input" id="@cdktn/provider-google-beta.googleIapAgentRegistryEndpointIamBinding.GoogleIapAgentRegistryEndpointIamBinding.property.membersInput"></a>

```python
members_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktn/provider-google-beta.googleIapAgentRegistryEndpointIamBinding.GoogleIapAgentRegistryEndpointIamBinding.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `role_input`<sup>Optional</sup> <a name="role_input" id="@cdktn/provider-google-beta.googleIapAgentRegistryEndpointIamBinding.GoogleIapAgentRegistryEndpointIamBinding.property.roleInput"></a>

```python
role_input: str
```

- *Type:* str

---

##### `endpoint_id`<sup>Required</sup> <a name="endpoint_id" id="@cdktn/provider-google-beta.googleIapAgentRegistryEndpointIamBinding.GoogleIapAgentRegistryEndpointIamBinding.property.endpointId"></a>

```python
endpoint_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleIapAgentRegistryEndpointIamBinding.GoogleIapAgentRegistryEndpointIamBinding.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleIapAgentRegistryEndpointIamBinding.GoogleIapAgentRegistryEndpointIamBinding.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `members`<sup>Required</sup> <a name="members" id="@cdktn/provider-google-beta.googleIapAgentRegistryEndpointIamBinding.GoogleIapAgentRegistryEndpointIamBinding.property.members"></a>

```python
members: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google-beta.googleIapAgentRegistryEndpointIamBinding.GoogleIapAgentRegistryEndpointIamBinding.property.project"></a>

```python
project: str
```

- *Type:* str

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktn/provider-google-beta.googleIapAgentRegistryEndpointIamBinding.GoogleIapAgentRegistryEndpointIamBinding.property.role"></a>

```python
role: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryEndpointIamBinding.GoogleIapAgentRegistryEndpointIamBinding.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google-beta.googleIapAgentRegistryEndpointIamBinding.GoogleIapAgentRegistryEndpointIamBinding.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleIapAgentRegistryEndpointIamBindingCondition <a name="GoogleIapAgentRegistryEndpointIamBindingCondition" id="@cdktn/provider-google-beta.googleIapAgentRegistryEndpointIamBinding.GoogleIapAgentRegistryEndpointIamBindingCondition"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleIapAgentRegistryEndpointIamBinding.GoogleIapAgentRegistryEndpointIamBindingCondition.Initializer"></a>

```python
from cdktn_provider_google_beta import google_iap_agent_registry_endpoint_iam_binding

googleIapAgentRegistryEndpointIamBinding.GoogleIapAgentRegistryEndpointIamBindingCondition(
  expression: str,
  title: str,
  description: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryEndpointIamBinding.GoogleIapAgentRegistryEndpointIamBindingCondition.property.expression">expression</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.44.0/docs/resources/google_iap_agent_registry_endpoint_iam_binding#expression GoogleIapAgentRegistryEndpointIamBinding#expression}. |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryEndpointIamBinding.GoogleIapAgentRegistryEndpointIamBindingCondition.property.title">title</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.44.0/docs/resources/google_iap_agent_registry_endpoint_iam_binding#title GoogleIapAgentRegistryEndpointIamBinding#title}. |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryEndpointIamBinding.GoogleIapAgentRegistryEndpointIamBindingCondition.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.44.0/docs/resources/google_iap_agent_registry_endpoint_iam_binding#description GoogleIapAgentRegistryEndpointIamBinding#description}. |

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktn/provider-google-beta.googleIapAgentRegistryEndpointIamBinding.GoogleIapAgentRegistryEndpointIamBindingCondition.property.expression"></a>

```python
expression: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.44.0/docs/resources/google_iap_agent_registry_endpoint_iam_binding#expression GoogleIapAgentRegistryEndpointIamBinding#expression}.

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktn/provider-google-beta.googleIapAgentRegistryEndpointIamBinding.GoogleIapAgentRegistryEndpointIamBindingCondition.property.title"></a>

```python
title: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.44.0/docs/resources/google_iap_agent_registry_endpoint_iam_binding#title GoogleIapAgentRegistryEndpointIamBinding#title}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google-beta.googleIapAgentRegistryEndpointIamBinding.GoogleIapAgentRegistryEndpointIamBindingCondition.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.44.0/docs/resources/google_iap_agent_registry_endpoint_iam_binding#description GoogleIapAgentRegistryEndpointIamBinding#description}.

---

### GoogleIapAgentRegistryEndpointIamBindingConfig <a name="GoogleIapAgentRegistryEndpointIamBindingConfig" id="@cdktn/provider-google-beta.googleIapAgentRegistryEndpointIamBinding.GoogleIapAgentRegistryEndpointIamBindingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleIapAgentRegistryEndpointIamBinding.GoogleIapAgentRegistryEndpointIamBindingConfig.Initializer"></a>

```python
from cdktn_provider_google_beta import google_iap_agent_registry_endpoint_iam_binding

googleIapAgentRegistryEndpointIamBinding.GoogleIapAgentRegistryEndpointIamBindingConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  endpoint_id: str,
  members: typing.List[str],
  role: str,
  condition: GoogleIapAgentRegistryEndpointIamBindingCondition = None,
  id: str = None,
  location: str = None,
  project: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryEndpointIamBinding.GoogleIapAgentRegistryEndpointIamBindingConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryEndpointIamBinding.GoogleIapAgentRegistryEndpointIamBindingConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryEndpointIamBinding.GoogleIapAgentRegistryEndpointIamBindingConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryEndpointIamBinding.GoogleIapAgentRegistryEndpointIamBindingConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryEndpointIamBinding.GoogleIapAgentRegistryEndpointIamBindingConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryEndpointIamBinding.GoogleIapAgentRegistryEndpointIamBindingConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryEndpointIamBinding.GoogleIapAgentRegistryEndpointIamBindingConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryEndpointIamBinding.GoogleIapAgentRegistryEndpointIamBindingConfig.property.endpointId">endpoint_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.44.0/docs/resources/google_iap_agent_registry_endpoint_iam_binding#endpoint_id GoogleIapAgentRegistryEndpointIamBinding#endpoint_id}. |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryEndpointIamBinding.GoogleIapAgentRegistryEndpointIamBindingConfig.property.members">members</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.44.0/docs/resources/google_iap_agent_registry_endpoint_iam_binding#members GoogleIapAgentRegistryEndpointIamBinding#members}. |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryEndpointIamBinding.GoogleIapAgentRegistryEndpointIamBindingConfig.property.role">role</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.44.0/docs/resources/google_iap_agent_registry_endpoint_iam_binding#role GoogleIapAgentRegistryEndpointIamBinding#role}. |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryEndpointIamBinding.GoogleIapAgentRegistryEndpointIamBindingConfig.property.condition">condition</a></code> | <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryEndpointIamBinding.GoogleIapAgentRegistryEndpointIamBindingCondition">GoogleIapAgentRegistryEndpointIamBindingCondition</a></code> | condition block. |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryEndpointIamBinding.GoogleIapAgentRegistryEndpointIamBindingConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.44.0/docs/resources/google_iap_agent_registry_endpoint_iam_binding#id GoogleIapAgentRegistryEndpointIamBinding#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryEndpointIamBinding.GoogleIapAgentRegistryEndpointIamBindingConfig.property.location">location</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.44.0/docs/resources/google_iap_agent_registry_endpoint_iam_binding#location GoogleIapAgentRegistryEndpointIamBinding#location}. |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryEndpointIamBinding.GoogleIapAgentRegistryEndpointIamBindingConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.44.0/docs/resources/google_iap_agent_registry_endpoint_iam_binding#project GoogleIapAgentRegistryEndpointIamBinding#project}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleIapAgentRegistryEndpointIamBinding.GoogleIapAgentRegistryEndpointIamBindingConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleIapAgentRegistryEndpointIamBinding.GoogleIapAgentRegistryEndpointIamBindingConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google-beta.googleIapAgentRegistryEndpointIamBinding.GoogleIapAgentRegistryEndpointIamBindingConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google-beta.googleIapAgentRegistryEndpointIamBinding.GoogleIapAgentRegistryEndpointIamBindingConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleIapAgentRegistryEndpointIamBinding.GoogleIapAgentRegistryEndpointIamBindingConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleIapAgentRegistryEndpointIamBinding.GoogleIapAgentRegistryEndpointIamBindingConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleIapAgentRegistryEndpointIamBinding.GoogleIapAgentRegistryEndpointIamBindingConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `endpoint_id`<sup>Required</sup> <a name="endpoint_id" id="@cdktn/provider-google-beta.googleIapAgentRegistryEndpointIamBinding.GoogleIapAgentRegistryEndpointIamBindingConfig.property.endpointId"></a>

```python
endpoint_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.44.0/docs/resources/google_iap_agent_registry_endpoint_iam_binding#endpoint_id GoogleIapAgentRegistryEndpointIamBinding#endpoint_id}.

---

##### `members`<sup>Required</sup> <a name="members" id="@cdktn/provider-google-beta.googleIapAgentRegistryEndpointIamBinding.GoogleIapAgentRegistryEndpointIamBindingConfig.property.members"></a>

```python
members: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.44.0/docs/resources/google_iap_agent_registry_endpoint_iam_binding#members GoogleIapAgentRegistryEndpointIamBinding#members}.

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktn/provider-google-beta.googleIapAgentRegistryEndpointIamBinding.GoogleIapAgentRegistryEndpointIamBindingConfig.property.role"></a>

```python
role: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.44.0/docs/resources/google_iap_agent_registry_endpoint_iam_binding#role GoogleIapAgentRegistryEndpointIamBinding#role}.

---

##### `condition`<sup>Optional</sup> <a name="condition" id="@cdktn/provider-google-beta.googleIapAgentRegistryEndpointIamBinding.GoogleIapAgentRegistryEndpointIamBindingConfig.property.condition"></a>

```python
condition: GoogleIapAgentRegistryEndpointIamBindingCondition
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleIapAgentRegistryEndpointIamBinding.GoogleIapAgentRegistryEndpointIamBindingCondition">GoogleIapAgentRegistryEndpointIamBindingCondition</a>

condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.44.0/docs/resources/google_iap_agent_registry_endpoint_iam_binding#condition GoogleIapAgentRegistryEndpointIamBinding#condition}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleIapAgentRegistryEndpointIamBinding.GoogleIapAgentRegistryEndpointIamBindingConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.44.0/docs/resources/google_iap_agent_registry_endpoint_iam_binding#id GoogleIapAgentRegistryEndpointIamBinding#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktn/provider-google-beta.googleIapAgentRegistryEndpointIamBinding.GoogleIapAgentRegistryEndpointIamBindingConfig.property.location"></a>

```python
location: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.44.0/docs/resources/google_iap_agent_registry_endpoint_iam_binding#location GoogleIapAgentRegistryEndpointIamBinding#location}.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.googleIapAgentRegistryEndpointIamBinding.GoogleIapAgentRegistryEndpointIamBindingConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.44.0/docs/resources/google_iap_agent_registry_endpoint_iam_binding#project GoogleIapAgentRegistryEndpointIamBinding#project}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleIapAgentRegistryEndpointIamBindingConditionOutputReference <a name="GoogleIapAgentRegistryEndpointIamBindingConditionOutputReference" id="@cdktn/provider-google-beta.googleIapAgentRegistryEndpointIamBinding.GoogleIapAgentRegistryEndpointIamBindingConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleIapAgentRegistryEndpointIamBinding.GoogleIapAgentRegistryEndpointIamBindingConditionOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_iap_agent_registry_endpoint_iam_binding

googleIapAgentRegistryEndpointIamBinding.GoogleIapAgentRegistryEndpointIamBindingConditionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryEndpointIamBinding.GoogleIapAgentRegistryEndpointIamBindingConditionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryEndpointIamBinding.GoogleIapAgentRegistryEndpointIamBindingConditionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleIapAgentRegistryEndpointIamBinding.GoogleIapAgentRegistryEndpointIamBindingConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleIapAgentRegistryEndpointIamBinding.GoogleIapAgentRegistryEndpointIamBindingConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryEndpointIamBinding.GoogleIapAgentRegistryEndpointIamBindingConditionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryEndpointIamBinding.GoogleIapAgentRegistryEndpointIamBindingConditionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryEndpointIamBinding.GoogleIapAgentRegistryEndpointIamBindingConditionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryEndpointIamBinding.GoogleIapAgentRegistryEndpointIamBindingConditionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryEndpointIamBinding.GoogleIapAgentRegistryEndpointIamBindingConditionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryEndpointIamBinding.GoogleIapAgentRegistryEndpointIamBindingConditionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryEndpointIamBinding.GoogleIapAgentRegistryEndpointIamBindingConditionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryEndpointIamBinding.GoogleIapAgentRegistryEndpointIamBindingConditionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryEndpointIamBinding.GoogleIapAgentRegistryEndpointIamBindingConditionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryEndpointIamBinding.GoogleIapAgentRegistryEndpointIamBindingConditionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryEndpointIamBinding.GoogleIapAgentRegistryEndpointIamBindingConditionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryEndpointIamBinding.GoogleIapAgentRegistryEndpointIamBindingConditionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryEndpointIamBinding.GoogleIapAgentRegistryEndpointIamBindingConditionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryEndpointIamBinding.GoogleIapAgentRegistryEndpointIamBindingConditionOutputReference.resetDescription">reset_description</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleIapAgentRegistryEndpointIamBinding.GoogleIapAgentRegistryEndpointIamBindingConditionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleIapAgentRegistryEndpointIamBinding.GoogleIapAgentRegistryEndpointIamBindingConditionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleIapAgentRegistryEndpointIamBinding.GoogleIapAgentRegistryEndpointIamBindingConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleIapAgentRegistryEndpointIamBinding.GoogleIapAgentRegistryEndpointIamBindingConditionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleIapAgentRegistryEndpointIamBinding.GoogleIapAgentRegistryEndpointIamBindingConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleIapAgentRegistryEndpointIamBinding.GoogleIapAgentRegistryEndpointIamBindingConditionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleIapAgentRegistryEndpointIamBinding.GoogleIapAgentRegistryEndpointIamBindingConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleIapAgentRegistryEndpointIamBinding.GoogleIapAgentRegistryEndpointIamBindingConditionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleIapAgentRegistryEndpointIamBinding.GoogleIapAgentRegistryEndpointIamBindingConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleIapAgentRegistryEndpointIamBinding.GoogleIapAgentRegistryEndpointIamBindingConditionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleIapAgentRegistryEndpointIamBinding.GoogleIapAgentRegistryEndpointIamBindingConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleIapAgentRegistryEndpointIamBinding.GoogleIapAgentRegistryEndpointIamBindingConditionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleIapAgentRegistryEndpointIamBinding.GoogleIapAgentRegistryEndpointIamBindingConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleIapAgentRegistryEndpointIamBinding.GoogleIapAgentRegistryEndpointIamBindingConditionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleIapAgentRegistryEndpointIamBinding.GoogleIapAgentRegistryEndpointIamBindingConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleIapAgentRegistryEndpointIamBinding.GoogleIapAgentRegistryEndpointIamBindingConditionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleIapAgentRegistryEndpointIamBinding.GoogleIapAgentRegistryEndpointIamBindingConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleIapAgentRegistryEndpointIamBinding.GoogleIapAgentRegistryEndpointIamBindingConditionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleIapAgentRegistryEndpointIamBinding.GoogleIapAgentRegistryEndpointIamBindingConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleIapAgentRegistryEndpointIamBinding.GoogleIapAgentRegistryEndpointIamBindingConditionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleIapAgentRegistryEndpointIamBinding.GoogleIapAgentRegistryEndpointIamBindingConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleIapAgentRegistryEndpointIamBinding.GoogleIapAgentRegistryEndpointIamBindingConditionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleIapAgentRegistryEndpointIamBinding.GoogleIapAgentRegistryEndpointIamBindingConditionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleIapAgentRegistryEndpointIamBinding.GoogleIapAgentRegistryEndpointIamBindingConditionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_description` <a name="reset_description" id="@cdktn/provider-google-beta.googleIapAgentRegistryEndpointIamBinding.GoogleIapAgentRegistryEndpointIamBindingConditionOutputReference.resetDescription"></a>

```python
def reset_description() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryEndpointIamBinding.GoogleIapAgentRegistryEndpointIamBindingConditionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryEndpointIamBinding.GoogleIapAgentRegistryEndpointIamBindingConditionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryEndpointIamBinding.GoogleIapAgentRegistryEndpointIamBindingConditionOutputReference.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryEndpointIamBinding.GoogleIapAgentRegistryEndpointIamBindingConditionOutputReference.property.expressionInput">expression_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryEndpointIamBinding.GoogleIapAgentRegistryEndpointIamBindingConditionOutputReference.property.titleInput">title_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryEndpointIamBinding.GoogleIapAgentRegistryEndpointIamBindingConditionOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryEndpointIamBinding.GoogleIapAgentRegistryEndpointIamBindingConditionOutputReference.property.expression">expression</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryEndpointIamBinding.GoogleIapAgentRegistryEndpointIamBindingConditionOutputReference.property.title">title</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryEndpointIamBinding.GoogleIapAgentRegistryEndpointIamBindingConditionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryEndpointIamBinding.GoogleIapAgentRegistryEndpointIamBindingCondition">GoogleIapAgentRegistryEndpointIamBindingCondition</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleIapAgentRegistryEndpointIamBinding.GoogleIapAgentRegistryEndpointIamBindingConditionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleIapAgentRegistryEndpointIamBinding.GoogleIapAgentRegistryEndpointIamBindingConditionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktn/provider-google-beta.googleIapAgentRegistryEndpointIamBinding.GoogleIapAgentRegistryEndpointIamBindingConditionOutputReference.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `expression_input`<sup>Optional</sup> <a name="expression_input" id="@cdktn/provider-google-beta.googleIapAgentRegistryEndpointIamBinding.GoogleIapAgentRegistryEndpointIamBindingConditionOutputReference.property.expressionInput"></a>

```python
expression_input: str
```

- *Type:* str

---

##### `title_input`<sup>Optional</sup> <a name="title_input" id="@cdktn/provider-google-beta.googleIapAgentRegistryEndpointIamBinding.GoogleIapAgentRegistryEndpointIamBindingConditionOutputReference.property.titleInput"></a>

```python
title_input: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google-beta.googleIapAgentRegistryEndpointIamBinding.GoogleIapAgentRegistryEndpointIamBindingConditionOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktn/provider-google-beta.googleIapAgentRegistryEndpointIamBinding.GoogleIapAgentRegistryEndpointIamBindingConditionOutputReference.property.expression"></a>

```python
expression: str
```

- *Type:* str

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktn/provider-google-beta.googleIapAgentRegistryEndpointIamBinding.GoogleIapAgentRegistryEndpointIamBindingConditionOutputReference.property.title"></a>

```python
title: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleIapAgentRegistryEndpointIamBinding.GoogleIapAgentRegistryEndpointIamBindingConditionOutputReference.property.internalValue"></a>

```python
internal_value: GoogleIapAgentRegistryEndpointIamBindingCondition
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleIapAgentRegistryEndpointIamBinding.GoogleIapAgentRegistryEndpointIamBindingCondition">GoogleIapAgentRegistryEndpointIamBindingCondition</a>

---



