# `googleNetworkSecuritySacAttachment` Submodule <a name="`googleNetworkSecuritySacAttachment` Submodule" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleNetworkSecuritySacAttachment <a name="GoogleNetworkSecuritySacAttachment" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_network_security_sac_attachment google_network_security_sac_attachment}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.Initializer"></a>

```python
from cdktn_provider_google_beta import google_network_security_sac_attachment

googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment(
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
  name: str,
  ncc_gateway: str,
  sac_realm: str,
  country: str = None,
  deletion_policy: str = None,
  id: str = None,
  labels: typing.Mapping[str] = None,
  project: str = None,
  symantec_options: GoogleNetworkSecuritySacAttachmentSymantecOptions = None,
  timeouts: GoogleNetworkSecuritySacAttachmentTimeouts = None,
  time_zone: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.Initializer.parameter.location">location</a></code> | <code>str</code> | The location of the SACAttachment resource. eg us-central1. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.Initializer.parameter.name">name</a></code> | <code>str</code> | Identifier. Resource name. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.Initializer.parameter.nccGateway">ncc_gateway</a></code> | <code>str</code> | NCC Gateway associated with the attachment. This can be input as an ID or a full resource name. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.Initializer.parameter.sacRealm">sac_realm</a></code> | <code>str</code> | SAC Realm which owns the attachment. This can be input as an ID or a full resource name. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.Initializer.parameter.country">country</a></code> | <code>str</code> | Case-insensitive ISO-3166 alpha-2 country code used for localization. Only valid for Symantec attachments. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.Initializer.parameter.deletionPolicy">deletion_policy</a></code> | <code>str</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_network_security_sac_attachment#id GoogleNetworkSecuritySacAttachment#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.Initializer.parameter.labels">labels</a></code> | <code>typing.Mapping[str]</code> | Optional labels in key:value format. For more information about labels, see [Requirements for labels](https://docs.cloud.google.com/resource-manager/docs/creating-managing-labels#requirements). |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_network_security_sac_attachment#project GoogleNetworkSecuritySacAttachment#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.Initializer.parameter.symantecOptions">symantec_options</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentSymantecOptions">GoogleNetworkSecuritySacAttachmentSymantecOptions</a></code> | symantec_options block. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentTimeouts">GoogleNetworkSecuritySacAttachmentTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.Initializer.parameter.timeZone">time_zone</a></code> | <code>str</code> | Case-sensitive tzinfo identifier used for localization. Only valid for Symantec attachments. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.Initializer.parameter.location"></a>

- *Type:* str

The location of the SACAttachment resource. eg us-central1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_network_security_sac_attachment#location GoogleNetworkSecuritySacAttachment#location}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.Initializer.parameter.name"></a>

- *Type:* str

Identifier. Resource name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_network_security_sac_attachment#name GoogleNetworkSecuritySacAttachment#name}

---

##### `ncc_gateway`<sup>Required</sup> <a name="ncc_gateway" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.Initializer.parameter.nccGateway"></a>

- *Type:* str

NCC Gateway associated with the attachment. This can be input as an ID or a full resource name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_network_security_sac_attachment#ncc_gateway GoogleNetworkSecuritySacAttachment#ncc_gateway}

---

##### `sac_realm`<sup>Required</sup> <a name="sac_realm" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.Initializer.parameter.sacRealm"></a>

- *Type:* str

SAC Realm which owns the attachment. This can be input as an ID or a full resource name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_network_security_sac_attachment#sac_realm GoogleNetworkSecuritySacAttachment#sac_realm}

---

##### `country`<sup>Optional</sup> <a name="country" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.Initializer.parameter.country"></a>

- *Type:* str

Case-insensitive ISO-3166 alpha-2 country code used for localization. Only valid for Symantec attachments.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_network_security_sac_attachment#country GoogleNetworkSecuritySacAttachment#country}

---

##### `deletion_policy`<sup>Optional</sup> <a name="deletion_policy" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.Initializer.parameter.deletionPolicy"></a>

- *Type:* str

Whether Terraform will be prevented from destroying the instance.

Defaults to "DELETE".
When a 'terraform destroy' or 'terraform apply' would delete the instance,
the command will fail if this field is set to "PREVENT" in Terraform state.
When set to "ABANDON", the command will remove the resource from Terraform
management without updating or deleting the resource in the API.
When set to "DELETE", deleting the resource is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_network_security_sac_attachment#deletion_policy GoogleNetworkSecuritySacAttachment#deletion_policy}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_network_security_sac_attachment#id GoogleNetworkSecuritySacAttachment#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.Initializer.parameter.labels"></a>

- *Type:* typing.Mapping[str]

Optional labels in key:value format. For more information about labels, see [Requirements for labels](https://docs.cloud.google.com/resource-manager/docs/creating-managing-labels#requirements).

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_network_security_sac_attachment#labels GoogleNetworkSecuritySacAttachment#labels}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_network_security_sac_attachment#project GoogleNetworkSecuritySacAttachment#project}.

---

##### `symantec_options`<sup>Optional</sup> <a name="symantec_options" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.Initializer.parameter.symantecOptions"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentSymantecOptions">GoogleNetworkSecuritySacAttachmentSymantecOptions</a>

symantec_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_network_security_sac_attachment#symantec_options GoogleNetworkSecuritySacAttachment#symantec_options}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentTimeouts">GoogleNetworkSecuritySacAttachmentTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_network_security_sac_attachment#timeouts GoogleNetworkSecuritySacAttachment#timeouts}

---

##### `time_zone`<sup>Optional</sup> <a name="time_zone" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.Initializer.parameter.timeZone"></a>

- *Type:* str

Case-sensitive tzinfo identifier used for localization. Only valid for Symantec attachments.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_network_security_sac_attachment#time_zone GoogleNetworkSecuritySacAttachment#time_zone}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.putSymantecOptions">put_symantec_options</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.resetCountry">reset_country</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.resetDeletionPolicy">reset_deletion_policy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.resetLabels">reset_labels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.resetSymantecOptions">reset_symantec_options</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.resetTimeouts">reset_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.resetTimeZone">reset_time_zone</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_symantec_options` <a name="put_symantec_options" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.putSymantecOptions"></a>

```python
def put_symantec_options(
  symantec_location_name: str = None,
  symantec_site: str = None
) -> None
```

###### `symantec_location_name`<sup>Optional</sup> <a name="symantec_location_name" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.putSymantecOptions.parameter.symantecLocationName"></a>

- *Type:* str

Name to be used when creating a location on the customer's behalf in Symantec's Location API.

Not to be confused with Google Cloud locations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_network_security_sac_attachment#symantec_location_name GoogleNetworkSecuritySacAttachment#symantec_location_name}

---

###### `symantec_site`<sup>Optional</sup> <a name="symantec_site" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.putSymantecOptions.parameter.symantecSite"></a>

- *Type:* str

Symantec data center identifier that this attachment will connect to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_network_security_sac_attachment#symantec_site GoogleNetworkSecuritySacAttachment#symantec_site}

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_network_security_sac_attachment#create GoogleNetworkSecuritySacAttachment#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_network_security_sac_attachment#delete GoogleNetworkSecuritySacAttachment#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_network_security_sac_attachment#update GoogleNetworkSecuritySacAttachment#update}.

---

##### `reset_country` <a name="reset_country" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.resetCountry"></a>

```python
def reset_country() -> None
```

##### `reset_deletion_policy` <a name="reset_deletion_policy" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.resetDeletionPolicy"></a>

```python
def reset_deletion_policy() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_labels` <a name="reset_labels" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.resetLabels"></a>

```python
def reset_labels() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_symantec_options` <a name="reset_symantec_options" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.resetSymantecOptions"></a>

```python
def reset_symantec_options() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

##### `reset_time_zone` <a name="reset_time_zone" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.resetTimeZone"></a>

```python
def reset_time_zone() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a GoogleNetworkSecuritySacAttachment resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.isConstruct"></a>

```python
from cdktn_provider_google_beta import google_network_security_sac_attachment

googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.isTerraformElement"></a>

```python
from cdktn_provider_google_beta import google_network_security_sac_attachment

googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.isTerraformResource"></a>

```python
from cdktn_provider_google_beta import google_network_security_sac_attachment

googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.generateConfigForImport"></a>

```python
from cdktn_provider_google_beta import google_network_security_sac_attachment

googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a GoogleNetworkSecuritySacAttachment resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the GoogleNetworkSecuritySacAttachment to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing GoogleNetworkSecuritySacAttachment that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_network_security_sac_attachment#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the GoogleNetworkSecuritySacAttachment to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.property.createTime">create_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.property.effectiveLabels">effective_labels</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.property.symantecOptions">symantec_options</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentSymantecOptionsOutputReference">GoogleNetworkSecuritySacAttachmentSymantecOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.property.terraformLabels">terraform_labels</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentTimeoutsOutputReference">GoogleNetworkSecuritySacAttachmentTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.property.updateTime">update_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.property.countryInput">country_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.property.deletionPolicyInput">deletion_policy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.property.labelsInput">labels_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.property.nccGatewayInput">ncc_gateway_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.property.sacRealmInput">sac_realm_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.property.symantecOptionsInput">symantec_options_input</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentSymantecOptions">GoogleNetworkSecuritySacAttachmentSymantecOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.property.timeoutsInput">timeouts_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentTimeouts">GoogleNetworkSecuritySacAttachmentTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.property.timeZoneInput">time_zone_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.property.country">country</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.property.deletionPolicy">deletion_policy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.property.nccGateway">ncc_gateway</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.property.project">project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.property.sacRealm">sac_realm</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.property.timeZone">time_zone</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `create_time`<sup>Required</sup> <a name="create_time" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.property.createTime"></a>

```python
create_time: str
```

- *Type:* str

---

##### `effective_labels`<sup>Required</sup> <a name="effective_labels" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.property.effectiveLabels"></a>

```python
effective_labels: StringMap
```

- *Type:* cdktn.StringMap

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `symantec_options`<sup>Required</sup> <a name="symantec_options" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.property.symantecOptions"></a>

```python
symantec_options: GoogleNetworkSecuritySacAttachmentSymantecOptionsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentSymantecOptionsOutputReference">GoogleNetworkSecuritySacAttachmentSymantecOptionsOutputReference</a>

---

##### `terraform_labels`<sup>Required</sup> <a name="terraform_labels" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.property.terraformLabels"></a>

```python
terraform_labels: StringMap
```

- *Type:* cdktn.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.property.timeouts"></a>

```python
timeouts: GoogleNetworkSecuritySacAttachmentTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentTimeoutsOutputReference">GoogleNetworkSecuritySacAttachmentTimeoutsOutputReference</a>

---

##### `update_time`<sup>Required</sup> <a name="update_time" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.property.updateTime"></a>

```python
update_time: str
```

- *Type:* str

---

##### `country_input`<sup>Optional</sup> <a name="country_input" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.property.countryInput"></a>

```python
country_input: str
```

- *Type:* str

---

##### `deletion_policy_input`<sup>Optional</sup> <a name="deletion_policy_input" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.property.deletionPolicyInput"></a>

```python
deletion_policy_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `labels_input`<sup>Optional</sup> <a name="labels_input" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.property.labelsInput"></a>

```python
labels_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `ncc_gateway_input`<sup>Optional</sup> <a name="ncc_gateway_input" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.property.nccGatewayInput"></a>

```python
ncc_gateway_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `sac_realm_input`<sup>Optional</sup> <a name="sac_realm_input" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.property.sacRealmInput"></a>

```python
sac_realm_input: str
```

- *Type:* str

---

##### `symantec_options_input`<sup>Optional</sup> <a name="symantec_options_input" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.property.symantecOptionsInput"></a>

```python
symantec_options_input: GoogleNetworkSecuritySacAttachmentSymantecOptions
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentSymantecOptions">GoogleNetworkSecuritySacAttachmentSymantecOptions</a>

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.property.timeoutsInput"></a>

```python
timeouts_input: IResolvable | GoogleNetworkSecuritySacAttachmentTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentTimeouts">GoogleNetworkSecuritySacAttachmentTimeouts</a>

---

##### `time_zone_input`<sup>Optional</sup> <a name="time_zone_input" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.property.timeZoneInput"></a>

```python
time_zone_input: str
```

- *Type:* str

---

##### `country`<sup>Required</sup> <a name="country" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.property.country"></a>

```python
country: str
```

- *Type:* str

---

##### `deletion_policy`<sup>Required</sup> <a name="deletion_policy" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.property.deletionPolicy"></a>

```python
deletion_policy: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `ncc_gateway`<sup>Required</sup> <a name="ncc_gateway" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.property.nccGateway"></a>

```python
ncc_gateway: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.property.project"></a>

```python
project: str
```

- *Type:* str

---

##### `sac_realm`<sup>Required</sup> <a name="sac_realm" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.property.sacRealm"></a>

```python
sac_realm: str
```

- *Type:* str

---

##### `time_zone`<sup>Required</sup> <a name="time_zone" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.property.timeZone"></a>

```python
time_zone: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleNetworkSecuritySacAttachmentConfig <a name="GoogleNetworkSecuritySacAttachmentConfig" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentConfig.Initializer"></a>

```python
from cdktn_provider_google_beta import google_network_security_sac_attachment

googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  location: str,
  name: str,
  ncc_gateway: str,
  sac_realm: str,
  country: str = None,
  deletion_policy: str = None,
  id: str = None,
  labels: typing.Mapping[str] = None,
  project: str = None,
  symantec_options: GoogleNetworkSecuritySacAttachmentSymantecOptions = None,
  timeouts: GoogleNetworkSecuritySacAttachmentTimeouts = None,
  time_zone: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentConfig.property.location">location</a></code> | <code>str</code> | The location of the SACAttachment resource. eg us-central1. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentConfig.property.name">name</a></code> | <code>str</code> | Identifier. Resource name. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentConfig.property.nccGateway">ncc_gateway</a></code> | <code>str</code> | NCC Gateway associated with the attachment. This can be input as an ID or a full resource name. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentConfig.property.sacRealm">sac_realm</a></code> | <code>str</code> | SAC Realm which owns the attachment. This can be input as an ID or a full resource name. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentConfig.property.country">country</a></code> | <code>str</code> | Case-insensitive ISO-3166 alpha-2 country code used for localization. Only valid for Symantec attachments. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentConfig.property.deletionPolicy">deletion_policy</a></code> | <code>str</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_network_security_sac_attachment#id GoogleNetworkSecuritySacAttachment#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentConfig.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | Optional labels in key:value format. For more information about labels, see [Requirements for labels](https://docs.cloud.google.com/resource-manager/docs/creating-managing-labels#requirements). |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_network_security_sac_attachment#project GoogleNetworkSecuritySacAttachment#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentConfig.property.symantecOptions">symantec_options</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentSymantecOptions">GoogleNetworkSecuritySacAttachmentSymantecOptions</a></code> | symantec_options block. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentTimeouts">GoogleNetworkSecuritySacAttachmentTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentConfig.property.timeZone">time_zone</a></code> | <code>str</code> | Case-sensitive tzinfo identifier used for localization. Only valid for Symantec attachments. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentConfig.property.location"></a>

```python
location: str
```

- *Type:* str

The location of the SACAttachment resource. eg us-central1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_network_security_sac_attachment#location GoogleNetworkSecuritySacAttachment#location}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Identifier. Resource name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_network_security_sac_attachment#name GoogleNetworkSecuritySacAttachment#name}

---

##### `ncc_gateway`<sup>Required</sup> <a name="ncc_gateway" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentConfig.property.nccGateway"></a>

```python
ncc_gateway: str
```

- *Type:* str

NCC Gateway associated with the attachment. This can be input as an ID or a full resource name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_network_security_sac_attachment#ncc_gateway GoogleNetworkSecuritySacAttachment#ncc_gateway}

---

##### `sac_realm`<sup>Required</sup> <a name="sac_realm" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentConfig.property.sacRealm"></a>

```python
sac_realm: str
```

- *Type:* str

SAC Realm which owns the attachment. This can be input as an ID or a full resource name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_network_security_sac_attachment#sac_realm GoogleNetworkSecuritySacAttachment#sac_realm}

---

##### `country`<sup>Optional</sup> <a name="country" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentConfig.property.country"></a>

```python
country: str
```

- *Type:* str

Case-insensitive ISO-3166 alpha-2 country code used for localization. Only valid for Symantec attachments.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_network_security_sac_attachment#country GoogleNetworkSecuritySacAttachment#country}

---

##### `deletion_policy`<sup>Optional</sup> <a name="deletion_policy" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_network_security_sac_attachment#deletion_policy GoogleNetworkSecuritySacAttachment#deletion_policy}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_network_security_sac_attachment#id GoogleNetworkSecuritySacAttachment#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentConfig.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Optional labels in key:value format. For more information about labels, see [Requirements for labels](https://docs.cloud.google.com/resource-manager/docs/creating-managing-labels#requirements).

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_network_security_sac_attachment#labels GoogleNetworkSecuritySacAttachment#labels}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_network_security_sac_attachment#project GoogleNetworkSecuritySacAttachment#project}.

---

##### `symantec_options`<sup>Optional</sup> <a name="symantec_options" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentConfig.property.symantecOptions"></a>

```python
symantec_options: GoogleNetworkSecuritySacAttachmentSymantecOptions
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentSymantecOptions">GoogleNetworkSecuritySacAttachmentSymantecOptions</a>

symantec_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_network_security_sac_attachment#symantec_options GoogleNetworkSecuritySacAttachment#symantec_options}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentConfig.property.timeouts"></a>

```python
timeouts: GoogleNetworkSecuritySacAttachmentTimeouts
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentTimeouts">GoogleNetworkSecuritySacAttachmentTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_network_security_sac_attachment#timeouts GoogleNetworkSecuritySacAttachment#timeouts}

---

##### `time_zone`<sup>Optional</sup> <a name="time_zone" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentConfig.property.timeZone"></a>

```python
time_zone: str
```

- *Type:* str

Case-sensitive tzinfo identifier used for localization. Only valid for Symantec attachments.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_network_security_sac_attachment#time_zone GoogleNetworkSecuritySacAttachment#time_zone}

---

### GoogleNetworkSecuritySacAttachmentSymantecOptions <a name="GoogleNetworkSecuritySacAttachmentSymantecOptions" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentSymantecOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentSymantecOptions.Initializer"></a>

```python
from cdktn_provider_google_beta import google_network_security_sac_attachment

googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentSymantecOptions(
  symantec_location_name: str = None,
  symantec_site: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentSymantecOptions.property.symantecLocationName">symantec_location_name</a></code> | <code>str</code> | Name to be used when creating a location on the customer's behalf in Symantec's Location API. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentSymantecOptions.property.symantecSite">symantec_site</a></code> | <code>str</code> | Symantec data center identifier that this attachment will connect to. |

---

##### `symantec_location_name`<sup>Optional</sup> <a name="symantec_location_name" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentSymantecOptions.property.symantecLocationName"></a>

```python
symantec_location_name: str
```

- *Type:* str

Name to be used when creating a location on the customer's behalf in Symantec's Location API.

Not to be confused with Google Cloud locations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_network_security_sac_attachment#symantec_location_name GoogleNetworkSecuritySacAttachment#symantec_location_name}

---

##### `symantec_site`<sup>Optional</sup> <a name="symantec_site" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentSymantecOptions.property.symantecSite"></a>

```python
symantec_site: str
```

- *Type:* str

Symantec data center identifier that this attachment will connect to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_network_security_sac_attachment#symantec_site GoogleNetworkSecuritySacAttachment#symantec_site}

---

### GoogleNetworkSecuritySacAttachmentTimeouts <a name="GoogleNetworkSecuritySacAttachmentTimeouts" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentTimeouts.Initializer"></a>

```python
from cdktn_provider_google_beta import google_network_security_sac_attachment

googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_network_security_sac_attachment#create GoogleNetworkSecuritySacAttachment#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_network_security_sac_attachment#delete GoogleNetworkSecuritySacAttachment#delete}. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_network_security_sac_attachment#update GoogleNetworkSecuritySacAttachment#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_network_security_sac_attachment#create GoogleNetworkSecuritySacAttachment#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_network_security_sac_attachment#delete GoogleNetworkSecuritySacAttachment#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_network_security_sac_attachment#update GoogleNetworkSecuritySacAttachment#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleNetworkSecuritySacAttachmentSymantecOptionsOutputReference <a name="GoogleNetworkSecuritySacAttachmentSymantecOptionsOutputReference" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentSymantecOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentSymantecOptionsOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_network_security_sac_attachment

googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentSymantecOptionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentSymantecOptionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentSymantecOptionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentSymantecOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentSymantecOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentSymantecOptionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentSymantecOptionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentSymantecOptionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentSymantecOptionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentSymantecOptionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentSymantecOptionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentSymantecOptionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentSymantecOptionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentSymantecOptionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentSymantecOptionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentSymantecOptionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentSymantecOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentSymantecOptionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentSymantecOptionsOutputReference.resetSymantecLocationName">reset_symantec_location_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentSymantecOptionsOutputReference.resetSymantecSite">reset_symantec_site</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentSymantecOptionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentSymantecOptionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentSymantecOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentSymantecOptionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentSymantecOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentSymantecOptionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentSymantecOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentSymantecOptionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentSymantecOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentSymantecOptionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentSymantecOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentSymantecOptionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentSymantecOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentSymantecOptionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentSymantecOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentSymantecOptionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentSymantecOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentSymantecOptionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentSymantecOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentSymantecOptionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentSymantecOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentSymantecOptionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentSymantecOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentSymantecOptionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_symantec_location_name` <a name="reset_symantec_location_name" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentSymantecOptionsOutputReference.resetSymantecLocationName"></a>

```python
def reset_symantec_location_name() -> None
```

##### `reset_symantec_site` <a name="reset_symantec_site" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentSymantecOptionsOutputReference.resetSymantecSite"></a>

```python
def reset_symantec_site() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentSymantecOptionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentSymantecOptionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentSymantecOptionsOutputReference.property.symantecLocationNameInput">symantec_location_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentSymantecOptionsOutputReference.property.symantecSiteInput">symantec_site_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentSymantecOptionsOutputReference.property.symantecLocationName">symantec_location_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentSymantecOptionsOutputReference.property.symantecSite">symantec_site</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentSymantecOptionsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentSymantecOptions">GoogleNetworkSecuritySacAttachmentSymantecOptions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentSymantecOptionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentSymantecOptionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `symantec_location_name_input`<sup>Optional</sup> <a name="symantec_location_name_input" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentSymantecOptionsOutputReference.property.symantecLocationNameInput"></a>

```python
symantec_location_name_input: str
```

- *Type:* str

---

##### `symantec_site_input`<sup>Optional</sup> <a name="symantec_site_input" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentSymantecOptionsOutputReference.property.symantecSiteInput"></a>

```python
symantec_site_input: str
```

- *Type:* str

---

##### `symantec_location_name`<sup>Required</sup> <a name="symantec_location_name" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentSymantecOptionsOutputReference.property.symantecLocationName"></a>

```python
symantec_location_name: str
```

- *Type:* str

---

##### `symantec_site`<sup>Required</sup> <a name="symantec_site" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentSymantecOptionsOutputReference.property.symantecSite"></a>

```python
symantec_site: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentSymantecOptionsOutputReference.property.internalValue"></a>

```python
internal_value: GoogleNetworkSecuritySacAttachmentSymantecOptions
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentSymantecOptions">GoogleNetworkSecuritySacAttachmentSymantecOptions</a>

---


### GoogleNetworkSecuritySacAttachmentTimeoutsOutputReference <a name="GoogleNetworkSecuritySacAttachmentTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentTimeoutsOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_network_security_sac_attachment

googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentTimeouts">GoogleNetworkSecuritySacAttachmentTimeouts</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | GoogleNetworkSecuritySacAttachmentTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentTimeouts">GoogleNetworkSecuritySacAttachmentTimeouts</a>

---



