# `googleChronicleNativeDashboard` Submodule <a name="`googleChronicleNativeDashboard` Submodule" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleChronicleNativeDashboard <a name="GoogleChronicleNativeDashboard" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_chronicle_native_dashboard google_chronicle_native_dashboard}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.Initializer"></a>

```python
from cdktn_provider_google_beta import google_chronicle_native_dashboard

googleChronicleNativeDashboard.GoogleChronicleNativeDashboard(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  display_name: str,
  instance: str,
  location: str,
  access: str = None,
  charts: IResolvable | typing.List[GoogleChronicleNativeDashboardCharts] = None,
  deletion_policy: str = None,
  description: str = None,
  filters: IResolvable | typing.List[GoogleChronicleNativeDashboardFilters] = None,
  id: str = None,
  is_pinned: bool | IResolvable = None,
  project: str = None,
  timeouts: GoogleChronicleNativeDashboardTimeouts = None,
  type: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | The display name/title of the dashboard visible to users. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.Initializer.parameter.instance">instance</a></code> | <code>str</code> | The ID of the Chronicle instance. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.Initializer.parameter.location">location</a></code> | <code>str</code> | The location of the Chronicle instance. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.Initializer.parameter.access">access</a></code> | <code>str</code> | The access level of the dashboard. Possible values: DASHBOARD_PRIVATE DASHBOARD_PUBLIC. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.Initializer.parameter.charts">charts</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardCharts">GoogleChronicleNativeDashboardCharts</a>]</code> | charts block. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.Initializer.parameter.deletionPolicy">deletion_policy</a></code> | <code>str</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.Initializer.parameter.description">description</a></code> | <code>str</code> | A description of the dashboard. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.Initializer.parameter.filters">filters</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFilters">GoogleChronicleNativeDashboardFilters</a>]</code> | filters block. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_chronicle_native_dashboard#id GoogleChronicleNativeDashboard#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.Initializer.parameter.isPinned">is_pinned</a></code> | <code>bool \| cdktn.IResolvable</code> | Whether the dashboard is pinned by the user. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_chronicle_native_dashboard#project GoogleChronicleNativeDashboard#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardTimeouts">GoogleChronicleNativeDashboardTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.Initializer.parameter.type">type</a></code> | <code>str</code> | The type of dashboard. Possible values: CURATED, PRIVATE, PUBLIC, CUSTOM, MARKETPLACE. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.Initializer.parameter.displayName"></a>

- *Type:* str

The display name/title of the dashboard visible to users.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_chronicle_native_dashboard#display_name GoogleChronicleNativeDashboard#display_name}

---

##### `instance`<sup>Required</sup> <a name="instance" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.Initializer.parameter.instance"></a>

- *Type:* str

The ID of the Chronicle instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_chronicle_native_dashboard#instance GoogleChronicleNativeDashboard#instance}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.Initializer.parameter.location"></a>

- *Type:* str

The location of the Chronicle instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_chronicle_native_dashboard#location GoogleChronicleNativeDashboard#location}

---

##### `access`<sup>Optional</sup> <a name="access" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.Initializer.parameter.access"></a>

- *Type:* str

The access level of the dashboard. Possible values: DASHBOARD_PRIVATE DASHBOARD_PUBLIC.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_chronicle_native_dashboard#access GoogleChronicleNativeDashboard#access}

---

##### `charts`<sup>Optional</sup> <a name="charts" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.Initializer.parameter.charts"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardCharts">GoogleChronicleNativeDashboardCharts</a>]

charts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_chronicle_native_dashboard#charts GoogleChronicleNativeDashboard#charts}

---

##### `deletion_policy`<sup>Optional</sup> <a name="deletion_policy" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.Initializer.parameter.deletionPolicy"></a>

- *Type:* str

Whether Terraform will be prevented from destroying the instance.

Defaults to "DELETE".
When a 'terraform destroy' or 'terraform apply' would delete the instance,
the command will fail if this field is set to "PREVENT" in Terraform state.
When set to "ABANDON", the command will remove the resource from Terraform
management without updating or deleting the resource in the API.
When set to "DELETE", deleting the resource is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_chronicle_native_dashboard#deletion_policy GoogleChronicleNativeDashboard#deletion_policy}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.Initializer.parameter.description"></a>

- *Type:* str

A description of the dashboard.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_chronicle_native_dashboard#description GoogleChronicleNativeDashboard#description}

---

##### `filters`<sup>Optional</sup> <a name="filters" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.Initializer.parameter.filters"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFilters">GoogleChronicleNativeDashboardFilters</a>]

filters block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_chronicle_native_dashboard#filters GoogleChronicleNativeDashboard#filters}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_chronicle_native_dashboard#id GoogleChronicleNativeDashboard#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `is_pinned`<sup>Optional</sup> <a name="is_pinned" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.Initializer.parameter.isPinned"></a>

- *Type:* bool | cdktn.IResolvable

Whether the dashboard is pinned by the user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_chronicle_native_dashboard#is_pinned GoogleChronicleNativeDashboard#is_pinned}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_chronicle_native_dashboard#project GoogleChronicleNativeDashboard#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardTimeouts">GoogleChronicleNativeDashboardTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_chronicle_native_dashboard#timeouts GoogleChronicleNativeDashboard#timeouts}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.Initializer.parameter.type"></a>

- *Type:* str

The type of dashboard. Possible values: CURATED, PRIVATE, PUBLIC, CUSTOM, MARKETPLACE.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_chronicle_native_dashboard#type GoogleChronicleNativeDashboard#type}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.putCharts">put_charts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.putFilters">put_filters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.resetAccess">reset_access</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.resetCharts">reset_charts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.resetDeletionPolicy">reset_deletion_policy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.resetFilters">reset_filters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.resetIsPinned">reset_is_pinned</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.resetTimeouts">reset_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.resetType">reset_type</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_charts` <a name="put_charts" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.putCharts"></a>

```python
def put_charts(
  value: IResolvable | typing.List[GoogleChronicleNativeDashboardCharts]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.putCharts.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardCharts">GoogleChronicleNativeDashboardCharts</a>]

---

##### `put_filters` <a name="put_filters" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.putFilters"></a>

```python
def put_filters(
  value: IResolvable | typing.List[GoogleChronicleNativeDashboardFilters]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.putFilters.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFilters">GoogleChronicleNativeDashboardFilters</a>]

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_chronicle_native_dashboard#create GoogleChronicleNativeDashboard#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_chronicle_native_dashboard#delete GoogleChronicleNativeDashboard#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_chronicle_native_dashboard#update GoogleChronicleNativeDashboard#update}.

---

##### `reset_access` <a name="reset_access" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.resetAccess"></a>

```python
def reset_access() -> None
```

##### `reset_charts` <a name="reset_charts" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.resetCharts"></a>

```python
def reset_charts() -> None
```

##### `reset_deletion_policy` <a name="reset_deletion_policy" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.resetDeletionPolicy"></a>

```python
def reset_deletion_policy() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_filters` <a name="reset_filters" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.resetFilters"></a>

```python
def reset_filters() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_is_pinned` <a name="reset_is_pinned" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.resetIsPinned"></a>

```python
def reset_is_pinned() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

##### `reset_type` <a name="reset_type" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.resetType"></a>

```python
def reset_type() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a GoogleChronicleNativeDashboard resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.isConstruct"></a>

```python
from cdktn_provider_google_beta import google_chronicle_native_dashboard

googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.isTerraformElement"></a>

```python
from cdktn_provider_google_beta import google_chronicle_native_dashboard

googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.isTerraformResource"></a>

```python
from cdktn_provider_google_beta import google_chronicle_native_dashboard

googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.generateConfigForImport"></a>

```python
from cdktn_provider_google_beta import google_chronicle_native_dashboard

googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a GoogleChronicleNativeDashboard resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the GoogleChronicleNativeDashboard to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing GoogleChronicleNativeDashboard that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_chronicle_native_dashboard#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the GoogleChronicleNativeDashboard to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.property.charts">charts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsList">GoogleChronicleNativeDashboardChartsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.property.createTime">create_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.property.createUserId">create_user_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.property.dashboardId">dashboard_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.property.etag">etag</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.property.filters">filters</a></code> | <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersList">GoogleChronicleNativeDashboardFiltersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.property.fingerprint">fingerprint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.property.lastViewedTime">last_viewed_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardTimeoutsOutputReference">GoogleChronicleNativeDashboardTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.property.updateTime">update_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.property.updateUserId">update_user_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.property.accessInput">access_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.property.chartsInput">charts_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardCharts">GoogleChronicleNativeDashboardCharts</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.property.deletionPolicyInput">deletion_policy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.property.filtersInput">filters_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFilters">GoogleChronicleNativeDashboardFilters</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.property.instanceInput">instance_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.property.isPinnedInput">is_pinned_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.property.timeoutsInput">timeouts_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardTimeouts">GoogleChronicleNativeDashboardTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.property.access">access</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.property.deletionPolicy">deletion_policy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.property.instance">instance</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.property.isPinned">is_pinned</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.property.project">project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.property.type">type</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `charts`<sup>Required</sup> <a name="charts" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.property.charts"></a>

```python
charts: GoogleChronicleNativeDashboardChartsList
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsList">GoogleChronicleNativeDashboardChartsList</a>

---

##### `create_time`<sup>Required</sup> <a name="create_time" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.property.createTime"></a>

```python
create_time: str
```

- *Type:* str

---

##### `create_user_id`<sup>Required</sup> <a name="create_user_id" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.property.createUserId"></a>

```python
create_user_id: str
```

- *Type:* str

---

##### `dashboard_id`<sup>Required</sup> <a name="dashboard_id" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.property.dashboardId"></a>

```python
dashboard_id: str
```

- *Type:* str

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.property.etag"></a>

```python
etag: str
```

- *Type:* str

---

##### `filters`<sup>Required</sup> <a name="filters" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.property.filters"></a>

```python
filters: GoogleChronicleNativeDashboardFiltersList
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersList">GoogleChronicleNativeDashboardFiltersList</a>

---

##### `fingerprint`<sup>Required</sup> <a name="fingerprint" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.property.fingerprint"></a>

```python
fingerprint: str
```

- *Type:* str

---

##### `last_viewed_time`<sup>Required</sup> <a name="last_viewed_time" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.property.lastViewedTime"></a>

```python
last_viewed_time: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.property.timeouts"></a>

```python
timeouts: GoogleChronicleNativeDashboardTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardTimeoutsOutputReference">GoogleChronicleNativeDashboardTimeoutsOutputReference</a>

---

##### `update_time`<sup>Required</sup> <a name="update_time" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.property.updateTime"></a>

```python
update_time: str
```

- *Type:* str

---

##### `update_user_id`<sup>Required</sup> <a name="update_user_id" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.property.updateUserId"></a>

```python
update_user_id: str
```

- *Type:* str

---

##### `access_input`<sup>Optional</sup> <a name="access_input" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.property.accessInput"></a>

```python
access_input: str
```

- *Type:* str

---

##### `charts_input`<sup>Optional</sup> <a name="charts_input" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.property.chartsInput"></a>

```python
charts_input: IResolvable | typing.List[GoogleChronicleNativeDashboardCharts]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardCharts">GoogleChronicleNativeDashboardCharts</a>]

---

##### `deletion_policy_input`<sup>Optional</sup> <a name="deletion_policy_input" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.property.deletionPolicyInput"></a>

```python
deletion_policy_input: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `filters_input`<sup>Optional</sup> <a name="filters_input" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.property.filtersInput"></a>

```python
filters_input: IResolvable | typing.List[GoogleChronicleNativeDashboardFilters]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFilters">GoogleChronicleNativeDashboardFilters</a>]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `instance_input`<sup>Optional</sup> <a name="instance_input" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.property.instanceInput"></a>

```python
instance_input: str
```

- *Type:* str

---

##### `is_pinned_input`<sup>Optional</sup> <a name="is_pinned_input" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.property.isPinnedInput"></a>

```python
is_pinned_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.property.timeoutsInput"></a>

```python
timeouts_input: IResolvable | GoogleChronicleNativeDashboardTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardTimeouts">GoogleChronicleNativeDashboardTimeouts</a>

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `access`<sup>Required</sup> <a name="access" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.property.access"></a>

```python
access: str
```

- *Type:* str

---

##### `deletion_policy`<sup>Required</sup> <a name="deletion_policy" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.property.deletionPolicy"></a>

```python
deletion_policy: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `instance`<sup>Required</sup> <a name="instance" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.property.instance"></a>

```python
instance: str
```

- *Type:* str

---

##### `is_pinned`<sup>Required</sup> <a name="is_pinned" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.property.isPinned"></a>

```python
is_pinned: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.property.project"></a>

```python
project: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.property.type"></a>

```python
type: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleChronicleNativeDashboardCharts <a name="GoogleChronicleNativeDashboardCharts" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardCharts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardCharts.Initializer"></a>

```python
from cdktn_provider_google_beta import google_chronicle_native_dashboard

googleChronicleNativeDashboard.GoogleChronicleNativeDashboardCharts(
  chart_layout: GoogleChronicleNativeDashboardChartsChartLayout = None,
  dashboard_chart: str = None,
  filters_ids: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardCharts.property.chartLayout">chart_layout</a></code> | <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsChartLayout">GoogleChronicleNativeDashboardChartsChartLayout</a></code> | chart_layout block. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardCharts.property.dashboardChart">dashboard_chart</a></code> | <code>str</code> | The resource name of the associated DashboardChart. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardCharts.property.filtersIds">filters_ids</a></code> | <code>typing.List[str]</code> | List of dashboard filter IDs applied to this chart. |

---

##### `chart_layout`<sup>Optional</sup> <a name="chart_layout" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardCharts.property.chartLayout"></a>

```python
chart_layout: GoogleChronicleNativeDashboardChartsChartLayout
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsChartLayout">GoogleChronicleNativeDashboardChartsChartLayout</a>

chart_layout block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_chronicle_native_dashboard#chart_layout GoogleChronicleNativeDashboard#chart_layout}

---

##### `dashboard_chart`<sup>Optional</sup> <a name="dashboard_chart" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardCharts.property.dashboardChart"></a>

```python
dashboard_chart: str
```

- *Type:* str

The resource name of the associated DashboardChart.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_chronicle_native_dashboard#dashboard_chart GoogleChronicleNativeDashboard#dashboard_chart}

---

##### `filters_ids`<sup>Optional</sup> <a name="filters_ids" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardCharts.property.filtersIds"></a>

```python
filters_ids: typing.List[str]
```

- *Type:* typing.List[str]

List of dashboard filter IDs applied to this chart.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_chronicle_native_dashboard#filters_ids GoogleChronicleNativeDashboard#filters_ids}

---

### GoogleChronicleNativeDashboardChartsChartLayout <a name="GoogleChronicleNativeDashboardChartsChartLayout" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsChartLayout"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsChartLayout.Initializer"></a>

```python
from cdktn_provider_google_beta import google_chronicle_native_dashboard

googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsChartLayout(
  span_x: typing.Union[int, float],
  span_y: typing.Union[int, float],
  start_x: typing.Union[int, float] = None,
  start_y: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsChartLayout.property.spanX">span_x</a></code> | <code>typing.Union[int, float]</code> | The number of columns the chart spans. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsChartLayout.property.spanY">span_y</a></code> | <code>typing.Union[int, float]</code> | The number of rows the chart spans. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsChartLayout.property.startX">start_x</a></code> | <code>typing.Union[int, float]</code> | The starting X coordinate. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsChartLayout.property.startY">start_y</a></code> | <code>typing.Union[int, float]</code> | The starting Y coordinate. |

---

##### `span_x`<sup>Required</sup> <a name="span_x" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsChartLayout.property.spanX"></a>

```python
span_x: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The number of columns the chart spans.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_chronicle_native_dashboard#span_x GoogleChronicleNativeDashboard#span_x}

---

##### `span_y`<sup>Required</sup> <a name="span_y" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsChartLayout.property.spanY"></a>

```python
span_y: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The number of rows the chart spans.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_chronicle_native_dashboard#span_y GoogleChronicleNativeDashboard#span_y}

---

##### `start_x`<sup>Optional</sup> <a name="start_x" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsChartLayout.property.startX"></a>

```python
start_x: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The starting X coordinate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_chronicle_native_dashboard#start_x GoogleChronicleNativeDashboard#start_x}

---

##### `start_y`<sup>Optional</sup> <a name="start_y" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsChartLayout.property.startY"></a>

```python
start_y: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The starting Y coordinate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_chronicle_native_dashboard#start_y GoogleChronicleNativeDashboard#start_y}

---

### GoogleChronicleNativeDashboardConfig <a name="GoogleChronicleNativeDashboardConfig" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardConfig.Initializer"></a>

```python
from cdktn_provider_google_beta import google_chronicle_native_dashboard

googleChronicleNativeDashboard.GoogleChronicleNativeDashboardConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  display_name: str,
  instance: str,
  location: str,
  access: str = None,
  charts: IResolvable | typing.List[GoogleChronicleNativeDashboardCharts] = None,
  deletion_policy: str = None,
  description: str = None,
  filters: IResolvable | typing.List[GoogleChronicleNativeDashboardFilters] = None,
  id: str = None,
  is_pinned: bool | IResolvable = None,
  project: str = None,
  timeouts: GoogleChronicleNativeDashboardTimeouts = None,
  type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardConfig.property.displayName">display_name</a></code> | <code>str</code> | The display name/title of the dashboard visible to users. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardConfig.property.instance">instance</a></code> | <code>str</code> | The ID of the Chronicle instance. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardConfig.property.location">location</a></code> | <code>str</code> | The location of the Chronicle instance. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardConfig.property.access">access</a></code> | <code>str</code> | The access level of the dashboard. Possible values: DASHBOARD_PRIVATE DASHBOARD_PUBLIC. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardConfig.property.charts">charts</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardCharts">GoogleChronicleNativeDashboardCharts</a>]</code> | charts block. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardConfig.property.deletionPolicy">deletion_policy</a></code> | <code>str</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardConfig.property.description">description</a></code> | <code>str</code> | A description of the dashboard. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardConfig.property.filters">filters</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFilters">GoogleChronicleNativeDashboardFilters</a>]</code> | filters block. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_chronicle_native_dashboard#id GoogleChronicleNativeDashboard#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardConfig.property.isPinned">is_pinned</a></code> | <code>bool \| cdktn.IResolvable</code> | Whether the dashboard is pinned by the user. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_chronicle_native_dashboard#project GoogleChronicleNativeDashboard#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardTimeouts">GoogleChronicleNativeDashboardTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardConfig.property.type">type</a></code> | <code>str</code> | The type of dashboard. Possible values: CURATED, PRIVATE, PUBLIC, CUSTOM, MARKETPLACE. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

The display name/title of the dashboard visible to users.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_chronicle_native_dashboard#display_name GoogleChronicleNativeDashboard#display_name}

---

##### `instance`<sup>Required</sup> <a name="instance" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardConfig.property.instance"></a>

```python
instance: str
```

- *Type:* str

The ID of the Chronicle instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_chronicle_native_dashboard#instance GoogleChronicleNativeDashboard#instance}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardConfig.property.location"></a>

```python
location: str
```

- *Type:* str

The location of the Chronicle instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_chronicle_native_dashboard#location GoogleChronicleNativeDashboard#location}

---

##### `access`<sup>Optional</sup> <a name="access" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardConfig.property.access"></a>

```python
access: str
```

- *Type:* str

The access level of the dashboard. Possible values: DASHBOARD_PRIVATE DASHBOARD_PUBLIC.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_chronicle_native_dashboard#access GoogleChronicleNativeDashboard#access}

---

##### `charts`<sup>Optional</sup> <a name="charts" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardConfig.property.charts"></a>

```python
charts: IResolvable | typing.List[GoogleChronicleNativeDashboardCharts]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardCharts">GoogleChronicleNativeDashboardCharts</a>]

charts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_chronicle_native_dashboard#charts GoogleChronicleNativeDashboard#charts}

---

##### `deletion_policy`<sup>Optional</sup> <a name="deletion_policy" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_chronicle_native_dashboard#deletion_policy GoogleChronicleNativeDashboard#deletion_policy}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardConfig.property.description"></a>

```python
description: str
```

- *Type:* str

A description of the dashboard.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_chronicle_native_dashboard#description GoogleChronicleNativeDashboard#description}

---

##### `filters`<sup>Optional</sup> <a name="filters" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardConfig.property.filters"></a>

```python
filters: IResolvable | typing.List[GoogleChronicleNativeDashboardFilters]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFilters">GoogleChronicleNativeDashboardFilters</a>]

filters block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_chronicle_native_dashboard#filters GoogleChronicleNativeDashboard#filters}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_chronicle_native_dashboard#id GoogleChronicleNativeDashboard#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `is_pinned`<sup>Optional</sup> <a name="is_pinned" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardConfig.property.isPinned"></a>

```python
is_pinned: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Whether the dashboard is pinned by the user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_chronicle_native_dashboard#is_pinned GoogleChronicleNativeDashboard#is_pinned}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_chronicle_native_dashboard#project GoogleChronicleNativeDashboard#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardConfig.property.timeouts"></a>

```python
timeouts: GoogleChronicleNativeDashboardTimeouts
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardTimeouts">GoogleChronicleNativeDashboardTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_chronicle_native_dashboard#timeouts GoogleChronicleNativeDashboard#timeouts}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardConfig.property.type"></a>

```python
type: str
```

- *Type:* str

The type of dashboard. Possible values: CURATED, PRIVATE, PUBLIC, CUSTOM, MARKETPLACE.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_chronicle_native_dashboard#type GoogleChronicleNativeDashboard#type}

---

### GoogleChronicleNativeDashboardFilters <a name="GoogleChronicleNativeDashboardFilters" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFilters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFilters.Initializer"></a>

```python
from cdktn_provider_google_beta import google_chronicle_native_dashboard

googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFilters(
  chart_ids: typing.List[str] = None,
  data_source: str = None,
  display_name: str = None,
  field_path: str = None,
  filter_operator_and_field_values: IResolvable | typing.List[GoogleChronicleNativeDashboardFiltersFilterOperatorAndFieldValues] = None,
  id: str = None,
  is_mandatory: bool | IResolvable = None,
  is_standard_time_range_filter: bool | IResolvable = None,
  is_standard_time_range_filter_enabled: bool | IResolvable = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFilters.property.chartIds">chart_ids</a></code> | <code>typing.List[str]</code> | The IDs of charts that this filter applies to. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFilters.property.dataSource">data_source</a></code> | <code>str</code> | The data source for the filter. Possible values: UDM, ENTITY, INGESTION_METRICS, RULE_DETECTIONS, RULESETS, GLOBAL, IOC_MATCHES, RULES, SOAR_CASES, SOAR_PLAYBOOKS, SOAR_CASE_HISTORY, DATA_TABLE, INVESTIGATION, INVESTIGATION_FEEDBACK. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFilters.property.displayName">display_name</a></code> | <code>str</code> | The display name of the filter. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFilters.property.fieldPath">field_path</a></code> | <code>str</code> | The UDM field path being filtered. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFilters.property.filterOperatorAndFieldValues">filter_operator_and_field_values</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersFilterOperatorAndFieldValues">GoogleChronicleNativeDashboardFiltersFilterOperatorAndFieldValues</a>]</code> | filter_operator_and_field_values block. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFilters.property.id">id</a></code> | <code>str</code> | The unique ID of the filter. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFilters.property.isMandatory">is_mandatory</a></code> | <code>bool \| cdktn.IResolvable</code> | Whether the filter is mandatory for the dashboard consumer. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFilters.property.isStandardTimeRangeFilter">is_standard_time_range_filter</a></code> | <code>bool \| cdktn.IResolvable</code> | Whether the filter is a standard time range filter. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFilters.property.isStandardTimeRangeFilterEnabled">is_standard_time_range_filter_enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | Whether the standard time range filter is currently enabled. |

---

##### `chart_ids`<sup>Optional</sup> <a name="chart_ids" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFilters.property.chartIds"></a>

```python
chart_ids: typing.List[str]
```

- *Type:* typing.List[str]

The IDs of charts that this filter applies to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_chronicle_native_dashboard#chart_ids GoogleChronicleNativeDashboard#chart_ids}

---

##### `data_source`<sup>Optional</sup> <a name="data_source" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFilters.property.dataSource"></a>

```python
data_source: str
```

- *Type:* str

The data source for the filter. Possible values: UDM, ENTITY, INGESTION_METRICS, RULE_DETECTIONS, RULESETS, GLOBAL, IOC_MATCHES, RULES, SOAR_CASES, SOAR_PLAYBOOKS, SOAR_CASE_HISTORY, DATA_TABLE, INVESTIGATION, INVESTIGATION_FEEDBACK.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_chronicle_native_dashboard#data_source GoogleChronicleNativeDashboard#data_source}

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFilters.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

The display name of the filter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_chronicle_native_dashboard#display_name GoogleChronicleNativeDashboard#display_name}

---

##### `field_path`<sup>Optional</sup> <a name="field_path" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFilters.property.fieldPath"></a>

```python
field_path: str
```

- *Type:* str

The UDM field path being filtered.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_chronicle_native_dashboard#field_path GoogleChronicleNativeDashboard#field_path}

---

##### `filter_operator_and_field_values`<sup>Optional</sup> <a name="filter_operator_and_field_values" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFilters.property.filterOperatorAndFieldValues"></a>

```python
filter_operator_and_field_values: IResolvable | typing.List[GoogleChronicleNativeDashboardFiltersFilterOperatorAndFieldValues]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersFilterOperatorAndFieldValues">GoogleChronicleNativeDashboardFiltersFilterOperatorAndFieldValues</a>]

filter_operator_and_field_values block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_chronicle_native_dashboard#filter_operator_and_field_values GoogleChronicleNativeDashboard#filter_operator_and_field_values}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFilters.property.id"></a>

```python
id: str
```

- *Type:* str

The unique ID of the filter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_chronicle_native_dashboard#id GoogleChronicleNativeDashboard#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `is_mandatory`<sup>Optional</sup> <a name="is_mandatory" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFilters.property.isMandatory"></a>

```python
is_mandatory: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Whether the filter is mandatory for the dashboard consumer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_chronicle_native_dashboard#is_mandatory GoogleChronicleNativeDashboard#is_mandatory}

---

##### `is_standard_time_range_filter`<sup>Optional</sup> <a name="is_standard_time_range_filter" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFilters.property.isStandardTimeRangeFilter"></a>

```python
is_standard_time_range_filter: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Whether the filter is a standard time range filter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_chronicle_native_dashboard#is_standard_time_range_filter GoogleChronicleNativeDashboard#is_standard_time_range_filter}

---

##### `is_standard_time_range_filter_enabled`<sup>Optional</sup> <a name="is_standard_time_range_filter_enabled" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFilters.property.isStandardTimeRangeFilterEnabled"></a>

```python
is_standard_time_range_filter_enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Whether the standard time range filter is currently enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_chronicle_native_dashboard#is_standard_time_range_filter_enabled GoogleChronicleNativeDashboard#is_standard_time_range_filter_enabled}

---

### GoogleChronicleNativeDashboardFiltersFilterOperatorAndFieldValues <a name="GoogleChronicleNativeDashboardFiltersFilterOperatorAndFieldValues" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersFilterOperatorAndFieldValues"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersFilterOperatorAndFieldValues.Initializer"></a>

```python
from cdktn_provider_google_beta import google_chronicle_native_dashboard

googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersFilterOperatorAndFieldValues(
  field_values: typing.List[str] = None,
  filter_operator: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersFilterOperatorAndFieldValues.property.fieldValues">field_values</a></code> | <code>typing.List[str]</code> | The values for the modifier. All operators should have a single value other than 'IN' and 'BETWEEN'. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersFilterOperatorAndFieldValues.property.filterOperator">filter_operator</a></code> | <code>str</code> | The operator to apply to the field. |

---

##### `field_values`<sup>Optional</sup> <a name="field_values" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersFilterOperatorAndFieldValues.property.fieldValues"></a>

```python
field_values: typing.List[str]
```

- *Type:* typing.List[str]

The values for the modifier. All operators should have a single value other than 'IN' and 'BETWEEN'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_chronicle_native_dashboard#field_values GoogleChronicleNativeDashboard#field_values}

---

##### `filter_operator`<sup>Optional</sup> <a name="filter_operator" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersFilterOperatorAndFieldValues.property.filterOperator"></a>

```python
filter_operator: str
```

- *Type:* str

The operator to apply to the field.

Possible values: ["EQUAL", "NOT_EQUAL", "IN", "GREATER_THAN", "GREATER_THAN_OR_EQUAL_TO", "LESS_THAN", "LESS_THAN_OR_EQUAL_TO", "BETWEEN", "PAST", "IS_NULL", "IS_NOT_NULL", "STARTS_WITH", "ENDS_WITH", "DOES_NOT_STARTS_WITH", "DOES_NOT_ENDS_WITH", "NOT_IN", "CONTAINS", "DOES_NOT_CONTAIN"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_chronicle_native_dashboard#filter_operator GoogleChronicleNativeDashboard#filter_operator}

---

### GoogleChronicleNativeDashboardTimeouts <a name="GoogleChronicleNativeDashboardTimeouts" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardTimeouts.Initializer"></a>

```python
from cdktn_provider_google_beta import google_chronicle_native_dashboard

googleChronicleNativeDashboard.GoogleChronicleNativeDashboardTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_chronicle_native_dashboard#create GoogleChronicleNativeDashboard#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_chronicle_native_dashboard#delete GoogleChronicleNativeDashboard#delete}. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_chronicle_native_dashboard#update GoogleChronicleNativeDashboard#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_chronicle_native_dashboard#create GoogleChronicleNativeDashboard#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_chronicle_native_dashboard#delete GoogleChronicleNativeDashboard#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_chronicle_native_dashboard#update GoogleChronicleNativeDashboard#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleChronicleNativeDashboardChartsChartLayoutOutputReference <a name="GoogleChronicleNativeDashboardChartsChartLayoutOutputReference" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsChartLayoutOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsChartLayoutOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_chronicle_native_dashboard

googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsChartLayoutOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsChartLayoutOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsChartLayoutOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsChartLayoutOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsChartLayoutOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsChartLayoutOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsChartLayoutOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsChartLayoutOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsChartLayoutOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsChartLayoutOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsChartLayoutOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsChartLayoutOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsChartLayoutOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsChartLayoutOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsChartLayoutOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsChartLayoutOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsChartLayoutOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsChartLayoutOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsChartLayoutOutputReference.resetStartX">reset_start_x</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsChartLayoutOutputReference.resetStartY">reset_start_y</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsChartLayoutOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsChartLayoutOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsChartLayoutOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsChartLayoutOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsChartLayoutOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsChartLayoutOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsChartLayoutOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsChartLayoutOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsChartLayoutOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsChartLayoutOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsChartLayoutOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsChartLayoutOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsChartLayoutOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsChartLayoutOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsChartLayoutOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsChartLayoutOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsChartLayoutOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsChartLayoutOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsChartLayoutOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsChartLayoutOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsChartLayoutOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsChartLayoutOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsChartLayoutOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsChartLayoutOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_start_x` <a name="reset_start_x" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsChartLayoutOutputReference.resetStartX"></a>

```python
def reset_start_x() -> None
```

##### `reset_start_y` <a name="reset_start_y" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsChartLayoutOutputReference.resetStartY"></a>

```python
def reset_start_y() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsChartLayoutOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsChartLayoutOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsChartLayoutOutputReference.property.spanXInput">span_x_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsChartLayoutOutputReference.property.spanYInput">span_y_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsChartLayoutOutputReference.property.startXInput">start_x_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsChartLayoutOutputReference.property.startYInput">start_y_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsChartLayoutOutputReference.property.spanX">span_x</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsChartLayoutOutputReference.property.spanY">span_y</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsChartLayoutOutputReference.property.startX">start_x</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsChartLayoutOutputReference.property.startY">start_y</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsChartLayoutOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsChartLayout">GoogleChronicleNativeDashboardChartsChartLayout</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsChartLayoutOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsChartLayoutOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `span_x_input`<sup>Optional</sup> <a name="span_x_input" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsChartLayoutOutputReference.property.spanXInput"></a>

```python
span_x_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `span_y_input`<sup>Optional</sup> <a name="span_y_input" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsChartLayoutOutputReference.property.spanYInput"></a>

```python
span_y_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `start_x_input`<sup>Optional</sup> <a name="start_x_input" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsChartLayoutOutputReference.property.startXInput"></a>

```python
start_x_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `start_y_input`<sup>Optional</sup> <a name="start_y_input" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsChartLayoutOutputReference.property.startYInput"></a>

```python
start_y_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `span_x`<sup>Required</sup> <a name="span_x" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsChartLayoutOutputReference.property.spanX"></a>

```python
span_x: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `span_y`<sup>Required</sup> <a name="span_y" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsChartLayoutOutputReference.property.spanY"></a>

```python
span_y: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `start_x`<sup>Required</sup> <a name="start_x" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsChartLayoutOutputReference.property.startX"></a>

```python
start_x: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `start_y`<sup>Required</sup> <a name="start_y" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsChartLayoutOutputReference.property.startY"></a>

```python
start_y: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsChartLayoutOutputReference.property.internalValue"></a>

```python
internal_value: GoogleChronicleNativeDashboardChartsChartLayout
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsChartLayout">GoogleChronicleNativeDashboardChartsChartLayout</a>

---


### GoogleChronicleNativeDashboardChartsList <a name="GoogleChronicleNativeDashboardChartsList" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsList.Initializer"></a>

```python
from cdktn_provider_google_beta import google_chronicle_native_dashboard

googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleChronicleNativeDashboardChartsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardCharts">GoogleChronicleNativeDashboardCharts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[GoogleChronicleNativeDashboardCharts]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardCharts">GoogleChronicleNativeDashboardCharts</a>]

---


### GoogleChronicleNativeDashboardChartsOutputReference <a name="GoogleChronicleNativeDashboardChartsOutputReference" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_chronicle_native_dashboard

googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsOutputReference.putChartLayout">put_chart_layout</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsOutputReference.resetChartLayout">reset_chart_layout</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsOutputReference.resetDashboardChart">reset_dashboard_chart</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsOutputReference.resetFiltersIds">reset_filters_ids</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_chart_layout` <a name="put_chart_layout" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsOutputReference.putChartLayout"></a>

```python
def put_chart_layout(
  span_x: typing.Union[int, float],
  span_y: typing.Union[int, float],
  start_x: typing.Union[int, float] = None,
  start_y: typing.Union[int, float] = None
) -> None
```

###### `span_x`<sup>Required</sup> <a name="span_x" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsOutputReference.putChartLayout.parameter.spanX"></a>

- *Type:* typing.Union[int, float]

The number of columns the chart spans.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_chronicle_native_dashboard#span_x GoogleChronicleNativeDashboard#span_x}

---

###### `span_y`<sup>Required</sup> <a name="span_y" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsOutputReference.putChartLayout.parameter.spanY"></a>

- *Type:* typing.Union[int, float]

The number of rows the chart spans.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_chronicle_native_dashboard#span_y GoogleChronicleNativeDashboard#span_y}

---

###### `start_x`<sup>Optional</sup> <a name="start_x" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsOutputReference.putChartLayout.parameter.startX"></a>

- *Type:* typing.Union[int, float]

The starting X coordinate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_chronicle_native_dashboard#start_x GoogleChronicleNativeDashboard#start_x}

---

###### `start_y`<sup>Optional</sup> <a name="start_y" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsOutputReference.putChartLayout.parameter.startY"></a>

- *Type:* typing.Union[int, float]

The starting Y coordinate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_chronicle_native_dashboard#start_y GoogleChronicleNativeDashboard#start_y}

---

##### `reset_chart_layout` <a name="reset_chart_layout" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsOutputReference.resetChartLayout"></a>

```python
def reset_chart_layout() -> None
```

##### `reset_dashboard_chart` <a name="reset_dashboard_chart" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsOutputReference.resetDashboardChart"></a>

```python
def reset_dashboard_chart() -> None
```

##### `reset_filters_ids` <a name="reset_filters_ids" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsOutputReference.resetFiltersIds"></a>

```python
def reset_filters_ids() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsOutputReference.property.chartLayout">chart_layout</a></code> | <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsChartLayoutOutputReference">GoogleChronicleNativeDashboardChartsChartLayoutOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsOutputReference.property.chartLayoutInput">chart_layout_input</a></code> | <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsChartLayout">GoogleChronicleNativeDashboardChartsChartLayout</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsOutputReference.property.dashboardChartInput">dashboard_chart_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsOutputReference.property.filtersIdsInput">filters_ids_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsOutputReference.property.dashboardChart">dashboard_chart</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsOutputReference.property.filtersIds">filters_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardCharts">GoogleChronicleNativeDashboardCharts</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `chart_layout`<sup>Required</sup> <a name="chart_layout" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsOutputReference.property.chartLayout"></a>

```python
chart_layout: GoogleChronicleNativeDashboardChartsChartLayoutOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsChartLayoutOutputReference">GoogleChronicleNativeDashboardChartsChartLayoutOutputReference</a>

---

##### `chart_layout_input`<sup>Optional</sup> <a name="chart_layout_input" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsOutputReference.property.chartLayoutInput"></a>

```python
chart_layout_input: GoogleChronicleNativeDashboardChartsChartLayout
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsChartLayout">GoogleChronicleNativeDashboardChartsChartLayout</a>

---

##### `dashboard_chart_input`<sup>Optional</sup> <a name="dashboard_chart_input" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsOutputReference.property.dashboardChartInput"></a>

```python
dashboard_chart_input: str
```

- *Type:* str

---

##### `filters_ids_input`<sup>Optional</sup> <a name="filters_ids_input" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsOutputReference.property.filtersIdsInput"></a>

```python
filters_ids_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `dashboard_chart`<sup>Required</sup> <a name="dashboard_chart" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsOutputReference.property.dashboardChart"></a>

```python
dashboard_chart: str
```

- *Type:* str

---

##### `filters_ids`<sup>Required</sup> <a name="filters_ids" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsOutputReference.property.filtersIds"></a>

```python
filters_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | GoogleChronicleNativeDashboardCharts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardCharts">GoogleChronicleNativeDashboardCharts</a>

---


### GoogleChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesList <a name="GoogleChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesList" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesList.Initializer"></a>

```python
from cdktn_provider_google_beta import google_chronicle_native_dashboard

googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersFilterOperatorAndFieldValues">GoogleChronicleNativeDashboardFiltersFilterOperatorAndFieldValues</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[GoogleChronicleNativeDashboardFiltersFilterOperatorAndFieldValues]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersFilterOperatorAndFieldValues">GoogleChronicleNativeDashboardFiltersFilterOperatorAndFieldValues</a>]

---


### GoogleChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesOutputReference <a name="GoogleChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesOutputReference" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_chronicle_native_dashboard

googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesOutputReference.resetFieldValues">reset_field_values</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesOutputReference.resetFilterOperator">reset_filter_operator</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_field_values` <a name="reset_field_values" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesOutputReference.resetFieldValues"></a>

```python
def reset_field_values() -> None
```

##### `reset_filter_operator` <a name="reset_filter_operator" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesOutputReference.resetFilterOperator"></a>

```python
def reset_filter_operator() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesOutputReference.property.fieldValuesInput">field_values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesOutputReference.property.filterOperatorInput">filter_operator_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesOutputReference.property.fieldValues">field_values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesOutputReference.property.filterOperator">filter_operator</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersFilterOperatorAndFieldValues">GoogleChronicleNativeDashboardFiltersFilterOperatorAndFieldValues</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `field_values_input`<sup>Optional</sup> <a name="field_values_input" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesOutputReference.property.fieldValuesInput"></a>

```python
field_values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `filter_operator_input`<sup>Optional</sup> <a name="filter_operator_input" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesOutputReference.property.filterOperatorInput"></a>

```python
filter_operator_input: str
```

- *Type:* str

---

##### `field_values`<sup>Required</sup> <a name="field_values" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesOutputReference.property.fieldValues"></a>

```python
field_values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `filter_operator`<sup>Required</sup> <a name="filter_operator" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesOutputReference.property.filterOperator"></a>

```python
filter_operator: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | GoogleChronicleNativeDashboardFiltersFilterOperatorAndFieldValues
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersFilterOperatorAndFieldValues">GoogleChronicleNativeDashboardFiltersFilterOperatorAndFieldValues</a>

---


### GoogleChronicleNativeDashboardFiltersList <a name="GoogleChronicleNativeDashboardFiltersList" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersList.Initializer"></a>

```python
from cdktn_provider_google_beta import google_chronicle_native_dashboard

googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleChronicleNativeDashboardFiltersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFilters">GoogleChronicleNativeDashboardFilters</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[GoogleChronicleNativeDashboardFilters]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFilters">GoogleChronicleNativeDashboardFilters</a>]

---


### GoogleChronicleNativeDashboardFiltersOutputReference <a name="GoogleChronicleNativeDashboardFiltersOutputReference" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_chronicle_native_dashboard

googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersOutputReference.putFilterOperatorAndFieldValues">put_filter_operator_and_field_values</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersOutputReference.resetChartIds">reset_chart_ids</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersOutputReference.resetDataSource">reset_data_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersOutputReference.resetDisplayName">reset_display_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersOutputReference.resetFieldPath">reset_field_path</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersOutputReference.resetFilterOperatorAndFieldValues">reset_filter_operator_and_field_values</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersOutputReference.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersOutputReference.resetIsMandatory">reset_is_mandatory</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersOutputReference.resetIsStandardTimeRangeFilter">reset_is_standard_time_range_filter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersOutputReference.resetIsStandardTimeRangeFilterEnabled">reset_is_standard_time_range_filter_enabled</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_filter_operator_and_field_values` <a name="put_filter_operator_and_field_values" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersOutputReference.putFilterOperatorAndFieldValues"></a>

```python
def put_filter_operator_and_field_values(
  value: IResolvable | typing.List[GoogleChronicleNativeDashboardFiltersFilterOperatorAndFieldValues]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersOutputReference.putFilterOperatorAndFieldValues.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersFilterOperatorAndFieldValues">GoogleChronicleNativeDashboardFiltersFilterOperatorAndFieldValues</a>]

---

##### `reset_chart_ids` <a name="reset_chart_ids" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersOutputReference.resetChartIds"></a>

```python
def reset_chart_ids() -> None
```

##### `reset_data_source` <a name="reset_data_source" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersOutputReference.resetDataSource"></a>

```python
def reset_data_source() -> None
```

##### `reset_display_name` <a name="reset_display_name" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersOutputReference.resetDisplayName"></a>

```python
def reset_display_name() -> None
```

##### `reset_field_path` <a name="reset_field_path" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersOutputReference.resetFieldPath"></a>

```python
def reset_field_path() -> None
```

##### `reset_filter_operator_and_field_values` <a name="reset_filter_operator_and_field_values" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersOutputReference.resetFilterOperatorAndFieldValues"></a>

```python
def reset_filter_operator_and_field_values() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersOutputReference.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_is_mandatory` <a name="reset_is_mandatory" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersOutputReference.resetIsMandatory"></a>

```python
def reset_is_mandatory() -> None
```

##### `reset_is_standard_time_range_filter` <a name="reset_is_standard_time_range_filter" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersOutputReference.resetIsStandardTimeRangeFilter"></a>

```python
def reset_is_standard_time_range_filter() -> None
```

##### `reset_is_standard_time_range_filter_enabled` <a name="reset_is_standard_time_range_filter_enabled" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersOutputReference.resetIsStandardTimeRangeFilterEnabled"></a>

```python
def reset_is_standard_time_range_filter_enabled() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersOutputReference.property.filterOperatorAndFieldValues">filter_operator_and_field_values</a></code> | <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesList">GoogleChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersOutputReference.property.chartIdsInput">chart_ids_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersOutputReference.property.dataSourceInput">data_source_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersOutputReference.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersOutputReference.property.fieldPathInput">field_path_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersOutputReference.property.filterOperatorAndFieldValuesInput">filter_operator_and_field_values_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersFilterOperatorAndFieldValues">GoogleChronicleNativeDashboardFiltersFilterOperatorAndFieldValues</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersOutputReference.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersOutputReference.property.isMandatoryInput">is_mandatory_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersOutputReference.property.isStandardTimeRangeFilterEnabledInput">is_standard_time_range_filter_enabled_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersOutputReference.property.isStandardTimeRangeFilterInput">is_standard_time_range_filter_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersOutputReference.property.chartIds">chart_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersOutputReference.property.dataSource">data_source</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersOutputReference.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersOutputReference.property.fieldPath">field_path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersOutputReference.property.isMandatory">is_mandatory</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersOutputReference.property.isStandardTimeRangeFilter">is_standard_time_range_filter</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersOutputReference.property.isStandardTimeRangeFilterEnabled">is_standard_time_range_filter_enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFilters">GoogleChronicleNativeDashboardFilters</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `filter_operator_and_field_values`<sup>Required</sup> <a name="filter_operator_and_field_values" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersOutputReference.property.filterOperatorAndFieldValues"></a>

```python
filter_operator_and_field_values: GoogleChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesList
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesList">GoogleChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesList</a>

---

##### `chart_ids_input`<sup>Optional</sup> <a name="chart_ids_input" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersOutputReference.property.chartIdsInput"></a>

```python
chart_ids_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `data_source_input`<sup>Optional</sup> <a name="data_source_input" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersOutputReference.property.dataSourceInput"></a>

```python
data_source_input: str
```

- *Type:* str

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersOutputReference.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `field_path_input`<sup>Optional</sup> <a name="field_path_input" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersOutputReference.property.fieldPathInput"></a>

```python
field_path_input: str
```

- *Type:* str

---

##### `filter_operator_and_field_values_input`<sup>Optional</sup> <a name="filter_operator_and_field_values_input" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersOutputReference.property.filterOperatorAndFieldValuesInput"></a>

```python
filter_operator_and_field_values_input: IResolvable | typing.List[GoogleChronicleNativeDashboardFiltersFilterOperatorAndFieldValues]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersFilterOperatorAndFieldValues">GoogleChronicleNativeDashboardFiltersFilterOperatorAndFieldValues</a>]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersOutputReference.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `is_mandatory_input`<sup>Optional</sup> <a name="is_mandatory_input" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersOutputReference.property.isMandatoryInput"></a>

```python
is_mandatory_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `is_standard_time_range_filter_enabled_input`<sup>Optional</sup> <a name="is_standard_time_range_filter_enabled_input" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersOutputReference.property.isStandardTimeRangeFilterEnabledInput"></a>

```python
is_standard_time_range_filter_enabled_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `is_standard_time_range_filter_input`<sup>Optional</sup> <a name="is_standard_time_range_filter_input" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersOutputReference.property.isStandardTimeRangeFilterInput"></a>

```python
is_standard_time_range_filter_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `chart_ids`<sup>Required</sup> <a name="chart_ids" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersOutputReference.property.chartIds"></a>

```python
chart_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `data_source`<sup>Required</sup> <a name="data_source" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersOutputReference.property.dataSource"></a>

```python
data_source: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersOutputReference.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `field_path`<sup>Required</sup> <a name="field_path" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersOutputReference.property.fieldPath"></a>

```python
field_path: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `is_mandatory`<sup>Required</sup> <a name="is_mandatory" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersOutputReference.property.isMandatory"></a>

```python
is_mandatory: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `is_standard_time_range_filter`<sup>Required</sup> <a name="is_standard_time_range_filter" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersOutputReference.property.isStandardTimeRangeFilter"></a>

```python
is_standard_time_range_filter: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `is_standard_time_range_filter_enabled`<sup>Required</sup> <a name="is_standard_time_range_filter_enabled" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersOutputReference.property.isStandardTimeRangeFilterEnabled"></a>

```python
is_standard_time_range_filter_enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | GoogleChronicleNativeDashboardFilters
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFilters">GoogleChronicleNativeDashboardFilters</a>

---


### GoogleChronicleNativeDashboardTimeoutsOutputReference <a name="GoogleChronicleNativeDashboardTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardTimeoutsOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_chronicle_native_dashboard

googleChronicleNativeDashboard.GoogleChronicleNativeDashboardTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardTimeouts">GoogleChronicleNativeDashboardTimeouts</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | GoogleChronicleNativeDashboardTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardTimeouts">GoogleChronicleNativeDashboardTimeouts</a>

---



