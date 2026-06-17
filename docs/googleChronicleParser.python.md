# `googleChronicleParser` Submodule <a name="`googleChronicleParser` Submodule" id="@cdktn/provider-google-beta.googleChronicleParser"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleChronicleParser <a name="GoogleChronicleParser" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_chronicle_parser google_chronicle_parser}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.Initializer"></a>

```python
from cdktn_provider_google_beta import google_chronicle_parser

googleChronicleParser.GoogleChronicleParser(
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
  logtype: str,
  cbn: str = None,
  deletion_policy: str = None,
  id: str = None,
  low_code: GoogleChronicleParserLowCode = None,
  project: str = None,
  timeouts: GoogleChronicleParserTimeouts = None,
  validated_on_empty_logs: bool | IResolvable = None,
  validation_skipped: bool | IResolvable = None,
  version_info: GoogleChronicleParserVersionInfo = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.Initializer.parameter.instance">instance</a></code> | <code>str</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.Initializer.parameter.location">location</a></code> | <code>str</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.Initializer.parameter.logtype">logtype</a></code> | <code>str</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.Initializer.parameter.cbn">cbn</a></code> | <code>str</code> | if the parser is built using config documentation: https://cloud.google.com/chronicle/docs/preview/parser-extensions/parsing-overview. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.Initializer.parameter.deletionPolicy">deletion_policy</a></code> | <code>str</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_chronicle_parser#id GoogleChronicleParser#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.Initializer.parameter.lowCode">low_code</a></code> | <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCode">GoogleChronicleParserLowCode</a></code> | low_code block. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_chronicle_parser#project GoogleChronicleParser#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserTimeouts">GoogleChronicleParserTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.Initializer.parameter.validatedOnEmptyLogs">validated_on_empty_logs</a></code> | <code>bool \| cdktn.IResolvable</code> | Flag to bypass parser validation when no logs are found. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.Initializer.parameter.validationSkipped">validation_skipped</a></code> | <code>bool \| cdktn.IResolvable</code> | If true, bypasses parser validation. If enabled, the parser won't be rejected during the validation phase and validation will be skipped. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.Initializer.parameter.versionInfo">version_info</a></code> | <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserVersionInfo">GoogleChronicleParserVersionInfo</a></code> | version_info block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `instance`<sup>Required</sup> <a name="instance" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.Initializer.parameter.instance"></a>

- *Type:* str

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_chronicle_parser#instance GoogleChronicleParser#instance}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.Initializer.parameter.location"></a>

- *Type:* str

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_chronicle_parser#location GoogleChronicleParser#location}

---

##### `logtype`<sup>Required</sup> <a name="logtype" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.Initializer.parameter.logtype"></a>

- *Type:* str

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_chronicle_parser#logtype GoogleChronicleParser#logtype}

---

##### `cbn`<sup>Optional</sup> <a name="cbn" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.Initializer.parameter.cbn"></a>

- *Type:* str

if the parser is built using config documentation: https://cloud.google.com/chronicle/docs/preview/parser-extensions/parsing-overview.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_chronicle_parser#cbn GoogleChronicleParser#cbn}

---

##### `deletion_policy`<sup>Optional</sup> <a name="deletion_policy" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.Initializer.parameter.deletionPolicy"></a>

- *Type:* str

Whether Terraform will be prevented from destroying the instance.

Defaults to "DELETE".
When a 'terraform destroy' or 'terraform apply' would delete the instance,
the command will fail if this field is set to "PREVENT" in Terraform state.
When set to "ABANDON", the command will remove the resource from Terraform
management without updating or deleting the resource in the API.
When set to "DELETE", deleting the resource is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_chronicle_parser#deletion_policy GoogleChronicleParser#deletion_policy}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_chronicle_parser#id GoogleChronicleParser#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `low_code`<sup>Optional</sup> <a name="low_code" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.Initializer.parameter.lowCode"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCode">GoogleChronicleParserLowCode</a>

low_code block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_chronicle_parser#low_code GoogleChronicleParser#low_code}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_chronicle_parser#project GoogleChronicleParser#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserTimeouts">GoogleChronicleParserTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_chronicle_parser#timeouts GoogleChronicleParser#timeouts}

---

##### `validated_on_empty_logs`<sup>Optional</sup> <a name="validated_on_empty_logs" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.Initializer.parameter.validatedOnEmptyLogs"></a>

- *Type:* bool | cdktn.IResolvable

Flag to bypass parser validation when no logs are found.

If enabled, the parser won't be be rejected during the validation
phase when no logs are found.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_chronicle_parser#validated_on_empty_logs GoogleChronicleParser#validated_on_empty_logs}

---

##### `validation_skipped`<sup>Optional</sup> <a name="validation_skipped" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.Initializer.parameter.validationSkipped"></a>

- *Type:* bool | cdktn.IResolvable

If true, bypasses parser validation. If enabled, the parser won't be rejected during the validation phase and validation will be skipped.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_chronicle_parser#validation_skipped GoogleChronicleParser#validation_skipped}

---

##### `version_info`<sup>Optional</sup> <a name="version_info" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.Initializer.parameter.versionInfo"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserVersionInfo">GoogleChronicleParserVersionInfo</a>

version_info block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_chronicle_parser#version_info GoogleChronicleParser#version_info}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.putLowCode">put_low_code</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.putVersionInfo">put_version_info</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.resetCbn">reset_cbn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.resetDeletionPolicy">reset_deletion_policy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.resetLowCode">reset_low_code</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.resetTimeouts">reset_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.resetValidatedOnEmptyLogs">reset_validated_on_empty_logs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.resetValidationSkipped">reset_validation_skipped</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.resetVersionInfo">reset_version_info</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_low_code` <a name="put_low_code" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.putLowCode"></a>

```python
def put_low_code(
  field_extractors: GoogleChronicleParserLowCodeFieldExtractors = None,
  log: str = None
) -> None
```

###### `field_extractors`<sup>Optional</sup> <a name="field_extractors" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.putLowCode.parameter.fieldExtractors"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractors">GoogleChronicleParserLowCodeFieldExtractors</a>

field_extractors block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_chronicle_parser#field_extractors GoogleChronicleParser#field_extractors}

---

###### `log`<sup>Optional</sup> <a name="log" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.putLowCode.parameter.log"></a>

- *Type:* str

The log used to create this low code parser in the UI.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_chronicle_parser#log GoogleChronicleParser#log}

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_chronicle_parser#create GoogleChronicleParser#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_chronicle_parser#delete GoogleChronicleParser#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_chronicle_parser#update GoogleChronicleParser#update}.

---

##### `put_version_info` <a name="put_version_info" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.putVersionInfo"></a>

```python
def put_version_info(
  auto_upgrade_disabled: bool | IResolvable
) -> None
```

###### `auto_upgrade_disabled`<sup>Required</sup> <a name="auto_upgrade_disabled" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.putVersionInfo.parameter.autoUpgradeDisabled"></a>

- *Type:* bool | cdktn.IResolvable

Signifies if the parser is disabled for auto upgrade.

If true, the parser
will not be upgraded by the auto upgrade process.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_chronicle_parser#auto_upgrade_disabled GoogleChronicleParser#auto_upgrade_disabled}

---

##### `reset_cbn` <a name="reset_cbn" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.resetCbn"></a>

```python
def reset_cbn() -> None
```

##### `reset_deletion_policy` <a name="reset_deletion_policy" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.resetDeletionPolicy"></a>

```python
def reset_deletion_policy() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_low_code` <a name="reset_low_code" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.resetLowCode"></a>

```python
def reset_low_code() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

##### `reset_validated_on_empty_logs` <a name="reset_validated_on_empty_logs" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.resetValidatedOnEmptyLogs"></a>

```python
def reset_validated_on_empty_logs() -> None
```

##### `reset_validation_skipped` <a name="reset_validation_skipped" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.resetValidationSkipped"></a>

```python
def reset_validation_skipped() -> None
```

##### `reset_version_info` <a name="reset_version_info" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.resetVersionInfo"></a>

```python
def reset_version_info() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a GoogleChronicleParser resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.isConstruct"></a>

```python
from cdktn_provider_google_beta import google_chronicle_parser

googleChronicleParser.GoogleChronicleParser.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.isTerraformElement"></a>

```python
from cdktn_provider_google_beta import google_chronicle_parser

googleChronicleParser.GoogleChronicleParser.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.isTerraformResource"></a>

```python
from cdktn_provider_google_beta import google_chronicle_parser

googleChronicleParser.GoogleChronicleParser.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.generateConfigForImport"></a>

```python
from cdktn_provider_google_beta import google_chronicle_parser

googleChronicleParser.GoogleChronicleParser.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a GoogleChronicleParser resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the GoogleChronicleParser to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing GoogleChronicleParser that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_chronicle_parser#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the GoogleChronicleParser to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.property.changelogs">changelogs</a></code> | <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserChangelogsList">GoogleChronicleParserChangelogsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.property.createTime">create_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.property.creator">creator</a></code> | <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserCreatorList">GoogleChronicleParserCreatorList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.property.dynamicParsingConfig">dynamic_parsing_config</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.property.lowCode">low_code</a></code> | <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeOutputReference">GoogleChronicleParserLowCodeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.property.parser">parser</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.property.parserExtension">parser_extension</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.property.releaseStage">release_stage</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserTimeoutsOutputReference">GoogleChronicleParserTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.property.validationReport">validation_report</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.property.validationStage">validation_stage</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.property.versionInfo">version_info</a></code> | <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserVersionInfoOutputReference">GoogleChronicleParserVersionInfoOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.property.cbnInput">cbn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.property.deletionPolicyInput">deletion_policy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.property.instanceInput">instance_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.property.logtypeInput">logtype_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.property.lowCodeInput">low_code_input</a></code> | <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCode">GoogleChronicleParserLowCode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.property.timeoutsInput">timeouts_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserTimeouts">GoogleChronicleParserTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.property.validatedOnEmptyLogsInput">validated_on_empty_logs_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.property.validationSkippedInput">validation_skipped_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.property.versionInfoInput">version_info_input</a></code> | <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserVersionInfo">GoogleChronicleParserVersionInfo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.property.cbn">cbn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.property.deletionPolicy">deletion_policy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.property.instance">instance</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.property.logtype">logtype</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.property.project">project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.property.validatedOnEmptyLogs">validated_on_empty_logs</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.property.validationSkipped">validation_skipped</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `changelogs`<sup>Required</sup> <a name="changelogs" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.property.changelogs"></a>

```python
changelogs: GoogleChronicleParserChangelogsList
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserChangelogsList">GoogleChronicleParserChangelogsList</a>

---

##### `create_time`<sup>Required</sup> <a name="create_time" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.property.createTime"></a>

```python
create_time: str
```

- *Type:* str

---

##### `creator`<sup>Required</sup> <a name="creator" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.property.creator"></a>

```python
creator: GoogleChronicleParserCreatorList
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserCreatorList">GoogleChronicleParserCreatorList</a>

---

##### `dynamic_parsing_config`<sup>Required</sup> <a name="dynamic_parsing_config" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.property.dynamicParsingConfig"></a>

```python
dynamic_parsing_config: str
```

- *Type:* str

---

##### `low_code`<sup>Required</sup> <a name="low_code" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.property.lowCode"></a>

```python
low_code: GoogleChronicleParserLowCodeOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeOutputReference">GoogleChronicleParserLowCodeOutputReference</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `parser`<sup>Required</sup> <a name="parser" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.property.parser"></a>

```python
parser: str
```

- *Type:* str

---

##### `parser_extension`<sup>Required</sup> <a name="parser_extension" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.property.parserExtension"></a>

```python
parser_extension: str
```

- *Type:* str

---

##### `release_stage`<sup>Required</sup> <a name="release_stage" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.property.releaseStage"></a>

```python
release_stage: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.property.timeouts"></a>

```python
timeouts: GoogleChronicleParserTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserTimeoutsOutputReference">GoogleChronicleParserTimeoutsOutputReference</a>

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `validation_report`<sup>Required</sup> <a name="validation_report" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.property.validationReport"></a>

```python
validation_report: str
```

- *Type:* str

---

##### `validation_stage`<sup>Required</sup> <a name="validation_stage" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.property.validationStage"></a>

```python
validation_stage: str
```

- *Type:* str

---

##### `version_info`<sup>Required</sup> <a name="version_info" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.property.versionInfo"></a>

```python
version_info: GoogleChronicleParserVersionInfoOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserVersionInfoOutputReference">GoogleChronicleParserVersionInfoOutputReference</a>

---

##### `cbn_input`<sup>Optional</sup> <a name="cbn_input" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.property.cbnInput"></a>

```python
cbn_input: str
```

- *Type:* str

---

##### `deletion_policy_input`<sup>Optional</sup> <a name="deletion_policy_input" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.property.deletionPolicyInput"></a>

```python
deletion_policy_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `instance_input`<sup>Optional</sup> <a name="instance_input" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.property.instanceInput"></a>

```python
instance_input: str
```

- *Type:* str

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `logtype_input`<sup>Optional</sup> <a name="logtype_input" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.property.logtypeInput"></a>

```python
logtype_input: str
```

- *Type:* str

---

##### `low_code_input`<sup>Optional</sup> <a name="low_code_input" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.property.lowCodeInput"></a>

```python
low_code_input: GoogleChronicleParserLowCode
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCode">GoogleChronicleParserLowCode</a>

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.property.timeoutsInput"></a>

```python
timeouts_input: IResolvable | GoogleChronicleParserTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserTimeouts">GoogleChronicleParserTimeouts</a>

---

##### `validated_on_empty_logs_input`<sup>Optional</sup> <a name="validated_on_empty_logs_input" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.property.validatedOnEmptyLogsInput"></a>

```python
validated_on_empty_logs_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `validation_skipped_input`<sup>Optional</sup> <a name="validation_skipped_input" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.property.validationSkippedInput"></a>

```python
validation_skipped_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `version_info_input`<sup>Optional</sup> <a name="version_info_input" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.property.versionInfoInput"></a>

```python
version_info_input: GoogleChronicleParserVersionInfo
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserVersionInfo">GoogleChronicleParserVersionInfo</a>

---

##### `cbn`<sup>Required</sup> <a name="cbn" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.property.cbn"></a>

```python
cbn: str
```

- *Type:* str

---

##### `deletion_policy`<sup>Required</sup> <a name="deletion_policy" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.property.deletionPolicy"></a>

```python
deletion_policy: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `instance`<sup>Required</sup> <a name="instance" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.property.instance"></a>

```python
instance: str
```

- *Type:* str

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `logtype`<sup>Required</sup> <a name="logtype" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.property.logtype"></a>

```python
logtype: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.property.project"></a>

```python
project: str
```

- *Type:* str

---

##### `validated_on_empty_logs`<sup>Required</sup> <a name="validated_on_empty_logs" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.property.validatedOnEmptyLogs"></a>

```python
validated_on_empty_logs: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `validation_skipped`<sup>Required</sup> <a name="validation_skipped" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.property.validationSkipped"></a>

```python
validation_skipped: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleChronicleParserChangelogs <a name="GoogleChronicleParserChangelogs" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserChangelogs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserChangelogs.Initializer"></a>

```python
from cdktn_provider_google_beta import google_chronicle_parser

googleChronicleParser.GoogleChronicleParserChangelogs()
```


### GoogleChronicleParserChangelogsEntries <a name="GoogleChronicleParserChangelogsEntries" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserChangelogsEntries"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserChangelogsEntries.Initializer"></a>

```python
from cdktn_provider_google_beta import google_chronicle_parser

googleChronicleParser.GoogleChronicleParserChangelogsEntries()
```


### GoogleChronicleParserConfig <a name="GoogleChronicleParserConfig" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserConfig.Initializer"></a>

```python
from cdktn_provider_google_beta import google_chronicle_parser

googleChronicleParser.GoogleChronicleParserConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  instance: str,
  location: str,
  logtype: str,
  cbn: str = None,
  deletion_policy: str = None,
  id: str = None,
  low_code: GoogleChronicleParserLowCode = None,
  project: str = None,
  timeouts: GoogleChronicleParserTimeouts = None,
  validated_on_empty_logs: bool | IResolvable = None,
  validation_skipped: bool | IResolvable = None,
  version_info: GoogleChronicleParserVersionInfo = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserConfig.property.instance">instance</a></code> | <code>str</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserConfig.property.location">location</a></code> | <code>str</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserConfig.property.logtype">logtype</a></code> | <code>str</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserConfig.property.cbn">cbn</a></code> | <code>str</code> | if the parser is built using config documentation: https://cloud.google.com/chronicle/docs/preview/parser-extensions/parsing-overview. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserConfig.property.deletionPolicy">deletion_policy</a></code> | <code>str</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_chronicle_parser#id GoogleChronicleParser#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserConfig.property.lowCode">low_code</a></code> | <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCode">GoogleChronicleParserLowCode</a></code> | low_code block. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_chronicle_parser#project GoogleChronicleParser#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserTimeouts">GoogleChronicleParserTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserConfig.property.validatedOnEmptyLogs">validated_on_empty_logs</a></code> | <code>bool \| cdktn.IResolvable</code> | Flag to bypass parser validation when no logs are found. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserConfig.property.validationSkipped">validation_skipped</a></code> | <code>bool \| cdktn.IResolvable</code> | If true, bypasses parser validation. If enabled, the parser won't be rejected during the validation phase and validation will be skipped. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserConfig.property.versionInfo">version_info</a></code> | <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserVersionInfo">GoogleChronicleParserVersionInfo</a></code> | version_info block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `instance`<sup>Required</sup> <a name="instance" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserConfig.property.instance"></a>

```python
instance: str
```

- *Type:* str

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_chronicle_parser#instance GoogleChronicleParser#instance}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserConfig.property.location"></a>

```python
location: str
```

- *Type:* str

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_chronicle_parser#location GoogleChronicleParser#location}

---

##### `logtype`<sup>Required</sup> <a name="logtype" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserConfig.property.logtype"></a>

```python
logtype: str
```

- *Type:* str

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_chronicle_parser#logtype GoogleChronicleParser#logtype}

---

##### `cbn`<sup>Optional</sup> <a name="cbn" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserConfig.property.cbn"></a>

```python
cbn: str
```

- *Type:* str

if the parser is built using config documentation: https://cloud.google.com/chronicle/docs/preview/parser-extensions/parsing-overview.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_chronicle_parser#cbn GoogleChronicleParser#cbn}

---

##### `deletion_policy`<sup>Optional</sup> <a name="deletion_policy" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_chronicle_parser#deletion_policy GoogleChronicleParser#deletion_policy}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_chronicle_parser#id GoogleChronicleParser#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `low_code`<sup>Optional</sup> <a name="low_code" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserConfig.property.lowCode"></a>

```python
low_code: GoogleChronicleParserLowCode
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCode">GoogleChronicleParserLowCode</a>

low_code block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_chronicle_parser#low_code GoogleChronicleParser#low_code}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_chronicle_parser#project GoogleChronicleParser#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserConfig.property.timeouts"></a>

```python
timeouts: GoogleChronicleParserTimeouts
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserTimeouts">GoogleChronicleParserTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_chronicle_parser#timeouts GoogleChronicleParser#timeouts}

---

##### `validated_on_empty_logs`<sup>Optional</sup> <a name="validated_on_empty_logs" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserConfig.property.validatedOnEmptyLogs"></a>

```python
validated_on_empty_logs: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Flag to bypass parser validation when no logs are found.

If enabled, the parser won't be be rejected during the validation
phase when no logs are found.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_chronicle_parser#validated_on_empty_logs GoogleChronicleParser#validated_on_empty_logs}

---

##### `validation_skipped`<sup>Optional</sup> <a name="validation_skipped" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserConfig.property.validationSkipped"></a>

```python
validation_skipped: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

If true, bypasses parser validation. If enabled, the parser won't be rejected during the validation phase and validation will be skipped.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_chronicle_parser#validation_skipped GoogleChronicleParser#validation_skipped}

---

##### `version_info`<sup>Optional</sup> <a name="version_info" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserConfig.property.versionInfo"></a>

```python
version_info: GoogleChronicleParserVersionInfo
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserVersionInfo">GoogleChronicleParserVersionInfo</a>

version_info block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_chronicle_parser#version_info GoogleChronicleParser#version_info}

---

### GoogleChronicleParserCreator <a name="GoogleChronicleParserCreator" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserCreator"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserCreator.Initializer"></a>

```python
from cdktn_provider_google_beta import google_chronicle_parser

googleChronicleParser.GoogleChronicleParserCreator()
```


### GoogleChronicleParserLowCode <a name="GoogleChronicleParserLowCode" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCode"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCode.Initializer"></a>

```python
from cdktn_provider_google_beta import google_chronicle_parser

googleChronicleParser.GoogleChronicleParserLowCode(
  field_extractors: GoogleChronicleParserLowCodeFieldExtractors = None,
  log: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCode.property.fieldExtractors">field_extractors</a></code> | <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractors">GoogleChronicleParserLowCodeFieldExtractors</a></code> | field_extractors block. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCode.property.log">log</a></code> | <code>str</code> | The log used to create this low code parser in the UI. |

---

##### `field_extractors`<sup>Optional</sup> <a name="field_extractors" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCode.property.fieldExtractors"></a>

```python
field_extractors: GoogleChronicleParserLowCodeFieldExtractors
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractors">GoogleChronicleParserLowCodeFieldExtractors</a>

field_extractors block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_chronicle_parser#field_extractors GoogleChronicleParser#field_extractors}

---

##### `log`<sup>Optional</sup> <a name="log" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCode.property.log"></a>

```python
log: str
```

- *Type:* str

The log used to create this low code parser in the UI.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_chronicle_parser#log GoogleChronicleParser#log}

---

### GoogleChronicleParserLowCodeFieldExtractors <a name="GoogleChronicleParserLowCodeFieldExtractors" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractors"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractors.Initializer"></a>

```python
from cdktn_provider_google_beta import google_chronicle_parser

googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractors(
  append_repeated_fields: bool | IResolvable = None,
  extractors: IResolvable | typing.List[GoogleChronicleParserLowCodeFieldExtractorsExtractors] = None,
  log_format: str = None,
  preprocess_config: GoogleChronicleParserLowCodeFieldExtractorsPreprocessConfig = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractors.property.appendRepeatedFields">append_repeated_fields</a></code> | <code>bool \| cdktn.IResolvable</code> | Whether to append repeated fields or not. When false, repeated fields will be replaced. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractors.property.extractors">extractors</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsExtractors">GoogleChronicleParserLowCodeFieldExtractorsExtractors</a>]</code> | extractors block. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractors.property.logFormat">log_format</a></code> | <code>str</code> | Possible values: JSON CSV XML. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractors.property.preprocessConfig">preprocess_config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsPreprocessConfig">GoogleChronicleParserLowCodeFieldExtractorsPreprocessConfig</a></code> | preprocess_config block. |

---

##### `append_repeated_fields`<sup>Optional</sup> <a name="append_repeated_fields" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractors.property.appendRepeatedFields"></a>

```python
append_repeated_fields: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Whether to append repeated fields or not. When false, repeated fields will be replaced.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_chronicle_parser#append_repeated_fields GoogleChronicleParser#append_repeated_fields}

---

##### `extractors`<sup>Optional</sup> <a name="extractors" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractors.property.extractors"></a>

```python
extractors: IResolvable | typing.List[GoogleChronicleParserLowCodeFieldExtractorsExtractors]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsExtractors">GoogleChronicleParserLowCodeFieldExtractorsExtractors</a>]

extractors block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_chronicle_parser#extractors GoogleChronicleParser#extractors}

---

##### `log_format`<sup>Optional</sup> <a name="log_format" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractors.property.logFormat"></a>

```python
log_format: str
```

- *Type:* str

Possible values: JSON CSV XML.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_chronicle_parser#log_format GoogleChronicleParser#log_format}

---

##### `preprocess_config`<sup>Optional</sup> <a name="preprocess_config" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractors.property.preprocessConfig"></a>

```python
preprocess_config: GoogleChronicleParserLowCodeFieldExtractorsPreprocessConfig
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsPreprocessConfig">GoogleChronicleParserLowCodeFieldExtractorsPreprocessConfig</a>

preprocess_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_chronicle_parser#preprocess_config GoogleChronicleParser#preprocess_config}

---

### GoogleChronicleParserLowCodeFieldExtractorsExtractors <a name="GoogleChronicleParserLowCodeFieldExtractorsExtractors" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsExtractors"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsExtractors.Initializer"></a>

```python
from cdktn_provider_google_beta import google_chronicle_parser

googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsExtractors(
  destination_path: str = None,
  field_path: str = None,
  precondition_op: str = None,
  precondition_path: str = None,
  precondition_value: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsExtractors.property.destinationPath">destination_path</a></code> | <code>str</code> | Path in generated event which is to be populated. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsExtractors.property.fieldPath">field_path</a></code> | <code>str</code> | Field path could be a json path, xml path or csv column name depending on log format. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsExtractors.property.preconditionOp">precondition_op</a></code> | <code>str</code> | Operator used for precondition. Possible values: EQUALS NOT_EQUALS. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsExtractors.property.preconditionPath">precondition_path</a></code> | <code>str</code> | Precondition path could be a json path, xml path or csv column name depending on log format. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsExtractors.property.preconditionValue">precondition_value</a></code> | <code>str</code> | Precondition value. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsExtractors.property.value">value</a></code> | <code>str</code> | Value to be mapped to the destination path directly. |

---

##### `destination_path`<sup>Optional</sup> <a name="destination_path" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsExtractors.property.destinationPath"></a>

```python
destination_path: str
```

- *Type:* str

Path in generated event which is to be populated.

This is required if the
FieldExtractor is used to specify the parser extension.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_chronicle_parser#destination_path GoogleChronicleParser#destination_path}

---

##### `field_path`<sup>Optional</sup> <a name="field_path" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsExtractors.property.fieldPath"></a>

```python
field_path: str
```

- *Type:* str

Field path could be a json path, xml path or csv column name depending on log format.

It refers to a section or substring in raw log.
This is required if the FieldExtractor is used to specify the parser
extension.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_chronicle_parser#field_path GoogleChronicleParser#field_path}

---

##### `precondition_op`<sup>Optional</sup> <a name="precondition_op" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsExtractors.property.preconditionOp"></a>

```python
precondition_op: str
```

- *Type:* str

Operator used for precondition. Possible values: EQUALS NOT_EQUALS.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_chronicle_parser#precondition_op GoogleChronicleParser#precondition_op}

---

##### `precondition_path`<sup>Optional</sup> <a name="precondition_path" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsExtractors.property.preconditionPath"></a>

```python
precondition_path: str
```

- *Type:* str

Precondition path could be a json path, xml path or csv column name depending on log format.

It refers to a section or substring in raw log.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_chronicle_parser#precondition_path GoogleChronicleParser#precondition_path}

---

##### `precondition_value`<sup>Optional</sup> <a name="precondition_value" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsExtractors.property.preconditionValue"></a>

```python
precondition_value: str
```

- *Type:* str

Precondition value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_chronicle_parser#precondition_value GoogleChronicleParser#precondition_value}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsExtractors.property.value"></a>

```python
value: str
```

- *Type:* str

Value to be mapped to the destination path directly.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_chronicle_parser#value GoogleChronicleParser#value}

---

### GoogleChronicleParserLowCodeFieldExtractorsPreprocessConfig <a name="GoogleChronicleParserLowCodeFieldExtractorsPreprocessConfig" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsPreprocessConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsPreprocessConfig.Initializer"></a>

```python
from cdktn_provider_google_beta import google_chronicle_parser

googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsPreprocessConfig(
  grok_regex: str = None,
  target: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsPreprocessConfig.property.grokRegex">grok_regex</a></code> | <code>str</code> | GROK Regex to extract the structured part of the log. syntax documentation: www.elastic.co/guide/en/logstash/current/plugins-filters-grok.html. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsPreprocessConfig.property.target">target</a></code> | <code>str</code> | Target field name for the structured part of the log. This should match a SEMANTIC identifier from the grok expression. |

---

##### `grok_regex`<sup>Optional</sup> <a name="grok_regex" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsPreprocessConfig.property.grokRegex"></a>

```python
grok_regex: str
```

- *Type:* str

GROK Regex to extract the structured part of the log. syntax documentation: www.elastic.co/guide/en/logstash/current/plugins-filters-grok.html.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_chronicle_parser#grok_regex GoogleChronicleParser#grok_regex}

---

##### `target`<sup>Optional</sup> <a name="target" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsPreprocessConfig.property.target"></a>

```python
target: str
```

- *Type:* str

Target field name for the structured part of the log. This should match a SEMANTIC identifier from the grok expression.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_chronicle_parser#target GoogleChronicleParser#target}

---

### GoogleChronicleParserTimeouts <a name="GoogleChronicleParserTimeouts" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserTimeouts.Initializer"></a>

```python
from cdktn_provider_google_beta import google_chronicle_parser

googleChronicleParser.GoogleChronicleParserTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_chronicle_parser#create GoogleChronicleParser#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_chronicle_parser#delete GoogleChronicleParser#delete}. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_chronicle_parser#update GoogleChronicleParser#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_chronicle_parser#create GoogleChronicleParser#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_chronicle_parser#delete GoogleChronicleParser#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_chronicle_parser#update GoogleChronicleParser#update}.

---

### GoogleChronicleParserVersionInfo <a name="GoogleChronicleParserVersionInfo" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserVersionInfo"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserVersionInfo.Initializer"></a>

```python
from cdktn_provider_google_beta import google_chronicle_parser

googleChronicleParser.GoogleChronicleParserVersionInfo(
  auto_upgrade_disabled: bool | IResolvable
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserVersionInfo.property.autoUpgradeDisabled">auto_upgrade_disabled</a></code> | <code>bool \| cdktn.IResolvable</code> | Signifies if the parser is disabled for auto upgrade. |

---

##### `auto_upgrade_disabled`<sup>Required</sup> <a name="auto_upgrade_disabled" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserVersionInfo.property.autoUpgradeDisabled"></a>

```python
auto_upgrade_disabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Signifies if the parser is disabled for auto upgrade.

If true, the parser
will not be upgraded by the auto upgrade process.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_chronicle_parser#auto_upgrade_disabled GoogleChronicleParser#auto_upgrade_disabled}

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleChronicleParserChangelogsEntriesList <a name="GoogleChronicleParserChangelogsEntriesList" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserChangelogsEntriesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserChangelogsEntriesList.Initializer"></a>

```python
from cdktn_provider_google_beta import google_chronicle_parser

googleChronicleParser.GoogleChronicleParserChangelogsEntriesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserChangelogsEntriesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserChangelogsEntriesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserChangelogsEntriesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserChangelogsEntriesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserChangelogsEntriesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserChangelogsEntriesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserChangelogsEntriesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserChangelogsEntriesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserChangelogsEntriesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserChangelogsEntriesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserChangelogsEntriesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserChangelogsEntriesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserChangelogsEntriesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserChangelogsEntriesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserChangelogsEntriesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserChangelogsEntriesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserChangelogsEntriesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserChangelogsEntriesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleChronicleParserChangelogsEntriesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserChangelogsEntriesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserChangelogsEntriesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserChangelogsEntriesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserChangelogsEntriesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserChangelogsEntriesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### GoogleChronicleParserChangelogsEntriesOutputReference <a name="GoogleChronicleParserChangelogsEntriesOutputReference" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserChangelogsEntriesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserChangelogsEntriesOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_chronicle_parser

googleChronicleParser.GoogleChronicleParserChangelogsEntriesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserChangelogsEntriesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserChangelogsEntriesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserChangelogsEntriesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserChangelogsEntriesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserChangelogsEntriesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserChangelogsEntriesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserChangelogsEntriesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserChangelogsEntriesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserChangelogsEntriesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserChangelogsEntriesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserChangelogsEntriesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserChangelogsEntriesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserChangelogsEntriesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserChangelogsEntriesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserChangelogsEntriesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserChangelogsEntriesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserChangelogsEntriesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserChangelogsEntriesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserChangelogsEntriesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserChangelogsEntriesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserChangelogsEntriesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserChangelogsEntriesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserChangelogsEntriesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserChangelogsEntriesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserChangelogsEntriesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserChangelogsEntriesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserChangelogsEntriesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserChangelogsEntriesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserChangelogsEntriesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserChangelogsEntriesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserChangelogsEntriesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserChangelogsEntriesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserChangelogsEntriesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserChangelogsEntriesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserChangelogsEntriesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserChangelogsEntriesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserChangelogsEntriesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserChangelogsEntriesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserChangelogsEntriesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserChangelogsEntriesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserChangelogsEntriesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserChangelogsEntriesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserChangelogsEntriesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserChangelogsEntriesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserChangelogsEntriesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserChangelogsEntriesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserChangelogsEntriesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserChangelogsEntriesOutputReference.property.changeMessage">change_message</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserChangelogsEntriesOutputReference.property.createTime">create_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserChangelogsEntriesOutputReference.property.deleted">deleted</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserChangelogsEntriesOutputReference.property.parserVersion">parser_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserChangelogsEntriesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserChangelogsEntries">GoogleChronicleParserChangelogsEntries</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserChangelogsEntriesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserChangelogsEntriesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `change_message`<sup>Required</sup> <a name="change_message" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserChangelogsEntriesOutputReference.property.changeMessage"></a>

```python
change_message: str
```

- *Type:* str

---

##### `create_time`<sup>Required</sup> <a name="create_time" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserChangelogsEntriesOutputReference.property.createTime"></a>

```python
create_time: str
```

- *Type:* str

---

##### `deleted`<sup>Required</sup> <a name="deleted" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserChangelogsEntriesOutputReference.property.deleted"></a>

```python
deleted: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `parser_version`<sup>Required</sup> <a name="parser_version" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserChangelogsEntriesOutputReference.property.parserVersion"></a>

```python
parser_version: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserChangelogsEntriesOutputReference.property.internalValue"></a>

```python
internal_value: GoogleChronicleParserChangelogsEntries
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserChangelogsEntries">GoogleChronicleParserChangelogsEntries</a>

---


### GoogleChronicleParserChangelogsList <a name="GoogleChronicleParserChangelogsList" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserChangelogsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserChangelogsList.Initializer"></a>

```python
from cdktn_provider_google_beta import google_chronicle_parser

googleChronicleParser.GoogleChronicleParserChangelogsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserChangelogsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserChangelogsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserChangelogsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserChangelogsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserChangelogsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserChangelogsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserChangelogsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserChangelogsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserChangelogsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserChangelogsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserChangelogsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserChangelogsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserChangelogsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserChangelogsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserChangelogsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserChangelogsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserChangelogsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserChangelogsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleChronicleParserChangelogsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserChangelogsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserChangelogsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserChangelogsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserChangelogsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserChangelogsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### GoogleChronicleParserChangelogsOutputReference <a name="GoogleChronicleParserChangelogsOutputReference" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserChangelogsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserChangelogsOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_chronicle_parser

googleChronicleParser.GoogleChronicleParserChangelogsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserChangelogsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserChangelogsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserChangelogsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserChangelogsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserChangelogsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserChangelogsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserChangelogsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserChangelogsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserChangelogsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserChangelogsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserChangelogsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserChangelogsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserChangelogsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserChangelogsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserChangelogsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserChangelogsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserChangelogsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserChangelogsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserChangelogsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserChangelogsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserChangelogsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserChangelogsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserChangelogsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserChangelogsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserChangelogsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserChangelogsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserChangelogsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserChangelogsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserChangelogsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserChangelogsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserChangelogsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserChangelogsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserChangelogsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserChangelogsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserChangelogsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserChangelogsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserChangelogsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserChangelogsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserChangelogsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserChangelogsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserChangelogsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserChangelogsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserChangelogsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserChangelogsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserChangelogsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserChangelogsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserChangelogsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserChangelogsOutputReference.property.entries">entries</a></code> | <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserChangelogsEntriesList">GoogleChronicleParserChangelogsEntriesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserChangelogsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserChangelogs">GoogleChronicleParserChangelogs</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserChangelogsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserChangelogsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `entries`<sup>Required</sup> <a name="entries" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserChangelogsOutputReference.property.entries"></a>

```python
entries: GoogleChronicleParserChangelogsEntriesList
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserChangelogsEntriesList">GoogleChronicleParserChangelogsEntriesList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserChangelogsOutputReference.property.internalValue"></a>

```python
internal_value: GoogleChronicleParserChangelogs
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserChangelogs">GoogleChronicleParserChangelogs</a>

---


### GoogleChronicleParserCreatorList <a name="GoogleChronicleParserCreatorList" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserCreatorList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserCreatorList.Initializer"></a>

```python
from cdktn_provider_google_beta import google_chronicle_parser

googleChronicleParser.GoogleChronicleParserCreatorList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserCreatorList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserCreatorList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserCreatorList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserCreatorList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserCreatorList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserCreatorList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserCreatorList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserCreatorList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserCreatorList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserCreatorList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserCreatorList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserCreatorList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserCreatorList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserCreatorList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserCreatorList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserCreatorList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserCreatorList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserCreatorList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleChronicleParserCreatorOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserCreatorList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserCreatorList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserCreatorList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserCreatorList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserCreatorList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### GoogleChronicleParserCreatorOutputReference <a name="GoogleChronicleParserCreatorOutputReference" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserCreatorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserCreatorOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_chronicle_parser

googleChronicleParser.GoogleChronicleParserCreatorOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserCreatorOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserCreatorOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserCreatorOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserCreatorOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserCreatorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserCreatorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserCreatorOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserCreatorOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserCreatorOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserCreatorOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserCreatorOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserCreatorOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserCreatorOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserCreatorOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserCreatorOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserCreatorOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserCreatorOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserCreatorOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserCreatorOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserCreatorOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserCreatorOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserCreatorOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserCreatorOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserCreatorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserCreatorOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserCreatorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserCreatorOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserCreatorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserCreatorOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserCreatorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserCreatorOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserCreatorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserCreatorOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserCreatorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserCreatorOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserCreatorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserCreatorOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserCreatorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserCreatorOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserCreatorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserCreatorOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserCreatorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserCreatorOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserCreatorOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserCreatorOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserCreatorOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserCreatorOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserCreatorOutputReference.property.author">author</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserCreatorOutputReference.property.customer">customer</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserCreatorOutputReference.property.source">source</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserCreatorOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserCreator">GoogleChronicleParserCreator</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserCreatorOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserCreatorOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `author`<sup>Required</sup> <a name="author" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserCreatorOutputReference.property.author"></a>

```python
author: str
```

- *Type:* str

---

##### `customer`<sup>Required</sup> <a name="customer" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserCreatorOutputReference.property.customer"></a>

```python
customer: str
```

- *Type:* str

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserCreatorOutputReference.property.source"></a>

```python
source: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserCreatorOutputReference.property.internalValue"></a>

```python
internal_value: GoogleChronicleParserCreator
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserCreator">GoogleChronicleParserCreator</a>

---


### GoogleChronicleParserLowCodeFieldExtractorsExtractorsList <a name="GoogleChronicleParserLowCodeFieldExtractorsExtractorsList" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsExtractorsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsExtractorsList.Initializer"></a>

```python
from cdktn_provider_google_beta import google_chronicle_parser

googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsExtractorsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsExtractorsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsExtractorsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsExtractorsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsExtractorsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsExtractorsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsExtractorsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsExtractorsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsExtractorsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsExtractorsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsExtractorsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsExtractorsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsExtractorsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsExtractorsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsExtractorsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsExtractorsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsExtractorsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsExtractorsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsExtractorsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleChronicleParserLowCodeFieldExtractorsExtractorsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsExtractorsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsExtractorsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsExtractorsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsExtractorsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsExtractors">GoogleChronicleParserLowCodeFieldExtractorsExtractors</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsExtractorsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsExtractorsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsExtractorsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[GoogleChronicleParserLowCodeFieldExtractorsExtractors]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsExtractors">GoogleChronicleParserLowCodeFieldExtractorsExtractors</a>]

---


### GoogleChronicleParserLowCodeFieldExtractorsExtractorsOutputReference <a name="GoogleChronicleParserLowCodeFieldExtractorsExtractorsOutputReference" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsExtractorsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsExtractorsOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_chronicle_parser

googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsExtractorsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsExtractorsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsExtractorsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsExtractorsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsExtractorsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsExtractorsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsExtractorsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsExtractorsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsExtractorsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsExtractorsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsExtractorsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsExtractorsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsExtractorsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsExtractorsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsExtractorsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsExtractorsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsExtractorsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsExtractorsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsExtractorsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsExtractorsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsExtractorsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsExtractorsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsExtractorsOutputReference.resetDestinationPath">reset_destination_path</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsExtractorsOutputReference.resetFieldPath">reset_field_path</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsExtractorsOutputReference.resetPreconditionOp">reset_precondition_op</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsExtractorsOutputReference.resetPreconditionPath">reset_precondition_path</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsExtractorsOutputReference.resetPreconditionValue">reset_precondition_value</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsExtractorsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsExtractorsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsExtractorsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsExtractorsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsExtractorsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsExtractorsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsExtractorsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsExtractorsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsExtractorsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsExtractorsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsExtractorsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsExtractorsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsExtractorsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsExtractorsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsExtractorsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsExtractorsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsExtractorsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsExtractorsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsExtractorsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsExtractorsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsExtractorsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsExtractorsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsExtractorsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsExtractorsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsExtractorsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_destination_path` <a name="reset_destination_path" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsExtractorsOutputReference.resetDestinationPath"></a>

```python
def reset_destination_path() -> None
```

##### `reset_field_path` <a name="reset_field_path" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsExtractorsOutputReference.resetFieldPath"></a>

```python
def reset_field_path() -> None
```

##### `reset_precondition_op` <a name="reset_precondition_op" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsExtractorsOutputReference.resetPreconditionOp"></a>

```python
def reset_precondition_op() -> None
```

##### `reset_precondition_path` <a name="reset_precondition_path" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsExtractorsOutputReference.resetPreconditionPath"></a>

```python
def reset_precondition_path() -> None
```

##### `reset_precondition_value` <a name="reset_precondition_value" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsExtractorsOutputReference.resetPreconditionValue"></a>

```python
def reset_precondition_value() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsExtractorsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsExtractorsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsExtractorsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsExtractorsOutputReference.property.destinationPathInput">destination_path_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsExtractorsOutputReference.property.fieldPathInput">field_path_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsExtractorsOutputReference.property.preconditionOpInput">precondition_op_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsExtractorsOutputReference.property.preconditionPathInput">precondition_path_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsExtractorsOutputReference.property.preconditionValueInput">precondition_value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsExtractorsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsExtractorsOutputReference.property.destinationPath">destination_path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsExtractorsOutputReference.property.fieldPath">field_path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsExtractorsOutputReference.property.preconditionOp">precondition_op</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsExtractorsOutputReference.property.preconditionPath">precondition_path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsExtractorsOutputReference.property.preconditionValue">precondition_value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsExtractorsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsExtractorsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsExtractors">GoogleChronicleParserLowCodeFieldExtractorsExtractors</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsExtractorsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsExtractorsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `destination_path_input`<sup>Optional</sup> <a name="destination_path_input" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsExtractorsOutputReference.property.destinationPathInput"></a>

```python
destination_path_input: str
```

- *Type:* str

---

##### `field_path_input`<sup>Optional</sup> <a name="field_path_input" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsExtractorsOutputReference.property.fieldPathInput"></a>

```python
field_path_input: str
```

- *Type:* str

---

##### `precondition_op_input`<sup>Optional</sup> <a name="precondition_op_input" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsExtractorsOutputReference.property.preconditionOpInput"></a>

```python
precondition_op_input: str
```

- *Type:* str

---

##### `precondition_path_input`<sup>Optional</sup> <a name="precondition_path_input" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsExtractorsOutputReference.property.preconditionPathInput"></a>

```python
precondition_path_input: str
```

- *Type:* str

---

##### `precondition_value_input`<sup>Optional</sup> <a name="precondition_value_input" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsExtractorsOutputReference.property.preconditionValueInput"></a>

```python
precondition_value_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsExtractorsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `destination_path`<sup>Required</sup> <a name="destination_path" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsExtractorsOutputReference.property.destinationPath"></a>

```python
destination_path: str
```

- *Type:* str

---

##### `field_path`<sup>Required</sup> <a name="field_path" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsExtractorsOutputReference.property.fieldPath"></a>

```python
field_path: str
```

- *Type:* str

---

##### `precondition_op`<sup>Required</sup> <a name="precondition_op" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsExtractorsOutputReference.property.preconditionOp"></a>

```python
precondition_op: str
```

- *Type:* str

---

##### `precondition_path`<sup>Required</sup> <a name="precondition_path" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsExtractorsOutputReference.property.preconditionPath"></a>

```python
precondition_path: str
```

- *Type:* str

---

##### `precondition_value`<sup>Required</sup> <a name="precondition_value" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsExtractorsOutputReference.property.preconditionValue"></a>

```python
precondition_value: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsExtractorsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsExtractorsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | GoogleChronicleParserLowCodeFieldExtractorsExtractors
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsExtractors">GoogleChronicleParserLowCodeFieldExtractorsExtractors</a>

---


### GoogleChronicleParserLowCodeFieldExtractorsOutputReference <a name="GoogleChronicleParserLowCodeFieldExtractorsOutputReference" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_chronicle_parser

googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsOutputReference.putExtractors">put_extractors</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsOutputReference.putPreprocessConfig">put_preprocess_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsOutputReference.resetAppendRepeatedFields">reset_append_repeated_fields</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsOutputReference.resetExtractors">reset_extractors</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsOutputReference.resetLogFormat">reset_log_format</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsOutputReference.resetPreprocessConfig">reset_preprocess_config</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_extractors` <a name="put_extractors" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsOutputReference.putExtractors"></a>

```python
def put_extractors(
  value: IResolvable | typing.List[GoogleChronicleParserLowCodeFieldExtractorsExtractors]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsOutputReference.putExtractors.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsExtractors">GoogleChronicleParserLowCodeFieldExtractorsExtractors</a>]

---

##### `put_preprocess_config` <a name="put_preprocess_config" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsOutputReference.putPreprocessConfig"></a>

```python
def put_preprocess_config(
  grok_regex: str = None,
  target: str = None
) -> None
```

###### `grok_regex`<sup>Optional</sup> <a name="grok_regex" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsOutputReference.putPreprocessConfig.parameter.grokRegex"></a>

- *Type:* str

GROK Regex to extract the structured part of the log. syntax documentation: www.elastic.co/guide/en/logstash/current/plugins-filters-grok.html.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_chronicle_parser#grok_regex GoogleChronicleParser#grok_regex}

---

###### `target`<sup>Optional</sup> <a name="target" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsOutputReference.putPreprocessConfig.parameter.target"></a>

- *Type:* str

Target field name for the structured part of the log. This should match a SEMANTIC identifier from the grok expression.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_chronicle_parser#target GoogleChronicleParser#target}

---

##### `reset_append_repeated_fields` <a name="reset_append_repeated_fields" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsOutputReference.resetAppendRepeatedFields"></a>

```python
def reset_append_repeated_fields() -> None
```

##### `reset_extractors` <a name="reset_extractors" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsOutputReference.resetExtractors"></a>

```python
def reset_extractors() -> None
```

##### `reset_log_format` <a name="reset_log_format" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsOutputReference.resetLogFormat"></a>

```python
def reset_log_format() -> None
```

##### `reset_preprocess_config` <a name="reset_preprocess_config" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsOutputReference.resetPreprocessConfig"></a>

```python
def reset_preprocess_config() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsOutputReference.property.extractors">extractors</a></code> | <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsExtractorsList">GoogleChronicleParserLowCodeFieldExtractorsExtractorsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsOutputReference.property.preprocessConfig">preprocess_config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsPreprocessConfigOutputReference">GoogleChronicleParserLowCodeFieldExtractorsPreprocessConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsOutputReference.property.transformedCbnSnippet">transformed_cbn_snippet</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsOutputReference.property.appendRepeatedFieldsInput">append_repeated_fields_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsOutputReference.property.extractorsInput">extractors_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsExtractors">GoogleChronicleParserLowCodeFieldExtractorsExtractors</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsOutputReference.property.logFormatInput">log_format_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsOutputReference.property.preprocessConfigInput">preprocess_config_input</a></code> | <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsPreprocessConfig">GoogleChronicleParserLowCodeFieldExtractorsPreprocessConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsOutputReference.property.appendRepeatedFields">append_repeated_fields</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsOutputReference.property.logFormat">log_format</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractors">GoogleChronicleParserLowCodeFieldExtractors</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `extractors`<sup>Required</sup> <a name="extractors" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsOutputReference.property.extractors"></a>

```python
extractors: GoogleChronicleParserLowCodeFieldExtractorsExtractorsList
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsExtractorsList">GoogleChronicleParserLowCodeFieldExtractorsExtractorsList</a>

---

##### `preprocess_config`<sup>Required</sup> <a name="preprocess_config" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsOutputReference.property.preprocessConfig"></a>

```python
preprocess_config: GoogleChronicleParserLowCodeFieldExtractorsPreprocessConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsPreprocessConfigOutputReference">GoogleChronicleParserLowCodeFieldExtractorsPreprocessConfigOutputReference</a>

---

##### `transformed_cbn_snippet`<sup>Required</sup> <a name="transformed_cbn_snippet" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsOutputReference.property.transformedCbnSnippet"></a>

```python
transformed_cbn_snippet: str
```

- *Type:* str

---

##### `append_repeated_fields_input`<sup>Optional</sup> <a name="append_repeated_fields_input" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsOutputReference.property.appendRepeatedFieldsInput"></a>

```python
append_repeated_fields_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `extractors_input`<sup>Optional</sup> <a name="extractors_input" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsOutputReference.property.extractorsInput"></a>

```python
extractors_input: IResolvable | typing.List[GoogleChronicleParserLowCodeFieldExtractorsExtractors]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsExtractors">GoogleChronicleParserLowCodeFieldExtractorsExtractors</a>]

---

##### `log_format_input`<sup>Optional</sup> <a name="log_format_input" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsOutputReference.property.logFormatInput"></a>

```python
log_format_input: str
```

- *Type:* str

---

##### `preprocess_config_input`<sup>Optional</sup> <a name="preprocess_config_input" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsOutputReference.property.preprocessConfigInput"></a>

```python
preprocess_config_input: GoogleChronicleParserLowCodeFieldExtractorsPreprocessConfig
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsPreprocessConfig">GoogleChronicleParserLowCodeFieldExtractorsPreprocessConfig</a>

---

##### `append_repeated_fields`<sup>Required</sup> <a name="append_repeated_fields" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsOutputReference.property.appendRepeatedFields"></a>

```python
append_repeated_fields: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `log_format`<sup>Required</sup> <a name="log_format" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsOutputReference.property.logFormat"></a>

```python
log_format: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsOutputReference.property.internalValue"></a>

```python
internal_value: GoogleChronicleParserLowCodeFieldExtractors
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractors">GoogleChronicleParserLowCodeFieldExtractors</a>

---


### GoogleChronicleParserLowCodeFieldExtractorsPreprocessConfigOutputReference <a name="GoogleChronicleParserLowCodeFieldExtractorsPreprocessConfigOutputReference" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsPreprocessConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsPreprocessConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_chronicle_parser

googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsPreprocessConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsPreprocessConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsPreprocessConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsPreprocessConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsPreprocessConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsPreprocessConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsPreprocessConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsPreprocessConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsPreprocessConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsPreprocessConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsPreprocessConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsPreprocessConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsPreprocessConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsPreprocessConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsPreprocessConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsPreprocessConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsPreprocessConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsPreprocessConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsPreprocessConfigOutputReference.resetGrokRegex">reset_grok_regex</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsPreprocessConfigOutputReference.resetTarget">reset_target</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsPreprocessConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsPreprocessConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsPreprocessConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsPreprocessConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsPreprocessConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsPreprocessConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsPreprocessConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsPreprocessConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsPreprocessConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsPreprocessConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsPreprocessConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsPreprocessConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsPreprocessConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsPreprocessConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsPreprocessConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsPreprocessConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsPreprocessConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsPreprocessConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsPreprocessConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsPreprocessConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsPreprocessConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsPreprocessConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsPreprocessConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsPreprocessConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_grok_regex` <a name="reset_grok_regex" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsPreprocessConfigOutputReference.resetGrokRegex"></a>

```python
def reset_grok_regex() -> None
```

##### `reset_target` <a name="reset_target" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsPreprocessConfigOutputReference.resetTarget"></a>

```python
def reset_target() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsPreprocessConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsPreprocessConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsPreprocessConfigOutputReference.property.grokRegexInput">grok_regex_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsPreprocessConfigOutputReference.property.targetInput">target_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsPreprocessConfigOutputReference.property.grokRegex">grok_regex</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsPreprocessConfigOutputReference.property.target">target</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsPreprocessConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsPreprocessConfig">GoogleChronicleParserLowCodeFieldExtractorsPreprocessConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsPreprocessConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsPreprocessConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `grok_regex_input`<sup>Optional</sup> <a name="grok_regex_input" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsPreprocessConfigOutputReference.property.grokRegexInput"></a>

```python
grok_regex_input: str
```

- *Type:* str

---

##### `target_input`<sup>Optional</sup> <a name="target_input" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsPreprocessConfigOutputReference.property.targetInput"></a>

```python
target_input: str
```

- *Type:* str

---

##### `grok_regex`<sup>Required</sup> <a name="grok_regex" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsPreprocessConfigOutputReference.property.grokRegex"></a>

```python
grok_regex: str
```

- *Type:* str

---

##### `target`<sup>Required</sup> <a name="target" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsPreprocessConfigOutputReference.property.target"></a>

```python
target: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsPreprocessConfigOutputReference.property.internalValue"></a>

```python
internal_value: GoogleChronicleParserLowCodeFieldExtractorsPreprocessConfig
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsPreprocessConfig">GoogleChronicleParserLowCodeFieldExtractorsPreprocessConfig</a>

---


### GoogleChronicleParserLowCodeOutputReference <a name="GoogleChronicleParserLowCodeOutputReference" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_chronicle_parser

googleChronicleParser.GoogleChronicleParserLowCodeOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeOutputReference.putFieldExtractors">put_field_extractors</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeOutputReference.resetFieldExtractors">reset_field_extractors</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeOutputReference.resetLog">reset_log</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_field_extractors` <a name="put_field_extractors" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeOutputReference.putFieldExtractors"></a>

```python
def put_field_extractors(
  append_repeated_fields: bool | IResolvable = None,
  extractors: IResolvable | typing.List[GoogleChronicleParserLowCodeFieldExtractorsExtractors] = None,
  log_format: str = None,
  preprocess_config: GoogleChronicleParserLowCodeFieldExtractorsPreprocessConfig = None
) -> None
```

###### `append_repeated_fields`<sup>Optional</sup> <a name="append_repeated_fields" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeOutputReference.putFieldExtractors.parameter.appendRepeatedFields"></a>

- *Type:* bool | cdktn.IResolvable

Whether to append repeated fields or not. When false, repeated fields will be replaced.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_chronicle_parser#append_repeated_fields GoogleChronicleParser#append_repeated_fields}

---

###### `extractors`<sup>Optional</sup> <a name="extractors" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeOutputReference.putFieldExtractors.parameter.extractors"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsExtractors">GoogleChronicleParserLowCodeFieldExtractorsExtractors</a>]

extractors block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_chronicle_parser#extractors GoogleChronicleParser#extractors}

---

###### `log_format`<sup>Optional</sup> <a name="log_format" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeOutputReference.putFieldExtractors.parameter.logFormat"></a>

- *Type:* str

Possible values: JSON CSV XML.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_chronicle_parser#log_format GoogleChronicleParser#log_format}

---

###### `preprocess_config`<sup>Optional</sup> <a name="preprocess_config" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeOutputReference.putFieldExtractors.parameter.preprocessConfig"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsPreprocessConfig">GoogleChronicleParserLowCodeFieldExtractorsPreprocessConfig</a>

preprocess_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_chronicle_parser#preprocess_config GoogleChronicleParser#preprocess_config}

---

##### `reset_field_extractors` <a name="reset_field_extractors" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeOutputReference.resetFieldExtractors"></a>

```python
def reset_field_extractors() -> None
```

##### `reset_log` <a name="reset_log" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeOutputReference.resetLog"></a>

```python
def reset_log() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeOutputReference.property.fieldExtractors">field_extractors</a></code> | <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsOutputReference">GoogleChronicleParserLowCodeFieldExtractorsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeOutputReference.property.fieldExtractorsInput">field_extractors_input</a></code> | <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractors">GoogleChronicleParserLowCodeFieldExtractors</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeOutputReference.property.logInput">log_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeOutputReference.property.log">log</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCode">GoogleChronicleParserLowCode</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `field_extractors`<sup>Required</sup> <a name="field_extractors" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeOutputReference.property.fieldExtractors"></a>

```python
field_extractors: GoogleChronicleParserLowCodeFieldExtractorsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsOutputReference">GoogleChronicleParserLowCodeFieldExtractorsOutputReference</a>

---

##### `field_extractors_input`<sup>Optional</sup> <a name="field_extractors_input" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeOutputReference.property.fieldExtractorsInput"></a>

```python
field_extractors_input: GoogleChronicleParserLowCodeFieldExtractors
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractors">GoogleChronicleParserLowCodeFieldExtractors</a>

---

##### `log_input`<sup>Optional</sup> <a name="log_input" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeOutputReference.property.logInput"></a>

```python
log_input: str
```

- *Type:* str

---

##### `log`<sup>Required</sup> <a name="log" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeOutputReference.property.log"></a>

```python
log: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeOutputReference.property.internalValue"></a>

```python
internal_value: GoogleChronicleParserLowCode
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCode">GoogleChronicleParserLowCode</a>

---


### GoogleChronicleParserTimeoutsOutputReference <a name="GoogleChronicleParserTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserTimeoutsOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_chronicle_parser

googleChronicleParser.GoogleChronicleParserTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserTimeouts">GoogleChronicleParserTimeouts</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | GoogleChronicleParserTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserTimeouts">GoogleChronicleParserTimeouts</a>

---


### GoogleChronicleParserVersionInfoOutputReference <a name="GoogleChronicleParserVersionInfoOutputReference" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserVersionInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserVersionInfoOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_chronicle_parser

googleChronicleParser.GoogleChronicleParserVersionInfoOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserVersionInfoOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserVersionInfoOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserVersionInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserVersionInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserVersionInfoOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserVersionInfoOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserVersionInfoOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserVersionInfoOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserVersionInfoOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserVersionInfoOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserVersionInfoOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserVersionInfoOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserVersionInfoOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserVersionInfoOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserVersionInfoOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserVersionInfoOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserVersionInfoOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserVersionInfoOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserVersionInfoOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserVersionInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserVersionInfoOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserVersionInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserVersionInfoOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserVersionInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserVersionInfoOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserVersionInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserVersionInfoOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserVersionInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserVersionInfoOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserVersionInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserVersionInfoOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserVersionInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserVersionInfoOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserVersionInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserVersionInfoOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserVersionInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserVersionInfoOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserVersionInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserVersionInfoOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserVersionInfoOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserVersionInfoOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserVersionInfoOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserVersionInfoOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserVersionInfoOutputReference.property.latestParser">latest_parser</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserVersionInfoOutputReference.property.latestParserVersion">latest_parser_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserVersionInfoOutputReference.property.rollbackAvailable">rollback_available</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserVersionInfoOutputReference.property.version">version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserVersionInfoOutputReference.property.autoUpgradeDisabledInput">auto_upgrade_disabled_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserVersionInfoOutputReference.property.autoUpgradeDisabled">auto_upgrade_disabled</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserVersionInfoOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserVersionInfo">GoogleChronicleParserVersionInfo</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserVersionInfoOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserVersionInfoOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `latest_parser`<sup>Required</sup> <a name="latest_parser" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserVersionInfoOutputReference.property.latestParser"></a>

```python
latest_parser: str
```

- *Type:* str

---

##### `latest_parser_version`<sup>Required</sup> <a name="latest_parser_version" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserVersionInfoOutputReference.property.latestParserVersion"></a>

```python
latest_parser_version: str
```

- *Type:* str

---

##### `rollback_available`<sup>Required</sup> <a name="rollback_available" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserVersionInfoOutputReference.property.rollbackAvailable"></a>

```python
rollback_available: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserVersionInfoOutputReference.property.version"></a>

```python
version: str
```

- *Type:* str

---

##### `auto_upgrade_disabled_input`<sup>Optional</sup> <a name="auto_upgrade_disabled_input" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserVersionInfoOutputReference.property.autoUpgradeDisabledInput"></a>

```python
auto_upgrade_disabled_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `auto_upgrade_disabled`<sup>Required</sup> <a name="auto_upgrade_disabled" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserVersionInfoOutputReference.property.autoUpgradeDisabled"></a>

```python
auto_upgrade_disabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserVersionInfoOutputReference.property.internalValue"></a>

```python
internal_value: GoogleChronicleParserVersionInfo
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserVersionInfo">GoogleChronicleParserVersionInfo</a>

---



