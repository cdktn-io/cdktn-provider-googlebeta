# `googleBigqueryDataTransferDataSourceEnrollment` Submodule <a name="`googleBigqueryDataTransferDataSourceEnrollment` Submodule" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleBigqueryDataTransferDataSourceEnrollment <a name="GoogleBigqueryDataTransferDataSourceEnrollment" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_bigquery_data_transfer_data_source_enrollment google_bigquery_data_transfer_data_source_enrollment}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v21/googlebigquerydatatransferdatasourceenrollment"

googlebigquerydatatransferdatasourceenrollment.NewGoogleBigqueryDataTransferDataSourceEnrollment(scope Construct, id *string, config GoogleBigqueryDataTransferDataSourceEnrollmentConfig) GoogleBigqueryDataTransferDataSourceEnrollment
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentConfig">GoogleBigqueryDataTransferDataSourceEnrollmentConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentConfig">GoogleBigqueryDataTransferDataSourceEnrollmentConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.resetDeletionPolicy">ResetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.resetUnenrollLocation">ResetUnenrollLocation</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.putTimeouts"></a>

```go
func PutTimeouts(value GoogleBigqueryDataTransferDataSourceEnrollmentTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentTimeouts">GoogleBigqueryDataTransferDataSourceEnrollmentTimeouts</a>

---

##### `ResetDeletionPolicy` <a name="ResetDeletionPolicy" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.resetDeletionPolicy"></a>

```go
func ResetDeletionPolicy()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.resetId"></a>

```go
func ResetId()
```

##### `ResetProject` <a name="ResetProject" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.resetProject"></a>

```go
func ResetProject()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.resetTimeouts"></a>

```go
func ResetTimeouts()
```

##### `ResetUnenrollLocation` <a name="ResetUnenrollLocation" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.resetUnenrollLocation"></a>

```go
func ResetUnenrollLocation()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a GoogleBigqueryDataTransferDataSourceEnrollment resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v21/googlebigquerydatatransferdatasourceenrollment"

googlebigquerydatatransferdatasourceenrollment.GoogleBigqueryDataTransferDataSourceEnrollment_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v21/googlebigquerydatatransferdatasourceenrollment"

googlebigquerydatatransferdatasourceenrollment.GoogleBigqueryDataTransferDataSourceEnrollment_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v21/googlebigquerydatatransferdatasourceenrollment"

googlebigquerydatatransferdatasourceenrollment.GoogleBigqueryDataTransferDataSourceEnrollment_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v21/googlebigquerydatatransferdatasourceenrollment"

googlebigquerydatatransferdatasourceenrollment.GoogleBigqueryDataTransferDataSourceEnrollment_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a GoogleBigqueryDataTransferDataSourceEnrollment resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the GoogleBigqueryDataTransferDataSourceEnrollment to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing GoogleBigqueryDataTransferDataSourceEnrollment that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_bigquery_data_transfer_data_source_enrollment#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the GoogleBigqueryDataTransferDataSourceEnrollment to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.property.authorizationType">AuthorizationType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.property.clientId">ClientId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.property.dataRefreshType">DataRefreshType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.property.defaultDataRefreshWindowDays">DefaultDataRefreshWindowDays</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.property.defaultSchedule">DefaultSchedule</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.property.helpUrl">HelpUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.property.manualRunsDisabled">ManualRunsDisabled</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.property.minimumScheduleInterval">MinimumScheduleInterval</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.property.parameters">Parameters</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentParametersList">GoogleBigqueryDataTransferDataSourceEnrollmentParametersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.property.scopes">Scopes</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.property.supportsCustomSchedule">SupportsCustomSchedule</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentTimeoutsOutputReference">GoogleBigqueryDataTransferDataSourceEnrollmentTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.property.updateDeadlineSeconds">UpdateDeadlineSeconds</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.property.dataSourceIdInput">DataSourceIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.property.deletionPolicyInput">DeletionPolicyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.property.unenrollLocationInput">UnenrollLocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.property.dataSourceId">DataSourceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.property.deletionPolicy">DeletionPolicy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.property.project">Project</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.property.unenrollLocation">UnenrollLocation</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AuthorizationType`<sup>Required</sup> <a name="AuthorizationType" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.property.authorizationType"></a>

```go
func AuthorizationType() *string
```

- *Type:* *string

---

##### `ClientId`<sup>Required</sup> <a name="ClientId" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.property.clientId"></a>

```go
func ClientId() *string
```

- *Type:* *string

---

##### `DataRefreshType`<sup>Required</sup> <a name="DataRefreshType" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.property.dataRefreshType"></a>

```go
func DataRefreshType() *string
```

- *Type:* *string

---

##### `DefaultDataRefreshWindowDays`<sup>Required</sup> <a name="DefaultDataRefreshWindowDays" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.property.defaultDataRefreshWindowDays"></a>

```go
func DefaultDataRefreshWindowDays() *f64
```

- *Type:* *f64

---

##### `DefaultSchedule`<sup>Required</sup> <a name="DefaultSchedule" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.property.defaultSchedule"></a>

```go
func DefaultSchedule() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `HelpUrl`<sup>Required</sup> <a name="HelpUrl" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.property.helpUrl"></a>

```go
func HelpUrl() *string
```

- *Type:* *string

---

##### `ManualRunsDisabled`<sup>Required</sup> <a name="ManualRunsDisabled" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.property.manualRunsDisabled"></a>

```go
func ManualRunsDisabled() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `MinimumScheduleInterval`<sup>Required</sup> <a name="MinimumScheduleInterval" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.property.minimumScheduleInterval"></a>

```go
func MinimumScheduleInterval() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Parameters`<sup>Required</sup> <a name="Parameters" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.property.parameters"></a>

```go
func Parameters() GoogleBigqueryDataTransferDataSourceEnrollmentParametersList
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentParametersList">GoogleBigqueryDataTransferDataSourceEnrollmentParametersList</a>

---

##### `Scopes`<sup>Required</sup> <a name="Scopes" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.property.scopes"></a>

```go
func Scopes() *[]*string
```

- *Type:* *[]*string

---

##### `SupportsCustomSchedule`<sup>Required</sup> <a name="SupportsCustomSchedule" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.property.supportsCustomSchedule"></a>

```go
func SupportsCustomSchedule() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.property.timeouts"></a>

```go
func Timeouts() GoogleBigqueryDataTransferDataSourceEnrollmentTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentTimeoutsOutputReference">GoogleBigqueryDataTransferDataSourceEnrollmentTimeoutsOutputReference</a>

---

##### `UpdateDeadlineSeconds`<sup>Required</sup> <a name="UpdateDeadlineSeconds" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.property.updateDeadlineSeconds"></a>

```go
func UpdateDeadlineSeconds() *f64
```

- *Type:* *f64

---

##### `DataSourceIdInput`<sup>Optional</sup> <a name="DataSourceIdInput" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.property.dataSourceIdInput"></a>

```go
func DataSourceIdInput() *string
```

- *Type:* *string

---

##### `DeletionPolicyInput`<sup>Optional</sup> <a name="DeletionPolicyInput" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.property.deletionPolicyInput"></a>

```go
func DeletionPolicyInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `UnenrollLocationInput`<sup>Optional</sup> <a name="UnenrollLocationInput" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.property.unenrollLocationInput"></a>

```go
func UnenrollLocationInput() *string
```

- *Type:* *string

---

##### `DataSourceId`<sup>Required</sup> <a name="DataSourceId" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.property.dataSourceId"></a>

```go
func DataSourceId() *string
```

- *Type:* *string

---

##### `DeletionPolicy`<sup>Required</sup> <a name="DeletionPolicy" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.property.deletionPolicy"></a>

```go
func DeletionPolicy() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

##### `UnenrollLocation`<sup>Required</sup> <a name="UnenrollLocation" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.property.unenrollLocation"></a>

```go
func UnenrollLocation() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleBigqueryDataTransferDataSourceEnrollmentConfig <a name="GoogleBigqueryDataTransferDataSourceEnrollmentConfig" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v21/googlebigquerydatatransferdatasourceenrollment"

&googlebigquerydatatransferdatasourceenrollment.GoogleBigqueryDataTransferDataSourceEnrollmentConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	DataSourceId: *string,
	DeletionPolicy: *string,
	Id: *string,
	Project: *string,
	Timeouts: github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v21.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentTimeouts,
	UnenrollLocation: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentConfig.property.dataSourceId">DataSourceId</a></code> | <code>*string</code> | The ID of the data source to enroll. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentConfig.property.deletionPolicy">DeletionPolicy</a></code> | <code>*string</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_bigquery_data_transfer_data_source_enrollment#id GoogleBigqueryDataTransferDataSourceEnrollment#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_bigquery_data_transfer_data_source_enrollment#project GoogleBigqueryDataTransferDataSourceEnrollment#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentTimeouts">GoogleBigqueryDataTransferDataSourceEnrollmentTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentConfig.property.unenrollLocation">UnenrollLocation</a></code> | <code>*string</code> | The location whose 'unenrollDataSources' endpoint is called when this resource is destroyed. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `DataSourceId`<sup>Required</sup> <a name="DataSourceId" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentConfig.property.dataSourceId"></a>

```go
DataSourceId *string
```

- *Type:* *string

The ID of the data source to enroll.

For Google Cloud Carbon Footprint exports this is
'61cede5a-0000-2440-ad42-883d24f8f7b8'. Call 'projects.dataSources.list' to see the data
sources currently enrolled in a project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_bigquery_data_transfer_data_source_enrollment#data_source_id GoogleBigqueryDataTransferDataSourceEnrollment#data_source_id}

---

##### `DeletionPolicy`<sup>Optional</sup> <a name="DeletionPolicy" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_bigquery_data_transfer_data_source_enrollment#deletion_policy GoogleBigqueryDataTransferDataSourceEnrollment#deletion_policy}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_bigquery_data_transfer_data_source_enrollment#id GoogleBigqueryDataTransferDataSourceEnrollment#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_bigquery_data_transfer_data_source_enrollment#project GoogleBigqueryDataTransferDataSourceEnrollment#project}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentConfig.property.timeouts"></a>

```go
Timeouts GoogleBigqueryDataTransferDataSourceEnrollmentTimeouts
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentTimeouts">GoogleBigqueryDataTransferDataSourceEnrollmentTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_bigquery_data_transfer_data_source_enrollment#timeouts GoogleBigqueryDataTransferDataSourceEnrollment#timeouts}

---

##### `UnenrollLocation`<sup>Optional</sup> <a name="UnenrollLocation" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentConfig.property.unenrollLocation"></a>

```go
UnenrollLocation *string
```

- *Type:* *string

The location whose 'unenrollDataSources' endpoint is called when this resource is destroyed.

Enrollment itself is project-wide and unenrolling through any location removes it everywhere;
this only exists because the API offers no project-level unenroll method. Override it only if
'us' is not routable for the project, for example under a data-residency organization policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_bigquery_data_transfer_data_source_enrollment#unenroll_location GoogleBigqueryDataTransferDataSourceEnrollment#unenroll_location}

---

### GoogleBigqueryDataTransferDataSourceEnrollmentParameters <a name="GoogleBigqueryDataTransferDataSourceEnrollmentParameters" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentParameters.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v21/googlebigquerydatatransferdatasourceenrollment"

&googlebigquerydatatransferdatasourceenrollment.GoogleBigqueryDataTransferDataSourceEnrollmentParameters {

}
```


### GoogleBigqueryDataTransferDataSourceEnrollmentTimeouts <a name="GoogleBigqueryDataTransferDataSourceEnrollmentTimeouts" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentTimeouts.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v21/googlebigquerydatatransferdatasourceenrollment"

&googlebigquerydatatransferdatasourceenrollment.GoogleBigqueryDataTransferDataSourceEnrollmentTimeouts {
	Create: *string,
	Delete: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_bigquery_data_transfer_data_source_enrollment#create GoogleBigqueryDataTransferDataSourceEnrollment#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_bigquery_data_transfer_data_source_enrollment#delete GoogleBigqueryDataTransferDataSourceEnrollment#delete}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_bigquery_data_transfer_data_source_enrollment#create GoogleBigqueryDataTransferDataSourceEnrollment#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_bigquery_data_transfer_data_source_enrollment#delete GoogleBigqueryDataTransferDataSourceEnrollment#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleBigqueryDataTransferDataSourceEnrollmentParametersList <a name="GoogleBigqueryDataTransferDataSourceEnrollmentParametersList" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentParametersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentParametersList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v21/googlebigquerydatatransferdatasourceenrollment"

googlebigquerydatatransferdatasourceenrollment.NewGoogleBigqueryDataTransferDataSourceEnrollmentParametersList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GoogleBigqueryDataTransferDataSourceEnrollmentParametersList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentParametersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentParametersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentParametersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentParametersList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentParametersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentParametersList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentParametersList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentParametersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentParametersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentParametersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentParametersList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentParametersList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentParametersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentParametersList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentParametersList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentParametersList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentParametersList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentParametersList.get"></a>

```go
func Get(index *f64) GoogleBigqueryDataTransferDataSourceEnrollmentParametersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentParametersList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentParametersList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentParametersList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentParametersList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentParametersList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### GoogleBigqueryDataTransferDataSourceEnrollmentParametersOutputReference <a name="GoogleBigqueryDataTransferDataSourceEnrollmentParametersOutputReference" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentParametersOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v21/googlebigquerydatatransferdatasourceenrollment"

googlebigquerydatatransferdatasourceenrollment.NewGoogleBigqueryDataTransferDataSourceEnrollmentParametersOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GoogleBigqueryDataTransferDataSourceEnrollmentParametersOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentParametersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentParametersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentParametersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentParametersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentParametersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentParametersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentParametersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentParametersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentParametersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentParametersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentParametersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentParametersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentParametersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentParametersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentParametersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentParametersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentParametersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentParametersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentParametersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentParametersOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentParametersOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentParametersOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentParametersOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentParametersOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentParametersOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentParametersOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentParametersOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentParametersOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentParametersOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentParametersOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentParametersOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentParametersOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentParametersOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentParametersOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentParametersOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentParametersOutputReference.property.allowedValues">AllowedValues</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentParametersOutputReference.property.deprecated">Deprecated</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentParametersOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentParametersOutputReference.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentParametersOutputReference.property.immutable">Immutable</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentParametersOutputReference.property.maxListSize">MaxListSize</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentParametersOutputReference.property.maxValue">MaxValue</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentParametersOutputReference.property.minValue">MinValue</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentParametersOutputReference.property.paramId">ParamId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentParametersOutputReference.property.required">Required</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentParametersOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentParametersOutputReference.property.validationDescription">ValidationDescription</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentParametersOutputReference.property.validationHelpUrl">ValidationHelpUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentParametersOutputReference.property.validationRegex">ValidationRegex</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentParametersOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentParameters">GoogleBigqueryDataTransferDataSourceEnrollmentParameters</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentParametersOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentParametersOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AllowedValues`<sup>Required</sup> <a name="AllowedValues" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentParametersOutputReference.property.allowedValues"></a>

```go
func AllowedValues() *[]*string
```

- *Type:* *[]*string

---

##### `Deprecated`<sup>Required</sup> <a name="Deprecated" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentParametersOutputReference.property.deprecated"></a>

```go
func Deprecated() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentParametersOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentParametersOutputReference.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `Immutable`<sup>Required</sup> <a name="Immutable" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentParametersOutputReference.property.immutable"></a>

```go
func Immutable() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `MaxListSize`<sup>Required</sup> <a name="MaxListSize" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentParametersOutputReference.property.maxListSize"></a>

```go
func MaxListSize() *f64
```

- *Type:* *f64

---

##### `MaxValue`<sup>Required</sup> <a name="MaxValue" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentParametersOutputReference.property.maxValue"></a>

```go
func MaxValue() *f64
```

- *Type:* *f64

---

##### `MinValue`<sup>Required</sup> <a name="MinValue" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentParametersOutputReference.property.minValue"></a>

```go
func MinValue() *f64
```

- *Type:* *f64

---

##### `ParamId`<sup>Required</sup> <a name="ParamId" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentParametersOutputReference.property.paramId"></a>

```go
func ParamId() *string
```

- *Type:* *string

---

##### `Required`<sup>Required</sup> <a name="Required" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentParametersOutputReference.property.required"></a>

```go
func Required() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentParametersOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `ValidationDescription`<sup>Required</sup> <a name="ValidationDescription" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentParametersOutputReference.property.validationDescription"></a>

```go
func ValidationDescription() *string
```

- *Type:* *string

---

##### `ValidationHelpUrl`<sup>Required</sup> <a name="ValidationHelpUrl" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentParametersOutputReference.property.validationHelpUrl"></a>

```go
func ValidationHelpUrl() *string
```

- *Type:* *string

---

##### `ValidationRegex`<sup>Required</sup> <a name="ValidationRegex" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentParametersOutputReference.property.validationRegex"></a>

```go
func ValidationRegex() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentParametersOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleBigqueryDataTransferDataSourceEnrollmentParameters
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentParameters">GoogleBigqueryDataTransferDataSourceEnrollmentParameters</a>

---


### GoogleBigqueryDataTransferDataSourceEnrollmentTimeoutsOutputReference <a name="GoogleBigqueryDataTransferDataSourceEnrollmentTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v21/googlebigquerydatatransferdatasourceenrollment"

googlebigquerydatatransferdatasourceenrollment.NewGoogleBigqueryDataTransferDataSourceEnrollmentTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleBigqueryDataTransferDataSourceEnrollmentTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



