# `googleOracleDatabaseExascaleDbStorageVault` Submodule <a name="`googleOracleDatabaseExascaleDbStorageVault` Submodule" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleOracleDatabaseExascaleDbStorageVault <a name="GoogleOracleDatabaseExascaleDbStorageVault" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_oracle_database_exascale_db_storage_vault google_oracle_database_exascale_db_storage_vault}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googleoracledatabaseexascaledbstoragevault"

googleoracledatabaseexascaledbstoragevault.NewGoogleOracleDatabaseExascaleDbStorageVault(scope Construct, id *string, config GoogleOracleDatabaseExascaleDbStorageVaultConfig) GoogleOracleDatabaseExascaleDbStorageVault
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultConfig">GoogleOracleDatabaseExascaleDbStorageVaultConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultConfig">GoogleOracleDatabaseExascaleDbStorageVaultConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.putProperties">PutProperties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.resetDeletionPolicy">ResetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.resetDeletionProtection">ResetDeletionProtection</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.resetGcpOracleZone">ResetGcpOracleZone</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutProperties` <a name="PutProperties" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.putProperties"></a>

```go
func PutProperties(value GoogleOracleDatabaseExascaleDbStorageVaultProperties)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.putProperties.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultProperties">GoogleOracleDatabaseExascaleDbStorageVaultProperties</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.putTimeouts"></a>

```go
func PutTimeouts(value GoogleOracleDatabaseExascaleDbStorageVaultTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultTimeouts">GoogleOracleDatabaseExascaleDbStorageVaultTimeouts</a>

---

##### `ResetDeletionPolicy` <a name="ResetDeletionPolicy" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.resetDeletionPolicy"></a>

```go
func ResetDeletionPolicy()
```

##### `ResetDeletionProtection` <a name="ResetDeletionProtection" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.resetDeletionProtection"></a>

```go
func ResetDeletionProtection()
```

##### `ResetGcpOracleZone` <a name="ResetGcpOracleZone" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.resetGcpOracleZone"></a>

```go
func ResetGcpOracleZone()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.resetId"></a>

```go
func ResetId()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.resetLabels"></a>

```go
func ResetLabels()
```

##### `ResetProject` <a name="ResetProject" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.resetProject"></a>

```go
func ResetProject()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a GoogleOracleDatabaseExascaleDbStorageVault resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googleoracledatabaseexascaledbstoragevault"

googleoracledatabaseexascaledbstoragevault.GoogleOracleDatabaseExascaleDbStorageVault_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googleoracledatabaseexascaledbstoragevault"

googleoracledatabaseexascaledbstoragevault.GoogleOracleDatabaseExascaleDbStorageVault_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googleoracledatabaseexascaledbstoragevault"

googleoracledatabaseexascaledbstoragevault.GoogleOracleDatabaseExascaleDbStorageVault_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googleoracledatabaseexascaledbstoragevault"

googleoracledatabaseexascaledbstoragevault.GoogleOracleDatabaseExascaleDbStorageVault_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a GoogleOracleDatabaseExascaleDbStorageVault resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the GoogleOracleDatabaseExascaleDbStorageVault to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing GoogleOracleDatabaseExascaleDbStorageVault that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_oracle_database_exascale_db_storage_vault#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the GoogleOracleDatabaseExascaleDbStorageVault to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.property.createTime">CreateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.property.effectiveLabels">EffectiveLabels</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.property.entitlementId">EntitlementId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.property.properties">Properties</a></code> | <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesOutputReference">GoogleOracleDatabaseExascaleDbStorageVaultPropertiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.property.terraformLabels">TerraformLabels</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultTimeoutsOutputReference">GoogleOracleDatabaseExascaleDbStorageVaultTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.property.deletionPolicyInput">DeletionPolicyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.property.deletionProtectionInput">DeletionProtectionInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.property.displayNameInput">DisplayNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.property.exascaleDbStorageVaultIdInput">ExascaleDbStorageVaultIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.property.gcpOracleZoneInput">GcpOracleZoneInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.property.labelsInput">LabelsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.property.locationInput">LocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.property.propertiesInput">PropertiesInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultProperties">GoogleOracleDatabaseExascaleDbStorageVaultProperties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.property.deletionPolicy">DeletionPolicy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.property.deletionProtection">DeletionProtection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.property.exascaleDbStorageVaultId">ExascaleDbStorageVaultId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.property.gcpOracleZone">GcpOracleZone</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.property.labels">Labels</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.property.project">Project</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.property.createTime"></a>

```go
func CreateTime() *string
```

- *Type:* *string

---

##### `EffectiveLabels`<sup>Required</sup> <a name="EffectiveLabels" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.property.effectiveLabels"></a>

```go
func EffectiveLabels() StringMap
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.StringMap

---

##### `EntitlementId`<sup>Required</sup> <a name="EntitlementId" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.property.entitlementId"></a>

```go
func EntitlementId() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Properties`<sup>Required</sup> <a name="Properties" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.property.properties"></a>

```go
func Properties() GoogleOracleDatabaseExascaleDbStorageVaultPropertiesOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesOutputReference">GoogleOracleDatabaseExascaleDbStorageVaultPropertiesOutputReference</a>

---

##### `TerraformLabels`<sup>Required</sup> <a name="TerraformLabels" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.property.terraformLabels"></a>

```go
func TerraformLabels() StringMap
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.StringMap

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.property.timeouts"></a>

```go
func Timeouts() GoogleOracleDatabaseExascaleDbStorageVaultTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultTimeoutsOutputReference">GoogleOracleDatabaseExascaleDbStorageVaultTimeoutsOutputReference</a>

---

##### `DeletionPolicyInput`<sup>Optional</sup> <a name="DeletionPolicyInput" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.property.deletionPolicyInput"></a>

```go
func DeletionPolicyInput() *string
```

- *Type:* *string

---

##### `DeletionProtectionInput`<sup>Optional</sup> <a name="DeletionProtectionInput" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.property.deletionProtectionInput"></a>

```go
func DeletionProtectionInput() interface{}
```

- *Type:* interface{}

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.property.displayNameInput"></a>

```go
func DisplayNameInput() *string
```

- *Type:* *string

---

##### `ExascaleDbStorageVaultIdInput`<sup>Optional</sup> <a name="ExascaleDbStorageVaultIdInput" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.property.exascaleDbStorageVaultIdInput"></a>

```go
func ExascaleDbStorageVaultIdInput() *string
```

- *Type:* *string

---

##### `GcpOracleZoneInput`<sup>Optional</sup> <a name="GcpOracleZoneInput" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.property.gcpOracleZoneInput"></a>

```go
func GcpOracleZoneInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.property.labelsInput"></a>

```go
func LabelsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.property.locationInput"></a>

```go
func LocationInput() *string
```

- *Type:* *string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `PropertiesInput`<sup>Optional</sup> <a name="PropertiesInput" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.property.propertiesInput"></a>

```go
func PropertiesInput() GoogleOracleDatabaseExascaleDbStorageVaultProperties
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultProperties">GoogleOracleDatabaseExascaleDbStorageVaultProperties</a>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `DeletionPolicy`<sup>Required</sup> <a name="DeletionPolicy" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.property.deletionPolicy"></a>

```go
func DeletionPolicy() *string
```

- *Type:* *string

---

##### `DeletionProtection`<sup>Required</sup> <a name="DeletionProtection" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.property.deletionProtection"></a>

```go
func DeletionProtection() interface{}
```

- *Type:* interface{}

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `ExascaleDbStorageVaultId`<sup>Required</sup> <a name="ExascaleDbStorageVaultId" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.property.exascaleDbStorageVaultId"></a>

```go
func ExascaleDbStorageVaultId() *string
```

- *Type:* *string

---

##### `GcpOracleZone`<sup>Required</sup> <a name="GcpOracleZone" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.property.gcpOracleZone"></a>

```go
func GcpOracleZone() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.property.labels"></a>

```go
func Labels() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleOracleDatabaseExascaleDbStorageVaultConfig <a name="GoogleOracleDatabaseExascaleDbStorageVaultConfig" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googleoracledatabaseexascaledbstoragevault"

&googleoracledatabaseexascaledbstoragevault.GoogleOracleDatabaseExascaleDbStorageVaultConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	DisplayName: *string,
	ExascaleDbStorageVaultId: *string,
	Location: *string,
	Properties: github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultProperties,
	DeletionPolicy: *string,
	DeletionProtection: interface{},
	GcpOracleZone: *string,
	Id: *string,
	Labels: *map[string]*string,
	Project: *string,
	Timeouts: github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultConfig.property.displayName">DisplayName</a></code> | <code>*string</code> | The display name for the ExascaleDbStorageVault. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultConfig.property.exascaleDbStorageVaultId">ExascaleDbStorageVaultId</a></code> | <code>*string</code> | The ID of the ExascaleDbStorageVault to create. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultConfig.property.location">Location</a></code> | <code>*string</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultConfig.property.properties">Properties</a></code> | <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultProperties">GoogleOracleDatabaseExascaleDbStorageVaultProperties</a></code> | properties block. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultConfig.property.deletionPolicy">DeletionPolicy</a></code> | <code>*string</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultConfig.property.deletionProtection">DeletionProtection</a></code> | <code>interface{}</code> | Whether or not to allow Terraform to destroy the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultConfig.property.gcpOracleZone">GcpOracleZone</a></code> | <code>*string</code> | The GCP Oracle zone where Oracle ExascaleDbStorageVault is hosted. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_oracle_database_exascale_db_storage_vault#id GoogleOracleDatabaseExascaleDbStorageVault#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultConfig.property.labels">Labels</a></code> | <code>*map[string]*string</code> | The labels or tags associated with the ExascaleDbStorageVault. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_oracle_database_exascale_db_storage_vault#project GoogleOracleDatabaseExascaleDbStorageVault#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultTimeouts">GoogleOracleDatabaseExascaleDbStorageVaultTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultConfig.property.displayName"></a>

```go
DisplayName *string
```

- *Type:* *string

The display name for the ExascaleDbStorageVault.

The name does not have to
be unique within your project. The name must be 1-255 characters long and
can only contain alphanumeric characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_oracle_database_exascale_db_storage_vault#display_name GoogleOracleDatabaseExascaleDbStorageVault#display_name}

---

##### `ExascaleDbStorageVaultId`<sup>Required</sup> <a name="ExascaleDbStorageVaultId" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultConfig.property.exascaleDbStorageVaultId"></a>

```go
ExascaleDbStorageVaultId *string
```

- *Type:* *string

The ID of the ExascaleDbStorageVault to create.

This value is
restricted to (^[a-z](%5Ba-z0-9-%5D%7B0,61%7D%5Ba-z0-9%5D)?$) and must be a maximum of
63 characters in length. The value must start with a letter and end with a
letter or a number.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_oracle_database_exascale_db_storage_vault#exascale_db_storage_vault_id GoogleOracleDatabaseExascaleDbStorageVault#exascale_db_storage_vault_id}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultConfig.property.location"></a>

```go
Location *string
```

- *Type:* *string

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_oracle_database_exascale_db_storage_vault#location GoogleOracleDatabaseExascaleDbStorageVault#location}

---

##### `Properties`<sup>Required</sup> <a name="Properties" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultConfig.property.properties"></a>

```go
Properties GoogleOracleDatabaseExascaleDbStorageVaultProperties
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultProperties">GoogleOracleDatabaseExascaleDbStorageVaultProperties</a>

properties block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_oracle_database_exascale_db_storage_vault#properties GoogleOracleDatabaseExascaleDbStorageVault#properties}

---

##### `DeletionPolicy`<sup>Optional</sup> <a name="DeletionPolicy" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_oracle_database_exascale_db_storage_vault#deletion_policy GoogleOracleDatabaseExascaleDbStorageVault#deletion_policy}

---

##### `DeletionProtection`<sup>Optional</sup> <a name="DeletionProtection" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultConfig.property.deletionProtection"></a>

```go
DeletionProtection interface{}
```

- *Type:* interface{}

Whether or not to allow Terraform to destroy the instance.

Unless this field is set to false in Terraform state, a terraform destroy or terraform apply that would delete the instance will fail.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_oracle_database_exascale_db_storage_vault#deletion_protection GoogleOracleDatabaseExascaleDbStorageVault#deletion_protection}

---

##### `GcpOracleZone`<sup>Optional</sup> <a name="GcpOracleZone" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultConfig.property.gcpOracleZone"></a>

```go
GcpOracleZone *string
```

- *Type:* *string

The GCP Oracle zone where Oracle ExascaleDbStorageVault is hosted.

Example: us-east4-b-r2.
If not specified, the system will pick a zone based on availability.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_oracle_database_exascale_db_storage_vault#gcp_oracle_zone GoogleOracleDatabaseExascaleDbStorageVault#gcp_oracle_zone}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_oracle_database_exascale_db_storage_vault#id GoogleOracleDatabaseExascaleDbStorageVault#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultConfig.property.labels"></a>

```go
Labels *map[string]*string
```

- *Type:* *map[string]*string

The labels or tags associated with the ExascaleDbStorageVault.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_oracle_database_exascale_db_storage_vault#labels GoogleOracleDatabaseExascaleDbStorageVault#labels}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_oracle_database_exascale_db_storage_vault#project GoogleOracleDatabaseExascaleDbStorageVault#project}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultConfig.property.timeouts"></a>

```go
Timeouts GoogleOracleDatabaseExascaleDbStorageVaultTimeouts
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultTimeouts">GoogleOracleDatabaseExascaleDbStorageVaultTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_oracle_database_exascale_db_storage_vault#timeouts GoogleOracleDatabaseExascaleDbStorageVault#timeouts}

---

### GoogleOracleDatabaseExascaleDbStorageVaultProperties <a name="GoogleOracleDatabaseExascaleDbStorageVaultProperties" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultProperties"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultProperties.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googleoracledatabaseexascaledbstoragevault"

&googleoracledatabaseexascaledbstoragevault.GoogleOracleDatabaseExascaleDbStorageVaultProperties {
	ExascaleDbStorageDetails: github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetails,
	AdditionalFlashCachePercent: *f64,
	TimeZone: github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesTimeZone,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultProperties.property.exascaleDbStorageDetails">ExascaleDbStorageDetails</a></code> | <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetails">GoogleOracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetails</a></code> | exascale_db_storage_details block. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultProperties.property.additionalFlashCachePercent">AdditionalFlashCachePercent</a></code> | <code>*f64</code> | The size of additional flash cache in percentage of high capacity database storage. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultProperties.property.timeZone">TimeZone</a></code> | <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesTimeZone">GoogleOracleDatabaseExascaleDbStorageVaultPropertiesTimeZone</a></code> | time_zone block. |

---

##### `ExascaleDbStorageDetails`<sup>Required</sup> <a name="ExascaleDbStorageDetails" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultProperties.property.exascaleDbStorageDetails"></a>

```go
ExascaleDbStorageDetails GoogleOracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetails
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetails">GoogleOracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetails</a>

exascale_db_storage_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_oracle_database_exascale_db_storage_vault#exascale_db_storage_details GoogleOracleDatabaseExascaleDbStorageVault#exascale_db_storage_details}

---

##### `AdditionalFlashCachePercent`<sup>Optional</sup> <a name="AdditionalFlashCachePercent" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultProperties.property.additionalFlashCachePercent"></a>

```go
AdditionalFlashCachePercent *f64
```

- *Type:* *f64

The size of additional flash cache in percentage of high capacity database storage.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_oracle_database_exascale_db_storage_vault#additional_flash_cache_percent GoogleOracleDatabaseExascaleDbStorageVault#additional_flash_cache_percent}

---

##### `TimeZone`<sup>Optional</sup> <a name="TimeZone" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultProperties.property.timeZone"></a>

```go
TimeZone GoogleOracleDatabaseExascaleDbStorageVaultPropertiesTimeZone
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesTimeZone">GoogleOracleDatabaseExascaleDbStorageVaultPropertiesTimeZone</a>

time_zone block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_oracle_database_exascale_db_storage_vault#time_zone GoogleOracleDatabaseExascaleDbStorageVault#time_zone}

---

### GoogleOracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetails <a name="GoogleOracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetails" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetails"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetails.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googleoracledatabaseexascaledbstoragevault"

&googleoracledatabaseexascaledbstoragevault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetails {
	TotalSizeGbs: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetails.property.totalSizeGbs">TotalSizeGbs</a></code> | <code>*f64</code> | The total storage allocation for the ExascaleDbStorageVault, in gigabytes (GB). |

---

##### `TotalSizeGbs`<sup>Required</sup> <a name="TotalSizeGbs" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetails.property.totalSizeGbs"></a>

```go
TotalSizeGbs *f64
```

- *Type:* *f64

The total storage allocation for the ExascaleDbStorageVault, in gigabytes (GB).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_oracle_database_exascale_db_storage_vault#total_size_gbs GoogleOracleDatabaseExascaleDbStorageVault#total_size_gbs}

---

### GoogleOracleDatabaseExascaleDbStorageVaultPropertiesTimeZone <a name="GoogleOracleDatabaseExascaleDbStorageVaultPropertiesTimeZone" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesTimeZone"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesTimeZone.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googleoracledatabaseexascaledbstoragevault"

&googleoracledatabaseexascaledbstoragevault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesTimeZone {
	Id: *string,
	Version: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesTimeZone.property.id">Id</a></code> | <code>*string</code> | IANA Time Zone Database time zone. For example "America/New_York". |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesTimeZone.property.version">Version</a></code> | <code>*string</code> | IANA Time Zone Database version number. For example "2019a". |

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesTimeZone.property.id"></a>

```go
Id *string
```

- *Type:* *string

IANA Time Zone Database time zone. For example "America/New_York".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_oracle_database_exascale_db_storage_vault#id GoogleOracleDatabaseExascaleDbStorageVault#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Version`<sup>Optional</sup> <a name="Version" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesTimeZone.property.version"></a>

```go
Version *string
```

- *Type:* *string

IANA Time Zone Database version number. For example "2019a".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_oracle_database_exascale_db_storage_vault#version GoogleOracleDatabaseExascaleDbStorageVault#version}

---

### GoogleOracleDatabaseExascaleDbStorageVaultTimeouts <a name="GoogleOracleDatabaseExascaleDbStorageVaultTimeouts" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultTimeouts.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googleoracledatabaseexascaledbstoragevault"

&googleoracledatabaseexascaledbstoragevault.GoogleOracleDatabaseExascaleDbStorageVaultTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_oracle_database_exascale_db_storage_vault#create GoogleOracleDatabaseExascaleDbStorageVault#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_oracle_database_exascale_db_storage_vault#delete GoogleOracleDatabaseExascaleDbStorageVault#delete}. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_oracle_database_exascale_db_storage_vault#update GoogleOracleDatabaseExascaleDbStorageVault#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_oracle_database_exascale_db_storage_vault#create GoogleOracleDatabaseExascaleDbStorageVault#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_oracle_database_exascale_db_storage_vault#delete GoogleOracleDatabaseExascaleDbStorageVault#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_oracle_database_exascale_db_storage_vault#update GoogleOracleDatabaseExascaleDbStorageVault#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleOracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetailsOutputReference <a name="GoogleOracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetailsOutputReference" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetailsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googleoracledatabaseexascaledbstoragevault"

googleoracledatabaseexascaledbstoragevault.NewGoogleOracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetailsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleOracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetailsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetailsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetailsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetailsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetailsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetailsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetailsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetailsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetailsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetailsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetailsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetailsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetailsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetailsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetailsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetailsOutputReference.property.availableSizeGbs">AvailableSizeGbs</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetailsOutputReference.property.totalSizeGbsInput">TotalSizeGbsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetailsOutputReference.property.totalSizeGbs">TotalSizeGbs</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetails">GoogleOracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetailsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetailsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AvailableSizeGbs`<sup>Required</sup> <a name="AvailableSizeGbs" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetailsOutputReference.property.availableSizeGbs"></a>

```go
func AvailableSizeGbs() *f64
```

- *Type:* *f64

---

##### `TotalSizeGbsInput`<sup>Optional</sup> <a name="TotalSizeGbsInput" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetailsOutputReference.property.totalSizeGbsInput"></a>

```go
func TotalSizeGbsInput() *f64
```

- *Type:* *f64

---

##### `TotalSizeGbs`<sup>Required</sup> <a name="TotalSizeGbs" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetailsOutputReference.property.totalSizeGbs"></a>

```go
func TotalSizeGbs() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetailsOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleOracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetails
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetails">GoogleOracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetails</a>

---


### GoogleOracleDatabaseExascaleDbStorageVaultPropertiesOutputReference <a name="GoogleOracleDatabaseExascaleDbStorageVaultPropertiesOutputReference" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googleoracledatabaseexascaledbstoragevault"

googleoracledatabaseexascaledbstoragevault.NewGoogleOracleDatabaseExascaleDbStorageVaultPropertiesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleOracleDatabaseExascaleDbStorageVaultPropertiesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.putExascaleDbStorageDetails">PutExascaleDbStorageDetails</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.putTimeZone">PutTimeZone</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.resetAdditionalFlashCachePercent">ResetAdditionalFlashCachePercent</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.resetTimeZone">ResetTimeZone</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutExascaleDbStorageDetails` <a name="PutExascaleDbStorageDetails" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.putExascaleDbStorageDetails"></a>

```go
func PutExascaleDbStorageDetails(value GoogleOracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetails)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.putExascaleDbStorageDetails.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetails">GoogleOracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetails</a>

---

##### `PutTimeZone` <a name="PutTimeZone" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.putTimeZone"></a>

```go
func PutTimeZone(value GoogleOracleDatabaseExascaleDbStorageVaultPropertiesTimeZone)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.putTimeZone.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesTimeZone">GoogleOracleDatabaseExascaleDbStorageVaultPropertiesTimeZone</a>

---

##### `ResetAdditionalFlashCachePercent` <a name="ResetAdditionalFlashCachePercent" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.resetAdditionalFlashCachePercent"></a>

```go
func ResetAdditionalFlashCachePercent()
```

##### `ResetTimeZone` <a name="ResetTimeZone" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.resetTimeZone"></a>

```go
func ResetTimeZone()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.property.attachedShapeAttributes">AttachedShapeAttributes</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.property.availableShapeAttributes">AvailableShapeAttributes</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.property.exascaleDbStorageDetails">ExascaleDbStorageDetails</a></code> | <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetailsOutputReference">GoogleOracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.property.ocid">Ocid</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.property.ociUri">OciUri</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.property.timeZone">TimeZone</a></code> | <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneOutputReference">GoogleOracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.property.vmClusterCount">VmClusterCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.property.vmClusterIds">VmClusterIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.property.additionalFlashCachePercentInput">AdditionalFlashCachePercentInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.property.exascaleDbStorageDetailsInput">ExascaleDbStorageDetailsInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetails">GoogleOracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetails</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.property.timeZoneInput">TimeZoneInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesTimeZone">GoogleOracleDatabaseExascaleDbStorageVaultPropertiesTimeZone</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.property.additionalFlashCachePercent">AdditionalFlashCachePercent</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultProperties">GoogleOracleDatabaseExascaleDbStorageVaultProperties</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AttachedShapeAttributes`<sup>Required</sup> <a name="AttachedShapeAttributes" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.property.attachedShapeAttributes"></a>

```go
func AttachedShapeAttributes() *[]*string
```

- *Type:* *[]*string

---

##### `AvailableShapeAttributes`<sup>Required</sup> <a name="AvailableShapeAttributes" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.property.availableShapeAttributes"></a>

```go
func AvailableShapeAttributes() *[]*string
```

- *Type:* *[]*string

---

##### `ExascaleDbStorageDetails`<sup>Required</sup> <a name="ExascaleDbStorageDetails" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.property.exascaleDbStorageDetails"></a>

```go
func ExascaleDbStorageDetails() GoogleOracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetailsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetailsOutputReference">GoogleOracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetailsOutputReference</a>

---

##### `Ocid`<sup>Required</sup> <a name="Ocid" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.property.ocid"></a>

```go
func Ocid() *string
```

- *Type:* *string

---

##### `OciUri`<sup>Required</sup> <a name="OciUri" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.property.ociUri"></a>

```go
func OciUri() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `TimeZone`<sup>Required</sup> <a name="TimeZone" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.property.timeZone"></a>

```go
func TimeZone() GoogleOracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneOutputReference">GoogleOracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneOutputReference</a>

---

##### `VmClusterCount`<sup>Required</sup> <a name="VmClusterCount" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.property.vmClusterCount"></a>

```go
func VmClusterCount() *f64
```

- *Type:* *f64

---

##### `VmClusterIds`<sup>Required</sup> <a name="VmClusterIds" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.property.vmClusterIds"></a>

```go
func VmClusterIds() *[]*string
```

- *Type:* *[]*string

---

##### `AdditionalFlashCachePercentInput`<sup>Optional</sup> <a name="AdditionalFlashCachePercentInput" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.property.additionalFlashCachePercentInput"></a>

```go
func AdditionalFlashCachePercentInput() *f64
```

- *Type:* *f64

---

##### `ExascaleDbStorageDetailsInput`<sup>Optional</sup> <a name="ExascaleDbStorageDetailsInput" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.property.exascaleDbStorageDetailsInput"></a>

```go
func ExascaleDbStorageDetailsInput() GoogleOracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetails
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetails">GoogleOracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetails</a>

---

##### `TimeZoneInput`<sup>Optional</sup> <a name="TimeZoneInput" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.property.timeZoneInput"></a>

```go
func TimeZoneInput() GoogleOracleDatabaseExascaleDbStorageVaultPropertiesTimeZone
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesTimeZone">GoogleOracleDatabaseExascaleDbStorageVaultPropertiesTimeZone</a>

---

##### `AdditionalFlashCachePercent`<sup>Required</sup> <a name="AdditionalFlashCachePercent" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.property.additionalFlashCachePercent"></a>

```go
func AdditionalFlashCachePercent() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleOracleDatabaseExascaleDbStorageVaultProperties
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultProperties">GoogleOracleDatabaseExascaleDbStorageVaultProperties</a>

---


### GoogleOracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneOutputReference <a name="GoogleOracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneOutputReference" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googleoracledatabaseexascaledbstoragevault"

googleoracledatabaseexascaledbstoragevault.NewGoogleOracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleOracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneOutputReference.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneOutputReference.resetVersion">ResetVersion</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetId` <a name="ResetId" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneOutputReference.resetId"></a>

```go
func ResetId()
```

##### `ResetVersion` <a name="ResetVersion" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneOutputReference.resetVersion"></a>

```go
func ResetVersion()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneOutputReference.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneOutputReference.property.versionInput">VersionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneOutputReference.property.version">Version</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesTimeZone">GoogleOracleDatabaseExascaleDbStorageVaultPropertiesTimeZone</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneOutputReference.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `VersionInput`<sup>Optional</sup> <a name="VersionInput" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneOutputReference.property.versionInput"></a>

```go
func VersionInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneOutputReference.property.version"></a>

```go
func Version() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleOracleDatabaseExascaleDbStorageVaultPropertiesTimeZone
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesTimeZone">GoogleOracleDatabaseExascaleDbStorageVaultPropertiesTimeZone</a>

---


### GoogleOracleDatabaseExascaleDbStorageVaultTimeoutsOutputReference <a name="GoogleOracleDatabaseExascaleDbStorageVaultTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googleoracledatabaseexascaledbstoragevault"

googleoracledatabaseexascaledbstoragevault.NewGoogleOracleDatabaseExascaleDbStorageVaultTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleOracleDatabaseExascaleDbStorageVaultTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



