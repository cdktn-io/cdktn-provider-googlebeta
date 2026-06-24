# `dataGoogleStorageControlProjectIntelligenceFindingRevision` Submodule <a name="`dataGoogleStorageControlProjectIntelligenceFindingRevision` Submodule" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGoogleStorageControlProjectIntelligenceFindingRevision <a name="DataGoogleStorageControlProjectIntelligenceFindingRevision" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevision"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/data-sources/google_storage_control_project_intelligence_finding_revision google_storage_control_project_intelligence_finding_revision}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevision.Initializer"></a>

```python
from cdktn_provider_google_beta import data_google_storage_control_project_intelligence_finding_revision

dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevision(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  finding_id: str,
  revision_id: str,
  id: str = None,
  location: str = None,
  project: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevision.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevision.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevision.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevision.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevision.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevision.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevision.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevision.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevision.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevision.Initializer.parameter.findingId">finding_id</a></code> | <code>str</code> | The ID of the intelligence finding. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevision.Initializer.parameter.revisionId">revision_id</a></code> | <code>str</code> | The ID of the finding revision. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevision.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/data-sources/google_storage_control_project_intelligence_finding_revision#id DataGoogleStorageControlProjectIntelligenceFindingRevision#id}. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevision.Initializer.parameter.location">location</a></code> | <code>str</code> | The location of the intelligence finding. Currently default value is global and users cannot use for input for now. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevision.Initializer.parameter.project">project</a></code> | <code>str</code> | The ID of the project in which the resource belongs. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevision.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevision.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevision.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevision.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevision.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevision.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevision.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevision.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevision.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `finding_id`<sup>Required</sup> <a name="finding_id" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevision.Initializer.parameter.findingId"></a>

- *Type:* str

The ID of the intelligence finding.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/data-sources/google_storage_control_project_intelligence_finding_revision#finding_id DataGoogleStorageControlProjectIntelligenceFindingRevision#finding_id}

---

##### `revision_id`<sup>Required</sup> <a name="revision_id" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevision.Initializer.parameter.revisionId"></a>

- *Type:* str

The ID of the finding revision.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/data-sources/google_storage_control_project_intelligence_finding_revision#revision_id DataGoogleStorageControlProjectIntelligenceFindingRevision#revision_id}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevision.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/data-sources/google_storage_control_project_intelligence_finding_revision#id DataGoogleStorageControlProjectIntelligenceFindingRevision#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevision.Initializer.parameter.location"></a>

- *Type:* str

The location of the intelligence finding. Currently default value is global and users cannot use for input for now.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/data-sources/google_storage_control_project_intelligence_finding_revision#location DataGoogleStorageControlProjectIntelligenceFindingRevision#location}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevision.Initializer.parameter.project"></a>

- *Type:* str

The ID of the project in which the resource belongs.

If it is not provided, the provider project is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/data-sources/google_storage_control_project_intelligence_finding_revision#project DataGoogleStorageControlProjectIntelligenceFindingRevision#project}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevision.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevision.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevision.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevision.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevision.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevision.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevision.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevision.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevision.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevision.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevision.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevision.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevision.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevision.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevision.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevision.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevision.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevision.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevision.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevision.resetLocation">reset_location</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevision.resetProject">reset_project</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevision.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevision.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevision.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevision.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevision.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevision.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevision.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevision.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevision.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevision.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevision.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevision.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevision.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevision.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevision.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevision.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevision.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevision.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevision.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevision.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevision.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevision.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevision.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevision.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevision.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevision.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevision.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevision.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevision.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevision.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevision.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevision.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_id` <a name="reset_id" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevision.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_location` <a name="reset_location" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevision.resetLocation"></a>

```python
def reset_location() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevision.resetProject"></a>

```python
def reset_project() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevision.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevision.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevision.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevision.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DataGoogleStorageControlProjectIntelligenceFindingRevision resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevision.isConstruct"></a>

```python
from cdktn_provider_google_beta import data_google_storage_control_project_intelligence_finding_revision

dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevision.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevision.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevision.isTerraformElement"></a>

```python
from cdktn_provider_google_beta import data_google_storage_control_project_intelligence_finding_revision

dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevision.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevision.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevision.isTerraformDataSource"></a>

```python
from cdktn_provider_google_beta import data_google_storage_control_project_intelligence_finding_revision

dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevision.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevision.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevision.generateConfigForImport"></a>

```python
from cdktn_provider_google_beta import data_google_storage_control_project_intelligence_finding_revision

dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevision.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DataGoogleStorageControlProjectIntelligenceFindingRevision resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevision.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevision.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataGoogleStorageControlProjectIntelligenceFindingRevision to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevision.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataGoogleStorageControlProjectIntelligenceFindingRevision that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/data-sources/google_storage_control_project_intelligence_finding_revision#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevision.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataGoogleStorageControlProjectIntelligenceFindingRevision to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevision.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevision.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevision.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevision.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevision.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevision.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevision.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevision.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevision.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevision.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevision.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevision.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevision.property.createTime">create_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevision.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevision.property.snapshot">snapshot</a></code> | <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotList">DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevision.property.findingIdInput">finding_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevision.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevision.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevision.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevision.property.revisionIdInput">revision_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevision.property.findingId">finding_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevision.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevision.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevision.property.project">project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevision.property.revisionId">revision_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevision.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevision.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevision.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevision.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevision.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevision.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevision.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevision.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevision.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevision.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevision.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevision.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `create_time`<sup>Required</sup> <a name="create_time" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevision.property.createTime"></a>

```python
create_time: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevision.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `snapshot`<sup>Required</sup> <a name="snapshot" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevision.property.snapshot"></a>

```python
snapshot: DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotList
```

- *Type:* <a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotList">DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotList</a>

---

##### `finding_id_input`<sup>Optional</sup> <a name="finding_id_input" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevision.property.findingIdInput"></a>

```python
finding_id_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevision.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevision.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevision.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `revision_id_input`<sup>Optional</sup> <a name="revision_id_input" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevision.property.revisionIdInput"></a>

```python
revision_id_input: str
```

- *Type:* str

---

##### `finding_id`<sup>Required</sup> <a name="finding_id" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevision.property.findingId"></a>

```python
finding_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevision.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevision.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevision.property.project"></a>

```python
project: str
```

- *Type:* str

---

##### `revision_id`<sup>Required</sup> <a name="revision_id" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevision.property.revisionId"></a>

```python
revision_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevision.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevision.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataGoogleStorageControlProjectIntelligenceFindingRevisionConfig <a name="DataGoogleStorageControlProjectIntelligenceFindingRevisionConfig" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionConfig.Initializer"></a>

```python
from cdktn_provider_google_beta import data_google_storage_control_project_intelligence_finding_revision

dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  finding_id: str,
  revision_id: str,
  id: str = None,
  location: str = None,
  project: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionConfig.property.findingId">finding_id</a></code> | <code>str</code> | The ID of the intelligence finding. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionConfig.property.revisionId">revision_id</a></code> | <code>str</code> | The ID of the finding revision. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/data-sources/google_storage_control_project_intelligence_finding_revision#id DataGoogleStorageControlProjectIntelligenceFindingRevision#id}. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionConfig.property.location">location</a></code> | <code>str</code> | The location of the intelligence finding. Currently default value is global and users cannot use for input for now. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionConfig.property.project">project</a></code> | <code>str</code> | The ID of the project in which the resource belongs. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `finding_id`<sup>Required</sup> <a name="finding_id" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionConfig.property.findingId"></a>

```python
finding_id: str
```

- *Type:* str

The ID of the intelligence finding.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/data-sources/google_storage_control_project_intelligence_finding_revision#finding_id DataGoogleStorageControlProjectIntelligenceFindingRevision#finding_id}

---

##### `revision_id`<sup>Required</sup> <a name="revision_id" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionConfig.property.revisionId"></a>

```python
revision_id: str
```

- *Type:* str

The ID of the finding revision.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/data-sources/google_storage_control_project_intelligence_finding_revision#revision_id DataGoogleStorageControlProjectIntelligenceFindingRevision#revision_id}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/data-sources/google_storage_control_project_intelligence_finding_revision#id DataGoogleStorageControlProjectIntelligenceFindingRevision#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionConfig.property.location"></a>

```python
location: str
```

- *Type:* str

The location of the intelligence finding. Currently default value is global and users cannot use for input for now.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/data-sources/google_storage_control_project_intelligence_finding_revision#location DataGoogleStorageControlProjectIntelligenceFindingRevision#location}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionConfig.property.project"></a>

```python
project: str
```

- *Type:* str

The ID of the project in which the resource belongs.

If it is not provided, the provider project is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/data-sources/google_storage_control_project_intelligence_finding_revision#project DataGoogleStorageControlProjectIntelligenceFindingRevision#project}

---

### DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshot <a name="DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshot" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshot"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshot.Initializer"></a>

```python
from cdktn_provider_google_beta import data_google_storage_control_project_intelligence_finding_revision

dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshot()
```


### DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpike <a name="DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpike" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpike"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpike.Initializer"></a>

```python
from cdktn_provider_google_beta import data_google_storage_control_project_intelligence_finding_revision

dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpike()
```


### DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBuckets <a name="DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBuckets" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBuckets"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBuckets.Initializer"></a>

```python
from cdktn_provider_google_beta import data_google_storage_control_project_intelligence_finding_revision

dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBuckets()
```


### DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContribution <a name="DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContribution" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContribution"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContribution.Initializer"></a>

```python
from cdktn_provider_google_beta import data_google_storage_control_project_intelligence_finding_revision

dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContribution()
```


### DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixes <a name="DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixes" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixes"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixes.Initializer"></a>

```python
from cdktn_provider_google_beta import data_google_storage_control_project_intelligence_finding_revision

dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixes()
```


### DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsError <a name="DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsError" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsError"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsError.Initializer"></a>

```python
from cdktn_provider_google_beta import data_google_storage_control_project_intelligence_finding_revision

dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsError()
```


### DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpike <a name="DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpike" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpike"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpike.Initializer"></a>

```python
from cdktn_provider_google_beta import data_google_storage_control_project_intelligence_finding_revision

dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpike()
```


### DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBuckets <a name="DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBuckets" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBuckets"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBuckets.Initializer"></a>

```python
from cdktn_provider_google_beta import data_google_storage_control_project_intelligence_finding_revision

dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBuckets()
```


### DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsContribution <a name="DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsContribution" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsContribution"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsContribution.Initializer"></a>

```python
from cdktn_provider_google_beta import data_google_storage_control_project_intelligence_finding_revision

dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsContribution()
```


### DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsContributionTopPrefixes <a name="DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsContributionTopPrefixes" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsContributionTopPrefixes"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsContributionTopPrefixes.Initializer"></a>

```python
from cdktn_provider_google_beta import data_google_storage_control_project_intelligence_finding_revision

dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsContributionTopPrefixes()
```


### DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsError <a name="DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsError" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsError"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsError.Initializer"></a>

```python
from cdktn_provider_google_beta import data_google_storage_control_project_intelligence_finding_revision

dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsError()
```


### DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotObservationPeriod <a name="DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotObservationPeriod" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotObservationPeriod"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotObservationPeriod.Initializer"></a>

```python
from cdktn_provider_google_beta import data_google_storage_control_project_intelligence_finding_revision

dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotObservationPeriod()
```


### DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrend <a name="DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrend" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrend"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrend.Initializer"></a>

```python
from cdktn_provider_google_beta import data_google_storage_control_project_intelligence_finding_revision

dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrend()
```


### DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBuckets <a name="DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBuckets" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBuckets"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBuckets.Initializer"></a>

```python
from cdktn_provider_google_beta import data_google_storage_control_project_intelligence_finding_revision

dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBuckets()
```


### DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsContribution <a name="DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsContribution" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsContribution"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsContribution.Initializer"></a>

```python
from cdktn_provider_google_beta import data_google_storage_control_project_intelligence_finding_revision

dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsContribution()
```


### DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsContributionTopPrefixes <a name="DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsContributionTopPrefixes" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsContributionTopPrefixes"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsContributionTopPrefixes.Initializer"></a>

```python
from cdktn_provider_google_beta import data_google_storage_control_project_intelligence_finding_revision

dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsContributionTopPrefixes()
```


### DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsError <a name="DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsError" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsError"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsError.Initializer"></a>

```python
from cdktn_provider_google_beta import data_google_storage_control_project_intelligence_finding_revision

dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsError()
```


### DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpike <a name="DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpike" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpike"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpike.Initializer"></a>

```python
from cdktn_provider_google_beta import data_google_storage_control_project_intelligence_finding_revision

dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpike()
```


### DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBuckets <a name="DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBuckets" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBuckets"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBuckets.Initializer"></a>

```python
from cdktn_provider_google_beta import data_google_storage_control_project_intelligence_finding_revision

dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBuckets()
```


### DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsContribution <a name="DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsContribution" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsContribution"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsContribution.Initializer"></a>

```python
from cdktn_provider_google_beta import data_google_storage_control_project_intelligence_finding_revision

dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsContribution()
```


### DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsContributionTopPrefixes <a name="DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsContributionTopPrefixes" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsContributionTopPrefixes"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsContributionTopPrefixes.Initializer"></a>

```python
from cdktn_provider_google_beta import data_google_storage_control_project_intelligence_finding_revision

dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsContributionTopPrefixes()
```


### DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsError <a name="DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsError" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsError"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsError.Initializer"></a>

```python
from cdktn_provider_google_beta import data_google_storage_control_project_intelligence_finding_revision

dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsError()
```


## Classes <a name="Classes" id="Classes"></a>

### DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeList <a name="DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeList" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeList.Initializer"></a>

```python
from cdktn_provider_google_beta import data_google_storage_control_project_intelligence_finding_revision

dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeOutputReference <a name="DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeOutputReference" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import data_google_storage_control_project_intelligence_finding_revision

dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeOutputReference.property.percentageIncrease">percentage_increase</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeOutputReference.property.topBuckets">top_buckets</a></code> | <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsList">DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeOutputReference.property.totalOperationsCount">total_operations_count</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpike">DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpike</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `percentage_increase`<sup>Required</sup> <a name="percentage_increase" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeOutputReference.property.percentageIncrease"></a>

```python
percentage_increase: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `top_buckets`<sup>Required</sup> <a name="top_buckets" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeOutputReference.property.topBuckets"></a>

```python
top_buckets: DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsList
```

- *Type:* <a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsList">DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsList</a>

---

##### `total_operations_count`<sup>Required</sup> <a name="total_operations_count" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeOutputReference.property.totalOperationsCount"></a>

```python
total_operations_count: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeOutputReference.property.internalValue"></a>

```python
internal_value: DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpike
```

- *Type:* <a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpike">DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpike</a>

---


### DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionList <a name="DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionList" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionList.Initializer"></a>

```python
from cdktn_provider_google_beta import data_google_storage_control_project_intelligence_finding_revision

dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionOutputReference <a name="DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionOutputReference" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import data_google_storage_control_project_intelligence_finding_revision

dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionOutputReference.property.topPrefixes">top_prefixes</a></code> | <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesList">DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContribution">DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContribution</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `top_prefixes`<sup>Required</sup> <a name="top_prefixes" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionOutputReference.property.topPrefixes"></a>

```python
top_prefixes: DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesList
```

- *Type:* <a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesList">DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionOutputReference.property.internalValue"></a>

```python
internal_value: DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContribution
```

- *Type:* <a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContribution">DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContribution</a>

---


### DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesList <a name="DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesList" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesList.Initializer"></a>

```python
from cdktn_provider_google_beta import data_google_storage_control_project_intelligence_finding_revision

dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesOutputReference <a name="DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesOutputReference" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import data_google_storage_control_project_intelligence_finding_revision

dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesOutputReference.property.percentageIncrease">percentage_increase</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesOutputReference.property.prefix">prefix</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesOutputReference.property.throttledRequests">throttled_requests</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesOutputReference.property.totalEgressBytes">total_egress_bytes</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesOutputReference.property.totalOperationsCount">total_operations_count</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixes">DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixes</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `percentage_increase`<sup>Required</sup> <a name="percentage_increase" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesOutputReference.property.percentageIncrease"></a>

```python
percentage_increase: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `prefix`<sup>Required</sup> <a name="prefix" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesOutputReference.property.prefix"></a>

```python
prefix: str
```

- *Type:* str

---

##### `throttled_requests`<sup>Required</sup> <a name="throttled_requests" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesOutputReference.property.throttledRequests"></a>

```python
throttled_requests: str
```

- *Type:* str

---

##### `total_egress_bytes`<sup>Required</sup> <a name="total_egress_bytes" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesOutputReference.property.totalEgressBytes"></a>

```python
total_egress_bytes: str
```

- *Type:* str

---

##### `total_operations_count`<sup>Required</sup> <a name="total_operations_count" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesOutputReference.property.totalOperationsCount"></a>

```python
total_operations_count: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesOutputReference.property.internalValue"></a>

```python
internal_value: DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixes
```

- *Type:* <a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixes">DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixes</a>

---


### DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorList <a name="DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorList" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorList.Initializer"></a>

```python
from cdktn_provider_google_beta import data_google_storage_control_project_intelligence_finding_revision

dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorOutputReference <a name="DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorOutputReference" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import data_google_storage_control_project_intelligence_finding_revision

dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorOutputReference.property.code">code</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorOutputReference.property.message">message</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsError">DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsError</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `code`<sup>Required</sup> <a name="code" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorOutputReference.property.code"></a>

```python
code: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `message`<sup>Required</sup> <a name="message" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorOutputReference.property.message"></a>

```python
message: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorOutputReference.property.internalValue"></a>

```python
internal_value: DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsError
```

- *Type:* <a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsError">DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsError</a>

---


### DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsList <a name="DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsList" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsList.Initializer"></a>

```python
from cdktn_provider_google_beta import data_google_storage_control_project_intelligence_finding_revision

dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsOutputReference <a name="DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsOutputReference" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import data_google_storage_control_project_intelligence_finding_revision

dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsOutputReference.property.bucket">bucket</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsOutputReference.property.contribution">contribution</a></code> | <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionList">DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsOutputReference.property.error">error</a></code> | <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorList">DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsOutputReference.property.percentageIncrease">percentage_increase</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsOutputReference.property.throttledRequests">throttled_requests</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsOutputReference.property.totalEgressBytes">total_egress_bytes</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsOutputReference.property.totalOperationsCount">total_operations_count</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsOutputReference.property.totalStorageGrowthBytes">total_storage_growth_bytes</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBuckets">DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBuckets</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsOutputReference.property.bucket"></a>

```python
bucket: str
```

- *Type:* str

---

##### `contribution`<sup>Required</sup> <a name="contribution" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsOutputReference.property.contribution"></a>

```python
contribution: DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionList
```

- *Type:* <a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionList">DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionList</a>

---

##### `error`<sup>Required</sup> <a name="error" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsOutputReference.property.error"></a>

```python
error: DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorList
```

- *Type:* <a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorList">DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorList</a>

---

##### `percentage_increase`<sup>Required</sup> <a name="percentage_increase" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsOutputReference.property.percentageIncrease"></a>

```python
percentage_increase: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `throttled_requests`<sup>Required</sup> <a name="throttled_requests" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsOutputReference.property.throttledRequests"></a>

```python
throttled_requests: str
```

- *Type:* str

---

##### `total_egress_bytes`<sup>Required</sup> <a name="total_egress_bytes" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsOutputReference.property.totalEgressBytes"></a>

```python
total_egress_bytes: str
```

- *Type:* str

---

##### `total_operations_count`<sup>Required</sup> <a name="total_operations_count" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsOutputReference.property.totalOperationsCount"></a>

```python
total_operations_count: str
```

- *Type:* str

---

##### `total_storage_growth_bytes`<sup>Required</sup> <a name="total_storage_growth_bytes" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsOutputReference.property.totalStorageGrowthBytes"></a>

```python
total_storage_growth_bytes: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsOutputReference.property.internalValue"></a>

```python
internal_value: DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBuckets
```

- *Type:* <a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBuckets">DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBuckets</a>

---


### DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeList <a name="DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeList" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeList.Initializer"></a>

```python
from cdktn_provider_google_beta import data_google_storage_control_project_intelligence_finding_revision

dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeOutputReference <a name="DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeOutputReference" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import data_google_storage_control_project_intelligence_finding_revision

dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeOutputReference.property.percentageIncrease">percentage_increase</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeOutputReference.property.topBuckets">top_buckets</a></code> | <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsList">DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeOutputReference.property.totalEgressBytes">total_egress_bytes</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpike">DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpike</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `percentage_increase`<sup>Required</sup> <a name="percentage_increase" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeOutputReference.property.percentageIncrease"></a>

```python
percentage_increase: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `top_buckets`<sup>Required</sup> <a name="top_buckets" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeOutputReference.property.topBuckets"></a>

```python
top_buckets: DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsList
```

- *Type:* <a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsList">DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsList</a>

---

##### `total_egress_bytes`<sup>Required</sup> <a name="total_egress_bytes" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeOutputReference.property.totalEgressBytes"></a>

```python
total_egress_bytes: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeOutputReference.property.internalValue"></a>

```python
internal_value: DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpike
```

- *Type:* <a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpike">DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpike</a>

---


### DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsContributionList <a name="DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsContributionList" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsContributionList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsContributionList.Initializer"></a>

```python
from cdktn_provider_google_beta import data_google_storage_control_project_intelligence_finding_revision

dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsContributionList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsContributionList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsContributionList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsContributionList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsContributionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsContributionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsContributionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsContributionList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsContributionList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsContributionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsContributionList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsContributionList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsContributionList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsContributionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsContributionList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsContributionList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsContributionList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsContributionList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsContributionList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsContributionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsContributionList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsContributionList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsContributionList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsContributionList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsContributionList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsContributionOutputReference <a name="DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsContributionOutputReference" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsContributionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsContributionOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import data_google_storage_control_project_intelligence_finding_revision

dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsContributionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsContributionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsContributionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsContributionOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsContributionOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsContributionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsContributionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsContributionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsContributionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsContributionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsContributionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsContributionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsContributionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsContributionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsContributionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsContributionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsContributionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsContributionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsContributionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsContributionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsContributionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsContributionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsContributionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsContributionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsContributionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsContributionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsContributionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsContributionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsContributionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsContributionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsContributionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsContributionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsContributionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsContributionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsContributionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsContributionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsContributionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsContributionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsContributionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsContributionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsContributionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsContributionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsContributionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsContributionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsContributionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsContributionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsContributionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsContributionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsContributionOutputReference.property.topPrefixes">top_prefixes</a></code> | <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsContributionTopPrefixesList">DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsContributionTopPrefixesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsContributionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsContribution">DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsContribution</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsContributionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsContributionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `top_prefixes`<sup>Required</sup> <a name="top_prefixes" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsContributionOutputReference.property.topPrefixes"></a>

```python
top_prefixes: DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsContributionTopPrefixesList
```

- *Type:* <a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsContributionTopPrefixesList">DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsContributionTopPrefixesList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsContributionOutputReference.property.internalValue"></a>

```python
internal_value: DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsContribution
```

- *Type:* <a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsContribution">DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsContribution</a>

---


### DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsContributionTopPrefixesList <a name="DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsContributionTopPrefixesList" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsContributionTopPrefixesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsContributionTopPrefixesList.Initializer"></a>

```python
from cdktn_provider_google_beta import data_google_storage_control_project_intelligence_finding_revision

dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsContributionTopPrefixesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsContributionTopPrefixesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsContributionTopPrefixesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsContributionTopPrefixesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsContributionTopPrefixesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsContributionTopPrefixesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsContributionTopPrefixesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsContributionTopPrefixesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsContributionTopPrefixesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsContributionTopPrefixesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsContributionTopPrefixesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsContributionTopPrefixesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsContributionTopPrefixesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsContributionTopPrefixesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsContributionTopPrefixesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsContributionTopPrefixesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsContributionTopPrefixesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsContributionTopPrefixesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsContributionTopPrefixesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsContributionTopPrefixesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsContributionTopPrefixesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsContributionTopPrefixesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsContributionTopPrefixesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsContributionTopPrefixesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsContributionTopPrefixesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsContributionTopPrefixesOutputReference <a name="DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsContributionTopPrefixesOutputReference" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsContributionTopPrefixesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsContributionTopPrefixesOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import data_google_storage_control_project_intelligence_finding_revision

dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsContributionTopPrefixesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsContributionTopPrefixesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsContributionTopPrefixesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsContributionTopPrefixesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsContributionTopPrefixesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsContributionTopPrefixesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsContributionTopPrefixesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsContributionTopPrefixesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsContributionTopPrefixesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsContributionTopPrefixesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsContributionTopPrefixesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsContributionTopPrefixesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsContributionTopPrefixesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsContributionTopPrefixesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsContributionTopPrefixesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsContributionTopPrefixesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsContributionTopPrefixesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsContributionTopPrefixesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsContributionTopPrefixesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsContributionTopPrefixesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsContributionTopPrefixesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsContributionTopPrefixesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsContributionTopPrefixesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsContributionTopPrefixesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsContributionTopPrefixesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsContributionTopPrefixesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsContributionTopPrefixesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsContributionTopPrefixesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsContributionTopPrefixesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsContributionTopPrefixesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsContributionTopPrefixesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsContributionTopPrefixesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsContributionTopPrefixesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsContributionTopPrefixesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsContributionTopPrefixesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsContributionTopPrefixesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsContributionTopPrefixesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsContributionTopPrefixesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsContributionTopPrefixesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsContributionTopPrefixesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsContributionTopPrefixesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsContributionTopPrefixesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsContributionTopPrefixesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsContributionTopPrefixesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsContributionTopPrefixesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsContributionTopPrefixesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsContributionTopPrefixesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsContributionTopPrefixesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsContributionTopPrefixesOutputReference.property.percentageIncrease">percentage_increase</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsContributionTopPrefixesOutputReference.property.prefix">prefix</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsContributionTopPrefixesOutputReference.property.throttledRequests">throttled_requests</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsContributionTopPrefixesOutputReference.property.totalEgressBytes">total_egress_bytes</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsContributionTopPrefixesOutputReference.property.totalOperationsCount">total_operations_count</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsContributionTopPrefixesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsContributionTopPrefixes">DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsContributionTopPrefixes</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsContributionTopPrefixesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsContributionTopPrefixesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `percentage_increase`<sup>Required</sup> <a name="percentage_increase" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsContributionTopPrefixesOutputReference.property.percentageIncrease"></a>

```python
percentage_increase: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `prefix`<sup>Required</sup> <a name="prefix" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsContributionTopPrefixesOutputReference.property.prefix"></a>

```python
prefix: str
```

- *Type:* str

---

##### `throttled_requests`<sup>Required</sup> <a name="throttled_requests" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsContributionTopPrefixesOutputReference.property.throttledRequests"></a>

```python
throttled_requests: str
```

- *Type:* str

---

##### `total_egress_bytes`<sup>Required</sup> <a name="total_egress_bytes" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsContributionTopPrefixesOutputReference.property.totalEgressBytes"></a>

```python
total_egress_bytes: str
```

- *Type:* str

---

##### `total_operations_count`<sup>Required</sup> <a name="total_operations_count" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsContributionTopPrefixesOutputReference.property.totalOperationsCount"></a>

```python
total_operations_count: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsContributionTopPrefixesOutputReference.property.internalValue"></a>

```python
internal_value: DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsContributionTopPrefixes
```

- *Type:* <a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsContributionTopPrefixes">DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsContributionTopPrefixes</a>

---


### DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsErrorList <a name="DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsErrorList" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsErrorList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsErrorList.Initializer"></a>

```python
from cdktn_provider_google_beta import data_google_storage_control_project_intelligence_finding_revision

dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsErrorList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsErrorList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsErrorList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsErrorList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsErrorList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsErrorList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsErrorList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsErrorList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsErrorList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsErrorList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsErrorList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsErrorList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsErrorList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsErrorList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsErrorList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsErrorList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsErrorList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsErrorList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsErrorList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsErrorOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsErrorList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsErrorList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsErrorList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsErrorList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsErrorList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsErrorOutputReference <a name="DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsErrorOutputReference" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsErrorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsErrorOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import data_google_storage_control_project_intelligence_finding_revision

dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsErrorOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsErrorOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsErrorOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsErrorOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsErrorOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsErrorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsErrorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsErrorOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsErrorOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsErrorOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsErrorOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsErrorOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsErrorOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsErrorOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsErrorOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsErrorOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsErrorOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsErrorOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsErrorOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsErrorOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsErrorOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsErrorOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsErrorOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsErrorOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsErrorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsErrorOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsErrorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsErrorOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsErrorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsErrorOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsErrorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsErrorOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsErrorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsErrorOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsErrorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsErrorOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsErrorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsErrorOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsErrorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsErrorOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsErrorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsErrorOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsErrorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsErrorOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsErrorOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsErrorOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsErrorOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsErrorOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsErrorOutputReference.property.code">code</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsErrorOutputReference.property.message">message</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsErrorOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsError">DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsError</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsErrorOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsErrorOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `code`<sup>Required</sup> <a name="code" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsErrorOutputReference.property.code"></a>

```python
code: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `message`<sup>Required</sup> <a name="message" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsErrorOutputReference.property.message"></a>

```python
message: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsErrorOutputReference.property.internalValue"></a>

```python
internal_value: DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsError
```

- *Type:* <a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsError">DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsError</a>

---


### DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsList <a name="DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsList" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsList.Initializer"></a>

```python
from cdktn_provider_google_beta import data_google_storage_control_project_intelligence_finding_revision

dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsOutputReference <a name="DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsOutputReference" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import data_google_storage_control_project_intelligence_finding_revision

dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsOutputReference.property.bucket">bucket</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsOutputReference.property.contribution">contribution</a></code> | <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsContributionList">DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsContributionList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsOutputReference.property.error">error</a></code> | <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsErrorList">DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsErrorList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsOutputReference.property.percentageIncrease">percentage_increase</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsOutputReference.property.throttledRequests">throttled_requests</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsOutputReference.property.totalEgressBytes">total_egress_bytes</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsOutputReference.property.totalOperationsCount">total_operations_count</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsOutputReference.property.totalStorageGrowthBytes">total_storage_growth_bytes</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBuckets">DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBuckets</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsOutputReference.property.bucket"></a>

```python
bucket: str
```

- *Type:* str

---

##### `contribution`<sup>Required</sup> <a name="contribution" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsOutputReference.property.contribution"></a>

```python
contribution: DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsContributionList
```

- *Type:* <a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsContributionList">DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsContributionList</a>

---

##### `error`<sup>Required</sup> <a name="error" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsOutputReference.property.error"></a>

```python
error: DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsErrorList
```

- *Type:* <a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsErrorList">DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsErrorList</a>

---

##### `percentage_increase`<sup>Required</sup> <a name="percentage_increase" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsOutputReference.property.percentageIncrease"></a>

```python
percentage_increase: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `throttled_requests`<sup>Required</sup> <a name="throttled_requests" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsOutputReference.property.throttledRequests"></a>

```python
throttled_requests: str
```

- *Type:* str

---

##### `total_egress_bytes`<sup>Required</sup> <a name="total_egress_bytes" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsOutputReference.property.totalEgressBytes"></a>

```python
total_egress_bytes: str
```

- *Type:* str

---

##### `total_operations_count`<sup>Required</sup> <a name="total_operations_count" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsOutputReference.property.totalOperationsCount"></a>

```python
total_operations_count: str
```

- *Type:* str

---

##### `total_storage_growth_bytes`<sup>Required</sup> <a name="total_storage_growth_bytes" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsOutputReference.property.totalStorageGrowthBytes"></a>

```python
total_storage_growth_bytes: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsOutputReference.property.internalValue"></a>

```python
internal_value: DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBuckets
```

- *Type:* <a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBuckets">DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBuckets</a>

---


### DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotList <a name="DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotList" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotList.Initializer"></a>

```python
from cdktn_provider_google_beta import data_google_storage_control_project_intelligence_finding_revision

dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotObservationPeriodList <a name="DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotObservationPeriodList" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotObservationPeriodList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotObservationPeriodList.Initializer"></a>

```python
from cdktn_provider_google_beta import data_google_storage_control_project_intelligence_finding_revision

dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotObservationPeriodList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotObservationPeriodList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotObservationPeriodList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotObservationPeriodList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotObservationPeriodList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotObservationPeriodList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotObservationPeriodList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotObservationPeriodList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotObservationPeriodList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotObservationPeriodList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotObservationPeriodList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotObservationPeriodList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotObservationPeriodList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotObservationPeriodList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotObservationPeriodList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotObservationPeriodList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotObservationPeriodList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotObservationPeriodList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotObservationPeriodList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotObservationPeriodOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotObservationPeriodList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotObservationPeriodList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotObservationPeriodList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotObservationPeriodList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotObservationPeriodList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotObservationPeriodOutputReference <a name="DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotObservationPeriodOutputReference" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotObservationPeriodOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotObservationPeriodOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import data_google_storage_control_project_intelligence_finding_revision

dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotObservationPeriodOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotObservationPeriodOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotObservationPeriodOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotObservationPeriodOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotObservationPeriodOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotObservationPeriodOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotObservationPeriodOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotObservationPeriodOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotObservationPeriodOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotObservationPeriodOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotObservationPeriodOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotObservationPeriodOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotObservationPeriodOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotObservationPeriodOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotObservationPeriodOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotObservationPeriodOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotObservationPeriodOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotObservationPeriodOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotObservationPeriodOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotObservationPeriodOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotObservationPeriodOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotObservationPeriodOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotObservationPeriodOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotObservationPeriodOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotObservationPeriodOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotObservationPeriodOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotObservationPeriodOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotObservationPeriodOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotObservationPeriodOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotObservationPeriodOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotObservationPeriodOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotObservationPeriodOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotObservationPeriodOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotObservationPeriodOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotObservationPeriodOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotObservationPeriodOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotObservationPeriodOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotObservationPeriodOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotObservationPeriodOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotObservationPeriodOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotObservationPeriodOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotObservationPeriodOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotObservationPeriodOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotObservationPeriodOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotObservationPeriodOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotObservationPeriodOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotObservationPeriodOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotObservationPeriodOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotObservationPeriodOutputReference.property.endTime">end_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotObservationPeriodOutputReference.property.startTime">start_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotObservationPeriodOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotObservationPeriod">DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotObservationPeriod</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotObservationPeriodOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotObservationPeriodOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `end_time`<sup>Required</sup> <a name="end_time" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotObservationPeriodOutputReference.property.endTime"></a>

```python
end_time: str
```

- *Type:* str

---

##### `start_time`<sup>Required</sup> <a name="start_time" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotObservationPeriodOutputReference.property.startTime"></a>

```python
start_time: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotObservationPeriodOutputReference.property.internalValue"></a>

```python
internal_value: DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotObservationPeriod
```

- *Type:* <a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotObservationPeriod">DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotObservationPeriod</a>

---


### DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotOutputReference <a name="DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotOutputReference" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import data_google_storage_control_project_intelligence_finding_revision

dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotOutputReference.property.associatedResources">associated_resources</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotOutputReference.property.category">category</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotOutputReference.property.coldlineAndArchivalStorageOperationsSpike">coldline_and_archival_storage_operations_spike</a></code> | <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeList">DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotOutputReference.property.createTime">create_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotOutputReference.property.crossRegionEgressSpike">cross_region_egress_spike</a></code> | <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeList">DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotOutputReference.property.observationPeriod">observation_period</a></code> | <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotObservationPeriodList">DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotObservationPeriodList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotOutputReference.property.severity">severity</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotOutputReference.property.storageGrowthAboveTrend">storage_growth_above_trend</a></code> | <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendList">DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotOutputReference.property.targetResource">target_resource</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotOutputReference.property.throttledRequestsSpike">throttled_requests_spike</a></code> | <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeList">DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotOutputReference.property.updateTime">update_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshot">DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshot</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `associated_resources`<sup>Required</sup> <a name="associated_resources" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotOutputReference.property.associatedResources"></a>

```python
associated_resources: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `category`<sup>Required</sup> <a name="category" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotOutputReference.property.category"></a>

```python
category: str
```

- *Type:* str

---

##### `coldline_and_archival_storage_operations_spike`<sup>Required</sup> <a name="coldline_and_archival_storage_operations_spike" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotOutputReference.property.coldlineAndArchivalStorageOperationsSpike"></a>

```python
coldline_and_archival_storage_operations_spike: DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeList
```

- *Type:* <a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeList">DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeList</a>

---

##### `create_time`<sup>Required</sup> <a name="create_time" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotOutputReference.property.createTime"></a>

```python
create_time: str
```

- *Type:* str

---

##### `cross_region_egress_spike`<sup>Required</sup> <a name="cross_region_egress_spike" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotOutputReference.property.crossRegionEgressSpike"></a>

```python
cross_region_egress_spike: DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeList
```

- *Type:* <a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeList">DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeList</a>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `observation_period`<sup>Required</sup> <a name="observation_period" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotOutputReference.property.observationPeriod"></a>

```python
observation_period: DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotObservationPeriodList
```

- *Type:* <a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotObservationPeriodList">DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotObservationPeriodList</a>

---

##### `severity`<sup>Required</sup> <a name="severity" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotOutputReference.property.severity"></a>

```python
severity: str
```

- *Type:* str

---

##### `storage_growth_above_trend`<sup>Required</sup> <a name="storage_growth_above_trend" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotOutputReference.property.storageGrowthAboveTrend"></a>

```python
storage_growth_above_trend: DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendList
```

- *Type:* <a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendList">DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendList</a>

---

##### `target_resource`<sup>Required</sup> <a name="target_resource" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotOutputReference.property.targetResource"></a>

```python
target_resource: str
```

- *Type:* str

---

##### `throttled_requests_spike`<sup>Required</sup> <a name="throttled_requests_spike" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotOutputReference.property.throttledRequestsSpike"></a>

```python
throttled_requests_spike: DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeList
```

- *Type:* <a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeList">DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeList</a>

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `update_time`<sup>Required</sup> <a name="update_time" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotOutputReference.property.updateTime"></a>

```python
update_time: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotOutputReference.property.internalValue"></a>

```python
internal_value: DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshot
```

- *Type:* <a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshot">DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshot</a>

---


### DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendList <a name="DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendList" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendList.Initializer"></a>

```python
from cdktn_provider_google_beta import data_google_storage_control_project_intelligence_finding_revision

dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendOutputReference <a name="DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendOutputReference" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import data_google_storage_control_project_intelligence_finding_revision

dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendOutputReference.property.percentageIncrease">percentage_increase</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendOutputReference.property.topBuckets">top_buckets</a></code> | <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsList">DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendOutputReference.property.totalStorageGrowthBytes">total_storage_growth_bytes</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrend">DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrend</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `percentage_increase`<sup>Required</sup> <a name="percentage_increase" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendOutputReference.property.percentageIncrease"></a>

```python
percentage_increase: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `top_buckets`<sup>Required</sup> <a name="top_buckets" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendOutputReference.property.topBuckets"></a>

```python
top_buckets: DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsList
```

- *Type:* <a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsList">DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsList</a>

---

##### `total_storage_growth_bytes`<sup>Required</sup> <a name="total_storage_growth_bytes" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendOutputReference.property.totalStorageGrowthBytes"></a>

```python
total_storage_growth_bytes: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendOutputReference.property.internalValue"></a>

```python
internal_value: DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrend
```

- *Type:* <a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrend">DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrend</a>

---


### DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsContributionList <a name="DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsContributionList" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsContributionList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsContributionList.Initializer"></a>

```python
from cdktn_provider_google_beta import data_google_storage_control_project_intelligence_finding_revision

dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsContributionList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsContributionList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsContributionList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsContributionList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsContributionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsContributionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsContributionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsContributionList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsContributionList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsContributionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsContributionList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsContributionList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsContributionList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsContributionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsContributionList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsContributionList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsContributionList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsContributionList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsContributionList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsContributionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsContributionList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsContributionList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsContributionList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsContributionList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsContributionList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsContributionOutputReference <a name="DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsContributionOutputReference" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsContributionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsContributionOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import data_google_storage_control_project_intelligence_finding_revision

dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsContributionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsContributionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsContributionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsContributionOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsContributionOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsContributionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsContributionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsContributionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsContributionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsContributionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsContributionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsContributionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsContributionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsContributionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsContributionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsContributionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsContributionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsContributionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsContributionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsContributionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsContributionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsContributionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsContributionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsContributionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsContributionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsContributionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsContributionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsContributionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsContributionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsContributionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsContributionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsContributionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsContributionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsContributionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsContributionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsContributionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsContributionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsContributionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsContributionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsContributionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsContributionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsContributionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsContributionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsContributionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsContributionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsContributionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsContributionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsContributionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsContributionOutputReference.property.topPrefixes">top_prefixes</a></code> | <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsContributionTopPrefixesList">DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsContributionTopPrefixesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsContributionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsContribution">DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsContribution</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsContributionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsContributionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `top_prefixes`<sup>Required</sup> <a name="top_prefixes" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsContributionOutputReference.property.topPrefixes"></a>

```python
top_prefixes: DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsContributionTopPrefixesList
```

- *Type:* <a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsContributionTopPrefixesList">DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsContributionTopPrefixesList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsContributionOutputReference.property.internalValue"></a>

```python
internal_value: DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsContribution
```

- *Type:* <a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsContribution">DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsContribution</a>

---


### DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsContributionTopPrefixesList <a name="DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsContributionTopPrefixesList" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsContributionTopPrefixesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsContributionTopPrefixesList.Initializer"></a>

```python
from cdktn_provider_google_beta import data_google_storage_control_project_intelligence_finding_revision

dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsContributionTopPrefixesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsContributionTopPrefixesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsContributionTopPrefixesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsContributionTopPrefixesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsContributionTopPrefixesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsContributionTopPrefixesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsContributionTopPrefixesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsContributionTopPrefixesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsContributionTopPrefixesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsContributionTopPrefixesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsContributionTopPrefixesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsContributionTopPrefixesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsContributionTopPrefixesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsContributionTopPrefixesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsContributionTopPrefixesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsContributionTopPrefixesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsContributionTopPrefixesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsContributionTopPrefixesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsContributionTopPrefixesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsContributionTopPrefixesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsContributionTopPrefixesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsContributionTopPrefixesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsContributionTopPrefixesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsContributionTopPrefixesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsContributionTopPrefixesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsContributionTopPrefixesOutputReference <a name="DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsContributionTopPrefixesOutputReference" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsContributionTopPrefixesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsContributionTopPrefixesOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import data_google_storage_control_project_intelligence_finding_revision

dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsContributionTopPrefixesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsContributionTopPrefixesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsContributionTopPrefixesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsContributionTopPrefixesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsContributionTopPrefixesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsContributionTopPrefixesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsContributionTopPrefixesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsContributionTopPrefixesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsContributionTopPrefixesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsContributionTopPrefixesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsContributionTopPrefixesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsContributionTopPrefixesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsContributionTopPrefixesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsContributionTopPrefixesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsContributionTopPrefixesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsContributionTopPrefixesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsContributionTopPrefixesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsContributionTopPrefixesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsContributionTopPrefixesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsContributionTopPrefixesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsContributionTopPrefixesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsContributionTopPrefixesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsContributionTopPrefixesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsContributionTopPrefixesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsContributionTopPrefixesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsContributionTopPrefixesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsContributionTopPrefixesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsContributionTopPrefixesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsContributionTopPrefixesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsContributionTopPrefixesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsContributionTopPrefixesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsContributionTopPrefixesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsContributionTopPrefixesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsContributionTopPrefixesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsContributionTopPrefixesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsContributionTopPrefixesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsContributionTopPrefixesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsContributionTopPrefixesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsContributionTopPrefixesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsContributionTopPrefixesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsContributionTopPrefixesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsContributionTopPrefixesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsContributionTopPrefixesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsContributionTopPrefixesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsContributionTopPrefixesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsContributionTopPrefixesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsContributionTopPrefixesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsContributionTopPrefixesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsContributionTopPrefixesOutputReference.property.percentageIncrease">percentage_increase</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsContributionTopPrefixesOutputReference.property.prefix">prefix</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsContributionTopPrefixesOutputReference.property.throttledRequests">throttled_requests</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsContributionTopPrefixesOutputReference.property.totalEgressBytes">total_egress_bytes</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsContributionTopPrefixesOutputReference.property.totalOperationsCount">total_operations_count</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsContributionTopPrefixesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsContributionTopPrefixes">DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsContributionTopPrefixes</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsContributionTopPrefixesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsContributionTopPrefixesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `percentage_increase`<sup>Required</sup> <a name="percentage_increase" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsContributionTopPrefixesOutputReference.property.percentageIncrease"></a>

```python
percentage_increase: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `prefix`<sup>Required</sup> <a name="prefix" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsContributionTopPrefixesOutputReference.property.prefix"></a>

```python
prefix: str
```

- *Type:* str

---

##### `throttled_requests`<sup>Required</sup> <a name="throttled_requests" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsContributionTopPrefixesOutputReference.property.throttledRequests"></a>

```python
throttled_requests: str
```

- *Type:* str

---

##### `total_egress_bytes`<sup>Required</sup> <a name="total_egress_bytes" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsContributionTopPrefixesOutputReference.property.totalEgressBytes"></a>

```python
total_egress_bytes: str
```

- *Type:* str

---

##### `total_operations_count`<sup>Required</sup> <a name="total_operations_count" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsContributionTopPrefixesOutputReference.property.totalOperationsCount"></a>

```python
total_operations_count: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsContributionTopPrefixesOutputReference.property.internalValue"></a>

```python
internal_value: DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsContributionTopPrefixes
```

- *Type:* <a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsContributionTopPrefixes">DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsContributionTopPrefixes</a>

---


### DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsErrorList <a name="DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsErrorList" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsErrorList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsErrorList.Initializer"></a>

```python
from cdktn_provider_google_beta import data_google_storage_control_project_intelligence_finding_revision

dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsErrorList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsErrorList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsErrorList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsErrorList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsErrorList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsErrorList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsErrorList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsErrorList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsErrorList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsErrorList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsErrorList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsErrorList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsErrorList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsErrorList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsErrorList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsErrorList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsErrorList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsErrorList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsErrorList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsErrorOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsErrorList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsErrorList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsErrorList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsErrorList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsErrorList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsErrorOutputReference <a name="DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsErrorOutputReference" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsErrorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsErrorOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import data_google_storage_control_project_intelligence_finding_revision

dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsErrorOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsErrorOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsErrorOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsErrorOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsErrorOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsErrorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsErrorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsErrorOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsErrorOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsErrorOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsErrorOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsErrorOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsErrorOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsErrorOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsErrorOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsErrorOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsErrorOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsErrorOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsErrorOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsErrorOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsErrorOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsErrorOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsErrorOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsErrorOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsErrorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsErrorOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsErrorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsErrorOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsErrorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsErrorOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsErrorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsErrorOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsErrorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsErrorOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsErrorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsErrorOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsErrorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsErrorOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsErrorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsErrorOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsErrorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsErrorOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsErrorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsErrorOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsErrorOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsErrorOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsErrorOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsErrorOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsErrorOutputReference.property.code">code</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsErrorOutputReference.property.message">message</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsErrorOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsError">DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsError</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsErrorOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsErrorOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `code`<sup>Required</sup> <a name="code" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsErrorOutputReference.property.code"></a>

```python
code: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `message`<sup>Required</sup> <a name="message" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsErrorOutputReference.property.message"></a>

```python
message: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsErrorOutputReference.property.internalValue"></a>

```python
internal_value: DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsError
```

- *Type:* <a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsError">DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsError</a>

---


### DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsList <a name="DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsList" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsList.Initializer"></a>

```python
from cdktn_provider_google_beta import data_google_storage_control_project_intelligence_finding_revision

dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsOutputReference <a name="DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsOutputReference" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import data_google_storage_control_project_intelligence_finding_revision

dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsOutputReference.property.bucket">bucket</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsOutputReference.property.contribution">contribution</a></code> | <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsContributionList">DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsContributionList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsOutputReference.property.error">error</a></code> | <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsErrorList">DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsErrorList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsOutputReference.property.percentageIncrease">percentage_increase</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsOutputReference.property.throttledRequests">throttled_requests</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsOutputReference.property.totalEgressBytes">total_egress_bytes</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsOutputReference.property.totalOperationsCount">total_operations_count</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsOutputReference.property.totalStorageGrowthBytes">total_storage_growth_bytes</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBuckets">DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBuckets</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsOutputReference.property.bucket"></a>

```python
bucket: str
```

- *Type:* str

---

##### `contribution`<sup>Required</sup> <a name="contribution" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsOutputReference.property.contribution"></a>

```python
contribution: DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsContributionList
```

- *Type:* <a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsContributionList">DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsContributionList</a>

---

##### `error`<sup>Required</sup> <a name="error" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsOutputReference.property.error"></a>

```python
error: DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsErrorList
```

- *Type:* <a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsErrorList">DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsErrorList</a>

---

##### `percentage_increase`<sup>Required</sup> <a name="percentage_increase" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsOutputReference.property.percentageIncrease"></a>

```python
percentage_increase: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `throttled_requests`<sup>Required</sup> <a name="throttled_requests" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsOutputReference.property.throttledRequests"></a>

```python
throttled_requests: str
```

- *Type:* str

---

##### `total_egress_bytes`<sup>Required</sup> <a name="total_egress_bytes" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsOutputReference.property.totalEgressBytes"></a>

```python
total_egress_bytes: str
```

- *Type:* str

---

##### `total_operations_count`<sup>Required</sup> <a name="total_operations_count" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsOutputReference.property.totalOperationsCount"></a>

```python
total_operations_count: str
```

- *Type:* str

---

##### `total_storage_growth_bytes`<sup>Required</sup> <a name="total_storage_growth_bytes" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsOutputReference.property.totalStorageGrowthBytes"></a>

```python
total_storage_growth_bytes: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsOutputReference.property.internalValue"></a>

```python
internal_value: DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBuckets
```

- *Type:* <a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBuckets">DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBuckets</a>

---


### DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeList <a name="DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeList" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeList.Initializer"></a>

```python
from cdktn_provider_google_beta import data_google_storage_control_project_intelligence_finding_revision

dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeOutputReference <a name="DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeOutputReference" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import data_google_storage_control_project_intelligence_finding_revision

dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeOutputReference.property.percentageIncrease">percentage_increase</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeOutputReference.property.throttledRequests">throttled_requests</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeOutputReference.property.topBuckets">top_buckets</a></code> | <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsList">DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpike">DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpike</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `percentage_increase`<sup>Required</sup> <a name="percentage_increase" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeOutputReference.property.percentageIncrease"></a>

```python
percentage_increase: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `throttled_requests`<sup>Required</sup> <a name="throttled_requests" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeOutputReference.property.throttledRequests"></a>

```python
throttled_requests: str
```

- *Type:* str

---

##### `top_buckets`<sup>Required</sup> <a name="top_buckets" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeOutputReference.property.topBuckets"></a>

```python
top_buckets: DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsList
```

- *Type:* <a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsList">DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeOutputReference.property.internalValue"></a>

```python
internal_value: DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpike
```

- *Type:* <a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpike">DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpike</a>

---


### DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsContributionList <a name="DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsContributionList" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsContributionList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsContributionList.Initializer"></a>

```python
from cdktn_provider_google_beta import data_google_storage_control_project_intelligence_finding_revision

dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsContributionList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsContributionList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsContributionList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsContributionList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsContributionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsContributionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsContributionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsContributionList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsContributionList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsContributionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsContributionList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsContributionList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsContributionList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsContributionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsContributionList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsContributionList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsContributionList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsContributionList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsContributionList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsContributionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsContributionList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsContributionList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsContributionList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsContributionList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsContributionList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsContributionOutputReference <a name="DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsContributionOutputReference" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsContributionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsContributionOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import data_google_storage_control_project_intelligence_finding_revision

dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsContributionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsContributionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsContributionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsContributionOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsContributionOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsContributionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsContributionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsContributionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsContributionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsContributionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsContributionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsContributionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsContributionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsContributionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsContributionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsContributionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsContributionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsContributionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsContributionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsContributionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsContributionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsContributionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsContributionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsContributionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsContributionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsContributionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsContributionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsContributionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsContributionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsContributionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsContributionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsContributionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsContributionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsContributionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsContributionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsContributionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsContributionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsContributionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsContributionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsContributionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsContributionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsContributionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsContributionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsContributionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsContributionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsContributionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsContributionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsContributionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsContributionOutputReference.property.topPrefixes">top_prefixes</a></code> | <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsContributionTopPrefixesList">DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsContributionTopPrefixesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsContributionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsContribution">DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsContribution</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsContributionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsContributionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `top_prefixes`<sup>Required</sup> <a name="top_prefixes" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsContributionOutputReference.property.topPrefixes"></a>

```python
top_prefixes: DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsContributionTopPrefixesList
```

- *Type:* <a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsContributionTopPrefixesList">DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsContributionTopPrefixesList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsContributionOutputReference.property.internalValue"></a>

```python
internal_value: DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsContribution
```

- *Type:* <a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsContribution">DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsContribution</a>

---


### DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsContributionTopPrefixesList <a name="DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsContributionTopPrefixesList" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsContributionTopPrefixesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsContributionTopPrefixesList.Initializer"></a>

```python
from cdktn_provider_google_beta import data_google_storage_control_project_intelligence_finding_revision

dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsContributionTopPrefixesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsContributionTopPrefixesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsContributionTopPrefixesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsContributionTopPrefixesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsContributionTopPrefixesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsContributionTopPrefixesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsContributionTopPrefixesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsContributionTopPrefixesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsContributionTopPrefixesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsContributionTopPrefixesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsContributionTopPrefixesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsContributionTopPrefixesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsContributionTopPrefixesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsContributionTopPrefixesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsContributionTopPrefixesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsContributionTopPrefixesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsContributionTopPrefixesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsContributionTopPrefixesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsContributionTopPrefixesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsContributionTopPrefixesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsContributionTopPrefixesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsContributionTopPrefixesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsContributionTopPrefixesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsContributionTopPrefixesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsContributionTopPrefixesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsContributionTopPrefixesOutputReference <a name="DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsContributionTopPrefixesOutputReference" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsContributionTopPrefixesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsContributionTopPrefixesOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import data_google_storage_control_project_intelligence_finding_revision

dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsContributionTopPrefixesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsContributionTopPrefixesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsContributionTopPrefixesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsContributionTopPrefixesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsContributionTopPrefixesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsContributionTopPrefixesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsContributionTopPrefixesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsContributionTopPrefixesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsContributionTopPrefixesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsContributionTopPrefixesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsContributionTopPrefixesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsContributionTopPrefixesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsContributionTopPrefixesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsContributionTopPrefixesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsContributionTopPrefixesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsContributionTopPrefixesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsContributionTopPrefixesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsContributionTopPrefixesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsContributionTopPrefixesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsContributionTopPrefixesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsContributionTopPrefixesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsContributionTopPrefixesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsContributionTopPrefixesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsContributionTopPrefixesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsContributionTopPrefixesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsContributionTopPrefixesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsContributionTopPrefixesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsContributionTopPrefixesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsContributionTopPrefixesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsContributionTopPrefixesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsContributionTopPrefixesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsContributionTopPrefixesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsContributionTopPrefixesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsContributionTopPrefixesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsContributionTopPrefixesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsContributionTopPrefixesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsContributionTopPrefixesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsContributionTopPrefixesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsContributionTopPrefixesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsContributionTopPrefixesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsContributionTopPrefixesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsContributionTopPrefixesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsContributionTopPrefixesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsContributionTopPrefixesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsContributionTopPrefixesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsContributionTopPrefixesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsContributionTopPrefixesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsContributionTopPrefixesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsContributionTopPrefixesOutputReference.property.percentageIncrease">percentage_increase</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsContributionTopPrefixesOutputReference.property.prefix">prefix</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsContributionTopPrefixesOutputReference.property.throttledRequests">throttled_requests</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsContributionTopPrefixesOutputReference.property.totalEgressBytes">total_egress_bytes</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsContributionTopPrefixesOutputReference.property.totalOperationsCount">total_operations_count</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsContributionTopPrefixesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsContributionTopPrefixes">DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsContributionTopPrefixes</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsContributionTopPrefixesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsContributionTopPrefixesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `percentage_increase`<sup>Required</sup> <a name="percentage_increase" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsContributionTopPrefixesOutputReference.property.percentageIncrease"></a>

```python
percentage_increase: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `prefix`<sup>Required</sup> <a name="prefix" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsContributionTopPrefixesOutputReference.property.prefix"></a>

```python
prefix: str
```

- *Type:* str

---

##### `throttled_requests`<sup>Required</sup> <a name="throttled_requests" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsContributionTopPrefixesOutputReference.property.throttledRequests"></a>

```python
throttled_requests: str
```

- *Type:* str

---

##### `total_egress_bytes`<sup>Required</sup> <a name="total_egress_bytes" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsContributionTopPrefixesOutputReference.property.totalEgressBytes"></a>

```python
total_egress_bytes: str
```

- *Type:* str

---

##### `total_operations_count`<sup>Required</sup> <a name="total_operations_count" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsContributionTopPrefixesOutputReference.property.totalOperationsCount"></a>

```python
total_operations_count: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsContributionTopPrefixesOutputReference.property.internalValue"></a>

```python
internal_value: DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsContributionTopPrefixes
```

- *Type:* <a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsContributionTopPrefixes">DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsContributionTopPrefixes</a>

---


### DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsErrorList <a name="DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsErrorList" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsErrorList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsErrorList.Initializer"></a>

```python
from cdktn_provider_google_beta import data_google_storage_control_project_intelligence_finding_revision

dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsErrorList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsErrorList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsErrorList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsErrorList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsErrorList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsErrorList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsErrorList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsErrorList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsErrorList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsErrorList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsErrorList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsErrorList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsErrorList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsErrorList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsErrorList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsErrorList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsErrorList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsErrorList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsErrorList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsErrorOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsErrorList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsErrorList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsErrorList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsErrorList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsErrorList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsErrorOutputReference <a name="DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsErrorOutputReference" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsErrorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsErrorOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import data_google_storage_control_project_intelligence_finding_revision

dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsErrorOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsErrorOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsErrorOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsErrorOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsErrorOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsErrorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsErrorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsErrorOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsErrorOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsErrorOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsErrorOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsErrorOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsErrorOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsErrorOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsErrorOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsErrorOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsErrorOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsErrorOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsErrorOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsErrorOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsErrorOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsErrorOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsErrorOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsErrorOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsErrorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsErrorOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsErrorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsErrorOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsErrorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsErrorOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsErrorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsErrorOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsErrorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsErrorOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsErrorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsErrorOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsErrorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsErrorOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsErrorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsErrorOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsErrorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsErrorOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsErrorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsErrorOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsErrorOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsErrorOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsErrorOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsErrorOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsErrorOutputReference.property.code">code</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsErrorOutputReference.property.message">message</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsErrorOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsError">DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsError</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsErrorOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsErrorOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `code`<sup>Required</sup> <a name="code" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsErrorOutputReference.property.code"></a>

```python
code: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `message`<sup>Required</sup> <a name="message" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsErrorOutputReference.property.message"></a>

```python
message: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsErrorOutputReference.property.internalValue"></a>

```python
internal_value: DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsError
```

- *Type:* <a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsError">DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsError</a>

---


### DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsList <a name="DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsList" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsList.Initializer"></a>

```python
from cdktn_provider_google_beta import data_google_storage_control_project_intelligence_finding_revision

dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsOutputReference <a name="DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsOutputReference" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import data_google_storage_control_project_intelligence_finding_revision

dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsOutputReference.property.bucket">bucket</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsOutputReference.property.contribution">contribution</a></code> | <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsContributionList">DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsContributionList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsOutputReference.property.error">error</a></code> | <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsErrorList">DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsErrorList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsOutputReference.property.percentageIncrease">percentage_increase</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsOutputReference.property.throttledRequests">throttled_requests</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsOutputReference.property.totalEgressBytes">total_egress_bytes</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsOutputReference.property.totalOperationsCount">total_operations_count</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsOutputReference.property.totalStorageGrowthBytes">total_storage_growth_bytes</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBuckets">DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBuckets</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsOutputReference.property.bucket"></a>

```python
bucket: str
```

- *Type:* str

---

##### `contribution`<sup>Required</sup> <a name="contribution" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsOutputReference.property.contribution"></a>

```python
contribution: DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsContributionList
```

- *Type:* <a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsContributionList">DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsContributionList</a>

---

##### `error`<sup>Required</sup> <a name="error" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsOutputReference.property.error"></a>

```python
error: DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsErrorList
```

- *Type:* <a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsErrorList">DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsErrorList</a>

---

##### `percentage_increase`<sup>Required</sup> <a name="percentage_increase" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsOutputReference.property.percentageIncrease"></a>

```python
percentage_increase: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `throttled_requests`<sup>Required</sup> <a name="throttled_requests" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsOutputReference.property.throttledRequests"></a>

```python
throttled_requests: str
```

- *Type:* str

---

##### `total_egress_bytes`<sup>Required</sup> <a name="total_egress_bytes" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsOutputReference.property.totalEgressBytes"></a>

```python
total_egress_bytes: str
```

- *Type:* str

---

##### `total_operations_count`<sup>Required</sup> <a name="total_operations_count" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsOutputReference.property.totalOperationsCount"></a>

```python
total_operations_count: str
```

- *Type:* str

---

##### `total_storage_growth_bytes`<sup>Required</sup> <a name="total_storage_growth_bytes" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsOutputReference.property.totalStorageGrowthBytes"></a>

```python
total_storage_growth_bytes: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsOutputReference.property.internalValue"></a>

```python
internal_value: DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBuckets
```

- *Type:* <a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBuckets">DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBuckets</a>

---



