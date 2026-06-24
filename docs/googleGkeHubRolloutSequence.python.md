# `googleGkeHubRolloutSequence` Submodule <a name="`googleGkeHubRolloutSequence` Submodule" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleGkeHubRolloutSequence <a name="GoogleGkeHubRolloutSequence" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_gke_hub_rollout_sequence google_gke_hub_rollout_sequence}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.Initializer"></a>

```python
from cdktn_provider_google_beta import google_gke_hub_rollout_sequence

googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  rollout_sequence_id: str,
  stages: IResolvable | typing.List[GoogleGkeHubRolloutSequenceStages],
  auto_upgrade_config: GoogleGkeHubRolloutSequenceAutoUpgradeConfig = None,
  deletion_policy: str = None,
  display_name: str = None,
  id: str = None,
  ignored_clusters_selector: GoogleGkeHubRolloutSequenceIgnoredClustersSelector = None,
  labels: typing.Mapping[str] = None,
  project: str = None,
  timeouts: GoogleGkeHubRolloutSequenceTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.Initializer.parameter.rolloutSequenceId">rollout_sequence_id</a></code> | <code>str</code> | The user-provided identifier of the RolloutSequence. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.Initializer.parameter.stages">stages</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStages">GoogleGkeHubRolloutSequenceStages</a>]</code> | stages block. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.Initializer.parameter.autoUpgradeConfig">auto_upgrade_config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfig">GoogleGkeHubRolloutSequenceAutoUpgradeConfig</a></code> | auto_upgrade_config block. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.Initializer.parameter.deletionPolicy">deletion_policy</a></code> | <code>str</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | Human readable display name of the Rollout Sequence. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_gke_hub_rollout_sequence#id GoogleGkeHubRolloutSequence#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.Initializer.parameter.ignoredClustersSelector">ignored_clusters_selector</a></code> | <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceIgnoredClustersSelector">GoogleGkeHubRolloutSequenceIgnoredClustersSelector</a></code> | ignored_clusters_selector block. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.Initializer.parameter.labels">labels</a></code> | <code>typing.Mapping[str]</code> | Labels for this Rollout Sequence. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_gke_hub_rollout_sequence#project GoogleGkeHubRolloutSequence#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceTimeouts">GoogleGkeHubRolloutSequenceTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `rollout_sequence_id`<sup>Required</sup> <a name="rollout_sequence_id" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.Initializer.parameter.rolloutSequenceId"></a>

- *Type:* str

The user-provided identifier of the RolloutSequence.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_gke_hub_rollout_sequence#rollout_sequence_id GoogleGkeHubRolloutSequence#rollout_sequence_id}

---

##### `stages`<sup>Required</sup> <a name="stages" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.Initializer.parameter.stages"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStages">GoogleGkeHubRolloutSequenceStages</a>]

stages block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_gke_hub_rollout_sequence#stages GoogleGkeHubRolloutSequence#stages}

---

##### `auto_upgrade_config`<sup>Optional</sup> <a name="auto_upgrade_config" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.Initializer.parameter.autoUpgradeConfig"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfig">GoogleGkeHubRolloutSequenceAutoUpgradeConfig</a>

auto_upgrade_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_gke_hub_rollout_sequence#auto_upgrade_config GoogleGkeHubRolloutSequence#auto_upgrade_config}

---

##### `deletion_policy`<sup>Optional</sup> <a name="deletion_policy" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.Initializer.parameter.deletionPolicy"></a>

- *Type:* str

Whether Terraform will be prevented from destroying the instance.

Defaults to "DELETE".
When a 'terraform destroy' or 'terraform apply' would delete the instance,
the command will fail if this field is set to "PREVENT" in Terraform state.
When set to "ABANDON", the command will remove the resource from Terraform
management without updating or deleting the resource in the API.
When set to "DELETE", deleting the resource is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_gke_hub_rollout_sequence#deletion_policy GoogleGkeHubRolloutSequence#deletion_policy}

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.Initializer.parameter.displayName"></a>

- *Type:* str

Human readable display name of the Rollout Sequence.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_gke_hub_rollout_sequence#display_name GoogleGkeHubRolloutSequence#display_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_gke_hub_rollout_sequence#id GoogleGkeHubRolloutSequence#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ignored_clusters_selector`<sup>Optional</sup> <a name="ignored_clusters_selector" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.Initializer.parameter.ignoredClustersSelector"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceIgnoredClustersSelector">GoogleGkeHubRolloutSequenceIgnoredClustersSelector</a>

ignored_clusters_selector block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_gke_hub_rollout_sequence#ignored_clusters_selector GoogleGkeHubRolloutSequence#ignored_clusters_selector}

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.Initializer.parameter.labels"></a>

- *Type:* typing.Mapping[str]

Labels for this Rollout Sequence.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_gke_hub_rollout_sequence#labels GoogleGkeHubRolloutSequence#labels}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_gke_hub_rollout_sequence#project GoogleGkeHubRolloutSequence#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceTimeouts">GoogleGkeHubRolloutSequenceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_gke_hub_rollout_sequence#timeouts GoogleGkeHubRolloutSequence#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.putAutoUpgradeConfig">put_auto_upgrade_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.putIgnoredClustersSelector">put_ignored_clusters_selector</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.putStages">put_stages</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.resetAutoUpgradeConfig">reset_auto_upgrade_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.resetDeletionPolicy">reset_deletion_policy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.resetDisplayName">reset_display_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.resetIgnoredClustersSelector">reset_ignored_clusters_selector</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.resetLabels">reset_labels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_auto_upgrade_config` <a name="put_auto_upgrade_config" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.putAutoUpgradeConfig"></a>

```python
def put_auto_upgrade_config(
  rollout_creation_scope: GoogleGkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScope = None
) -> None
```

###### `rollout_creation_scope`<sup>Optional</sup> <a name="rollout_creation_scope" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.putAutoUpgradeConfig.parameter.rolloutCreationScope"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScope">GoogleGkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScope</a>

rollout_creation_scope block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_gke_hub_rollout_sequence#rollout_creation_scope GoogleGkeHubRolloutSequence#rollout_creation_scope}

---

##### `put_ignored_clusters_selector` <a name="put_ignored_clusters_selector" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.putIgnoredClustersSelector"></a>

```python
def put_ignored_clusters_selector(
  label_selector: str
) -> None
```

###### `label_selector`<sup>Required</sup> <a name="label_selector" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.putIgnoredClustersSelector.parameter.labelSelector"></a>

- *Type:* str

The label selector must be a valid CEL (Common Expression Language) expression which evaluates resource.labels.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_gke_hub_rollout_sequence#label_selector GoogleGkeHubRolloutSequence#label_selector}

---

##### `put_stages` <a name="put_stages" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.putStages"></a>

```python
def put_stages(
  value: IResolvable | typing.List[GoogleGkeHubRolloutSequenceStages]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.putStages.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStages">GoogleGkeHubRolloutSequenceStages</a>]

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_gke_hub_rollout_sequence#create GoogleGkeHubRolloutSequence#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_gke_hub_rollout_sequence#delete GoogleGkeHubRolloutSequence#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_gke_hub_rollout_sequence#update GoogleGkeHubRolloutSequence#update}.

---

##### `reset_auto_upgrade_config` <a name="reset_auto_upgrade_config" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.resetAutoUpgradeConfig"></a>

```python
def reset_auto_upgrade_config() -> None
```

##### `reset_deletion_policy` <a name="reset_deletion_policy" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.resetDeletionPolicy"></a>

```python
def reset_deletion_policy() -> None
```

##### `reset_display_name` <a name="reset_display_name" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.resetDisplayName"></a>

```python
def reset_display_name() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_ignored_clusters_selector` <a name="reset_ignored_clusters_selector" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.resetIgnoredClustersSelector"></a>

```python
def reset_ignored_clusters_selector() -> None
```

##### `reset_labels` <a name="reset_labels" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.resetLabels"></a>

```python
def reset_labels() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a GoogleGkeHubRolloutSequence resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.isConstruct"></a>

```python
from cdktn_provider_google_beta import google_gke_hub_rollout_sequence

googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.isTerraformElement"></a>

```python
from cdktn_provider_google_beta import google_gke_hub_rollout_sequence

googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.isTerraformResource"></a>

```python
from cdktn_provider_google_beta import google_gke_hub_rollout_sequence

googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.generateConfigForImport"></a>

```python
from cdktn_provider_google_beta import google_gke_hub_rollout_sequence

googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a GoogleGkeHubRolloutSequence resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the GoogleGkeHubRolloutSequence to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing GoogleGkeHubRolloutSequence that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_gke_hub_rollout_sequence#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the GoogleGkeHubRolloutSequence to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.property.autoUpgradeConfig">auto_upgrade_config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfigOutputReference">GoogleGkeHubRolloutSequenceAutoUpgradeConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.property.createTime">create_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.property.deleteTime">delete_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.property.effectiveLabels">effective_labels</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.property.etag">etag</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.property.ignoredClustersSelector">ignored_clusters_selector</a></code> | <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceIgnoredClustersSelectorOutputReference">GoogleGkeHubRolloutSequenceIgnoredClustersSelectorOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.property.stages">stages</a></code> | <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesList">GoogleGkeHubRolloutSequenceStagesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.property.terraformLabels">terraform_labels</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceTimeoutsOutputReference">GoogleGkeHubRolloutSequenceTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.property.uid">uid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.property.updateTime">update_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.property.autoUpgradeConfigInput">auto_upgrade_config_input</a></code> | <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfig">GoogleGkeHubRolloutSequenceAutoUpgradeConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.property.deletionPolicyInput">deletion_policy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.property.ignoredClustersSelectorInput">ignored_clusters_selector_input</a></code> | <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceIgnoredClustersSelector">GoogleGkeHubRolloutSequenceIgnoredClustersSelector</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.property.labelsInput">labels_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.property.rolloutSequenceIdInput">rollout_sequence_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.property.stagesInput">stages_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStages">GoogleGkeHubRolloutSequenceStages</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.property.timeoutsInput">timeouts_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceTimeouts">GoogleGkeHubRolloutSequenceTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.property.deletionPolicy">deletion_policy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.property.project">project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.property.rolloutSequenceId">rollout_sequence_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `auto_upgrade_config`<sup>Required</sup> <a name="auto_upgrade_config" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.property.autoUpgradeConfig"></a>

```python
auto_upgrade_config: GoogleGkeHubRolloutSequenceAutoUpgradeConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfigOutputReference">GoogleGkeHubRolloutSequenceAutoUpgradeConfigOutputReference</a>

---

##### `create_time`<sup>Required</sup> <a name="create_time" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.property.createTime"></a>

```python
create_time: str
```

- *Type:* str

---

##### `delete_time`<sup>Required</sup> <a name="delete_time" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.property.deleteTime"></a>

```python
delete_time: str
```

- *Type:* str

---

##### `effective_labels`<sup>Required</sup> <a name="effective_labels" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.property.effectiveLabels"></a>

```python
effective_labels: StringMap
```

- *Type:* cdktn.StringMap

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.property.etag"></a>

```python
etag: str
```

- *Type:* str

---

##### `ignored_clusters_selector`<sup>Required</sup> <a name="ignored_clusters_selector" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.property.ignoredClustersSelector"></a>

```python
ignored_clusters_selector: GoogleGkeHubRolloutSequenceIgnoredClustersSelectorOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceIgnoredClustersSelectorOutputReference">GoogleGkeHubRolloutSequenceIgnoredClustersSelectorOutputReference</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `stages`<sup>Required</sup> <a name="stages" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.property.stages"></a>

```python
stages: GoogleGkeHubRolloutSequenceStagesList
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesList">GoogleGkeHubRolloutSequenceStagesList</a>

---

##### `terraform_labels`<sup>Required</sup> <a name="terraform_labels" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.property.terraformLabels"></a>

```python
terraform_labels: StringMap
```

- *Type:* cdktn.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.property.timeouts"></a>

```python
timeouts: GoogleGkeHubRolloutSequenceTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceTimeoutsOutputReference">GoogleGkeHubRolloutSequenceTimeoutsOutputReference</a>

---

##### `uid`<sup>Required</sup> <a name="uid" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.property.uid"></a>

```python
uid: str
```

- *Type:* str

---

##### `update_time`<sup>Required</sup> <a name="update_time" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.property.updateTime"></a>

```python
update_time: str
```

- *Type:* str

---

##### `auto_upgrade_config_input`<sup>Optional</sup> <a name="auto_upgrade_config_input" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.property.autoUpgradeConfigInput"></a>

```python
auto_upgrade_config_input: GoogleGkeHubRolloutSequenceAutoUpgradeConfig
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfig">GoogleGkeHubRolloutSequenceAutoUpgradeConfig</a>

---

##### `deletion_policy_input`<sup>Optional</sup> <a name="deletion_policy_input" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.property.deletionPolicyInput"></a>

```python
deletion_policy_input: str
```

- *Type:* str

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `ignored_clusters_selector_input`<sup>Optional</sup> <a name="ignored_clusters_selector_input" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.property.ignoredClustersSelectorInput"></a>

```python
ignored_clusters_selector_input: GoogleGkeHubRolloutSequenceIgnoredClustersSelector
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceIgnoredClustersSelector">GoogleGkeHubRolloutSequenceIgnoredClustersSelector</a>

---

##### `labels_input`<sup>Optional</sup> <a name="labels_input" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.property.labelsInput"></a>

```python
labels_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `rollout_sequence_id_input`<sup>Optional</sup> <a name="rollout_sequence_id_input" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.property.rolloutSequenceIdInput"></a>

```python
rollout_sequence_id_input: str
```

- *Type:* str

---

##### `stages_input`<sup>Optional</sup> <a name="stages_input" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.property.stagesInput"></a>

```python
stages_input: IResolvable | typing.List[GoogleGkeHubRolloutSequenceStages]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStages">GoogleGkeHubRolloutSequenceStages</a>]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.property.timeoutsInput"></a>

```python
timeouts_input: IResolvable | GoogleGkeHubRolloutSequenceTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceTimeouts">GoogleGkeHubRolloutSequenceTimeouts</a>

---

##### `deletion_policy`<sup>Required</sup> <a name="deletion_policy" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.property.deletionPolicy"></a>

```python
deletion_policy: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.property.project"></a>

```python
project: str
```

- *Type:* str

---

##### `rollout_sequence_id`<sup>Required</sup> <a name="rollout_sequence_id" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.property.rolloutSequenceId"></a>

```python
rollout_sequence_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleGkeHubRolloutSequenceAutoUpgradeConfig <a name="GoogleGkeHubRolloutSequenceAutoUpgradeConfig" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfig.Initializer"></a>

```python
from cdktn_provider_google_beta import google_gke_hub_rollout_sequence

googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfig(
  rollout_creation_scope: GoogleGkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScope = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfig.property.rolloutCreationScope">rollout_creation_scope</a></code> | <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScope">GoogleGkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScope</a></code> | rollout_creation_scope block. |

---

##### `rollout_creation_scope`<sup>Optional</sup> <a name="rollout_creation_scope" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfig.property.rolloutCreationScope"></a>

```python
rollout_creation_scope: GoogleGkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScope
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScope">GoogleGkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScope</a>

rollout_creation_scope block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_gke_hub_rollout_sequence#rollout_creation_scope GoogleGkeHubRolloutSequence#rollout_creation_scope}

---

### GoogleGkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScope <a name="GoogleGkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScope" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScope"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScope.Initializer"></a>

```python
from cdktn_provider_google_beta import google_gke_hub_rollout_sequence

googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScope(
  upgrade_types: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScope.property.upgradeTypes">upgrade_types</a></code> | <code>typing.List[str]</code> | The list of enabled upgrade types. Current valid values are 'CONTROL_PLANE_MINOR', 'CONTROL_PLANE_PATCH', 'NODE_MINOR', and 'NODE_PATCH'. |

---

##### `upgrade_types`<sup>Optional</sup> <a name="upgrade_types" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScope.property.upgradeTypes"></a>

```python
upgrade_types: typing.List[str]
```

- *Type:* typing.List[str]

The list of enabled upgrade types. Current valid values are 'CONTROL_PLANE_MINOR', 'CONTROL_PLANE_PATCH', 'NODE_MINOR', and 'NODE_PATCH'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_gke_hub_rollout_sequence#upgrade_types GoogleGkeHubRolloutSequence#upgrade_types}

---

### GoogleGkeHubRolloutSequenceConfig <a name="GoogleGkeHubRolloutSequenceConfig" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceConfig.Initializer"></a>

```python
from cdktn_provider_google_beta import google_gke_hub_rollout_sequence

googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  rollout_sequence_id: str,
  stages: IResolvable | typing.List[GoogleGkeHubRolloutSequenceStages],
  auto_upgrade_config: GoogleGkeHubRolloutSequenceAutoUpgradeConfig = None,
  deletion_policy: str = None,
  display_name: str = None,
  id: str = None,
  ignored_clusters_selector: GoogleGkeHubRolloutSequenceIgnoredClustersSelector = None,
  labels: typing.Mapping[str] = None,
  project: str = None,
  timeouts: GoogleGkeHubRolloutSequenceTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceConfig.property.rolloutSequenceId">rollout_sequence_id</a></code> | <code>str</code> | The user-provided identifier of the RolloutSequence. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceConfig.property.stages">stages</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStages">GoogleGkeHubRolloutSequenceStages</a>]</code> | stages block. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceConfig.property.autoUpgradeConfig">auto_upgrade_config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfig">GoogleGkeHubRolloutSequenceAutoUpgradeConfig</a></code> | auto_upgrade_config block. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceConfig.property.deletionPolicy">deletion_policy</a></code> | <code>str</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceConfig.property.displayName">display_name</a></code> | <code>str</code> | Human readable display name of the Rollout Sequence. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_gke_hub_rollout_sequence#id GoogleGkeHubRolloutSequence#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceConfig.property.ignoredClustersSelector">ignored_clusters_selector</a></code> | <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceIgnoredClustersSelector">GoogleGkeHubRolloutSequenceIgnoredClustersSelector</a></code> | ignored_clusters_selector block. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceConfig.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | Labels for this Rollout Sequence. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_gke_hub_rollout_sequence#project GoogleGkeHubRolloutSequence#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceTimeouts">GoogleGkeHubRolloutSequenceTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `rollout_sequence_id`<sup>Required</sup> <a name="rollout_sequence_id" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceConfig.property.rolloutSequenceId"></a>

```python
rollout_sequence_id: str
```

- *Type:* str

The user-provided identifier of the RolloutSequence.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_gke_hub_rollout_sequence#rollout_sequence_id GoogleGkeHubRolloutSequence#rollout_sequence_id}

---

##### `stages`<sup>Required</sup> <a name="stages" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceConfig.property.stages"></a>

```python
stages: IResolvable | typing.List[GoogleGkeHubRolloutSequenceStages]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStages">GoogleGkeHubRolloutSequenceStages</a>]

stages block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_gke_hub_rollout_sequence#stages GoogleGkeHubRolloutSequence#stages}

---

##### `auto_upgrade_config`<sup>Optional</sup> <a name="auto_upgrade_config" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceConfig.property.autoUpgradeConfig"></a>

```python
auto_upgrade_config: GoogleGkeHubRolloutSequenceAutoUpgradeConfig
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfig">GoogleGkeHubRolloutSequenceAutoUpgradeConfig</a>

auto_upgrade_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_gke_hub_rollout_sequence#auto_upgrade_config GoogleGkeHubRolloutSequence#auto_upgrade_config}

---

##### `deletion_policy`<sup>Optional</sup> <a name="deletion_policy" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_gke_hub_rollout_sequence#deletion_policy GoogleGkeHubRolloutSequence#deletion_policy}

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

Human readable display name of the Rollout Sequence.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_gke_hub_rollout_sequence#display_name GoogleGkeHubRolloutSequence#display_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_gke_hub_rollout_sequence#id GoogleGkeHubRolloutSequence#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ignored_clusters_selector`<sup>Optional</sup> <a name="ignored_clusters_selector" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceConfig.property.ignoredClustersSelector"></a>

```python
ignored_clusters_selector: GoogleGkeHubRolloutSequenceIgnoredClustersSelector
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceIgnoredClustersSelector">GoogleGkeHubRolloutSequenceIgnoredClustersSelector</a>

ignored_clusters_selector block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_gke_hub_rollout_sequence#ignored_clusters_selector GoogleGkeHubRolloutSequence#ignored_clusters_selector}

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceConfig.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Labels for this Rollout Sequence.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_gke_hub_rollout_sequence#labels GoogleGkeHubRolloutSequence#labels}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_gke_hub_rollout_sequence#project GoogleGkeHubRolloutSequence#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceConfig.property.timeouts"></a>

```python
timeouts: GoogleGkeHubRolloutSequenceTimeouts
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceTimeouts">GoogleGkeHubRolloutSequenceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_gke_hub_rollout_sequence#timeouts GoogleGkeHubRolloutSequence#timeouts}

---

### GoogleGkeHubRolloutSequenceIgnoredClustersSelector <a name="GoogleGkeHubRolloutSequenceIgnoredClustersSelector" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceIgnoredClustersSelector"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceIgnoredClustersSelector.Initializer"></a>

```python
from cdktn_provider_google_beta import google_gke_hub_rollout_sequence

googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceIgnoredClustersSelector(
  label_selector: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceIgnoredClustersSelector.property.labelSelector">label_selector</a></code> | <code>str</code> | The label selector must be a valid CEL (Common Expression Language) expression which evaluates resource.labels. |

---

##### `label_selector`<sup>Required</sup> <a name="label_selector" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceIgnoredClustersSelector.property.labelSelector"></a>

```python
label_selector: str
```

- *Type:* str

The label selector must be a valid CEL (Common Expression Language) expression which evaluates resource.labels.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_gke_hub_rollout_sequence#label_selector GoogleGkeHubRolloutSequence#label_selector}

---

### GoogleGkeHubRolloutSequenceStages <a name="GoogleGkeHubRolloutSequenceStages" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStages"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStages.Initializer"></a>

```python
from cdktn_provider_google_beta import google_gke_hub_rollout_sequence

googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStages(
  fleet_projects: typing.List[str],
  cluster_selector: GoogleGkeHubRolloutSequenceStagesClusterSelector = None,
  soak_duration: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStages.property.fleetProjects">fleet_projects</a></code> | <code>typing.List[str]</code> | List of Fleet projects to select the clusters from. Expected format: projects/{project}. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStages.property.clusterSelector">cluster_selector</a></code> | <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesClusterSelector">GoogleGkeHubRolloutSequenceStagesClusterSelector</a></code> | cluster_selector block. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStages.property.soakDuration">soak_duration</a></code> | <code>str</code> | Soak time after upgrading all the clusters in the stage. Has to be specified in seconds, minutes, hours or days. |

---

##### `fleet_projects`<sup>Required</sup> <a name="fleet_projects" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStages.property.fleetProjects"></a>

```python
fleet_projects: typing.List[str]
```

- *Type:* typing.List[str]

List of Fleet projects to select the clusters from. Expected format: projects/{project}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_gke_hub_rollout_sequence#fleet_projects GoogleGkeHubRolloutSequence#fleet_projects}

---

##### `cluster_selector`<sup>Optional</sup> <a name="cluster_selector" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStages.property.clusterSelector"></a>

```python
cluster_selector: GoogleGkeHubRolloutSequenceStagesClusterSelector
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesClusterSelector">GoogleGkeHubRolloutSequenceStagesClusterSelector</a>

cluster_selector block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_gke_hub_rollout_sequence#cluster_selector GoogleGkeHubRolloutSequence#cluster_selector}

---

##### `soak_duration`<sup>Optional</sup> <a name="soak_duration" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStages.property.soakDuration"></a>

```python
soak_duration: str
```

- *Type:* str

Soak time after upgrading all the clusters in the stage. Has to be specified in seconds, minutes, hours or days.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_gke_hub_rollout_sequence#soak_duration GoogleGkeHubRolloutSequence#soak_duration}

---

### GoogleGkeHubRolloutSequenceStagesClusterSelector <a name="GoogleGkeHubRolloutSequenceStagesClusterSelector" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesClusterSelector"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesClusterSelector.Initializer"></a>

```python
from cdktn_provider_google_beta import google_gke_hub_rollout_sequence

googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesClusterSelector(
  label_selector: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesClusterSelector.property.labelSelector">label_selector</a></code> | <code>str</code> | The label selector must be a valid CEL (Common Expression Language) expression which evaluates resource.labels. |

---

##### `label_selector`<sup>Required</sup> <a name="label_selector" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesClusterSelector.property.labelSelector"></a>

```python
label_selector: str
```

- *Type:* str

The label selector must be a valid CEL (Common Expression Language) expression which evaluates resource.labels.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_gke_hub_rollout_sequence#label_selector GoogleGkeHubRolloutSequence#label_selector}

---

### GoogleGkeHubRolloutSequenceTimeouts <a name="GoogleGkeHubRolloutSequenceTimeouts" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceTimeouts.Initializer"></a>

```python
from cdktn_provider_google_beta import google_gke_hub_rollout_sequence

googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_gke_hub_rollout_sequence#create GoogleGkeHubRolloutSequence#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_gke_hub_rollout_sequence#delete GoogleGkeHubRolloutSequence#delete}. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_gke_hub_rollout_sequence#update GoogleGkeHubRolloutSequence#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_gke_hub_rollout_sequence#create GoogleGkeHubRolloutSequence#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_gke_hub_rollout_sequence#delete GoogleGkeHubRolloutSequence#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_gke_hub_rollout_sequence#update GoogleGkeHubRolloutSequence#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleGkeHubRolloutSequenceAutoUpgradeConfigOutputReference <a name="GoogleGkeHubRolloutSequenceAutoUpgradeConfigOutputReference" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_gke_hub_rollout_sequence

googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfigOutputReference.putRolloutCreationScope">put_rollout_creation_scope</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfigOutputReference.resetRolloutCreationScope">reset_rollout_creation_scope</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_rollout_creation_scope` <a name="put_rollout_creation_scope" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfigOutputReference.putRolloutCreationScope"></a>

```python
def put_rollout_creation_scope(
  upgrade_types: typing.List[str] = None
) -> None
```

###### `upgrade_types`<sup>Optional</sup> <a name="upgrade_types" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfigOutputReference.putRolloutCreationScope.parameter.upgradeTypes"></a>

- *Type:* typing.List[str]

The list of enabled upgrade types. Current valid values are 'CONTROL_PLANE_MINOR', 'CONTROL_PLANE_PATCH', 'NODE_MINOR', and 'NODE_PATCH'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_gke_hub_rollout_sequence#upgrade_types GoogleGkeHubRolloutSequence#upgrade_types}

---

##### `reset_rollout_creation_scope` <a name="reset_rollout_creation_scope" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfigOutputReference.resetRolloutCreationScope"></a>

```python
def reset_rollout_creation_scope() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfigOutputReference.property.rolloutCreationScope">rollout_creation_scope</a></code> | <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScopeOutputReference">GoogleGkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScopeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfigOutputReference.property.rolloutCreationScopeInput">rollout_creation_scope_input</a></code> | <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScope">GoogleGkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScope</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfig">GoogleGkeHubRolloutSequenceAutoUpgradeConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `rollout_creation_scope`<sup>Required</sup> <a name="rollout_creation_scope" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfigOutputReference.property.rolloutCreationScope"></a>

```python
rollout_creation_scope: GoogleGkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScopeOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScopeOutputReference">GoogleGkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScopeOutputReference</a>

---

##### `rollout_creation_scope_input`<sup>Optional</sup> <a name="rollout_creation_scope_input" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfigOutputReference.property.rolloutCreationScopeInput"></a>

```python
rollout_creation_scope_input: GoogleGkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScope
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScope">GoogleGkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScope</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfigOutputReference.property.internalValue"></a>

```python
internal_value: GoogleGkeHubRolloutSequenceAutoUpgradeConfig
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfig">GoogleGkeHubRolloutSequenceAutoUpgradeConfig</a>

---


### GoogleGkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScopeOutputReference <a name="GoogleGkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScopeOutputReference" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScopeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScopeOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_gke_hub_rollout_sequence

googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScopeOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScopeOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScopeOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScopeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScopeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScopeOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScopeOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScopeOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScopeOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScopeOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScopeOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScopeOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScopeOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScopeOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScopeOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScopeOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScopeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScopeOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScopeOutputReference.resetUpgradeTypes">reset_upgrade_types</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScopeOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScopeOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScopeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScopeOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScopeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScopeOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScopeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScopeOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScopeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScopeOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScopeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScopeOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScopeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScopeOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScopeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScopeOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScopeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScopeOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScopeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScopeOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScopeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScopeOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScopeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScopeOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_upgrade_types` <a name="reset_upgrade_types" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScopeOutputReference.resetUpgradeTypes"></a>

```python
def reset_upgrade_types() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScopeOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScopeOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScopeOutputReference.property.upgradeTypesInput">upgrade_types_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScopeOutputReference.property.upgradeTypes">upgrade_types</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScopeOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScope">GoogleGkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScope</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScopeOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScopeOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `upgrade_types_input`<sup>Optional</sup> <a name="upgrade_types_input" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScopeOutputReference.property.upgradeTypesInput"></a>

```python
upgrade_types_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `upgrade_types`<sup>Required</sup> <a name="upgrade_types" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScopeOutputReference.property.upgradeTypes"></a>

```python
upgrade_types: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScopeOutputReference.property.internalValue"></a>

```python
internal_value: GoogleGkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScope
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScope">GoogleGkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScope</a>

---


### GoogleGkeHubRolloutSequenceIgnoredClustersSelectorOutputReference <a name="GoogleGkeHubRolloutSequenceIgnoredClustersSelectorOutputReference" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceIgnoredClustersSelectorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceIgnoredClustersSelectorOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_gke_hub_rollout_sequence

googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceIgnoredClustersSelectorOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceIgnoredClustersSelectorOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceIgnoredClustersSelectorOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceIgnoredClustersSelectorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceIgnoredClustersSelectorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceIgnoredClustersSelectorOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceIgnoredClustersSelectorOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceIgnoredClustersSelectorOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceIgnoredClustersSelectorOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceIgnoredClustersSelectorOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceIgnoredClustersSelectorOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceIgnoredClustersSelectorOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceIgnoredClustersSelectorOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceIgnoredClustersSelectorOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceIgnoredClustersSelectorOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceIgnoredClustersSelectorOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceIgnoredClustersSelectorOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceIgnoredClustersSelectorOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceIgnoredClustersSelectorOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceIgnoredClustersSelectorOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceIgnoredClustersSelectorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceIgnoredClustersSelectorOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceIgnoredClustersSelectorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceIgnoredClustersSelectorOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceIgnoredClustersSelectorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceIgnoredClustersSelectorOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceIgnoredClustersSelectorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceIgnoredClustersSelectorOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceIgnoredClustersSelectorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceIgnoredClustersSelectorOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceIgnoredClustersSelectorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceIgnoredClustersSelectorOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceIgnoredClustersSelectorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceIgnoredClustersSelectorOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceIgnoredClustersSelectorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceIgnoredClustersSelectorOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceIgnoredClustersSelectorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceIgnoredClustersSelectorOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceIgnoredClustersSelectorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceIgnoredClustersSelectorOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceIgnoredClustersSelectorOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceIgnoredClustersSelectorOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceIgnoredClustersSelectorOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceIgnoredClustersSelectorOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceIgnoredClustersSelectorOutputReference.property.labelSelectorInput">label_selector_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceIgnoredClustersSelectorOutputReference.property.labelSelector">label_selector</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceIgnoredClustersSelectorOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceIgnoredClustersSelector">GoogleGkeHubRolloutSequenceIgnoredClustersSelector</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceIgnoredClustersSelectorOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceIgnoredClustersSelectorOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `label_selector_input`<sup>Optional</sup> <a name="label_selector_input" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceIgnoredClustersSelectorOutputReference.property.labelSelectorInput"></a>

```python
label_selector_input: str
```

- *Type:* str

---

##### `label_selector`<sup>Required</sup> <a name="label_selector" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceIgnoredClustersSelectorOutputReference.property.labelSelector"></a>

```python
label_selector: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceIgnoredClustersSelectorOutputReference.property.internalValue"></a>

```python
internal_value: GoogleGkeHubRolloutSequenceIgnoredClustersSelector
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceIgnoredClustersSelector">GoogleGkeHubRolloutSequenceIgnoredClustersSelector</a>

---


### GoogleGkeHubRolloutSequenceStagesClusterSelectorOutputReference <a name="GoogleGkeHubRolloutSequenceStagesClusterSelectorOutputReference" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesClusterSelectorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesClusterSelectorOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_gke_hub_rollout_sequence

googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesClusterSelectorOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesClusterSelectorOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesClusterSelectorOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesClusterSelectorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesClusterSelectorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesClusterSelectorOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesClusterSelectorOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesClusterSelectorOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesClusterSelectorOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesClusterSelectorOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesClusterSelectorOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesClusterSelectorOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesClusterSelectorOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesClusterSelectorOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesClusterSelectorOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesClusterSelectorOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesClusterSelectorOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesClusterSelectorOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesClusterSelectorOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesClusterSelectorOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesClusterSelectorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesClusterSelectorOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesClusterSelectorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesClusterSelectorOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesClusterSelectorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesClusterSelectorOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesClusterSelectorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesClusterSelectorOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesClusterSelectorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesClusterSelectorOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesClusterSelectorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesClusterSelectorOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesClusterSelectorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesClusterSelectorOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesClusterSelectorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesClusterSelectorOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesClusterSelectorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesClusterSelectorOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesClusterSelectorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesClusterSelectorOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesClusterSelectorOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesClusterSelectorOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesClusterSelectorOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesClusterSelectorOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesClusterSelectorOutputReference.property.labelSelectorInput">label_selector_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesClusterSelectorOutputReference.property.labelSelector">label_selector</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesClusterSelectorOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesClusterSelector">GoogleGkeHubRolloutSequenceStagesClusterSelector</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesClusterSelectorOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesClusterSelectorOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `label_selector_input`<sup>Optional</sup> <a name="label_selector_input" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesClusterSelectorOutputReference.property.labelSelectorInput"></a>

```python
label_selector_input: str
```

- *Type:* str

---

##### `label_selector`<sup>Required</sup> <a name="label_selector" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesClusterSelectorOutputReference.property.labelSelector"></a>

```python
label_selector: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesClusterSelectorOutputReference.property.internalValue"></a>

```python
internal_value: GoogleGkeHubRolloutSequenceStagesClusterSelector
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesClusterSelector">GoogleGkeHubRolloutSequenceStagesClusterSelector</a>

---


### GoogleGkeHubRolloutSequenceStagesList <a name="GoogleGkeHubRolloutSequenceStagesList" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesList.Initializer"></a>

```python
from cdktn_provider_google_beta import google_gke_hub_rollout_sequence

googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleGkeHubRolloutSequenceStagesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStages">GoogleGkeHubRolloutSequenceStages</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[GoogleGkeHubRolloutSequenceStages]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStages">GoogleGkeHubRolloutSequenceStages</a>]

---


### GoogleGkeHubRolloutSequenceStagesOutputReference <a name="GoogleGkeHubRolloutSequenceStagesOutputReference" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_gke_hub_rollout_sequence

googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesOutputReference.putClusterSelector">put_cluster_selector</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesOutputReference.resetClusterSelector">reset_cluster_selector</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesOutputReference.resetSoakDuration">reset_soak_duration</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_cluster_selector` <a name="put_cluster_selector" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesOutputReference.putClusterSelector"></a>

```python
def put_cluster_selector(
  label_selector: str
) -> None
```

###### `label_selector`<sup>Required</sup> <a name="label_selector" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesOutputReference.putClusterSelector.parameter.labelSelector"></a>

- *Type:* str

The label selector must be a valid CEL (Common Expression Language) expression which evaluates resource.labels.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_gke_hub_rollout_sequence#label_selector GoogleGkeHubRolloutSequence#label_selector}

---

##### `reset_cluster_selector` <a name="reset_cluster_selector" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesOutputReference.resetClusterSelector"></a>

```python
def reset_cluster_selector() -> None
```

##### `reset_soak_duration` <a name="reset_soak_duration" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesOutputReference.resetSoakDuration"></a>

```python
def reset_soak_duration() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesOutputReference.property.clusterSelector">cluster_selector</a></code> | <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesClusterSelectorOutputReference">GoogleGkeHubRolloutSequenceStagesClusterSelectorOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesOutputReference.property.clusterSelectorInput">cluster_selector_input</a></code> | <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesClusterSelector">GoogleGkeHubRolloutSequenceStagesClusterSelector</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesOutputReference.property.fleetProjectsInput">fleet_projects_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesOutputReference.property.soakDurationInput">soak_duration_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesOutputReference.property.fleetProjects">fleet_projects</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesOutputReference.property.soakDuration">soak_duration</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStages">GoogleGkeHubRolloutSequenceStages</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `cluster_selector`<sup>Required</sup> <a name="cluster_selector" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesOutputReference.property.clusterSelector"></a>

```python
cluster_selector: GoogleGkeHubRolloutSequenceStagesClusterSelectorOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesClusterSelectorOutputReference">GoogleGkeHubRolloutSequenceStagesClusterSelectorOutputReference</a>

---

##### `cluster_selector_input`<sup>Optional</sup> <a name="cluster_selector_input" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesOutputReference.property.clusterSelectorInput"></a>

```python
cluster_selector_input: GoogleGkeHubRolloutSequenceStagesClusterSelector
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesClusterSelector">GoogleGkeHubRolloutSequenceStagesClusterSelector</a>

---

##### `fleet_projects_input`<sup>Optional</sup> <a name="fleet_projects_input" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesOutputReference.property.fleetProjectsInput"></a>

```python
fleet_projects_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `soak_duration_input`<sup>Optional</sup> <a name="soak_duration_input" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesOutputReference.property.soakDurationInput"></a>

```python
soak_duration_input: str
```

- *Type:* str

---

##### `fleet_projects`<sup>Required</sup> <a name="fleet_projects" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesOutputReference.property.fleetProjects"></a>

```python
fleet_projects: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `soak_duration`<sup>Required</sup> <a name="soak_duration" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesOutputReference.property.soakDuration"></a>

```python
soak_duration: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | GoogleGkeHubRolloutSequenceStages
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStages">GoogleGkeHubRolloutSequenceStages</a>

---


### GoogleGkeHubRolloutSequenceTimeoutsOutputReference <a name="GoogleGkeHubRolloutSequenceTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceTimeoutsOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_gke_hub_rollout_sequence

googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceTimeouts">GoogleGkeHubRolloutSequenceTimeouts</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | GoogleGkeHubRolloutSequenceTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceTimeouts">GoogleGkeHubRolloutSequenceTimeouts</a>

---



