# `googleChronicleFindingsRefinementDeployment` Submodule <a name="`googleChronicleFindingsRefinementDeployment` Submodule" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleChronicleFindingsRefinementDeployment <a name="GoogleChronicleFindingsRefinementDeployment" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeployment"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_chronicle_findings_refinement_deployment google_chronicle_findings_refinement_deployment}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeployment.Initializer"></a>

```python
from cdktn_provider_google_beta import google_chronicle_findings_refinement_deployment

googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeployment(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  findings_refinement: str,
  instance: str,
  location: str,
  archived: bool | IResolvable = None,
  detection_exclusion_application: GoogleChronicleFindingsRefinementDeploymentDetectionExclusionApplication = None,
  enabled: bool | IResolvable = None,
  id: str = None,
  project: str = None,
  timeouts: GoogleChronicleFindingsRefinementDeploymentTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeployment.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeployment.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeployment.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeployment.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeployment.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeployment.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeployment.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeployment.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeployment.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeployment.Initializer.parameter.findingsRefinement">findings_refinement</a></code> | <code>str</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeployment.Initializer.parameter.instance">instance</a></code> | <code>str</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeployment.Initializer.parameter.location">location</a></code> | <code>str</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeployment.Initializer.parameter.archived">archived</a></code> | <code>bool \| cdktn.IResolvable</code> | The archive state of the findings refinement deployment. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeployment.Initializer.parameter.detectionExclusionApplication">detection_exclusion_application</a></code> | <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeploymentDetectionExclusionApplication">GoogleChronicleFindingsRefinementDeploymentDetectionExclusionApplication</a></code> | detection_exclusion_application block. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeployment.Initializer.parameter.enabled">enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | Whether the findings refinement is currently deployed continuously against incoming findings. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeployment.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_chronicle_findings_refinement_deployment#id GoogleChronicleFindingsRefinementDeployment#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeployment.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_chronicle_findings_refinement_deployment#project GoogleChronicleFindingsRefinementDeployment#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeployment.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeploymentTimeouts">GoogleChronicleFindingsRefinementDeploymentTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeployment.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeployment.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeployment.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeployment.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeployment.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeployment.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeployment.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeployment.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeployment.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `findings_refinement`<sup>Required</sup> <a name="findings_refinement" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeployment.Initializer.parameter.findingsRefinement"></a>

- *Type:* str

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_chronicle_findings_refinement_deployment#findings_refinement GoogleChronicleFindingsRefinementDeployment#findings_refinement}

---

##### `instance`<sup>Required</sup> <a name="instance" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeployment.Initializer.parameter.instance"></a>

- *Type:* str

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_chronicle_findings_refinement_deployment#instance GoogleChronicleFindingsRefinementDeployment#instance}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeployment.Initializer.parameter.location"></a>

- *Type:* str

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_chronicle_findings_refinement_deployment#location GoogleChronicleFindingsRefinementDeployment#location}

---

##### `archived`<sup>Optional</sup> <a name="archived" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeployment.Initializer.parameter.archived"></a>

- *Type:* bool | cdktn.IResolvable

The archive state of the findings refinement deployment.

Cannot be set to true unless enabled is set to false.
If currently set to true, enabled cannot be updated to true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_chronicle_findings_refinement_deployment#archived GoogleChronicleFindingsRefinementDeployment#archived}

---

##### `detection_exclusion_application`<sup>Optional</sup> <a name="detection_exclusion_application" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeployment.Initializer.parameter.detectionExclusionApplication"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeploymentDetectionExclusionApplication">GoogleChronicleFindingsRefinementDeploymentDetectionExclusionApplication</a>

detection_exclusion_application block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_chronicle_findings_refinement_deployment#detection_exclusion_application GoogleChronicleFindingsRefinementDeployment#detection_exclusion_application}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeployment.Initializer.parameter.enabled"></a>

- *Type:* bool | cdktn.IResolvable

Whether the findings refinement is currently deployed continuously against incoming findings.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_chronicle_findings_refinement_deployment#enabled GoogleChronicleFindingsRefinementDeployment#enabled}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeployment.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_chronicle_findings_refinement_deployment#id GoogleChronicleFindingsRefinementDeployment#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeployment.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_chronicle_findings_refinement_deployment#project GoogleChronicleFindingsRefinementDeployment#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeployment.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeploymentTimeouts">GoogleChronicleFindingsRefinementDeploymentTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_chronicle_findings_refinement_deployment#timeouts GoogleChronicleFindingsRefinementDeployment#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeployment.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeployment.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeployment.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeployment.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeployment.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeployment.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeployment.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeployment.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeployment.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeployment.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeployment.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeployment.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeployment.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeployment.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeployment.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeployment.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeployment.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeployment.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeployment.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeployment.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeployment.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeployment.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeployment.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeployment.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeployment.putDetectionExclusionApplication">put_detection_exclusion_application</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeployment.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeployment.resetArchived">reset_archived</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeployment.resetDetectionExclusionApplication">reset_detection_exclusion_application</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeployment.resetEnabled">reset_enabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeployment.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeployment.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeployment.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeployment.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeployment.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeployment.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeployment.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeployment.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeployment.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeployment.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeployment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeployment.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeployment.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeployment.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeployment.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeployment.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeployment.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeployment.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeployment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeployment.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeployment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeployment.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeployment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeployment.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeployment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeployment.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeployment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeployment.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeployment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeployment.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeployment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeployment.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeployment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeployment.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeployment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeployment.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeployment.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeployment.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeployment.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeployment.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeployment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeployment.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeployment.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeployment.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeployment.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeployment.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeployment.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeployment.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_detection_exclusion_application` <a name="put_detection_exclusion_application" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeployment.putDetectionExclusionApplication"></a>

```python
def put_detection_exclusion_application(
  curated_rules: typing.List[str] = None,
  curated_rule_sets: typing.List[str] = None,
  rules: typing.List[str] = None
) -> None
```

###### `curated_rules`<sup>Optional</sup> <a name="curated_rules" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeployment.putDetectionExclusionApplication.parameter.curatedRules"></a>

- *Type:* typing.List[str]

The CuratedRules this detection exclusion applies to. Format: projects/{project}/locations/{location}/instances/{instance}/curatedRules/{rule}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_chronicle_findings_refinement_deployment#curated_rules GoogleChronicleFindingsRefinementDeployment#curated_rules}

---

###### `curated_rule_sets`<sup>Optional</sup> <a name="curated_rule_sets" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeployment.putDetectionExclusionApplication.parameter.curatedRuleSets"></a>

- *Type:* typing.List[str]

The CuratedRuleSets this detection exclusion applies to. Format: projects/{project}/locations/{location}/instances/{instance}/curatedRuleSetCategories/{category}/curatedRuleSets/{rule_set}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_chronicle_findings_refinement_deployment#curated_rule_sets GoogleChronicleFindingsRefinementDeployment#curated_rule_sets}

---

###### `rules`<sup>Optional</sup> <a name="rules" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeployment.putDetectionExclusionApplication.parameter.rules"></a>

- *Type:* typing.List[str]

The Rules this detection exclusion applies to. Format: projects/{project}/locations/{location}/instances/{instance}/rules/{rule}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_chronicle_findings_refinement_deployment#rules GoogleChronicleFindingsRefinementDeployment#rules}

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeployment.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeployment.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_chronicle_findings_refinement_deployment#create GoogleChronicleFindingsRefinementDeployment#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeployment.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_chronicle_findings_refinement_deployment#delete GoogleChronicleFindingsRefinementDeployment#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeployment.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_chronicle_findings_refinement_deployment#update GoogleChronicleFindingsRefinementDeployment#update}.

---

##### `reset_archived` <a name="reset_archived" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeployment.resetArchived"></a>

```python
def reset_archived() -> None
```

##### `reset_detection_exclusion_application` <a name="reset_detection_exclusion_application" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeployment.resetDetectionExclusionApplication"></a>

```python
def reset_detection_exclusion_application() -> None
```

##### `reset_enabled` <a name="reset_enabled" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeployment.resetEnabled"></a>

```python
def reset_enabled() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeployment.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeployment.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeployment.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeployment.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeployment.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeployment.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeployment.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a GoogleChronicleFindingsRefinementDeployment resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeployment.isConstruct"></a>

```python
from cdktn_provider_google_beta import google_chronicle_findings_refinement_deployment

googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeployment.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeployment.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeployment.isTerraformElement"></a>

```python
from cdktn_provider_google_beta import google_chronicle_findings_refinement_deployment

googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeployment.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeployment.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeployment.isTerraformResource"></a>

```python
from cdktn_provider_google_beta import google_chronicle_findings_refinement_deployment

googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeployment.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeployment.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeployment.generateConfigForImport"></a>

```python
from cdktn_provider_google_beta import google_chronicle_findings_refinement_deployment

googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeployment.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a GoogleChronicleFindingsRefinementDeployment resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeployment.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeployment.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the GoogleChronicleFindingsRefinementDeployment to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeployment.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing GoogleChronicleFindingsRefinementDeployment that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_chronicle_findings_refinement_deployment#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeployment.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the GoogleChronicleFindingsRefinementDeployment to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeployment.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeployment.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeployment.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeployment.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeployment.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeployment.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeployment.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeployment.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeployment.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeployment.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeployment.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeployment.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeployment.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeployment.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeployment.property.detectionExclusionApplication">detection_exclusion_application</a></code> | <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeploymentDetectionExclusionApplicationOutputReference">GoogleChronicleFindingsRefinementDeploymentDetectionExclusionApplicationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeployment.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeployment.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeploymentTimeoutsOutputReference">GoogleChronicleFindingsRefinementDeploymentTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeployment.property.updateTime">update_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeployment.property.archivedInput">archived_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeployment.property.detectionExclusionApplicationInput">detection_exclusion_application_input</a></code> | <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeploymentDetectionExclusionApplication">GoogleChronicleFindingsRefinementDeploymentDetectionExclusionApplication</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeployment.property.enabledInput">enabled_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeployment.property.findingsRefinementInput">findings_refinement_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeployment.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeployment.property.instanceInput">instance_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeployment.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeployment.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeployment.property.timeoutsInput">timeouts_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeploymentTimeouts">GoogleChronicleFindingsRefinementDeploymentTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeployment.property.archived">archived</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeployment.property.enabled">enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeployment.property.findingsRefinement">findings_refinement</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeployment.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeployment.property.instance">instance</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeployment.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeployment.property.project">project</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeployment.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeployment.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeployment.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeployment.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeployment.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeployment.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeployment.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeployment.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeployment.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeployment.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeployment.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeployment.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeployment.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeployment.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `detection_exclusion_application`<sup>Required</sup> <a name="detection_exclusion_application" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeployment.property.detectionExclusionApplication"></a>

```python
detection_exclusion_application: GoogleChronicleFindingsRefinementDeploymentDetectionExclusionApplicationOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeploymentDetectionExclusionApplicationOutputReference">GoogleChronicleFindingsRefinementDeploymentDetectionExclusionApplicationOutputReference</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeployment.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeployment.property.timeouts"></a>

```python
timeouts: GoogleChronicleFindingsRefinementDeploymentTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeploymentTimeoutsOutputReference">GoogleChronicleFindingsRefinementDeploymentTimeoutsOutputReference</a>

---

##### `update_time`<sup>Required</sup> <a name="update_time" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeployment.property.updateTime"></a>

```python
update_time: str
```

- *Type:* str

---

##### `archived_input`<sup>Optional</sup> <a name="archived_input" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeployment.property.archivedInput"></a>

```python
archived_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `detection_exclusion_application_input`<sup>Optional</sup> <a name="detection_exclusion_application_input" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeployment.property.detectionExclusionApplicationInput"></a>

```python
detection_exclusion_application_input: GoogleChronicleFindingsRefinementDeploymentDetectionExclusionApplication
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeploymentDetectionExclusionApplication">GoogleChronicleFindingsRefinementDeploymentDetectionExclusionApplication</a>

---

##### `enabled_input`<sup>Optional</sup> <a name="enabled_input" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeployment.property.enabledInput"></a>

```python
enabled_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `findings_refinement_input`<sup>Optional</sup> <a name="findings_refinement_input" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeployment.property.findingsRefinementInput"></a>

```python
findings_refinement_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeployment.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `instance_input`<sup>Optional</sup> <a name="instance_input" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeployment.property.instanceInput"></a>

```python
instance_input: str
```

- *Type:* str

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeployment.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeployment.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeployment.property.timeoutsInput"></a>

```python
timeouts_input: IResolvable | GoogleChronicleFindingsRefinementDeploymentTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeploymentTimeouts">GoogleChronicleFindingsRefinementDeploymentTimeouts</a>

---

##### `archived`<sup>Required</sup> <a name="archived" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeployment.property.archived"></a>

```python
archived: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeployment.property.enabled"></a>

```python
enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `findings_refinement`<sup>Required</sup> <a name="findings_refinement" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeployment.property.findingsRefinement"></a>

```python
findings_refinement: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeployment.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `instance`<sup>Required</sup> <a name="instance" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeployment.property.instance"></a>

```python
instance: str
```

- *Type:* str

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeployment.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeployment.property.project"></a>

```python
project: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeployment.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeployment.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleChronicleFindingsRefinementDeploymentConfig <a name="GoogleChronicleFindingsRefinementDeploymentConfig" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeploymentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeploymentConfig.Initializer"></a>

```python
from cdktn_provider_google_beta import google_chronicle_findings_refinement_deployment

googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeploymentConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  findings_refinement: str,
  instance: str,
  location: str,
  archived: bool | IResolvable = None,
  detection_exclusion_application: GoogleChronicleFindingsRefinementDeploymentDetectionExclusionApplication = None,
  enabled: bool | IResolvable = None,
  id: str = None,
  project: str = None,
  timeouts: GoogleChronicleFindingsRefinementDeploymentTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeploymentConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeploymentConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeploymentConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeploymentConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeploymentConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeploymentConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeploymentConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeploymentConfig.property.findingsRefinement">findings_refinement</a></code> | <code>str</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeploymentConfig.property.instance">instance</a></code> | <code>str</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeploymentConfig.property.location">location</a></code> | <code>str</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeploymentConfig.property.archived">archived</a></code> | <code>bool \| cdktn.IResolvable</code> | The archive state of the findings refinement deployment. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeploymentConfig.property.detectionExclusionApplication">detection_exclusion_application</a></code> | <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeploymentDetectionExclusionApplication">GoogleChronicleFindingsRefinementDeploymentDetectionExclusionApplication</a></code> | detection_exclusion_application block. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeploymentConfig.property.enabled">enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | Whether the findings refinement is currently deployed continuously against incoming findings. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeploymentConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_chronicle_findings_refinement_deployment#id GoogleChronicleFindingsRefinementDeployment#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeploymentConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_chronicle_findings_refinement_deployment#project GoogleChronicleFindingsRefinementDeployment#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeploymentConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeploymentTimeouts">GoogleChronicleFindingsRefinementDeploymentTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeploymentConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeploymentConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeploymentConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeploymentConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeploymentConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeploymentConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeploymentConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `findings_refinement`<sup>Required</sup> <a name="findings_refinement" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeploymentConfig.property.findingsRefinement"></a>

```python
findings_refinement: str
```

- *Type:* str

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_chronicle_findings_refinement_deployment#findings_refinement GoogleChronicleFindingsRefinementDeployment#findings_refinement}

---

##### `instance`<sup>Required</sup> <a name="instance" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeploymentConfig.property.instance"></a>

```python
instance: str
```

- *Type:* str

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_chronicle_findings_refinement_deployment#instance GoogleChronicleFindingsRefinementDeployment#instance}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeploymentConfig.property.location"></a>

```python
location: str
```

- *Type:* str

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_chronicle_findings_refinement_deployment#location GoogleChronicleFindingsRefinementDeployment#location}

---

##### `archived`<sup>Optional</sup> <a name="archived" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeploymentConfig.property.archived"></a>

```python
archived: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

The archive state of the findings refinement deployment.

Cannot be set to true unless enabled is set to false.
If currently set to true, enabled cannot be updated to true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_chronicle_findings_refinement_deployment#archived GoogleChronicleFindingsRefinementDeployment#archived}

---

##### `detection_exclusion_application`<sup>Optional</sup> <a name="detection_exclusion_application" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeploymentConfig.property.detectionExclusionApplication"></a>

```python
detection_exclusion_application: GoogleChronicleFindingsRefinementDeploymentDetectionExclusionApplication
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeploymentDetectionExclusionApplication">GoogleChronicleFindingsRefinementDeploymentDetectionExclusionApplication</a>

detection_exclusion_application block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_chronicle_findings_refinement_deployment#detection_exclusion_application GoogleChronicleFindingsRefinementDeployment#detection_exclusion_application}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeploymentConfig.property.enabled"></a>

```python
enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Whether the findings refinement is currently deployed continuously against incoming findings.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_chronicle_findings_refinement_deployment#enabled GoogleChronicleFindingsRefinementDeployment#enabled}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeploymentConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_chronicle_findings_refinement_deployment#id GoogleChronicleFindingsRefinementDeployment#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeploymentConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_chronicle_findings_refinement_deployment#project GoogleChronicleFindingsRefinementDeployment#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeploymentConfig.property.timeouts"></a>

```python
timeouts: GoogleChronicleFindingsRefinementDeploymentTimeouts
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeploymentTimeouts">GoogleChronicleFindingsRefinementDeploymentTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_chronicle_findings_refinement_deployment#timeouts GoogleChronicleFindingsRefinementDeployment#timeouts}

---

### GoogleChronicleFindingsRefinementDeploymentDetectionExclusionApplication <a name="GoogleChronicleFindingsRefinementDeploymentDetectionExclusionApplication" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeploymentDetectionExclusionApplication"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeploymentDetectionExclusionApplication.Initializer"></a>

```python
from cdktn_provider_google_beta import google_chronicle_findings_refinement_deployment

googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeploymentDetectionExclusionApplication(
  curated_rules: typing.List[str] = None,
  curated_rule_sets: typing.List[str] = None,
  rules: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeploymentDetectionExclusionApplication.property.curatedRules">curated_rules</a></code> | <code>typing.List[str]</code> | The CuratedRules this detection exclusion applies to. Format: projects/{project}/locations/{location}/instances/{instance}/curatedRules/{rule}. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeploymentDetectionExclusionApplication.property.curatedRuleSets">curated_rule_sets</a></code> | <code>typing.List[str]</code> | The CuratedRuleSets this detection exclusion applies to. Format: projects/{project}/locations/{location}/instances/{instance}/curatedRuleSetCategories/{category}/curatedRuleSets/{rule_set}. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeploymentDetectionExclusionApplication.property.rules">rules</a></code> | <code>typing.List[str]</code> | The Rules this detection exclusion applies to. Format: projects/{project}/locations/{location}/instances/{instance}/rules/{rule}. |

---

##### `curated_rules`<sup>Optional</sup> <a name="curated_rules" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeploymentDetectionExclusionApplication.property.curatedRules"></a>

```python
curated_rules: typing.List[str]
```

- *Type:* typing.List[str]

The CuratedRules this detection exclusion applies to. Format: projects/{project}/locations/{location}/instances/{instance}/curatedRules/{rule}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_chronicle_findings_refinement_deployment#curated_rules GoogleChronicleFindingsRefinementDeployment#curated_rules}

---

##### `curated_rule_sets`<sup>Optional</sup> <a name="curated_rule_sets" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeploymentDetectionExclusionApplication.property.curatedRuleSets"></a>

```python
curated_rule_sets: typing.List[str]
```

- *Type:* typing.List[str]

The CuratedRuleSets this detection exclusion applies to. Format: projects/{project}/locations/{location}/instances/{instance}/curatedRuleSetCategories/{category}/curatedRuleSets/{rule_set}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_chronicle_findings_refinement_deployment#curated_rule_sets GoogleChronicleFindingsRefinementDeployment#curated_rule_sets}

---

##### `rules`<sup>Optional</sup> <a name="rules" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeploymentDetectionExclusionApplication.property.rules"></a>

```python
rules: typing.List[str]
```

- *Type:* typing.List[str]

The Rules this detection exclusion applies to. Format: projects/{project}/locations/{location}/instances/{instance}/rules/{rule}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_chronicle_findings_refinement_deployment#rules GoogleChronicleFindingsRefinementDeployment#rules}

---

### GoogleChronicleFindingsRefinementDeploymentTimeouts <a name="GoogleChronicleFindingsRefinementDeploymentTimeouts" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeploymentTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeploymentTimeouts.Initializer"></a>

```python
from cdktn_provider_google_beta import google_chronicle_findings_refinement_deployment

googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeploymentTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeploymentTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_chronicle_findings_refinement_deployment#create GoogleChronicleFindingsRefinementDeployment#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeploymentTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_chronicle_findings_refinement_deployment#delete GoogleChronicleFindingsRefinementDeployment#delete}. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeploymentTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_chronicle_findings_refinement_deployment#update GoogleChronicleFindingsRefinementDeployment#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeploymentTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_chronicle_findings_refinement_deployment#create GoogleChronicleFindingsRefinementDeployment#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeploymentTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_chronicle_findings_refinement_deployment#delete GoogleChronicleFindingsRefinementDeployment#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeploymentTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_chronicle_findings_refinement_deployment#update GoogleChronicleFindingsRefinementDeployment#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleChronicleFindingsRefinementDeploymentDetectionExclusionApplicationOutputReference <a name="GoogleChronicleFindingsRefinementDeploymentDetectionExclusionApplicationOutputReference" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeploymentDetectionExclusionApplicationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeploymentDetectionExclusionApplicationOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_chronicle_findings_refinement_deployment

googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeploymentDetectionExclusionApplicationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeploymentDetectionExclusionApplicationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeploymentDetectionExclusionApplicationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeploymentDetectionExclusionApplicationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeploymentDetectionExclusionApplicationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeploymentDetectionExclusionApplicationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeploymentDetectionExclusionApplicationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeploymentDetectionExclusionApplicationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeploymentDetectionExclusionApplicationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeploymentDetectionExclusionApplicationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeploymentDetectionExclusionApplicationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeploymentDetectionExclusionApplicationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeploymentDetectionExclusionApplicationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeploymentDetectionExclusionApplicationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeploymentDetectionExclusionApplicationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeploymentDetectionExclusionApplicationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeploymentDetectionExclusionApplicationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeploymentDetectionExclusionApplicationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeploymentDetectionExclusionApplicationOutputReference.resetCuratedRules">reset_curated_rules</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeploymentDetectionExclusionApplicationOutputReference.resetCuratedRuleSets">reset_curated_rule_sets</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeploymentDetectionExclusionApplicationOutputReference.resetRules">reset_rules</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeploymentDetectionExclusionApplicationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeploymentDetectionExclusionApplicationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeploymentDetectionExclusionApplicationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeploymentDetectionExclusionApplicationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeploymentDetectionExclusionApplicationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeploymentDetectionExclusionApplicationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeploymentDetectionExclusionApplicationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeploymentDetectionExclusionApplicationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeploymentDetectionExclusionApplicationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeploymentDetectionExclusionApplicationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeploymentDetectionExclusionApplicationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeploymentDetectionExclusionApplicationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeploymentDetectionExclusionApplicationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeploymentDetectionExclusionApplicationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeploymentDetectionExclusionApplicationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeploymentDetectionExclusionApplicationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeploymentDetectionExclusionApplicationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeploymentDetectionExclusionApplicationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeploymentDetectionExclusionApplicationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeploymentDetectionExclusionApplicationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeploymentDetectionExclusionApplicationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeploymentDetectionExclusionApplicationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeploymentDetectionExclusionApplicationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeploymentDetectionExclusionApplicationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_curated_rules` <a name="reset_curated_rules" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeploymentDetectionExclusionApplicationOutputReference.resetCuratedRules"></a>

```python
def reset_curated_rules() -> None
```

##### `reset_curated_rule_sets` <a name="reset_curated_rule_sets" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeploymentDetectionExclusionApplicationOutputReference.resetCuratedRuleSets"></a>

```python
def reset_curated_rule_sets() -> None
```

##### `reset_rules` <a name="reset_rules" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeploymentDetectionExclusionApplicationOutputReference.resetRules"></a>

```python
def reset_rules() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeploymentDetectionExclusionApplicationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeploymentDetectionExclusionApplicationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeploymentDetectionExclusionApplicationOutputReference.property.deletedCuratedRuleSets">deleted_curated_rule_sets</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeploymentDetectionExclusionApplicationOutputReference.property.curatedRuleSetsInput">curated_rule_sets_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeploymentDetectionExclusionApplicationOutputReference.property.curatedRulesInput">curated_rules_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeploymentDetectionExclusionApplicationOutputReference.property.rulesInput">rules_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeploymentDetectionExclusionApplicationOutputReference.property.curatedRules">curated_rules</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeploymentDetectionExclusionApplicationOutputReference.property.curatedRuleSets">curated_rule_sets</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeploymentDetectionExclusionApplicationOutputReference.property.rules">rules</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeploymentDetectionExclusionApplicationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeploymentDetectionExclusionApplication">GoogleChronicleFindingsRefinementDeploymentDetectionExclusionApplication</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeploymentDetectionExclusionApplicationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeploymentDetectionExclusionApplicationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `deleted_curated_rule_sets`<sup>Required</sup> <a name="deleted_curated_rule_sets" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeploymentDetectionExclusionApplicationOutputReference.property.deletedCuratedRuleSets"></a>

```python
deleted_curated_rule_sets: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `curated_rule_sets_input`<sup>Optional</sup> <a name="curated_rule_sets_input" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeploymentDetectionExclusionApplicationOutputReference.property.curatedRuleSetsInput"></a>

```python
curated_rule_sets_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `curated_rules_input`<sup>Optional</sup> <a name="curated_rules_input" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeploymentDetectionExclusionApplicationOutputReference.property.curatedRulesInput"></a>

```python
curated_rules_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `rules_input`<sup>Optional</sup> <a name="rules_input" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeploymentDetectionExclusionApplicationOutputReference.property.rulesInput"></a>

```python
rules_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `curated_rules`<sup>Required</sup> <a name="curated_rules" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeploymentDetectionExclusionApplicationOutputReference.property.curatedRules"></a>

```python
curated_rules: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `curated_rule_sets`<sup>Required</sup> <a name="curated_rule_sets" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeploymentDetectionExclusionApplicationOutputReference.property.curatedRuleSets"></a>

```python
curated_rule_sets: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `rules`<sup>Required</sup> <a name="rules" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeploymentDetectionExclusionApplicationOutputReference.property.rules"></a>

```python
rules: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeploymentDetectionExclusionApplicationOutputReference.property.internalValue"></a>

```python
internal_value: GoogleChronicleFindingsRefinementDeploymentDetectionExclusionApplication
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeploymentDetectionExclusionApplication">GoogleChronicleFindingsRefinementDeploymentDetectionExclusionApplication</a>

---


### GoogleChronicleFindingsRefinementDeploymentTimeoutsOutputReference <a name="GoogleChronicleFindingsRefinementDeploymentTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeploymentTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeploymentTimeoutsOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_chronicle_findings_refinement_deployment

googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeploymentTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeploymentTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeploymentTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeploymentTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeploymentTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeploymentTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeploymentTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeploymentTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeploymentTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeploymentTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeploymentTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeploymentTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeploymentTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeploymentTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeploymentTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeploymentTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeploymentTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeploymentTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeploymentTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeploymentTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeploymentTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeploymentTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeploymentTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeploymentTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeploymentTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeploymentTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeploymentTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeploymentTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeploymentTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeploymentTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeploymentTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeploymentTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeploymentTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeploymentTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeploymentTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeploymentTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeploymentTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeploymentTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeploymentTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeploymentTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeploymentTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeploymentTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeploymentTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeploymentTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeploymentTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeploymentTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeploymentTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeploymentTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeploymentTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeploymentTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeploymentTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeploymentTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeploymentTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeploymentTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeploymentTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeploymentTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeploymentTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeploymentTimeouts">GoogleChronicleFindingsRefinementDeploymentTimeouts</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeploymentTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeploymentTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeploymentTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeploymentTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeploymentTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeploymentTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeploymentTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeploymentTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeploymentTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | GoogleChronicleFindingsRefinementDeploymentTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeploymentTimeouts">GoogleChronicleFindingsRefinementDeploymentTimeouts</a>

---



