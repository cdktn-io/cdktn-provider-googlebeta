# `googleCloudIdentityInboundOidcSsoProfile` Submodule <a name="`googleCloudIdentityInboundOidcSsoProfile` Submodule" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleCloudIdentityInboundOidcSsoProfile <a name="GoogleCloudIdentityInboundOidcSsoProfile" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.12.0/docs/resources/google_cloud_identity_inbound_oidc_sso_profile google_cloud_identity_inbound_oidc_sso_profile}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v22/googlecloudidentityinboundoidcssoprofile"

googlecloudidentityinboundoidcssoprofile.NewGoogleCloudIdentityInboundOidcSsoProfile(scope Construct, id *string, config GoogleCloudIdentityInboundOidcSsoProfileConfig) GoogleCloudIdentityInboundOidcSsoProfile
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileConfig">GoogleCloudIdentityInboundOidcSsoProfileConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileConfig">GoogleCloudIdentityInboundOidcSsoProfileConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.putIdpConfig">PutIdpConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.putRpConfig">PutRpConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.resetCustomer">ResetCustomer</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.resetDeletionPolicy">ResetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.resetRpConfig">ResetRpConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutIdpConfig` <a name="PutIdpConfig" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.putIdpConfig"></a>

```go
func PutIdpConfig(value GoogleCloudIdentityInboundOidcSsoProfileIdpConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.putIdpConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileIdpConfig">GoogleCloudIdentityInboundOidcSsoProfileIdpConfig</a>

---

##### `PutRpConfig` <a name="PutRpConfig" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.putRpConfig"></a>

```go
func PutRpConfig(value GoogleCloudIdentityInboundOidcSsoProfileRpConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.putRpConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileRpConfig">GoogleCloudIdentityInboundOidcSsoProfileRpConfig</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.putTimeouts"></a>

```go
func PutTimeouts(value GoogleCloudIdentityInboundOidcSsoProfileTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileTimeouts">GoogleCloudIdentityInboundOidcSsoProfileTimeouts</a>

---

##### `ResetCustomer` <a name="ResetCustomer" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.resetCustomer"></a>

```go
func ResetCustomer()
```

##### `ResetDeletionPolicy` <a name="ResetDeletionPolicy" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.resetDeletionPolicy"></a>

```go
func ResetDeletionPolicy()
```

##### `ResetDisplayName` <a name="ResetDisplayName" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.resetDisplayName"></a>

```go
func ResetDisplayName()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.resetId"></a>

```go
func ResetId()
```

##### `ResetRpConfig` <a name="ResetRpConfig" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.resetRpConfig"></a>

```go
func ResetRpConfig()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a GoogleCloudIdentityInboundOidcSsoProfile resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v22/googlecloudidentityinboundoidcssoprofile"

googlecloudidentityinboundoidcssoprofile.GoogleCloudIdentityInboundOidcSsoProfile_IsConstruct(x interface{}) *bool
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

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v22/googlecloudidentityinboundoidcssoprofile"

googlecloudidentityinboundoidcssoprofile.GoogleCloudIdentityInboundOidcSsoProfile_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v22/googlecloudidentityinboundoidcssoprofile"

googlecloudidentityinboundoidcssoprofile.GoogleCloudIdentityInboundOidcSsoProfile_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v22/googlecloudidentityinboundoidcssoprofile"

googlecloudidentityinboundoidcssoprofile.GoogleCloudIdentityInboundOidcSsoProfile_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a GoogleCloudIdentityInboundOidcSsoProfile resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the GoogleCloudIdentityInboundOidcSsoProfile to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing GoogleCloudIdentityInboundOidcSsoProfile that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.12.0/docs/resources/google_cloud_identity_inbound_oidc_sso_profile#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the GoogleCloudIdentityInboundOidcSsoProfile to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.property.idpConfig">IdpConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileIdpConfigOutputReference">GoogleCloudIdentityInboundOidcSsoProfileIdpConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.property.inboundOidcSsoProfileId">InboundOidcSsoProfileId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.property.rpConfig">RpConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileRpConfigOutputReference">GoogleCloudIdentityInboundOidcSsoProfileRpConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileTimeoutsOutputReference">GoogleCloudIdentityInboundOidcSsoProfileTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.property.customerInput">CustomerInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.property.deletionPolicyInput">DeletionPolicyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.property.displayNameInput">DisplayNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.property.idpConfigInput">IdpConfigInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileIdpConfig">GoogleCloudIdentityInboundOidcSsoProfileIdpConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.property.rpConfigInput">RpConfigInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileRpConfig">GoogleCloudIdentityInboundOidcSsoProfileRpConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.property.customer">Customer</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.property.deletionPolicy">DeletionPolicy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.property.id">Id</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `IdpConfig`<sup>Required</sup> <a name="IdpConfig" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.property.idpConfig"></a>

```go
func IdpConfig() GoogleCloudIdentityInboundOidcSsoProfileIdpConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileIdpConfigOutputReference">GoogleCloudIdentityInboundOidcSsoProfileIdpConfigOutputReference</a>

---

##### `InboundOidcSsoProfileId`<sup>Required</sup> <a name="InboundOidcSsoProfileId" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.property.inboundOidcSsoProfileId"></a>

```go
func InboundOidcSsoProfileId() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `RpConfig`<sup>Required</sup> <a name="RpConfig" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.property.rpConfig"></a>

```go
func RpConfig() GoogleCloudIdentityInboundOidcSsoProfileRpConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileRpConfigOutputReference">GoogleCloudIdentityInboundOidcSsoProfileRpConfigOutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.property.timeouts"></a>

```go
func Timeouts() GoogleCloudIdentityInboundOidcSsoProfileTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileTimeoutsOutputReference">GoogleCloudIdentityInboundOidcSsoProfileTimeoutsOutputReference</a>

---

##### `CustomerInput`<sup>Optional</sup> <a name="CustomerInput" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.property.customerInput"></a>

```go
func CustomerInput() *string
```

- *Type:* *string

---

##### `DeletionPolicyInput`<sup>Optional</sup> <a name="DeletionPolicyInput" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.property.deletionPolicyInput"></a>

```go
func DeletionPolicyInput() *string
```

- *Type:* *string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.property.displayNameInput"></a>

```go
func DisplayNameInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `IdpConfigInput`<sup>Optional</sup> <a name="IdpConfigInput" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.property.idpConfigInput"></a>

```go
func IdpConfigInput() GoogleCloudIdentityInboundOidcSsoProfileIdpConfig
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileIdpConfig">GoogleCloudIdentityInboundOidcSsoProfileIdpConfig</a>

---

##### `RpConfigInput`<sup>Optional</sup> <a name="RpConfigInput" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.property.rpConfigInput"></a>

```go
func RpConfigInput() GoogleCloudIdentityInboundOidcSsoProfileRpConfig
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileRpConfig">GoogleCloudIdentityInboundOidcSsoProfileRpConfig</a>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `Customer`<sup>Required</sup> <a name="Customer" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.property.customer"></a>

```go
func Customer() *string
```

- *Type:* *string

---

##### `DeletionPolicy`<sup>Required</sup> <a name="DeletionPolicy" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.property.deletionPolicy"></a>

```go
func DeletionPolicy() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleCloudIdentityInboundOidcSsoProfileConfig <a name="GoogleCloudIdentityInboundOidcSsoProfileConfig" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v22/googlecloudidentityinboundoidcssoprofile"

&googlecloudidentityinboundoidcssoprofile.GoogleCloudIdentityInboundOidcSsoProfileConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	IdpConfig: github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v22.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileIdpConfig,
	Customer: *string,
	DeletionPolicy: *string,
	DisplayName: *string,
	Id: *string,
	RpConfig: github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v22.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileRpConfig,
	Timeouts: github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v22.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileConfig.property.idpConfig">IdpConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileIdpConfig">GoogleCloudIdentityInboundOidcSsoProfileIdpConfig</a></code> | idp_config block. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileConfig.property.customer">Customer</a></code> | <code>*string</code> | The customer. For example: 'customers/C0123abc'. If omitted, the customer of the caller is used. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileConfig.property.deletionPolicy">DeletionPolicy</a></code> | <code>*string</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileConfig.property.displayName">DisplayName</a></code> | <code>*string</code> | Human-readable name of the OIDC SSO profile. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.12.0/docs/resources/google_cloud_identity_inbound_oidc_sso_profile#id GoogleCloudIdentityInboundOidcSsoProfile#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileConfig.property.rpConfig">RpConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileRpConfig">GoogleCloudIdentityInboundOidcSsoProfileRpConfig</a></code> | rp_config block. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileTimeouts">GoogleCloudIdentityInboundOidcSsoProfileTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `IdpConfig`<sup>Required</sup> <a name="IdpConfig" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileConfig.property.idpConfig"></a>

```go
IdpConfig GoogleCloudIdentityInboundOidcSsoProfileIdpConfig
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileIdpConfig">GoogleCloudIdentityInboundOidcSsoProfileIdpConfig</a>

idp_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.12.0/docs/resources/google_cloud_identity_inbound_oidc_sso_profile#idp_config GoogleCloudIdentityInboundOidcSsoProfile#idp_config}

---

##### `Customer`<sup>Optional</sup> <a name="Customer" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileConfig.property.customer"></a>

```go
Customer *string
```

- *Type:* *string

The customer. For example: 'customers/C0123abc'. If omitted, the customer of the caller is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.12.0/docs/resources/google_cloud_identity_inbound_oidc_sso_profile#customer GoogleCloudIdentityInboundOidcSsoProfile#customer}

---

##### `DeletionPolicy`<sup>Optional</sup> <a name="DeletionPolicy" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileConfig.property.deletionPolicy"></a>

```go
DeletionPolicy *string
```

- *Type:* *string

Whether Terraform will be prevented from destroying the instance.

Defaults to "DELETE".
When a 'terraform destroy' or 'terraform apply' would delete the instance,
the command will fail if this field is set to "PREVENT" in Terraform state.
When set to "ABANDON", the command will remove the resource from Terraform
management without updating or deleting the resource in the API.
When set to "DELETE", deleting the resource is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.12.0/docs/resources/google_cloud_identity_inbound_oidc_sso_profile#deletion_policy GoogleCloudIdentityInboundOidcSsoProfile#deletion_policy}

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileConfig.property.displayName"></a>

```go
DisplayName *string
```

- *Type:* *string

Human-readable name of the OIDC SSO profile.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.12.0/docs/resources/google_cloud_identity_inbound_oidc_sso_profile#display_name GoogleCloudIdentityInboundOidcSsoProfile#display_name}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.12.0/docs/resources/google_cloud_identity_inbound_oidc_sso_profile#id GoogleCloudIdentityInboundOidcSsoProfile#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `RpConfig`<sup>Optional</sup> <a name="RpConfig" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileConfig.property.rpConfig"></a>

```go
RpConfig GoogleCloudIdentityInboundOidcSsoProfileRpConfig
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileRpConfig">GoogleCloudIdentityInboundOidcSsoProfileRpConfig</a>

rp_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.12.0/docs/resources/google_cloud_identity_inbound_oidc_sso_profile#rp_config GoogleCloudIdentityInboundOidcSsoProfile#rp_config}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileConfig.property.timeouts"></a>

```go
Timeouts GoogleCloudIdentityInboundOidcSsoProfileTimeouts
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileTimeouts">GoogleCloudIdentityInboundOidcSsoProfileTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.12.0/docs/resources/google_cloud_identity_inbound_oidc_sso_profile#timeouts GoogleCloudIdentityInboundOidcSsoProfile#timeouts}

---

### GoogleCloudIdentityInboundOidcSsoProfileIdpConfig <a name="GoogleCloudIdentityInboundOidcSsoProfileIdpConfig" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileIdpConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileIdpConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v22/googlecloudidentityinboundoidcssoprofile"

&googlecloudidentityinboundoidcssoprofile.GoogleCloudIdentityInboundOidcSsoProfileIdpConfig {
	IssuerUri: *string,
	ChangePasswordUri: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileIdpConfig.property.issuerUri">IssuerUri</a></code> | <code>*string</code> | The Issuer identifier for the IdP. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileIdpConfig.property.changePasswordUri">ChangePasswordUri</a></code> | <code>*string</code> | The **Change Password URL** of the identity provider. |

---

##### `IssuerUri`<sup>Required</sup> <a name="IssuerUri" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileIdpConfig.property.issuerUri"></a>

```go
IssuerUri *string
```

- *Type:* *string

The Issuer identifier for the IdP.

Must be a URL. The discovery URL will be derived
from this as described in Section 4 of the OIDC specification.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.12.0/docs/resources/google_cloud_identity_inbound_oidc_sso_profile#issuer_uri GoogleCloudIdentityInboundOidcSsoProfile#issuer_uri}

---

##### `ChangePasswordUri`<sup>Optional</sup> <a name="ChangePasswordUri" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileIdpConfig.property.changePasswordUri"></a>

```go
ChangePasswordUri *string
```

- *Type:* *string

The **Change Password URL** of the identity provider.

Users will be sent to this URL
when changing their passwords at 'myaccount.google.com'. This takes precedence over
the change password URL configured at customer-level. Must use 'HTTPS'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.12.0/docs/resources/google_cloud_identity_inbound_oidc_sso_profile#change_password_uri GoogleCloudIdentityInboundOidcSsoProfile#change_password_uri}

---

### GoogleCloudIdentityInboundOidcSsoProfileRpConfig <a name="GoogleCloudIdentityInboundOidcSsoProfileRpConfig" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileRpConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileRpConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v22/googlecloudidentityinboundoidcssoprofile"

&googlecloudidentityinboundoidcssoprofile.GoogleCloudIdentityInboundOidcSsoProfileRpConfig {
	ClientId: *string,
	ClientSecret: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileRpConfig.property.clientId">ClientId</a></code> | <code>*string</code> | OAuth2 client ID for OIDC. Must be set together with 'client_secret'. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileRpConfig.property.clientSecret">ClientSecret</a></code> | <code>*string</code> | Input only. OAuth2 client secret for OIDC. Must be set together with 'client_id'. |

---

##### `ClientId`<sup>Optional</sup> <a name="ClientId" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileRpConfig.property.clientId"></a>

```go
ClientId *string
```

- *Type:* *string

OAuth2 client ID for OIDC. Must be set together with 'client_secret'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.12.0/docs/resources/google_cloud_identity_inbound_oidc_sso_profile#client_id GoogleCloudIdentityInboundOidcSsoProfile#client_id}

---

##### `ClientSecret`<sup>Optional</sup> <a name="ClientSecret" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileRpConfig.property.clientSecret"></a>

```go
ClientSecret *string
```

- *Type:* *string

Input only. OAuth2 client secret for OIDC. Must be set together with 'client_id'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.12.0/docs/resources/google_cloud_identity_inbound_oidc_sso_profile#client_secret GoogleCloudIdentityInboundOidcSsoProfile#client_secret}

---

### GoogleCloudIdentityInboundOidcSsoProfileTimeouts <a name="GoogleCloudIdentityInboundOidcSsoProfileTimeouts" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileTimeouts.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v22/googlecloudidentityinboundoidcssoprofile"

&googlecloudidentityinboundoidcssoprofile.GoogleCloudIdentityInboundOidcSsoProfileTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.12.0/docs/resources/google_cloud_identity_inbound_oidc_sso_profile#create GoogleCloudIdentityInboundOidcSsoProfile#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.12.0/docs/resources/google_cloud_identity_inbound_oidc_sso_profile#delete GoogleCloudIdentityInboundOidcSsoProfile#delete}. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.12.0/docs/resources/google_cloud_identity_inbound_oidc_sso_profile#update GoogleCloudIdentityInboundOidcSsoProfile#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.12.0/docs/resources/google_cloud_identity_inbound_oidc_sso_profile#create GoogleCloudIdentityInboundOidcSsoProfile#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.12.0/docs/resources/google_cloud_identity_inbound_oidc_sso_profile#delete GoogleCloudIdentityInboundOidcSsoProfile#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.12.0/docs/resources/google_cloud_identity_inbound_oidc_sso_profile#update GoogleCloudIdentityInboundOidcSsoProfile#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleCloudIdentityInboundOidcSsoProfileIdpConfigOutputReference <a name="GoogleCloudIdentityInboundOidcSsoProfileIdpConfigOutputReference" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileIdpConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileIdpConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v22/googlecloudidentityinboundoidcssoprofile"

googlecloudidentityinboundoidcssoprofile.NewGoogleCloudIdentityInboundOidcSsoProfileIdpConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleCloudIdentityInboundOidcSsoProfileIdpConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileIdpConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileIdpConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileIdpConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileIdpConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileIdpConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileIdpConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileIdpConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileIdpConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileIdpConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileIdpConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileIdpConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileIdpConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileIdpConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileIdpConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileIdpConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileIdpConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileIdpConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileIdpConfigOutputReference.resetChangePasswordUri">ResetChangePasswordUri</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileIdpConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileIdpConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileIdpConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileIdpConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileIdpConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileIdpConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileIdpConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileIdpConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileIdpConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileIdpConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileIdpConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileIdpConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileIdpConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileIdpConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileIdpConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileIdpConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileIdpConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileIdpConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileIdpConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileIdpConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileIdpConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileIdpConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileIdpConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileIdpConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetChangePasswordUri` <a name="ResetChangePasswordUri" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileIdpConfigOutputReference.resetChangePasswordUri"></a>

```go
func ResetChangePasswordUri()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileIdpConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileIdpConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileIdpConfigOutputReference.property.changePasswordUriInput">ChangePasswordUriInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileIdpConfigOutputReference.property.issuerUriInput">IssuerUriInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileIdpConfigOutputReference.property.changePasswordUri">ChangePasswordUri</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileIdpConfigOutputReference.property.issuerUri">IssuerUri</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileIdpConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileIdpConfig">GoogleCloudIdentityInboundOidcSsoProfileIdpConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileIdpConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileIdpConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ChangePasswordUriInput`<sup>Optional</sup> <a name="ChangePasswordUriInput" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileIdpConfigOutputReference.property.changePasswordUriInput"></a>

```go
func ChangePasswordUriInput() *string
```

- *Type:* *string

---

##### `IssuerUriInput`<sup>Optional</sup> <a name="IssuerUriInput" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileIdpConfigOutputReference.property.issuerUriInput"></a>

```go
func IssuerUriInput() *string
```

- *Type:* *string

---

##### `ChangePasswordUri`<sup>Required</sup> <a name="ChangePasswordUri" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileIdpConfigOutputReference.property.changePasswordUri"></a>

```go
func ChangePasswordUri() *string
```

- *Type:* *string

---

##### `IssuerUri`<sup>Required</sup> <a name="IssuerUri" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileIdpConfigOutputReference.property.issuerUri"></a>

```go
func IssuerUri() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileIdpConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleCloudIdentityInboundOidcSsoProfileIdpConfig
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileIdpConfig">GoogleCloudIdentityInboundOidcSsoProfileIdpConfig</a>

---


### GoogleCloudIdentityInboundOidcSsoProfileRpConfigOutputReference <a name="GoogleCloudIdentityInboundOidcSsoProfileRpConfigOutputReference" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileRpConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileRpConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v22/googlecloudidentityinboundoidcssoprofile"

googlecloudidentityinboundoidcssoprofile.NewGoogleCloudIdentityInboundOidcSsoProfileRpConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleCloudIdentityInboundOidcSsoProfileRpConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileRpConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileRpConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileRpConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileRpConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileRpConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileRpConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileRpConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileRpConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileRpConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileRpConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileRpConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileRpConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileRpConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileRpConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileRpConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileRpConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileRpConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileRpConfigOutputReference.resetClientId">ResetClientId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileRpConfigOutputReference.resetClientSecret">ResetClientSecret</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileRpConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileRpConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileRpConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileRpConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileRpConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileRpConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileRpConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileRpConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileRpConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileRpConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileRpConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileRpConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileRpConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileRpConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileRpConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileRpConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileRpConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileRpConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileRpConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileRpConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileRpConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileRpConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileRpConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileRpConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetClientId` <a name="ResetClientId" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileRpConfigOutputReference.resetClientId"></a>

```go
func ResetClientId()
```

##### `ResetClientSecret` <a name="ResetClientSecret" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileRpConfigOutputReference.resetClientSecret"></a>

```go
func ResetClientSecret()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileRpConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileRpConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileRpConfigOutputReference.property.redirectUris">RedirectUris</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileRpConfigOutputReference.property.clientIdInput">ClientIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileRpConfigOutputReference.property.clientSecretInput">ClientSecretInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileRpConfigOutputReference.property.clientId">ClientId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileRpConfigOutputReference.property.clientSecret">ClientSecret</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileRpConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileRpConfig">GoogleCloudIdentityInboundOidcSsoProfileRpConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileRpConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileRpConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `RedirectUris`<sup>Required</sup> <a name="RedirectUris" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileRpConfigOutputReference.property.redirectUris"></a>

```go
func RedirectUris() *[]*string
```

- *Type:* *[]*string

---

##### `ClientIdInput`<sup>Optional</sup> <a name="ClientIdInput" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileRpConfigOutputReference.property.clientIdInput"></a>

```go
func ClientIdInput() *string
```

- *Type:* *string

---

##### `ClientSecretInput`<sup>Optional</sup> <a name="ClientSecretInput" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileRpConfigOutputReference.property.clientSecretInput"></a>

```go
func ClientSecretInput() *string
```

- *Type:* *string

---

##### `ClientId`<sup>Required</sup> <a name="ClientId" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileRpConfigOutputReference.property.clientId"></a>

```go
func ClientId() *string
```

- *Type:* *string

---

##### `ClientSecret`<sup>Required</sup> <a name="ClientSecret" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileRpConfigOutputReference.property.clientSecret"></a>

```go
func ClientSecret() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileRpConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleCloudIdentityInboundOidcSsoProfileRpConfig
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileRpConfig">GoogleCloudIdentityInboundOidcSsoProfileRpConfig</a>

---


### GoogleCloudIdentityInboundOidcSsoProfileTimeoutsOutputReference <a name="GoogleCloudIdentityInboundOidcSsoProfileTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v22/googlecloudidentityinboundoidcssoprofile"

googlecloudidentityinboundoidcssoprofile.NewGoogleCloudIdentityInboundOidcSsoProfileTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleCloudIdentityInboundOidcSsoProfileTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



