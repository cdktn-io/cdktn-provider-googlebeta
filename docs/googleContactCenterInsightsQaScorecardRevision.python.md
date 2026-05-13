# `googleContactCenterInsightsQaScorecardRevision` Submodule <a name="`googleContactCenterInsightsQaScorecardRevision` Submodule" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleContactCenterInsightsQaScorecardRevision <a name="GoogleContactCenterInsightsQaScorecardRevision" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_contact_center_insights_qa_scorecard_revision google_contact_center_insights_qa_scorecard_revision}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.Initializer"></a>

```python
from cdktn_provider_google_beta import google_contact_center_insights_qa_scorecard_revision

googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision(
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
  qa_scorecard: str,
  id: str = None,
  project: str = None,
  qa_scorecard_revision_id: str = None,
  timeouts: GoogleContactCenterInsightsQaScorecardRevisionTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.Initializer.parameter.location">location</a></code> | <code>str</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.Initializer.parameter.qaScorecard">qa_scorecard</a></code> | <code>str</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_contact_center_insights_qa_scorecard_revision#id GoogleContactCenterInsightsQaScorecardRevision#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_contact_center_insights_qa_scorecard_revision#project GoogleContactCenterInsightsQaScorecardRevision#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.Initializer.parameter.qaScorecardRevisionId">qa_scorecard_revision_id</a></code> | <code>str</code> | A unique ID for the new QaScorecardRevision. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionTimeouts">GoogleContactCenterInsightsQaScorecardRevisionTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.Initializer.parameter.location"></a>

- *Type:* str

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_contact_center_insights_qa_scorecard_revision#location GoogleContactCenterInsightsQaScorecardRevision#location}

---

##### `qa_scorecard`<sup>Required</sup> <a name="qa_scorecard" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.Initializer.parameter.qaScorecard"></a>

- *Type:* str

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_contact_center_insights_qa_scorecard_revision#qa_scorecard GoogleContactCenterInsightsQaScorecardRevision#qa_scorecard}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_contact_center_insights_qa_scorecard_revision#id GoogleContactCenterInsightsQaScorecardRevision#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_contact_center_insights_qa_scorecard_revision#project GoogleContactCenterInsightsQaScorecardRevision#project}.

---

##### `qa_scorecard_revision_id`<sup>Optional</sup> <a name="qa_scorecard_revision_id" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.Initializer.parameter.qaScorecardRevisionId"></a>

- *Type:* str

A unique ID for the new QaScorecardRevision.

This ID will become the final
component of the QaScorecardRevision's resource name.
If no ID is specified this resource will get the latest revision on the given scorecard.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_contact_center_insights_qa_scorecard_revision#qa_scorecard_revision_id GoogleContactCenterInsightsQaScorecardRevision#qa_scorecard_revision_id}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionTimeouts">GoogleContactCenterInsightsQaScorecardRevisionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_contact_center_insights_qa_scorecard_revision#timeouts GoogleContactCenterInsightsQaScorecardRevision#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.resetQaScorecardRevisionId">reset_qa_scorecard_revision_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_contact_center_insights_qa_scorecard_revision#create GoogleContactCenterInsightsQaScorecardRevision#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_contact_center_insights_qa_scorecard_revision#delete GoogleContactCenterInsightsQaScorecardRevision#delete}.

---

##### `reset_id` <a name="reset_id" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_qa_scorecard_revision_id` <a name="reset_qa_scorecard_revision_id" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.resetQaScorecardRevisionId"></a>

```python
def reset_qa_scorecard_revision_id() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a GoogleContactCenterInsightsQaScorecardRevision resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.isConstruct"></a>

```python
from cdktn_provider_google_beta import google_contact_center_insights_qa_scorecard_revision

googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.isTerraformElement"></a>

```python
from cdktn_provider_google_beta import google_contact_center_insights_qa_scorecard_revision

googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.isTerraformResource"></a>

```python
from cdktn_provider_google_beta import google_contact_center_insights_qa_scorecard_revision

googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.generateConfigForImport"></a>

```python
from cdktn_provider_google_beta import google_contact_center_insights_qa_scorecard_revision

googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a GoogleContactCenterInsightsQaScorecardRevision resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the GoogleContactCenterInsightsQaScorecardRevision to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing GoogleContactCenterInsightsQaScorecardRevision that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_contact_center_insights_qa_scorecard_revision#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the GoogleContactCenterInsightsQaScorecardRevision to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.property.alternateIds">alternate_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.property.createTime">create_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.property.snapshot">snapshot</a></code> | <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionSnapshotList">GoogleContactCenterInsightsQaScorecardRevisionSnapshotList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionTimeoutsOutputReference">GoogleContactCenterInsightsQaScorecardRevisionTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.property.qaScorecardInput">qa_scorecard_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.property.qaScorecardRevisionIdInput">qa_scorecard_revision_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.property.timeoutsInput">timeouts_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionTimeouts">GoogleContactCenterInsightsQaScorecardRevisionTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.property.project">project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.property.qaScorecard">qa_scorecard</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.property.qaScorecardRevisionId">qa_scorecard_revision_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `alternate_ids`<sup>Required</sup> <a name="alternate_ids" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.property.alternateIds"></a>

```python
alternate_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `create_time`<sup>Required</sup> <a name="create_time" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.property.createTime"></a>

```python
create_time: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `snapshot`<sup>Required</sup> <a name="snapshot" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.property.snapshot"></a>

```python
snapshot: GoogleContactCenterInsightsQaScorecardRevisionSnapshotList
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionSnapshotList">GoogleContactCenterInsightsQaScorecardRevisionSnapshotList</a>

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.property.timeouts"></a>

```python
timeouts: GoogleContactCenterInsightsQaScorecardRevisionTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionTimeoutsOutputReference">GoogleContactCenterInsightsQaScorecardRevisionTimeoutsOutputReference</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `qa_scorecard_input`<sup>Optional</sup> <a name="qa_scorecard_input" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.property.qaScorecardInput"></a>

```python
qa_scorecard_input: str
```

- *Type:* str

---

##### `qa_scorecard_revision_id_input`<sup>Optional</sup> <a name="qa_scorecard_revision_id_input" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.property.qaScorecardRevisionIdInput"></a>

```python
qa_scorecard_revision_id_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.property.timeoutsInput"></a>

```python
timeouts_input: IResolvable | GoogleContactCenterInsightsQaScorecardRevisionTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionTimeouts">GoogleContactCenterInsightsQaScorecardRevisionTimeouts</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.property.project"></a>

```python
project: str
```

- *Type:* str

---

##### `qa_scorecard`<sup>Required</sup> <a name="qa_scorecard" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.property.qaScorecard"></a>

```python
qa_scorecard: str
```

- *Type:* str

---

##### `qa_scorecard_revision_id`<sup>Required</sup> <a name="qa_scorecard_revision_id" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.property.qaScorecardRevisionId"></a>

```python
qa_scorecard_revision_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleContactCenterInsightsQaScorecardRevisionConfig <a name="GoogleContactCenterInsightsQaScorecardRevisionConfig" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionConfig.Initializer"></a>

```python
from cdktn_provider_google_beta import google_contact_center_insights_qa_scorecard_revision

googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  location: str,
  qa_scorecard: str,
  id: str = None,
  project: str = None,
  qa_scorecard_revision_id: str = None,
  timeouts: GoogleContactCenterInsightsQaScorecardRevisionTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionConfig.property.location">location</a></code> | <code>str</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionConfig.property.qaScorecard">qa_scorecard</a></code> | <code>str</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_contact_center_insights_qa_scorecard_revision#id GoogleContactCenterInsightsQaScorecardRevision#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_contact_center_insights_qa_scorecard_revision#project GoogleContactCenterInsightsQaScorecardRevision#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionConfig.property.qaScorecardRevisionId">qa_scorecard_revision_id</a></code> | <code>str</code> | A unique ID for the new QaScorecardRevision. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionTimeouts">GoogleContactCenterInsightsQaScorecardRevisionTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionConfig.property.location"></a>

```python
location: str
```

- *Type:* str

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_contact_center_insights_qa_scorecard_revision#location GoogleContactCenterInsightsQaScorecardRevision#location}

---

##### `qa_scorecard`<sup>Required</sup> <a name="qa_scorecard" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionConfig.property.qaScorecard"></a>

```python
qa_scorecard: str
```

- *Type:* str

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_contact_center_insights_qa_scorecard_revision#qa_scorecard GoogleContactCenterInsightsQaScorecardRevision#qa_scorecard}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_contact_center_insights_qa_scorecard_revision#id GoogleContactCenterInsightsQaScorecardRevision#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_contact_center_insights_qa_scorecard_revision#project GoogleContactCenterInsightsQaScorecardRevision#project}.

---

##### `qa_scorecard_revision_id`<sup>Optional</sup> <a name="qa_scorecard_revision_id" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionConfig.property.qaScorecardRevisionId"></a>

```python
qa_scorecard_revision_id: str
```

- *Type:* str

A unique ID for the new QaScorecardRevision.

This ID will become the final
component of the QaScorecardRevision's resource name.
If no ID is specified this resource will get the latest revision on the given scorecard.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_contact_center_insights_qa_scorecard_revision#qa_scorecard_revision_id GoogleContactCenterInsightsQaScorecardRevision#qa_scorecard_revision_id}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionConfig.property.timeouts"></a>

```python
timeouts: GoogleContactCenterInsightsQaScorecardRevisionTimeouts
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionTimeouts">GoogleContactCenterInsightsQaScorecardRevisionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_contact_center_insights_qa_scorecard_revision#timeouts GoogleContactCenterInsightsQaScorecardRevision#timeouts}

---

### GoogleContactCenterInsightsQaScorecardRevisionSnapshot <a name="GoogleContactCenterInsightsQaScorecardRevisionSnapshot" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionSnapshot"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionSnapshot.Initializer"></a>

```python
from cdktn_provider_google_beta import google_contact_center_insights_qa_scorecard_revision

googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionSnapshot()
```


### GoogleContactCenterInsightsQaScorecardRevisionTimeouts <a name="GoogleContactCenterInsightsQaScorecardRevisionTimeouts" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionTimeouts.Initializer"></a>

```python
from cdktn_provider_google_beta import google_contact_center_insights_qa_scorecard_revision

googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionTimeouts(
  create: str = None,
  delete: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_contact_center_insights_qa_scorecard_revision#create GoogleContactCenterInsightsQaScorecardRevision#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_contact_center_insights_qa_scorecard_revision#delete GoogleContactCenterInsightsQaScorecardRevision#delete}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_contact_center_insights_qa_scorecard_revision#create GoogleContactCenterInsightsQaScorecardRevision#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_contact_center_insights_qa_scorecard_revision#delete GoogleContactCenterInsightsQaScorecardRevision#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleContactCenterInsightsQaScorecardRevisionSnapshotList <a name="GoogleContactCenterInsightsQaScorecardRevisionSnapshotList" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionSnapshotList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionSnapshotList.Initializer"></a>

```python
from cdktn_provider_google_beta import google_contact_center_insights_qa_scorecard_revision

googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionSnapshotList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionSnapshotList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionSnapshotList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionSnapshotList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionSnapshotList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionSnapshotList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionSnapshotList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionSnapshotList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionSnapshotList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionSnapshotList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionSnapshotList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionSnapshotList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionSnapshotList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionSnapshotList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionSnapshotList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionSnapshotList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionSnapshotList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionSnapshotList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionSnapshotList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleContactCenterInsightsQaScorecardRevisionSnapshotOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionSnapshotList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionSnapshotList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionSnapshotList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionSnapshotList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionSnapshotList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### GoogleContactCenterInsightsQaScorecardRevisionSnapshotOutputReference <a name="GoogleContactCenterInsightsQaScorecardRevisionSnapshotOutputReference" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionSnapshotOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionSnapshotOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_contact_center_insights_qa_scorecard_revision

googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionSnapshotOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionSnapshotOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionSnapshotOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionSnapshotOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionSnapshotOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionSnapshotOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionSnapshotOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionSnapshotOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionSnapshotOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionSnapshotOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionSnapshotOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionSnapshotOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionSnapshotOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionSnapshotOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionSnapshotOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionSnapshotOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionSnapshotOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionSnapshotOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionSnapshotOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionSnapshotOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionSnapshotOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionSnapshotOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionSnapshotOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionSnapshotOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionSnapshotOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionSnapshotOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionSnapshotOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionSnapshotOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionSnapshotOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionSnapshotOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionSnapshotOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionSnapshotOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionSnapshotOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionSnapshotOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionSnapshotOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionSnapshotOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionSnapshotOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionSnapshotOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionSnapshotOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionSnapshotOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionSnapshotOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionSnapshotOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionSnapshotOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionSnapshotOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionSnapshotOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionSnapshotOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionSnapshotOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionSnapshotOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionSnapshotOutputReference.property.createTime">create_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionSnapshotOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionSnapshotOutputReference.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionSnapshotOutputReference.property.isDefault">is_default</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionSnapshotOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionSnapshotOutputReference.property.source">source</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionSnapshotOutputReference.property.updateTime">update_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionSnapshotOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionSnapshot">GoogleContactCenterInsightsQaScorecardRevisionSnapshot</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionSnapshotOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionSnapshotOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_time`<sup>Required</sup> <a name="create_time" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionSnapshotOutputReference.property.createTime"></a>

```python
create_time: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionSnapshotOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionSnapshotOutputReference.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `is_default`<sup>Required</sup> <a name="is_default" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionSnapshotOutputReference.property.isDefault"></a>

```python
is_default: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionSnapshotOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionSnapshotOutputReference.property.source"></a>

```python
source: str
```

- *Type:* str

---

##### `update_time`<sup>Required</sup> <a name="update_time" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionSnapshotOutputReference.property.updateTime"></a>

```python
update_time: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionSnapshotOutputReference.property.internalValue"></a>

```python
internal_value: GoogleContactCenterInsightsQaScorecardRevisionSnapshot
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionSnapshot">GoogleContactCenterInsightsQaScorecardRevisionSnapshot</a>

---


### GoogleContactCenterInsightsQaScorecardRevisionTimeoutsOutputReference <a name="GoogleContactCenterInsightsQaScorecardRevisionTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionTimeoutsOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_contact_center_insights_qa_scorecard_revision

googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionTimeouts">GoogleContactCenterInsightsQaScorecardRevisionTimeouts</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | GoogleContactCenterInsightsQaScorecardRevisionTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionTimeouts">GoogleContactCenterInsightsQaScorecardRevisionTimeouts</a>

---



