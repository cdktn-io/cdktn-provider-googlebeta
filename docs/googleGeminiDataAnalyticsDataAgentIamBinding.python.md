# `googleGeminiDataAnalyticsDataAgentIamBinding` Submodule <a name="`googleGeminiDataAnalyticsDataAgentIamBinding` Submodule" id="@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamBinding"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleGeminiDataAnalyticsDataAgentIamBinding <a name="GoogleGeminiDataAnalyticsDataAgentIamBinding" id="@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamBinding.GoogleGeminiDataAnalyticsDataAgentIamBinding"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_gemini_data_analytics_data_agent_iam_binding google_gemini_data_analytics_data_agent_iam_binding}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamBinding.GoogleGeminiDataAnalyticsDataAgentIamBinding.Initializer"></a>

```python
from cdktn_provider_google_beta import google_gemini_data_analytics_data_agent_iam_binding

googleGeminiDataAnalyticsDataAgentIamBinding.GoogleGeminiDataAnalyticsDataAgentIamBinding(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  data_agent_id: str,
  members: typing.List[str],
  role: str,
  condition: GoogleGeminiDataAnalyticsDataAgentIamBindingCondition = None,
  id: str = None,
  location: str = None,
  project: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamBinding.GoogleGeminiDataAnalyticsDataAgentIamBinding.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamBinding.GoogleGeminiDataAnalyticsDataAgentIamBinding.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamBinding.GoogleGeminiDataAnalyticsDataAgentIamBinding.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamBinding.GoogleGeminiDataAnalyticsDataAgentIamBinding.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamBinding.GoogleGeminiDataAnalyticsDataAgentIamBinding.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamBinding.GoogleGeminiDataAnalyticsDataAgentIamBinding.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamBinding.GoogleGeminiDataAnalyticsDataAgentIamBinding.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamBinding.GoogleGeminiDataAnalyticsDataAgentIamBinding.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamBinding.GoogleGeminiDataAnalyticsDataAgentIamBinding.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamBinding.GoogleGeminiDataAnalyticsDataAgentIamBinding.Initializer.parameter.dataAgentId">data_agent_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_gemini_data_analytics_data_agent_iam_binding#data_agent_id GoogleGeminiDataAnalyticsDataAgentIamBinding#data_agent_id}. |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamBinding.GoogleGeminiDataAnalyticsDataAgentIamBinding.Initializer.parameter.members">members</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_gemini_data_analytics_data_agent_iam_binding#members GoogleGeminiDataAnalyticsDataAgentIamBinding#members}. |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamBinding.GoogleGeminiDataAnalyticsDataAgentIamBinding.Initializer.parameter.role">role</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_gemini_data_analytics_data_agent_iam_binding#role GoogleGeminiDataAnalyticsDataAgentIamBinding#role}. |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamBinding.GoogleGeminiDataAnalyticsDataAgentIamBinding.Initializer.parameter.condition">condition</a></code> | <code><a href="#@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamBinding.GoogleGeminiDataAnalyticsDataAgentIamBindingCondition">GoogleGeminiDataAnalyticsDataAgentIamBindingCondition</a></code> | condition block. |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamBinding.GoogleGeminiDataAnalyticsDataAgentIamBinding.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_gemini_data_analytics_data_agent_iam_binding#id GoogleGeminiDataAnalyticsDataAgentIamBinding#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamBinding.GoogleGeminiDataAnalyticsDataAgentIamBinding.Initializer.parameter.location">location</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_gemini_data_analytics_data_agent_iam_binding#location GoogleGeminiDataAnalyticsDataAgentIamBinding#location}. |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamBinding.GoogleGeminiDataAnalyticsDataAgentIamBinding.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_gemini_data_analytics_data_agent_iam_binding#project GoogleGeminiDataAnalyticsDataAgentIamBinding#project}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamBinding.GoogleGeminiDataAnalyticsDataAgentIamBinding.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamBinding.GoogleGeminiDataAnalyticsDataAgentIamBinding.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamBinding.GoogleGeminiDataAnalyticsDataAgentIamBinding.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamBinding.GoogleGeminiDataAnalyticsDataAgentIamBinding.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamBinding.GoogleGeminiDataAnalyticsDataAgentIamBinding.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamBinding.GoogleGeminiDataAnalyticsDataAgentIamBinding.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamBinding.GoogleGeminiDataAnalyticsDataAgentIamBinding.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamBinding.GoogleGeminiDataAnalyticsDataAgentIamBinding.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamBinding.GoogleGeminiDataAnalyticsDataAgentIamBinding.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `data_agent_id`<sup>Required</sup> <a name="data_agent_id" id="@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamBinding.GoogleGeminiDataAnalyticsDataAgentIamBinding.Initializer.parameter.dataAgentId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_gemini_data_analytics_data_agent_iam_binding#data_agent_id GoogleGeminiDataAnalyticsDataAgentIamBinding#data_agent_id}.

---

##### `members`<sup>Required</sup> <a name="members" id="@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamBinding.GoogleGeminiDataAnalyticsDataAgentIamBinding.Initializer.parameter.members"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_gemini_data_analytics_data_agent_iam_binding#members GoogleGeminiDataAnalyticsDataAgentIamBinding#members}.

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamBinding.GoogleGeminiDataAnalyticsDataAgentIamBinding.Initializer.parameter.role"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_gemini_data_analytics_data_agent_iam_binding#role GoogleGeminiDataAnalyticsDataAgentIamBinding#role}.

---

##### `condition`<sup>Optional</sup> <a name="condition" id="@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamBinding.GoogleGeminiDataAnalyticsDataAgentIamBinding.Initializer.parameter.condition"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamBinding.GoogleGeminiDataAnalyticsDataAgentIamBindingCondition">GoogleGeminiDataAnalyticsDataAgentIamBindingCondition</a>

condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_gemini_data_analytics_data_agent_iam_binding#condition GoogleGeminiDataAnalyticsDataAgentIamBinding#condition}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamBinding.GoogleGeminiDataAnalyticsDataAgentIamBinding.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_gemini_data_analytics_data_agent_iam_binding#id GoogleGeminiDataAnalyticsDataAgentIamBinding#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamBinding.GoogleGeminiDataAnalyticsDataAgentIamBinding.Initializer.parameter.location"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_gemini_data_analytics_data_agent_iam_binding#location GoogleGeminiDataAnalyticsDataAgentIamBinding#location}.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamBinding.GoogleGeminiDataAnalyticsDataAgentIamBinding.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_gemini_data_analytics_data_agent_iam_binding#project GoogleGeminiDataAnalyticsDataAgentIamBinding#project}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamBinding.GoogleGeminiDataAnalyticsDataAgentIamBinding.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamBinding.GoogleGeminiDataAnalyticsDataAgentIamBinding.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamBinding.GoogleGeminiDataAnalyticsDataAgentIamBinding.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamBinding.GoogleGeminiDataAnalyticsDataAgentIamBinding.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamBinding.GoogleGeminiDataAnalyticsDataAgentIamBinding.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamBinding.GoogleGeminiDataAnalyticsDataAgentIamBinding.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamBinding.GoogleGeminiDataAnalyticsDataAgentIamBinding.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamBinding.GoogleGeminiDataAnalyticsDataAgentIamBinding.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamBinding.GoogleGeminiDataAnalyticsDataAgentIamBinding.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamBinding.GoogleGeminiDataAnalyticsDataAgentIamBinding.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamBinding.GoogleGeminiDataAnalyticsDataAgentIamBinding.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamBinding.GoogleGeminiDataAnalyticsDataAgentIamBinding.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamBinding.GoogleGeminiDataAnalyticsDataAgentIamBinding.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamBinding.GoogleGeminiDataAnalyticsDataAgentIamBinding.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamBinding.GoogleGeminiDataAnalyticsDataAgentIamBinding.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamBinding.GoogleGeminiDataAnalyticsDataAgentIamBinding.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamBinding.GoogleGeminiDataAnalyticsDataAgentIamBinding.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamBinding.GoogleGeminiDataAnalyticsDataAgentIamBinding.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamBinding.GoogleGeminiDataAnalyticsDataAgentIamBinding.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamBinding.GoogleGeminiDataAnalyticsDataAgentIamBinding.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamBinding.GoogleGeminiDataAnalyticsDataAgentIamBinding.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamBinding.GoogleGeminiDataAnalyticsDataAgentIamBinding.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamBinding.GoogleGeminiDataAnalyticsDataAgentIamBinding.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamBinding.GoogleGeminiDataAnalyticsDataAgentIamBinding.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamBinding.GoogleGeminiDataAnalyticsDataAgentIamBinding.putCondition">put_condition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamBinding.GoogleGeminiDataAnalyticsDataAgentIamBinding.resetCondition">reset_condition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamBinding.GoogleGeminiDataAnalyticsDataAgentIamBinding.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamBinding.GoogleGeminiDataAnalyticsDataAgentIamBinding.resetLocation">reset_location</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamBinding.GoogleGeminiDataAnalyticsDataAgentIamBinding.resetProject">reset_project</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamBinding.GoogleGeminiDataAnalyticsDataAgentIamBinding.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamBinding.GoogleGeminiDataAnalyticsDataAgentIamBinding.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamBinding.GoogleGeminiDataAnalyticsDataAgentIamBinding.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamBinding.GoogleGeminiDataAnalyticsDataAgentIamBinding.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamBinding.GoogleGeminiDataAnalyticsDataAgentIamBinding.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamBinding.GoogleGeminiDataAnalyticsDataAgentIamBinding.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamBinding.GoogleGeminiDataAnalyticsDataAgentIamBinding.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamBinding.GoogleGeminiDataAnalyticsDataAgentIamBinding.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamBinding.GoogleGeminiDataAnalyticsDataAgentIamBinding.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamBinding.GoogleGeminiDataAnalyticsDataAgentIamBinding.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamBinding.GoogleGeminiDataAnalyticsDataAgentIamBinding.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamBinding.GoogleGeminiDataAnalyticsDataAgentIamBinding.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamBinding.GoogleGeminiDataAnalyticsDataAgentIamBinding.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamBinding.GoogleGeminiDataAnalyticsDataAgentIamBinding.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamBinding.GoogleGeminiDataAnalyticsDataAgentIamBinding.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamBinding.GoogleGeminiDataAnalyticsDataAgentIamBinding.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamBinding.GoogleGeminiDataAnalyticsDataAgentIamBinding.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamBinding.GoogleGeminiDataAnalyticsDataAgentIamBinding.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamBinding.GoogleGeminiDataAnalyticsDataAgentIamBinding.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamBinding.GoogleGeminiDataAnalyticsDataAgentIamBinding.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamBinding.GoogleGeminiDataAnalyticsDataAgentIamBinding.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamBinding.GoogleGeminiDataAnalyticsDataAgentIamBinding.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamBinding.GoogleGeminiDataAnalyticsDataAgentIamBinding.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamBinding.GoogleGeminiDataAnalyticsDataAgentIamBinding.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamBinding.GoogleGeminiDataAnalyticsDataAgentIamBinding.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamBinding.GoogleGeminiDataAnalyticsDataAgentIamBinding.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamBinding.GoogleGeminiDataAnalyticsDataAgentIamBinding.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamBinding.GoogleGeminiDataAnalyticsDataAgentIamBinding.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamBinding.GoogleGeminiDataAnalyticsDataAgentIamBinding.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamBinding.GoogleGeminiDataAnalyticsDataAgentIamBinding.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamBinding.GoogleGeminiDataAnalyticsDataAgentIamBinding.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamBinding.GoogleGeminiDataAnalyticsDataAgentIamBinding.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamBinding.GoogleGeminiDataAnalyticsDataAgentIamBinding.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamBinding.GoogleGeminiDataAnalyticsDataAgentIamBinding.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamBinding.GoogleGeminiDataAnalyticsDataAgentIamBinding.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamBinding.GoogleGeminiDataAnalyticsDataAgentIamBinding.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamBinding.GoogleGeminiDataAnalyticsDataAgentIamBinding.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamBinding.GoogleGeminiDataAnalyticsDataAgentIamBinding.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamBinding.GoogleGeminiDataAnalyticsDataAgentIamBinding.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamBinding.GoogleGeminiDataAnalyticsDataAgentIamBinding.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamBinding.GoogleGeminiDataAnalyticsDataAgentIamBinding.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamBinding.GoogleGeminiDataAnalyticsDataAgentIamBinding.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamBinding.GoogleGeminiDataAnalyticsDataAgentIamBinding.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamBinding.GoogleGeminiDataAnalyticsDataAgentIamBinding.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamBinding.GoogleGeminiDataAnalyticsDataAgentIamBinding.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_condition` <a name="put_condition" id="@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamBinding.GoogleGeminiDataAnalyticsDataAgentIamBinding.putCondition"></a>

```python
def put_condition(
  expression: str,
  title: str,
  description: str = None
) -> None
```

###### `expression`<sup>Required</sup> <a name="expression" id="@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamBinding.GoogleGeminiDataAnalyticsDataAgentIamBinding.putCondition.parameter.expression"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_gemini_data_analytics_data_agent_iam_binding#expression GoogleGeminiDataAnalyticsDataAgentIamBinding#expression}.

---

###### `title`<sup>Required</sup> <a name="title" id="@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamBinding.GoogleGeminiDataAnalyticsDataAgentIamBinding.putCondition.parameter.title"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_gemini_data_analytics_data_agent_iam_binding#title GoogleGeminiDataAnalyticsDataAgentIamBinding#title}.

---

###### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamBinding.GoogleGeminiDataAnalyticsDataAgentIamBinding.putCondition.parameter.description"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_gemini_data_analytics_data_agent_iam_binding#description GoogleGeminiDataAnalyticsDataAgentIamBinding#description}.

---

##### `reset_condition` <a name="reset_condition" id="@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamBinding.GoogleGeminiDataAnalyticsDataAgentIamBinding.resetCondition"></a>

```python
def reset_condition() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamBinding.GoogleGeminiDataAnalyticsDataAgentIamBinding.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_location` <a name="reset_location" id="@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamBinding.GoogleGeminiDataAnalyticsDataAgentIamBinding.resetLocation"></a>

```python
def reset_location() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamBinding.GoogleGeminiDataAnalyticsDataAgentIamBinding.resetProject"></a>

```python
def reset_project() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamBinding.GoogleGeminiDataAnalyticsDataAgentIamBinding.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamBinding.GoogleGeminiDataAnalyticsDataAgentIamBinding.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamBinding.GoogleGeminiDataAnalyticsDataAgentIamBinding.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamBinding.GoogleGeminiDataAnalyticsDataAgentIamBinding.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a GoogleGeminiDataAnalyticsDataAgentIamBinding resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamBinding.GoogleGeminiDataAnalyticsDataAgentIamBinding.isConstruct"></a>

```python
from cdktn_provider_google_beta import google_gemini_data_analytics_data_agent_iam_binding

googleGeminiDataAnalyticsDataAgentIamBinding.GoogleGeminiDataAnalyticsDataAgentIamBinding.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamBinding.GoogleGeminiDataAnalyticsDataAgentIamBinding.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamBinding.GoogleGeminiDataAnalyticsDataAgentIamBinding.isTerraformElement"></a>

```python
from cdktn_provider_google_beta import google_gemini_data_analytics_data_agent_iam_binding

googleGeminiDataAnalyticsDataAgentIamBinding.GoogleGeminiDataAnalyticsDataAgentIamBinding.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamBinding.GoogleGeminiDataAnalyticsDataAgentIamBinding.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamBinding.GoogleGeminiDataAnalyticsDataAgentIamBinding.isTerraformResource"></a>

```python
from cdktn_provider_google_beta import google_gemini_data_analytics_data_agent_iam_binding

googleGeminiDataAnalyticsDataAgentIamBinding.GoogleGeminiDataAnalyticsDataAgentIamBinding.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamBinding.GoogleGeminiDataAnalyticsDataAgentIamBinding.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamBinding.GoogleGeminiDataAnalyticsDataAgentIamBinding.generateConfigForImport"></a>

```python
from cdktn_provider_google_beta import google_gemini_data_analytics_data_agent_iam_binding

googleGeminiDataAnalyticsDataAgentIamBinding.GoogleGeminiDataAnalyticsDataAgentIamBinding.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a GoogleGeminiDataAnalyticsDataAgentIamBinding resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamBinding.GoogleGeminiDataAnalyticsDataAgentIamBinding.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamBinding.GoogleGeminiDataAnalyticsDataAgentIamBinding.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the GoogleGeminiDataAnalyticsDataAgentIamBinding to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamBinding.GoogleGeminiDataAnalyticsDataAgentIamBinding.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing GoogleGeminiDataAnalyticsDataAgentIamBinding that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_gemini_data_analytics_data_agent_iam_binding#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamBinding.GoogleGeminiDataAnalyticsDataAgentIamBinding.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the GoogleGeminiDataAnalyticsDataAgentIamBinding to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamBinding.GoogleGeminiDataAnalyticsDataAgentIamBinding.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamBinding.GoogleGeminiDataAnalyticsDataAgentIamBinding.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamBinding.GoogleGeminiDataAnalyticsDataAgentIamBinding.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamBinding.GoogleGeminiDataAnalyticsDataAgentIamBinding.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamBinding.GoogleGeminiDataAnalyticsDataAgentIamBinding.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamBinding.GoogleGeminiDataAnalyticsDataAgentIamBinding.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamBinding.GoogleGeminiDataAnalyticsDataAgentIamBinding.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamBinding.GoogleGeminiDataAnalyticsDataAgentIamBinding.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamBinding.GoogleGeminiDataAnalyticsDataAgentIamBinding.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamBinding.GoogleGeminiDataAnalyticsDataAgentIamBinding.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamBinding.GoogleGeminiDataAnalyticsDataAgentIamBinding.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamBinding.GoogleGeminiDataAnalyticsDataAgentIamBinding.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamBinding.GoogleGeminiDataAnalyticsDataAgentIamBinding.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamBinding.GoogleGeminiDataAnalyticsDataAgentIamBinding.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamBinding.GoogleGeminiDataAnalyticsDataAgentIamBinding.property.condition">condition</a></code> | <code><a href="#@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamBinding.GoogleGeminiDataAnalyticsDataAgentIamBindingConditionOutputReference">GoogleGeminiDataAnalyticsDataAgentIamBindingConditionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamBinding.GoogleGeminiDataAnalyticsDataAgentIamBinding.property.etag">etag</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamBinding.GoogleGeminiDataAnalyticsDataAgentIamBinding.property.conditionInput">condition_input</a></code> | <code><a href="#@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamBinding.GoogleGeminiDataAnalyticsDataAgentIamBindingCondition">GoogleGeminiDataAnalyticsDataAgentIamBindingCondition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamBinding.GoogleGeminiDataAnalyticsDataAgentIamBinding.property.dataAgentIdInput">data_agent_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamBinding.GoogleGeminiDataAnalyticsDataAgentIamBinding.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamBinding.GoogleGeminiDataAnalyticsDataAgentIamBinding.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamBinding.GoogleGeminiDataAnalyticsDataAgentIamBinding.property.membersInput">members_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamBinding.GoogleGeminiDataAnalyticsDataAgentIamBinding.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamBinding.GoogleGeminiDataAnalyticsDataAgentIamBinding.property.roleInput">role_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamBinding.GoogleGeminiDataAnalyticsDataAgentIamBinding.property.dataAgentId">data_agent_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamBinding.GoogleGeminiDataAnalyticsDataAgentIamBinding.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamBinding.GoogleGeminiDataAnalyticsDataAgentIamBinding.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamBinding.GoogleGeminiDataAnalyticsDataAgentIamBinding.property.members">members</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamBinding.GoogleGeminiDataAnalyticsDataAgentIamBinding.property.project">project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamBinding.GoogleGeminiDataAnalyticsDataAgentIamBinding.property.role">role</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamBinding.GoogleGeminiDataAnalyticsDataAgentIamBinding.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamBinding.GoogleGeminiDataAnalyticsDataAgentIamBinding.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamBinding.GoogleGeminiDataAnalyticsDataAgentIamBinding.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamBinding.GoogleGeminiDataAnalyticsDataAgentIamBinding.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamBinding.GoogleGeminiDataAnalyticsDataAgentIamBinding.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamBinding.GoogleGeminiDataAnalyticsDataAgentIamBinding.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamBinding.GoogleGeminiDataAnalyticsDataAgentIamBinding.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamBinding.GoogleGeminiDataAnalyticsDataAgentIamBinding.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamBinding.GoogleGeminiDataAnalyticsDataAgentIamBinding.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamBinding.GoogleGeminiDataAnalyticsDataAgentIamBinding.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamBinding.GoogleGeminiDataAnalyticsDataAgentIamBinding.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamBinding.GoogleGeminiDataAnalyticsDataAgentIamBinding.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamBinding.GoogleGeminiDataAnalyticsDataAgentIamBinding.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamBinding.GoogleGeminiDataAnalyticsDataAgentIamBinding.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `condition`<sup>Required</sup> <a name="condition" id="@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamBinding.GoogleGeminiDataAnalyticsDataAgentIamBinding.property.condition"></a>

```python
condition: GoogleGeminiDataAnalyticsDataAgentIamBindingConditionOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamBinding.GoogleGeminiDataAnalyticsDataAgentIamBindingConditionOutputReference">GoogleGeminiDataAnalyticsDataAgentIamBindingConditionOutputReference</a>

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamBinding.GoogleGeminiDataAnalyticsDataAgentIamBinding.property.etag"></a>

```python
etag: str
```

- *Type:* str

---

##### `condition_input`<sup>Optional</sup> <a name="condition_input" id="@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamBinding.GoogleGeminiDataAnalyticsDataAgentIamBinding.property.conditionInput"></a>

```python
condition_input: GoogleGeminiDataAnalyticsDataAgentIamBindingCondition
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamBinding.GoogleGeminiDataAnalyticsDataAgentIamBindingCondition">GoogleGeminiDataAnalyticsDataAgentIamBindingCondition</a>

---

##### `data_agent_id_input`<sup>Optional</sup> <a name="data_agent_id_input" id="@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamBinding.GoogleGeminiDataAnalyticsDataAgentIamBinding.property.dataAgentIdInput"></a>

```python
data_agent_id_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamBinding.GoogleGeminiDataAnalyticsDataAgentIamBinding.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamBinding.GoogleGeminiDataAnalyticsDataAgentIamBinding.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `members_input`<sup>Optional</sup> <a name="members_input" id="@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamBinding.GoogleGeminiDataAnalyticsDataAgentIamBinding.property.membersInput"></a>

```python
members_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamBinding.GoogleGeminiDataAnalyticsDataAgentIamBinding.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `role_input`<sup>Optional</sup> <a name="role_input" id="@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamBinding.GoogleGeminiDataAnalyticsDataAgentIamBinding.property.roleInput"></a>

```python
role_input: str
```

- *Type:* str

---

##### `data_agent_id`<sup>Required</sup> <a name="data_agent_id" id="@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamBinding.GoogleGeminiDataAnalyticsDataAgentIamBinding.property.dataAgentId"></a>

```python
data_agent_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamBinding.GoogleGeminiDataAnalyticsDataAgentIamBinding.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamBinding.GoogleGeminiDataAnalyticsDataAgentIamBinding.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `members`<sup>Required</sup> <a name="members" id="@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamBinding.GoogleGeminiDataAnalyticsDataAgentIamBinding.property.members"></a>

```python
members: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamBinding.GoogleGeminiDataAnalyticsDataAgentIamBinding.property.project"></a>

```python
project: str
```

- *Type:* str

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamBinding.GoogleGeminiDataAnalyticsDataAgentIamBinding.property.role"></a>

```python
role: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamBinding.GoogleGeminiDataAnalyticsDataAgentIamBinding.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamBinding.GoogleGeminiDataAnalyticsDataAgentIamBinding.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleGeminiDataAnalyticsDataAgentIamBindingCondition <a name="GoogleGeminiDataAnalyticsDataAgentIamBindingCondition" id="@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamBinding.GoogleGeminiDataAnalyticsDataAgentIamBindingCondition"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamBinding.GoogleGeminiDataAnalyticsDataAgentIamBindingCondition.Initializer"></a>

```python
from cdktn_provider_google_beta import google_gemini_data_analytics_data_agent_iam_binding

googleGeminiDataAnalyticsDataAgentIamBinding.GoogleGeminiDataAnalyticsDataAgentIamBindingCondition(
  expression: str,
  title: str,
  description: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamBinding.GoogleGeminiDataAnalyticsDataAgentIamBindingCondition.property.expression">expression</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_gemini_data_analytics_data_agent_iam_binding#expression GoogleGeminiDataAnalyticsDataAgentIamBinding#expression}. |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamBinding.GoogleGeminiDataAnalyticsDataAgentIamBindingCondition.property.title">title</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_gemini_data_analytics_data_agent_iam_binding#title GoogleGeminiDataAnalyticsDataAgentIamBinding#title}. |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamBinding.GoogleGeminiDataAnalyticsDataAgentIamBindingCondition.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_gemini_data_analytics_data_agent_iam_binding#description GoogleGeminiDataAnalyticsDataAgentIamBinding#description}. |

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamBinding.GoogleGeminiDataAnalyticsDataAgentIamBindingCondition.property.expression"></a>

```python
expression: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_gemini_data_analytics_data_agent_iam_binding#expression GoogleGeminiDataAnalyticsDataAgentIamBinding#expression}.

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamBinding.GoogleGeminiDataAnalyticsDataAgentIamBindingCondition.property.title"></a>

```python
title: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_gemini_data_analytics_data_agent_iam_binding#title GoogleGeminiDataAnalyticsDataAgentIamBinding#title}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamBinding.GoogleGeminiDataAnalyticsDataAgentIamBindingCondition.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_gemini_data_analytics_data_agent_iam_binding#description GoogleGeminiDataAnalyticsDataAgentIamBinding#description}.

---

### GoogleGeminiDataAnalyticsDataAgentIamBindingConfig <a name="GoogleGeminiDataAnalyticsDataAgentIamBindingConfig" id="@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamBinding.GoogleGeminiDataAnalyticsDataAgentIamBindingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamBinding.GoogleGeminiDataAnalyticsDataAgentIamBindingConfig.Initializer"></a>

```python
from cdktn_provider_google_beta import google_gemini_data_analytics_data_agent_iam_binding

googleGeminiDataAnalyticsDataAgentIamBinding.GoogleGeminiDataAnalyticsDataAgentIamBindingConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  data_agent_id: str,
  members: typing.List[str],
  role: str,
  condition: GoogleGeminiDataAnalyticsDataAgentIamBindingCondition = None,
  id: str = None,
  location: str = None,
  project: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamBinding.GoogleGeminiDataAnalyticsDataAgentIamBindingConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamBinding.GoogleGeminiDataAnalyticsDataAgentIamBindingConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamBinding.GoogleGeminiDataAnalyticsDataAgentIamBindingConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamBinding.GoogleGeminiDataAnalyticsDataAgentIamBindingConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamBinding.GoogleGeminiDataAnalyticsDataAgentIamBindingConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamBinding.GoogleGeminiDataAnalyticsDataAgentIamBindingConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamBinding.GoogleGeminiDataAnalyticsDataAgentIamBindingConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamBinding.GoogleGeminiDataAnalyticsDataAgentIamBindingConfig.property.dataAgentId">data_agent_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_gemini_data_analytics_data_agent_iam_binding#data_agent_id GoogleGeminiDataAnalyticsDataAgentIamBinding#data_agent_id}. |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamBinding.GoogleGeminiDataAnalyticsDataAgentIamBindingConfig.property.members">members</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_gemini_data_analytics_data_agent_iam_binding#members GoogleGeminiDataAnalyticsDataAgentIamBinding#members}. |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamBinding.GoogleGeminiDataAnalyticsDataAgentIamBindingConfig.property.role">role</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_gemini_data_analytics_data_agent_iam_binding#role GoogleGeminiDataAnalyticsDataAgentIamBinding#role}. |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamBinding.GoogleGeminiDataAnalyticsDataAgentIamBindingConfig.property.condition">condition</a></code> | <code><a href="#@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamBinding.GoogleGeminiDataAnalyticsDataAgentIamBindingCondition">GoogleGeminiDataAnalyticsDataAgentIamBindingCondition</a></code> | condition block. |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamBinding.GoogleGeminiDataAnalyticsDataAgentIamBindingConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_gemini_data_analytics_data_agent_iam_binding#id GoogleGeminiDataAnalyticsDataAgentIamBinding#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamBinding.GoogleGeminiDataAnalyticsDataAgentIamBindingConfig.property.location">location</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_gemini_data_analytics_data_agent_iam_binding#location GoogleGeminiDataAnalyticsDataAgentIamBinding#location}. |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamBinding.GoogleGeminiDataAnalyticsDataAgentIamBindingConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_gemini_data_analytics_data_agent_iam_binding#project GoogleGeminiDataAnalyticsDataAgentIamBinding#project}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamBinding.GoogleGeminiDataAnalyticsDataAgentIamBindingConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamBinding.GoogleGeminiDataAnalyticsDataAgentIamBindingConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamBinding.GoogleGeminiDataAnalyticsDataAgentIamBindingConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamBinding.GoogleGeminiDataAnalyticsDataAgentIamBindingConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamBinding.GoogleGeminiDataAnalyticsDataAgentIamBindingConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamBinding.GoogleGeminiDataAnalyticsDataAgentIamBindingConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamBinding.GoogleGeminiDataAnalyticsDataAgentIamBindingConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `data_agent_id`<sup>Required</sup> <a name="data_agent_id" id="@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamBinding.GoogleGeminiDataAnalyticsDataAgentIamBindingConfig.property.dataAgentId"></a>

```python
data_agent_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_gemini_data_analytics_data_agent_iam_binding#data_agent_id GoogleGeminiDataAnalyticsDataAgentIamBinding#data_agent_id}.

---

##### `members`<sup>Required</sup> <a name="members" id="@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamBinding.GoogleGeminiDataAnalyticsDataAgentIamBindingConfig.property.members"></a>

```python
members: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_gemini_data_analytics_data_agent_iam_binding#members GoogleGeminiDataAnalyticsDataAgentIamBinding#members}.

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamBinding.GoogleGeminiDataAnalyticsDataAgentIamBindingConfig.property.role"></a>

```python
role: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_gemini_data_analytics_data_agent_iam_binding#role GoogleGeminiDataAnalyticsDataAgentIamBinding#role}.

---

##### `condition`<sup>Optional</sup> <a name="condition" id="@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamBinding.GoogleGeminiDataAnalyticsDataAgentIamBindingConfig.property.condition"></a>

```python
condition: GoogleGeminiDataAnalyticsDataAgentIamBindingCondition
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamBinding.GoogleGeminiDataAnalyticsDataAgentIamBindingCondition">GoogleGeminiDataAnalyticsDataAgentIamBindingCondition</a>

condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_gemini_data_analytics_data_agent_iam_binding#condition GoogleGeminiDataAnalyticsDataAgentIamBinding#condition}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamBinding.GoogleGeminiDataAnalyticsDataAgentIamBindingConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_gemini_data_analytics_data_agent_iam_binding#id GoogleGeminiDataAnalyticsDataAgentIamBinding#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamBinding.GoogleGeminiDataAnalyticsDataAgentIamBindingConfig.property.location"></a>

```python
location: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_gemini_data_analytics_data_agent_iam_binding#location GoogleGeminiDataAnalyticsDataAgentIamBinding#location}.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamBinding.GoogleGeminiDataAnalyticsDataAgentIamBindingConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_gemini_data_analytics_data_agent_iam_binding#project GoogleGeminiDataAnalyticsDataAgentIamBinding#project}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleGeminiDataAnalyticsDataAgentIamBindingConditionOutputReference <a name="GoogleGeminiDataAnalyticsDataAgentIamBindingConditionOutputReference" id="@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamBinding.GoogleGeminiDataAnalyticsDataAgentIamBindingConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamBinding.GoogleGeminiDataAnalyticsDataAgentIamBindingConditionOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_gemini_data_analytics_data_agent_iam_binding

googleGeminiDataAnalyticsDataAgentIamBinding.GoogleGeminiDataAnalyticsDataAgentIamBindingConditionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamBinding.GoogleGeminiDataAnalyticsDataAgentIamBindingConditionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamBinding.GoogleGeminiDataAnalyticsDataAgentIamBindingConditionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamBinding.GoogleGeminiDataAnalyticsDataAgentIamBindingConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamBinding.GoogleGeminiDataAnalyticsDataAgentIamBindingConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamBinding.GoogleGeminiDataAnalyticsDataAgentIamBindingConditionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamBinding.GoogleGeminiDataAnalyticsDataAgentIamBindingConditionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamBinding.GoogleGeminiDataAnalyticsDataAgentIamBindingConditionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamBinding.GoogleGeminiDataAnalyticsDataAgentIamBindingConditionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamBinding.GoogleGeminiDataAnalyticsDataAgentIamBindingConditionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamBinding.GoogleGeminiDataAnalyticsDataAgentIamBindingConditionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamBinding.GoogleGeminiDataAnalyticsDataAgentIamBindingConditionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamBinding.GoogleGeminiDataAnalyticsDataAgentIamBindingConditionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamBinding.GoogleGeminiDataAnalyticsDataAgentIamBindingConditionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamBinding.GoogleGeminiDataAnalyticsDataAgentIamBindingConditionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamBinding.GoogleGeminiDataAnalyticsDataAgentIamBindingConditionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamBinding.GoogleGeminiDataAnalyticsDataAgentIamBindingConditionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamBinding.GoogleGeminiDataAnalyticsDataAgentIamBindingConditionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamBinding.GoogleGeminiDataAnalyticsDataAgentIamBindingConditionOutputReference.resetDescription">reset_description</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamBinding.GoogleGeminiDataAnalyticsDataAgentIamBindingConditionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamBinding.GoogleGeminiDataAnalyticsDataAgentIamBindingConditionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamBinding.GoogleGeminiDataAnalyticsDataAgentIamBindingConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamBinding.GoogleGeminiDataAnalyticsDataAgentIamBindingConditionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamBinding.GoogleGeminiDataAnalyticsDataAgentIamBindingConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamBinding.GoogleGeminiDataAnalyticsDataAgentIamBindingConditionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamBinding.GoogleGeminiDataAnalyticsDataAgentIamBindingConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamBinding.GoogleGeminiDataAnalyticsDataAgentIamBindingConditionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamBinding.GoogleGeminiDataAnalyticsDataAgentIamBindingConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamBinding.GoogleGeminiDataAnalyticsDataAgentIamBindingConditionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamBinding.GoogleGeminiDataAnalyticsDataAgentIamBindingConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamBinding.GoogleGeminiDataAnalyticsDataAgentIamBindingConditionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamBinding.GoogleGeminiDataAnalyticsDataAgentIamBindingConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamBinding.GoogleGeminiDataAnalyticsDataAgentIamBindingConditionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamBinding.GoogleGeminiDataAnalyticsDataAgentIamBindingConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamBinding.GoogleGeminiDataAnalyticsDataAgentIamBindingConditionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamBinding.GoogleGeminiDataAnalyticsDataAgentIamBindingConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamBinding.GoogleGeminiDataAnalyticsDataAgentIamBindingConditionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamBinding.GoogleGeminiDataAnalyticsDataAgentIamBindingConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamBinding.GoogleGeminiDataAnalyticsDataAgentIamBindingConditionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamBinding.GoogleGeminiDataAnalyticsDataAgentIamBindingConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamBinding.GoogleGeminiDataAnalyticsDataAgentIamBindingConditionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamBinding.GoogleGeminiDataAnalyticsDataAgentIamBindingConditionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamBinding.GoogleGeminiDataAnalyticsDataAgentIamBindingConditionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_description` <a name="reset_description" id="@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamBinding.GoogleGeminiDataAnalyticsDataAgentIamBindingConditionOutputReference.resetDescription"></a>

```python
def reset_description() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamBinding.GoogleGeminiDataAnalyticsDataAgentIamBindingConditionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamBinding.GoogleGeminiDataAnalyticsDataAgentIamBindingConditionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamBinding.GoogleGeminiDataAnalyticsDataAgentIamBindingConditionOutputReference.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamBinding.GoogleGeminiDataAnalyticsDataAgentIamBindingConditionOutputReference.property.expressionInput">expression_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamBinding.GoogleGeminiDataAnalyticsDataAgentIamBindingConditionOutputReference.property.titleInput">title_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamBinding.GoogleGeminiDataAnalyticsDataAgentIamBindingConditionOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamBinding.GoogleGeminiDataAnalyticsDataAgentIamBindingConditionOutputReference.property.expression">expression</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamBinding.GoogleGeminiDataAnalyticsDataAgentIamBindingConditionOutputReference.property.title">title</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamBinding.GoogleGeminiDataAnalyticsDataAgentIamBindingConditionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamBinding.GoogleGeminiDataAnalyticsDataAgentIamBindingCondition">GoogleGeminiDataAnalyticsDataAgentIamBindingCondition</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamBinding.GoogleGeminiDataAnalyticsDataAgentIamBindingConditionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamBinding.GoogleGeminiDataAnalyticsDataAgentIamBindingConditionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamBinding.GoogleGeminiDataAnalyticsDataAgentIamBindingConditionOutputReference.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `expression_input`<sup>Optional</sup> <a name="expression_input" id="@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamBinding.GoogleGeminiDataAnalyticsDataAgentIamBindingConditionOutputReference.property.expressionInput"></a>

```python
expression_input: str
```

- *Type:* str

---

##### `title_input`<sup>Optional</sup> <a name="title_input" id="@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamBinding.GoogleGeminiDataAnalyticsDataAgentIamBindingConditionOutputReference.property.titleInput"></a>

```python
title_input: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamBinding.GoogleGeminiDataAnalyticsDataAgentIamBindingConditionOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamBinding.GoogleGeminiDataAnalyticsDataAgentIamBindingConditionOutputReference.property.expression"></a>

```python
expression: str
```

- *Type:* str

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamBinding.GoogleGeminiDataAnalyticsDataAgentIamBindingConditionOutputReference.property.title"></a>

```python
title: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamBinding.GoogleGeminiDataAnalyticsDataAgentIamBindingConditionOutputReference.property.internalValue"></a>

```python
internal_value: GoogleGeminiDataAnalyticsDataAgentIamBindingCondition
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamBinding.GoogleGeminiDataAnalyticsDataAgentIamBindingCondition">GoogleGeminiDataAnalyticsDataAgentIamBindingCondition</a>

---



