# `googleNetappVolumeQuotaRule` Submodule <a name="`googleNetappVolumeQuotaRule` Submodule" id="@cdktn/provider-google-beta.googleNetappVolumeQuotaRule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleNetappVolumeQuotaRule <a name="GoogleNetappVolumeQuotaRule" id="@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_netapp_volume_quota_rule google_netapp_volume_quota_rule}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.Initializer"></a>

```python
from cdktn_provider_google_beta import google_netapp_volume_quota_rule

googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  disk_limit_mib: typing.Union[int, float],
  name: str,
  type: str,
  volume_name: str,
  deletion_policy: str = None,
  description: str = None,
  id: str = None,
  labels: typing.Mapping[str] = None,
  location: str = None,
  project: str = None,
  target: str = None,
  timeouts: GoogleNetappVolumeQuotaRuleTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.Initializer.parameter.diskLimitMib">disk_limit_mib</a></code> | <code>typing.Union[int, float]</code> | The maximum allowed capacity in MiB. |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.Initializer.parameter.name">name</a></code> | <code>str</code> | The resource name of the quotaRule. |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.Initializer.parameter.type">type</a></code> | <code>str</code> | Types of Quota Rule. Possible values: ["INDIVIDUAL_USER_QUOTA", "INDIVIDUAL_GROUP_QUOTA", "DEFAULT_USER_QUOTA", "DEFAULT_GROUP_QUOTA"]. |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.Initializer.parameter.volumeName">volume_name</a></code> | <code>str</code> | Name of the volume to create the quotaRule in. |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.Initializer.parameter.deletionPolicy">deletion_policy</a></code> | <code>str</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.Initializer.parameter.description">description</a></code> | <code>str</code> | Description for the quota rule. |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_netapp_volume_quota_rule#id GoogleNetappVolumeQuotaRule#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.Initializer.parameter.labels">labels</a></code> | <code>typing.Mapping[str]</code> | Labels as key value pairs of the quota rule. Example: '{ "owner": "Bob", "department": "finance", "purpose": "testing" }'. |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.Initializer.parameter.location">location</a></code> | <code>str</code> | Loction of the quotaRule. QuotaRules are child resources of volumes and live in the same location. |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_netapp_volume_quota_rule#project GoogleNetappVolumeQuotaRule#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.Initializer.parameter.target">target</a></code> | <code>str</code> | The quota rule applies to the specified user or group. |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRuleTimeouts">GoogleNetappVolumeQuotaRuleTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `disk_limit_mib`<sup>Required</sup> <a name="disk_limit_mib" id="@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.Initializer.parameter.diskLimitMib"></a>

- *Type:* typing.Union[int, float]

The maximum allowed capacity in MiB.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_netapp_volume_quota_rule#disk_limit_mib GoogleNetappVolumeQuotaRule#disk_limit_mib}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.Initializer.parameter.name"></a>

- *Type:* str

The resource name of the quotaRule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_netapp_volume_quota_rule#name GoogleNetappVolumeQuotaRule#name}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.Initializer.parameter.type"></a>

- *Type:* str

Types of Quota Rule. Possible values: ["INDIVIDUAL_USER_QUOTA", "INDIVIDUAL_GROUP_QUOTA", "DEFAULT_USER_QUOTA", "DEFAULT_GROUP_QUOTA"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_netapp_volume_quota_rule#type GoogleNetappVolumeQuotaRule#type}

---

##### `volume_name`<sup>Required</sup> <a name="volume_name" id="@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.Initializer.parameter.volumeName"></a>

- *Type:* str

Name of the volume to create the quotaRule in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_netapp_volume_quota_rule#volume_name GoogleNetappVolumeQuotaRule#volume_name}

---

##### `deletion_policy`<sup>Optional</sup> <a name="deletion_policy" id="@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.Initializer.parameter.deletionPolicy"></a>

- *Type:* str

Whether Terraform will be prevented from destroying the instance.

Defaults to "DELETE".
When a 'terraform destroy' or 'terraform apply' would delete the instance,
the command will fail if this field is set to "PREVENT" in Terraform state.
When set to "ABANDON", the command will remove the resource from Terraform
management without updating or deleting the resource in the API.
When set to "DELETE", deleting the resource is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_netapp_volume_quota_rule#deletion_policy GoogleNetappVolumeQuotaRule#deletion_policy}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.Initializer.parameter.description"></a>

- *Type:* str

Description for the quota rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_netapp_volume_quota_rule#description GoogleNetappVolumeQuotaRule#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_netapp_volume_quota_rule#id GoogleNetappVolumeQuotaRule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.Initializer.parameter.labels"></a>

- *Type:* typing.Mapping[str]

Labels as key value pairs of the quota rule. Example: '{ "owner": "Bob", "department": "finance", "purpose": "testing" }'.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_netapp_volume_quota_rule#labels GoogleNetappVolumeQuotaRule#labels}

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.Initializer.parameter.location"></a>

- *Type:* str

Loction of the quotaRule. QuotaRules are child resources of volumes and live in the same location.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_netapp_volume_quota_rule#location GoogleNetappVolumeQuotaRule#location}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_netapp_volume_quota_rule#project GoogleNetappVolumeQuotaRule#project}.

---

##### `target`<sup>Optional</sup> <a name="target" id="@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.Initializer.parameter.target"></a>

- *Type:* str

The quota rule applies to the specified user or group.

Valid targets for volumes with NFS protocol enabled:

* UNIX UID for individual user quota
* UNIX GID for individual group quota
  Valid targets for volumes with SMB protocol enabled:
* Windows SID for individual user quota
  Leave empty for default quotas

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_netapp_volume_quota_rule#target GoogleNetappVolumeQuotaRule#target}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRuleTimeouts">GoogleNetappVolumeQuotaRuleTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_netapp_volume_quota_rule#timeouts GoogleNetappVolumeQuotaRule#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.resetDeletionPolicy">reset_deletion_policy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.resetLabels">reset_labels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.resetLocation">reset_location</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.resetTarget">reset_target</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_netapp_volume_quota_rule#create GoogleNetappVolumeQuotaRule#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_netapp_volume_quota_rule#delete GoogleNetappVolumeQuotaRule#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_netapp_volume_quota_rule#update GoogleNetappVolumeQuotaRule#update}.

---

##### `reset_deletion_policy` <a name="reset_deletion_policy" id="@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.resetDeletionPolicy"></a>

```python
def reset_deletion_policy() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_labels` <a name="reset_labels" id="@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.resetLabels"></a>

```python
def reset_labels() -> None
```

##### `reset_location` <a name="reset_location" id="@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.resetLocation"></a>

```python
def reset_location() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_target` <a name="reset_target" id="@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.resetTarget"></a>

```python
def reset_target() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a GoogleNetappVolumeQuotaRule resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.isConstruct"></a>

```python
from cdktn_provider_google_beta import google_netapp_volume_quota_rule

googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.isTerraformElement"></a>

```python
from cdktn_provider_google_beta import google_netapp_volume_quota_rule

googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.isTerraformResource"></a>

```python
from cdktn_provider_google_beta import google_netapp_volume_quota_rule

googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.generateConfigForImport"></a>

```python
from cdktn_provider_google_beta import google_netapp_volume_quota_rule

googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a GoogleNetappVolumeQuotaRule resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the GoogleNetappVolumeQuotaRule to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing GoogleNetappVolumeQuotaRule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_netapp_volume_quota_rule#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the GoogleNetappVolumeQuotaRule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.property.createTime">create_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.property.effectiveLabels">effective_labels</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.property.stateDetails">state_details</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.property.terraformLabels">terraform_labels</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRuleTimeoutsOutputReference">GoogleNetappVolumeQuotaRuleTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.property.deletionPolicyInput">deletion_policy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.property.diskLimitMibInput">disk_limit_mib_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.property.labelsInput">labels_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.property.targetInput">target_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.property.timeoutsInput">timeouts_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRuleTimeouts">GoogleNetappVolumeQuotaRuleTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.property.volumeNameInput">volume_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.property.deletionPolicy">deletion_policy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.property.diskLimitMib">disk_limit_mib</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.property.project">project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.property.target">target</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.property.volumeName">volume_name</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `create_time`<sup>Required</sup> <a name="create_time" id="@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.property.createTime"></a>

```python
create_time: str
```

- *Type:* str

---

##### `effective_labels`<sup>Required</sup> <a name="effective_labels" id="@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.property.effectiveLabels"></a>

```python
effective_labels: StringMap
```

- *Type:* cdktn.StringMap

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `state_details`<sup>Required</sup> <a name="state_details" id="@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.property.stateDetails"></a>

```python
state_details: str
```

- *Type:* str

---

##### `terraform_labels`<sup>Required</sup> <a name="terraform_labels" id="@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.property.terraformLabels"></a>

```python
terraform_labels: StringMap
```

- *Type:* cdktn.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.property.timeouts"></a>

```python
timeouts: GoogleNetappVolumeQuotaRuleTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRuleTimeoutsOutputReference">GoogleNetappVolumeQuotaRuleTimeoutsOutputReference</a>

---

##### `deletion_policy_input`<sup>Optional</sup> <a name="deletion_policy_input" id="@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.property.deletionPolicyInput"></a>

```python
deletion_policy_input: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `disk_limit_mib_input`<sup>Optional</sup> <a name="disk_limit_mib_input" id="@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.property.diskLimitMibInput"></a>

```python
disk_limit_mib_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `labels_input`<sup>Optional</sup> <a name="labels_input" id="@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.property.labelsInput"></a>

```python
labels_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `target_input`<sup>Optional</sup> <a name="target_input" id="@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.property.targetInput"></a>

```python
target_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.property.timeoutsInput"></a>

```python
timeouts_input: IResolvable | GoogleNetappVolumeQuotaRuleTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRuleTimeouts">GoogleNetappVolumeQuotaRuleTimeouts</a>

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `volume_name_input`<sup>Optional</sup> <a name="volume_name_input" id="@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.property.volumeNameInput"></a>

```python
volume_name_input: str
```

- *Type:* str

---

##### `deletion_policy`<sup>Required</sup> <a name="deletion_policy" id="@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.property.deletionPolicy"></a>

```python
deletion_policy: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `disk_limit_mib`<sup>Required</sup> <a name="disk_limit_mib" id="@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.property.diskLimitMib"></a>

```python
disk_limit_mib: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.property.project"></a>

```python
project: str
```

- *Type:* str

---

##### `target`<sup>Required</sup> <a name="target" id="@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.property.target"></a>

```python
target: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `volume_name`<sup>Required</sup> <a name="volume_name" id="@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.property.volumeName"></a>

```python
volume_name: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleNetappVolumeQuotaRuleConfig <a name="GoogleNetappVolumeQuotaRuleConfig" id="@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRuleConfig.Initializer"></a>

```python
from cdktn_provider_google_beta import google_netapp_volume_quota_rule

googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRuleConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  disk_limit_mib: typing.Union[int, float],
  name: str,
  type: str,
  volume_name: str,
  deletion_policy: str = None,
  description: str = None,
  id: str = None,
  labels: typing.Mapping[str] = None,
  location: str = None,
  project: str = None,
  target: str = None,
  timeouts: GoogleNetappVolumeQuotaRuleTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRuleConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRuleConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRuleConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRuleConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRuleConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRuleConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRuleConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRuleConfig.property.diskLimitMib">disk_limit_mib</a></code> | <code>typing.Union[int, float]</code> | The maximum allowed capacity in MiB. |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRuleConfig.property.name">name</a></code> | <code>str</code> | The resource name of the quotaRule. |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRuleConfig.property.type">type</a></code> | <code>str</code> | Types of Quota Rule. Possible values: ["INDIVIDUAL_USER_QUOTA", "INDIVIDUAL_GROUP_QUOTA", "DEFAULT_USER_QUOTA", "DEFAULT_GROUP_QUOTA"]. |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRuleConfig.property.volumeName">volume_name</a></code> | <code>str</code> | Name of the volume to create the quotaRule in. |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRuleConfig.property.deletionPolicy">deletion_policy</a></code> | <code>str</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRuleConfig.property.description">description</a></code> | <code>str</code> | Description for the quota rule. |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRuleConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_netapp_volume_quota_rule#id GoogleNetappVolumeQuotaRule#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRuleConfig.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | Labels as key value pairs of the quota rule. Example: '{ "owner": "Bob", "department": "finance", "purpose": "testing" }'. |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRuleConfig.property.location">location</a></code> | <code>str</code> | Loction of the quotaRule. QuotaRules are child resources of volumes and live in the same location. |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRuleConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_netapp_volume_quota_rule#project GoogleNetappVolumeQuotaRule#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRuleConfig.property.target">target</a></code> | <code>str</code> | The quota rule applies to the specified user or group. |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRuleConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRuleTimeouts">GoogleNetappVolumeQuotaRuleTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRuleConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRuleConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRuleConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRuleConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRuleConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRuleConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRuleConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `disk_limit_mib`<sup>Required</sup> <a name="disk_limit_mib" id="@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRuleConfig.property.diskLimitMib"></a>

```python
disk_limit_mib: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The maximum allowed capacity in MiB.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_netapp_volume_quota_rule#disk_limit_mib GoogleNetappVolumeQuotaRule#disk_limit_mib}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRuleConfig.property.name"></a>

```python
name: str
```

- *Type:* str

The resource name of the quotaRule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_netapp_volume_quota_rule#name GoogleNetappVolumeQuotaRule#name}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRuleConfig.property.type"></a>

```python
type: str
```

- *Type:* str

Types of Quota Rule. Possible values: ["INDIVIDUAL_USER_QUOTA", "INDIVIDUAL_GROUP_QUOTA", "DEFAULT_USER_QUOTA", "DEFAULT_GROUP_QUOTA"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_netapp_volume_quota_rule#type GoogleNetappVolumeQuotaRule#type}

---

##### `volume_name`<sup>Required</sup> <a name="volume_name" id="@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRuleConfig.property.volumeName"></a>

```python
volume_name: str
```

- *Type:* str

Name of the volume to create the quotaRule in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_netapp_volume_quota_rule#volume_name GoogleNetappVolumeQuotaRule#volume_name}

---

##### `deletion_policy`<sup>Optional</sup> <a name="deletion_policy" id="@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRuleConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_netapp_volume_quota_rule#deletion_policy GoogleNetappVolumeQuotaRule#deletion_policy}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRuleConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Description for the quota rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_netapp_volume_quota_rule#description GoogleNetappVolumeQuotaRule#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRuleConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_netapp_volume_quota_rule#id GoogleNetappVolumeQuotaRule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRuleConfig.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Labels as key value pairs of the quota rule. Example: '{ "owner": "Bob", "department": "finance", "purpose": "testing" }'.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_netapp_volume_quota_rule#labels GoogleNetappVolumeQuotaRule#labels}

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRuleConfig.property.location"></a>

```python
location: str
```

- *Type:* str

Loction of the quotaRule. QuotaRules are child resources of volumes and live in the same location.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_netapp_volume_quota_rule#location GoogleNetappVolumeQuotaRule#location}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRuleConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_netapp_volume_quota_rule#project GoogleNetappVolumeQuotaRule#project}.

---

##### `target`<sup>Optional</sup> <a name="target" id="@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRuleConfig.property.target"></a>

```python
target: str
```

- *Type:* str

The quota rule applies to the specified user or group.

Valid targets for volumes with NFS protocol enabled:

* UNIX UID for individual user quota
* UNIX GID for individual group quota
  Valid targets for volumes with SMB protocol enabled:
* Windows SID for individual user quota
  Leave empty for default quotas

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_netapp_volume_quota_rule#target GoogleNetappVolumeQuotaRule#target}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRuleConfig.property.timeouts"></a>

```python
timeouts: GoogleNetappVolumeQuotaRuleTimeouts
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRuleTimeouts">GoogleNetappVolumeQuotaRuleTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_netapp_volume_quota_rule#timeouts GoogleNetappVolumeQuotaRule#timeouts}

---

### GoogleNetappVolumeQuotaRuleTimeouts <a name="GoogleNetappVolumeQuotaRuleTimeouts" id="@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRuleTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRuleTimeouts.Initializer"></a>

```python
from cdktn_provider_google_beta import google_netapp_volume_quota_rule

googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRuleTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRuleTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_netapp_volume_quota_rule#create GoogleNetappVolumeQuotaRule#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRuleTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_netapp_volume_quota_rule#delete GoogleNetappVolumeQuotaRule#delete}. |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRuleTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_netapp_volume_quota_rule#update GoogleNetappVolumeQuotaRule#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRuleTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_netapp_volume_quota_rule#create GoogleNetappVolumeQuotaRule#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRuleTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_netapp_volume_quota_rule#delete GoogleNetappVolumeQuotaRule#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRuleTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_netapp_volume_quota_rule#update GoogleNetappVolumeQuotaRule#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleNetappVolumeQuotaRuleTimeoutsOutputReference <a name="GoogleNetappVolumeQuotaRuleTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRuleTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRuleTimeoutsOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_netapp_volume_quota_rule

googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRuleTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRuleTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRuleTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRuleTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRuleTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRuleTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRuleTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRuleTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRuleTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRuleTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRuleTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRuleTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRuleTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRuleTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRuleTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRuleTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRuleTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRuleTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRuleTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRuleTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRuleTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRuleTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRuleTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRuleTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRuleTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRuleTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRuleTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRuleTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRuleTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRuleTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRuleTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRuleTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRuleTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRuleTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRuleTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRuleTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRuleTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRuleTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRuleTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRuleTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRuleTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRuleTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRuleTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRuleTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRuleTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRuleTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRuleTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRuleTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRuleTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRuleTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRuleTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRuleTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRuleTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRuleTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRuleTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRuleTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRuleTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRuleTimeouts">GoogleNetappVolumeQuotaRuleTimeouts</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRuleTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRuleTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRuleTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRuleTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRuleTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRuleTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRuleTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRuleTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRuleTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | GoogleNetappVolumeQuotaRuleTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRuleTimeouts">GoogleNetappVolumeQuotaRuleTimeouts</a>

---



