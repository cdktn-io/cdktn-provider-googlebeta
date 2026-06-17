# `googleOracleDatabaseDbSystem` Submodule <a name="`googleOracleDatabaseDbSystem` Submodule" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleOracleDatabaseDbSystem <a name="GoogleOracleDatabaseDbSystem" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_oracle_database_db_system google_oracle_database_db_system}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googleoracledatabasedbsystem"

googleoracledatabasedbsystem.NewGoogleOracleDatabaseDbSystem(scope Construct, id *string, config GoogleOracleDatabaseDbSystemConfig) GoogleOracleDatabaseDbSystem
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemConfig">GoogleOracleDatabaseDbSystemConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemConfig">GoogleOracleDatabaseDbSystemConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.putProperties">PutProperties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.resetDeletionPolicy">ResetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.resetDeletionProtection">ResetDeletionProtection</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.resetGcpOracleZone">ResetGcpOracleZone</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.resetOdbNetwork">ResetOdbNetwork</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.resetProperties">ResetProperties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutProperties` <a name="PutProperties" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.putProperties"></a>

```go
func PutProperties(value GoogleOracleDatabaseDbSystemProperties)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.putProperties.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemProperties">GoogleOracleDatabaseDbSystemProperties</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.putTimeouts"></a>

```go
func PutTimeouts(value GoogleOracleDatabaseDbSystemTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemTimeouts">GoogleOracleDatabaseDbSystemTimeouts</a>

---

##### `ResetDeletionPolicy` <a name="ResetDeletionPolicy" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.resetDeletionPolicy"></a>

```go
func ResetDeletionPolicy()
```

##### `ResetDeletionProtection` <a name="ResetDeletionProtection" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.resetDeletionProtection"></a>

```go
func ResetDeletionProtection()
```

##### `ResetGcpOracleZone` <a name="ResetGcpOracleZone" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.resetGcpOracleZone"></a>

```go
func ResetGcpOracleZone()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.resetId"></a>

```go
func ResetId()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.resetLabels"></a>

```go
func ResetLabels()
```

##### `ResetOdbNetwork` <a name="ResetOdbNetwork" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.resetOdbNetwork"></a>

```go
func ResetOdbNetwork()
```

##### `ResetProject` <a name="ResetProject" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.resetProject"></a>

```go
func ResetProject()
```

##### `ResetProperties` <a name="ResetProperties" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.resetProperties"></a>

```go
func ResetProperties()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a GoogleOracleDatabaseDbSystem resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googleoracledatabasedbsystem"

googleoracledatabasedbsystem.GoogleOracleDatabaseDbSystem_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googleoracledatabasedbsystem"

googleoracledatabasedbsystem.GoogleOracleDatabaseDbSystem_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googleoracledatabasedbsystem"

googleoracledatabasedbsystem.GoogleOracleDatabaseDbSystem_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googleoracledatabasedbsystem"

googleoracledatabasedbsystem.GoogleOracleDatabaseDbSystem_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a GoogleOracleDatabaseDbSystem resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the GoogleOracleDatabaseDbSystem to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing GoogleOracleDatabaseDbSystem that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_oracle_database_db_system#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the GoogleOracleDatabaseDbSystem to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.property.createTime">CreateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.property.effectiveLabels">EffectiveLabels</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.property.entitlementId">EntitlementId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.property.ociUrl">OciUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.property.properties">Properties</a></code> | <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesOutputReference">GoogleOracleDatabaseDbSystemPropertiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.property.terraformLabels">TerraformLabels</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemTimeoutsOutputReference">GoogleOracleDatabaseDbSystemTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.property.dbSystemIdInput">DbSystemIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.property.deletionPolicyInput">DeletionPolicyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.property.deletionProtectionInput">DeletionProtectionInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.property.displayNameInput">DisplayNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.property.gcpOracleZoneInput">GcpOracleZoneInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.property.labelsInput">LabelsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.property.locationInput">LocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.property.odbNetworkInput">OdbNetworkInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.property.odbSubnetInput">OdbSubnetInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.property.propertiesInput">PropertiesInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemProperties">GoogleOracleDatabaseDbSystemProperties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.property.dbSystemId">DbSystemId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.property.deletionPolicy">DeletionPolicy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.property.deletionProtection">DeletionProtection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.property.gcpOracleZone">GcpOracleZone</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.property.labels">Labels</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.property.odbNetwork">OdbNetwork</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.property.odbSubnet">OdbSubnet</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.property.project">Project</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.property.createTime"></a>

```go
func CreateTime() *string
```

- *Type:* *string

---

##### `EffectiveLabels`<sup>Required</sup> <a name="EffectiveLabels" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.property.effectiveLabels"></a>

```go
func EffectiveLabels() StringMap
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.StringMap

---

##### `EntitlementId`<sup>Required</sup> <a name="EntitlementId" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.property.entitlementId"></a>

```go
func EntitlementId() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `OciUrl`<sup>Required</sup> <a name="OciUrl" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.property.ociUrl"></a>

```go
func OciUrl() *string
```

- *Type:* *string

---

##### `Properties`<sup>Required</sup> <a name="Properties" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.property.properties"></a>

```go
func Properties() GoogleOracleDatabaseDbSystemPropertiesOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesOutputReference">GoogleOracleDatabaseDbSystemPropertiesOutputReference</a>

---

##### `TerraformLabels`<sup>Required</sup> <a name="TerraformLabels" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.property.terraformLabels"></a>

```go
func TerraformLabels() StringMap
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.StringMap

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.property.timeouts"></a>

```go
func Timeouts() GoogleOracleDatabaseDbSystemTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemTimeoutsOutputReference">GoogleOracleDatabaseDbSystemTimeoutsOutputReference</a>

---

##### `DbSystemIdInput`<sup>Optional</sup> <a name="DbSystemIdInput" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.property.dbSystemIdInput"></a>

```go
func DbSystemIdInput() *string
```

- *Type:* *string

---

##### `DeletionPolicyInput`<sup>Optional</sup> <a name="DeletionPolicyInput" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.property.deletionPolicyInput"></a>

```go
func DeletionPolicyInput() *string
```

- *Type:* *string

---

##### `DeletionProtectionInput`<sup>Optional</sup> <a name="DeletionProtectionInput" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.property.deletionProtectionInput"></a>

```go
func DeletionProtectionInput() interface{}
```

- *Type:* interface{}

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.property.displayNameInput"></a>

```go
func DisplayNameInput() *string
```

- *Type:* *string

---

##### `GcpOracleZoneInput`<sup>Optional</sup> <a name="GcpOracleZoneInput" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.property.gcpOracleZoneInput"></a>

```go
func GcpOracleZoneInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.property.labelsInput"></a>

```go
func LabelsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.property.locationInput"></a>

```go
func LocationInput() *string
```

- *Type:* *string

---

##### `OdbNetworkInput`<sup>Optional</sup> <a name="OdbNetworkInput" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.property.odbNetworkInput"></a>

```go
func OdbNetworkInput() *string
```

- *Type:* *string

---

##### `OdbSubnetInput`<sup>Optional</sup> <a name="OdbSubnetInput" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.property.odbSubnetInput"></a>

```go
func OdbSubnetInput() *string
```

- *Type:* *string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `PropertiesInput`<sup>Optional</sup> <a name="PropertiesInput" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.property.propertiesInput"></a>

```go
func PropertiesInput() GoogleOracleDatabaseDbSystemProperties
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemProperties">GoogleOracleDatabaseDbSystemProperties</a>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `DbSystemId`<sup>Required</sup> <a name="DbSystemId" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.property.dbSystemId"></a>

```go
func DbSystemId() *string
```

- *Type:* *string

---

##### `DeletionPolicy`<sup>Required</sup> <a name="DeletionPolicy" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.property.deletionPolicy"></a>

```go
func DeletionPolicy() *string
```

- *Type:* *string

---

##### `DeletionProtection`<sup>Required</sup> <a name="DeletionProtection" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.property.deletionProtection"></a>

```go
func DeletionProtection() interface{}
```

- *Type:* interface{}

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `GcpOracleZone`<sup>Required</sup> <a name="GcpOracleZone" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.property.gcpOracleZone"></a>

```go
func GcpOracleZone() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.property.labels"></a>

```go
func Labels() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `OdbNetwork`<sup>Required</sup> <a name="OdbNetwork" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.property.odbNetwork"></a>

```go
func OdbNetwork() *string
```

- *Type:* *string

---

##### `OdbSubnet`<sup>Required</sup> <a name="OdbSubnet" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.property.odbSubnet"></a>

```go
func OdbSubnet() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleOracleDatabaseDbSystemConfig <a name="GoogleOracleDatabaseDbSystemConfig" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googleoracledatabasedbsystem"

&googleoracledatabasedbsystem.GoogleOracleDatabaseDbSystemConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	DbSystemId: *string,
	DisplayName: *string,
	Location: *string,
	OdbSubnet: *string,
	DeletionPolicy: *string,
	DeletionProtection: interface{},
	GcpOracleZone: *string,
	Id: *string,
	Labels: *map[string]*string,
	OdbNetwork: *string,
	Project: *string,
	Properties: github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemProperties,
	Timeouts: github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemConfig.property.dbSystemId">DbSystemId</a></code> | <code>*string</code> | The ID of the DbSystem to create. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemConfig.property.displayName">DisplayName</a></code> | <code>*string</code> | The display name for the System db. The name does not have to be unique within your project. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemConfig.property.location">Location</a></code> | <code>*string</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemConfig.property.odbSubnet">OdbSubnet</a></code> | <code>*string</code> | The name of the OdbSubnet associated with the DbSystem for IP allocation. Format: projects/{project}/locations/{location}/odbNetworks/{odb_network}/odbSubnets/{odb_subnet}. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemConfig.property.deletionPolicy">DeletionPolicy</a></code> | <code>*string</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemConfig.property.deletionProtection">DeletionProtection</a></code> | <code>interface{}</code> | Whether or not to allow Terraform to destroy the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemConfig.property.gcpOracleZone">GcpOracleZone</a></code> | <code>*string</code> | The GCP Oracle zone where Oracle DbSystem is hosted. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_oracle_database_db_system#id GoogleOracleDatabaseDbSystem#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemConfig.property.labels">Labels</a></code> | <code>*map[string]*string</code> | The labels or tags associated with the DbSystem. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemConfig.property.odbNetwork">OdbNetwork</a></code> | <code>*string</code> | The name of the OdbNetwork associated with the DbSystem. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_oracle_database_db_system#project GoogleOracleDatabaseDbSystem#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemConfig.property.properties">Properties</a></code> | <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemProperties">GoogleOracleDatabaseDbSystemProperties</a></code> | properties block. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemTimeouts">GoogleOracleDatabaseDbSystemTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `DbSystemId`<sup>Required</sup> <a name="DbSystemId" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemConfig.property.dbSystemId"></a>

```go
DbSystemId *string
```

- *Type:* *string

The ID of the DbSystem to create.

This value is
restricted to (^[a-z](%5Ba-z0-9-%5D%7B0,61%7D%5Ba-z0-9%5D)?$) and must be a maximum of
63 characters in length. The value must start with a letter and end with a
letter or a number.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_oracle_database_db_system#db_system_id GoogleOracleDatabaseDbSystem#db_system_id}

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemConfig.property.displayName"></a>

```go
DisplayName *string
```

- *Type:* *string

The display name for the System db. The name does not have to be unique within your project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_oracle_database_db_system#display_name GoogleOracleDatabaseDbSystem#display_name}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemConfig.property.location"></a>

```go
Location *string
```

- *Type:* *string

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_oracle_database_db_system#location GoogleOracleDatabaseDbSystem#location}

---

##### `OdbSubnet`<sup>Required</sup> <a name="OdbSubnet" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemConfig.property.odbSubnet"></a>

```go
OdbSubnet *string
```

- *Type:* *string

The name of the OdbSubnet associated with the DbSystem for IP allocation. Format: projects/{project}/locations/{location}/odbNetworks/{odb_network}/odbSubnets/{odb_subnet}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_oracle_database_db_system#odb_subnet GoogleOracleDatabaseDbSystem#odb_subnet}

---

##### `DeletionPolicy`<sup>Optional</sup> <a name="DeletionPolicy" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_oracle_database_db_system#deletion_policy GoogleOracleDatabaseDbSystem#deletion_policy}

---

##### `DeletionProtection`<sup>Optional</sup> <a name="DeletionProtection" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemConfig.property.deletionProtection"></a>

```go
DeletionProtection interface{}
```

- *Type:* interface{}

Whether or not to allow Terraform to destroy the instance.

Unless this field is set to false in Terraform state, a terraform destroy or terraform apply that would delete the instance will fail.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_oracle_database_db_system#deletion_protection GoogleOracleDatabaseDbSystem#deletion_protection}

---

##### `GcpOracleZone`<sup>Optional</sup> <a name="GcpOracleZone" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemConfig.property.gcpOracleZone"></a>

```go
GcpOracleZone *string
```

- *Type:* *string

The GCP Oracle zone where Oracle DbSystem is hosted.

Example: us-east4-b-r2.
If not specified, the system will pick a zone based on availability.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_oracle_database_db_system#gcp_oracle_zone GoogleOracleDatabaseDbSystem#gcp_oracle_zone}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_oracle_database_db_system#id GoogleOracleDatabaseDbSystem#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemConfig.property.labels"></a>

```go
Labels *map[string]*string
```

- *Type:* *map[string]*string

The labels or tags associated with the DbSystem.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_oracle_database_db_system#labels GoogleOracleDatabaseDbSystem#labels}

---

##### `OdbNetwork`<sup>Optional</sup> <a name="OdbNetwork" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemConfig.property.odbNetwork"></a>

```go
OdbNetwork *string
```

- *Type:* *string

The name of the OdbNetwork associated with the DbSystem.

Format: projects/{project}/locations/{location}/odbNetworks/{odb_network}
It is optional but if specified, this should match the parent ODBNetwork of
the OdbSubnet.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_oracle_database_db_system#odb_network GoogleOracleDatabaseDbSystem#odb_network}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_oracle_database_db_system#project GoogleOracleDatabaseDbSystem#project}.

---

##### `Properties`<sup>Optional</sup> <a name="Properties" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemConfig.property.properties"></a>

```go
Properties GoogleOracleDatabaseDbSystemProperties
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemProperties">GoogleOracleDatabaseDbSystemProperties</a>

properties block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_oracle_database_db_system#properties GoogleOracleDatabaseDbSystem#properties}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemConfig.property.timeouts"></a>

```go
Timeouts GoogleOracleDatabaseDbSystemTimeouts
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemTimeouts">GoogleOracleDatabaseDbSystemTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_oracle_database_db_system#timeouts GoogleOracleDatabaseDbSystem#timeouts}

---

### GoogleOracleDatabaseDbSystemProperties <a name="GoogleOracleDatabaseDbSystemProperties" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemProperties"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemProperties.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googleoracledatabasedbsystem"

&googleoracledatabasedbsystem.GoogleOracleDatabaseDbSystemProperties {
	ComputeCount: *f64,
	DatabaseEdition: *string,
	InitialDataStorageSizeGb: *f64,
	LicenseModel: *string,
	Shape: *string,
	SshPublicKeys: *[]*string,
	ComputeModel: *string,
	DataCollectionOptions: github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDataCollectionOptions,
	DataStorageSizeGb: *f64,
	DbHome: github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHome,
	DbSystemOptions: github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbSystemOptions,
	Domain: *string,
	HostnamePrefix: *string,
	MemorySizeGb: *f64,
	NodeCount: *f64,
	PrivateIp: *string,
	RecoStorageSizeGb: *f64,
	TimeZone: github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesTimeZone,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemProperties.property.computeCount">ComputeCount</a></code> | <code>*f64</code> | The number of CPU cores to enable for the DbSystem. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemProperties.property.databaseEdition">DatabaseEdition</a></code> | <code>*string</code> | The database edition of the DbSystem. Possible values: STANDARD_EDITION ENTERPRISE_EDITION ENTERPRISE_EDITION_HIGH_PERFORMANCE. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemProperties.property.initialDataStorageSizeGb">InitialDataStorageSizeGb</a></code> | <code>*f64</code> | The initial data storage size in GB. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemProperties.property.licenseModel">LicenseModel</a></code> | <code>*string</code> | The license model of the DbSystem. Possible values: LICENSE_INCLUDED BRING_YOUR_OWN_LICENSE. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemProperties.property.shape">Shape</a></code> | <code>*string</code> | Shape of DB System. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemProperties.property.sshPublicKeys">SshPublicKeys</a></code> | <code>*[]*string</code> | SSH public keys to be stored with the DbSystem. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemProperties.property.computeModel">ComputeModel</a></code> | <code>*string</code> | The compute model of the DbSystem. Possible values: ECPU OCPU. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemProperties.property.dataCollectionOptions">DataCollectionOptions</a></code> | <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDataCollectionOptions">GoogleOracleDatabaseDbSystemPropertiesDataCollectionOptions</a></code> | data_collection_options block. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemProperties.property.dataStorageSizeGb">DataStorageSizeGb</a></code> | <code>*f64</code> | The data storage size in GB that is currently available to DbSystems. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemProperties.property.dbHome">DbHome</a></code> | <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHome">GoogleOracleDatabaseDbSystemPropertiesDbHome</a></code> | db_home block. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemProperties.property.dbSystemOptions">DbSystemOptions</a></code> | <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbSystemOptions">GoogleOracleDatabaseDbSystemPropertiesDbSystemOptions</a></code> | db_system_options block. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemProperties.property.domain">Domain</a></code> | <code>*string</code> | The host domain name of the DbSystem. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemProperties.property.hostnamePrefix">HostnamePrefix</a></code> | <code>*string</code> | Prefix for DB System host names. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemProperties.property.memorySizeGb">MemorySizeGb</a></code> | <code>*f64</code> | The memory size in GB. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemProperties.property.nodeCount">NodeCount</a></code> | <code>*f64</code> | The number of nodes in the DbSystem. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemProperties.property.privateIp">PrivateIp</a></code> | <code>*string</code> | The private IP address of the DbSystem. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemProperties.property.recoStorageSizeGb">RecoStorageSizeGb</a></code> | <code>*f64</code> | The reco/redo storage size in GB. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemProperties.property.timeZone">TimeZone</a></code> | <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesTimeZone">GoogleOracleDatabaseDbSystemPropertiesTimeZone</a></code> | time_zone block. |

---

##### `ComputeCount`<sup>Required</sup> <a name="ComputeCount" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemProperties.property.computeCount"></a>

```go
ComputeCount *f64
```

- *Type:* *f64

The number of CPU cores to enable for the DbSystem.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_oracle_database_db_system#compute_count GoogleOracleDatabaseDbSystem#compute_count}

---

##### `DatabaseEdition`<sup>Required</sup> <a name="DatabaseEdition" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemProperties.property.databaseEdition"></a>

```go
DatabaseEdition *string
```

- *Type:* *string

The database edition of the DbSystem. Possible values: STANDARD_EDITION ENTERPRISE_EDITION ENTERPRISE_EDITION_HIGH_PERFORMANCE.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_oracle_database_db_system#database_edition GoogleOracleDatabaseDbSystem#database_edition}

---

##### `InitialDataStorageSizeGb`<sup>Required</sup> <a name="InitialDataStorageSizeGb" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemProperties.property.initialDataStorageSizeGb"></a>

```go
InitialDataStorageSizeGb *f64
```

- *Type:* *f64

The initial data storage size in GB.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_oracle_database_db_system#initial_data_storage_size_gb GoogleOracleDatabaseDbSystem#initial_data_storage_size_gb}

---

##### `LicenseModel`<sup>Required</sup> <a name="LicenseModel" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemProperties.property.licenseModel"></a>

```go
LicenseModel *string
```

- *Type:* *string

The license model of the DbSystem. Possible values: LICENSE_INCLUDED BRING_YOUR_OWN_LICENSE.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_oracle_database_db_system#license_model GoogleOracleDatabaseDbSystem#license_model}

---

##### `Shape`<sup>Required</sup> <a name="Shape" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemProperties.property.shape"></a>

```go
Shape *string
```

- *Type:* *string

Shape of DB System.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_oracle_database_db_system#shape GoogleOracleDatabaseDbSystem#shape}

---

##### `SshPublicKeys`<sup>Required</sup> <a name="SshPublicKeys" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemProperties.property.sshPublicKeys"></a>

```go
SshPublicKeys *[]*string
```

- *Type:* *[]*string

SSH public keys to be stored with the DbSystem.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_oracle_database_db_system#ssh_public_keys GoogleOracleDatabaseDbSystem#ssh_public_keys}

---

##### `ComputeModel`<sup>Optional</sup> <a name="ComputeModel" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemProperties.property.computeModel"></a>

```go
ComputeModel *string
```

- *Type:* *string

The compute model of the DbSystem. Possible values: ECPU OCPU.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_oracle_database_db_system#compute_model GoogleOracleDatabaseDbSystem#compute_model}

---

##### `DataCollectionOptions`<sup>Optional</sup> <a name="DataCollectionOptions" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemProperties.property.dataCollectionOptions"></a>

```go
DataCollectionOptions GoogleOracleDatabaseDbSystemPropertiesDataCollectionOptions
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDataCollectionOptions">GoogleOracleDatabaseDbSystemPropertiesDataCollectionOptions</a>

data_collection_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_oracle_database_db_system#data_collection_options GoogleOracleDatabaseDbSystem#data_collection_options}

---

##### `DataStorageSizeGb`<sup>Optional</sup> <a name="DataStorageSizeGb" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemProperties.property.dataStorageSizeGb"></a>

```go
DataStorageSizeGb *f64
```

- *Type:* *f64

The data storage size in GB that is currently available to DbSystems.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_oracle_database_db_system#data_storage_size_gb GoogleOracleDatabaseDbSystem#data_storage_size_gb}

---

##### `DbHome`<sup>Optional</sup> <a name="DbHome" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemProperties.property.dbHome"></a>

```go
DbHome GoogleOracleDatabaseDbSystemPropertiesDbHome
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHome">GoogleOracleDatabaseDbSystemPropertiesDbHome</a>

db_home block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_oracle_database_db_system#db_home GoogleOracleDatabaseDbSystem#db_home}

---

##### `DbSystemOptions`<sup>Optional</sup> <a name="DbSystemOptions" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemProperties.property.dbSystemOptions"></a>

```go
DbSystemOptions GoogleOracleDatabaseDbSystemPropertiesDbSystemOptions
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbSystemOptions">GoogleOracleDatabaseDbSystemPropertiesDbSystemOptions</a>

db_system_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_oracle_database_db_system#db_system_options GoogleOracleDatabaseDbSystem#db_system_options}

---

##### `Domain`<sup>Optional</sup> <a name="Domain" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemProperties.property.domain"></a>

```go
Domain *string
```

- *Type:* *string

The host domain name of the DbSystem.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_oracle_database_db_system#domain GoogleOracleDatabaseDbSystem#domain}

---

##### `HostnamePrefix`<sup>Optional</sup> <a name="HostnamePrefix" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemProperties.property.hostnamePrefix"></a>

```go
HostnamePrefix *string
```

- *Type:* *string

Prefix for DB System host names.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_oracle_database_db_system#hostname_prefix GoogleOracleDatabaseDbSystem#hostname_prefix}

---

##### `MemorySizeGb`<sup>Optional</sup> <a name="MemorySizeGb" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemProperties.property.memorySizeGb"></a>

```go
MemorySizeGb *f64
```

- *Type:* *f64

The memory size in GB.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_oracle_database_db_system#memory_size_gb GoogleOracleDatabaseDbSystem#memory_size_gb}

---

##### `NodeCount`<sup>Optional</sup> <a name="NodeCount" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemProperties.property.nodeCount"></a>

```go
NodeCount *f64
```

- *Type:* *f64

The number of nodes in the DbSystem.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_oracle_database_db_system#node_count GoogleOracleDatabaseDbSystem#node_count}

---

##### `PrivateIp`<sup>Optional</sup> <a name="PrivateIp" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemProperties.property.privateIp"></a>

```go
PrivateIp *string
```

- *Type:* *string

The private IP address of the DbSystem.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_oracle_database_db_system#private_ip GoogleOracleDatabaseDbSystem#private_ip}

---

##### `RecoStorageSizeGb`<sup>Optional</sup> <a name="RecoStorageSizeGb" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemProperties.property.recoStorageSizeGb"></a>

```go
RecoStorageSizeGb *f64
```

- *Type:* *f64

The reco/redo storage size in GB.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_oracle_database_db_system#reco_storage_size_gb GoogleOracleDatabaseDbSystem#reco_storage_size_gb}

---

##### `TimeZone`<sup>Optional</sup> <a name="TimeZone" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemProperties.property.timeZone"></a>

```go
TimeZone GoogleOracleDatabaseDbSystemPropertiesTimeZone
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesTimeZone">GoogleOracleDatabaseDbSystemPropertiesTimeZone</a>

time_zone block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_oracle_database_db_system#time_zone GoogleOracleDatabaseDbSystem#time_zone}

---

### GoogleOracleDatabaseDbSystemPropertiesDataCollectionOptions <a name="GoogleOracleDatabaseDbSystemPropertiesDataCollectionOptions" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDataCollectionOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDataCollectionOptions.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googleoracledatabasedbsystem"

&googleoracledatabasedbsystem.GoogleOracleDatabaseDbSystemPropertiesDataCollectionOptions {
	IsDiagnosticsEventsEnabled: interface{},
	IsIncidentLogsEnabled: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDataCollectionOptions.property.isDiagnosticsEventsEnabled">IsDiagnosticsEventsEnabled</a></code> | <code>interface{}</code> | Indicates whether to enable data collection for diagnostics. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDataCollectionOptions.property.isIncidentLogsEnabled">IsIncidentLogsEnabled</a></code> | <code>interface{}</code> | Indicates whether to enable incident logs and trace collection. |

---

##### `IsDiagnosticsEventsEnabled`<sup>Optional</sup> <a name="IsDiagnosticsEventsEnabled" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDataCollectionOptions.property.isDiagnosticsEventsEnabled"></a>

```go
IsDiagnosticsEventsEnabled interface{}
```

- *Type:* interface{}

Indicates whether to enable data collection for diagnostics.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_oracle_database_db_system#is_diagnostics_events_enabled GoogleOracleDatabaseDbSystem#is_diagnostics_events_enabled}

---

##### `IsIncidentLogsEnabled`<sup>Optional</sup> <a name="IsIncidentLogsEnabled" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDataCollectionOptions.property.isIncidentLogsEnabled"></a>

```go
IsIncidentLogsEnabled interface{}
```

- *Type:* interface{}

Indicates whether to enable incident logs and trace collection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_oracle_database_db_system#is_incident_logs_enabled GoogleOracleDatabaseDbSystem#is_incident_logs_enabled}

---

### GoogleOracleDatabaseDbSystemPropertiesDbHome <a name="GoogleOracleDatabaseDbSystemPropertiesDbHome" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHome"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHome.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googleoracledatabasedbsystem"

&googleoracledatabasedbsystem.GoogleOracleDatabaseDbSystemPropertiesDbHome {
	Database: github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabase,
	DbVersion: *string,
	DisplayName: *string,
	IsUnifiedAuditingEnabled: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHome.property.database">Database</a></code> | <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabase">GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabase</a></code> | database block. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHome.property.dbVersion">DbVersion</a></code> | <code>*string</code> | A valid Oracle Database version. For a list of supported versions, use the ListDbVersions operation. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHome.property.displayName">DisplayName</a></code> | <code>*string</code> | The display name for the Database Home. The name does not have to be unique within your project. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHome.property.isUnifiedAuditingEnabled">IsUnifiedAuditingEnabled</a></code> | <code>interface{}</code> | Whether unified auditing is enabled for the Database Home. |

---

##### `Database`<sup>Required</sup> <a name="Database" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHome.property.database"></a>

```go
Database GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabase
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabase">GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabase</a>

database block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_oracle_database_db_system#database GoogleOracleDatabaseDbSystem#database}

---

##### `DbVersion`<sup>Required</sup> <a name="DbVersion" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHome.property.dbVersion"></a>

```go
DbVersion *string
```

- *Type:* *string

A valid Oracle Database version. For a list of supported versions, use the ListDbVersions operation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_oracle_database_db_system#db_version GoogleOracleDatabaseDbSystem#db_version}

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHome.property.displayName"></a>

```go
DisplayName *string
```

- *Type:* *string

The display name for the Database Home. The name does not have to be unique within your project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_oracle_database_db_system#display_name GoogleOracleDatabaseDbSystem#display_name}

---

##### `IsUnifiedAuditingEnabled`<sup>Optional</sup> <a name="IsUnifiedAuditingEnabled" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHome.property.isUnifiedAuditingEnabled"></a>

```go
IsUnifiedAuditingEnabled interface{}
```

- *Type:* interface{}

Whether unified auditing is enabled for the Database Home.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_oracle_database_db_system#is_unified_auditing_enabled GoogleOracleDatabaseDbSystem#is_unified_auditing_enabled}

---

### GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabase <a name="GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabase" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabase"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabase.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googleoracledatabasedbsystem"

&googleoracledatabasedbsystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabase {
	AdminPassword: *string,
	DatabaseId: *string,
	CharacterSet: *string,
	DbHomeName: *string,
	DbName: *string,
	DbUniqueName: *string,
	GcpOracleZone: *string,
	NcharacterSet: *string,
	PluggableDatabaseId: *string,
	PluggableDatabaseName: *string,
	Properties: github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabaseProperties,
	TdeWalletPassword: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabase.property.adminPassword">AdminPassword</a></code> | <code>*string</code> | The password for the default ADMIN user. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabase.property.databaseId">DatabaseId</a></code> | <code>*string</code> | The database ID of the Database. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabase.property.characterSet">CharacterSet</a></code> | <code>*string</code> | The character set for the database. The default is AL32UTF8. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabase.property.dbHomeName">DbHomeName</a></code> | <code>*string</code> | The name of the DbHome resource associated with the Database. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabase.property.dbName">DbName</a></code> | <code>*string</code> | The database name. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabase.property.dbUniqueName">DbUniqueName</a></code> | <code>*string</code> | The DB_UNIQUE_NAME of the Oracle Database being backed up. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabase.property.gcpOracleZone">GcpOracleZone</a></code> | <code>*string</code> | The GCP Oracle zone where the Database is created. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabase.property.ncharacterSet">NcharacterSet</a></code> | <code>*string</code> | The national character set for the database. The default is AL16UTF16. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabase.property.pluggableDatabaseId">PluggableDatabaseId</a></code> | <code>*string</code> | The ID of the pluggable database associated with Database. The ID must be unique within the project and location. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabase.property.pluggableDatabaseName">PluggableDatabaseName</a></code> | <code>*string</code> | The pluggable dataabse associated with the Database. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabase.property.properties">Properties</a></code> | <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabaseProperties">GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabaseProperties</a></code> | properties block. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabase.property.tdeWalletPassword">TdeWalletPassword</a></code> | <code>*string</code> | The TDE wallet password for the database. |

---

##### `AdminPassword`<sup>Required</sup> <a name="AdminPassword" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabase.property.adminPassword"></a>

```go
AdminPassword *string
```

- *Type:* *string

The password for the default ADMIN user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_oracle_database_db_system#admin_password GoogleOracleDatabaseDbSystem#admin_password}

---

##### `DatabaseId`<sup>Required</sup> <a name="DatabaseId" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabase.property.databaseId"></a>

```go
DatabaseId *string
```

- *Type:* *string

The database ID of the Database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_oracle_database_db_system#database_id GoogleOracleDatabaseDbSystem#database_id}

---

##### `CharacterSet`<sup>Optional</sup> <a name="CharacterSet" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabase.property.characterSet"></a>

```go
CharacterSet *string
```

- *Type:* *string

The character set for the database. The default is AL32UTF8.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_oracle_database_db_system#character_set GoogleOracleDatabaseDbSystem#character_set}

---

##### `DbHomeName`<sup>Optional</sup> <a name="DbHomeName" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabase.property.dbHomeName"></a>

```go
DbHomeName *string
```

- *Type:* *string

The name of the DbHome resource associated with the Database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_oracle_database_db_system#db_home_name GoogleOracleDatabaseDbSystem#db_home_name}

---

##### `DbName`<sup>Optional</sup> <a name="DbName" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabase.property.dbName"></a>

```go
DbName *string
```

- *Type:* *string

The database name.

The name must begin with an alphabetic character and can
contain a maximum of eight alphanumeric characters. Special characters are
not permitted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_oracle_database_db_system#db_name GoogleOracleDatabaseDbSystem#db_name}

---

##### `DbUniqueName`<sup>Optional</sup> <a name="DbUniqueName" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabase.property.dbUniqueName"></a>

```go
DbUniqueName *string
```

- *Type:* *string

The DB_UNIQUE_NAME of the Oracle Database being backed up.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_oracle_database_db_system#db_unique_name GoogleOracleDatabaseDbSystem#db_unique_name}

---

##### `GcpOracleZone`<sup>Optional</sup> <a name="GcpOracleZone" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabase.property.gcpOracleZone"></a>

```go
GcpOracleZone *string
```

- *Type:* *string

The GCP Oracle zone where the Database is created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_oracle_database_db_system#gcp_oracle_zone GoogleOracleDatabaseDbSystem#gcp_oracle_zone}

---

##### `NcharacterSet`<sup>Optional</sup> <a name="NcharacterSet" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabase.property.ncharacterSet"></a>

```go
NcharacterSet *string
```

- *Type:* *string

The national character set for the database. The default is AL16UTF16.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_oracle_database_db_system#ncharacter_set GoogleOracleDatabaseDbSystem#ncharacter_set}

---

##### `PluggableDatabaseId`<sup>Optional</sup> <a name="PluggableDatabaseId" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabase.property.pluggableDatabaseId"></a>

```go
PluggableDatabaseId *string
```

- *Type:* *string

The ID of the pluggable database associated with Database. The ID must be unique within the project and location.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_oracle_database_db_system#pluggable_database_id GoogleOracleDatabaseDbSystem#pluggable_database_id}

---

##### `PluggableDatabaseName`<sup>Optional</sup> <a name="PluggableDatabaseName" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabase.property.pluggableDatabaseName"></a>

```go
PluggableDatabaseName *string
```

- *Type:* *string

The pluggable dataabse associated with the Database.

The name must begin with an alphabetic character and can contain a maximum of thirty alphanumeric characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_oracle_database_db_system#pluggable_database_name GoogleOracleDatabaseDbSystem#pluggable_database_name}

---

##### `Properties`<sup>Optional</sup> <a name="Properties" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabase.property.properties"></a>

```go
Properties GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabaseProperties
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabaseProperties">GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabaseProperties</a>

properties block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_oracle_database_db_system#properties GoogleOracleDatabaseDbSystem#properties}

---

##### `TdeWalletPassword`<sup>Optional</sup> <a name="TdeWalletPassword" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabase.property.tdeWalletPassword"></a>

```go
TdeWalletPassword *string
```

- *Type:* *string

The TDE wallet password for the database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_oracle_database_db_system#tde_wallet_password GoogleOracleDatabaseDbSystem#tde_wallet_password}

---

### GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabaseProperties <a name="GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabaseProperties" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabaseProperties"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabaseProperties.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googleoracledatabasedbsystem"

&googleoracledatabasedbsystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabaseProperties {
	DbVersion: *string,
	DatabaseManagementConfig: github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDatabaseManagementConfig,
	DbBackupConfig: github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfig,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabaseProperties.property.dbVersion">DbVersion</a></code> | <code>*string</code> | The Oracle Database version. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabaseProperties.property.databaseManagementConfig">DatabaseManagementConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDatabaseManagementConfig">GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDatabaseManagementConfig</a></code> | database_management_config block. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabaseProperties.property.dbBackupConfig">DbBackupConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfig">GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfig</a></code> | db_backup_config block. |

---

##### `DbVersion`<sup>Required</sup> <a name="DbVersion" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabaseProperties.property.dbVersion"></a>

```go
DbVersion *string
```

- *Type:* *string

The Oracle Database version.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_oracle_database_db_system#db_version GoogleOracleDatabaseDbSystem#db_version}

---

##### `DatabaseManagementConfig`<sup>Optional</sup> <a name="DatabaseManagementConfig" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabaseProperties.property.databaseManagementConfig"></a>

```go
DatabaseManagementConfig GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDatabaseManagementConfig
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDatabaseManagementConfig">GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDatabaseManagementConfig</a>

database_management_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_oracle_database_db_system#database_management_config GoogleOracleDatabaseDbSystem#database_management_config}

---

##### `DbBackupConfig`<sup>Optional</sup> <a name="DbBackupConfig" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabaseProperties.property.dbBackupConfig"></a>

```go
DbBackupConfig GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfig
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfig">GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfig</a>

db_backup_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_oracle_database_db_system#db_backup_config GoogleOracleDatabaseDbSystem#db_backup_config}

---

### GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDatabaseManagementConfig <a name="GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDatabaseManagementConfig" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDatabaseManagementConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDatabaseManagementConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googleoracledatabasedbsystem"

&googleoracledatabasedbsystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDatabaseManagementConfig {

}
```


### GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfig <a name="GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfig" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googleoracledatabasedbsystem"

&googleoracledatabasedbsystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfig {
	AutoBackupEnabled: interface{},
	AutoFullBackupDay: *string,
	AutoFullBackupWindow: *string,
	AutoIncrementalBackupWindow: *string,
	BackupDeletionPolicy: *string,
	BackupDestinationDetails: interface{},
	RetentionPeriodDays: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfig.property.autoBackupEnabled">AutoBackupEnabled</a></code> | <code>interface{}</code> | If set to true, enables automatic backups on the database. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfig.property.autoFullBackupDay">AutoFullBackupDay</a></code> | <code>*string</code> | Possible values: MONDAY TUESDAY WEDNESDAY THURSDAY FRIDAY SATURDAY SUNDAY. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfig.property.autoFullBackupWindow">AutoFullBackupWindow</a></code> | <code>*string</code> | The window in which the full backup should be performed on the database. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfig.property.autoIncrementalBackupWindow">AutoIncrementalBackupWindow</a></code> | <code>*string</code> | The window in which the incremental backup should be performed on the database. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfig.property.backupDeletionPolicy">BackupDeletionPolicy</a></code> | <code>*string</code> | This defines when the backups will be deleted after Database termination. Possible values: DELETE_IMMEDIATELY DELETE_AFTER_RETENTION_PERIOD. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfig.property.backupDestinationDetails">BackupDestinationDetails</a></code> | <code>interface{}</code> | backup_destination_details block. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfig.property.retentionPeriodDays">RetentionPeriodDays</a></code> | <code>*f64</code> | The number of days an automatic backup is retained before being automatically deleted. |

---

##### `AutoBackupEnabled`<sup>Optional</sup> <a name="AutoBackupEnabled" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfig.property.autoBackupEnabled"></a>

```go
AutoBackupEnabled interface{}
```

- *Type:* interface{}

If set to true, enables automatic backups on the database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_oracle_database_db_system#auto_backup_enabled GoogleOracleDatabaseDbSystem#auto_backup_enabled}

---

##### `AutoFullBackupDay`<sup>Optional</sup> <a name="AutoFullBackupDay" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfig.property.autoFullBackupDay"></a>

```go
AutoFullBackupDay *string
```

- *Type:* *string

Possible values: MONDAY TUESDAY WEDNESDAY THURSDAY FRIDAY SATURDAY SUNDAY.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_oracle_database_db_system#auto_full_backup_day GoogleOracleDatabaseDbSystem#auto_full_backup_day}

---

##### `AutoFullBackupWindow`<sup>Optional</sup> <a name="AutoFullBackupWindow" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfig.property.autoFullBackupWindow"></a>

```go
AutoFullBackupWindow *string
```

- *Type:* *string

The window in which the full backup should be performed on the database.

If no value is provided, the default is anytime.
Possible values:
SLOT_ONE
SLOT_TWO
SLOT_THREE
SLOT_FOUR
SLOT_FIVE
SLOT_SIX
SLOT_SEVEN
SLOT_EIGHT
SLOT_NINE
SLOT_TEN
SLOT_ELEVEN
SLOT_TWELVE

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_oracle_database_db_system#auto_full_backup_window GoogleOracleDatabaseDbSystem#auto_full_backup_window}

---

##### `AutoIncrementalBackupWindow`<sup>Optional</sup> <a name="AutoIncrementalBackupWindow" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfig.property.autoIncrementalBackupWindow"></a>

```go
AutoIncrementalBackupWindow *string
```

- *Type:* *string

The window in which the incremental backup should be performed on the database.

If no value is provided, the default is anytime except the auto
full backup day.
Possible values:
SLOT_ONE
SLOT_TWO
SLOT_THREE
SLOT_FOUR
SLOT_FIVE
SLOT_SIX
SLOT_SEVEN
SLOT_EIGHT
SLOT_NINE
SLOT_TEN
SLOT_ELEVEN
SLOT_TWELVE

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_oracle_database_db_system#auto_incremental_backup_window GoogleOracleDatabaseDbSystem#auto_incremental_backup_window}

---

##### `BackupDeletionPolicy`<sup>Optional</sup> <a name="BackupDeletionPolicy" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfig.property.backupDeletionPolicy"></a>

```go
BackupDeletionPolicy *string
```

- *Type:* *string

This defines when the backups will be deleted after Database termination. Possible values: DELETE_IMMEDIATELY DELETE_AFTER_RETENTION_PERIOD.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_oracle_database_db_system#backup_deletion_policy GoogleOracleDatabaseDbSystem#backup_deletion_policy}

---

##### `BackupDestinationDetails`<sup>Optional</sup> <a name="BackupDestinationDetails" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfig.property.backupDestinationDetails"></a>

```go
BackupDestinationDetails interface{}
```

- *Type:* interface{}

backup_destination_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_oracle_database_db_system#backup_destination_details GoogleOracleDatabaseDbSystem#backup_destination_details}

---

##### `RetentionPeriodDays`<sup>Optional</sup> <a name="RetentionPeriodDays" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfig.property.retentionPeriodDays"></a>

```go
RetentionPeriodDays *f64
```

- *Type:* *f64

The number of days an automatic backup is retained before being automatically deleted.

This value determines the earliest point in time to
which a database can be restored. Min: 1, Max: 60.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_oracle_database_db_system#retention_period_days GoogleOracleDatabaseDbSystem#retention_period_days}

---

### GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigBackupDestinationDetails <a name="GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigBackupDestinationDetails" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigBackupDestinationDetails"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigBackupDestinationDetails.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googleoracledatabasedbsystem"

&googleoracledatabasedbsystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigBackupDestinationDetails {
	Type: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigBackupDestinationDetails.property.type">Type</a></code> | <code>*string</code> | The type of the database backup destination. Possible values: NFS RECOVERY_APPLIANCE OBJECT_STORE LOCAL DBRS. |

---

##### `Type`<sup>Optional</sup> <a name="Type" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigBackupDestinationDetails.property.type"></a>

```go
Type *string
```

- *Type:* *string

The type of the database backup destination. Possible values: NFS RECOVERY_APPLIANCE OBJECT_STORE LOCAL DBRS.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_oracle_database_db_system#type GoogleOracleDatabaseDbSystem#type}

---

### GoogleOracleDatabaseDbSystemPropertiesDbSystemOptions <a name="GoogleOracleDatabaseDbSystemPropertiesDbSystemOptions" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbSystemOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbSystemOptions.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googleoracledatabasedbsystem"

&googleoracledatabasedbsystem.GoogleOracleDatabaseDbSystemPropertiesDbSystemOptions {
	StorageManagement: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbSystemOptions.property.storageManagement">StorageManagement</a></code> | <code>*string</code> | The storage option used in DB system. Possible values: ASM LVM. |

---

##### `StorageManagement`<sup>Optional</sup> <a name="StorageManagement" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbSystemOptions.property.storageManagement"></a>

```go
StorageManagement *string
```

- *Type:* *string

The storage option used in DB system. Possible values: ASM LVM.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_oracle_database_db_system#storage_management GoogleOracleDatabaseDbSystem#storage_management}

---

### GoogleOracleDatabaseDbSystemPropertiesTimeZone <a name="GoogleOracleDatabaseDbSystemPropertiesTimeZone" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesTimeZone"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesTimeZone.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googleoracledatabasedbsystem"

&googleoracledatabasedbsystem.GoogleOracleDatabaseDbSystemPropertiesTimeZone {
	Id: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesTimeZone.property.id">Id</a></code> | <code>*string</code> | IANA Time Zone Database time zone. For example "America/New_York". |

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesTimeZone.property.id"></a>

```go
Id *string
```

- *Type:* *string

IANA Time Zone Database time zone. For example "America/New_York".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_oracle_database_db_system#id GoogleOracleDatabaseDbSystem#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### GoogleOracleDatabaseDbSystemTimeouts <a name="GoogleOracleDatabaseDbSystemTimeouts" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemTimeouts.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googleoracledatabasedbsystem"

&googleoracledatabasedbsystem.GoogleOracleDatabaseDbSystemTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_oracle_database_db_system#create GoogleOracleDatabaseDbSystem#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_oracle_database_db_system#delete GoogleOracleDatabaseDbSystem#delete}. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_oracle_database_db_system#update GoogleOracleDatabaseDbSystem#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_oracle_database_db_system#create GoogleOracleDatabaseDbSystem#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_oracle_database_db_system#delete GoogleOracleDatabaseDbSystem#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_oracle_database_db_system#update GoogleOracleDatabaseDbSystem#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleOracleDatabaseDbSystemPropertiesDataCollectionOptionsOutputReference <a name="GoogleOracleDatabaseDbSystemPropertiesDataCollectionOptionsOutputReference" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDataCollectionOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDataCollectionOptionsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googleoracledatabasedbsystem"

googleoracledatabasedbsystem.NewGoogleOracleDatabaseDbSystemPropertiesDataCollectionOptionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleOracleDatabaseDbSystemPropertiesDataCollectionOptionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDataCollectionOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDataCollectionOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDataCollectionOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDataCollectionOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDataCollectionOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDataCollectionOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDataCollectionOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDataCollectionOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDataCollectionOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDataCollectionOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDataCollectionOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDataCollectionOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDataCollectionOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDataCollectionOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDataCollectionOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDataCollectionOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDataCollectionOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDataCollectionOptionsOutputReference.resetIsDiagnosticsEventsEnabled">ResetIsDiagnosticsEventsEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDataCollectionOptionsOutputReference.resetIsIncidentLogsEnabled">ResetIsIncidentLogsEnabled</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDataCollectionOptionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDataCollectionOptionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDataCollectionOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDataCollectionOptionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDataCollectionOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDataCollectionOptionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDataCollectionOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDataCollectionOptionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDataCollectionOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDataCollectionOptionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDataCollectionOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDataCollectionOptionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDataCollectionOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDataCollectionOptionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDataCollectionOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDataCollectionOptionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDataCollectionOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDataCollectionOptionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDataCollectionOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDataCollectionOptionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDataCollectionOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDataCollectionOptionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDataCollectionOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDataCollectionOptionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetIsDiagnosticsEventsEnabled` <a name="ResetIsDiagnosticsEventsEnabled" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDataCollectionOptionsOutputReference.resetIsDiagnosticsEventsEnabled"></a>

```go
func ResetIsDiagnosticsEventsEnabled()
```

##### `ResetIsIncidentLogsEnabled` <a name="ResetIsIncidentLogsEnabled" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDataCollectionOptionsOutputReference.resetIsIncidentLogsEnabled"></a>

```go
func ResetIsIncidentLogsEnabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDataCollectionOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDataCollectionOptionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDataCollectionOptionsOutputReference.property.isDiagnosticsEventsEnabledInput">IsDiagnosticsEventsEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDataCollectionOptionsOutputReference.property.isIncidentLogsEnabledInput">IsIncidentLogsEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDataCollectionOptionsOutputReference.property.isDiagnosticsEventsEnabled">IsDiagnosticsEventsEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDataCollectionOptionsOutputReference.property.isIncidentLogsEnabled">IsIncidentLogsEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDataCollectionOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDataCollectionOptions">GoogleOracleDatabaseDbSystemPropertiesDataCollectionOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDataCollectionOptionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDataCollectionOptionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `IsDiagnosticsEventsEnabledInput`<sup>Optional</sup> <a name="IsDiagnosticsEventsEnabledInput" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDataCollectionOptionsOutputReference.property.isDiagnosticsEventsEnabledInput"></a>

```go
func IsDiagnosticsEventsEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `IsIncidentLogsEnabledInput`<sup>Optional</sup> <a name="IsIncidentLogsEnabledInput" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDataCollectionOptionsOutputReference.property.isIncidentLogsEnabledInput"></a>

```go
func IsIncidentLogsEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `IsDiagnosticsEventsEnabled`<sup>Required</sup> <a name="IsDiagnosticsEventsEnabled" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDataCollectionOptionsOutputReference.property.isDiagnosticsEventsEnabled"></a>

```go
func IsDiagnosticsEventsEnabled() interface{}
```

- *Type:* interface{}

---

##### `IsIncidentLogsEnabled`<sup>Required</sup> <a name="IsIncidentLogsEnabled" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDataCollectionOptionsOutputReference.property.isIncidentLogsEnabled"></a>

```go
func IsIncidentLogsEnabled() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDataCollectionOptionsOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleOracleDatabaseDbSystemPropertiesDataCollectionOptions
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDataCollectionOptions">GoogleOracleDatabaseDbSystemPropertiesDataCollectionOptions</a>

---


### GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference <a name="GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googleoracledatabasedbsystem"

googleoracledatabasedbsystem.NewGoogleOracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference.putProperties">PutProperties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference.resetCharacterSet">ResetCharacterSet</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference.resetDbHomeName">ResetDbHomeName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference.resetDbName">ResetDbName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference.resetDbUniqueName">ResetDbUniqueName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference.resetGcpOracleZone">ResetGcpOracleZone</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference.resetNcharacterSet">ResetNcharacterSet</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference.resetPluggableDatabaseId">ResetPluggableDatabaseId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference.resetPluggableDatabaseName">ResetPluggableDatabaseName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference.resetProperties">ResetProperties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference.resetTdeWalletPassword">ResetTdeWalletPassword</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutProperties` <a name="PutProperties" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference.putProperties"></a>

```go
func PutProperties(value GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabaseProperties)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference.putProperties.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabaseProperties">GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabaseProperties</a>

---

##### `ResetCharacterSet` <a name="ResetCharacterSet" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference.resetCharacterSet"></a>

```go
func ResetCharacterSet()
```

##### `ResetDbHomeName` <a name="ResetDbHomeName" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference.resetDbHomeName"></a>

```go
func ResetDbHomeName()
```

##### `ResetDbName` <a name="ResetDbName" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference.resetDbName"></a>

```go
func ResetDbName()
```

##### `ResetDbUniqueName` <a name="ResetDbUniqueName" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference.resetDbUniqueName"></a>

```go
func ResetDbUniqueName()
```

##### `ResetGcpOracleZone` <a name="ResetGcpOracleZone" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference.resetGcpOracleZone"></a>

```go
func ResetGcpOracleZone()
```

##### `ResetNcharacterSet` <a name="ResetNcharacterSet" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference.resetNcharacterSet"></a>

```go
func ResetNcharacterSet()
```

##### `ResetPluggableDatabaseId` <a name="ResetPluggableDatabaseId" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference.resetPluggableDatabaseId"></a>

```go
func ResetPluggableDatabaseId()
```

##### `ResetPluggableDatabaseName` <a name="ResetPluggableDatabaseName" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference.resetPluggableDatabaseName"></a>

```go
func ResetPluggableDatabaseName()
```

##### `ResetProperties` <a name="ResetProperties" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference.resetProperties"></a>

```go
func ResetProperties()
```

##### `ResetTdeWalletPassword` <a name="ResetTdeWalletPassword" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference.resetTdeWalletPassword"></a>

```go
func ResetTdeWalletPassword()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference.property.createTime">CreateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference.property.ociUrl">OciUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference.property.opsInsightsStatus">OpsInsightsStatus</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference.property.properties">Properties</a></code> | <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesOutputReference">GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference.property.adminPasswordInput">AdminPasswordInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference.property.characterSetInput">CharacterSetInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference.property.databaseIdInput">DatabaseIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference.property.dbHomeNameInput">DbHomeNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference.property.dbNameInput">DbNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference.property.dbUniqueNameInput">DbUniqueNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference.property.gcpOracleZoneInput">GcpOracleZoneInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference.property.ncharacterSetInput">NcharacterSetInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference.property.pluggableDatabaseIdInput">PluggableDatabaseIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference.property.pluggableDatabaseNameInput">PluggableDatabaseNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference.property.propertiesInput">PropertiesInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabaseProperties">GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabaseProperties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference.property.tdeWalletPasswordInput">TdeWalletPasswordInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference.property.adminPassword">AdminPassword</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference.property.characterSet">CharacterSet</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference.property.databaseId">DatabaseId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference.property.dbHomeName">DbHomeName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference.property.dbName">DbName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference.property.dbUniqueName">DbUniqueName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference.property.gcpOracleZone">GcpOracleZone</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference.property.ncharacterSet">NcharacterSet</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference.property.pluggableDatabaseId">PluggableDatabaseId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference.property.pluggableDatabaseName">PluggableDatabaseName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference.property.tdeWalletPassword">TdeWalletPassword</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabase">GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabase</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference.property.createTime"></a>

```go
func CreateTime() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `OciUrl`<sup>Required</sup> <a name="OciUrl" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference.property.ociUrl"></a>

```go
func OciUrl() *string
```

- *Type:* *string

---

##### `OpsInsightsStatus`<sup>Required</sup> <a name="OpsInsightsStatus" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference.property.opsInsightsStatus"></a>

```go
func OpsInsightsStatus() *string
```

- *Type:* *string

---

##### `Properties`<sup>Required</sup> <a name="Properties" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference.property.properties"></a>

```go
func Properties() GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesOutputReference">GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesOutputReference</a>

---

##### `AdminPasswordInput`<sup>Optional</sup> <a name="AdminPasswordInput" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference.property.adminPasswordInput"></a>

```go
func AdminPasswordInput() *string
```

- *Type:* *string

---

##### `CharacterSetInput`<sup>Optional</sup> <a name="CharacterSetInput" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference.property.characterSetInput"></a>

```go
func CharacterSetInput() *string
```

- *Type:* *string

---

##### `DatabaseIdInput`<sup>Optional</sup> <a name="DatabaseIdInput" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference.property.databaseIdInput"></a>

```go
func DatabaseIdInput() *string
```

- *Type:* *string

---

##### `DbHomeNameInput`<sup>Optional</sup> <a name="DbHomeNameInput" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference.property.dbHomeNameInput"></a>

```go
func DbHomeNameInput() *string
```

- *Type:* *string

---

##### `DbNameInput`<sup>Optional</sup> <a name="DbNameInput" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference.property.dbNameInput"></a>

```go
func DbNameInput() *string
```

- *Type:* *string

---

##### `DbUniqueNameInput`<sup>Optional</sup> <a name="DbUniqueNameInput" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference.property.dbUniqueNameInput"></a>

```go
func DbUniqueNameInput() *string
```

- *Type:* *string

---

##### `GcpOracleZoneInput`<sup>Optional</sup> <a name="GcpOracleZoneInput" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference.property.gcpOracleZoneInput"></a>

```go
func GcpOracleZoneInput() *string
```

- *Type:* *string

---

##### `NcharacterSetInput`<sup>Optional</sup> <a name="NcharacterSetInput" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference.property.ncharacterSetInput"></a>

```go
func NcharacterSetInput() *string
```

- *Type:* *string

---

##### `PluggableDatabaseIdInput`<sup>Optional</sup> <a name="PluggableDatabaseIdInput" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference.property.pluggableDatabaseIdInput"></a>

```go
func PluggableDatabaseIdInput() *string
```

- *Type:* *string

---

##### `PluggableDatabaseNameInput`<sup>Optional</sup> <a name="PluggableDatabaseNameInput" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference.property.pluggableDatabaseNameInput"></a>

```go
func PluggableDatabaseNameInput() *string
```

- *Type:* *string

---

##### `PropertiesInput`<sup>Optional</sup> <a name="PropertiesInput" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference.property.propertiesInput"></a>

```go
func PropertiesInput() GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabaseProperties
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabaseProperties">GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabaseProperties</a>

---

##### `TdeWalletPasswordInput`<sup>Optional</sup> <a name="TdeWalletPasswordInput" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference.property.tdeWalletPasswordInput"></a>

```go
func TdeWalletPasswordInput() *string
```

- *Type:* *string

---

##### `AdminPassword`<sup>Required</sup> <a name="AdminPassword" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference.property.adminPassword"></a>

```go
func AdminPassword() *string
```

- *Type:* *string

---

##### `CharacterSet`<sup>Required</sup> <a name="CharacterSet" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference.property.characterSet"></a>

```go
func CharacterSet() *string
```

- *Type:* *string

---

##### `DatabaseId`<sup>Required</sup> <a name="DatabaseId" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference.property.databaseId"></a>

```go
func DatabaseId() *string
```

- *Type:* *string

---

##### `DbHomeName`<sup>Required</sup> <a name="DbHomeName" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference.property.dbHomeName"></a>

```go
func DbHomeName() *string
```

- *Type:* *string

---

##### `DbName`<sup>Required</sup> <a name="DbName" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference.property.dbName"></a>

```go
func DbName() *string
```

- *Type:* *string

---

##### `DbUniqueName`<sup>Required</sup> <a name="DbUniqueName" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference.property.dbUniqueName"></a>

```go
func DbUniqueName() *string
```

- *Type:* *string

---

##### `GcpOracleZone`<sup>Required</sup> <a name="GcpOracleZone" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference.property.gcpOracleZone"></a>

```go
func GcpOracleZone() *string
```

- *Type:* *string

---

##### `NcharacterSet`<sup>Required</sup> <a name="NcharacterSet" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference.property.ncharacterSet"></a>

```go
func NcharacterSet() *string
```

- *Type:* *string

---

##### `PluggableDatabaseId`<sup>Required</sup> <a name="PluggableDatabaseId" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference.property.pluggableDatabaseId"></a>

```go
func PluggableDatabaseId() *string
```

- *Type:* *string

---

##### `PluggableDatabaseName`<sup>Required</sup> <a name="PluggableDatabaseName" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference.property.pluggableDatabaseName"></a>

```go
func PluggableDatabaseName() *string
```

- *Type:* *string

---

##### `TdeWalletPassword`<sup>Required</sup> <a name="TdeWalletPassword" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference.property.tdeWalletPassword"></a>

```go
func TdeWalletPassword() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabase
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabase">GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabase</a>

---


### GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDatabaseManagementConfigOutputReference <a name="GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDatabaseManagementConfigOutputReference" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDatabaseManagementConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDatabaseManagementConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googleoracledatabasedbsystem"

googleoracledatabasedbsystem.NewGoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDatabaseManagementConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDatabaseManagementConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDatabaseManagementConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDatabaseManagementConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDatabaseManagementConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDatabaseManagementConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDatabaseManagementConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDatabaseManagementConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDatabaseManagementConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDatabaseManagementConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDatabaseManagementConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDatabaseManagementConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDatabaseManagementConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDatabaseManagementConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDatabaseManagementConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDatabaseManagementConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDatabaseManagementConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDatabaseManagementConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDatabaseManagementConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDatabaseManagementConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDatabaseManagementConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDatabaseManagementConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDatabaseManagementConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDatabaseManagementConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDatabaseManagementConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDatabaseManagementConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDatabaseManagementConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDatabaseManagementConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDatabaseManagementConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDatabaseManagementConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDatabaseManagementConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDatabaseManagementConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDatabaseManagementConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDatabaseManagementConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDatabaseManagementConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDatabaseManagementConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDatabaseManagementConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDatabaseManagementConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDatabaseManagementConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDatabaseManagementConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDatabaseManagementConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDatabaseManagementConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDatabaseManagementConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDatabaseManagementConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDatabaseManagementConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDatabaseManagementConfigOutputReference.property.managementState">ManagementState</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDatabaseManagementConfigOutputReference.property.managementType">ManagementType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDatabaseManagementConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDatabaseManagementConfig">GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDatabaseManagementConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDatabaseManagementConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDatabaseManagementConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ManagementState`<sup>Required</sup> <a name="ManagementState" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDatabaseManagementConfigOutputReference.property.managementState"></a>

```go
func ManagementState() *string
```

- *Type:* *string

---

##### `ManagementType`<sup>Required</sup> <a name="ManagementType" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDatabaseManagementConfigOutputReference.property.managementType"></a>

```go
func ManagementType() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDatabaseManagementConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDatabaseManagementConfig
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDatabaseManagementConfig">GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDatabaseManagementConfig</a>

---


### GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigBackupDestinationDetailsList <a name="GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigBackupDestinationDetailsList" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigBackupDestinationDetailsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigBackupDestinationDetailsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googleoracledatabasedbsystem"

googleoracledatabasedbsystem.NewGoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigBackupDestinationDetailsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigBackupDestinationDetailsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigBackupDestinationDetailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigBackupDestinationDetailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigBackupDestinationDetailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigBackupDestinationDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigBackupDestinationDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigBackupDestinationDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigBackupDestinationDetailsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigBackupDestinationDetailsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigBackupDestinationDetailsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigBackupDestinationDetailsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigBackupDestinationDetailsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigBackupDestinationDetailsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigBackupDestinationDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigBackupDestinationDetailsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigBackupDestinationDetailsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigBackupDestinationDetailsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigBackupDestinationDetailsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigBackupDestinationDetailsList.get"></a>

```go
func Get(index *f64) GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigBackupDestinationDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigBackupDestinationDetailsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigBackupDestinationDetailsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigBackupDestinationDetailsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigBackupDestinationDetailsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigBackupDestinationDetailsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigBackupDestinationDetailsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigBackupDestinationDetailsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigBackupDestinationDetailsOutputReference <a name="GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigBackupDestinationDetailsOutputReference" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigBackupDestinationDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigBackupDestinationDetailsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googleoracledatabasedbsystem"

googleoracledatabasedbsystem.NewGoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigBackupDestinationDetailsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigBackupDestinationDetailsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigBackupDestinationDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigBackupDestinationDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigBackupDestinationDetailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigBackupDestinationDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigBackupDestinationDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigBackupDestinationDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigBackupDestinationDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigBackupDestinationDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigBackupDestinationDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigBackupDestinationDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigBackupDestinationDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigBackupDestinationDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigBackupDestinationDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigBackupDestinationDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigBackupDestinationDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigBackupDestinationDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigBackupDestinationDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigBackupDestinationDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigBackupDestinationDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigBackupDestinationDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigBackupDestinationDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigBackupDestinationDetailsOutputReference.resetType">ResetType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigBackupDestinationDetailsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigBackupDestinationDetailsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigBackupDestinationDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigBackupDestinationDetailsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigBackupDestinationDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigBackupDestinationDetailsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigBackupDestinationDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigBackupDestinationDetailsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigBackupDestinationDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigBackupDestinationDetailsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigBackupDestinationDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigBackupDestinationDetailsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigBackupDestinationDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigBackupDestinationDetailsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigBackupDestinationDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigBackupDestinationDetailsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigBackupDestinationDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigBackupDestinationDetailsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigBackupDestinationDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigBackupDestinationDetailsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigBackupDestinationDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigBackupDestinationDetailsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigBackupDestinationDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigBackupDestinationDetailsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetType` <a name="ResetType" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigBackupDestinationDetailsOutputReference.resetType"></a>

```go
func ResetType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigBackupDestinationDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigBackupDestinationDetailsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigBackupDestinationDetailsOutputReference.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigBackupDestinationDetailsOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigBackupDestinationDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigBackupDestinationDetailsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigBackupDestinationDetailsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigBackupDestinationDetailsOutputReference.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigBackupDestinationDetailsOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigBackupDestinationDetailsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigOutputReference <a name="GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigOutputReference" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googleoracledatabasedbsystem"

googleoracledatabasedbsystem.NewGoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigOutputReference.putBackupDestinationDetails">PutBackupDestinationDetails</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigOutputReference.resetAutoBackupEnabled">ResetAutoBackupEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigOutputReference.resetAutoFullBackupDay">ResetAutoFullBackupDay</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigOutputReference.resetAutoFullBackupWindow">ResetAutoFullBackupWindow</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigOutputReference.resetAutoIncrementalBackupWindow">ResetAutoIncrementalBackupWindow</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigOutputReference.resetBackupDeletionPolicy">ResetBackupDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigOutputReference.resetBackupDestinationDetails">ResetBackupDestinationDetails</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigOutputReference.resetRetentionPeriodDays">ResetRetentionPeriodDays</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutBackupDestinationDetails` <a name="PutBackupDestinationDetails" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigOutputReference.putBackupDestinationDetails"></a>

```go
func PutBackupDestinationDetails(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigOutputReference.putBackupDestinationDetails.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetAutoBackupEnabled` <a name="ResetAutoBackupEnabled" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigOutputReference.resetAutoBackupEnabled"></a>

```go
func ResetAutoBackupEnabled()
```

##### `ResetAutoFullBackupDay` <a name="ResetAutoFullBackupDay" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigOutputReference.resetAutoFullBackupDay"></a>

```go
func ResetAutoFullBackupDay()
```

##### `ResetAutoFullBackupWindow` <a name="ResetAutoFullBackupWindow" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigOutputReference.resetAutoFullBackupWindow"></a>

```go
func ResetAutoFullBackupWindow()
```

##### `ResetAutoIncrementalBackupWindow` <a name="ResetAutoIncrementalBackupWindow" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigOutputReference.resetAutoIncrementalBackupWindow"></a>

```go
func ResetAutoIncrementalBackupWindow()
```

##### `ResetBackupDeletionPolicy` <a name="ResetBackupDeletionPolicy" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigOutputReference.resetBackupDeletionPolicy"></a>

```go
func ResetBackupDeletionPolicy()
```

##### `ResetBackupDestinationDetails` <a name="ResetBackupDestinationDetails" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigOutputReference.resetBackupDestinationDetails"></a>

```go
func ResetBackupDestinationDetails()
```

##### `ResetRetentionPeriodDays` <a name="ResetRetentionPeriodDays" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigOutputReference.resetRetentionPeriodDays"></a>

```go
func ResetRetentionPeriodDays()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigOutputReference.property.backupDestinationDetails">BackupDestinationDetails</a></code> | <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigBackupDestinationDetailsList">GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigBackupDestinationDetailsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigOutputReference.property.autoBackupEnabledInput">AutoBackupEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigOutputReference.property.autoFullBackupDayInput">AutoFullBackupDayInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigOutputReference.property.autoFullBackupWindowInput">AutoFullBackupWindowInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigOutputReference.property.autoIncrementalBackupWindowInput">AutoIncrementalBackupWindowInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigOutputReference.property.backupDeletionPolicyInput">BackupDeletionPolicyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigOutputReference.property.backupDestinationDetailsInput">BackupDestinationDetailsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigOutputReference.property.retentionPeriodDaysInput">RetentionPeriodDaysInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigOutputReference.property.autoBackupEnabled">AutoBackupEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigOutputReference.property.autoFullBackupDay">AutoFullBackupDay</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigOutputReference.property.autoFullBackupWindow">AutoFullBackupWindow</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigOutputReference.property.autoIncrementalBackupWindow">AutoIncrementalBackupWindow</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigOutputReference.property.backupDeletionPolicy">BackupDeletionPolicy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigOutputReference.property.retentionPeriodDays">RetentionPeriodDays</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfig">GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `BackupDestinationDetails`<sup>Required</sup> <a name="BackupDestinationDetails" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigOutputReference.property.backupDestinationDetails"></a>

```go
func BackupDestinationDetails() GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigBackupDestinationDetailsList
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigBackupDestinationDetailsList">GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigBackupDestinationDetailsList</a>

---

##### `AutoBackupEnabledInput`<sup>Optional</sup> <a name="AutoBackupEnabledInput" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigOutputReference.property.autoBackupEnabledInput"></a>

```go
func AutoBackupEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `AutoFullBackupDayInput`<sup>Optional</sup> <a name="AutoFullBackupDayInput" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigOutputReference.property.autoFullBackupDayInput"></a>

```go
func AutoFullBackupDayInput() *string
```

- *Type:* *string

---

##### `AutoFullBackupWindowInput`<sup>Optional</sup> <a name="AutoFullBackupWindowInput" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigOutputReference.property.autoFullBackupWindowInput"></a>

```go
func AutoFullBackupWindowInput() *string
```

- *Type:* *string

---

##### `AutoIncrementalBackupWindowInput`<sup>Optional</sup> <a name="AutoIncrementalBackupWindowInput" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigOutputReference.property.autoIncrementalBackupWindowInput"></a>

```go
func AutoIncrementalBackupWindowInput() *string
```

- *Type:* *string

---

##### `BackupDeletionPolicyInput`<sup>Optional</sup> <a name="BackupDeletionPolicyInput" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigOutputReference.property.backupDeletionPolicyInput"></a>

```go
func BackupDeletionPolicyInput() *string
```

- *Type:* *string

---

##### `BackupDestinationDetailsInput`<sup>Optional</sup> <a name="BackupDestinationDetailsInput" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigOutputReference.property.backupDestinationDetailsInput"></a>

```go
func BackupDestinationDetailsInput() interface{}
```

- *Type:* interface{}

---

##### `RetentionPeriodDaysInput`<sup>Optional</sup> <a name="RetentionPeriodDaysInput" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigOutputReference.property.retentionPeriodDaysInput"></a>

```go
func RetentionPeriodDaysInput() *f64
```

- *Type:* *f64

---

##### `AutoBackupEnabled`<sup>Required</sup> <a name="AutoBackupEnabled" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigOutputReference.property.autoBackupEnabled"></a>

```go
func AutoBackupEnabled() interface{}
```

- *Type:* interface{}

---

##### `AutoFullBackupDay`<sup>Required</sup> <a name="AutoFullBackupDay" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigOutputReference.property.autoFullBackupDay"></a>

```go
func AutoFullBackupDay() *string
```

- *Type:* *string

---

##### `AutoFullBackupWindow`<sup>Required</sup> <a name="AutoFullBackupWindow" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigOutputReference.property.autoFullBackupWindow"></a>

```go
func AutoFullBackupWindow() *string
```

- *Type:* *string

---

##### `AutoIncrementalBackupWindow`<sup>Required</sup> <a name="AutoIncrementalBackupWindow" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigOutputReference.property.autoIncrementalBackupWindow"></a>

```go
func AutoIncrementalBackupWindow() *string
```

- *Type:* *string

---

##### `BackupDeletionPolicy`<sup>Required</sup> <a name="BackupDeletionPolicy" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigOutputReference.property.backupDeletionPolicy"></a>

```go
func BackupDeletionPolicy() *string
```

- *Type:* *string

---

##### `RetentionPeriodDays`<sup>Required</sup> <a name="RetentionPeriodDays" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigOutputReference.property.retentionPeriodDays"></a>

```go
func RetentionPeriodDays() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfig
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfig">GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfig</a>

---


### GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesOutputReference <a name="GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesOutputReference" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googleoracledatabasedbsystem"

googleoracledatabasedbsystem.NewGoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesOutputReference.putDatabaseManagementConfig">PutDatabaseManagementConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesOutputReference.putDbBackupConfig">PutDbBackupConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesOutputReference.resetDatabaseManagementConfig">ResetDatabaseManagementConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesOutputReference.resetDbBackupConfig">ResetDbBackupConfig</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutDatabaseManagementConfig` <a name="PutDatabaseManagementConfig" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesOutputReference.putDatabaseManagementConfig"></a>

```go
func PutDatabaseManagementConfig(value GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDatabaseManagementConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesOutputReference.putDatabaseManagementConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDatabaseManagementConfig">GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDatabaseManagementConfig</a>

---

##### `PutDbBackupConfig` <a name="PutDbBackupConfig" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesOutputReference.putDbBackupConfig"></a>

```go
func PutDbBackupConfig(value GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesOutputReference.putDbBackupConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfig">GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfig</a>

---

##### `ResetDatabaseManagementConfig` <a name="ResetDatabaseManagementConfig" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesOutputReference.resetDatabaseManagementConfig"></a>

```go
func ResetDatabaseManagementConfig()
```

##### `ResetDbBackupConfig` <a name="ResetDbBackupConfig" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesOutputReference.resetDbBackupConfig"></a>

```go
func ResetDbBackupConfig()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesOutputReference.property.databaseManagementConfig">DatabaseManagementConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDatabaseManagementConfigOutputReference">GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDatabaseManagementConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesOutputReference.property.dbBackupConfig">DbBackupConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigOutputReference">GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesOutputReference.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesOutputReference.property.databaseManagementConfigInput">DatabaseManagementConfigInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDatabaseManagementConfig">GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDatabaseManagementConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesOutputReference.property.dbBackupConfigInput">DbBackupConfigInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfig">GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesOutputReference.property.dbVersionInput">DbVersionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesOutputReference.property.dbVersion">DbVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabaseProperties">GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabaseProperties</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DatabaseManagementConfig`<sup>Required</sup> <a name="DatabaseManagementConfig" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesOutputReference.property.databaseManagementConfig"></a>

```go
func DatabaseManagementConfig() GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDatabaseManagementConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDatabaseManagementConfigOutputReference">GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDatabaseManagementConfigOutputReference</a>

---

##### `DbBackupConfig`<sup>Required</sup> <a name="DbBackupConfig" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesOutputReference.property.dbBackupConfig"></a>

```go
func DbBackupConfig() GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigOutputReference">GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigOutputReference</a>

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesOutputReference.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `DatabaseManagementConfigInput`<sup>Optional</sup> <a name="DatabaseManagementConfigInput" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesOutputReference.property.databaseManagementConfigInput"></a>

```go
func DatabaseManagementConfigInput() GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDatabaseManagementConfig
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDatabaseManagementConfig">GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDatabaseManagementConfig</a>

---

##### `DbBackupConfigInput`<sup>Optional</sup> <a name="DbBackupConfigInput" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesOutputReference.property.dbBackupConfigInput"></a>

```go
func DbBackupConfigInput() GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfig
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfig">GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfig</a>

---

##### `DbVersionInput`<sup>Optional</sup> <a name="DbVersionInput" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesOutputReference.property.dbVersionInput"></a>

```go
func DbVersionInput() *string
```

- *Type:* *string

---

##### `DbVersion`<sup>Required</sup> <a name="DbVersion" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesOutputReference.property.dbVersion"></a>

```go
func DbVersion() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabaseProperties
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabaseProperties">GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabaseProperties</a>

---


### GoogleOracleDatabaseDbSystemPropertiesDbHomeOutputReference <a name="GoogleOracleDatabaseDbSystemPropertiesDbHomeOutputReference" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googleoracledatabasedbsystem"

googleoracledatabasedbsystem.NewGoogleOracleDatabaseDbSystemPropertiesDbHomeOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleOracleDatabaseDbSystemPropertiesDbHomeOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeOutputReference.putDatabase">PutDatabase</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeOutputReference.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeOutputReference.resetIsUnifiedAuditingEnabled">ResetIsUnifiedAuditingEnabled</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutDatabase` <a name="PutDatabase" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeOutputReference.putDatabase"></a>

```go
func PutDatabase(value GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabase)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeOutputReference.putDatabase.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabase">GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabase</a>

---

##### `ResetDisplayName` <a name="ResetDisplayName" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeOutputReference.resetDisplayName"></a>

```go
func ResetDisplayName()
```

##### `ResetIsUnifiedAuditingEnabled` <a name="ResetIsUnifiedAuditingEnabled" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeOutputReference.resetIsUnifiedAuditingEnabled"></a>

```go
func ResetIsUnifiedAuditingEnabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeOutputReference.property.database">Database</a></code> | <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference">GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeOutputReference.property.databaseInput">DatabaseInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabase">GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabase</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeOutputReference.property.dbVersionInput">DbVersionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeOutputReference.property.displayNameInput">DisplayNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeOutputReference.property.isUnifiedAuditingEnabledInput">IsUnifiedAuditingEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeOutputReference.property.dbVersion">DbVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeOutputReference.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeOutputReference.property.isUnifiedAuditingEnabled">IsUnifiedAuditingEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHome">GoogleOracleDatabaseDbSystemPropertiesDbHome</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Database`<sup>Required</sup> <a name="Database" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeOutputReference.property.database"></a>

```go
func Database() GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference">GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference</a>

---

##### `DatabaseInput`<sup>Optional</sup> <a name="DatabaseInput" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeOutputReference.property.databaseInput"></a>

```go
func DatabaseInput() GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabase
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabase">GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabase</a>

---

##### `DbVersionInput`<sup>Optional</sup> <a name="DbVersionInput" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeOutputReference.property.dbVersionInput"></a>

```go
func DbVersionInput() *string
```

- *Type:* *string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeOutputReference.property.displayNameInput"></a>

```go
func DisplayNameInput() *string
```

- *Type:* *string

---

##### `IsUnifiedAuditingEnabledInput`<sup>Optional</sup> <a name="IsUnifiedAuditingEnabledInput" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeOutputReference.property.isUnifiedAuditingEnabledInput"></a>

```go
func IsUnifiedAuditingEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `DbVersion`<sup>Required</sup> <a name="DbVersion" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeOutputReference.property.dbVersion"></a>

```go
func DbVersion() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeOutputReference.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `IsUnifiedAuditingEnabled`<sup>Required</sup> <a name="IsUnifiedAuditingEnabled" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeOutputReference.property.isUnifiedAuditingEnabled"></a>

```go
func IsUnifiedAuditingEnabled() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleOracleDatabaseDbSystemPropertiesDbHome
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHome">GoogleOracleDatabaseDbSystemPropertiesDbHome</a>

---


### GoogleOracleDatabaseDbSystemPropertiesDbSystemOptionsOutputReference <a name="GoogleOracleDatabaseDbSystemPropertiesDbSystemOptionsOutputReference" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbSystemOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbSystemOptionsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googleoracledatabasedbsystem"

googleoracledatabasedbsystem.NewGoogleOracleDatabaseDbSystemPropertiesDbSystemOptionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleOracleDatabaseDbSystemPropertiesDbSystemOptionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbSystemOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbSystemOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbSystemOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbSystemOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbSystemOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbSystemOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbSystemOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbSystemOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbSystemOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbSystemOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbSystemOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbSystemOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbSystemOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbSystemOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbSystemOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbSystemOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbSystemOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbSystemOptionsOutputReference.resetStorageManagement">ResetStorageManagement</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbSystemOptionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbSystemOptionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbSystemOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbSystemOptionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbSystemOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbSystemOptionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbSystemOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbSystemOptionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbSystemOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbSystemOptionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbSystemOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbSystemOptionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbSystemOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbSystemOptionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbSystemOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbSystemOptionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbSystemOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbSystemOptionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbSystemOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbSystemOptionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbSystemOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbSystemOptionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbSystemOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbSystemOptionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetStorageManagement` <a name="ResetStorageManagement" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbSystemOptionsOutputReference.resetStorageManagement"></a>

```go
func ResetStorageManagement()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbSystemOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbSystemOptionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbSystemOptionsOutputReference.property.storageManagementInput">StorageManagementInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbSystemOptionsOutputReference.property.storageManagement">StorageManagement</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbSystemOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbSystemOptions">GoogleOracleDatabaseDbSystemPropertiesDbSystemOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbSystemOptionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbSystemOptionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `StorageManagementInput`<sup>Optional</sup> <a name="StorageManagementInput" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbSystemOptionsOutputReference.property.storageManagementInput"></a>

```go
func StorageManagementInput() *string
```

- *Type:* *string

---

##### `StorageManagement`<sup>Required</sup> <a name="StorageManagement" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbSystemOptionsOutputReference.property.storageManagement"></a>

```go
func StorageManagement() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbSystemOptionsOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleOracleDatabaseDbSystemPropertiesDbSystemOptions
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbSystemOptions">GoogleOracleDatabaseDbSystemPropertiesDbSystemOptions</a>

---


### GoogleOracleDatabaseDbSystemPropertiesOutputReference <a name="GoogleOracleDatabaseDbSystemPropertiesOutputReference" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googleoracledatabasedbsystem"

googleoracledatabasedbsystem.NewGoogleOracleDatabaseDbSystemPropertiesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleOracleDatabaseDbSystemPropertiesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesOutputReference.putDataCollectionOptions">PutDataCollectionOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesOutputReference.putDbHome">PutDbHome</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesOutputReference.putDbSystemOptions">PutDbSystemOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesOutputReference.putTimeZone">PutTimeZone</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesOutputReference.resetComputeModel">ResetComputeModel</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesOutputReference.resetDataCollectionOptions">ResetDataCollectionOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesOutputReference.resetDataStorageSizeGb">ResetDataStorageSizeGb</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesOutputReference.resetDbHome">ResetDbHome</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesOutputReference.resetDbSystemOptions">ResetDbSystemOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesOutputReference.resetDomain">ResetDomain</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesOutputReference.resetHostnamePrefix">ResetHostnamePrefix</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesOutputReference.resetMemorySizeGb">ResetMemorySizeGb</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesOutputReference.resetNodeCount">ResetNodeCount</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesOutputReference.resetPrivateIp">ResetPrivateIp</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesOutputReference.resetRecoStorageSizeGb">ResetRecoStorageSizeGb</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesOutputReference.resetTimeZone">ResetTimeZone</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutDataCollectionOptions` <a name="PutDataCollectionOptions" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesOutputReference.putDataCollectionOptions"></a>

```go
func PutDataCollectionOptions(value GoogleOracleDatabaseDbSystemPropertiesDataCollectionOptions)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesOutputReference.putDataCollectionOptions.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDataCollectionOptions">GoogleOracleDatabaseDbSystemPropertiesDataCollectionOptions</a>

---

##### `PutDbHome` <a name="PutDbHome" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesOutputReference.putDbHome"></a>

```go
func PutDbHome(value GoogleOracleDatabaseDbSystemPropertiesDbHome)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesOutputReference.putDbHome.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHome">GoogleOracleDatabaseDbSystemPropertiesDbHome</a>

---

##### `PutDbSystemOptions` <a name="PutDbSystemOptions" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesOutputReference.putDbSystemOptions"></a>

```go
func PutDbSystemOptions(value GoogleOracleDatabaseDbSystemPropertiesDbSystemOptions)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesOutputReference.putDbSystemOptions.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbSystemOptions">GoogleOracleDatabaseDbSystemPropertiesDbSystemOptions</a>

---

##### `PutTimeZone` <a name="PutTimeZone" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesOutputReference.putTimeZone"></a>

```go
func PutTimeZone(value GoogleOracleDatabaseDbSystemPropertiesTimeZone)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesOutputReference.putTimeZone.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesTimeZone">GoogleOracleDatabaseDbSystemPropertiesTimeZone</a>

---

##### `ResetComputeModel` <a name="ResetComputeModel" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesOutputReference.resetComputeModel"></a>

```go
func ResetComputeModel()
```

##### `ResetDataCollectionOptions` <a name="ResetDataCollectionOptions" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesOutputReference.resetDataCollectionOptions"></a>

```go
func ResetDataCollectionOptions()
```

##### `ResetDataStorageSizeGb` <a name="ResetDataStorageSizeGb" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesOutputReference.resetDataStorageSizeGb"></a>

```go
func ResetDataStorageSizeGb()
```

##### `ResetDbHome` <a name="ResetDbHome" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesOutputReference.resetDbHome"></a>

```go
func ResetDbHome()
```

##### `ResetDbSystemOptions` <a name="ResetDbSystemOptions" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesOutputReference.resetDbSystemOptions"></a>

```go
func ResetDbSystemOptions()
```

##### `ResetDomain` <a name="ResetDomain" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesOutputReference.resetDomain"></a>

```go
func ResetDomain()
```

##### `ResetHostnamePrefix` <a name="ResetHostnamePrefix" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesOutputReference.resetHostnamePrefix"></a>

```go
func ResetHostnamePrefix()
```

##### `ResetMemorySizeGb` <a name="ResetMemorySizeGb" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesOutputReference.resetMemorySizeGb"></a>

```go
func ResetMemorySizeGb()
```

##### `ResetNodeCount` <a name="ResetNodeCount" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesOutputReference.resetNodeCount"></a>

```go
func ResetNodeCount()
```

##### `ResetPrivateIp` <a name="ResetPrivateIp" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesOutputReference.resetPrivateIp"></a>

```go
func ResetPrivateIp()
```

##### `ResetRecoStorageSizeGb` <a name="ResetRecoStorageSizeGb" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesOutputReference.resetRecoStorageSizeGb"></a>

```go
func ResetRecoStorageSizeGb()
```

##### `ResetTimeZone` <a name="ResetTimeZone" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesOutputReference.resetTimeZone"></a>

```go
func ResetTimeZone()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesOutputReference.property.dataCollectionOptions">DataCollectionOptions</a></code> | <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDataCollectionOptionsOutputReference">GoogleOracleDatabaseDbSystemPropertiesDataCollectionOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesOutputReference.property.dbHome">DbHome</a></code> | <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeOutputReference">GoogleOracleDatabaseDbSystemPropertiesDbHomeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesOutputReference.property.dbSystemOptions">DbSystemOptions</a></code> | <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbSystemOptionsOutputReference">GoogleOracleDatabaseDbSystemPropertiesDbSystemOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesOutputReference.property.hostname">Hostname</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesOutputReference.property.lifecycleState">LifecycleState</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesOutputReference.property.ocid">Ocid</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesOutputReference.property.timeZone">TimeZone</a></code> | <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesTimeZoneOutputReference">GoogleOracleDatabaseDbSystemPropertiesTimeZoneOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesOutputReference.property.computeCountInput">ComputeCountInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesOutputReference.property.computeModelInput">ComputeModelInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesOutputReference.property.databaseEditionInput">DatabaseEditionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesOutputReference.property.dataCollectionOptionsInput">DataCollectionOptionsInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDataCollectionOptions">GoogleOracleDatabaseDbSystemPropertiesDataCollectionOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesOutputReference.property.dataStorageSizeGbInput">DataStorageSizeGbInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesOutputReference.property.dbHomeInput">DbHomeInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHome">GoogleOracleDatabaseDbSystemPropertiesDbHome</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesOutputReference.property.dbSystemOptionsInput">DbSystemOptionsInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbSystemOptions">GoogleOracleDatabaseDbSystemPropertiesDbSystemOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesOutputReference.property.domainInput">DomainInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesOutputReference.property.hostnamePrefixInput">HostnamePrefixInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesOutputReference.property.initialDataStorageSizeGbInput">InitialDataStorageSizeGbInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesOutputReference.property.licenseModelInput">LicenseModelInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesOutputReference.property.memorySizeGbInput">MemorySizeGbInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesOutputReference.property.nodeCountInput">NodeCountInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesOutputReference.property.privateIpInput">PrivateIpInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesOutputReference.property.recoStorageSizeGbInput">RecoStorageSizeGbInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesOutputReference.property.shapeInput">ShapeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesOutputReference.property.sshPublicKeysInput">SshPublicKeysInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesOutputReference.property.timeZoneInput">TimeZoneInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesTimeZone">GoogleOracleDatabaseDbSystemPropertiesTimeZone</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesOutputReference.property.computeCount">ComputeCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesOutputReference.property.computeModel">ComputeModel</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesOutputReference.property.databaseEdition">DatabaseEdition</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesOutputReference.property.dataStorageSizeGb">DataStorageSizeGb</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesOutputReference.property.domain">Domain</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesOutputReference.property.hostnamePrefix">HostnamePrefix</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesOutputReference.property.initialDataStorageSizeGb">InitialDataStorageSizeGb</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesOutputReference.property.licenseModel">LicenseModel</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesOutputReference.property.memorySizeGb">MemorySizeGb</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesOutputReference.property.nodeCount">NodeCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesOutputReference.property.privateIp">PrivateIp</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesOutputReference.property.recoStorageSizeGb">RecoStorageSizeGb</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesOutputReference.property.shape">Shape</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesOutputReference.property.sshPublicKeys">SshPublicKeys</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemProperties">GoogleOracleDatabaseDbSystemProperties</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DataCollectionOptions`<sup>Required</sup> <a name="DataCollectionOptions" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesOutputReference.property.dataCollectionOptions"></a>

```go
func DataCollectionOptions() GoogleOracleDatabaseDbSystemPropertiesDataCollectionOptionsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDataCollectionOptionsOutputReference">GoogleOracleDatabaseDbSystemPropertiesDataCollectionOptionsOutputReference</a>

---

##### `DbHome`<sup>Required</sup> <a name="DbHome" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesOutputReference.property.dbHome"></a>

```go
func DbHome() GoogleOracleDatabaseDbSystemPropertiesDbHomeOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeOutputReference">GoogleOracleDatabaseDbSystemPropertiesDbHomeOutputReference</a>

---

##### `DbSystemOptions`<sup>Required</sup> <a name="DbSystemOptions" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesOutputReference.property.dbSystemOptions"></a>

```go
func DbSystemOptions() GoogleOracleDatabaseDbSystemPropertiesDbSystemOptionsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbSystemOptionsOutputReference">GoogleOracleDatabaseDbSystemPropertiesDbSystemOptionsOutputReference</a>

---

##### `Hostname`<sup>Required</sup> <a name="Hostname" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesOutputReference.property.hostname"></a>

```go
func Hostname() *string
```

- *Type:* *string

---

##### `LifecycleState`<sup>Required</sup> <a name="LifecycleState" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesOutputReference.property.lifecycleState"></a>

```go
func LifecycleState() *string
```

- *Type:* *string

---

##### `Ocid`<sup>Required</sup> <a name="Ocid" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesOutputReference.property.ocid"></a>

```go
func Ocid() *string
```

- *Type:* *string

---

##### `TimeZone`<sup>Required</sup> <a name="TimeZone" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesOutputReference.property.timeZone"></a>

```go
func TimeZone() GoogleOracleDatabaseDbSystemPropertiesTimeZoneOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesTimeZoneOutputReference">GoogleOracleDatabaseDbSystemPropertiesTimeZoneOutputReference</a>

---

##### `ComputeCountInput`<sup>Optional</sup> <a name="ComputeCountInput" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesOutputReference.property.computeCountInput"></a>

```go
func ComputeCountInput() *f64
```

- *Type:* *f64

---

##### `ComputeModelInput`<sup>Optional</sup> <a name="ComputeModelInput" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesOutputReference.property.computeModelInput"></a>

```go
func ComputeModelInput() *string
```

- *Type:* *string

---

##### `DatabaseEditionInput`<sup>Optional</sup> <a name="DatabaseEditionInput" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesOutputReference.property.databaseEditionInput"></a>

```go
func DatabaseEditionInput() *string
```

- *Type:* *string

---

##### `DataCollectionOptionsInput`<sup>Optional</sup> <a name="DataCollectionOptionsInput" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesOutputReference.property.dataCollectionOptionsInput"></a>

```go
func DataCollectionOptionsInput() GoogleOracleDatabaseDbSystemPropertiesDataCollectionOptions
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDataCollectionOptions">GoogleOracleDatabaseDbSystemPropertiesDataCollectionOptions</a>

---

##### `DataStorageSizeGbInput`<sup>Optional</sup> <a name="DataStorageSizeGbInput" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesOutputReference.property.dataStorageSizeGbInput"></a>

```go
func DataStorageSizeGbInput() *f64
```

- *Type:* *f64

---

##### `DbHomeInput`<sup>Optional</sup> <a name="DbHomeInput" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesOutputReference.property.dbHomeInput"></a>

```go
func DbHomeInput() GoogleOracleDatabaseDbSystemPropertiesDbHome
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHome">GoogleOracleDatabaseDbSystemPropertiesDbHome</a>

---

##### `DbSystemOptionsInput`<sup>Optional</sup> <a name="DbSystemOptionsInput" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesOutputReference.property.dbSystemOptionsInput"></a>

```go
func DbSystemOptionsInput() GoogleOracleDatabaseDbSystemPropertiesDbSystemOptions
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbSystemOptions">GoogleOracleDatabaseDbSystemPropertiesDbSystemOptions</a>

---

##### `DomainInput`<sup>Optional</sup> <a name="DomainInput" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesOutputReference.property.domainInput"></a>

```go
func DomainInput() *string
```

- *Type:* *string

---

##### `HostnamePrefixInput`<sup>Optional</sup> <a name="HostnamePrefixInput" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesOutputReference.property.hostnamePrefixInput"></a>

```go
func HostnamePrefixInput() *string
```

- *Type:* *string

---

##### `InitialDataStorageSizeGbInput`<sup>Optional</sup> <a name="InitialDataStorageSizeGbInput" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesOutputReference.property.initialDataStorageSizeGbInput"></a>

```go
func InitialDataStorageSizeGbInput() *f64
```

- *Type:* *f64

---

##### `LicenseModelInput`<sup>Optional</sup> <a name="LicenseModelInput" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesOutputReference.property.licenseModelInput"></a>

```go
func LicenseModelInput() *string
```

- *Type:* *string

---

##### `MemorySizeGbInput`<sup>Optional</sup> <a name="MemorySizeGbInput" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesOutputReference.property.memorySizeGbInput"></a>

```go
func MemorySizeGbInput() *f64
```

- *Type:* *f64

---

##### `NodeCountInput`<sup>Optional</sup> <a name="NodeCountInput" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesOutputReference.property.nodeCountInput"></a>

```go
func NodeCountInput() *f64
```

- *Type:* *f64

---

##### `PrivateIpInput`<sup>Optional</sup> <a name="PrivateIpInput" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesOutputReference.property.privateIpInput"></a>

```go
func PrivateIpInput() *string
```

- *Type:* *string

---

##### `RecoStorageSizeGbInput`<sup>Optional</sup> <a name="RecoStorageSizeGbInput" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesOutputReference.property.recoStorageSizeGbInput"></a>

```go
func RecoStorageSizeGbInput() *f64
```

- *Type:* *f64

---

##### `ShapeInput`<sup>Optional</sup> <a name="ShapeInput" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesOutputReference.property.shapeInput"></a>

```go
func ShapeInput() *string
```

- *Type:* *string

---

##### `SshPublicKeysInput`<sup>Optional</sup> <a name="SshPublicKeysInput" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesOutputReference.property.sshPublicKeysInput"></a>

```go
func SshPublicKeysInput() *[]*string
```

- *Type:* *[]*string

---

##### `TimeZoneInput`<sup>Optional</sup> <a name="TimeZoneInput" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesOutputReference.property.timeZoneInput"></a>

```go
func TimeZoneInput() GoogleOracleDatabaseDbSystemPropertiesTimeZone
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesTimeZone">GoogleOracleDatabaseDbSystemPropertiesTimeZone</a>

---

##### `ComputeCount`<sup>Required</sup> <a name="ComputeCount" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesOutputReference.property.computeCount"></a>

```go
func ComputeCount() *f64
```

- *Type:* *f64

---

##### `ComputeModel`<sup>Required</sup> <a name="ComputeModel" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesOutputReference.property.computeModel"></a>

```go
func ComputeModel() *string
```

- *Type:* *string

---

##### `DatabaseEdition`<sup>Required</sup> <a name="DatabaseEdition" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesOutputReference.property.databaseEdition"></a>

```go
func DatabaseEdition() *string
```

- *Type:* *string

---

##### `DataStorageSizeGb`<sup>Required</sup> <a name="DataStorageSizeGb" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesOutputReference.property.dataStorageSizeGb"></a>

```go
func DataStorageSizeGb() *f64
```

- *Type:* *f64

---

##### `Domain`<sup>Required</sup> <a name="Domain" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesOutputReference.property.domain"></a>

```go
func Domain() *string
```

- *Type:* *string

---

##### `HostnamePrefix`<sup>Required</sup> <a name="HostnamePrefix" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesOutputReference.property.hostnamePrefix"></a>

```go
func HostnamePrefix() *string
```

- *Type:* *string

---

##### `InitialDataStorageSizeGb`<sup>Required</sup> <a name="InitialDataStorageSizeGb" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesOutputReference.property.initialDataStorageSizeGb"></a>

```go
func InitialDataStorageSizeGb() *f64
```

- *Type:* *f64

---

##### `LicenseModel`<sup>Required</sup> <a name="LicenseModel" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesOutputReference.property.licenseModel"></a>

```go
func LicenseModel() *string
```

- *Type:* *string

---

##### `MemorySizeGb`<sup>Required</sup> <a name="MemorySizeGb" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesOutputReference.property.memorySizeGb"></a>

```go
func MemorySizeGb() *f64
```

- *Type:* *f64

---

##### `NodeCount`<sup>Required</sup> <a name="NodeCount" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesOutputReference.property.nodeCount"></a>

```go
func NodeCount() *f64
```

- *Type:* *f64

---

##### `PrivateIp`<sup>Required</sup> <a name="PrivateIp" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesOutputReference.property.privateIp"></a>

```go
func PrivateIp() *string
```

- *Type:* *string

---

##### `RecoStorageSizeGb`<sup>Required</sup> <a name="RecoStorageSizeGb" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesOutputReference.property.recoStorageSizeGb"></a>

```go
func RecoStorageSizeGb() *f64
```

- *Type:* *f64

---

##### `Shape`<sup>Required</sup> <a name="Shape" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesOutputReference.property.shape"></a>

```go
func Shape() *string
```

- *Type:* *string

---

##### `SshPublicKeys`<sup>Required</sup> <a name="SshPublicKeys" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesOutputReference.property.sshPublicKeys"></a>

```go
func SshPublicKeys() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleOracleDatabaseDbSystemProperties
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemProperties">GoogleOracleDatabaseDbSystemProperties</a>

---


### GoogleOracleDatabaseDbSystemPropertiesTimeZoneOutputReference <a name="GoogleOracleDatabaseDbSystemPropertiesTimeZoneOutputReference" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesTimeZoneOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesTimeZoneOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googleoracledatabasedbsystem"

googleoracledatabasedbsystem.NewGoogleOracleDatabaseDbSystemPropertiesTimeZoneOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleOracleDatabaseDbSystemPropertiesTimeZoneOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesTimeZoneOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesTimeZoneOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesTimeZoneOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesTimeZoneOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesTimeZoneOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesTimeZoneOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesTimeZoneOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesTimeZoneOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesTimeZoneOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesTimeZoneOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesTimeZoneOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesTimeZoneOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesTimeZoneOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesTimeZoneOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesTimeZoneOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesTimeZoneOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesTimeZoneOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesTimeZoneOutputReference.resetId">ResetId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesTimeZoneOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesTimeZoneOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesTimeZoneOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesTimeZoneOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesTimeZoneOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesTimeZoneOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesTimeZoneOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesTimeZoneOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesTimeZoneOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesTimeZoneOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesTimeZoneOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesTimeZoneOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesTimeZoneOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesTimeZoneOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesTimeZoneOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesTimeZoneOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesTimeZoneOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesTimeZoneOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesTimeZoneOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesTimeZoneOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesTimeZoneOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesTimeZoneOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesTimeZoneOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesTimeZoneOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetId` <a name="ResetId" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesTimeZoneOutputReference.resetId"></a>

```go
func ResetId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesTimeZoneOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesTimeZoneOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesTimeZoneOutputReference.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesTimeZoneOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesTimeZoneOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesTimeZone">GoogleOracleDatabaseDbSystemPropertiesTimeZone</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesTimeZoneOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesTimeZoneOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesTimeZoneOutputReference.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesTimeZoneOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesTimeZoneOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleOracleDatabaseDbSystemPropertiesTimeZone
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesTimeZone">GoogleOracleDatabaseDbSystemPropertiesTimeZone</a>

---


### GoogleOracleDatabaseDbSystemTimeoutsOutputReference <a name="GoogleOracleDatabaseDbSystemTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googleoracledatabasedbsystem"

googleoracledatabasedbsystem.NewGoogleOracleDatabaseDbSystemTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleOracleDatabaseDbSystemTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



