# `googleIamWorkforcePoolProviderScimTenant` Submodule <a name="`googleIamWorkforcePoolProviderScimTenant` Submodule" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleIamWorkforcePoolProviderScimTenant <a name="GoogleIamWorkforcePoolProviderScimTenant" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenant"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_iam_workforce_pool_provider_scim_tenant google_iam_workforce_pool_provider_scim_tenant}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenant.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googleiamworkforcepoolproviderscimtenant"

googleiamworkforcepoolproviderscimtenant.NewGoogleIamWorkforcePoolProviderScimTenant(scope Construct, id *string, config GoogleIamWorkforcePoolProviderScimTenantConfig) GoogleIamWorkforcePoolProviderScimTenant
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenant.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenant.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenant.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenantConfig">GoogleIamWorkforcePoolProviderScimTenantConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenant.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenant.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenant.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenantConfig">GoogleIamWorkforcePoolProviderScimTenantConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenant.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenant.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenant.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenant.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenant.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenant.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenant.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenant.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenant.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenant.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenant.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenant.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenant.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenant.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenant.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenant.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenant.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenant.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenant.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenant.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenant.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenant.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenant.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenant.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenant.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenant.resetClaimMapping">ResetClaimMapping</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenant.resetDeletionPolicy">ResetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenant.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenant.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenant.resetHardDelete">ResetHardDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenant.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenant.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenant.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenant.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenant.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenant.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenant.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenant.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenant.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenant.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenant.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenant.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenant.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenant.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenant.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenant.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenant.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenant.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenant.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenant.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenant.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenant.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenant.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenant.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenant.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenant.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenant.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenant.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenant.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenant.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenant.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenant.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenant.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenant.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenant.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenant.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenant.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenant.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenant.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenant.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenant.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenant.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenant.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenant.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenant.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenant.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenant.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenant.putTimeouts"></a>

```go
func PutTimeouts(value GoogleIamWorkforcePoolProviderScimTenantTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenant.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenantTimeouts">GoogleIamWorkforcePoolProviderScimTenantTimeouts</a>

---

##### `ResetClaimMapping` <a name="ResetClaimMapping" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenant.resetClaimMapping"></a>

```go
func ResetClaimMapping()
```

##### `ResetDeletionPolicy` <a name="ResetDeletionPolicy" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenant.resetDeletionPolicy"></a>

```go
func ResetDeletionPolicy()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenant.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetDisplayName` <a name="ResetDisplayName" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenant.resetDisplayName"></a>

```go
func ResetDisplayName()
```

##### `ResetHardDelete` <a name="ResetHardDelete" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenant.resetHardDelete"></a>

```go
func ResetHardDelete()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenant.resetId"></a>

```go
func ResetId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenant.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenant.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenant.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenant.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenant.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a GoogleIamWorkforcePoolProviderScimTenant resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenant.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googleiamworkforcepoolproviderscimtenant"

googleiamworkforcepoolproviderscimtenant.GoogleIamWorkforcePoolProviderScimTenant_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenant.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenant.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googleiamworkforcepoolproviderscimtenant"

googleiamworkforcepoolproviderscimtenant.GoogleIamWorkforcePoolProviderScimTenant_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenant.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenant.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googleiamworkforcepoolproviderscimtenant"

googleiamworkforcepoolproviderscimtenant.GoogleIamWorkforcePoolProviderScimTenant_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenant.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenant.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googleiamworkforcepoolproviderscimtenant"

googleiamworkforcepoolproviderscimtenant.GoogleIamWorkforcePoolProviderScimTenant_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a GoogleIamWorkforcePoolProviderScimTenant resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenant.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenant.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the GoogleIamWorkforcePoolProviderScimTenant to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenant.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing GoogleIamWorkforcePoolProviderScimTenant that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_iam_workforce_pool_provider_scim_tenant#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenant.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the GoogleIamWorkforcePoolProviderScimTenant to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenant.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenant.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenant.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenant.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenant.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenant.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenant.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenant.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenant.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenant.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenant.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenant.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenant.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenant.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenant.property.baseUri">BaseUri</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenant.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenant.property.purgeTime">PurgeTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenant.property.serviceAgent">ServiceAgent</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenant.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenant.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenantTimeoutsOutputReference">GoogleIamWorkforcePoolProviderScimTenantTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenant.property.claimMappingInput">ClaimMappingInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenant.property.deletionPolicyInput">DeletionPolicyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenant.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenant.property.displayNameInput">DisplayNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenant.property.hardDeleteInput">HardDeleteInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenant.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenant.property.locationInput">LocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenant.property.providerIdInput">ProviderIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenant.property.scimTenantIdInput">ScimTenantIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenant.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenant.property.workforcePoolIdInput">WorkforcePoolIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenant.property.claimMapping">ClaimMapping</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenant.property.deletionPolicy">DeletionPolicy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenant.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenant.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenant.property.hardDelete">HardDelete</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenant.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenant.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenant.property.providerId">ProviderId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenant.property.scimTenantId">ScimTenantId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenant.property.workforcePoolId">WorkforcePoolId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenant.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenant.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenant.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenant.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenant.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenant.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenant.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenant.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenant.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenant.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenant.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenant.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenant.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenant.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `BaseUri`<sup>Required</sup> <a name="BaseUri" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenant.property.baseUri"></a>

```go
func BaseUri() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenant.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `PurgeTime`<sup>Required</sup> <a name="PurgeTime" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenant.property.purgeTime"></a>

```go
func PurgeTime() *string
```

- *Type:* *string

---

##### `ServiceAgent`<sup>Required</sup> <a name="ServiceAgent" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenant.property.serviceAgent"></a>

```go
func ServiceAgent() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenant.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenant.property.timeouts"></a>

```go
func Timeouts() GoogleIamWorkforcePoolProviderScimTenantTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenantTimeoutsOutputReference">GoogleIamWorkforcePoolProviderScimTenantTimeoutsOutputReference</a>

---

##### `ClaimMappingInput`<sup>Optional</sup> <a name="ClaimMappingInput" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenant.property.claimMappingInput"></a>

```go
func ClaimMappingInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `DeletionPolicyInput`<sup>Optional</sup> <a name="DeletionPolicyInput" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenant.property.deletionPolicyInput"></a>

```go
func DeletionPolicyInput() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenant.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenant.property.displayNameInput"></a>

```go
func DisplayNameInput() *string
```

- *Type:* *string

---

##### `HardDeleteInput`<sup>Optional</sup> <a name="HardDeleteInput" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenant.property.hardDeleteInput"></a>

```go
func HardDeleteInput() interface{}
```

- *Type:* interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenant.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenant.property.locationInput"></a>

```go
func LocationInput() *string
```

- *Type:* *string

---

##### `ProviderIdInput`<sup>Optional</sup> <a name="ProviderIdInput" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenant.property.providerIdInput"></a>

```go
func ProviderIdInput() *string
```

- *Type:* *string

---

##### `ScimTenantIdInput`<sup>Optional</sup> <a name="ScimTenantIdInput" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenant.property.scimTenantIdInput"></a>

```go
func ScimTenantIdInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenant.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `WorkforcePoolIdInput`<sup>Optional</sup> <a name="WorkforcePoolIdInput" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenant.property.workforcePoolIdInput"></a>

```go
func WorkforcePoolIdInput() *string
```

- *Type:* *string

---

##### `ClaimMapping`<sup>Required</sup> <a name="ClaimMapping" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenant.property.claimMapping"></a>

```go
func ClaimMapping() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `DeletionPolicy`<sup>Required</sup> <a name="DeletionPolicy" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenant.property.deletionPolicy"></a>

```go
func DeletionPolicy() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenant.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenant.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `HardDelete`<sup>Required</sup> <a name="HardDelete" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenant.property.hardDelete"></a>

```go
func HardDelete() interface{}
```

- *Type:* interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenant.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenant.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `ProviderId`<sup>Required</sup> <a name="ProviderId" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenant.property.providerId"></a>

```go
func ProviderId() *string
```

- *Type:* *string

---

##### `ScimTenantId`<sup>Required</sup> <a name="ScimTenantId" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenant.property.scimTenantId"></a>

```go
func ScimTenantId() *string
```

- *Type:* *string

---

##### `WorkforcePoolId`<sup>Required</sup> <a name="WorkforcePoolId" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenant.property.workforcePoolId"></a>

```go
func WorkforcePoolId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenant.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenant.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleIamWorkforcePoolProviderScimTenantConfig <a name="GoogleIamWorkforcePoolProviderScimTenantConfig" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenantConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenantConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googleiamworkforcepoolproviderscimtenant"

&googleiamworkforcepoolproviderscimtenant.GoogleIamWorkforcePoolProviderScimTenantConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	Location: *string,
	ProviderId: *string,
	ScimTenantId: *string,
	WorkforcePoolId: *string,
	ClaimMapping: *map[string]*string,
	DeletionPolicy: *string,
	Description: *string,
	DisplayName: *string,
	HardDelete: interface{},
	Id: *string,
	Timeouts: github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenantTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenantConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenantConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenantConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenantConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenantConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenantConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenantConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenantConfig.property.location">Location</a></code> | <code>*string</code> | The location for the resource. |
| <code><a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenantConfig.property.providerId">ProviderId</a></code> | <code>*string</code> | The ID of the provider. |
| <code><a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenantConfig.property.scimTenantId">ScimTenantId</a></code> | <code>*string</code> | The ID to use for the SCIM tenant, which becomes the final component of the resource name. |
| <code><a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenantConfig.property.workforcePoolId">WorkforcePoolId</a></code> | <code>*string</code> | The ID of the workforce pool. |
| <code><a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenantConfig.property.claimMapping">ClaimMapping</a></code> | <code>*map[string]*string</code> | Maps BYOID claims to SCIM claims. This is a required field for new SCIM Tenants being created. |
| <code><a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenantConfig.property.deletionPolicy">DeletionPolicy</a></code> | <code>*string</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenantConfig.property.description">Description</a></code> | <code>*string</code> | A user-specified description of the provider. Cannot exceed 256 characters. |
| <code><a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenantConfig.property.displayName">DisplayName</a></code> | <code>*string</code> | A user-specified display name for the scim tenant. Cannot exceed 32 characters. |
| <code><a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenantConfig.property.hardDelete">HardDelete</a></code> | <code>interface{}</code> | Deletes the SCIM tenant immediately. This operation cannot be undone. |
| <code><a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenantConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_iam_workforce_pool_provider_scim_tenant#id GoogleIamWorkforcePoolProviderScimTenant#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenantConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenantTimeouts">GoogleIamWorkforcePoolProviderScimTenantTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenantConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenantConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenantConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenantConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenantConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenantConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenantConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenantConfig.property.location"></a>

```go
Location *string
```

- *Type:* *string

The location for the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_iam_workforce_pool_provider_scim_tenant#location GoogleIamWorkforcePoolProviderScimTenant#location}

---

##### `ProviderId`<sup>Required</sup> <a name="ProviderId" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenantConfig.property.providerId"></a>

```go
ProviderId *string
```

- *Type:* *string

The ID of the provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_iam_workforce_pool_provider_scim_tenant#provider_id GoogleIamWorkforcePoolProviderScimTenant#provider_id}

---

##### `ScimTenantId`<sup>Required</sup> <a name="ScimTenantId" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenantConfig.property.scimTenantId"></a>

```go
ScimTenantId *string
```

- *Type:* *string

The ID to use for the SCIM tenant, which becomes the final component of the resource name.

This value must be 4-32 characters, and may contain the characters [a-z0-9-].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_iam_workforce_pool_provider_scim_tenant#scim_tenant_id GoogleIamWorkforcePoolProviderScimTenant#scim_tenant_id}

---

##### `WorkforcePoolId`<sup>Required</sup> <a name="WorkforcePoolId" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenantConfig.property.workforcePoolId"></a>

```go
WorkforcePoolId *string
```

- *Type:* *string

The ID of the workforce pool.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_iam_workforce_pool_provider_scim_tenant#workforce_pool_id GoogleIamWorkforcePoolProviderScimTenant#workforce_pool_id}

---

##### `ClaimMapping`<sup>Optional</sup> <a name="ClaimMapping" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenantConfig.property.claimMapping"></a>

```go
ClaimMapping *map[string]*string
```

- *Type:* *map[string]*string

Maps BYOID claims to SCIM claims. This is a required field for new SCIM Tenants being created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_iam_workforce_pool_provider_scim_tenant#claim_mapping GoogleIamWorkforcePoolProviderScimTenant#claim_mapping}

---

##### `DeletionPolicy`<sup>Optional</sup> <a name="DeletionPolicy" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenantConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_iam_workforce_pool_provider_scim_tenant#deletion_policy GoogleIamWorkforcePoolProviderScimTenant#deletion_policy}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenantConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

A user-specified description of the provider. Cannot exceed 256 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_iam_workforce_pool_provider_scim_tenant#description GoogleIamWorkforcePoolProviderScimTenant#description}

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenantConfig.property.displayName"></a>

```go
DisplayName *string
```

- *Type:* *string

A user-specified display name for the scim tenant. Cannot exceed 32 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_iam_workforce_pool_provider_scim_tenant#display_name GoogleIamWorkforcePoolProviderScimTenant#display_name}

---

##### `HardDelete`<sup>Optional</sup> <a name="HardDelete" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenantConfig.property.hardDelete"></a>

```go
HardDelete interface{}
```

- *Type:* interface{}

Deletes the SCIM tenant immediately. This operation cannot be undone.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_iam_workforce_pool_provider_scim_tenant#hard_delete GoogleIamWorkforcePoolProviderScimTenant#hard_delete}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenantConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_iam_workforce_pool_provider_scim_tenant#id GoogleIamWorkforcePoolProviderScimTenant#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenantConfig.property.timeouts"></a>

```go
Timeouts GoogleIamWorkforcePoolProviderScimTenantTimeouts
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenantTimeouts">GoogleIamWorkforcePoolProviderScimTenantTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_iam_workforce_pool_provider_scim_tenant#timeouts GoogleIamWorkforcePoolProviderScimTenant#timeouts}

---

### GoogleIamWorkforcePoolProviderScimTenantTimeouts <a name="GoogleIamWorkforcePoolProviderScimTenantTimeouts" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenantTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenantTimeouts.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googleiamworkforcepoolproviderscimtenant"

&googleiamworkforcepoolproviderscimtenant.GoogleIamWorkforcePoolProviderScimTenantTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenantTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_iam_workforce_pool_provider_scim_tenant#create GoogleIamWorkforcePoolProviderScimTenant#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenantTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_iam_workforce_pool_provider_scim_tenant#delete GoogleIamWorkforcePoolProviderScimTenant#delete}. |
| <code><a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenantTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_iam_workforce_pool_provider_scim_tenant#update GoogleIamWorkforcePoolProviderScimTenant#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenantTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_iam_workforce_pool_provider_scim_tenant#create GoogleIamWorkforcePoolProviderScimTenant#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenantTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_iam_workforce_pool_provider_scim_tenant#delete GoogleIamWorkforcePoolProviderScimTenant#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenantTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_iam_workforce_pool_provider_scim_tenant#update GoogleIamWorkforcePoolProviderScimTenant#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleIamWorkforcePoolProviderScimTenantTimeoutsOutputReference <a name="GoogleIamWorkforcePoolProviderScimTenantTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenantTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenantTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googleiamworkforcepoolproviderscimtenant"

googleiamworkforcepoolproviderscimtenant.NewGoogleIamWorkforcePoolProviderScimTenantTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleIamWorkforcePoolProviderScimTenantTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenantTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenantTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenantTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenantTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenantTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenantTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenantTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenantTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenantTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenantTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenantTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenantTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenantTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenantTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenantTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenantTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenantTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenantTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenantTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenantTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenantTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenantTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenantTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenantTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenantTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenantTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenantTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenantTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenantTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenantTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenantTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenantTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenantTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenantTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenantTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenantTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenantTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenantTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenantTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenantTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenantTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenantTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenantTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenantTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenantTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenantTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenantTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenantTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenantTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenantTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenantTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenantTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenantTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenantTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenantTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenantTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenantTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenantTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenantTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenantTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenantTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenantTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenantTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenantTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleIamWorkforcePoolProviderScimTenant.GoogleIamWorkforcePoolProviderScimTenantTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



