# `googleCesExample` Submodule <a name="`googleCesExample` Submodule" id="@cdktn/provider-google-beta.googleCesExample"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleCesExample <a name="GoogleCesExample" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExample"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_ces_example google_ces_example}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.Initializer"></a>

```python
from cdktn_provider_google_beta import google_ces_example

googleCesExample.GoogleCesExample(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  app: str,
  display_name: str,
  example_id: str,
  location: str,
  deletion_policy: str = None,
  description: str = None,
  entry_agent: str = None,
  id: str = None,
  messages: IResolvable | typing.List[GoogleCesExampleMessages] = None,
  project: str = None,
  timeouts: GoogleCesExampleTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.Initializer.parameter.app">app</a></code> | <code>str</code> | Resource ID segment making up resource 'name', defining the app the example belongs to. |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | Display name of the example. |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.Initializer.parameter.exampleId">example_id</a></code> | <code>str</code> | The ID to use for the example, which will become the final component of the example's resource name. |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.Initializer.parameter.location">location</a></code> | <code>str</code> | Resource ID segment making up resource 'name', defining what region the parent app is in. |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.Initializer.parameter.deletionPolicy">deletion_policy</a></code> | <code>str</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.Initializer.parameter.description">description</a></code> | <code>str</code> | Human-readable description of the example. |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.Initializer.parameter.entryAgent">entry_agent</a></code> | <code>str</code> | The agent that initially handles the conversation. |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_ces_example#id GoogleCesExample#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.Initializer.parameter.messages">messages</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessages">GoogleCesExampleMessages</a>]</code> | messages block. |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_ces_example#project GoogleCesExample#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleTimeouts">GoogleCesExampleTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `app`<sup>Required</sup> <a name="app" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.Initializer.parameter.app"></a>

- *Type:* str

Resource ID segment making up resource 'name', defining the app the example belongs to.

It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_ces_example#app GoogleCesExample#app}

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.Initializer.parameter.displayName"></a>

- *Type:* str

Display name of the example.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_ces_example#display_name GoogleCesExample#display_name}

---

##### `example_id`<sup>Required</sup> <a name="example_id" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.Initializer.parameter.exampleId"></a>

- *Type:* str

The ID to use for the example, which will become the final component of the example's resource name.

In Terraform, this field is required.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_ces_example#example_id GoogleCesExample#example_id}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.Initializer.parameter.location"></a>

- *Type:* str

Resource ID segment making up resource 'name', defining what region the parent app is in.

It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_ces_example#location GoogleCesExample#location}

---

##### `deletion_policy`<sup>Optional</sup> <a name="deletion_policy" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.Initializer.parameter.deletionPolicy"></a>

- *Type:* str

Whether Terraform will be prevented from destroying the instance.

Defaults to "DELETE".
When a 'terraform destroy' or 'terraform apply' would delete the instance,
the command will fail if this field is set to "PREVENT" in Terraform state.
When set to "ABANDON", the command will remove the resource from Terraform
management without updating or deleting the resource in the API.
When set to "DELETE", deleting the resource is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_ces_example#deletion_policy GoogleCesExample#deletion_policy}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.Initializer.parameter.description"></a>

- *Type:* str

Human-readable description of the example.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_ces_example#description GoogleCesExample#description}

---

##### `entry_agent`<sup>Optional</sup> <a name="entry_agent" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.Initializer.parameter.entryAgent"></a>

- *Type:* str

The agent that initially handles the conversation.

If not specified, the
example represents a conversation that is handled by the root agent.
Format: 'projects/{project}/locations/{location}/apps/{app}/agents/{agent}'

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_ces_example#entry_agent GoogleCesExample#entry_agent}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_ces_example#id GoogleCesExample#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `messages`<sup>Optional</sup> <a name="messages" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.Initializer.parameter.messages"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessages">GoogleCesExampleMessages</a>]

messages block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_ces_example#messages GoogleCesExample#messages}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_ces_example#project GoogleCesExample#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleTimeouts">GoogleCesExampleTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_ces_example#timeouts GoogleCesExample#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.putMessages">put_messages</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.resetDeletionPolicy">reset_deletion_policy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.resetEntryAgent">reset_entry_agent</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.resetMessages">reset_messages</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_messages` <a name="put_messages" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.putMessages"></a>

```python
def put_messages(
  value: IResolvable | typing.List[GoogleCesExampleMessages]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.putMessages.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessages">GoogleCesExampleMessages</a>]

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_ces_example#create GoogleCesExample#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_ces_example#delete GoogleCesExample#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_ces_example#update GoogleCesExample#update}.

---

##### `reset_deletion_policy` <a name="reset_deletion_policy" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.resetDeletionPolicy"></a>

```python
def reset_deletion_policy() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_entry_agent` <a name="reset_entry_agent" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.resetEntryAgent"></a>

```python
def reset_entry_agent() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_messages` <a name="reset_messages" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.resetMessages"></a>

```python
def reset_messages() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a GoogleCesExample resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.isConstruct"></a>

```python
from cdktn_provider_google_beta import google_ces_example

googleCesExample.GoogleCesExample.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.isTerraformElement"></a>

```python
from cdktn_provider_google_beta import google_ces_example

googleCesExample.GoogleCesExample.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.isTerraformResource"></a>

```python
from cdktn_provider_google_beta import google_ces_example

googleCesExample.GoogleCesExample.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.generateConfigForImport"></a>

```python
from cdktn_provider_google_beta import google_ces_example

googleCesExample.GoogleCesExample.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a GoogleCesExample resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the GoogleCesExample to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing GoogleCesExample that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_ces_example#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the GoogleCesExample to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.property.createTime">create_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.property.etag">etag</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.property.invalid">invalid</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.property.messages">messages</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesList">GoogleCesExampleMessagesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleTimeoutsOutputReference">GoogleCesExampleTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.property.updateTime">update_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.property.appInput">app_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.property.deletionPolicyInput">deletion_policy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.property.entryAgentInput">entry_agent_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.property.exampleIdInput">example_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.property.messagesInput">messages_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessages">GoogleCesExampleMessages</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.property.timeoutsInput">timeouts_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleTimeouts">GoogleCesExampleTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.property.app">app</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.property.deletionPolicy">deletion_policy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.property.entryAgent">entry_agent</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.property.exampleId">example_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.property.project">project</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `create_time`<sup>Required</sup> <a name="create_time" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.property.createTime"></a>

```python
create_time: str
```

- *Type:* str

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.property.etag"></a>

```python
etag: str
```

- *Type:* str

---

##### `invalid`<sup>Required</sup> <a name="invalid" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.property.invalid"></a>

```python
invalid: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `messages`<sup>Required</sup> <a name="messages" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.property.messages"></a>

```python
messages: GoogleCesExampleMessagesList
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesList">GoogleCesExampleMessagesList</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.property.timeouts"></a>

```python
timeouts: GoogleCesExampleTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleTimeoutsOutputReference">GoogleCesExampleTimeoutsOutputReference</a>

---

##### `update_time`<sup>Required</sup> <a name="update_time" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.property.updateTime"></a>

```python
update_time: str
```

- *Type:* str

---

##### `app_input`<sup>Optional</sup> <a name="app_input" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.property.appInput"></a>

```python
app_input: str
```

- *Type:* str

---

##### `deletion_policy_input`<sup>Optional</sup> <a name="deletion_policy_input" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.property.deletionPolicyInput"></a>

```python
deletion_policy_input: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `entry_agent_input`<sup>Optional</sup> <a name="entry_agent_input" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.property.entryAgentInput"></a>

```python
entry_agent_input: str
```

- *Type:* str

---

##### `example_id_input`<sup>Optional</sup> <a name="example_id_input" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.property.exampleIdInput"></a>

```python
example_id_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `messages_input`<sup>Optional</sup> <a name="messages_input" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.property.messagesInput"></a>

```python
messages_input: IResolvable | typing.List[GoogleCesExampleMessages]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessages">GoogleCesExampleMessages</a>]

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.property.timeoutsInput"></a>

```python
timeouts_input: IResolvable | GoogleCesExampleTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleTimeouts">GoogleCesExampleTimeouts</a>

---

##### `app`<sup>Required</sup> <a name="app" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.property.app"></a>

```python
app: str
```

- *Type:* str

---

##### `deletion_policy`<sup>Required</sup> <a name="deletion_policy" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.property.deletionPolicy"></a>

```python
deletion_policy: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `entry_agent`<sup>Required</sup> <a name="entry_agent" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.property.entryAgent"></a>

```python
entry_agent: str
```

- *Type:* str

---

##### `example_id`<sup>Required</sup> <a name="example_id" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.property.exampleId"></a>

```python
example_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.property.project"></a>

```python
project: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleCesExampleConfig <a name="GoogleCesExampleConfig" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleConfig.Initializer"></a>

```python
from cdktn_provider_google_beta import google_ces_example

googleCesExample.GoogleCesExampleConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  app: str,
  display_name: str,
  example_id: str,
  location: str,
  deletion_policy: str = None,
  description: str = None,
  entry_agent: str = None,
  id: str = None,
  messages: IResolvable | typing.List[GoogleCesExampleMessages] = None,
  project: str = None,
  timeouts: GoogleCesExampleTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleConfig.property.app">app</a></code> | <code>str</code> | Resource ID segment making up resource 'name', defining the app the example belongs to. |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleConfig.property.displayName">display_name</a></code> | <code>str</code> | Display name of the example. |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleConfig.property.exampleId">example_id</a></code> | <code>str</code> | The ID to use for the example, which will become the final component of the example's resource name. |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleConfig.property.location">location</a></code> | <code>str</code> | Resource ID segment making up resource 'name', defining what region the parent app is in. |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleConfig.property.deletionPolicy">deletion_policy</a></code> | <code>str</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleConfig.property.description">description</a></code> | <code>str</code> | Human-readable description of the example. |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleConfig.property.entryAgent">entry_agent</a></code> | <code>str</code> | The agent that initially handles the conversation. |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_ces_example#id GoogleCesExample#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleConfig.property.messages">messages</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessages">GoogleCesExampleMessages</a>]</code> | messages block. |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_ces_example#project GoogleCesExample#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleTimeouts">GoogleCesExampleTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `app`<sup>Required</sup> <a name="app" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleConfig.property.app"></a>

```python
app: str
```

- *Type:* str

Resource ID segment making up resource 'name', defining the app the example belongs to.

It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_ces_example#app GoogleCesExample#app}

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

Display name of the example.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_ces_example#display_name GoogleCesExample#display_name}

---

##### `example_id`<sup>Required</sup> <a name="example_id" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleConfig.property.exampleId"></a>

```python
example_id: str
```

- *Type:* str

The ID to use for the example, which will become the final component of the example's resource name.

In Terraform, this field is required.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_ces_example#example_id GoogleCesExample#example_id}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleConfig.property.location"></a>

```python
location: str
```

- *Type:* str

Resource ID segment making up resource 'name', defining what region the parent app is in.

It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_ces_example#location GoogleCesExample#location}

---

##### `deletion_policy`<sup>Optional</sup> <a name="deletion_policy" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_ces_example#deletion_policy GoogleCesExample#deletion_policy}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Human-readable description of the example.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_ces_example#description GoogleCesExample#description}

---

##### `entry_agent`<sup>Optional</sup> <a name="entry_agent" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleConfig.property.entryAgent"></a>

```python
entry_agent: str
```

- *Type:* str

The agent that initially handles the conversation.

If not specified, the
example represents a conversation that is handled by the root agent.
Format: 'projects/{project}/locations/{location}/apps/{app}/agents/{agent}'

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_ces_example#entry_agent GoogleCesExample#entry_agent}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_ces_example#id GoogleCesExample#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `messages`<sup>Optional</sup> <a name="messages" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleConfig.property.messages"></a>

```python
messages: IResolvable | typing.List[GoogleCesExampleMessages]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessages">GoogleCesExampleMessages</a>]

messages block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_ces_example#messages GoogleCesExample#messages}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_ces_example#project GoogleCesExample#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleConfig.property.timeouts"></a>

```python
timeouts: GoogleCesExampleTimeouts
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleTimeouts">GoogleCesExampleTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_ces_example#timeouts GoogleCesExample#timeouts}

---

### GoogleCesExampleMessages <a name="GoogleCesExampleMessages" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessages"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessages.Initializer"></a>

```python
from cdktn_provider_google_beta import google_ces_example

googleCesExample.GoogleCesExampleMessages(
  chunks: IResolvable | typing.List[GoogleCesExampleMessagesChunks] = None,
  role: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessages.property.chunks">chunks</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunks">GoogleCesExampleMessagesChunks</a>]</code> | chunks block. |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessages.property.role">role</a></code> | <code>str</code> | The role within the conversation, e.g., user, agent. |

---

##### `chunks`<sup>Optional</sup> <a name="chunks" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessages.property.chunks"></a>

```python
chunks: IResolvable | typing.List[GoogleCesExampleMessagesChunks]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunks">GoogleCesExampleMessagesChunks</a>]

chunks block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_ces_example#chunks GoogleCesExample#chunks}

---

##### `role`<sup>Optional</sup> <a name="role" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessages.property.role"></a>

```python
role: str
```

- *Type:* str

The role within the conversation, e.g., user, agent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_ces_example#role GoogleCesExample#role}

---

### GoogleCesExampleMessagesChunks <a name="GoogleCesExampleMessagesChunks" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunks"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunks.Initializer"></a>

```python
from cdktn_provider_google_beta import google_ces_example

googleCesExample.GoogleCesExampleMessagesChunks(
  agent_transfer: GoogleCesExampleMessagesChunksAgentTransfer = None,
  image: GoogleCesExampleMessagesChunksImage = None,
  text: str = None,
  tool_call: GoogleCesExampleMessagesChunksToolCall = None,
  tool_response: GoogleCesExampleMessagesChunksToolResponse = None,
  updated_variables: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunks.property.agentTransfer">agent_transfer</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksAgentTransfer">GoogleCesExampleMessagesChunksAgentTransfer</a></code> | agent_transfer block. |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunks.property.image">image</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksImage">GoogleCesExampleMessagesChunksImage</a></code> | image block. |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunks.property.text">text</a></code> | <code>str</code> | Text data. |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunks.property.toolCall">tool_call</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCall">GoogleCesExampleMessagesChunksToolCall</a></code> | tool_call block. |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunks.property.toolResponse">tool_response</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponse">GoogleCesExampleMessagesChunksToolResponse</a></code> | tool_response block. |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunks.property.updatedVariables">updated_variables</a></code> | <code>str</code> | A struct represents variables that were updated in the conversation, keyed by variable names. |

---

##### `agent_transfer`<sup>Optional</sup> <a name="agent_transfer" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunks.property.agentTransfer"></a>

```python
agent_transfer: GoogleCesExampleMessagesChunksAgentTransfer
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksAgentTransfer">GoogleCesExampleMessagesChunksAgentTransfer</a>

agent_transfer block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_ces_example#agent_transfer GoogleCesExample#agent_transfer}

---

##### `image`<sup>Optional</sup> <a name="image" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunks.property.image"></a>

```python
image: GoogleCesExampleMessagesChunksImage
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksImage">GoogleCesExampleMessagesChunksImage</a>

image block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_ces_example#image GoogleCesExample#image}

---

##### `text`<sup>Optional</sup> <a name="text" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunks.property.text"></a>

```python
text: str
```

- *Type:* str

Text data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_ces_example#text GoogleCesExample#text}

---

##### `tool_call`<sup>Optional</sup> <a name="tool_call" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunks.property.toolCall"></a>

```python
tool_call: GoogleCesExampleMessagesChunksToolCall
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCall">GoogleCesExampleMessagesChunksToolCall</a>

tool_call block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_ces_example#tool_call GoogleCesExample#tool_call}

---

##### `tool_response`<sup>Optional</sup> <a name="tool_response" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunks.property.toolResponse"></a>

```python
tool_response: GoogleCesExampleMessagesChunksToolResponse
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponse">GoogleCesExampleMessagesChunksToolResponse</a>

tool_response block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_ces_example#tool_response GoogleCesExample#tool_response}

---

##### `updated_variables`<sup>Optional</sup> <a name="updated_variables" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunks.property.updatedVariables"></a>

```python
updated_variables: str
```

- *Type:* str

A struct represents variables that were updated in the conversation, keyed by variable names.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_ces_example#updated_variables GoogleCesExample#updated_variables}

---

### GoogleCesExampleMessagesChunksAgentTransfer <a name="GoogleCesExampleMessagesChunksAgentTransfer" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksAgentTransfer"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksAgentTransfer.Initializer"></a>

```python
from cdktn_provider_google_beta import google_ces_example

googleCesExample.GoogleCesExampleMessagesChunksAgentTransfer(
  target_agent: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksAgentTransfer.property.targetAgent">target_agent</a></code> | <code>str</code> | The agent to which the conversation is being transferred. The agent will handle the conversation from this point forward. Format: 'projects/{project}/locations/{location}/apps/{app}/agents/{agent}'. |

---

##### `target_agent`<sup>Required</sup> <a name="target_agent" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksAgentTransfer.property.targetAgent"></a>

```python
target_agent: str
```

- *Type:* str

The agent to which the conversation is being transferred. The agent will handle the conversation from this point forward. Format: 'projects/{project}/locations/{location}/apps/{app}/agents/{agent}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_ces_example#target_agent GoogleCesExample#target_agent}

---

### GoogleCesExampleMessagesChunksImage <a name="GoogleCesExampleMessagesChunksImage" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksImage"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksImage.Initializer"></a>

```python
from cdktn_provider_google_beta import google_ces_example

googleCesExample.GoogleCesExampleMessagesChunksImage(
  data: str,
  mime_type: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksImage.property.data">data</a></code> | <code>str</code> | Raw bytes of the image. |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksImage.property.mimeType">mime_type</a></code> | <code>str</code> | The IANA standard MIME type of the source data. Supported image types includes: * image/png * image/jpeg * image/webp. |

---

##### `data`<sup>Required</sup> <a name="data" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksImage.property.data"></a>

```python
data: str
```

- *Type:* str

Raw bytes of the image.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_ces_example#data GoogleCesExample#data}

---

##### `mime_type`<sup>Required</sup> <a name="mime_type" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksImage.property.mimeType"></a>

```python
mime_type: str
```

- *Type:* str

The IANA standard MIME type of the source data. Supported image types includes: * image/png * image/jpeg * image/webp.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_ces_example#mime_type GoogleCesExample#mime_type}

---

### GoogleCesExampleMessagesChunksToolCall <a name="GoogleCesExampleMessagesChunksToolCall" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCall"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCall.Initializer"></a>

```python
from cdktn_provider_google_beta import google_ces_example

googleCesExample.GoogleCesExampleMessagesChunksToolCall(
  args: str = None,
  id: str = None,
  tool: str = None,
  toolset_tool: GoogleCesExampleMessagesChunksToolCallToolsetTool = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCall.property.args">args</a></code> | <code>str</code> | The input parameters and values for the tool in JSON object format. |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCall.property.id">id</a></code> | <code>str</code> | The unique identifier of the tool call. |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCall.property.tool">tool</a></code> | <code>str</code> | The name of the tool to execute. Format: 'projects/{project}/locations/{location}/apps/{app}/tools/{tool}'. |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCall.property.toolsetTool">toolset_tool</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallToolsetTool">GoogleCesExampleMessagesChunksToolCallToolsetTool</a></code> | toolset_tool block. |

---

##### `args`<sup>Optional</sup> <a name="args" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCall.property.args"></a>

```python
args: str
```

- *Type:* str

The input parameters and values for the tool in JSON object format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_ces_example#args GoogleCesExample#args}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCall.property.id"></a>

```python
id: str
```

- *Type:* str

The unique identifier of the tool call.

If populated, the client should
return the execution result with the matching ID in
ToolResponse.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_ces_example#id GoogleCesExample#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `tool`<sup>Optional</sup> <a name="tool" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCall.property.tool"></a>

```python
tool: str
```

- *Type:* str

The name of the tool to execute. Format: 'projects/{project}/locations/{location}/apps/{app}/tools/{tool}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_ces_example#tool GoogleCesExample#tool}

---

##### `toolset_tool`<sup>Optional</sup> <a name="toolset_tool" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCall.property.toolsetTool"></a>

```python
toolset_tool: GoogleCesExampleMessagesChunksToolCallToolsetTool
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallToolsetTool">GoogleCesExampleMessagesChunksToolCallToolsetTool</a>

toolset_tool block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_ces_example#toolset_tool GoogleCesExample#toolset_tool}

---

### GoogleCesExampleMessagesChunksToolCallToolsetTool <a name="GoogleCesExampleMessagesChunksToolCallToolsetTool" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallToolsetTool"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallToolsetTool.Initializer"></a>

```python
from cdktn_provider_google_beta import google_ces_example

googleCesExample.GoogleCesExampleMessagesChunksToolCallToolsetTool(
  toolset: str,
  tool_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallToolsetTool.property.toolset">toolset</a></code> | <code>str</code> | The resource name of the Toolset from which this tool is derived. Format: 'projects/{project}/locations/{location}/apps/{app}/toolsets/{toolset}'. |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallToolsetTool.property.toolId">tool_id</a></code> | <code>str</code> | The tool ID to filter the tools to retrieve the schema for. |

---

##### `toolset`<sup>Required</sup> <a name="toolset" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallToolsetTool.property.toolset"></a>

```python
toolset: str
```

- *Type:* str

The resource name of the Toolset from which this tool is derived. Format: 'projects/{project}/locations/{location}/apps/{app}/toolsets/{toolset}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_ces_example#toolset GoogleCesExample#toolset}

---

##### `tool_id`<sup>Optional</sup> <a name="tool_id" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallToolsetTool.property.toolId"></a>

```python
tool_id: str
```

- *Type:* str

The tool ID to filter the tools to retrieve the schema for.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_ces_example#tool_id GoogleCesExample#tool_id}

---

### GoogleCesExampleMessagesChunksToolResponse <a name="GoogleCesExampleMessagesChunksToolResponse" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponse"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponse.Initializer"></a>

```python
from cdktn_provider_google_beta import google_ces_example

googleCesExample.GoogleCesExampleMessagesChunksToolResponse(
  response: str,
  id: str = None,
  tool: str = None,
  toolset_tool: GoogleCesExampleMessagesChunksToolResponseToolsetTool = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponse.property.response">response</a></code> | <code>str</code> | The tool execution result in JSON object format. |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponse.property.id">id</a></code> | <code>str</code> | The matching ID of the tool call the response is for. |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponse.property.tool">tool</a></code> | <code>str</code> | The name of the tool to execute. Format: 'projects/{project}/locations/{location}/apps/{app}/tools/{tool}'. |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponse.property.toolsetTool">toolset_tool</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseToolsetTool">GoogleCesExampleMessagesChunksToolResponseToolsetTool</a></code> | toolset_tool block. |

---

##### `response`<sup>Required</sup> <a name="response" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponse.property.response"></a>

```python
response: str
```

- *Type:* str

The tool execution result in JSON object format.

Use "output" key to specify tool response and "error" key to specify
error details (if any). If "output" and "error" keys are not specified,
then whole "response" is treated as tool execution result.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_ces_example#response GoogleCesExample#response}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponse.property.id"></a>

```python
id: str
```

- *Type:* str

The matching ID of the tool call the response is for.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_ces_example#id GoogleCesExample#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `tool`<sup>Optional</sup> <a name="tool" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponse.property.tool"></a>

```python
tool: str
```

- *Type:* str

The name of the tool to execute. Format: 'projects/{project}/locations/{location}/apps/{app}/tools/{tool}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_ces_example#tool GoogleCesExample#tool}

---

##### `toolset_tool`<sup>Optional</sup> <a name="toolset_tool" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponse.property.toolsetTool"></a>

```python
toolset_tool: GoogleCesExampleMessagesChunksToolResponseToolsetTool
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseToolsetTool">GoogleCesExampleMessagesChunksToolResponseToolsetTool</a>

toolset_tool block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_ces_example#toolset_tool GoogleCesExample#toolset_tool}

---

### GoogleCesExampleMessagesChunksToolResponseToolsetTool <a name="GoogleCesExampleMessagesChunksToolResponseToolsetTool" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseToolsetTool"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseToolsetTool.Initializer"></a>

```python
from cdktn_provider_google_beta import google_ces_example

googleCesExample.GoogleCesExampleMessagesChunksToolResponseToolsetTool(
  toolset: str,
  tool_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseToolsetTool.property.toolset">toolset</a></code> | <code>str</code> | The resource name of the Toolset from which this tool is derived. Format: 'projects/{project}/locations/{location}/apps/{app}/toolsets/{toolset}'. |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseToolsetTool.property.toolId">tool_id</a></code> | <code>str</code> | The tool ID to filter the tools to retrieve the schema for. |

---

##### `toolset`<sup>Required</sup> <a name="toolset" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseToolsetTool.property.toolset"></a>

```python
toolset: str
```

- *Type:* str

The resource name of the Toolset from which this tool is derived. Format: 'projects/{project}/locations/{location}/apps/{app}/toolsets/{toolset}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_ces_example#toolset GoogleCesExample#toolset}

---

##### `tool_id`<sup>Optional</sup> <a name="tool_id" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseToolsetTool.property.toolId"></a>

```python
tool_id: str
```

- *Type:* str

The tool ID to filter the tools to retrieve the schema for.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_ces_example#tool_id GoogleCesExample#tool_id}

---

### GoogleCesExampleTimeouts <a name="GoogleCesExampleTimeouts" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleTimeouts.Initializer"></a>

```python
from cdktn_provider_google_beta import google_ces_example

googleCesExample.GoogleCesExampleTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_ces_example#create GoogleCesExample#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_ces_example#delete GoogleCesExample#delete}. |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_ces_example#update GoogleCesExample#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_ces_example#create GoogleCesExample#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_ces_example#delete GoogleCesExample#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_ces_example#update GoogleCesExample#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleCesExampleMessagesChunksAgentTransferOutputReference <a name="GoogleCesExampleMessagesChunksAgentTransferOutputReference" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksAgentTransferOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksAgentTransferOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_ces_example

googleCesExample.GoogleCesExampleMessagesChunksAgentTransferOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksAgentTransferOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksAgentTransferOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksAgentTransferOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksAgentTransferOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksAgentTransferOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksAgentTransferOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksAgentTransferOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksAgentTransferOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksAgentTransferOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksAgentTransferOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksAgentTransferOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksAgentTransferOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksAgentTransferOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksAgentTransferOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksAgentTransferOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksAgentTransferOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksAgentTransferOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksAgentTransferOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksAgentTransferOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksAgentTransferOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksAgentTransferOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksAgentTransferOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksAgentTransferOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksAgentTransferOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksAgentTransferOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksAgentTransferOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksAgentTransferOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksAgentTransferOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksAgentTransferOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksAgentTransferOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksAgentTransferOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksAgentTransferOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksAgentTransferOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksAgentTransferOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksAgentTransferOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksAgentTransferOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksAgentTransferOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksAgentTransferOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksAgentTransferOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksAgentTransferOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksAgentTransferOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksAgentTransferOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksAgentTransferOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksAgentTransferOutputReference.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksAgentTransferOutputReference.property.targetAgentInput">target_agent_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksAgentTransferOutputReference.property.targetAgent">target_agent</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksAgentTransferOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksAgentTransfer">GoogleCesExampleMessagesChunksAgentTransfer</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksAgentTransferOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksAgentTransferOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksAgentTransferOutputReference.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `target_agent_input`<sup>Optional</sup> <a name="target_agent_input" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksAgentTransferOutputReference.property.targetAgentInput"></a>

```python
target_agent_input: str
```

- *Type:* str

---

##### `target_agent`<sup>Required</sup> <a name="target_agent" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksAgentTransferOutputReference.property.targetAgent"></a>

```python
target_agent: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksAgentTransferOutputReference.property.internalValue"></a>

```python
internal_value: GoogleCesExampleMessagesChunksAgentTransfer
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksAgentTransfer">GoogleCesExampleMessagesChunksAgentTransfer</a>

---


### GoogleCesExampleMessagesChunksImageOutputReference <a name="GoogleCesExampleMessagesChunksImageOutputReference" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksImageOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksImageOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_ces_example

googleCesExample.GoogleCesExampleMessagesChunksImageOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksImageOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksImageOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksImageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksImageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksImageOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksImageOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksImageOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksImageOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksImageOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksImageOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksImageOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksImageOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksImageOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksImageOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksImageOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksImageOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksImageOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksImageOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksImageOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksImageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksImageOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksImageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksImageOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksImageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksImageOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksImageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksImageOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksImageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksImageOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksImageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksImageOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksImageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksImageOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksImageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksImageOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksImageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksImageOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksImageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksImageOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksImageOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksImageOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksImageOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksImageOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksImageOutputReference.property.dataInput">data_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksImageOutputReference.property.mimeTypeInput">mime_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksImageOutputReference.property.data">data</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksImageOutputReference.property.mimeType">mime_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksImageOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksImage">GoogleCesExampleMessagesChunksImage</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksImageOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksImageOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `data_input`<sup>Optional</sup> <a name="data_input" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksImageOutputReference.property.dataInput"></a>

```python
data_input: str
```

- *Type:* str

---

##### `mime_type_input`<sup>Optional</sup> <a name="mime_type_input" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksImageOutputReference.property.mimeTypeInput"></a>

```python
mime_type_input: str
```

- *Type:* str

---

##### `data`<sup>Required</sup> <a name="data" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksImageOutputReference.property.data"></a>

```python
data: str
```

- *Type:* str

---

##### `mime_type`<sup>Required</sup> <a name="mime_type" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksImageOutputReference.property.mimeType"></a>

```python
mime_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksImageOutputReference.property.internalValue"></a>

```python
internal_value: GoogleCesExampleMessagesChunksImage
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksImage">GoogleCesExampleMessagesChunksImage</a>

---


### GoogleCesExampleMessagesChunksList <a name="GoogleCesExampleMessagesChunksList" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksList.Initializer"></a>

```python
from cdktn_provider_google_beta import google_ces_example

googleCesExample.GoogleCesExampleMessagesChunksList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleCesExampleMessagesChunksOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunks">GoogleCesExampleMessagesChunks</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[GoogleCesExampleMessagesChunks]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunks">GoogleCesExampleMessagesChunks</a>]

---


### GoogleCesExampleMessagesChunksOutputReference <a name="GoogleCesExampleMessagesChunksOutputReference" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_ces_example

googleCesExample.GoogleCesExampleMessagesChunksOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksOutputReference.putAgentTransfer">put_agent_transfer</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksOutputReference.putImage">put_image</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksOutputReference.putToolCall">put_tool_call</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksOutputReference.putToolResponse">put_tool_response</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksOutputReference.resetAgentTransfer">reset_agent_transfer</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksOutputReference.resetImage">reset_image</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksOutputReference.resetText">reset_text</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksOutputReference.resetToolCall">reset_tool_call</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksOutputReference.resetToolResponse">reset_tool_response</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksOutputReference.resetUpdatedVariables">reset_updated_variables</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_agent_transfer` <a name="put_agent_transfer" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksOutputReference.putAgentTransfer"></a>

```python
def put_agent_transfer(
  target_agent: str
) -> None
```

###### `target_agent`<sup>Required</sup> <a name="target_agent" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksOutputReference.putAgentTransfer.parameter.targetAgent"></a>

- *Type:* str

The agent to which the conversation is being transferred. The agent will handle the conversation from this point forward. Format: 'projects/{project}/locations/{location}/apps/{app}/agents/{agent}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_ces_example#target_agent GoogleCesExample#target_agent}

---

##### `put_image` <a name="put_image" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksOutputReference.putImage"></a>

```python
def put_image(
  data: str,
  mime_type: str
) -> None
```

###### `data`<sup>Required</sup> <a name="data" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksOutputReference.putImage.parameter.data"></a>

- *Type:* str

Raw bytes of the image.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_ces_example#data GoogleCesExample#data}

---

###### `mime_type`<sup>Required</sup> <a name="mime_type" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksOutputReference.putImage.parameter.mimeType"></a>

- *Type:* str

The IANA standard MIME type of the source data. Supported image types includes: * image/png * image/jpeg * image/webp.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_ces_example#mime_type GoogleCesExample#mime_type}

---

##### `put_tool_call` <a name="put_tool_call" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksOutputReference.putToolCall"></a>

```python
def put_tool_call(
  args: str = None,
  id: str = None,
  tool: str = None,
  toolset_tool: GoogleCesExampleMessagesChunksToolCallToolsetTool = None
) -> None
```

###### `args`<sup>Optional</sup> <a name="args" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksOutputReference.putToolCall.parameter.args"></a>

- *Type:* str

The input parameters and values for the tool in JSON object format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_ces_example#args GoogleCesExample#args}

---

###### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksOutputReference.putToolCall.parameter.id"></a>

- *Type:* str

The unique identifier of the tool call.

If populated, the client should
return the execution result with the matching ID in
ToolResponse.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_ces_example#id GoogleCesExample#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

###### `tool`<sup>Optional</sup> <a name="tool" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksOutputReference.putToolCall.parameter.tool"></a>

- *Type:* str

The name of the tool to execute. Format: 'projects/{project}/locations/{location}/apps/{app}/tools/{tool}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_ces_example#tool GoogleCesExample#tool}

---

###### `toolset_tool`<sup>Optional</sup> <a name="toolset_tool" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksOutputReference.putToolCall.parameter.toolsetTool"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallToolsetTool">GoogleCesExampleMessagesChunksToolCallToolsetTool</a>

toolset_tool block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_ces_example#toolset_tool GoogleCesExample#toolset_tool}

---

##### `put_tool_response` <a name="put_tool_response" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksOutputReference.putToolResponse"></a>

```python
def put_tool_response(
  response: str,
  id: str = None,
  tool: str = None,
  toolset_tool: GoogleCesExampleMessagesChunksToolResponseToolsetTool = None
) -> None
```

###### `response`<sup>Required</sup> <a name="response" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksOutputReference.putToolResponse.parameter.response"></a>

- *Type:* str

The tool execution result in JSON object format.

Use "output" key to specify tool response and "error" key to specify
error details (if any). If "output" and "error" keys are not specified,
then whole "response" is treated as tool execution result.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_ces_example#response GoogleCesExample#response}

---

###### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksOutputReference.putToolResponse.parameter.id"></a>

- *Type:* str

The matching ID of the tool call the response is for.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_ces_example#id GoogleCesExample#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

###### `tool`<sup>Optional</sup> <a name="tool" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksOutputReference.putToolResponse.parameter.tool"></a>

- *Type:* str

The name of the tool to execute. Format: 'projects/{project}/locations/{location}/apps/{app}/tools/{tool}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_ces_example#tool GoogleCesExample#tool}

---

###### `toolset_tool`<sup>Optional</sup> <a name="toolset_tool" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksOutputReference.putToolResponse.parameter.toolsetTool"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseToolsetTool">GoogleCesExampleMessagesChunksToolResponseToolsetTool</a>

toolset_tool block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_ces_example#toolset_tool GoogleCesExample#toolset_tool}

---

##### `reset_agent_transfer` <a name="reset_agent_transfer" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksOutputReference.resetAgentTransfer"></a>

```python
def reset_agent_transfer() -> None
```

##### `reset_image` <a name="reset_image" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksOutputReference.resetImage"></a>

```python
def reset_image() -> None
```

##### `reset_text` <a name="reset_text" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksOutputReference.resetText"></a>

```python
def reset_text() -> None
```

##### `reset_tool_call` <a name="reset_tool_call" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksOutputReference.resetToolCall"></a>

```python
def reset_tool_call() -> None
```

##### `reset_tool_response` <a name="reset_tool_response" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksOutputReference.resetToolResponse"></a>

```python
def reset_tool_response() -> None
```

##### `reset_updated_variables` <a name="reset_updated_variables" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksOutputReference.resetUpdatedVariables"></a>

```python
def reset_updated_variables() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksOutputReference.property.agentTransfer">agent_transfer</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksAgentTransferOutputReference">GoogleCesExampleMessagesChunksAgentTransferOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksOutputReference.property.image">image</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksImageOutputReference">GoogleCesExampleMessagesChunksImageOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksOutputReference.property.toolCall">tool_call</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallOutputReference">GoogleCesExampleMessagesChunksToolCallOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksOutputReference.property.toolResponse">tool_response</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseOutputReference">GoogleCesExampleMessagesChunksToolResponseOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksOutputReference.property.agentTransferInput">agent_transfer_input</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksAgentTransfer">GoogleCesExampleMessagesChunksAgentTransfer</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksOutputReference.property.imageInput">image_input</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksImage">GoogleCesExampleMessagesChunksImage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksOutputReference.property.textInput">text_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksOutputReference.property.toolCallInput">tool_call_input</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCall">GoogleCesExampleMessagesChunksToolCall</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksOutputReference.property.toolResponseInput">tool_response_input</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponse">GoogleCesExampleMessagesChunksToolResponse</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksOutputReference.property.updatedVariablesInput">updated_variables_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksOutputReference.property.text">text</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksOutputReference.property.updatedVariables">updated_variables</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunks">GoogleCesExampleMessagesChunks</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `agent_transfer`<sup>Required</sup> <a name="agent_transfer" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksOutputReference.property.agentTransfer"></a>

```python
agent_transfer: GoogleCesExampleMessagesChunksAgentTransferOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksAgentTransferOutputReference">GoogleCesExampleMessagesChunksAgentTransferOutputReference</a>

---

##### `image`<sup>Required</sup> <a name="image" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksOutputReference.property.image"></a>

```python
image: GoogleCesExampleMessagesChunksImageOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksImageOutputReference">GoogleCesExampleMessagesChunksImageOutputReference</a>

---

##### `tool_call`<sup>Required</sup> <a name="tool_call" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksOutputReference.property.toolCall"></a>

```python
tool_call: GoogleCesExampleMessagesChunksToolCallOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallOutputReference">GoogleCesExampleMessagesChunksToolCallOutputReference</a>

---

##### `tool_response`<sup>Required</sup> <a name="tool_response" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksOutputReference.property.toolResponse"></a>

```python
tool_response: GoogleCesExampleMessagesChunksToolResponseOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseOutputReference">GoogleCesExampleMessagesChunksToolResponseOutputReference</a>

---

##### `agent_transfer_input`<sup>Optional</sup> <a name="agent_transfer_input" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksOutputReference.property.agentTransferInput"></a>

```python
agent_transfer_input: GoogleCesExampleMessagesChunksAgentTransfer
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksAgentTransfer">GoogleCesExampleMessagesChunksAgentTransfer</a>

---

##### `image_input`<sup>Optional</sup> <a name="image_input" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksOutputReference.property.imageInput"></a>

```python
image_input: GoogleCesExampleMessagesChunksImage
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksImage">GoogleCesExampleMessagesChunksImage</a>

---

##### `text_input`<sup>Optional</sup> <a name="text_input" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksOutputReference.property.textInput"></a>

```python
text_input: str
```

- *Type:* str

---

##### `tool_call_input`<sup>Optional</sup> <a name="tool_call_input" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksOutputReference.property.toolCallInput"></a>

```python
tool_call_input: GoogleCesExampleMessagesChunksToolCall
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCall">GoogleCesExampleMessagesChunksToolCall</a>

---

##### `tool_response_input`<sup>Optional</sup> <a name="tool_response_input" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksOutputReference.property.toolResponseInput"></a>

```python
tool_response_input: GoogleCesExampleMessagesChunksToolResponse
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponse">GoogleCesExampleMessagesChunksToolResponse</a>

---

##### `updated_variables_input`<sup>Optional</sup> <a name="updated_variables_input" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksOutputReference.property.updatedVariablesInput"></a>

```python
updated_variables_input: str
```

- *Type:* str

---

##### `text`<sup>Required</sup> <a name="text" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksOutputReference.property.text"></a>

```python
text: str
```

- *Type:* str

---

##### `updated_variables`<sup>Required</sup> <a name="updated_variables" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksOutputReference.property.updatedVariables"></a>

```python
updated_variables: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | GoogleCesExampleMessagesChunks
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunks">GoogleCesExampleMessagesChunks</a>

---


### GoogleCesExampleMessagesChunksToolCallOutputReference <a name="GoogleCesExampleMessagesChunksToolCallOutputReference" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_ces_example

googleCesExample.GoogleCesExampleMessagesChunksToolCallOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallOutputReference.putToolsetTool">put_toolset_tool</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallOutputReference.resetArgs">reset_args</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallOutputReference.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallOutputReference.resetTool">reset_tool</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallOutputReference.resetToolsetTool">reset_toolset_tool</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_toolset_tool` <a name="put_toolset_tool" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallOutputReference.putToolsetTool"></a>

```python
def put_toolset_tool(
  toolset: str,
  tool_id: str = None
) -> None
```

###### `toolset`<sup>Required</sup> <a name="toolset" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallOutputReference.putToolsetTool.parameter.toolset"></a>

- *Type:* str

The resource name of the Toolset from which this tool is derived. Format: 'projects/{project}/locations/{location}/apps/{app}/toolsets/{toolset}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_ces_example#toolset GoogleCesExample#toolset}

---

###### `tool_id`<sup>Optional</sup> <a name="tool_id" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallOutputReference.putToolsetTool.parameter.toolId"></a>

- *Type:* str

The tool ID to filter the tools to retrieve the schema for.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_ces_example#tool_id GoogleCesExample#tool_id}

---

##### `reset_args` <a name="reset_args" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallOutputReference.resetArgs"></a>

```python
def reset_args() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallOutputReference.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_tool` <a name="reset_tool" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallOutputReference.resetTool"></a>

```python
def reset_tool() -> None
```

##### `reset_toolset_tool` <a name="reset_toolset_tool" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallOutputReference.resetToolsetTool"></a>

```python
def reset_toolset_tool() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallOutputReference.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallOutputReference.property.toolsetTool">toolset_tool</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallToolsetToolOutputReference">GoogleCesExampleMessagesChunksToolCallToolsetToolOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallOutputReference.property.argsInput">args_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallOutputReference.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallOutputReference.property.toolInput">tool_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallOutputReference.property.toolsetToolInput">toolset_tool_input</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallToolsetTool">GoogleCesExampleMessagesChunksToolCallToolsetTool</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallOutputReference.property.args">args</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallOutputReference.property.tool">tool</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCall">GoogleCesExampleMessagesChunksToolCall</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallOutputReference.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `toolset_tool`<sup>Required</sup> <a name="toolset_tool" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallOutputReference.property.toolsetTool"></a>

```python
toolset_tool: GoogleCesExampleMessagesChunksToolCallToolsetToolOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallToolsetToolOutputReference">GoogleCesExampleMessagesChunksToolCallToolsetToolOutputReference</a>

---

##### `args_input`<sup>Optional</sup> <a name="args_input" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallOutputReference.property.argsInput"></a>

```python
args_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallOutputReference.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `tool_input`<sup>Optional</sup> <a name="tool_input" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallOutputReference.property.toolInput"></a>

```python
tool_input: str
```

- *Type:* str

---

##### `toolset_tool_input`<sup>Optional</sup> <a name="toolset_tool_input" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallOutputReference.property.toolsetToolInput"></a>

```python
toolset_tool_input: GoogleCesExampleMessagesChunksToolCallToolsetTool
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallToolsetTool">GoogleCesExampleMessagesChunksToolCallToolsetTool</a>

---

##### `args`<sup>Required</sup> <a name="args" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallOutputReference.property.args"></a>

```python
args: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `tool`<sup>Required</sup> <a name="tool" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallOutputReference.property.tool"></a>

```python
tool: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallOutputReference.property.internalValue"></a>

```python
internal_value: GoogleCesExampleMessagesChunksToolCall
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCall">GoogleCesExampleMessagesChunksToolCall</a>

---


### GoogleCesExampleMessagesChunksToolCallToolsetToolOutputReference <a name="GoogleCesExampleMessagesChunksToolCallToolsetToolOutputReference" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallToolsetToolOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallToolsetToolOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_ces_example

googleCesExample.GoogleCesExampleMessagesChunksToolCallToolsetToolOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallToolsetToolOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallToolsetToolOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallToolsetToolOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallToolsetToolOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallToolsetToolOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallToolsetToolOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallToolsetToolOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallToolsetToolOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallToolsetToolOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallToolsetToolOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallToolsetToolOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallToolsetToolOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallToolsetToolOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallToolsetToolOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallToolsetToolOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallToolsetToolOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallToolsetToolOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallToolsetToolOutputReference.resetToolId">reset_tool_id</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallToolsetToolOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallToolsetToolOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallToolsetToolOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallToolsetToolOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallToolsetToolOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallToolsetToolOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallToolsetToolOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallToolsetToolOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallToolsetToolOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallToolsetToolOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallToolsetToolOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallToolsetToolOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallToolsetToolOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallToolsetToolOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallToolsetToolOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallToolsetToolOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallToolsetToolOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallToolsetToolOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallToolsetToolOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallToolsetToolOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallToolsetToolOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallToolsetToolOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallToolsetToolOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallToolsetToolOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_tool_id` <a name="reset_tool_id" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallToolsetToolOutputReference.resetToolId"></a>

```python
def reset_tool_id() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallToolsetToolOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallToolsetToolOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallToolsetToolOutputReference.property.toolIdInput">tool_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallToolsetToolOutputReference.property.toolsetInput">toolset_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallToolsetToolOutputReference.property.toolId">tool_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallToolsetToolOutputReference.property.toolset">toolset</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallToolsetToolOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallToolsetTool">GoogleCesExampleMessagesChunksToolCallToolsetTool</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallToolsetToolOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallToolsetToolOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `tool_id_input`<sup>Optional</sup> <a name="tool_id_input" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallToolsetToolOutputReference.property.toolIdInput"></a>

```python
tool_id_input: str
```

- *Type:* str

---

##### `toolset_input`<sup>Optional</sup> <a name="toolset_input" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallToolsetToolOutputReference.property.toolsetInput"></a>

```python
toolset_input: str
```

- *Type:* str

---

##### `tool_id`<sup>Required</sup> <a name="tool_id" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallToolsetToolOutputReference.property.toolId"></a>

```python
tool_id: str
```

- *Type:* str

---

##### `toolset`<sup>Required</sup> <a name="toolset" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallToolsetToolOutputReference.property.toolset"></a>

```python
toolset: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallToolsetToolOutputReference.property.internalValue"></a>

```python
internal_value: GoogleCesExampleMessagesChunksToolCallToolsetTool
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallToolsetTool">GoogleCesExampleMessagesChunksToolCallToolsetTool</a>

---


### GoogleCesExampleMessagesChunksToolResponseOutputReference <a name="GoogleCesExampleMessagesChunksToolResponseOutputReference" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_ces_example

googleCesExample.GoogleCesExampleMessagesChunksToolResponseOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseOutputReference.putToolsetTool">put_toolset_tool</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseOutputReference.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseOutputReference.resetTool">reset_tool</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseOutputReference.resetToolsetTool">reset_toolset_tool</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_toolset_tool` <a name="put_toolset_tool" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseOutputReference.putToolsetTool"></a>

```python
def put_toolset_tool(
  toolset: str,
  tool_id: str = None
) -> None
```

###### `toolset`<sup>Required</sup> <a name="toolset" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseOutputReference.putToolsetTool.parameter.toolset"></a>

- *Type:* str

The resource name of the Toolset from which this tool is derived. Format: 'projects/{project}/locations/{location}/apps/{app}/toolsets/{toolset}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_ces_example#toolset GoogleCesExample#toolset}

---

###### `tool_id`<sup>Optional</sup> <a name="tool_id" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseOutputReference.putToolsetTool.parameter.toolId"></a>

- *Type:* str

The tool ID to filter the tools to retrieve the schema for.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_ces_example#tool_id GoogleCesExample#tool_id}

---

##### `reset_id` <a name="reset_id" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseOutputReference.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_tool` <a name="reset_tool" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseOutputReference.resetTool"></a>

```python
def reset_tool() -> None
```

##### `reset_toolset_tool` <a name="reset_toolset_tool" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseOutputReference.resetToolsetTool"></a>

```python
def reset_toolset_tool() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseOutputReference.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseOutputReference.property.toolsetTool">toolset_tool</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseToolsetToolOutputReference">GoogleCesExampleMessagesChunksToolResponseToolsetToolOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseOutputReference.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseOutputReference.property.responseInput">response_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseOutputReference.property.toolInput">tool_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseOutputReference.property.toolsetToolInput">toolset_tool_input</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseToolsetTool">GoogleCesExampleMessagesChunksToolResponseToolsetTool</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseOutputReference.property.response">response</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseOutputReference.property.tool">tool</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponse">GoogleCesExampleMessagesChunksToolResponse</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseOutputReference.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `toolset_tool`<sup>Required</sup> <a name="toolset_tool" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseOutputReference.property.toolsetTool"></a>

```python
toolset_tool: GoogleCesExampleMessagesChunksToolResponseToolsetToolOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseToolsetToolOutputReference">GoogleCesExampleMessagesChunksToolResponseToolsetToolOutputReference</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseOutputReference.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `response_input`<sup>Optional</sup> <a name="response_input" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseOutputReference.property.responseInput"></a>

```python
response_input: str
```

- *Type:* str

---

##### `tool_input`<sup>Optional</sup> <a name="tool_input" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseOutputReference.property.toolInput"></a>

```python
tool_input: str
```

- *Type:* str

---

##### `toolset_tool_input`<sup>Optional</sup> <a name="toolset_tool_input" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseOutputReference.property.toolsetToolInput"></a>

```python
toolset_tool_input: GoogleCesExampleMessagesChunksToolResponseToolsetTool
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseToolsetTool">GoogleCesExampleMessagesChunksToolResponseToolsetTool</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `response`<sup>Required</sup> <a name="response" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseOutputReference.property.response"></a>

```python
response: str
```

- *Type:* str

---

##### `tool`<sup>Required</sup> <a name="tool" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseOutputReference.property.tool"></a>

```python
tool: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseOutputReference.property.internalValue"></a>

```python
internal_value: GoogleCesExampleMessagesChunksToolResponse
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponse">GoogleCesExampleMessagesChunksToolResponse</a>

---


### GoogleCesExampleMessagesChunksToolResponseToolsetToolOutputReference <a name="GoogleCesExampleMessagesChunksToolResponseToolsetToolOutputReference" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseToolsetToolOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseToolsetToolOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_ces_example

googleCesExample.GoogleCesExampleMessagesChunksToolResponseToolsetToolOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseToolsetToolOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseToolsetToolOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseToolsetToolOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseToolsetToolOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseToolsetToolOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseToolsetToolOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseToolsetToolOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseToolsetToolOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseToolsetToolOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseToolsetToolOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseToolsetToolOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseToolsetToolOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseToolsetToolOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseToolsetToolOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseToolsetToolOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseToolsetToolOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseToolsetToolOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseToolsetToolOutputReference.resetToolId">reset_tool_id</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseToolsetToolOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseToolsetToolOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseToolsetToolOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseToolsetToolOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseToolsetToolOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseToolsetToolOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseToolsetToolOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseToolsetToolOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseToolsetToolOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseToolsetToolOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseToolsetToolOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseToolsetToolOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseToolsetToolOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseToolsetToolOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseToolsetToolOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseToolsetToolOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseToolsetToolOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseToolsetToolOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseToolsetToolOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseToolsetToolOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseToolsetToolOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseToolsetToolOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseToolsetToolOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseToolsetToolOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_tool_id` <a name="reset_tool_id" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseToolsetToolOutputReference.resetToolId"></a>

```python
def reset_tool_id() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseToolsetToolOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseToolsetToolOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseToolsetToolOutputReference.property.toolIdInput">tool_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseToolsetToolOutputReference.property.toolsetInput">toolset_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseToolsetToolOutputReference.property.toolId">tool_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseToolsetToolOutputReference.property.toolset">toolset</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseToolsetToolOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseToolsetTool">GoogleCesExampleMessagesChunksToolResponseToolsetTool</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseToolsetToolOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseToolsetToolOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `tool_id_input`<sup>Optional</sup> <a name="tool_id_input" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseToolsetToolOutputReference.property.toolIdInput"></a>

```python
tool_id_input: str
```

- *Type:* str

---

##### `toolset_input`<sup>Optional</sup> <a name="toolset_input" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseToolsetToolOutputReference.property.toolsetInput"></a>

```python
toolset_input: str
```

- *Type:* str

---

##### `tool_id`<sup>Required</sup> <a name="tool_id" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseToolsetToolOutputReference.property.toolId"></a>

```python
tool_id: str
```

- *Type:* str

---

##### `toolset`<sup>Required</sup> <a name="toolset" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseToolsetToolOutputReference.property.toolset"></a>

```python
toolset: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseToolsetToolOutputReference.property.internalValue"></a>

```python
internal_value: GoogleCesExampleMessagesChunksToolResponseToolsetTool
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseToolsetTool">GoogleCesExampleMessagesChunksToolResponseToolsetTool</a>

---


### GoogleCesExampleMessagesList <a name="GoogleCesExampleMessagesList" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesList.Initializer"></a>

```python
from cdktn_provider_google_beta import google_ces_example

googleCesExample.GoogleCesExampleMessagesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleCesExampleMessagesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessages">GoogleCesExampleMessages</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[GoogleCesExampleMessages]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessages">GoogleCesExampleMessages</a>]

---


### GoogleCesExampleMessagesOutputReference <a name="GoogleCesExampleMessagesOutputReference" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_ces_example

googleCesExample.GoogleCesExampleMessagesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesOutputReference.putChunks">put_chunks</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesOutputReference.resetChunks">reset_chunks</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesOutputReference.resetRole">reset_role</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_chunks` <a name="put_chunks" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesOutputReference.putChunks"></a>

```python
def put_chunks(
  value: IResolvable | typing.List[GoogleCesExampleMessagesChunks]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesOutputReference.putChunks.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunks">GoogleCesExampleMessagesChunks</a>]

---

##### `reset_chunks` <a name="reset_chunks" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesOutputReference.resetChunks"></a>

```python
def reset_chunks() -> None
```

##### `reset_role` <a name="reset_role" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesOutputReference.resetRole"></a>

```python
def reset_role() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesOutputReference.property.chunks">chunks</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksList">GoogleCesExampleMessagesChunksList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesOutputReference.property.chunksInput">chunks_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunks">GoogleCesExampleMessagesChunks</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesOutputReference.property.roleInput">role_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesOutputReference.property.role">role</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessages">GoogleCesExampleMessages</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `chunks`<sup>Required</sup> <a name="chunks" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesOutputReference.property.chunks"></a>

```python
chunks: GoogleCesExampleMessagesChunksList
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksList">GoogleCesExampleMessagesChunksList</a>

---

##### `chunks_input`<sup>Optional</sup> <a name="chunks_input" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesOutputReference.property.chunksInput"></a>

```python
chunks_input: IResolvable | typing.List[GoogleCesExampleMessagesChunks]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunks">GoogleCesExampleMessagesChunks</a>]

---

##### `role_input`<sup>Optional</sup> <a name="role_input" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesOutputReference.property.roleInput"></a>

```python
role_input: str
```

- *Type:* str

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesOutputReference.property.role"></a>

```python
role: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | GoogleCesExampleMessages
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessages">GoogleCesExampleMessages</a>

---


### GoogleCesExampleTimeoutsOutputReference <a name="GoogleCesExampleTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleTimeoutsOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_ces_example

googleCesExample.GoogleCesExampleTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleTimeouts">GoogleCesExampleTimeouts</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | GoogleCesExampleTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleTimeouts">GoogleCesExampleTimeouts</a>

---



