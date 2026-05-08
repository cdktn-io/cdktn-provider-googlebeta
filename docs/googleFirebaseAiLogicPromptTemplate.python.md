# `googleFirebaseAiLogicPromptTemplate` Submodule <a name="`googleFirebaseAiLogicPromptTemplate` Submodule" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplate"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleFirebaseAiLogicPromptTemplate <a name="GoogleFirebaseAiLogicPromptTemplate" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplate.GoogleFirebaseAiLogicPromptTemplate"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_firebase_ai_logic_prompt_template google_firebase_ai_logic_prompt_template}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplate.GoogleFirebaseAiLogicPromptTemplate.Initializer"></a>

```python
from cdktn_provider_google_beta import google_firebase_ai_logic_prompt_template

googleFirebaseAiLogicPromptTemplate.GoogleFirebaseAiLogicPromptTemplate(
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
  template_id: str,
  template_string: str,
  display_name: str = None,
  id: str = None,
  project: str = None,
  timeouts: GoogleFirebaseAiLogicPromptTemplateTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplate.GoogleFirebaseAiLogicPromptTemplate.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplate.GoogleFirebaseAiLogicPromptTemplate.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplate.GoogleFirebaseAiLogicPromptTemplate.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplate.GoogleFirebaseAiLogicPromptTemplate.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplate.GoogleFirebaseAiLogicPromptTemplate.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplate.GoogleFirebaseAiLogicPromptTemplate.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplate.GoogleFirebaseAiLogicPromptTemplate.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplate.GoogleFirebaseAiLogicPromptTemplate.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplate.GoogleFirebaseAiLogicPromptTemplate.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplate.GoogleFirebaseAiLogicPromptTemplate.Initializer.parameter.location">location</a></code> | <code>str</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplate.GoogleFirebaseAiLogicPromptTemplate.Initializer.parameter.templateId">template_id</a></code> | <code>str</code> | The unique ID of the PromptTemplate, which is the final component of the PromptTemplate's resource name. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplate.GoogleFirebaseAiLogicPromptTemplate.Initializer.parameter.templateString">template_string</a></code> | <code>str</code> | The [Dotprompt](https://google.github.io/dotprompt/getting-started) raw template string. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplate.GoogleFirebaseAiLogicPromptTemplate.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | The display name of the PromptTemplate. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplate.GoogleFirebaseAiLogicPromptTemplate.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_firebase_ai_logic_prompt_template#id GoogleFirebaseAiLogicPromptTemplate#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplate.GoogleFirebaseAiLogicPromptTemplate.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_firebase_ai_logic_prompt_template#project GoogleFirebaseAiLogicPromptTemplate#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplate.GoogleFirebaseAiLogicPromptTemplate.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplate.GoogleFirebaseAiLogicPromptTemplateTimeouts">GoogleFirebaseAiLogicPromptTemplateTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplate.GoogleFirebaseAiLogicPromptTemplate.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplate.GoogleFirebaseAiLogicPromptTemplate.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplate.GoogleFirebaseAiLogicPromptTemplate.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplate.GoogleFirebaseAiLogicPromptTemplate.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplate.GoogleFirebaseAiLogicPromptTemplate.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplate.GoogleFirebaseAiLogicPromptTemplate.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplate.GoogleFirebaseAiLogicPromptTemplate.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplate.GoogleFirebaseAiLogicPromptTemplate.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplate.GoogleFirebaseAiLogicPromptTemplate.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplate.GoogleFirebaseAiLogicPromptTemplate.Initializer.parameter.location"></a>

- *Type:* str

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_firebase_ai_logic_prompt_template#location GoogleFirebaseAiLogicPromptTemplate#location}

---

##### `template_id`<sup>Required</sup> <a name="template_id" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplate.GoogleFirebaseAiLogicPromptTemplate.Initializer.parameter.templateId"></a>

- *Type:* str

The unique ID of the PromptTemplate, which is the final component of the PromptTemplate's resource name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_firebase_ai_logic_prompt_template#template_id GoogleFirebaseAiLogicPromptTemplate#template_id}

---

##### `template_string`<sup>Required</sup> <a name="template_string" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplate.GoogleFirebaseAiLogicPromptTemplate.Initializer.parameter.templateString"></a>

- *Type:* str

The [Dotprompt](https://google.github.io/dotprompt/getting-started) raw template string.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_firebase_ai_logic_prompt_template#template_string GoogleFirebaseAiLogicPromptTemplate#template_string}

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplate.GoogleFirebaseAiLogicPromptTemplate.Initializer.parameter.displayName"></a>

- *Type:* str

The display name of the PromptTemplate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_firebase_ai_logic_prompt_template#display_name GoogleFirebaseAiLogicPromptTemplate#display_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplate.GoogleFirebaseAiLogicPromptTemplate.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_firebase_ai_logic_prompt_template#id GoogleFirebaseAiLogicPromptTemplate#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplate.GoogleFirebaseAiLogicPromptTemplate.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_firebase_ai_logic_prompt_template#project GoogleFirebaseAiLogicPromptTemplate#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplate.GoogleFirebaseAiLogicPromptTemplate.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplate.GoogleFirebaseAiLogicPromptTemplateTimeouts">GoogleFirebaseAiLogicPromptTemplateTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_firebase_ai_logic_prompt_template#timeouts GoogleFirebaseAiLogicPromptTemplate#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplate.GoogleFirebaseAiLogicPromptTemplate.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplate.GoogleFirebaseAiLogicPromptTemplate.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplate.GoogleFirebaseAiLogicPromptTemplate.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplate.GoogleFirebaseAiLogicPromptTemplate.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplate.GoogleFirebaseAiLogicPromptTemplate.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplate.GoogleFirebaseAiLogicPromptTemplate.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplate.GoogleFirebaseAiLogicPromptTemplate.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplate.GoogleFirebaseAiLogicPromptTemplate.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplate.GoogleFirebaseAiLogicPromptTemplate.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplate.GoogleFirebaseAiLogicPromptTemplate.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplate.GoogleFirebaseAiLogicPromptTemplate.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplate.GoogleFirebaseAiLogicPromptTemplate.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplate.GoogleFirebaseAiLogicPromptTemplate.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplate.GoogleFirebaseAiLogicPromptTemplate.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplate.GoogleFirebaseAiLogicPromptTemplate.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplate.GoogleFirebaseAiLogicPromptTemplate.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplate.GoogleFirebaseAiLogicPromptTemplate.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplate.GoogleFirebaseAiLogicPromptTemplate.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplate.GoogleFirebaseAiLogicPromptTemplate.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplate.GoogleFirebaseAiLogicPromptTemplate.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplate.GoogleFirebaseAiLogicPromptTemplate.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplate.GoogleFirebaseAiLogicPromptTemplate.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplate.GoogleFirebaseAiLogicPromptTemplate.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplate.GoogleFirebaseAiLogicPromptTemplate.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplate.GoogleFirebaseAiLogicPromptTemplate.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplate.GoogleFirebaseAiLogicPromptTemplate.resetDisplayName">reset_display_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplate.GoogleFirebaseAiLogicPromptTemplate.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplate.GoogleFirebaseAiLogicPromptTemplate.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplate.GoogleFirebaseAiLogicPromptTemplate.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplate.GoogleFirebaseAiLogicPromptTemplate.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplate.GoogleFirebaseAiLogicPromptTemplate.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplate.GoogleFirebaseAiLogicPromptTemplate.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplate.GoogleFirebaseAiLogicPromptTemplate.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplate.GoogleFirebaseAiLogicPromptTemplate.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplate.GoogleFirebaseAiLogicPromptTemplate.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplate.GoogleFirebaseAiLogicPromptTemplate.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplate.GoogleFirebaseAiLogicPromptTemplate.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplate.GoogleFirebaseAiLogicPromptTemplate.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplate.GoogleFirebaseAiLogicPromptTemplate.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplate.GoogleFirebaseAiLogicPromptTemplate.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplate.GoogleFirebaseAiLogicPromptTemplate.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplate.GoogleFirebaseAiLogicPromptTemplate.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplate.GoogleFirebaseAiLogicPromptTemplate.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplate.GoogleFirebaseAiLogicPromptTemplate.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplate.GoogleFirebaseAiLogicPromptTemplate.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplate.GoogleFirebaseAiLogicPromptTemplate.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplate.GoogleFirebaseAiLogicPromptTemplate.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplate.GoogleFirebaseAiLogicPromptTemplate.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplate.GoogleFirebaseAiLogicPromptTemplate.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplate.GoogleFirebaseAiLogicPromptTemplate.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplate.GoogleFirebaseAiLogicPromptTemplate.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplate.GoogleFirebaseAiLogicPromptTemplate.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplate.GoogleFirebaseAiLogicPromptTemplate.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplate.GoogleFirebaseAiLogicPromptTemplate.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplate.GoogleFirebaseAiLogicPromptTemplate.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplate.GoogleFirebaseAiLogicPromptTemplate.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplate.GoogleFirebaseAiLogicPromptTemplate.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplate.GoogleFirebaseAiLogicPromptTemplate.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplate.GoogleFirebaseAiLogicPromptTemplate.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplate.GoogleFirebaseAiLogicPromptTemplate.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplate.GoogleFirebaseAiLogicPromptTemplate.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplate.GoogleFirebaseAiLogicPromptTemplate.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplate.GoogleFirebaseAiLogicPromptTemplate.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplate.GoogleFirebaseAiLogicPromptTemplate.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplate.GoogleFirebaseAiLogicPromptTemplate.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplate.GoogleFirebaseAiLogicPromptTemplate.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplate.GoogleFirebaseAiLogicPromptTemplate.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplate.GoogleFirebaseAiLogicPromptTemplate.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplate.GoogleFirebaseAiLogicPromptTemplate.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplate.GoogleFirebaseAiLogicPromptTemplate.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplate.GoogleFirebaseAiLogicPromptTemplate.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplate.GoogleFirebaseAiLogicPromptTemplate.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplate.GoogleFirebaseAiLogicPromptTemplate.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplate.GoogleFirebaseAiLogicPromptTemplate.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplate.GoogleFirebaseAiLogicPromptTemplate.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplate.GoogleFirebaseAiLogicPromptTemplate.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_firebase_ai_logic_prompt_template#create GoogleFirebaseAiLogicPromptTemplate#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplate.GoogleFirebaseAiLogicPromptTemplate.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_firebase_ai_logic_prompt_template#delete GoogleFirebaseAiLogicPromptTemplate#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplate.GoogleFirebaseAiLogicPromptTemplate.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_firebase_ai_logic_prompt_template#update GoogleFirebaseAiLogicPromptTemplate#update}.

---

##### `reset_display_name` <a name="reset_display_name" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplate.GoogleFirebaseAiLogicPromptTemplate.resetDisplayName"></a>

```python
def reset_display_name() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplate.GoogleFirebaseAiLogicPromptTemplate.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplate.GoogleFirebaseAiLogicPromptTemplate.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplate.GoogleFirebaseAiLogicPromptTemplate.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplate.GoogleFirebaseAiLogicPromptTemplate.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplate.GoogleFirebaseAiLogicPromptTemplate.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplate.GoogleFirebaseAiLogicPromptTemplate.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplate.GoogleFirebaseAiLogicPromptTemplate.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a GoogleFirebaseAiLogicPromptTemplate resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplate.GoogleFirebaseAiLogicPromptTemplate.isConstruct"></a>

```python
from cdktn_provider_google_beta import google_firebase_ai_logic_prompt_template

googleFirebaseAiLogicPromptTemplate.GoogleFirebaseAiLogicPromptTemplate.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplate.GoogleFirebaseAiLogicPromptTemplate.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplate.GoogleFirebaseAiLogicPromptTemplate.isTerraformElement"></a>

```python
from cdktn_provider_google_beta import google_firebase_ai_logic_prompt_template

googleFirebaseAiLogicPromptTemplate.GoogleFirebaseAiLogicPromptTemplate.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplate.GoogleFirebaseAiLogicPromptTemplate.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplate.GoogleFirebaseAiLogicPromptTemplate.isTerraformResource"></a>

```python
from cdktn_provider_google_beta import google_firebase_ai_logic_prompt_template

googleFirebaseAiLogicPromptTemplate.GoogleFirebaseAiLogicPromptTemplate.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplate.GoogleFirebaseAiLogicPromptTemplate.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplate.GoogleFirebaseAiLogicPromptTemplate.generateConfigForImport"></a>

```python
from cdktn_provider_google_beta import google_firebase_ai_logic_prompt_template

googleFirebaseAiLogicPromptTemplate.GoogleFirebaseAiLogicPromptTemplate.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a GoogleFirebaseAiLogicPromptTemplate resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplate.GoogleFirebaseAiLogicPromptTemplate.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplate.GoogleFirebaseAiLogicPromptTemplate.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the GoogleFirebaseAiLogicPromptTemplate to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplate.GoogleFirebaseAiLogicPromptTemplate.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing GoogleFirebaseAiLogicPromptTemplate that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_firebase_ai_logic_prompt_template#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplate.GoogleFirebaseAiLogicPromptTemplate.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the GoogleFirebaseAiLogicPromptTemplate to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplate.GoogleFirebaseAiLogicPromptTemplate.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplate.GoogleFirebaseAiLogicPromptTemplate.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplate.GoogleFirebaseAiLogicPromptTemplate.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplate.GoogleFirebaseAiLogicPromptTemplate.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplate.GoogleFirebaseAiLogicPromptTemplate.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplate.GoogleFirebaseAiLogicPromptTemplate.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplate.GoogleFirebaseAiLogicPromptTemplate.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplate.GoogleFirebaseAiLogicPromptTemplate.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplate.GoogleFirebaseAiLogicPromptTemplate.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplate.GoogleFirebaseAiLogicPromptTemplate.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplate.GoogleFirebaseAiLogicPromptTemplate.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplate.GoogleFirebaseAiLogicPromptTemplate.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplate.GoogleFirebaseAiLogicPromptTemplate.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplate.GoogleFirebaseAiLogicPromptTemplate.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplate.GoogleFirebaseAiLogicPromptTemplate.property.createTime">create_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplate.GoogleFirebaseAiLogicPromptTemplate.property.locked">locked</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplate.GoogleFirebaseAiLogicPromptTemplate.property.model">model</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplate.GoogleFirebaseAiLogicPromptTemplate.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplate.GoogleFirebaseAiLogicPromptTemplate.property.stateChangeTime">state_change_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplate.GoogleFirebaseAiLogicPromptTemplate.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplate.GoogleFirebaseAiLogicPromptTemplateTimeoutsOutputReference">GoogleFirebaseAiLogicPromptTemplateTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplate.GoogleFirebaseAiLogicPromptTemplate.property.updateTime">update_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplate.GoogleFirebaseAiLogicPromptTemplate.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplate.GoogleFirebaseAiLogicPromptTemplate.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplate.GoogleFirebaseAiLogicPromptTemplate.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplate.GoogleFirebaseAiLogicPromptTemplate.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplate.GoogleFirebaseAiLogicPromptTemplate.property.templateIdInput">template_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplate.GoogleFirebaseAiLogicPromptTemplate.property.templateStringInput">template_string_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplate.GoogleFirebaseAiLogicPromptTemplate.property.timeoutsInput">timeouts_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplate.GoogleFirebaseAiLogicPromptTemplateTimeouts">GoogleFirebaseAiLogicPromptTemplateTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplate.GoogleFirebaseAiLogicPromptTemplate.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplate.GoogleFirebaseAiLogicPromptTemplate.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplate.GoogleFirebaseAiLogicPromptTemplate.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplate.GoogleFirebaseAiLogicPromptTemplate.property.project">project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplate.GoogleFirebaseAiLogicPromptTemplate.property.templateId">template_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplate.GoogleFirebaseAiLogicPromptTemplate.property.templateString">template_string</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplate.GoogleFirebaseAiLogicPromptTemplate.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplate.GoogleFirebaseAiLogicPromptTemplate.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplate.GoogleFirebaseAiLogicPromptTemplate.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplate.GoogleFirebaseAiLogicPromptTemplate.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplate.GoogleFirebaseAiLogicPromptTemplate.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplate.GoogleFirebaseAiLogicPromptTemplate.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplate.GoogleFirebaseAiLogicPromptTemplate.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplate.GoogleFirebaseAiLogicPromptTemplate.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplate.GoogleFirebaseAiLogicPromptTemplate.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplate.GoogleFirebaseAiLogicPromptTemplate.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplate.GoogleFirebaseAiLogicPromptTemplate.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplate.GoogleFirebaseAiLogicPromptTemplate.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplate.GoogleFirebaseAiLogicPromptTemplate.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplate.GoogleFirebaseAiLogicPromptTemplate.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `create_time`<sup>Required</sup> <a name="create_time" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplate.GoogleFirebaseAiLogicPromptTemplate.property.createTime"></a>

```python
create_time: str
```

- *Type:* str

---

##### `locked`<sup>Required</sup> <a name="locked" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplate.GoogleFirebaseAiLogicPromptTemplate.property.locked"></a>

```python
locked: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `model`<sup>Required</sup> <a name="model" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplate.GoogleFirebaseAiLogicPromptTemplate.property.model"></a>

```python
model: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplate.GoogleFirebaseAiLogicPromptTemplate.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `state_change_time`<sup>Required</sup> <a name="state_change_time" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplate.GoogleFirebaseAiLogicPromptTemplate.property.stateChangeTime"></a>

```python
state_change_time: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplate.GoogleFirebaseAiLogicPromptTemplate.property.timeouts"></a>

```python
timeouts: GoogleFirebaseAiLogicPromptTemplateTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplate.GoogleFirebaseAiLogicPromptTemplateTimeoutsOutputReference">GoogleFirebaseAiLogicPromptTemplateTimeoutsOutputReference</a>

---

##### `update_time`<sup>Required</sup> <a name="update_time" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplate.GoogleFirebaseAiLogicPromptTemplate.property.updateTime"></a>

```python
update_time: str
```

- *Type:* str

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplate.GoogleFirebaseAiLogicPromptTemplate.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplate.GoogleFirebaseAiLogicPromptTemplate.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplate.GoogleFirebaseAiLogicPromptTemplate.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplate.GoogleFirebaseAiLogicPromptTemplate.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `template_id_input`<sup>Optional</sup> <a name="template_id_input" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplate.GoogleFirebaseAiLogicPromptTemplate.property.templateIdInput"></a>

```python
template_id_input: str
```

- *Type:* str

---

##### `template_string_input`<sup>Optional</sup> <a name="template_string_input" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplate.GoogleFirebaseAiLogicPromptTemplate.property.templateStringInput"></a>

```python
template_string_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplate.GoogleFirebaseAiLogicPromptTemplate.property.timeoutsInput"></a>

```python
timeouts_input: IResolvable | GoogleFirebaseAiLogicPromptTemplateTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplate.GoogleFirebaseAiLogicPromptTemplateTimeouts">GoogleFirebaseAiLogicPromptTemplateTimeouts</a>

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplate.GoogleFirebaseAiLogicPromptTemplate.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplate.GoogleFirebaseAiLogicPromptTemplate.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplate.GoogleFirebaseAiLogicPromptTemplate.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplate.GoogleFirebaseAiLogicPromptTemplate.property.project"></a>

```python
project: str
```

- *Type:* str

---

##### `template_id`<sup>Required</sup> <a name="template_id" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplate.GoogleFirebaseAiLogicPromptTemplate.property.templateId"></a>

```python
template_id: str
```

- *Type:* str

---

##### `template_string`<sup>Required</sup> <a name="template_string" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplate.GoogleFirebaseAiLogicPromptTemplate.property.templateString"></a>

```python
template_string: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplate.GoogleFirebaseAiLogicPromptTemplate.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplate.GoogleFirebaseAiLogicPromptTemplate.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleFirebaseAiLogicPromptTemplateConfig <a name="GoogleFirebaseAiLogicPromptTemplateConfig" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplate.GoogleFirebaseAiLogicPromptTemplateConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplate.GoogleFirebaseAiLogicPromptTemplateConfig.Initializer"></a>

```python
from cdktn_provider_google_beta import google_firebase_ai_logic_prompt_template

googleFirebaseAiLogicPromptTemplate.GoogleFirebaseAiLogicPromptTemplateConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  location: str,
  template_id: str,
  template_string: str,
  display_name: str = None,
  id: str = None,
  project: str = None,
  timeouts: GoogleFirebaseAiLogicPromptTemplateTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplate.GoogleFirebaseAiLogicPromptTemplateConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplate.GoogleFirebaseAiLogicPromptTemplateConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplate.GoogleFirebaseAiLogicPromptTemplateConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplate.GoogleFirebaseAiLogicPromptTemplateConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplate.GoogleFirebaseAiLogicPromptTemplateConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplate.GoogleFirebaseAiLogicPromptTemplateConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplate.GoogleFirebaseAiLogicPromptTemplateConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplate.GoogleFirebaseAiLogicPromptTemplateConfig.property.location">location</a></code> | <code>str</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplate.GoogleFirebaseAiLogicPromptTemplateConfig.property.templateId">template_id</a></code> | <code>str</code> | The unique ID of the PromptTemplate, which is the final component of the PromptTemplate's resource name. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplate.GoogleFirebaseAiLogicPromptTemplateConfig.property.templateString">template_string</a></code> | <code>str</code> | The [Dotprompt](https://google.github.io/dotprompt/getting-started) raw template string. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplate.GoogleFirebaseAiLogicPromptTemplateConfig.property.displayName">display_name</a></code> | <code>str</code> | The display name of the PromptTemplate. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplate.GoogleFirebaseAiLogicPromptTemplateConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_firebase_ai_logic_prompt_template#id GoogleFirebaseAiLogicPromptTemplate#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplate.GoogleFirebaseAiLogicPromptTemplateConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_firebase_ai_logic_prompt_template#project GoogleFirebaseAiLogicPromptTemplate#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplate.GoogleFirebaseAiLogicPromptTemplateConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplate.GoogleFirebaseAiLogicPromptTemplateTimeouts">GoogleFirebaseAiLogicPromptTemplateTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplate.GoogleFirebaseAiLogicPromptTemplateConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplate.GoogleFirebaseAiLogicPromptTemplateConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplate.GoogleFirebaseAiLogicPromptTemplateConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplate.GoogleFirebaseAiLogicPromptTemplateConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplate.GoogleFirebaseAiLogicPromptTemplateConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplate.GoogleFirebaseAiLogicPromptTemplateConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplate.GoogleFirebaseAiLogicPromptTemplateConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplate.GoogleFirebaseAiLogicPromptTemplateConfig.property.location"></a>

```python
location: str
```

- *Type:* str

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_firebase_ai_logic_prompt_template#location GoogleFirebaseAiLogicPromptTemplate#location}

---

##### `template_id`<sup>Required</sup> <a name="template_id" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplate.GoogleFirebaseAiLogicPromptTemplateConfig.property.templateId"></a>

```python
template_id: str
```

- *Type:* str

The unique ID of the PromptTemplate, which is the final component of the PromptTemplate's resource name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_firebase_ai_logic_prompt_template#template_id GoogleFirebaseAiLogicPromptTemplate#template_id}

---

##### `template_string`<sup>Required</sup> <a name="template_string" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplate.GoogleFirebaseAiLogicPromptTemplateConfig.property.templateString"></a>

```python
template_string: str
```

- *Type:* str

The [Dotprompt](https://google.github.io/dotprompt/getting-started) raw template string.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_firebase_ai_logic_prompt_template#template_string GoogleFirebaseAiLogicPromptTemplate#template_string}

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplate.GoogleFirebaseAiLogicPromptTemplateConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

The display name of the PromptTemplate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_firebase_ai_logic_prompt_template#display_name GoogleFirebaseAiLogicPromptTemplate#display_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplate.GoogleFirebaseAiLogicPromptTemplateConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_firebase_ai_logic_prompt_template#id GoogleFirebaseAiLogicPromptTemplate#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplate.GoogleFirebaseAiLogicPromptTemplateConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_firebase_ai_logic_prompt_template#project GoogleFirebaseAiLogicPromptTemplate#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplate.GoogleFirebaseAiLogicPromptTemplateConfig.property.timeouts"></a>

```python
timeouts: GoogleFirebaseAiLogicPromptTemplateTimeouts
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplate.GoogleFirebaseAiLogicPromptTemplateTimeouts">GoogleFirebaseAiLogicPromptTemplateTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_firebase_ai_logic_prompt_template#timeouts GoogleFirebaseAiLogicPromptTemplate#timeouts}

---

### GoogleFirebaseAiLogicPromptTemplateTimeouts <a name="GoogleFirebaseAiLogicPromptTemplateTimeouts" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplate.GoogleFirebaseAiLogicPromptTemplateTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplate.GoogleFirebaseAiLogicPromptTemplateTimeouts.Initializer"></a>

```python
from cdktn_provider_google_beta import google_firebase_ai_logic_prompt_template

googleFirebaseAiLogicPromptTemplate.GoogleFirebaseAiLogicPromptTemplateTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplate.GoogleFirebaseAiLogicPromptTemplateTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_firebase_ai_logic_prompt_template#create GoogleFirebaseAiLogicPromptTemplate#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplate.GoogleFirebaseAiLogicPromptTemplateTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_firebase_ai_logic_prompt_template#delete GoogleFirebaseAiLogicPromptTemplate#delete}. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplate.GoogleFirebaseAiLogicPromptTemplateTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_firebase_ai_logic_prompt_template#update GoogleFirebaseAiLogicPromptTemplate#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplate.GoogleFirebaseAiLogicPromptTemplateTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_firebase_ai_logic_prompt_template#create GoogleFirebaseAiLogicPromptTemplate#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplate.GoogleFirebaseAiLogicPromptTemplateTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_firebase_ai_logic_prompt_template#delete GoogleFirebaseAiLogicPromptTemplate#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplate.GoogleFirebaseAiLogicPromptTemplateTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_firebase_ai_logic_prompt_template#update GoogleFirebaseAiLogicPromptTemplate#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleFirebaseAiLogicPromptTemplateTimeoutsOutputReference <a name="GoogleFirebaseAiLogicPromptTemplateTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplate.GoogleFirebaseAiLogicPromptTemplateTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplate.GoogleFirebaseAiLogicPromptTemplateTimeoutsOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_firebase_ai_logic_prompt_template

googleFirebaseAiLogicPromptTemplate.GoogleFirebaseAiLogicPromptTemplateTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplate.GoogleFirebaseAiLogicPromptTemplateTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplate.GoogleFirebaseAiLogicPromptTemplateTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplate.GoogleFirebaseAiLogicPromptTemplateTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplate.GoogleFirebaseAiLogicPromptTemplateTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplate.GoogleFirebaseAiLogicPromptTemplateTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplate.GoogleFirebaseAiLogicPromptTemplateTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplate.GoogleFirebaseAiLogicPromptTemplateTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplate.GoogleFirebaseAiLogicPromptTemplateTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplate.GoogleFirebaseAiLogicPromptTemplateTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplate.GoogleFirebaseAiLogicPromptTemplateTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplate.GoogleFirebaseAiLogicPromptTemplateTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplate.GoogleFirebaseAiLogicPromptTemplateTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplate.GoogleFirebaseAiLogicPromptTemplateTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplate.GoogleFirebaseAiLogicPromptTemplateTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplate.GoogleFirebaseAiLogicPromptTemplateTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplate.GoogleFirebaseAiLogicPromptTemplateTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplate.GoogleFirebaseAiLogicPromptTemplateTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplate.GoogleFirebaseAiLogicPromptTemplateTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplate.GoogleFirebaseAiLogicPromptTemplateTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplate.GoogleFirebaseAiLogicPromptTemplateTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplate.GoogleFirebaseAiLogicPromptTemplateTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplate.GoogleFirebaseAiLogicPromptTemplateTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplate.GoogleFirebaseAiLogicPromptTemplateTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplate.GoogleFirebaseAiLogicPromptTemplateTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplate.GoogleFirebaseAiLogicPromptTemplateTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplate.GoogleFirebaseAiLogicPromptTemplateTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplate.GoogleFirebaseAiLogicPromptTemplateTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplate.GoogleFirebaseAiLogicPromptTemplateTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplate.GoogleFirebaseAiLogicPromptTemplateTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplate.GoogleFirebaseAiLogicPromptTemplateTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplate.GoogleFirebaseAiLogicPromptTemplateTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplate.GoogleFirebaseAiLogicPromptTemplateTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplate.GoogleFirebaseAiLogicPromptTemplateTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplate.GoogleFirebaseAiLogicPromptTemplateTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplate.GoogleFirebaseAiLogicPromptTemplateTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplate.GoogleFirebaseAiLogicPromptTemplateTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplate.GoogleFirebaseAiLogicPromptTemplateTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplate.GoogleFirebaseAiLogicPromptTemplateTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplate.GoogleFirebaseAiLogicPromptTemplateTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplate.GoogleFirebaseAiLogicPromptTemplateTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplate.GoogleFirebaseAiLogicPromptTemplateTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplate.GoogleFirebaseAiLogicPromptTemplateTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplate.GoogleFirebaseAiLogicPromptTemplateTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplate.GoogleFirebaseAiLogicPromptTemplateTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplate.GoogleFirebaseAiLogicPromptTemplateTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplate.GoogleFirebaseAiLogicPromptTemplateTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplate.GoogleFirebaseAiLogicPromptTemplateTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplate.GoogleFirebaseAiLogicPromptTemplateTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplate.GoogleFirebaseAiLogicPromptTemplateTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplate.GoogleFirebaseAiLogicPromptTemplateTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplate.GoogleFirebaseAiLogicPromptTemplateTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplate.GoogleFirebaseAiLogicPromptTemplateTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplate.GoogleFirebaseAiLogicPromptTemplateTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplate.GoogleFirebaseAiLogicPromptTemplateTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplate.GoogleFirebaseAiLogicPromptTemplateTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplate.GoogleFirebaseAiLogicPromptTemplateTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplate.GoogleFirebaseAiLogicPromptTemplateTimeouts">GoogleFirebaseAiLogicPromptTemplateTimeouts</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplate.GoogleFirebaseAiLogicPromptTemplateTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplate.GoogleFirebaseAiLogicPromptTemplateTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplate.GoogleFirebaseAiLogicPromptTemplateTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplate.GoogleFirebaseAiLogicPromptTemplateTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplate.GoogleFirebaseAiLogicPromptTemplateTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplate.GoogleFirebaseAiLogicPromptTemplateTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplate.GoogleFirebaseAiLogicPromptTemplateTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplate.GoogleFirebaseAiLogicPromptTemplateTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplate.GoogleFirebaseAiLogicPromptTemplateTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | GoogleFirebaseAiLogicPromptTemplateTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplate.GoogleFirebaseAiLogicPromptTemplateTimeouts">GoogleFirebaseAiLogicPromptTemplateTimeouts</a>

---



