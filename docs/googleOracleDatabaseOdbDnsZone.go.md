# `googleOracleDatabaseOdbDnsZone` Submodule <a name="`googleOracleDatabaseOdbDnsZone` Submodule" id="@cdktn/provider-google-beta.googleOracleDatabaseOdbDnsZone"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleOracleDatabaseOdbDnsZone <a name="GoogleOracleDatabaseOdbDnsZone" id="@cdktn/provider-google-beta.googleOracleDatabaseOdbDnsZone.GoogleOracleDatabaseOdbDnsZone"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_oracle_database_odb_dns_zone google_oracle_database_odb_dns_zone}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleOracleDatabaseOdbDnsZone.GoogleOracleDatabaseOdbDnsZone.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v22/googleoracledatabaseodbdnszone"

googleoracledatabaseodbdnszone.NewGoogleOracleDatabaseOdbDnsZone(scope Construct, id *string, config GoogleOracleDatabaseOdbDnsZoneConfig) GoogleOracleDatabaseOdbDnsZone
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseOdbDnsZone.GoogleOracleDatabaseOdbDnsZone.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseOdbDnsZone.GoogleOracleDatabaseOdbDnsZone.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseOdbDnsZone.GoogleOracleDatabaseOdbDnsZone.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseOdbDnsZone.GoogleOracleDatabaseOdbDnsZoneConfig">GoogleOracleDatabaseOdbDnsZoneConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleOracleDatabaseOdbDnsZone.GoogleOracleDatabaseOdbDnsZone.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleOracleDatabaseOdbDnsZone.GoogleOracleDatabaseOdbDnsZone.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google-beta.googleOracleDatabaseOdbDnsZone.GoogleOracleDatabaseOdbDnsZone.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleOracleDatabaseOdbDnsZone.GoogleOracleDatabaseOdbDnsZoneConfig">GoogleOracleDatabaseOdbDnsZoneConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseOdbDnsZone.GoogleOracleDatabaseOdbDnsZone.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseOdbDnsZone.GoogleOracleDatabaseOdbDnsZone.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseOdbDnsZone.GoogleOracleDatabaseOdbDnsZone.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseOdbDnsZone.GoogleOracleDatabaseOdbDnsZone.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseOdbDnsZone.GoogleOracleDatabaseOdbDnsZone.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseOdbDnsZone.GoogleOracleDatabaseOdbDnsZone.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseOdbDnsZone.GoogleOracleDatabaseOdbDnsZone.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseOdbDnsZone.GoogleOracleDatabaseOdbDnsZone.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseOdbDnsZone.GoogleOracleDatabaseOdbDnsZone.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseOdbDnsZone.GoogleOracleDatabaseOdbDnsZone.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseOdbDnsZone.GoogleOracleDatabaseOdbDnsZone.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseOdbDnsZone.GoogleOracleDatabaseOdbDnsZone.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseOdbDnsZone.GoogleOracleDatabaseOdbDnsZone.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseOdbDnsZone.GoogleOracleDatabaseOdbDnsZone.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseOdbDnsZone.GoogleOracleDatabaseOdbDnsZone.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseOdbDnsZone.GoogleOracleDatabaseOdbDnsZone.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseOdbDnsZone.GoogleOracleDatabaseOdbDnsZone.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseOdbDnsZone.GoogleOracleDatabaseOdbDnsZone.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseOdbDnsZone.GoogleOracleDatabaseOdbDnsZone.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseOdbDnsZone.GoogleOracleDatabaseOdbDnsZone.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseOdbDnsZone.GoogleOracleDatabaseOdbDnsZone.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseOdbDnsZone.GoogleOracleDatabaseOdbDnsZone.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseOdbDnsZone.GoogleOracleDatabaseOdbDnsZone.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseOdbDnsZone.GoogleOracleDatabaseOdbDnsZone.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseOdbDnsZone.GoogleOracleDatabaseOdbDnsZone.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseOdbDnsZone.GoogleOracleDatabaseOdbDnsZone.resetDeletionPolicy">ResetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseOdbDnsZone.GoogleOracleDatabaseOdbDnsZone.resetDeletionProtection">ResetDeletionProtection</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseOdbDnsZone.GoogleOracleDatabaseOdbDnsZone.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseOdbDnsZone.GoogleOracleDatabaseOdbDnsZone.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseOdbDnsZone.GoogleOracleDatabaseOdbDnsZone.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseOdbDnsZone.GoogleOracleDatabaseOdbDnsZone.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleOracleDatabaseOdbDnsZone.GoogleOracleDatabaseOdbDnsZone.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-google-beta.googleOracleDatabaseOdbDnsZone.GoogleOracleDatabaseOdbDnsZone.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google-beta.googleOracleDatabaseOdbDnsZone.GoogleOracleDatabaseOdbDnsZone.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-google-beta.googleOracleDatabaseOdbDnsZone.GoogleOracleDatabaseOdbDnsZone.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google-beta.googleOracleDatabaseOdbDnsZone.GoogleOracleDatabaseOdbDnsZone.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleOracleDatabaseOdbDnsZone.GoogleOracleDatabaseOdbDnsZone.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-google-beta.googleOracleDatabaseOdbDnsZone.GoogleOracleDatabaseOdbDnsZone.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google-beta.googleOracleDatabaseOdbDnsZone.GoogleOracleDatabaseOdbDnsZone.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-google-beta.googleOracleDatabaseOdbDnsZone.GoogleOracleDatabaseOdbDnsZone.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-google-beta.googleOracleDatabaseOdbDnsZone.GoogleOracleDatabaseOdbDnsZone.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-google-beta.googleOracleDatabaseOdbDnsZone.GoogleOracleDatabaseOdbDnsZone.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-google-beta.googleOracleDatabaseOdbDnsZone.GoogleOracleDatabaseOdbDnsZone.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-google-beta.googleOracleDatabaseOdbDnsZone.GoogleOracleDatabaseOdbDnsZone.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleOracleDatabaseOdbDnsZone.GoogleOracleDatabaseOdbDnsZone.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseOdbDnsZone.GoogleOracleDatabaseOdbDnsZone.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseOdbDnsZone.GoogleOracleDatabaseOdbDnsZone.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseOdbDnsZone.GoogleOracleDatabaseOdbDnsZone.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseOdbDnsZone.GoogleOracleDatabaseOdbDnsZone.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseOdbDnsZone.GoogleOracleDatabaseOdbDnsZone.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseOdbDnsZone.GoogleOracleDatabaseOdbDnsZone.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseOdbDnsZone.GoogleOracleDatabaseOdbDnsZone.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseOdbDnsZone.GoogleOracleDatabaseOdbDnsZone.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseOdbDnsZone.GoogleOracleDatabaseOdbDnsZone.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseOdbDnsZone.GoogleOracleDatabaseOdbDnsZone.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseOdbDnsZone.GoogleOracleDatabaseOdbDnsZone.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseOdbDnsZone.GoogleOracleDatabaseOdbDnsZone.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseOdbDnsZone.GoogleOracleDatabaseOdbDnsZone.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseOdbDnsZone.GoogleOracleDatabaseOdbDnsZone.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseOdbDnsZone.GoogleOracleDatabaseOdbDnsZone.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseOdbDnsZone.GoogleOracleDatabaseOdbDnsZone.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseOdbDnsZone.GoogleOracleDatabaseOdbDnsZone.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseOdbDnsZone.GoogleOracleDatabaseOdbDnsZone.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-google-beta.googleOracleDatabaseOdbDnsZone.GoogleOracleDatabaseOdbDnsZone.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-google-beta.googleOracleDatabaseOdbDnsZone.GoogleOracleDatabaseOdbDnsZone.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleOracleDatabaseOdbDnsZone.GoogleOracleDatabaseOdbDnsZone.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleOracleDatabaseOdbDnsZone.GoogleOracleDatabaseOdbDnsZone.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseOdbDnsZone.GoogleOracleDatabaseOdbDnsZone.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseOdbDnsZone.GoogleOracleDatabaseOdbDnsZone.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-google-beta.googleOracleDatabaseOdbDnsZone.GoogleOracleDatabaseOdbDnsZone.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleOracleDatabaseOdbDnsZone.GoogleOracleDatabaseOdbDnsZone.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-google-beta.googleOracleDatabaseOdbDnsZone.GoogleOracleDatabaseOdbDnsZone.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleOracleDatabaseOdbDnsZone.GoogleOracleDatabaseOdbDnsZone.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google-beta.googleOracleDatabaseOdbDnsZone.GoogleOracleDatabaseOdbDnsZone.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-google-beta.googleOracleDatabaseOdbDnsZone.GoogleOracleDatabaseOdbDnsZone.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleOracleDatabaseOdbDnsZone.GoogleOracleDatabaseOdbDnsZone.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-google-beta.googleOracleDatabaseOdbDnsZone.GoogleOracleDatabaseOdbDnsZone.putTimeouts"></a>

```go
func PutTimeouts(value GoogleOracleDatabaseOdbDnsZoneTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleOracleDatabaseOdbDnsZone.GoogleOracleDatabaseOdbDnsZone.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleOracleDatabaseOdbDnsZone.GoogleOracleDatabaseOdbDnsZoneTimeouts">GoogleOracleDatabaseOdbDnsZoneTimeouts</a>

---

##### `ResetDeletionPolicy` <a name="ResetDeletionPolicy" id="@cdktn/provider-google-beta.googleOracleDatabaseOdbDnsZone.GoogleOracleDatabaseOdbDnsZone.resetDeletionPolicy"></a>

```go
func ResetDeletionPolicy()
```

##### `ResetDeletionProtection` <a name="ResetDeletionProtection" id="@cdktn/provider-google-beta.googleOracleDatabaseOdbDnsZone.GoogleOracleDatabaseOdbDnsZone.resetDeletionProtection"></a>

```go
func ResetDeletionProtection()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-google-beta.googleOracleDatabaseOdbDnsZone.GoogleOracleDatabaseOdbDnsZone.resetId"></a>

```go
func ResetId()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktn/provider-google-beta.googleOracleDatabaseOdbDnsZone.GoogleOracleDatabaseOdbDnsZone.resetLabels"></a>

```go
func ResetLabels()
```

##### `ResetProject` <a name="ResetProject" id="@cdktn/provider-google-beta.googleOracleDatabaseOdbDnsZone.GoogleOracleDatabaseOdbDnsZone.resetProject"></a>

```go
func ResetProject()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-google-beta.googleOracleDatabaseOdbDnsZone.GoogleOracleDatabaseOdbDnsZone.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseOdbDnsZone.GoogleOracleDatabaseOdbDnsZone.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseOdbDnsZone.GoogleOracleDatabaseOdbDnsZone.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseOdbDnsZone.GoogleOracleDatabaseOdbDnsZone.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseOdbDnsZone.GoogleOracleDatabaseOdbDnsZone.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a GoogleOracleDatabaseOdbDnsZone resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-google-beta.googleOracleDatabaseOdbDnsZone.GoogleOracleDatabaseOdbDnsZone.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v22/googleoracledatabaseodbdnszone"

googleoracledatabaseodbdnszone.GoogleOracleDatabaseOdbDnsZone_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleOracleDatabaseOdbDnsZone.GoogleOracleDatabaseOdbDnsZone.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-google-beta.googleOracleDatabaseOdbDnsZone.GoogleOracleDatabaseOdbDnsZone.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v22/googleoracledatabaseodbdnszone"

googleoracledatabaseodbdnszone.GoogleOracleDatabaseOdbDnsZone_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleOracleDatabaseOdbDnsZone.GoogleOracleDatabaseOdbDnsZone.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-google-beta.googleOracleDatabaseOdbDnsZone.GoogleOracleDatabaseOdbDnsZone.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v22/googleoracledatabaseodbdnszone"

googleoracledatabaseodbdnszone.GoogleOracleDatabaseOdbDnsZone_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleOracleDatabaseOdbDnsZone.GoogleOracleDatabaseOdbDnsZone.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-google-beta.googleOracleDatabaseOdbDnsZone.GoogleOracleDatabaseOdbDnsZone.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v22/googleoracledatabaseodbdnszone"

googleoracledatabaseodbdnszone.GoogleOracleDatabaseOdbDnsZone_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a GoogleOracleDatabaseOdbDnsZone resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleOracleDatabaseOdbDnsZone.GoogleOracleDatabaseOdbDnsZone.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google-beta.googleOracleDatabaseOdbDnsZone.GoogleOracleDatabaseOdbDnsZone.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the GoogleOracleDatabaseOdbDnsZone to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google-beta.googleOracleDatabaseOdbDnsZone.GoogleOracleDatabaseOdbDnsZone.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing GoogleOracleDatabaseOdbDnsZone that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_oracle_database_odb_dns_zone#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleOracleDatabaseOdbDnsZone.GoogleOracleDatabaseOdbDnsZone.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the GoogleOracleDatabaseOdbDnsZone to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseOdbDnsZone.GoogleOracleDatabaseOdbDnsZone.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseOdbDnsZone.GoogleOracleDatabaseOdbDnsZone.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseOdbDnsZone.GoogleOracleDatabaseOdbDnsZone.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseOdbDnsZone.GoogleOracleDatabaseOdbDnsZone.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseOdbDnsZone.GoogleOracleDatabaseOdbDnsZone.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseOdbDnsZone.GoogleOracleDatabaseOdbDnsZone.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseOdbDnsZone.GoogleOracleDatabaseOdbDnsZone.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseOdbDnsZone.GoogleOracleDatabaseOdbDnsZone.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseOdbDnsZone.GoogleOracleDatabaseOdbDnsZone.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseOdbDnsZone.GoogleOracleDatabaseOdbDnsZone.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseOdbDnsZone.GoogleOracleDatabaseOdbDnsZone.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseOdbDnsZone.GoogleOracleDatabaseOdbDnsZone.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseOdbDnsZone.GoogleOracleDatabaseOdbDnsZone.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseOdbDnsZone.GoogleOracleDatabaseOdbDnsZone.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseOdbDnsZone.GoogleOracleDatabaseOdbDnsZone.property.createTime">CreateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseOdbDnsZone.GoogleOracleDatabaseOdbDnsZone.property.effectiveLabels">EffectiveLabels</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseOdbDnsZone.GoogleOracleDatabaseOdbDnsZone.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseOdbDnsZone.GoogleOracleDatabaseOdbDnsZone.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseOdbDnsZone.GoogleOracleDatabaseOdbDnsZone.property.terraformLabels">TerraformLabels</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseOdbDnsZone.GoogleOracleDatabaseOdbDnsZone.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseOdbDnsZone.GoogleOracleDatabaseOdbDnsZoneTimeoutsOutputReference">GoogleOracleDatabaseOdbDnsZoneTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseOdbDnsZone.GoogleOracleDatabaseOdbDnsZone.property.deletionPolicyInput">DeletionPolicyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseOdbDnsZone.GoogleOracleDatabaseOdbDnsZone.property.deletionProtectionInput">DeletionProtectionInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseOdbDnsZone.GoogleOracleDatabaseOdbDnsZone.property.domainInput">DomainInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseOdbDnsZone.GoogleOracleDatabaseOdbDnsZone.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseOdbDnsZone.GoogleOracleDatabaseOdbDnsZone.property.labelsInput">LabelsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseOdbDnsZone.GoogleOracleDatabaseOdbDnsZone.property.locationInput">LocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseOdbDnsZone.GoogleOracleDatabaseOdbDnsZone.property.odbDnsZoneIdInput">OdbDnsZoneIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseOdbDnsZone.GoogleOracleDatabaseOdbDnsZone.property.odbnetworkInput">OdbnetworkInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseOdbDnsZone.GoogleOracleDatabaseOdbDnsZone.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseOdbDnsZone.GoogleOracleDatabaseOdbDnsZone.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseOdbDnsZone.GoogleOracleDatabaseOdbDnsZone.property.deletionPolicy">DeletionPolicy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseOdbDnsZone.GoogleOracleDatabaseOdbDnsZone.property.deletionProtection">DeletionProtection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseOdbDnsZone.GoogleOracleDatabaseOdbDnsZone.property.domain">Domain</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseOdbDnsZone.GoogleOracleDatabaseOdbDnsZone.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseOdbDnsZone.GoogleOracleDatabaseOdbDnsZone.property.labels">Labels</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseOdbDnsZone.GoogleOracleDatabaseOdbDnsZone.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseOdbDnsZone.GoogleOracleDatabaseOdbDnsZone.property.odbDnsZoneId">OdbDnsZoneId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseOdbDnsZone.GoogleOracleDatabaseOdbDnsZone.property.odbnetwork">Odbnetwork</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseOdbDnsZone.GoogleOracleDatabaseOdbDnsZone.property.project">Project</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-google-beta.googleOracleDatabaseOdbDnsZone.GoogleOracleDatabaseOdbDnsZone.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-google-beta.googleOracleDatabaseOdbDnsZone.GoogleOracleDatabaseOdbDnsZone.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleOracleDatabaseOdbDnsZone.GoogleOracleDatabaseOdbDnsZone.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-google-beta.googleOracleDatabaseOdbDnsZone.GoogleOracleDatabaseOdbDnsZone.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-google-beta.googleOracleDatabaseOdbDnsZone.GoogleOracleDatabaseOdbDnsZone.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-google-beta.googleOracleDatabaseOdbDnsZone.GoogleOracleDatabaseOdbDnsZone.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-google-beta.googleOracleDatabaseOdbDnsZone.GoogleOracleDatabaseOdbDnsZone.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google-beta.googleOracleDatabaseOdbDnsZone.GoogleOracleDatabaseOdbDnsZone.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google-beta.googleOracleDatabaseOdbDnsZone.GoogleOracleDatabaseOdbDnsZone.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google-beta.googleOracleDatabaseOdbDnsZone.GoogleOracleDatabaseOdbDnsZone.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google-beta.googleOracleDatabaseOdbDnsZone.GoogleOracleDatabaseOdbDnsZone.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google-beta.googleOracleDatabaseOdbDnsZone.GoogleOracleDatabaseOdbDnsZone.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleOracleDatabaseOdbDnsZone.GoogleOracleDatabaseOdbDnsZone.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google-beta.googleOracleDatabaseOdbDnsZone.GoogleOracleDatabaseOdbDnsZone.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktn/provider-google-beta.googleOracleDatabaseOdbDnsZone.GoogleOracleDatabaseOdbDnsZone.property.createTime"></a>

```go
func CreateTime() *string
```

- *Type:* *string

---

##### `EffectiveLabels`<sup>Required</sup> <a name="EffectiveLabels" id="@cdktn/provider-google-beta.googleOracleDatabaseOdbDnsZone.GoogleOracleDatabaseOdbDnsZone.property.effectiveLabels"></a>

```go
func EffectiveLabels() StringMap
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.StringMap

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google-beta.googleOracleDatabaseOdbDnsZone.GoogleOracleDatabaseOdbDnsZone.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktn/provider-google-beta.googleOracleDatabaseOdbDnsZone.GoogleOracleDatabaseOdbDnsZone.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `TerraformLabels`<sup>Required</sup> <a name="TerraformLabels" id="@cdktn/provider-google-beta.googleOracleDatabaseOdbDnsZone.GoogleOracleDatabaseOdbDnsZone.property.terraformLabels"></a>

```go
func TerraformLabels() StringMap
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.StringMap

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-google-beta.googleOracleDatabaseOdbDnsZone.GoogleOracleDatabaseOdbDnsZone.property.timeouts"></a>

```go
func Timeouts() GoogleOracleDatabaseOdbDnsZoneTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleOracleDatabaseOdbDnsZone.GoogleOracleDatabaseOdbDnsZoneTimeoutsOutputReference">GoogleOracleDatabaseOdbDnsZoneTimeoutsOutputReference</a>

---

##### `DeletionPolicyInput`<sup>Optional</sup> <a name="DeletionPolicyInput" id="@cdktn/provider-google-beta.googleOracleDatabaseOdbDnsZone.GoogleOracleDatabaseOdbDnsZone.property.deletionPolicyInput"></a>

```go
func DeletionPolicyInput() *string
```

- *Type:* *string

---

##### `DeletionProtectionInput`<sup>Optional</sup> <a name="DeletionProtectionInput" id="@cdktn/provider-google-beta.googleOracleDatabaseOdbDnsZone.GoogleOracleDatabaseOdbDnsZone.property.deletionProtectionInput"></a>

```go
func DeletionProtectionInput() interface{}
```

- *Type:* interface{}

---

##### `DomainInput`<sup>Optional</sup> <a name="DomainInput" id="@cdktn/provider-google-beta.googleOracleDatabaseOdbDnsZone.GoogleOracleDatabaseOdbDnsZone.property.domainInput"></a>

```go
func DomainInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google-beta.googleOracleDatabaseOdbDnsZone.GoogleOracleDatabaseOdbDnsZone.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktn/provider-google-beta.googleOracleDatabaseOdbDnsZone.GoogleOracleDatabaseOdbDnsZone.property.labelsInput"></a>

```go
func LabelsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktn/provider-google-beta.googleOracleDatabaseOdbDnsZone.GoogleOracleDatabaseOdbDnsZone.property.locationInput"></a>

```go
func LocationInput() *string
```

- *Type:* *string

---

##### `OdbDnsZoneIdInput`<sup>Optional</sup> <a name="OdbDnsZoneIdInput" id="@cdktn/provider-google-beta.googleOracleDatabaseOdbDnsZone.GoogleOracleDatabaseOdbDnsZone.property.odbDnsZoneIdInput"></a>

```go
func OdbDnsZoneIdInput() *string
```

- *Type:* *string

---

##### `OdbnetworkInput`<sup>Optional</sup> <a name="OdbnetworkInput" id="@cdktn/provider-google-beta.googleOracleDatabaseOdbDnsZone.GoogleOracleDatabaseOdbDnsZone.property.odbnetworkInput"></a>

```go
func OdbnetworkInput() *string
```

- *Type:* *string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktn/provider-google-beta.googleOracleDatabaseOdbDnsZone.GoogleOracleDatabaseOdbDnsZone.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-google-beta.googleOracleDatabaseOdbDnsZone.GoogleOracleDatabaseOdbDnsZone.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `DeletionPolicy`<sup>Required</sup> <a name="DeletionPolicy" id="@cdktn/provider-google-beta.googleOracleDatabaseOdbDnsZone.GoogleOracleDatabaseOdbDnsZone.property.deletionPolicy"></a>

```go
func DeletionPolicy() *string
```

- *Type:* *string

---

##### `DeletionProtection`<sup>Required</sup> <a name="DeletionProtection" id="@cdktn/provider-google-beta.googleOracleDatabaseOdbDnsZone.GoogleOracleDatabaseOdbDnsZone.property.deletionProtection"></a>

```go
func DeletionProtection() interface{}
```

- *Type:* interface{}

---

##### `Domain`<sup>Required</sup> <a name="Domain" id="@cdktn/provider-google-beta.googleOracleDatabaseOdbDnsZone.GoogleOracleDatabaseOdbDnsZone.property.domain"></a>

```go
func Domain() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleOracleDatabaseOdbDnsZone.GoogleOracleDatabaseOdbDnsZone.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktn/provider-google-beta.googleOracleDatabaseOdbDnsZone.GoogleOracleDatabaseOdbDnsZone.property.labels"></a>

```go
func Labels() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google-beta.googleOracleDatabaseOdbDnsZone.GoogleOracleDatabaseOdbDnsZone.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `OdbDnsZoneId`<sup>Required</sup> <a name="OdbDnsZoneId" id="@cdktn/provider-google-beta.googleOracleDatabaseOdbDnsZone.GoogleOracleDatabaseOdbDnsZone.property.odbDnsZoneId"></a>

```go
func OdbDnsZoneId() *string
```

- *Type:* *string

---

##### `Odbnetwork`<sup>Required</sup> <a name="Odbnetwork" id="@cdktn/provider-google-beta.googleOracleDatabaseOdbDnsZone.GoogleOracleDatabaseOdbDnsZone.property.odbnetwork"></a>

```go
func Odbnetwork() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktn/provider-google-beta.googleOracleDatabaseOdbDnsZone.GoogleOracleDatabaseOdbDnsZone.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseOdbDnsZone.GoogleOracleDatabaseOdbDnsZone.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-google-beta.googleOracleDatabaseOdbDnsZone.GoogleOracleDatabaseOdbDnsZone.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleOracleDatabaseOdbDnsZoneConfig <a name="GoogleOracleDatabaseOdbDnsZoneConfig" id="@cdktn/provider-google-beta.googleOracleDatabaseOdbDnsZone.GoogleOracleDatabaseOdbDnsZoneConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleOracleDatabaseOdbDnsZone.GoogleOracleDatabaseOdbDnsZoneConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v22/googleoracledatabaseodbdnszone"

&googleoracledatabaseodbdnszone.GoogleOracleDatabaseOdbDnsZoneConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	Domain: *string,
	Location: *string,
	OdbDnsZoneId: *string,
	Odbnetwork: *string,
	DeletionPolicy: *string,
	DeletionProtection: interface{},
	Id: *string,
	Labels: *map[string]*string,
	Project: *string,
	Timeouts: github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v22.googleOracleDatabaseOdbDnsZone.GoogleOracleDatabaseOdbDnsZoneTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseOdbDnsZone.GoogleOracleDatabaseOdbDnsZoneConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseOdbDnsZone.GoogleOracleDatabaseOdbDnsZoneConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseOdbDnsZone.GoogleOracleDatabaseOdbDnsZoneConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseOdbDnsZone.GoogleOracleDatabaseOdbDnsZoneConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseOdbDnsZone.GoogleOracleDatabaseOdbDnsZoneConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseOdbDnsZone.GoogleOracleDatabaseOdbDnsZoneConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseOdbDnsZone.GoogleOracleDatabaseOdbDnsZoneConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseOdbDnsZone.GoogleOracleDatabaseOdbDnsZoneConfig.property.domain">Domain</a></code> | <code>*string</code> | The DNS suffix for the zone. Ex: abc.example.com. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseOdbDnsZone.GoogleOracleDatabaseOdbDnsZoneConfig.property.location">Location</a></code> | <code>*string</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseOdbDnsZone.GoogleOracleDatabaseOdbDnsZoneConfig.property.odbDnsZoneId">OdbDnsZoneId</a></code> | <code>*string</code> | The ID of the OdbDnsZone to create. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseOdbDnsZone.GoogleOracleDatabaseOdbDnsZoneConfig.property.odbnetwork">Odbnetwork</a></code> | <code>*string</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseOdbDnsZone.GoogleOracleDatabaseOdbDnsZoneConfig.property.deletionPolicy">DeletionPolicy</a></code> | <code>*string</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseOdbDnsZone.GoogleOracleDatabaseOdbDnsZoneConfig.property.deletionProtection">DeletionProtection</a></code> | <code>interface{}</code> | Whether or not to allow Terraform to destroy the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseOdbDnsZone.GoogleOracleDatabaseOdbDnsZoneConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_oracle_database_odb_dns_zone#id GoogleOracleDatabaseOdbDnsZone#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseOdbDnsZone.GoogleOracleDatabaseOdbDnsZoneConfig.property.labels">Labels</a></code> | <code>*map[string]*string</code> | Labels or tags associated with the resource. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseOdbDnsZone.GoogleOracleDatabaseOdbDnsZoneConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_oracle_database_odb_dns_zone#project GoogleOracleDatabaseOdbDnsZone#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseOdbDnsZone.GoogleOracleDatabaseOdbDnsZoneConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseOdbDnsZone.GoogleOracleDatabaseOdbDnsZoneTimeouts">GoogleOracleDatabaseOdbDnsZoneTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google-beta.googleOracleDatabaseOdbDnsZone.GoogleOracleDatabaseOdbDnsZoneConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google-beta.googleOracleDatabaseOdbDnsZone.GoogleOracleDatabaseOdbDnsZoneConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google-beta.googleOracleDatabaseOdbDnsZone.GoogleOracleDatabaseOdbDnsZoneConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google-beta.googleOracleDatabaseOdbDnsZone.GoogleOracleDatabaseOdbDnsZoneConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google-beta.googleOracleDatabaseOdbDnsZone.GoogleOracleDatabaseOdbDnsZoneConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleOracleDatabaseOdbDnsZone.GoogleOracleDatabaseOdbDnsZoneConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google-beta.googleOracleDatabaseOdbDnsZone.GoogleOracleDatabaseOdbDnsZoneConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Domain`<sup>Required</sup> <a name="Domain" id="@cdktn/provider-google-beta.googleOracleDatabaseOdbDnsZone.GoogleOracleDatabaseOdbDnsZoneConfig.property.domain"></a>

```go
Domain *string
```

- *Type:* *string

The DNS suffix for the zone. Ex: abc.example.com.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_oracle_database_odb_dns_zone#domain GoogleOracleDatabaseOdbDnsZone#domain}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google-beta.googleOracleDatabaseOdbDnsZone.GoogleOracleDatabaseOdbDnsZoneConfig.property.location"></a>

```go
Location *string
```

- *Type:* *string

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_oracle_database_odb_dns_zone#location GoogleOracleDatabaseOdbDnsZone#location}

---

##### `OdbDnsZoneId`<sup>Required</sup> <a name="OdbDnsZoneId" id="@cdktn/provider-google-beta.googleOracleDatabaseOdbDnsZone.GoogleOracleDatabaseOdbDnsZoneConfig.property.odbDnsZoneId"></a>

```go
OdbDnsZoneId *string
```

- *Type:* *string

The ID of the OdbDnsZone to create.

This value is restricted
to (^[a-z](%5Ba-z0-9-%5D%7B0,61%7D%5Ba-z0-9%5D)?$) and must be a maximum of 63
characters in length. The value must start with a letter and end with
a letter or a number.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_oracle_database_odb_dns_zone#odb_dns_zone_id GoogleOracleDatabaseOdbDnsZone#odb_dns_zone_id}

---

##### `Odbnetwork`<sup>Required</sup> <a name="Odbnetwork" id="@cdktn/provider-google-beta.googleOracleDatabaseOdbDnsZone.GoogleOracleDatabaseOdbDnsZoneConfig.property.odbnetwork"></a>

```go
Odbnetwork *string
```

- *Type:* *string

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_oracle_database_odb_dns_zone#odbnetwork GoogleOracleDatabaseOdbDnsZone#odbnetwork}

---

##### `DeletionPolicy`<sup>Optional</sup> <a name="DeletionPolicy" id="@cdktn/provider-google-beta.googleOracleDatabaseOdbDnsZone.GoogleOracleDatabaseOdbDnsZoneConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_oracle_database_odb_dns_zone#deletion_policy GoogleOracleDatabaseOdbDnsZone#deletion_policy}

---

##### `DeletionProtection`<sup>Optional</sup> <a name="DeletionProtection" id="@cdktn/provider-google-beta.googleOracleDatabaseOdbDnsZone.GoogleOracleDatabaseOdbDnsZoneConfig.property.deletionProtection"></a>

```go
DeletionProtection interface{}
```

- *Type:* interface{}

Whether or not to allow Terraform to destroy the instance.

Unless this field is set to false in Terraform state, a terraform destroy or terraform apply that would delete the instance will fail.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_oracle_database_odb_dns_zone#deletion_protection GoogleOracleDatabaseOdbDnsZone#deletion_protection}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-google-beta.googleOracleDatabaseOdbDnsZone.GoogleOracleDatabaseOdbDnsZoneConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_oracle_database_odb_dns_zone#id GoogleOracleDatabaseOdbDnsZone#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktn/provider-google-beta.googleOracleDatabaseOdbDnsZone.GoogleOracleDatabaseOdbDnsZoneConfig.property.labels"></a>

```go
Labels *map[string]*string
```

- *Type:* *map[string]*string

Labels or tags associated with the resource.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_oracle_database_odb_dns_zone#labels GoogleOracleDatabaseOdbDnsZone#labels}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktn/provider-google-beta.googleOracleDatabaseOdbDnsZone.GoogleOracleDatabaseOdbDnsZoneConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_oracle_database_odb_dns_zone#project GoogleOracleDatabaseOdbDnsZone#project}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-google-beta.googleOracleDatabaseOdbDnsZone.GoogleOracleDatabaseOdbDnsZoneConfig.property.timeouts"></a>

```go
Timeouts GoogleOracleDatabaseOdbDnsZoneTimeouts
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleOracleDatabaseOdbDnsZone.GoogleOracleDatabaseOdbDnsZoneTimeouts">GoogleOracleDatabaseOdbDnsZoneTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_oracle_database_odb_dns_zone#timeouts GoogleOracleDatabaseOdbDnsZone#timeouts}

---

### GoogleOracleDatabaseOdbDnsZoneTimeouts <a name="GoogleOracleDatabaseOdbDnsZoneTimeouts" id="@cdktn/provider-google-beta.googleOracleDatabaseOdbDnsZone.GoogleOracleDatabaseOdbDnsZoneTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleOracleDatabaseOdbDnsZone.GoogleOracleDatabaseOdbDnsZoneTimeouts.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v22/googleoracledatabaseodbdnszone"

&googleoracledatabaseodbdnszone.GoogleOracleDatabaseOdbDnsZoneTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseOdbDnsZone.GoogleOracleDatabaseOdbDnsZoneTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_oracle_database_odb_dns_zone#create GoogleOracleDatabaseOdbDnsZone#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseOdbDnsZone.GoogleOracleDatabaseOdbDnsZoneTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_oracle_database_odb_dns_zone#delete GoogleOracleDatabaseOdbDnsZone#delete}. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseOdbDnsZone.GoogleOracleDatabaseOdbDnsZoneTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_oracle_database_odb_dns_zone#update GoogleOracleDatabaseOdbDnsZone#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-google-beta.googleOracleDatabaseOdbDnsZone.GoogleOracleDatabaseOdbDnsZoneTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_oracle_database_odb_dns_zone#create GoogleOracleDatabaseOdbDnsZone#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-google-beta.googleOracleDatabaseOdbDnsZone.GoogleOracleDatabaseOdbDnsZoneTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_oracle_database_odb_dns_zone#delete GoogleOracleDatabaseOdbDnsZone#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-google-beta.googleOracleDatabaseOdbDnsZone.GoogleOracleDatabaseOdbDnsZoneTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_oracle_database_odb_dns_zone#update GoogleOracleDatabaseOdbDnsZone#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleOracleDatabaseOdbDnsZoneTimeoutsOutputReference <a name="GoogleOracleDatabaseOdbDnsZoneTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleOracleDatabaseOdbDnsZone.GoogleOracleDatabaseOdbDnsZoneTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleOracleDatabaseOdbDnsZone.GoogleOracleDatabaseOdbDnsZoneTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v22/googleoracledatabaseodbdnszone"

googleoracledatabaseodbdnszone.NewGoogleOracleDatabaseOdbDnsZoneTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleOracleDatabaseOdbDnsZoneTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseOdbDnsZone.GoogleOracleDatabaseOdbDnsZoneTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseOdbDnsZone.GoogleOracleDatabaseOdbDnsZoneTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleOracleDatabaseOdbDnsZone.GoogleOracleDatabaseOdbDnsZoneTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseOdbDnsZone.GoogleOracleDatabaseOdbDnsZoneTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseOdbDnsZone.GoogleOracleDatabaseOdbDnsZoneTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseOdbDnsZone.GoogleOracleDatabaseOdbDnsZoneTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseOdbDnsZone.GoogleOracleDatabaseOdbDnsZoneTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseOdbDnsZone.GoogleOracleDatabaseOdbDnsZoneTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseOdbDnsZone.GoogleOracleDatabaseOdbDnsZoneTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseOdbDnsZone.GoogleOracleDatabaseOdbDnsZoneTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseOdbDnsZone.GoogleOracleDatabaseOdbDnsZoneTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseOdbDnsZone.GoogleOracleDatabaseOdbDnsZoneTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseOdbDnsZone.GoogleOracleDatabaseOdbDnsZoneTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseOdbDnsZone.GoogleOracleDatabaseOdbDnsZoneTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseOdbDnsZone.GoogleOracleDatabaseOdbDnsZoneTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseOdbDnsZone.GoogleOracleDatabaseOdbDnsZoneTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseOdbDnsZone.GoogleOracleDatabaseOdbDnsZoneTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseOdbDnsZone.GoogleOracleDatabaseOdbDnsZoneTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseOdbDnsZone.GoogleOracleDatabaseOdbDnsZoneTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseOdbDnsZone.GoogleOracleDatabaseOdbDnsZoneTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleOracleDatabaseOdbDnsZone.GoogleOracleDatabaseOdbDnsZoneTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseOdbDnsZone.GoogleOracleDatabaseOdbDnsZoneTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseOdbDnsZone.GoogleOracleDatabaseOdbDnsZoneTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseOdbDnsZone.GoogleOracleDatabaseOdbDnsZoneTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseOdbDnsZone.GoogleOracleDatabaseOdbDnsZoneTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseOdbDnsZone.GoogleOracleDatabaseOdbDnsZoneTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseOdbDnsZone.GoogleOracleDatabaseOdbDnsZoneTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseOdbDnsZone.GoogleOracleDatabaseOdbDnsZoneTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseOdbDnsZone.GoogleOracleDatabaseOdbDnsZoneTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseOdbDnsZone.GoogleOracleDatabaseOdbDnsZoneTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseOdbDnsZone.GoogleOracleDatabaseOdbDnsZoneTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseOdbDnsZone.GoogleOracleDatabaseOdbDnsZoneTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseOdbDnsZone.GoogleOracleDatabaseOdbDnsZoneTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseOdbDnsZone.GoogleOracleDatabaseOdbDnsZoneTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseOdbDnsZone.GoogleOracleDatabaseOdbDnsZoneTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseOdbDnsZone.GoogleOracleDatabaseOdbDnsZoneTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseOdbDnsZone.GoogleOracleDatabaseOdbDnsZoneTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseOdbDnsZone.GoogleOracleDatabaseOdbDnsZoneTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseOdbDnsZone.GoogleOracleDatabaseOdbDnsZoneTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseOdbDnsZone.GoogleOracleDatabaseOdbDnsZoneTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleOracleDatabaseOdbDnsZone.GoogleOracleDatabaseOdbDnsZoneTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleOracleDatabaseOdbDnsZone.GoogleOracleDatabaseOdbDnsZoneTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleOracleDatabaseOdbDnsZone.GoogleOracleDatabaseOdbDnsZoneTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleOracleDatabaseOdbDnsZone.GoogleOracleDatabaseOdbDnsZoneTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-google-beta.googleOracleDatabaseOdbDnsZone.GoogleOracleDatabaseOdbDnsZoneTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-google-beta.googleOracleDatabaseOdbDnsZone.GoogleOracleDatabaseOdbDnsZoneTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-google-beta.googleOracleDatabaseOdbDnsZone.GoogleOracleDatabaseOdbDnsZoneTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseOdbDnsZone.GoogleOracleDatabaseOdbDnsZoneTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseOdbDnsZone.GoogleOracleDatabaseOdbDnsZoneTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseOdbDnsZone.GoogleOracleDatabaseOdbDnsZoneTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseOdbDnsZone.GoogleOracleDatabaseOdbDnsZoneTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseOdbDnsZone.GoogleOracleDatabaseOdbDnsZoneTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseOdbDnsZone.GoogleOracleDatabaseOdbDnsZoneTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseOdbDnsZone.GoogleOracleDatabaseOdbDnsZoneTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseOdbDnsZone.GoogleOracleDatabaseOdbDnsZoneTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseOdbDnsZone.GoogleOracleDatabaseOdbDnsZoneTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleOracleDatabaseOdbDnsZone.GoogleOracleDatabaseOdbDnsZoneTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleOracleDatabaseOdbDnsZone.GoogleOracleDatabaseOdbDnsZoneTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-google-beta.googleOracleDatabaseOdbDnsZone.GoogleOracleDatabaseOdbDnsZoneTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-google-beta.googleOracleDatabaseOdbDnsZone.GoogleOracleDatabaseOdbDnsZoneTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-google-beta.googleOracleDatabaseOdbDnsZone.GoogleOracleDatabaseOdbDnsZoneTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-google-beta.googleOracleDatabaseOdbDnsZone.GoogleOracleDatabaseOdbDnsZoneTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-google-beta.googleOracleDatabaseOdbDnsZone.GoogleOracleDatabaseOdbDnsZoneTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-google-beta.googleOracleDatabaseOdbDnsZone.GoogleOracleDatabaseOdbDnsZoneTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleOracleDatabaseOdbDnsZone.GoogleOracleDatabaseOdbDnsZoneTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



