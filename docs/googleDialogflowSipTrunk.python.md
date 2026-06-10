# `googleDialogflowSipTrunk` Submodule <a name="`googleDialogflowSipTrunk` Submodule" id="@cdktn/provider-google-beta.googleDialogflowSipTrunk"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleDialogflowSipTrunk <a name="GoogleDialogflowSipTrunk" id="@cdktn/provider-google-beta.googleDialogflowSipTrunk.GoogleDialogflowSipTrunk"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_dialogflow_sip_trunk google_dialogflow_sip_trunk}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDialogflowSipTrunk.GoogleDialogflowSipTrunk.Initializer"></a>

```python
from cdktn_provider_google_beta import google_dialogflow_sip_trunk

googleDialogflowSipTrunk.GoogleDialogflowSipTrunk(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  expected_hostname: typing.List[str],
  location: str,
  deletion_policy: str = None,
  display_name: str = None,
  id: str = None,
  project: str = None,
  timeouts: GoogleDialogflowSipTrunkTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowSipTrunk.GoogleDialogflowSipTrunk.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowSipTrunk.GoogleDialogflowSipTrunk.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowSipTrunk.GoogleDialogflowSipTrunk.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowSipTrunk.GoogleDialogflowSipTrunk.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowSipTrunk.GoogleDialogflowSipTrunk.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowSipTrunk.GoogleDialogflowSipTrunk.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowSipTrunk.GoogleDialogflowSipTrunk.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowSipTrunk.GoogleDialogflowSipTrunk.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowSipTrunk.GoogleDialogflowSipTrunk.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowSipTrunk.GoogleDialogflowSipTrunk.Initializer.parameter.expectedHostname">expected_hostname</a></code> | <code>typing.List[str]</code> | Required. The expected hostnames in the peer certificate from the partner that is used for TLS authentication. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowSipTrunk.GoogleDialogflowSipTrunk.Initializer.parameter.location">location</a></code> | <code>str</code> | The location of the SIP trunk. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowSipTrunk.GoogleDialogflowSipTrunk.Initializer.parameter.deletionPolicy">deletion_policy</a></code> | <code>str</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowSipTrunk.GoogleDialogflowSipTrunk.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | Optional. Human-readable alias for this trunk. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowSipTrunk.GoogleDialogflowSipTrunk.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_dialogflow_sip_trunk#id GoogleDialogflowSipTrunk#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowSipTrunk.GoogleDialogflowSipTrunk.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_dialogflow_sip_trunk#project GoogleDialogflowSipTrunk#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowSipTrunk.GoogleDialogflowSipTrunk.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDialogflowSipTrunk.GoogleDialogflowSipTrunkTimeouts">GoogleDialogflowSipTrunkTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleDialogflowSipTrunk.GoogleDialogflowSipTrunk.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleDialogflowSipTrunk.GoogleDialogflowSipTrunk.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleDialogflowSipTrunk.GoogleDialogflowSipTrunk.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleDialogflowSipTrunk.GoogleDialogflowSipTrunk.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google-beta.googleDialogflowSipTrunk.GoogleDialogflowSipTrunk.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google-beta.googleDialogflowSipTrunk.GoogleDialogflowSipTrunk.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleDialogflowSipTrunk.GoogleDialogflowSipTrunk.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleDialogflowSipTrunk.GoogleDialogflowSipTrunk.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleDialogflowSipTrunk.GoogleDialogflowSipTrunk.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `expected_hostname`<sup>Required</sup> <a name="expected_hostname" id="@cdktn/provider-google-beta.googleDialogflowSipTrunk.GoogleDialogflowSipTrunk.Initializer.parameter.expectedHostname"></a>

- *Type:* typing.List[str]

Required. The expected hostnames in the peer certificate from the partner that is used for TLS authentication.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_dialogflow_sip_trunk#expected_hostname GoogleDialogflowSipTrunk#expected_hostname}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleDialogflowSipTrunk.GoogleDialogflowSipTrunk.Initializer.parameter.location"></a>

- *Type:* str

The location of the SIP trunk.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_dialogflow_sip_trunk#location GoogleDialogflowSipTrunk#location}

---

##### `deletion_policy`<sup>Optional</sup> <a name="deletion_policy" id="@cdktn/provider-google-beta.googleDialogflowSipTrunk.GoogleDialogflowSipTrunk.Initializer.parameter.deletionPolicy"></a>

- *Type:* str

Whether Terraform will be prevented from destroying the instance.

Defaults to "DELETE".
When a 'terraform destroy' or 'terraform apply' would delete the instance,
the command will fail if this field is set to "PREVENT" in Terraform state.
When set to "ABANDON", the command will remove the resource from Terraform
management without updating or deleting the resource in the API.
When set to "DELETE", deleting the resource is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_dialogflow_sip_trunk#deletion_policy GoogleDialogflowSipTrunk#deletion_policy}

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="@cdktn/provider-google-beta.googleDialogflowSipTrunk.GoogleDialogflowSipTrunk.Initializer.parameter.displayName"></a>

- *Type:* str

Optional. Human-readable alias for this trunk.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_dialogflow_sip_trunk#display_name GoogleDialogflowSipTrunk#display_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleDialogflowSipTrunk.GoogleDialogflowSipTrunk.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_dialogflow_sip_trunk#id GoogleDialogflowSipTrunk#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.googleDialogflowSipTrunk.GoogleDialogflowSipTrunk.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_dialogflow_sip_trunk#project GoogleDialogflowSipTrunk#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleDialogflowSipTrunk.GoogleDialogflowSipTrunk.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowSipTrunk.GoogleDialogflowSipTrunkTimeouts">GoogleDialogflowSipTrunkTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_dialogflow_sip_trunk#timeouts GoogleDialogflowSipTrunk#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowSipTrunk.GoogleDialogflowSipTrunk.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowSipTrunk.GoogleDialogflowSipTrunk.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowSipTrunk.GoogleDialogflowSipTrunk.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowSipTrunk.GoogleDialogflowSipTrunk.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowSipTrunk.GoogleDialogflowSipTrunk.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowSipTrunk.GoogleDialogflowSipTrunk.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowSipTrunk.GoogleDialogflowSipTrunk.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowSipTrunk.GoogleDialogflowSipTrunk.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowSipTrunk.GoogleDialogflowSipTrunk.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowSipTrunk.GoogleDialogflowSipTrunk.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowSipTrunk.GoogleDialogflowSipTrunk.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowSipTrunk.GoogleDialogflowSipTrunk.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowSipTrunk.GoogleDialogflowSipTrunk.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowSipTrunk.GoogleDialogflowSipTrunk.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowSipTrunk.GoogleDialogflowSipTrunk.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowSipTrunk.GoogleDialogflowSipTrunk.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowSipTrunk.GoogleDialogflowSipTrunk.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowSipTrunk.GoogleDialogflowSipTrunk.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowSipTrunk.GoogleDialogflowSipTrunk.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowSipTrunk.GoogleDialogflowSipTrunk.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowSipTrunk.GoogleDialogflowSipTrunk.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowSipTrunk.GoogleDialogflowSipTrunk.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowSipTrunk.GoogleDialogflowSipTrunk.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowSipTrunk.GoogleDialogflowSipTrunk.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowSipTrunk.GoogleDialogflowSipTrunk.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowSipTrunk.GoogleDialogflowSipTrunk.resetDeletionPolicy">reset_deletion_policy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowSipTrunk.GoogleDialogflowSipTrunk.resetDisplayName">reset_display_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowSipTrunk.GoogleDialogflowSipTrunk.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowSipTrunk.GoogleDialogflowSipTrunk.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowSipTrunk.GoogleDialogflowSipTrunk.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleDialogflowSipTrunk.GoogleDialogflowSipTrunk.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google-beta.googleDialogflowSipTrunk.GoogleDialogflowSipTrunk.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google-beta.googleDialogflowSipTrunk.GoogleDialogflowSipTrunk.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-google-beta.googleDialogflowSipTrunk.GoogleDialogflowSipTrunk.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google-beta.googleDialogflowSipTrunk.GoogleDialogflowSipTrunk.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleDialogflowSipTrunk.GoogleDialogflowSipTrunk.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-google-beta.googleDialogflowSipTrunk.GoogleDialogflowSipTrunk.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-google-beta.googleDialogflowSipTrunk.GoogleDialogflowSipTrunk.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-google-beta.googleDialogflowSipTrunk.GoogleDialogflowSipTrunk.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-google-beta.googleDialogflowSipTrunk.GoogleDialogflowSipTrunk.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-google-beta.googleDialogflowSipTrunk.GoogleDialogflowSipTrunk.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-google-beta.googleDialogflowSipTrunk.GoogleDialogflowSipTrunk.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-google-beta.googleDialogflowSipTrunk.GoogleDialogflowSipTrunk.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-google-beta.googleDialogflowSipTrunk.GoogleDialogflowSipTrunk.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleDialogflowSipTrunk.GoogleDialogflowSipTrunk.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDialogflowSipTrunk.GoogleDialogflowSipTrunk.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleDialogflowSipTrunk.GoogleDialogflowSipTrunk.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDialogflowSipTrunk.GoogleDialogflowSipTrunk.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleDialogflowSipTrunk.GoogleDialogflowSipTrunk.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDialogflowSipTrunk.GoogleDialogflowSipTrunk.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleDialogflowSipTrunk.GoogleDialogflowSipTrunk.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDialogflowSipTrunk.GoogleDialogflowSipTrunk.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleDialogflowSipTrunk.GoogleDialogflowSipTrunk.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDialogflowSipTrunk.GoogleDialogflowSipTrunk.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleDialogflowSipTrunk.GoogleDialogflowSipTrunk.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDialogflowSipTrunk.GoogleDialogflowSipTrunk.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleDialogflowSipTrunk.GoogleDialogflowSipTrunk.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDialogflowSipTrunk.GoogleDialogflowSipTrunk.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleDialogflowSipTrunk.GoogleDialogflowSipTrunk.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDialogflowSipTrunk.GoogleDialogflowSipTrunk.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleDialogflowSipTrunk.GoogleDialogflowSipTrunk.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDialogflowSipTrunk.GoogleDialogflowSipTrunk.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-google-beta.googleDialogflowSipTrunk.GoogleDialogflowSipTrunk.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-google-beta.googleDialogflowSipTrunk.GoogleDialogflowSipTrunk.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleDialogflowSipTrunk.GoogleDialogflowSipTrunk.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleDialogflowSipTrunk.GoogleDialogflowSipTrunk.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleDialogflowSipTrunk.GoogleDialogflowSipTrunk.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDialogflowSipTrunk.GoogleDialogflowSipTrunk.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-google-beta.googleDialogflowSipTrunk.GoogleDialogflowSipTrunk.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleDialogflowSipTrunk.GoogleDialogflowSipTrunk.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-google-beta.googleDialogflowSipTrunk.GoogleDialogflowSipTrunk.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-google-beta.googleDialogflowSipTrunk.GoogleDialogflowSipTrunk.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google-beta.googleDialogflowSipTrunk.GoogleDialogflowSipTrunk.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-google-beta.googleDialogflowSipTrunk.GoogleDialogflowSipTrunk.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleDialogflowSipTrunk.GoogleDialogflowSipTrunk.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktn/provider-google-beta.googleDialogflowSipTrunk.GoogleDialogflowSipTrunk.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google-beta.googleDialogflowSipTrunk.GoogleDialogflowSipTrunk.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_dialogflow_sip_trunk#create GoogleDialogflowSipTrunk#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google-beta.googleDialogflowSipTrunk.GoogleDialogflowSipTrunk.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_dialogflow_sip_trunk#delete GoogleDialogflowSipTrunk#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google-beta.googleDialogflowSipTrunk.GoogleDialogflowSipTrunk.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_dialogflow_sip_trunk#update GoogleDialogflowSipTrunk#update}.

---

##### `reset_deletion_policy` <a name="reset_deletion_policy" id="@cdktn/provider-google-beta.googleDialogflowSipTrunk.GoogleDialogflowSipTrunk.resetDeletionPolicy"></a>

```python
def reset_deletion_policy() -> None
```

##### `reset_display_name` <a name="reset_display_name" id="@cdktn/provider-google-beta.googleDialogflowSipTrunk.GoogleDialogflowSipTrunk.resetDisplayName"></a>

```python
def reset_display_name() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktn/provider-google-beta.googleDialogflowSipTrunk.GoogleDialogflowSipTrunk.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktn/provider-google-beta.googleDialogflowSipTrunk.GoogleDialogflowSipTrunk.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktn/provider-google-beta.googleDialogflowSipTrunk.GoogleDialogflowSipTrunk.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowSipTrunk.GoogleDialogflowSipTrunk.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowSipTrunk.GoogleDialogflowSipTrunk.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowSipTrunk.GoogleDialogflowSipTrunk.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowSipTrunk.GoogleDialogflowSipTrunk.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a GoogleDialogflowSipTrunk resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-google-beta.googleDialogflowSipTrunk.GoogleDialogflowSipTrunk.isConstruct"></a>

```python
from cdktn_provider_google_beta import google_dialogflow_sip_trunk

googleDialogflowSipTrunk.GoogleDialogflowSipTrunk.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleDialogflowSipTrunk.GoogleDialogflowSipTrunk.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-google-beta.googleDialogflowSipTrunk.GoogleDialogflowSipTrunk.isTerraformElement"></a>

```python
from cdktn_provider_google_beta import google_dialogflow_sip_trunk

googleDialogflowSipTrunk.GoogleDialogflowSipTrunk.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleDialogflowSipTrunk.GoogleDialogflowSipTrunk.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-google-beta.googleDialogflowSipTrunk.GoogleDialogflowSipTrunk.isTerraformResource"></a>

```python
from cdktn_provider_google_beta import google_dialogflow_sip_trunk

googleDialogflowSipTrunk.GoogleDialogflowSipTrunk.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleDialogflowSipTrunk.GoogleDialogflowSipTrunk.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-google-beta.googleDialogflowSipTrunk.GoogleDialogflowSipTrunk.generateConfigForImport"></a>

```python
from cdktn_provider_google_beta import google_dialogflow_sip_trunk

googleDialogflowSipTrunk.GoogleDialogflowSipTrunk.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a GoogleDialogflowSipTrunk resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleDialogflowSipTrunk.GoogleDialogflowSipTrunk.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-google-beta.googleDialogflowSipTrunk.GoogleDialogflowSipTrunk.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the GoogleDialogflowSipTrunk to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-google-beta.googleDialogflowSipTrunk.GoogleDialogflowSipTrunk.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing GoogleDialogflowSipTrunk that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_dialogflow_sip_trunk#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleDialogflowSipTrunk.GoogleDialogflowSipTrunk.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the GoogleDialogflowSipTrunk to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowSipTrunk.GoogleDialogflowSipTrunk.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowSipTrunk.GoogleDialogflowSipTrunk.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowSipTrunk.GoogleDialogflowSipTrunk.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowSipTrunk.GoogleDialogflowSipTrunk.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowSipTrunk.GoogleDialogflowSipTrunk.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowSipTrunk.GoogleDialogflowSipTrunk.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowSipTrunk.GoogleDialogflowSipTrunk.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowSipTrunk.GoogleDialogflowSipTrunk.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowSipTrunk.GoogleDialogflowSipTrunk.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowSipTrunk.GoogleDialogflowSipTrunk.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowSipTrunk.GoogleDialogflowSipTrunk.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowSipTrunk.GoogleDialogflowSipTrunk.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowSipTrunk.GoogleDialogflowSipTrunk.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowSipTrunk.GoogleDialogflowSipTrunk.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowSipTrunk.GoogleDialogflowSipTrunk.property.connections">connections</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDialogflowSipTrunk.GoogleDialogflowSipTrunkConnectionsList">GoogleDialogflowSipTrunkConnectionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowSipTrunk.GoogleDialogflowSipTrunk.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowSipTrunk.GoogleDialogflowSipTrunk.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDialogflowSipTrunk.GoogleDialogflowSipTrunkTimeoutsOutputReference">GoogleDialogflowSipTrunkTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowSipTrunk.GoogleDialogflowSipTrunk.property.deletionPolicyInput">deletion_policy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowSipTrunk.GoogleDialogflowSipTrunk.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowSipTrunk.GoogleDialogflowSipTrunk.property.expectedHostnameInput">expected_hostname_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowSipTrunk.GoogleDialogflowSipTrunk.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowSipTrunk.GoogleDialogflowSipTrunk.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowSipTrunk.GoogleDialogflowSipTrunk.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowSipTrunk.GoogleDialogflowSipTrunk.property.timeoutsInput">timeouts_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleDialogflowSipTrunk.GoogleDialogflowSipTrunkTimeouts">GoogleDialogflowSipTrunkTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowSipTrunk.GoogleDialogflowSipTrunk.property.deletionPolicy">deletion_policy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowSipTrunk.GoogleDialogflowSipTrunk.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowSipTrunk.GoogleDialogflowSipTrunk.property.expectedHostname">expected_hostname</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowSipTrunk.GoogleDialogflowSipTrunk.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowSipTrunk.GoogleDialogflowSipTrunk.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowSipTrunk.GoogleDialogflowSipTrunk.property.project">project</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google-beta.googleDialogflowSipTrunk.GoogleDialogflowSipTrunk.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-google-beta.googleDialogflowSipTrunk.GoogleDialogflowSipTrunk.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDialogflowSipTrunk.GoogleDialogflowSipTrunk.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-google-beta.googleDialogflowSipTrunk.GoogleDialogflowSipTrunk.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-google-beta.googleDialogflowSipTrunk.GoogleDialogflowSipTrunk.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-google-beta.googleDialogflowSipTrunk.GoogleDialogflowSipTrunk.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-google-beta.googleDialogflowSipTrunk.GoogleDialogflowSipTrunk.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleDialogflowSipTrunk.GoogleDialogflowSipTrunk.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleDialogflowSipTrunk.GoogleDialogflowSipTrunk.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google-beta.googleDialogflowSipTrunk.GoogleDialogflowSipTrunk.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google-beta.googleDialogflowSipTrunk.GoogleDialogflowSipTrunk.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleDialogflowSipTrunk.GoogleDialogflowSipTrunk.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleDialogflowSipTrunk.GoogleDialogflowSipTrunk.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleDialogflowSipTrunk.GoogleDialogflowSipTrunk.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `connections`<sup>Required</sup> <a name="connections" id="@cdktn/provider-google-beta.googleDialogflowSipTrunk.GoogleDialogflowSipTrunk.property.connections"></a>

```python
connections: GoogleDialogflowSipTrunkConnectionsList
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowSipTrunk.GoogleDialogflowSipTrunkConnectionsList">GoogleDialogflowSipTrunkConnectionsList</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleDialogflowSipTrunk.GoogleDialogflowSipTrunk.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleDialogflowSipTrunk.GoogleDialogflowSipTrunk.property.timeouts"></a>

```python
timeouts: GoogleDialogflowSipTrunkTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowSipTrunk.GoogleDialogflowSipTrunkTimeoutsOutputReference">GoogleDialogflowSipTrunkTimeoutsOutputReference</a>

---

##### `deletion_policy_input`<sup>Optional</sup> <a name="deletion_policy_input" id="@cdktn/provider-google-beta.googleDialogflowSipTrunk.GoogleDialogflowSipTrunk.property.deletionPolicyInput"></a>

```python
deletion_policy_input: str
```

- *Type:* str

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="@cdktn/provider-google-beta.googleDialogflowSipTrunk.GoogleDialogflowSipTrunk.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `expected_hostname_input`<sup>Optional</sup> <a name="expected_hostname_input" id="@cdktn/provider-google-beta.googleDialogflowSipTrunk.GoogleDialogflowSipTrunk.property.expectedHostnameInput"></a>

```python
expected_hostname_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-google-beta.googleDialogflowSipTrunk.GoogleDialogflowSipTrunk.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktn/provider-google-beta.googleDialogflowSipTrunk.GoogleDialogflowSipTrunk.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktn/provider-google-beta.googleDialogflowSipTrunk.GoogleDialogflowSipTrunk.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktn/provider-google-beta.googleDialogflowSipTrunk.GoogleDialogflowSipTrunk.property.timeoutsInput"></a>

```python
timeouts_input: IResolvable | GoogleDialogflowSipTrunkTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleDialogflowSipTrunk.GoogleDialogflowSipTrunkTimeouts">GoogleDialogflowSipTrunkTimeouts</a>

---

##### `deletion_policy`<sup>Required</sup> <a name="deletion_policy" id="@cdktn/provider-google-beta.googleDialogflowSipTrunk.GoogleDialogflowSipTrunk.property.deletionPolicy"></a>

```python
deletion_policy: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktn/provider-google-beta.googleDialogflowSipTrunk.GoogleDialogflowSipTrunk.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `expected_hostname`<sup>Required</sup> <a name="expected_hostname" id="@cdktn/provider-google-beta.googleDialogflowSipTrunk.GoogleDialogflowSipTrunk.property.expectedHostname"></a>

```python
expected_hostname: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleDialogflowSipTrunk.GoogleDialogflowSipTrunk.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleDialogflowSipTrunk.GoogleDialogflowSipTrunk.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google-beta.googleDialogflowSipTrunk.GoogleDialogflowSipTrunk.property.project"></a>

```python
project: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowSipTrunk.GoogleDialogflowSipTrunk.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google-beta.googleDialogflowSipTrunk.GoogleDialogflowSipTrunk.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleDialogflowSipTrunkConfig <a name="GoogleDialogflowSipTrunkConfig" id="@cdktn/provider-google-beta.googleDialogflowSipTrunk.GoogleDialogflowSipTrunkConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDialogflowSipTrunk.GoogleDialogflowSipTrunkConfig.Initializer"></a>

```python
from cdktn_provider_google_beta import google_dialogflow_sip_trunk

googleDialogflowSipTrunk.GoogleDialogflowSipTrunkConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  expected_hostname: typing.List[str],
  location: str,
  deletion_policy: str = None,
  display_name: str = None,
  id: str = None,
  project: str = None,
  timeouts: GoogleDialogflowSipTrunkTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowSipTrunk.GoogleDialogflowSipTrunkConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowSipTrunk.GoogleDialogflowSipTrunkConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowSipTrunk.GoogleDialogflowSipTrunkConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowSipTrunk.GoogleDialogflowSipTrunkConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowSipTrunk.GoogleDialogflowSipTrunkConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowSipTrunk.GoogleDialogflowSipTrunkConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowSipTrunk.GoogleDialogflowSipTrunkConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowSipTrunk.GoogleDialogflowSipTrunkConfig.property.expectedHostname">expected_hostname</a></code> | <code>typing.List[str]</code> | Required. The expected hostnames in the peer certificate from the partner that is used for TLS authentication. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowSipTrunk.GoogleDialogflowSipTrunkConfig.property.location">location</a></code> | <code>str</code> | The location of the SIP trunk. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowSipTrunk.GoogleDialogflowSipTrunkConfig.property.deletionPolicy">deletion_policy</a></code> | <code>str</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowSipTrunk.GoogleDialogflowSipTrunkConfig.property.displayName">display_name</a></code> | <code>str</code> | Optional. Human-readable alias for this trunk. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowSipTrunk.GoogleDialogflowSipTrunkConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_dialogflow_sip_trunk#id GoogleDialogflowSipTrunk#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowSipTrunk.GoogleDialogflowSipTrunkConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_dialogflow_sip_trunk#project GoogleDialogflowSipTrunk#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowSipTrunk.GoogleDialogflowSipTrunkConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDialogflowSipTrunk.GoogleDialogflowSipTrunkTimeouts">GoogleDialogflowSipTrunkTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleDialogflowSipTrunk.GoogleDialogflowSipTrunkConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleDialogflowSipTrunk.GoogleDialogflowSipTrunkConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google-beta.googleDialogflowSipTrunk.GoogleDialogflowSipTrunkConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google-beta.googleDialogflowSipTrunk.GoogleDialogflowSipTrunkConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleDialogflowSipTrunk.GoogleDialogflowSipTrunkConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleDialogflowSipTrunk.GoogleDialogflowSipTrunkConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleDialogflowSipTrunk.GoogleDialogflowSipTrunkConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `expected_hostname`<sup>Required</sup> <a name="expected_hostname" id="@cdktn/provider-google-beta.googleDialogflowSipTrunk.GoogleDialogflowSipTrunkConfig.property.expectedHostname"></a>

```python
expected_hostname: typing.List[str]
```

- *Type:* typing.List[str]

Required. The expected hostnames in the peer certificate from the partner that is used for TLS authentication.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_dialogflow_sip_trunk#expected_hostname GoogleDialogflowSipTrunk#expected_hostname}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleDialogflowSipTrunk.GoogleDialogflowSipTrunkConfig.property.location"></a>

```python
location: str
```

- *Type:* str

The location of the SIP trunk.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_dialogflow_sip_trunk#location GoogleDialogflowSipTrunk#location}

---

##### `deletion_policy`<sup>Optional</sup> <a name="deletion_policy" id="@cdktn/provider-google-beta.googleDialogflowSipTrunk.GoogleDialogflowSipTrunkConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_dialogflow_sip_trunk#deletion_policy GoogleDialogflowSipTrunk#deletion_policy}

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="@cdktn/provider-google-beta.googleDialogflowSipTrunk.GoogleDialogflowSipTrunkConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

Optional. Human-readable alias for this trunk.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_dialogflow_sip_trunk#display_name GoogleDialogflowSipTrunk#display_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleDialogflowSipTrunk.GoogleDialogflowSipTrunkConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_dialogflow_sip_trunk#id GoogleDialogflowSipTrunk#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.googleDialogflowSipTrunk.GoogleDialogflowSipTrunkConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_dialogflow_sip_trunk#project GoogleDialogflowSipTrunk#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleDialogflowSipTrunk.GoogleDialogflowSipTrunkConfig.property.timeouts"></a>

```python
timeouts: GoogleDialogflowSipTrunkTimeouts
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowSipTrunk.GoogleDialogflowSipTrunkTimeouts">GoogleDialogflowSipTrunkTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_dialogflow_sip_trunk#timeouts GoogleDialogflowSipTrunk#timeouts}

---

### GoogleDialogflowSipTrunkConnections <a name="GoogleDialogflowSipTrunkConnections" id="@cdktn/provider-google-beta.googleDialogflowSipTrunk.GoogleDialogflowSipTrunkConnections"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDialogflowSipTrunk.GoogleDialogflowSipTrunkConnections.Initializer"></a>

```python
from cdktn_provider_google_beta import google_dialogflow_sip_trunk

googleDialogflowSipTrunk.GoogleDialogflowSipTrunkConnections()
```


### GoogleDialogflowSipTrunkConnectionsErrorDetails <a name="GoogleDialogflowSipTrunkConnectionsErrorDetails" id="@cdktn/provider-google-beta.googleDialogflowSipTrunk.GoogleDialogflowSipTrunkConnectionsErrorDetails"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDialogflowSipTrunk.GoogleDialogflowSipTrunkConnectionsErrorDetails.Initializer"></a>

```python
from cdktn_provider_google_beta import google_dialogflow_sip_trunk

googleDialogflowSipTrunk.GoogleDialogflowSipTrunkConnectionsErrorDetails()
```


### GoogleDialogflowSipTrunkTimeouts <a name="GoogleDialogflowSipTrunkTimeouts" id="@cdktn/provider-google-beta.googleDialogflowSipTrunk.GoogleDialogflowSipTrunkTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDialogflowSipTrunk.GoogleDialogflowSipTrunkTimeouts.Initializer"></a>

```python
from cdktn_provider_google_beta import google_dialogflow_sip_trunk

googleDialogflowSipTrunk.GoogleDialogflowSipTrunkTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowSipTrunk.GoogleDialogflowSipTrunkTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_dialogflow_sip_trunk#create GoogleDialogflowSipTrunk#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowSipTrunk.GoogleDialogflowSipTrunkTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_dialogflow_sip_trunk#delete GoogleDialogflowSipTrunk#delete}. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowSipTrunk.GoogleDialogflowSipTrunkTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_dialogflow_sip_trunk#update GoogleDialogflowSipTrunk#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google-beta.googleDialogflowSipTrunk.GoogleDialogflowSipTrunkTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_dialogflow_sip_trunk#create GoogleDialogflowSipTrunk#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google-beta.googleDialogflowSipTrunk.GoogleDialogflowSipTrunkTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_dialogflow_sip_trunk#delete GoogleDialogflowSipTrunk#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google-beta.googleDialogflowSipTrunk.GoogleDialogflowSipTrunkTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_dialogflow_sip_trunk#update GoogleDialogflowSipTrunk#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleDialogflowSipTrunkConnectionsErrorDetailsList <a name="GoogleDialogflowSipTrunkConnectionsErrorDetailsList" id="@cdktn/provider-google-beta.googleDialogflowSipTrunk.GoogleDialogflowSipTrunkConnectionsErrorDetailsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDialogflowSipTrunk.GoogleDialogflowSipTrunkConnectionsErrorDetailsList.Initializer"></a>

```python
from cdktn_provider_google_beta import google_dialogflow_sip_trunk

googleDialogflowSipTrunk.GoogleDialogflowSipTrunkConnectionsErrorDetailsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowSipTrunk.GoogleDialogflowSipTrunkConnectionsErrorDetailsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowSipTrunk.GoogleDialogflowSipTrunkConnectionsErrorDetailsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowSipTrunk.GoogleDialogflowSipTrunkConnectionsErrorDetailsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleDialogflowSipTrunk.GoogleDialogflowSipTrunkConnectionsErrorDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDialogflowSipTrunk.GoogleDialogflowSipTrunkConnectionsErrorDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google-beta.googleDialogflowSipTrunk.GoogleDialogflowSipTrunkConnectionsErrorDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowSipTrunk.GoogleDialogflowSipTrunkConnectionsErrorDetailsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowSipTrunk.GoogleDialogflowSipTrunkConnectionsErrorDetailsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowSipTrunk.GoogleDialogflowSipTrunkConnectionsErrorDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowSipTrunk.GoogleDialogflowSipTrunkConnectionsErrorDetailsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowSipTrunk.GoogleDialogflowSipTrunkConnectionsErrorDetailsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google-beta.googleDialogflowSipTrunk.GoogleDialogflowSipTrunkConnectionsErrorDetailsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google-beta.googleDialogflowSipTrunk.GoogleDialogflowSipTrunkConnectionsErrorDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleDialogflowSipTrunk.GoogleDialogflowSipTrunkConnectionsErrorDetailsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleDialogflowSipTrunk.GoogleDialogflowSipTrunkConnectionsErrorDetailsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDialogflowSipTrunk.GoogleDialogflowSipTrunkConnectionsErrorDetailsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleDialogflowSipTrunk.GoogleDialogflowSipTrunkConnectionsErrorDetailsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleDialogflowSipTrunk.GoogleDialogflowSipTrunkConnectionsErrorDetailsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleDialogflowSipTrunkConnectionsErrorDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleDialogflowSipTrunk.GoogleDialogflowSipTrunkConnectionsErrorDetailsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowSipTrunk.GoogleDialogflowSipTrunkConnectionsErrorDetailsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowSipTrunk.GoogleDialogflowSipTrunkConnectionsErrorDetailsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleDialogflowSipTrunk.GoogleDialogflowSipTrunkConnectionsErrorDetailsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDialogflowSipTrunk.GoogleDialogflowSipTrunkConnectionsErrorDetailsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### GoogleDialogflowSipTrunkConnectionsErrorDetailsOutputReference <a name="GoogleDialogflowSipTrunkConnectionsErrorDetailsOutputReference" id="@cdktn/provider-google-beta.googleDialogflowSipTrunk.GoogleDialogflowSipTrunkConnectionsErrorDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDialogflowSipTrunk.GoogleDialogflowSipTrunkConnectionsErrorDetailsOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_dialogflow_sip_trunk

googleDialogflowSipTrunk.GoogleDialogflowSipTrunkConnectionsErrorDetailsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowSipTrunk.GoogleDialogflowSipTrunkConnectionsErrorDetailsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowSipTrunk.GoogleDialogflowSipTrunkConnectionsErrorDetailsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowSipTrunk.GoogleDialogflowSipTrunkConnectionsErrorDetailsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowSipTrunk.GoogleDialogflowSipTrunkConnectionsErrorDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleDialogflowSipTrunk.GoogleDialogflowSipTrunkConnectionsErrorDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDialogflowSipTrunk.GoogleDialogflowSipTrunkConnectionsErrorDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google-beta.googleDialogflowSipTrunk.GoogleDialogflowSipTrunkConnectionsErrorDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google-beta.googleDialogflowSipTrunk.GoogleDialogflowSipTrunkConnectionsErrorDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowSipTrunk.GoogleDialogflowSipTrunkConnectionsErrorDetailsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowSipTrunk.GoogleDialogflowSipTrunkConnectionsErrorDetailsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowSipTrunk.GoogleDialogflowSipTrunkConnectionsErrorDetailsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowSipTrunk.GoogleDialogflowSipTrunkConnectionsErrorDetailsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowSipTrunk.GoogleDialogflowSipTrunkConnectionsErrorDetailsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowSipTrunk.GoogleDialogflowSipTrunkConnectionsErrorDetailsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowSipTrunk.GoogleDialogflowSipTrunkConnectionsErrorDetailsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowSipTrunk.GoogleDialogflowSipTrunkConnectionsErrorDetailsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowSipTrunk.GoogleDialogflowSipTrunkConnectionsErrorDetailsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowSipTrunk.GoogleDialogflowSipTrunkConnectionsErrorDetailsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowSipTrunk.GoogleDialogflowSipTrunkConnectionsErrorDetailsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowSipTrunk.GoogleDialogflowSipTrunkConnectionsErrorDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowSipTrunk.GoogleDialogflowSipTrunkConnectionsErrorDetailsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleDialogflowSipTrunk.GoogleDialogflowSipTrunkConnectionsErrorDetailsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleDialogflowSipTrunk.GoogleDialogflowSipTrunkConnectionsErrorDetailsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDialogflowSipTrunk.GoogleDialogflowSipTrunkConnectionsErrorDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleDialogflowSipTrunk.GoogleDialogflowSipTrunkConnectionsErrorDetailsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDialogflowSipTrunk.GoogleDialogflowSipTrunkConnectionsErrorDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleDialogflowSipTrunk.GoogleDialogflowSipTrunkConnectionsErrorDetailsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDialogflowSipTrunk.GoogleDialogflowSipTrunkConnectionsErrorDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleDialogflowSipTrunk.GoogleDialogflowSipTrunkConnectionsErrorDetailsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDialogflowSipTrunk.GoogleDialogflowSipTrunkConnectionsErrorDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleDialogflowSipTrunk.GoogleDialogflowSipTrunkConnectionsErrorDetailsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDialogflowSipTrunk.GoogleDialogflowSipTrunkConnectionsErrorDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleDialogflowSipTrunk.GoogleDialogflowSipTrunkConnectionsErrorDetailsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDialogflowSipTrunk.GoogleDialogflowSipTrunkConnectionsErrorDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleDialogflowSipTrunk.GoogleDialogflowSipTrunkConnectionsErrorDetailsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDialogflowSipTrunk.GoogleDialogflowSipTrunkConnectionsErrorDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleDialogflowSipTrunk.GoogleDialogflowSipTrunkConnectionsErrorDetailsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDialogflowSipTrunk.GoogleDialogflowSipTrunkConnectionsErrorDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleDialogflowSipTrunk.GoogleDialogflowSipTrunkConnectionsErrorDetailsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDialogflowSipTrunk.GoogleDialogflowSipTrunkConnectionsErrorDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleDialogflowSipTrunk.GoogleDialogflowSipTrunkConnectionsErrorDetailsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleDialogflowSipTrunk.GoogleDialogflowSipTrunkConnectionsErrorDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleDialogflowSipTrunk.GoogleDialogflowSipTrunkConnectionsErrorDetailsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDialogflowSipTrunk.GoogleDialogflowSipTrunkConnectionsErrorDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleDialogflowSipTrunk.GoogleDialogflowSipTrunkConnectionsErrorDetailsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowSipTrunk.GoogleDialogflowSipTrunkConnectionsErrorDetailsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowSipTrunk.GoogleDialogflowSipTrunkConnectionsErrorDetailsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowSipTrunk.GoogleDialogflowSipTrunkConnectionsErrorDetailsOutputReference.property.code">code</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowSipTrunk.GoogleDialogflowSipTrunkConnectionsErrorDetailsOutputReference.property.message">message</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowSipTrunk.GoogleDialogflowSipTrunkConnectionsErrorDetailsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDialogflowSipTrunk.GoogleDialogflowSipTrunkConnectionsErrorDetails">GoogleDialogflowSipTrunkConnectionsErrorDetails</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleDialogflowSipTrunk.GoogleDialogflowSipTrunkConnectionsErrorDetailsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDialogflowSipTrunk.GoogleDialogflowSipTrunkConnectionsErrorDetailsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `code`<sup>Required</sup> <a name="code" id="@cdktn/provider-google-beta.googleDialogflowSipTrunk.GoogleDialogflowSipTrunkConnectionsErrorDetailsOutputReference.property.code"></a>

```python
code: str
```

- *Type:* str

---

##### `message`<sup>Required</sup> <a name="message" id="@cdktn/provider-google-beta.googleDialogflowSipTrunk.GoogleDialogflowSipTrunkConnectionsErrorDetailsOutputReference.property.message"></a>

```python
message: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleDialogflowSipTrunk.GoogleDialogflowSipTrunkConnectionsErrorDetailsOutputReference.property.internalValue"></a>

```python
internal_value: GoogleDialogflowSipTrunkConnectionsErrorDetails
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowSipTrunk.GoogleDialogflowSipTrunkConnectionsErrorDetails">GoogleDialogflowSipTrunkConnectionsErrorDetails</a>

---


### GoogleDialogflowSipTrunkConnectionsList <a name="GoogleDialogflowSipTrunkConnectionsList" id="@cdktn/provider-google-beta.googleDialogflowSipTrunk.GoogleDialogflowSipTrunkConnectionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDialogflowSipTrunk.GoogleDialogflowSipTrunkConnectionsList.Initializer"></a>

```python
from cdktn_provider_google_beta import google_dialogflow_sip_trunk

googleDialogflowSipTrunk.GoogleDialogflowSipTrunkConnectionsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowSipTrunk.GoogleDialogflowSipTrunkConnectionsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowSipTrunk.GoogleDialogflowSipTrunkConnectionsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowSipTrunk.GoogleDialogflowSipTrunkConnectionsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleDialogflowSipTrunk.GoogleDialogflowSipTrunkConnectionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDialogflowSipTrunk.GoogleDialogflowSipTrunkConnectionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google-beta.googleDialogflowSipTrunk.GoogleDialogflowSipTrunkConnectionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowSipTrunk.GoogleDialogflowSipTrunkConnectionsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowSipTrunk.GoogleDialogflowSipTrunkConnectionsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowSipTrunk.GoogleDialogflowSipTrunkConnectionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowSipTrunk.GoogleDialogflowSipTrunkConnectionsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowSipTrunk.GoogleDialogflowSipTrunkConnectionsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google-beta.googleDialogflowSipTrunk.GoogleDialogflowSipTrunkConnectionsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google-beta.googleDialogflowSipTrunk.GoogleDialogflowSipTrunkConnectionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleDialogflowSipTrunk.GoogleDialogflowSipTrunkConnectionsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleDialogflowSipTrunk.GoogleDialogflowSipTrunkConnectionsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDialogflowSipTrunk.GoogleDialogflowSipTrunkConnectionsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleDialogflowSipTrunk.GoogleDialogflowSipTrunkConnectionsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleDialogflowSipTrunk.GoogleDialogflowSipTrunkConnectionsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleDialogflowSipTrunkConnectionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleDialogflowSipTrunk.GoogleDialogflowSipTrunkConnectionsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowSipTrunk.GoogleDialogflowSipTrunkConnectionsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowSipTrunk.GoogleDialogflowSipTrunkConnectionsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleDialogflowSipTrunk.GoogleDialogflowSipTrunkConnectionsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDialogflowSipTrunk.GoogleDialogflowSipTrunkConnectionsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### GoogleDialogflowSipTrunkConnectionsOutputReference <a name="GoogleDialogflowSipTrunkConnectionsOutputReference" id="@cdktn/provider-google-beta.googleDialogflowSipTrunk.GoogleDialogflowSipTrunkConnectionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDialogflowSipTrunk.GoogleDialogflowSipTrunkConnectionsOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_dialogflow_sip_trunk

googleDialogflowSipTrunk.GoogleDialogflowSipTrunkConnectionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowSipTrunk.GoogleDialogflowSipTrunkConnectionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowSipTrunk.GoogleDialogflowSipTrunkConnectionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowSipTrunk.GoogleDialogflowSipTrunkConnectionsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowSipTrunk.GoogleDialogflowSipTrunkConnectionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleDialogflowSipTrunk.GoogleDialogflowSipTrunkConnectionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDialogflowSipTrunk.GoogleDialogflowSipTrunkConnectionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google-beta.googleDialogflowSipTrunk.GoogleDialogflowSipTrunkConnectionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google-beta.googleDialogflowSipTrunk.GoogleDialogflowSipTrunkConnectionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowSipTrunk.GoogleDialogflowSipTrunkConnectionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowSipTrunk.GoogleDialogflowSipTrunkConnectionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowSipTrunk.GoogleDialogflowSipTrunkConnectionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowSipTrunk.GoogleDialogflowSipTrunkConnectionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowSipTrunk.GoogleDialogflowSipTrunkConnectionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowSipTrunk.GoogleDialogflowSipTrunkConnectionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowSipTrunk.GoogleDialogflowSipTrunkConnectionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowSipTrunk.GoogleDialogflowSipTrunkConnectionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowSipTrunk.GoogleDialogflowSipTrunkConnectionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowSipTrunk.GoogleDialogflowSipTrunkConnectionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowSipTrunk.GoogleDialogflowSipTrunkConnectionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowSipTrunk.GoogleDialogflowSipTrunkConnectionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowSipTrunk.GoogleDialogflowSipTrunkConnectionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleDialogflowSipTrunk.GoogleDialogflowSipTrunkConnectionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleDialogflowSipTrunk.GoogleDialogflowSipTrunkConnectionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDialogflowSipTrunk.GoogleDialogflowSipTrunkConnectionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleDialogflowSipTrunk.GoogleDialogflowSipTrunkConnectionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDialogflowSipTrunk.GoogleDialogflowSipTrunkConnectionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleDialogflowSipTrunk.GoogleDialogflowSipTrunkConnectionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDialogflowSipTrunk.GoogleDialogflowSipTrunkConnectionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleDialogflowSipTrunk.GoogleDialogflowSipTrunkConnectionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDialogflowSipTrunk.GoogleDialogflowSipTrunkConnectionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleDialogflowSipTrunk.GoogleDialogflowSipTrunkConnectionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDialogflowSipTrunk.GoogleDialogflowSipTrunkConnectionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleDialogflowSipTrunk.GoogleDialogflowSipTrunkConnectionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDialogflowSipTrunk.GoogleDialogflowSipTrunkConnectionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleDialogflowSipTrunk.GoogleDialogflowSipTrunkConnectionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDialogflowSipTrunk.GoogleDialogflowSipTrunkConnectionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleDialogflowSipTrunk.GoogleDialogflowSipTrunkConnectionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDialogflowSipTrunk.GoogleDialogflowSipTrunkConnectionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleDialogflowSipTrunk.GoogleDialogflowSipTrunkConnectionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDialogflowSipTrunk.GoogleDialogflowSipTrunkConnectionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleDialogflowSipTrunk.GoogleDialogflowSipTrunkConnectionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleDialogflowSipTrunk.GoogleDialogflowSipTrunkConnectionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleDialogflowSipTrunk.GoogleDialogflowSipTrunkConnectionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDialogflowSipTrunk.GoogleDialogflowSipTrunkConnectionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleDialogflowSipTrunk.GoogleDialogflowSipTrunkConnectionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowSipTrunk.GoogleDialogflowSipTrunkConnectionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowSipTrunk.GoogleDialogflowSipTrunkConnectionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowSipTrunk.GoogleDialogflowSipTrunkConnectionsOutputReference.property.connectionId">connection_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowSipTrunk.GoogleDialogflowSipTrunkConnectionsOutputReference.property.errorDetails">error_details</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDialogflowSipTrunk.GoogleDialogflowSipTrunkConnectionsErrorDetailsList">GoogleDialogflowSipTrunkConnectionsErrorDetailsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowSipTrunk.GoogleDialogflowSipTrunkConnectionsOutputReference.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowSipTrunk.GoogleDialogflowSipTrunkConnectionsOutputReference.property.updateTime">update_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowSipTrunk.GoogleDialogflowSipTrunkConnectionsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDialogflowSipTrunk.GoogleDialogflowSipTrunkConnections">GoogleDialogflowSipTrunkConnections</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleDialogflowSipTrunk.GoogleDialogflowSipTrunkConnectionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDialogflowSipTrunk.GoogleDialogflowSipTrunkConnectionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `connection_id`<sup>Required</sup> <a name="connection_id" id="@cdktn/provider-google-beta.googleDialogflowSipTrunk.GoogleDialogflowSipTrunkConnectionsOutputReference.property.connectionId"></a>

```python
connection_id: str
```

- *Type:* str

---

##### `error_details`<sup>Required</sup> <a name="error_details" id="@cdktn/provider-google-beta.googleDialogflowSipTrunk.GoogleDialogflowSipTrunkConnectionsOutputReference.property.errorDetails"></a>

```python
error_details: GoogleDialogflowSipTrunkConnectionsErrorDetailsList
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowSipTrunk.GoogleDialogflowSipTrunkConnectionsErrorDetailsList">GoogleDialogflowSipTrunkConnectionsErrorDetailsList</a>

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-google-beta.googleDialogflowSipTrunk.GoogleDialogflowSipTrunkConnectionsOutputReference.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `update_time`<sup>Required</sup> <a name="update_time" id="@cdktn/provider-google-beta.googleDialogflowSipTrunk.GoogleDialogflowSipTrunkConnectionsOutputReference.property.updateTime"></a>

```python
update_time: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleDialogflowSipTrunk.GoogleDialogflowSipTrunkConnectionsOutputReference.property.internalValue"></a>

```python
internal_value: GoogleDialogflowSipTrunkConnections
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowSipTrunk.GoogleDialogflowSipTrunkConnections">GoogleDialogflowSipTrunkConnections</a>

---


### GoogleDialogflowSipTrunkTimeoutsOutputReference <a name="GoogleDialogflowSipTrunkTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleDialogflowSipTrunk.GoogleDialogflowSipTrunkTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDialogflowSipTrunk.GoogleDialogflowSipTrunkTimeoutsOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_dialogflow_sip_trunk

googleDialogflowSipTrunk.GoogleDialogflowSipTrunkTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowSipTrunk.GoogleDialogflowSipTrunkTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowSipTrunk.GoogleDialogflowSipTrunkTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleDialogflowSipTrunk.GoogleDialogflowSipTrunkTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDialogflowSipTrunk.GoogleDialogflowSipTrunkTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowSipTrunk.GoogleDialogflowSipTrunkTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowSipTrunk.GoogleDialogflowSipTrunkTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowSipTrunk.GoogleDialogflowSipTrunkTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowSipTrunk.GoogleDialogflowSipTrunkTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowSipTrunk.GoogleDialogflowSipTrunkTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowSipTrunk.GoogleDialogflowSipTrunkTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowSipTrunk.GoogleDialogflowSipTrunkTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowSipTrunk.GoogleDialogflowSipTrunkTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowSipTrunk.GoogleDialogflowSipTrunkTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowSipTrunk.GoogleDialogflowSipTrunkTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowSipTrunk.GoogleDialogflowSipTrunkTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowSipTrunk.GoogleDialogflowSipTrunkTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowSipTrunk.GoogleDialogflowSipTrunkTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowSipTrunk.GoogleDialogflowSipTrunkTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowSipTrunk.GoogleDialogflowSipTrunkTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowSipTrunk.GoogleDialogflowSipTrunkTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleDialogflowSipTrunk.GoogleDialogflowSipTrunkTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleDialogflowSipTrunk.GoogleDialogflowSipTrunkTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDialogflowSipTrunk.GoogleDialogflowSipTrunkTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleDialogflowSipTrunk.GoogleDialogflowSipTrunkTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDialogflowSipTrunk.GoogleDialogflowSipTrunkTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleDialogflowSipTrunk.GoogleDialogflowSipTrunkTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDialogflowSipTrunk.GoogleDialogflowSipTrunkTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleDialogflowSipTrunk.GoogleDialogflowSipTrunkTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDialogflowSipTrunk.GoogleDialogflowSipTrunkTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleDialogflowSipTrunk.GoogleDialogflowSipTrunkTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDialogflowSipTrunk.GoogleDialogflowSipTrunkTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleDialogflowSipTrunk.GoogleDialogflowSipTrunkTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDialogflowSipTrunk.GoogleDialogflowSipTrunkTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleDialogflowSipTrunk.GoogleDialogflowSipTrunkTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDialogflowSipTrunk.GoogleDialogflowSipTrunkTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleDialogflowSipTrunk.GoogleDialogflowSipTrunkTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDialogflowSipTrunk.GoogleDialogflowSipTrunkTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleDialogflowSipTrunk.GoogleDialogflowSipTrunkTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDialogflowSipTrunk.GoogleDialogflowSipTrunkTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleDialogflowSipTrunk.GoogleDialogflowSipTrunkTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleDialogflowSipTrunk.GoogleDialogflowSipTrunkTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleDialogflowSipTrunk.GoogleDialogflowSipTrunkTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDialogflowSipTrunk.GoogleDialogflowSipTrunkTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleDialogflowSipTrunk.GoogleDialogflowSipTrunkTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktn/provider-google-beta.googleDialogflowSipTrunk.GoogleDialogflowSipTrunkTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktn/provider-google-beta.googleDialogflowSipTrunk.GoogleDialogflowSipTrunkTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktn/provider-google-beta.googleDialogflowSipTrunk.GoogleDialogflowSipTrunkTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowSipTrunk.GoogleDialogflowSipTrunkTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowSipTrunk.GoogleDialogflowSipTrunkTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowSipTrunk.GoogleDialogflowSipTrunkTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowSipTrunk.GoogleDialogflowSipTrunkTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowSipTrunk.GoogleDialogflowSipTrunkTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowSipTrunk.GoogleDialogflowSipTrunkTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowSipTrunk.GoogleDialogflowSipTrunkTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowSipTrunk.GoogleDialogflowSipTrunkTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowSipTrunk.GoogleDialogflowSipTrunkTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleDialogflowSipTrunk.GoogleDialogflowSipTrunkTimeouts">GoogleDialogflowSipTrunkTimeouts</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleDialogflowSipTrunk.GoogleDialogflowSipTrunkTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDialogflowSipTrunk.GoogleDialogflowSipTrunkTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktn/provider-google-beta.googleDialogflowSipTrunk.GoogleDialogflowSipTrunkTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktn/provider-google-beta.googleDialogflowSipTrunk.GoogleDialogflowSipTrunkTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktn/provider-google-beta.googleDialogflowSipTrunk.GoogleDialogflowSipTrunkTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google-beta.googleDialogflowSipTrunk.GoogleDialogflowSipTrunkTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google-beta.googleDialogflowSipTrunk.GoogleDialogflowSipTrunkTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google-beta.googleDialogflowSipTrunk.GoogleDialogflowSipTrunkTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleDialogflowSipTrunk.GoogleDialogflowSipTrunkTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | GoogleDialogflowSipTrunkTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleDialogflowSipTrunk.GoogleDialogflowSipTrunkTimeouts">GoogleDialogflowSipTrunkTimeouts</a>

---



