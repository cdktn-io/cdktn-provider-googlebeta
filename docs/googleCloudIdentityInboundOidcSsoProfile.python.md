# `googleCloudIdentityInboundOidcSsoProfile` Submodule <a name="`googleCloudIdentityInboundOidcSsoProfile` Submodule" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleCloudIdentityInboundOidcSsoProfile <a name="GoogleCloudIdentityInboundOidcSsoProfile" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.12.0/docs/resources/google_cloud_identity_inbound_oidc_sso_profile google_cloud_identity_inbound_oidc_sso_profile}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.Initializer"></a>

```python
from cdktn_provider_google_beta import google_cloud_identity_inbound_oidc_sso_profile

googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  idp_config: GoogleCloudIdentityInboundOidcSsoProfileIdpConfig,
  customer: str = None,
  deletion_policy: str = None,
  display_name: str = None,
  id: str = None,
  rp_config: GoogleCloudIdentityInboundOidcSsoProfileRpConfig = None,
  timeouts: GoogleCloudIdentityInboundOidcSsoProfileTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.Initializer.parameter.idpConfig">idp_config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileIdpConfig">GoogleCloudIdentityInboundOidcSsoProfileIdpConfig</a></code> | idp_config block. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.Initializer.parameter.customer">customer</a></code> | <code>str</code> | The customer. For example: 'customers/C0123abc'. If omitted, the customer of the caller is used. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.Initializer.parameter.deletionPolicy">deletion_policy</a></code> | <code>str</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | Human-readable name of the OIDC SSO profile. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.12.0/docs/resources/google_cloud_identity_inbound_oidc_sso_profile#id GoogleCloudIdentityInboundOidcSsoProfile#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.Initializer.parameter.rpConfig">rp_config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileRpConfig">GoogleCloudIdentityInboundOidcSsoProfileRpConfig</a></code> | rp_config block. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileTimeouts">GoogleCloudIdentityInboundOidcSsoProfileTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `idp_config`<sup>Required</sup> <a name="idp_config" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.Initializer.parameter.idpConfig"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileIdpConfig">GoogleCloudIdentityInboundOidcSsoProfileIdpConfig</a>

idp_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.12.0/docs/resources/google_cloud_identity_inbound_oidc_sso_profile#idp_config GoogleCloudIdentityInboundOidcSsoProfile#idp_config}

---

##### `customer`<sup>Optional</sup> <a name="customer" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.Initializer.parameter.customer"></a>

- *Type:* str

The customer. For example: 'customers/C0123abc'. If omitted, the customer of the caller is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.12.0/docs/resources/google_cloud_identity_inbound_oidc_sso_profile#customer GoogleCloudIdentityInboundOidcSsoProfile#customer}

---

##### `deletion_policy`<sup>Optional</sup> <a name="deletion_policy" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.Initializer.parameter.deletionPolicy"></a>

- *Type:* str

Whether Terraform will be prevented from destroying the instance.

Defaults to "DELETE".
When a 'terraform destroy' or 'terraform apply' would delete the instance,
the command will fail if this field is set to "PREVENT" in Terraform state.
When set to "ABANDON", the command will remove the resource from Terraform
management without updating or deleting the resource in the API.
When set to "DELETE", deleting the resource is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.12.0/docs/resources/google_cloud_identity_inbound_oidc_sso_profile#deletion_policy GoogleCloudIdentityInboundOidcSsoProfile#deletion_policy}

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.Initializer.parameter.displayName"></a>

- *Type:* str

Human-readable name of the OIDC SSO profile.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.12.0/docs/resources/google_cloud_identity_inbound_oidc_sso_profile#display_name GoogleCloudIdentityInboundOidcSsoProfile#display_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.12.0/docs/resources/google_cloud_identity_inbound_oidc_sso_profile#id GoogleCloudIdentityInboundOidcSsoProfile#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `rp_config`<sup>Optional</sup> <a name="rp_config" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.Initializer.parameter.rpConfig"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileRpConfig">GoogleCloudIdentityInboundOidcSsoProfileRpConfig</a>

rp_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.12.0/docs/resources/google_cloud_identity_inbound_oidc_sso_profile#rp_config GoogleCloudIdentityInboundOidcSsoProfile#rp_config}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileTimeouts">GoogleCloudIdentityInboundOidcSsoProfileTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.12.0/docs/resources/google_cloud_identity_inbound_oidc_sso_profile#timeouts GoogleCloudIdentityInboundOidcSsoProfile#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.putIdpConfig">put_idp_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.putRpConfig">put_rp_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.resetCustomer">reset_customer</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.resetDeletionPolicy">reset_deletion_policy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.resetDisplayName">reset_display_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.resetRpConfig">reset_rp_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_idp_config` <a name="put_idp_config" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.putIdpConfig"></a>

```python
def put_idp_config(
  issuer_uri: str,
  change_password_uri: str = None
) -> None
```

###### `issuer_uri`<sup>Required</sup> <a name="issuer_uri" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.putIdpConfig.parameter.issuerUri"></a>

- *Type:* str

The Issuer identifier for the IdP.

Must be a URL. The discovery URL will be derived
from this as described in Section 4 of the OIDC specification.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.12.0/docs/resources/google_cloud_identity_inbound_oidc_sso_profile#issuer_uri GoogleCloudIdentityInboundOidcSsoProfile#issuer_uri}

---

###### `change_password_uri`<sup>Optional</sup> <a name="change_password_uri" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.putIdpConfig.parameter.changePasswordUri"></a>

- *Type:* str

The **Change Password URL** of the identity provider.

Users will be sent to this URL
when changing their passwords at 'myaccount.google.com'. This takes precedence over
the change password URL configured at customer-level. Must use 'HTTPS'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.12.0/docs/resources/google_cloud_identity_inbound_oidc_sso_profile#change_password_uri GoogleCloudIdentityInboundOidcSsoProfile#change_password_uri}

---

##### `put_rp_config` <a name="put_rp_config" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.putRpConfig"></a>

```python
def put_rp_config(
  client_id: str = None,
  client_secret: str = None
) -> None
```

###### `client_id`<sup>Optional</sup> <a name="client_id" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.putRpConfig.parameter.clientId"></a>

- *Type:* str

OAuth2 client ID for OIDC. Must be set together with 'client_secret'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.12.0/docs/resources/google_cloud_identity_inbound_oidc_sso_profile#client_id GoogleCloudIdentityInboundOidcSsoProfile#client_id}

---

###### `client_secret`<sup>Optional</sup> <a name="client_secret" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.putRpConfig.parameter.clientSecret"></a>

- *Type:* str

Input only. OAuth2 client secret for OIDC. Must be set together with 'client_id'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.12.0/docs/resources/google_cloud_identity_inbound_oidc_sso_profile#client_secret GoogleCloudIdentityInboundOidcSsoProfile#client_secret}

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.12.0/docs/resources/google_cloud_identity_inbound_oidc_sso_profile#create GoogleCloudIdentityInboundOidcSsoProfile#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.12.0/docs/resources/google_cloud_identity_inbound_oidc_sso_profile#delete GoogleCloudIdentityInboundOidcSsoProfile#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.12.0/docs/resources/google_cloud_identity_inbound_oidc_sso_profile#update GoogleCloudIdentityInboundOidcSsoProfile#update}.

---

##### `reset_customer` <a name="reset_customer" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.resetCustomer"></a>

```python
def reset_customer() -> None
```

##### `reset_deletion_policy` <a name="reset_deletion_policy" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.resetDeletionPolicy"></a>

```python
def reset_deletion_policy() -> None
```

##### `reset_display_name` <a name="reset_display_name" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.resetDisplayName"></a>

```python
def reset_display_name() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_rp_config` <a name="reset_rp_config" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.resetRpConfig"></a>

```python
def reset_rp_config() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a GoogleCloudIdentityInboundOidcSsoProfile resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.isConstruct"></a>

```python
from cdktn_provider_google_beta import google_cloud_identity_inbound_oidc_sso_profile

googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.isTerraformElement"></a>

```python
from cdktn_provider_google_beta import google_cloud_identity_inbound_oidc_sso_profile

googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.isTerraformResource"></a>

```python
from cdktn_provider_google_beta import google_cloud_identity_inbound_oidc_sso_profile

googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.generateConfigForImport"></a>

```python
from cdktn_provider_google_beta import google_cloud_identity_inbound_oidc_sso_profile

googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a GoogleCloudIdentityInboundOidcSsoProfile resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the GoogleCloudIdentityInboundOidcSsoProfile to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing GoogleCloudIdentityInboundOidcSsoProfile that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.12.0/docs/resources/google_cloud_identity_inbound_oidc_sso_profile#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the GoogleCloudIdentityInboundOidcSsoProfile to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.property.idpConfig">idp_config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileIdpConfigOutputReference">GoogleCloudIdentityInboundOidcSsoProfileIdpConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.property.inboundOidcSsoProfileId">inbound_oidc_sso_profile_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.property.rpConfig">rp_config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileRpConfigOutputReference">GoogleCloudIdentityInboundOidcSsoProfileRpConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileTimeoutsOutputReference">GoogleCloudIdentityInboundOidcSsoProfileTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.property.customerInput">customer_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.property.deletionPolicyInput">deletion_policy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.property.idpConfigInput">idp_config_input</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileIdpConfig">GoogleCloudIdentityInboundOidcSsoProfileIdpConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.property.rpConfigInput">rp_config_input</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileRpConfig">GoogleCloudIdentityInboundOidcSsoProfileRpConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.property.timeoutsInput">timeouts_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileTimeouts">GoogleCloudIdentityInboundOidcSsoProfileTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.property.customer">customer</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.property.deletionPolicy">deletion_policy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.property.id">id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `idp_config`<sup>Required</sup> <a name="idp_config" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.property.idpConfig"></a>

```python
idp_config: GoogleCloudIdentityInboundOidcSsoProfileIdpConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileIdpConfigOutputReference">GoogleCloudIdentityInboundOidcSsoProfileIdpConfigOutputReference</a>

---

##### `inbound_oidc_sso_profile_id`<sup>Required</sup> <a name="inbound_oidc_sso_profile_id" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.property.inboundOidcSsoProfileId"></a>

```python
inbound_oidc_sso_profile_id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `rp_config`<sup>Required</sup> <a name="rp_config" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.property.rpConfig"></a>

```python
rp_config: GoogleCloudIdentityInboundOidcSsoProfileRpConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileRpConfigOutputReference">GoogleCloudIdentityInboundOidcSsoProfileRpConfigOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.property.timeouts"></a>

```python
timeouts: GoogleCloudIdentityInboundOidcSsoProfileTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileTimeoutsOutputReference">GoogleCloudIdentityInboundOidcSsoProfileTimeoutsOutputReference</a>

---

##### `customer_input`<sup>Optional</sup> <a name="customer_input" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.property.customerInput"></a>

```python
customer_input: str
```

- *Type:* str

---

##### `deletion_policy_input`<sup>Optional</sup> <a name="deletion_policy_input" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.property.deletionPolicyInput"></a>

```python
deletion_policy_input: str
```

- *Type:* str

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `idp_config_input`<sup>Optional</sup> <a name="idp_config_input" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.property.idpConfigInput"></a>

```python
idp_config_input: GoogleCloudIdentityInboundOidcSsoProfileIdpConfig
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileIdpConfig">GoogleCloudIdentityInboundOidcSsoProfileIdpConfig</a>

---

##### `rp_config_input`<sup>Optional</sup> <a name="rp_config_input" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.property.rpConfigInput"></a>

```python
rp_config_input: GoogleCloudIdentityInboundOidcSsoProfileRpConfig
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileRpConfig">GoogleCloudIdentityInboundOidcSsoProfileRpConfig</a>

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.property.timeoutsInput"></a>

```python
timeouts_input: IResolvable | GoogleCloudIdentityInboundOidcSsoProfileTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileTimeouts">GoogleCloudIdentityInboundOidcSsoProfileTimeouts</a>

---

##### `customer`<sup>Required</sup> <a name="customer" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.property.customer"></a>

```python
customer: str
```

- *Type:* str

---

##### `deletion_policy`<sup>Required</sup> <a name="deletion_policy" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.property.deletionPolicy"></a>

```python
deletion_policy: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.property.id"></a>

```python
id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleCloudIdentityInboundOidcSsoProfileConfig <a name="GoogleCloudIdentityInboundOidcSsoProfileConfig" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileConfig.Initializer"></a>

```python
from cdktn_provider_google_beta import google_cloud_identity_inbound_oidc_sso_profile

googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  idp_config: GoogleCloudIdentityInboundOidcSsoProfileIdpConfig,
  customer: str = None,
  deletion_policy: str = None,
  display_name: str = None,
  id: str = None,
  rp_config: GoogleCloudIdentityInboundOidcSsoProfileRpConfig = None,
  timeouts: GoogleCloudIdentityInboundOidcSsoProfileTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileConfig.property.idpConfig">idp_config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileIdpConfig">GoogleCloudIdentityInboundOidcSsoProfileIdpConfig</a></code> | idp_config block. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileConfig.property.customer">customer</a></code> | <code>str</code> | The customer. For example: 'customers/C0123abc'. If omitted, the customer of the caller is used. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileConfig.property.deletionPolicy">deletion_policy</a></code> | <code>str</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileConfig.property.displayName">display_name</a></code> | <code>str</code> | Human-readable name of the OIDC SSO profile. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.12.0/docs/resources/google_cloud_identity_inbound_oidc_sso_profile#id GoogleCloudIdentityInboundOidcSsoProfile#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileConfig.property.rpConfig">rp_config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileRpConfig">GoogleCloudIdentityInboundOidcSsoProfileRpConfig</a></code> | rp_config block. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileTimeouts">GoogleCloudIdentityInboundOidcSsoProfileTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `idp_config`<sup>Required</sup> <a name="idp_config" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileConfig.property.idpConfig"></a>

```python
idp_config: GoogleCloudIdentityInboundOidcSsoProfileIdpConfig
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileIdpConfig">GoogleCloudIdentityInboundOidcSsoProfileIdpConfig</a>

idp_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.12.0/docs/resources/google_cloud_identity_inbound_oidc_sso_profile#idp_config GoogleCloudIdentityInboundOidcSsoProfile#idp_config}

---

##### `customer`<sup>Optional</sup> <a name="customer" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileConfig.property.customer"></a>

```python
customer: str
```

- *Type:* str

The customer. For example: 'customers/C0123abc'. If omitted, the customer of the caller is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.12.0/docs/resources/google_cloud_identity_inbound_oidc_sso_profile#customer GoogleCloudIdentityInboundOidcSsoProfile#customer}

---

##### `deletion_policy`<sup>Optional</sup> <a name="deletion_policy" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.12.0/docs/resources/google_cloud_identity_inbound_oidc_sso_profile#deletion_policy GoogleCloudIdentityInboundOidcSsoProfile#deletion_policy}

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

Human-readable name of the OIDC SSO profile.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.12.0/docs/resources/google_cloud_identity_inbound_oidc_sso_profile#display_name GoogleCloudIdentityInboundOidcSsoProfile#display_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.12.0/docs/resources/google_cloud_identity_inbound_oidc_sso_profile#id GoogleCloudIdentityInboundOidcSsoProfile#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `rp_config`<sup>Optional</sup> <a name="rp_config" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileConfig.property.rpConfig"></a>

```python
rp_config: GoogleCloudIdentityInboundOidcSsoProfileRpConfig
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileRpConfig">GoogleCloudIdentityInboundOidcSsoProfileRpConfig</a>

rp_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.12.0/docs/resources/google_cloud_identity_inbound_oidc_sso_profile#rp_config GoogleCloudIdentityInboundOidcSsoProfile#rp_config}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileConfig.property.timeouts"></a>

```python
timeouts: GoogleCloudIdentityInboundOidcSsoProfileTimeouts
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileTimeouts">GoogleCloudIdentityInboundOidcSsoProfileTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.12.0/docs/resources/google_cloud_identity_inbound_oidc_sso_profile#timeouts GoogleCloudIdentityInboundOidcSsoProfile#timeouts}

---

### GoogleCloudIdentityInboundOidcSsoProfileIdpConfig <a name="GoogleCloudIdentityInboundOidcSsoProfileIdpConfig" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileIdpConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileIdpConfig.Initializer"></a>

```python
from cdktn_provider_google_beta import google_cloud_identity_inbound_oidc_sso_profile

googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileIdpConfig(
  issuer_uri: str,
  change_password_uri: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileIdpConfig.property.issuerUri">issuer_uri</a></code> | <code>str</code> | The Issuer identifier for the IdP. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileIdpConfig.property.changePasswordUri">change_password_uri</a></code> | <code>str</code> | The **Change Password URL** of the identity provider. |

---

##### `issuer_uri`<sup>Required</sup> <a name="issuer_uri" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileIdpConfig.property.issuerUri"></a>

```python
issuer_uri: str
```

- *Type:* str

The Issuer identifier for the IdP.

Must be a URL. The discovery URL will be derived
from this as described in Section 4 of the OIDC specification.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.12.0/docs/resources/google_cloud_identity_inbound_oidc_sso_profile#issuer_uri GoogleCloudIdentityInboundOidcSsoProfile#issuer_uri}

---

##### `change_password_uri`<sup>Optional</sup> <a name="change_password_uri" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileIdpConfig.property.changePasswordUri"></a>

```python
change_password_uri: str
```

- *Type:* str

The **Change Password URL** of the identity provider.

Users will be sent to this URL
when changing their passwords at 'myaccount.google.com'. This takes precedence over
the change password URL configured at customer-level. Must use 'HTTPS'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.12.0/docs/resources/google_cloud_identity_inbound_oidc_sso_profile#change_password_uri GoogleCloudIdentityInboundOidcSsoProfile#change_password_uri}

---

### GoogleCloudIdentityInboundOidcSsoProfileRpConfig <a name="GoogleCloudIdentityInboundOidcSsoProfileRpConfig" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileRpConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileRpConfig.Initializer"></a>

```python
from cdktn_provider_google_beta import google_cloud_identity_inbound_oidc_sso_profile

googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileRpConfig(
  client_id: str = None,
  client_secret: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileRpConfig.property.clientId">client_id</a></code> | <code>str</code> | OAuth2 client ID for OIDC. Must be set together with 'client_secret'. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileRpConfig.property.clientSecret">client_secret</a></code> | <code>str</code> | Input only. OAuth2 client secret for OIDC. Must be set together with 'client_id'. |

---

##### `client_id`<sup>Optional</sup> <a name="client_id" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileRpConfig.property.clientId"></a>

```python
client_id: str
```

- *Type:* str

OAuth2 client ID for OIDC. Must be set together with 'client_secret'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.12.0/docs/resources/google_cloud_identity_inbound_oidc_sso_profile#client_id GoogleCloudIdentityInboundOidcSsoProfile#client_id}

---

##### `client_secret`<sup>Optional</sup> <a name="client_secret" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileRpConfig.property.clientSecret"></a>

```python
client_secret: str
```

- *Type:* str

Input only. OAuth2 client secret for OIDC. Must be set together with 'client_id'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.12.0/docs/resources/google_cloud_identity_inbound_oidc_sso_profile#client_secret GoogleCloudIdentityInboundOidcSsoProfile#client_secret}

---

### GoogleCloudIdentityInboundOidcSsoProfileTimeouts <a name="GoogleCloudIdentityInboundOidcSsoProfileTimeouts" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileTimeouts.Initializer"></a>

```python
from cdktn_provider_google_beta import google_cloud_identity_inbound_oidc_sso_profile

googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.12.0/docs/resources/google_cloud_identity_inbound_oidc_sso_profile#create GoogleCloudIdentityInboundOidcSsoProfile#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.12.0/docs/resources/google_cloud_identity_inbound_oidc_sso_profile#delete GoogleCloudIdentityInboundOidcSsoProfile#delete}. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.12.0/docs/resources/google_cloud_identity_inbound_oidc_sso_profile#update GoogleCloudIdentityInboundOidcSsoProfile#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.12.0/docs/resources/google_cloud_identity_inbound_oidc_sso_profile#create GoogleCloudIdentityInboundOidcSsoProfile#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.12.0/docs/resources/google_cloud_identity_inbound_oidc_sso_profile#delete GoogleCloudIdentityInboundOidcSsoProfile#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.12.0/docs/resources/google_cloud_identity_inbound_oidc_sso_profile#update GoogleCloudIdentityInboundOidcSsoProfile#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleCloudIdentityInboundOidcSsoProfileIdpConfigOutputReference <a name="GoogleCloudIdentityInboundOidcSsoProfileIdpConfigOutputReference" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileIdpConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileIdpConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_cloud_identity_inbound_oidc_sso_profile

googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileIdpConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileIdpConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileIdpConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileIdpConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileIdpConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileIdpConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileIdpConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileIdpConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileIdpConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileIdpConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileIdpConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileIdpConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileIdpConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileIdpConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileIdpConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileIdpConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileIdpConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileIdpConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileIdpConfigOutputReference.resetChangePasswordUri">reset_change_password_uri</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileIdpConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileIdpConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileIdpConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileIdpConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileIdpConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileIdpConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileIdpConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileIdpConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileIdpConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileIdpConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileIdpConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileIdpConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileIdpConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileIdpConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileIdpConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileIdpConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileIdpConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileIdpConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileIdpConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileIdpConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileIdpConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileIdpConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileIdpConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileIdpConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_change_password_uri` <a name="reset_change_password_uri" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileIdpConfigOutputReference.resetChangePasswordUri"></a>

```python
def reset_change_password_uri() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileIdpConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileIdpConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileIdpConfigOutputReference.property.changePasswordUriInput">change_password_uri_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileIdpConfigOutputReference.property.issuerUriInput">issuer_uri_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileIdpConfigOutputReference.property.changePasswordUri">change_password_uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileIdpConfigOutputReference.property.issuerUri">issuer_uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileIdpConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileIdpConfig">GoogleCloudIdentityInboundOidcSsoProfileIdpConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileIdpConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileIdpConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `change_password_uri_input`<sup>Optional</sup> <a name="change_password_uri_input" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileIdpConfigOutputReference.property.changePasswordUriInput"></a>

```python
change_password_uri_input: str
```

- *Type:* str

---

##### `issuer_uri_input`<sup>Optional</sup> <a name="issuer_uri_input" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileIdpConfigOutputReference.property.issuerUriInput"></a>

```python
issuer_uri_input: str
```

- *Type:* str

---

##### `change_password_uri`<sup>Required</sup> <a name="change_password_uri" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileIdpConfigOutputReference.property.changePasswordUri"></a>

```python
change_password_uri: str
```

- *Type:* str

---

##### `issuer_uri`<sup>Required</sup> <a name="issuer_uri" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileIdpConfigOutputReference.property.issuerUri"></a>

```python
issuer_uri: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileIdpConfigOutputReference.property.internalValue"></a>

```python
internal_value: GoogleCloudIdentityInboundOidcSsoProfileIdpConfig
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileIdpConfig">GoogleCloudIdentityInboundOidcSsoProfileIdpConfig</a>

---


### GoogleCloudIdentityInboundOidcSsoProfileRpConfigOutputReference <a name="GoogleCloudIdentityInboundOidcSsoProfileRpConfigOutputReference" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileRpConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileRpConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_cloud_identity_inbound_oidc_sso_profile

googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileRpConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileRpConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileRpConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileRpConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileRpConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileRpConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileRpConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileRpConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileRpConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileRpConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileRpConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileRpConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileRpConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileRpConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileRpConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileRpConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileRpConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileRpConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileRpConfigOutputReference.resetClientId">reset_client_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileRpConfigOutputReference.resetClientSecret">reset_client_secret</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileRpConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileRpConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileRpConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileRpConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileRpConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileRpConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileRpConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileRpConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileRpConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileRpConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileRpConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileRpConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileRpConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileRpConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileRpConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileRpConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileRpConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileRpConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileRpConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileRpConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileRpConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileRpConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileRpConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileRpConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_client_id` <a name="reset_client_id" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileRpConfigOutputReference.resetClientId"></a>

```python
def reset_client_id() -> None
```

##### `reset_client_secret` <a name="reset_client_secret" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileRpConfigOutputReference.resetClientSecret"></a>

```python
def reset_client_secret() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileRpConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileRpConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileRpConfigOutputReference.property.redirectUris">redirect_uris</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileRpConfigOutputReference.property.clientIdInput">client_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileRpConfigOutputReference.property.clientSecretInput">client_secret_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileRpConfigOutputReference.property.clientId">client_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileRpConfigOutputReference.property.clientSecret">client_secret</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileRpConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileRpConfig">GoogleCloudIdentityInboundOidcSsoProfileRpConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileRpConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileRpConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `redirect_uris`<sup>Required</sup> <a name="redirect_uris" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileRpConfigOutputReference.property.redirectUris"></a>

```python
redirect_uris: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `client_id_input`<sup>Optional</sup> <a name="client_id_input" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileRpConfigOutputReference.property.clientIdInput"></a>

```python
client_id_input: str
```

- *Type:* str

---

##### `client_secret_input`<sup>Optional</sup> <a name="client_secret_input" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileRpConfigOutputReference.property.clientSecretInput"></a>

```python
client_secret_input: str
```

- *Type:* str

---

##### `client_id`<sup>Required</sup> <a name="client_id" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileRpConfigOutputReference.property.clientId"></a>

```python
client_id: str
```

- *Type:* str

---

##### `client_secret`<sup>Required</sup> <a name="client_secret" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileRpConfigOutputReference.property.clientSecret"></a>

```python
client_secret: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileRpConfigOutputReference.property.internalValue"></a>

```python
internal_value: GoogleCloudIdentityInboundOidcSsoProfileRpConfig
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileRpConfig">GoogleCloudIdentityInboundOidcSsoProfileRpConfig</a>

---


### GoogleCloudIdentityInboundOidcSsoProfileTimeoutsOutputReference <a name="GoogleCloudIdentityInboundOidcSsoProfileTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileTimeoutsOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_cloud_identity_inbound_oidc_sso_profile

googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileTimeouts">GoogleCloudIdentityInboundOidcSsoProfileTimeouts</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | GoogleCloudIdentityInboundOidcSsoProfileTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileTimeouts">GoogleCloudIdentityInboundOidcSsoProfileTimeouts</a>

---



