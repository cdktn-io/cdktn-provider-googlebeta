# `googleCesAppRootAgentAssociation` Submodule <a name="`googleCesAppRootAgentAssociation` Submodule" id="@cdktn/provider-google-beta.googleCesAppRootAgentAssociation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleCesAppRootAgentAssociation <a name="GoogleCesAppRootAgentAssociation" id="@cdktn/provider-google-beta.googleCesAppRootAgentAssociation.GoogleCesAppRootAgentAssociation"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_ces_app_root_agent_association google_ces_app_root_agent_association}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCesAppRootAgentAssociation.GoogleCesAppRootAgentAssociation.Initializer"></a>

```python
from cdktn_provider_google_beta import google_ces_app_root_agent_association

googleCesAppRootAgentAssociation.GoogleCesAppRootAgentAssociation(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  agent_id: str,
  app_id: str,
  location: str,
  deletion_policy: str = None,
  id: str = None,
  project: str = None,
  timeouts: GoogleCesAppRootAgentAssociationTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesAppRootAgentAssociation.GoogleCesAppRootAgentAssociation.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAppRootAgentAssociation.GoogleCesAppRootAgentAssociation.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAppRootAgentAssociation.GoogleCesAppRootAgentAssociation.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAppRootAgentAssociation.GoogleCesAppRootAgentAssociation.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAppRootAgentAssociation.GoogleCesAppRootAgentAssociation.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAppRootAgentAssociation.GoogleCesAppRootAgentAssociation.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAppRootAgentAssociation.GoogleCesAppRootAgentAssociation.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAppRootAgentAssociation.GoogleCesAppRootAgentAssociation.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAppRootAgentAssociation.GoogleCesAppRootAgentAssociation.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAppRootAgentAssociation.GoogleCesAppRootAgentAssociation.Initializer.parameter.agentId">agent_id</a></code> | <code>str</code> | The ID or fully qualified resource name of the agent to associate as the root agent of the app. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAppRootAgentAssociation.GoogleCesAppRootAgentAssociation.Initializer.parameter.appId">app_id</a></code> | <code>str</code> | The ID of the App. Used to construct the app resource name. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAppRootAgentAssociation.GoogleCesAppRootAgentAssociation.Initializer.parameter.location">location</a></code> | <code>str</code> | The location of the App. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAppRootAgentAssociation.GoogleCesAppRootAgentAssociation.Initializer.parameter.deletionPolicy">deletion_policy</a></code> | <code>str</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAppRootAgentAssociation.GoogleCesAppRootAgentAssociation.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_ces_app_root_agent_association#id GoogleCesAppRootAgentAssociation#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAppRootAgentAssociation.GoogleCesAppRootAgentAssociation.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_ces_app_root_agent_association#project GoogleCesAppRootAgentAssociation#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAppRootAgentAssociation.GoogleCesAppRootAgentAssociation.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesAppRootAgentAssociation.GoogleCesAppRootAgentAssociationTimeouts">GoogleCesAppRootAgentAssociationTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleCesAppRootAgentAssociation.GoogleCesAppRootAgentAssociation.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleCesAppRootAgentAssociation.GoogleCesAppRootAgentAssociation.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleCesAppRootAgentAssociation.GoogleCesAppRootAgentAssociation.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleCesAppRootAgentAssociation.GoogleCesAppRootAgentAssociation.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google-beta.googleCesAppRootAgentAssociation.GoogleCesAppRootAgentAssociation.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google-beta.googleCesAppRootAgentAssociation.GoogleCesAppRootAgentAssociation.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleCesAppRootAgentAssociation.GoogleCesAppRootAgentAssociation.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleCesAppRootAgentAssociation.GoogleCesAppRootAgentAssociation.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleCesAppRootAgentAssociation.GoogleCesAppRootAgentAssociation.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `agent_id`<sup>Required</sup> <a name="agent_id" id="@cdktn/provider-google-beta.googleCesAppRootAgentAssociation.GoogleCesAppRootAgentAssociation.Initializer.parameter.agentId"></a>

- *Type:* str

The ID or fully qualified resource name of the agent to associate as the root agent of the app.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_ces_app_root_agent_association#agent_id GoogleCesAppRootAgentAssociation#agent_id}

---

##### `app_id`<sup>Required</sup> <a name="app_id" id="@cdktn/provider-google-beta.googleCesAppRootAgentAssociation.GoogleCesAppRootAgentAssociation.Initializer.parameter.appId"></a>

- *Type:* str

The ID of the App. Used to construct the app resource name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_ces_app_root_agent_association#app_id GoogleCesAppRootAgentAssociation#app_id}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleCesAppRootAgentAssociation.GoogleCesAppRootAgentAssociation.Initializer.parameter.location"></a>

- *Type:* str

The location of the App.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_ces_app_root_agent_association#location GoogleCesAppRootAgentAssociation#location}

---

##### `deletion_policy`<sup>Optional</sup> <a name="deletion_policy" id="@cdktn/provider-google-beta.googleCesAppRootAgentAssociation.GoogleCesAppRootAgentAssociation.Initializer.parameter.deletionPolicy"></a>

- *Type:* str

Whether Terraform will be prevented from destroying the instance.

Defaults to "DELETE".
When a 'terraform destroy' or 'terraform apply' would delete the instance,
the command will fail if this field is set to "PREVENT" in Terraform state.
When set to "ABANDON", the command will remove the resource from Terraform
management without updating or deleting the resource in the API.
When set to "DELETE", deleting the resource is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_ces_app_root_agent_association#deletion_policy GoogleCesAppRootAgentAssociation#deletion_policy}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleCesAppRootAgentAssociation.GoogleCesAppRootAgentAssociation.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_ces_app_root_agent_association#id GoogleCesAppRootAgentAssociation#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.googleCesAppRootAgentAssociation.GoogleCesAppRootAgentAssociation.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_ces_app_root_agent_association#project GoogleCesAppRootAgentAssociation#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleCesAppRootAgentAssociation.GoogleCesAppRootAgentAssociation.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesAppRootAgentAssociation.GoogleCesAppRootAgentAssociationTimeouts">GoogleCesAppRootAgentAssociationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_ces_app_root_agent_association#timeouts GoogleCesAppRootAgentAssociation#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesAppRootAgentAssociation.GoogleCesAppRootAgentAssociation.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAppRootAgentAssociation.GoogleCesAppRootAgentAssociation.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAppRootAgentAssociation.GoogleCesAppRootAgentAssociation.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAppRootAgentAssociation.GoogleCesAppRootAgentAssociation.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAppRootAgentAssociation.GoogleCesAppRootAgentAssociation.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAppRootAgentAssociation.GoogleCesAppRootAgentAssociation.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAppRootAgentAssociation.GoogleCesAppRootAgentAssociation.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAppRootAgentAssociation.GoogleCesAppRootAgentAssociation.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAppRootAgentAssociation.GoogleCesAppRootAgentAssociation.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAppRootAgentAssociation.GoogleCesAppRootAgentAssociation.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAppRootAgentAssociation.GoogleCesAppRootAgentAssociation.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAppRootAgentAssociation.GoogleCesAppRootAgentAssociation.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAppRootAgentAssociation.GoogleCesAppRootAgentAssociation.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAppRootAgentAssociation.GoogleCesAppRootAgentAssociation.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAppRootAgentAssociation.GoogleCesAppRootAgentAssociation.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAppRootAgentAssociation.GoogleCesAppRootAgentAssociation.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAppRootAgentAssociation.GoogleCesAppRootAgentAssociation.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAppRootAgentAssociation.GoogleCesAppRootAgentAssociation.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAppRootAgentAssociation.GoogleCesAppRootAgentAssociation.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAppRootAgentAssociation.GoogleCesAppRootAgentAssociation.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAppRootAgentAssociation.GoogleCesAppRootAgentAssociation.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAppRootAgentAssociation.GoogleCesAppRootAgentAssociation.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAppRootAgentAssociation.GoogleCesAppRootAgentAssociation.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAppRootAgentAssociation.GoogleCesAppRootAgentAssociation.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleCesAppRootAgentAssociation.GoogleCesAppRootAgentAssociation.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAppRootAgentAssociation.GoogleCesAppRootAgentAssociation.resetDeletionPolicy">reset_deletion_policy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAppRootAgentAssociation.GoogleCesAppRootAgentAssociation.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAppRootAgentAssociation.GoogleCesAppRootAgentAssociation.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAppRootAgentAssociation.GoogleCesAppRootAgentAssociation.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleCesAppRootAgentAssociation.GoogleCesAppRootAgentAssociation.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google-beta.googleCesAppRootAgentAssociation.GoogleCesAppRootAgentAssociation.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google-beta.googleCesAppRootAgentAssociation.GoogleCesAppRootAgentAssociation.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-google-beta.googleCesAppRootAgentAssociation.GoogleCesAppRootAgentAssociation.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google-beta.googleCesAppRootAgentAssociation.GoogleCesAppRootAgentAssociation.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleCesAppRootAgentAssociation.GoogleCesAppRootAgentAssociation.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-google-beta.googleCesAppRootAgentAssociation.GoogleCesAppRootAgentAssociation.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-google-beta.googleCesAppRootAgentAssociation.GoogleCesAppRootAgentAssociation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-google-beta.googleCesAppRootAgentAssociation.GoogleCesAppRootAgentAssociation.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-google-beta.googleCesAppRootAgentAssociation.GoogleCesAppRootAgentAssociation.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-google-beta.googleCesAppRootAgentAssociation.GoogleCesAppRootAgentAssociation.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-google-beta.googleCesAppRootAgentAssociation.GoogleCesAppRootAgentAssociation.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-google-beta.googleCesAppRootAgentAssociation.GoogleCesAppRootAgentAssociation.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-google-beta.googleCesAppRootAgentAssociation.GoogleCesAppRootAgentAssociation.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleCesAppRootAgentAssociation.GoogleCesAppRootAgentAssociation.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesAppRootAgentAssociation.GoogleCesAppRootAgentAssociation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleCesAppRootAgentAssociation.GoogleCesAppRootAgentAssociation.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesAppRootAgentAssociation.GoogleCesAppRootAgentAssociation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleCesAppRootAgentAssociation.GoogleCesAppRootAgentAssociation.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesAppRootAgentAssociation.GoogleCesAppRootAgentAssociation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleCesAppRootAgentAssociation.GoogleCesAppRootAgentAssociation.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesAppRootAgentAssociation.GoogleCesAppRootAgentAssociation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleCesAppRootAgentAssociation.GoogleCesAppRootAgentAssociation.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesAppRootAgentAssociation.GoogleCesAppRootAgentAssociation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleCesAppRootAgentAssociation.GoogleCesAppRootAgentAssociation.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesAppRootAgentAssociation.GoogleCesAppRootAgentAssociation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleCesAppRootAgentAssociation.GoogleCesAppRootAgentAssociation.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesAppRootAgentAssociation.GoogleCesAppRootAgentAssociation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleCesAppRootAgentAssociation.GoogleCesAppRootAgentAssociation.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesAppRootAgentAssociation.GoogleCesAppRootAgentAssociation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleCesAppRootAgentAssociation.GoogleCesAppRootAgentAssociation.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesAppRootAgentAssociation.GoogleCesAppRootAgentAssociation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-google-beta.googleCesAppRootAgentAssociation.GoogleCesAppRootAgentAssociation.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-google-beta.googleCesAppRootAgentAssociation.GoogleCesAppRootAgentAssociation.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleCesAppRootAgentAssociation.GoogleCesAppRootAgentAssociation.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleCesAppRootAgentAssociation.GoogleCesAppRootAgentAssociation.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleCesAppRootAgentAssociation.GoogleCesAppRootAgentAssociation.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesAppRootAgentAssociation.GoogleCesAppRootAgentAssociation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-google-beta.googleCesAppRootAgentAssociation.GoogleCesAppRootAgentAssociation.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleCesAppRootAgentAssociation.GoogleCesAppRootAgentAssociation.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-google-beta.googleCesAppRootAgentAssociation.GoogleCesAppRootAgentAssociation.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-google-beta.googleCesAppRootAgentAssociation.GoogleCesAppRootAgentAssociation.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google-beta.googleCesAppRootAgentAssociation.GoogleCesAppRootAgentAssociation.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-google-beta.googleCesAppRootAgentAssociation.GoogleCesAppRootAgentAssociation.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleCesAppRootAgentAssociation.GoogleCesAppRootAgentAssociation.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktn/provider-google-beta.googleCesAppRootAgentAssociation.GoogleCesAppRootAgentAssociation.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google-beta.googleCesAppRootAgentAssociation.GoogleCesAppRootAgentAssociation.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_ces_app_root_agent_association#create GoogleCesAppRootAgentAssociation#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google-beta.googleCesAppRootAgentAssociation.GoogleCesAppRootAgentAssociation.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_ces_app_root_agent_association#delete GoogleCesAppRootAgentAssociation#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google-beta.googleCesAppRootAgentAssociation.GoogleCesAppRootAgentAssociation.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_ces_app_root_agent_association#update GoogleCesAppRootAgentAssociation#update}.

---

##### `reset_deletion_policy` <a name="reset_deletion_policy" id="@cdktn/provider-google-beta.googleCesAppRootAgentAssociation.GoogleCesAppRootAgentAssociation.resetDeletionPolicy"></a>

```python
def reset_deletion_policy() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktn/provider-google-beta.googleCesAppRootAgentAssociation.GoogleCesAppRootAgentAssociation.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktn/provider-google-beta.googleCesAppRootAgentAssociation.GoogleCesAppRootAgentAssociation.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktn/provider-google-beta.googleCesAppRootAgentAssociation.GoogleCesAppRootAgentAssociation.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesAppRootAgentAssociation.GoogleCesAppRootAgentAssociation.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAppRootAgentAssociation.GoogleCesAppRootAgentAssociation.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAppRootAgentAssociation.GoogleCesAppRootAgentAssociation.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAppRootAgentAssociation.GoogleCesAppRootAgentAssociation.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a GoogleCesAppRootAgentAssociation resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-google-beta.googleCesAppRootAgentAssociation.GoogleCesAppRootAgentAssociation.isConstruct"></a>

```python
from cdktn_provider_google_beta import google_ces_app_root_agent_association

googleCesAppRootAgentAssociation.GoogleCesAppRootAgentAssociation.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleCesAppRootAgentAssociation.GoogleCesAppRootAgentAssociation.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-google-beta.googleCesAppRootAgentAssociation.GoogleCesAppRootAgentAssociation.isTerraformElement"></a>

```python
from cdktn_provider_google_beta import google_ces_app_root_agent_association

googleCesAppRootAgentAssociation.GoogleCesAppRootAgentAssociation.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleCesAppRootAgentAssociation.GoogleCesAppRootAgentAssociation.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-google-beta.googleCesAppRootAgentAssociation.GoogleCesAppRootAgentAssociation.isTerraformResource"></a>

```python
from cdktn_provider_google_beta import google_ces_app_root_agent_association

googleCesAppRootAgentAssociation.GoogleCesAppRootAgentAssociation.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleCesAppRootAgentAssociation.GoogleCesAppRootAgentAssociation.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-google-beta.googleCesAppRootAgentAssociation.GoogleCesAppRootAgentAssociation.generateConfigForImport"></a>

```python
from cdktn_provider_google_beta import google_ces_app_root_agent_association

googleCesAppRootAgentAssociation.GoogleCesAppRootAgentAssociation.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a GoogleCesAppRootAgentAssociation resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleCesAppRootAgentAssociation.GoogleCesAppRootAgentAssociation.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-google-beta.googleCesAppRootAgentAssociation.GoogleCesAppRootAgentAssociation.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the GoogleCesAppRootAgentAssociation to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-google-beta.googleCesAppRootAgentAssociation.GoogleCesAppRootAgentAssociation.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing GoogleCesAppRootAgentAssociation that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_ces_app_root_agent_association#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleCesAppRootAgentAssociation.GoogleCesAppRootAgentAssociation.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the GoogleCesAppRootAgentAssociation to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesAppRootAgentAssociation.GoogleCesAppRootAgentAssociation.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAppRootAgentAssociation.GoogleCesAppRootAgentAssociation.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAppRootAgentAssociation.GoogleCesAppRootAgentAssociation.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAppRootAgentAssociation.GoogleCesAppRootAgentAssociation.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAppRootAgentAssociation.GoogleCesAppRootAgentAssociation.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAppRootAgentAssociation.GoogleCesAppRootAgentAssociation.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAppRootAgentAssociation.GoogleCesAppRootAgentAssociation.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAppRootAgentAssociation.GoogleCesAppRootAgentAssociation.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAppRootAgentAssociation.GoogleCesAppRootAgentAssociation.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAppRootAgentAssociation.GoogleCesAppRootAgentAssociation.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAppRootAgentAssociation.GoogleCesAppRootAgentAssociation.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAppRootAgentAssociation.GoogleCesAppRootAgentAssociation.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAppRootAgentAssociation.GoogleCesAppRootAgentAssociation.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAppRootAgentAssociation.GoogleCesAppRootAgentAssociation.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAppRootAgentAssociation.GoogleCesAppRootAgentAssociation.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesAppRootAgentAssociation.GoogleCesAppRootAgentAssociationTimeoutsOutputReference">GoogleCesAppRootAgentAssociationTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAppRootAgentAssociation.GoogleCesAppRootAgentAssociation.property.agentIdInput">agent_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAppRootAgentAssociation.GoogleCesAppRootAgentAssociation.property.appIdInput">app_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAppRootAgentAssociation.GoogleCesAppRootAgentAssociation.property.deletionPolicyInput">deletion_policy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAppRootAgentAssociation.GoogleCesAppRootAgentAssociation.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAppRootAgentAssociation.GoogleCesAppRootAgentAssociation.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAppRootAgentAssociation.GoogleCesAppRootAgentAssociation.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAppRootAgentAssociation.GoogleCesAppRootAgentAssociation.property.timeoutsInput">timeouts_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleCesAppRootAgentAssociation.GoogleCesAppRootAgentAssociationTimeouts">GoogleCesAppRootAgentAssociationTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAppRootAgentAssociation.GoogleCesAppRootAgentAssociation.property.agentId">agent_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAppRootAgentAssociation.GoogleCesAppRootAgentAssociation.property.appId">app_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAppRootAgentAssociation.GoogleCesAppRootAgentAssociation.property.deletionPolicy">deletion_policy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAppRootAgentAssociation.GoogleCesAppRootAgentAssociation.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAppRootAgentAssociation.GoogleCesAppRootAgentAssociation.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAppRootAgentAssociation.GoogleCesAppRootAgentAssociation.property.project">project</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google-beta.googleCesAppRootAgentAssociation.GoogleCesAppRootAgentAssociation.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-google-beta.googleCesAppRootAgentAssociation.GoogleCesAppRootAgentAssociation.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleCesAppRootAgentAssociation.GoogleCesAppRootAgentAssociation.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-google-beta.googleCesAppRootAgentAssociation.GoogleCesAppRootAgentAssociation.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-google-beta.googleCesAppRootAgentAssociation.GoogleCesAppRootAgentAssociation.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-google-beta.googleCesAppRootAgentAssociation.GoogleCesAppRootAgentAssociation.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-google-beta.googleCesAppRootAgentAssociation.GoogleCesAppRootAgentAssociation.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleCesAppRootAgentAssociation.GoogleCesAppRootAgentAssociation.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleCesAppRootAgentAssociation.GoogleCesAppRootAgentAssociation.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google-beta.googleCesAppRootAgentAssociation.GoogleCesAppRootAgentAssociation.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google-beta.googleCesAppRootAgentAssociation.GoogleCesAppRootAgentAssociation.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleCesAppRootAgentAssociation.GoogleCesAppRootAgentAssociation.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleCesAppRootAgentAssociation.GoogleCesAppRootAgentAssociation.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleCesAppRootAgentAssociation.GoogleCesAppRootAgentAssociation.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleCesAppRootAgentAssociation.GoogleCesAppRootAgentAssociation.property.timeouts"></a>

```python
timeouts: GoogleCesAppRootAgentAssociationTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesAppRootAgentAssociation.GoogleCesAppRootAgentAssociationTimeoutsOutputReference">GoogleCesAppRootAgentAssociationTimeoutsOutputReference</a>

---

##### `agent_id_input`<sup>Optional</sup> <a name="agent_id_input" id="@cdktn/provider-google-beta.googleCesAppRootAgentAssociation.GoogleCesAppRootAgentAssociation.property.agentIdInput"></a>

```python
agent_id_input: str
```

- *Type:* str

---

##### `app_id_input`<sup>Optional</sup> <a name="app_id_input" id="@cdktn/provider-google-beta.googleCesAppRootAgentAssociation.GoogleCesAppRootAgentAssociation.property.appIdInput"></a>

```python
app_id_input: str
```

- *Type:* str

---

##### `deletion_policy_input`<sup>Optional</sup> <a name="deletion_policy_input" id="@cdktn/provider-google-beta.googleCesAppRootAgentAssociation.GoogleCesAppRootAgentAssociation.property.deletionPolicyInput"></a>

```python
deletion_policy_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-google-beta.googleCesAppRootAgentAssociation.GoogleCesAppRootAgentAssociation.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktn/provider-google-beta.googleCesAppRootAgentAssociation.GoogleCesAppRootAgentAssociation.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktn/provider-google-beta.googleCesAppRootAgentAssociation.GoogleCesAppRootAgentAssociation.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktn/provider-google-beta.googleCesAppRootAgentAssociation.GoogleCesAppRootAgentAssociation.property.timeoutsInput"></a>

```python
timeouts_input: IResolvable | GoogleCesAppRootAgentAssociationTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleCesAppRootAgentAssociation.GoogleCesAppRootAgentAssociationTimeouts">GoogleCesAppRootAgentAssociationTimeouts</a>

---

##### `agent_id`<sup>Required</sup> <a name="agent_id" id="@cdktn/provider-google-beta.googleCesAppRootAgentAssociation.GoogleCesAppRootAgentAssociation.property.agentId"></a>

```python
agent_id: str
```

- *Type:* str

---

##### `app_id`<sup>Required</sup> <a name="app_id" id="@cdktn/provider-google-beta.googleCesAppRootAgentAssociation.GoogleCesAppRootAgentAssociation.property.appId"></a>

```python
app_id: str
```

- *Type:* str

---

##### `deletion_policy`<sup>Required</sup> <a name="deletion_policy" id="@cdktn/provider-google-beta.googleCesAppRootAgentAssociation.GoogleCesAppRootAgentAssociation.property.deletionPolicy"></a>

```python
deletion_policy: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleCesAppRootAgentAssociation.GoogleCesAppRootAgentAssociation.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleCesAppRootAgentAssociation.GoogleCesAppRootAgentAssociation.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google-beta.googleCesAppRootAgentAssociation.GoogleCesAppRootAgentAssociation.property.project"></a>

```python
project: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesAppRootAgentAssociation.GoogleCesAppRootAgentAssociation.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google-beta.googleCesAppRootAgentAssociation.GoogleCesAppRootAgentAssociation.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleCesAppRootAgentAssociationConfig <a name="GoogleCesAppRootAgentAssociationConfig" id="@cdktn/provider-google-beta.googleCesAppRootAgentAssociation.GoogleCesAppRootAgentAssociationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCesAppRootAgentAssociation.GoogleCesAppRootAgentAssociationConfig.Initializer"></a>

```python
from cdktn_provider_google_beta import google_ces_app_root_agent_association

googleCesAppRootAgentAssociation.GoogleCesAppRootAgentAssociationConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  agent_id: str,
  app_id: str,
  location: str,
  deletion_policy: str = None,
  id: str = None,
  project: str = None,
  timeouts: GoogleCesAppRootAgentAssociationTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesAppRootAgentAssociation.GoogleCesAppRootAgentAssociationConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAppRootAgentAssociation.GoogleCesAppRootAgentAssociationConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAppRootAgentAssociation.GoogleCesAppRootAgentAssociationConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAppRootAgentAssociation.GoogleCesAppRootAgentAssociationConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAppRootAgentAssociation.GoogleCesAppRootAgentAssociationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAppRootAgentAssociation.GoogleCesAppRootAgentAssociationConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAppRootAgentAssociation.GoogleCesAppRootAgentAssociationConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAppRootAgentAssociation.GoogleCesAppRootAgentAssociationConfig.property.agentId">agent_id</a></code> | <code>str</code> | The ID or fully qualified resource name of the agent to associate as the root agent of the app. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAppRootAgentAssociation.GoogleCesAppRootAgentAssociationConfig.property.appId">app_id</a></code> | <code>str</code> | The ID of the App. Used to construct the app resource name. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAppRootAgentAssociation.GoogleCesAppRootAgentAssociationConfig.property.location">location</a></code> | <code>str</code> | The location of the App. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAppRootAgentAssociation.GoogleCesAppRootAgentAssociationConfig.property.deletionPolicy">deletion_policy</a></code> | <code>str</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAppRootAgentAssociation.GoogleCesAppRootAgentAssociationConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_ces_app_root_agent_association#id GoogleCesAppRootAgentAssociation#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAppRootAgentAssociation.GoogleCesAppRootAgentAssociationConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_ces_app_root_agent_association#project GoogleCesAppRootAgentAssociation#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAppRootAgentAssociation.GoogleCesAppRootAgentAssociationConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesAppRootAgentAssociation.GoogleCesAppRootAgentAssociationTimeouts">GoogleCesAppRootAgentAssociationTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleCesAppRootAgentAssociation.GoogleCesAppRootAgentAssociationConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleCesAppRootAgentAssociation.GoogleCesAppRootAgentAssociationConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google-beta.googleCesAppRootAgentAssociation.GoogleCesAppRootAgentAssociationConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google-beta.googleCesAppRootAgentAssociation.GoogleCesAppRootAgentAssociationConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleCesAppRootAgentAssociation.GoogleCesAppRootAgentAssociationConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleCesAppRootAgentAssociation.GoogleCesAppRootAgentAssociationConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleCesAppRootAgentAssociation.GoogleCesAppRootAgentAssociationConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `agent_id`<sup>Required</sup> <a name="agent_id" id="@cdktn/provider-google-beta.googleCesAppRootAgentAssociation.GoogleCesAppRootAgentAssociationConfig.property.agentId"></a>

```python
agent_id: str
```

- *Type:* str

The ID or fully qualified resource name of the agent to associate as the root agent of the app.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_ces_app_root_agent_association#agent_id GoogleCesAppRootAgentAssociation#agent_id}

---

##### `app_id`<sup>Required</sup> <a name="app_id" id="@cdktn/provider-google-beta.googleCesAppRootAgentAssociation.GoogleCesAppRootAgentAssociationConfig.property.appId"></a>

```python
app_id: str
```

- *Type:* str

The ID of the App. Used to construct the app resource name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_ces_app_root_agent_association#app_id GoogleCesAppRootAgentAssociation#app_id}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleCesAppRootAgentAssociation.GoogleCesAppRootAgentAssociationConfig.property.location"></a>

```python
location: str
```

- *Type:* str

The location of the App.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_ces_app_root_agent_association#location GoogleCesAppRootAgentAssociation#location}

---

##### `deletion_policy`<sup>Optional</sup> <a name="deletion_policy" id="@cdktn/provider-google-beta.googleCesAppRootAgentAssociation.GoogleCesAppRootAgentAssociationConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_ces_app_root_agent_association#deletion_policy GoogleCesAppRootAgentAssociation#deletion_policy}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleCesAppRootAgentAssociation.GoogleCesAppRootAgentAssociationConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_ces_app_root_agent_association#id GoogleCesAppRootAgentAssociation#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.googleCesAppRootAgentAssociation.GoogleCesAppRootAgentAssociationConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_ces_app_root_agent_association#project GoogleCesAppRootAgentAssociation#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleCesAppRootAgentAssociation.GoogleCesAppRootAgentAssociationConfig.property.timeouts"></a>

```python
timeouts: GoogleCesAppRootAgentAssociationTimeouts
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesAppRootAgentAssociation.GoogleCesAppRootAgentAssociationTimeouts">GoogleCesAppRootAgentAssociationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_ces_app_root_agent_association#timeouts GoogleCesAppRootAgentAssociation#timeouts}

---

### GoogleCesAppRootAgentAssociationTimeouts <a name="GoogleCesAppRootAgentAssociationTimeouts" id="@cdktn/provider-google-beta.googleCesAppRootAgentAssociation.GoogleCesAppRootAgentAssociationTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCesAppRootAgentAssociation.GoogleCesAppRootAgentAssociationTimeouts.Initializer"></a>

```python
from cdktn_provider_google_beta import google_ces_app_root_agent_association

googleCesAppRootAgentAssociation.GoogleCesAppRootAgentAssociationTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesAppRootAgentAssociation.GoogleCesAppRootAgentAssociationTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_ces_app_root_agent_association#create GoogleCesAppRootAgentAssociation#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAppRootAgentAssociation.GoogleCesAppRootAgentAssociationTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_ces_app_root_agent_association#delete GoogleCesAppRootAgentAssociation#delete}. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAppRootAgentAssociation.GoogleCesAppRootAgentAssociationTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_ces_app_root_agent_association#update GoogleCesAppRootAgentAssociation#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google-beta.googleCesAppRootAgentAssociation.GoogleCesAppRootAgentAssociationTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_ces_app_root_agent_association#create GoogleCesAppRootAgentAssociation#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google-beta.googleCesAppRootAgentAssociation.GoogleCesAppRootAgentAssociationTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_ces_app_root_agent_association#delete GoogleCesAppRootAgentAssociation#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google-beta.googleCesAppRootAgentAssociation.GoogleCesAppRootAgentAssociationTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_ces_app_root_agent_association#update GoogleCesAppRootAgentAssociation#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleCesAppRootAgentAssociationTimeoutsOutputReference <a name="GoogleCesAppRootAgentAssociationTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleCesAppRootAgentAssociation.GoogleCesAppRootAgentAssociationTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCesAppRootAgentAssociation.GoogleCesAppRootAgentAssociationTimeoutsOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_ces_app_root_agent_association

googleCesAppRootAgentAssociation.GoogleCesAppRootAgentAssociationTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesAppRootAgentAssociation.GoogleCesAppRootAgentAssociationTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAppRootAgentAssociation.GoogleCesAppRootAgentAssociationTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleCesAppRootAgentAssociation.GoogleCesAppRootAgentAssociationTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesAppRootAgentAssociation.GoogleCesAppRootAgentAssociationTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesAppRootAgentAssociation.GoogleCesAppRootAgentAssociationTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAppRootAgentAssociation.GoogleCesAppRootAgentAssociationTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAppRootAgentAssociation.GoogleCesAppRootAgentAssociationTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAppRootAgentAssociation.GoogleCesAppRootAgentAssociationTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAppRootAgentAssociation.GoogleCesAppRootAgentAssociationTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAppRootAgentAssociation.GoogleCesAppRootAgentAssociationTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAppRootAgentAssociation.GoogleCesAppRootAgentAssociationTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAppRootAgentAssociation.GoogleCesAppRootAgentAssociationTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAppRootAgentAssociation.GoogleCesAppRootAgentAssociationTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAppRootAgentAssociation.GoogleCesAppRootAgentAssociationTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAppRootAgentAssociation.GoogleCesAppRootAgentAssociationTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAppRootAgentAssociation.GoogleCesAppRootAgentAssociationTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAppRootAgentAssociation.GoogleCesAppRootAgentAssociationTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAppRootAgentAssociation.GoogleCesAppRootAgentAssociationTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAppRootAgentAssociation.GoogleCesAppRootAgentAssociationTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAppRootAgentAssociation.GoogleCesAppRootAgentAssociationTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleCesAppRootAgentAssociation.GoogleCesAppRootAgentAssociationTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleCesAppRootAgentAssociation.GoogleCesAppRootAgentAssociationTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesAppRootAgentAssociation.GoogleCesAppRootAgentAssociationTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleCesAppRootAgentAssociation.GoogleCesAppRootAgentAssociationTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesAppRootAgentAssociation.GoogleCesAppRootAgentAssociationTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleCesAppRootAgentAssociation.GoogleCesAppRootAgentAssociationTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesAppRootAgentAssociation.GoogleCesAppRootAgentAssociationTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleCesAppRootAgentAssociation.GoogleCesAppRootAgentAssociationTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesAppRootAgentAssociation.GoogleCesAppRootAgentAssociationTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleCesAppRootAgentAssociation.GoogleCesAppRootAgentAssociationTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesAppRootAgentAssociation.GoogleCesAppRootAgentAssociationTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleCesAppRootAgentAssociation.GoogleCesAppRootAgentAssociationTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesAppRootAgentAssociation.GoogleCesAppRootAgentAssociationTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleCesAppRootAgentAssociation.GoogleCesAppRootAgentAssociationTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesAppRootAgentAssociation.GoogleCesAppRootAgentAssociationTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleCesAppRootAgentAssociation.GoogleCesAppRootAgentAssociationTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesAppRootAgentAssociation.GoogleCesAppRootAgentAssociationTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleCesAppRootAgentAssociation.GoogleCesAppRootAgentAssociationTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesAppRootAgentAssociation.GoogleCesAppRootAgentAssociationTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleCesAppRootAgentAssociation.GoogleCesAppRootAgentAssociationTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleCesAppRootAgentAssociation.GoogleCesAppRootAgentAssociationTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleCesAppRootAgentAssociation.GoogleCesAppRootAgentAssociationTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCesAppRootAgentAssociation.GoogleCesAppRootAgentAssociationTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleCesAppRootAgentAssociation.GoogleCesAppRootAgentAssociationTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktn/provider-google-beta.googleCesAppRootAgentAssociation.GoogleCesAppRootAgentAssociationTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktn/provider-google-beta.googleCesAppRootAgentAssociation.GoogleCesAppRootAgentAssociationTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktn/provider-google-beta.googleCesAppRootAgentAssociation.GoogleCesAppRootAgentAssociationTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesAppRootAgentAssociation.GoogleCesAppRootAgentAssociationTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAppRootAgentAssociation.GoogleCesAppRootAgentAssociationTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAppRootAgentAssociation.GoogleCesAppRootAgentAssociationTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAppRootAgentAssociation.GoogleCesAppRootAgentAssociationTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAppRootAgentAssociation.GoogleCesAppRootAgentAssociationTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAppRootAgentAssociation.GoogleCesAppRootAgentAssociationTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAppRootAgentAssociation.GoogleCesAppRootAgentAssociationTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAppRootAgentAssociation.GoogleCesAppRootAgentAssociationTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAppRootAgentAssociation.GoogleCesAppRootAgentAssociationTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleCesAppRootAgentAssociation.GoogleCesAppRootAgentAssociationTimeouts">GoogleCesAppRootAgentAssociationTimeouts</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleCesAppRootAgentAssociation.GoogleCesAppRootAgentAssociationTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleCesAppRootAgentAssociation.GoogleCesAppRootAgentAssociationTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktn/provider-google-beta.googleCesAppRootAgentAssociation.GoogleCesAppRootAgentAssociationTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktn/provider-google-beta.googleCesAppRootAgentAssociation.GoogleCesAppRootAgentAssociationTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktn/provider-google-beta.googleCesAppRootAgentAssociation.GoogleCesAppRootAgentAssociationTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google-beta.googleCesAppRootAgentAssociation.GoogleCesAppRootAgentAssociationTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google-beta.googleCesAppRootAgentAssociation.GoogleCesAppRootAgentAssociationTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google-beta.googleCesAppRootAgentAssociation.GoogleCesAppRootAgentAssociationTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleCesAppRootAgentAssociation.GoogleCesAppRootAgentAssociationTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | GoogleCesAppRootAgentAssociationTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleCesAppRootAgentAssociation.GoogleCesAppRootAgentAssociationTimeouts">GoogleCesAppRootAgentAssociationTimeouts</a>

---



