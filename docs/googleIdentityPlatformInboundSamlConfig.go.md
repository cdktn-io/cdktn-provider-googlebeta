# `googleIdentityPlatformInboundSamlConfig` Submodule <a name="`googleIdentityPlatformInboundSamlConfig` Submodule" id="@cdktn/provider-google-beta.googleIdentityPlatformInboundSamlConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleIdentityPlatformInboundSamlConfig <a name="GoogleIdentityPlatformInboundSamlConfig" id="@cdktn/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfig"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_identity_platform_inbound_saml_config google_identity_platform_inbound_saml_config}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googleidentityplatforminboundsamlconfig"

googleidentityplatforminboundsamlconfig.NewGoogleIdentityPlatformInboundSamlConfig(scope Construct, id *string, config GoogleIdentityPlatformInboundSamlConfigConfig) GoogleIdentityPlatformInboundSamlConfig
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfig.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfig.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfig.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigConfig">GoogleIdentityPlatformInboundSamlConfigConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfig.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfig.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfig.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigConfig">GoogleIdentityPlatformInboundSamlConfigConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfig.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfig.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfig.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfig.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfig.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfig.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfig.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfig.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfig.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfig.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfig.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfig.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfig.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfig.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfig.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfig.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfig.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfig.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfig.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfig.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfig.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfig.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfig.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfig.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfig.putIdpConfig">PutIdpConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfig.putSpConfig">PutSpConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfig.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfig.resetDeletionPolicy">ResetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfig.resetEnabled">ResetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfig.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfig.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfig.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfig.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfig.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfig.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfig.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfig.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfig.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfig.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfig.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfig.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfig.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfig.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfig.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfig.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfig.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfig.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfig.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfig.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfig.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfig.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfig.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfig.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfig.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfig.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfig.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfig.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfig.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfig.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfig.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfig.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfig.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfig.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfig.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfig.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfig.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutIdpConfig` <a name="PutIdpConfig" id="@cdktn/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfig.putIdpConfig"></a>

```go
func PutIdpConfig(value GoogleIdentityPlatformInboundSamlConfigIdpConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfig.putIdpConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigIdpConfig">GoogleIdentityPlatformInboundSamlConfigIdpConfig</a>

---

##### `PutSpConfig` <a name="PutSpConfig" id="@cdktn/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfig.putSpConfig"></a>

```go
func PutSpConfig(value GoogleIdentityPlatformInboundSamlConfigSpConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfig.putSpConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigSpConfig">GoogleIdentityPlatformInboundSamlConfigSpConfig</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfig.putTimeouts"></a>

```go
func PutTimeouts(value GoogleIdentityPlatformInboundSamlConfigTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfig.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigTimeouts">GoogleIdentityPlatformInboundSamlConfigTimeouts</a>

---

##### `ResetDeletionPolicy` <a name="ResetDeletionPolicy" id="@cdktn/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfig.resetDeletionPolicy"></a>

```go
func ResetDeletionPolicy()
```

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktn/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfig.resetEnabled"></a>

```go
func ResetEnabled()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfig.resetId"></a>

```go
func ResetId()
```

##### `ResetProject` <a name="ResetProject" id="@cdktn/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfig.resetProject"></a>

```go
func ResetProject()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfig.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfig.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfig.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfig.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfig.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a GoogleIdentityPlatformInboundSamlConfig resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfig.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googleidentityplatforminboundsamlconfig"

googleidentityplatforminboundsamlconfig.GoogleIdentityPlatformInboundSamlConfig_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfig.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfig.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googleidentityplatforminboundsamlconfig"

googleidentityplatforminboundsamlconfig.GoogleIdentityPlatformInboundSamlConfig_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfig.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfig.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googleidentityplatforminboundsamlconfig"

googleidentityplatforminboundsamlconfig.GoogleIdentityPlatformInboundSamlConfig_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfig.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfig.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googleidentityplatforminboundsamlconfig"

googleidentityplatforminboundsamlconfig.GoogleIdentityPlatformInboundSamlConfig_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a GoogleIdentityPlatformInboundSamlConfig resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfig.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfig.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the GoogleIdentityPlatformInboundSamlConfig to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfig.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing GoogleIdentityPlatformInboundSamlConfig that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_identity_platform_inbound_saml_config#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfig.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the GoogleIdentityPlatformInboundSamlConfig to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfig.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfig.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfig.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfig.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfig.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfig.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfig.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfig.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfig.property.idpConfig">IdpConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigIdpConfigOutputReference">GoogleIdentityPlatformInboundSamlConfigIdpConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfig.property.spConfig">SpConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigSpConfigOutputReference">GoogleIdentityPlatformInboundSamlConfigSpConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigTimeoutsOutputReference">GoogleIdentityPlatformInboundSamlConfigTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfig.property.deletionPolicyInput">DeletionPolicyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfig.property.displayNameInput">DisplayNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfig.property.enabledInput">EnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfig.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfig.property.idpConfigInput">IdpConfigInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigIdpConfig">GoogleIdentityPlatformInboundSamlConfigIdpConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfig.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfig.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfig.property.spConfigInput">SpConfigInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigSpConfig">GoogleIdentityPlatformInboundSamlConfigSpConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfig.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfig.property.deletionPolicy">DeletionPolicy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfig.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfig.property.enabled">Enabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfig.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfig.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfig.property.project">Project</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfig.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfig.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfig.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfig.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfig.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfig.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfig.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfig.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfig.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfig.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfig.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfig.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfig.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfig.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `IdpConfig`<sup>Required</sup> <a name="IdpConfig" id="@cdktn/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfig.property.idpConfig"></a>

```go
func IdpConfig() GoogleIdentityPlatformInboundSamlConfigIdpConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigIdpConfigOutputReference">GoogleIdentityPlatformInboundSamlConfigIdpConfigOutputReference</a>

---

##### `SpConfig`<sup>Required</sup> <a name="SpConfig" id="@cdktn/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfig.property.spConfig"></a>

```go
func SpConfig() GoogleIdentityPlatformInboundSamlConfigSpConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigSpConfigOutputReference">GoogleIdentityPlatformInboundSamlConfigSpConfigOutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfig.property.timeouts"></a>

```go
func Timeouts() GoogleIdentityPlatformInboundSamlConfigTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigTimeoutsOutputReference">GoogleIdentityPlatformInboundSamlConfigTimeoutsOutputReference</a>

---

##### `DeletionPolicyInput`<sup>Optional</sup> <a name="DeletionPolicyInput" id="@cdktn/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfig.property.deletionPolicyInput"></a>

```go
func DeletionPolicyInput() *string
```

- *Type:* *string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktn/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfig.property.displayNameInput"></a>

```go
func DisplayNameInput() *string
```

- *Type:* *string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktn/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfig.property.enabledInput"></a>

```go
func EnabledInput() interface{}
```

- *Type:* interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfig.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `IdpConfigInput`<sup>Optional</sup> <a name="IdpConfigInput" id="@cdktn/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfig.property.idpConfigInput"></a>

```go
func IdpConfigInput() GoogleIdentityPlatformInboundSamlConfigIdpConfig
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigIdpConfig">GoogleIdentityPlatformInboundSamlConfigIdpConfig</a>

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfig.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktn/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfig.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `SpConfigInput`<sup>Optional</sup> <a name="SpConfigInput" id="@cdktn/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfig.property.spConfigInput"></a>

```go
func SpConfigInput() GoogleIdentityPlatformInboundSamlConfigSpConfig
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigSpConfig">GoogleIdentityPlatformInboundSamlConfigSpConfig</a>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfig.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `DeletionPolicy`<sup>Required</sup> <a name="DeletionPolicy" id="@cdktn/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfig.property.deletionPolicy"></a>

```go
func DeletionPolicy() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktn/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfig.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktn/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfig.property.enabled"></a>

```go
func Enabled() interface{}
```

- *Type:* interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfig.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfig.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktn/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfig.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfig.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfig.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleIdentityPlatformInboundSamlConfigConfig <a name="GoogleIdentityPlatformInboundSamlConfigConfig" id="@cdktn/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googleidentityplatforminboundsamlconfig"

&googleidentityplatforminboundsamlconfig.GoogleIdentityPlatformInboundSamlConfigConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	DisplayName: *string,
	IdpConfig: github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigIdpConfig,
	Name: *string,
	SpConfig: github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigSpConfig,
	DeletionPolicy: *string,
	Enabled: interface{},
	Id: *string,
	Project: *string,
	Timeouts: github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigConfig.property.displayName">DisplayName</a></code> | <code>*string</code> | Human friendly display name. |
| <code><a href="#@cdktn/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigConfig.property.idpConfig">IdpConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigIdpConfig">GoogleIdentityPlatformInboundSamlConfigIdpConfig</a></code> | idp_config block. |
| <code><a href="#@cdktn/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigConfig.property.name">Name</a></code> | <code>*string</code> | The name of the InboundSamlConfig resource. |
| <code><a href="#@cdktn/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigConfig.property.spConfig">SpConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigSpConfig">GoogleIdentityPlatformInboundSamlConfigSpConfig</a></code> | sp_config block. |
| <code><a href="#@cdktn/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigConfig.property.deletionPolicy">DeletionPolicy</a></code> | <code>*string</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigConfig.property.enabled">Enabled</a></code> | <code>interface{}</code> | If this config allows users to sign in with the provider. |
| <code><a href="#@cdktn/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_identity_platform_inbound_saml_config#id GoogleIdentityPlatformInboundSamlConfig#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_identity_platform_inbound_saml_config#project GoogleIdentityPlatformInboundSamlConfig#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigTimeouts">GoogleIdentityPlatformInboundSamlConfigTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktn/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigConfig.property.displayName"></a>

```go
DisplayName *string
```

- *Type:* *string

Human friendly display name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_identity_platform_inbound_saml_config#display_name GoogleIdentityPlatformInboundSamlConfig#display_name}

---

##### `IdpConfig`<sup>Required</sup> <a name="IdpConfig" id="@cdktn/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigConfig.property.idpConfig"></a>

```go
IdpConfig GoogleIdentityPlatformInboundSamlConfigIdpConfig
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigIdpConfig">GoogleIdentityPlatformInboundSamlConfigIdpConfig</a>

idp_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_identity_platform_inbound_saml_config#idp_config GoogleIdentityPlatformInboundSamlConfig#idp_config}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

The name of the InboundSamlConfig resource.

Must start with 'saml.' and can only have alphanumeric characters,
hyphens, underscores or periods. The part after 'saml.' must also start with a lowercase letter, end with an
alphanumeric character, and have at least 2 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_identity_platform_inbound_saml_config#name GoogleIdentityPlatformInboundSamlConfig#name}

---

##### `SpConfig`<sup>Required</sup> <a name="SpConfig" id="@cdktn/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigConfig.property.spConfig"></a>

```go
SpConfig GoogleIdentityPlatformInboundSamlConfigSpConfig
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigSpConfig">GoogleIdentityPlatformInboundSamlConfigSpConfig</a>

sp_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_identity_platform_inbound_saml_config#sp_config GoogleIdentityPlatformInboundSamlConfig#sp_config}

---

##### `DeletionPolicy`<sup>Optional</sup> <a name="DeletionPolicy" id="@cdktn/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_identity_platform_inbound_saml_config#deletion_policy GoogleIdentityPlatformInboundSamlConfig#deletion_policy}

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktn/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigConfig.property.enabled"></a>

```go
Enabled interface{}
```

- *Type:* interface{}

If this config allows users to sign in with the provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_identity_platform_inbound_saml_config#enabled GoogleIdentityPlatformInboundSamlConfig#enabled}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_identity_platform_inbound_saml_config#id GoogleIdentityPlatformInboundSamlConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktn/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_identity_platform_inbound_saml_config#project GoogleIdentityPlatformInboundSamlConfig#project}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigConfig.property.timeouts"></a>

```go
Timeouts GoogleIdentityPlatformInboundSamlConfigTimeouts
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigTimeouts">GoogleIdentityPlatformInboundSamlConfigTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_identity_platform_inbound_saml_config#timeouts GoogleIdentityPlatformInboundSamlConfig#timeouts}

---

### GoogleIdentityPlatformInboundSamlConfigIdpConfig <a name="GoogleIdentityPlatformInboundSamlConfigIdpConfig" id="@cdktn/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigIdpConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigIdpConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googleidentityplatforminboundsamlconfig"

&googleidentityplatforminboundsamlconfig.GoogleIdentityPlatformInboundSamlConfigIdpConfig {
	IdpCertificates: interface{},
	IdpEntityId: *string,
	SsoUrl: *string,
	SignRequest: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigIdpConfig.property.idpCertificates">IdpCertificates</a></code> | <code>interface{}</code> | idp_certificates block. |
| <code><a href="#@cdktn/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigIdpConfig.property.idpEntityId">IdpEntityId</a></code> | <code>*string</code> | Unique identifier for all SAML entities. |
| <code><a href="#@cdktn/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigIdpConfig.property.ssoUrl">SsoUrl</a></code> | <code>*string</code> | URL to send Authentication request to. |
| <code><a href="#@cdktn/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigIdpConfig.property.signRequest">SignRequest</a></code> | <code>interface{}</code> | Indicates if outbounding SAMLRequest should be signed. |

---

##### `IdpCertificates`<sup>Required</sup> <a name="IdpCertificates" id="@cdktn/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigIdpConfig.property.idpCertificates"></a>

```go
IdpCertificates interface{}
```

- *Type:* interface{}

idp_certificates block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_identity_platform_inbound_saml_config#idp_certificates GoogleIdentityPlatformInboundSamlConfig#idp_certificates}

---

##### `IdpEntityId`<sup>Required</sup> <a name="IdpEntityId" id="@cdktn/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigIdpConfig.property.idpEntityId"></a>

```go
IdpEntityId *string
```

- *Type:* *string

Unique identifier for all SAML entities.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_identity_platform_inbound_saml_config#idp_entity_id GoogleIdentityPlatformInboundSamlConfig#idp_entity_id}

---

##### `SsoUrl`<sup>Required</sup> <a name="SsoUrl" id="@cdktn/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigIdpConfig.property.ssoUrl"></a>

```go
SsoUrl *string
```

- *Type:* *string

URL to send Authentication request to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_identity_platform_inbound_saml_config#sso_url GoogleIdentityPlatformInboundSamlConfig#sso_url}

---

##### `SignRequest`<sup>Optional</sup> <a name="SignRequest" id="@cdktn/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigIdpConfig.property.signRequest"></a>

```go
SignRequest interface{}
```

- *Type:* interface{}

Indicates if outbounding SAMLRequest should be signed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_identity_platform_inbound_saml_config#sign_request GoogleIdentityPlatformInboundSamlConfig#sign_request}

---

### GoogleIdentityPlatformInboundSamlConfigIdpConfigIdpCertificates <a name="GoogleIdentityPlatformInboundSamlConfigIdpConfigIdpCertificates" id="@cdktn/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigIdpConfigIdpCertificates"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigIdpConfigIdpCertificates.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googleidentityplatforminboundsamlconfig"

&googleidentityplatforminboundsamlconfig.GoogleIdentityPlatformInboundSamlConfigIdpConfigIdpCertificates {
	X509Certificate: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigIdpConfigIdpCertificates.property.x509Certificate">X509Certificate</a></code> | <code>*string</code> | The IdP's x509 certificate. |

---

##### `X509Certificate`<sup>Optional</sup> <a name="X509Certificate" id="@cdktn/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigIdpConfigIdpCertificates.property.x509Certificate"></a>

```go
X509Certificate *string
```

- *Type:* *string

The IdP's x509 certificate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_identity_platform_inbound_saml_config#x509_certificate GoogleIdentityPlatformInboundSamlConfig#x509_certificate}

---

### GoogleIdentityPlatformInboundSamlConfigSpConfig <a name="GoogleIdentityPlatformInboundSamlConfigSpConfig" id="@cdktn/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigSpConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigSpConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googleidentityplatforminboundsamlconfig"

&googleidentityplatforminboundsamlconfig.GoogleIdentityPlatformInboundSamlConfigSpConfig {
	CallbackUri: *string,
	SpEntityId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigSpConfig.property.callbackUri">CallbackUri</a></code> | <code>*string</code> | Callback URI where responses from IDP are handled. Must start with 'https://'. |
| <code><a href="#@cdktn/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigSpConfig.property.spEntityId">SpEntityId</a></code> | <code>*string</code> | Unique identifier for all SAML entities. |

---

##### `CallbackUri`<sup>Optional</sup> <a name="CallbackUri" id="@cdktn/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigSpConfig.property.callbackUri"></a>

```go
CallbackUri *string
```

- *Type:* *string

Callback URI where responses from IDP are handled. Must start with 'https://'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_identity_platform_inbound_saml_config#callback_uri GoogleIdentityPlatformInboundSamlConfig#callback_uri}

---

##### `SpEntityId`<sup>Optional</sup> <a name="SpEntityId" id="@cdktn/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigSpConfig.property.spEntityId"></a>

```go
SpEntityId *string
```

- *Type:* *string

Unique identifier for all SAML entities.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_identity_platform_inbound_saml_config#sp_entity_id GoogleIdentityPlatformInboundSamlConfig#sp_entity_id}

---

### GoogleIdentityPlatformInboundSamlConfigSpConfigSpCertificates <a name="GoogleIdentityPlatformInboundSamlConfigSpConfigSpCertificates" id="@cdktn/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigSpConfigSpCertificates"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigSpConfigSpCertificates.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googleidentityplatforminboundsamlconfig"

&googleidentityplatforminboundsamlconfig.GoogleIdentityPlatformInboundSamlConfigSpConfigSpCertificates {

}
```


### GoogleIdentityPlatformInboundSamlConfigTimeouts <a name="GoogleIdentityPlatformInboundSamlConfigTimeouts" id="@cdktn/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigTimeouts.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googleidentityplatforminboundsamlconfig"

&googleidentityplatforminboundsamlconfig.GoogleIdentityPlatformInboundSamlConfigTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_identity_platform_inbound_saml_config#create GoogleIdentityPlatformInboundSamlConfig#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_identity_platform_inbound_saml_config#delete GoogleIdentityPlatformInboundSamlConfig#delete}. |
| <code><a href="#@cdktn/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_identity_platform_inbound_saml_config#update GoogleIdentityPlatformInboundSamlConfig#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_identity_platform_inbound_saml_config#create GoogleIdentityPlatformInboundSamlConfig#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_identity_platform_inbound_saml_config#delete GoogleIdentityPlatformInboundSamlConfig#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_identity_platform_inbound_saml_config#update GoogleIdentityPlatformInboundSamlConfig#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleIdentityPlatformInboundSamlConfigIdpConfigIdpCertificatesList <a name="GoogleIdentityPlatformInboundSamlConfigIdpConfigIdpCertificatesList" id="@cdktn/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigIdpConfigIdpCertificatesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigIdpConfigIdpCertificatesList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googleidentityplatforminboundsamlconfig"

googleidentityplatforminboundsamlconfig.NewGoogleIdentityPlatformInboundSamlConfigIdpConfigIdpCertificatesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GoogleIdentityPlatformInboundSamlConfigIdpConfigIdpCertificatesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigIdpConfigIdpCertificatesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigIdpConfigIdpCertificatesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigIdpConfigIdpCertificatesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigIdpConfigIdpCertificatesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigIdpConfigIdpCertificatesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigIdpConfigIdpCertificatesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigIdpConfigIdpCertificatesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigIdpConfigIdpCertificatesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigIdpConfigIdpCertificatesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigIdpConfigIdpCertificatesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigIdpConfigIdpCertificatesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigIdpConfigIdpCertificatesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigIdpConfigIdpCertificatesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigIdpConfigIdpCertificatesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigIdpConfigIdpCertificatesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigIdpConfigIdpCertificatesList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigIdpConfigIdpCertificatesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigIdpConfigIdpCertificatesList.get"></a>

```go
func Get(index *f64) GoogleIdentityPlatformInboundSamlConfigIdpConfigIdpCertificatesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigIdpConfigIdpCertificatesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigIdpConfigIdpCertificatesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigIdpConfigIdpCertificatesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigIdpConfigIdpCertificatesList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigIdpConfigIdpCertificatesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigIdpConfigIdpCertificatesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigIdpConfigIdpCertificatesList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleIdentityPlatformInboundSamlConfigIdpConfigIdpCertificatesOutputReference <a name="GoogleIdentityPlatformInboundSamlConfigIdpConfigIdpCertificatesOutputReference" id="@cdktn/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigIdpConfigIdpCertificatesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigIdpConfigIdpCertificatesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googleidentityplatforminboundsamlconfig"

googleidentityplatforminboundsamlconfig.NewGoogleIdentityPlatformInboundSamlConfigIdpConfigIdpCertificatesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GoogleIdentityPlatformInboundSamlConfigIdpConfigIdpCertificatesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigIdpConfigIdpCertificatesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigIdpConfigIdpCertificatesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigIdpConfigIdpCertificatesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigIdpConfigIdpCertificatesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigIdpConfigIdpCertificatesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigIdpConfigIdpCertificatesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigIdpConfigIdpCertificatesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigIdpConfigIdpCertificatesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigIdpConfigIdpCertificatesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigIdpConfigIdpCertificatesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigIdpConfigIdpCertificatesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigIdpConfigIdpCertificatesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigIdpConfigIdpCertificatesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigIdpConfigIdpCertificatesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigIdpConfigIdpCertificatesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigIdpConfigIdpCertificatesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigIdpConfigIdpCertificatesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigIdpConfigIdpCertificatesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigIdpConfigIdpCertificatesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigIdpConfigIdpCertificatesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigIdpConfigIdpCertificatesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigIdpConfigIdpCertificatesOutputReference.resetX509Certificate">ResetX509Certificate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigIdpConfigIdpCertificatesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigIdpConfigIdpCertificatesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigIdpConfigIdpCertificatesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigIdpConfigIdpCertificatesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigIdpConfigIdpCertificatesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigIdpConfigIdpCertificatesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigIdpConfigIdpCertificatesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigIdpConfigIdpCertificatesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigIdpConfigIdpCertificatesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigIdpConfigIdpCertificatesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigIdpConfigIdpCertificatesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigIdpConfigIdpCertificatesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigIdpConfigIdpCertificatesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigIdpConfigIdpCertificatesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigIdpConfigIdpCertificatesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigIdpConfigIdpCertificatesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigIdpConfigIdpCertificatesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigIdpConfigIdpCertificatesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigIdpConfigIdpCertificatesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigIdpConfigIdpCertificatesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigIdpConfigIdpCertificatesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigIdpConfigIdpCertificatesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigIdpConfigIdpCertificatesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigIdpConfigIdpCertificatesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetX509Certificate` <a name="ResetX509Certificate" id="@cdktn/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigIdpConfigIdpCertificatesOutputReference.resetX509Certificate"></a>

```go
func ResetX509Certificate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigIdpConfigIdpCertificatesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigIdpConfigIdpCertificatesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigIdpConfigIdpCertificatesOutputReference.property.x509CertificateInput">X509CertificateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigIdpConfigIdpCertificatesOutputReference.property.x509Certificate">X509Certificate</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigIdpConfigIdpCertificatesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigIdpConfigIdpCertificatesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigIdpConfigIdpCertificatesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `X509CertificateInput`<sup>Optional</sup> <a name="X509CertificateInput" id="@cdktn/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigIdpConfigIdpCertificatesOutputReference.property.x509CertificateInput"></a>

```go
func X509CertificateInput() *string
```

- *Type:* *string

---

##### `X509Certificate`<sup>Required</sup> <a name="X509Certificate" id="@cdktn/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigIdpConfigIdpCertificatesOutputReference.property.x509Certificate"></a>

```go
func X509Certificate() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigIdpConfigIdpCertificatesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleIdentityPlatformInboundSamlConfigIdpConfigOutputReference <a name="GoogleIdentityPlatformInboundSamlConfigIdpConfigOutputReference" id="@cdktn/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigIdpConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigIdpConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googleidentityplatforminboundsamlconfig"

googleidentityplatforminboundsamlconfig.NewGoogleIdentityPlatformInboundSamlConfigIdpConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleIdentityPlatformInboundSamlConfigIdpConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigIdpConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigIdpConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigIdpConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigIdpConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigIdpConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigIdpConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigIdpConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigIdpConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigIdpConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigIdpConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigIdpConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigIdpConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigIdpConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigIdpConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigIdpConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigIdpConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigIdpConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigIdpConfigOutputReference.putIdpCertificates">PutIdpCertificates</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigIdpConfigOutputReference.resetSignRequest">ResetSignRequest</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigIdpConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigIdpConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigIdpConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigIdpConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigIdpConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigIdpConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigIdpConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigIdpConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigIdpConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigIdpConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigIdpConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigIdpConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigIdpConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigIdpConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigIdpConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigIdpConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigIdpConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigIdpConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigIdpConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigIdpConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigIdpConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigIdpConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigIdpConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigIdpConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutIdpCertificates` <a name="PutIdpCertificates" id="@cdktn/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigIdpConfigOutputReference.putIdpCertificates"></a>

```go
func PutIdpCertificates(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigIdpConfigOutputReference.putIdpCertificates.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetSignRequest` <a name="ResetSignRequest" id="@cdktn/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigIdpConfigOutputReference.resetSignRequest"></a>

```go
func ResetSignRequest()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigIdpConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigIdpConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigIdpConfigOutputReference.property.idpCertificates">IdpCertificates</a></code> | <code><a href="#@cdktn/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigIdpConfigIdpCertificatesList">GoogleIdentityPlatformInboundSamlConfigIdpConfigIdpCertificatesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigIdpConfigOutputReference.property.idpCertificatesInput">IdpCertificatesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigIdpConfigOutputReference.property.idpEntityIdInput">IdpEntityIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigIdpConfigOutputReference.property.signRequestInput">SignRequestInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigIdpConfigOutputReference.property.ssoUrlInput">SsoUrlInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigIdpConfigOutputReference.property.idpEntityId">IdpEntityId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigIdpConfigOutputReference.property.signRequest">SignRequest</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigIdpConfigOutputReference.property.ssoUrl">SsoUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigIdpConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigIdpConfig">GoogleIdentityPlatformInboundSamlConfigIdpConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigIdpConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigIdpConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `IdpCertificates`<sup>Required</sup> <a name="IdpCertificates" id="@cdktn/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigIdpConfigOutputReference.property.idpCertificates"></a>

```go
func IdpCertificates() GoogleIdentityPlatformInboundSamlConfigIdpConfigIdpCertificatesList
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigIdpConfigIdpCertificatesList">GoogleIdentityPlatformInboundSamlConfigIdpConfigIdpCertificatesList</a>

---

##### `IdpCertificatesInput`<sup>Optional</sup> <a name="IdpCertificatesInput" id="@cdktn/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigIdpConfigOutputReference.property.idpCertificatesInput"></a>

```go
func IdpCertificatesInput() interface{}
```

- *Type:* interface{}

---

##### `IdpEntityIdInput`<sup>Optional</sup> <a name="IdpEntityIdInput" id="@cdktn/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigIdpConfigOutputReference.property.idpEntityIdInput"></a>

```go
func IdpEntityIdInput() *string
```

- *Type:* *string

---

##### `SignRequestInput`<sup>Optional</sup> <a name="SignRequestInput" id="@cdktn/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigIdpConfigOutputReference.property.signRequestInput"></a>

```go
func SignRequestInput() interface{}
```

- *Type:* interface{}

---

##### `SsoUrlInput`<sup>Optional</sup> <a name="SsoUrlInput" id="@cdktn/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigIdpConfigOutputReference.property.ssoUrlInput"></a>

```go
func SsoUrlInput() *string
```

- *Type:* *string

---

##### `IdpEntityId`<sup>Required</sup> <a name="IdpEntityId" id="@cdktn/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigIdpConfigOutputReference.property.idpEntityId"></a>

```go
func IdpEntityId() *string
```

- *Type:* *string

---

##### `SignRequest`<sup>Required</sup> <a name="SignRequest" id="@cdktn/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigIdpConfigOutputReference.property.signRequest"></a>

```go
func SignRequest() interface{}
```

- *Type:* interface{}

---

##### `SsoUrl`<sup>Required</sup> <a name="SsoUrl" id="@cdktn/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigIdpConfigOutputReference.property.ssoUrl"></a>

```go
func SsoUrl() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigIdpConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleIdentityPlatformInboundSamlConfigIdpConfig
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigIdpConfig">GoogleIdentityPlatformInboundSamlConfigIdpConfig</a>

---


### GoogleIdentityPlatformInboundSamlConfigSpConfigOutputReference <a name="GoogleIdentityPlatformInboundSamlConfigSpConfigOutputReference" id="@cdktn/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigSpConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigSpConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googleidentityplatforminboundsamlconfig"

googleidentityplatforminboundsamlconfig.NewGoogleIdentityPlatformInboundSamlConfigSpConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleIdentityPlatformInboundSamlConfigSpConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigSpConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigSpConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigSpConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigSpConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigSpConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigSpConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigSpConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigSpConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigSpConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigSpConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigSpConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigSpConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigSpConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigSpConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigSpConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigSpConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigSpConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigSpConfigOutputReference.resetCallbackUri">ResetCallbackUri</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigSpConfigOutputReference.resetSpEntityId">ResetSpEntityId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigSpConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigSpConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigSpConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigSpConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigSpConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigSpConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigSpConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigSpConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigSpConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigSpConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigSpConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigSpConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigSpConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigSpConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigSpConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigSpConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigSpConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigSpConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigSpConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigSpConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigSpConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigSpConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigSpConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigSpConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCallbackUri` <a name="ResetCallbackUri" id="@cdktn/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigSpConfigOutputReference.resetCallbackUri"></a>

```go
func ResetCallbackUri()
```

##### `ResetSpEntityId` <a name="ResetSpEntityId" id="@cdktn/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigSpConfigOutputReference.resetSpEntityId"></a>

```go
func ResetSpEntityId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigSpConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigSpConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigSpConfigOutputReference.property.spCertificates">SpCertificates</a></code> | <code><a href="#@cdktn/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigSpConfigSpCertificatesList">GoogleIdentityPlatformInboundSamlConfigSpConfigSpCertificatesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigSpConfigOutputReference.property.callbackUriInput">CallbackUriInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigSpConfigOutputReference.property.spEntityIdInput">SpEntityIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigSpConfigOutputReference.property.callbackUri">CallbackUri</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigSpConfigOutputReference.property.spEntityId">SpEntityId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigSpConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigSpConfig">GoogleIdentityPlatformInboundSamlConfigSpConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigSpConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigSpConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `SpCertificates`<sup>Required</sup> <a name="SpCertificates" id="@cdktn/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigSpConfigOutputReference.property.spCertificates"></a>

```go
func SpCertificates() GoogleIdentityPlatformInboundSamlConfigSpConfigSpCertificatesList
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigSpConfigSpCertificatesList">GoogleIdentityPlatformInboundSamlConfigSpConfigSpCertificatesList</a>

---

##### `CallbackUriInput`<sup>Optional</sup> <a name="CallbackUriInput" id="@cdktn/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigSpConfigOutputReference.property.callbackUriInput"></a>

```go
func CallbackUriInput() *string
```

- *Type:* *string

---

##### `SpEntityIdInput`<sup>Optional</sup> <a name="SpEntityIdInput" id="@cdktn/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigSpConfigOutputReference.property.spEntityIdInput"></a>

```go
func SpEntityIdInput() *string
```

- *Type:* *string

---

##### `CallbackUri`<sup>Required</sup> <a name="CallbackUri" id="@cdktn/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigSpConfigOutputReference.property.callbackUri"></a>

```go
func CallbackUri() *string
```

- *Type:* *string

---

##### `SpEntityId`<sup>Required</sup> <a name="SpEntityId" id="@cdktn/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigSpConfigOutputReference.property.spEntityId"></a>

```go
func SpEntityId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigSpConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleIdentityPlatformInboundSamlConfigSpConfig
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigSpConfig">GoogleIdentityPlatformInboundSamlConfigSpConfig</a>

---


### GoogleIdentityPlatformInboundSamlConfigSpConfigSpCertificatesList <a name="GoogleIdentityPlatformInboundSamlConfigSpConfigSpCertificatesList" id="@cdktn/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigSpConfigSpCertificatesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigSpConfigSpCertificatesList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googleidentityplatforminboundsamlconfig"

googleidentityplatforminboundsamlconfig.NewGoogleIdentityPlatformInboundSamlConfigSpConfigSpCertificatesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GoogleIdentityPlatformInboundSamlConfigSpConfigSpCertificatesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigSpConfigSpCertificatesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigSpConfigSpCertificatesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigSpConfigSpCertificatesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigSpConfigSpCertificatesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigSpConfigSpCertificatesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigSpConfigSpCertificatesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigSpConfigSpCertificatesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigSpConfigSpCertificatesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigSpConfigSpCertificatesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigSpConfigSpCertificatesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigSpConfigSpCertificatesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigSpConfigSpCertificatesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigSpConfigSpCertificatesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigSpConfigSpCertificatesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigSpConfigSpCertificatesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigSpConfigSpCertificatesList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigSpConfigSpCertificatesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigSpConfigSpCertificatesList.get"></a>

```go
func Get(index *f64) GoogleIdentityPlatformInboundSamlConfigSpConfigSpCertificatesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigSpConfigSpCertificatesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigSpConfigSpCertificatesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigSpConfigSpCertificatesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigSpConfigSpCertificatesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigSpConfigSpCertificatesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### GoogleIdentityPlatformInboundSamlConfigSpConfigSpCertificatesOutputReference <a name="GoogleIdentityPlatformInboundSamlConfigSpConfigSpCertificatesOutputReference" id="@cdktn/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigSpConfigSpCertificatesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigSpConfigSpCertificatesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googleidentityplatforminboundsamlconfig"

googleidentityplatforminboundsamlconfig.NewGoogleIdentityPlatformInboundSamlConfigSpConfigSpCertificatesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GoogleIdentityPlatformInboundSamlConfigSpConfigSpCertificatesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigSpConfigSpCertificatesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigSpConfigSpCertificatesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigSpConfigSpCertificatesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigSpConfigSpCertificatesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigSpConfigSpCertificatesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigSpConfigSpCertificatesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigSpConfigSpCertificatesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigSpConfigSpCertificatesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigSpConfigSpCertificatesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigSpConfigSpCertificatesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigSpConfigSpCertificatesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigSpConfigSpCertificatesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigSpConfigSpCertificatesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigSpConfigSpCertificatesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigSpConfigSpCertificatesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigSpConfigSpCertificatesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigSpConfigSpCertificatesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigSpConfigSpCertificatesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigSpConfigSpCertificatesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigSpConfigSpCertificatesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigSpConfigSpCertificatesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigSpConfigSpCertificatesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigSpConfigSpCertificatesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigSpConfigSpCertificatesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigSpConfigSpCertificatesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigSpConfigSpCertificatesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigSpConfigSpCertificatesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigSpConfigSpCertificatesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigSpConfigSpCertificatesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigSpConfigSpCertificatesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigSpConfigSpCertificatesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigSpConfigSpCertificatesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigSpConfigSpCertificatesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigSpConfigSpCertificatesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigSpConfigSpCertificatesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigSpConfigSpCertificatesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigSpConfigSpCertificatesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigSpConfigSpCertificatesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigSpConfigSpCertificatesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigSpConfigSpCertificatesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigSpConfigSpCertificatesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigSpConfigSpCertificatesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigSpConfigSpCertificatesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigSpConfigSpCertificatesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigSpConfigSpCertificatesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigSpConfigSpCertificatesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigSpConfigSpCertificatesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigSpConfigSpCertificatesOutputReference.property.x509Certificate">X509Certificate</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigSpConfigSpCertificatesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigSpConfigSpCertificates">GoogleIdentityPlatformInboundSamlConfigSpConfigSpCertificates</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigSpConfigSpCertificatesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigSpConfigSpCertificatesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `X509Certificate`<sup>Required</sup> <a name="X509Certificate" id="@cdktn/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigSpConfigSpCertificatesOutputReference.property.x509Certificate"></a>

```go
func X509Certificate() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigSpConfigSpCertificatesOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleIdentityPlatformInboundSamlConfigSpConfigSpCertificates
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigSpConfigSpCertificates">GoogleIdentityPlatformInboundSamlConfigSpConfigSpCertificates</a>

---


### GoogleIdentityPlatformInboundSamlConfigTimeoutsOutputReference <a name="GoogleIdentityPlatformInboundSamlConfigTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googleidentityplatforminboundsamlconfig"

googleidentityplatforminboundsamlconfig.NewGoogleIdentityPlatformInboundSamlConfigTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleIdentityPlatformInboundSamlConfigTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleIdentityPlatformInboundSamlConfig.GoogleIdentityPlatformInboundSamlConfigTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



