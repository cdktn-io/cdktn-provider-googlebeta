# `googleChronicleFindingsRefinement` Submodule <a name="`googleChronicleFindingsRefinement` Submodule" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinement"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleChronicleFindingsRefinement <a name="GoogleChronicleFindingsRefinement" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinement"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_chronicle_findings_refinement google_chronicle_findings_refinement}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinement.Initializer"></a>

```python
from cdktn_provider_google_beta import google_chronicle_findings_refinement

googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinement(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  instance: str,
  location: str,
  display_name: str = None,
  id: str = None,
  outcome_filters: IResolvable | typing.List[GoogleChronicleFindingsRefinementOutcomeFilters] = None,
  project: str = None,
  query: str = None,
  timeouts: GoogleChronicleFindingsRefinementTimeouts = None,
  type: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinement.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinement.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinement.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinement.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinement.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinement.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinement.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinement.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinement.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinement.Initializer.parameter.instance">instance</a></code> | <code>str</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinement.Initializer.parameter.location">location</a></code> | <code>str</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinement.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | Display name of the findings refinement. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinement.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_chronicle_findings_refinement#id GoogleChronicleFindingsRefinement#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinement.Initializer.parameter.outcomeFilters">outcome_filters</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinementOutcomeFilters">GoogleChronicleFindingsRefinementOutcomeFilters</a>]</code> | outcome_filters block. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinement.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_chronicle_findings_refinement#project GoogleChronicleFindingsRefinement#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinement.Initializer.parameter.query">query</a></code> | <code>str</code> | The query for the findings refinement. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinement.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinementTimeouts">GoogleChronicleFindingsRefinementTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinement.Initializer.parameter.type">type</a></code> | <code>str</code> | DETECTION_EXCLUSION is the only supported type of findings refinement. Possible values: DETECTION_EXCLUSION. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinement.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinement.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinement.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinement.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinement.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinement.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinement.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinement.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinement.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `instance`<sup>Required</sup> <a name="instance" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinement.Initializer.parameter.instance"></a>

- *Type:* str

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_chronicle_findings_refinement#instance GoogleChronicleFindingsRefinement#instance}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinement.Initializer.parameter.location"></a>

- *Type:* str

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_chronicle_findings_refinement#location GoogleChronicleFindingsRefinement#location}

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinement.Initializer.parameter.displayName"></a>

- *Type:* str

Display name of the findings refinement.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_chronicle_findings_refinement#display_name GoogleChronicleFindingsRefinement#display_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinement.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_chronicle_findings_refinement#id GoogleChronicleFindingsRefinement#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `outcome_filters`<sup>Optional</sup> <a name="outcome_filters" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinement.Initializer.parameter.outcomeFilters"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinementOutcomeFilters">GoogleChronicleFindingsRefinementOutcomeFilters</a>]

outcome_filters block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_chronicle_findings_refinement#outcome_filters GoogleChronicleFindingsRefinement#outcome_filters}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinement.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_chronicle_findings_refinement#project GoogleChronicleFindingsRefinement#project}.

---

##### `query`<sup>Optional</sup> <a name="query" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinement.Initializer.parameter.query"></a>

- *Type:* str

The query for the findings refinement.

Works in conjunction with the type
field to determine the findings refinement behavior. The syntax of this
query is the same as a UDM search string. See the following for more
information:
https://cloud.google.com/chronicle/docs/investigation/udm-search

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_chronicle_findings_refinement#query GoogleChronicleFindingsRefinement#query}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinement.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinementTimeouts">GoogleChronicleFindingsRefinementTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_chronicle_findings_refinement#timeouts GoogleChronicleFindingsRefinement#timeouts}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinement.Initializer.parameter.type"></a>

- *Type:* str

DETECTION_EXCLUSION is the only supported type of findings refinement. Possible values: DETECTION_EXCLUSION.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_chronicle_findings_refinement#type GoogleChronicleFindingsRefinement#type}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinement.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinement.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinement.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinement.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinement.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinement.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinement.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinement.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinement.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinement.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinement.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinement.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinement.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinement.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinement.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinement.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinement.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinement.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinement.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinement.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinement.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinement.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinement.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinement.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinement.putOutcomeFilters">put_outcome_filters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinement.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinement.resetDisplayName">reset_display_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinement.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinement.resetOutcomeFilters">reset_outcome_filters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinement.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinement.resetQuery">reset_query</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinement.resetTimeouts">reset_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinement.resetType">reset_type</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinement.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinement.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinement.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinement.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinement.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinement.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinement.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinement.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinement.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinement.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinement.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinement.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinement.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinement.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinement.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinement.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinement.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinement.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinement.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinement.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinement.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinement.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinement.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinement.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinement.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinement.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinement.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinement.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinement.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinement.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinement.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinement.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinement.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinement.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinement.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinement.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinement.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinement.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinement.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinement.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinement.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinement.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinement.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinement.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinement.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_outcome_filters` <a name="put_outcome_filters" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinement.putOutcomeFilters"></a>

```python
def put_outcome_filters(
  value: IResolvable | typing.List[GoogleChronicleFindingsRefinementOutcomeFilters]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinement.putOutcomeFilters.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinementOutcomeFilters">GoogleChronicleFindingsRefinementOutcomeFilters</a>]

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinement.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinement.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_chronicle_findings_refinement#create GoogleChronicleFindingsRefinement#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinement.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_chronicle_findings_refinement#delete GoogleChronicleFindingsRefinement#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinement.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_chronicle_findings_refinement#update GoogleChronicleFindingsRefinement#update}.

---

##### `reset_display_name` <a name="reset_display_name" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinement.resetDisplayName"></a>

```python
def reset_display_name() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinement.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_outcome_filters` <a name="reset_outcome_filters" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinement.resetOutcomeFilters"></a>

```python
def reset_outcome_filters() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinement.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_query` <a name="reset_query" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinement.resetQuery"></a>

```python
def reset_query() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinement.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

##### `reset_type` <a name="reset_type" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinement.resetType"></a>

```python
def reset_type() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinement.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinement.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinement.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinement.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a GoogleChronicleFindingsRefinement resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinement.isConstruct"></a>

```python
from cdktn_provider_google_beta import google_chronicle_findings_refinement

googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinement.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinement.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinement.isTerraformElement"></a>

```python
from cdktn_provider_google_beta import google_chronicle_findings_refinement

googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinement.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinement.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinement.isTerraformResource"></a>

```python
from cdktn_provider_google_beta import google_chronicle_findings_refinement

googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinement.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinement.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinement.generateConfigForImport"></a>

```python
from cdktn_provider_google_beta import google_chronicle_findings_refinement

googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinement.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a GoogleChronicleFindingsRefinement resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinement.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinement.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the GoogleChronicleFindingsRefinement to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinement.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing GoogleChronicleFindingsRefinement that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_chronicle_findings_refinement#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinement.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the GoogleChronicleFindingsRefinement to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinement.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinement.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinement.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinement.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinement.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinement.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinement.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinement.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinement.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinement.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinement.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinement.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinement.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinement.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinement.property.createTime">create_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinement.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinement.property.outcomeFilters">outcome_filters</a></code> | <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinementOutcomeFiltersList">GoogleChronicleFindingsRefinementOutcomeFiltersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinement.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinementTimeoutsOutputReference">GoogleChronicleFindingsRefinementTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinement.property.updateTime">update_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinement.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinement.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinement.property.instanceInput">instance_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinement.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinement.property.outcomeFiltersInput">outcome_filters_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinementOutcomeFilters">GoogleChronicleFindingsRefinementOutcomeFilters</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinement.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinement.property.queryInput">query_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinement.property.timeoutsInput">timeouts_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinementTimeouts">GoogleChronicleFindingsRefinementTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinement.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinement.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinement.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinement.property.instance">instance</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinement.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinement.property.project">project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinement.property.query">query</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinement.property.type">type</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinement.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinement.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinement.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinement.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinement.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinement.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinement.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinement.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinement.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinement.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinement.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinement.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinement.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinement.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `create_time`<sup>Required</sup> <a name="create_time" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinement.property.createTime"></a>

```python
create_time: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinement.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `outcome_filters`<sup>Required</sup> <a name="outcome_filters" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinement.property.outcomeFilters"></a>

```python
outcome_filters: GoogleChronicleFindingsRefinementOutcomeFiltersList
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinementOutcomeFiltersList">GoogleChronicleFindingsRefinementOutcomeFiltersList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinement.property.timeouts"></a>

```python
timeouts: GoogleChronicleFindingsRefinementTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinementTimeoutsOutputReference">GoogleChronicleFindingsRefinementTimeoutsOutputReference</a>

---

##### `update_time`<sup>Required</sup> <a name="update_time" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinement.property.updateTime"></a>

```python
update_time: str
```

- *Type:* str

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinement.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinement.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `instance_input`<sup>Optional</sup> <a name="instance_input" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinement.property.instanceInput"></a>

```python
instance_input: str
```

- *Type:* str

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinement.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `outcome_filters_input`<sup>Optional</sup> <a name="outcome_filters_input" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinement.property.outcomeFiltersInput"></a>

```python
outcome_filters_input: IResolvable | typing.List[GoogleChronicleFindingsRefinementOutcomeFilters]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinementOutcomeFilters">GoogleChronicleFindingsRefinementOutcomeFilters</a>]

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinement.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `query_input`<sup>Optional</sup> <a name="query_input" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinement.property.queryInput"></a>

```python
query_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinement.property.timeoutsInput"></a>

```python
timeouts_input: IResolvable | GoogleChronicleFindingsRefinementTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinementTimeouts">GoogleChronicleFindingsRefinementTimeouts</a>

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinement.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinement.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinement.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `instance`<sup>Required</sup> <a name="instance" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinement.property.instance"></a>

```python
instance: str
```

- *Type:* str

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinement.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinement.property.project"></a>

```python
project: str
```

- *Type:* str

---

##### `query`<sup>Required</sup> <a name="query" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinement.property.query"></a>

```python
query: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinement.property.type"></a>

```python
type: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinement.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinement.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleChronicleFindingsRefinementConfig <a name="GoogleChronicleFindingsRefinementConfig" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinementConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinementConfig.Initializer"></a>

```python
from cdktn_provider_google_beta import google_chronicle_findings_refinement

googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinementConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  instance: str,
  location: str,
  display_name: str = None,
  id: str = None,
  outcome_filters: IResolvable | typing.List[GoogleChronicleFindingsRefinementOutcomeFilters] = None,
  project: str = None,
  query: str = None,
  timeouts: GoogleChronicleFindingsRefinementTimeouts = None,
  type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinementConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinementConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinementConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinementConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinementConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinementConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinementConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinementConfig.property.instance">instance</a></code> | <code>str</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinementConfig.property.location">location</a></code> | <code>str</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinementConfig.property.displayName">display_name</a></code> | <code>str</code> | Display name of the findings refinement. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinementConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_chronicle_findings_refinement#id GoogleChronicleFindingsRefinement#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinementConfig.property.outcomeFilters">outcome_filters</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinementOutcomeFilters">GoogleChronicleFindingsRefinementOutcomeFilters</a>]</code> | outcome_filters block. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinementConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_chronicle_findings_refinement#project GoogleChronicleFindingsRefinement#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinementConfig.property.query">query</a></code> | <code>str</code> | The query for the findings refinement. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinementConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinementTimeouts">GoogleChronicleFindingsRefinementTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinementConfig.property.type">type</a></code> | <code>str</code> | DETECTION_EXCLUSION is the only supported type of findings refinement. Possible values: DETECTION_EXCLUSION. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinementConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinementConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinementConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinementConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinementConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinementConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinementConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `instance`<sup>Required</sup> <a name="instance" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinementConfig.property.instance"></a>

```python
instance: str
```

- *Type:* str

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_chronicle_findings_refinement#instance GoogleChronicleFindingsRefinement#instance}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinementConfig.property.location"></a>

```python
location: str
```

- *Type:* str

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_chronicle_findings_refinement#location GoogleChronicleFindingsRefinement#location}

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinementConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

Display name of the findings refinement.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_chronicle_findings_refinement#display_name GoogleChronicleFindingsRefinement#display_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinementConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_chronicle_findings_refinement#id GoogleChronicleFindingsRefinement#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `outcome_filters`<sup>Optional</sup> <a name="outcome_filters" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinementConfig.property.outcomeFilters"></a>

```python
outcome_filters: IResolvable | typing.List[GoogleChronicleFindingsRefinementOutcomeFilters]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinementOutcomeFilters">GoogleChronicleFindingsRefinementOutcomeFilters</a>]

outcome_filters block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_chronicle_findings_refinement#outcome_filters GoogleChronicleFindingsRefinement#outcome_filters}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinementConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_chronicle_findings_refinement#project GoogleChronicleFindingsRefinement#project}.

---

##### `query`<sup>Optional</sup> <a name="query" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinementConfig.property.query"></a>

```python
query: str
```

- *Type:* str

The query for the findings refinement.

Works in conjunction with the type
field to determine the findings refinement behavior. The syntax of this
query is the same as a UDM search string. See the following for more
information:
https://cloud.google.com/chronicle/docs/investigation/udm-search

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_chronicle_findings_refinement#query GoogleChronicleFindingsRefinement#query}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinementConfig.property.timeouts"></a>

```python
timeouts: GoogleChronicleFindingsRefinementTimeouts
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinementTimeouts">GoogleChronicleFindingsRefinementTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_chronicle_findings_refinement#timeouts GoogleChronicleFindingsRefinement#timeouts}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinementConfig.property.type"></a>

```python
type: str
```

- *Type:* str

DETECTION_EXCLUSION is the only supported type of findings refinement. Possible values: DETECTION_EXCLUSION.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_chronicle_findings_refinement#type GoogleChronicleFindingsRefinement#type}

---

### GoogleChronicleFindingsRefinementOutcomeFilters <a name="GoogleChronicleFindingsRefinementOutcomeFilters" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinementOutcomeFilters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinementOutcomeFilters.Initializer"></a>

```python
from cdktn_provider_google_beta import google_chronicle_findings_refinement

googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinementOutcomeFilters(
  outcome_filter_operator: str,
  outcome_value: str,
  outcome_variable: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinementOutcomeFilters.property.outcomeFilterOperator">outcome_filter_operator</a></code> | <code>str</code> | The operator to be applied to the outcome variable. Possible values: EQUAL CONTAINS MATCHES_REGEX MATCHES_CIDR. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinementOutcomeFilters.property.outcomeValue">outcome_value</a></code> | <code>str</code> | The value of the outcome variable to match. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinementOutcomeFilters.property.outcomeVariable">outcome_variable</a></code> | <code>str</code> | The outcome variable name. |

---

##### `outcome_filter_operator`<sup>Required</sup> <a name="outcome_filter_operator" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinementOutcomeFilters.property.outcomeFilterOperator"></a>

```python
outcome_filter_operator: str
```

- *Type:* str

The operator to be applied to the outcome variable. Possible values: EQUAL CONTAINS MATCHES_REGEX MATCHES_CIDR.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_chronicle_findings_refinement#outcome_filter_operator GoogleChronicleFindingsRefinement#outcome_filter_operator}

---

##### `outcome_value`<sup>Required</sup> <a name="outcome_value" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinementOutcomeFilters.property.outcomeValue"></a>

```python
outcome_value: str
```

- *Type:* str

The value of the outcome variable to match.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_chronicle_findings_refinement#outcome_value GoogleChronicleFindingsRefinement#outcome_value}

---

##### `outcome_variable`<sup>Required</sup> <a name="outcome_variable" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinementOutcomeFilters.property.outcomeVariable"></a>

```python
outcome_variable: str
```

- *Type:* str

The outcome variable name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_chronicle_findings_refinement#outcome_variable GoogleChronicleFindingsRefinement#outcome_variable}

---

### GoogleChronicleFindingsRefinementTimeouts <a name="GoogleChronicleFindingsRefinementTimeouts" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinementTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinementTimeouts.Initializer"></a>

```python
from cdktn_provider_google_beta import google_chronicle_findings_refinement

googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinementTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinementTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_chronicle_findings_refinement#create GoogleChronicleFindingsRefinement#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinementTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_chronicle_findings_refinement#delete GoogleChronicleFindingsRefinement#delete}. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinementTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_chronicle_findings_refinement#update GoogleChronicleFindingsRefinement#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinementTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_chronicle_findings_refinement#create GoogleChronicleFindingsRefinement#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinementTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_chronicle_findings_refinement#delete GoogleChronicleFindingsRefinement#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinementTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_chronicle_findings_refinement#update GoogleChronicleFindingsRefinement#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleChronicleFindingsRefinementOutcomeFiltersList <a name="GoogleChronicleFindingsRefinementOutcomeFiltersList" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinementOutcomeFiltersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinementOutcomeFiltersList.Initializer"></a>

```python
from cdktn_provider_google_beta import google_chronicle_findings_refinement

googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinementOutcomeFiltersList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinementOutcomeFiltersList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinementOutcomeFiltersList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinementOutcomeFiltersList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinementOutcomeFiltersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinementOutcomeFiltersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinementOutcomeFiltersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinementOutcomeFiltersList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinementOutcomeFiltersList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinementOutcomeFiltersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinementOutcomeFiltersList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinementOutcomeFiltersList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinementOutcomeFiltersList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinementOutcomeFiltersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinementOutcomeFiltersList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinementOutcomeFiltersList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinementOutcomeFiltersList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinementOutcomeFiltersList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinementOutcomeFiltersList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleChronicleFindingsRefinementOutcomeFiltersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinementOutcomeFiltersList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinementOutcomeFiltersList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinementOutcomeFiltersList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinementOutcomeFiltersList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinementOutcomeFilters">GoogleChronicleFindingsRefinementOutcomeFilters</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinementOutcomeFiltersList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinementOutcomeFiltersList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinementOutcomeFiltersList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[GoogleChronicleFindingsRefinementOutcomeFilters]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinementOutcomeFilters">GoogleChronicleFindingsRefinementOutcomeFilters</a>]

---


### GoogleChronicleFindingsRefinementOutcomeFiltersOutputReference <a name="GoogleChronicleFindingsRefinementOutcomeFiltersOutputReference" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinementOutcomeFiltersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinementOutcomeFiltersOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_chronicle_findings_refinement

googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinementOutcomeFiltersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinementOutcomeFiltersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinementOutcomeFiltersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinementOutcomeFiltersOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinementOutcomeFiltersOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinementOutcomeFiltersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinementOutcomeFiltersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinementOutcomeFiltersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinementOutcomeFiltersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinementOutcomeFiltersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinementOutcomeFiltersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinementOutcomeFiltersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinementOutcomeFiltersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinementOutcomeFiltersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinementOutcomeFiltersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinementOutcomeFiltersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinementOutcomeFiltersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinementOutcomeFiltersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinementOutcomeFiltersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinementOutcomeFiltersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinementOutcomeFiltersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinementOutcomeFiltersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinementOutcomeFiltersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinementOutcomeFiltersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinementOutcomeFiltersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinementOutcomeFiltersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinementOutcomeFiltersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinementOutcomeFiltersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinementOutcomeFiltersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinementOutcomeFiltersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinementOutcomeFiltersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinementOutcomeFiltersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinementOutcomeFiltersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinementOutcomeFiltersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinementOutcomeFiltersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinementOutcomeFiltersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinementOutcomeFiltersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinementOutcomeFiltersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinementOutcomeFiltersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinementOutcomeFiltersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinementOutcomeFiltersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinementOutcomeFiltersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinementOutcomeFiltersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinementOutcomeFiltersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinementOutcomeFiltersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinementOutcomeFiltersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinementOutcomeFiltersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinementOutcomeFiltersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinementOutcomeFiltersOutputReference.property.outcomeFilterOperatorInput">outcome_filter_operator_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinementOutcomeFiltersOutputReference.property.outcomeValueInput">outcome_value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinementOutcomeFiltersOutputReference.property.outcomeVariableInput">outcome_variable_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinementOutcomeFiltersOutputReference.property.outcomeFilterOperator">outcome_filter_operator</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinementOutcomeFiltersOutputReference.property.outcomeValue">outcome_value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinementOutcomeFiltersOutputReference.property.outcomeVariable">outcome_variable</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinementOutcomeFiltersOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinementOutcomeFilters">GoogleChronicleFindingsRefinementOutcomeFilters</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinementOutcomeFiltersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinementOutcomeFiltersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `outcome_filter_operator_input`<sup>Optional</sup> <a name="outcome_filter_operator_input" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinementOutcomeFiltersOutputReference.property.outcomeFilterOperatorInput"></a>

```python
outcome_filter_operator_input: str
```

- *Type:* str

---

##### `outcome_value_input`<sup>Optional</sup> <a name="outcome_value_input" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinementOutcomeFiltersOutputReference.property.outcomeValueInput"></a>

```python
outcome_value_input: str
```

- *Type:* str

---

##### `outcome_variable_input`<sup>Optional</sup> <a name="outcome_variable_input" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinementOutcomeFiltersOutputReference.property.outcomeVariableInput"></a>

```python
outcome_variable_input: str
```

- *Type:* str

---

##### `outcome_filter_operator`<sup>Required</sup> <a name="outcome_filter_operator" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinementOutcomeFiltersOutputReference.property.outcomeFilterOperator"></a>

```python
outcome_filter_operator: str
```

- *Type:* str

---

##### `outcome_value`<sup>Required</sup> <a name="outcome_value" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinementOutcomeFiltersOutputReference.property.outcomeValue"></a>

```python
outcome_value: str
```

- *Type:* str

---

##### `outcome_variable`<sup>Required</sup> <a name="outcome_variable" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinementOutcomeFiltersOutputReference.property.outcomeVariable"></a>

```python
outcome_variable: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinementOutcomeFiltersOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | GoogleChronicleFindingsRefinementOutcomeFilters
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinementOutcomeFilters">GoogleChronicleFindingsRefinementOutcomeFilters</a>

---


### GoogleChronicleFindingsRefinementTimeoutsOutputReference <a name="GoogleChronicleFindingsRefinementTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinementTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinementTimeoutsOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_chronicle_findings_refinement

googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinementTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinementTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinementTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinementTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinementTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinementTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinementTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinementTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinementTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinementTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinementTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinementTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinementTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinementTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinementTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinementTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinementTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinementTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinementTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinementTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinementTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinementTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinementTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinementTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinementTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinementTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinementTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinementTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinementTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinementTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinementTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinementTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinementTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinementTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinementTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinementTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinementTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinementTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinementTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinementTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinementTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinementTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinementTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinementTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinementTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinementTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinementTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinementTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinementTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinementTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinementTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinementTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinementTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinementTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinementTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinementTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinementTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinementTimeouts">GoogleChronicleFindingsRefinementTimeouts</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinementTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinementTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinementTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinementTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinementTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinementTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinementTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinementTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinementTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | GoogleChronicleFindingsRefinementTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinementTimeouts">GoogleChronicleFindingsRefinementTimeouts</a>

---



