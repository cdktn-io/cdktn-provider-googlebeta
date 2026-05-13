# `googleCesDeployment` Submodule <a name="`googleCesDeployment` Submodule" id="@cdktn/provider-google-beta.googleCesDeployment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleCesDeployment <a name="GoogleCesDeployment" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeployment"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_ces_deployment google_ces_deployment}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeployment.Initializer"></a>

```python
from cdktn_provider_google_beta import google_ces_deployment

googleCesDeployment.GoogleCesDeployment(
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
  app_version: str,
  channel_profile: GoogleCesDeploymentChannelProfile,
  display_name: str,
  location: str,
  id: str = None,
  project: str = None,
  timeouts: GoogleCesDeploymentTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeployment.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeployment.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeployment.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeployment.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeployment.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeployment.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeployment.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeployment.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeployment.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeployment.Initializer.parameter.app">app</a></code> | <code>str</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeployment.Initializer.parameter.appVersion">app_version</a></code> | <code>str</code> | The resource name of the app version to deploy. Format: projects/{project}/locations/{location}/apps/{app}/versions/{version}. |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeployment.Initializer.parameter.channelProfile">channel_profile</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfile">GoogleCesDeploymentChannelProfile</a></code> | channel_profile block. |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeployment.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | Display name of the deployment. |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeployment.Initializer.parameter.location">location</a></code> | <code>str</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeployment.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_ces_deployment#id GoogleCesDeployment#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeployment.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_ces_deployment#project GoogleCesDeployment#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeployment.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentTimeouts">GoogleCesDeploymentTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeployment.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeployment.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeployment.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeployment.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeployment.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeployment.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeployment.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeployment.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeployment.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `app`<sup>Required</sup> <a name="app" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeployment.Initializer.parameter.app"></a>

- *Type:* str

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_ces_deployment#app GoogleCesDeployment#app}

---

##### `app_version`<sup>Required</sup> <a name="app_version" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeployment.Initializer.parameter.appVersion"></a>

- *Type:* str

The resource name of the app version to deploy. Format: projects/{project}/locations/{location}/apps/{app}/versions/{version}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_ces_deployment#app_version GoogleCesDeployment#app_version}

---

##### `channel_profile`<sup>Required</sup> <a name="channel_profile" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeployment.Initializer.parameter.channelProfile"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfile">GoogleCesDeploymentChannelProfile</a>

channel_profile block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_ces_deployment#channel_profile GoogleCesDeployment#channel_profile}

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeployment.Initializer.parameter.displayName"></a>

- *Type:* str

Display name of the deployment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_ces_deployment#display_name GoogleCesDeployment#display_name}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeployment.Initializer.parameter.location"></a>

- *Type:* str

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_ces_deployment#location GoogleCesDeployment#location}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeployment.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_ces_deployment#id GoogleCesDeployment#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeployment.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_ces_deployment#project GoogleCesDeployment#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeployment.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentTimeouts">GoogleCesDeploymentTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_ces_deployment#timeouts GoogleCesDeployment#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeployment.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeployment.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeployment.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeployment.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeployment.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeployment.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeployment.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeployment.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeployment.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeployment.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeployment.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeployment.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeployment.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeployment.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeployment.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeployment.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeployment.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeployment.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeployment.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeployment.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeployment.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeployment.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeployment.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeployment.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeployment.putChannelProfile">put_channel_profile</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeployment.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeployment.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeployment.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeployment.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeployment.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeployment.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeployment.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeployment.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeployment.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeployment.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeployment.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeployment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeployment.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeployment.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeployment.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeployment.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeployment.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeployment.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeployment.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeployment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeployment.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeployment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeployment.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeployment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeployment.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeployment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeployment.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeployment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeployment.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeployment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeployment.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeployment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeployment.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeployment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeployment.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeployment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeployment.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeployment.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeployment.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeployment.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeployment.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeployment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeployment.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeployment.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeployment.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeployment.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeployment.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeployment.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeployment.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_channel_profile` <a name="put_channel_profile" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeployment.putChannelProfile"></a>

```python
def put_channel_profile(
  channel_type: str = None,
  disable_barge_in_control: bool | IResolvable = None,
  disable_dtmf: bool | IResolvable = None,
  persona_property: GoogleCesDeploymentChannelProfilePersonaProperty = None,
  profile_id: str = None,
  web_widget_config: GoogleCesDeploymentChannelProfileWebWidgetConfig = None
) -> None
```

###### `channel_type`<sup>Optional</sup> <a name="channel_type" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeployment.putChannelProfile.parameter.channelType"></a>

- *Type:* str

The type of the channel profile. Possible values: UNKNOWN WEB_UI API TWILIO GOOGLE_TELEPHONY_PLATFORM CONTACT_CENTER_AS_A_SERVICE.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_ces_deployment#channel_type GoogleCesDeployment#channel_type}

---

###### `disable_barge_in_control`<sup>Optional</sup> <a name="disable_barge_in_control" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeployment.putChannelProfile.parameter.disableBargeInControl"></a>

- *Type:* bool | cdktn.IResolvable

Whether to disable user barge-in control in the conversation.

* **true**: User interruptions are disabled while the agent is speaking.
* **false**: The agent retains automatic control over when the user can
  interrupt.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_ces_deployment#disable_barge_in_control GoogleCesDeployment#disable_barge_in_control}

---

###### `disable_dtmf`<sup>Optional</sup> <a name="disable_dtmf" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeployment.putChannelProfile.parameter.disableDtmf"></a>

- *Type:* bool | cdktn.IResolvable

Whether to disable DTMF (dual-tone multi-frequency).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_ces_deployment#disable_dtmf GoogleCesDeployment#disable_dtmf}

---

###### `persona_property`<sup>Optional</sup> <a name="persona_property" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeployment.putChannelProfile.parameter.personaProperty"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfilePersonaProperty">GoogleCesDeploymentChannelProfilePersonaProperty</a>

persona_property block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_ces_deployment#persona_property GoogleCesDeployment#persona_property}

---

###### `profile_id`<sup>Optional</sup> <a name="profile_id" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeployment.putChannelProfile.parameter.profileId"></a>

- *Type:* str

The unique identifier of the channel profile.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_ces_deployment#profile_id GoogleCesDeployment#profile_id}

---

###### `web_widget_config`<sup>Optional</sup> <a name="web_widget_config" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeployment.putChannelProfile.parameter.webWidgetConfig"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileWebWidgetConfig">GoogleCesDeploymentChannelProfileWebWidgetConfig</a>

web_widget_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_ces_deployment#web_widget_config GoogleCesDeployment#web_widget_config}

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeployment.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeployment.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_ces_deployment#create GoogleCesDeployment#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeployment.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_ces_deployment#delete GoogleCesDeployment#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeployment.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_ces_deployment#update GoogleCesDeployment#update}.

---

##### `reset_id` <a name="reset_id" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeployment.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeployment.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeployment.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeployment.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeployment.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeployment.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeployment.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a GoogleCesDeployment resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeployment.isConstruct"></a>

```python
from cdktn_provider_google_beta import google_ces_deployment

googleCesDeployment.GoogleCesDeployment.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeployment.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeployment.isTerraformElement"></a>

```python
from cdktn_provider_google_beta import google_ces_deployment

googleCesDeployment.GoogleCesDeployment.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeployment.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeployment.isTerraformResource"></a>

```python
from cdktn_provider_google_beta import google_ces_deployment

googleCesDeployment.GoogleCesDeployment.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeployment.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeployment.generateConfigForImport"></a>

```python
from cdktn_provider_google_beta import google_ces_deployment

googleCesDeployment.GoogleCesDeployment.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a GoogleCesDeployment resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeployment.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeployment.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the GoogleCesDeployment to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeployment.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing GoogleCesDeployment that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_ces_deployment#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeployment.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the GoogleCesDeployment to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeployment.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeployment.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeployment.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeployment.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeployment.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeployment.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeployment.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeployment.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeployment.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeployment.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeployment.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeployment.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeployment.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeployment.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeployment.property.channelProfile">channel_profile</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileOutputReference">GoogleCesDeploymentChannelProfileOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeployment.property.createTime">create_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeployment.property.etag">etag</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeployment.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeployment.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentTimeoutsOutputReference">GoogleCesDeploymentTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeployment.property.updateTime">update_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeployment.property.appInput">app_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeployment.property.appVersionInput">app_version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeployment.property.channelProfileInput">channel_profile_input</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfile">GoogleCesDeploymentChannelProfile</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeployment.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeployment.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeployment.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeployment.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeployment.property.timeoutsInput">timeouts_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentTimeouts">GoogleCesDeploymentTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeployment.property.app">app</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeployment.property.appVersion">app_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeployment.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeployment.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeployment.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeployment.property.project">project</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeployment.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeployment.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeployment.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeployment.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeployment.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeployment.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeployment.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeployment.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeployment.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeployment.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeployment.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeployment.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeployment.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeployment.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `channel_profile`<sup>Required</sup> <a name="channel_profile" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeployment.property.channelProfile"></a>

```python
channel_profile: GoogleCesDeploymentChannelProfileOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileOutputReference">GoogleCesDeploymentChannelProfileOutputReference</a>

---

##### `create_time`<sup>Required</sup> <a name="create_time" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeployment.property.createTime"></a>

```python
create_time: str
```

- *Type:* str

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeployment.property.etag"></a>

```python
etag: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeployment.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeployment.property.timeouts"></a>

```python
timeouts: GoogleCesDeploymentTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentTimeoutsOutputReference">GoogleCesDeploymentTimeoutsOutputReference</a>

---

##### `update_time`<sup>Required</sup> <a name="update_time" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeployment.property.updateTime"></a>

```python
update_time: str
```

- *Type:* str

---

##### `app_input`<sup>Optional</sup> <a name="app_input" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeployment.property.appInput"></a>

```python
app_input: str
```

- *Type:* str

---

##### `app_version_input`<sup>Optional</sup> <a name="app_version_input" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeployment.property.appVersionInput"></a>

```python
app_version_input: str
```

- *Type:* str

---

##### `channel_profile_input`<sup>Optional</sup> <a name="channel_profile_input" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeployment.property.channelProfileInput"></a>

```python
channel_profile_input: GoogleCesDeploymentChannelProfile
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfile">GoogleCesDeploymentChannelProfile</a>

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeployment.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeployment.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeployment.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeployment.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeployment.property.timeoutsInput"></a>

```python
timeouts_input: IResolvable | GoogleCesDeploymentTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentTimeouts">GoogleCesDeploymentTimeouts</a>

---

##### `app`<sup>Required</sup> <a name="app" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeployment.property.app"></a>

```python
app: str
```

- *Type:* str

---

##### `app_version`<sup>Required</sup> <a name="app_version" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeployment.property.appVersion"></a>

```python
app_version: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeployment.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeployment.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeployment.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeployment.property.project"></a>

```python
project: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeployment.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeployment.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleCesDeploymentChannelProfile <a name="GoogleCesDeploymentChannelProfile" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfile"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfile.Initializer"></a>

```python
from cdktn_provider_google_beta import google_ces_deployment

googleCesDeployment.GoogleCesDeploymentChannelProfile(
  channel_type: str = None,
  disable_barge_in_control: bool | IResolvable = None,
  disable_dtmf: bool | IResolvable = None,
  persona_property: GoogleCesDeploymentChannelProfilePersonaProperty = None,
  profile_id: str = None,
  web_widget_config: GoogleCesDeploymentChannelProfileWebWidgetConfig = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfile.property.channelType">channel_type</a></code> | <code>str</code> | The type of the channel profile. Possible values: UNKNOWN WEB_UI API TWILIO GOOGLE_TELEPHONY_PLATFORM CONTACT_CENTER_AS_A_SERVICE. |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfile.property.disableBargeInControl">disable_barge_in_control</a></code> | <code>bool \| cdktn.IResolvable</code> | Whether to disable user barge-in control in the conversation. |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfile.property.disableDtmf">disable_dtmf</a></code> | <code>bool \| cdktn.IResolvable</code> | Whether to disable DTMF (dual-tone multi-frequency). |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfile.property.personaProperty">persona_property</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfilePersonaProperty">GoogleCesDeploymentChannelProfilePersonaProperty</a></code> | persona_property block. |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfile.property.profileId">profile_id</a></code> | <code>str</code> | The unique identifier of the channel profile. |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfile.property.webWidgetConfig">web_widget_config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileWebWidgetConfig">GoogleCesDeploymentChannelProfileWebWidgetConfig</a></code> | web_widget_config block. |

---

##### `channel_type`<sup>Optional</sup> <a name="channel_type" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfile.property.channelType"></a>

```python
channel_type: str
```

- *Type:* str

The type of the channel profile. Possible values: UNKNOWN WEB_UI API TWILIO GOOGLE_TELEPHONY_PLATFORM CONTACT_CENTER_AS_A_SERVICE.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_ces_deployment#channel_type GoogleCesDeployment#channel_type}

---

##### `disable_barge_in_control`<sup>Optional</sup> <a name="disable_barge_in_control" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfile.property.disableBargeInControl"></a>

```python
disable_barge_in_control: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Whether to disable user barge-in control in the conversation.

* **true**: User interruptions are disabled while the agent is speaking.
* **false**: The agent retains automatic control over when the user can
  interrupt.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_ces_deployment#disable_barge_in_control GoogleCesDeployment#disable_barge_in_control}

---

##### `disable_dtmf`<sup>Optional</sup> <a name="disable_dtmf" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfile.property.disableDtmf"></a>

```python
disable_dtmf: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Whether to disable DTMF (dual-tone multi-frequency).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_ces_deployment#disable_dtmf GoogleCesDeployment#disable_dtmf}

---

##### `persona_property`<sup>Optional</sup> <a name="persona_property" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfile.property.personaProperty"></a>

```python
persona_property: GoogleCesDeploymentChannelProfilePersonaProperty
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfilePersonaProperty">GoogleCesDeploymentChannelProfilePersonaProperty</a>

persona_property block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_ces_deployment#persona_property GoogleCesDeployment#persona_property}

---

##### `profile_id`<sup>Optional</sup> <a name="profile_id" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfile.property.profileId"></a>

```python
profile_id: str
```

- *Type:* str

The unique identifier of the channel profile.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_ces_deployment#profile_id GoogleCesDeployment#profile_id}

---

##### `web_widget_config`<sup>Optional</sup> <a name="web_widget_config" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfile.property.webWidgetConfig"></a>

```python
web_widget_config: GoogleCesDeploymentChannelProfileWebWidgetConfig
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileWebWidgetConfig">GoogleCesDeploymentChannelProfileWebWidgetConfig</a>

web_widget_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_ces_deployment#web_widget_config GoogleCesDeployment#web_widget_config}

---

### GoogleCesDeploymentChannelProfilePersonaProperty <a name="GoogleCesDeploymentChannelProfilePersonaProperty" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfilePersonaProperty"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfilePersonaProperty.Initializer"></a>

```python
from cdktn_provider_google_beta import google_ces_deployment

googleCesDeployment.GoogleCesDeploymentChannelProfilePersonaProperty(
  persona: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfilePersonaProperty.property.persona">persona</a></code> | <code>str</code> | The persona of the channel. Possible values: UNKNOWN CONCISE CHATTY. |

---

##### `persona`<sup>Optional</sup> <a name="persona" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfilePersonaProperty.property.persona"></a>

```python
persona: str
```

- *Type:* str

The persona of the channel. Possible values: UNKNOWN CONCISE CHATTY.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_ces_deployment#persona GoogleCesDeployment#persona}

---

### GoogleCesDeploymentChannelProfileWebWidgetConfig <a name="GoogleCesDeploymentChannelProfileWebWidgetConfig" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileWebWidgetConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileWebWidgetConfig.Initializer"></a>

```python
from cdktn_provider_google_beta import google_ces_deployment

googleCesDeployment.GoogleCesDeploymentChannelProfileWebWidgetConfig(
  modality: str = None,
  theme: str = None,
  web_widget_title: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileWebWidgetConfig.property.modality">modality</a></code> | <code>str</code> | The modality of the web widget. Possible values: UNKNOWN_MODALITY CHAT_AND_VOICE VOICE_ONLY CHAT_ONLY. |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileWebWidgetConfig.property.theme">theme</a></code> | <code>str</code> | The theme of the web widget. Possible values: UNKNOWN_THEME LIGHT DARK. |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileWebWidgetConfig.property.webWidgetTitle">web_widget_title</a></code> | <code>str</code> | The title of the web widget. |

---

##### `modality`<sup>Optional</sup> <a name="modality" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileWebWidgetConfig.property.modality"></a>

```python
modality: str
```

- *Type:* str

The modality of the web widget. Possible values: UNKNOWN_MODALITY CHAT_AND_VOICE VOICE_ONLY CHAT_ONLY.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_ces_deployment#modality GoogleCesDeployment#modality}

---

##### `theme`<sup>Optional</sup> <a name="theme" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileWebWidgetConfig.property.theme"></a>

```python
theme: str
```

- *Type:* str

The theme of the web widget. Possible values: UNKNOWN_THEME LIGHT DARK.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_ces_deployment#theme GoogleCesDeployment#theme}

---

##### `web_widget_title`<sup>Optional</sup> <a name="web_widget_title" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileWebWidgetConfig.property.webWidgetTitle"></a>

```python
web_widget_title: str
```

- *Type:* str

The title of the web widget.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_ces_deployment#web_widget_title GoogleCesDeployment#web_widget_title}

---

### GoogleCesDeploymentConfig <a name="GoogleCesDeploymentConfig" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentConfig.Initializer"></a>

```python
from cdktn_provider_google_beta import google_ces_deployment

googleCesDeployment.GoogleCesDeploymentConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  app: str,
  app_version: str,
  channel_profile: GoogleCesDeploymentChannelProfile,
  display_name: str,
  location: str,
  id: str = None,
  project: str = None,
  timeouts: GoogleCesDeploymentTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentConfig.property.app">app</a></code> | <code>str</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentConfig.property.appVersion">app_version</a></code> | <code>str</code> | The resource name of the app version to deploy. Format: projects/{project}/locations/{location}/apps/{app}/versions/{version}. |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentConfig.property.channelProfile">channel_profile</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfile">GoogleCesDeploymentChannelProfile</a></code> | channel_profile block. |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentConfig.property.displayName">display_name</a></code> | <code>str</code> | Display name of the deployment. |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentConfig.property.location">location</a></code> | <code>str</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_ces_deployment#id GoogleCesDeployment#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_ces_deployment#project GoogleCesDeployment#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentTimeouts">GoogleCesDeploymentTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `app`<sup>Required</sup> <a name="app" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentConfig.property.app"></a>

```python
app: str
```

- *Type:* str

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_ces_deployment#app GoogleCesDeployment#app}

---

##### `app_version`<sup>Required</sup> <a name="app_version" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentConfig.property.appVersion"></a>

```python
app_version: str
```

- *Type:* str

The resource name of the app version to deploy. Format: projects/{project}/locations/{location}/apps/{app}/versions/{version}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_ces_deployment#app_version GoogleCesDeployment#app_version}

---

##### `channel_profile`<sup>Required</sup> <a name="channel_profile" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentConfig.property.channelProfile"></a>

```python
channel_profile: GoogleCesDeploymentChannelProfile
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfile">GoogleCesDeploymentChannelProfile</a>

channel_profile block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_ces_deployment#channel_profile GoogleCesDeployment#channel_profile}

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

Display name of the deployment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_ces_deployment#display_name GoogleCesDeployment#display_name}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentConfig.property.location"></a>

```python
location: str
```

- *Type:* str

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_ces_deployment#location GoogleCesDeployment#location}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_ces_deployment#id GoogleCesDeployment#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_ces_deployment#project GoogleCesDeployment#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentConfig.property.timeouts"></a>

```python
timeouts: GoogleCesDeploymentTimeouts
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentTimeouts">GoogleCesDeploymentTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_ces_deployment#timeouts GoogleCesDeployment#timeouts}

---

### GoogleCesDeploymentTimeouts <a name="GoogleCesDeploymentTimeouts" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentTimeouts.Initializer"></a>

```python
from cdktn_provider_google_beta import google_ces_deployment

googleCesDeployment.GoogleCesDeploymentTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_ces_deployment#create GoogleCesDeployment#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_ces_deployment#delete GoogleCesDeployment#delete}. |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_ces_deployment#update GoogleCesDeployment#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_ces_deployment#create GoogleCesDeployment#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_ces_deployment#delete GoogleCesDeployment#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_ces_deployment#update GoogleCesDeployment#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleCesDeploymentChannelProfileOutputReference <a name="GoogleCesDeploymentChannelProfileOutputReference" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_ces_deployment

googleCesDeployment.GoogleCesDeploymentChannelProfileOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileOutputReference.putPersonaProperty">put_persona_property</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileOutputReference.putWebWidgetConfig">put_web_widget_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileOutputReference.resetChannelType">reset_channel_type</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileOutputReference.resetDisableBargeInControl">reset_disable_barge_in_control</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileOutputReference.resetDisableDtmf">reset_disable_dtmf</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileOutputReference.resetPersonaProperty">reset_persona_property</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileOutputReference.resetProfileId">reset_profile_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileOutputReference.resetWebWidgetConfig">reset_web_widget_config</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_persona_property` <a name="put_persona_property" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileOutputReference.putPersonaProperty"></a>

```python
def put_persona_property(
  persona: str = None
) -> None
```

###### `persona`<sup>Optional</sup> <a name="persona" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileOutputReference.putPersonaProperty.parameter.persona"></a>

- *Type:* str

The persona of the channel. Possible values: UNKNOWN CONCISE CHATTY.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_ces_deployment#persona GoogleCesDeployment#persona}

---

##### `put_web_widget_config` <a name="put_web_widget_config" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileOutputReference.putWebWidgetConfig"></a>

```python
def put_web_widget_config(
  modality: str = None,
  theme: str = None,
  web_widget_title: str = None
) -> None
```

###### `modality`<sup>Optional</sup> <a name="modality" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileOutputReference.putWebWidgetConfig.parameter.modality"></a>

- *Type:* str

The modality of the web widget. Possible values: UNKNOWN_MODALITY CHAT_AND_VOICE VOICE_ONLY CHAT_ONLY.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_ces_deployment#modality GoogleCesDeployment#modality}

---

###### `theme`<sup>Optional</sup> <a name="theme" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileOutputReference.putWebWidgetConfig.parameter.theme"></a>

- *Type:* str

The theme of the web widget. Possible values: UNKNOWN_THEME LIGHT DARK.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_ces_deployment#theme GoogleCesDeployment#theme}

---

###### `web_widget_title`<sup>Optional</sup> <a name="web_widget_title" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileOutputReference.putWebWidgetConfig.parameter.webWidgetTitle"></a>

- *Type:* str

The title of the web widget.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_ces_deployment#web_widget_title GoogleCesDeployment#web_widget_title}

---

##### `reset_channel_type` <a name="reset_channel_type" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileOutputReference.resetChannelType"></a>

```python
def reset_channel_type() -> None
```

##### `reset_disable_barge_in_control` <a name="reset_disable_barge_in_control" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileOutputReference.resetDisableBargeInControl"></a>

```python
def reset_disable_barge_in_control() -> None
```

##### `reset_disable_dtmf` <a name="reset_disable_dtmf" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileOutputReference.resetDisableDtmf"></a>

```python
def reset_disable_dtmf() -> None
```

##### `reset_persona_property` <a name="reset_persona_property" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileOutputReference.resetPersonaProperty"></a>

```python
def reset_persona_property() -> None
```

##### `reset_profile_id` <a name="reset_profile_id" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileOutputReference.resetProfileId"></a>

```python
def reset_profile_id() -> None
```

##### `reset_web_widget_config` <a name="reset_web_widget_config" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileOutputReference.resetWebWidgetConfig"></a>

```python
def reset_web_widget_config() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileOutputReference.property.personaProperty">persona_property</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfilePersonaPropertyOutputReference">GoogleCesDeploymentChannelProfilePersonaPropertyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileOutputReference.property.webWidgetConfig">web_widget_config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileWebWidgetConfigOutputReference">GoogleCesDeploymentChannelProfileWebWidgetConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileOutputReference.property.channelTypeInput">channel_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileOutputReference.property.disableBargeInControlInput">disable_barge_in_control_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileOutputReference.property.disableDtmfInput">disable_dtmf_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileOutputReference.property.personaPropertyInput">persona_property_input</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfilePersonaProperty">GoogleCesDeploymentChannelProfilePersonaProperty</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileOutputReference.property.profileIdInput">profile_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileOutputReference.property.webWidgetConfigInput">web_widget_config_input</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileWebWidgetConfig">GoogleCesDeploymentChannelProfileWebWidgetConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileOutputReference.property.channelType">channel_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileOutputReference.property.disableBargeInControl">disable_barge_in_control</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileOutputReference.property.disableDtmf">disable_dtmf</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileOutputReference.property.profileId">profile_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfile">GoogleCesDeploymentChannelProfile</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `persona_property`<sup>Required</sup> <a name="persona_property" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileOutputReference.property.personaProperty"></a>

```python
persona_property: GoogleCesDeploymentChannelProfilePersonaPropertyOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfilePersonaPropertyOutputReference">GoogleCesDeploymentChannelProfilePersonaPropertyOutputReference</a>

---

##### `web_widget_config`<sup>Required</sup> <a name="web_widget_config" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileOutputReference.property.webWidgetConfig"></a>

```python
web_widget_config: GoogleCesDeploymentChannelProfileWebWidgetConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileWebWidgetConfigOutputReference">GoogleCesDeploymentChannelProfileWebWidgetConfigOutputReference</a>

---

##### `channel_type_input`<sup>Optional</sup> <a name="channel_type_input" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileOutputReference.property.channelTypeInput"></a>

```python
channel_type_input: str
```

- *Type:* str

---

##### `disable_barge_in_control_input`<sup>Optional</sup> <a name="disable_barge_in_control_input" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileOutputReference.property.disableBargeInControlInput"></a>

```python
disable_barge_in_control_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `disable_dtmf_input`<sup>Optional</sup> <a name="disable_dtmf_input" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileOutputReference.property.disableDtmfInput"></a>

```python
disable_dtmf_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `persona_property_input`<sup>Optional</sup> <a name="persona_property_input" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileOutputReference.property.personaPropertyInput"></a>

```python
persona_property_input: GoogleCesDeploymentChannelProfilePersonaProperty
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfilePersonaProperty">GoogleCesDeploymentChannelProfilePersonaProperty</a>

---

##### `profile_id_input`<sup>Optional</sup> <a name="profile_id_input" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileOutputReference.property.profileIdInput"></a>

```python
profile_id_input: str
```

- *Type:* str

---

##### `web_widget_config_input`<sup>Optional</sup> <a name="web_widget_config_input" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileOutputReference.property.webWidgetConfigInput"></a>

```python
web_widget_config_input: GoogleCesDeploymentChannelProfileWebWidgetConfig
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileWebWidgetConfig">GoogleCesDeploymentChannelProfileWebWidgetConfig</a>

---

##### `channel_type`<sup>Required</sup> <a name="channel_type" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileOutputReference.property.channelType"></a>

```python
channel_type: str
```

- *Type:* str

---

##### `disable_barge_in_control`<sup>Required</sup> <a name="disable_barge_in_control" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileOutputReference.property.disableBargeInControl"></a>

```python
disable_barge_in_control: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `disable_dtmf`<sup>Required</sup> <a name="disable_dtmf" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileOutputReference.property.disableDtmf"></a>

```python
disable_dtmf: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `profile_id`<sup>Required</sup> <a name="profile_id" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileOutputReference.property.profileId"></a>

```python
profile_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileOutputReference.property.internalValue"></a>

```python
internal_value: GoogleCesDeploymentChannelProfile
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfile">GoogleCesDeploymentChannelProfile</a>

---


### GoogleCesDeploymentChannelProfilePersonaPropertyOutputReference <a name="GoogleCesDeploymentChannelProfilePersonaPropertyOutputReference" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfilePersonaPropertyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfilePersonaPropertyOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_ces_deployment

googleCesDeployment.GoogleCesDeploymentChannelProfilePersonaPropertyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfilePersonaPropertyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfilePersonaPropertyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfilePersonaPropertyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfilePersonaPropertyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfilePersonaPropertyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfilePersonaPropertyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfilePersonaPropertyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfilePersonaPropertyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfilePersonaPropertyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfilePersonaPropertyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfilePersonaPropertyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfilePersonaPropertyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfilePersonaPropertyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfilePersonaPropertyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfilePersonaPropertyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfilePersonaPropertyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfilePersonaPropertyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfilePersonaPropertyOutputReference.resetPersona">reset_persona</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfilePersonaPropertyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfilePersonaPropertyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfilePersonaPropertyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfilePersonaPropertyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfilePersonaPropertyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfilePersonaPropertyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfilePersonaPropertyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfilePersonaPropertyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfilePersonaPropertyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfilePersonaPropertyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfilePersonaPropertyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfilePersonaPropertyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfilePersonaPropertyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfilePersonaPropertyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfilePersonaPropertyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfilePersonaPropertyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfilePersonaPropertyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfilePersonaPropertyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfilePersonaPropertyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfilePersonaPropertyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfilePersonaPropertyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfilePersonaPropertyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfilePersonaPropertyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfilePersonaPropertyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_persona` <a name="reset_persona" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfilePersonaPropertyOutputReference.resetPersona"></a>

```python
def reset_persona() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfilePersonaPropertyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfilePersonaPropertyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfilePersonaPropertyOutputReference.property.personaInput">persona_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfilePersonaPropertyOutputReference.property.persona">persona</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfilePersonaPropertyOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfilePersonaProperty">GoogleCesDeploymentChannelProfilePersonaProperty</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfilePersonaPropertyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfilePersonaPropertyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `persona_input`<sup>Optional</sup> <a name="persona_input" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfilePersonaPropertyOutputReference.property.personaInput"></a>

```python
persona_input: str
```

- *Type:* str

---

##### `persona`<sup>Required</sup> <a name="persona" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfilePersonaPropertyOutputReference.property.persona"></a>

```python
persona: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfilePersonaPropertyOutputReference.property.internalValue"></a>

```python
internal_value: GoogleCesDeploymentChannelProfilePersonaProperty
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfilePersonaProperty">GoogleCesDeploymentChannelProfilePersonaProperty</a>

---


### GoogleCesDeploymentChannelProfileWebWidgetConfigOutputReference <a name="GoogleCesDeploymentChannelProfileWebWidgetConfigOutputReference" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileWebWidgetConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileWebWidgetConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_ces_deployment

googleCesDeployment.GoogleCesDeploymentChannelProfileWebWidgetConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileWebWidgetConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileWebWidgetConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileWebWidgetConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileWebWidgetConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileWebWidgetConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileWebWidgetConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileWebWidgetConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileWebWidgetConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileWebWidgetConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileWebWidgetConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileWebWidgetConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileWebWidgetConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileWebWidgetConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileWebWidgetConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileWebWidgetConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileWebWidgetConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileWebWidgetConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileWebWidgetConfigOutputReference.resetModality">reset_modality</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileWebWidgetConfigOutputReference.resetTheme">reset_theme</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileWebWidgetConfigOutputReference.resetWebWidgetTitle">reset_web_widget_title</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileWebWidgetConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileWebWidgetConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileWebWidgetConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileWebWidgetConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileWebWidgetConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileWebWidgetConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileWebWidgetConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileWebWidgetConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileWebWidgetConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileWebWidgetConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileWebWidgetConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileWebWidgetConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileWebWidgetConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileWebWidgetConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileWebWidgetConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileWebWidgetConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileWebWidgetConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileWebWidgetConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileWebWidgetConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileWebWidgetConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileWebWidgetConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileWebWidgetConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileWebWidgetConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileWebWidgetConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_modality` <a name="reset_modality" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileWebWidgetConfigOutputReference.resetModality"></a>

```python
def reset_modality() -> None
```

##### `reset_theme` <a name="reset_theme" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileWebWidgetConfigOutputReference.resetTheme"></a>

```python
def reset_theme() -> None
```

##### `reset_web_widget_title` <a name="reset_web_widget_title" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileWebWidgetConfigOutputReference.resetWebWidgetTitle"></a>

```python
def reset_web_widget_title() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileWebWidgetConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileWebWidgetConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileWebWidgetConfigOutputReference.property.modalityInput">modality_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileWebWidgetConfigOutputReference.property.themeInput">theme_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileWebWidgetConfigOutputReference.property.webWidgetTitleInput">web_widget_title_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileWebWidgetConfigOutputReference.property.modality">modality</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileWebWidgetConfigOutputReference.property.theme">theme</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileWebWidgetConfigOutputReference.property.webWidgetTitle">web_widget_title</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileWebWidgetConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileWebWidgetConfig">GoogleCesDeploymentChannelProfileWebWidgetConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileWebWidgetConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileWebWidgetConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `modality_input`<sup>Optional</sup> <a name="modality_input" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileWebWidgetConfigOutputReference.property.modalityInput"></a>

```python
modality_input: str
```

- *Type:* str

---

##### `theme_input`<sup>Optional</sup> <a name="theme_input" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileWebWidgetConfigOutputReference.property.themeInput"></a>

```python
theme_input: str
```

- *Type:* str

---

##### `web_widget_title_input`<sup>Optional</sup> <a name="web_widget_title_input" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileWebWidgetConfigOutputReference.property.webWidgetTitleInput"></a>

```python
web_widget_title_input: str
```

- *Type:* str

---

##### `modality`<sup>Required</sup> <a name="modality" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileWebWidgetConfigOutputReference.property.modality"></a>

```python
modality: str
```

- *Type:* str

---

##### `theme`<sup>Required</sup> <a name="theme" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileWebWidgetConfigOutputReference.property.theme"></a>

```python
theme: str
```

- *Type:* str

---

##### `web_widget_title`<sup>Required</sup> <a name="web_widget_title" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileWebWidgetConfigOutputReference.property.webWidgetTitle"></a>

```python
web_widget_title: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileWebWidgetConfigOutputReference.property.internalValue"></a>

```python
internal_value: GoogleCesDeploymentChannelProfileWebWidgetConfig
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileWebWidgetConfig">GoogleCesDeploymentChannelProfileWebWidgetConfig</a>

---


### GoogleCesDeploymentTimeoutsOutputReference <a name="GoogleCesDeploymentTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentTimeoutsOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_ces_deployment

googleCesDeployment.GoogleCesDeploymentTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentTimeouts">GoogleCesDeploymentTimeouts</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | GoogleCesDeploymentTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentTimeouts">GoogleCesDeploymentTimeouts</a>

---



